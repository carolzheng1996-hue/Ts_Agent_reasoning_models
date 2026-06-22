# 《GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis》中文文献解读

论文：*GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis*，arXiv:2606.05860  
方法名：**GenAutoML**  
本地 TeX 源码目录：[GenAutoML_An_Agentic_Framework_for_Dynamic_Architecture_Generation_and_Optimization_in_Time_Series_Analysis](GenAutoML_An_Agentic_Framework_for_Dynamic_Architecture_Generation_and_Optimization_in_Time_Series_Analysis/)

## 1. 一句话总结

GenAutoML 把时间序列模型设计从传统 AutoML/NAS 的“固定搜索空间里选结构”，改成 LLM agent 直接生成 PyTorch 架构代码，再用 sandbox forward pass 自动修错、JIT loader 注入 Optuna 搜索、Dyn-RevIN 做数值稳定保护。它的目标不是训练一个更大的 TSFM，而是自动合成轻量、可部署、低延迟的时间序列预测/异常检测模型。

可以写成：

$$
\text{GenAutoML}
=
\text{LLM neural architect}
+ \text{sandboxed reflection}
+ \text{JIT runtime injection}
+ \text{Dyn-RevIN guardrail}
+ \text{Optuna dynamic search}.
$$

这篇论文的贡献偏工程系统：它证明 LLM 不只能调超参，还可以在受约束的运行时里生成、调试、注册和优化新的神经网络拓扑。

## 2. 背景：传统 AutoML/NAS 的限制

传统 AutoML 和 NAS 通常先定义一个静态搜索空间，例如卷积层数、hidden size、kernel size、attention head 数量，然后用搜索算法在空间里试组合。这种方法的问题是：

1. 搜索空间由人定义，新的 inductive bias 很难凭空出现。
2. 时间序列数据强烈非平稳，不同数据集需要不同结构偏置。
3. Foundation models 虽然强，但参数量大、延迟高，不适合 edge/industrial IoT。
4. LLM 零样本生成代码常会出现 shape mismatch、forward signature 不匹配、维度投影错误。

GenAutoML 的思路是把 LLM 放到一个受控工程环境中，让它担任 **Neural Architect**，但不信任它生成的代码。所有生成模型必须通过几层约束和验证，才能进入训练和超参优化。

## 3. 总体流程

GenAutoML 的工作流可以拆成六步：

1. 用户上传 multivariate time series 数据。
2. LangChain/Pandas DataFrame agent 做 EDA、统计分析和可视化。
3. 用户提出架构需求，例如 “Design a Lightweight Inception model”。
4. LLM 生成 `torch.nn.Module` 代码。
5. Sandboxed Reflection Loop 用 dummy tensor 执行 forward pass，捕获 traceback 并让 LLM 修复。
6. 通过验证的模型写入 dynamic registry，再由 JIT loader 加入 Optuna 搜索空间，与 DLinear、TCN、TimesNet 等 baseline 在同一训练管线中比较。

它和一般 LLM code generation 的关键差异是：生成代码不是最终产物，**可执行验证和训练反馈**才决定模型是否被接纳。

## 4. Structural Geometric Contract

为了让 LLM 生成的任意结构能接入统一训练管线，论文定义了几何契约。

输入必须是：

$$
X\in\mathbb{R}^{B\times L\times D},
$$

其中 $B$ 是 batch size，$L$ 是 lookback length，$D$ 是特征维度。

输出必须是：

$$
Y\in\mathbb{R}^{B\times H\times D},
$$

其中 $H$ 是 forecasting horizon。

因此任意生成模型都要满足：

$$
\mathcal{M}_{gen}:
\mathbb{R}^{B\times L\times D}
\rightarrow
\mathbb{R}^{B\times H\times D}.
$$

这条 contract 很重要。没有它，LLM 可以生成看似合理但无法进入统一 forecasting/anomaly detection pipeline 的代码，例如输出 `[B, H]`、`[B, D, H]` 或 hidden representation 而不是预测张量。

## 5. Sandboxed Reflection Loop

LLM 生成模型后，GenAutoML 不直接训练，而是在 sandbox 中执行：

$$
X_{\text{dummy}}\in\mathbb{R}^{B\times L\times D}.
$$

系统实例化 $\mathcal{M}_{gen}$，运行：

$$
\tilde{Y}=\mathcal{M}_{gen}(X_{\text{dummy}}),
$$

并断言：

$$
\operatorname{shape}(\tilde{Y})=(B,H,D).
$$

如果出现 Python traceback、channel mismatch、reshape 错误、linear input features 不匹配、forward 参数不一致，系统把错误信息回填给 LLM，要求它修复代码。这个循环持续到模型通过验证或达到最大迭代次数。

直观伪代码：

```text
for r in 1..R:
    code = LLM(prompt, previous_error)
    model = instantiate(code)
    try:
        y = model(x_dummy)
        assert shape(y) == (B, H, D)
        register(code)
        break
    except Exception as e:
        previous_error = traceback(e)
```

论文的 failure analysis 提到，WaveInterferenceNet 曾出现 Hadamard product broadcasting 错误：latent temporal tensor 为 `[B, 96, D]`，phase matrix 被错误转置成 `[D, 96]`；系统通过 traceback 引导 LLM 加入 permutation/projection 修复。ResNetBlock 也需要多轮修复 1D convolution channel matching 和 residual skip connection。

## 6. JIT Dynamic Loader 与 runtime injection

通过 sandbox 的代码会被写入 dynamic registry。训练管线随后通过 JIT loader：

1. 用 AST 解析新代码；
2. 用 `inspect` 查找继承自 `torch.nn.Module` 的类；
3. 用 `importlib.reload` 热更新模块缓存；
4. 把新架构注册为 Optuna 搜索空间里的候选模型。

这样可以做到 hot-swapping：系统不需要重启训练服务，就能把 LLM 新生成的模型放进同一个 optimization loop。

这一步是 GenAutoML 区别于“让 LLM 输出一段模型代码”的核心工程点。LLM 生成的架构不是孤立 demo，而是被动态加入一个活跃 AutoML runtime。

## 7. Signature-Aware Invocation 与 Shape-Agnostic Projection

LLM 生成的 `forward` 函数签名可能不标准，例如需要额外参数或返回 latent feature。GenAutoML 用 runtime introspection 匹配输入张量到 forward 的位置参数，并在初次调用失败时采用 fallback。

另一个问题是输出 hidden channel 不等于目标维度 $D$。因此论文加入 shape-agnostic projection：

$$
\hat{Y}
=
W_{\mathrm{proj}}\cdot \mathcal{M}_{gen}(\hat{X})
+ b_{\mathrm{proj}}.
$$

这里 $\mathcal{M}_{gen}(\hat{X})$ 可以被看作 LLM 生成结构产生的 latent representation，$W_{\mathrm{proj}}$ 和 $b_{\mathrm{proj}}$ 把它投影到目标预测空间。这样系统不必因为最后一层维度不完美就丢弃一个可能有用的 feature extractor。

## 8. Dyn-RevIN：给不可信架构加数值安全壳

LLM 生成的模型常缺少合适归一化，面对 ETTh1/ETTm1 这类非平稳工业序列容易梯度爆炸。GenAutoML 用 Dynamic Reversible Instance Normalization 包裹任何生成架构。

给定输入：

$$
X\in\mathbb{R}^{B\times L\times D},
$$

对每个 batch instance $i$ 和 feature $j$，沿时间维计算：

$$
\mu_{i,j}
=
\frac{1}{L}\sum_{k=1}^{L}X_{i,k,j},
\qquad
\sigma_{i,j}^2
=
\frac{1}{L}\sum_{k=1}^{L}
(X_{i,k,j}-\mu_{i,j})^2.
$$

先归一化：

$$
\hat{X}_{i,k,j}
=
\frac{X_{i,k,j}-\mu_{i,j}}
{\sqrt{\sigma_{i,j}^2+\epsilon}}.
$$

生成模型只在归一化流形上工作：

$$
\hat{Y}
=
\mathcal{M}_{gen}(\hat{X}).
$$

最后反归一化：

$$
Y_{i,k,j}
=
\hat{Y}_{i,k,j}
\cdot
\sqrt{\sigma_{i,j}^2+\epsilon}
+\mu_{i,j}.
$$

这个 wrapper 的意义不是提出新的 normalization，而是给 LLM 生成的不可信结构套一个统计稳定边界：结构负责表达，Dyn-RevIN 负责把输入/输出约束在合理尺度。

## 9. Hybrid Search Strategy

GenAutoML 的搜索空间是静态模型与动态生成模型的并集：

$$
S=S_{\mathrm{static}}\cup S_{\mathrm{dynamic}}.
$$

其中 $S_{\mathrm{static}}$ 包含 DLinear、TCN、TimesNet、CrossFormer、iTransformer 等 baseline，$S_{\mathrm{dynamic}}$ 包含 LLM 生成并通过 sandbox 的模型，例如 ResNetBlockModel、LightweightInception、BiGRU、WaveInterferenceNet。

Optuna RandomSampler 从这个统一 categorical distribution 中采样。论文强调不把 micro-search 和 macro-search 分开，而是把“选择哪种模型拓扑”本身作为一个 categorical hyperparameter：

$$
a \sim \operatorname{Categorical}(S_{\mathrm{static}}\cup S_{\mathrm{dynamic}}).
$$

不稳定或低性能的 hallucinated architectures 会在验证损失上被淘汰；高性能生成结构则会进入最终模型选择。

## 10. 实验设置

数据集：

| 数据集 | 特点 |
|---|---|
| ETTh1 | 小时级电力变压器温度，非平稳，工业场景 |
| ETTm1 | 15 分钟级电力数据，高频相位偏移 |
| Weather | 10 分钟级天气，多变量、周期性更稳定 |

任务设置：

| 任务 | Lookback | Horizon | 目标 |
|---|---:|---:|---|
| Forecasting | 96 | 96 | 预测未来多变量序列 |
| Anomaly Detection | 60 | 10 | 自编码重构，比较 clean/anomalous MSE |

训练设置：

| 项目 | 设置 |
|---|---|
| Optimizer | Adam |
| Weight decay | $10^{-6}$ |
| Initial LR | $10^{-3}$ |
| Scheduler | ReduceLROnPlateau, factor 0.5, patience 3 |
| Batch size | 64 |
| Early stopping | validation loss 5 epochs 无改善 |
| Forecasting objective | MAE |
| Autoencoder objective | MSE |

## 11. Forecasting 结果

统一 long-sequence 预测设置下：

| Model | ETTh1 MAE | ETTm1 MAE | Weather MAE |
|---|---:|---:|---:|
| Chronos-T5-Mini | **0.166** | - | - |
| DLinear | 0.989 | **0.515** | **1.783** |
| CrossFormer | 1.056 | 0.521 | 5.210 |
| TimesNet | 1.354 | 0.862 | 4.886 |
| LSTM | 3.075 | 1.054 | 7.084 |
| Synthesized ResNet | 1.156 | 0.532 | 2.696 |
| Synthesized Inception | 1.280 | 0.546 | 2.811 |
| Synthesized BiGRU | 1.307 | 0.585 | 3.556 |

结果需要谨慎理解：GenAutoML 生成模型没有全面超过 DLinear 或 Chronos。论文真正想证明的是，LLM 生成结构能在统一管线中稳定运行，并在部分数据/任务上接近强 baseline，同时保持轻量和低延迟。

例如 ETTm1 上 synthesized ResNet 的 MAE 为 0.532，接近 DLinear 的 0.515，并优于 TimesNet 的 0.862。Weather 上 synthesized ResNet/Inception 明显优于 CrossFormer 和 TimesNet，但仍不如 DLinear。

## 12. Anomaly Detection 结果

异常检测用 discrimination gap：

$$
\mathrm{Gap}
=
\frac{\mathrm{MSE}_{\mathrm{anomalous}}}
{\mathrm{MSE}_{\mathrm{clean}}}.
$$

gap 越大，说明正常数据重构误差低、异常数据重构误差高，异常更容易分离。

| Model | ETTh1 Gap | ETTm1 Gap | Weather Gap |
|---|---:|---:|---:|
| TimesNet | $\sim 33$x | $\sim 29000$x | $\sim 5000$x |
| TCN | $\sim 1100$x | $\sim 3100$x | $\sim 1800$x |
| DLinear | $\sim 8$x | $\sim 140$x | $\sim 22$x |
| Synthesized ResNetBlock | $\sim 270$x | $\sim 430$x | $\sim 920$x |
| Synthesized MultiScaleCNN | $\sim 85$x | $\sim 900$x | $\sim 550$x |
| Synthesized BiGRU | $\sim 1.8$x | $\sim 1200$x | $\sim 478$x |

这里的结论同样不是“生成模型全面第一”。TimesNet 在 ETTm1/Weather 的 gap 极高，但 ResNetBlock 在 ETTh1 上明显强于 TimesNet 和 DLinear。更重要的是，不同生成结构适合不同任务：BiGRU 可做预测，但 ETTh1 异常检测 gap 很弱；ResNetBlock 适合重构型异常检测，但不是最强预测器。

## 13. WaveInterferenceNet 案例

论文用一个 steerable synthesis case study 测试 LLM 是否能跳出常见 ResNet/LSTM/Inception 模板。作者要求 agent 基于“波干涉”物理类比设计架构，生成 WaveInterferenceNet，包含 trigonometric projections 和 Hadamard product mixing。

在 ETTh1 上：

| 指标 | WaveInterferenceNet |
|---|---:|
| Forecasting MAE | 1.137 |
| Forecasting RMSE | 1.463 |
| Clean MSE | 0.001409 |
| Anomaly MSE | 0.055843 |
| Parameters | 829K |
| Inference latency | $<0.01$ ms |

效率对照：

| 模型 | Search Time | Inference | Params |
|---|---:|---:|---:|
| DLinear | 2m07s | $<0.01$ ms | 52K |
| Chronos-T5-Mini | zero-shot | 987.93 ms | 20M |
| WaveInterferenceNet | 2m01s | $<0.01$ ms | 829K |

这个案例的价值在于展示“可控生成”：通过 prompt 施加低延迟、物理类比、形状约束，LLM 能生成一个非标准但可执行的架构，并通过 reflection loop 修复维度错误。

## 14. Dyn-RevIN 消融

Dyn-RevIN 不是总是有益，论文的 ablation 反而说明它应由动态搜索决定是否启用。

| Dataset | With Dyn-RevIN Forecast MAE | Without Dyn-RevIN Forecast MAE | With Dyn-RevIN AD Gap | Without Dyn-RevIN AD Gap |
|---|---:|---:|---:|---:|
| ETTh1 | **1.251** | 2.435 | **$\sim 265.6$x** | $\sim 52.5$x |
| ETTm1 | **0.455** | 2.541 | **$\sim 431.1$x** | $\sim 344.8$x |
| Weather | 3.787 | **1.426** | $\sim 921.4$x | **$\sim 1146.7$x** |

解释：

- ETTh1/ETTm1 非平稳强，RevIN 显著稳定训练；
- Weather 周期和物理尺度更稳定，实例级归一化可能抹掉有用的绝对幅值信息；
- 因此 normalization 本身也应进入 AutoML 决策，而不是固定打开。

## 15. Agent 视角拆解

| 要素 | GenAutoML 中的对应 |
|---|---|
| State / workspace | 用户上传数据、EDA 统计、任务设定、动态模型 registry |
| Policy / agent | LLM neural architect + Pandas DataFrame agent |
| Action space | 生成 PyTorch 代码、修复代码、注册模型、触发 Optuna 搜索 |
| Tool space | Python execution、dummy forward validation、AST parsing、JIT loader、Optuna |
| Feedback | Python traceback、shape assertion、validation loss |
| Memory / registry | $S_{\mathrm{dynamic}}$ 中已通过验证的模型类 |
| Optimization | Adam 训练 + Optuna 选择静态/动态架构与超参 |
| Evaluation | Forecasting MAE/RMSE；Anomaly clean/anom MSE 和 discrimination gap |

这比普通 AutoML 更 agentic，因为搜索空间不是预先写死，而是由 LLM 在运行过程中扩展；但它也比开放式代码 agent 更受控，因为所有模型必须通过几何契约和 sandbox。

## 16. 贡献、局限与启示

贡献：

1. 提出从自然语言约束到 PyTorch 架构代码的 agentic neural synthesis 管线。
2. 用 Sandboxed Reflection Loop 把 LLM 代码生成接入可执行验证。
3. 用 JIT dynamic loader 把生成模型热插入 Optuna 搜索空间。
4. 用 Dyn-RevIN 为不可信生成架构提供数值稳定保护。
5. 在 forecasting、anomaly detection 和低延迟 case study 中展示生成模型的可用性。

局限：

- 论文实验规模仍较小，主要是 ETTh1、ETTm1、Weather；
- 生成模型并未全面超过强基线，尤其 DLinear 在预测上仍很强；
- 依赖 LLM API，架构生成有 30-60s 级别额外延迟；
- LLM 生成结构的理论可解释性有限；
- 当前主要支持数值时间序列，尚未充分利用维护日志、天气报告等多模态上下文。

实践启示：

GenAutoML 最有价值的地方不是“让 LLM 一次写出最强模型”，而是构建了一个可控闭环：LLM 负责提出结构假设，sandbox 负责执行验证，Optuna 负责淘汰坏结构，Dyn-RevIN 负责数值稳定。这个模式比纯 prompt 生成代码更接近可落地的 agentic AutoML。

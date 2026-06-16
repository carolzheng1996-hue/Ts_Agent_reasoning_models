# 《KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning》中文文献解读

论文：*KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning*，arXiv:2605.30002  
方法名：**KairosAgent**  
数据/训练语料：**T-STAR**  
本地 TeX 源码目录：[KairosAgent_Agentic_Time_Series_Forecasting_with_Fused_Semantic_Reasoning](KairosAgent_Agentic_Time_Series_Forecasting_with_Fused_Semantic_Reasoning/)

## 1. 一句话总结

KairosAgent 把时间序列 forecasting 拆成“先用 LLM agent 做工具增强的未来形态推理，再把推理文本作为 semantic prior 融入 TSFM 隐空间”。它不是让 LLM 直接输出数值预测，而是让 LLM 生成 qualitative morphology description，再由 Kairos 这类原生时间序列模型输出数值预测。

核心公式是：

$$
r=\pi_{\mathrm{reason}}(\mathbf{X},c,\mathcal{T}),
\qquad
\hat{\mathbf{Y}}=f_{\mathrm{forecast}}(\mathbf{X},r).
$$

其中 $\mathbf{X}$ 是历史数值序列，$c$ 是文本上下文，$\mathcal{T}$ 是时间序列分析工具集，$r$ 是未来形态描述，$\hat{\mathbf{Y}}$ 是最终数值预测。

## 2. 动机：LLM 和 TSFM 各自缺什么

跨领域多模态时间序列预测有两个信息源：

- 数值历史：趋势、周期、波动、突变、异常；
- 文本语义：领域背景、事件解释、元数据、可能的未来驱动因素。

纯 LLM 方案的问题是数值理解弱，容易把长序列序列化成文本后产生 numerical hallucination。纯 TSFM 的问题是保留了数值模态，但往往缺乏语义理解，也无法把文本中的未来线索转成可解释的预测依据。

已有 agentic forecasting 系统常见两种不足：

1. LLM agent 直接输出数值预测，定量精度不稳定；
2. LLM 只做外部解释，最终 forecasting backbone 没真正使用语义推理结果。

KairosAgent 的设计是折中：LLM 只负责“推理未来形态”，不负责点值；TSFM 负责数值预测，但必须通过 cross-modal fusion 使用 LLM 推理出的 morphology prior。

## 3. 任务定义

时间序列推理任务：

$$
r=\pi_{\mathrm{reason}}(\mathbf{X},c),
$$

其中 $r$ 是自然语言解释，描述趋势、周期、波动和未来可能形态。

时间序列预测任务：

$$
\hat{\mathbf{Y}}
=
(\hat{y}_{L+1},\dots,\hat{y}_{L+H})
\in\mathbb{R}^{H}.
$$

KairosAgent 把两者统一为 reason-then-forecast：

$$
r=\pi_{\mathrm{reason}}(\mathbf{X},c,\mathcal{T}),
\qquad
\hat{\mathbf{Y}}
=
f_{\mathrm{forecast}}(\mathbf{X},r).
$$

这里 $r$ 是中间语义先验，不要求包含具体未来数值，甚至刻意避免 exact numbers。它描述的是 morphology：未来可能上升/下降、是否周期延续、波动是否扩大、是否可能 regime shift、短期/长期形态如何不同。

## 4. Stage I：工具增强形态推理

LLM reasoner $\pi_{\mathrm{reason}}$ 可以多轮调用工具 $\mathcal{T}$。每轮要么调用工具并接收 observation，要么输出最终 morphology description。

工具共 23 个，来自 tsfresh，覆盖七类：

| 类别 | 工具示例 | 用途 |
|---|---|---|
| Trend | `linear_trend` | 回归斜率、p-value、r-value |
| Volatility | `standard_deviation`, `mean_abs_change`, `ratio_beyond_r_sigma` | 波动强度和异常波动 |
| Distribution | `quantile`, `change_quantiles` | 分布位置和分位区间变化 |
| Periodicity | `autocorrelation`, `agg_autocorrelation` | 周期性和滞后相关 |
| Extrema | `number_peaks`, `first_location_of_maximum`, `longest_strike_above_mean` | 峰谷和局部结构 |
| Frequency | `fft_coefficient`, `spkt_welch_density`, `fourier_entropy` | 频域结构 |
| Dynamics | `augmented_dickey_fuller`, `cid_ce` | 平稳性和复杂度 |

典型工具公式例子：

$$
\texttt{mean\_abs\_change}
=
\frac{1}{n-1}
\sum_{i=1}^{n-1}|x_{i+1}-x_i|.
$$

自相关工具：

$$
R(l)
=
\frac{1}{(n-l)\sigma^2}
\sum_{t=1}^{n-l}
(X_t-\mu)(X_{t+l}-\mu).
$$

CID complexity：

$$
\mathrm{cid\_ce}
=
\sqrt{\sum_{i=1}^{n-1}(x_i-x_{i-1})^2}.
$$

这些工具让 LLM 不必凭文本化序列“目测”趋势和周期，而是基于定量 evidence 生成语义判断。

## 5. Stage II：Morphology-conditioned forecasting

KairosAgent 的 forecaster 基于 Kairos TSFM。它保留 Kairos 的 encoder-decoder backbone 和 prediction head，新增 text adapter 和 gated cross-modal fusion。

### 5.1 Semantic prior encoding

先用 text encoder 编码 morphology description：

$$
\boldsymbol{E}_r
=
\mathrm{Proj}(\mathrm{TextEnc}(r))
\in\mathbb{R}^{M\times D_h}.
$$

$M$ 是文本 token 长度，$D_h$ 是 Kairos hidden dimension。`Proj` 是 MLP，把文本 embedding 投影到 TSFM hidden space。

### 5.2 Gated cross-modal fusion

在 Kairos decoder 的每一层 $l$，用 cross-attention 把 $\boldsymbol{E}_r$ 融入时间序列 hidden states：

$$
\boldsymbol{H}^{(l)}
\leftarrow
\mathrm{LN}
\left(
\boldsymbol{H}^{(l)}
+
\sigma(\boldsymbol{g}^{(l)})
\odot
\mathrm{CA}
(\boldsymbol{H}^{(l)},\boldsymbol{E}_r)
\right).
$$

各符号含义：

- $\boldsymbol{H}^{(l)}$：第 $l$ 层 decoder hidden states；
- $\mathrm{CA}$：cross-attention，query 来自时间序列 hidden，key/value 来自文本先验；
- $\boldsymbol{g}^{(l)}\in\mathbb{R}^{D_h}$：可学习 gate；
- $\sigma$：sigmoid，把 gate 约束到 0-1；
- $\odot$：逐维乘法；
- $\mathrm{LN}$：layer normalization。

这个公式的直觉是：semantic prior 不应强行覆盖 TSFM 的数值表示，而应该由 gate 控制每层、每个 hidden dimension 注入多少文本信息。论文初始化 gate 为 $-2.197$，因此：

$$
\sigma(-2.197)\approx 0.1.
$$

这意味着训练初期只注入少量语义信息，避免破坏 Kairos 预训练预测能力；随着训练，gate 可以逐步打开。

## 6. Stage III：三阶段训练

KairosAgent 训练分三步：

| 阶段 | 训练对象 | 目标 |
|---|---|---|
| Stage I SFT | LLM reasoner | 学会工具调用、参数生成和 morphology synthesis |
| Stage II multimodal alignment | TSFM + text encoder + fusion modules | 学会把 $r$ 当 semantic prior 用于数值预测 |
| Stage III RL | LLM reasoner | 用 forecasting reward 优化工具调用和推理过程 |

### 6.1 SFT

T-STAR 轨迹被格式化为多轮 chat，包括 system prompt、user query、tool calls、tool observations、最终 morphology description。SFT 用标准 next-token prediction objective，监督 assistant 侧所有 token，包括中间工具调用。

### 6.2 Quantile pinball loss

Stage II 用 quantile pinball loss：

$$
\ell_q(y,\hat{y}_q)
=
2\left|
(y-\hat{y}_q)
(\mathbb{I}[y\leq \hat{y}_q]-q)
\right|.
$$

$q$ 是 quantile level，$\hat{y}_q$ 是对应分位预测。这个 loss 让 forecaster 输出概率分位，而不只是点预测。

完整 loss 先对目标值做基于 history statistics 的标准化。对第 $k$ 个 horizon-specific prediction head：

$$
\mathcal{L}_k
=
\frac{1}{B}
\sum_{b=1}^{B}
\sum_{t=1}^{H_k}
\omega_t
\frac{1}{|\mathcal{Q}|}
\sum_{q\in\mathcal{Q}}
\ell_q(\tilde{y}_{b,t},\hat{y}_{b,k,q,t}).
$$

时间权重为 log-decay：

$$
\omega_t
=
\frac{1}{H_k}(\log H_k-\log t).
$$

这会更强调近端 forecast step，同时保留长 horizon 监督。最终目标对所有 horizon-specific heads 平均：

$$
\mathcal{L}_{\mathrm{q}}(\mathbf{X},r;\mathbf{Y})
=
\frac{1}{K}
\sum_{k=1}^{K}\mathcal{L}_k.
$$

## 7. Turn-level GRPO：把 reward 分给具体工具调用

普通 outcome-only RL 只在整条 trajectory 结束后给一个 reward，很难判断哪次工具调用有用。KairosAgent 设计 turn-level credit assignment。

给定 $N$ 轮 trajectory，先生成一个不调用工具的 baseline morphology：

$$
r^0.
$$

第 $i$ 轮之后生成当前 morphology：

$$
r^i,\qquad i=1,\dots,N.
$$

用冻结的 Stage II forecaster 打分：

$$
S^i
=
-\mathcal{L}_{\mathrm{q}}(\mathbf{X},r^i;\mathbf{Y}).
$$

分数越高，表示预测 loss 越低。第 $i$ 轮的边际收益：

$$
\Delta^i
=
S^i-S^{i-1}.
$$

turn-level return 是未来改进的折扣和：

$$
R^i
=
\sum_{j=i}^{N}
\gamma^{j-i}\Delta^j.
$$

对每个 prompt 采样 $G$ 条 trajectories，做 group normalization：

$$
\hat{A}_g^i
=
\frac{R_g^i-\mu(\{R\})}
{\sigma(\{R\})}.
$$

然后把 $\hat{A}^i$ 分配给第 $i$ 轮生成的 token 集合 $s^i$，用 GRPO 优化：

$$
\mathcal{L}_{\mathrm{GRPO}}
=
\mathbb{E}_{g,i}
\left[
\min
\left(
\rho_g^t\hat{A}_g^i,
\operatorname{clip}(\rho_g^t,1\pm\epsilon)\hat{A}_g^i
\right)
-
\beta
D_{\mathrm{KL}}
(\pi_{\mathrm{reason}}\|\pi_{\mathrm{ref}})
\right].
$$

其中：

$$
\rho_g^t
=
\frac{
\pi_{\mathrm{reason}}(s_g^t\mid s_g^{<t})
}{
\pi_{\mathrm{old}}(s_g^t\mid s_g^{<t})
}.
$$

这个设计的核心是把“这次工具调用是否降低了最终 forecasting loss”转成 token-level advantage，而不是把所有工具调用混在同一个终局 reward 里。

## 8. T-STAR 数据集

T-STAR 是一个 40K+ tool-augmented reasoning trajectory corpus，来自 29 个数据集、9 个领域。每个样本不是简单的 history/future pair，而是完整的工具调用轨迹、工具返回、morphology forecast。

窗口构造：

| 项目 | 设置 |
|---|---:|
| History length | $L=2048$ |
| Short-term horizon | $H_s=96$ |
| Long-term horizon | $H_l=720$ |
| Default stride | 512 |
| Budget cap | 5000 windows |
| Minimum budget | 500 windows |
| Metadata masking | 30% samples |

窗口采样逻辑：

1. 太短且不足 $H_s+H_l$ 的序列跳过；
2. 若不足 $L+H_l$，用最大可用 history 抽一个窗口；
3. 否则按 stride 生成 sliding windows；
4. 若总窗口数超过预算，按 $\sqrt{s_i}$ 给每条序列分配采样预算；
5. 若窗口太少，用更小 stride 重新生成。

轨迹生成由 Kimi-K2.5 作为 tool-calling agent 完成，最多 8 轮、每轮最多 3 个并行工具调用。质量控制由 GPT-5.2 judge 依次检查：

- metadata leak：最终 forecast 不得泄漏 exact numbers、timestamp、dataset name、unit 等；
- reasoning usage：推理是否真正使用工具输出和 metadata；
- forecast accuracy：未来形态描述是否与 held-out future 的趋势、周期、波动和转折大体一致。

## 9. 实验与主要结论

评测包括两部分：

| 评测 | 数据集 | 指标 |
|---|---|---|
| morphology reasoning | Time-MMD | LLM-as-judge 判断未来形态推理质量 |
| zero-shot forecasting | Time-MMD、Time-IMM | MSE、MAE、MASE |

论文主文给出的核心结论：

1. KairosAgent-4B 在 morphology reasoning 上超过同规模 baseline，说明工具增强推理比单纯增大模型更有效。
2. 在 Time-MMD 和 Time-IMM 上，KairosAgent 的 zero-shot forecasting 优于 zero-shot TSFMs，并能超过部分 full-shot baseline。
3. turn-level RL 优于 SFT-only 和 outcome-only RL；outcome-level RL 甚至可能退化，因为稀疏 reward 无法区分有用工具调用和冗余调用。
4. 去掉 morphology prior 会显著降低 Time-IMM 预测性能，证明语义先验不是只提供解释，而是被 forecaster 使用了。
5. agent 学到的数据依赖工具策略：前几轮偏 trend/volatility，后几轮转向 extrema/distribution；不同数据集调用模式不同。

效率方面，Stage II forecaster 在 TITAN RTX 上 input length 2048、horizon 96 的 forward latency 为 0.075s，而 Kairos-Base 为 0.054s。跨模态 fusion 增加约 0.021s，参数增加 40.6M，总计 109.1M 参数。

## 10. Agent / framework 视角拆解

| 要素 | KairosAgent 中的对应 |
|---|---|
| State / input | 历史序列 $\mathbf{X}$、文本上下文 $c$、metadata、工具 observations |
| Policy | LLM reasoner $\pi_{\mathrm{reason}}$ |
| Action space | 调用 23 个统计工具或输出 final morphology |
| Tool space | trend、volatility、distribution、periodicity、extrema、frequency、dynamics 工具 |
| Intermediate state | morphology description $r$ |
| Forecaster | text-conditioned Kairos TSFM $f_{\mathrm{forecast}}$ |
| Memory / corpus | T-STAR tool-augmented trajectories |
| Training update | SFT + multimodal alignment + GRPO |
| Reward | frozen Stage II forecaster 的负 quantile loss |
| Evaluation | morphology judge + forecasting MSE/MAE/MASE |

## 11. 贡献、局限与启示

贡献：

1. 提出 reason-then-forecast，把 LLM 语义推理和 TSFM 数值预测明确分工。
2. 用 gated cross-modal fusion 把 morphology prior 注入 TSFM hidden space。
3. 构造 T-STAR，提供 40K+ 工具增强时间序列推理轨迹。
4. 提出 turn-level credit assignment，让 RL 能优化具体工具调用和中间推理。
5. 在 regular 和 irregular multimodal forecasting 上展示 zero-shot 预测收益。

局限：

- 目前验证集中在 forecasting，尚未扩展到分类、异常检测等其他任务；
- fusion 模块声称可迁移到其他 TSFM，但论文尚未系统验证；
- morphology judge 和自动数据生成依赖强 LLM，质量仍受 judge 偏差影响；
- Stage I agent reasoning latency 没计入 Stage II forecaster 的效率表，完整端到端延迟需要单独评估。

实践启示：

KairosAgent 的关键不是让 LLM “算得更准”，而是让 LLM 生成可被 TSFM 使用的语义先验。对时间序列 agent 来说，一个更稳健的架构是：LLM 负责选择工具、解释形态和构造语义条件；TSFM 负责数值预测；二者通过 latent fusion 真正耦合，而不是只在最终报告里并列出现。

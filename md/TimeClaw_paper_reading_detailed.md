# 《Harnessing Generalist Agents for Contextualized Time Series》中文文献解读

**论文**：Zihao Li 等，*Harnessing Generalist Agents for Contextualized Time Series*  
**方法名**：**TimeClaw**  
**论文链接**：[arXiv:2606.05404](https://arxiv.org/abs/2606.05404) / [PDF](https://arxiv.org/pdf/2606.05404) / [TeX](https://arxiv.org/e-print/2606.05404)  
**代码**：[iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)  
**本地 TeX 源码目录**：[Harnessing_Generalist_Agents_for_Contextualized_Time_Series](Harnessing_Generalist_Agents_for_Contextualized_Time_Series/)

## 1. 一句话总结

TimeClaw 不是一个新的时间序列预测模型，而是一个**时间序列原生 agent harness**：它把冻结的通用 LLM policy 放在结构化运行时里，让数值序列保留在 workspace 中，由可执行工具、经验演化工具库和多模态记忆来支撑上下文时间序列推理。

可以粗略写成：

$$
\text{TimeClaw}
=
\text{Frozen LLM policy}
+ \text{time-series-native runtime}
+ \text{tools}
+ \text{evolution}
+ \text{memory}.
$$

论文核心主张是：对上下文化时间序列，直接把长数值序列序列化进 prompt 会产生数据类型错配和 agent 流程错配；更可靠的做法是让 LLM 负责规划、选择工具和整合上下文，让时间序列计算在原生数值运行时中完成。

## 2. 问题背景：什么是 contextualized time series

论文讨论的不是孤立时间序列，而是带上下文的时间序列。例如：

- 能源负荷序列 + “未来有暴雪”的自然语言情境；
- 金融价格序列 + 投资组合权重、无风险利率、市场指数；
- 河流水位序列 + 河流上下游关系和因果选项；
- 多变量传感器序列 + 领域约束或外部事件。

数值时间序列定义为：

$$
\mathbf{X}_{1:T}
=
[\mathbf{x}_1,\mathbf{x}_2,\ldots,\mathbf{x}_T]
\in \mathbb{R}^{N\times T},
$$

其中 $T$ 是时间戳数量，$N$ 是变量数，$\mathbf{x}_t\in\mathbb{R}^{N}$ 是第 $t$ 个时间点的观测。

时间切片定义为：

$$
\mathbf{X}_{a:b}
=
[\mathbf{x}_a,\mathbf{x}_{a+1},\ldots,\mathbf{x}_b].
$$

上下文化时间序列定义为：

$$
\mathcal{X}
=
(\mathbf{X}_{1:T},\mathcal{C}),
$$

其中 $\mathcal{C}$ 是上下文，可以包括文本描述、类别元数据、外部约束、领域知识等。本文主要处理“文本 + 时间序列”的混合场景，但框架本身可扩展到其他上下文模态。

## 3. 从固定任务到开放式时间序列推理

传统时间序列模型常处理固定映射，例如 forecasting：

$$
\mathbf{X}_{1:T}
\mapsto
\mathbf{X}_{T+1:T+H},
$$

或 classification：

$$
\mathbf{X}_{1:T}
\mapsto
y.
$$

但真实任务往往由自然语言指定，输出也可能是数值预测、标签、排序、解释、决策或可执行动作。因此论文把任务实例定义为：

$$
\tau = (q,\mathcal{X},\mathcal{Y},y^\star,\ell),
$$

其中：

- $q$：自然语言 instruction；
- $\mathcal{X}=(\mathbf{X}_{1:T},\mathcal{C})$：上下文化时间序列；
- $\mathcal{Y}$：输出空间；
- $y^\star\in\mathcal{Y}$：目标答案；
- $\ell:\mathcal{Y}\times\mathcal{Y}\to\mathbb{R}$：评估函数。

目标是产生：

$$
\hat{y}
=
f(q,\mathcal{X})
\in
\operatorname*{arg\,min}_{y\in\mathcal{Y}}
\ell(y,y^\star).
$$

这个定义比 forecasting 更广：$\mathcal{Y}$ 可以是未来轨迹、异常位置、因果矩阵、投资决策、解释文本或它们的组合。

## 4. 为什么不能完全信任直接文本化的 LLM

现有 LLM agent 常把时间序列转成文本：

$$
s_{\mathcal{X}}
=
\sigma(\mathcal{X}),
$$

再把 instruction 和序列化输入 token 化：

$$
\mathbf{z}_{1:L}
=
\operatorname{Tokenize}([q;s_{\mathcal{X}}]).
$$

论文指出这会造成两类错配。

### 4.1 Datatype misalignment：token 距离不是数值距离

设 tokenizer 诱导的表示为：

$$
\eta:\mathbb{R}\rightarrow\mathcal{V}^{*}.
$$

论文命题说明：一般情况下，token edit distance 或 embedding distance 不会保持数值距离顺序。也就是说，可能存在 $x_1,x_2,x_3$，满足：

$$
|x_1-x_2|
<
|x_1-x_3|,
$$

但：

$$
d_{\mathrm{tok}}(\eta(x_1),\eta(x_2))
>
d_{\mathrm{tok}}(\eta(x_1),\eta(x_3)).
$$

直观例子是 $99.999999$ 和 $100.0$ 数值上极近，但字符串/token 表面形态可能差异很大；而 $99.999999$ 和 $98.999999$ 数值差更大，却可能 token 形式更接近。

这解释了为什么“看起来相似的数字 token”不等价于“数值上接近”，也解释了为什么基于 token 相似的检索或推理会误导时间序列任务。

### 4.2 Place-value mismatch：subword token 不保留十进制位值结构

十进制整数可以写成：

$$
x
=
\sum_{k=0}^{m-1} d_k 10^k,
\qquad
d_k\in\{0,\ldots,9\}.
$$

但 tokenizer 产生的是 subword 序列：

$$
\eta(x)=(v_1,\ldots,v_J)\in\mathcal{V}^{*}.
$$

论文指出，一般不存在固定 token 级分解：

$$
x
=
\sum_{j=1}^{J}\phi(v_j)10^{\alpha_j},
$$

其中 $\phi$ 和 $\alpha_j$ 能稳定对应 token 的数值贡献。原因是 subword 切分可能把不同位数打包成不同长度片段，例如某些 token 覆盖整数位和小数点，另一些 token 覆盖多个小数位。这样 token 位置不再天然对应十进制位值。

这意味着 LLM 要从 token 间接重建数值大小，而不是在原生数值空间中计算。

### 4.3 Next-token prediction 不是 next-value prediction

LLM 训练目标是 token 空间的条件概率。对 tokenized temporal process $Z_t=\eta(X_t)$，next-token objective 是：

$$
\mathcal{L}_{\mathrm{tok}}(p)
=
\mathbb{E}
\left[
-\log p(Z_{t+1}\mid Z_{1:t})
\right].
$$

而数值预测更接近：

$$
\mathcal{L}_{\mathrm{num}}(g)
=
\mathbb{E}
\left[
d_{\mathrm{num}}(g(X_{1:t}),X_{t+1})^2
\right],
$$

其中 $d_{\mathrm{num}}(x,x')=|x-x'|$。

两个 Bayes 最优解也不同：

$$
p^\star(z\mid Z_{1:t})
=
\mathbb{P}(Z_{t+1}=z\mid Z_{1:t}),
$$

而：

$$
g^\star(X_{1:t})
=
\mathbb{E}[X_{t+1}\mid X_{1:t}].
$$

前者是 token string 分布，后者是实数空间中的条件期望。除非 tokenizer 和解码器严格保留任务相关数值几何，否则优化 token likelihood 不保证优化数值误差。

### 4.4 Long-context temporal information dilution：长序列证据会被注意力稀释

自注意力层输出为：

$$
\mathbf{h}_i
=
\sum_{j=1}^{L}\alpha_{ij}\mathbf{v}_j,
\quad
\sum_{j=1}^{L}\alpha_{ij}=1,\quad
\alpha_{ij}\geq 0.
$$

若任务相关时间位置集合为 $\mathcal{R}\subseteq[L]$，其总注意力质量为：

$$
A_i(\mathcal{R})
=
\sum_{j\in\mathcal{R}}\alpha_{ij}
\leq
\epsilon,
$$

则相关证据对输出的贡献至多只有 $\epsilon$ 级别。若 $\|\mathbf{v}_j\|\leq M$，则：

$$
\left\|
\sum_{j\in\mathcal{R}}\alpha_{ij}\mathbf{v}_j
\right\|
\leq
\epsilon M.
$$

这说明长时间序列即使塞进上下文窗口，关键时间点也可能因为 token 太多、位置偏置或 attention sink 被稀释。

## 5. TimeClaw 的 agent/framework 形式化

TimeClaw 把冻结 LLM policy $\pi_\theta$ 放入 harness $\mathcal{H}$：

$$
\mathcal{H}
=
(\mathcal{T},\mathcal{E},\mathcal{M}),
$$

其中：

- $\mathcal{T}$：executable temporal tools；
- $\mathcal{E}$：experience-driven capability evolution；
- $\mathcal{M}$：episodic multimodal memory。

按本项目 agent/framework 解读规则，可以把 TimeClaw 拆成以下要素。

| 要素 | TimeClaw 中的对应对象 |
|---|---|
| State / Workspace | 任务本地 workspace $\mathcal{W}$，保存完整精度的 $\mathbf{X}_{1:T}$ 和中间分析状态 |
| Policy / Model | 冻结 LLM policy $\pi_\theta$，主实验使用 `gpt-5-nano` |
| Action / Tool Space | 工具调用、runtime operation、推理步骤，动作 $a_r\in\mathcal{A}$ |
| Observation | 工具或内部推理返回的结构化结果 $o_r\in\mathcal{O}$ |
| Rollout / Trajectory | $\zeta=(a_1,o_1,\ldots,a_K,o_K,\hat{y})$ |
| Memory | 记忆记录 $m=(\tau,\phi,\psi,\zeta,\rho)$ |
| Update / Evolution | $\mathcal{E}$ 从成功轨迹中抽象工具，验证后加入 $\mathcal{T}$ |
| Evaluation | CiK 的 RCRPS/sMAPE，TSRBench accuracy，TSAIA multiple-choice accuracy |

对每个任务，TimeClaw 把数值序列加载到 workspace $\mathcal{W}$。agent 的 rollout 是：

$$
\zeta
=
(a_1,o_1,\ldots,a_K,o_K,\hat{y}).
$$

每一步策略选择：

$$
a_r
\sim
\pi_\theta(\cdot\mid q,\mathcal{C},o_{1:r-1}).
$$

注意这里策略条件里不直接包含完整 $\mathbf{X}_{1:T}$，而是通过 workspace 中的工具观察 $o_{1:r-1}$ 累积证据。这就是 harness 的关键：**LLM 不负责持有长数值序列，LLM 负责决定下一步该查什么、算什么、如何整合。**

## 6. 组件一：Runtime-native temporal tools

TimeClaw 的工具直接在 workspace $\mathcal{W}$ 上运行，保留完整数值精度，返回紧凑结构化观察，而不是把长数组来回塞进 prompt。

论文列出的默认工具包括：

| 工具 | 作用 |
|---|---|
| `list_channels` | 返回 workspace 中的 channel 名称 |
| `series_overview` | 返回每个 channel 的 $n,\min,\max,\mathrm{mean}$ 和时间戳统计 |
| `channel_stats` | 返回 $n$、min、max、mean、std、median、$q_{25}$、$q_{75}$ |
| `channel_values` | 有界读取某个 channel 的原始切片，单次最多 500 个值 |
| `compute_acf` | 计算指定最大 lag 内的样本自相关 |
| `detect_periodicity` | 用 FFT 检测主周期和非 DC 频谱功率占比 |
| `find_peaks` | 用 `scipy.signal.find_peaks` 找局部峰值 |
| `arima_forecast` | 拟合 ARIMA$(p,d,q)$ 并返回点预测和 AIC |

论文强调每个数值 claim 都应由工具 observation 支撑。这样 rollout 里的 $(a_r,o_r)$ 形成可审计证据链，最终答案 $\hat{y}$ 可以追溯到具体时间序列操作，而不是 LLM 的自由语言猜测。

## 7. 组件二：Experience-driven capability evolution

初始工具只能覆盖通用时间序列操作，但真实任务会出现反复发生的领域子流程。TimeClaw 用 evolution operator $\mathcal{E}$ 把重复成功轨迹转成新工具。

流程如下：

1. 收集或聚类相似任务上的成功 rollout；
2. 由代码专长 LLM 分析这些轨迹；
3. 抽象出重复子过程，生成 self-contained executable tool；
4. 工具带 typed signature、docstring 和能访问 workspace $\mathcal{W}$ 的实现；
5. 在 held-out 相似任务上执行验证；
6. 成功率超过阈值 $\gamma$ 后加入 $\mathcal{T}$。

准入条件可以写成：

$$
\operatorname{SuccessRate}_{\mathrm{heldout}}(g)
>
\gamma,
$$

主实验默认：

$$
\gamma=0.7.
$$

这里 $g$ 是候选工具。这个阈值的意义是防止把偶然有效、过拟合或错误的代码加入长期工具箱。

在 TSAIA 金融任务中，TimeClaw 自动演化出三个工具：

| 演化工具 | 含义 |
|---|---|
| `portfolio_var` | 按历史或参数化方法计算加权投资组合 Value-at-Risk |
| `portfolio_sharpe` | 计算年化 Sharpe ratio，支持常数或逐期 risk-free rate |
| `capm_regression` | 对资产收益和市场收益做 OLS 回归，返回 $\alpha,\beta,R^2$ |

这些工具不是作者预先写死的领域工具，而是从 bank-building trajectories 中识别出的可复用金融计算流程。

## 8. 组件三：Episodic multimodal memory

TimeClaw 的 memory 不是只按文本相似检索，因为上下文化时间序列的“相似”取决于两件事：

1. 任务语义/上下文是否相似；
2. 时间序列结构、趋势、周期、异常、耦合关系是否相似。

每条记忆记录定义为：

$$
m
=
(\tau,\phi,\psi,\zeta,\rho),
$$

其中：

- $\tau$：原任务；
- $\phi$：文本上下文 key；
- $\psi$：时间序列 fingerprint；
- $\zeta$：成功 rollout 轨迹；
- $\rho$：短 rationale，记录可迁移的上下文线索和分析规则。

### 8.1 文本 key

对每个任务构造文本 descriptor $c_\tau$，例如 CiK 中拼接 background、scenario、constraints；TSRBench 中拼接 subtask、domain、channel names、question text；TSAIA 中拼接 question type、prompt、data description、option list。

文本 embedding 为：

$$
\phi
=
\Phi(c_\tau)
\in
\mathbb{R}^{d_\phi}.
$$

论文使用 `text-embedding-3-small`：

$$
d_\phi=1536.
$$

### 8.2 时间序列 fingerprint

时间序列 key 是 20 维 fingerprint：

$$
\psi
=
\Psi(\mathbf{X}_{1:T})
\in
\mathbb{R}^{20}.
$$

它包括结构、统计、趋势、自相关、频谱、变点、多变量耦合和 outlier 特征。

对第 $i$ 个 channel，有限值为 $x^{(i)}_1,\ldots,x^{(i)}_{n_i}$，均值和标准差为：

$$
\mu_i
=
\frac{1}{n_i}\sum_t x^{(i)}_t,
$$

$$
\sigma_i
=
\sqrt{
\frac{1}{n_i-1}
\sum_t
(x^{(i)}_t-\mu_i)^2
}.
$$

z-score：

$$
z^{(i)}_t
=
\frac{x^{(i)}_t-\mu_i}{\sigma_i}.
$$

高阶矩：

$$
\mathrm{skew}_i
=
\frac{1}{n_i}\sum_t (z^{(i)}_t)^3,
$$

$$
\mathrm{kurt}_i
=
\frac{1}{n_i}\sum_t (z^{(i)}_t)^4-3.
$$

MAD outlier rate：

$$
\widetilde{x}_i
=
\mathrm{median}(x^{(i)}),
$$

$$
\mathrm{MAD}_i
=
\mathrm{median}(|x^{(i)}-\widetilde{x}_i|)
+\epsilon,
$$

$$
\mathrm{out}_i
=
\frac{1}{n_i}
\left|
\left\{
t:
|x^{(i)}_t-\widetilde{x}_i|
>
3\,\mathrm{MAD}_i
\right\}
\right|.
$$

线性趋势在单位时间轴 $u_t=(t-1)/(n_i-1)$ 上拟合：

$$
(a_i,b_i)
=
\operatorname*{arg\,min}_{a,b}
\sum_t
\left(
x^{(i)}_t-a u_t-b
\right)^2.
$$

记录 z-scored slope 和 $R^2$：

$$
\mathrm{slope}_i
=
\frac{a_i}{\sigma_i+\epsilon},
$$

$$
R_i^2
=
1-
\frac{
\sum_t (x^{(i)}_t-a_i u_t-b_i)^2
}{
\sum_t (x^{(i)}_t-\mu_i)^2+\epsilon
}.
$$

自相关：

$$
\rho^{(i)}(\ell)
=
\frac{
\sum_{t=1}^{n_i-\ell}
c^{(i)}_t c^{(i)}_{t+\ell}
}{
\sum_t (c^{(i)}_t)^2+\epsilon
},
\qquad
c^{(i)}_t=x^{(i)}_t-\mu_i.
$$

论文取三个 lag：

$$
\ell^{(i)}_1=1,
\quad
\ell^{(i)}_2=\lfloor\sqrt{n_i}\rfloor,
\quad
\ell^{(i)}_3=\lfloor n_i/4\rfloor.
$$

频谱特征用 rFFT：

$$
\widehat{S}^{(i)}_k
=
\left|
\mathrm{rFFT}(c^{(i)})_k
\right|^2.
$$

设 $k_i^\star=\operatorname*{arg\,max}_{k\geq1}\widehat{S}^{(i)}_k$，记录：

$$
\mathrm{fftFreq}_i=f_{k_i^\star},
$$

$$
\mathrm{fftPFrac}_i
=
\frac{
\widehat{S}^{(i)}_{k_i^\star}
}{
\sum_{k\geq1}\widehat{S}^{(i)}_k+\epsilon
}.
$$

非 DC 频谱熵为：

$$
p^{(i)}_k
=
\frac{
\widehat{S}^{(i)}_k
}{
\sum_{k'\geq1}\widehat{S}^{(i)}_{k'}
},
$$

$$
\mathrm{specEnt}_i
=
-
\frac{1}{\log_2 K_i}
\sum_{k\geq1}
p^{(i)}_k\log_2 p^{(i)}_k.
$$

变点 proxy 用差分 CUSUM：

$$
d^{(i)}_t
=
x^{(i)}_{t+1}-x^{(i)}_t,
$$

$$
S^{(i)}_t
=
\sum_{s=1}^{t}
\left(
d^{(i)}_s-\overline{d}^{(i)}
\right).
$$

若 $Z_i$ 是 $\operatorname{sign}(S^{(i)})$ 的符号变化次数，则：

$$
\mathrm{cp}_i
=
\frac{Z_i}{n_i}.
$$

多变量耦合用非退化 channel pair 的平均绝对 Pearson 相关：

$$
\overline{|\rho|}
=
\frac{2}{N''(N''-1)}
\sum_{i<j}
|\rho_{ij}|.
$$

这些特征被按固定顺序拼接为 20 维 fingerprint。它有两个实用性质：对 channel 顺序置换不敏感；对少量局部 outlier 较稳健，因为 outlier、IQR、median 等使用 robust statistics。

### 8.3 Bank-level normalization

不同 fingerprint 维度尺度不同。若直接算 L2，kurtosis 等大方差维度可能支配距离。论文在 memory bank 级别做 z-score：

$$
\boldsymbol{\mu}_\psi
=
\frac{1}{|\mathcal{M}|}
\sum_{m\in\mathcal{M}}
\psi_m,
$$

$$
\boldsymbol{\sigma}_\psi
=
\mathrm{std}
\left(
\{\psi_m\}_{m\in\mathcal{M}}
\right),
$$

$$
\tilde{\psi}
=
(\psi-\boldsymbol{\mu}_\psi)
\oslash
\boldsymbol{\sigma}_\psi.
$$

若某维 $\sigma_{\psi,d}<10^{-9}$，视为常数维度，标准化后不参与距离主导。

### 8.4 两阶段检索

给定查询任务 $\tau_q$，先做文本侧候选池：

$$
\mathcal{N}(\phi_q)
=
\operatorname*{Top}_{N,\,m\in\mathcal{M}^{\phi}}
\phi_q^\top\phi_m.
$$

这里 embedding 已 $L_2$ normalized，所以 cosine similarity 等于 dot product。默认：

$$
N=20.
$$

然后在文本候选池中用时间序列 fingerprint 重排：

$$
\mathrm{Retrieve}(\tau_q;k)
=
\operatorname*{Top}_{k,\,m\in\mathcal{N}(\phi_q)}
-
\left\|
\tilde{\psi}_q-\tilde{\psi}_m
\right\|_2.
$$

默认注入：

$$
k=3.
$$

这个设计可以理解为：**先按任务语义筛，再按时间序列结构筛**。检索结果会被压缩成 prior trajectory summary 或 rationale，放入当前 prompt 的参考区域，帮助 agent 少走弯路。

## 9. 评测设置

论文在三个 benchmark 上评估：

| Benchmark | 关注点 | 规模/设置 |
|---|---|---|
| CiK | 上下文是否能改善时间序列预测与约束满足 | 71 个手工设计 context-aware tasks，2,644 条公开时间序列 |
| TSRBench | 开放式、多任务、多模态时间序列推理 | 原始 4,125 题；本文使用 stratified 20% subset，共 825 题 |
| TSAIA Finance | 实用金融时间序列分析 | 150 个金融 MC 任务，含 VaR、Sharpe、Market Alpha、Market Beta |

TSAIA 任务组成：

| 金融任务 | 实例数 | 含义 |
|---|---:|---|
| VaR Confidence Level | 50 | 比较候选组合下行风险 |
| Sharpe Ratio | 50 | 比较风险调整收益 |
| Market Alpha | 25 | 判断股票相对市场是否超额收益 |
| Market Beta | 25 | 判断股票对市场变动的敏感性 |

主要 baseline 包括传统模型 ARIMA/ETS，神经模型 DLinear/PatchTST，foundation models Chronos/Lag-Llama/Moirai，时间序列 LLM/Agent UniTime/Time-LLM/TS-Agent/TSci，以及通用 agentic pipelines：Direct Prompt、CoT、ReAct、Self-Reflection、Multi-Agent Reflection。

主超参数：

| 类别 | 参数 | 默认值 |
|---|---|---|
| Backbone | $\pi_\theta$ | `gpt-5-nano` |
| Train/test split | train ratio | 0.5 |
| Memory | $d_\psi$ | 20 |
| Memory | $\Phi$ | `text-embedding-3-small` |
| Memory | $d_\phi$ | 1536 |
| Retrieval | text-stage pool $N$ | 20 |
| Retrieval | injected top-$k$ | 3 |
| Evolution | threshold $\gamma$ | 0.7 |

## 10. 指标公式

### 10.1 CiK 的 RCRPS

CiK 使用 Region-of-Interest Continuous Ranked Probability Score。对任务 $\tau$，预测分布为 $\widehat{\mathcal{P}}_\tau$，真实未来为 $\mathbf{y}^{\star}_{\tau}$：

$$
\ell_{\mathrm{CiK}}
(\widehat{\mathcal{P}}_\tau,\mathbf{y}^{\star}_{\tau})
=
\mathrm{RCRPS}_{\tau}
(\widehat{\mathcal{P}}_\tau,\mathbf{y}^{\star}_{\tau}).
$$

RCRPS 由 RoI 加权预测误差和约束违反惩罚组成：

$$
\mathrm{RCRPS}_{\tau}
=
\alpha_{\tau}\mathcal{E}_{\tau}
+
\mathcal{V}_{\tau}(\beta).
$$

其中：

- $\mathcal{E}_\tau$：region-of-interest weighted predictive error；
- $\mathcal{V}_\tau(\beta)$：context-implied constraint violation penalty；
- $\alpha_\tau$：任务级 scaling factor；
- $\beta=10$：CiK 官方约束惩罚设置。

RCRPS 越低越好。相比普通 CRPS，它更强调上下文影响的关键时间段，以及是否违反上下文约束。

### 10.2 sMAPE

确定性轨迹评估使用 sMAPE。设 horizon 长度为 $H$，真实轨迹和预测轨迹为 $\mathbf{y}^{\star}_{\tau},\widehat{\mathbf{y}}_\tau\in\mathbb{R}^{H}$：

$$
\mathrm{sMAPE}_{\tau}
=
\frac{1}{H}
\sum_{h=1}^{H}
\frac{
2|y^{\star}_{\tau,h}-\widehat{y}_{\tau,h}|
}{
\max(
|y^{\star}_{\tau,h}|+|\widehat{y}_{\tau,h}|,
\varepsilon
)
}.
$$

论文使用：

$$
\varepsilon=10^{-2}.
$$

sMAPE 越低越好，范围为 $[0,2]$。

## 11. 主结果一：CiK 上下文时间序列预测

CiK 主结果如下：

| 方法 | Avg. RCRPS ↓ | Avg. sMAPE ↓ | Avg. token ↓ |
|---|---:|---:|---:|
| TS-Agent | 0.1421 | 61.2980 | 47,455.6 |
| TSci | 0.1448 | 69.9068 | 47,905.1 |
| Direct Prompt | 0.1703 | 60.4407 | 24,861.3 |
| ReAct | 0.1514 | 66.2284 | 25,503.0 |
| Multi-Agent Reflection | 0.1294 | 55.5704 | 63,033.0 |
| **TimeClaw** | **0.1145** | **52.4542** | **35,553.2** |

相对最强 baseline Multi-Agent Reflection，TimeClaw 的 RCRPS 从 0.1294 降到 0.1145，相对提升约 11.5%；token 从 63,033 降到 35,553，少约 43.6%。

按上下文类型看：

| Context type | TimeClaw RCRPS ↓ | 结果 |
|---|---:|---|
| Intemporal | 0.1303 | 最优 |
| Historical | 0.0886 | 最优 |
| Future | 0.0703 | 最优 |
| Covariate | 0.1239 | 最优 |
| Causal | 0.1597 | 第二，几乎并列最优 |

按领域看，TimeClaw 平均 RCRPS 仍是最优，并在 8 个领域中 5 个排名第一，平均 rank 为 2.625。

## 12. 主结果二：TSRBench 开放式推理

TSRBench 中所有 agentic baseline 都使用 GPT-5-nano。

| 方法 | Perception | Reasoning | Prediction | Decision | Avg. Acc. | Avg. token |
|---|---:|---:|---:|---:|---:|---:|
| CoT | 48.57 | 36.84 | 46.30 | 28.57 | 40.05 | 22,274 |
| ReAct | 55.71 | 36.26 | 43.52 | 31.75 | 40.78 | 25,165 |
| Self-Reflection | 50.00 | 40.93 | 38.89 | 30.16 | 40.29 | 25,799 |
| Multi-Agent Reflection | 62.85 | 33.92 | 54.63 | 25.40 | 42.96 | 45,279 |
| TSci | **65.71** | 33.33 | 43.52 | 26.98 | 40.53 | 51,273 |
| **TimeClaw** | 64.29 | **43.86** | **59.26** | **33.33** | **49.76** | **15,979** |

TimeClaw 在 perception 上略低于 TSci，但在 reasoning、prediction、decision making 上领先，平均准确率最高且 token 最少。

与开源模型相比，TimeClaw 用 GPT-5-nano 达到 49.8 overall，超过 Qwen2.5-72B 的 42.4、Qwen3-235B-A22B 的 42.1、InternVL3.5-38B 的 39.5，以及 TS-Reasoner-7B 的 36.4。

这说明 harness 对开放式推理的收益不只来自更大模型，而来自“工具 + 记忆 + 原生运行时”的交互方式。

## 13. 主结果三：TSAIA 金融分析

TSAIA 用于评估实用金融时间序列分析。TimeClaw 在这里通过 evolution loop 自动演化出：

- `portfolio_var`
- `portfolio_sharpe`
- `capm_regression`

论文报告 TimeClaw 在 TSAIA multiple-choice accuracy 上相对所有 baseline 提升 38.9%。案例分析还给出细粒度收益：

- MarketAB-beta 任务中，`capm_regression` 平均调用数升至 0.83，准确率提升 +16.7；
- VaR 任务中，准确率提升 +12.0，同时平均工具预算从 6.3 降到 5.2。

这说明演化工具把重复金融计算流程固化成可执行 routine，减少了 LLM 手算和临时拼代码的不稳定性。

## 14. 消融实验

论文做了三类消融：

1. **Retrieval size ablation**：启用 episodic memory retrieval 能改善 sMAPE 和 RCRPS；较大的检索规模进一步提升。
2. **Backbone ablation**：TimeClaw 受益于更强 LLM backbone，说明 harness 和通用推理能力互补。
3. **Component ablation**：移除 tool harness、capability evolution 或 memory 都会降低性能。

附录还报告 TSRBench memory-bank size sweep：当 train ratio 在 $\{0.1,0.2,0.3,0.4\}$ 之间变化时，accuracy 波动小于 1.5%，说明 memory bank 比较 sample-efficient。

## 15. 案例分析

### 15.1 CiK SVAR：相同数值历史，不同上下文

论文构造一对 SVAR 任务，二者有完全相同的 128-step 历史、32-step ground truth，以及相同 $X_0$ step-change schedule：

$$
0.028 \rightarrow 0.111 \rightarrow 0.223.
$$

区别只在文本上下文。Full context 给出显式 SVAR 方程：

$$
X_1^t
=
1.322X_0^{t-1}
-0.604X_1^{t-1}
+0.926X_0^{t-2}
+0.763X_1^{t-2}
-0.851X_0^{t-3}
+0.623X_1^{t-3}.
$$

Minimal context 只给定性 parent list，没有系数。

结果：

| 设置 | 行为 | sMAPE |
|---|---|---:|
| Full context | 读取公式，结合近期值和未来 $X_0$ schedule 递推，恢复 ramp | 0.44% |
| Minimal context | 无法把 $X_0$ 跳变转成 $X_1$ 幅度变化，退化成平滑漂移 | 124% |

因为数值历史完全相同，这个案例说明 TimeClaw 的收益确实来自上下文结构的利用。

### 15.2 TSRBench 河流因果推理：记忆转移规则而非数据

任务要求根据五个 river sensors 的 runoff 序列选择因果矩阵。关闭记忆时：

- agent 做 22 次工具调用；
- 广泛检查 stats、ACF、peaks、periodicity；
- 仍然选了物理上反向的因果结构。

开启 top-3 memory 时：

- 检索到相关 river causal reasoning trajectory；
- 记忆中总结出 “upstream-to-downstream cascade”；
- agent 只做 7 次 targeted `compute_acf`；
- 选对因果结构。

这说明 memory 不是泄漏测试样本，而是迁移“同类问题怎么推理”的 compact rule。

### 15.3 TSAIA：从经验中演化金融工具

初始 toolbox 只有通用时间序列 inspection tools。随着 bank-building 轨迹积累，TimeClaw 发现 TSAIA 中反复出现三个模式：

1. 加权组合 log return 的尾部风险估计；
2. risk-free-adjusted log return 的年化均值/波动比；
3. 资产与市场 log return 的 OLS 回归。

于是演化出 VaR、Sharpe、CAPM 工具。测试时，agent 直接调用这些工具完成金融推理，而不是每次从低级统计工具重建计算流程。

## 16. 贡献

TimeClaw 的贡献可以归纳为六点：

1. 明确提出上下文化时间序列中的 datatype misalignment 和 agentic process misalignment。
2. 把冻结 LLM 包装进 time-series-native harness，避免把长数值序列完全文本化。
3. 用 workspace $\mathcal{W}$ 和 executable tools 保留数值精度并提供可审计证据链。
4. 设计文本 embedding + 20 维时间序列 fingerprint 的 episodic multimodal memory。
5. 提出 experience-driven capability evolution，让工具库能从成功轨迹中自我扩展。
6. 在 CiK、TSRBench、TSAIA 上同时提升性能和 token efficiency。

## 17. 局限

论文仍有一些边界：

- Fingerprint 是人工设计的 20 维统计特征，可能覆盖不了更复杂的非线性动态。
- 工具演化依赖成功轨迹质量；若训练 bank 偏差大，可能演化出错误或过窄工具。
- 新工具由 LLM 合成，需要严格 sandbox、held-out 验证和安全约束。
- 主实验使用闭源 API backbone 和 OpenAI embedding，复现成本取决于 API 可用性。
- 目前更多是 harness 层面的改进，没有解决所有时间序列建模问题，例如长期 probabilistic forecasting 的专用建模。

## 18. 实践启发

这篇论文给出的工程启发很直接：

1. 不要把时间序列当长字符串硬塞给 LLM。数值结构应保留在原生 runtime 中。
2. LLM 更适合作为 planner/reporter，而不是唯一 numerical engine。
3. 时间序列 agent 的记忆检索应同时考虑语义上下文和数值动态结构。
4. 工具库不应完全静态，重复成功流程可以演化为可执行 routine。
5. 对实际业务任务，token efficiency 与可审计性和准确率同样重要。

总体上，TimeClaw 把“LLM 做时间序列”从 prompt engineering 推进到 harness engineering。它的关键不是让 LLM 内化所有时间序列知识，而是给 LLM 一个正确的工作环境：数据在 workspace，计算在工具，经验在 memory，重复流程进入工具库，最终由 LLM 整合上下文并做决策。

# 《Harnessing Generalist Agents for Contextualized Time Series》中文文献解读

论文：Zihao Li 等，*Harnessing Generalist Agents for Contextualized Time Series*，arXiv:2606.05404  
方法名：**TimeClaw**

资源链接：

- 论文页面：[arXiv:2606.05404](https://arxiv.org/abs/2606.05404)
- PDF：[https://arxiv.org/pdf/2606.05404](https://arxiv.org/pdf/2606.05404)
- TeX 源码：[https://arxiv.org/e-print/2606.05404](https://arxiv.org/e-print/2606.05404)
- 代码仓库：[iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- Hugging Face：未在论文 arXiv 页面或官方信息中发现明确公开链接

## 1. 一句话总结

这篇论文的核心不是再训练一个新的时间序列预测模型，而是给冻结的通用 LLM agent 外面加一层“时间序列原生 harness”。TimeClaw 让 LLM 不必把长数值序列当普通文本硬读，而是通过结构化 workspace、可执行时间序列工具、可演化工具库和多模态记忆来完成开放式时间序列推理。

可以把它理解为：

$$
\text{TimeClaw} = \text{LLM policy} + \text{时间序列运行时} + \text{工具} + \text{经验记忆} + \text{能力演化}
$$

## 2. 方法背景：为什么普通 LLM 不适合直接读时间序列

论文讨论的对象是“带上下文的时间序列”，即数值信号不再孤立存在，而是和自然语言场景、约束、外部事件、领域知识一起出现。例如能源负荷预测中，历史用电曲线之外还可能给出“未来有暴雪”；金融分析中，价格序列之外还会给出投资组合权重、无风险利率或市场指数。

论文先定义数值时间序列：

$$
\mathbf{X}_{1:T} = [\mathbf{x}_1, \mathbf{x}_2, \ldots, \mathbf{x}_T] \in \mathbb{R}^{N \times T},
$$

其中 $T$ 是时间长度，$N$ 是变量数，$\mathbf{x}_t \in \mathbb{R}^N$ 是第 $t$ 个时间点的观测。时间切片定义为：

$$
\mathbf{X}_{a:b} = [\mathbf{x}_a, \mathbf{x}_{a+1}, \ldots, \mathbf{x}_b].
$$

带上下文的时间序列被写成：

$$
\mathcal{X} = (\mathbf{X}_{1:T}, \mathcal{C}),
$$

其中 $\mathcal{C}$ 是文本描述、元数据、约束、因果知识等上下文。

传统时间序列模型通常处理固定任务，比如预测：

$$
\mathbf{X}_{1:T} \mapsto \mathbf{X}_{T+1:T+H}
$$

或者分类：

$$
\mathbf{X}_{1:T} \mapsto y.
$$

但真实业务里任务更开放：可能要求预测、解释、找异常、做投资组合比较、判断因果方向、输出行动建议。论文因此定义开放式上下文时间序列推理任务：

$$
\tau = (q, \mathcal{X}, \mathcal{Y}, y^\star, \ell),
$$

其中 $q$ 是自然语言任务指令，$\mathcal{Y}$ 是输出空间，$y^\star$ 是目标答案，$\ell$ 是评估函数。目标是：

$$
\hat{y}=f(q,\mathcal{X})\in\arg\min_{y\in\mathcal{Y}}\ell(y,y^\star).
$$

这里 $\mathcal{Y}$ 可以是数值预测、标签、排序、文本解释、决策或可执行动作。

## 3. 论文动机：两类 misalignment

现有 LLM agent 常见做法是把数值序列和上下文序列化成文本：

$$
s_\mathcal{X}=\sigma(\mathcal{X}),
$$

然后 token 化：

$$
\mathbf{z}_{1:L}=\operatorname{Tokenize}([q;s_{\mathcal{X}}]).
$$

论文认为这会带来两类错配。

第一是 **datatype misalignment**：时间序列的趋势、周期、频谱、局部异常、长程依赖等结构，在转成 token 后会失真。附录用命题说明 token 距离不等于数值距离。设 tokenizer 表示为：

$$
\eta:\mathbb{R}\rightarrow\mathcal{V}^*.
$$

一般情况下，token 编辑距离或 embedding 距离不保持数值距离的顺序，即可能存在：

$$
|x_1-x_2| < |x_1-x_3|,
$$

但

$$
d_{\mathrm{tok}}(\eta(x_1),\eta(x_2))
>
d_{\mathrm{tok}}(\eta(x_1),\eta(x_3)).
$$

直观例子是 $99.999999$ 和 $100.0$ 数值上很近，但字符串和 token 表面形态差异可能比 $99.999999$ 和 $98.999999$ 更大。

第二是 **agentic process misalignment**：ReAct、CoT、reflection 等 agent 流程多围绕文本推理设计。对时间序列来说，自然操作应是切片、聚合、平滑、频谱分析、自相关、预测、异常定位等，而不是让 LLM 在文本里凭眼睛读一串数字。

论文还指出 next-token prediction 不是 next-value prediction。LLM 训练目标是：

$$
\mathcal{L}_{\mathrm{tok}}(p)
=
\mathbb{E}\left[-\log p(Z_{t+1}\mid Z_{1:t})\right],
$$

而数值预测目标更接近：

$$
\mathcal{L}_{\mathrm{num}}(g)
=
\mathbb{E}\left[d_{\mathrm{num}}(g(X_{1:t}),X_{t+1})^2\right].
$$

前者的 Bayes 最优解是 token 条件分布：

$$
p^\star(z\mid Z_{1:t})
=
\mathbb{P}(Z_{t+1}=z\mid Z_{1:t}),
$$

后者的 Bayes 最优解是数值条件期望：

$$
g^\star(X_{1:t})
=
\mathbb{E}[X_{t+1}\mid X_{1:t}].
$$

两者活在不同空间，因此不能假设会自然等价。

长上下文还会导致时间证据稀释。自注意力输出为：

$$
\mathbf{h}_i
=
\sum_{j=1}^{L}\alpha_{ij}\mathbf{v}_j,
\quad
\sum_{j=1}^{L}\alpha_{ij}=1,\quad \alpha_{ij}\geq 0.
$$

若任务相关位置集合 $\mathcal{R}$ 获得的注意力质量：

$$
A_i(\mathcal{R})=\sum_{j\in\mathcal{R}}\alpha_{ij}\leq \epsilon,
$$

则相关证据对 $\mathbf{h}_i$ 的贡献最多只有 $\epsilon$ 级别。长序列 token 越多，真正有用的时间片段越容易被稀释。

## 4. TimeClaw 总体框架

TimeClaw 把一个冻结的 LLM policy $\pi_\theta$ 放进时间序列原生 harness：

$$
\mathcal{H} = (\mathcal{T}, \mathcal{E}, \mathcal{M}),
$$

其中：

- $\mathcal{T}$：可执行时间序列工具集合；
- $\mathcal{E}$：经验驱动的能力演化机制；
- $\mathcal{M}$：episodic multimodal memory，即存储过往成功轨迹的多模态记忆。

对每个任务 $\tau=(q,\mathcal{X},\mathcal{Y},y^\star,\ell)$，TimeClaw 把 $\mathbf{X}_{1:T}$ 加载到任务本地 workspace $\mathcal{W}$，保留完整数值精度。LLM 不直接接收完整数值序列，而是通过工具调用访问 $\mathcal{W}$。

一次 agent rollout 写成：

$$
\zeta=(a_1,o_1,\ldots,a_K,o_K,\hat{y}),
$$

其中 $a_r$ 是第 $r$ 步动作，可以是工具调用或推理步骤；$o_r$ 是对应 observation。策略选择动作为：

$$
a_r\sim\pi_\theta(\cdot\mid q,\mathcal{C},o_{1:r-1}).
$$

最终输出 $\hat{y}\in\mathcal{Y}$。

关键变化是：数值数据放在运行时里，LLM 只决定“该执行什么分析”，工具返回紧凑、可审计的结果。

## 5. 组件一：Runtime-native temporal tools

TimeClaw 的工具不通过 prompt 传输长数组，而是直接在 workspace $\mathcal{W}$ 上执行。工具返回的是 compact structured observation。论文默认工具包括：

- `list_channels`：列出变量；
- `series_overview`：返回每个 channel 的 $n,\min,\max,\mathrm{mean}$；
- `channel_stats`：返回均值、标准差、中位数、四分位数等；
- `channel_values`：读取有限长度原始切片；
- `compute_acf`：计算自相关；
- `detect_periodicity`：基于 FFT 检测主周期；
- `find_peaks`：找局部峰值；
- `arima_forecast`：拟合 ARIMA 并给出预测和 AIC。

论文强调每个数值判断都应由工具 observation 支撑，而不是 LLM 自由生成。这样 rollout 中每个工具动作对 $(a_r,o_r)$ 都形成可审计证据链，也能被后续记忆和能力演化复用。

## 6. 组件二：Experience-driven capability evolution

初始工具只能覆盖通用操作，但真实任务中会出现重复的领域子流程。TimeClaw 用能力演化算子 $\mathcal{E}$ 从成功轨迹中抽象新工具，并把它们加入 $\mathcal{T}$。

机制是：

1. 聚类或收集相似任务上的成功轨迹；
2. 由代码专长 LLM 抽象重复分析流程；
3. 生成带 typed signature、docstring 和实现的新工具；
4. 在 held-out 相似任务上执行验证；
5. 若成功率超过阈值 $\gamma$，加入工具库。

论文实验里的阈值为：

$$
\gamma = 0.7.
$$

这里的 $\gamma$ 是**新工具进入工具库的准入门槛**，不是判断某个单独答案是否正确的阈值。能力演化会从成功轨迹中抽象候选工具，但候选工具不能一生成就直接注册，否则可能把错误、过拟合或不稳定的代码加入长期工具箱。因此 TimeClaw 会把候选工具放到一组相似但未参与生成的 held-out 任务上执行验证：

$$
\text{held-out success rate} > \gamma.
$$

超过阈值后，这个工具才会被注册进 $\mathcal{T}$，未来 rollout 才能调用它。论文里的 $\gamma=0.7$ 表示候选工具至少要在 held-out 相似任务上达到 70% 成功率。

所谓 “held-out 相似任务” 可以理解为：和生成该工具的轨迹属于同一类/同一簇、需要同一种重复分析子流程，但没有参与候选工具归纳和代码生成的任务。例如 `capm_regression` 来自 TSAIA 金融任务中反复出现的市场因子回归流程，那么验证任务也应是未参与工具生成的 CAPM、beta 或 market-factor 类金融问题，而不是天气预测或异常检测任务。这个验证集的目的，是检验候选工具是否真的概括了一类可复用计算过程，而不是只适配了生成轨迹。

金融 TSAIA 任务中，TimeClaw 自动演化出三个复合金融工具：

- `portfolio_var`：计算投资组合 VaR；
- `portfolio_sharpe`：计算年化 Sharpe ratio；
- `capm_regression`：对资产收益和市场收益做 CAPM/OLS 回归，返回 $\alpha,\beta,R^2$。

这说明 TimeClaw 的工具库不是静态设计好的，而是可以从经验中扩展。

## 7. 组件三：Episodic multimodal memory

论文认为时间序列记忆不能只靠文本相似度，因为文本近不代表数值结构近；也不能简单把文本和数值串在一起，因为长序列会造成模态失衡。TimeClaw 因此设计双模态 key。

每条记忆记录为：

$$
m = (\tau, \phi, \psi, \zeta, \rho),
$$

其中：

- $\tau$：原任务；
- $\phi$：文本上下文 key；
- $\psi$：时间序列 fingerprint；
- $\zeta$：成功 rollout 轨迹；
- $\rho$：可迁移的简短 rationale，比如“暴雪会导致能源需求上升”。

### 7.1 文本 key

任务文本 descriptor $c_\tau$ 由任务背景、场景、约束、问题、channel 名称等字段拼接而成。文本 embedding 为：

$$
\phi = \Phi(c_\tau) \in \mathbb{R}^{d_\phi}.
$$

论文使用 `text-embedding-3-small`，维度：

$$
d_\phi = 1536.
$$

### 7.2 时间序列 fingerprint

时间序列 key 是：

$$
\psi = \Psi(\mathbf{X}_{1:T}) \in \mathbb{R}^{20}.
$$

这 20 维包括结构、统计、趋势、自相关、频谱、变点、多变量耦合和异常比例等特征。核心例子如下。

每个 channel 的均值、标准差和 z-score：

$$
\mu_i = \frac{1}{n_i}\sum_t x^{(i)}_t,
$$

$$
\sigma_i = \sqrt{\frac{1}{n_i-1}\sum_t (x^{(i)}_t - \mu_i)^2},
$$

$$
z^{(i)}_t = \frac{x^{(i)}_t - \mu_i}{\sigma_i}.
$$

高阶矩：

$$
\mathrm{skew}_i = \frac{1}{n_i}\sum_t (z^{(i)}_t)^3,
$$

$$
\mathrm{kurt}_i = \frac{1}{n_i}\sum_t (z^{(i)}_t)^4 - 3.
$$

线性趋势拟合：

$$
(a_i, b_i) = \arg\min_{a, b} \sum_t \big(x^{(i)}_t - a u_t - b\big)^2,
$$

并记录：

$$
\mathrm{slope}_i = \frac{a_i}{\sigma_i + \epsilon},
$$

$$
R^2_i = 1 - \frac{\sum_t (x^{(i)}_t - a_i u_t - b_i)^2}
{\sum_t (x^{(i)}_t - \mu_i)^2 + \epsilon}.
$$

自相关：

$$
\rho^{(i)}(\ell)
= \frac{\sum_{t=1}^{n_i-\ell} c^{(i)}_t c^{(i)}_{t+\ell}}
{\sum_t (c^{(i)}_t)^2 + \epsilon}.
$$

频谱特征通过 rFFT 得到：

$$
\widehat{S}^{(i)}_k = \big| \mathrm{rFFT}(c^{(i)})_k \big|^2.
$$

主频和主频功率占比：

$$
\mathrm{fftFreq}_i = f_{k^\star_i},
$$

$$
\mathrm{fftPFrac}_i =
\frac{\widehat{S}^{(i)}_{k^\star_i}}
{\sum_{k \ge 1} \widehat{S}^{(i)}_k + \epsilon}.
$$

多变量耦合用 channel pair 的平均绝对 Pearson 相关：

$$
\overline{|\rho|}
= \frac{2}{N''(N''-1)} \sum_{i<j} |\rho_{ij}|.
$$

为了避免不同 fingerprint 维度尺度差异支配距离，论文用记忆库级别 z-score：

$$
\boldsymbol{\mu}_\psi = \frac{1}{|\mathcal{M}|}\sum_{m \in \mathcal{M}} \psi_m,
$$

$$
\boldsymbol{\sigma}_\psi
= \mathrm{std}\big(\{\psi_m\}_{m \in \mathcal{M}}\big),
$$

$$
\tilde\psi = (\psi - \boldsymbol{\mu}_\psi) \oslash \boldsymbol{\sigma}_\psi.
$$

这里的“记忆库级别 z-score”意思是：标准化参数来自整个 memory bank，而不是来自单条时间序列自身。也就是说，TimeClaw 先在所有历史记忆记录的 fingerprint 上逐维计算均值和标准差，再把当前查询和历史样本都映射成“偏离记忆库平均水平多少个标准差”。

这样做是为了让 20 个 fingerprint 维度在距离计算中更公平。比如 `logLen` 可能只在 1 到 5 附近变化，而 kurtosis 可能跨几个数量级；如果直接算原始 L2 距离，方差大的维度会支配相似度。用 memory-bank-level z-score 后，距离比较的是每个维度的相对异常程度。若某个维度在记忆库中几乎是常数，论文把其标准差下限设为 $10^{-9}$，低于这个值就视为常数维度，使它标准化后不影响检索。

### 7.3 两阶段检索

给定 query task $\tau_q$，先用文本 embedding 做候选池：

$$
s_{\mathrm{text}}(q,m)=\cos(\phi_q,\phi_m).
$$

由于 embedding 是单位向量，等价于点积：

$$
\cos(\phi_q,\phi_m)=\phi_q^\top\phi_m.
$$

论文使用文本侧 top-$N$ 候选：

$$
\mathcal{N}(\phi_q)
= \operatorname*{Top}_{N,\,m \in \mathcal{M}^\phi}
\phi_q^\top \phi_m.
$$

默认：

$$
N=20.
$$

然后在候选池中按时间序列 fingerprint 距离重排：

$$
\mathrm{Retrieve}(\tau_q;\, k)
= \operatorname*{Top}_{k,\,m \in \mathcal{N}(\phi_q)}
-\big\| \tilde\psi_q - \tilde\psi_m \big\|_2.
$$

默认注入：

$$
k=3.
$$

这个设计的含义是：先保证任务语义相关，再保证数值动态结构相近。

Episodic multimodal memory 的检索发生在**新任务开始推理之前**。当前任务 $\tau_q$ 到来后，TimeClaw 先构造文本 key $\phi_q$ 和时间序列 key $\psi_q$，从 memory bank 中检索 top-$k$ 相似历史轨迹，再把这些轨迹压缩成可迁移的 reasoning trace 或 rationale，注入当前 prompt 的参考区域。随后 agent 才开始当前任务的工具调用和推理。

因此它通常不是每一次工具调用后都重新检索，而是作为当前 rollout 的初始化上下文增强。论文 case study 中，开启 memory retrieval 时 agent 先得到相似历史轨迹中的 upstream-to-downstream 因果推理模式，只用 7 次工具调用就答对；关闭记忆检索，即 $k=0$ 时，agent 做了 22 次泛化探索仍选错。这说明 memory 的作用是让 agent 在分析前获得“同类问题以前怎么解”的经验，减少从零探索。

## 8. 实验设置

论文在三个 benchmark 上评估：

1. **Context-is-Key (CiK)**：测试模型能否利用上下文做时间序列推理，覆盖气候、经济、能源、交通、零售等领域。
2. **TSRBench**：开放式、多任务、多模态时间序列推理 benchmark，覆盖 perception、reasoning、prediction、decision making。
3. **TSAIA Finance**：金融时间序列分析，任务包括 VaR、Sharpe ratio、market alpha、market beta 等。

主要 baseline 包括：

- 传统模型：ARIMA、ETS；
- 神经时间序列模型：DLinear、PatchTST；
- 时间序列 foundation model：Chronos、Lag-Llama、Moirai；
- 时间序列 LLM/agent：UniTime、Time-LLM、TS-Agent、TSci；
- 通用 agent pipeline：Direct Prompt、CoT、ReAct、Self-Reflection、Multi-Agent Reflection；
- 开源 LLM/VLM/TSLLM：Qwen、Gemma、InternVL、ChatTS、TS-Reasoner、TimeOmni 等。

实现上，TimeClaw 使用 LangChain 做 LLM agent loop，使用 MCP/FastMCP 提供每个任务隔离的 in-memory workspace。主实验 backbone 是 `gpt-5-nano`。

## 9. 评价指标

CiK 的主指标是 RCRPS，越低越好。论文写成：

$$
\ell_{\mathrm{CiK}}
(\widehat{\mathcal{P}}_{\tau}, \bm{y}^{\star}_{\tau})
=
\mathrm{RCRPS}_{\tau}
(\widehat{\mathcal{P}}_{\tau}, \bm{y}^{\star}_{\tau}).
$$

RCRPS 结合上下文相关区域的预测误差和约束违反惩罚：

$$
\mathrm{RCRPS}_{\tau}
=
\alpha_{\tau}\mathcal{E}_{\tau}
+
\mathcal{V}_{\tau}(\beta).
$$

其中 $\mathcal{E}_{\tau}$ 是 RoI 加权误差，$\mathcal{V}_{\tau}(\beta)$ 是约束违反项，官方设置 $\beta=10$。

确定性预测还报告 sMAPE：

$$
\mathrm{sMAPE}_{\tau}
=
\frac{1}{H}\sum_{h=1}^{H}
\frac{2|y^{\star}_{\tau,h}-\widehat{y}_{\tau,h}|}
{\max(|y^{\star}_{\tau,h}|+|\widehat{y}_{\tau,h}|,\varepsilon)}.
$$

论文取 $\varepsilon=10^{-2}$。

## 10. 主要实验结果

### 10.1 CiK：上下文利用能力

在 CiK 上，TimeClaw 达到最佳平均 RCRPS 和 sMAPE：

| 方法 | Avg. RCRPS ↓ | Avg. sMAPE ↓ | Avg. token ↓ |
|---|---:|---:|---:|
| TS-Agent | 0.1421 | 61.2980 | 47,455.6 |
| TSci | 0.1448 | 69.9068 | 47,905.1 |
| Direct Prompt | 0.1703 | 60.4407 | 24,861.3 |
| ReAct | 0.1514 | 66.2284 | 25,503.0 |
| Multi-Agent Reflection | 0.1294 | 55.5704 | 63,033.0 |
| **TimeClaw** | **0.1145** | **52.4542** | **35,553.2** |

相对最强 baseline Multi-Agent Reflection，RCRPS 从 0.1294 降到 0.1145，论文报告相对提升约 11.5%。同时 token 使用从 63,033 降到 35,553，约少 43.6%。

从上下文类型看，TimeClaw 在 intemporal、historical、future、covariate 四类中拿到最佳 RCRPS，在 causal 中几乎并列最优：

| 上下文类型 | TimeClaw RCRPS |
|---|---:|
| Intemporal | 0.1303 |
| Historical | 0.0886 |
| Future | 0.0703 |
| Covariate | 0.1239 |
| Causal | 0.1597 |

### 10.2 TSRBench：开放式时间序列推理

在 TSRBench 上，所有 agent baseline 都使用 GPT-5-nano。TimeClaw 的平均准确率最高且 token 最少：

| 方法 | Perception | Reasoning | Prediction | Decision | Avg. Acc. | Avg. token |
|---|---:|---:|---:|---:|---:|---:|
| CoT | 48.57 | 36.84 | 46.30 | 28.57 | 40.05 | 22,274 |
| ReAct | 55.71 | 36.26 | 43.52 | 31.75 | 40.78 | 25,165 |
| Self-Reflection | 50.00 | 40.93 | 38.89 | 30.16 | 40.29 | 25,799 |
| Multi-Agent Reflection | 62.85 | 33.92 | 54.63 | 25.40 | 42.96 | 45,279 |
| TSci | 65.71 | 33.33 | 43.52 | 26.98 | 40.53 | 51,273 |
| **TimeClaw** | **64.29** | **43.86** | **59.26** | **33.33** | **49.76** | **15,979** |

TimeClaw 在 perception 上略低于 TSci，但在 reasoning、prediction、decision making 上领先。说明序列化或画图可能足够支持一部分感知题，但涉及因果、预测和决策时，时间序列原生工具和记忆更重要。

与开源模型相比，TimeClaw 用 GPT-5-nano 也超过了更大的 Qwen3-235B-A22B、Qwen2.5-72B、InternVL3.5-38B，以及 TimeOmni、TS-Reasoner 等 TSLLM。

### 10.3 TSAIA：金融实用性

TSAIA 是金融时间序列分析 benchmark。论文强调 TimeClaw 通过能力演化生成了 `portfolio_var`、`portfolio_sharpe`、`capm_regression` 三个工具，并在多选准确率上显著超过通用 agent 和金融专用 agent。论文报告相对提升 38.9%。

这个结果的关键点不是“LLM 知道金融公式”，而是 agent 从重复成功轨迹中把公式化流程固化成可执行工具，之后测试时直接调用，减少手算错误和 prompt 中的数值负担。

## 11. 消融实验与案例

消融结果显示，去掉 tool harness、capability evolution 或 memory retrieval 都会降低性能。检索记忆的 top-$k$ 越大，CiK 上 sMAPE 和 RCRPS 整体更好；换更强 backbone 也能继续提升，说明 TimeClaw 和 LLM 能力是互补关系。

案例一是 CiK 中的 SVAR 任务。两个任务有完全相同的历史序列和 ground truth，区别只是文本上下文是否给出显式 SVAR 方程。给出方程时，agent 通过工具读取近期值，再按方程递推，sMAPE 约 0.44%；只有定性 parent list 时，agent 无法把 $X_0$ 的跳变转成 $X_1$ 的幅度变化，sMAPE 约 124%。这说明 TimeClaw 的提升确实来自上下文理解，而不是只拟合历史曲线。

案例二是 TSRBench 河流水位因果推理。没有记忆时，agent 做了 22 次工具调用仍选错因果方向；有 top-3 记忆时，检索到“上游到下游级联”的相似推理轨迹，只做 7 次有针对性的自相关检验就选对结构。这里记忆转移的是分析规则，而不是测试样本数据。

## 12. 这篇论文的主要贡献

1. 明确指出通用 LLM 直接处理时间序列有 datatype misalignment 和 agentic process misalignment。
2. 提出 TimeClaw：冻结 LLM policy 外挂时间序列原生 harness。
3. 把完整数值序列保存在 workspace，通过工具返回可审计证据，避免长数值序列塞进 prompt。
4. 设计文本 embedding + 时间序列 fingerprint 的两阶段记忆检索。
5. 通过能力演化把重复分析流程升级成可执行工具。
6. 在 CiK、TSRBench、TSAIA 上证明性能和 token efficiency 同时提升。

## 13. 局限与启发

这篇论文的局限主要在于：TimeClaw 依赖工具设计、轨迹质量和记忆库建设；能力演化中用 LLM 生成工具，仍需要执行验证和安全约束；fingerprint 是人工设计的 20 维统计特征，可能不足以覆盖复杂时序结构；主实验使用闭源 API backbone 和 embedding，复现成本取决于 API 可用性。

但它的启发很明确：时间序列任务不一定要把 LLM 变成时间序列模型。更稳妥的路径是让 LLM 负责规划、解释、选择工具和整合上下文，让数值计算留在原生运行时中完成。对于需要“上下文 + 数值 + 决策”的实际场景，这种 harness 思路比单纯序列化长数组更有工程可行性。

# 七篇时间序列与 Agent 论文中文综合解读

**覆盖论文**：

1. VESTA: Visual Exploration with Statistical Tool Agents
2. MedRLM: Recursive Multimodal Health Intelligence for Long-Context Clinical Reasoning, Sensor-Guided Screening, Evidence-Grounded Decision Support, and Community-to-Tertiary Referral Optimization
3. TelcoAgent: A Scalable 5G Multi-KPM Forecasting With 3GPP-Grounded Explainability
4. FinSTaR: Towards Financial Reasoning with Time Series Reasoning Models
5. Evaluating Interactive 2D Visualization as a Sample Selection Strategy for Biomedical Time-Series Data Annotation
6. Can LLM Coding Agents Reason About Time Series?
7. TS-Memory: Plug-and-Play Memory for Time Series Foundation Models

**说明**：VESTA、MedRLM、2DV 标注、Coding Agents、TS-Memory 均已按 arXiv TeX 源码阅读；FinSTaR 复用本项目已有 TeX 源码和解读；TelcoAgent 题名未能定位到同名官方论文源，本文只给出可验证状态与应有解读框架，不编造实验数值。

## 1. 总览：这七篇在研究什么

这些论文表面上来自不同领域：科学建模、医疗、通信、金融、数据标注、LLM coding agent、时间序列基础模型记忆。但它们共同回答一个问题：

$$
\text{时间序列智能}
\neq
\text{单步预测模型}
$$

更完整的系统通常由四类能力组成：

| 能力 | 对应论文 | 核心问题 |
|---|---|---|
| 工具化探索 | VESTA、Coding Agents | 模型如何调用代码、统计检验、可视化来理解序列 |
| 领域化推理 | MedRLM、FinSTaR、TelcoAgent 预期方向 | 如何把医疗、金融、通信规则接入时间序列判断 |
| 人机协同数据构造 | 2DV 标注论文 | 如何选择最有价值样本让人标注 |
| 记忆与适配 | TS-Memory | 如何让冻结 TSFM 在新域中适配而不做在线检索 |

一个统一抽象可以写成：

$$
y = \Pi_\theta(x_{1:T}, c, m, a)
$$

其中 $x_{1:T}$ 是观测序列，$c$ 是领域上下文，$m$ 是记忆或检索结果，$a$ 是工具/动作轨迹，$\Pi_\theta$ 是模型或 agent policy。传统 forecasting 只关注 $p(y_{T+1:T+H}\mid x_{1:T})$；这些论文则把问题扩展到可解释建模、风险决策、样本选择、检索蒸馏和过程审计。

## 2. VESTA：用动态统计工具做视觉探索

**来源**：[arXiv 2606.00384](https://arxiv.org/abs/2606.00384)，TeX 目录：`tex/VESTA_Visual_Exploration_with_Statistical_Tool_Agents`

**一句话总结**：VESTA 让 VLM/LLM agent 在拟合概率模型时，不只反复自我批评，而是动态创建可视化诊断工具，通过残差、分布、频谱、自相关、统计检验等证据来改进 PyMC 模型。

### 2.1 问题定义

论文假设数据 $D$ 由真实生成过程 $M(\theta)$ 产生，agent 需要输出候选概率模型 $\tilde{M}(\tilde{\theta})$。模型拟合好坏由指标

$$
R(D,\tilde{M}(\tilde{\theta}))
$$

评价。VESTA 的关键对象是视觉工具：

$$
\varepsilon(D,M,\theta)
$$

它是一个 Python 函数，输入数据与当前模型，输出图像、统计量或诊断结果。区别于一次性代码执行，VESTA 把工具保存在注册表 $\mathcal{E}$ 中，在同一个任务内复用。

### 2.2 Agent 结构

| Agent 要素 | VESTA 中的实现 |
|---|---|
| State / workspace | 数据 $D$、当前最优 PyMC 模型、参数、历史摘要 $s_{0:i}$、工具注册表 $\mathcal{E}$ |
| Policy/model | LLM/VLM 组合：proposal、tool manager、critic、summarizer |
| Action space | 选择旧工具、生成新 Python 工具、执行工具、提出新 PyMC 模型、停止 |
| Tool space | 残差图、QQ plot、频谱、自相关、Ljung-Box、GMM、信息准则等 |
| Trajectory | $\{M_i,\theta_i,T_i,s_i\}_{i=1}^N$ |
| Memory | 当前 run 内动态增长的工具注册表与压缩摘要 |
| Update | 每轮根据工具输出和指标 $R$ 选择更优模型 |

算法核心可写成：

$$
\varepsilon_i^*=\operatorname{ToolManager}(s_{i-1},D,\mathcal{E})
$$

$$
T_i=\varepsilon_i^*(D,M_{i-1},\theta_{i-1})
$$

$$
(M_i,\theta_i)=\operatorname{Critique}(T_i,s_{0:i-1},D)
$$

$$
(M_{\text{best}},\theta_{\text{best}})
=
\arg\min_{(M,\theta)\in\{(M_i,\theta_i),(M_{\text{best}},\theta_{\text{best}})\}}
R(D,M(\theta)).
$$

直觉是：工具输出 $T_i$ 把“模型哪里不对”变成可见证据，critic 不再只凭语言猜测模型结构。

### 2.3 关键指标

时间序列任务使用 ELPD-LOO：

$$
\mathrm{ELPD\text{-}LOO}
=
\sum_{i=1}^{n}
\int p_t(\tilde{y}_i)
\log p(\tilde{y}_i\mid y)
d\tilde{y}_i .
$$

$p_t$ 是真实数据生成分布的近似，$p(\tilde{y}_i\mid y)$ 是 posterior predictive。ELPD 越高表示模型对留一观测的预测密度越高；它关注的是概率预测质量，而不是点预测误差。

### 2.4 实验结论

VESTA 提出 DAWN benchmark，包含 200 个分布拟合任务和 200 个时间序列建模任务，覆盖 Easy、Hard、Astro 三档难度。显著性汇总显示，在时间序列建模上，VESTA 的 None/Dynamic/Expert 三种配置对 PyVision 和 Box-LM 经常显著胜出；Dynamic 和 Expert 在 Hard 与 Astro 更稳定。

最有价值的结论不是“动态工具永远超过专家工具”，而是：

$$
\text{动态工具生成}
\approx
\text{让 agent 自己提出诊断实验}
$$

VESTA 的动态工具更偏好多面板视觉证据，尤其大量覆盖残差分析和自相关诊断；但论文也承认 VLM 解释复杂多面板图仍是瓶颈，因此动态工具没有稳定超过人工专家工具。

## 3. MedRLM：递归多模态临床推理框架

**来源**：[arXiv 2606.20164](https://arxiv.org/abs/2606.20164)，TeX 目录：`tex/MedRLM_Recursive_Multimodal_Health_Intelligence`

**一句话总结**：MedRLM 不是报告一个已跑完的医疗模型成绩，而是提出一个递归、多模态、证据图记忆、传感器触发和转诊优化的临床决策支持框架。

### 3.1 临床环境建模

MedRLM 不把病历压成一个长 prompt，而是定义外部临床环境：

$$
\mathcal{E}_p=
\{X_p^{\mathrm{text}},X_p^{\mathrm{ehr}},
X_p^{\mathrm{img}},X_p^{\mathrm{sens}},
\mathcal{G},\mathcal{R},\mathcal{H}\}.
$$

这里 text 是症状/病程记录，EHR 是纵向结构化病历，img 是影像或手机图像，sens 是可穿戴/嵌入式传感器，$\mathcal{G}$ 是指南，$\mathcal{R}$ 是转诊规则，$\mathcal{H}$ 是本地医疗资源约束。

输出为：

$$
Y_p=(\hat{y}_p,r_p,d_p,\mathcal{A}_p,U_p),
$$

分别表示临床解释、风险分数、转诊/照护决策、证据审计轨迹、不确定性与安全分数。

### 3.2 递归控制器

核心控制器按复杂度决定直接回答还是拆分：

$$
\Phi(q,\mathcal{E}_p)=
\begin{cases}
M(q,\rho(q,\mathcal{E}_p)), & \kappa(q,\mathcal{E}_p)\le K,\\
\Omega(\{\Phi(q_j,\mathcal{E}_{p,j})\}_{j=1}^{k}), & \kappa(q,\mathcal{E}_p)>K.
\end{cases}
$$

复杂度分数为：

$$
\kappa(q,\mathcal{E}_p)=
\gamma_1 L+
\gamma_2 V+
\gamma_3 D+
\gamma_4 R_{\mathrm{risk}}+
\gamma_5 C_{\mathrm{conflict}}.
$$

$L$ 衡量上下文长度，$V$ 衡量模态多样性，$D$ 衡量证据分散程度，$R_{\mathrm{risk}}$ 是初始风险，$C_{\mathrm{conflict}}$ 是证据冲突。临床含义是：病例越长、模态越多、风险越高、证据越矛盾，就越应递归拆解，而不是一次性回答。

### 3.3 Evidence Graph Memory

证据图为：

$$
\mathcal{M}_p=(\mathcal{V}_p,\mathcal{E}^g_p).
$$

节点包括患者观察、临床实体、异常影像发现、传感器 biomarker、指南陈述、转诊标准；边表示时间、语义、因果或指南关系。证据节点三元组：

$$
\tau_i=(o_i,s_i,\delta_i),
$$

其中 $o_i$ 是患者观察，$s_i$ 是来源或指南语句，$\delta_i$ 是标准化定义。

证据相关性：

$$
S(e_i|q,p)=
\lambda_1\operatorname{sim}(h_q,h_{e_i})
\lambda_2\operatorname{rel}(e_i,p)
\lambda_3\operatorname{cred}(e_i)
-\lambda_4\operatorname{age}(e_i)
-\lambda_5\operatorname{conflict}(e_i).
$$

随后用 softmax 得到证据权重：

$$
\alpha_i=
\frac{\exp(S(e_i|q,p))}
{\sum_{j=1}^{N}\exp(S(e_j|q,p))},
\qquad
z_p^{\mathrm{rag}}=\sum_i\alpha_i h_{e_i}.
$$

这比普通 RAG 多了一层结构：检索证据被纳入可审计图，而不是只拼接进 prompt。

### 3.4 传感器触发与转诊优化

传感器序列：

$$
X_p^{\mathrm{sens}}=\{x_1,\ldots,x_T\}.
$$

窗口 biomarker：

$$
b_t=G_\theta(x_{t-w:t}).
$$

异常度使用马氏距离：

$$
a_t=(b_t-\mu_p)^T\Sigma_p^{-1}(b_t-\mu_p).
$$

若 $a_t>\epsilon$，触发更深递归：

$$
q_t^{\mathrm{sens}}=\operatorname{Trigger}(a_t,\mathcal{G},\mathcal{R}).
$$

转诊决策集合：

$$
\mathcal{D}=\{d_1,d_2,d_3,d_4\},
$$

对应自我照护教育、基层随访、专科远程会诊、三级医院转诊。最优决策：

$$
d_p^*=
\arg\max_{d\in\mathcal{D}}
\left[
B(d,r_p,U_p,\mathcal{F}_p)
-C(d,\mathcal{H})
-\eta D(d,r_p)
\right].
$$

这个式子体现了医疗部署的现实约束：不只是预测风险，还要平衡收益、资源成本和高风险延迟转诊惩罚。

### 3.5 评价状态

论文列出真实数据评估设计，包括 MIMIC-IV、eICU-CRD、MIMIC-CXR-JPG、CheXpert、PTB-XL、PhysioNet/CinC 2012 等。它明确说明完整 MedRLM pipeline 尚未在受限数据集上执行，因此表格给的是 published anchors，而不是 MedRLM 自身准确率。阅读时应把它看作系统设计论文/框架论文，而不是已完成 benchmark 论文。

## 4. TelcoAgent：官方来源未定位，谨慎解读

**检索状态**：未找到题名为 “TelcoAgent: A Scalable 5G Multi-KPM Forecasting With 3GPP-Grounded Explainability” 的官方 arXiv、OpenReview、会议或作者页。可检索到的是不同论文 [TelcoAgent-Bench: A Multilingual Benchmark for Telecom AI Agents](https://arxiv.org/abs/2604.06209)，主题是电信 LLM agent benchmark，不是 Multi-KPM forecasting。

因此，本节不编造作者、公式或实验数值。如果该论文存在，按标题推断它应包含以下核心问题：

$$
\hat{\mathbf{Y}}_{t+1:t+H}
=
f_\theta(\mathbf{X}_{t-L+1:t},\mathbf{c}_{\mathrm{cell}},\mathbf{g}_{\mathrm{3GPP}})
$$

其中 $\mathbf{X}$ 是多小区、多 KPM 历史序列，例如 PRB utilization、RSRP/RSRQ/SINR、throughput、latency、handover、RRC connection、drop rate 等；$\mathbf{c}_{\mathrm{cell}}$ 是小区配置和拓扑；$\mathbf{g}_{\mathrm{3GPP}}$ 是 3GPP 规则或术语约束。

多 KPM 预测通常应优化：

$$
\mathcal{L}_{\mathrm{forecast}}
=
\sum_{k=1}^{K}\sum_{h=1}^{H}
w_k\ell(\hat{y}_{t+h}^{(k)},y_{t+h}^{(k)}),
$$

其中 $k$ 表示 KPM，$h$ 表示预测 horizon，$w_k$ 表示业务重要性权重。若强调 3GPP-grounded explainability，还应把解释约束为：

$$
e=\operatorname{Explain}(\hat{\mathbf{Y}},\mathbf{X},\mathcal{R}_{3GPP})
$$

即解释不能只说“模型注意到某个变量”，而要映射到 3GPP 语义，如拥塞、覆盖不足、干扰、切换失败、容量瓶颈等。

若用户提供 PDF/arXiv ID/源码，我可以按项目规则补齐正式 TeX 目录、公式、实验表和 HTML 解读。

## 5. FinSTaR：金融时间序列推理

**来源**：[arXiv 2605.03460](https://arxiv.org/abs/2605.03460)，本项目已有解读：`md/FinSTaR_paper_reading.md`

**一句话总结**：FinSTaR 认为金融 TSRM 不能只做价格预测，而要区分可由历史价格确定计算的 assessment 与受外部事件影响的 stochastic prediction。

### 5.1 任务分类

论文提出：

$$
\mathcal{C}
=
\{\text{single},\text{multi}\}
\times
\{\text{assessment},\text{prediction}\}.
$$

落到金融领域形成 10 个任务：Drawdown、Volatility Regime、Trend Direction、Correlation、Event Response、Support/Resistance、Drawdown Recovery、Volatility Forecast、Relative Performance、Pair Convergence。

### 5.2 Compute-in-CoT

对 assessment，答案可计算。例如 drawdown：

$$
\operatorname{Drawdown}
=
\frac{\operatorname{Peak}-\operatorname{Current}}
{\operatorname{Peak}}.
$$

如果 peak 为 261.44，current 为 136.00：

$$
\frac{261.44-136.00}{261.44}=48.0\%.
$$

超过阈值后映射为 severe decline。Compute-in-CoT 的价值是让模型学到“提取数值、计算指标、按阈值分类”，而不是凭金融语言直觉猜答案。

### 5.3 Scenario-Aware CoT

对 prediction，未来不可由价格完全确定。FinSTaR 生成三类场景：

$$
\{\text{base},\text{adverse},\text{favorable}\}
\rightarrow
\text{assessment}
\rightarrow
\text{judgment}.
$$

它不是让模型伪装确定性证明，而是让模型显式承认不确定性。

### 5.4 结果

主结果显示 FinSTaR 在 Test A/B/C 平均准确率为 78.9、78.3、78.1，显著超过 Qwen2.5-7B zero-shot、TimeOmni-1 zero-shot 和 Qwen2.5 w/ CoT。消融中 w/ CoT 平均 78.9，w/o CoT 平均 55.9；Scenario-Aware CoT 在 prediction 平均从 65.2 提升到 68.2。

最重要实践启发：

$$
\text{金融推理}
=
\text{可计算 assessment}
+
\text{不确定 prediction}
$$

二者必须用不同推理轨迹训练。

## 6. 2DV 标注论文：交互式二维可视化作为样本选择策略

**来源**：[arXiv 2603.26592](https://arxiv.org/abs/2603.26592)，TeX 目录：`tex/Evaluating_Interactive_2D_Visualization_as_a_Sample_Selection_Strategy_for_Biomedical_Time_Series_Data_Annotation`

**一句话总结**：2DV 让真实标注者在 t-SNE/PCA/UMAP 可视化中自由选样本，能更好发现稀有类并提升聚合标签效果，但在小预算、单标注者、多类别不平衡任务中风险更高。

### 6.1 三种样本选择

RND 是随机采样。FAFT 选择离已选集合最远的样本：

$$
\mathbf{x}^*
=
\arg\max_{\mathbf{x}\notin A}
d(\mathbf{x},A).
$$

其中 $A$ 是已选样本集合，$d(\mathbf{x},A)$ 通常是 $\mathbf{x}$ 到集合 $A$ 最近点的距离。它鼓励覆盖整个特征空间。

2DV 使用 TSExplorer：把 SSL 特征投影到 t-SNE/PCA/UMAP，标注者在散点图中自由选择样本，同时查看视频、音频或传感器波形。

### 6.2 数据与设置

| 数据 | 模态 | 任务 | 规模 |
|---|---|---|---|
| MAIJU-DS / IMA | 婴儿四肢 IMU，24 通道，52 Hz | posture、movement | 41 recordings，约 29 小时，76,817 可用 frame |
| NICU-A / SER | NICU 语音音频 | valence、arousal | 43 个 16 小时录音，129,007 utterances |

12 名标注者参与；每个数据集 3 名专家、3 名非专家。IMA 每人每方法每 track 标 360 个样本，SER 为 400 个。

### 6.3 指标

IMA 用 UAF1：

$$
\operatorname{UAF1}
=
\frac{1}{C}
\sum_{c=1}^{C}
\operatorname{F1}_c.
$$

SER 用 UAR：

$$
\operatorname{UAR}
=
\frac{1}{C}
\sum_{c=1}^{C}
\operatorname{Recall}_c.
$$

失败风险包含三项：模型性能失败、稀有类覆盖失败、标签分布不稳定。论文还用 Hellinger distance 衡量标注者标签分布差异。

### 6.4 结果解释

总体结论是条件性的：

| 场景 | 更合适的方法 |
|---|---|
| 多标注者标签可合并 | 2DV 往往最好 |
| IMA 多类别且预算紧 | FAFT 或 RND 更稳 |
| SER 专家标注 | 2DV 风险最低 |
| 标注者数量/专业性不确定 | RND 最保守 |

失败风险总分中，RND 为 105.0，FAFT 为 110.0，2DV 为 126.0，分数越低越安全。这不是说 2DV 没用，而是说明自由探索会带来更高方差。2DV 的价值在于让人发现算法不一定会选的稀有类；风险在于不同人会探索不同区域。

## 7. Coding Agents：LLM 编程代理能推理时间序列吗

**来源**：[arXiv 2606.16545](https://arxiv.org/abs/2606.16545)，TeX 目录：`tex/Can_LLM_Coding_Agents_Reason_About_Time_Series`

**一句话总结**：代码工具能提升时间序列理解准确率，但最强 hybrid agent 仍有 22% 到 34% 错误；失败常来自误读代码结果、策略选择不当或过度信任工具。

### 7.1 形式化任务

给定时间序列集合：

$$
\mathcal{X}=(X_1,\ldots,X_N),\qquad
X_i=(x_1,\ldots,x_T).
$$

表示函数有两种：

$$
R_{\mathrm{raw}}(X)
$$

表示把原始数值直接放进 prompt；

$$
R_{\mathrm{df}}(X)
$$

表示把序列放在 pandas DataFrame 中供代码查询。

多选题定义为：

$$
A=\{a_1,\ldots,a_k\},\qquad
a^*=\arg\max_{a\in A}\Pr(a\mid Q,R(X)).
$$

模型输出：

$$
\mathcal{O}=(r,a)
$$

或在 coding setup 中：

$$
\mathcal{O}=(r,c,\operatorname{Exec}(c),a).
$$

### 7.2 三种 agent

| 设置 | 表示 | 工具 | 循环 |
|---|---|---|---|
| Direct | $R_{\text{raw}}$ | 无 | 单轮 |
| Code | $R_{\text{df}}$ | Python code | 多轮 |
| Hybrid | $R_{\text{raw}}+R_{\text{df}}$ | Python code | 多轮 |

Agent 视角下，code agent 的 action space 是写 Python、执行、读取 stdout/stderr、继续写或回答。它的 memory 是多轮对话中的代码与执行结果。

### 7.3 主结果

| Dataset | Model | Direct | Code | Hybrid | Random |
|---|---|---:|---:|---:|---:|
| TSE | gpt-oss-120b | 65.3% | 70.4% | 78.0% | 40.1% |
| TSE | qwen3-next-80b | 63.5% | 56.4% | 68.1% | 40.1% |
| TSFU | gpt-oss-120b | 55.6% | 63.0% | 65.6% | 29.3% |

对 gpt-oss-120b，代码访问稳定有帮助；但对 qwen3-next，纯 code 低于 direct，说明 coding agent 能力不是“给工具就行”，还取决于模型是否会可靠编程、调试和解释结果。

### 7.4 失败模式

论文用 LLM judge 标注输出 $\mathcal{O}$，关注：

| 类别 | 典型问题 |
|---|---|
| Strategy | statistical test、spectral analysis、curve fitting、rolling stats、simple arithmetic |
| Methodological errors | 概念误解、错误策略、阈值/方法错误、不支持假设 |
| Code problems | 工具调用失败、语法错误、部分失败、无代码 |
| Reasoning mismatch | 算对但选错、过度相信错误输出 |

关键启发：

$$
\text{代码执行}
\neq
\text{正确分析}
$$

工具把数值计算外包给 Python，但“应该算什么、如何解释结果、结果是否支持选项”仍需要模型推理。

## 8. TS-Memory：把检索蒸馏成可插拔记忆

**来源**：[arXiv 2602.11550](https://arxiv.org/abs/2602.11550)，TeX 目录：`tex/TS_Memory_Plug_and_Play_Memory_for_Time_Series_Foundation_Models`

**一句话总结**：TS-Memory 用离线 kNN teacher 构造置信度感知分位数目标，再蒸馏到轻量 PlugMem 适配器中，推理时无需检索，只有常数级额外开销。

### 8.1 两阶段设计

教师数据集：

$$
\mathcal{D}_{\text{teach}}
=
\{(\mathbf{X}_t,\mathbf{Y}_t,\widetilde{\mathbf{Q}}_t,\operatorname{Conf}_t)\}.
$$

$\widetilde{\mathbf{Q}}_t\in\mathbb{R}^{Q\times H\times C}$ 是检索邻居未来轨迹聚合出的分位数目标，$\operatorname{Conf}_t$ 是检索置信度。

### 8.2 离线 kNN teacher

冻结编码器提取 embedding：

$$
\mathbf{e}_t=f_{\mathrm{enc}}(\mathbf{X}_t),
\qquad
\mathbf{e}_i=f_{\mathrm{enc}}(\mathbf{X}^{(i)}).
$$

候选距离：

$$
d_i=\|\mathbf{e}_t-\mathbf{e}_i\|_2.
$$

为了处理 level shift，用尾部均值对齐：

$$
\mathbf{s}_i=
\operatorname{mean}(\mathbf{X}_{t,L-m+1:L})
-
\operatorname{mean}(\mathbf{X}^{(i)}_{L-m+1:L}).
$$

$$
\mathbf{X}_{\mathrm{align}}^{(i)}
=
\mathbf{X}^{(i)}+\mathbf{s}_i,\qquad
\mathbf{Y}_{\mathrm{align}}^{(i)}
=
\mathbf{Y}^{(i)}+\mathbf{s}_i.
$$

邻居权重：

$$
w_k=
\frac{\exp(-\psi(d_k)/\tau_{\mathrm{ret}})}
{\sum_{j=1}^{K}\exp(-\psi(d_j)/\tau_{\mathrm{ret}})}.
$$

分位数 teacher：

$$
\widetilde{Q}_{t,j,u}
=
v_{\pi(m^*)},
\qquad
m^*=\min\{m:S_m\ge q_j\}.
$$

置信度：

$$
\operatorname{Conf}_t=\max_{1\le k\le K}w_k.
$$

### 8.3 置信门控蒸馏

任务损失是分位数 pinball loss：

$$
\mathcal{L}_{\mathrm{task}}
=
\mathbb{E}_t[
\operatorname{Pinball}_{\mathcal{Q}}
(\widehat{\mathbf{Q}}^{\mathrm{mem}}_t,\mathbf{Y}_t)].
$$

先比较 teacher 与 backbone 的中位数误差：

$$
\operatorname{err}_t^\star
=
\frac{1}{|\mathcal{U}|}
\sum_{u\in\mathcal{U}}
|Y_{t,u}-Q^\star_{t,j^*,u}|,
\quad
\star\in\{T,\mathrm{base}\}.
$$

只有 teacher 明显优于 backbone 才蒸馏：

$$
\chi_t=
\mathbb{I}(\operatorname{err}_t^T+\epsilon_{\mathrm{gate}}
<
\operatorname{err}_t^{\mathrm{base}}),
\qquad
\omega_t=\chi_t\operatorname{Conf}_t^\gamma.
$$

最终损失：

$$
\mathcal{L}
=
\mathcal{L}_{\mathrm{task}}
\lambda_{\mathrm{align}}\mathcal{L}_{\mathrm{align}}
\lambda_{\mathrm{reg}}\mathcal{L}_{\mathrm{reg}}.
$$

推理融合：

$$
\widehat{\mathbf{Q}}^{\mathrm{final}}_t
=
(1-\alpha)\widehat{\mathbf{Q}}^{\mathrm{base}}_t
\alpha\widehat{\mathbf{Q}}^{\mathrm{mem}}_t.
$$

### 8.4 结果与意义

TS-Memory 在 ChronosBolt、Chronos2、Sundial、TimesFM 四类冻结 TSFM 上，对 ETTh1/2、ETTm1/2、Electricity、Exchange、Traffic、Weather 等数据集普遍降低 MSE/MAE。例如 TimesFM 上 ETTm2 MSE 从 0.332 降到 0.279，改善 16.0%；Chronos2 上 Weather MSE 从 0.274 降到 0.241，改善 12.0%。

效率上，在线 TS-RAG 需要检索，常导致总延迟翻倍甚至接近三倍；TS-Memory 检索时间为 0，只增加轻量 forward，典型总延迟只比 Origin 高约 4% 到 5%。这就是“把检索编译进参数记忆”的实际价值。

## 9. 横向比较

| 论文 | 最核心机制 | 是否 agent | 是否时间序列 | 是否有工具/记忆 | 最大风险 |
|---|---|---|---|---|---|
| VESTA | 动态可视化统计工具 | 是 | 是，且含分布拟合 | 工具注册表 | VLM 读复杂图能力不足 |
| MedRLM | 递归多模态临床控制器 | 是 | 是，含 EHR/传感器 | 证据图记忆 | 框架多，完整实证未完成 |
| TelcoAgent | 未找到官方源 | 预期是 | 预期是 | 预期含 3GPP 规则 | 不能验证 |
| FinSTaR | 结构化金融 CoT | 否，reasoning model | 是 | 内化计算/场景 | 无外部新闻/财报 |
| 2DV 标注 | 人在 2D 投影中选样本 | 人机协同 | 是 | 交互式可视化 | 小预算下方差高 |
| Coding Agents | Python 工具循环 | 是 | 是 | 代码执行 | 会算不等于会解释 |
| TS-Memory | 检索到记忆蒸馏 | 否 | 是 | 参数化记忆 | teacher 噪声会被蒸馏 |

统一来看，这些工作正在把时间序列研究从

$$
\hat{y}_{t+H}=f_\theta(x_{1:T})
$$

推进到

$$
\hat{y},e,d
=
\operatorname{System}
(x_{1:T},\text{tools},\text{memory},\text{domain rules},\text{human feedback}),
$$

其中 $e$ 是解释，$d$ 是决策。真正困难的部分不是预测函数，而是如何保证过程可审计、工具调用可靠、领域约束有效、记忆不泄漏、人类标注成本可控。


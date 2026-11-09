# 2026-11-09 时间序列研究晨间简报

- 检索时间：2026-11-09 14:50–15:05（Asia/Shanghai）
- 时间范围：2026-08-09 至 2026-11-09；仅收录可确认落在窗口内的条目。
- 来源：arXiv、GitHub 官方仓库与 GitHub API；补检 AI HOT / DailyArXiv 相关线索，未发现需要高优先级补充的同主题新论文。

## 今日判断

1. **TSFM 正从单序列零样本预测走向多变量、协变量和低延迟部署。** Chronos-2 的多变量概率预测与 TailDART 的金融低延迟设计是两个直接信号。
2. **时间序列 Agent 的核心竞争点转向可审计的运行时适应。** TimeEvo 管工具准入，TimEvolve 则把预测兑现后的延迟反馈写入后续编排策略。
3. **reasoning 方向出现“少想一些但保留关键结构”的路线。** TimesJev 将序列压缩到适配 System-1 的表示；Twice Upon a Time 证明原始量纲和归一化结构应并存。

## 时间序列基础模型最新研究

### 1. [TimeOmni-Live: Continuous & Live Time Series Understanding with Long-Term Memory](https://arxiv.org/abs/2611.09502)

- 日期：2026-11-06（arXiv v1）
- 来源：arXiv
- 摘要：提出连续、状态化的时序理解范式与 LiveTS-Suite（18 类任务、5K+ 数据流、2B+ 时间步），通过跨窗口持久记忆和流式同步支持长期理解；作者报告 4B 模型在该套件优于所比较的前沿 LLM 且延迟更低。
- 相关性判断：**高（foundation model / 流式 reasoning）**。为 Agent 的长期状态层提供候选，但必须按预测原点审计记忆写入、外部上下文首见时点与跨窗口泄漏。

### 2. [TailDART: Compute-Efficient Foundation Models for Financial Time-Series Forecasting](https://arxiv.org/abs/2611.09176)

- 日期：2026-11-06（arXiv v1）
- 来源：arXiv
- 摘要：提出 268 万参数的金融 TSFM，采用 grouped-query attention 降低 KV-cache 带宽；作者报告相对现有 TSFM 最多 48.1% 推理加速，并在多资产、高波动场景保持竞争力。
- 相关性判断：**高（foundation model / 部署）**。为 Agent 提供低时延数值专家，适合做 agentic trading 或流式预测工作流的底座；结果目前仍为预印本，需复现验证。

### 3. [Decouple to Reuse: Fine-Grained Knowledge Augmentation for Time Series Foundation Models](https://arxiv.org/abs/2611.05993)

- 日期：2026-11-04（arXiv v1）
- 来源：arXiv
- 摘要：将趋势与季节性分解为双分支残差码本，再检索、融合至冻结 TSFM 的下游表示，以缓解跨域迁移中的粗粒度检索噪声；在 8 个真实基准、4 个 TSFM 骨干上评估。
- 相关性判断：**高（foundation model / memory）**。可视为给 TS Agent 增加可复用模式记忆的候选模块，尤其适合跨业务线或跨传感器迁移。

### 4. [Chronos-2: A foundation model for multivariate time series forecasting](https://arxiv.org/abs/2610.41956)

- 日期：2026-10-30（arXiv v1）
- 来源：arXiv
- 摘要：Amazon 团队提出可从历史中推断多序列关系、融合异构协变量的零样本概率预测模型；论文报告相对强基线平均 skill score +5.2 个百分点，并可在单张中端 GPU 上于 1 秒内预测 100 条序列。
- 相关性判断：**很高（foundation model / agent tool）**。它可直接成为 Agent 的多变量预测工具，并将文本或业务上下文与协变量的选择交给上层推理层。

## 时间序列建模 Agent 最新研究

### 1. [TimeEvo: Failure-Driven Self-Evolution of a Time Series Agent](https://arxiv.org/abs/2609.27277)

- 日期：2026-09-23（arXiv v1）
- 来源：arXiv（论文附官方代码链接）
- 摘要：从空工具库出发，按诊断到的失败聚类为能力缺口，为缺口规划测量、生成仅含证据的工具，并经配对准入门槛决定是否纳入；在 10 个时间序列 QA 任务、3 个骨干上测试。
- 相关性判断：**很高（Agent / harness）**。直接回答“何时该给 Agent 哪个工具”，可借鉴其候选工具的基于任务配对评估，而非全局平均分。

### 2. [When Tomorrow Becomes Today: Self-Evolving Policies for Agentic Time-Series Forecasting](https://arxiv.org/abs/2609.24862)

- 日期：2026-09-21（arXiv v1）
- 来源：arXiv
- 摘要：TimEvolve 在预测时先承诺数值专家输出与候选 agent 路径，待真实目标到来后，把延迟反馈持久化更新专家信任、路径选择和干预强度；论文在 8 个 Time-MMD 域上报告最优平均 MSE/MAE 排名。
- 相关性判断：**很高（Agent / online learning）**。适合有持续真实标签回流的预测产品；重点值得核查其预注册式承诺是否足以防止 hindsight leakage。

## 时间序列 reasoning 模型最新研究

### 1. [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 日期：2026-10-31（arXiv v2；v1 为 2026-10-19）
- 来源：arXiv
- 摘要：以“System-1 充分性”定义序列压缩目标，结合保真度与模型可实现性散度，再以门控学习关键频率模式；作者在 13 个数据集上报告优于 reasoning 模型且平均少 62.9% 推理时间。
- 相关性判断：**高（reasoning efficiency）**。是用快速表示先处理大量数值输入、仅把难例交给长链推理的可操作候选。

### 2. [Twice Upon a Time: Complementary Representations for Time-Series Reasoning](https://arxiv.org/abs/2610.22327)

- 日期：2026-10-15（arXiv v1）
- 来源：arXiv
- 摘要：把保留绝对量纲的折线图与消除尺度/偏移、突出时间结构的归一化 delay embedding 同时输入视觉语言模型；在 TSRBench 上报告 53.2% 准确率，高于单折线图的 44.5%。
- 相关性判断：**高（reasoning / representation）**。提醒 Agent 不应只保留一种文本化或图像化序列表示；原尺度与不变结构可并行供工具选择和验证。

### 3. [OpenTSLM TeeMoE: A Unified Time-Series Language Model for Forecasting, Contextual Prediction, and Reasoning](https://arxiv.org/abs/2609.40265)

- 日期：2026-10-07（arXiv v2；v1 为 2026-09-30）
- 来源：arXiv（[代码](https://github.com/tonychenxyz/OpenTSLM) / [模型](https://huggingface.co/OpenTSLM)）
- 摘要：共享骨干上独立训练预测聚合、原生预测和时序分析三类 LoRA 专家，再由 MoE 控制器按请求混合；覆盖 forecasting、context-conditioned prediction 与语言化时序 reasoning。
- 相关性判断：**很高（reasoning + foundation model）**。是“数值专家 + 语义推理 + 聚合器”合体的基线，值得与显式 Agent 编排做消融对比。

## 光伏功率预测最新研究

### 1. [Two-stage residual learning for calibrated uncertainty in solar irradiance forecasts](https://arxiv.org/abs/2611.07444)

- 日期：2026-11-05（arXiv v1）
- 来源：arXiv
- 摘要：先用 LSTM 预测全球水平辐照度（GHI）均值，再建模总预测残差分布以输出不确定性；作者以 NSRDB 与 PIT 评估，报告 LSTM+高斯过程配置将预测标准差与历史标准差的偏差减少 56.5%。
- 相关性判断：**中高（PV 上游概率预测）**。不是电站 AC 功率 SOTA，但其残差校准层可成为 PV Agent 的风险、储能调度与弃光决策输入。

### 2. [IMPACT: Inverter-Informed Multimodal Learning for Photovoltaic Generation Forecasting](https://arxiv.org/abs/2610.40418)

- 日期：2026-10-29（arXiv v1）
- 来源：arXiv
- 摘要：利用电站历史、逆变器级云动态、未来太阳几何和气象状态的四分支架构，输出 10–110 分钟概率预测，并做在线自适应保形校准；报告相对第二强基线高 0.099 forecast skill score。
- 相关性判断：**中高（垂直预测工具）**。不是 TS Agent，但可被 Agent 封装为短时光伏预测与不确定性评估工具，尤其适合逆变器级调度。

### 3. [The Utility of Physics-Informed Machine Learning in Solar Power Production Forecasting](https://arxiv.org/abs/2610.38976)

- 日期：2026-10-28（arXiv v1）
- 来源：arXiv
- 摘要：在 33 个欧洲国家、3,713 个 PV 装置的 300 万余样本上比较 ADR 物理模型与 TSMixer 的特征增强/残差混合；虽训练略快，测试精度、泛化和小样本优势并不稳定。
- 相关性判断：**中高（负结果 / validation）**。对 Agent 的价值在于：物理先验应作为可验证候选而非默认加分项，harness 需要跨地区和数据量的门控评估。

## GitHub 上值得跟踪的新项目

### 时间序列

### 1. [rainyZhou2/SreAgentHarness](https://github.com/rainyZhou2/SreAgentHarness)

- 日期：2026-11-09（最近推送；创建于 2026-11-06）
- 来源：GitHub 官方仓库
- 摘要：Go 编写的 SRE Agent runtime，提供可恢复运行状态机、风险分级审批、工具调用账本、可回放评测、离线门禁、灰度与自动回滚。
- 相关性判断：**中高（通用 Agent harness）**。非时序专用，但 as-of 运行记录、审批绑定和可回放评测可迁移到高风险时序 Agent；不能将其当作预测效果证据。

### 2. [D2I-Group/metacaster](https://github.com/D2I-Group/metacaster)

- 日期：2026-11-03（最近推送；创建于 2026-08-22）
- 来源：GitHub 官方仓库
- 摘要：EMNLP 2026 MetaCaster 的官方实现；多 Agent 不直接在推理期预测，而是由 HPAgent 优化 MGAgent 的数据生成 harness，FTAgent 训练并选择可部署的轻量 forecaster；集成 23 个轻量预测器。
- 相关性判断：**很高（Agent / AutoML / harness）**。非常贴近“让 Agent 产出可部署小模型”的路线；应优先检查其 few-shot 数据生成质量评测和数据泄漏防护。

### 3. [D2I-Group/TSFLab](https://github.com/D2I-Group/TSFLab)

- 日期：2026-11-03（最近推送；GitHub API 于 2026-11-09 再确认活跃）
- 来源：GitHub 官方仓库
- 摘要：Agent-first 时间序列预测平台，提供 190+ 复现模型、公平基准、滚动实时赛道和公开榜单；以可复现配置、固定随机种子和审计输出为重点。
- 相关性判断：**很高（harness / benchmark）**。适合作为 Agent 的实验执行与公平比较底座，也可用于评估上文的 TSFM 与 Agent 策略。

### 4. [ztxtech/aion](https://github.com/ztxtech/aion)

- 日期：2026-10-13（最近推送；项目新闻于 2026-08-07 宣布自适应执行）
- 来源：GitHub 官方仓库
- 摘要：基于 OpenCode 的时间序列 harness，显式连接任务规格、运行、工具使用、上下文推理和验证门；项目强调多 Agent 调度与分层 review gate。
- 相关性判断：**很高（harness / Agent）**。与本仓库的研究问题最直接相邻，优先评估其任务契约、停止条件和验证门是否能阻断时序泄漏。

### 5. [OnePunchMonk/AgentQuant](https://github.com/OnePunchMonk/AgentQuant)

- 日期：2026-11-03（最近推送）
- 来源：GitHub 官方仓库
- 摘要：面向量化策略研究的 failure-aware harness，采用类型化 Agent 工作流与可检查实验记忆；仓库也关联时间序列泄漏审计器。
- 相关性判断：**高（ML / harness / audit）**。虽聚焦量化，关键价值是实验记忆和失败可追溯性，可迁移到通用时序 Agent 的在线评估。

### 6. [summerming1/finance-forecast-agent](https://github.com/summerming1/finance-forecast-agent)

- 日期：2026-10-30（最近推送）
- 来源：GitHub 官方仓库
- 摘要：金融时间序列的可复现 ML 研究与评估 harness，包含时间感知验证、PyTorch 模型、成本感知指标、实验契约和审计门。
- 相关性判断：**高（AutoML / evaluation）**。体量较小但切中了时间泄漏、成本与审计三类生产问题；建议先代码审阅再纳入基线。

### 光伏功率预测

### 1. [Power-Agent/PowerFM](https://github.com/Power-Agent/PowerFM)

- 日期：2026-10-24（最近推送）
- 来源：GitHub 官方组织
- 摘要：电力与能源领域基础模型项目集合与实现，覆盖负荷预测、故障检测、电网仿真和 Agent 控制等方向。
- 相关性判断：**中高（领域 foundation model / Agent 工具）**。不是专门 PV 预测，但适合建立光伏/负荷/电网联合任务的模型与工具清单。

### 2. [fiacrerougieux/helio](https://github.com/fiacrerougieux/helio)

- 日期：不确定（检索到的 GitHub 页面为近一个月抓取，未在本次结果中稳定暴露最近提交日期，降低优先级）
- 来源：GitHub 官方仓库
- 摘要：将自然语言问题转换为 pvlib 仿真代码，在沙箱运行并校验物理约束的多 Agent PV 仿真助手。
- 相关性判断：**中高（PV Agent / tool use）**。适合研究“代码执行 + 物理验证”的 Agent 模式，但不应视作光伏功率预测 SOTA，需先核验维护活跃度与评测。

## 建议的下一步

1. 用 TSFLab 的固定种子和滚动评估，将 Chronos-2、TailDART、OpenTSLM 与轻量模型放在同一数据/协变量协议下比较。
2. 复用 TimeEvo 的“逐任务工具准入”思想，为统计检验、检索增强、物理先验建立独立 admission gate，避免全局平均性能掩盖局部伤害。
3. 对光伏任务把 IMPACT 类短时不确定性预测、物理/数据驱动消融和 Helio 的物理执行验证拆成三个可审计工具，而非让一个 LLM 直接生成数值预测。

## 说明

- 全部高优先级论文日期直接以 arXiv 提交/版本历史核验；GitHub 项目日期以 GitHub API 的 `pushed_at` 为准。
- 预印本的性能数字均为作者报告，尚未按独立复现确认。无法确认项目活动日期的条目已显式降级。

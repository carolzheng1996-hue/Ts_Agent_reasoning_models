# 2026-11-25 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-25 09:41 CST（Asia/Shanghai）。
- 时间窗口：2026-08-25 至 2026-11-25（含首尾）。论文日期使用 arXiv 的 v1 提交时间；GitHub 条目使用 API 的创建和最近推送时间。无法确认日期的结果不纳入正文。
- 增量参照：2026-11-24 晨报；避免重复展开该期已覆盖的 CoCo、GlucoAgent、CastWorld 等条目。

## 今日结论

1. **近期 TSFM 研究正把部署期问题前置到模型设计与评测。** FlexCast 用可变上下文掩码预训练替代固定自回归滚动；碳强度案例则以预注册约束零样本模型比较。
2. **本日未发现可由一手论文页确认、且未被近日报覆盖的时序建模 Agent 或专门时序 reasoning 新论文。** 这是检索结果，不应以低质量仓库凑数；下列 Agent/reasoning 观察转向可复核的代码与 harness 更新。
3. **通用 harness 的新动向与时序 Agent 有直接工程价值。** LongHorizon-Harness 的可恢复状态/独立审计，以及 Strands SDK 的近期发布，分别可映射为 walk-forward 实验的检查点和工具调用契约；它们都不是时序模型本身。

## 1. 时间序列基础模型最新研究

### [2026-11-13] [FlexCast: Flexible Context Learning for Time Series Foundation Models](https://arxiv.org/abs/2611.17862)

- 来源与日期：[arXiv 元数据](https://export.arxiv.org/api/query?id_list=2611.17862)，v1 于 2026-11-13 发表。
- 简短摘要：将预测改写为时序 patch 的可变长度掩码预测，预训练时随机采样可见上下文与目标 patch，以减少自回归逐步滚动对固定上下文的耦合。
- 相关性判断：**高（TSFM）**。适合成为 Agent 候选模型池中“上下文长度不确定”的基线；评测仍须按每个 forecast origin 严格截断，不能由掩码训练设计推断它天然避免泄漏。

### [2026-11-02] [Zero-shot time-series foundation models against the Khepri v1.5 baselines for 96-hour carbon-intensity forecasts in nine Nordic bidding zones: a preregistered comparison](https://arxiv.org/abs/2611.02895)

- 来源与日期：[arXiv 元数据](https://export.arxiv.org/api/query?id_list=2611.02895)，v1 于 2026-11-02 发表。
- 简短摘要：对 Timestral-5M/209M 与 Chronos-2 的零样本 96 小时碳强度预测，同冻结的 SARIMA、GBM 基线比较；作者说明在预测前已对分析与最小可检测效应进行了时间戳预注册。
- 相关性判断：**中高（TSFM / benchmark protocol）**。主题是应用性对比，不是新模型；其“预先冻结基线与分析”的做法对 Agent 自动试验的 harness 很有价值，可减轻按结果挑选 prompt、模型或指标的偏差。

## 2. 时间序列建模 Agent 最新研究

### 本日论文检索空档（已核验）

- 来源与日期：检索 [arXiv：`time series agent`（2026-11）](https://arxiv.org/search/?query=%22time+series%22+agent&searchtype=all&abstracts=show&order=-announced_date_first&size=50) 与 [OpenReview](https://openreview.net/)；截至 2026-11-25 09:41 CST，未找到窗口内首发、日期可确认且未在 2026-11-24 晨报重复的专门时序建模 Agent 论文。
- 简短摘要：搜索结果主要指向已覆盖的工作、匿名审稿稿件或非时序通用 Agent；因此本节不把“代码仓库更新”包装为新学术研究。
- 相关性判断：**高（信息质量控制）**。对研究路线而言，明确空档比混入日期不明或重复论文更可用；可持续关注带有公开代码、数据切分和运行日志的正式版本。

## 3. 时间序列 reasoning 模型最新研究

### 本日论文检索空档（已核验）

- 来源与日期：检索 [arXiv：`time series reasoning`（2026-11）](https://arxiv.org/search/?query=%22time+series%22+reasoning&searchtype=all&abstracts=show&order=-announced_date_first&size=50)；截至 2026-11-25 09:41 CST，未发现窗口内新首发且未在 2026-11-22/24 晨报出现的专门时序 reasoning 论文。
- 简短摘要：11 月可确认的相关工作中，`A Verifier from the Past` 与 CoCo 已分别在 11-22、11-24 简报记录，故本日仅更新检索结论、不重复陈列。
- 相关性判断：**高（reasoning research hygiene）**。reasoning 论文尤其应区分首发日、修订日与检索/引用日期；将旧版本当“最新”会误导技术决策。

## 4. GitHub：timeseries Agent、harness、machine learning、AutoML 项目

### [2026-11-25] [AMAP-ML/LongHorizon-Harness](https://github.com/AMAP-ML/LongHorizon-Harness)

- 来源与日期：[GitHub API](https://api.github.com/repos/AMAP-ML/LongHorizon-Harness)；创建于 2026-08-04，最近 API 更新时间 2026-11-25，最近推送 2026-11-11，MIT，约 1.9k stars（检索时）。
- 简短摘要：用于长时程 computer-use Agent 的开源 harness，主打新上下文执行、可验证的耐久状态、独立审计和可恢复进度，并声明支持 Claude Code、Codex、OpenClaw 等。
- 相关性判断：**高（通用 harness，非时序专用）**。适合借鉴给多轮 AutoML/walk-forward 调参：应把训练窗口、特征可得截止时间、随机种子和验证结果固化为可恢复状态；时序评分器仍需另行实现。

### [2026-11-24] [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk)

- 来源与日期：[GitHub API](https://api.github.com/repos/strands-agents/harness-sdk)；创建于 2025-05-14，最近推送 2026-11-24，Apache-2.0，约 9.3k stars（检索时）。
- 简短摘要：面向 Python/TypeScript 生产 Agent 的 harness SDK，仓库定位为可端到端控制 agent harness，并允许不同模型、云服务组合。
- 相关性判断：**中高（Agent 工具层，非时序专用）**。可评估其工具注册、观察和拦截机制能否承载“数据截断—模型拟合—回测—报告”流水线；不能以 star 数替代对时间泄漏和沙箱隔离的审计。

### [2026-11-24] [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness)

- 来源与日期：[GitHub API](https://api.github.com/repos/tigerless-labs/autoharness)；创建于 2026-06-09，最近 API 更新时间 2026-11-24，最近推送 2026-11-12，MIT，约 11.1k stars（检索时）。
- 简短摘要：自述为从真实工作中学习技能的自学习 Agent 层，强调将任务经验转化为可复用能力。
- 相关性判断：**中（AutoML/记忆机制参考）**。可探索将“成功的时序实验配置”结构化为技能，但必须将技能按数据域、截止日和验证协议版本隔离，防止跨任务记忆带入未来信息。

### [2026-11-22] [kenseiAmit/agentquant-timeseries-pipeline](https://github.com/kenseiAmit/agentquant-timeseries-pipeline)

- 来源与日期：[GitHub API](https://api.github.com/repos/kenseiAmit/agentquant-timeseries-pipeline)；创建 2026-11-22，最近推送 2026-11-22，0 stars（检索时）。
- 简短摘要：一个使用 Microsoft Semantic Kernel 与 Azure OpenAI 协调六个专职 Agent 的量化时序分析工作流，仓库描述包含人工审批和 matplotlib 执行自修复。
- 相关性判断：**中高（时序 Agent 工程线索，低成熟度）**。主题贴合、日期可确认，但项目很新且尚无社区验证；宜优先审阅数据源、金融回测切分与执行权限，再决定是否作为复现对象。

## 检索范围与限制

- 主来源为 arXiv 论文页/API、OpenReview 搜索与 GitHub REST API；GitHub 搜索仅用于发现候选，日期及仓库描述以 API 交叉核验。
- 未纳入超出三个月窗口的论文；未将匿名投稿、不可确认首发日的页面或低质量搜索片段列为“最新研究”。
- GitHub 的描述、star 与许可证均为检索时快照，不能替代代码审计、复现实验或安全评估。对候选 harness 的下一步应是离线、无密钥环境下的最小 walk-forward 复现。

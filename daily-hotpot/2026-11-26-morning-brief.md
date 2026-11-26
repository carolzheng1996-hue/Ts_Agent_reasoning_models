# 2026-11-26 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-26 09:18 CST（Asia/Shanghai）。
- 时间窗口：2026-08-26 至 2026-11-26（含首尾）。论文日期采用 arXiv v1；GitHub 项目日期采用 REST API 的创建、推送与更新时间。不能由一手来源确认日期的候选不纳入正文。
- 增量参照：2026-11-25 晨报及本仓库已有 2026-08-26 之后日报；避免把已报道论文以“新发现”重复列入。

## 今日结论

1. **本日没有发现晚于 11 月 25 日、可由一手论文页确认的 TSFM、时序 Agent 或时序 reasoning 首发。** 这不是“领域无进展”的结论，只表示本轮可核验增量为空；11 月 13 日的 NeoResearch 已在 11 月 22 日简报记录，不能因再次检索到而重复计入。
2. **唯一可确认的日内工程增量是 `agentquant-timeseries-pipeline` 的新推送。** 它是一个低成熟度、但结构贴近多 Agent 时序工作流的候选；应先审计数据切分、回测规则和代码执行隔离。
3. **光伏侧无今日新增首发。** 10 月两篇多站点工作仍是本窗口最可操作的基线：区域 PV 场预测和领域预训练；二者的外生特征发布时间必须在实际回测中显式冻结。

## 1. 时间序列基础模型最新研究

### 本日新增检索为空（已核验）

- 来源与日期：复核 [arXiv 的时间序列/基础模型检索](https://arxiv.org/search/?query=%22time+series%22+foundation&searchtype=all&abstracts=show&order=-announced_date_first&size=50)，截至 2026-11-26 09:18 CST，未找到晚于昨日且在三个月窗口内的可确认首发。
- 简短摘要：不重复 11 月 25 日简报已列的 FlexCast，也不把 11 月 4 日的 DailyArXiv 收录日期误作论文新发布日期。
- 相关性判断：**高（信息质量控制）**。TSFM 的版本更新、榜单再收录与 v1 首发应分别记录，避免伪造“每日新模型”信号。

## 2. 时间序列建模 Agent 最新研究

### 本日新增检索为空（已核验）

- 来源与日期：复核 [arXiv：`time series agent`](https://arxiv.org/search/?query=%22time+series%22+agent&searchtype=all&abstracts=show&order=-announced_date_first&size=50) 和相关官方论文页；截至 2026-11-26 09:18 CST，未发现晚于 11 月 25 日的专门时序建模 Agent 首发。
- 简短摘要：再次命中的 [NeoResearch](https://arxiv.org/abs/2611.18235) 的 v1 是 2026-11-13，使用文献挖掘、实验反馈与分层经验记忆发现轻量领域预测模型；该条已在 [11 月 22 日简报](/Users/monychen/Documents/timeserie_research/Ts_Agent_reasoning_models/daily-hotpot/2026-11-22-morning-brief.md) 收录，故本期仅作为去重核验。
- 相关性判断：**高（时序 Agent）**。其研究主题仍值得跟踪，但“再次检索到”不构成新研究动态。

## 3. 时间序列 reasoning 模型最新研究

### 本日新增检索为空（已核验）

- 来源与日期：复核 [arXiv：`time series reasoning`](https://arxiv.org/search/?query=%22time+series%22+reasoning&searchtype=all&abstracts=show&order=-announced_date_first&size=50)，截至 2026-11-26 09:18 CST，未发现窗口内且晚于昨日的新的专门时序 reasoning 论文。
- 简短摘要：检索可回溯到已报道的 CoCo、CastWorld、TimeEvo 等工作；本期不把 conference 接收、网页抓取日期或二次索引日期替换为 v1 日期。
- 相关性判断：**高（reasoning research hygiene）**。对 Agent 的未来信息泄漏审计，同样依赖严格区分生成日期、数据截止日期和论文日期。

## 4. GitHub：timeseries Agent、harness、machine learning、AutoML 项目

### [2026-11-25｜有新推送] [kenseiAmit/agentquant-timeseries-pipeline](https://github.com/kenseiAmit/agentquant-timeseries-pipeline)

- 来源与日期：[GitHub REST API](https://api.github.com/repos/kenseiAmit/agentquant-timeseries-pipeline)：创建于 2026-11-22，最近推送于 **2026-11-25**，API 更新时间 2026-11-22；MIT，0 stars（检索时）。前一期记录的推送日期为 11-22，本次以 API 返回的 11-25 为准。
- 简短摘要：以 Microsoft Semantic Kernel 与 Azure OpenAI 组织六个专职 Agent、三段 AgentGroupChat，包含人工审批门与 matplotlib 执行自修复的量化时序分析流程。
- 相关性判断：**中高（时序 Agent 工程候选，低成熟度）**。多阶段分工和 HITL 适合借鉴，但不是已验证的预测/AutoML 基准；采用前应检查是否使用 expanding/rolling-origin split、是否隔离未来数据，以及执行工具的最小权限。

### [2026-09-14] [Crash0524/Timeseries-Workbench-DSH](https://github.com/Crash0524/Timeseries-Workbench-DSH)

- 来源与日期：[GitHub REST API](https://api.github.com/repos/Crash0524/Timeseries-Workbench-DSH)：创建于 2026-09-14，最近推送 2026-09-30、更新时间 2026-10-10；Apache-2.0，5 stars（检索时）。日期在窗口内，但不是本日新项目。
- 简短摘要：面向 DeepSeek Harness 的社区时序工作台，项目说明整合数据导入、可视化、统计分析、多序列关系、预测和事件感知分析工具。
- 相关性判断：**中（harness 工具层，非学术时序 Agent）**。可参考工具界面和操作流；项目为非官方社区实现且近期无推送，不应作为生产依赖或论文证据。

## 5. 光功率 / 光伏功率预测最新研究

### 本日新增检索为空；保留两项窗口内高优先级基线

### [2026-10-20] [Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting](https://arxiv.org/abs/2610.27763)

- 来源与日期：[arXiv 论文页](https://arxiv.org/abs/2610.27763)，v1 于 2026-10-20 提交。
- 简短摘要：以历史 PV、气象观测、未来 NWP 和时间编码构成序列补全任务，在 479 个分布式站点上比较预训练目标，并评估从 6 小时至 7 天的跨站点零样本与适配。
- 相关性判断：**高（PV / 领域 TSFM）**。适合作为预测 Agent 的模型候选；回测要固定每个 forecast origin 当时实际可得的 NWP 版本，禁止以后验再分析替代。

### [2026-10-12] [Constructed regional photovoltaic generation fields improve ultra-short-term distributed solar forecasting](https://arxiv.org/abs/2610.16110)

- 来源与日期：[arXiv 论文页](https://arxiv.org/abs/2610.16110)，v1 于 2026-10-12 提交。
- 简短摘要：SatPV-Field 将密集分布式 PV 观测转化为区域生成场，联合卫星短波辐射引导与气象预测后再下沉到站点级预测；实验覆盖 496 个站点。
- 相关性判断：**高（PV / 空间时序）**。可构成 Agent 的空间邻站选择和输入可得性审计任务；卫星与气象产品的发布时点需成为数据契约的一部分。

## 6. DailyArXiv 补检结论

- 已完整读取 [`zezhishao/DailyArXiv` README 的 `Time Series` 栏](https://github.com/zezhishao/DailyArXiv/blob/master/README.md#time-series)。该栏最新可见批次仍为 **2026-11-04**，没有本期（11-25/11-26）新增条目。
- 栏内与主题密切相关的 `CoCo`（README 标注 2026-11-03、arXiv v1 2026-11-03）及 `Graph Foundation Models Can Become Effective Multivariate Time Series Anomaly Detectors`（README/ arXiv v1 2026-11-04）均已在既有日报报道，不重复计入。`AdaMamba` 虽被 README 标为 2026-11-04，但链接为 arXiv **2604.23239v2**，v1 早于三个月窗口，因此降优先级、不纳入正文。
- 结论：DailyArXiv 对本期无可确认新增；其收录日期/修订日期不替代 arXiv v1。本期正文只使用原始论文页和 GitHub API 的可核验日期。

## 检索范围与限制

- 主来源为 arXiv、GitHub REST API、DailyArXiv README，辅以 AI HOT 当日公开日报检索；AI HOT 当日未发现可由原始来源进一步确认为本主题新增的条目，故未作为正文证据。
- 没有将匿名稿、仅搜索摘要可见的候选、超窗初版或不可确定日期的页面列为“最新研究”。GitHub 的 stars、描述和推送时间均为检索快照，不替代代码审计。

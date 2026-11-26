# 2026-11-26 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-26 15:33 CST（Asia/Shanghai）。
- 时间窗口：2026-08-26 至 2026-11-26（含首尾）。论文日期以 arXiv v1 为准；GitHub 日期以 REST API 的 `created_at`、`pushed_at` 为准。没有可核验首发日期的候选不进入正文。
- 增量参照：2026-11-25 晨报；已记录的 FlexCast、碳强度零样本对比、LongHorizon-Harness、harness-sdk、autoharness 与 PV 论文不重复展开。

## 今日结论

1. **本轮未发现 11 月 25 日之后可由一手论文页确认的新时间序列基础模型、专门时序 Agent 或专门时序 reasoning 论文。** 因而保留检索空档，而不将旧论文的新索引/修订误报为新研究。
2. **GitHub 有一个可复核的增量：`dataprep-automl` 将家庭用电时序的 AutoML 处理与两个 EDA Agent 的审计并列。** 它是课程/实践仓库而非研究基准，但“让 Agent 输出与人工 EDA 对照”的思路值得借鉴。
3. **当日新建的时序 Agent 候选尚缺 README。** `Autonomous_MLOps_Agent`（11-26）和 `ChronoForge`（11-25）虽在 GitHub 搜索中出现，却无法取得 README 或方法细节；本期仅记录为待观察线索，不推荐纳入复现清单。

## 1. 时间序列基础模型最新研究

### 本日论文检索空档（已核验）

- 来源与日期：检索 [arXiv：time series foundation（按提交日期）](https://arxiv.org/search/?query=%22time+series%22+foundation&searchtype=all&abstracts=show&order=-announced_date_first&size=50)，并复查近日报已收录的 arXiv 论文页；截至 2026-11-26 15:33 CST，未发现窗口内、首发日期可确认且未在 11-25 简报出现的新条目。
- 简短摘要：今天的检索结果没有带来可验证的 TSFM 首发论文；FlexCast（v1：11-13）仍是最近已记录的直接模型工作。
- 相关性判断：**高（信息质量控制）**。将首次公开时间和修订/检索时间分开，是维护 TSFM 候选池可比较性的前提。

## 2. 时间序列建模 Agent 最新研究

### 本日论文检索空档（已核验）

- 来源与日期：检索 [arXiv：time series agent（按提交日期）](https://arxiv.org/search/?query=%22time+series%22+agent&searchtype=all&abstracts=show&order=-announced_date_first&size=50) 与 [OpenReview](https://openreview.net/)；截至 2026-11-26 15:33 CST，未发现窗口内首次公开、日期可确认且未被 11-22 至 11-25 晨报覆盖的专门时序建模 Agent 论文。
- 简短摘要：候选主要是已报道工作、非时序通用 Agent 或日期/匿名状态无法确认的投稿；没有把代码仓库更新伪装成新学术研究。
- 相关性判断：**高（Agent 研究卫生）**。时序 Agent 的论文应至少能核验任务定义、数据切分及工具/执行边界，才适合进入复现队列。

## 3. 时间序列 reasoning 模型最新研究

### 本日论文检索空档（已核验）

- 来源与日期：检索 [arXiv：time series reasoning（按提交日期）](https://arxiv.org/search/?query=%22time+series%22+reasoning&searchtype=all&abstracts=show&order=-announced_date_first&size=50)；截至 2026-11-26 15:33 CST，未发现窗口内新增、首发日期可确认的专门时序 reasoning 论文。
- 简短摘要：已在近日报出现的 reasoning 论文未因网页索引变化而重复收录；本日没有可验证的新增实验、基准或正式版本。
- 相关性判断：**高（reasoning 证据标准）**。尤其要区分“能生成解释”与“有针对时间因果、状态或预测推理的可评分任务”。

## 4. GitHub：timeseries Agent、harness、machine learning、AutoML 项目

### [2026-11-18] [Anshi-12/dataprep-automl](https://github.com/Anshi-12/dataprep-automl)

- 来源与日期：[GitHub REST API](https://api.github.com/repos/Anshi-12/dataprep-automl)；创建于 2026-11-18，最近推送于 2026-11-26，0 stars（检索时），未声明许可证。
- 简短摘要：仓库对约 200 万行 household-power 时序进行 EDA、清洗、插补、异常处理、特征工程与 AutoViML；另以 Gemini 代码执行 Agent 与 Colab Data Science Agent 做 EDA，并将其结果同人工过程审计对照。README 所列视频链接仍为占位符，属于实践型材料。
- 相关性判断：**中高（时序 AutoML / Agent 评审模式）**。不是时序基础模型、Agent 论文或成熟 harness；不过可将“人工—Agent EDA 差异审计”迁移为时序 Agent 的前置数据质量关卡。采用前需补充严格的时间切分、插补拟合范围和滚动回测证据。

### 待观察但未纳入推荐列表

- [AlexDaPiggie/Autonomous_MLOps_Agent](https://github.com/AlexDaPiggie/Autonomous_MLOps_Agent)：API 显示创建并推送于 **2026-11-26**，描述称面向 tabular、数学优化和时间序列的自主 ML；但仓库尚无 README，不能核验实现、数据协议或许可证，**相关性暂定中、证据不足**。
- [TalidLeeRyder/ChronoForge](https://github.com/TalidLeeRyder/ChronoForge)：API 显示创建并推送于 **2026-11-25**，描述为 “agent system for TimeSeries Research”；同样没有 README，**相关性暂定中、证据不足**。保留链接供明日复查，不据此作技术判断。

## 5. 光功率 / 光伏功率预测最新研究

### 本日论文检索空档（已核验）

- 来源与日期：检索 [arXiv：photovoltaic forecasting（按提交日期）](https://arxiv.org/search/?query=%22photovoltaic%22+forecasting&searchtype=all&abstracts=show&order=-announced_date_first&size=50) 和 `solar power forecasting` 关键词；截至 2026-11-26 15:33 CST，未发现窗口内、可确认首发且未被 11-25 简报覆盖的新论文/官方项目。
- 简短摘要：10 月已记录的领域预训练与区域 PV 生成场仍是当前直接相关的近期线索；今天没有新增可验证结果。
- 相关性判断：**中高（领域任务池）**。它们可充当 Agent 的评测或工具调用任务，但必须按预测原点记录 NWP、卫星及站点观测的实际可得时间。

## 6. DailyArXiv 与检索边界

- 已复查 [DailyArXiv 的 Time Series 栏](https://github.com/zezhishao/DailyArXiv/blob/master/README.md#time-series)。其 README 最近可见更新早于本期检索；没有提供可替代 arXiv v1 的新增条目。
- GitHub 采用搜索发现、REST API 复核创建/推送时间与 README 内容的两步法。星数、描述和许可证均为 15:33 CST 快照；零星或无 README 的新仓库仅作为观察线索。
- 未纳入：超出三个月窗口的论文、日期不可确认的匿名稿、仅更新索引/网页但无新首发的旧工作，以及没有方法细节的新建空仓库。

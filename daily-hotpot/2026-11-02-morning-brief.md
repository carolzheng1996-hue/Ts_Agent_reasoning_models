# 时间序列研究晨间简报｜2026-11-02

检索时间：2026-11-02（Asia/Shanghai）。严格时间窗口：2026-08-02 至 2026-11-02；论文日期优先采用 arXiv **v1**，项目日期采用 GitHub `created_at`，`pushed_at` 仅表示活动。本期是相对 10 月 31 日晨报的增量核验：没有将 DailyArXiv 的聚合更新时间、论文修订版或项目 push 时间误作新发布。

## 1. 时间序列基础模型最新研究

**本轮增量空结果。** 定向检索 arXiv、DailyArXiv、OpenReview 与 Hugging Face 后，未确认 2026-10-30 至 2026-11-02 首发、且直接属于时间序列基础模型的新论文/权重发布。近期仍应跟踪 10 月 29 日的 [Modular Bayesian Foundation Models](https://arxiv.org/abs/2610.39043) 与 [轴向注意力 TSFM 的单位置回归理论](https://arxiv.org/abs/2610.40188)，两者已在 10 月 31 日晨报记录，故不重复计为新增。

**相关性判断：** 当前无可确认的新增 TSFM 首发；上述既有工作分别与不确定性专家路由、结构化时序注意力理论相关，仍需按预测起点隔离选择与评估。

## 2. 时间序列建模 Agent 最新研究

**本轮增量空结果。** 未确认 10 月 30 日后新的时序建模 Agent 首发论文或经过源码核验的高相关 GitHub 项目。10 月 28 日的 [Vendster](https://arxiv.org/abs/2610.38292) 仍是近期重要的 Agent 工具评测线索，但不是本轮新增。

**相关性判断：** 对时序 Agent 而言，近期优先事项仍是把“工具预测误差”与“下游决策价值”分开评测，并固定预测版本、可用时间与干预条件。

## 3. 时间序列 reasoning 模型最新研究

**本轮增量空结果。** 未确认 10 月 30 日后、新发布且直接讨论连续数值时间序列 reasoning 的论文。通用 Agent/安全新闻不因包含“Agent”而纳入本栏。

**相关性判断：** 中低。缺少新的直接证据时，不将通用 LLM 推理或事件预测结论外推为数值时间序列 reasoning 能力。

## 4. GitHub：timeseries Agent、harness、ML、AutoML 项目

以下日期均为 GitHub UTC 创建时间；本轮阅读 README 与仓库元数据，未执行代码。

### 时间序列 / AutoML / harness

**本轮无已核验的新增条目。** `seelffff/autonomous-automl-agent` 虽于 2026-11-01 创建，但其 README 原始文件请求超时，未据搜索摘要推断实现、数据切分或时序适用性，故仅作待补检候选而不推荐。

### 光伏功率预测

### 2026-11-01｜[pvforecast-go](https://github.com/kviatkovsky/pvforecast-go)

- **来源与日期**：GitHub `created_at` 2026-11-01 12:19 UTC；README 与仓库元数据已读取。
- **简短摘要**：Go 实现的物理光伏预测工具，按站点、装机、倾角、方位和损耗调用天气预报，组合 NREL SPA、Perez 与 PVWatts v5，输出未来 1–7 天逐小时 AC 功率与日能量；README 声称以 pvlib 进行单模块和端到端对照验证。
- **相关性判断：中高（光伏功率预测工程）**。适合作为物理基线或 Agent 的受控预测工具，而非学习型 TSFM/Agent。README 的 pvlib 一致性声明不能代替对真实站点误差、天气预报发布时间、版本留存和跨气候泛化的外部验证；接入 harness 时应保存每次天气预报 vintage。

## 5. 光伏功率预测最新研究

**直接 PV 论文增量空结果。** 定向检索 `photovoltaic power forecasting`、`solar power forecasting` 与 `PV forecasting`，未确认 10 月 30 日后、日期可独立核验的相关论文首发。上节的 `pvforecast-go` 提供了可复查的新工程信号，但不应被表述为新的学术研究结果。

**相关性判断：** 对光伏 Agent/reasoning 的近期可行动点，是同时记录气象产品的发行时间、预测发出时间与真实功率标签到达时间；否则离线回测容易将事后天气信息当作当时可用特征。

## 6. DailyArXiv、来源与建议

- 已通过 [DailyArXiv README 的 Time Series 栏](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)补检：页面标注 `Last update: 2026-11-02`，最新列出的 Time Series 条目日期仍为 **2026-10-29**。其中 [When Imputation Changes the Nearest Neighbor](https://arxiv.org/abs/2610.40579v1) 是传感器时序相似检索/缺失值稳健性研究，非 TSFM、Agent、reasoning 或 PV 预测主线；因此不拔高为本期核心新增。`TimeFT` 在该页显示为 v2，未将该修订日期当作首发日期。
- AI HOT 已按技能要求补检新版 `aihot.news` 近七日精选论文流；结果以通用 AI 安全、模型与 Agent 新闻为主，未发现可直接纳入 TSFM、时序 Agent/reasoning 或光伏预测栏的条目，故不以泛 AI 内容填充。
- 本轮访问到的旧 AI HOT 接口已于 10 月 31 日退役，改用新版接口完成查询；本地 AI HOT skill 仍提示可升级，未在本自动化中修改用户技能。

下一步优先：为 `pvforecast-go` 补做“天气预报发行—调用—功率预测—实测标签”版本化评测；并继续观察 DailyArXiv 后续是否收录 10 月 30 日之后的时序论文，仍以 arXiv v1 日期决定是否纳入窗口。

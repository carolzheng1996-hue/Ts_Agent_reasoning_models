# 2026-11-28 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-28 15:38 CST（Asia/Shanghai）。
- 时间窗口：2026-08-28 至 2026-11-28（含首尾）；论文按 arXiv v1 `published` 排序，代码项目按 GitHub API 的创建/推送时间排序。
- 增量参照：2026-11-27 晨报。正文保留本轮新发现、今日工程变更和 DailyArXiv 补检中的漏报；已覆盖的论文不因再次出现而重复计数。

## 今日结论

1. **今日未出现可确认的、晚于 11 月 25 日的 arXiv 时序主线首发。** arXiv Atom API 在本次检索时的最近命中仍止于 11 月 25 日；这不能证明 11 月 26–28 日没有投稿，只说明尚无可由该 API 核验的新增记录。
2. **补到一篇更直接的时序多 Agent 工作：SMAD。** 它先把异常意图写成可检验的语义契约，再让 Agent 生成/筛选检测管线；适合作为时序 Agent harness 的“验收条件先行”范例。
3. **唯一明确的日内工程变化是 AgentQuant 的新提交。** 它增加企业架构图片资产，并未提供新的时序数据、回测或模型结果，因此仍应定位为低成熟度工作流样例。

## 1. 时间序列基础模型最新研究

### 本日新增首发为空（已核验）

- 来源与日期：复核 [arXiv Atom API：`time series`，三个月窗口](https://export.arxiv.org/api/query?search_query=all:%22time%20series%22%20AND%20submittedDate:%5B202608280000%20TO%20202611282359%5D&start=0&max_results=20&sortBy=submittedDate&sortOrder=descending)，检索于 2026-11-28 15:38 CST；最近直接相关首发仍为 2026-11-25，已在 11 月 27 日晨报覆盖。
- 简短摘要：未把“尚无 API 命中”误写成领域无进展；会议页面、后续 arXiv 批次或项目发布可能滞后。
- 相关性判断：**高（信息质量 / TSFM 追踪）**。在 Agent 的证据库中应保存检索时间、查询式与元数据快照，避免把空检索当成结论。

## 2. 时间序列建模 Agent 最新研究

### [2026-11-20] [SMAD: A Semantics-Guided Multi-Agent Framework for Unsupervised Time-Series Anomaly Detection](https://arxiv.org/abs/2611.28348)

- 来源与日期：[arXiv 原始元数据](https://export.arxiv.org/api/query?id_list=2611.28348)，v1 于 2026-11-20 22:00 UTC 发表。
- 简短摘要：SMAD 将自然语言异常意图转换为包含目标模式、预期评分响应及验证问题的“语义契约”；多 Agent 据此提出检测管线，再以与契约匹配的合成干预在无标签目标序列上筛选与迭代。作者报告相对最强基线的单变量/多变量提升分别为 11.5%/9.6%，并称 token 成本低于通用 coding agent。
- 相关性判断：**很高（时序 Agent / harness）**。虽是异常检测而非预测，但“先声明可测的意图，再让 Agent 搜索方案”的结构可直接迁移到 forecasting；应独立复现其干预生成、检测器池和无标签评分，不能只依据作者报告的提升。

## 3. 时间序列 reasoning 模型最新研究

### 本日新增首发为空（已核验）

- 来源与日期：复核 [arXiv Atom API：`time series` + `reasoning`](https://export.arxiv.org/search/?query=%22time+series%22+reasoning&searchtype=all&abstracts=show&order=-announced_date_first&size=50)。11 月 25 日的 *Put the World Back* 仍是最新已覆盖的直接命中；11 月 19 日的 *Falsifiable Compositional Reasoning* 已在 11 月 22 日晨报覆盖。
- 简短摘要：本轮不将“时序 + Agent”的泛化命中自动归类为 reasoning，也不把新 GitHub 提交当作学术新成果。
- 相关性判断：**高（分类边界）**。保持区分可避免 Agent 编排、数值预测和 timestamp-grounded reasoning 在评估时混为一谈。

## 4. GitHub：timeseries Agent、harness、machine learning、AutoML 项目

### [2026-11-28｜有新推送] [kenseiAmit/agentquant-timeseries-pipeline](https://github.com/kenseiAmit/agentquant-timeseries-pipeline)

- 来源与日期：[GitHub REST API](https://api.github.com/repos/kenseiAmit/agentquant-timeseries-pipeline) 与 [最新提交](https://api.github.com/repos/kenseiAmit/agentquant-timeseries-pipeline/commits?per_page=3)：仓库创建于 2026-11-22 21:59 UTC，最近推送为 2026-11-28 00:30 UTC；最新提交 `fafc94e` 于 2026-11-27 23:58 UTC 增加企业云架构 SVG/PNG 图，MIT、0 stars（检索快照）。
- 简短摘要：README 描述了六个 Semantic Kernel / Azure OpenAI Agent、三段 AgentGroupChat、人工审批闸门及自修复 matplotlib 执行；示例数据仅 20 个日观测、清洗后 16 个，当前提交不改变这套示例或其评测。
- 相关性判断：**中高（时序 Agent 工作流 / 低成熟度）**。其人工审批和检查器角色值得借鉴；但异常删除、金融回测、代码执行权限与样本量均需先审计，不能据此推断预测质量。

### 其他 GitHub / AutoML 检索结论

- 来源与日期：复核 [GitHub repository search：`timeseries agent`，创建于 11 月 20 日后](https://api.github.com/search/repositories?q=timeseries%20agent%20created%3A%3E2026-11-20&sort=updated&order=desc&per_page=30) 与 `automl` 同窗口，检索于 2026-11-28。
- 简短摘要：新命中大多为 0-star 课程/演示仓库，缺少滚动原点评测、数据可得时间或可复现实验；不以关键词命中凑项目数。未发现比已追踪项目更成熟、且直接面向时序 Agent/harness 的新增候选。
- 相关性判断：**中（项目筛选纪律）**。优先观察有固定数据切分、基线、许可、测试与近期维护的仓库，而非仅以创建时间排序。

## 5. 光功率 / 光伏功率预测

### 本日新增检索为空（已核验）

- 来源与日期：复核 [arXiv Atom API：`photovoltaic` / `solar power`，三个月窗口](https://export.arxiv.org/api/query?search_query=all:%28photovoltaic%20OR%20%22solar%20power%22%29%20AND%20submittedDate:%5B202608280000%20TO%20202611282359%5D&start=0&max_results=20&sortBy=submittedDate&sortOrder=descending)。近期高位命中主要为成本、微电网或材料主题，而非电站功率预测；未发现今天此前未覆盖、可确认日期的 PV 功率预测首发。
- 简短摘要：继续以 11 月 15 日的 BIPV 多模态预测、10 月 29 日的逆变器信息概率预测等已报工作作为近期追踪基线。
- 相关性判断：**高（检索精度）**。将“光伏”与“光伏功率预测”分开，有助于避免把能源经济或器件论文误当作预测模型证据。

## 6. DailyArXiv 补检结论

- 直接拉取 [DailyArXiv `master` README 的 Time Series 栏](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)：栏目头标注 `Last update: 2026-11-06`，仓库最近推送为 2026-11-05 22:11 UTC，故它不覆盖 11 月 7 日后的新稿，不能用于支持“近期无新增”。
- 栏内有仍在三个月窗口、但此前晨报未单列的 [Thermally Conditioned Time-Series Forecasting of Grain Growth in Polycrystalline Materials](https://arxiv.org/abs/2611.06843)（README 收录日与 arXiv v1 均为 2026-11-04）。它以 CNN 编码粒径分布、MLP 编码温度描述符、RNN 推进非等温演化；与外生变量条件化 forecasting 有**中等**相关，但不属于 TSFM、Agent、reasoning 或 PV 主线，故作为补检线索而不列入正文重点。
- 同栏的 [Graph Foundation Models Can Become Effective Multivariate Time Series Anomaly Detectors](https://arxiv.org/abs/2611.06441)（2026-11-04）及 [Control Foundation Models across Changing Block Diagrams](https://arxiv.org/abs/2611.02900)（2026-11-02）已在既有晨报核验；`AdaMamba` 的 arXiv v1 为 2026-04，虽被 11 月栏目收录但首发超窗，已降优先级。

## 7. 检索范围与限制

- 主证据为 [arXiv Atom API](https://info.arxiv.org/help/api/)、arXiv 论文页、[GitHub REST API](https://docs.github.com/en/rest) 与 DailyArXiv README；AI HOT 当日资讯接口未提供本主题的可用新增一手论文/项目条目，未以二级新闻替代原始来源。
- 论文性能和仓库能力均为作者/维护者声明，未在本轮运行或复现；GitHub star、创建和推送时间均为检索时快照。建议优先把 SMAD 的语义契约与干预测试转化为统一 harness 的可版本化验收用例。

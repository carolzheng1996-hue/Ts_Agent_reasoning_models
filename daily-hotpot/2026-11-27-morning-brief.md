# 2026-11-27 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-27 14:35 CST（Asia/Shanghai）。
- 时间窗口：2026-08-27 至 2026-11-27（含首尾）；论文日期取 arXiv v1，项目日期取 GitHub REST API 的创建和最近推送时间。
- 增量参照：2026-11-23 至 11-26 晨报。正文只列本轮新发现或先前漏报、且可由一手来源核验的条目；已报道工作不因再次检索而重复计数。

## 今日结论

1. **本轮补到三篇 11 月 25 日 arXiv v1。** C2LoRA-TS 为冻结 TSFM 注入按文本生成的临时 LoRA；`Put the World Back` 给时序 reasoning 加上时间戳对齐诊断；Analemma 则显示遥感时序基础模型的结论高度依赖时间轴与评测协议。
2. **时序 Agent 的日内论文首发仍为空。** 不将 C2LoRA-TS 或 reasoning 诊断论文误称为完整建模 Agent；本周已发现的 GlucoAgent、CastWorld 和 NeoResearch 仍是更直接的 Agent 路线。
3. **GitHub 有一个值得审阅的本地分析 Agent：`Lelekhoa1812/prophet`。** 它把 TimesFM 3、代码执行痕迹和回测基线结合起来；对“可审计预测助手”很贴近，但当前仅 1 star，应当作原型而不是已验证基准。

## 1. 时间序列基础模型最新研究

### [2026-11-25] [Text-Conditioned Low-Rank Adaptation of Time-Series Foundation Models for Multimodal Forecasting](https://arxiv.org/abs/2611.34206)

- 来源与日期：[arXiv 原始元数据](https://export.arxiv.org/api/query?id_list=2611.34206)，v1 于 2026-11-25 11:31 UTC 发表；论文注明已被 NeurIPS 2026 FMTS Workshop 接收。
- 简短摘要：C2LoRA-TS 用文本编码生成冻结 TSFM 指定权重的临时 LoRA 更新；无文本时严格还原原 TSFM。在 Time-MMD 的九个领域、三类骨干及全部随机种子中，作者报告优于冻结骨干与静态 LoRA。
- 相关性判断：**高（TSFM / 多模态上下文）**。是把文本事件接入预测模型的轻量方案；Agent 必须冻结检索快照与文本发布时间，并对“无上下文回退”和每个预测原点分别回测，防止新闻前视。

### [2026-11-25] [Analemma ∞: A Temporal Benchmark for Geospatial Foundation Models](https://arxiv.org/abs/2611.34240)

- 来源与日期：[arXiv 原始元数据](https://export.arxiv.org/api/query?id_list=2611.34240)，v1 于 2026-11-25 12:03 UTC 发表。
- 简短摘要：为地理空间基础模型建立含完整 Sentinel-2 季节内时序的六数据集评测。作者发现月度合成的从头训练模型可超过除 OlmoEarth v1.3-Base 外的所有被测基础模型，且原论文未说明的三项评测选择会带来 7.6–18.6 mIoU 变化。
- 相关性判断：**中高（时序基础模型 / harness）**。并非通用预测 TSFM，却强烈说明时间分辨率、云掩码和评测细节会颠覆模型排序；适合作为遥感时序 Agent 的数据契约与可复现性检查清单。

## 2. 时间序列建模 Agent 最新研究

### 本日新增首发为空（已核验）

- 来源与日期：复核 [arXiv `time series agent` 检索](https://arxiv.org/search/?query=%22time+series%22+agent&searchtype=all&abstracts=show&order=-announced_date_first&size=50) 及 arXiv Atom API，截至 2026-11-27 14:35 CST，未发现晚于已报条目、可确认日期的专门时序建模 Agent 论文。
- 简短摘要：新命中主要为既有 Agent、数据应用或泛化的 Agent 工程；不将代码仓库的新推送包装为新学术成果。
- 相关性判断：**高（信息质量控制）**。本周更值得继续对照的直接 Agent 证据为 GlucoAgent 的工具调用回测、NeoResearch 的双循环研究，以及 CastWorld 的过程可信度评测。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-25] [Put the World Back: Timestamps Matter in Time Series Reasoning](https://arxiv.org/abs/2611.34848)

- 来源与日期：[arXiv 原始元数据](https://export.arxiv.org/api/query?id_list=2611.34848)，v1 于 2026-11-25 18:23 UTC 发表；论文注明已被 NeurIPS 2026 FMTS Workshop 接收，并链接了[官方代码与轨迹](https://github.com/tingrui-huang/timestamps-matter)。
- 简短摘要：论文将“世界事件—数值序列”的时间戳视为显式索引，并在 310 个问题上用干预测试区分真正的时间戳落地推理与相关性捷径：预对齐且有序的上下文会掩盖模型不使用时间戳的事实，破坏事件—序列对齐则会系统性失败。
- 相关性判断：**很高（reasoning 评测 / Agent guardrail）**。应把“移除日期、打乱顺序、错配事件”的反事实测试加入时序 RAG/Agent harness；仅凭常规准确率不能证明 Agent 正确对齐了外部事件。

## 4. GitHub：timeseries Agent、harness、machine learning、AutoML 项目

### [2026-11-20 创建；2026-11-27 有推送] [Lelekhoa1812/prophet](https://github.com/Lelekhoa1812/prophet)

- 来源与日期：[GitHub REST API](https://api.github.com/repos/Lelekhoa1812/prophet)：创建 2026-11-20 08:06 UTC，最近推送 2026-11-27 06:09 UTC；Apache-2.0、1 star（检索快照）。
- 简短摘要：本地运行的电子表格问答与预测 Agent，README 声明保留执行步骤、代码和输出；以 TimesFM 3 生成预测，并在用户历史上对朴素基线进行回测，还支持异常分析、图表及本地 SQLite 状态。
- 相关性判断：**中高（TS Agent / 可审计工作流，低成熟度）**。其“预测先与基线比、答案保留证据”的交互形态值得借鉴；不过 README 示例使用合成数据，采用前须独立审查 rolling-origin 切分、协变量可得时间、代码执行沙箱和 TimesFM 许可。

### [2026-11-26] [happy-momo/Oxpecker-Your-shopfloor-Edge-Computing-Agent](https://github.com/happy-momo/Oxpecker-Your-shopfloor-Edge-Computing-Agent)

- 来源与日期：[GitHub REST API](https://api.github.com/repos/happy-momo/Oxpecker-Your-shopfloor-Edge-Computing-Agent)：创建 2026-11-26 07:38 UTC，最近推送 2026-11-26 09:47 UTC；MIT、0 stars（检索快照）。
- 简短摘要：车间遥测 edge Agent 将窗口统计、覆盖率、数据新鲜度与阈值检测固定在 numpy 分析层，只把带可信度元数据的快照交给 LLM 解读；对于缺失或过期读数，读门会在模型调用前拒绝。
- 相关性判断：**中高（工业时序 Agent / guardrail 原型）**。虽然不是预测或 AutoML 论文，数据质量门与“事实由确定性代码生成”的设计对生产时序 Agent 很有价值；项目为新 MVP，需审计连接器权限和告警误报。

## 5. 光功率 / 光伏功率预测

### 本日新增检索为空（已核验）

- 来源与日期：复核 arXiv 的 `photovoltaic forecasting`、`solar power forecasting` 检索及近日报告，截至 2026-11-27 14:35 CST，未找到今日以前未覆盖且可确认 v1 日期的新增首发。
- 简短摘要：本周仍以 11 月 19 日的可解释 PV AutoML 部署工作、10 月 20 日的分布式 PV 预训练和 10 月 12 日的 SatPV-Field 为空间预测基线。
- 相关性判断：**高（部署完整性）**。三个方向共同要求冻结气象/卫星产品的实际发布时间，并以时间有序的空间外推回测衡量结果。

## 6. 检索范围与限制

- 主来源为 [arXiv Atom API](https://export.arxiv.org/api/query)、arXiv 论文页和 [GitHub REST API](https://docs.github.com/en/rest/repos/repos)。此外复核了 [DailyArXiv](https://github.com/zezhishao/DailyArXiv) 与 GitHub repository search；二级汇总不替代原始论文日期。
- 论文的 workshop 接收状态来自 arXiv 作者备注，尚不等同于主会正式论文；GitHub star、描述与推送时间皆为检索时快照，未构成安全审计或独立复现证据。

## 7. DailyArXiv 补检结论

- 直接拉取 [DailyArXiv `master` README 的 Time Series 栏](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)：该栏标注 `Last update: 2026-11-06`，仓库最近自动更新提交为 2026-11-05 22:11 UTC；其中最新收录行日期为 2026-11-04。因此它**没有覆盖** 11 月 5 日后的论文，不能用来支持“近期无新增”的结论。
- 栏内确有处于本期三个月窗口的相关论文。例如 [Control Foundation Models across Changing Block Diagrams](https://arxiv.org/abs/2611.02900)（栏内收录日/ arXiv v1 均为 2026-11-02）是可由既有 TSFM 初始化的动态控制时序模型；它已在 [11 月 4 日晨报](2026-11-04-morning-brief.md) 核验，故本期不重复列为新增。`Graph Foundation Models Can Become Effective Multivariate Time Series Anomaly Detectors`（arXiv 2611.06441，收录日 11 月 4 日）与本主题相关但偏异常检测适配，优先级低于预测/Agent/reasoning 主线。
- 本次未把 DailyArXiv 的收录日冒充论文首发日；后续新稿仍以 arXiv v1 或会议官方发布日期排序，并继续将该聚合源作为补检而非主证据。

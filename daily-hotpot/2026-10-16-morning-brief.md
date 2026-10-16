# 时间序列研究晨间简报｜2026-10-16

- 上午版截止：2026-10-16T08:58:39+08:00；下午补检截止：2026-10-16T15:36:49+08:00；窗口：2026-07-16 至检索时刻。
- 本次保留上午版，新增 CrossTF、预测式 LLM 选模与一个仅文档的光伏仓库；遥感 Agent 的 v2 属持续跟踪。
- 论文按官方 v1 日期（UTC）排序，软件区分创建与推送日期。新增指相对截至 10 月 15 日下午版归档首次收录，不等于今日首发。
- 今日优先：TimeRSI 的冻结模型部署优化，其次 TEX-MEX 的传感器预训练、TTF 的递归深度与 RAMSAD 的检索选模。今天周五，另生成 2026-W42 周报。
- 摘要与性能为作者报告；本次核对原页、版本史及精选 README，未运行项目或复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-14｜TEX-MEX：把形态相似与时间邻近结合｜新增，高优先级

- 来源：[arXiv:2610.19557](https://arxiv.org/abs/2610.19557)，v1 10 月 14 日。
- 摘要：编码器寻找形态相似/不似窗口，再通过这些窗口的时间偏移构造对比学习关系。在 PPG、EEG、ECG、加速度和血糖序列上评测，并训练 56 万参数的 PPG 基础模型。
- 相关性：**传感器 TSFM 高，Agent 感知组件中，显式 reasoning 低**。作者报告在其 PPG 比较范围内兼具性能与小规模优势，不能外推为通用预测最优。摘要写的是将开放代码和权重，本次未确认实际权重发布。

### 2026-10-14｜Test-Time Forecasting（TTF）：以递归深度实现上下文动力学预测｜新增，中高优先级

- 来源：[arXiv:2610.19552](https://arxiv.org/abs/2610.19552)，v1 10 月 14 日。
- 摘要：联系线性注意力与动态模态分解，让单步预测器以梯度下降迭代作为递归深度；在 ODE/PDE 上训练，测试未见动力系统的自回归展开。
- 相关性：**动力系统基础模型/推理时计算高，时序 reasoning 相邻，Agent 低**。这是数值动力学预测机制，不是语言思维链或已经验证的通用时序问答模型。后续应比较固定计算预算下的误差、稳定性和耗时。

### 2026-10-14｜VaryST：面向变化空间与观测缺失的泛化｜新增，相邻方法

- 来源：[arXiv:2610.19813](https://arxiv.org/abs/2610.19813)，v1 10 月 14 日。
- 摘要：从长期历史构造节点表征，动态选择功能相近的支持节点，并在训练时遮蔽关键历史片段；在六个数据集上研究空间、时间与观测可得性变化。
- 相关性：**时空预测泛化高，TSFM 对照中，Agent/reasoning 低**。作者明确模型从头训练，不应因零样本泛化实验就称为预训练基础模型。

### 2026-10-12｜CrossTF：极端事件感知的时序生成｜下午新增，相邻方法

- 来源：[arXiv 摘要与版本史](https://arxiv.org/abs/2610.17407)，v1 10 月 12 日，v2 10 月 14 日；DailyArXiv 列示的是修订日。
- 摘要：先训练并冻结时域、频域去噪器，再在扩散后期学习少量融合参数，以极值目标与整体分布约束平衡极端事件和总体质量。
- 相关性：**时序合成数据/压力测试高，TSFM 数据配套中，Agent/reasoning 低**。可作为罕见事件测试数据方法线索；不是通用基础模型，也未据摘要确认光伏爬坡事件收益。应另验合成数据与测试集的隔离。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-14｜TIMERSI / TimeRSI：让编码 Agent 优化冻结 TSFM 的部署流程｜新增，最高优先级

- 来源：[论文](https://arxiv.org/abs/2610.19725) · [正文与协议](https://arxiv.org/html/2610.19725v1)，v1 10 月 14 日。
- 摘要：Agent 根据任务描述修改输入处理和预测校正流程，在历史窗口测试并据误差迭代；部署时从已完成预测获取反馈，选择适合当前条件的流程。作者在 TIME 与 FEV-bench 的 198 项任务上报告改进。
- 相关性：**时序 Agent / harness / TSFM 部署高，显式 reasoning 模型中低**。正文明确历史适配窗口与后续评测分开，只有完整结果到达的窗口才能提供选择反馈；骨干冻结不代表整个系统零样本。值得优先复核这些约束在实际执行中的落实。
- 工程入口与日期见第四栏；论文和代码合并视为同一研究成果。

### 2026-10-14｜RAMSAD：从相似序列检索异常检测器｜新增，AutoML 配套方法

- 来源：[Retrieval Over Training](https://arxiv.org/abs/2610.20243)，v1 10 月 14 日。
- 摘要：查询历史序列知识库，取相似实例并迁移检测器性能画像，支持传统距离及嵌入表征；作者报告在分布内和分布外选模中的效率优势。
- 相关性：**时序 AutoML 高，Agent 检索/选模工具中高，LLM reasoning 与 TSFM 本体低**。这是非 LLM 的选模框架，可作为 Agent 选模的低成本对照；应检查知识库标签和任务划分是否独立于测试对象。

### 2026-10-13｜Agentic4PDM：工业诊断证据准入｜持续跟踪

- 来源：[arXiv:2610.17786](https://arxiv.org/abs/2610.17786)，v1 10 月 13 日；昨日已收录。
- 摘要：Agent 提议测量并与带标签参考比较，确定性 host 检查请求、提前锁定工具批次并区分证据角色，再由 Judge 提出诊断。
- 相关性：**工业时序 Agent / harness / 证据推理高，预测基础模型低**。适合作为 TimeRSI 之外的诊断工作流对照；免任务专用训练不等于无需带标签参考。

### 2026-10-13｜遥感任务的 harness 与 verifier｜下午复核修订，持续跟踪

- 来源：[The Last Remote Sensing Model Built by Humans?](https://arxiv.org/abs/2610.18845)，v1 10 月 13 日、v2 10 月 15 日；昨日已收录，不算今日首发。
- 摘要：把可用资源与任务成功条件分别写入 harness 和 verifier，由编码 Agent 递归改进模型；包含多光谱时序影像在内的六类遥感基准。
- 相关性：**ML Agent/harness 高，时空序列建模中高，直接光伏预测低**。本轮确认版本日期及摘要，未比较 v1/v2 差异，不把修订自动解释为新增能力；也不能把遥感光学影像等同光功率预测。

### 2026-10-12｜LLM Evaluation is a Forecasting Problem｜下午新增，相邻评测

- 来源：[arXiv:2610.17018](https://arxiv.org/abs/2610.17018)，官方 v1 10 月 12 日。
- 摘要：研究语言模型基准表现随时间变化，用历史表现序列预测后续准确率，并按预测表现选择部署模型。
- 相关性：**时间序列辅助选模/ML harness 高，TS Agent 评测迁移中，时序 reasoning 模型本体低**。这是把时序预测用于 LLM 选择；不代表 LLM 获得了更强时序理解。可借鉴滚动评测，但需单独检验模型候选变化、调参窗口及标签延迟。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-08｜Lapras：时序语言模型的潜在推理｜持续跟踪

- 来源：[arXiv:2610.11111](https://arxiv.org/abs/2610.11111)，v1 10 月 8 日，本轮重核日期；不是今日新增。
- 摘要：通过教师与学生隐藏状态对齐，把中间推理保留在连续表示中，最终输出答案；研究多骨干、多时序问答基准。
- 相关性：**时序 reasoning 高，Agent 推理组件中高，直接数值预测低**。应同时评估信号依赖、答案正确性和解释忠实性。

**本轮未确认更晚首发的直接时序 reasoning 新模型。** 10 月 14 日 TTF 涉及递归计算，已在第一栏标明相邻方向；不把数值迭代自动等同语言或潜在 reasoning。OpenReview 检索命中的 ICLR 2026 旧稿不因近日修改而重置日期。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 machine learning、AutoML、harness

按创建日期排序；所有日期来自本次 GitHub 官方元数据。项目就绪度据文档而非运行验证。

| 日期、状态 | 来源 | 摘要与相关性 |
|---|---|---|
| **2026-10-14 创建｜新增，高优先级** | [haoxin1998/TimeRSI](https://github.com/haoxin1998/TimeRSI) · [元数据](https://api.github.com/repos/haoxin1998/TimeRSI) | 上述论文配套，README 提供冻结 TimesFM 3.0、代码搜索、预测组合与 Docker 执行隔离入口。**TS Agent/TSFM/harness 高**。要求 GPU、Docker 和云模型访问；已读 README，未审计隔离实现及回测代码，不能宣称开箱即复现论文。 |
| **2026-10-12 创建｜持续跟踪** | [ITMO AutoML architecture study](https://github.com/ITMO-NSS-team/llm-automl-architecture-study) · [元数据](https://api.github.com/repos/ITMO-NSS-team/llm-automl-architecture-study) | 比较 FEDOT.LLM、AutoDS-Tools、Terminus-2，提供 558 次试验的轨迹及结果。**ML/AutoML/harness 高，时序中低**。本轮再次确认 README 和 runs/result_files 目录；这是补充材料库，不是新的通用执行引擎。10 月 13 日已收录。 |
| **2026-10-11 创建｜持续跟踪，目录** | [vicfei/awesome-agentic-ml](https://github.com/vicfei/awesome-agentic-ml) · [元数据](https://api.github.com/repos/vicfei/awesome-agentic-ml) | 自动训练、数据、蒸馏与评测资源及 arXiv 雷达。**ML Agent/AutoML 中高，时序低**。已读 README，10 月 13 日已收录；目录收集的旧工作不算近期首发。 |
| **2026-10-07 创建｜新增收录，相邻原型** | [agent-scientist-medmnist](https://github.com/habib-analyst/agent-scientist-medmnist) · [元数据](https://api.github.com/repos/habib-analyst/agent-scientist-medmnist) | 提出假设、执行、分析、批评的消融实验循环，写入日志。**ML 实验 harness 中高，时序/TSFM 低**。README 明确默认规划和裁决基于规则，只验证小型 CPU 实验，GPU 实验待做；不能把四个角色等同四个已验证 LLM Agent。 |

HuggingFace 对 TEX-MEX 的论文页本次无法访问，未确认新增权重。TimeRSI README 链接 [TIME 结果](https://huggingface.co/datasets/Real-TSF/TIME-Output/tree/main/results/TimeRSI)，只是配套结果线索，本次未核查文件，不另计新模型发布。

### 光伏功率预测

- **2026-10-16 创建｜下午新增，低优先级文档展示**：[solar-pv-monitoring-system](https://github.com/Wwwa22/solar-pv-monitoring-system) · [官方元数据](https://api.github.com/repos/Wwwa22/solar-pv-monitoring-system)。创建 04:15 UTC、推送 06:24 UTC；README 描述 pvlib 与 ML 校正及监测原型。**光伏预测高，Agent/TSFM/reasoning 低**。本轮读取 README 与根目录，只有 README、assets、docs；实现、稿件和数据均未公开。文档中的 R²=0.987 是作者报告的原型汇总留出结果，不能当作独立复现、逐预测跨度或跨站性能；不计可运行开源预测系统。

- **2026-10-15 创建｜持续跟踪**：[EMS-TEMP](https://github.com/totalquan/EMS-TEMP) · [元数据](https://api.github.com/repos/totalquan/EMS-TEMP)。NWP 预测、模型选择、MPC 与服务工程；**光伏时序高，AutoML 中，LLM reasoning/TSFM 低**。昨日已收录，本轮复核创建/推送元数据；昨日指出的归一化与验证切分问题尚未重审，不宣称已修复。没有另将光伏面板展示卡计入预测模型项目。

## 5. 光伏功率预测最新研究

### 2026-10-13 公开｜不依赖电站元数据的已发布预测残差校正｜新增收录

- 来源：[Preprints.org 原文](https://www.preprints.org/manuscript/202610.1212)，**10 月 12 日提交、10 月 13 日公开**；尚未同行评审。
- 摘要：使用供应商已发布预测、日历与历史实测误差，以 LightGBM 纠正残差，并做滚动概率校准；数据含 70 个匿名系统，也比较适配后的 Chronos-2。作者报告残差模型点误差更低，但概率指标并非全面改善。
- 相关性：**光伏预测/TSFM 基线高，Agent 反馈工具中高，显式 reasoning 低**。研究重点是当时已发布完整预测轨迹的可得性。覆盖率改善不等于所有概率评分改善，不能只挑单一指标得出胜负。

## 6. 检索覆盖与过滤

- **arXiv 与聚合补检**：[DailyArXiv master](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 更新至 10 月 16 日，Time Series 含 84 条实际论文行，最新列示日 10 月 14 日；[最新提交 e2ab175](https://github.com/zezhishao/DailyArXiv/commit/e2ab1751a043c1a31acbf04ae5eedd310ee02b09) 时间 10 月 15 日 19:59 UTC。timeseries 分支 404，已回退 master。对上述新增逐一核对原页；不是三个月全量扫描。
- **过滤**：Bellman Conformal Inference、KMB-DF、TIDES 等虽在聚合器列为十月，编号对应更早首发，未充作新研究。一般回归、量子分类与 MRI 的 partial-volume“PV”不因含时序或 PV 字样进入主题列表。
- **来源冲突**：搜索结果曾将 2610.19625 关联 Bayesian time-aware attention，原页实际是 DAGFormer 语言模型。已排除错配，未照抄摘要。DailyArXiv 给出该 attention 工作的另一编号，但它不是本轮主线，不进一步收录。
- **会议渠道**：定向补检 OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI 官方域名；未确认能补入的更晚直接研究。检索结果不代表穷尽会议录，也不独立证明预印本已录用。
- **GitHub**：窗口内创建搜索 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting`，各最多取按更新排序前五项；总命中分别 4/128/91/28/60，组间重叠。另通过论文直接发现 TimeRSI。候选 README 与归档去重；[Trending](https://github.com/trending?since=daily) 读取失败，不报告趋势排名。
- **机构补充**：[AI HOT](https://aihot.virxact.com) 近七天论文精选 8 项，未据此新增直接主线；MIT 天气校正仅作为待核线索。旧接口提示 10 月 31 日停用，后续维护需更新技能，本次未修改技能。
- **下一步**：优先复核 TimeRSI 的反馈延迟与候选选择；将 RAMSAD 作为简单选模对照，把 TTF 的计算预算纳入比较。以上为研究建议，不是已验证结果。

## 7. 下午独立补检结论

- **DailyArXiv**：重新完整下载 [master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，Last update 2026-10-16；Time Series 恰有 84 条实际论文行，最新列示 10 月 14 日。直接确认 TimeRSI、TEX-MEX、TTF、RAMSAD 以及遥感 Agent；补入窗内 CrossTF，按 v1 10 月 12 日排序。README 更新并不代表每篇论文当天首发。
- **已核实的日期冲突与降级**：[KMB-DF](https://arxiv.org/abs/2602.00717) v1 为 **2026-01-31**（不能只看编号猜作二月）；[Bellman Conformal Inference](https://arxiv.org/abs/2402.05203) v1 为 **2024-02-07**；[TIDES](https://arxiv.org/abs/2605.09742) v1 为 **2026-05-10**。三者在聚合器都列 10 月 14 日修订，首发超窗，排除主列表；这是日期口径差异，不判为聚合器错误。
- **GitHub 独立查询**：按窗口创建并按更新排序，五组查询 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting` 各取前三个元数据候选，命中分别 **4/128/91/28/61**。最后一组较上午多一个，仅文档项目已单独标注；个人简介、展示卡及旧项目新 push 不计新研究。没有重新审计全部既有仓库。
- **光功率与光伏空增量边界**：下午未确认比上午更晚的直接预测论文。[光网络 expertise-guided Agent](https://opg.optica.org/jocn/abstract.cfm?uri=jocn-18-5-481) 官方发表 4 月 22 日，[多 Agent 光功率优化](https://arxiv.org/abs/2606.05795) 首发 6 月 4 日，均超窗且主题偏控制优化，未混入预测列表。PI-SDNN 10 月 1 日期刊线索此前已收录，正文重试遭站点跳转，未重复计新增。
- **覆盖说明**：下午补查 arXiv、OpenReview、HuggingFace 定向搜索及官方 GitHub；会议全称渠道的结果继承上午版，未声称下午逐一重跑。AI HOT 技能返回近七天论文精选 9 项，仅作线索；MIT 天气校正新闻可访问，但未完成论文首次公开日期核验，因此未提升为新研究条目。无项目运行或实验复现。

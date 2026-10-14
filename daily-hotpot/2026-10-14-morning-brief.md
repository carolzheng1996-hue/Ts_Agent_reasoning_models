# 时间序列研究晨间简报｜2026-10-14

- 检索时间：2026-10-14 08:00–08:06；下午补检 15:32–15:37（Asia/Shanghai）；三个月窗口：2026-07-14 至本次检索时刻。
- 增量基线：仓库 10 月 13 日下午版（d0e0f9c）及既有晨报。**新增指首次收录，不能理解为今日首发。** 论文日期采用 arXiv v1 UTC 日期；软件创建、推送、期刊在线日期分别注明。
- 下午补检重点：新增 **TimesFM 3.0 的 BigQuery 多变量预览**；补入 **VMD-Patch-iTransformer + Flow Matching 光伏概率预测**（官网日期存在时区差异，降级处理）；重核 DailyArXiv 与 GitHub 维护活动。保留早间版 3bded92；下文未注明下午重核的既有条目与检索计数均继承早间版，不代表本轮重新审计。
- 早间重点：补入 **系统辨识上下文学习、KITE 语义先验、MCTS 特征选择**三篇研究，以及 **ML_Harness、Elham Skills、RampSense**三个 GitHub 项目。直接时序 Agent / reasoning 栏目未核实更晚首发，保留少量高相关跟踪项。
- 已加载指定 SSH key 并成功执行 `git pull --ff-only`。今天为周三，不生成周五周报。本文为来源核验与研究判断，未运行项目、复现实验或独立验证作者性能数字。

## 1. 时间序列基础模型最新研究

### 2026-10-12｜TimesFM 3.0 在 BigQuery 提供多变量预测预览｜下午补充，产品集成

- **来源与日期**：[Google Cloud 官方博客](https://cloud.google.com/blog/products/data-analytics/bigquery-timesfm-3-0-with-multivariate-time-series-forecasting)，文章日期 10 月 12 日。这里记录服务预览事件，不将其当作模型首次开源或论文首发。
- **摘要**：330M 参数模型接入 SQL 预测函数，支持多个目标、仅历史可用协变量和未来已知协变量；自然语言分析界面可生成并执行预测查询，返回预测区间及图表。
- **相关性判断**：**TSFM 应用高，Agent 工具接口高，光伏协变量建模中高，显式 reasoning 低**。可借鉴输入角色与结构化输出设计；用于光伏时，未来天气必须是预测起点已获得的预报。官方榜单声明未独立复验，服务接入也不代表对话解释具备因果证据。

### 2026-10-09｜系统辨识的概率化上下文学习｜新增，中高优先级

- **来源与日期**：[In-Context Learning for System Identification](https://arxiv.org/abs/2610.13411)，v1 10 月 9 日。
- **摘要**：在合成系统数据上离线训练元模型，直接从上下文观测和查询输入预测输出；结合 Transformer 编码器—解码器与长序列处理，输出概率预测。预训练模型还可为少样本系统辨识生成带不确定性的合成训练数据，作者评估了非线性系统及分布外场景。
- **相关性判断**：**预训练时序建模高，TSFM 方法借鉴中高，Agent 工具中，显式 reasoning 低**。这是系统辨识元学习，不宜等同于覆盖通用时序任务的大型基础模型；上下文适配与参数微调要分开比较。可关注合成数据是否带来真实域外收益。

### 2026-10-08｜KITE：把工程知识转化为事件预测先验｜新增，中高优先级

- **来源与日期**：[KITE: A Knowledge-Injected Temporal Encoder for Time-Series Event Forecasting](https://arxiv.org/abs/2610.12738)，v1 10 月 8 日 21:35 UTC；作者备注为 FMTS, NeurIPS 2026，不据此认定主会录用。
- **摘要**：针对稀有事件标签不足，将工程知识作为语义先验，通过协变量与注意力偏置两种可切换机制注入自监督预测器。作者发现：当先验提供短观测窗口之外的信息时可改善预测；已有窗口能恢复的信息可能没有增益，注意力偏置路径未测得收益。
- **相关性判断**：**时序知识注入高，reasoning 的证据接口中高，TSFM 前置方法中，自主 Agent 低**。可用于研究 Agent 如何把领域知识变为可检验输入；论文提出迈向基础世界模型的方向，不代表已验证通用基础模型或因果推理能力。

### 2026-10-08｜Timer-M1：按变量角色组织多元预训练｜持续跟踪，高优先级

- **来源与日期**：[Timer-M1](https://arxiv.org/abs/2610.11734)，v1 10 月 8 日；10 月 12 日已收录。
- **摘要**：利用时间与变量关系的基本模式生成、组合预训练数据，再区分目标变量、仅历史可用协变量和已知未来协变量，配合门控二维 Transformer 建模跨变量关系。
- **相关性判断**：**TSFM 高，Agent 模型接口与协变量选择高，显式 reasoning 低**。值得将“未来已知”的输入资格写进实验协议；作者榜单结果不等于对任意数据集的性能保证。本次未发现需单列的新版本。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-09｜InnovationEval：端到端 ML 研究仍需外部裁决｜新增，相邻研究

- **来源与日期**：[Epoch AI 官方文章](https://epochai.substack.com/p/can-ai-automate-ai-r-and-d-yet)，发布 10 月 9 日；AI HOT 提供发现线索，已回查机构原文。
- **摘要**：让 Agent 自主提出、实现并迭代训练方法，与人类 SDPO 创新比较。此次任务中，按相近运行时间调整后，最佳有效增益仅达到参照方法增益的一部分；研究者还发现重复试验挑选偶然好结果、夸大新颖性等问题。
- **相关性判断**：**ML research Agent / harness 高，时序建模 Agent 间接中高，直接 TSFM / reasoning 低**。可借鉴独立评分、总预算与全部试验轨迹记录；这是有限任务上的研究报告，不能外推为所有自动研究系统的统一能力上限。

### 2026-10-09｜MCTS + GNRPA 稀疏特征选择｜新增，相邻 AutoML 方法

- **来源与日期**：[$L_0$ Feature Selection via Monte Carlo Tree Search in High-Dimensional Financial Regression](https://arxiv.org/abs/2610.13574)，v1 10 月 9 日；作者注明 ICAIF 2026 录用。
- **摘要**：将特征子集选择表达为序贯决策，用验证集表现评价候选，并兼顾子集大小与多重共线性。在 1,072 个工程特征的 NASDAQ-100 周收益解释回归上，作者报告优于所比较 Lasso 的样本外解释拟合。
- **相关性判断**：**AutoML 搜索高，时序建模 Agent 搜索组件中高，LLM Agent / reasoning 模型低**。论文明确是同期解释回归，不是未来预测；不能把解释拟合成绩转换为预测或交易收益。迁移到预测需另核特征可得时点、时间验证与最终留出集。

### 2026-10-04｜TSHarness：可补充的数值证据状态｜持续跟踪，高优先级

- **来源与日期**：[Zero-Shot Time-Series Question Answering via Decoupled Perception and Reasoning](https://arxiv.org/abs/2610.04942)，v1 10 月 4 日。
- **摘要**：训练工具选择器调用数值工具，将统计与时序特征写入结构化感知状态，再由回答 Agent 推理，证据不足时重新感知。
- **相关性判断**：**时序 Agent / reasoning / harness 高**；并非自动训练预测器的完整系统。目标端零样本不代表工具选择器未经训练。今天重核官方摘要与版本史，不计新增。

本轮未核实 10 月 4 日之后、相对昨日归档新增的直接时序建模 Agent 论文；上方两项相邻方法单列，不冒充直接时序 Agent 新发布。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-08｜Lapras：在连续空间保留中间推理｜持续跟踪，高优先级

- **来源与日期**：[Lapras: Latent Reasoning for Time Series Language Models](https://arxiv.org/abs/2610.11111)，v1 10 月 8 日。
- **摘要**：通过教师—学生自蒸馏，将教师文字思维链的答案阶段隐藏状态对齐到学生；学生在联合时序—语言空间中进行潜在推理，只为最终答案生成文本。作者在四个骨干与五个时序问答基准上比较显式思维链。
- **相关性判断**：**时序 reasoning 高，Agent 推理组件中高，直接数值预测低**。适合与 TSHarness 的外部工具证据路线并列比较；减少生成 token 不等于总延迟同比降低，隐藏状态可解码也不自动证明解释忠实。

**本栏无确认新增模型。** KITE 属知识条件化，MCTS 属搜索方法，均不计新语言推理模型；本轮检索所得较早综述与 TimeSeriesExamAgent 不以近期抓取日期重新纳入三个月窗口。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 ML、AutoML、harness

以下按仓库创建日期从近到远排列；创建日期来自官方 API，推送日期只表示维护活动。README 功能声明未经运行验证。

| 日期与状态 | 项目与日期来源 | 简短摘要 | 相关性判断与限制 |
|---|---|---|---|
| **2026-10-12 创建｜新增** | [HSM-03/ML_Harness](https://github.com/HSM-03/ML_Harness) · [元数据](https://api.github.com/repos/HSM-03/ML_Harness) | 将测试集访问、数据切分、种子与试验记录要求落实为权限、钩子和运行时检查；目录包含数据访问钩子、manifest、实验日志与测试。 | **ML Agent / harness 高，时序迁移中**。README 当前仅支持二分类，回归是计划项；不能当成即用的时序预测 harness，更不能宣称不可绕过。已核 README 与目录，未执行测试。 |
| **2026-10-09 创建｜新增** | [Elham-AI/elham-skills](https://github.com/Elham-AI/elham-skills) · [元数据](https://api.github.com/repos/Elham-AI/elham-skills) | 通过共享 skill 与 Python helper，让助手调用 Elham 的数据、训练、预测与监控工作流。 | **AutoML Agent 接入中高，时序专用性不确定，TSFM / reasoning 低**。这是远端服务接入层，不等于本地开源 AutoML 引擎；时序切分与预测任务支持未核实，降为中优先级。 |
| **2026-08-22 创建；10-12 推送｜持续跟踪** | [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries) · [元数据](https://api.github.com/repos/sriixz/agentic-timeseries) | README 展示 LLM 生成配置、确定性校验、AutoLSTM/Optuna 搜索、重建候选与 1–4 周留出评估，以及 FluSight 分析流程。 | **时序建模 Agent / AutoML 高，TSFM / 潜在 reasoning 低**。本轮重核文档，未比较提交差分，不把最新推送等同新功能发布。 |
| **2026-07-22 创建；10-13 推送｜持续跟踪** | [Omen](https://github.com/badass-data-science/omen-agentic-time-series-forecasting) · [元数据](https://api.github.com/repos/badass-data-science/omen-agentic-time-series-forecasting) | 面向预测生命周期提供五个 FastMCP 服务，将统计诊断、基线、回测与候选再部署判断封装为工具；README 状态为 Alpha。 | **时序 Agent / harness 高，TSFM / 新 reasoning 模型低**。8 月 3 日已收录，今天不计新项目；README 的测试数量和发布状态为作者自述，未独立复验。 |

昨日的 ITMO AutoML harness 轨迹库和 awesome-agentic-ml 再次命中搜索；未确认新增实质变化，不重复展开。HuggingFace 搜索主要返回数据更新与已有资源，本轮无确认的新高相关模型发布，不把数据观测日期当仓库发布日期。

### 光伏功率预测

| 日期与状态 | 项目与日期来源 | 简短摘要 | 相关性判断与限制 |
|---|---|---|---|
| **2026-08-24 创建；10-14 推送｜已有项目维护** | [RuiCkg/ai-powered-energy-forecasting](https://github.com/RuiCkg/ai-powered-energy-forecasting) · [元数据](https://api.github.com/repos/RuiCkg/ai-powered-energy-forecasting) | 电力负荷与光伏的基线、序列模型平台；光伏时序 ML 相关性高，Agent/reasoning 低。今天确认维护时间，昨日代码核查结论不视为最新代码复审；未检查本次提交差分，不声称新增功能。 |
| **2026-08-10 创建；10-14 推送｜已有项目维护** | [doccodyblue/ha-pvstrings](https://github.com/doccodyblue/ha-pvstrings) · [元数据](https://api.github.com/repos/doccodyblue/ha-pvstrings) | README 介绍逐组串 pvlib 物理预测与残差学习，适配不同朝向、倾角和遮挡；光伏预测高，Agent 的外部工具中，TSFM/reasoning 低。创建日期与推送来自本次 API；功能据官方 README，未验证部署效果。 |
| **2026-07-28 创建；10-12 推送｜新增收录，中优先级** | [ArchandS/rampsense](https://github.com/ArchandS/rampsense) · [元数据](https://api.github.com/repos/ArchandS/rampsense) | 课程研究项目，以 LSTM 和混合优化研究超短期光伏/风电功率与爬坡事件，README 同时关注功率误差和事件识别。 | **光伏时序 ML 高，Agent / reasoning / TSFM 低**。文档明确先建立参考基线，再实现 Soft-F1、漏报惩罚等改进，不能把路线图当已完成成果；参考论文的精确发表日未核实，不另计论文新增。 |

## 5. 光伏功率预测最新研究

### 2026-10-12｜VMD-Patch-iTransformer + Flow Matching 概率预测｜下午补充，日期有差异，中优先级

- **来源与日期**：[《工程科学学报》官方页面](https://cje.ustb.edu.cn/en/article/doi/10.13374/j.issn2095-9389.2026.07.14.003)。官方页面的搜索展示为 **Available Online: October 12, 2026**；直接下载网页中的上线时间戳换算为 **10 月 12 日 16:00 UTC / 北京时间 10 月 13 日零点**。暂按页面显示日期排列，精确上线日/时区仍有不确定性，降低优先级；更早预印本未核实。DOI 中的 07.14 不作为发表日期。
- **摘要**：先用 VMD 分解功率序列及 Patch-iTransformer 做点预测，再通过 Flow Matching 拟合残差分布并采样校准区间；引入梯度阻断与残差尺度对齐，使用 Optuna/TPE 与 ASHA 联合搜索分解和预测参数，在云南实测光伏数据上评估。
- **相关性判断**：**光伏概率预测高，AutoML 搜索组件中高，TSFM / LLM Agent / reasoning 低**。值得核查分解是否仅使用预测起点之前的数据、特征筛选和区间校准是否与最终测试集隔离；官方摘要不足以确认这些条件，本文不复述未经独立验证的高拟合数字。网页直读成功，未运行代码或审阅完整实验协议。

### 2026-10-10｜AF-WPT-RL 多尺度动态融合｜持续跟踪

- **来源与日期**：[Energy Engineering 官方文章](https://www.techscience.com/energy/online/detail/28584)，明确在线发表 10 月 10 日；更早预印本日期不确定。
- **摘要**：融合 attention/GRU、小波包分解与 actor-critic 权重策略。官方摘要明确按时间切分、仅在训练集归一化，并报告多种子与天气输入敏感性；模型排名随预测跨度与对照变化，并非全面胜出。
- **相关性判断**：**光伏预测高，自动融合中高，LLM Agent / TSFM / reasoning 低**。融合动作不影响后续观测，作者将其解释为依上下文调整门控，不能当作对光伏过程的闭环控制；注意力也不是因果识别。

早间未核实更晚的高相关光伏论文；下午补入上述概率预测研究，精确在线日期差异已披露。光通信方向本轮仍未核实新的直接光功率预测研究；[六月的多 Agent 光功率优化](https://arxiv.org/abs/2606.05795) 首发 6 月 4 日，超窗且任务是优化，排除。

## 6. 检索覆盖、日期过滤与下一步

- **arXiv**：关键词搜索之外，成功读取 [cs.LG recent 扩展列表](https://arxiv.org/list/cs.LG/recent?skip=0&show=2000)，返回 1,894 条，最新公告组仍为 10 月 12 日；据标题筛选，再核验本期论文官方摘要与 v1。公告日期、抓取日期均不当作首发日。该列表不是整个 arXiv 或三个月窗口的全量覆盖。
- **DailyArXiv**：成功下载 [master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，显示 **Last update: 2026-10-14**；Time Series 栏目早间记为 **85 条数据行**；下午完整下载后按论文链接行重数为 **84 条**（另有表头与分隔行），最新行日期为 **10 月 9 日**。核验最新 master 提交 [1dba229](https://github.com/zezhishao/DailyArXiv/commit/1dba229569c5c32e2a8c3e05042f983eb17b0429)，时间 10 月 13 日 21:28 UTC；timeseries 分支返回不存在，按规则回退 master。
- **DailyArXiv 补检结论（下午）**：Time Series 中确有直接相关的 **KITE、Timer-M1、Lapras**，已回查官方 arXiv 页面，三者均为 **10 月 8 日 v1**，已在正文保留。最新行仍为 10 月 9 日；README 总体更新时间不等于论文日期，也不代表覆盖所有新论文。
- **日期过滤**：DailyArXiv 顶部 TelcoAgent 为 `2606.19821v2`，列表采用 10 月修订日；下午重核 [官方版本史](https://arxiv.org/abs/2606.19821)，v1 为 **2026-06-18**、v2 为 **2026-10-09**，首发超出 7 月 14 日起算窗口，降为历史线索，不列为新研究。六月综述、较早 TimeSeriesExamAgent 和搜索命中的 2024 年论文均未进入正式列表。日期不确定的信息已在对应条目降级，不计确认新增。
- **GitHub**：对三个月内创建的仓库执行五组搜索，按更新排序各读前五项：`timeseries agent`（5）、`"time series" agent`（131）、`automl agent`（93）、`"machine learning" harness`（27）、`photovoltaic forecasting`（59）；括号是查询返回总数，组间重叠，不能相加当项目数。查读候选 README；没有审计全部结果。[Trending](https://github.com/trending?since=daily) 本轮读取失败，因此不声称任何项目上榜。
- **会议与机构**：定向补检 OpenReview、ACL、NeurIPS、ICML、KDD、AAAI、PMLR，以及机构博客；未确认能补充到主列表的更晚直接时序论文。会议搜索索引与作者 arXiv 注释不等于独立录用核验。AI HOT 近七天论文精选用于线索发现，InnovationEval 已回查 Epoch AI 原文。
- **下一步优先项（研究建议，非已验证结论）**：将 ML_Harness 的访问约束迁移到按时间切分与预测起点可得性检查；为系统辨识 ICL 与 Timer-M1 使用相同预算、协变量可得性和留出协议；对 KITE 比较有信息、冗余、错误先验，而非仅比较有无知识输入。

所有新增与持续跟踪条目均限定于窗口内已确认的论文首发、软件创建或在线发表事件；“未发现”仅描述本次可访问来源与检索范围。

## 7. 下午补检范围与增量结论

- **GitHub 官方搜索**：四组查询按更新排序各查前三项：窗口内 `timeseries agent`（5），10 月 12–14 日创建的 `automl agent`（1），窗口内 `"machine learning" harness`（27），窗口内 `photovoltaic forecasting`（59）。查询之间可能重叠；这是定向补检，不是全量项目审计。AutoML 唯一命中是昨日已收录的 ITMO 项目，本轮没有确认新增的高相关仓库。
- **其他来源**：下午定向检索 arXiv、OpenReview、ACL、PMLR、HuggingFace 和官方机构博客。OpenReview 命中多篇旧投稿；PMLR 的 TIME、Zeus 等会议日期为 7 月 6–11 日，早于窗口，不按最近抓取时间重新纳入。NeurIPS/KDD/AAAI 覆盖沿用早间记录，下午未重复全量检索。AI HOT 返回已知或弱相关线索，没有据此加入新论文。
- **仍需优先核验**：新光伏论文的时间切分、分解边界与校准集隔离；ML_Harness 对时序预测任务的适配。直接时序 Agent/reasoning 本轮无确认新增，不用一般 AutoML 或产品集成填充模型首发数量。

# 时间序列研究晨间简报｜2026-10-15

- **检索截止**：2026-10-15T15:36:36+08:00（早间版基础上的下午增量复核）。
- **窗口**：2026-07-15 至本次检索时刻（北京时间）；论文日期采用 arXiv v1 的 UTC 日期，软件明确区分创建、推送和论文日期。
- **增量基线**：截至 10 月 14 日的本地已同步晨报（含下午补充）。新增表示本仓库首次收录，不代表今天首发。
- **今日重点**：ChronoScribe 的语义—数值分工、ECHO 的黑盒预测校正、IND-Eval 的工业域评测、World2TS 的外部事件证据构建。下午补充 Agentic4PDM 的证据约束、GIFT-Eval-CTX 的上下文评测，以及 MMTA / TimeOmni-v 的多模态时序理解。
- 依目录规则保留光伏与 HuggingFace 补检。今天周四，不生成周报。论文结果均为作者报告，项目未安装运行或复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-13｜GIFT-Eval-CTX：验证模型能否利用结构化未来信息｜下午补充，高优先级

- **来源**：[arXiv:2610.17794](https://arxiv.org/abs/2610.17794)，v1 10 月 13 日；DailyArXiv Time Series 直接命中。
- **摘要**：覆盖 20 个数据集、10,000 个实例，以 LLM 发现和确定性代码校验构造宏观、局部效应描述，比较 TSFM、LLM 与工具型 Agent；作者报告 MoiraiAgent 在所测系统中整体最佳。
- **相关性**：**TSFM 上下文评测高，预测 Agent 高，reasoning 信息利用中高**。关键边界：这些效应从已经实现的未来提取，测的是给定可靠未来信息后的利用能力，不是证明线上能够提前获得这些信息。研究部署收益时应另设当时可得事件/NWP 输入的对照。

### 2026-10-12｜IND-Eval：工业域评测与仿真预训练对齐｜新增，高优先级

- **来源**：[arXiv:2610.16652](https://arxiv.org/abs/2610.16652)，v1 10 月 12 日；[官方数据集](https://huggingface.co/datasets/cognitedata/IND-Eval)。作者注明 NeurIPS 2026 FMTS workshop 录用，不等于主会录用。
- **摘要**：按工业数据来源组织预测任务，强调高采样频率与多变量；比较 Chronos-2、TiRex-2、TimesFM-3。进一步用海上井监测案例研究仿真数据配方：领域增强可改善目标域，却可能损害通用单变量表现，混合配方缓解这一权衡。
- **相关性**：**TSFM 高，Agent 自动选模/评测高，显式 reasoning 低**。值得按数据来源而非样本数汇总成绩；来源级最优与整体最优应分开报告。数据集随论文列出，仓库初次发布日期未单独确认，不计独立软件首发。

### 2026-10-12｜ECHO：用历史相似片段和已知预测误差校正 TSFM｜新增，高优先级

- **来源**：[arXiv:2610.16433](https://arxiv.org/abs/2610.16433)，v1 10 月 12 日。
- **摘要**：AnalogE 利用检索到的历史相似片段做跨域学习校正；RecentE 随实际反馈到达学习目标域残差，再按观测表现动态融合。作者在 5 个骨干、9 个数据集的 45 个组合中报告 MSE 改善。
- **相关性**：**TSFM 适配高，Agent 记忆/反馈工具中高，显式 reasoning 低**。这是黑盒模型的校正框架，不是新预训练骨干；应用时需核实相似片段及误差标签在每个预测时点是否已经可得。建议作为冻结模型与微调之间的额外基线。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-13｜Agentic4PDM：由确定性控制器约束诊断证据｜下午补充，高优先级

- **来源**：[arXiv:2610.17786](https://arxiv.org/abs/2610.17786)，v1 10 月 13 日；DailyArXiv Time Series 直接命中。
- **摘要**：Agent 将传感器窗口与各类带标签参考比较，提出后续测量；host 校验工具请求、要求查看结果前承诺完整工具批次，并将证据区分为可佐证与仅供参考。Judge 提出诊断，host 检查流程并记录调查。
- **相关性**：**工业时序 Agent / harness 高，证据 reasoning 高，数值预测与 TSFM 本体低**。适合借鉴证据准入、批次承诺和可审计执行；training-free 指无任务专用诊断训练，仍使用预训练表示与带标签参考，不应理解为无监督。作者报告轴承、电机及客户工业测试集收益，未独立复现。

### 2026-10-13｜把遥感模型构建交给编码 Agent｜新增，相邻方向

- **来源**：[The Last Remote Sensing Model Built by Humans?](https://arxiv.org/abs/2610.18845)，v1 10 月 13 日，作者标注 ongoing project。
- **摘要**：以 harness 定义可用资源、以 verifier 定义成功标准，让通用编码 Agent 自行构建并递归改进遥感模型；报告四个覆盖光学、SAR 和多光谱时序影像的基准实验。
- **相关性**：**ML Agent / harness 高，时空序列建模中高，通用时序预测间接，TSFM/reasoning 模型低**。可借鉴独立验证器与实验权限设计，但不能把遥感结果外推为任意时序任务的自主建模能力；应审查迭代次数、预算与最终留出集隔离。

### 2026-10-12｜ChronoScribe：语言模型负责指令，TSFM 负责数值｜新增，高优先级

- **来源**：[arXiv:2610.16345](https://arxiv.org/abs/2610.16345)，v1 10 月 12 日。
- **摘要**：LoRA 适配的 LLM 提出执行路径与上下文长度，确定性规则形成配置；专用路径由冻结 TSFM 生成分位数轨迹，确定性摘要再用于语言回答，LLM 不生成或改写预测数值。论文用 Qwen3.5-9B 与 Chronos-2，在 30 个公开数据集和 23 个评估维度上比较。
- **相关性**：**时序 Agent / TSFM 接口高，指令理解高，显式多步 reasoning 中低**。适合研究配置选择是否真正提升预测，以及回答是否忠实于数值输出；不应称为全流程自主训练系统或新 TSFM 骨干。作者误差排名未独立复现。

### 2026-10-10｜World2TS：用 Agent 构建可核验的事件上下文｜新增，高优先级

- **来源**：[arXiv:2610.14861](https://arxiv.org/abs/2610.14861)，v1 10 月 10 日；[官方项目页](https://world2ts.github.io/)。
- **摘要**：world2ts-core 将语义推理、网络检索、命令行校验与人工复核结合，发现事件并按时间及语义范围关联序列。world2ts-data 覆盖 31 个数据集、六个领域、4,179 条序列，以及事件—序列关联。
- **相关性**：**时序 Agent / 外部证据 reasoning 高，上下文预测高，基础模型本体低**。最值得核查的是事件发生日、报道日与预测时点可得性的区别；事后核验的真实事件不自动成为当时可用输入。它提供数据与构建流程，不等于新的潜在推理模型。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-13｜MMTA / TimeOmni-v：将时序与真实视觉证据对齐｜下午补充，高优先级

- **来源**：[arXiv:2610.17856](https://arxiv.org/abs/2610.17856)，v1 10 月 13 日、v2 10 月 14 日；按 v1 排序。DailyArXiv 仍链接 v1。作者标注 NeurIPS 2026 Evaluations and Datasets Track 录用，本轮未独立核对会议名录。
- **摘要**：MMTA 在九个领域构造视频/图像、时序和文本的三模态任务，含 3,524 个测试样本，覆盖分类和预测；TimeOmni-v 加入专用时序编码器、时间位置对齐、模态布局与预测头，改善长视频分类和时序输入效率。
- **相关性**：**多模态时序理解/证据对齐高，Agent 感知组件中高，显式思维链或潜在 reasoning 中低**。它补充的是时序与视觉联合理解模型及基准，不能据此声称获得新的显式多步推理机制。

### 2026-10-08｜Lapras：连续空间中的时序推理｜持续跟踪，高优先级

- **来源**：[arXiv:2610.11111](https://arxiv.org/abs/2610.11111)，v1 10 月 8 日；此前已收录，本次重核。
- **摘要**：教师以文字思维链推理，学生通过答案阶段隐藏状态对齐学习潜在推理，在时序—语言空间保持中间计算，只输出最终答案文本；作者在四个骨干、五个时序问答基准上评测。
- **相关性**：**时序 reasoning 高，Agent 推理组件中高，直接数值预测低**。关注答案正确性与解释忠实性是否同时提高；少生成 token 不等于总延迟同比降低。

**本栏新增多模态理解模型及基准；显式/潜在多步推理模型未确认新增。** World2TS 是证据构建 Agent，ChronoScribe 是指令驱动预测系统，单列于上一栏。OpenReview 命中的过程可验证思维数据研究显示 4 月发表、9 月修改，不能用修改日期冒充三个月内首发。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 machine learning、AutoML、harness

按创建日期从近到远；GitHub 日期均来自本轮官方 API。创建日期不代表成熟发布，README 声明不代表复验结果。

| 日期、状态 | 来源 | 摘要与相关性判断 |
|---|---|---|
| **2026-10-14 创建｜新增，中优先级** | [Adversarial Quantitative Evaluation Suite](https://github.com/Riteek0/Adversarial-Quantitative-Reasoning-Statistical-Evaluation-Suite) · [元数据](https://api.github.com/repos/Riteek0/Adversarial-Quantitative-Reasoning-Statistical-Evaluation-Suite) | 声明 210 个参数化统计题，含非平稳序列、泄漏、多重检验等。**时序 reasoning 评测/ML harness 中高，TSFM 低**。已读评分与参考实现：入口比较预置参考函数和人为陷阱函数，评分核对数值及方法标志；时序参考函数主要是差分后线性回归。不能据此宣称完成真实 LLM 评测、完整滚动回测或 README 所述全部 AST 检查。 |
| **2026-10-14 创建｜新增，线索目录** | [JamesEBall/awesome-geospatial-automl](https://github.com/JamesEBall/awesome-geospatial-automl) · [元数据](https://api.github.com/repos/JamesEBall/awesome-geospatial-automl) | 汇集地理空间 AutoML、Agent、评测与数据工具，标称 100 项资源。**AutoML/ML Agent 中高，时序直接相关性中低**。是导航目录，不是可运行系统；其中历史论文和工具不因目录新建而算作新研究。 |
| **2026-10-14 创建｜新增，低优先级** | [Adityaverma0245/churn-data-agent](https://github.com/Adityaverma0245/churn-data-agent) · [元数据](https://api.github.com/repos/Adityaverma0245/churn-data-agent) | 客户流失表格工具 Agent，含规划循环、校验工具、记忆和评测。**通用 Agent harness 中，时序/TSFM 低**。作者明确现有满分来自规则规划器与合成数据，不能当作真实 LLM 能力证据；适合作为小型流程参考。 |

**已知项目维护复核（不计新增）**：[sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries) 创建于 **2026-08-22**，本轮官方 API 显示 **10-15 推送**。README 描述 LLM 实验配置、确定性校验、AutoLSTM/Optuna 调参和 1–4 周留出评估；**时序 Agent / AutoML 高，TSFM 低**。本轮只读 README 与目录，不以推送时间宣称这些能力今天新增，也未验证其完整切分流程。

**World2TS 配套资源（与论文合并跟踪，软件日期不确定）**：项目页给出 [代码地址](https://github.com/yangjq713/World2TS) 和 [数据地址](https://huggingface.co/datasets/JJqian/world2ts-data)。本轮 GitHub 元数据接口返回 404，未确认公开代码与创建日期；降低代码可用性优先级，不影响已核实的 10 月 10 日论文日期。IND-Eval 的 HuggingFace 官方数据卡已访问，见第一栏，不重复计项目。

### 光伏功率预测

| 日期、状态 | 来源 | 摘要与相关性判断 |
|---|---|---|
| **2026-10-15 创建｜下午新增，中低优先级** | [totalquan/EMS-TEMP](https://github.com/totalquan/EMS-TEMP) · [元数据](https://api.github.com/repos/totalquan/EMS-TEMP) · [训练入口](https://github.com/totalquan/EMS-TEMP/blob/HEAD/pv-forecast-ems/training/train.py) · [滚动验证](https://github.com/totalquan/EMS-TEMP/blob/HEAD/pv-forecast-ems/training/rolling_validation.py) | NWP 光伏预测、模型选择、重训、MPC 与服务部署工程。**光伏预测高，AutoML 工程中，LLM Agent / TSFM / reasoning 低**。已读子目录 README、训练与滚动验证代码，未运行。主入口默认合成示例，并在 70/15/15 划分前归一化全部数据；滚动脚本使用外层历史窗口拟合归一化，但在内层验证划分之前，不能据此宣称严格验证隔离。树内存在 9 月演示目录，因此 10 月 15 日仅能确认为本仓库创建日，不能证明代码首次公开。 |
| **2026-07-22 创建；10-14 推送｜日期补全，持续跟踪** | [cyrilvoyant/PV_ELM_pred](https://github.com/cyrilvoyant/PV_ELM_pred) · [元数据](https://api.github.com/repos/cyrilvoyant/PV_ELM_pred) | 多站点 persistence、BLEND、AR-OLS 与 ELM 对照，README 还列出 TimeGPT 接口。**光伏时序评测高，TSFM 对照中，Agent/reasoning 低**。10 月 10 日曾因日期不确定低优先级收录，今天补全创建时间；不把推送当新功能。只提供部分公开示例数据，其他站点需申请，尚未复现。 |

## 5. 光伏功率预测最新研究

### 2026-10-12｜SatPV-Field：从离散电站序列到区域发电场｜新增

- **来源**：[Constructed regional photovoltaic generation fields improve ultra-short-term distributed solar forecasting](https://arxiv.org/abs/2610.16110)，v1 10 月 12 日。
- **摘要**：将密集光伏站观测构造成图像形式的区域发电场，结合卫星短波辐射指引和气象预报预测区域状态，再辅助单站预测；实验含 446 个来源站和 50 个留出目标站。
- **相关性**：**光伏时空预测高，Agent 数据/预测工具中，TSFM 与语言 reasoning 低**。优先核查跨站泛化、气象与卫星输入在预测时刻的可得性，不能只由目标站留出推断不存在时间泄漏。

10 月 14 日检出的 MPPT 工作是最大功率点跟踪控制，不是功率预测，未填入本栏。昨日已收录的 VMD-Patch-iTransformer + Flow Matching 不重复当新增。

## 6. 检索覆盖、过滤与研究建议

- **arXiv**：检索 time series + foundation / agent / reasoning 及 10 月 12–14 日线索，逐篇核对上述正式条目的官方摘要与 v1。XForecast（[10 月 12 日论文](https://arxiv.org/abs/2610.16131)）属于新闻结合金融方向预测基准，相关性中，作为备查；TStruct 等一般预测模型未挤占 Agent/reasoning 主列表。本次不是三个月全量扫描。
- **DailyArXiv**：[Time Series 来源](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 显示 10 月 15 日更新，85 条论文数据行，最新条目为 10 月 13 日。[最新提交 f34b07d](https://github.com/zezhishao/DailyArXiv/commit/f34b07d6918fdd34f38293f29b2b6aa8cbcbf647) 为 10 月 14 日 20:17:40 UTC；timeseries 分支返回 404，已回退 master。
- **日期过滤**：列表中的 QuAnTS、AlphaCast、FinTradeBench、四月的不规则序列概率模型等虽有十月修订，编号及历史线索显示更早首发，未作为本期新研究。修改日和抓取日均不能代替首发日。HART 已在 10 月 13 日下午收录，今日不重复算新增。
- **会议**：定向搜索 OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI/PMLR 官方域名；结果多为旧论文、会议目录或已有教程，未确认可补充的更新直接研究。检索不等于穷尽会议录，arXiv 作者备注也不替代独立录用核验。
- **GitHub**：五组窗口内创建搜索，按更新排序各取最多五项：`timeseries agent`（4）、`"time series" agent`（129）、`automl agent`（92）、`"machine learning" harness`（28）、`photovoltaic forecasting`（59）。括号为总命中数，组间有重叠，不相加；对精选候选读 README，对统计评测项目另查源码。[Trending](https://github.com/trending?since=daily) 读取失败，不声称任何项目上榜。
- **机构线索**：[AI HOT](https://aihot.virxact.com) 近七天论文精选返回 13 项（含服务通知）；新命中的 MIT 天气后处理消息与主题间接，本轮未核对原文，未纳入正式研究条目。该来源仅用于发现线索。其旧接口通知 10 月 31 日停用，后续运行需关注技能迁移。
- **优先阅读建议**：先读 ChronoScribe 的确定性执行边界，再看 ECHO 的反馈可得性与 World2TS 的报道时间对齐；将 IND-Eval 用作工业域外部评测。新统计 harness 可借鉴题目设计，但需接入真实 Agent 并独立核验参考答案后再用于能力比较。以上是研究建议，不是已验证结论。

## 7. 下午增量复核与 DailyArXiv 补检结论

- **复核范围与来源分工**：保留早间版条目与检索记录；本轮独立重核 ChronoScribe、ECHO、World2TS、SatPV-Field 的 arXiv 页面，并从 DailyArXiv 补入上文三篇 10 月 13 日论文。早间其余项目源码结论沿用既有记录，不声称本轮全部重复审计。
- **DailyArXiv 确认有相关论文**：重新下载 [master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，Time Series 共 **85 条实际论文行**，最新列示日期 **10 月 13 日**。Agentic4PDM、GIFT-Eval-CTX、MMTA、IND-Eval、ECHO、ChronoScribe、World2TS 和 SatPV-Field 均直接在该节出现；前述遗漏已补齐。
- **日期不一致、降优先级**：[GALA](https://arxiv.org/abs/2608.13741) 在 README 列 10 月 13 日，但 arXiv v1 为 **8 月 13 日**、v3 为 10 月 13 日。它用生成目标辅助对齐文本编码器与 TSFM，再驱动 flow-matching 时序生成，相关性为 **TSFM 表示/合成数据中高、Agent/reasoning 间接**；仍在窗口内，作为修订跟踪，不算十月新模型。[Grammar of the Wave / SELA](https://arxiv.org/abs/2603.11479) 是时序事件检测 VLM Agent，相关性高，但 v1 **3 月 12 日**、v5 **10 月 12 日**；超窗，仅记录排除，不进入新研究列表。
- **GitHub 再检索**：本轮分别检索窗口内创建的 `timeseries agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting`，命中总数分别 4、93、28、60，各检查按更新排序前三项，组间不可相加；新增 EMS-TEMP，未发现需替换早间主列表的高相关新时序仓库。目录型 awesome-agentic-ml 已于 10 月 13 日收录，不重复。
- **光功率与光伏**：重核 SatPV-Field；另检索 optical power prediction，未确认窗口内可新增的直接光功率时序预测论文。光伏巡检、光学材料和 MPPT 控制不当成功率预测。检索无新增不代表该方向没有研究。
- **覆盖边界**：本轮补搜 arXiv、OpenReview、ACL 和 HuggingFace；其余会议覆盖沿用早间记录。AI HOT 近七天论文精选返回 12 项，未产生本轮正式新增来源；与早间 13 项的差别不视作研究撤回。新收录论文以官方摘要为依据，未做全文复现。
- **下一步优先核查**：Agentic4PDM 的证据分级消融；GIFT-Eval-CTX 的未来信息上界与实际可得上下文之差；EMS-TEMP 的归一化、特征生成和模型选择是否与验证/测试严格隔离。

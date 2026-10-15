# 时间序列研究晨间简报｜2026-10-15

- **检索截止**：2026-10-15T08:06:17+08:00。
- **窗口**：2026-07-15 至本次检索时刻（北京时间）；论文日期采用 arXiv v1 的 UTC 日期，软件明确区分创建、推送和论文日期。
- **增量基线**：截至 10 月 14 日的本地已同步晨报（含下午补充）。新增表示本仓库首次收录，不代表今天首发。
- **今日重点**：ChronoScribe 的语义—数值分工、ECHO 的黑盒预测校正、IND-Eval 的工业域评测、World2TS 的外部事件证据构建。直接时序 reasoning 模型没有确认新增，继续跟踪 Lapras。
- 依目录规则保留光伏与 HuggingFace 补检。今天周四，不生成周报。论文结果均为作者报告，项目未安装运行或复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-12｜IND-Eval：工业域评测与仿真预训练对齐｜新增，高优先级

- **来源**：[arXiv:2610.16652](https://arxiv.org/abs/2610.16652)，v1 10 月 12 日；[官方数据集](https://huggingface.co/datasets/cognitedata/IND-Eval)。作者注明 NeurIPS 2026 FMTS workshop 录用，不等于主会录用。
- **摘要**：按工业数据来源组织预测任务，强调高采样频率与多变量；比较 Chronos-2、TiRex-2、TimesFM-3。进一步用海上井监测案例研究仿真数据配方：领域增强可改善目标域，却可能损害通用单变量表现，混合配方缓解这一权衡。
- **相关性**：**TSFM 高，Agent 自动选模/评测高，显式 reasoning 低**。值得按数据来源而非样本数汇总成绩；来源级最优与整体最优应分开报告。数据集随论文列出，仓库初次发布日期未单独确认，不计独立软件首发。

### 2026-10-12｜ECHO：用历史相似片段和已知预测误差校正 TSFM｜新增，高优先级

- **来源**：[arXiv:2610.16433](https://arxiv.org/abs/2610.16433)，v1 10 月 12 日。
- **摘要**：AnalogE 利用检索到的历史相似片段做跨域学习校正；RecentE 随实际反馈到达学习目标域残差，再按观测表现动态融合。作者在 5 个骨干、9 个数据集的 45 个组合中报告 MSE 改善。
- **相关性**：**TSFM 适配高，Agent 记忆/反馈工具中高，显式 reasoning 低**。这是黑盒模型的校正框架，不是新预训练骨干；应用时需核实相似片段及误差标签在每个预测时点是否已经可得。建议作为冻结模型与微调之间的额外基线。

## 2. 时间序列建模 Agent 最新研究

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

### 2026-10-08｜Lapras：连续空间中的时序推理｜持续跟踪，高优先级

- **来源**：[arXiv:2610.11111](https://arxiv.org/abs/2610.11111)，v1 10 月 8 日；此前已收录，本次重核。
- **摘要**：教师以文字思维链推理，学生通过答案阶段隐藏状态对齐学习潜在推理，在时序—语言空间保持中间计算，只输出最终答案文本；作者在四个骨干、五个时序问答基准上评测。
- **相关性**：**时序 reasoning 高，Agent 推理组件中高，直接数值预测低**。关注答案正确性与解释忠实性是否同时提高；少生成 token 不等于总延迟同比降低。

**本栏无确认新增模型。** World2TS 是证据构建 Agent，ChronoScribe 是指令驱动预测系统，单列于上一栏。OpenReview 命中的过程可验证思维数据研究显示 4 月发表、9 月修改，不能用修改日期冒充三个月内首发。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 machine learning、AutoML、harness

按创建日期从近到远；GitHub 日期均来自本轮官方 API。创建日期不代表成熟发布，README 声明不代表复验结果。

| 日期、状态 | 来源 | 摘要与相关性判断 |
|---|---|---|
| **2026-10-14 创建｜新增，中优先级** | [Adversarial Quantitative Evaluation Suite](https://github.com/Riteek0/Adversarial-Quantitative-Reasoning-Statistical-Evaluation-Suite) · [元数据](https://api.github.com/repos/Riteek0/Adversarial-Quantitative-Reasoning-Statistical-Evaluation-Suite) | 声明 210 个参数化统计题，含非平稳序列、泄漏、多重检验等。**时序 reasoning 评测/ML harness 中高，TSFM 低**。已读评分与参考实现：入口比较预置参考函数和人为陷阱函数，评分核对数值及方法标志；时序参考函数主要是差分后线性回归。不能据此宣称完成真实 LLM 评测、完整滚动回测或 README 所述全部 AST 检查。 |
| **2026-10-14 创建｜新增，线索目录** | [JamesEBall/awesome-geospatial-automl](https://github.com/JamesEBall/awesome-geospatial-automl) · [元数据](https://api.github.com/repos/JamesEBall/awesome-geospatial-automl) | 汇集地理空间 AutoML、Agent、评测与数据工具，标称 100 项资源。**AutoML/ML Agent 中高，时序直接相关性中低**。是导航目录，不是可运行系统；其中历史论文和工具不因目录新建而算作新研究。 |
| **2026-10-14 创建｜新增，低优先级** | [Adityaverma0245/churn-data-agent](https://github.com/Adityaverma0245/churn-data-agent) · [元数据](https://api.github.com/repos/Adityaverma0245/churn-data-agent) | 客户流失表格工具 Agent，含规划循环、校验工具、记忆和评测。**通用 Agent harness 中，时序/TSFM 低**。作者明确现有满分来自规则规划器与合成数据，不能当作真实 LLM 能力证据；适合作为小型流程参考。 |

**World2TS 配套资源（与论文合并跟踪，软件日期不确定）**：项目页给出 [代码地址](https://github.com/yangjq713/World2TS) 和 [数据地址](https://huggingface.co/datasets/JJqian/world2ts-data)。本轮 GitHub 元数据接口返回 404，未确认公开代码与创建日期；降低代码可用性优先级，不影响已核实的 10 月 10 日论文日期。IND-Eval 的 HuggingFace 官方数据卡已访问，见第一栏，不重复计项目。

### 光伏功率预测

| 日期、状态 | 来源 | 摘要与相关性判断 |
|---|---|---|
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

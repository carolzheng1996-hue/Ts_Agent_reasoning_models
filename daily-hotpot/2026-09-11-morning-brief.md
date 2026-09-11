# 2026-09-11 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-11 08:05–09:03 CST（Asia/Shanghai）。三个月窗口：2026-06-11 至检索时点。来源的首发、创建与推送时间以下采用 UTC；只有已实际公开并核验的内容入选。增量基线为 9 月 10 日含下午补检的晨报。“新增发现”不等于今天发布。今天周五，另生成 2026-W37 周报。

## 今日重点

- **新增研究：时间留出不等于领域留出**。9 月 9 日论文提出更严格的 TSFM 泛化评测问题；配套 tsfm-bench 仓库可检查逐序列结果。
- **新增发现 CompEvo**（9 月 3 日）：竞争驱动的多 Agent 新闻预测，直接关联策略多样性与预测反馈。
- **补齐 TimesFM-3 官方发布证据**（8 月 31 日）：多变量、历史及未来已知协变量、单次前向预测。过去晨报仅提及第三方使用，本轮确认官方博客和模型卡。
- **新增光伏工程候选**（9 月 10 日）：pv-power-benchmark 提供固定评测协议和 mock 数据；energy-dispatch-engine 提供预测驱动的调度模拟。两者均未在本轮运行。
- 本轮未确认新的显式时序 reasoning 模型首发；继续关注 STQA、WearableQA 的证据与工具协同评测，不把普通预测或多 Agent 数量等同于推理能力。

## 1. 时间序列基础模型最新研究

### [2026-09-09] A Later Test Set Is Not a New Domain — 新增发现

- 日期与来源：arXiv v1 2026-09-09 15:52:55；[论文](https://arxiv.org/abs/2609.10357)、[作者代码](https://github.com/mahdinaser/tsfm-bench)。
- 摘要：比较 13 个预测器，在五领域、七组晚于模型发布的数据上，预训练模型赢得五组。作者发现季节性强度、频谱熵不足以解释优势，而预训练语料的领域熟悉度与优势有关，建议同时设置领域留出。
- 相关性：TSFM/harness 高，Agent 选模高，显式 reasoning 低。预测 Agent 的模型评价应分别报告未来时间和陌生领域表现；这是本报的应用判断。相关性分析并非领域熟悉度的随机因果实验，未复现实验。

### [2026-09-09] Distillation of Synthetic Data for Time Series Foundation Models — 昨日下午已收录

- 日期与来源：arXiv v1 2026-09-09 01:15:46；[论文](https://arxiv.org/abs/2609.09586)。
- 摘要：SDD 用已知合成过程的条件预测分布监督模型，减少随机轨迹目标带来的梯度方差。作者在 4M–2.5B 参数模型、高斯过程数据上报告达到相当损失所需迭代减少 10%–40%。
- 相关性：TSFM 预训练高，Agent 合成数据中高，显式 reasoning 低。可与 Agent 数据生成流程对照，但未验证与 MetaCaster 联合使用，也不能承诺真实光伏预测增益。本轮官方返回仍为 v1。

### [2026-08-31] TimesFM-3 官方发布 — 本周补录发布记录

- 日期与来源：[Google Research 官方博客](https://www.research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/) 2026-08-31；[官方模型卡](https://huggingface.co/google/timesfm-3.0-pytorch)。这是模型发布动态，不是将旧基础论文算作新论文。
- 摘要：330M 参数，以时序注意力和变量注意力交替建模，多目标预测可使用历史协变量与未来已知协变量；一次前向生成预测时域，并输出分位数。官方报告在三套公共基准上领先，本文未独立复核榜单。
- 相关性：TSFM/预测工具高，Agent 中高，显式 reasoning 低。适合对照 Chronos-2 的协变量能力。模型卡列出 TimesFM Non-Commercial License v1.0；应按该模型卡识别使用条件，不能沿用旧版许可印象。未来协变量应来自起报时已知的信息。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-05] Memory in Deep Time-Series Models — 持续跟踪

- 日期与来源：arXiv v1 2026-09-05 10:19:17；[论文](https://arxiv.org/abs/2609.06006)。
- 摘要：用内部固定状态与外部可检索记忆统一梳理时序模型，讨论信息保留、写入、访问、修订和遗忘。
- 相关性：Agent 记忆/harness 高，foundation model 中高。适合形成案例库生命周期设计；这是综述，不是新自主系统的性能证明。今日复核，未计新增。

### [2026-09-03] CompEvo: Competition-Induced Evolution for Multi-Agent in News-Driven Time Series Forecasting — 新增发现

- 日期与来源：arXiv 网页与 API 均确认为 v1 2026-09-03 03:12:23；[论文](https://arxiv.org/abs/2609.09195)。按官方日期排序，不从编号推算首发日。
- 摘要：将异质 Agent 的新闻证据搜索、预测反馈、可微选择和竞争式策略进化结合，缓解不同 Agent 行为趋同。作者用演化博弈建模，并在四套数据上报告平均 RMSE、MAPE 分别降低 27.3%、26.2%。
- 相关性：时序 Agent/reasoning 高，TSFM 中。值得核查收益来自策略多样性、信息获取还是更大计算预算；理论保证依赖论文假设，不能外推为任意 Agent 收敛。本轮核验摘要与日期，未确认官方代码、新闻时间可得性或复现结果。

### [2026-08-31] CastClaw — 持续跟踪

- 日期与来源：arXiv v1 2026-08-31 15:36:41；[论文](https://arxiv.org/abs/2608.30976)。
- 摘要：将用户约束、专用预测器、分析工具与版本化执行记录纳入预测闭环，依据证据修订或升级结果，并显式停止。
- 相关性：预测 Agent/harness 高。可用来对照 CompEvo 的策略学习与工程约束；论文电价和负荷实验不能直接证明光伏效果。今日仍为 v1。

## 3. 时间序列 reasoning 模型最新研究

本轮关键词查询未确认比已收录条目更晚的显式推理模型。下列是窗口内评测重点；它们是基准/系统，不是新预训练 reasoning 模型。

### [2026-09-05] STQA / SQFRS — 持续跟踪，日期优先级降低

- 日期与来源：arXiv v1 2026-09-05 14:32:40；[论文](https://arxiv.org/abs/2609.06117)、[代码](https://github.com/xuxubaobaoan/STQA_Project)。
- 摘要：31,400 道问答覆盖历史查询、预测和基于预测的推理；SQFRS 编排 SQL 与预测器，暴露工具协调和不确定性推理困难。
- 相关性：Agent/reasoning 高。代码仓库在 2025 年已创建（沿用本周官方元数据核验），整个研究最早公开日期不确定，降低“全新成果”优先级；本轮仅复核论文 v1。

### [2026-09-04] WearableQA — 持续跟踪

- 日期与来源：arXiv v1 2026-09-04 17:52:37；[论文](https://arxiv.org/abs/2609.05405)。
- 摘要：200 名真实用户、最长 500 天记录构建 4,084 道选择题，区分数据计算与健康解释、单信号与跨信号推理。
- 相关性：时序 reasoning 高、Agent 评测中高。借鉴其任务分层时，应单独检验工具计算和解释忠实性；医疗数据结果不直接外推到能源。今日返回仍为 v1。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（含 ML / AutoML / harness）

#### [2026-09-10] wyx53508-cloud/time-series-analysis-agent — 昨日下午已收录

- 日期与来源：创建 04:38:34、最近推送 04:48:06；[仓库](https://github.com/wyx53508-cloud/time-series-analysis-agent)、[官方元数据](https://api.github.com/repos/wyx53508-cloud/time-series-analysis-agent)。
- 摘要：CSV 统计、异常提示、图表、报告质检和按文件/列保存的连续问答记忆；目录有 ReAct 引擎、计算工具与报告评审文件。
- 相关性：分析 Agent/harness 高，自动建模中低。今日重读 README 和目录，推送时间未变，不重复计新；有实现文件不等于已验证数值和报告正确率。

#### [2026-09-08] mahdinaser/tsfm-bench — 新增发现

- 日期与来源：创建 21:09:27；最近推送 2026-09-09 05:03:57；[仓库](https://github.com/mahdinaser/tsfm-bench)、[官方元数据](https://api.github.com/repos/mahdinaser/tsfm-bench)。
- 摘要：预测器适配、MASE/sMAPE/WQL、区间覆盖及耗时评测，配套第 1 栏时间留出论文；文件树含 `results/holdout_2026`、数据 manifest 与逐模型逐领域结果。
- 相关性：TSFM/harness 高，Agent 选模高。**首页仍以 M3/M4/Tourism 竞赛集为主**，不能只按 README 复现论文的五领域留出实验；应核对留出集配置和论文协议。已读 README/目录并核查递归文件树，未运行或审计数据边界。

#### [2026-09-08] harshulbafna008-code/automl-agent — 持续跟踪

- 日期与来源：创建 11:02:49、最近推送 11:13:09；[仓库](https://github.com/harshulbafna008-code/automl-agent)、[官方元数据](https://api.github.com/repos/harshulbafna008-code/automl-agent)。
- 摘要：本地 LLM 规划、sklearn 执行、反思重规划和轮次约束，输出预测管线与报告。
- 相关性：AutoML/Agent 高，时序中。今日 README 和目录复核，无新推送；9 月 9 日已发现普通整数交叉验证，迁移时序须改为时间切分，该实现结论沿用当日核验。未复现优于传统 AutoML 的描述。

HuggingFace 名称检索未带来更晚高相关结果；通过官方博客补到 TimesFM-3，已并入第 1 栏去重。名称搜索不能代表整个平台覆盖。

### 4.2 光伏功率预测

#### [2026-09-10] LucaDev990/energy-dispatch-engine — 新增

- 日期与来源：创建 15:26:27、最近推送 15:26:32；[仓库](https://github.com/LucaDev990/energy-dispatch-engine)、[元数据](https://api.github.com/repos/LucaDev990/energy-dispatch-engine)。
- 摘要：依据电价、光伏预测和电池荷电状态实施规则式调度，用离散模拟器和合成周场景比较基线，含 src/tests/examples。
- 相关性：预测到决策的 harness 中高，直接建模/LLM reasoning 低。其“自适应”主要指规则与状态逻辑，不是学习型 Agent；合成场景收益不能当作真实站点实证。已读 README 与目录，未运行。

#### [2026-09-10] silverisland/pv-power-benchmark — 新增，优先看协议

- 日期与来源：创建 10:48:01、最近推送 12:34:22；[仓库](https://github.com/silverisland/pv-power-benchmark)、[元数据](https://api.github.com/repos/silverisland/pv-power-benchmark)。
- 摘要：提供超短期/短期任务的构造、校验、评分和模型适配示例；协议锁定行集合、数据哈希和基准版本，规定仅在训练集拟合预处理器，模型选择用验证集。附 mock 数据与测试目录。
- 相关性：光伏 ML/Agent harness 高，foundation model 对照中高，显式 reasoning 低。适合作为自动实验的固定接口；mock 数据只证明接口可联调，不能支撑真实预测效果。已读 README、协议和目录，未验证评分实现。

#### [2026-08-10] doccodyblue/ha-pvstrings — 活跃度更新

- 日期与来源：创建 14:15:43；最近推送 2026-09-10 16:06:51；[仓库](https://github.com/doccodyblue/ha-pvstrings)、[元数据](https://api.github.com/repos/doccodyblue/ha-pvstrings)。
- 摘要：pvlib 物理组串预测与学习残差修正（摘要沿用昨日 README 核验）。
- 相关性：光伏/在线 ML 高，Agent 中、reasoning 低。本轮仅确认搜索元数据推进，未做提交差分，不宣称新增特定功能。

#### [2026-08-04] shahoismael/crossclimatepv — 新增发现，近期活跃

- 日期与来源：创建 20:00:32；最近推送 2026-09-10 20:04:15；[仓库](https://github.com/shahoismael/crossclimatepv)、[元数据](https://api.github.com/repos/shahoismael/crossclimatepv)。
- 摘要：统一四个公开数据源、五类气候区、345 个计分站点，提供时间划分、传统与深度基线、逐站结果及控制实验。README 报告跨气候迁移显著退化，并承认气候与数据来源仍不能完全拆分。
- 相关性：光伏泛化评测/harness 高，Agent 选模高，显式 reasoning 低。研究论文首发日期不确定，当前仅作为窗口内代码项目；HF 协议标签与 GitHub 属同一项目，不重复计数。已读 README 和目录，未确认容量归一化估计是否严格限于训练期，未复现。

## 5. 光伏功率预测最新研究

本轮未确认更晚高相关论文首发；工程增量见第 4.2 栏。

### [2026-09-05] SolarBench — 持续跟踪

- 日期与来源：arXiv v1 2026-09-05 17:09:13；[论文](https://arxiv.org/abs/2609.06187)。
- 摘要：汇集 11 站、十年、六百多万天空/卫星图像及辐照度或 PV 输出，评估跨云况、新站适配与快速波动预测。
- 相关性：光伏/多模态时序高，Agent 评测中高。与 CrossClimatePV 可形成图像输入和跨气候数值基线的不同评测视角；两者数据/时距不同，不能直接比较分数。今日复核仍为 v1。

## 6. 检索覆盖、排除与限制

| 来源 | 本轮实际覆盖 | 结果与边界 |
|---|---|---|
| [arXiv](https://arxiv.org/) 官方 API | 完整三个月窗口，time series 分别与 foundation/pretrained、agent、reasoning 组合，光伏/solar power 与 forecasting；各按首发倒序取 8 条 | 新增领域留出评测与 CompEvo；非穷尽式综述 |
| [DailyArXiv](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) | 实时 master README，Last update 2026-09-11，检查 Time Series | 最新可见时序条目为 9 月 9 日；交叉确认留出评测。修订日不当作首发 |
| [GitHub Search](https://github.com/search?type=repositories) | time-series agent，创建 9 月 10–11 日：4 项；automl agent 同窗口：0 项；harness machine-learning 创建 9 月 8–11 日：3 项；光伏完整窗口：54 项，按更新取前 5 | 排除通用客服/网红/RAG harness；维护 Copilot 昨日已确认为 README 占位，未升级。补读六仓库 README/目录及相关协议 |
| [HuggingFace](https://huggingface.co/models) | time-series 名称按创建取前 5；另由官方博客直达 TimesFM-3 | 名称检索存在漏检，官方发布页补齐模型记录 |
| OpenReview、ACL、PMLR/ICML、NeurIPS、KDD、AAAI | 定向关键词网页搜索 | 多数命中旧论文或会议版本；未确认可新增主列表的窗口内首发，未遍历完整会议录 |
| Google Research、IBM 机构关键词搜索 | 补查近期时序发布与 Agent | 确认 TimesFM-3；8 月 21 日 Biomarker Discovery Framework 博客对应 4 月 16 日 CoDaS，论文首发超窗，排除新研究列表 |
| [AI HOT](https://aihot.virxact.com) | 近七天 time series 关键词精选补检 | 0 条；不据此推断整个领域没有新成果 |

日期排除：DailyArXiv 的 [SurF](https://arxiv.org/abs/2605.14069) 与 [KairosAgent](https://arxiv.org/abs/2605.30002) 是 5 月首发、9 月修订，不计本窗口新论文；[CoDaS](https://arxiv.org/abs/2604.14615) 亦超窗。官方机构发布单独用发布事件日期，不借博客日期重算旧论文首发。

本轮未运行候选仓库、下载模型权重或复现实验；性能数字均为作者报告。优先下一步：核对 tsfm-bench 留出协议，建立同时包含时间留出、领域/站点留出和计算预算的预测 Agent 对照，再阅读 CompEvo 的策略多样性消融。

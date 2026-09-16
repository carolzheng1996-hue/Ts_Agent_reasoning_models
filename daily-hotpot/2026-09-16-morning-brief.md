# 2026-09-16 时间序列研究晨间简报

检索日期：**2026-09-16，北京时间；早版复核截止 08:41 CST；下午增补复核截止 15:35 CST（Asia/Shanghai）**。三个月窗口：**2026-06-16 至检索时点**，含起始日。论文以 arXiv v1 为首发依据，仓库以创建日期为项目日期，推送时间仅表示活动；下文来源日期使用 UTC。

增量基线：9 月 15 日含下午增补的简报（f759999），并全文搜索既有日报去重。今天周三，不触发周五周报。遵循本目录 PROJECT_RULES，保留光伏栏目。

## 今日重点

- **下午增补**：在已提交早版 f0c31bc 上新增 LongAgent、TimeThink、Horizon-specific Expert Fusion 三篇已核验论文，并将昨日待核验的光伏冷启动预印本升级为日期与摘要已确认。早版下述“新增 5 篇”计数仅指早版；下午另补 3 篇新发现与 1 篇验证升级。

- **新增发现 5 篇已核验论文**，首发集中在 9 月 12–14 日：Tabby、参数高效语言模型适配、MUSE-Bench、CodeTS、T-SMART；不把今日发现写成今日首发。
- **优先读 CodeTS 与 T-SMART**：前者用执行结果监督时序生成，后者把语言理解、数值计算和感知拆开评测。两者都适合设计可检查中间结果的时序 Agent。
- **工程新增发现**：一个金融时序 ML harness、一个光伏预测到储能优化项目；另有一个新建预测 Agent 仓库仅含 LICENSE，降级观察。Tabby 官方实现与论文合并，不重复计为新建仓库。
- **评测结论值得关注**：MUSE-Bench 报告 LLM 引导修正没有稳定收益；T-SMART 的主要收益来自确定性计算。不能仅凭增加语言推理环节推断预测更好。

## 1. 时间序列基础模型最新研究

### [2026-09-14] Parameter-Efficient Adaptation of Pretrained Language Models for Time-Series Forecasting — 新增发现

- 日期与来源：v1 **2026-09-14 10:30 UTC**；[arXiv 摘要及版本历史](https://arxiv.org/abs/2609.15344)。
- 摘要：将连续时序 patch 映射到 GPT-2 嵌入空间，在七个数据集上比较文本序列化、连续表示、冻结与微调策略。作者报告更新不到 1% 参数即可达到专用预测架构范围内的 MASE，连续表示优于文本提示及随机初始化骨干。
- 相关性：**预训练模型适配高，Agent 低成本候选模型中高，显式 reasoning 低**。研究的是跨模态迁移与消融，不是训练了新的通用 TSFM，也不能据此证明 GPT-2 在语言层面理解时间序列。
- 核验：已读官方摘要和 v1 日期；未复现实验或确认代码发布。

### [2026-09-14] MUSE-Bench：异质上下文的统一多模态预测评测 — 新增发现

- 日期与来源：v1 **2026-09-14 06:01 UTC**；[Beyond Numerical Time Series](https://arxiv.org/abs/2609.15087)。
- 摘要：覆盖 14 个数据集、8 个领域和六类上下文：元数据、事件、节假日、新闻、图像与数值协变量。使用共同目标、非重叠预测窗口以及点预测和概率指标比较多类模型。作者报告数值 TSFM 总体领先，上下文对被测上下文模型有帮助，但错误或错时上下文会降低表现；通用 LLM 直接预测较弱，LLM 引导修正未产生一致改善。
- 相关性：**TSFM / 多模态 Agent 评测高，reasoning 收益验证高**。适合加入“正确、错时、错误、无上下文”四组消融。结论限于论文所测模型与协议，不能推断任何 Agent 都无效。
- 核验：已核验官方摘要和首发日期；这是新基准，不是新预测骨干；未核验数据下载和训练代码。

### [2026-09-12] Tabby：公开长上下文概率基础模型预训练配方 — 新增发现

- 日期与来源：v1 **2026-09-12 13:58 UTC**；[论文](https://arxiv.org/abs/2609.13956)、[华为诺亚官方实现](https://github.com/huawei-noah/trustworthyAI/tree/master/TabbyTSFM)。代码首次公开日**不确定**，不按论文日期重置整个仓库年龄。
- 摘要：145M 参数的 encoder-only patch Transformer，支持最多 8,192 点上下文。组合真实数据、KernelSynth 与基于结构因果模型的 CauKerV2 合成序列，采用渐进收敛训练和中间层分位数监督；同一骨干用于预测、分类和异常检测。
- 相关性：**TSFM 高，Agent 多任务工具高，显式 reasoning 低**。可重点研究合成数据生成、可复用中间 checkpoint 和冻结权重后的 prompt tuning；使用因果生成器不意味着模型具备因果推理能力。
- 核验：论文摘要与日期已确认；官方目录存在 README、recipes、src、benchmarks 和 tests。未下载权重、安装或运行，因此仅确认代码目录公开，不背书完整复现能力。HuggingFace 若对应同一模型不重复列项。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-14] LongAgent：利用历史搜索与数值证据选择纵向预测特征 — 下午新增

- 日期与来源：arXiv v1 **2026-09-14 16:51:35 UTC**；[官方摘要及版本历史](https://arxiv.org/abs/2609.15859)。聚合页标注 9 月 15 日，本文以 v1 时间为准；与 2024 年同名长文本 Agent 不同。
- 摘要：自动搜索变量集合、时间窗口和纵向聚合函数，利用历史搜索记录与数值证据指导下一轮探索。作者报告合成数据上较最强非 Agent 基线有小幅显著改善，真实临床数据上与最强基线相当。
- 相关性：**时序建模 Agent / 特征搜索 / AutoML 高，reasoning 过程设计中高，通用 TSFM 低**。可借鉴搜索记忆和候选评价接口，但临床结局预测结果不能直接外推到规则采样预测或光伏功率。
- 核验：官方摘要和首发日期已确认；MICCAI 2026 workshop 接收为作者注释，未独立核验目录、源码或实验。

### [2026-09-12] T-SMART：将问题理解与数值工具解耦 — 新增发现

- 日期与来源：v1 **2026-09-12 20:45 UTC**；[官方论文与版本历史](https://arxiv.org/abs/2609.14142)。arXiv 注释写明 ICTAI 2026 接收，本轮未独立核验会议接收目录。
- 摘要：冻结 LLM 负责解释问题、选择操作，确定性工具执行数值计算，按需调用结构化感知模块。配对消融中，作者报告确定性计算相对直接读取序列文本的 LLM 推理带来 **31.7 个百分点**准确率提升；语言理解和感知提供较小的补充收益。
- 相关性：**时序工具 Agent / reasoning 归因高，TSFM 中低**。值得把算子正确率、工具选择与最终回答分别评分。它是时序问答框架，不等同于自主训练、调参、部署的完整建模 Agent。
- 核验：官方摘要与 v1 日期已读；数字为作者报告，不能外推到光伏连续值预测；未复现实验。

### [2026-09-11] Information Specialization and Constrained Synthesis — 持续跟踪

- 日期与来源：v1 **2026-09-11**；[多 Agent 前瞻预测实验](https://arxiv.org/abs/2609.12495)。昨日已收录，不计新。
- 摘要：固定底层模型，对 56 场比赛比较统计专家、新闻专家及批评和汇总环节；专家的预测高度重叠，后续汇总不保证超过最强专家。
- 相关性：**Agent 分工 / 同预算消融高，连续时序中，TSFM 低**。可与 T-SMART 一起用于检验增加环节究竟提供了什么。今日重核摘要与日期，未审计前瞻记录。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-14] CodeTS：文本到代码再到时间序列 — 新增发现

- 日期与来源：v1 **2026-09-14 11:20 UTC**；[官方论文](https://arxiv.org/abs/2609.15393)。
- 摘要：以可执行代码作为生成中间表示，让代码明确规定文本要求如何变成时序模式。先构造 Text-Code-TS 三元组进行监督初始化，再用格式、可执行性和序列质量组成多阶段奖励，使真实 Text-TS 对能够用于可验证奖励强化学习。作者在八个基准上报告零样本生成优势。
- 相关性：**可验证时序生成 / reasoning 训练高，Agent 执行反馈高，预测型 TSFM 中**。可借鉴“生成—执行—验证”的训练信号；任务是合成时间序列，不应写成现实未来预测性能突破。
- 核验：官方摘要与首发日期已确认；未核验开源实现或执行生成代码。代码能运行只验证执行性，语义符合程度仍依赖序列质量评分设计。

### [2026-09-11] TimeThink：合成组合问答与可验证奖励训练 — 下午新增

- 日期与来源：arXiv v1 **2026-09-11 19:22:05 UTC**；[论文](https://arxiv.org/abs/2609.13457)、[作者代码与 README](https://github.com/sudarshanregmi/TimeThink)。与视频领域同名 TimeThink 不同。
- 摘要：以趋势、季节性等时序原语构造原子与组合问答，提供真值和推理轨迹，再通过可验证奖励强化学习训练显式推理。作者报告仅使用合成训练数据，在合成及真实问答基准上优于对照。
- 相关性：**时序 reasoning / RLVR 高，Agent 可检查推理中高，预测型 TSFM 中低**。应重点检查未见组合泛化，而非只看同分布问答准确率；不能把问答收益写成未来数值预测收益。
- 工程核验：GitHub 页面可见 synth、reward、evaluation、verl、scripts、tests 等目录。README 说明 Qwen3-8B 加时序编码器，先 SFT 后 GRPO，并链接 base/SFT/RL 权重和数据集；评估还使用 LLM judge，不能将所有评分都视为确定性验证。未安装或运行；奖励源码抓取失败，HF 模型卡未能独立打开。
- 日期限制：仓库创建与权重首次公开日**不确定**，降低“新项目发布”判断的优先级；论文日期已确认。GitHub / HF 与论文合并一项，不重复计数。

T-SMART 的机制归因同样直接相关，详见第 2 栏，不重复计篇数。加入下午增补后，reasoning 增量覆盖可执行中间表示、工具贡献评测和合成组合问答 RLVR。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（Agent、harness、machine learning、AutoML）

#### [2026-09-15] Shuque-i/Time-series-forecast-agent — 新建，低优先级占位仓库

- 日期与来源：创建 **2026-09-15 15:08:25 UTC**，推送 **15:08:27 UTC**；[仓库](https://github.com/Shuque-i/Time-series-forecast-agent)、[官方元数据](https://api.github.com/repos/Shuque-i/Time-series-forecast-agent)。
- 摘要：描述宣称统计决策驱动、LLM 辅助的自动分析与仪表盘，但本轮默认分支递归文件树**只有 LICENSE**，README 接口未找到。
- 相关性：**时序 Agent 主题高，已验证实现能力低，TSFM / reasoning 不确定**。仅作为后续观察线索，不计有代码项目，也不称为可运行系统。

#### [2026-09-14] sanaul-islam/agentic-automl — 已知项目，未确认新变化

- 日期与来源：创建 **2026-09-14 13:15 UTC**，推送 **13:27 UTC**；[仓库](https://github.com/sanaul-islam/agentic-automl)、[元数据](https://api.github.com/repos/sanaul-islam/agentic-automl)。
- 摘要：昨日源码抽查为规则驱动数据准备及随机留出评估；今日搜索元数据所示推送时间未前进。今天未重读源码，不宣称功能变化。
- 相关性：**AutoML 工程中，时序 / TSFM / 已验证 reasoning 低**。沿用昨日低优先级判断；随机划分不能证明时序泛化。当前 AutoML 搜索没有补出需提升优先级的新候选。

#### [2026-07-07] summerming1/finance-forecast-agent — 新增发现，有实现的 ML harness

- 日期与来源：创建 **2026-07-07 01:56 UTC**，推送 **2026-09-15 08:55 UTC**；[仓库](https://github.com/summerming1/finance-forecast-agent)、[元数据](https://api.github.com/repos/summerming1/finance-forecast-agent)。创建在窗口内；今日首次收录不代表昨日才实现这些功能。
- 摘要：组织候选方案、实验合同、运行清单、开发期滚动评估与最终冻结确认窗口。README 描述真实样例数据来源、显式模型注册、成本指标，以及 LSTM / Transformer 等轻量模型。
- 核验：已读 README、[实现边界](https://github.com/summerming1/finance-forecast-agent/blob/main/docs/CURRENT_IMPLEMENTATION.md)及[划分源码](https://github.com/summerming1/finance-forecast-agent/blob/main/src/finance_forecast_agent/splitters.py)。源码拒绝常见随机划分名称，提供 rolling-origin 和训练测试间隔；未全量审计自定义参数、数据流或运行测试。
- 相关性：**时序 ML / harness 高，AutoML 评测接口高，实时 LLM Agent / TSFM 低**。ReplayLLM 明确是离线确定性 fixture。适合参考评测边界与实验记录，不能作为已验证自主研究能力或收益证据。

Tabby 官方实现已在第 1 栏合并，下午发现的 TimeThink 官方仓库与模型线索在第 3 栏合并；其代码首发日期未确认，不计为已验证的新建仓库。本轮 HuggingFace 主要通过 IBM 官方文章与既有模型线索补检，没有全量扫描新权重。

### 4.2 光伏功率预测

#### [2026-09-15] hristinagjorgjievska/pv-energy-trading-optimization — 新增发现，有代码的预测与优化项目

- 日期与来源：创建 **2026-09-15 08:46 UTC**，推送 **12:25 UTC**；[仓库](https://github.com/hristinagjorgjievska/pv-energy-trading-optimization)、[元数据](https://api.github.com/repos/hristinagjorgjievska/pv-energy-trading-optimization)。
- 摘要：README 描述六个欧洲国家 2022–2025 年小时数据，比较持续性、XGBoost、LSTM、TFT，再比较规则策略、MPC 与完美预知上界，并分析预测误差对储能调度的影响。目录存在脚本、数据、结果和报告。
- 核验：已读 README、递归目录及 [PV XGBoost 脚本](https://github.com/hristinagjorgjievska/pv-energy-trading-optimization/blob/master/research/scripts/rq2/xgboost_model_horizon.py)。该脚本按行序取前 70% 训练、最后 15% 测试，为 1–24 小时分别拟合模型；本轮未核验上游时间排序、目标构造、天气输入在起报时的可得性或优化输入生成。
- 相关性：**光伏 / 时序 ML / 预测到决策评测高，Agent 工具潜力中，TSFM / 显式 reasoning 低**。适合研究预测误差如何传导到调度；未运行，不能根据已存结果推断真实可部署收益。

## 5. 光伏功率预测最新研究

### [2026-09-15] Solar Forecasting: Small-Window Performance and Cross-Site Validation — 下午完成验证升级

- 日期与来源：[Preprints.org 原始页面](https://www.preprints.org/manuscript/202609.1122)明确标注 **Submitted 9 月 11 日、Posted 9 月 15 日、v1**。按公开 Posted 日排序；昨日仅有搜索线索，今日可读取官方摘要，仍是未经同行评审的预印本。是否有更早的其他平台版本不确定。
- 摘要：比较七类预测模型，在罗马尼亚两个 50 kWp 光伏站点采用滚动起点评估。作者报告主站点 boosting 模型归一化 RMSE 为 10.4%，最佳深度模型为 12.9%；小样本优势随历史从一个月增至十二个月而缩小，第二站点模型排名基本复现。
- 相关性：**光伏冷启动 / AutoML 模型选择高，Agent 工具候选中高，TSFM / 显式 reasoning 低**。适合用作“多少历史数据才值得采用复杂模型”的研究线索；两站点证据不能证明广泛气候迁移。
- 核验：日期与摘要已确认；工具包和匿名数据公开为作者声明，本轮未独立核验下载、全文划分细节和实现。

### [2026-09-14] Horizon-specific Expert Fusion：按预测步长融合光伏专家 — 下午新增

- 日期与来源：arXiv v1 **2026-09-14 04:52 UTC**；[官方摘要及版本历史](https://arxiv.org/abs/2609.15035)。聚合页 9 月 15 日是列表日期，不用作首发时间。
- 摘要：融合时序神经模型、历史相似样本、气候状态及梯度提升树，以太阳几何与数值天气预报描述条件，按预测步长学习凸组合权重，再独立校准偏差。在 PVDAQ 15–240 分钟预测上，作者报告相同校准下较 LightGBM 和微调 Chronos-2 降低误差；在 GEFCom2014 三个区域上则与 LightGBM 相当。
- 相关性：**光伏 / 时序模型路由与融合高，TSFM 对照高，Agent 设计启发中，显式 reasoning 低**。这里的专家是预测模型，不是 LLM 多 Agent；建议关注模型删除消融、校准公平性和分步长收益，而非假设集成普遍获胜。
- 核验：已读官方摘要和日期，未复现实验或确认代码；天气起报可得性和校准窗口仍需全文审计。

### [2026-09-10] SolCloudLLM — 持续跟踪

- 日期与来源：v1 **2026-09-10 06:26 UTC**；[官方论文](https://arxiv.org/abs/2609.11135)。
- 摘要：对齐天空图像与历史序列 patch，经双向融合映射到 LLM 嵌入空间，预测光伏功率与辐照度。作者在 SIRTA 与 SKIPP'D 上报告收益，多模态改善主要集中在多云条件。
- 相关性：**光伏 / 多模态时序高，Agent 模型工具中高，显式 reasoning 低**。已重核摘要和日期；未复现实验，不计新增。早版尚无更晚且充分核验的光伏论文；下午已补充上面两项，其中预印本完成日期与摘要验证升级。

## 6. 检索覆盖与日期过滤

下表保留 **08:41 早版**的检索覆盖；下午实际刷新范围单列在表后，不将早版成功请求误写为本轮成功。

| 来源 | 本轮实际检索 | 结果与限制 |
|---|---|---|
| [arXiv](https://arxiv.org/) | time series + foundation / agent / reasoning 与 photovoltaic；逐篇打开上述 5 篇新增论文官方摘要及版本历史 | 新增首发 9 月 12–14 日；未获取全量增量接口，不声称覆盖所有 9 月 15–16 日稿件 |
| [DailyArXiv](https://github.com/zezhishao/DailyArXiv) | raw 请求超时后通过 GitHub README 接口完整读取，提取 Time Series 栏 | Last update **2026-09-16**，**73 条**带日期行，最新行 **9 月 14 日**；相比昨日列表推进并发现 5 篇重点，不把列表更新日当首发；本轮未探测 timeseries 分支 |
| [OpenReview](https://openreview.net/) / [ACL](https://aclanthology.org/) / [PMLR](https://proceedings.mlr.press/) | 时序、foundation、reasoning 与 2026 年定向网页搜索 | 多为既有会议与旧预印本。STReasoner 的 ACL 页面不作为新的首发证据；未逐篇核验全部会议录 |
| [NeurIPS](https://neurips.cc/) / [ICML](https://icml.cc/) / [KDD](https://kdd2026.kdd.org/) / [AAAI](https://ojs.aaai.org/) | 限定官方域名的联合关键词补检 | 未确认应加入的新论文；目录、教程与 workshop 日期不用于重置论文年龄，非全量目录遍历 |
| [GitHub Search](https://github.com/search?type=repositories) | created:2026-06-16..2026-09-16；time-series agent、timeseries agent、automl agent、harness machine-learning、photovoltaic forecasting；按更新排序各取 5 项 | 总数依次 **158 / 10 / 100 / 130 / 50**；排除无关模型分发、通用 PR 工具等。候选逐项核验，搜索排序不是热度榜或质量排名 |
| [Google Research](https://research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/) / [IBM 官方文章](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series) | 官方发布定向搜索 | 命中已有 8 月 31 日 TimesFM-3 与 9 月 9 日 IBM r2 文章，不计新。未单独刷新所有模型卡 |
| [AI HOT](https://aihot.virxact.com) | 最近七天精选搜索 time series | 返回 0 条；仅补充中文线索，不代表三个月研究无新增 |

**去重与排除**：DailyArXiv 中 Nonlinear Probabilistic Forecast Reconciliation 为 2604.26668v2，下午重核官方版本历史为 **v1 2026-04-29 / v2 2026-09-14**，首发超窗，降为排除记录，不加入新研究列表；SDD 2609.09586v2 已在本仓库收录，9 月 14 日修订不重复计新；其他异常检测与变点论文因与本轮 Agent / reasoning / TSFM 主线相对较弱，未扩充主列表。日期无法确认的代码首发明确标注不确定。

### 下午 DailyArXiv 补检与检索边界（15:35 CST）

- 完整下载 [master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，确认 **Last update 2026-09-16**；提取完整 Time Series 栏及下一标题，仍为 **73 条带日期记录**，最新行日期 **9 月 14 日**。CodeTS、参数高效适配、MUSE-Bench、Tabby、T-SMART 均在栏目内且早版已补充。
- **LongAgent、TimeThink、Horizon-specific Expert Fusion 均不在当前 Time Series 栏**，本轮经独立 arXiv 检索补入，不能仅凭该聚合栏目判断当天无新增。Nonlinear Probabilistic Forecast Reconciliation 的列表日期是修订日，已按超窗首发排除；SDD 的 9 月 14 日也是修订，保持去重。
- 下午补检 arXiv 时序 / Agent / reasoning / foundation 与光伏关键词，逐篇读取三篇新增论文的摘要和版本历史；重试 Preprints.org 原始页面成功。AI HOT 最近七天 time series 精选无结果，仅作补充线索。
- GitHub 四类窗口搜索（time-series agent、automl agent、harness machine-learning、photovoltaic forecasting）及 TimeThink 元数据请求均遇到域名解析失败；通过网页读取 TimeThink 官方 README 和目录成功，但没有新的搜索总数。早版项目条目保留，不宣称下午已完成全量刷新。HF 模型卡和奖励源码补抓失败，仅记录 README 提供的发布线索。
- OpenReview、ACL、各会议与机构博客覆盖沿用早版结果，下午未重复完整扫描。**光通信光功率预测**本轮未核验新增研究，不能用光伏条目替代该子方向的证据。

## 7. 接下来优先看什么

1. **先读 TimeThink、T-SMART 与 CodeTS**：分别设计计算工具消融和可执行中间结果评分，区分“说得合理”与“执行正确”。
2. **用 MUSE-Bench 审视上下文收益**：加入错时与错误上下文对照，再决定是否采用 LLM 修正预测。
3. **评估 Tabby 的多任务工具价值**：先核验数据、训练配方和资源需求；工程侧可参考金融 harness 的冻结确认窗口，并检查光伏项目天气数据的起报可得性。

本简报为来源核验与筛选，未安装候选项目、下载权重或运行复现实验。论文性能均为作者报告。

# 2026-09-15 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：**2026-09-15 09:02–09:09 CST（上午版）；15:30–15:36 CST（本轮增补，Asia/Shanghai）**。三个月窗口：**2026-06-15 至本轮检索时点**，含起始日。论文按官方 v1 日期；机构动态按发布日期；GitHub 按创建日期排序，最近推送仅表示活动。下文来源日期采用 UTC，检索时间采用北京时间。

增量基线：上午版对照 9 月 14 日晨报；本轮以已提交的今日上午版（85652ec）为基线，并搜索既有日报去重。今天周二，不触发周五周报。新增发现不代表今天首发；本轮未确认 9 月 14–15 日首发的高相关论文，不能据此断言全领域无新增。

## 今日重点

- **下午增补 1 篇已核验论文、1 条低优先级光伏线索**：9 月 11 日的多 Agent 前瞻预测实验提示，增加批评/汇总环节未必带来互补信息；9 月 15 日光伏跨站点预印本的正文尚不可访问，不计入已充分核验论文。复核既有诊断 Agent 与光伏组串项目的活动，不重复计新项目。

- **上午版补入 5 篇窗口内论文**：HoliBench、HRX、Competence-Gated Pooling、When Does Text Inform?、FINESSE，首发在 9 月 9–11 日。其中 4 篇为评测、解释或融合方法，FINESSE 为模拟环境；均不应宣传成新的通用时序基础模型。
- **最值得阅读的三个问题**：HoliBench 衡量模型部署成本；能力门控判断 LLM 相对已有预测是否提供增量价值；HRX 检查不同预测步依赖哪些历史观测。
- **新增 3 个 GitHub 观察候选**：金融时序评测 harness、AutoML 工程和 Garmin 数据 Agent。核验深度不同，均未安装运行；AutoML 的随机划分和 Garmin 的空编排文件已明确降级。
- **复现限制**：HoliBench 的论文链接与 GitHub 官方接口均未提供可访问仓库，因此只列研究，不计可用开源项目。

## 1. 时间序列基础模型最新研究

### [2026-09-11] HoliBench：把准确率、时延与能耗放进同一评测 — 新增发现

- 日期与来源：arXiv v1 **2026-09-11 04:03 UTC**；[官方摘要与版本历史](https://arxiv.org/abs/2609.12412)、[论文全文](https://arxiv.org/html/2609.12412v1)。
- 摘要：提出跨设备部署评测工具，联合衡量准确率、时延、能耗和内存，覆盖 20 个模型、7 类设备、8 个推理后端。正文的时序模型包括 Chronos、MOMENT 与 Granite-TS；量化收益依赖实际硬件支持。
- 相关性：**TSFM / harness 高，Agent 资源约束选模高，显式 reasoning 低**。可借鉴先测量模型与设备组合，再按资源预算筛选配置；这是部署基础设施研究，并非新预测骨干。
- 核验与限制：已读摘要并抽查正文模型列表。[论文所指代码](https://github.com/beesfleas/HoliBench)及[官方仓库接口](https://api.github.com/repos/beesfleas/HoliBench)本轮均返回未找到，代码公开时间**不确定**。论文报告的组合成本预测精度仅适用于其评测设置，本轮未复现。

### [2026-09-10] CGM 基础模型与饮食上下文评测 — 持续跟踪

- 日期与来源：v1 **2026-09-10**；[Evaluating Time-Series Foundation Models and Multimodal Dietary Context for CGM Forecasting](https://arxiv.org/abs/2609.11872)。
- 摘要：八个公开连续血糖数据集的统一比较显示，零样本 TSFM 未稳定超过 Elastic Net、PatchTST 等基线，轻量微调及残差融合可改善预测。
- 相关性：**TSFM / Agent 选模高，reasoning 低**。应同时比较零样本、适配后模型与任务专用基线。已核验摘要和日期；不重复计新，不把领域收益外推到能源数据。

### [2026-09-09] IBM PatchTST-FM-r2 官方解读 — 已有模型动态

- 日期与来源：文章发表于 **2026-09-09**；[IBM 官方文章](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)、[模型权重](https://huggingface.co/ibm-granite/granite-timeseries-patchtst-fm-r2)。文章日期不等于权重首发日期。
- 摘要：约 385M 参数，支持概率预测、缺失值处理和最长 8,192 上下文；官方公布推理与基准复现资源。
- 相关性：**TSFM / Agent 预测工具高，显式 reasoning 低**。排名声明限定在截至 9 月 8 日的可复现零样本筛选集合，本轮不重新宣称当前榜首。已核验文章，未运行模型；HuggingFace 条目合并于此。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-11] Information Specialization and Constrained Synthesis：多 Agent 前瞻预测的互补性检验 — 下午新增发现，邻近方向

- 日期与来源：arXiv v1 **2026-09-11 06:49:28 UTC**；[官方摘要与版本历史](https://arxiv.org/abs/2609.12495)。此前日报未收录，当前 DailyArXiv Time Series 栏也未包含。
- 摘要：在世界杯最后 56 场比赛中，固定底层模型，分别让统计专家与新闻专家预测，再由批评 Agent 和汇总 Agent 处理。作者报告新闻专家取得最高平均 Top-3 概率加权效用；两位专家在 50 场中至少共享两个候选比分，新增汇总阶段未必改善最强专家的结果。
- 相关性：**Agent 信息分工 / reasoning 消融高，连续数值时序预测中，TSFM / 光伏低**。可借鉴比较“专家是否使用互补证据”及“新增调用是否增加效用”；这是事件预测实验，不能直接视作光伏预测收益。已核验官方摘要与 v1 日期，未审计预注册记录、代码或复现实验；结果仅为作者报告。

### [2026-09-10] Competence-Gated Pooling：根据已验证能力决定是否采用 LLM — 新增发现

- 日期与来源：v1 **2026-09-10 18:28 UTC**；[官方论文](https://arxiv.org/abs/2609.12101)。
- 摘要：根据已结束事件的结果估计不同领域的预测源权重，将不确定估计收缩到全局权重并校准融合概率。在 2,357 个二元问题上，主外部基线的 Brier 分数从 0.0771 降到 0.0732；但官方 ForecastBench 市场子集上没有显著改善，模型主要服从市场预测。
- 相关性：**Agent 路由 / 拒答决策高，时序预测中高，TSFM 低**。它提供的是融合与选择方法；可将“相对统计预测器的增量收益”作为 Agent 调用门槛，而非使用模型口头自信度。二元事件结果不能直接替代连续值时序实验。已核验摘要和首发日期，未复现。

### [2026-09-09] FINESSE：多模态金融事件序列模拟环境 — 新增发现，邻近方向

- 日期与来源：v1 **2026-09-09 20:24 UTC**；[官方论文](https://arxiv.org/abs/2609.11993)。
- 摘要：通过随时间变化的潜在状态耦合交易、支付、账户变化和政策事件，生成多流合成数据；FINESSE-Bench 包含余额预测、欺诈检测、漏付预测与下一事件预测。
- 相关性：**时序 / 事件序列评测高，建模 Agent 环境中，LLM 自主建模低**。这里的 agent-based 指模拟主体，摘要没有证明 LLM 自主规划或代码迭代能力。可借鉴可控环境与多任务评测；论文声明释放环境和数据，本轮未核验下载资源。

### [2026-09-03] CompEvo — 持续跟踪

- 日期与来源：v1 **2026-09-03**；[官方论文与版本历史](https://arxiv.org/abs/2609.09195)。
- 摘要：通过竞争式进化维持异质 Agent 的新闻检索策略多样性，将预测反馈转成可微选择权重。
- 相关性：**时序 Agent / reasoning 高，TSFM 中**。重点核验新闻在起报时是否可得，以及同调用预算下的增益。本轮复核摘要和日期，未新增实验。

## 3. 时间序列 reasoning 模型最新研究

本轮新增的是解释和证据评测方法，**未确认新的通用显式时序 reasoning 模型首发**。

### [2026-09-11] HRX：逐预测步解释历史依赖 — 新增发现

- 日期与来源：v1 **2026-09-11 09:38 UTC**；[Explaining Time Series Forecasting with Horizon-Resolved Attribution](https://arxiv.org/abs/2609.12639)。
- 摘要：为每个预测步输出独立重要性图，利用删除高重要性输入后该预测步的变化验证解释，并提出判断是否需要解析预测步维度的秩准则。
- 相关性：**Agent 诊断证据高，reasoning 忠实性评测中高，TSFM 适配中**。可支持“近期与远期预测依据是否不同”的诊断；归因图本身不证明因果关系，也不等同于语言推理链。核验摘要与日期，未复现删除实验。

### [2026-09-10] When Does Text Inform?：文本究竟增加多少预测信息 — 新增发现

- 日期与来源：v1 **2026-09-10 09:15 UTC**；[官方论文](https://arxiv.org/abs/2609.11282)。
- 摘要：以已知生成机制构造正确、错误和无关文本注释，比较六类信息估计方法，并在七个真实数据集上检验弱信号下的表现，服务于语料审计和融合选择。
- 相关性：**Agent 检索证据审计 / 多模态时序高，reasoning 评测中高，TSFM 中**。可用于筛选真正含预测信息的新闻或注释；信息相关性不能代替来源时间、事实可靠性和因果检验。核验摘要和日期，未独立验证论文效果。

### [2026-09-04] WearableQA — 持续跟踪

- 日期与来源：v1 **2026-09-04**；[官方论文](https://arxiv.org/abs/2609.05405)。
- 摘要：使用 200 名真实用户的长期可穿戴记录，构建 4,084 道题，分别检验数值计算、领域解释及单信号/跨信号推理。
- 相关性：**时序 reasoning 高，Agent 评测高**。可借鉴把计算正确性与解释质量分开打分。已核验摘要和日期，不重复计新。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（含 Agent、harness、machine learning、AutoML）

#### [2026-09-14] GerardoMayel/garmin-personalized-agent — 新增发现，低优先级脚手架

- 日期与来源：创建 **2026-09-14 15:22 UTC**，最近推送 **21:16 UTC**；[仓库](https://github.com/GerardoMayel/garmin-personalized-agent)、[官方元数据](https://api.github.com/repos/GerardoMayel/garmin-personalized-agent)。
- 摘要：README 规划 Garmin 数据摄取、统计时序分析、LangGraph 编排、文献检索和 Streamlit 页面。目录包含分析、RAG、训练和 Agent 模块。
- 相关性：**可穿戴时序 Agent 主题高，已验证 reasoning / TSFM 能力低**。本轮读取 README 和递归目录，并请求正确目录下的 `src/agents/graph.py`，返回内容为空；因此不把目录结构当成可运行 Agent，不采信已完成微调的能力表述。未接入用户数据或运行系统。

#### [2026-09-14] intikhab49/crypto-15m-edge-research — 新增发现，评测协议候选

- 日期与来源：创建 **2026-09-14 14:03 UTC**，最近推送同一分钟；[仓库](https://github.com/intikhab49/crypto-15m-edge-research)、[官方元数据](https://api.github.com/repos/intikhab49/crypto-15m-edge-research)。仓库创建日不代表其中历史实验的执行日。
- 摘要：围绕 15 分钟金融序列组织 LightGBM、序列模型和回测；README 描述重叠标签清除、间隔隔离、费用后评分、多重尝试修正及注入未来标签的正对照，报告所测试样本未发现费用后优势。
- 核验：已读 README、目录和[评测协议](https://github.com/intikhab49/crypto-15m-edge-research/blob/main/docs/evaluation.md)。协议明确要求事前冻结预测目标、规则和成本，并分别记录决策、触发、成交、结算及修正；目录存在研究代码、测试和结果文件，未逐行审计训练实现。
- 相关性：**时序 ML / harness 高，Agent 结果审计高，TSFM / 显式 reasoning 低**。重点借鉴冻结评测合同、区分弃权与预测失败、检查评分器能否发现已知信号；收益结论仅是作者报告，未复现，也不外推到其他市场。

#### [2026-09-14] sanaul-islam/agentic-automl — 新增发现，时序适配待补

- 日期与来源：创建 **2026-09-14 13:15 UTC**，最近推送 **13:27 UTC**；[仓库](https://github.com/sanaul-islam/agentic-automl)、[官方元数据](https://api.github.com/repos/sanaul-islam/agentic-automl)。
- 摘要：目录包含数据剖析、预处理、审计、状态、API 与测试。已抽查的 Agent 文件按 schema、缺失值、日期、编码、缩放等阶段选择处理工具，体现规则驱动的数据准备流程。
- 核验：[评估代码](https://github.com/sanaul-islam/agentic-automl/blob/main/app/ml/evaluate.py)采用 `train_test_split` 随机留出 20%，再仅在训练索引拟合预处理器；模型为线性回归或二元逻辑回归，输出指标 JSON。[Agent 文件](https://github.com/sanaul-islam/agentic-automl/blob/main/app/agent/agent.py)已抽查，尚未验证真实 LLM 规划。README 获取失败，不能推断其内容为空。
- 相关性：**AutoML 工程 / Agent 状态管理中高，直接时序 / TSFM / reasoning 低**。训练期预处理值得参考，但随机划分不能作为时序泛化证据；需增加时间留出、滚动验证与预测跨度定义。未运行其测试。

#### [2026-09-09] PallabBiswas3/Time-Series-Diagnostic-Agent — 下午持续跟踪，非新项目

- 日期与来源：创建 **2026-09-09 19:33 UTC**；最近推送 **2026-09-15 05:16 UTC**；[仓库](https://github.com/PallabBiswas3/Time-Series-Diagnostic-Agent)、[官方元数据](https://api.github.com/repos/PallabBiswas3/Time-Series-Diagnostic-Agent)。9 月 10 日日报已收录。
- 摘要：本轮 README 描述统一 `diagnose` 接口和六类工业诊断路径，输出结构化证据、步骤状态与耗时；数据或证据不足时返回弃权。当前路由明确为确定性流程，预训练模型需要外部注册。
- 相关性：**时序诊断 / harness 高，Agent 工具与证据接口高，已验证 LLM reasoning / TSFM 低**。可参考失败原因与证据不足的显式输出。仅重读 README 和元数据，递归目录请求因 API 限流失败；未比较提交差分、未运行，不能声称上述接口在今天才加入，也不能据 README 认定全部路径已验证可用。

HoliBench 因仓库不可访问未计入以上项目数量。HuggingFace 的 IBM 模型与第 1 栏合并；本轮没有全量扫描 HuggingFace 新模型。

### 4.2 光伏功率预测

#### [2026-08-10] doccodyblue/ha-pvstrings — 持续跟踪，活动更新

- 日期与来源：创建 **2026-08-10 14:15 UTC**；上午核验最近推送 **2026-09-14 12:57 UTC**，下午刷新为 **2026-09-15 07:26 UTC**；[仓库](https://github.com/doccodyblue/ha-pvstrings)、[官方元数据](https://api.github.com/repos/doccodyblue/ha-pvstrings)。
- 摘要：用 pvlib 根据组串朝向、倾角和容量建立物理预测，再学习残差；README 描述组串级误差评价与按小时统计日前预测误差，适合检查日总量掩盖的时段偏差。
- 相关性：**光伏预测 / 诊断工具高，Agent 工具候选中高，TSFM / 显式 reasoning 低**。本轮重读 README 和目录；仅核实活动时间，没有比较提交差分，因此不将上述功能声称为昨日新增。未运行或验证实站效果。

## 5. 光伏功率预测最新研究

### [2026-09-15，待复核] Solar Forecasting: Small-Window Performance and Cross-Site Validation — 下午新增线索，低优先级

- 日期与来源：[Preprints.org 原始条目](https://www.preprints.org/manuscript/202609.1122)。搜索索引显示 **Submitted: 2026-09-11 / Posted: 2026-09-15 / Version 1**；以公开 Posted 日作为暂定日期，不能将投稿日视作公开首发。**正文与日期独立复核未完成，更早公开版本不确定**；网页打开失败、直接请求返回 HTTP 403，故不计已充分核验论文。
- 摘要：题名与可见摘要片段聚焦短历史窗口下的光伏预测和跨站点验证，应用场景包括储能、自用和上网计划。本轮未取得完整方法、数据划分、模型列表或实验结果，不转述性能数字。
- 相关性：**光伏 / 时间与站点泛化主题高，Agent 评测潜在相关性中高，TSFM / reasoning 是否涉及不确定**。优先待核验真实天气预报可得性、跨站点留出与短窗口基线；这是未同行评审的预印本线索。

### [2026-09-10] SolCloudLLM — 持续跟踪

- 日期与来源：v1 **2026-09-10**；[官方论文](https://arxiv.org/abs/2609.11135)。
- 摘要：对齐天空图像与历史序列 patch，经双向融合后映射到 LLM 表征空间，预测光伏功率与辐照度；论文摘要报告多模态收益主要集中于多云条件。
- 相关性：**光伏 / 多模态时序高，Agent 可调用模型中高，显式 reasoning 低**。应检查图像是否在预测时可得、不同天气条件及跨站点表现。本轮复核摘要与日期，不重复计新；尚无正文充分核验的更晚高相关光伏首发；9 月 15 日待核验线索见上。

## 6. 检索覆盖与日期过滤

下表保留上午版覆盖；下午实际增量工作单列于表后，未执行的上午检索不冒称本轮重新完成。

| 来源 | 本轮实际工作 | 限制与结果 |
|---|---|---|
| [arXiv](https://arxiv.org/) | 三个月时序关键词查询；网页补检 foundation / agent / reasoning / photovoltaic；逐篇打开入选官方摘要 | 程序化列表请求未成功返回，依靠网页和 DailyArXiv 补检；不能视为完整三个月普查 |
| [DailyArXiv](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) | 完整下载公开 master README，读取 Time Series 栏 | Last update 为 **2026-09-15**，75 条，最新行日期 **9 月 11 日**。相比昨日读取的 9 月 11 日版本已前进；本轮补出上述 5 篇，不把列表更新时间当论文首发 |
| [OpenReview](https://openreview.net/)、[ACL](https://aclanthology.org/)、[PMLR](https://proceedings.mlr.press/) | 时序与 reasoning / foundation 定向网页检索 | 返回既有会议成果和旧预印本；没有完成所有会议论文首发核验，不以搜索抓取日纳新 |
| [ICML](https://icml.cc/Downloads/2026)、[NeurIPS](https://neurips.cc/Downloads/2026) | 官方目录定向搜索 | ICML 虚拟页访问受限；目录标题和教程不是本轮新论文首发证据 |
| [KDD](https://kdd2026.kdd.org/tutorials/)、[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/39908) | 官方来源定向补检 | KDD 8 月教程涉及 TSFM / AutoML，但不按教程日期重置旧论文；ExoTimer 属于窗口外来源，排除主列表 |
| [GitHub Search](https://github.com/search?type=repositories) | 创建范围 2026-06-15 至 2026-09-15；time-series agent、timeseries agent、automl agent、harness machine-learning、photovoltaic forecasting，按更新取各前 8 | 命中总数分别 **157 / 10 / 100 / 134 / 54**；候选抽查而非热度榜或全量质量排名。排除本晨报仓库自身、通用无关 harness；重点候选再读官方元数据、目录与源码 |
| [Google Research](https://www.research.google/)、[IBM](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series) | 机构发布补检，打开 IBM 正文 | 未确认应新增的时序发布；HuggingFace 权重链接仅作已有模型来源，不声称全站无新增 |
| [AI HOT](https://aihot.virxact.com) | 最近七天精选中检索 time series | 返回 0 条；仅为中文资讯补充，不能代替三个月论文检索 |

**下午 DailyArXiv 补检结论**：完整下载 [master 原始 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，读取 `## Time Series` 至下一同级标题；Last update **2026-09-15**，**75 条带日期数据行**（不计表头），最新行日期 **2026-09-11**。HoliBench、HRX、Competence-Gated Pooling、When Does Text Inform?、FINESSE 均已由上午版补入，没有发现需额外补入的高相关条目。本文下午新增的多 Agent 前瞻研究不在该栏，来自独立 arXiv 检索；不能把聚合列表当作完整领域覆盖。

日期排除：DailyArXiv 中 **MoME / 2601.21547v3** 行日期为 **2026-09-11**，本轮重新打开[官方版本历史](https://arxiv.org/abs/2601.21547)确认 v1 为 **2026-01-29**、v3 为 **2026-09-11**。主题虽与多模态时序相关，但首发超窗，仅作旧稿修订观察，排除主列表；其他明确旧编号修订不按新论文收录。来源日期不明或无法访问的项目已降级，没有把搜索收录时间、文件时间或仓库推送时间作为论文日期。

### 下午检索范围与限制

- **arXiv / OpenReview**：定向补搜 September 14、time series、foundation、agent、reasoning，打开新入选论文与 MoME 的官方日期页；未取得完整 arXiv 增量列表。OpenReview 返回既有 ICLR 成果，未确认窗口内新首发，不用会议年份重置日期。
- **光伏 / 光功率**：补搜 photovoltaic forecasting、optical power forecasting。发现上述 Preprints.org 线索；Springer 9 月 3 日风光预测综述已在 9 月 10 日报收录，不重复计新。未核实新的光通信光功率预测论文；搜索结果中的光功率仪器市场报告不属于目标研究。
- **GitHub**：官方 API 搜索窗口为 2026-06-15 至 2026-09-15，time-series agent / automl agent / harness machine-learning / photovoltaic forecasting，命中总数依次 **157 / 100 / 133 / 54**，各检查按更新排序的前 5 条元数据。排除本仓库自身与通用无关项目；这不是新建项目全量普查。诊断 Agent 已知，光伏组串仅活动刷新，本轮没有新增经过源码核验的项目推荐。
- **会议 / HuggingFace / 机构博客**：沿用今日上午版覆盖，本轮没有全量刷新。README/接口读取的成功与限流已在相关条目中说明；未安装或运行项目。

## 7. 接下来优先看什么

1. **先读能力门控、文本信息评测与多 Agent 互补性实验**：确定何时调用 LLM、何时采用统计预测，并检验文本是否提供真实增量。
2. **把 HRX 接到诊断设计中**：分别评估不同预测步的依据，避免一段笼统解释覆盖所有未来时点。
3. **补齐 harness 的时间与成本约束**：冻结起报时证据、模型选择规则和评分口径；部署成本可参考 HoliBench 的研究协议，待代码公开后再评估复现。

本简报是来源核验与研究筛选结果；未安装候选项目、运行模型或复现论文。所有性能表述均限定为作者报告。

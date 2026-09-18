# 2026-09-18 时间序列研究晨间简报

检索截止：**2026-09-18 08:43 CST（Asia/Shanghai）**。窗口：**2026-06-18 至检索时点**，含起始日。论文按官方 v1 日期，修订日期另列；项目按创建日期，推送只表示活动。来源原始日期使用 UTC。增量基线为 9 月 17 日含下午增补版（89fbbce），并对历史日报全文去重。今天周五，同时生成 2026-W38 周报；按项目规则保留光伏栏目。

## 今日重点

- **新增发现 4 篇窗口内论文**：TuiML、TabPFN-3.5、峰值负荷 TSFM 评测、历史片段预测相关性研究。前三篇首发 9 月 15–16 日；最后一篇首发 8 月 24 日、9 月 16 日修订。均不是今日首发。
- **优先看 TuiML 的工具接口与 TabPFN-3.5 的真实时序结果**：前者提供 Agent 可查询的算法契约；后者虽在表格任务表现强，论文中的时序预测仅列第六，不能把表格榜首外推为 TSFM 榜首。
- **GitHub 新增 2 个有实现的观察候选、1 个核心文件为空的脚手架**。新 AutoML 项目有真实 LLM 调用代码，但缺少明确的时序划分约束；AML 评估 harness 值得参考负对照，公开快照不含真实数据回放包。
- 显式 reasoning 继续跟踪昨天已收录的 WaveTLM；未确认更新的高相关首发。TabPFN 的 Thinking 是推理时计算扩展，正文明确不使用 LLM，不能当成语言思维链模型。

## 1. 时间序列基础模型最新研究

### [2026-09-16] Peak-Aware Short-Term Load Forecasting — 新增发现，评测研究

- 日期与来源：v1 **2026-09-16 12:45:33 UTC**；[官方摘要与版本历史](https://arxiv.org/abs/2609.18588)。
- 摘要：在英国和瑞士配电网的区域、变电站、低压馈线三个层级，对比传统方法、LightGBM / XGBoost、Chronos-Bolt / Chronos-2，分别报告总体和高负荷期误差。作者报告 Chronos-2 在三个层级的高负荷期表现最佳，相较树模型平均 HD-NMAE 降低约 20–51%。
- 相关性：**TSFM 任务评测高，Agent 条件选模与分位数决策高，显式 reasoning 低**。建议把峰值期误差与全时段误差分开记录，避免平均分掩盖调度风险。不是新基础模型，负荷预测也不是光伏发电预测。
- 核验：官方日期和摘要已读；会议接收仅依据作者注释，未复现或核验代码。

### [2026-09-15] TabPFN-3.5 — 新增发现，表格基础模型的时序迁移

- 日期与来源：v1 **2026-09-15 22:38:29 UTC**；[论文](https://arxiv.org/abs/2609.17895)、[正文及附录 C.6](https://arxiv.org/html/2609.17895v1)、[官方模型页](https://huggingface.co/Prior-Labs/tabpfn_3_5)。模型首次上传日期**未独立确认**，与论文合并，不另计新项目。
- 摘要：改进表格模型编码与合成先验，覆盖时间/分组划分；通过 TabPFN-TS 将序列转为日历和季节特征回归。作者在 100 个 fev-bench 任务、29 个方法中报告**第六名**，较 TabPFN-TS-3 高 1.1 分、速度为其 2.4 倍，仍落后于 TimesFM-3、两个 Chronos-2 变体、TiRex-2、Toto-2.0。
- 相关性：**基础模型迁移 / AutoML 候选高，Agent 工具高，显式 reasoning 低**。该 checkpoint 是通用表格模型，未经时序专门微调；值得研究特征化接口的收益与代价。
- 边界：第 3.4 节明确 Thinking 不调用 LLM 或互联网，细节未公开；不能视作已解释的时序推理链。已读摘要、时序附录与该节，未下载权重或复现。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-16] TuiML: Machine Learning for AI Agents — 新增发现，优先阅读

- 日期与来源：v1 **2026-09-16 01:14:25 UTC**；[官方论文](https://arxiv.org/abs/2609.17984)、[官方项目页](https://tuiml.ai/)、[代码](https://github.com/tuiml/tuiml)。
- 摘要：把算法能力、参数和返回值变成可查询的机器可读契约，供 Agent 搜索、组合、验证和扩展工作流；统一连接 MCP、Python、CLI 等接口，并记录调用和实验状态。覆盖监督学习、时序、调参和评估。
- 相关性：**建模 Agent / ML harness / AutoML 高，时序工具层高，TSFM / 显式 reasoning 中低**。重点是减少工具调用错误和保留实验状态，而非提出新预测骨干。
- 核验：论文、官网、文件树及 [TimeSeriesSplit 源码](https://github.com/tuiml/tuiml/blob/HEAD/tuiml/evaluation/splitting/timeseries.py)已读；可见按位置向前划分、gap 与训练窗限制。Agent 评估接口也存在，但未证明所有工作流自动采用该 splitter，时间排序和上游预处理仍需审计。官网标为 alpha，其展示基准是表格交叉验证，不能当时序优势证据。
- 日期边界：[GitHub 元数据](https://api.github.com/repos/tuiml/tuiml)显示仓库创建于 **2026-03-15**、最近推送 **2026-09-03**。论文在窗口内，仓库不是近三个月新建；此处仅作论文实现链接，不进入新仓库计数，也未确认本轮新增代码功能。

### [2026-08-24；修订 2026-09-16] Which Histories Matter for Time Series Forecasting? — 新增发现，检索模块研究

- 日期与来源：v1 **2026-08-24 13:15:29 UTC**，v2 **2026-09-16 05:20:13 UTC**；[官方论文与历史](https://arxiv.org/abs/2608.23221)。本轮首次收录，未比较 v1/v2 差分，不能将当前全部贡献归于本次修订。
- 摘要：先检索形状相近的历史片段，再学习它们对当前预测的实际帮助。未来真实值仅用于训练监督，推理评分仅依赖已知历史；设置候选先验和打乱未来监督等对照。作者报告多任务改善，但某些领域简单的末值对齐 L2 检索仍更强。
- 相关性：**时序检索 / Agent 记忆与证据选择高，TSFM 外部增强中高，显式 reasoning 中低**。可作为 Agent 的历史案例检索器；论文本身不是自主建模 Agent。其“训练可用未来、推理只能用历史”的边界值得迁移，仍需在代码层核验。
- 核验：官方摘要、首发与修订日期已确认；未核验代码、未复现实验。Solar 结果不直接等同于真实光伏电站跨站点收益。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-16] WaveTLM — 持续跟踪，非今日新增

- 日期与来源：v1 **2026-09-16 15:21:39 UTC**；[官方论文](https://arxiv.org/abs/2609.18812)，今日重核。
- 摘要：把自然语言时序请求编译成带类型的任务状态，再由专用执行器输出数值张量、合法标签或结构记录，覆盖预测、插补、分类、异常检测和波形分析。
- 相关性：**可执行 reasoning / Agent 输出契约 / harness 高，通用 TSFM 中**。应分别测量输出合法性、数值准确性和时间对齐；不能把契约通过率当预测准确率。
- 发布状态：摘要仍写代码、构造脚本与 ExecTS-QA 在发表后公开，未确认新的代码发布。昨天已收录，不重复计篇数。

**本轮没有确认更晚的显式时序 reasoning 首发。** TabPFN-3.5-Thinking 的命名边界见第 1 栏；WaveTLM 也是执行可靠性研究，不能仅凭结果格式正确就宣称思维过程正确。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（Agent、harness、machine learning、AutoML）

#### [2026-09-17] janavkamesh/agentic-automl — 新建，有代码，时序适配待补

- 日期与来源：创建 **17:17:50 UTC**、推送 **17:29:03 UTC**；[仓库](https://github.com/janavkamesh/agentic-automl)、[元数据](https://api.github.com/repos/janavkamesh/agentic-automl)。
- 摘要：[agent.py](https://github.com/janavkamesh/agentic-automl/blob/HEAD/backend/services/agent.py)串联数据工程和建模代码生成，实际调用 Gemini 客户端，要求生成预处理、多个算法、GridSearchCV、模型和指标文件。
- 相关性与核验：**AutoML / 代码 Agent 高，直接时序中低，TSFM / 已验证 reasoning 收益低**。已读文件树和 Agent 源码；提示词围绕分类指标与类别频数设置 CV，没有明确要求时间顺序或滚动验证。README 接口未取得内容，沙箱、生成代码和模型服务可用性均未运行验证，不能视为成熟时序 AutoML。

#### [2026-09-17] vishakha2121/ai-energy-optimization-agent — 新建，降级为脚手架

- 日期与来源：创建 **08:36:32 UTC**、推送 **09:08:56 UTC**；[仓库](https://github.com/vishakha2121/ai-energy-optimization-agent)、[元数据](https://api.github.com/repos/vishakha2121/ai-energy-optimization-agent)。
- 摘要：README 描述 IoT 模拟、ARIMA / Prophet / LSTM、强化学习控制和 Gemini 建议的能源应用。
- 相关性与核验：**时序 Agent 主题高，已验证实现低，TSFM / reasoning 低**。递归树确认 `arima_forecaster.py`、`model_trainer.py`、`model_evaluator.py`、`gemini_client.py` 均为 **0 字节**；训练与评估两个文件的 raw 内容也为空。不计有实现候选，不采信 README 的部署和模型表现声明。

#### [2026-09-17] NirmalKumar31/aml-evaluation-harness-public — 新建，评测方法候选

- 日期与来源：创建 **02:59:54 UTC**、推送 **2026-09-18 00:20:58 UTC**；[仓库与 README](https://github.com/NirmalKumar31/aml-evaluation-harness-public)、[元数据](https://api.github.com/repos/NirmalKumar31/aml-evaluation-harness-public)。
- 摘要：围绕交易告警预算、条件随机对照、召回上限和指标产物追踪构建评估流程；README 报告合成数据生成器在测试尾部停止，导致聚合分数受基率变化影响，并公开撤回过度结论。
- 相关性：**时序 ML 评测 / harness 高，Agent 实验验收高，TSFM / 显式 reasoning 低**。可借鉴时间窗分层和负对照，不能将交易模拟器结果外推为真实金融能力。
- 核验：[划分源码](https://github.com/NirmalKumar31/aml-evaluation-harness-public/blob/HEAD/aml-platform/src/aml/splits/ring_aware.py)实现时间截点、环状团伙起始时间及参与账户交叠过滤，并断言边界；仅抽查这一模块。README 明确**真实数据衍生回放包未随公共快照发布**，可运行的合成演示不能复核全部历史数字；本轮未运行。

TuiML 和 TabPFN-3.5 的 GitHub / HF 实现与论文合并；前者仓库超出新建窗口，后者权重首发未确认，不凑入新项目数。其他通用游戏、RAG 和训练性能 harness 命中未进入精选。

### 4.2 光伏功率预测

### [2026-08-10] doccodyblue/ha-pvstrings — 已知项目，活动更新

- 日期与来源：创建 **2026-08-10 14:15:43 UTC**，推送 **2026-09-17 17:03:04 UTC**；[仓库](https://github.com/doccodyblue/ha-pvstrings)、[元数据](https://api.github.com/repos/doccodyblue/ha-pvstrings)。
- 摘要：每个光伏组串以 pvlib 物理预测结合学习残差修正，面向 Home Assistant。
- 相关性：**光伏时序预测高，Agent 可调用工具中，TSFM / reasoning 低**。本轮仅复核搜索元数据，没有提交差分或新实验，不把推送时间当功能进步。窗口内前六个光伏搜索结果未补出需提升优先级的新建项目。

## 5. 光伏功率预测最新研究

### [2026-09-15] Distributed JEPA — 持续跟踪

- 日期与来源：v1 **2026-09-15**；[官方论文](https://arxiv.org/abs/2609.17029)，今日重新打开。
- 摘要：共享潜在空间预测被遮蔽的时序表示，考察异质能源序列迁移和缺失数据鲁棒性；作者报告在多数未见光伏资产上优于对照。
- 相关性：**光伏跨资产表示迁移高，Agent 预测工具中高，显式 reasoning 低**。应先检查预训练资产隔离和天气起报可得性；本轮无新实验，不重复计新增论文。

本轮光伏补检多为 9 月卷期的出版商条目，在线首发未核验，不依卷期月份认定新论文；未确认比既有主线更新且日期可靠的高相关首发。历史检索研究的 Solar 结果见第 2 栏，不重复计为已验证光伏方法。

## 6. 检索覆盖、日期过滤与局限

| 来源 | 本轮实际检查 | 结果与边界 |
|---|---|---|
| [arXiv cs.LG recent](https://arxiv.org/list/cs.LG/recent)、[new](https://arxiv.org/list/cs.LG/new)、[stat.ML](https://arxiv.org/list/stat.ML/recent) | 最新页面、关键词搜索及四篇新增论文官方日期；TabPFN 抽查正文 | 返回页面仍显示 9 月 17 日公告，不能据此声称已覆盖 9 月 18 日全部公告；未全量遍历所有学科 |
| [DailyArXiv](https://github.com/zezhishao/DailyArXiv) | timeseries 分支不可访问，回退默认 README，完整提取 Time Series | Last update **9 月 18 日**，**77 条**，最新行 **9 月 16 日**；最新提交 c4e1c80、9 月 17 日 19:48:38 UTC。首次补出 TuiML、TabPFN 等，聚合更新时间不是首发日期 |
| [GitHub Search](https://github.com/search?type=repositories) | created:2026-06-18..2026-09-18，按 updated 排序，五组各取前 6 | time-series agent / timeseries agent / automl agent / harness machine-learning / photovoltaic forecasting 总数 **154 / 9 / 104 / 134 / 51**；只筛选头部结果，不是 Trending 排名或全量代码审计 |
| [OpenReview](https://openreview.net/)、[ACL](https://aclanthology.org/)、[ICLR](https://proceedings.iclr.cc/)、[PMLR](https://proceedings.mlr.press/)、[NeurIPS](https://neurips.cc/)、[KDD](https://kdd2026.kdd.org/)、[AAAI](https://ojs.aaai.org/) | 官方域名组合定向搜索 | 命中多为已有会议论文；未找到经首发日期核验后可加入本日精选的更晚成果。未逐站遍历论文目录 |
| [Google Research](https://research.google/blog/)、[IBM](https://www.ibm.com/)、[HuggingFace](https://huggingface.co/) | 机构时序发布补检，TabPFN 官方模型页 | TimesFM-3 为已知 8 月 31 日发布；未确认新的更晚时序官方发布。HF 未全量扫描，模型页与论文合并 |
| [AI HOT](https://aihot.virxact.com) | 最近七天 time series 精选线索 | 返回 1 条芯片贸易分析，与本任务不直接相关，排除；不能用于推断三个月无研究 |

**过滤**：DailyArXiv 的 2311.15210v2、2602.02888v2、2606.08560v2 等旧稿首发编号已在窗口前，不因 9 月修订重计为新研究。2608.23221 的 v1 在窗口内，单独标明修订。TuiML 仓库 3 月创建，论文与代码日期分开处理。无法确认权重首发或出版商在线首发的内容不进入“已确认新发布”计数。

本轮证据为官方摘要、选定正文和源码抽查；未下载权重、安装候选项目、执行其生成代码或复现实验。所有性能数值均为作者报告；“未确认新增”只适用于所述检索范围。

## 7. 接下来优先看什么

1. **TuiML**：用小型时序任务验证工具契约、实验状态与滚动验证是否贯通，重点检查上游排序和预处理。
2. **TabPFN-3.5 + 峰值负荷评测**：将表格化时序、原生 TSFM 和朴素基线放在同预算、同时间划分下比较，分别报告平均与峰值误差。
3. **历史检索 + WaveTLM**：把历史证据选择和输出契约分别评测，保留末值 L2 检索与直接数值工具基线。
4. **AML harness**：参考其条件负对照和撤回记录；先明确哪些历史产物不可公开复核，再决定是否移植协议。

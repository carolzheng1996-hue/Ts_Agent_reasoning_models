# 2026-09-13 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：本轮任务启动于 9 月 12 日；环境日期切换后，于 **2026-09-13 10:32–10:35 CST（Asia/Shanghai）**完成主要实时补检。按当前日期落盘。**下午增补：2026-09-13 15:32–15:36 CST，以上午已提交版为增量基线；本文件保留上午发现，并补充下面明确标注的两篇论文及复核记录。**三个月窗口：**2026-06-13 至本轮检索时点**，含起始日；论文按 arXiv v1、期刊按公开发表事件、项目按 GitHub 创建日期排序，各栏目由近及远。原始来源日期采用 UTC，检索时间采用北京时间。

增量基线为 9 月 11 日含下午补检的晨报，并检索仓库历史避免重复计新。当前为周日，不触发周五周报。检索不是完整系统综述；“未确认新增”不等于领域没有新成果。

## 今日重点

- **下午新增 2 篇论文**：SolCloudLLM（天空图像与时序融合的光伏 / 辐照度预测）及 LoaDiff（条件用电曲线生成），均首发于 9 月 10 日。优先阅读 SolCloudLLM 的数据切分与融合消融，不能将采用 LLM 等同于具备显式 reasoning。

- **新增论文线索**：9 月 10 日 CGM 多模态评测表明，零样本 TSFM 并不稳定胜过任务专用基线，轻量微调与残差融合值得纳入预测 Agent 的候选操作。
- **新增 GitHub 候选 4 项**：物理约束光伏 TSMixer、Auto_ML、企业信用评分 Agent、Mira 遥测查询工具。其中光伏项目与当前研究最直接相关；其公开包不含完整训练和真实实验。
- **代码核验发现**：Auto_ML 使用默认随机训练/测试切分，且先清洗与构造特征再切分。应先改评测协议，再考虑接入时间序列实验。
- **DailyArXiv 已完成实时补检**：README 更新日仍为 9 月 11 日，Time Series 最新行日期为 9 月 9 日；领域留出与 SDD 已收录。KairosAgent 等旧论文的 9 月修订日期未冒充首发。

## 1. 时间序列基础模型最新研究

### [2026-09-10] Evaluating Time-Series Foundation Models and Multimodal Dietary Context for CGM Forecasting — 新增发现

- 日期与来源：arXiv v1 2026-09-10 17:43:29 UTC；[官方论文与版本历史](https://arxiv.org/abs/2609.11872)。今天发现，不是今天首发。
- 摘要：在八个公开连续血糖数据集上统一比较上下文长度、预测时距及不同人群。零样本基础模型未稳定优于 Elastic Net、PatchTST；轻量微调明显改善表现，饮食上下文通过残差融合带来额外收益。
- 相关性：**TSFM / 预测 Agent 选模高，显式 reasoning 低**。对本项目的启发是同时比较零样本、轻量适配和外生信息残差修正，而非默认大模型最佳；这是跨领域方法借鉴，不能将血糖结果视作光伏效果。仅核验摘要及日期，未复现。

### [2026-09-10] LoaDiff — 下午新增发现，基础模型数据生成邻近研究

- 日期与来源：arXiv v1 2026-09-10 14:46:30 UTC；[官方摘要及版本历史](https://arxiv.org/abs/2609.11639)。仓库既有晨报未检出此标题或编号，不是今日首发。
- 摘要：扩散模型生成全年、亚小时粒度的住宅用电曲线，支持家电等静态属性及日历、室外温度等动态条件。作者在三个住宅用电数据集上评估真实性、多样性、训练样本记忆风险、下游负荷预测及条件控制。
- 相关性：**能源时序合成 / Agent 实验数据中高，基础模型预训练数据中，直接光伏预测及显式 reasoning 低**。可作为可控场景生成候选；论文并未证明它是通用 TSFM。有限的记忆风险证据不等于隐私保证；本轮只核验摘要与日期，未复现。

### [2026-09-09] A Later Test Set Is Not a New Domain — DailyArXiv 确认，持续跟踪

- 日期与来源：arXiv v1 2026-09-09；[论文](https://arxiv.org/abs/2609.10357)、[配套 tsfm-bench](https://github.com/mahdinaser/tsfm-bench)。
- 摘要：在模型发布之后出现的七组、五领域数据上比较十三个预测器。结果提示：未来时间留出仍保留预训练领域熟悉度，需要额外考察领域留出。
- 相关性：**TSFM / harness / Agent 评测高，reasoning 低**。光伏实验应同时报告时间留出和跨站点/气候泛化；研究中的关联不能直接解释为因果。昨日已收录，今天不重复计新。

### [2026-09-09] Distillation of Synthetic Data for Time Series Foundation Models（SDD）— DailyArXiv 确认，持续跟踪

- 日期与来源：arXiv v1 2026-09-09；[论文](https://arxiv.org/abs/2609.09586)。
- 摘要：以已知合成过程的条件预测分布监督预训练，降低随机目标的梯度方差。作者报告高斯过程数据上达到相当损失所需训练迭代减少 10%–40%。
- 相关性：**TSFM 训练高，Agent 合成数据中高，显式 reasoning 低**。适合研究可控数据生成，但尚不能据此认定真实光伏数据收益；未复现。

## 2. 时间序列建模 Agent 最新研究

本轮未确认晚于既有主线的高相关新首发；新增工程项目见第 4 栏。

### [2026-09-03] CompEvo — 持续跟踪

- 日期与来源：arXiv v1 2026-09-03 03:12:23 UTC；[论文](https://arxiv.org/abs/2609.09195)，本轮重新核验官方版本历史。
- 摘要：让异质 Agent 搜索新闻证据，将预测反馈转换为选择权重，并通过竞争式策略进化维持行为多样性。
- 相关性：**时序 Agent / reasoning 高，TSFM 中**。优先审查新闻在起报时的可得性、策略多样性消融及相同计算预算对照。摘要中的理论保证受其假设约束，本轮未验证代码或复现实验。

## 3. 时间序列 reasoning 模型最新研究

本轮未确认更晚的显式时序 reasoning 模型首发；以下为窗口内基准，不能按新预训练模型计数。

### [2026-09-05] STQA / SQFRS — 持续跟踪，首发新颖性降级

- 日期与来源：arXiv v1 2026-09-05；[论文](https://arxiv.org/abs/2609.06117)、[代码](https://github.com/xuxubaobaoan/STQA_Project)。
- 摘要：围绕股票历史表格与预测数据构建问答，联合 SQL 查询、预测器和预测后推理，暴露工具协调与不确定性处理问题。
- 相关性：**Agent / reasoning / harness 高**。本周先前已核验仓库创建于 2025 年，因此整个研究更早公开时间不确定；今天只复核 arXiv，不将其当成全新项目。

### [2026-09-04] WearableQA — DailyArXiv 确认，持续跟踪

- 日期与来源：arXiv v1 2026-09-04；[论文](https://arxiv.org/abs/2609.05405)。
- 摘要：以真实长期可穿戴记录构造问答，区分数值计算、健康解释和跨信号推理。
- 相关性：**时序 reasoning 高，Agent 评测中高**。可借鉴计算正确率与解释忠实性的分开评估；不将医疗解释结论迁移为能源领域事实。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（含 machine learning / AutoML / harness）

#### [2026-09-11] xzxgsjgs/Enterprise-Credit-Scoring-Agent — 新增工程候选

- 日期与来源：创建 2026-09-11 15:33:06、最近推送 15:33:58 UTC；[仓库](https://github.com/xzxgsjgs/Enterprise-Credit-Scoring-Agent)、[官方元数据](https://api.github.com/repos/xzxgsjgs/Enterprise-Credit-Scoring-Agent)。
- 摘要：将 LLM 编排/解释与确定性评分工具分开，提供 LangGraph、特征工程、模型训练及验证模块；README 描述按年度 expanding-window 验证。
- 相关性：**AutoML / harness 高，时间面板建模中高，TSFM 低**。可借鉴工具结果与语言解释分离的设计。已读 README、目录与验证工具文件；年度切分及标签可得性未完成代码审计，不采信其高 AUC 为已验证泛化。依赖 CSMAR 数据，仓库存在不代表数据和实验可直接复现。

#### [2026-09-11] PrarabdhaNamdeo/Auto_ML — 新增，时序适用性降级

- 日期与来源：创建 2026-09-11 11:56:17；最近推送 2026-09-12 04:53:26 UTC；[仓库](https://github.com/PrarabdhaNamdeo/Auto_ML)、[元数据](https://api.github.com/repos/PrarabdhaNamdeo/Auto_ML)。按创建日排序，推送日不当成新项目首发。
- 摘要：LangGraph 编排任务识别、清洗、特征工程、模型选择、SHAP 和报告，含最多三次纠错尝试，以 MCP 和 Streamlit 暴露接口。
- 相关性：**通用 AutoML / Agent 高，时序预测中低**。本轮读取 [agent.py](https://github.com/PrarabdhaNamdeo/Auto_ML/blob/HEAD/agent.py)，`train_test_split` 仅设置测试比例及随机种子，使用默认随机打乱；清洗和特征工程发生在切分前。用于预测前需建立时间留出、训练期拟合预处理及独立模型选择验证集。SHAP 是归因，不能据此证明 reasoning。未运行远程演示或上传数据。

#### [2026-09-08] TrianaLab/mira — 新增发现，工具层候选

- 日期与来源：创建 2026-09-08 07:11:46；最近推送 2026-09-12 22:56:09 UTC；[仓库](https://github.com/TrianaLab/mira)、[元数据](https://api.github.com/repos/TrianaLab/mira)。
- 摘要：单一 Rust 程序接收 OTLP 日志、追踪和指标，提供 Web/终端视图、HTTP 与 MCP 查询接口，便于 Agent 检索运行证据。
- 相关性：**Agent 可观测性 / harness 中高，直接预测与 TSFM 低**。适合考虑实验过程证据查询，未证明其改善预测。已读 README 与目录；项目自述仍为 pre-1.0，且缺少跨副本查询分发等能力。本轮未测延迟、运行测试或比较提交差分，最近推送仅说明活动。

HuggingFace 名称检索未确认更晚高相关新模型；返回已有 IBM PatchTST-FM-r2 等，不重复当成今日发布。名称检索覆盖有限，不能推断整个平台无更新。

### 4.2 光伏功率预测

#### [2026-09-11] lin559412-blip/physical-pv-forecasting — 新增，今日优先关注

- 日期与来源：创建 2026-09-11 15:42:11、最近推送 15:44:04 UTC；[仓库](https://github.com/lin559412-blip/physical-pv-forecasting)、[元数据](https://api.github.com/repos/lin559412-blip/physical-pv-forecasting)。对应论文标题、公开地址与首发日期**不确定**，仅按代码项目收录。
- 摘要：TSMixer 编码历史序列，与目标时刻晴空及时间信息拼接，预测晴空辐照指数、环境温度、修正系数，再经固定物理关系还原光伏功率。公开网络、联合损失及模拟张量示例。
- 相关性：**光伏预测高，物理约束建模高，Agent 可调用预测器中高，foundation / reasoning 低**。已读 README、完整目录及 [model.py](https://github.com/lin559412-blip/physical-pv-forecasting/blob/HEAD/model.py)，确认物理解码、夜间归零和非负功率处理；无额定容量上限裁剪。
- 边界：README 明确不含数据处理、完整训练、权重及对照/消融实验。其按年划分和仅使用起报时可知上下文的说明仍须在未公开的数据流水线中验证。可优先审查模块接口，不能将随机张量演示当作实站性能证据。

## 5. 光功率 / 光伏功率预测最新研究

上午新增直接光伏内容主要为上述代码项目；下午独立补入 SolCloudLLM。其余论文继续跟踪。光通信 optical power 定向搜索没有确认窗口内更晚的高相关预测成果；排除市场规模报告与仅研究链路稳定性的非预测内容。

### [2026-09-10] SolCloudLLM — 下午新增，优先阅读

- 日期与来源：arXiv v1 2026-09-10 06:26:02 UTC；[Bidirectional Multimodal Fusion of Sky Images and Time-Series for Solar Forecasting with Large Language Models](https://arxiv.org/abs/2609.11135)、[论文方法与实验全文](https://arxiv.org/html/2609.11135v1)。本轮新发现，非今日首发。
- 摘要：先对齐天空图像与历史序列的 patch，再以双向调制融合，映射到冻结的六层 GPT-2。作者报告相对主表最强基线，SIRTA 辐照度 MSE 最大下降 25.4%，SKIPP’D 光伏功率最大下降 14.5%；不能把前一个数字当作光伏功率提升。
- 相关性：**光伏 / 多模态预测高，Agent 可调用预测器中高，显式 reasoning 低**。输出是数值预测，没有据此证明工具规划或推理链能力。
- 已核验边界：SIRTA 使用按年/月连续时间划分；SKIPP’D 使用固定测试日、随机抽取验证日，各集合跨 2017–2019 混合，不能等同于训练过去、预测未来。归一化只拟合训练集，滚动窗口不跨日。64 步 SKIPP’D 融合消融中，简单拼接 MSE 0.1931 优于双向融合 0.2069，故“融合总是更优”不成立。以上为全文陈述与表格核验，未复现，未确认官方代码仓库。

### [2026-09-05] SolarBench — 持续跟踪

- 日期与来源：arXiv v1 2026-09-05；[论文](https://arxiv.org/abs/2609.06187)，本轮重新打开官方页面。
- 摘要：多站点、多年份的天空/卫星图像与辐照度或光伏输出基准，关注短时预测、云况变化及新站适配。
- 相关性：**光伏 / 多模态时序高，Agent 评测中高，显式 reasoning 低**。优先核对数据公开状态、起报时输入可得性和跨站点划分；本轮未下载数据或运行基线。

### [2026-09-03] PPO 场景感知日前光伏动态选模 — 持续跟踪

- 日期与来源：[Scientific Reports 官方提前公开页](https://www.nature.com/articles/s41598-026-69955-9)确认 Published 为 2026-09-03、Accepted 为 2026-08-31。更早预印本日期不确定，降低“全新研究”优先级；仓库 9 月 9 日晨报已收录，本轮不计新增。
- 摘要：从气象时间特征聚类出四类天气情境，以 PPO 策略根据日前气象特征选择预测模型；作者报告相对静态最优策略的整体 RMSE 下降 13.97%。
- 相关性：**光伏 / 自动选模 / RL Agent 高，LLM reasoning 低**。是模型路由的直接候选思路；必须核实输入是否真实来自日前天气预报、策略训练与评测是否隔离。当前网页为可引用的提前公开版本，本轮仅核验摘要和出版历史，未复现。

## 6. DailyArXiv 补检结论

**下午复核**：15:33 CST 再次完整下载 master README，Time Series 提取到下一同级标题，共 73 条带日期论文行；Last update 仍为 2026-09-11，最新行仍为 2026-09-09。SolCloudLLM（2609.11135）、LoaDiff（2609.11639）及上午 CGM 论文均未收录，已独立补齐。已有日期冲突的降级处理继续保留。

来源：[用户指定仓库](https://github.com/zezhishao/DailyArXiv)、[master README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)、[实时 raw README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)。9 月 13 日 10:32 CST 完整下载后提取 **Time Series 至下一同级标题**，确认 Last update 为 **2026-09-11**、最新行日期为 **2026-09-09**。网页工具命中的 raw 缓存却显示 5 月 29 日，本报采用直接下载结果，不以旧缓存声称仓库倒退。

- **有相关且在窗口内的论文**：领域留出评测、SDD、WearableQA 已补入上方主栏目，属于持续跟踪而非今日新增。README 中还可见 IPM-FM、协变量负荷评测、Cadence、MMTClinic 等本周已跟踪条目，本期优先聚焦新增发现及评测主线，未逐项重复展开。
- **新论文覆盖缺口**：CGM 评测 2609.11872 未出现在本次 Time Series 文件中，已通过独立 arXiv 检索补入第 1 栏；DailyArXiv 不能替代独立检索。
- **首发超窗及日期冲突降级**，下表仅说明排除理由，不纳入主列表：

| README 所列日期 | 论文与官方来源 | 首发及判断 |
|---|---|---|
| 2026-09-09 | [KairosAgent](https://arxiv.org/abs/2605.30002) | v1 2026-05-28，v2 9 月 9 日；Agent / reasoning 高相关，但首发超窗，EMNLP 接收不重置首发 |
| 2026-09-09 | [SurF](https://arxiv.org/abs/2605.14069) | v1 2026-05-13，v2 9 月 9 日；不规则时序生成/基础模型相关，但首发超窗 |
| 2026-09-07 | [Alpha-R1](https://arxiv.org/abs/2512.23515) | v1 2025-12-29，9 月 7 日为修订；金融因子 reasoning 相关，但首发超窗 |
| 2026-09-03 | [MetaCaster](https://arxiv.org/abs/2608.23473) | 本周既有核验：v1 2026-08-24、v2 9 月 3 日；Agent / harness 高相关，仍在窗口内，但应按 8 月 24 日排序，不计本轮新发现 |

## 7. 检索覆盖与下一步

| 来源 | 本轮实际范围 | 结果及限制 |
|---|---|---|
| [arXiv](https://arxiv.org/) | time series 与 foundation / pretrained、agent、reasoning；photovoltaic / solar power / optical power 与 forecasting；另作 9 月定向网页检索 | 官方 API 三组限流、一组超时；改用官方摘要及版本历史核验候选。无法声称 API 已覆盖全部三个月 |
| [GitHub Search](https://github.com/search?type=repositories) | 创建日 6 月 13 日至 9 月 13 日，按更新排序取前 5：time-series agent、automl agent、harness machine-learning、photovoltaic forecasting | 分别返回总量 160、101、133、53；只抽查各前 5，噪声较多。四候选补读 README/树，三项补读实现；未使用 trending 排名作为新颖性依据 |
| [HuggingFace](https://huggingface.co/models) | time-series 名称、按创建日期取前 5 | 未确认新的高相关首发，不代表完整模型目录 |
| [OpenReview](https://openreview.net/)、[ACL Anthology](https://aclanthology.org/)、[PMLR](https://proceedings.mlr.press/) | 定向 time series / agent / reasoning / foundation 搜索 | 多命中会议版本与既有论文；Chat-TS 的 EACL 2026 出版月份为 3 月，超窗；其余未确证新增首发，不按爬取时间入选 |
| [NeurIPS](https://neurips.cc/Downloads/2026)、[KDD](https://kdd2026.kdd.org/tutorials/)、[AAAI](https://ojs.aaai.org/) | 官方会议关键词搜索 | 命中专题/教程和旧论文，未确认新研究条目；不将未来会议活动当作已发表成果 |
| [Google Research](https://research.google/blog/) 与出版商 | 官方时序动态及 PV / optical power 关键词 | TimesFM-3 为此前已跟踪发布；PPO 光伏论文确认已收录；未把光功率仪表市场报告当技术研究 |
| [AI HOT](https://aihot.virxact.com) | 最近七天 time series 精选线索 | 返回 0 条，仅作辅助，不推断全领域无新增 |

**建议优先顺序**：先检查物理约束光伏项目的输入/输出和缺失训练环节，再把“简单基线—零样本 TSFM—轻量适配—物理残差”纳入同一时间与站点留出协议。AutoML 项目应先修正随机切分和预处理边界，再作为实验编排候选。以上为本报基于公开材料的应用判断；本轮未训练模型、下载权重或复现实验。

## 8. 下午增量检索记录

检索时间：**2026-09-13 15:32–15:36 CST**；窗口仍为 **2026-06-13 至检索时点**。已执行指定 SSH key 加载及 `git pull --ff-only`，远端无需更新；今天周日，不修改周报。

- **论文**：arXiv 定向补查 9 月 10–11 日 time series / foundation / agent / reasoning，以及 photovoltaic / solar / optical power。确认并补入上述两篇 9 月 10 日论文。未确认比上午既有清单更晚的高相关 Agent 或 reasoning 首发；检索索引不完整，不能推断该领域没有新增。
- **会议去重**：[STReasoner 的 ACL 2026 页面](https://aclanthology.org/2026.acl-long.702/)为 7 月会议出版，但[预印本](https://arxiv.org/abs/2601.03248)首发 2026-01-06；[Augur 会议版](https://aclanthology.org/2026.acl-long.32/)对应[预印本](https://arxiv.org/abs/2510.07858)首发 2025-10-09。两者与 reasoning / Agent 高相关，均首发超窗，降级排除。OpenReview 定向搜索多返回既有 ICLR 稿件，本轮未确证窗口内新首发；下午未独立重跑全部 NeurIPS / ICML / KDD / AAAI 官方目录。
- **GitHub**：公开仓库搜索复核 time-series agent、automl agent、harness machine-learning、photovoltaic forecasting，窗口内按更新取各前 5，总量分别 160、101、133、53。上午四项目已出现，未重复计新。physical-pv-forecasting 最近推送仍为 9 月 11 日 15:44:04 UTC；这仅说明推送元数据未变，本轮没有新训练公开证据。搜索同时包含本仓库、第三方 API 档案、通用模型和通用 LLM 评测，不能把全部结果算作时间序列项目。对低相关候选不展开；本轮未新增通过代码核验的 GitHub 推荐。
- **HuggingFace / 机构动态**：[IBM 官方 9 月 9 日文章](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)仍为已有 PatchTST-FM-r2 线索，不将文章检索日当权重首发。本轮未确认更晚高相关模型。
- **光通信功率**：检索再次命中[多 Agent 光功率优化](https://arxiv.org/abs/2606.05795)，首发 6 月 4 日，超窗排除；市场规模预测不属于信号功率预测研究。
- **辅助线索**：[AI HOT](https://aihot.virxact.com)最近七天 time series 精选返回 0，不作为全领域无更新的证据。

**新增阅读优先级**：SolCloudLLM 先于 LoaDiff。前者直接贴合光伏目标，重点比较多模态增益、时间划分及简单拼接消融；后者用于评估能源时序场景生成，暂不当作光伏基础模型成果。

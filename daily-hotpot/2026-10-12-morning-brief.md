# 时间序列研究晨间简报｜2026-10-12

- 检索时间：2026-10-12 上午，截止 09:15（Asia/Shanghai）。
- 时间窗口：2026-07-12 至本次检索时刻。论文日期采用 arXiv 官方 v1 的 UTC 日期；版本修订、期刊在线发表、GitHub release 分别注明，不用抓取时间冒充发布日期。
- 增量基线：自动化记忆中的 10 月 9 日记录，以及本地已有 10 月 10 日晨报。远端同步失败，因此“新增”仅指相对这两份本地记录新增收录，不代表今天首发。
- **今日重点：新增 AdaCast、Timer-M1，以及 Training on the Future 标签延迟审计。** Agent 与 reasoning 栏目保留已核验窗内重点；没有确认更晚的新首发。GitHub 新增版本动态与待核实线索分列。
- 今日为周一，不生成周五周报。以下均为来源核验和研究判断，未复现实验、安装项目或下载权重。

## 1. 时间序列基础模型最新研究

### 2026-10-08｜AdaCast：按输入生成基础模型适配参数｜新增，高优先级

- **来源与日期**：[arXiv:2610.12240v1](https://arxiv.org/abs/2610.12240v1)，v1 为 10 月 8 日 16:21 UTC（北京时间 10 月 9 日 00:21）。
- **摘要**：冻结预训练时序基础模型，由生成器为每个输入产生低秩参数更新，替代所有样本共享一套固定适配参数。作者在六个基准上报告域内预测与跨数据集零样本泛化收益。
- **相关性判断**：**foundation model 高；Agent 工具适配中高；显式 reasoning 低**。它是条件参数生成方法，不是自主研究 Agent。适合比较“静态微调”和“逐输入适配”的成本及泛化；零样本目标域表现不代表生成器无需训练。

### 2026-10-08｜Timer-M1：以时间和变量关系原语预训练｜新增，高优先级

- **来源与日期**：[arXiv:2610.11734v1](https://arxiv.org/abs/2610.11734v1)，v1 为 10 月 8 日 11:28 UTC。
- **摘要**：以时间原语合成序列，再用关系原语组合真实与合成数据；训练样本明确区分目标变量、仅历史可得协变量及已知未来协变量。模型使用门控二维 Transformer 分配跨变量注意力，面向多变量零样本预测。
- **相关性判断**：**foundation model 高；Agent 预测工具高；语言 reasoning 低**。最值得借鉴的是协变量可得性协议，而不只是模型排名。论文报告 FEV、TIME 与 GIFT-Eval 的竞争力，本轮未核查数据重叠或复现榜单。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-08｜Training on the Future：延迟标签下的 TTA 审计｜新增，高优先级方法配套

- **来源与日期**：[arXiv:2610.12232v1](https://arxiv.org/abs/2610.12232v1)，v1 为 10 月 8 日 16:16 UTC（北京时间 10 月 9 日 00:16）。
- **摘要**：规定预测起点 s 的完整 H 步标签，只能在 s+d、且 d≥H 时用于更新；把这一规则加入四种测试时适应方法，在五个时序基准上审计，并加入简单线性校正器作对照。作者发现严格延迟后收益依赖数据集，部分适配会退化。
- **相关性判断**：**时序 harness / 在线学习评测高；Agent 实验可信度高；新 Agent 模型低**。这是评测协议研究，不能归为新 LLM Agent。建议把标签释放时钟、冻结模型与简单校正器作为自主建模循环的标准对照；不能由这些实验推断所有在线适应均无效。

### 2026-10-04｜TSHarness：分离感知与回答推理｜持续跟踪

- **来源与日期**：[Zero-Shot Time-Series Question Answering via Decoupled Perception and Reasoning](https://arxiv.org/abs/2610.04942)，本轮确认 v1 为 10 月 4 日。
- **摘要**：学习式工具选择器提取数值证据，形成结构化时序感知状态，再交给回答流程处理跨数据集问答。
- **相关性判断**：**Agent / harness / reasoning 高；自动训练预测器低**。可借鉴证据与推理解耦接口；目标数据集零样本不等于工具选择器未经训练，应核查训练隔离。

### 2026-10-03｜EvoCast：基于实验证据的预测架构迭代｜持续跟踪

- **来源与日期**：[官方论文](https://arxiv.org/abs/2610.04517)，本轮确认 v1 为 10 月 3 日。
- **摘要**：先执行基线与机制消融，再让 LLM 根据结果和失败记录提出架构修改；确定性程序控制源码修改边界、规范评测及候选晋升。
- **相关性判断**：**时序建模 Agent / AutoML / harness 高；foundation model 直接相关性中**。适合研究自主实验流程，但应继续核查模型晋升是否只依赖验证集，避免反复查看最终测试集。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-05｜COMMON-TSQA：答案正确是否真的用了时序证据｜持续跟踪

- **来源与日期**：[Do Time-Series QA Systems Read the Time Series?](https://arxiv.org/abs/2610.05686)，官方检索元数据给出 10 月 5 日。
- **摘要**：统一已有时序 QA 数据和评测接口，用六种干预测试数值证据依赖，并分别审计解释中的事实依据、推理有效性与答案一致性。
- **相关性判断**：**reasoning / Agent 评测高；新推理模型权重低**。可用于识别只依赖问题文本的捷径；解释与答案一致并不证明解释中的数值描述正确。

### 2026-09-30｜OpenTSLM TeeMoE：预测、上下文和语言推理统一｜持续跟踪

- **来源与日期**：[arXiv 官方版本史](https://arxiv.org/abs/2609.40265)，v1 为 9 月 30 日，v2 为 10 月 7 日；未比较版本差分。
- **摘要**：在共享骨干上训练预测聚合、原生预测、时序分析三个低秩专家，由控制器按请求混合冻结的专家参数更新。
- **相关性判断**：**reasoning / foundation model 高；Agent 工具层高**。适合探索外部预测专家与语言分析协作；本轮只核对摘要和版本史，不把 v2 当作新模型首发。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列、harness、machine learning 与 AutoML

这里区分窗内发布动态与新建仓库。本轮 GitHub 创建窗口查询未成功，**未确认任何新建仓库日期**；不把近期抓取、星数或论文日期当作仓库创建日期。未核实新 HF 发布，不重复列出旧模型卡。

| 日期及状态 | 项目与来源 | 简短摘要 | 相关性与限制 |
|---|---|---|---|
| **2026-10-10 release｜新增收录版本动态** | [OrchestratorInc/agent-orchestrator](https://github.com/OrchestratorInc/agent-orchestrator) · [发布记录](https://github.com/OrchestratorInc/agent-orchestrator/releases) | 监督多种 coding-agent harness 的团队工作流。v0.13.7 发布记录列出阻止重命名项目 orchestrator 的修复。 | **通用 harness 高，时序 / AutoML 间接**。是旧项目的新版本，不是时序专用模型，也不能据此证明 ML 实验功能成熟。 |
| **2026-10-08 论文 v1｜新增代码线索；仓库创建日不确定** | [Training on the Future 配套仓库](https://github.com/Xodios/TRAINING-ON-THE-FUTURE-A-DELAY-AWARE-AUDIT-OF-TEST-TIME-ADAPTATION-FOR-TIME-SERIES-FORECASTING) · [论文](https://arxiv.org/abs/2610.12232v1) | 论文链接明确指向此仓库；页面可见 code_supplement 目录及压缩包。 | **时序评测 harness 高**。研究优先级高，但代码发布时点与可运行性尚未验证，降低工程就绪度评级；未检查压缩包内容。 |
| **2026-10-03 release｜本轮补充版本动态** | [TradingAgents v0.6.0](https://github.com/TauricResearch/TradingAgents/releases) | 新增整页 HTML 报告、按模型层级配置提供方、对到期历史决策统一结算等工作流功能。 | **金融 Agent 中高；时序建模 / TSFM 低至中**。它是决策分析系统，不能当作通用时序预测模型；无收益判断或性能背书。 |
| **日期不确定｜低优先级新增观察，不计窗内新项目** | [ParasKoundal/automl-research](https://github.com/ParasKoundal/automl-research) | README 描述初始化、预检查、训练、保留或丢弃实验的循环，记录指标、日志与修改，并检索论文形成研究线索。 | **通用 ML / AutoML / harness 高；时序专用能力未证实**。创建日期接口及提交历史读取失败；必须先核查时间切分与指标提取，不能仅凭说明认定有可靠实验裁决。 |

### 光伏功率预测

本轮未核实新建 GitHub / HF 光伏项目。不重复把已有项目计为新增；最新研究见下节。

## 5. 光伏功率预测最新研究（按目录规则补充）

### 2026-10-10｜多时间尺度动态融合 AF-WPT-RL｜新增，中优先级

- **来源与日期**：[Energy Engineering 官方页](https://www.techscience.com/energy/online/detail/28584)，明确 Published online 10 October 2026；更早预印本日期未确认。
- **摘要**：结合 attention/GRU 分支、固定小波包分解与连续 actor-critic 策略，对时间尺度及特征权重动态融合，覆盖 15 分钟至 7 天预测。
- **相关性判断**：**光伏预测高；RL 融合中高；LLM Agent / reasoning / foundation model 低**。强化学习权重策略不等于语言 Agent；复现需检查分解是否引入未来信息，以及各跨度天气输入的真实可得性。

### 2026-10-03｜SSA-DABNet：多尺度双注意力与超参数学习｜新增，中低优先级

- **来源与日期**：[Oxford Open Energy 官方页](https://academic.oup.com/ooenergy/advance-article/doi/10.1093/ooenergy/oiag016/8860303)，Published 为 10 月 3 日，10 月 9 日是排版修订日；更早预印本不确定。
- **摘要**：多分支膨胀卷积捕捉不同时间尺度，结合通道与时间注意力处理光伏出力的波动及非线性。
- **相关性判断**：**光伏预测高；AutoML 超参数方向中；LLM Agent / reasoning / TSFM 低**。可作专用预测器对照，不能将标题中的自适应或超参数学习等同于自主建模 Agent。

## 6. 检索覆盖、降级线索与排除项

- **arXiv / DailyArXiv**：读取 [DailyArXiv Time Series](https://github.com/zezhishao/DailyArXiv#time-series)，页面显示 Last update 2026-10-12，最新论文行日期 10 月 8 日。回查新增三篇的官方 v1 和摘要，并核验已有 Agent / TeeMoE 版本史；聚合器日期不等于论文首发日。本轮未确认 10 月 9—12 日更晚的核心新首发，不代表这些日期没有论文。
- **ACL**：[CTRL 官方页](https://aclanthology.org/2026.findings-acl.1104/) 的出版月份是 **2026 年 7 月，具体日不确定**；其 LLM 控制器根据分解误差修正冻结骨干，**Agent / reasoning 高相关**。DailyArXiv 新出现的 10 月 8 日记录不能抹去更早会议出版；无法确定其相对 7 月 12 日边界的位置，继续低优先级观察，不计已确认窗内首发。
- **NeurIPS**：[9 月 29 日官方教程公告](https://blog.neurips.cc/2026/09/29/neurips-2026-tutorial-announcement/) 列出 “Time Series Foundation Models in Practice”，涉及预测、分类与 EEG，**TSFM 高相关**，属于教程消息而非新论文。[2026 官方目录](https://neurips.cc/Downloads/2026) 出现 Nuwa、OATS、MMTA 等标题；首次公开日期不确定，摘要和实验未核实，不依据标题推断方法或加入主列表。
- **OpenReview / ICLR / ICML / KDD / AAAI**：执行域名定向检索，未核实更晚的窗内核心新增。[Zeus 的 ICML 官方页](https://proceedings.mlr.press/v306/fu26n.html) 日期为 7 月 6—11 日，已早于本轮边界；[ExoTimer](https://ojs.aaai.org/index.php/AAAI/article/view/39908) 为 3 月 14 日，也排除。没有全量扫描会议目录。
- **GitHub**：访问 [Trending](https://github.com/trending)、站点限定搜索、官方仓库与 release；Trending 返回内容不足以形成可核实榜单，不报告排名。AutoML Agent 的创建窗口查询和单仓库日期接口失败，未完成全量新仓库扫描。二手趋势汇总只作发现入口，正式条目以作者仓库为准。
- **AI HOT**：使用技能尝试近七日论文线索，因本地 DNS 解析失败未取得数据，不以此支持新增结论。

## 7. 今日研究行动建议

1. **优先读标签延迟审计**：将预测起点、标签成熟时间、可更新样本集合写入实验记录，给在线 Agent 增加冻结模型与简单线性校正基线。
2. **并读 Timer-M1 与 AdaCast**：前者关注多变量预训练和协变量角色，后者关注逐输入参数适配；设计比较时同时记录泛化收益与推理成本。
3. **继续用 COMMON-TSQA 检验解释**：把数值事实正确、推理有效、答案一致分别衡量，避免仅看答案分数或语言流畅度。

## 8. 交付状态

已按要求执行指定 ssh-add，但访问 SSH agent 被环境拒绝；git pull --ff-only 也因 GitHub SSH 22 端口不允许而失败。本文在本地仓库生成，远端同步状态未验证。提交仅包含本日文件，保留原有暂存与未跟踪内容；提交、推送的实际结果见本次自动化完成消息。

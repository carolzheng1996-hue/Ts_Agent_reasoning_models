# 时间序列研究晨间简报｜2026-11-05

检索时间：2026-11-05 08:06–15:39（Asia/Shanghai）。严格时间窗口：**2026-08-05 至 2026-11-05**。论文以首发/官方发布日期为准；未能由一手页面确认的日期会明确标出并降低优先级。作者报告的指标均未在本地复现。

## 1. 时间序列基础模型最新研究

### 2026-11-04｜[CATF: A Manager-Worker Framework for Context-Aware Time-Series Forecasting](https://arxiv.org/abs/2611.05325)

- **来源与日期**：arXiv v1，2026-11-03 18:28 UTC（北京时间 11 月 4 日）；也被 DailyArXiv 的 `Time Series` 栏目收录。
- **简短摘要**：以 Manager–Worker 架构处理天气、日历等上下文变量：Transformer Manager 在训练和推断时都采用硬路由，将每个输入分给一个可替换的单模型预测 Worker。作者在五个上下文丰富数据集、四种预测窗和两套归一化下报告，CATF 增强版在 200 组比较中 162 组优于对应单模型。
- **相关性判断：中高（上下文路由 / TSFM 候选）**。其显式路由与可替换 Worker 适合 Agent 调度多个预测器；仍应检验路由是否在未来协变量缺失、罕见情境和冷启动时稳定，以及硬路由的负载与回退策略。

### 2026-09-30｜[RACE: Residual-Aware Test-Time Adaptation for Neighbor-Rich TSFM Forecasting](https://arxiv.org/abs/2610.00405)

- **来源与日期**：arXiv v1，2026-09-30。
- **简短摘要**：针对单序列推断无法利用相邻、相似历史序列的问题，提出基于残差的测试时自适应；以连续血糖和云工作负载为代表场景，探讨共享模式、个体差异与非平稳突发的平衡。
- **相关性判断：中高（TSFM 适配 / Agent 检索策略）**。适合把“邻居选择—适配—预测”封装成 Agent 工具链；尤其要防止最近邻跨切分泄漏和测试时更新污染线上状态。

### 2026-09-12｜[Tabby: An Open Pretraining Recipe for Time Series Foundation Models](https://arxiv.org/abs/2609.13956)

- **来源与日期**：arXiv v1，2026-09-12（论文页记录 2026-09-15 更新）。
- **简短摘要**：发布 145M 长上下文概率 TSFM 及完整开放训练配方：结合 GIFT-Eval-Pretrain+、BLAST、合成的 KernelSynth/CauKerV2，以渐进收敛日程和深层分位数监督训练。一个冻结 backbone 同时支持预测、分类与零样本异常检测，最大上下文为 8,192。
- **相关性判断：高（TSFM 可复现性 / Agent 工具底座）**。相较只放权重的模型，开放数据与训练流程更适合 Agent 执行可审计复现；仍需确认数据许可、各下游任务的时序切分以及长上下文的成本收益。

### 2026-08-31｜[TimesFM-3：多变量零样本预测基础模型](https://research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/)

- **来源与日期**：Google Research 官方博客，2026-08-31；模型已接入其 [GitHub 项目](https://github.com/google-research/timesfm)。
- **简短摘要**：330M 参数、以逾 1 万亿时间点真实与合成数据预训练，原生支持多变量目标、协变量和概率预测；官方称其在 GIFT-Eval 与 FEV-Bench 的公开比较中具有领先平均排名，并提供 BigQuery ML 接口。
- **相关性判断：高（TSFM / 可调用预测工具）**。多变量与已知未来协变量使它更适合作为规划 Agent 的候选 forecaster；部署前需按业务 forecast origin 和数据可得时间做独立回测，不能将官方 benchmark 排名直接外推。

## 2. 时间序列建模 Agent 最新研究

### 2026-11-03｜[GlucoAgent: Personalized Glucose Forecasting from Multimodal Personal Context](https://arxiv.org/abs/2611.04126)

- **来源与日期**：arXiv v1，2026-11-03 01:06 UTC；也被 DailyArXiv 的 `Time Series` 栏目收录。
- **简短摘要**：面向连续血糖预测，LLM Agent 在每个预测点按个人的传感器、饮食和健康上下文写入并执行程序；可检索相似餐食、拟合和回测生理/统计模型，并给出理由与证据。作者在 CGMacros 上报告各预测窗均优于其对比的 TSFM。
- **相关性判断：高（时序 Agent / 证据化工具调用）**。它把 case-by-case 工具选择置于预测过程而非固定建模管线，贴近可审计 Agent；医疗数据的隐私、代码沙箱、工具选择成本，以及每种上下文在 forecast origin 时是否已可得，均需独立审计。

### 2026-10-14｜[CastClaw：面向工业预测的人在环自治 Agent](https://github.com/ustc-time-series/CastClaw)

- **来源与日期**：官方仓库新闻，2026-10-14 宣布论文获 IEEE ICDM 2026 Demo Track 接收；仓库称 2026-07-15 发布 v1.3.0，故本条以论文接收动态计入。
- **简短摘要**：将交互式任务协商、离线规则学习、在线慢思考工作流适配与证据支撑的评测串为 CSV-to-forecast 流程；其 Generative Prediction Reasoning 会保留原始预测与上下文修订预测，以便审计。
- **相关性判断：高（工业预测 Agent）**。保留 raw/adjusted 两个产物是有价值的因果审计设计；仍需核验规则对不同领域的迁移、用户先验质量和上下文时间戳是否避免未来信息。

### 2026-09-23｜[TimeEvo: Failure-Driven Self-Evolution of a Time Series Agent](https://arxiv.org/abs/2609.27277)

- **来源与日期**：arXiv v1，2026-09-23；作者关联代码为 [Muyiiiii/TimeEvo](https://github.com/Muyiiiii/TimeEvo)。
- **简短摘要**：从固定专家工具库的“人—Agent 工具失配”和通用自我修订的静默损害出发，按失败诊断聚类能力缺口、生成证据型工具，并通过配对准入门控决定是否加入工具库。作者在 10 个时序 QA 任务、3 个 backbone 上报告整体提升。
- **相关性判断：高（自演化时序 Agent / 工具治理）**。它把 Agent 的改进对象明确成可检验工具而非自由文本反思；关键复现项是准入试验的数据隔离、工具生成安全性和负向修改的可回滚性。

### 2026-08-26｜[LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- **来源与日期**：arXiv v1，2026-08-26。
- **简短摘要**：按任务需求梳理 LLM 时序 Agent 的架构、工具使用与记忆设计，并归纳预测、分析、运维等任务的开放问题。
- **相关性判断：中高（研究地图）**。它不是新系统，但可用作筛选 Agent 论文时的任务分类表；具体结论应回到原始实验和统一的滚动回测验证。

## 3. 时间序列 reasoning 模型最新研究

### 2026-11-04｜[TSFM Meets LLM: Context as Covariates](https://arxiv.org/abs/2611.05515)

- **来源与日期**：arXiv v1，2026-11-03 19:13 UTC（北京时间 11 月 4 日）。
- **简短摘要**：提出 CoCo：LLM 将新闻、报告、注释等文本的推理蒸馏成数值化的预测值与置信度协变量，再交给 TSFM；先以与协变量带来预测改进挂钩的 GRPO 微调 LLM，再微调 TSFM。作者称合成多模态训练语料可迁移至金融、经济、天气、交通和安全基准。
- **相关性判断：高（TSFM+LLM reasoning）**。它避免让 LLM 直接替代数值 forecaster，而让推理产物成为可审计协变量；必须逐条回放文本发布时间、信息可得性与置信度校准，防止文本语料和标注生成把未来信息带入训练或测试。

### 2026-09-29｜[Loss-Guided Pretraining Data Selection for TSFMs](https://arxiv.org/abs/2609.37255)

- **来源与日期**：arXiv v1，2026-09-29。
- **简短摘要**：使用参考 forecaster 的归一化损失为预训练窗口打分，按数据源保留中间难度区间，以更少数据取得优于随机采样、甚至优于全量训练的相对 MASE/CRPS；并分析跨规模、跨架构排序的一致性。
- **相关性判断：中高（reasoning 数据治理）**。不是显式 CoT 模型，却为 reasoning/Agent 的时序训练数据挑选提供可检验信号；应防范以同类模型损失筛选后缩窄极端事件与罕见模式。

### 2026-09-24｜[TimeBraid: Unifying Time Series and Language for Understanding and Forecasting](https://arxiv.org/abs/2609.29792)

- **来源与日期**：arXiv v1，2026-09-24。
- **简短摘要**：通过交错的全局残差注意力层对齐预训练语言模型与 TSFM，使同一表示空间兼具连续信号感知、零样本预测、语言理解与生成；作者同时提供代码、权重和数据链接。
- **相关性判断：高（统一多模态 reasoning）**。比简单把数值序列文本化更贴近可学习的跨模态接口；建议重点测试文本上下文是否真正可用、是否发生时间泄漏，以及预测收益是否超越 TSFM 与 LLM 的简单集成。

### 日期不确定（项目更新 2026-08-19）｜[TS-Reasoner: Aligning Time Series Foundation Models with LLM Reasoning](https://arxiv.org/abs/2510.03519)

- **来源与日期**：项目资料标注预印本更新/发布为 2026-08-19；arXiv 编号为 2025 年首发，故**日期归类不确定、降低优先级**。
- **简短摘要**：冻结预训练 TSFM，将其表征与 LLM 对齐，再进行 instruction fine-tuning，试图同时获得低层动态建模与外部知识/推理能力；报告强调比同规模 LLM、VLM 与时序 LLM 更具数据效率。
- **相关性判断：高（TSFM+reasoning 融合）**。架构上直接对应“预测工具 + reasoning 模块”的 Agent 设计；由于本窗口只确认到更新日期，读者应先核对版本差异、数据截止日和是否有独立代码复现。

## 4. 光伏功率预测最新研究

### 2026-10-30｜[IMPACT: Inverter-Informed Multimodal Learning for Photovoltaic Generation Forecasting](https://arxiv.org/abs/2610.40418)

- **来源与日期**：arXiv v1，2026-10-29 16:44 UTC（北京时间 2026-10-30）。
- **简短摘要**：面向 10–110 分钟概率光伏预测，联合电站历史、逆变器层云运动图、太阳几何与气象信息，并以在线自适应共形校准输出分位数。作者报告其在所测设置优于 14 个基线。
- **相关性判断：高（PV 预测工具 / 调度 Agent）**。多模态输入和区间校准适合把不确定性传递到储能、告警与调度决策；落地回放必须按真实 forecast origin 对齐云图与气象到达延迟。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

> 项目以公开仓库说明和近期公开检索结果筛选；“最新”优先指本窗口内发布、版本更新或论文/项目动态，并不等同于仓库初建日期。

### 时间序列

#### 2026-10-14｜[ustc-time-series/CastClaw](https://github.com/ustc-time-series/CastClaw)

- **来源与日期**：官方仓库，2026-10-14 ICDM 2026 Demo 接收公告。
- **简短摘要**：面向工业 CSV 预测的交互式 Agent，包含规则学习、慢思考适配、可复用工作流和证据化评测；支持 ARIMA、AutoARIMA、ETS、Holt-Winters、Theta 等统计基线。
- **相关性判断：高（timeseries Agent + AutoML 工作流）**。是本轮最直接可评估的时序 Agent 项目；试运行应锁死滚动验证、基线调参预算和上下文截止时间。

#### 2026-09-23｜[Muyiiiii/TimeEvo](https://github.com/Muyiiiii/TimeEvo)

- **来源与日期**：对应预印本 arXiv v1，2026-09-23；仓库可见但项目页显示仍处于早期代码发布状态。
- **简短摘要**：为时序 QA Agent 做失败诊断、工具合成和准入评测的研究代码入口。
- **相关性判断：高（时序 Agent 自改进）**。适合作为“新增工具是否真的帮助某任务”的实验范式；当前更像研究原型，不能把论文结论视作生产就绪。

#### 2026-08-31｜[google-research/timesfm](https://github.com/google-research/timesfm)

- **来源与日期**：Google 官方 TimesFM-3 发布，2026-08-31。
- **简短摘要**：TimesFM 3.0 的开源实现与使用入口，覆盖多变量、协变量与概率预测，并可作为 Agent 调用的基础预测器。
- **相关性判断：高（foundation-model 工具）**。对 Agent 而言应将它当作可替换候选而非默认真值；需与 Chronos、Tabby 和统计基线做统一成本—精度比较。

#### 日期不确定（近月活跃）｜[temporal-community/temporal-agent-harness](https://github.com/temporal-community/temporal-agent-harness)

- **来源与日期**：官方仓库近期抓取与 README；示例建议使用 `0.8.0` 发布标签。未从当前公开页可靠确认首发日期，故不以其作为新建项目计数。
- **简短摘要**：基于 Temporal 的持久化多 Agent harness，覆盖可恢复执行、审批、回放、类型化会话与工具调用；README 明示为 pre-1.0 实验性项目。
- **相关性判断：中高（长时序实验编排）**。适合借鉴到长运行回测、人工审批和失败恢复；它不提供时序数据版本、rolling-origin 评测或 AutoML 策略，需自行补齐。

#### 日期不确定（近月活跃）｜[Diaugeia/TSEval](https://github.com/Diaugeia/TSEval)

- **来源与日期**：官方仓库近期说明页；仓库以可提交、可审计的 leaderboard 方式运营，无法在当前页面可靠确认首发日期。
- **简短摘要**：公开时序预测 leaderboard，把每条 Agent 轨迹、验证结果和报告作为可检查提交，通过 CI 验证和聚合。
- **相关性判断：高（Agent/forecast harness 评测）**。其“结果连同轨迹与证据提交”的思路可降低 Agent 选择偏差；需要检查任务覆盖、隐藏测试与计算预算是否足够防止 leaderboard 过拟合。

### 光伏功率预测

- **本轮结果：无独立新项目。** 使用 `photovoltaic power forecasting`、`solar power forecasting`、`PV forecasting` 与 `photovoltaic generation forecasting` 在 GitHub/Hugging Face 和项目页交叉检索，未找到首发日期可确认且在窗口内、比 IMPACT 官方代码/论文更值得优先跟踪的独立项目。为避免以无验证的新仓库凑数，本栏保留空结果；下一轮应继续监控 IMPACT 是否发布官方代码。

## 6. 今日观察与行动建议

- **从单变量预测器转向可调用的多变量工具**：TimesFM-3 与 Tabby 使“模型选择—协变量可得性—区间校准”成为 Agent 规划步骤，而非固定后端。
- **自改进必须有准入试验**：TimeEvo 的核心价值是让新工具通过配对证据门控；建议将其最小化为隔离的训练/验证/留出时段、失败回滚和成本上限。
- **reasoning 论文的第一审计项仍是时间**：TS-Reasoner 与 TimeBraid 这类跨模态模型，应优先审查文本/事件和数值的 as-of 时间戳，随后才看聚合指标。

## 7. 检索与筛选说明

- 优先检索 arXiv、OpenReview、Google Research 官方博客、官方 GitHub、Hugging Face、DailyArXiv 的公开 `Time Series` 更新与项目说明；关键词覆盖 `time series foundation model`、`time series agent`、`time series reasoning`、`harness` 与 AutoML。
- 已直接复核 [DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)：其 `Last update` 为 2026-11-05，`Time Series` 栏目包含本轮新增的 CATF 与 GlucoAgent（均标为 2026-11-03）；TSFM Meets LLM 未见于该栏目，仍以 arXiv v1 为准。未将该聚合页的更新日期误当论文首发日期。
- 已排除明显早于 2026-08-05 的首发研究；对“只有更新日期、首发日期在窗口外或无法确认”的 TS-Reasoner 和通用 harness，已明确降级，不将其伪装为全新研究。
- 访问时间：2026-11-05 08:06–15:39（Asia/Shanghai）。

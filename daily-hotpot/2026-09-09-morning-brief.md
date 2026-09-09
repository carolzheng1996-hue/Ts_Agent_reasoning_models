# 2026-09-09 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索日期：2026-09-09；资料核验截至 08:51 CST（Asia/Shanghai）。时间窗口：2026-06-09 至检索时点。论文以 arXiv v1 或出版商公开发表日期为准，项目以平台创建日期为准；修订、模型卡内容日期与最近推送单独说明。来源时间保留 UTC。今天是周三，不生成周报。

增量参照：2026-09-08 晨报的本地补跑版本及自动化记忆。“新增”表示本报首次收录，不等于今日发布；以下是增量精选与少量持续跟踪，不重复整个三个月目录。

## 今日重点

- **新增模型：IBM Granite PatchTST-FM-r2**。模型仓库创建于 8 月 7 日，当前模型卡讨论截至 8 月 31 日的结果；约 385M 参数、8192 上下文、99 分位数，适合作为预测 Agent 的概率预测候选。官方排名主张带有筛选条件，且模型卡注明结果仍在待合并 PR 中。
- **新增 GitHub：harshulbafna008-code/automl-agent**，9 月 8 日创建，具有本地 Ollama 规划—执行—反思闭环和实际代码。已核查调参实现使用普通交叉验证，不能直接充当时序无泄漏评测。
- **新增光伏研究：PPO 动态选模**，出版商确认 9 月 3 日发表；将天气场景映射到模型选择策略，与时序 AutoML/Agent 的选模动作直接相关。
- **论文增量有限**：arXiv 增量 API 返回 16 条，最新首发为 9 月 4 日；实时 DailyArXiv 更新至 9 月 9 日。未确认 9 月 7–9 日更晚的直接时序 foundation / Agent / reasoning 首发，不据此断言该期间没有新论文。

## 1. 时间序列基础模型最新研究

### [2026-09-04] Towards Scaling Quantum Fine-Tuning of Foundational Time Series Models for Classification — 持续跟踪

- 日期与来源：arXiv v1 2026-09-04 17:56 UTC；[论文](https://arxiv.org/abs/2609.05408)。
- 摘要：以 Chronos 表征和量子分类头进行电网事件分类，研究输入信息带宽如何限制扩展收益，并用附加 wing 电路引入更多特征。
- 相关性：TSFM 高，Agent/reasoning 低；属于表征迁移和分类研究，不能将其收益直接解释为预测或光伏调度提升。昨日已收录，今日未确认新版本。

### [2026-08-07] IBM Granite TimeSeries PatchTST-FM-r2 — 新增模型发布记录

- 日期与来源：HuggingFace API `createdAt=2026-08-07T14:32:26Z`；[官方模型卡](https://huggingface.co/ibm-granite/granite-timeseries-patchtst-fm-r2)、[模型 API](https://huggingface.co/api/models/ibm-granite/granite-timeseries-patchtst-fm-r2)、[实现仓库](https://github.com/ibm-granite/granite-tsfm)。模型卡写明性能统计截至 2026-08-31；精确首次权重公开日未独立核验，创建日不等同于权重发布日。
- 摘要：在 PatchTST-FM 系列中引入交替卷积核的 Conformer 块、重叠 patch 与 overlap-and-add 预测，并扩充合成训练数据。模型约 385M 参数，训练上下文 8192，输出覆盖 99 个分位数。
- 相关性：TSFM 高，可作为 Agent 工具库中的零样本概率预测器；没有由此证明显式 reasoning 或自主建模能力。模型发布条目仅在本处介绍，项目栏不重复。
- 证据边界：模型卡称在“可复现、零样本、排除测试泄漏”的 GIFT-Eval 子集中位居第二，同时注明结果在待合并 PR 中；本报未复跑或核对榜单 PR，不当作已独立确认的最终排名。所引用基础论文编号为 2602.06909，超出首发窗口，不计作本期新论文。

## 2. 时间序列建模 Agent 最新研究

本轮未确认新的直接 forecasting LLM Agent 首发。保留已核实系统，并在第 5 栏补入采用强化学习 Agent 的光伏动态选模研究。

### [2026-08-31] A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting（CastClaw）— 持续跟踪

- 日期与来源：arXiv v1 2026-08-31 15:36 UTC；[论文](https://arxiv.org/abs/2608.30976)。本轮官方页仍只列 v1。
- 摘要：在同一 runtime 连接数据、预测器、分析工具、用户约束与版本化执行记录。系统依据证据保留、修改或升级预测，并以明确停止条件结束，输出预测和执行报告。
- 相关性：Agent/harness 高；适合对照预测质量检查、人工反馈与轨迹记录接口。论文实验涉及电价和离线电力负荷，未证明光伏适用性。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-04] WearableQA — 持续跟踪的推理基准

- 日期与来源：arXiv v1 2026-09-04 17:52 UTC；[论文](https://arxiv.org/abs/2609.05405)。
- 摘要：基于 200 名真实用户的长期可穿戴记录、血液指标和人口统计信息构建 4,084 道十选一题，区分数据计算与健康解释、单信号与跨信号推理。
- 相关性：reasoning 高；可借鉴长期上下文和多信号证据的任务定义。它是基准，不是新训练的推理模型；未将医疗领域表现外推到能源预测。

### [2026-09-04] Beyond Stationarity in Time Series: Discovering Causal Structures and Latent Regimes via Markov Blankets — 新增相邻方法，次优先级

- 日期与来源：arXiv v1 2026-09-04 13:52 UTC；[论文](https://arxiv.org/abs/2609.05150)。作者标注被 ECML PKDD 2026 的 AALTD Workshop 接收。
- 摘要：RCBNB-MB 交替划分潜在机制区间并学习区间内因果图，以 Markov blanket 保留预测信息，处理因果结构随时间变化的问题。
- 相关性：因果分析高，LLM reasoning/Agent 中低。可将机制切换与局部因果图作为 Agent 的诊断工具，这是本报的应用推断；该算法本身没有展示 LLM 推理链或工具调用闭环。

### [2026-06-20] TSCognition / TSAlign — 持续跟踪的显式模型路线

- 日期与来源：arXiv v1 2026-06-20；[论文](https://arxiv.org/abs/2606.22126)、[作者代码](https://github.com/EIT-NLP/CognitiveTSR)。
- 摘要：TSCognition 将任务划分为解码、语义 grounding、推断、外推和行动；TSAlign 将 patch 级时序表征通过门控残差注入与多变量融合对齐到 LLM 语义空间。
- 相关性：reasoning 高，同时包含任务设计和模型方法；可用于区分“预测准确”与“依赖证据进行解释和行动”。属于窗口内历史重点，今日不计新增。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（含可迁移的 ML / AutoML / harness）

#### [2026-09-08] harshulbafna008-code/automl-agent — 新增

- 日期与来源：创建 2026-09-08 11:02 UTC；最近推送 11:13 UTC；[GitHub](https://github.com/harshulbafna008-code/automl-agent)、[官方 API](https://api.github.com/repos/harshulbafna008-code/automl-agent)。
- 摘要：本地 Ollama LLM 输出结构化方案，由白名单估计器和 sklearn Pipeline 执行随机搜索，再基于排行榜进行反思与重规划；包含轮次限制、失败回退和结果报告。目录中确有 profiler、planner、orchestrator、optimizer、示例和测试文件。
- 相关性：AutoML/Agent 高，时序中。已读取 [optimizer.py](https://github.com/harshulbafna008-code/automl-agent/blob/main/src/automl_agent/tuning/optimizer.py)：`RandomizedSearchCV` 和 `cross_val_score` 均传入整数 `cv_folds`，没有显式时间切分器。时序迁移需增加滚动验证及按预测时点限定特征。
- 成熟度判断：有代码，尚未运行。README 的多数据集 benchmark harness 仍在路线图；仓库描述所称“匹敌或超过传统 AutoML”未得到本轮材料充分支持，不能作为性能结论。

#### [2026-08-19] Mohith26/modelwatch — 新增发现，近期活跃

- 日期与来源：创建 2026-08-19 17:26 UTC；最近推送 2026-09-08 12:19 UTC；[GitHub](https://github.com/Mohith26/modelwatch)、[官方 API](https://api.github.com/repos/Mohith26/modelwatch)。
- 摘要：提供 PSI/KS 漂移检测、固定评测集回归检查、标签缺失时的数据健康信号，以及 FastAPI/Prometheus 输出。通过在 UCI Adult 留出数据中注入已知漂移来评估检测器。
- 相关性：harness 中高，直接时序建模中低；可借鉴 Agent 的重训触发和模型替换检查。README 明确尚无重训闭环，实验是表格数据上的人工注入漂移，不能视为真实时序漂移效果。推送日期只表示活动，未做提交差分。

#### [2026-08-18] faheemkhaskheli9/timeseries-data-agent — 新增发现，低优先级

- 日期与来源：创建 2026-08-18 17:39 UTC；最近推送 2026-09-07 18:01 UTC；[GitHub](https://github.com/faheemkhaskheli9/timeseries-data-agent)、[官方 API](https://api.github.com/repos/faheemkhaskheli9/timeseries-data-agent)。
- 摘要：规划自然语言提问、Pandas function calling、可视化与预测；当前 README 标注 Phase 1，实际说明主要集中在 CSV/JSON 加载、剖析和 Streamlit 预览。
- 相关性：主题高、当前可用性低；不能将功能清单当成完整 Agent 已实现的证据。尚无完整预测与 reasoning 评测结果。

HuggingFace 本轮新增有效候选是第 1 栏的 IBM 模型，已去重；其余名称检索结果未确认更高相关的新 foundation/reasoning 发布。

### 4.2 光伏功率预测

#### [2026-09-04] siwekk/PV-probabilistic-day-ahead-forecasting — 日期与活跃度复核

- 日期与来源：创建 2026-09-04 08:03 UTC；最近推送 08:20 UTC，本轮未发现时间变化；[GitHub](https://github.com/siwekk/PV-probabilistic-day-ahead-forecasting)、[官方 API](https://api.github.com/repos/siwekk/PV-probabilistic-day-ahead-forecasting)。
- 摘要：官方描述定位为“概率日前光伏预测中的硬可行性约束和软物理信息”的复现实验仓库；昨日已阅读其 README，今日仅复核元数据。
- 相关性：光伏预测高，Agent 中；适合作为概率评测与物理约束模块的候选。配套论文首次公开日期仍不确定，未另算新论文。

GitHub `photovoltaic forecasting created:2026-09-08..2026-09-09` 返回 0 条；HuggingFace 的 photovoltaic 名称检索主要命中组件检测而非功率预测模型，未纳入。

## 5. 光伏功率预测最新研究

### [2026-09-03] A context-aware dynamic model selection framework based on proximal policy optimization for day-ahead PV power forecasting — 新增

- 日期与来源：Scientific Reports 公开发表 2026-09-03；接受日期 2026-08-31；[出版商原文](https://www.nature.com/articles/s41598-026-69955-9)。页面为已接受研究的提前公开版本，后续还会编辑；更早预印本首发日期未确认，不宣称这是研究第一次公开。
- 摘要：先将气象时序特征聚类为晴、局部多云、阴和雨四类，再训练 PPO 策略依据目标日的日前气象特征动态选择模型库中的预测器。作者报告相对静态最优策略总体 RMSE 降低 13.97%。
- 相关性：光伏/自动选模高；Agent 指强化学习策略，不是 LLM Agent，也未展示语言推理链。可作为“直接用上下文选模”与“LLM 规划后选模”的实验对照，这是本报推断。实验数字为作者报告，未复现。

## 6. DailyArXiv、会议来源与日期过滤

- [DailyArXiv 实时 master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 经直接请求确认为 **Last update: 2026-09-09**；其 Time Series 栏最上方仍为 9 月 4 日条目。网页检索工具一度返回 5 月 29 日缓存，本期依据实时请求，不以旧缓存判断今日更新。
- 新增相邻方法 RCBNB-MB；WearableQA、PRICE、MMTClinic 与 Chronos 量子微调已见昨日简报。今日不重复 PRICE、MMTClinic 的完整介绍，也不将它们重新计入新增。
- ACL 补检命中 [STReasoner](https://aclanthology.org/2026.acl-long.702/) 与 [Time-RA](https://aclanthology.org/2026.findings-acl.562/) 的 2026 年 7 月会议版本，但分别有 [2026-01-06](https://arxiv.org/abs/2601.03248) 与 [2025-07-20](https://arxiv.org/abs/2507.15066) 的早期首发；按本报首发窗口排除，不包装为新研究。
- [Chat-TS](https://aclanthology.org/2026.eacl-long.263/) 为 2026 年 3 月会议论文；[MulTiCast](https://ojs.aaai.org/index.php/AAAI/article/view/42371) 官方发表日期 2026-03-14，均超窗。
- OpenReview/TMLR 检索命中旧综述的会议/期刊版本；ICML/PMLR、NeurIPS、KDD 和 AAAI 定向搜索未带来已核验的窗口内新增主条目。未逐篇遍历会议录，不将未命中写成所有会议均无新成果。

## 7. 检索记录与限制

| 来源 | 实际查询与覆盖 | 本轮结果 |
|---|---|---|
| arXiv API | `(all:"time series" OR all:"photovoltaic forecasting" OR all:"solar power forecasting") AND submittedDate:[202609040000 TO 202609092359]`；按首发倒序，最多 60 项 | 返回 16 条，均为 9 月 4 日；上界包含检索后时段，但只使用实际已返回资料 |
| arXiv 网页搜索 | 2609 + time series + foundation/agent/reasoning；另查 Sep 7、Sep 8 | 未确认更晚首发；关键词与索引可能漏检 |
| GitHub API | `timeseries agent created:2026-06-09..2026-09-09`，按 updated 取前 5 | 共 11 条；README 将数据加载原型与完整 Agent 区分 |
| GitHub API | `automl agent created:2026-09-08..2026-09-09` | 共 1 条，已核查 README、代码目录和 optimizer |
| GitHub API | `harness machine-learning created:2026-06-09..2026-09-09`，按 updated 取前 5 | 共 131 条，精选 ModelWatch；其余多为通用 LLM/RAG 评测，相对主题较远；非全量审计 |
| GitHub / HuggingFace | 光伏增量搜索、指定仓库元数据；HF time-series / photovoltaic 按创建时间各取前 5 | 补入 IBM 官方模型卡；未确认光伏新增预测模型 |
| 论文官方来源 | OpenReview、ACL、PMLR、ICML、NeurIPS、KDD、AAAI 与光伏出版商关键词搜索 | 新增 9 月 3 日 Scientific Reports；排除多项旧首发 |

部分命令最初受到网络沙箱限制或超时，随后通过获准的公开 HTTP 请求和网页工具完成重点核验。未运行候选项目、下载模型权重或复现实验；所有性能表述均保留作者归属。新项目创建日只用于项目时间筛选，不替代论文日期或完整实现证明。

## 今日建议

优先把 PatchTST-FM-r2 列入零样本概率预测候选，并核对其评测提交状态；以 PPO 光伏动态选模为自动选模基线。若复用新 AutoML Agent，首先替换普通交叉验证并补充滚动评测，再比较反思循环是否真的提升预测质量与搜索效率。

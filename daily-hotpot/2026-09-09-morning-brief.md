# 2026-09-09 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索日期：2026-09-09；上午版核验截至 08:51 CST；本次补检 15:30–15:39 CST（Asia/Shanghai）。时间窗口：2026-06-09 至检索时点。论文以 arXiv v1 或出版商公开发表日期为准，项目以平台创建日期为准；修订、模型卡内容日期与最近推送单独说明。来源时间保留 UTC。今天是周三，不生成周报。

增量参照：2026-09-08 晨报及本日 08:51 上午版。本次保留上午版已核实条目，新增标记为“下午补检”；未标记者沿用上午核验，不表示本轮全部重新读取。“新增”表示本报首次收录，不等于今日发布；以下是增量精选与少量持续跟踪，不重复整个三个月目录。

## 今日重点

- **新增模型：IBM Granite PatchTST-FM-r2**。模型仓库创建于 8 月 7 日，当前模型卡讨论截至 8 月 31 日的结果；约 385M 参数、8192 上下文、99 分位数，适合作为预测 Agent 的概率预测候选。官方排名主张带有筛选条件，且模型卡注明结果仍在待合并 PR 中。
- **新增 GitHub：harshulbafna008-code/automl-agent**，9 月 8 日创建，具有本地 Ollama 规划—执行—反思闭环和实际代码。已核查调参实现使用普通交叉验证，不能直接充当时序无泄漏评测。
- **新增光伏研究：PPO 动态选模**，出版商确认 9 月 3 日发表；将天气场景映射到模型选择策略，与时序 AutoML/Agent 的选模动作直接相关。
- **下午补检纠正覆盖不足**：arXiv 官方 API 新检出 9 月 8 日 IPM-FM、9 月 6 日 Chronos-2 电网负荷评测，以及 9 月 5 日 SolarBench、STQA 和时序记忆综述。DailyArXiv 虽标注 9 月 9 日更新，当前 Time Series 列表仍未覆盖这些论文。
- **本次优先阅读**：SolarBench 的跨站点与快速波动评测、Chronos-2 的零样本/微调对照，以及 STQA 的检索—预测—推理协同。STQA 代码仓库早于本窗口创建，不能将本次 arXiv 首发当作整个项目首次公开。

## 1. 时间序列基础模型最新研究

### [2026-09-08] IPM-FM: A Foundation Model with Consensus Feature Selection for Industrial Process Monitoring — 下午补检

- 日期与来源：arXiv v1 2026-09-08 07:43 UTC；[官方论文](https://arxiv.org/abs/2609.08375)。
- 摘要：以自监督 Informer 预训练工业过程表征，结合多准则特征筛选、递归滞后回归头和校准 MC dropout。在七年加氢处理装置数据的柴油闪点软测量上，作者报告相对最强传统基线 RMSE 降低 8.3%，95% 预测区间实际覆盖 97%。
- 相关性：工业 TSFM 高，直接 forecasting Agent/reasoning 中低。可借鉴少标签适配与区间校准；目前证据集中于特定工业过程，不能据此认定具备跨域通用基础模型能力或光伏效果。

### [2026-09-06] Assessing Covariate-Informed Grid Load Forecasting with a Time-Series Foundation Model — 下午补检

- 日期与来源：arXiv v1 2026-09-06 15:09 UTC；[官方论文](https://arxiv.org/abs/2609.06656)。
- 摘要：在 ISO New England 和 ENTSO-E 数据上比较 Chronos-2 与任务专用深度模型，覆盖多变量、外生协变量和任务微调。作者发现微调显著改善短期预测，而零样本表现落后于专用模型，且误差随预测步数增加更快。
- 相关性：TSFM/电力预测高。对光伏研究的启示是分别评估零样本、微调和协变量贡献，并按预测时距报告结果；负荷任务结果不能直接外推到光伏。

### [2026-09-05] Cadence: Error-Bounded Lossy Compression of Demand Time Series with a Time-Series Foundation Model — 下午补检，次优先级

- 日期与来源：arXiv v1 2026-09-05 10:25 UTC；[官方论文](https://arxiv.org/abs/2609.06008)。
- 摘要：把论文所用 TimesFM-3 与自适应算术编码组合为逐样本误差有界的有损压缩器，报告需求时序上的压缩收益及跨批量/设备预测不完全确定的问题；在另一类科学数据上未获收益。
- 相关性：TSFM 中高、直接建模 Agent 中。可关注长期记忆的存储成本与回放一致性；论文使用的模型版本不等于本报独立核实了模型发布，也不能把压缩收益当成预测精度提升。

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

下午补检新增时序记忆综述；STQA 的 SQFRS 将检索、预测工具与推理串联，详见第 3 栏。第 5 栏还包含强化学习光伏动态选模。

### [2026-09-05] Memory in Deep Time-Series Models — 下午补检，综述

- 日期与来源：arXiv v1 2026-09-05 10:19 UTC；[官方论文](https://arxiv.org/abs/2609.06006)。
- 摘要：从参数/固定状态内部记忆到外部可寻址记忆，统一讨论显式模块、检索增强和 Agent 维护的存储，按保留、写入、读取、持久化及遗忘组织研究问题。
- 相关性：Agent/harness 高，基础模型中高。适合设计预测 Agent 的历史案例记忆与漂移后修订策略；这是概念框架与综述，未提供一个新 Agent 在标准预测任务上的胜出证据。

### [2026-08-31] A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting（CastClaw）— 持续跟踪

- 日期与来源：arXiv v1 2026-08-31 15:36 UTC；[论文](https://arxiv.org/abs/2608.30976)。本轮官方页仍只列 v1。
- 摘要：在同一 runtime 连接数据、预测器、分析工具、用户约束与版本化执行记录。系统依据证据保留、修改或升级预测，并以明确停止条件结束，输出预测和执行报告。
- 相关性：Agent/harness 高；适合对照预测质量检查、人工反馈与轨迹记录接口。论文实验涉及电价和离线电力负荷，未证明光伏适用性。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-05] STQA: A Benchmark for Stock-Focused Tabular Question Answering over Historical and Forecasted Data — 下午补检

- 日期与来源：arXiv v1 2026-09-05 14:32 UTC；[官方论文](https://arxiv.org/abs/2609.06117)、[作者代码与数据](https://github.com/xuxubaobaoan/STQA_Project)、[仓库日期](https://api.github.com/repos/xuxubaobaoan/STQA_Project)。
- 摘要：覆盖 4,417 只股票、31,400 个问答，区分历史查询、数值预测和基于预测的推理。配套 SQFRS 用 Agent 协调 SQL 检索与时序预测工具；作者指出工具协同及不确定性推理是瓶颈。
- 相关性：Agent/reasoning 高；可将“查历史—调用预测器—形成解释”作为能源问答评测模板，此迁移为本报推断。它包含基准和系统，不等于新预训练 reasoning 模型。
- 日期与可用性边界：仓库创建于 **2025-12-02**，最近推送 2026-08-25；因此只将 9 月 5 日记为 arXiv v1，不列为新 GitHub 项目。研究更早公开日期不确定，降低“全新成果”的优先级。README 自称 Findings of EMNLP 2026 接收，本轮未独立核验会议记录；没有下载或运行数据与检查点。

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

#### [2026-08-10] doccodyblue/ha-pvstrings — 下午补检，窗口内项目

- 日期与来源：创建 2026-08-10 14:15 UTC；最近推送 2026-09-07 23:19 UTC；[GitHub](https://github.com/doccodyblue/ha-pvstrings)、[官方 API](https://api.github.com/repos/doccodyblue/ha-pvstrings)。
- 摘要：Home Assistant 光伏组串级预测：用 pvlib 按每串朝向、倾角和额定容量建立物理潜力，再学习残差修正；README 区分日前预测与当前修正的评测，并关注限发与几何变更。
- 相关性：光伏高，Agent 中。适合作为物理基线、在线残差与分组评测的工程参考；不是 LLM Agent 或 TSFM，未运行验证。

上午的 GitHub `photovoltaic forecasting created:2026-09-08..2026-09-09` 返回 0 条；HuggingFace 的 photovoltaic 名称检索主要命中组件检测而非功率预测模型，未纳入。

## 5. 光伏功率预测最新研究

### [2026-09-05] SolarBench: A global solar energy nowcasting benchmark — 下午补检，重点

- 日期与来源：arXiv v1 2026-09-05 17:09 UTC；[官方论文](https://arxiv.org/abs/2609.06187)。
- 摘要：统一 11 个站点、跨度十年的六百多万张天空和卫星图像，配合辐照度或光伏输出与大气辅助数据。作者提供基准与工具箱，分析平均精度与快速太阳波动捕捉能力的差距，以及跨云况和新站点少数据适配。
- 相关性：光伏/多模态时序高。最值得借鉴的是站点迁移和爬坡/波动评测，可用于未来预测 Agent 的选模评测；本轮未下载数据核查许可、划分与工具箱完整性，不把论文的开放声明视作已完成复现。

### [2026-09-03] CloudCast v2（From Nowcasting to Forecasting: Adapting a Reanalysis-Trained）— 下午补检，上游天气方法

- 日期与来源：arXiv v1 2026-09-03 12:30 UTC；[官方论文](https://arxiv.org/abs/2609.03763)。官方 API 当前标题即以上文字，末尾不完整，未自行补全。
- 摘要：先用欧洲区域再分析学习云演化，再通过条件 flow matching 适配卫星云场和 NWP 输入，预测未来 12 小时云量。作者报告相对 CloudCast v1 的 1–12 小时 MAE 下降约 10%。
- 相关性：光伏上游协变量高，直接功率预测中；它预测云量而非光伏功率，不能把云量改进幅度当作功率改进。

### [2026-09-03] A context-aware dynamic model selection framework based on proximal policy optimization for day-ahead PV power forecasting — 新增

- 日期与来源：Scientific Reports 公开发表 2026-09-03；接受日期 2026-08-31；[出版商原文](https://www.nature.com/articles/s41598-026-69955-9)。页面为已接受研究的提前公开版本，后续还会编辑；更早预印本首发日期未确认，不宣称这是研究第一次公开。
- 摘要：先将气象时序特征聚类为晴、局部多云、阴和雨四类，再训练 PPO 策略依据目标日的日前气象特征动态选择模型库中的预测器。作者报告相对静态最优策略总体 RMSE 降低 13.97%。
- 相关性：光伏/自动选模高；Agent 指强化学习策略，不是 LLM Agent，也未展示语言推理链。可作为“直接用上下文选模”与“LLM 规划后选模”的实验对照，这是本报推断。实验数字为作者报告，未复现。

### [2026-08-17] Hybrid multi-scale feature extraction and parameter optimization for day-ahead photovoltaic power forecasting — 下午补检

- 日期与来源：Scientific Reports 公开发表 2026-08-17；[出版商原文](https://www.nature.com/articles/s41598-026-67336-w)。接受日期 8 月 13 日，页面标注提前公开版本；更早预印本日期未核实。
- 摘要：组合历史功率、NWP 和空间气象特征，以遗传算法优化 XGBoost，并考察气象变量筛选和更高空间分辨率的贡献。
- 相关性：光伏/AutoML 高，显式 reasoning 低。适合构成特征筛选与调参的传统对照；摘要未给出可统一引用的完整数值，不补写性能幅度。

## 6. DailyArXiv、会议来源与日期过滤

- [DailyArXiv 实时 master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 经直接请求确认为 **Last update: 2026-09-09**；其 Time Series 栏最上方仍为 9 月 4 日条目。网页检索工具一度返回 5 月 29 日缓存，本期依据实时请求，不以旧缓存判断今日更新。
- 下午重新读取实时 README，Time Series 共 **71 条**，日期最靠前仍为 2026-09-04；IPM-FM、负荷协变量评测、SolarBench 与 STQA 来自 arXiv 独立补检。README 更新时间不等于各栏论文已同步至当日。
- 新增相邻方法 RCBNB-MB；WearableQA、PRICE、MMTClinic 与 Chronos 量子微调已见昨日简报。今日不重复 PRICE、MMTClinic 的完整介绍，也不将它们重新计入新增。
- ACL 补检命中 [STReasoner](https://aclanthology.org/2026.acl-long.702/) 与 [Time-RA](https://aclanthology.org/2026.findings-acl.562/) 的 2026 年 7 月会议版本，但分别有 [2026-01-06](https://arxiv.org/abs/2601.03248) 与 [2025-07-20](https://arxiv.org/abs/2507.15066) 的早期首发；按本报首发窗口排除，不包装为新研究。
- [Chat-TS](https://aclanthology.org/2026.eacl-long.263/) 为 2026 年 3 月会议论文；[MulTiCast](https://ojs.aaai.org/index.php/AAAI/article/view/42371) 官方发表日期 2026-03-14，均超窗。
- OpenReview/TMLR 检索命中旧综述的会议/期刊版本；ICML/PMLR、NeurIPS、KDD 和 AAAI 定向搜索未带来已核验的窗口内新增主条目。未逐篇遍历会议录，不将未命中写成所有会议均无新成果。

- 日期冲突复核（本轮以 arXiv 官方 API 的 published/updated 校验）：[MetaCaster](https://arxiv.org/abs/2608.23473) 首发 2026-08-24、README 2026-09-03 为修订；[TopoBrick](https://arxiv.org/abs/2607.06349) 首发 2026-07-07、README 2026-09-02 为修订。两者仍在窗口内，分别研究 meta-harness 少样本建模和 Agent 外生变量拓扑选择，与主题高度相关，作为已收录持续跟踪项，不重复计新增。
- [MoME](https://arxiv.org/abs/2601.21547) 首发 2026-01-29、README 2026-09-04 为 v2；[QABBA](https://arxiv.org/abs/2411.15209) 首发 2024-11-20、README 2026-09-01 为 v4。分别与多模态预测、符号时序输入相关，但首发超窗，降级排除。不能把修订日当作新论文日期。
- [CoSPOT](https://arxiv.org/abs/2609.02093) 为 2026-09-02 首发，组合频域提示支持在线预测，属 Agent 工具适配的相邻方法；已在前报收录，继续跟踪。光通信检索命中的 [多 Agent 光功率优化](https://arxiv.org/abs/2606.05795) 首发为 2026-06-04，超窗；[光储备池混沌预测](https://arxiv.org/abs/2609.02733) 首发 2026-09-02，但属于用光计算预测混沌序列，非光功率预测，未混入光伏栏目。

## 7. 检索记录与限制

| 来源 | 实际查询与覆盖 | 本轮结果 |
|---|---|---|
| arXiv API（上午记录） | `(all:"time series" OR all:"photovoltaic forecasting" OR all:"solar power forecasting") AND submittedDate:[202609040000 TO 202609092359]`；按首发倒序，最多 60 项 | 返回 16 条，均为 9 月 4 日；上界包含检索后时段，但只使用实际已返回资料 |
| arXiv 网页搜索 | 2609 + time series + foundation/agent/reasoning；另查 Sep 7、Sep 8 | 未确认更晚首发；关键词与索引可能漏检 |
| GitHub API | `timeseries agent created:2026-06-09..2026-09-09`，按 updated 取前 5 | 共 11 条；README 将数据加载原型与完整 Agent 区分 |
| GitHub API | `automl agent created:2026-09-08..2026-09-09` | 共 1 条，已核查 README、代码目录和 optimizer |
| GitHub API | `harness machine-learning created:2026-06-09..2026-09-09`，按 updated 取前 5 | 共 131 条，精选 ModelWatch；其余多为通用 LLM/RAG 评测，相对主题较远；非全量审计 |
| GitHub / HuggingFace | 光伏增量搜索、指定仓库元数据；HF time-series / photovoltaic 按创建时间各取前 5 | 补入 IBM 官方模型卡；未确认光伏新增预测模型 |
| 论文官方来源 | OpenReview、ACL、PMLR、ICML、NeurIPS、KDD、AAAI 与光伏出版商关键词搜索 | 新增 9 月 3 日 Scientific Reports；排除多项旧首发 |

部分命令最初受到网络沙箱限制或超时，随后通过获准的公开 HTTP 请求和网页工具完成重点核验。未运行候选项目、下载模型权重或复现实验；所有性能表述均保留作者归属。新项目创建日只用于项目时间筛选，不替代论文日期或完整实现证明。

### 下午检索补充（15:30–15:39 CST）

- arXiv 官方 API：在 2026-06-09 至检索日窗口，以 `time series` 与 agent/reasoning/foundation model 组合，及 photovoltaic/solar power 与 forecasting 组合，分别按首发倒序取前 8 条，再读取 7 篇新增候选的完整摘要和版本元数据。确认上午查询的“最新为 9 月 4 日”是该次返回覆盖，不是客观最新日期；已修正今日重点。
- GitHub 官方搜索：`timeseries agent` 返回 11 条；`time-series agent` 返回 154 条，分别按更新取前 5；AutoML Agent 在 9 月 7–9 日创建共 4 条；光伏预测在完整窗口共 52 条，按更新取前 5。排除本晨报仓库自身；带括号 OR 的初始查询发生泛匹配，已弃用并拆开重查，不以该结果计数。
- 复核新 AutoML README、目录和 optimizer 代码；读取 ha-pvstrings README 与元数据。推送时间只表示活动，没有据此宣称新功能。STQA 论文与代码去重，旧仓库未列为新项目。
- HuggingFace/机构博客补检：[IBM Research 官方文章](https://huggingface.co/blog/ibm-research/real-time-intelligence) 日期 **2026-09-02**，介绍 Granite 时序模型在 Confluent Cloud/Flink 的 Early Access 集成，涵盖预测、异常与可回放流式结果。与预测 Agent 工具基础设施相关性高；这是部署动态，不是新论文或全部权重首次发布，不另重复列为模型条目。
- 另做 OpenReview、ACL、PMLR 与光伏出版商、光通信方向定向搜索；AI HOT 近期 time series 关键词没有返回线索。未逐一遍历各会议完整论文集；部分候选网页失败或 README 请求失败者未升级为确认条目。未确认首次公开日的出版商候选继续降级，不以卷期补造日期。

## 今日建议

先阅读 SolarBench 的跨站点/快速波动评测与 Chronos-2 负荷预测的微调对照，再核查 STQA 的工具协同任务。保留上午建议：把 PatchTST-FM-r2 列入零样本概率预测候选，并核对其评测提交状态；以 PPO 光伏动态选模为自动选模基线。若复用新 AutoML Agent，首先替换普通交叉验证并补充滚动评测，再比较反思循环是否真的提升预测质量与搜索效率。

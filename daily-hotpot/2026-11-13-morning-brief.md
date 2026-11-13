# 2026-11-13 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-13 09:10–09:28 CST（Asia/Shanghai）。
- 时间窗口：2026-08-13 至 2026-11-13（含首尾）。论文以 arXiv v1 / 正式公开日计；项目以 GitHub `created_at` 或明确的发布日志计。无法确认首发日期的项目只作为低优先级线索。
- 来源：arXiv、GitHub 官方 API / README、官方项目页、GitHub Topics，以及 `zezhishao/DailyArXiv` 公开 `master` 分支 README。所有效果数字均为作者或项目方声明，未独立复现。

## 今日结论

1. **TSFM 的近期重点是协变量、长上下文与数据版本。** `t₀` 直接把历史、过去协变量和已知未来协变量纳入零样本概率预测；VINTAGE-TS 则把数据修订带来的 hindsight bias 显式建模。
2. **Agent 研究的可操作增量在“任务型设计 + 持续反馈”。** 8 月的综述给出架构、工具和记忆的任务导向地图，9 月的 FASE 让预测兑现后的标签反馈更新策略；二者都要求严格的 as-of 回放。
3. **今日可确认的新 GitHub 信号偏工程化。** FoundationForecast、many-model-forecasting 在 10–11 月扩展了 TSFM 接入、协变量和预测区间；新增的 `blackboard-swarm-automl` 值得作为通用 ML-agent harness 观察，但不应直接外推到时序表现。

## 1. 时间序列基础模型

### [2026-10-04] [A Unified Scaling Law for Time Series Foundation Models](https://arxiv.org/abs/2610.05269)

- 来源与日期：arXiv v1，2026-10-04。
- 摘要：在 23 个数据集—频率任务、21 个 checkpoint 的 18,768 个实验单元上拟合容量、历史长度与预测期限的统一关系；作者报告其五参数规律可预测未参与拟合的 Toto 2.0 缩放曲线。
- 相关性判断：**高（foundation model / 模型选择）**。可将“追加上下文还是扩容模型”的资源分配变成 Agent 的可量化决策；结论依赖其评测域，仍须在目标业务回放验证。

### [2026-09-23] [Time-Series Foundation Models That Understand Data Revisions](https://arxiv.org/abs/2609.28576)

- 来源与日期：arXiv v1，2026-09-23。
- 摘要：VINTAGE-TS 区分观测发生时间与信息可得时间，并联合预测首次发布值及延迟后的修订值；提供 ALFRED 滚动评测、数据有效区间重建与冻结骨干 adapter。作者明确说明真实 ALFRED/Chronos-2 实验尚未执行。
- 相关性判断：**很高（TSFM 验证 / 防泄漏）**。它是 Agent 工具层应记录 vintage/as-of timestamp 的直接理由；当前主要价值是严谨评测设计，不应误读为已证实的模型优势。

### [2026-09-21] [$t_0$: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：发布 102M/256M 开放权重模型，按时间和变量轴交替注意力，利用目标历史、past covariates 与 known-future covariates 输出分位数预测；作者报告在 GIFT-Eval 与 fev-bench 上有竞争力的零样本结果。
- 相关性判断：**很高（TSFM / Agent 工具接口）**。为 Agent 的数值预测工具提供明确输入 schema；必须在运行时验证 “known future” 的可得时间，避免把未来实测变量传入。

## 2. 时间序列建模 Agent

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 将预测过程写入 episodic memory，待真实标签延迟到达后，用在线策略信号调整后续预测路径；作者在 GIFT-Eval 的多个配置中报告优于最佳单一 TSFM 的归一化 MAE。
- 相关性判断：**很高（forecasting Agent / online learning）**。适用于持续有标签回流的业务，但 memory 写入、标签到达和策略更新都必须严格限定于预测原点之后的真实可得信息。

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 来源与日期：arXiv v1，2026-08-26。
- 摘要：按问题而非组件将时序 LLM Agent 分为 forecasting/reasoning、增广与合成、异常检测与诊断、决策支持四类，比较每类对 agent 架构、工具与记忆的约束，并汇总数据集和环境。
- 相关性判断：**高（研究地图）**。适合用作系统设计和文献筛选框架；它是综述，不构成单一 Agent 的效果证据。

### [2026-11] [MetaCaster](https://github.com/D2I-Group/metacaster)

- 来源与日期：官方 GitHub；仓库创建于 2026-08-22，最近活动 2026-11-03，README 标注 EMNLP 2026。
- 摘要：多 Agent 框架不让大模型直接预测，而让 Agent 生成任务适配训练数据、优化生成过程并训练轻量任务模型；项目方报告其在 30 个数据集—shot 组合中取得 19 个最优。
- 相关性判断：**很高（Agent / AutoML / deployable forecaster）**。路线与“Agent 产出小型可部署预测器”高度一致；优先审查 few-shot 数据合成边界与训练/评测隔离。

## 3. 时间序列 reasoning 模型

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：CastReasoner 用“提取上下文预测证据—判断未来动态—对照数值 forecast prior—决策”的显式链路做后训练，并使用多教师轨迹、难度筛选、SFT 与多目标 RL。
- 相关性判断：**很高（reasoning / context-aware forecasting）**。可作为上下文修正层的候选；证据来源、发布时间与数值先验必须被独立记录和回放。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源与日期：arXiv v1，2026-10-19（10-31 为 v2 修订，未当作首发）。
- 摘要：以充分性损失与模型可实现性约束学习序列压缩表示，并门控保留关键频率模式；作者报告相对所比较 reasoning 方法减少平均推理时间。
- 相关性判断：**高（reasoning efficiency）**。适合做 fast-path/slow-path：快速表示不足时才升级至统计工具或长链 reasoning；效率结果不等于预测校准。

### [2026-09-30] [OpenTSLM TeeMoE](https://arxiv.org/abs/2609.40265)

- 来源与日期：arXiv v1，2026-09-30；[官方代码](https://github.com/tonychenxyz/OpenTSLM)。
- 摘要：在共享骨干上训练 forecasting aggregation、原生预测、时序分析三类 LoRA 专家，并由 MoE controller 根据请求混合，统一覆盖 forecasting、context-conditioned prediction 与语言化时序推理。
- 相关性判断：**很高（reasoning + foundation model）**。是“数值专家 + 语义专家 + 路由”单体基线；可与外部 Agent 编排比较成本、可解释性和失败恢复。

## 4. 光伏功率预测最新研究

### [2026-10-29] [IMPACT: Inverter-Informed Multimodal Learning for Photovoltaic Generation Forecasting](https://arxiv.org/abs/2610.40418)

- 来源与日期：arXiv v1，2026-10-29。
- 摘要：为 10–110 分钟概率预测分别编码电站历史、逆变器级云动态、可预知太阳几何与当前气象，再以门控交叉注意力融合，并以自适应保形校准输出分位数。作者报告相对 14 个基线中最佳者有更高 forecast-skill score。
- 相关性判断：**很高（光伏功率预测 / 可校准数值工具）**。其“已知太阳几何”与实时气象的时间可得性划分可直接写入 Agent 工具契约；跨电站和云图/逆变器数据可用性仍需独立验证。

### [2026-10-20] [Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting](https://arxiv.org/abs/2610.27763)

- 来源与日期：arXiv v1，2026-10-20。
- 摘要：将历史 PV 功率、气象观测、未来数值天气预报（NWP）与时间编码统一为序列补全，在多站点、多预测期数据上预训练，并比较 forecast-aligned、通用与混合重建目标。
- 相关性判断：**很高（PV foundation model）**。是领域 TSFM 从单站迁移到新站点的直接候选；Agent 侧必须标注 NWP 的发布批次/可得时刻，不能用事后分析场替代。

### [2026-09-29] [Physics-Informed State Space Models for Day-Ahead Photovoltaic Power Forecasting](https://arxiv.org/abs/2610.14014)

- 来源与日期：arXiv v1，2026-09-29。
- 摘要：以太阳几何、辐照、温度和逆变器上限组成可微物理基线，再由选择性状态空间模型（PowerMamba）学习 NWP 驱动的 24 小时残差，目标是减少不合物理范围的预测。
- 相关性判断：**高（PV / 物理约束 reasoning）**。适合作为 Agent 生成候选预测后的可行性检查和残差模型基线；论文的提升为作者在单一 utility-scale 数据上的报告，需跨站复核。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

### [2026-11-13] [ltruchot/code-harness-vitals](https://github.com/ltruchot/code-harness-vitals)

- 来源与日期：GitHub API；创建 2026-11-13 07:28 UTC，MIT 许可证。
- 摘要：以确定性规则审计 agentic coding harness 的 `AGENTS.md`、skills、代码库记忆、上下文限制、提交钩子和安全配置，并输出评分。
- 相关性判断：**中高（通用 ML Agent / harness）**。可借鉴其对任务记忆、上下文与提交门禁的显式检查，补充时序 Agent 的数据切分、as-of 时间和回测审计；并非时序专用，尚未评估其规则覆盖度。

### [2026-11] [TimeCopilot/foundationforecast](https://github.com/TimeCopilot/foundationforecast)

- 来源与日期：官方 GitHub README 的更新日志，2026-11（仓库页面当日可访问）。
- 摘要：统一封装 Chronos、TimesFM、Timestral、TimeH2O、TimeGPT 等 TSFM；11 月增加 Kumo-Forecast、Prophet adapter 与跨模型的保形预测区间，10 月增加 known-future exogenous 支持及多项模型接入。
- 相关性判断：**很高（TSFM serving / harness）**。适合作为 Agent 的受控模型适配层；应额外实现协变量 as-of 校验、walk-forward 评分和模型版本锁定。

### [2026-11] [databricks-industry-solutions/many-model-forecasting](https://github.com/databricks-industry-solutions/many-model-forecasting)

- 来源与日期：官方 GitHub README 更新日志，2026-11；网页抓取于 2026-11-10。
- 摘要：11 月为 StatsForecast、Chronos、TimesFM、Moirai 和 FoundationForecast 模型增加 prediction intervals；10 月通过 FoundationForecast 接入 19 个基础模型，并称 MMF Agent 可使用这些模型和覆盖率报告。
- 相关性判断：**高（Agent / 统一实验层）**。可减少多模型比较的工程摩擦，但需独立核验其数据切分、计算预算和区间覆盖率统计。

### [2026-11-12] [ispras/blackboard-swarm-automl](https://github.com/ispras/blackboard-swarm-automl)

- 来源与日期：GitHub API；创建 2026-11-12 11:54 UTC，最近更新 15:02 UTC，未声明许可证。
- 摘要：研究轻量并行 LLM coding agents 只通过共享 Markdown blackboard 通信、能否解决 MLE-Bench 自主机器学习任务的 harness。
- 相关性判断：**中高（通用 ML Agent / harness）**。共享黑板、固定评测环境和任务级记录值得迁移到时序 AutoML；不是时序项目，且缺少许可证，应先做代码与数据许可审计。

### [2026-11-12] [shivam15112003/Industrial-AI-diagnostic-agent](https://github.com/shivam15112003/Industrial-AI-diagnostic-agent)

- 来源与日期：GitHub API；创建 2026-11-12 19:25 UTC，最近更新 19:31 UTC，未声明许可证。
- 摘要：面向工业诊断的 Agentic AI 原型，声明使用只读工具编排、时序分析、确定性工程计算与受安全约束的 reasoning。
- 相关性判断：**中（时序 Agent 线索）**。任务和约束设计相关，但仓库极新，尚未核验实现、数据和评测；不作为技术能力或效果证据。

### 光伏功率预测

- 本次 GitHub / HuggingFace 关键词检索未发现能同时确认“近三个月首次公开日期、PV 功率预测主题、可复核代码或模型卡”的新增项目；不以普通能源预测样例替代。优先跟进上节三篇论文后续公开的官方代码，并在下次晨报补录。

## 建议动作

1. 在统一工具 schema 中强制 `history`、`past covariates`、`known-future covariates` 与 `vintage/as-of timestamp` 四类字段，拒绝时间可得性不明的输入。
2. 用滚动回放同时比较单一 TSFM、TeeMoE 类路由、CastReasoner 类上下文修正和 FASE 类在线策略，单列误差、区间覆盖、成本、标签延迟与泄漏审计。
3. 对 FoundationForecast / MMF 等模型聚合层，先固定版本和资源预算，再把模型选择纳入与 naive baseline 对照的预注册 harness。

## 限制

- 未检出 2026-11-12 至 11-13 可由 arXiv v1 页面确认、且与本主题直接相关的新首发论文；本报保留窗口内最近且可复核的高价值条目。
- GitHub 的 `updated_at` 只表明仓库活动，不等于项目首发；本文对新项目优先采用 `created_at`，对成熟项目采用其官方 changelog 所列日期。

## DailyArXiv 补检结论

- 已读取 [`zezhishao/DailyArXiv`](https://github.com/zezhishao/DailyArXiv) 公开 `master` 分支 README；`Time Series` 栏标注最后更新为 **2026-11-06**。其中窗口内、与本主题直接相关的 `Decouple to Reuse: Fine-Grained Knowledge Augmentation for Time Series Foundation Models`（arXiv v1 2026-11-04）可作为 TSFM 知识检索线索，但不是 Agent/reasoning 或光伏论文，且本报优先保留有明确近期工程或上下文建模增量的条目，故未挤入主清单。
- 栏内亦见 AdaMamba（README 显示 2026-11-04 更新），但 arXiv 首发为 2026-04，超出本报三个月窗口；已排除。README 现有内容未提供 11 月 6 日以后可确认的直接相关新条目。

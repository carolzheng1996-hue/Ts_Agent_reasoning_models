# 2026-11-18 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-18 13:10–13:28 CST（Asia/Shanghai）。
- 时间窗口：2026-08-18 至 2026-11-18（含首尾）；论文日期取 arXiv v1，项目日期取 GitHub API `created_at`。无独立首发日的来源会明确标注为不确定，不用抓取/更新日替代。
- 来源：arXiv、官方 GitHub 项目页与 GitHub Search API；论文中的效果数字均为作者报告，未独立复现。

## 今日结论

1. **基础模型线新增的是“时空数据稀缺时如何迁移 TSFM”。** T2ST（11 月 13 日）从冻结的 TSFM 蒸馏时间关系、辅以匹配辅助序列；其对象是时空预测，不能直接等同于通用 TSFM，但对多站点能源/交通扩展很有参考价值。
2. **Agent 研究正在从“生成预测”转为可评测的闭环编排。** TimEvolve 将真实标签延迟反馈为专家信任与路径选择的持续更新；CastWorld 则把上下文资源、工具调用和效率放进同一个评测 harness。
3. **可直接工程试验的组合是“统计诊断 + TSFM MCP + 可回放 harness”。** 新建的 `timesfm3-mcp` 和 `ephemeris-mcp` 可提供概率预测/集成，但必须记录 `as_of`、未来协变量的可得时点、模型版本与路由决策，避免回测泄漏。

## 1. 时间序列基础模型最新研究

### [2026-11-13] [T2ST: Data-Efficient Spatio-Temporal Foundation Models via Temporal Data and Knowledge Transfer](https://arxiv.org/abs/2611.18199)

- 来源与日期：arXiv v1，2026-11-13。
- 摘要：在同步时空观测稀缺时，检索与目标模式匹配的辅助时间序列，并从冻结 TSFM 向时空模型蒸馏历史 patch 关系及多尺度预测行为。作者报告以 10% 原始时空数据在多组短/长期预测上可达到或超过全数据训练表现。
- 相关性判断：**高（TSFM 迁移 / 多站点时空预测）**。适合把通用 TSFM 接入空间预测的冷启动方案；辅助序列的选择只能使用预测原点前可得数据，且需单列空间外推测试。

### [2026-09-21] [$t_0$: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：公开 102M/256M 权重的协变量预测 TSFM，在时间轴与变量轴交替注意力，输入目标历史、过去协变量和已知未来协变量，输出分位数预测且无需任务专门微调。
- 相关性判断：**很高（通用 TSFM / 协变量预测）**。可作为 Agent 的受控数值预测器；工具接口应强制标明各协变量 `available_at`，防止把未来信息输入回测。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-21] [When Tomorrow Becomes Today: Self-Evolving Policies for Agentic Time-Series Forecasting](https://arxiv.org/abs/2609.24862)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：TimEvolve 固定底层模型，但在真实标签到达后，以按时间顺序的“预测—揭示—更新”协议持续更新数值专家信任、Agent 路径选择和干预强度；作者在八个 Time-MMD 领域报告 15 个方法中最优平均 MSE/MAE 排名。
- 相关性判断：**很高（forecasting Agent / 延迟反馈）**。适合有真实值回流的生产预测；更新策略必须只消费当时已揭示的标签，并以滚动原点评估。

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 来源与日期：arXiv v1，2026-08-26。
- 摘要：按 forecasting/reasoning、数据增广与合成、异常诊断、决策支持四类梳理 LLM 时序 Agent，并比较工具、记忆、数据集和环境设计。
- 相关性判断：**高（研究地图）**。不是可部署模型，但可用作 Agent 功能边界与评测维度的检查清单。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：CastReasoner 用结构化链路提取上下文证据、推断未来动态、与数值预测先验比对后再决策；采用多教师轨迹的 SFT 与多目标 RL 进行后训练。
- 相关性判断：**很高（evidence-grounded reasoning）**。适合事件/新闻会改变数值趋势的预测；必须将证据 URL、发布时间、取得时间和最终改写幅度保存下来，才能审计及回放。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源与日期：arXiv v1，2026-10-19。
- 摘要：通过充分性损失和可实现性约束学习压缩表征，并以门控机制保留关键频率模式，主张在满足条件时采用更快的 System-1 推理路径。
- 相关性判断：**高（reasoning efficiency）**。可作为 Agent 的快速分流层；仍须分别评测速度、点预测误差、区间校准和“升级到慢路径”的召回率。

## 4. 光伏功率预测最新研究

### [2026-10-28] [The Utility of Physics-Informed Machine Learning in Solar Power Production Forecasting](https://arxiv.org/abs/2610.38976)

- 来源与日期：arXiv v1，2026-10-28。
- 摘要：在 33 个欧洲国家、3,713 个 PV 装置的逾 300 万样本上，将 ADR 物理 PV 效率模型与 TSMixer 通过特征增强和残差学习结合。作者发现物理信息虽可略加速收敛，却未稳定改善测试准确度、迁移性或低数据量表现。
- 相关性判断：**高（PV 基线 / 反向证据）**。对 Agent 很重要：物理模块可做约束和诊断锚点，但不应默认它会提高日前预测，应按气候、站点和 NWP 时延做分层检验。

### [2026-10，精确 v1 日待二次核验] [Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting](https://arxiv.org/abs/2610.27763)

- 来源与日期：arXiv，2026-10；本轮未能从条目页独立读取精确 v1 时间，故降低优先级。
- 摘要：把多站点、多预测期 PV 功率、气象观测、未来 NWP 与时间编码统一为序列补全，并比较预报对齐重建、通用重建及混合预训练目标。
- 相关性判断：**高（PV 专项基础模型）**。支持“跨站点预训练—新站适配”路线；不能据此外推通用 TSFM 的能力。

## 5. GitHub 上值得跟踪的新项目

### 时间序列

### [2026-11-13] [CastWorld-Bench/CastWorld](https://github.com/CastWorld-Bench/CastWorld)

- 来源与日期：GitHub API `created_at`，2026-11-13；2 stars（检索时）。
- 摘要：面向 context-aware agentic forecasting 的开源 benchmark：25 个数据集、八个领域，提供状态自适应 harness、上下文资源和工具，并同时评估预测质量、过程执行、行为可信度与资源效率。
- 相关性判断：**很高（Agent harness / reasoning 评测）**。应优先检查其训练/测试的上下文截断、工具失败处理和成本计量口径；它是评测框架而不是预测器。

### [2026-10-04] [TensorLink-AI/ephemeris-mcp](https://github.com/TensorLink-AI/ephemeris-mcp)

- 来源与日期：GitHub API `created_at`，2026-10-04；11 月 18 日仍有更新，0 stars（检索时）。
- 摘要：为 AI Agent 提供 Chronos-2、TimesFM 2.5、Toto 2、TiRex-2、Timestral、Granite PatchTST-FM 与 FlowState 的概率预测接口，支持显式选择、路由或集成。
- 相关性判断：**很高（TSFM serving / Agent 工具）**。便于建立可替换的模型层；应固定权重/服务版本、路由规则和输出分位数，并在相同滚动切分下与单模型对照。

### [2026-09-01] [Iamdevair/timesfm3-mcp](https://github.com/Iamdevair/timesfm3-mcp)

- 来源与日期：GitHub API `created_at`，2026-09-01；11 月 16 日仍有更新，15 stars（检索时）。
- 摘要：把 TimesFM-3 暴露给 MCP 客户端，支持单变量或联合多变量预测、q10–q90 区间以及过去/已知未来协变量；README 说明底层权重为非商业许可。
- 相关性判断：**高（TSFM MCP / 概率预测）**。适合作为 Agent 的受约束预测工具；生产使用前须审查权重许可，并验证协变量长度/时间戳校验确实阻断泄漏。

### [2026-08-22] [D2I-Group/metacaster](https://github.com/D2I-Group/metacaster)

- 来源与日期：GitHub API `created_at`，2026-08-22；8 stars（检索时）。
- 摘要：MetaCaster 的官方代码，定位为“meta-harness-optimized Agent”：生成任务适配训练数据并优化生成 harness，再端到端学习轻量时序预测器。
- 相关性判断：**很高（Agent / AutoML / harness）**。适合研究“Agent 是否真改善轻量模型”的问题；重点审计合成数据是否泄露测试分布，以及搜索预算和失败轨迹是否计入比较。

### 光伏功率预测

- 本轮未发现可独立确认、在近三个月**新建**且直接面向光伏功率预测的 GitHub/HuggingFace 项目。不将旧仓库的最近提交误列为新项目。

## 6. DailyArXiv 补检

- 已复核 [zezhishao/DailyArXiv 的 Time Series 板块](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)。该公开清单此前可见更新滞后，不能用于排除 11 月中旬以后的论文；因此本简报的“最新”判定以 arXiv v1 和 GitHub API 为准。
- 未在该补检中确认到比上列条目更直接、且日期可核验的新增 TSFM / 时序 Agent / 时序 reasoning 论文。

## 建议动作

1. 用 CastWorld 类 harness 固定 `as_of`、上下文可得时间、工具调用日志、模型版本和成本，再比较“纯 TSFM / TSFM+统计工具 / TSFM+reasoning”。
2. 对 `ephemeris-mcp` 与 `timesfm3-mcp` 做同切分 walk-forward：报告 MAE、CRPS/分位数损失、覆盖率、时延与失败率；将许可审查列为 TimesFM-3 的准入门槛。
3. 光伏任务单列晴/阴天、跨站冷启动、NWP 延迟和数据缺失切片，把物理模块定位为基线与诊断约束，避免把“物理先验”当作无条件增益。

## 检索限制

- GitHub star 和更新信息为检索时快照，不能代表长期热度；项目质量、许可证兼容性和数值正确性均未独立审计。
- 本轮未发现新近三个月、可核验且来自 ACL/NeurIPS/ICLR/ICML/KDD/AAAI 正式页面的直接匹配条目；arXiv 预印本仍须跟踪后续会议版本与修订。

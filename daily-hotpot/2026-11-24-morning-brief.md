# 2026-11-24 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-24 08:06 CST（Asia/Shanghai）。
- 时间窗口：2026-08-24 至 2026-11-24（含首尾）。论文日期取 arXiv v1；GitHub 条目取 API 的创建或最近推送时间。无法确认首发日期的线索不列入正文。
- 增量参照：2026-11-23 晨报。本轮补入上期未覆盖、且在窗口内与 **可验证 reasoning、Agent 自主研究、TSFM 适配** 直接相关的论文；GitHub 侧优先核验 11 月 22–23 日新建/更新项目。

## 今日结论

1. **时序“reasoning”正在落到可因果验证的测试时计算。** BGAA 用历史滚动原点回测筛掉不可靠的推理/增强路径；这比让 Agent 用未来标签做候选答案投票更适合线上预测。
2. **Agent 化建模的关键资产是可复用、带条件的经验，而非一次性自然语言结论。** NeoResearch 将文献证据、适用前提和实验结果共同写入层级记忆；harness 应相应保存数据切分、预算、失败实验和假设。
3. **基础模型的进展集中在按实例适配与灵活上下文。** 应把 TSFM 微调或 test-time compute 视为受预算约束的工具调用，并以预测原点冻结的回测决定是否启用。

## 1. 时间序列基础模型最新研究

### [2026-11-18] [A Verifier from the Past: Test-Time Compute for Time Series Foundation Models](https://arxiv.org/abs/2611.25171)

- 来源与日期：arXiv v1，2026-11-18。
- 摘要：提出 BGAA，以同一序列历史上的滚动原点回测作为因果 verifier，对上下文的结构化增强视图评分、剔除较差候选并平均保留的概率预测。作者报告其在 GIFT-Eval、fev-bench 与 BOOM 的测试组合均有改善，但也指出逐窗口选择仍有明显的选择偏差空间。
- 相关性判断：**很高（TSFM / 可验证 test-time reasoning）**。可作为 Agent 的低风险“候选增强—历史验证—集成”工具；必须将验证窗口、变换集合和选择策略锁定在预测时点之前，禁止用未来真值筛选。

### [2026-11-13] [FlexCast: Flexible Context Learning for Time Series Foundation Models](https://arxiv.org/abs/2611.17862)

- 来源与日期：arXiv v1，2026-11-13；[官方代码](https://github.com/BenchCouncil/FlexCast)。
- 摘要：将预测预训练改为可变长度的 patch 掩码预测，使同一模型能够在一步预测、置信度迭代修复和自回归生成间切换。论文报告在 BLAST 与若干零样本基准上具竞争力，同时降低推理延迟。
- 相关性判断：**高（TSFM / Agent 路由候选）**。灵活上下文有利于 Agent 按数据缺失、预算和预测步长选择推理模式；“更快/更准”为作者实验结论，需在目标数据的相同时间切分下复验。

### [2026-11-13] [SWIFT: Sample-Wise Instance Fine-Tuning of Time-Series Foundation Models for Forecasting](https://arxiv.org/abs/2611.17915)

- 来源与日期：arXiv v1，2026-11-13。
- 摘要：以单个预测样本自身历史为适配来源，结合历史 self-retrieval、频率感知损失和动态融合，尝试避免依赖额外微调数据集。作者在 4 个 TSFM、6 个 Chronos Benchmark II 子集的组合上报告平均 MASE/WQL 降低。
- 相关性判断：**中高（TSFM 适配）**。适合冷启动或单序列专属优化，但 Agent 必须将适配开销、过拟合风险和长预测步收益一起纳入预算化路由，且不能让 forecast horizon 内的观测进入适配样本。

## 2. 时间序列建模 Agent 最新研究

### [2026-11-13] [NeoResearch: Literature- and Experience-Guided Autonomous Time Series Model Discovery](https://arxiv.org/abs/2611.18235)

- 来源与日期：arXiv v1，2026-11-13。
- 摘要：LLM Agent 从网络文献提取建模机制、实证证据和适用条件，提出可检验架构假设，再通过训练和超参数优化反馈迭代；层级经验记忆把文献发现与实验结果链接起来用于跨任务复用。作者报告在十个数据集上具竞争力。
- 相关性判断：**很高（研究 Agent / AutoML 闭环）**。其“证据—假设—实验—条件化记忆”结构很适合复现研究型 harness；应要求每条经验携带论文链接、数据版本、滚动切分、搜索预算与负结果。

### [2026-11-22] [agentquant-timeseries-pipeline](https://github.com/kenseiAmit/agentquant-timeseries-pipeline)

- 来源与日期：GitHub API；仓库创建 2026-11-22 UTC，最近推送 2026-11-22 UTC，MIT 许可，0 stars（检索时）。
- 摘要：基于 Microsoft Semantic Kernel 与 Azure OpenAI 的量化时序分析原型，协调 6 个专长 Agent、3 个 AgentGroupChat 阶段，带人工审批和 matplotlib 执行自修复描述。
- 相关性判断：**中（Agent 编排参考）**。可借鉴 HITL gate 和可视化失败恢复，但项目极新且尚无独立验证；不应把它当作预测准确性或金融收益的证据，接入前要审查 API 数据外发与回测泄漏。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-19] [Falsifiable Compositional Reasoning in Time Series Forecasting](https://arxiv.org/abs/2611.25388)

- 来源与日期：arXiv v1，2026-11-19。
- 摘要：论文指出常规历史回测和大规模架构/提示词搜索会偏向暂时性相关，提出以预先声明的组合假设、耦合约束和训练校准的证伪测试来组织时序预测与 reasoning，并在受控基准及德国日前电价上诊断 regime shift 问题。
- 相关性判断：**很高（reasoning 验证范式）**。对 Agent 最重要的启发是先写可被未来推翻的假设，再搜索模型；可将反事实/结构变换测试作为候选策略上线前的门禁，而非仅优化单一验证集分数。

### [2026-11-20] [Lift Out, Kick In: Decoupling Event Effects for Time Series Forecasting](https://arxiv.org/abs/2611.27191)

- 来源与日期：arXiv v1，2026-11-20。
- 摘要：Loki 以共享 Event Response Function 对历史窗口中的事件偏移做“lift out”，在预测窗口对已知未来事件做“kick in”，从而把事件响应和基础时序预测分离而仍保持二者一致。作者在五个基准上报告最佳标准化 MAE。
- 相关性判断：**高（事件 reasoning / 协变量契约）**。适合政策、促销、节假日等已知事件；Agent 需区分“预测原点已知的未来事件”和事后标注，记录事件发布时间与版本，避免以未来事件信息伪造收益。

## 4. GitHub 上值得跟踪的新项目

### 时间序列

### [2026-11-23] [oelwakil/inventory-forecast-optimization](https://github.com/oelwakil/inventory-forecast-optimization)

- 来源与日期：GitHub API；仓库创建 2026-10-13 UTC，最近推送 2026-11-23 UTC，MIT 许可，0 stars（检索时）。
- 摘要：把 LightGBM 与概率 PyTorch 需求预测接入 lost-sales 仿真，再以 PPO 学习订货策略；README 声称相对若干简单基线降低库存/成本。
- 相关性判断：**中高（forecast-to-decision Agent / RL）**。值得关注预测不确定性如何传给决策层；所有数值均为作者自报，评测时应在未见时间段做 walk-forward 仿真，并将 service level、库存约束和策略训练窗口固定。

### [2026-11-23] [PoorOtterBob/Time-Series-Agents-Survey](https://github.com/PoorOtterBob/Time-Series-Agents-Survey)

- 来源与日期：GitHub API；仓库创建 2026-11-17 UTC，最近推送 2026-11-23 UTC，许可证 `NOASSERTION`，2 stars（检索时）。
- 摘要：面向 Claude Code/Codex 的时序 Agent 综述仓库，整理论文卡、harness 架构与评测线索，并提供 agent skill。
- 相关性判断：**中高（研究导航 / harness 资料）**。适合作为检索入口而非权威基准；使用其资料前应逐项回溯原论文/官方实现，并在引入内容前确认缺失许可证。

### 光伏功率预测

- 本轮未发现 2026-11-23 至 2026-11-24 首发、且可核验日期的光伏功率预测论文或 GitHub/HuggingFace 项目。窗口内仍最值得优先复现的是 [Physics-Informed State Space Models for Day-Ahead Photovoltaic Power Forecasting](https://arxiv.org/abs/2610.14014)（arXiv v1：2026-09-29）：将物理 PV 转换模型作为基线、状态空间模型学习 NWP 残差。其相关性为 **高（PV forecasting harness）**，因为物理可行性、NWP 可得时间和日内滚动切分可直接成为 Agent 验收约束；性能数字仍需本地数据复验。

## 5. 检索记录与边界

- 已检索 arXiv API（按 `time series`、Agent、reasoning、foundation model 和 PV 相关词）及论文页，GitHub Search/API（创建/推送日期、许可证、star 数），并交叉检查官方代码链接。检索到的最新相关 arXiv v1 为 2026-11-20；11 月 21–24 日未发现可确认日期、直接命中本主题的新增正文条目。
- 仅保留首发/创建日期在三个月窗口内，或在窗口内有明确推送且工程关联强的项目。GitHub 的简介、维护状态与 star 数均不等于独立复现。
- 过滤了日期超窗、只有搜索摘要或无法确认首次公开时间的条目。建议下一步优先把 BGAA、NeoResearch 和 Loki 转为同一套预测原点、外部信息可得性、滚动回测与选择偏差审计的对照实验。

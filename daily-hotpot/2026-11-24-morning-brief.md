# 2026-11-24 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-24 15:35 CST（Asia/Shanghai）。
- 时间窗口：2026-08-24 至 2026-11-24（含首尾）。论文日期优先采用 arXiv v1；GitHub 项目分别记录创建和最近推送时间。条目按日期由近及远排列。
- 增量参照：2026-11-23 晨报。本期补充其未展开的近期 TSFM/Agent 工作与最近活跃项目；作者报告的实验数字均尚未独立复现。

## 今日结论

1. **TSFM 与 LLM 的近期结合更偏向“把语言推理压缩成数值协变量”。** 这比直接把文本与数列拼接更适合纳入可回测的预测流水线，但必须冻结每个文本证据的发布时间。
2. **Agent 评测正在从误差排行榜扩展到过程、可信度和资源约束。** 新出现的 CastWorld 一类基准/代码库值得作为 harness 设计参考，但目前仍应视为早期项目。
3. **本轮未发现 11 月下旬新首发、且能由一手论文页确认的 PV 预测论文。** 光伏方向保留最新工程项目，研究侧继续以近窗内可验证论文为主，避免以仓库提交替代同行评审或预印本日期。

## 1. 时间序列基础模型最新研究

### [2026-11-04] [Decouple to Reuse: Fine-Grained Knowledge Augmentation for Time Series Foundation Models](https://arxiv.org/abs/2611.05993)

- 来源与日期：arXiv v1，2026-11-04；同时收录于 [DailyArXiv Time Series](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)。
- 摘要：提出以趋势、季节两条分支把预训练知识拆为残差码本，再按任务自适应检索与融合，用于增强冻结的 TSFM。作者在八个真实基准及四个 TSFM 骨干上报告有效性与跨骨干可迁移性。
- 相关性判断：**高（TSFM / Agent 检索工具）**。可被 Agent 视为“可复用模式库”而非端到端重训；应以滚动原点回测检查检索库是否混入预测时点之后的窗口。

### [2026-11-02] [Evaluating Uncertainty Calibration in Probabilistic Time Series Foundation Models](https://arxiv.org/abs/2611.03592)

- 来源与日期：arXiv v1，2026-11-02；DailyArXiv Time Series 收录。
- 摘要：给出概率 TSFM 不确定性表达方式的分类及多预测步校准评测，区分 pooled、逐 horizon 和条件校准；实证指出常用指标可能掩盖系统性失校准，并比较后处理再校准的边界。
- 相关性判断：**很高（TSFM / reasoning guardrail）**。适合直接变成 Agent 的上线门槛：除点预测误差外，按预测步、场景和覆盖率持续审计区间质量。

## 2. 时间序列建模 Agent 最新研究

### [2026-11-03] [GlucoAgent: Personalized Glucose Forecasting from Multimodal Personal Context](https://arxiv.org/abs/2611.04126)

- 来源与日期：arXiv v1，2026-11-03；DailyArXiv Time Series 收录。
- 摘要：在每次预测时让 LLM 生成并运行程序，从个人连续血糖、可穿戴、饮食等多模态上下文中检索相似案例、拟合并回测候选模型，同时返回理由与证据。作者报告其在 CGMacros 上优于比较的 Chronos-2。
- 相关性判断：**很高（tool-using forecasting Agent）**。展示了“分析—候选模型—证据”闭环，但医疗数据场景需额外实施隐私隔离、工具白名单与临床验证，不能直接外推为临床建议。

### [2026-11-03] [From AutoResearch to Continual AutoResearch: Do Agents Learn Across Tasks?](https://arxiv.org/abs/2611.05108)

- 来源与日期：arXiv v1，2026-11-03；DailyArXiv Time Series 收录。
- 摘要：在含时间序列预测与表格 AutoML 的九类任务中，对比持久化与重置的研究 Agent，并用记忆消融区分洞见迁移和会话连续性。作者结论是持久状态能提升找到首个方案的效率，但未稳定转化为最终性能提升。
- 相关性判断：**高（Agent / AutoML harness）**。提醒不要把“有长期记忆”当作能力提升的充分证据；harness 应分别记录首解质量、试验成本和独立留出表现。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-03] [TSFM Meets LLM: Context as Covariates](https://arxiv.org/abs/2611.05515)

- 来源与日期：arXiv v1，2026-11-03；DailyArXiv Time Series 收录日期同为 2026-11-03。
- 摘要：CoCo 让 LLM 将新闻、报告、标注等文本的推理蒸馏为数值化预测/置信度协变量，再引导 TSFM；训练中以与预测改善相关的奖励对 LLM 做 GRPO 对齐。作者报告在多领域基准上对比 TSFM 与 LLM forecaster 有最高 12% MAE 改善。
- 相关性判断：**很高（reasoning + TSFM）**。比“文本直接入 prompt”更易审计，但生产实现必须将文本发布时间、检索快照和协变量生成版本写入每一条预测记录。

### [2026-11-03] [TEMPO: Time Series Understanding via Discrete Tokenization](https://arxiv.org/abs/2611.04482)

- 来源与日期：arXiv v1，2026-11-03；DailyArXiv Time Series 收录。
- 摘要：以有限标量量化器将时序 patch 映射为离散词表，再将信号 token、尺度统计与文本交给 LLM 的既有注意力层处理；论文展示活动识别、睡眠分期和故障诊断结果及时间序列问答示例。
- 相关性判断：**中高（时序理解 / reasoning 接口）**。对“先把数值转为离散可追溯 token、再交给语言模型解释”的架构有参考价值；预测任务的数值精度和长预测步表现仍需另行验证。

## 4. GitHub 上值得跟踪的近期项目

### [2026-11-24] [randrick/agent-from-the-loop-up](https://github.com/randrick/agent-from-the-loop-up)

- 来源与日期：GitHub API；创建 2026-11-13，最近推送 2026-11-24 UTC。
- 摘要：以 Linux、Python 和原生 OS 基元逐步构建 LLM agent harness 的示例代码，并将每个阶段配套成文章标签。
- 相关性判断：**中（harness 工程参考）**。非时序专用，但适合拆解最小 agent loop、状态与工具边界；引入时要另加 walk-forward 验证与数据时间边界。

### [2026-11-23] [CastWorld-Bench/CastWorld](https://github.com/CastWorld-Bench/CastWorld)

- 来源与日期：GitHub API；创建 2026-11-13，最近推送 2026-11-23 UTC。
- 摘要：开源的上下文感知 agentic 时序预测基准，声明覆盖 25 个数据集、八个领域，并评估预测质量、过程执行、行为可信度和资源效率，附带 state-adaptive harness。
- 相关性判断：**很高（TS Agent / benchmark harness）**。很贴合本仓库的评测关注点；项目新、未见独立复现，建议先审查数据许可证、时间切分和过程指标定义后再纳入基线。

### [2026-11-23] [PoorOtterBob/Time-Series-Agents-Survey](https://github.com/PoorOtterBob/Time-Series-Agents-Survey)

- 来源与日期：GitHub API；创建 2026-11-17，最近推送 2026-11-23 UTC。
- 摘要：维护时间序列 Agent、harness 架构与评测的文献卡片、论文清单，以及面向 Claude Code/Codex 的 agent skill。
- 相关性判断：**中高（研究地图）**。可用作人工追踪入口，但其“source-grounded”定位不等于论文结论已复现；引用前仍须回到原始论文/官方代码页核对。

### [2026-11-18] [TensorLink-AI/ephemeris-mcp](https://github.com/TensorLink-AI/ephemeris-mcp)

- 来源与日期：GitHub API；创建 2026-10-04，最近推送 2026-11-18 UTC。
- 摘要：为 Agent 提供多个零样本 TSFM 的概率预测、路由和集成 MCP 接口，仓库说明列出 Chronos-2、TimesFM、Toto、TiRex-2、Timestral 与 Granite 等。
- 相关性判断：**高（TS Agent / 模型路由）**。适合作为统一工具层候选；接入前须核实模型许可、密钥/数据外发，以及调用时协变量可得性与本地回测完全一致。

## 5. 光功率 / 光伏功率预测最新动态

### [2026-11-24] [KrissV89/sm-cfhr](https://github.com/KrissV89/sm-cfhr)

- 来源与日期：GitHub API；创建并最近推送 2026-11-24 UTC。
- 摘要：仓库自述为面向多电站光伏能量预测的物理约束鲁棒回归框架，强调可复现性。
- 相关性判断：**中（PV 工程线索，低优先级）**。日期和主题吻合，但尚未定位到对应预印本或机构项目页，不能视为已验证研究；宜关注后续数据、评测协议和论文链接是否公开。

### 研究检索空档说明

- 本轮在 arXiv 的 `photovoltaic power forecasting` / `solar power forecasting` 主题检索中，未找到窗口内首发且能由一手元数据确认、又未在昨日简报覆盖的新论文；因此未用旧论文或无法确认日期的网页凑数。
- 作为仍在窗口内的已知强基线，昨日已覆盖的 [Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting](https://arxiv.org/abs/2610.27763) 与 [Explainable AI for Solar PV Power Forecasting](https://arxiv.org/abs/2611.25894) 仍应优先进入后续复现实验；本期不重复展开。

## 6. DailyArXiv 补检结论与检索限制

- 已直接拉取并核查 [zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv) 代码/README；`main.py` 明确设有 `Time Series` 关键词，README 的最近更新时间为 **2026-11-06**。本期的 Decouple to Reuse、CoCo、TEMPO、GlucoAgent、概率 TSFM 校准均在其 `Time Series` 条目中出现，且 README 收录日期与上列 arXiv v1 日期一致或可交叉确认。
- DailyArXiv 是滚动精选而非完整档案，且更新时间早于本次晨报；故只作补检，正文排序依旧以 arXiv v1 或 GitHub API 的可验证时间为准。未将日期超窗的 SolarBoost（2025-10-24）等结果纳入主条目。
- GitHub 搜索结果中的创建、推送和描述均来自 GitHub API，不能替代代码审计、作者主张的复现或安全评估。建议优先为 CoCo/CastWorld/ephemeris-mcp 制作统一的“预测原点—外部信息发布时间—工具调用—评分”日志格式。

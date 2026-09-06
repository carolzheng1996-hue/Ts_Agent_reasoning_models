# 2026-09-06 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-06 15:42:43 CST，Asia/Shanghai<br>
时间窗口：2026-06-06 至 2026-09-06<br>
优先来源：arXiv、OpenReview、ACL / NeurIPS / ICLR / ICML / KDD / AAAI、官方项目页、GitHub、HuggingFace、机构博客、[`DailyArXiv`](https://github.com/zezhishao/DailyArXiv)<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic power forecasting`

## 今日摘要

- 截至检索时间，没有发现 `2026-09-05` 或 `2026-09-06` 首发、日期可由一手来源确认且高度相关的新论文。周末 arXiv 更新有限，因此今日采用“空增量 + 最近关键条目”格式。
- 最近的明确新增仍是 `2026-09-02` 的 [`CoSPOT`](https://arxiv.org/abs/2609.02093)：它以冻结 LLM 和可组合频谱提示完成在线时序适配，连接了 foundation model、在线预测与 prompt-level reasoning。
- Agent / harness 主线仍由 `CastClaw`、`TraceBench`、`MetaCaster` 和 `CastFSR` 构成；reasoning 主线则以 `CoSPOT`、`ConceptTS`、两篇 `ReasonCast` 和 `TSRouter` 为重点。
- GitHub 搜索未发现 9 月 5–6 日新建、且比现有项目更直接命中 timeseries Agent / AutoML / PV forecasting 的可靠候选；继续跟踪 `agentic-timeseries`、`timeseries-mcp`、`TSFM-Robustness-Benchmark`、`solarbench` 和 `PARA-PV`。
- 光伏功率预测方向没有周末新增，近窗重点仍是 PV-BESS 联合调度、`FarSky`、day-ahead 决策支持流水线、NWP 误差鲁棒性和 `PARA-PV`。
- `DailyArXiv` 官方仓库页面核验为 `Last update: 2026-09-04`。Time Series 板块最近明确收录 `CoSPOT`、`TopoBrick` 等；没有 9 月 5–6 日新增。`QABBA` 的 README 收录日期为 `2026-09-01`，但 arXiv v1 为 `2024-11-20`，已超窗，继续降级为补检说明而不进入主列表。

## 0. 检索口径与限制

- 论文按 arXiv `v1` 首发日期判断是否进入三个月窗口；版本更新时间不能代替首发日期。项目按 GitHub `created_at` 判断新旧，以 `pushed_at` 补充活跃度。
- 条目按日期由近及远排序。日期不能独立确认的候选不进入主列表。
- 本轮直接核验了 DailyArXiv 官方 GitHub 页面；其 raw README 与部分公共 API 在检索时出现网络 / 权限审查超时，因此没有把未能回到一手页面复核的搜索摘要当成新条目。
- AI HOT 仅作为候选线索入口；其公共接口本轮超时，未产生可独立复核的新条目。

## 1. 时间序列基础模型最新研究

### [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.31013) / [GitHub](https://github.com/Jeremstym/TSPFN)
- 简短摘要：把 TabPFN 风格的 in-context learning 扩展到生理时序分类，通过时间表示和大规模真实生理序列预训练提升跨域泛化。
- 相关性判断：高。显示 TSFM 正从 forecasting 扩展到 classification 与 temporal-tabular transfer。

### [2026-08-31] [When the Martingale Never Stops Firing: Anytime-Valid Gating on Real Forecast Streams](https://arxiv.org/abs/2608.30502)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30502)
- 简短摘要：审计 anytime-valid martingale monitor 在真实预测流中的误触发，并展示其对冻结 TSFM 在线适配门控的影响。
- 相关性判断：最高。直接命中 TSFM 部署、在线监控和 evaluation harness。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：利用可控合成时序做干预实验，审计 Chronos-2 与 TimesFM-2.5 对趋势、谐波和 regime switch 的响应。
- 相关性判断：最高。提供了比静态排行榜更接近机制解释的 TSFM failure audit。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30976)
- 简短摘要：`CastClaw` 将数据、专用预测器、分析工具、用户约束和版本化执行记录接入统一 runtime，并用停止条件管理预测修订。
- 相关性判断：最高。是近窗最接近可审计、可交付 forecasting agent 的系统之一。

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：用物理动力系统模拟生成可控根因归因任务，评估 agent 是否能从时序中识别被改变的系统参数。
- 相关性判断：最高。为 time-series agent 的归因能力提供可复现 harness 与轨迹证据。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：以多 agent 自动生成数据、训练轻量预测器，并通过 meta-harness 优化少样本部署流程。
- 相关性判断：最高。直接连接 agent、harness、AutoML 与时序预测生产化。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：采用 `Fast → Slow → Reflect` 三阶段流程，先生成预测先验，再检索外部上下文并反思修正。
- 相关性判断：最高。是 forecasting agent 与显式反思机制结合的代表性工作。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-02] [Compositional Spectral Prompts for LLM-based Online Time Series Forecasting](https://arxiv.org/abs/2609.02093)

- 日期：2026-09-02
- 来源：[arXiv](https://arxiv.org/abs/2609.02093) / [GitHub](https://github.com/seungyoon-Choi/CoSPOT)
- 简短摘要：`CoSPOT` 冻结 LLM 骨干，通过按频域幅值组合 basis prompts 来适配在线数据分布和未见模式。
- 相关性判断：高。虽非显式 CoT，但属于 LLM-based online time-series adaptation / reasoning 的新路线。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 提出领域概念和可执行标注规则，将多变量预测映射到可干预的命名概念瓶颈。
- 相关性判断：最高。把可解释 reasoning 嵌入 forecasting 内部表示，而非只做事后解释。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：agent 先判断是否需要文本推理，再将促销、节假日和价格变化转成结构化干预来修正 TSFM 预测。
- 相关性判断：最高。明确回答何时启用 reasoning、如何把 reasoning 变成数值预测动作。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/mlvlab/ReasonCast)
- 简短摘要：把数值预测与文本解释合并到一次自回归生成，并提供 ReasonTS-Bench 联合评测。
- 相关性判断：最高。是 forecast + reasoning 单接口路线的直接代表。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列

#### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：创建于 2026-08-22；最近确认 push 为 2026-09-03
- 来源：[GitHub](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：面向时序分析的 prototype multi-agent workflow，组合多种 LLM 与金融数据工具。
- 相关性判断：中高。成熟度有限，但直接命中 `timeseries agent`。

#### [2026-08-09] [LegitScarf/AutoML](https://github.com/LegitScarf/AutoML)

- 日期：创建于 2026-08-09；最近确认 push 为 2026-09-04
- 来源：[GitHub](https://github.com/LegitScarf/AutoML)
- 简短摘要：agentic AutoML 系统自动剖析数据、生成和执行训练代码，并对失败进行自纠错。
- 相关性判断：高。并非时序专用，但其 self-correction loop 可迁移到自动时序建模。

#### [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：创建于 2026-07-12；最近确认 push 为 2026-09-03
- 来源：[GitHub](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：针对 TSFM edge cases 的鲁棒性测试与 benchmark 工具。
- 相关性判断：最高。处于 time series、foundation model 和 evaluation harness 的直接交集。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：创建于 2026-07-11
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：通过 MCP 向 agent 暴露异常检测、变点、分解、趋势检验与数据质量审计等确定性工具。
- 相关性判断：高。可作为 timeseries agent 的工具层和验证层。

### 4.2 光伏功率预测

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：创建于 2026-08-04
- 来源：[GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨四个气候带的 harmonized photovoltaic power forecasting benchmark，提供统一评测协议。
- 相关性判断：高。适合验证 PV forecasting 模型的跨气候泛化。

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：创建于 2026-07-09
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：公开 physics-aware retrieval、冻结 TSFM prior 和 distribution-shift correction 的 PV 预测实现。
- 相关性判断：最高。是 foundation model 与光伏预测交叉方向的核心开源实现。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-26] [The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid](https://arxiv.org/abs/2608.25703)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25703)
- 简短摘要：将 LSTM 光伏预测与 PV-BESS 多目标调度联动，量化预测精度对成本、并网注入和电池利用的影响。
- 相关性判断：高。直接衡量 PV forecast 对运营决策的下游价值。

### [2026-08-06] [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.11254)
- 简短摘要：结合全天空图像与 latent diffusion 做小时内太阳辐照度生成式预测，并强化 ramp event 检测。
- 相关性判断：高。虽然预测目标偏辐照度，但与短时 PV power pipeline 紧密相关。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：构建 physics-aware、leakage-safe、stacking-based 的真实站点 day-ahead PV 预测流水线。
- 相关性判断：最高。强调部署完整性和决策支持，而非只比较单模型精度。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：系统评估数值天气预报误差如何传导到下游 PV 功率预测，并比较深度模型鲁棒性。
- 相关性判断：高。直接覆盖实际部署中最重要的输入偏差风险。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把物理约束检索、冻结 Chronos 先验、分布漂移修正和 physics-constrained loss 组合为统一 PV 预测框架。
- 相关性判断：最高。直接命中 `retrieval + frozen TSFM + PV forecasting`。

## 6. DailyArXiv 补检结论

- 官方仓库说明其 README 子标题即检索关键词，每个关键词最多保留最近 100 篇；本轮页面显示 `Last update: 2026-09-04`。
- Time Series 板块在三个月窗口内的高相关收录包括：[`CoSPOT`](https://arxiv.org/abs/2609.02093)、[`TopoBrick`](https://arxiv.org/abs/2607.06349)、[`TSPFN`](https://arxiv.org/abs/2608.31013)、[`CastClaw`](https://arxiv.org/abs/2608.30976)、[`TraceBench`](https://arxiv.org/abs/2608.27182) 等。
- 日期不一致：DailyArXiv 将 `TopoBrick` 列为 `2026-09-02`，但 arXiv v1 为 `2026-07-07`；本报按 v1 日期排序。`QABBA` 被列为 `2026-09-01`，但 arXiv v1 为 `2024-11-20`，超出窗口，降优先级且不纳入主列表。
- 因 DailyArXiv 尚未更新到 9 月 5–6 日，本轮没有可补充的周末新条目。

## 7. 今日结论

今日没有足够可靠的新条目可替换 9 月 2 日以来的主线。下一轮应优先检查 DailyArXiv 是否恢复更新、arXiv 周一批次，以及 GitHub 9 月 5–7 日新建仓库；特别关注 `agentic forecasting runtime`、`TSFM robustness harness`、`multimodal time-series reasoning` 与 `PV + frozen foundation model` 的交叉新增。

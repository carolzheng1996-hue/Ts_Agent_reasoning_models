# 2026-09-03 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-03 08:10:00 CST，Asia/Shanghai<br>
时间窗口：2026-06-03 至 2026-09-03<br>
优先来源：arXiv 官方 `abs` 页面、GitHub 官方 Repo API / Search API、OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI / PMLR 官网补检、官方项目页 / GitHub 仓库页<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`

## 今日摘要

- 截至 `2026-09-03 08:10 CST`，没有检到 `2026-09-03` 当天首发且足以改写主排序的新 arXiv 时序论文；当前窗口内最新的高相关论文仍集中在 `2026-08-31` 到 `2026-09-01`。
- foundation model 主线继续由 [`TSPFN`](https://arxiv.org/abs/2608.31013) 与 [`When the Martingale Never Stops Firing`](https://arxiv.org/abs/2608.30502) 领跑：前者代表 TSFM 向生理时序分类扩展，后者直接命中冻结 forecaster 的在线 gating / monitor 风险。
- agent 主线今天没有比 [`CastClaw`](https://arxiv.org/abs/2608.30976)、[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`MetaCaster`](https://arxiv.org/abs/2608.23473) 更晚且更贴题的官方新增；这三条仍是近期最值得跟踪的“forecasting agent / evaluation harness / deployment engineer”组合。
- reasoning 主线仍由 [`ConceptTS`](https://arxiv.org/abs/2608.21277)、[`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`REATS`](https://arxiv.org/abs/2608.10149)、[`TSRouter`](https://arxiv.org/abs/2607.08940)、[`TSCognition / TSAlign`](https://arxiv.org/abs/2606.22126) 组成，补检没有发现更晚且更高相关的替换项。
- GitHub 侧今天最值得记的活跃变化是 [`vinaykumarkv/Autonomous_Algo_Trading_Platform`](https://github.com/vinaykumarkv/Autonomous_Algo_Trading_Platform) 最近一次 `push` 已到 `2026-09-03 07:29 CST`；同时 [`Neuraxis-Labs/TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark) 与 [`shukebeta/baton`](https://github.com/shukebeta/baton) 仍是窗口内最直接的 benchmark / harness 基础设施项目。
- 今天是周四 `2026-09-03`，不是周五，因此本轮不更新周报文件。

## 0. 检索口径

- 只保留论文 `Submitted on` 日期或 GitHub 仓库 `created_at` 落在 `2026-06-03` 至 `2026-09-03` 的条目。
- 论文日期优先采用 arXiv 官方 `abs` 页；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` / `updated_at`。
- OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI、PMLR 本轮只作补检；未发现比下述 arXiv 主列表更晚且更高相关的窗口内新增项。
- 无法稳定确认首发日期的条目不进入主列表；若补检命中，则在备注中降优先级处理。

## 1. 时间序列基础模型最新研究

### [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.31013) / [GitHub](https://github.com/Jeremstym/TSPFN)
- 简短摘要：把 `TabPFN` 风格的 in-context learning 改造成面向生理时序的 foundation model，用结构化时间表示、位置编码和 `140,000` 条真实生理时序预训练提升跨域分类泛化。
- 相关性判断：高。它不是 forecasting-only TSFM，但明确展示了 foundation model 正从长序列预测扩展到垂直时序分类。

### [2026-08-31] [When the Martingale Never Stops Firing: Anytime-Valid Gating on Real Forecast Streams](https://arxiv.org/abs/2608.30502)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30502)
- 简短摘要：研究 anytime-valid 监控器如何给冻结 TSFM 的在线校正流程做 gating，结果显示真实 forecast stream 中 martingale monitor 会持续误触发，反而放大 drift response。
- 相关性判断：最高。它直接命中 `TSFM deployment + monitoring + harness` 的生产问题。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过对参数化合成时间序列生成器做 `ceteris paribus` 干预，系统测量 `Chronos-2` 与 `TimesFM-2.5` 在趋势、谐波、regime switch 和 energy release 等模式上的保真度与失效方式。
- 相关性判断：最高。它仍是近窗里最关键的 TSFM failure audit 论文之一。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测场景下，对比 TSFM 与 one-class、轻量 autoencoder、residual forecaster 的效果、延迟、显存和模型体积，结论是 TSFM 并不自动值得部署成本。
- 相关性判断：最高。它把 TSFM 讨论推进到“值不值得上生产”的关键问题。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world 的 living benchmark，用 prequential evaluation 持续观察 TSFM 在真实未来数据、分布漂移和突发事件下的长期表现。
- 相关性判断：最高。它是近三个月内最直接推动 TSFM 从静态榜单走向持续评测的工作之一。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性金融目标上会出现预测近乎平坦、排序能力失效的 `forecast collapse`，并提出 `CalibRank` 平衡校准与排序。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链路中的关键 failure mode。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30976)
- 简短摘要：提出 `CastClaw`，把数据、专用 forecaster、分析工具、用户约束和版本化执行记录接进同一 runtime，并用显式 stopping condition 管理预测修订。
- 相关性判断：最高。它是窗口内最新且最接近可交付 forecasting agent 的系统论文之一。

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：构建基于物理动力系统模拟的受控 benchmark，让 agent 根据时间序列判断系统参数是否被修改以及修改来源，并公开 trajectory 与 leaderboard。
- 相关性判断：最高。它把 time-series agent 研究推进到“如何可控地评测归因能力”。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：让多 agent 自动生成数据、训练轻量 forecaster，并通过 `meta-harness` 优化，在少样本和文本上下文下为部署准备更便宜的专用模型。
- 相关性判断：最高。它像“为生产环境自动准备时序模型”的工程代理。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：通过 `Revision`、`Alternative Strategy` 和 `Recombination` 三类演化算子，让 agent 在验证反馈约束下持续改进变点检测流水线。
- 相关性判断：高。它仍是近窗里最像“自演化时序研究员”的公开系统之一。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建持续更新数据环境下的 live benchmark，评测 agent 在 state identification、data summarization 和 outlook reasoning 上的稳定性，并按月更新。
- 相关性判断：最高。它仍是最值得直接复现的时序 agent benchmark 之一。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 提供时序原生工具、可复用分析例程和 episodic multimodal memory，以支持 grounded 且可审计的 contextualized time-series analysis。
- 相关性判断：最高。它仍是窗口内最直接命中 `timeseries harness` 主题的系统论文。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出领域概念并生成可执行标注规则，把多变量预测拆成命名概念瓶颈，支持直接的 concept-level intervention。
- 相关性判断：最高。它是“可解释 reasoning 融入 forecasting 内部表示”的代表作。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把原始时序转换成文本化模式描述和数值特征，再让 LLM 产出样本级、可解释的 ensemble 权重与路由决策。
- 相关性判断：高。它代表了“reasoning 作为 forecasting router”的清晰工程路线。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/mlvlab/ReasonCast)
- 简短摘要：把数值预测与文本解释合并到单次自回归生成中，同时提供 `ReasonTS-Bench` 作为联合评测基准，强调“预测为什么会这样”。
- 相关性判断：最高。它是当前窗口里最直接把 forecasting 与 reasoning 融成单一输出接口的工作之一。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：针对时序 reasoning 任务动态选择 `LLM`、`VLM` 与不同模型组合，并按用户的性能-成本偏好做图结构路由。
- 相关性判断：最高。它把 time-series reasoning 明确形式化为“模态与模型路由”问题。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 和 `TSAlign` 对齐框架，把时序理解扩展为 decoding、grounding、inferring、extrapolating、acting 五类认知任务。
- 相关性判断：最高。它仍是把 time-series reasoning 升格为独立研究对象的关键工作之一。

## 4. GitHub 上值得跟踪的新项目

### [2026-09-03] [vinaykumarkv/Autonomous_Algo_Trading_Platform](https://github.com/vinaykumarkv/Autonomous_Algo_Trading_Platform)

- 日期：创建 `2026-08-19T13:05Z`；最近一次 `push` `2026-09-02T23:29Z`（`2026-09-03 07:29 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/vinaykumarkv/Autonomous_Algo_Trading_Platform) / [GitHub 仓库](https://github.com/vinaykumarkv/Autonomous_Algo_Trading_Platform)
- 简短摘要：一个把 time-series forecasting、machine learning 和 multi-agent 交易分析串起来的端到端工程仓库。
- 相关性判断：中高。它更偏交易基础设施，但在 `time-series forecasting + multi-agent workflow` 上是今天最活跃的新项目之一。

### [2026-09-02] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：创建 `2026-07-12T11:33Z`；最近一次 `push` `2026-09-02T14:29Z`（`2026-09-02 22:29 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：一个面向 edge cases 的 TSFM robustness testing 工具仓库，标签直接覆盖 `benchmark`、`foundation-model`、`pytest`、`time-series`、`tsfm`。
- 相关性判断：最高。它处在 `time series + foundation model + benchmark harness` 的直接交集。

### [2026-09-02] [shukebeta/baton](https://github.com/shukebeta/baton)

- 日期：创建 `2026-06-12T07:38Z`；最近一次 `push` `2026-09-02T10:50Z`（`2026-09-02 18:50 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/shukebeta/baton) / [GitHub 仓库](https://github.com/shukebeta/baton)
- 简短摘要：一个面向结构化 agent 协作的 AI-to-AI communication harness，核心语言为 `Rust`。
- 相关性判断：中高。它不专属于时序，但非常贴近 `agent orchestration / harness` 基础设施层。

### [2026-09-01] [ahsiwt101/kairos-automl-research-agent](https://github.com/ahsiwt101/kairos-automl-research-agent)

- 日期：创建 `2026-08-30T04:11Z`；最近一次 `push` `2026-09-01T08:55Z`（`2026-09-01 16:55 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/ahsiwt101/kairos-automl-research-agent) / [GitHub 仓库](https://github.com/ahsiwt101/kairos-automl-research-agent)
- 简短摘要：一个强调“验证集是否在误导代理”的 autonomous ML research agent 原型。
- 相关性判断：高。它和 `AutoML / research agent / evaluation harness` 高度相关。

### [2026-08-31] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：创建 `2026-08-22T21:00Z`；最近一次 `push` `2026-08-31T05:33Z`（`2026-08-31 13:33 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个面向时序分析的 prototype multi-agent workflow，组合 GPT、Claude 和金融数据工具。
- 相关性判断：中高。成熟度有限，但它仍是窗口内最直接命中 `agentic + timeseries` 标签的新仓库之一。

### [2026-08-30] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：创建 `2026-07-12T15:04Z`；最近一次 `push` `2026-08-30T09:06Z`（`2026-08-30 17:06 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：一个面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：创建 `2026-07-11T03:23Z`；最近一次 `push` `2026-07-11T05:55Z`（`2026-07-11 13:55 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp) / [GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 暴露 anomaly detection、changepoint、decomposition、trend test 和 data-quality auditing 等 deterministic time-series 工具的 `MCP` 服务器。
- 相关性判断：高。它更偏工具层，但与 `timeseries harness / agent tooling` 直接相关。

## 5. 补检与低优先级说明

- OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI、PMLR 官网本轮补检未发现比上述 arXiv 主列表更晚且更高相关的窗口内新增。
- GitHub Search 里还检到 [`naveen-pulivarti/agentic-automl`](https://github.com/naveen-pulivarti/agentic-automl)（创建 `2026-08-10`，最近一次 `push` `2026-08-29`），但它更偏 tabular AutoML，不如 `Jesse-dry/AutoML-Agent` 和 `kairos-automl-research-agent` 贴近“时间序列 + agent”。
- 本轮未纳入日期不确定条目；若后续会议正式页面补出明确上线时间，再决定是否上调优先级。

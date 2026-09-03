# 2026-09-03 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-03 15:38:24 CST，Asia/Shanghai<br>
时间窗口：2026-06-03 至 2026-09-03<br>
优先来源：arXiv 官方 API / `abs` 页面、GitHub 官方 Repo API / Search API、[`DailyArXiv` 官方 README](https://github.com/zezhishao/DailyArXiv)、官方项目页、OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI / PMLR 官网补检、HuggingFace 页面补检<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic forecasting`

## 今日摘要

- 截至 `2026-09-03 15:38 CST`，没有检到 `2026-09-03` 当天首发且足以改写主排序的新 arXiv 主线论文；今天最值得新增记录的是 `2026-09-01` 的 [`When Does Online Adaptation Pay on the Edge?`](https://arxiv.org/abs/2609.01126)，它直接补强了 `TSFM / forecasting harness / edge deployment` 的评测方法论。
- foundation model 主线仍由 [`TSPFN`](https://arxiv.org/abs/2608.31013)、[`When the Martingale Never Stops Firing`](https://arxiv.org/abs/2608.30502)、[`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303) 构成近期最强组合；新增的 `edge adaptation` 论文更偏部署评测，但和 TSFM 上线流程高度相关。
- agent 主线今天没有比 [`CastClaw`](https://arxiv.org/abs/2608.30976)、[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`MetaCaster`](https://arxiv.org/abs/2608.23473) 更晚且更贴题的官方新增；不过 [`LLM Agents for Time-Series: A Survey`](https://arxiv.org/abs/2608.26226) 值得作为近窗综述入口补上。
- reasoning 主线继续由 [`ConceptTS`](https://arxiv.org/abs/2608.21277)、[`ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 领跑，没有发现更晚且更高相关的替代项。
- GitHub 侧今天最明显的变化是 [`sriixz/agentic-timeseries`](https://github.com/sriixz/agentic-timeseries) 最近一次 `push` 已推进到 `2026-09-03 11:59 CST`；[`vinaykumarkv/Autonomous_Algo_Trading_Platform`](https://github.com/vinaykumarkv/Autonomous_Algo_Trading_Platform) 也在今天 `07:29 CST` 更新。
- `DailyArXiv` 官方 README 已核验为 `Last update: 2026-09-03`。其 `Time Series` 区今天可稳定补到 `TSPFN`、`CastClaw`、`Martingale gating`，并新增 `When Does Online Adaptation Pay on the Edge?`；`QABBA` 虽在 README 中出现，但 arXiv 首发为 `2024-11-20`，超出三个月窗口，仅做降优先级说明。
- 今天是周四 `2026-09-03`，不是周五，因此本轮不更新周报文件。

## 0. 检索口径

- 只保留论文 `published` 日期或 GitHub 仓库 `created_at` 落在 `2026-06-03` 至 `2026-09-03` 的条目。
- 论文日期优先采用 arXiv 官方 API / `abs` 页面；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` / `updated_at`。
- `DailyArXiv` README 的日期只视作“被日报收录日期”，不能替代论文首发日期；若与 arXiv 官方日期冲突，以 arXiv 官方日期为准。
- OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI、PMLR 及官方项目页本轮只作补检；未发现比下述主列表更晚且更高相关的窗口内新增项。
- HuggingFace 与机构博客本轮未检到“日期可稳定确认、且比主列表更高相关”的新增条目；日期不稳定的页面不进入主列表。

## 1. 时间序列基础模型最新研究

### [2026-09-01] [When Does Online Adaptation Pay on the Edge? A Leakage-Free Evaluation of Warmup, Learning-Rate Selection, and Resource Trade-offs for Time-Series Forecasting](https://arxiv.org/abs/2609.01126)

- 日期：2026-09-01
- 来源：[arXiv](https://arxiv.org/abs/2609.01126) / [GitHub](https://github.com/keiotakmin/tsf-edge-adaptation)
- 简短摘要：在六个公开 forecast stream 上用 leakage-free streaming protocol 重估在线自适应收益，指出 warmup 预算与学习率选取会把“适配是否有效”的结论摇动数个百分点到十几个百分点，并给出 validation-only 的 commissioning 流程。
- 相关性判断：高。它不是新的 TSFM 架构，但直接命中 `TSFM / forecaster deployment / edge harness` 的评测与上线问题。

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

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.26226)
- 简短摘要：按问题类型系统梳理 time-series agent，覆盖 forecasting and reasoning、augmentation and synthesis、anomaly detection and diagnosis、decision support 四类系统，并比较其工具、记忆和评测设计。
- 相关性判断：高。它不是新系统本身，但很适合作为近三个月 agent 研究版图的索引。

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

### [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25897)
- 简短摘要：用 information bottleneck 统一 attribution 与 counterfactual explanation，显式约束 trivial explanation 和 out-of-distribution counterfactual。
- 相关性判断：中高。它更偏 explainability，但直接触及“reasoning 证据是否稳定可信”的方法学核心。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出领域概念并生成可执行标注规则，把多变量预测拆成命名概念瓶颈，支持直接的 concept-level intervention。
- 相关性判断：最高。它是“可解释 reasoning 融入 forecasting 内部表示”的代表作。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日和价格变化映射成结构化语义干预字段，选择性修正 TSFM 预测。
- 相关性判断：最高。它把 reasoning 从“解释预测”推进到“决定何时、如何干预预测”。

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

### [2026-09-03] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：创建 `2026-08-22T21:00Z`；最近一次 `push` `2026-09-03T03:59Z`（`2026-09-03 11:59 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个面向时序分析的 prototype multi-agent workflow，组合 GPT、Claude 和金融数据工具。
- 相关性判断：中高。成熟度有限，但它是今天最直接命中 `agentic + timeseries` 标签且仍在活跃更新的仓库。

### [2026-09-03] [vinaykumarkv/Autonomous_Algo_Trading_Platform](https://github.com/vinaykumarkv/Autonomous_Algo_Trading_Platform)

- 日期：创建 `2026-08-19T13:05Z`；最近一次 `push` `2026-09-02T23:29Z`（`2026-09-03 07:29 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/vinaykumarkv/Autonomous_Algo_Trading_Platform) / [GitHub 仓库](https://github.com/vinaykumarkv/Autonomous_Algo_Trading_Platform)
- 简短摘要：一个把 time-series forecasting、machine learning 和 multi-agent 交易分析串起来的端到端工程仓库。
- 相关性判断：中高。它更偏交易基础设施，但在 `time-series forecasting + multi-agent workflow` 上仍是今天最活跃的新项目之一。

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

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-26] [The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid](https://arxiv.org/abs/2608.25703)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25703)
- 简短摘要：把 `LSTM` 光伏功率预测与 PV-BESS 多目标调度联动，量化 forecast 精度对自发自用率、并网注入、购电成本和电池利用的影响。
- 相关性判断：高。它不是新架构竞赛文，但直接回答“更好的 PV 预测能给调度带来什么运营收益”。

### [2026-08-09] [A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning](https://arxiv.org/abs/2608.14698)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.14698)
- 简短摘要：提出基于 `ESP32` 的低成本超本地监测设备，在端侧运行小型前馈网络做 `24h` 太阳能电压预测，并支持部署后的增量学习。
- 相关性判断：中高。它更偏嵌入式实现，但与光伏预测的低成本落地和在线更新直接相关。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：在英国充电站 PV 站点上构建部署导向的 day-ahead pipeline，修正 timestamp 约定、加入 solar geometry 与 clearness-index 特征，并用 leakage-safe stacking 降低 daylight RMSE。
- 相关性判断：高。它强调“评测协议和物理先验”比堆更大模型更关键，和生产侧很贴近。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为冷启动光伏站点合成 physics-informed 历史序列，再让 `TabPFN-TS`、`Chronos-2` 等 TSFM 通过 inference-time conditioning 做 zero-shot 预测，并在 `440` 个 PV 站点上评估。
- 相关性判断：最高。它是过去三个月内最直接打通 `TSFM + 光伏功率预测` 的论文之一。

## 6. DailyArXiv 补检结论

### [2026-09-03 README 更新；条目日期 2026-09-01；论文首发 2026-09-01] [When Does Online Adaptation Pay on the Edge?](https://arxiv.org/abs/2609.01126)

- 日期：`DailyArXiv` README `Last update: 2026-09-03`；该条在 README 表中的日期为 `2026-09-01`；论文 arXiv 首发 `2026-09-01`
- 来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) / [arXiv](https://arxiv.org/abs/2609.01126) / [GitHub](https://github.com/keiotakmin/tsf-edge-adaptation)
- 简短摘要：今天 `DailyArXiv` 的 `Time Series` 区新增命中这篇 edge adaptation 评测论文，且 arXiv 官方日期明确落在三个月窗口内。
- 相关性判断：高。已补入本期主列表，作为 `TSFM / forecasting harness / edge deployment` 的方法论增量。

### [2026-09-03 README 更新；条目日期 2026-09-01；论文首发 2024-11-20] [QABBA: Symbolic Time-Series Compression via Integer-Quantized Aggregation](https://arxiv.org/abs/2411.15209)

- 日期：`DailyArXiv` README `Last update: 2026-09-03`；该条在 README 表中的日期为 `2026-09-01`；论文 arXiv 首发 `2024-11-20`
- 来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) / [arXiv](https://arxiv.org/abs/2411.15209)
- 简短摘要：`QABBA` 与 “LLM-based analysis of time series” 有弱相关，但它在今日 README 中出现主要因为版本更新，不是近三个月首发新论文。
- 相关性判断：低。因首发超出窗口，只在 `DailyArXiv` 补检结论中说明，不进入主列表。

### 其他补检说明

- `DailyArXiv` 今天的 `Time Series` 区还稳定包含 [`TSPFN`](https://arxiv.org/abs/2608.31013)、[`A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting`](https://arxiv.org/abs/2608.30976)、[`When the Martingale Never Stops Firing`](https://arxiv.org/abs/2608.30502)，三者均已在主列表保留。
- [`Modeling Information Blackouts in Missing Not-At-Random Time Series Data`](https://arxiv.org/abs/2601.01480) 虽然在 README 里时间较新，但主题更偏缺失值建模与交通时序，不直接命中 `agent / reasoning / foundation model / 光伏预测`，因此未升入主列表。
- OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI、PMLR 官方页补检未发现更晚且更高相关的窗口内新增项。
- HuggingFace 页面补检未发现“日期可稳定确认且优先级高于上述条目”的新增模型或数据集，因此不单列。

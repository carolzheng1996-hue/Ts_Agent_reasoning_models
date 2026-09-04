# 2026-09-04 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-04 15:46:34 CST，Asia/Shanghai<br>
时间窗口：2026-06-04 至 2026-09-04<br>
优先来源：arXiv 官方 `abs` 页面、GitHub 官方 Repo API / Search API、[`DailyArXiv` 官方 README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)、官方项目页、OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI 官网补检<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-09-04 15:46 CST`，没有检到 `2026-09-04` 当天首发、且比现有主线更强的新时序论文；但 `2026-09-02` 的 [`CoSPOT`](https://arxiv.org/abs/2609.02093) 仍是今天最该保留的新增，因为它把 `LLM + online forecasting + spectral prompt adaptation` 直接连在一起。
- 基础模型主线今天维持 `TSPFN`、`Martingale gating`、`Causal Analysis for TSFM`、`cost-aware industrial monitoring` 与 `LiveHouse-TS` 这组组合；其中 [`Frequency Selective Neural Networks as a Foundation Architecture for Time Series Learning`](https://arxiv.org/abs/2608.29012) 继续是“foundation architecture”叙事里最值得观察的补充。
- Agent 主线需要修正：[`CastFSR`](https://arxiv.org/abs/2608.03031) 不能缺席，它与 [`CastClaw`](https://arxiv.org/abs/2608.30976)、[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`MetaCaster`](https://arxiv.org/abs/2608.23473) 共同构成当前最清晰的 `forecasting agent + harness + reflection` 路线。
- Reasoning 主线仍由 [`CoSPOT`](https://arxiv.org/abs/2609.02093)、[`ConceptTS`](https://arxiv.org/abs/2608.21277)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 领跑，没有发现更晚且更高相关的替代项。
- GitHub 侧今天最值得新增记录的是 [`LegitScarf/AutoML`](https://github.com/LegitScarf/AutoML)，它在 `2026-09-04 07:19 UTC` 仍有推送，且定位是可自纠错的 agentic AutoML pipeline；时间序列垂直方向则仍由 [`sriixz/agentic-timeseries`](https://github.com/sriixz/agentic-timeseries)、[`lewis-lea/agentic-data-pipeline`](https://github.com/lewis-lea/agentic-data-pipeline) 与 [`Neuraxis-Labs/TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark) 更直接贴题。
- 光伏 / 光功率预测主线今天需要恢复完整栏目。近窗最强组合仍是 [`The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid`](https://arxiv.org/abs/2608.25703)、[`FarSky`](https://arxiv.org/abs/2608.11254)、[`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`PARA-PV`](https://arxiv.org/abs/2607.08079) 与 [`Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457)。
- `DailyArXiv` 已通过 raw README 实时核验为 `Last update: 2026-09-04`。其 `Time Series` 板块今天可直接确认的高相关命中包括 `CoSPOT`、`When Does Online Adaptation Pay on the Edge?` 和 `TopoBrick`；`QABBA` 虽被 `2026-09-01` 日报收录，但 arXiv 首发是 `2024-11-20`，超出三个月窗口，只能降优先级说明。
- 今天是周五 `2026-09-04`，因此除今日日报外，本轮同步更新周报 `weekly-brief-2026-W36.md`。

## 0. 检索口径

- 只保留论文首发日期或 GitHub 仓库 `created_at` 落在 `2026-06-04` 至 `2026-09-04` 的条目。
- 论文日期优先采用 arXiv 官方 `abs` 页面中的 `Submitted on`；若存在 `v2/v3`，仍以 `v1` 首发日期为准。
- GitHub 项目日期优先采用官方 Repo API 的 `created_at`；活跃度补充采用 `pushed_at` / `updated_at`。
- `DailyArXiv` README 的日期只视作“被日报收录日期”，不能替代论文首发日期；若与 arXiv 官方日期冲突，以 arXiv 官方日期为准。
- HuggingFace 本轮未发现与 GitHub 项目不重复、且日期可稳定核验的高相关新条目，因此不单列。
- 无法稳定确认日期的条目本轮不进入主列表；若仅作为观察项，会明确标注低优先级。

## 1. 时间序列基础模型最新研究

### [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.31013) / [GitHub](https://github.com/Jeremstym/TSPFN)
- 简短摘要：把 `TabPFN` 风格的 in-context learning 扩展到生理时序分类，用结构化时间表示、位置编码和大规模真实生理时序预训练提升跨域泛化。
- 相关性判断：高。它说明 TS foundation model 不再只盯 forecasting，而是在向 classification / tabular-temporal transfer 扩展。

### [2026-08-31] [When the Martingale Never Stops Firing: Anytime-Valid Gating on Real Forecast Streams](https://arxiv.org/abs/2608.30502)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30502)
- 简短摘要：研究 anytime-valid martingale monitor 在真实 forecast stream 上做在线 gating 时的误触发问题，指出它会系统性放大 drift response。
- 相关性判断：最高。它直接命中 `TSFM deployment + monitoring + harness` 的生产层问题。

### [2026-08-29] [Frequency Selective Neural Networks as a Foundation Architecture for Time Series Learning](https://arxiv.org/abs/2608.29012)

- 日期：2026-08-29
- 来源：[arXiv](https://arxiv.org/abs/2608.29012) / [GitHub](https://github.com/ad6174hhhh/FSNN)
- 简短摘要：提出频率选择神经网络 `FSNN`，用可微 Wiener-like filter bank 在频域中直接分离物理模式，强调“可解释频段”而不是黑盒时域表征。
- 相关性判断：高。它不属于当前主流大规模预训练 TSFM，但明确在争夺“foundation architecture for time series”这一方法学位置。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过参数化合成时序生成器做 `ceteris paribus` 干预，系统审计 `Chronos-2` 与 `TimesFM-2.5` 在趋势、谐波、regime switch 等模式上的保真度。
- 相关性判断：最高。它仍是近窗里最关键的 TSFM failure audit 论文之一。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测场景中比较 TSFM、one-class、轻量 autoencoder 与 residual forecaster 的效果、延迟和显存，指出 TSFM 并不自动值得部署成本。
- 相关性判断：最高。它把 TSFM 讨论从榜单精度推进到生产性价比。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world living benchmark，用 prequential evaluation 持续监测 TSFM 在真实未来数据、漂移和突发事件下的长期表现。
- 相关性判断：最高。它仍是把 TSFM 从静态 benchmark 推向持续评测的关键工作。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性金融目标上会出现预测平坦化和排序失灵的 `forecast collapse`，并提出 `CalibRank` 做校准与排序折中。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链路中的关键 failure mode。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30976)
- 简短摘要：提出 `CastClaw`，把数据、专用 forecaster、分析工具、用户约束和版本化执行记录接入同一 runtime，并用显式 stopping condition 管理预测修订。
- 相关性判断：最高。它是窗口内最新、且最接近可交付 forecasting agent 的系统论文之一。

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：构建基于物理动力系统模拟的受控 benchmark，让 agent 根据时间序列判断参数变化来源，并公开 leaderboard。
- 相关性判断：最高。它把 time-series agent 研究推进到“如何可控评测归因能力”。

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.26226)
- 简短摘要：按 forecasting and reasoning、augmentation and synthesis、anomaly detection and diagnosis、decision support 四类系统化梳理时序 agent，并比较其工具、记忆与评测设计。
- 相关性判断：高。它不是新系统本身，但仍是近窗 agent 研究图谱的高价值入口。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：让多 agent 自动生成数据、训练轻量 forecaster，并通过 `meta-harness` 优化，在少样本和文本上下文下为部署准备更便宜的专用模型。
- 相关性判断：最高。它像“为生产环境自动准备时序模型”的工程代理。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：通过 `Revision`、`Alternative Strategy` 和 `Recombination` 三类演化算子，让 agent 在验证反馈下持续改进变点检测流水线。
- 相关性判断：高。它仍是最像“自演化时序研究员”的公开系统之一。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建持续更新数据环境下的 live benchmark，评测 agent 在 state identification、data summarization 和 outlook reasoning 上的稳定性，并按月更新。
- 相关性判断：最高。它仍是最值得直接复现的时序 agent benchmark 之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段 agentic forecasting：轻量 forecaster 先给 forecast prior，再检索上下文并慢思考，最后做 reflection 修正时间与领域一致性。
- 相关性判断：最高。它是窗口内最直白的时间序列 Agent 新框架之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：使用 building knowledge graph 构建结构骨架，并由 agentic topology sampler 为目标传感器选择 exogenous variables，支持零样本 IoT forecasting。
- 相关性判断：高。它不如 `CastClaw` 通用，但非常贴近“agent 负责上下文选择与变量编排”的落地方向。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-02] [Compositional Spectral Prompts for LLM-based Online Time Series Forecasting](https://arxiv.org/abs/2609.02093)

- 日期：2026-09-02
- 来源：[arXiv](https://arxiv.org/abs/2609.02093) / [GitHub](https://github.com/seungyoon-Choi/CoSPOT)
- 简短摘要：提出 `CoSPOT`，保持 LLM 骨干冻结，仅通过频域 basis prompt 的组合来做在线适配，试图用“prompt-level composition”替代重型持续微调。
- 相关性判断：高。它不是显式 chain-of-thought reasoning，但属于 `LLM-based online time-series reasoning / adaptation` 的新路线。

### [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25897)
- 简短摘要：用 information bottleneck 统一 attribution 与 counterfactual explanation，约束 trivial explanation 和 out-of-distribution counterfactual。
- 相关性判断：中高。它更偏 explainability，但直接关系到 reasoning 证据是否稳定可信。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出领域概念并生成可执行标注规则，把多变量预测拆解到命名概念瓶颈上，支持 concept-level intervention。
- 相关性判断：最高。它是“可解释 reasoning 融入 forecasting 内部表示”的代表作。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日和价格变化映射成结构化语义干预字段，选择性修正 TSFM 预测。
- 相关性判断：最高。它把 reasoning 从“解释预测”推进到“决定何时、如何干预预测”。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把原始时序转换成文本化模式描述和数值特征，再让 LLM 生成样本级 ensemble 权重与路由决策。
- 相关性判断：高。它代表“reasoning 作为 forecasting router”的清晰工程路线。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/mlvlab/ReasonCast)
- 简短摘要：把数值预测和文本解释合并到同一次自回归生成中，并提供 `ReasonTS-Bench` 作为联合评测基准。
- 相关性判断：最高。它仍是窗口内把 forecasting 与 reasoning 融成单一接口的最直接工作之一。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：针对时序 reasoning 任务动态选择 `LLM`、`VLM` 与不同模型组合，并按性能-成本偏好做图结构路由。
- 相关性判断：最高。它把 time-series reasoning 明确形式化为“模态与模型路由”问题。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 和 `TSAlign` 对齐框架，把时序理解扩展为 decoding、grounding、inferring、extrapolating、acting 五类认知任务。
- 相关性判断：最高。它仍是把 time-series reasoning 升格为独立研究对象的关键工作之一。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列

#### [2026-09-03] [omror/autoPilot](https://github.com/omror/autoPilot)

- 日期：创建 `2026-09-03T20:40Z`；最近一次 `push` `2026-09-03T22:24Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/omror/autoPilot) / [GitHub 仓库](https://github.com/omror/autoPilot)
- 简短摘要：一个 domain-agnostic 的 agentic AutoML pipeline，新仓库但定位非常直接。
- 相关性判断：中高。它不专属于时序，但和 `AutoML agent` 主题高度相关，而且是窗口内最新创建的候选之一。

#### [2026-08-30] [Hammad7-dot/AI-Data-Science-Agent](https://github.com/Hammad7-dot/AI-Data-Science-Agent)

- 日期：创建 `2026-08-30T18:18Z`；最近一次 `push` `2026-09-03T16:52Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Hammad7-dot/AI-Data-Science-Agent) / [GitHub 仓库](https://github.com/Hammad7-dot/AI-Data-Science-Agent)
- 简短摘要：一个把 CSV 数据集转换为验证后模型与报告的 Python AutoML agent，带 adaptive experimentation、Streamlit UI 和可选 Docker 沙箱。
- 相关性判断：高。它更偏通用 ML agent，但在 `machine learning + AutoML + report loop` 上很完整。

#### [2026-08-30] [ahsiwt101/kairos-automl-research-agent](https://github.com/ahsiwt101/kairos-automl-research-agent)

- 日期：创建 `2026-08-30T04:11Z`；最近一次 `push` `2026-09-01T08:55Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/ahsiwt101/kairos-automl-research-agent) / [GitHub 仓库](https://github.com/ahsiwt101/kairos-automl-research-agent)
- 简短摘要：一个强调“验证集是否在误导代理”的 autonomous ML research agent 原型。
- 相关性判断：高。它和 `AutoML / research agent / evaluation harness` 的交集很清晰。

#### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：创建 `2026-08-22T21:00Z`；最近一次 `push` `2026-09-03T03:59Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个面向时序分析的 prototype multi-agent workflow，组合 GPT、Claude 与金融数据工具。
- 相关性判断：中高。成熟度有限，但它仍是近窗里最直接命中 `timeseries agent` 标签的仓库之一。

#### [2026-08-16] [lewis-lea/agentic-data-pipeline](https://github.com/lewis-lea/agentic-data-pipeline)

- 日期：创建 `2026-08-16T17:34Z`；最近一次 `push` `2026-09-03T23:16Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/lewis-lea/agentic-data-pipeline) / [GitHub 仓库](https://github.com/lewis-lea/agentic-data-pipeline)
- 简短摘要：一个面向时序数据摄取和清洗的 agentic pipeline，可作为 forecasting / analytics agent 的前置数据层。
- 相关性判断：中高。它不直接做 forecasting，但非常贴近 `timeseries harness / data prep agent`。

#### [2026-08-09] [LegitScarf/AutoML](https://github.com/LegitScarf/AutoML)

- 日期：创建 `2026-08-09T04:47Z`；最近一次 `push` `2026-09-04T07:19Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/LegitScarf/AutoML) / [GitHub 仓库](https://github.com/LegitScarf/AutoML)
- 简短摘要：一个 agentic AutoML 系统，会自行剖析数据集、生成训练代码、在沙箱中执行并对失败进行自纠错，直到产出可下载模型包。
- 相关性判断：高。它不是时序专用，但在 `AutoML + agent + self-correction loop` 上比多数新仓库更完整，而且今天仍有活跃推送。

#### [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：创建 `2026-07-12T11:33Z`；最近一次 `push` `2026-09-03T13:50Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：面向 edge cases 的 TSFM robustness testing 工具仓库，标签直接覆盖 `benchmark`、`foundation-model`、`time-series` 与 `tsfm`。
- 相关性判断：最高。它处在 `time series + foundation model + benchmark harness` 的直接交集。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：创建 `2026-07-11T03:23Z`；最近一次 `push` `2026-07-11T05:55Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp) / [GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 暴露 anomaly detection、changepoint、decomposition、trend test 和 data-quality auditing 等 deterministic time-series 工具的 `MCP` 服务器。
- 相关性判断：高。它更偏工具层，但与 `timeseries harness / agent tooling` 直接相关。

### 4.2 光伏功率预测

#### [2026-08-06] [Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)

- 日期：2026-08-06
- 来源：[GitHub 仓库](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)
- 简短摘要：一个围绕物理先验和数据驱动特征的 day-ahead 光伏功率预测工程仓库，和部署导向 PV pipeline 主题直接贴近。
- 相关性判断：中。它胜在足够新，但更像单论文 / 学位项目配套代码，工程可复用性暂时弱于 `solarbench` 和 `PARA-PV`。

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：创建 `2026-08-04T20:00Z`；最近一次 `push` `2026-08-13T13:16Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/shahoismael/solarbench) / [GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：一个 harmonized、cross-climate 的 photovoltaic power forecasting benchmark，覆盖四个气候带和统一评测协议。
- 相关性判断：高。它更偏 benchmark，但在 `光伏功率预测 + 统一评测协议` 上很有工程价值。

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：创建 `2026-07-09T02:27Z`；最近一次 `push` `2026-07-17T09:04Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/weican1103/PARA-PV) / [GitHub 仓库](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方实现，公开了 retrieval、frozen TSFM prior 和 shift-correction 的光伏流水线代码。
- 相关性判断：高。它是光伏功率预测垂直方向最贴近当前主线的公开代码。

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

### [2026-08-06] [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.11254)
- 简短摘要：利用 all-sky imager 和 latent diffusion 做小时内太阳辐照度生成式预测，同时显著提升 ramp event 检测。
- 相关性判断：高。它偏辐照度而非直接功率，但对短时 PV power pipeline 很贴近。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点 day-ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线。
- 相关性判断：最高。它是本窗口内最贴近实际部署的公开 PV 功率预测论文。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：系统测量数值天气预报误差如何向下游 PV 功率预测模型传导，并比较不同深度模型在天气输入偏差下的鲁棒性。
- 相关性判断：高。它非常贴近真实部署里“天气输入一旦偏掉，预测会怎么崩”的工程问题。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把物理约束检索、冻结 Chronos 先验、distribution shift correction 和 physics-constrained loss 串成统一 PV 预测框架。
- 相关性判断：最高。它是 `retrieval + frozen TSFM + PV` 的最核心条目。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对 cold-start PV 站点，用 physics-informed synthetic histories 构造推理期可用上下文，再比较多种 TSFM 的 zero-shot / feedback 策略。
- 相关性判断：最高。它是目前最直接把 foundation model 引入冷启动 PV 预测的工作之一。

## 6. DailyArXiv 补检结论

- 检查对象：[`zezhishao/DailyArXiv` 官方 README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)；本轮通过 raw README 实时拉取确认 `Last update: 2026-09-04`。
- 今日 `Time Series` 板块可直接确认的高相关命中包括：
  - [`TopoBrick`](https://arxiv.org/abs/2607.06349v2)，README 收录日期为 `2026-09-02`，但 arXiv `v1` 首发日期是 `2026-07-07`；正文采用 `2026-07-07`，并说明 README 日期只是“被日报收录时间”。
  - [`Compositional Spectral Prompts for LLM-based Online Time Series Forecasting`](https://arxiv.org/abs/2609.02093v1)，README 收录日期 `2026-09-02`，与 arXiv 窗口一致，已纳入正文高优先级条目。
  - [`When Does Online Adaptation Pay on the Edge?`](https://arxiv.org/abs/2609.01126v1)，README 收录日期 `2026-09-01`，与 arXiv 窗口一致，继续保留为 deployment / harness 主线。
- [`QABBA`](https://arxiv.org/abs/2411.15209v4) 虽在 README 中标成 `2026-09-01`，但 arXiv 首发为 `2024-11-20`，已超出三个月窗口，因此只作降优先级说明，不进入正文主列表。
- 本轮 raw README 关键词补检没有命中 `TSPFN`、`CastClaw`、`ReasonCast`、`REATS`、`TSRouter`、`FSNN` 等正文主线条目，因此 `DailyArXiv` 仍然适合作为补检源，而不是唯一主源。

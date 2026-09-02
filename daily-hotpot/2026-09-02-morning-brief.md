# 2026-09-02 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-02 15:36:14 CST，Asia/Shanghai<br>
时间窗口：2026-06-02 至 2026-09-02<br>
优先来源：arXiv 官方 API / `abs` 页面、GitHub 官方 Repo API / Search API、`DailyArXiv` 官方 README、OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI 官网补检、官方项目页、公开可访问 GitHub 项目页<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic forecasting`

## 今日摘要

- 截至 `2026-09-02 15:36 CST`，没有检到 `2026-09-02` 当天首发且足以改写主排序的高相关新论文；今天的主要增量是 `DailyArXiv` README 已更新到 `2026-09-02`，并稳定补到 [`TSPFN`](https://arxiv.org/abs/2608.31013)、[`A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting`](https://arxiv.org/abs/2608.30976) 与 [`When the Martingale Never Stops Firing`](https://arxiv.org/abs/2608.30502)。
- foundation model 主线里，今天最值得新加的一条是 `2026-08-31` 的 `Martingale gating` 论文：它直接讨论如何给冻结 TSFM 的在线纠偏流程加监控与停止规则，和 agent / harness 部署关系很近。
- 光伏主线需要补回 `2026-08-26` 的 [`The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid`](https://arxiv.org/abs/2608.26575)；它比“纯模型精度”更进一步，把 forecast 误差如何影响 PV-BESS 调度说清楚了。
- GitHub 侧今天最值得记的活跃仓库仍是 [`Neuraxis-Labs/TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark) 与 [`shukebeta/baton`](https://github.com/shukebeta/baton)，最近一次 `push` 都已推进到 `2026-09-02`。
- 今天是周三 `2026-09-02`，不是周五，因此本轮不更新周报文件。

## 0. 检索口径

- 只保留论文 `published` 日期或 GitHub 仓库 `created_at` 落在 `2026-06-02` 至 `2026-09-02` 的条目。
- 论文日期优先采用 arXiv 官方 API；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` / `updated_at`。
- `DailyArXiv` README 中的日期只视作“被日报收录的日期”，不能替代 arXiv 官方首发日期；若两者冲突，以 arXiv 官方日期为准。
- OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI 官网本轮只作为补检源；未发现比下述 arXiv 主列表更晚且更高相关的窗口内新增项。
- 本轮主列表没有使用日期不确定条目；若日期无法稳定确认，则只在补检说明中降优先级处理。

## 1. 时间序列基础模型最新研究

### [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.31013) / [GitHub](https://github.com/Jeremstym/TSPFN)
- 简短摘要：把 `TabPFN` 风格的 in-context learning 改造成面向生理时序的 TSFM，通过结构化时间表示、位置编码和 `140,000` 条真实生理时序预训练来提升跨域分类能力。
- 相关性判断：高。它不是 forecasting-only TSFM，但代表了 foundation model 正从长序列预测扩展到垂直时序分类。

### [2026-08-31] [When the Martingale Never Stops Firing: Anytime-Valid Gating on Real Forecast Streams](https://arxiv.org/abs/2608.30502)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30502)
- 简短摘要：研究如何用 anytime-valid statistical monitor 给冻结 TSFM 的在线纠偏流程做 gating，结果显示理论上有效的 martingale monitor 在真实 forecast stream 上会持续误触发，反而放大 drift response。
- 相关性判断：最高。它直接命中 `TSFM deployment + monitoring + harness`，是今天新增里最接近生产落地风险控制的一篇。

### [2026-08-25] [EncoTESS: Age-Sensitive Encodings from Raw TESS Light Curves](https://arxiv.org/abs/2608.25019)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.25019)
- 简短摘要：提出面向 `TESS` 光变曲线的小型 TSFM，专门处理观测噪声、异方差、非规则采样和大缺口，并将表征用于恒星年龄推断与下游分类。
- 相关性判断：中高。虽然是天文垂直场景，但它清楚展示了“小体量、强归纳偏置 TSFM”的一条有效路线。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过对参数化合成生成器做 `ceteris paribus` 干预，系统测量 `Chronos-2` 与 `TimesFM-2.5` 对趋势、谐波、regime switch 与 energy release 等结构模式的保真度和失效方式。
- 相关性判断：最高。它仍是近窗里最重要的 TSFM failure audit 论文之一。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测与异常检测设置下，对比 TSFM 与轻量 one-class / autoencoder / residual 模型的效果、延迟和部署成本。
- 相关性判断：最高。它把 TSFM 讨论推进到“值不值得上生产”这个更关键的问题。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world 的 living benchmark，以真实未来数据和 prequential evaluation 持续观察 TSFM 在季节变化、分布漂移和突发事件中的长期表现。
- 相关性判断：最高。它是近三个月里最直接推动 TSFM 从静态榜单转向持续评测的工作之一。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性金融目标上会出现预测近乎平坦、排序能力失效的 `forecast collapse`，并提出 `CalibRank` 兼顾校准与排序。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链路中的一类关键 failure mode。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30976)
- 简短摘要：提出 `CastClaw`，把数据、专用 forecaster、分析工具、用户反馈和版本化执行记录联成一个 forecasting-oriented harness，并用显式 stopping rule 管理预测修正。
- 相关性判断：最高。它是窗口内最新且最接近“可交付 forecasting agent”的系统论文之一。

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：构建基于物理动力系统模拟的受控 benchmark，让 agent 依据时间序列判断系统参数是否被修改以及修改来源。
- 相关性判断：最高。它把 time-series agent 的讨论推进到“如何可控地评测归因能力”。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：让多 agent 在少样本与文本上下文下自动生成数据、训练轻量 forecaster，并通过 `meta-harness` 优化得到更适合部署的专用模型。
- 相关性判断：最高。它很像“为生产环境自动准备时序模型”的工程代理。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：通过 `Revision`、`Alternative Strategy` 与 `Recombination` 三类演化算子，让 agent 在验证反馈约束下持续改进变点检测流水线。
- 相关性判断：高。它仍是近窗里最像“自演化时序研究员”的公开系统之一。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建持续更新数据环境下的 live benchmark，评测 agent 在 state identification、summarization 和 outlook reasoning 等任务上的稳定性。
- 相关性判断：最高。它仍是最值得直接复现的时序 agent benchmark 之一。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较直接喂数值、让 LLM 充当 coding agent、以及两者结合的三种方式，发现代码工具能显著提升时序理解表现，但错误率仍然偏高。
- 相关性判断：最高。它仍是评估 `coding agent + time series` 能力边界的关键基线。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 提供可执行时序工具、可复用分析例程和 episodic multimodal memory，以支持可审计的 contextualized time-series analysis。
- 相关性判断：最高。它仍是本轮窗口内最直接命中 `timeseries harness` 主题的系统论文。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25897)
- 简短摘要：用 information bottleneck 统一 attribution 与 counterfactual explanation，显式规避 trivial explanation 与 out-of-distribution counterfactual。
- 相关性判断：中高。它更偏 explainability，但直接触及“如何给出稳定 reasoning 证据”的方法论核心。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出领域概念并生成可执行标注规则，把多变量预测拆解为可读、可干预的 concept bottleneck。
- 相关性判断：最高。它是“可解释 reasoning 融入 forecasting 内部表示”的代表作。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日和价格变化映射成结构化语义干预字段，选择性修正 TSFM 预测。
- 相关性判断：最高。它把 reasoning 从“解释预测”推进到“决定何时、如何干预预测”。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：让 LLM 同时读取文本化时序模式描述与数值特征，生成样本级、可解释的 ensemble 权重与路由策略。
- 相关性判断：高。它代表了“reasoning 作为 forecasting router”的清晰工程路线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：针对时序 reasoning 任务动态选择 `LLM`、`VLM` 与不同模型组合，并在性能与成本偏好下做图结构路由。
- 相关性判断：最高。它把 time-series reasoning 明确形式化为“模态与模型路由”问题。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 和 `TSAlign` 框架，把时序理解扩展为 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知型任务。
- 相关性判断：最高。它仍是把 time-series reasoning 升格为独立研究对象的关键工作之一。

## 4. GitHub 上值得跟踪的新项目

### [2026-09-02] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：创建 `2026-07-12T11:33Z`；最近一次 `push` `2026-09-01T23:29Z`（`2026-09-02 07:29 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：一个面向 edge cases 的 TSFM robustness testing 工具仓库，主题标签直接覆盖 `benchmark`、`foundation-model`、`time-series`、`tsfm`。
- 相关性判断：最高。它处在 `time series + foundation model + benchmark harness` 的直接交集。

### [2026-09-02] [shukebeta/baton](https://github.com/shukebeta/baton)

- 日期：创建 `2026-06-12T07:38Z`；最近一次 `push` `2026-09-02T03:05Z`（`2026-09-02 11:05 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/shukebeta/baton) / [GitHub 仓库](https://github.com/shukebeta/baton)
- 简短摘要：一个聚焦结构化 agent 协作的 AI-to-AI communication harness，当前主要语言为 `Rust`。
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
- 相关性判断：中高。成熟度有限，但它是窗口内最直接命中 `agentic + timeseries` 标签的新仓库之一。

### [2026-08-30] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：创建 `2026-07-12T15:04Z`；最近一次 `push` `2026-08-30T09:06Z`（`2026-08-30 17:06 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：一个面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：创建 `2026-07-11T03:23Z`；最近一次 `push` `2026-07-11T05:55Z`（`2026-07-11 13:55 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp) / [GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 暴露 anomaly detection、changepoint、decomposition、trend test 与 data-quality auditing 等 deterministic time-series 工具的 `MCP` 服务器。
- 相关性判断：高。它更偏工具层，但与 `timeseries harness / agent tooling` 直接相关。

## 5. 光功率 / 光伏功率预测最新研究

### [2026-08-26] [The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid](https://arxiv.org/abs/2608.26575)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.26575)
- 简短摘要：把 `LSTM` 光伏功率预测与 PV-BESS 多目标调度联动，量化 forecast 精度对自发自用率、并网注入、购电成本与电池利用的影响。
- 相关性判断：高。它不是 foundation-model 路线，但对“预测如何真正进入能源控制闭环”非常关键。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088) / [GitHub](https://github.com/FdehghanSoton/AI_Pipeline_PV_Forecasting)
- 简短摘要：围绕真实站点 day-ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线，并强调 rolling-origin 评测。
- 相关性判断：最高。它仍是窗口内最贴近真实站点部署的公开 PV 预测论文之一。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：针对 NWP 误差的时空相关性与物理耦合性，系统比较 PatchTST、GRU、N-HITS 与 LightGBM 在光伏预测中的鲁棒性与解释性。
- 相关性判断：最高。它把 PV forecasting 从单纯比精度推进到“面对天气预报误差时谁更稳”。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：把 physics-aware retrieval、冻结 foundation model 与 distribution shift correction 结合起来做光伏功率预测。
- 相关性判断：最高。它同时命中 `PV forecasting + retrieval + foundation model` 三个关键词。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：用 physics-informed synthetic histories 为冷启动光伏站点构造可用上下文，再让 `Chronos-2`、`TabPFN-TS` 等 TSFM 做 zero-shot / feedback forecasting。
- 相关性判断：最高。它仍是近三个月里最直接把 TSFM 引入 PV 冷启动场景的论文之一。

## 6. DailyArXiv 补检结论

- 本轮直接核验 [`zezhishao/DailyArXiv`](https://github.com/zezhishao/DailyArXiv) 官方 README 与仓库 API，确认默认分支仍是 `master`，README `Last update` 已推进到 `2026-09-02`。
- 当前 `Time Series` 区里，和本主题高相关、且能稳定确认的窗口内条目包括 [`TSPFN`](https://arxiv.org/abs/2608.31013)、[`A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting`](https://arxiv.org/abs/2608.30976)、[`When the Martingale Never Stops Firing`](https://arxiv.org/abs/2608.30502)、[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`SAGE`](https://arxiv.org/abs/2608.26829)、[`When Does Context Routing Help?`](https://arxiv.org/abs/2608.25128)、[`NVExplain`](https://arxiv.org/abs/2608.25080)、[`EncoTESS`](https://arxiv.org/abs/2608.25019)。
- [`ConceptTS`](https://arxiv.org/abs/2608.21277) 与 [`MetaCaster`](https://arxiv.org/abs/2608.23473) 今天没有在 README 中稳定检到，因此它们继续依据 arXiv 官方日期保留在主列表，而不是依赖 `DailyArXiv` 补检。
- `DailyArXiv` 今天能稳定检到相关但超窗的条目是 [`Multimodal Collaborative Debate for Zero-Shot Time Series Reasoning (TS-Debate)`](https://arxiv.org/abs/2601.19151)。README 收录日期是 `2026-08-28`，但 arXiv 首发属于 `2026-01`，因此只保留为“补检命中但超窗”的降优先级说明。
- 本轮未在 `2026-09-02` 的 README 中稳定检到 `Time-R1`、`Perseus` 或 `TS-Reasoner`；它们不作为今天的补检增量。

## 7. 备注

- `HuggingFace` 本轮没有纳入 HF-only 新项目，因为没有稳定确认到比上述 GitHub / arXiv 条目更高相关、且日期与来源都完整的新模型页。
- 如果明天继续跟踪，优先补看两个方向：一是 `2026-09-02` 之后是否出现新的 TSFM benchmark / routing / harness 论文；二是 `TSFM-Robustness-Benchmark` 与 `baton` 是否继续有连续 push。

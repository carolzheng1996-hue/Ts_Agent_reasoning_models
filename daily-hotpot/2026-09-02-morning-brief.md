# 2026-09-02 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-02 09:03:00 CST，Asia/Shanghai<br>
时间窗口：2026-06-02 至 2026-09-02<br>
优先来源：arXiv 官方 API / `abs` 页面、GitHub 官方 Repo API / Search API、OpenReview / ICLR / PMLR / AAAI 官网补检、官方项目页、公开可访问 GitHub 仓库页<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`

## 今日摘要

- 截至 `2026-09-02 09:03 CST`，今天最值得补入主列表的两条新鲜条目是 [`TSPFN`](https://arxiv.org/abs/2608.31013) 与 [`A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting`](https://arxiv.org/abs/2608.30976)；两者都在 `2026-08-31` 首发，分别对应更直接的 physiological TSFM 与 forecasting-oriented harness agent。
- 本轮时间窗口严格收紧到 `2026-06-02` 至 `2026-09-02`，因此昨日报中位于边界的 [`TimeSage-MT`](https://arxiv.org/abs/2606.01498) 不再纳入主列表；其 arXiv 首发时间是 `2026-05-31T23:34Z`，换算到 `Asia/Shanghai` 为 `2026-06-01`。
- foundation model 主线的高优先级焦点仍然是 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)、[`Do Time-Series Foundation Models Pay Off for Industrial Monitoring?`](https://arxiv.org/abs/2608.22968)、[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299) 与 [`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106)；今天新增的 `TSPFN` 说明 TSFM 正继续向中小数据、分类型医疗时序落地。
- agent 主线今天最值得关注的是 `CastClaw`、[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`MetaCaster`](https://arxiv.org/abs/2608.23473)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 与 [`TimeClaw`](https://arxiv.org/abs/2606.05404) 这组“系统 + benchmark + harness”组合。
- reasoning 主线仍以 [`TSRouter`](https://arxiv.org/abs/2607.08940)、[`TSCognition / TSAlign`](https://arxiv.org/abs/2606.22126)、[`ConceptTS`](https://arxiv.org/abs/2608.21277)、[`ReasonCast`](https://arxiv.org/abs/2608.15291) 与 [`REATS`](https://arxiv.org/abs/2608.10149) 为核心；`Unified Information Bottleneck` 则补强了时序 explanation / counterfactual reasoning 的方法论。
- GitHub 侧今天最值得记录的是窗口内仍在活跃推进的六个项目：[`Neuraxis-Labs/TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)、[`iDEA-iSAIL-Lab-UIUC/TimeClaw`](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[`shukebeta/baton`](https://github.com/shukebeta/baton)、[`sriixz/agentic-timeseries`](https://github.com/sriixz/agentic-timeseries)、[`ahsiwt101/kairos-automl-research-agent`](https://github.com/ahsiwt101/kairos-automl-research-agent)、[`Sachithx/GraphMLE`](https://github.com/Sachithx/GraphMLE)。
- 今天是周三 `2026-09-02`，不是周五，因此本轮不更新周报文件。

## 0. 检索口径

- 只保留论文 `published` 日期或 GitHub 仓库 `created_at` 落在 `2026-06-02` 至 `2026-09-02` 的条目。
- 论文日期优先采用 arXiv 官方 API；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` / `updated_at`。
- OpenReview、ICLR、PMLR、AAAI 只作为补检源；本轮未发现比当前 arXiv 主列表更新、且更高相关的窗口内新增项。
- 如果日期无法稳定确认，则条目标记为 `不确定` 并降级；本轮主列表没有 `不确定` 日期条目。
- 边界剔除项：`TimeSage-MT` 虽与主题高度相关，但其首发时间落在 `2026-06-01`（上海时区），因此本轮不纳入。

## 1. 时间序列基础模型最新研究

### [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.31013) / [GitHub](https://github.com/Jeremstym/TSPFN)
- 简短摘要：把 `TabPFN` 式 in-context learning 重写为面向生理时序的 TSFM，通过结构化时序表示、位置编码和 `140,000` 条真实生理时序预训练，提升低到中等样本规模下的跨域分类能力。
- 相关性判断：高。它不是通用 forecasting TSFM，但很直接地代表了“foundation model 进入垂直时序分类”的新趋势，而且是本轮窗口内最新的明确 TSFM 条目之一。

### [2026-08-25] [EncoTESS: Age-Sensitive Encodings from Raw TESS Light Curves](https://arxiv.org/abs/2608.25019)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.25019)
- 简短摘要：提出面向 `TESS` 光变曲线的轻量 TSFM，专门处理观测噪声、异方差、非规则采样和大缺口，并把输出表征用于恒星年龄推断与下游分类任务。
- 相关性判断：中高。虽然是天文垂直场景，但它清楚展示了“小体量、强归纳偏置 TSFM”在科学时序中的路线。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过对参数化合成生成器实施 `ceteris paribus` 干预，系统检查 `Chronos-2` 和 `TimesFM-2.5` 对趋势、谐波、regime switch 与 energy release 等结构模式的保真度与失效模式。
- 相关性判断：最高。它直接回答了 TSFM 在部署前应如何做结构性 failure audit，是 foundation model 评测与风控的关键论文。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测、异常声学检测和楼宇残差诊断任务上，对比 TSFM 与轻量 one-class / autoencoder / residual 模型的效果、资源占用与部署价值。
- 相关性判断：最高。它把 TSFM 讨论从“有没有能力”推进到“在生产监测里值不值得上”。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world 的 living benchmark，以真实未来数据和 prequential evaluation 持续观测 TSFM 在季节变化、分布漂移和突发事件中的长期有效性。
- 相关性判断：最高。它是近三个月里最直接推动 TSFM 走向“持续评测而非静态榜单”的工作之一。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性金融目标上会出现“预测近乎平坦、排序能力失效”的 forecast collapse，并提出兼顾校准与排序的 `CalibRank`。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链路中最危险的一类 failure mode。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30976)
- 简短摘要：提出 `CastClaw`，把数据、专用 forecaster、分析工具、用户反馈和版本化执行记录联到一个 forecasting-oriented harness 中，用显式 stopping rule 决定保留、修正或升级预测。
- 相关性判断：最高。它是窗口内最新且最贴近“可交付 forecasting agent”形态的系统论文之一。

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：构建基于物理动力系统模拟的受控 benchmark，让 agent 依据时间序列判断参数是否被修改以及修改来源，从而严格测试 root-cause attribution。
- 相关性判断：最高。它把 time-series agent 的讨论从“能不能跑起来”推进到“如何可控地评测归因能力”。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：让多 agent 在少样本和文本上下文下自动生成数据、训练轻量 forecaster，并通过 `meta-harness` 优化得到更适合部署的专用模型。
- 相关性判断：最高。它把 agent 定位成“为生产环境准备 forecaster 的自动工程师”，很适合和 TSFM 落地场景结合。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子，让 agent 在验证反馈约束下持续改进金融时间序列变点检测流水线。
- 相关性判断：最高。它仍是近三个月里最像“自演化时序研究员”的公开系统之一。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建持续更新数据环境下的 live benchmark，评测 agent 在 state identification、summarization 和 outlook reasoning 等任务上的稳定性。
- 相关性判断：最高。它是当前最值得直接复现的时序 agent benchmark 之一。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较直接喂数值、让 LLM 充当 coding agent、以及两者结合的三种方式，发现代码工具能显著提升时序理解表现，但错误率依然偏高。
- 相关性判断：最高。它仍是评估 `coding agent + time series` 能力边界的关键基线。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 提供可执行时序工具、可复用分析例程和 episodic multimodal memory，使其能在丰富上下文中进行可审计的时间序列分析。
- 相关性判断：最高。它是本轮窗口内最直接命中 `timeseries harness` 主题的系统论文。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25897)
- 简短摘要：用 information bottleneck 统一 attribution 与 counterfactual explanation，显式避免 trivial explanation 与 out-of-distribution counterfactual。
- 相关性判断：中高。它更偏 explainability，但直接触及“时序模型如何给出稳定、可验证 reasoning 证据”的方法论核心。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出领域相关概念并生成可执行标注规则，把多变量预测过程拆解为可读、可干预的 concept bottleneck。
- 相关性判断：最高。它把 LLM 引入时序预测的内部表示层，是“可解释 reasoning”路线中最直接的新进展之一。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日和价格变化映射成结构化语义干预字段，选择性修正 time-series foundation model 的预测。
- 相关性判断：最高。它把 reasoning 从“解释预测”推进到“决定何时、如何干预预测”。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：让 LLM 同时读取文本化时序模式描述与数值特征，生成样本级、可解释的 ensemble 权重与路由策略。
- 相关性判断：高。它代表了“reasoning 作为 forecasting router”的清晰工程路线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：针对时序 reasoning 任务动态选择 `LLM`、`VLM` 以及不同模型组合，并在性能与成本偏好下做图结构路由。
- 相关性判断：最高。它把 time-series reasoning 直接形式化为“模态与模型路由”问题，是当前很清晰的一条 reasoning engineering 路线。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 和 `TSAlign` 框架，把时序理解扩展为 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知型任务。
- 相关性判断：最高。它是近三个月里最直接把 time-series reasoning 升格为独立研究对象的工作之一。

## 4. GitHub 上值得跟踪的新项目

### [2026-09-02] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：创建 `2026-07-12T11:33Z`；最近一次 `push` `2026-09-01T23:29Z`（`2026-09-02 07:29 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：面向 edge cases 的 TSFM robustness testing 工具仓库，主题标签直接覆盖 `foundation-model`、`time-series`、`tsfm`，当前 `stars=2`。
- 相关性判断：最高。它处在 `time series + foundation model + benchmark harness` 的直接交集，且今天早晨仍在活跃更新。

### [2026-09-02] [shukebeta/baton](https://github.com/shukebeta/baton)

- 日期：创建 `2026-06-12T07:38Z`；最近一次 `push` `2026-09-02T00:34Z`（`2026-09-02 08:34 CST`）
- 来源：[GitHub Repo API](https://api.github.com/repos/shukebeta/baton) / [GitHub 仓库](https://github.com/shukebeta/baton)
- 简短摘要：一个聚焦结构化 agent 协作的 AI-to-AI communication harness，当前语言为 `Rust`，`open issues=5`。
- 相关性判断：中高。它不专属于时序，但非常贴近 `timeseries harness / agent orchestration` 的基础设施层。

### [2026-09-01] [ahsiwt101/kairos-automl-research-agent](https://github.com/ahsiwt101/kairos-automl-research-agent)

- 日期：创建 `2026-08-30T04:11Z`；最近一次 `push` `2026-09-01T08:55Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/ahsiwt101/kairos-automl-research-agent) / [GitHub 仓库](https://github.com/ahsiwt101/kairos-automl-research-agent)
- 简短摘要：一个强调“验证集是否误导代理”的 autonomous ML research agent 原型，当前语言为 `Python`。
- 相关性判断：高。它虽然不是时序项目，但与 `AutoML / research agent / evaluation harness` 高度相关。

### [2026-08-31] [Sachithx/GraphMLE](https://github.com/Sachithx/GraphMLE)

- 日期：创建 `2026-08-29T05:14Z`；最近一次 `push` `2026-08-31T14:01Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Sachithx/GraphMLE) / [GitHub 仓库](https://github.com/Sachithx/GraphMLE)
- 简短摘要：一个 autonomous ML research agent，主打 typed graph mutations、ablation-guided search、leakage checks 与 statistical validation，主题标签直接包含 `automl`、`research-agent`。
- 相关性判断：高。即使不面向时序，它也比普通 showcase 仓库更接近可借鉴的 ML research harness。

### [2026-08-31] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：创建 `2026-08-22T21:00Z`；最近一次 `push` `2026-08-31T05:33Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个面向时序分析的 prototype multi-agent workflow，组合 GPT、Claude 与金融数据工具，当前语言为 `Python`。
- 相关性判断：中高。成熟度有限，但仍是窗口内最直接命中 `agentic + timeseries` 标签的新仓库之一。

### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：创建 `2026-06-03T17:33Z`；最近一次 `push` `2026-06-07T05:03Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/iDEA-iSAIL-Lab-UIUC/TimeClaw) / [GitHub 仓库](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`Harnessing Generalist Agents for Contextualized Time Series` 的官方代码仓库，当前 `stars=2`、`forks=1`、许可证为 `Apache-2.0`。
- 相关性判断：最高。它是本轮窗口内最直接的 `timeseries harness` 代码基线之一。

## 5. 补检与结论

- `OpenReview / ICLR / PMLR / AAAI` 补检后，没有发现比上述 arXiv 主列表更新、且明确落在窗口内的更高优先级新条目。
- 本轮主列表没有使用日期不确定条目；凡是只能确认“会议年份”而不能稳定确认首发日期的候选项，均未纳入。
- 如果明天继续跟踪，最值得优先补看的新增风险点是：`2026-09-01` 之后是否出现新的 TSFM benchmark / routing / harness 论文，以及 `TSFM-Robustness-Benchmark`、`baton`、`agentic-timeseries` 是否继续有连续 push。

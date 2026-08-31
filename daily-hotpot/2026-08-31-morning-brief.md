# 2026-08-31 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-31 09:12:00 CST，Asia/Shanghai<br>
时间窗口：2026-05-31 至 2026-08-31<br>
优先来源：arXiv 官方 `abs` 页面、GitHub 官方 Repo API / Search API、AI HOT 官方 API、OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI 官网补检<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic forecasting`

## 今日摘要

- 截至 `2026-08-31 09:12 CST`，没有检到 `2026-08-31` 首发且足以改写主排序的时间序列 foundation model / agent / reasoning 新论文；今天的有效变化主要是补入两条 `2026-08-25` 至 `2026-08-26` 的高相关论文，以及更新 GitHub 项目的最新活跃度。
- 基础模型方向今天补入 [`EncoTESS`](https://arxiv.org/abs/2608.25019)。它是一个面向天文光变曲线的轻量 `TSFM`，虽然场景更垂直，但标题和方法都明确落在 time-series foundation model 主线内。
- Agent 方向今天补入 [`LLM Agents for Time-Series: A Survey`](https://arxiv.org/abs/2608.26226)。它不是新 benchmark，但对最近三个月快速增殖的 time-series agent 设计空间给出了任务导向 taxonomy，适合当路线图阅读。
- 论文主线仍以 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)、[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`MetaCaster`](https://arxiv.org/abs/2608.23473)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`TimeRLM`](https://arxiv.org/abs/2608.03391) 为最高信号锚点，没有被今天的新检索结果替代。
- GitHub 侧确认到 [`Jesse-dry/AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent) 与 [`Neuraxis-Labs/TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark) 都在 `2026-08-30` 有新 push，说明这两条 `time-series + AutoML`、`TSFM robustness harness` 线仍在活跃推进。
- 新增仓库中，[`allyyr/Tabular-AutoML-Agent`](https://github.com/allyyr/Tabular-AutoML-Agent) 与 [`ashandilgith/timeseries_prediction_agent-`](https://github.com/ashandilgith/timeseries_prediction_agent-) 都创建于 `2026-08-30`，但当前描述弱、star 为 `0`、仓库体量较小，因此只作为低优先级观察项，不进入主列表。
- AI HOT 官方 `paper` 精选流近 7 天内未检到比主列表更高相关的时序论文；OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI 官网补检也没有发现比当前主列表更晚且更强的新增项。
- 今天是周一 `2026-08-31`，不是周五，因此本轮不更新周报。

## 0. 检索口径

- 只保留论文 `submitted` 日期或 GitHub 仓库 `created_at` 落在 `2026-05-31` 至 `2026-08-31` 的条目。
- 论文日期优先采用 arXiv 官方 `abs` 页面 `submission history`；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` 或 `updated_at`。
- AI HOT 仅作为近 7 天论文动态的补检信号；若与 arXiv 官方日期冲突，以 arXiv 为准。
- OpenReview、ACL / NeurIPS / ICLR / ICML / KDD / AAAI 官网本轮用于补检，没有发现比主列表更晚且更高相关的新增项。
- 日期无法稳定确认的候选项不进入主列表；本轮主列表无“不确定日期”条目。

## 1. 时间序列基础模型最新研究

### [2026-08-25] [EncoTESS: Age-Sensitive Encodings from Raw TESS Light Curves](https://arxiv.org/abs/2608.25019)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.25019)
- 简短摘要：提出面向 `TESS` 天文光变曲线的轻量时间序列基础模型 `EncoTESS`，显式处理观测噪声、异方差、非规则采样和大缺口，并把编码映射到可用于恒星年龄推断与下游分类的固定潜变量空间。
- 相关性判断：中高。它更偏垂直领域 TSFM，但属于今天新确认到的窗口内 foundation model 进展，说明 TSFM 正继续向“小模型 + 强领域结构”方向分化。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：用参数化合成生成器做 `ceteris paribus` 干预，系统审计 `Chronos-2`、`TimesFM-2.5` 等 TSFM 对趋势、周期、regime switch、energy release 等模式的保持能力，并把失真与预训练分布联系起来。
- 相关性判断：最高。它直接回答“TSFM 在什么模式上会系统失真”，对 foundation model 选型、风控和 benchmark 设计都很关键。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测任务上比较 `MOMENT`、`Chronos-T5`、`TimesFM 2.5` 与轻量异常检测 / 残差模型，强调 TSFM 收益高度任务相关，不能默认替代专用模型。
- 相关性判断：最高。它把 TSFM 讨论从“能不能做”推进到“值不值得部署”。

### [2026-08-20] [Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking](https://arxiv.org/abs/2608.20005)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20005)
- 简短摘要：提出 `SATS`，把 patch size 作为显式 scale，通过 token alignment 与 hybrid masking 在多采样频率数据上做更统一的 TSFM 预训练。
- 相关性判断：高。它代表 TSFM 研究继续从模型尺寸竞争转向预训练制度与跨频率泛化能力竞争。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出基于真实未来数据的 living benchmark，用 prequential evaluation 检查 TSFM 在季节变化、分布漂移和突发事件下的长期有效性。
- 相关性判断：最高。它把 TSFM 评测从静态 snapshot 推到持续有效性验证。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测振幅塌缩与横截面排序失效，并提出 `CalibRank` 在校准和排序之间折中。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链路中的关键 failure mode。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182)
- 简短摘要：构建 simulation-based 的受控 root-cause attribution benchmark，让 agent 在机械系统生成的时间序列观测上判断“是否发生参数改动、改动的是哪一个参数”，并比较不同 agent 的分析策略。
- 相关性判断：最高。它把 time-series agent 研究从“做一个系统”推进到“如何在可控环境里严格评测 agent 的归因能力”。

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.26226)
- 简短摘要：按任务而不是零散组件组织 time-series agent 设计空间，把现有系统分成 forecasting/reasoning、augmentation/synthesis、anomaly/diagnosis、decision support 四类，并汇总代表数据集、环境与工具设计。
- 相关性判断：高。它不是新系统，但很适合作为近三个月 time-series agent 版图的路线图和检索入口。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：提出 `meta-harness-optimized` 多 agent 框架，用 agentic data generation 与文本上下文，在少样本条件下自动训练轻量专用 forecaster。
- 相关性判断：最高。它把 agent 定位成“为部署准备专用 forecaster 的工程师”，而不是直接替代 forecaster。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进变点检测实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它仍是最像“自演化时序研究员”的公开系统之一。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再把这些结构化上下文条件化进 diffusion forecaster。
- 相关性判断：高。虽然更偏多模态 forecasting，但它展示了 agent 如何把文本场景信息转成可控预测信号。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖真实机构场景和持续更新数据环境的 live benchmark，评测 agent 在 state identification、summarization、outlook reasoning 等任务上的稳定性。
- 相关性判断：最高。它仍是当前最值得直接复现的 time-series agent benchmark。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较直接喂数值、让 LLM 做 coding agent，以及两者结合三种设置，发现可访问代码工具的 agent 在时序理解基准上更强，但错误率仍明显偏高。
- 相关性判断：最高。它仍是 time-series coding agent 能力评测的关键基线。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25897)
- 简短摘要：用 information bottleneck 统一 attribution 与 counterfactual explanation，避免 trivial explanations 和 out-of-distribution counterfactuals。
- 相关性判断：中高。它更偏 explainability，但确实触及“时序模型如何给出稳定、可验证解释”的 reasoning 边界。

### [2026-08-25] [Structured Frequency-Domain Evidence for LLM-Based Time-Series Anomaly Detection](https://arxiv.org/abs/2608.24113)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24113)
- 简短摘要：在 LLM 零样本时序异常检测中同时暴露去季节化时域证据和 FFT 频域证据，用全局与局部频谱结构补足纯时域输入的缺口。
- 相关性判断：高。它说明 reasoning 效果不只取决于模型，还高度取决于喂给模型的结构化证据设计。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出任务相关概念并生成可执行标注规则，把预测过程拆成可读的概念瓶颈。
- 相关性判断：最高。它把 LLM 引入时序预测内部表示层，是“可解释 reasoning”最直接的新进展之一。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日、价格变化等事件语义映射成结构化干预字段，对 foundation forecaster 做选择性修正。
- 相关性判断：最高。它把 reasoning 从“解释输出”推进到“决定何时以及如何干预 forecast”。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把时序模式文本描述与数值特征联合送入 LLM，使其生成样本级、可解释的 ensemble 权重，并通过两阶段微调学习路由策略。
- 相关性判断：高。它代表“reasoning 作为 forecasting router”这条路线。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式工具调用过程，让模型借助代码与视觉能力多轮操纵时序信号并逐步收缩定位范围。
- 相关性判断：最高。它仍是当前最清晰的 `tool-using time-series reasoning` 路线之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：把 context-aware forecasting 写成 `Fast-Slow-Reflect` 三阶段流程：先选轻量 forecaster 建 prior，再检索上下文做慢思考，最后迭代反思和修正预测。
- 相关性判断：高。它是近期最明确把“慢思考”写进时序 forecasting agent 工作流的一条实现路线。

## 4. GitHub 上值得跟踪的最新项目

### [2026-08-28] [rvitmonisha/automl-researcher](https://github.com/rvitmonisha/automl-researcher)

- 日期：2026-08-28（创建），2026-08-28（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/rvitmonisha/automl-researcher) / [GitHub 仓库](https://github.com/rvitmonisha/automl-researcher)
- 简短摘要：一个面向 `AutoML research platform` 的新仓库，组合 automated model selection、RAG 与 AI agents，目前体量不大但创建时间很新。
- 相关性判断：中。它不直接面向 time-series，但命中本轮要求跟踪的 `AutoML + agent` 观察项。

### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-27（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：面向时序分析的 prototype multi-agent workflow，组合 GPT、Claude 与金融数据工具。
- 相关性判断：中高。成熟度有限，但它仍是窗口内最直接带 `agentic + timeseries` 标签的新仓库之一。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push），2026-08-21（最近一次 API 更新时间）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，直接面向 `agentic time series analysis in evolving environments`。
- 相关性判断：最高。它仍是最值得直接复现的 time-series agent benchmark 工程资产。

### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（创建），2026-08-03（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Xiaoyu-Tao/CastFSR) / [GitHub 仓库](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 论文官方实现，围绕 context-aware forecasting 的 `Fast-Slow-Reflect` agent 工作流提供代码。
- 相关性判断：高。它不是 benchmark，但非常适合拿来研究“慢思考 forecasting agent”到底如何编排。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（创建），2026-08-05（最近一次 push），2026-08-27（最近一次 API 更新时间）
- 来源：[GitHub Repo API](https://api.github.com/repos/OpenTSLM/TimeRLM) / [GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：`TimeRLM` 官方实现，围绕长上下文时间序列异常定位提供可运行代码与递归推理流程。
- 相关性判断：最高。它同时命中 `time series reasoning`、`tool use` 和可复现实验资产。

### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-30（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`，而且昨天刚有新 push，值得继续跟踪。

### [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：2026-07-12（创建），2026-08-30（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：系统化测试 `TSFM` edge cases 的 robustness benchmark 工具仓库，最近一次 push 更新到 `2026-08-30`。
- 相关性判断：最高。它把“如何稳定评测 TSFM failure modes”推进成了持续活跃的工程资产。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（创建），2026-07-11（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp) / [GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 暴露 typed time-series statistics 工具，覆盖 anomaly detection、changepoint、decomposition、trend test 与 data-quality auditing。
- 相关性判断：高。它更像工具层 / harness，而不是模型创新，但与 time-series agent 工作流直接相关。

### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（创建），2026-06-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/AkshajKashyap/autoresearch-timeseries-agent) / [GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：一个可复现的本地 time-series forecasting benchmark 与 deterministic experiment agent，包含 synthetic / CSV 数据、baseline、diagnostics、report 和 CI。
- 相关性判断：高。它更偏 research harness，但正符合 `timeseries agent / harness` 跟踪目标。

## 5. 光伏功率预测最新研究

### [2026-08-09] [A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning](https://arxiv.org/abs/2608.14698)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.14698)
- 简短摘要：提出低成本 IoT 环境监测与嵌入式 solar forecasting 一体化装置，在设备侧执行 24 小时太阳能电压预测，并支持部署后的增量学习。
- 相关性判断：中高。它更偏边缘部署与设备侧学习，但对低成本光伏场景落地价值很强。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点 day-ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线，并强调 rolling-origin 评测。
- 相关性判断：最高。它仍是窗口内最贴近真实站点部署的公开 PV 预测论文之一。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：把 physics-aware retrieval、冻结 foundation model 和 distribution shift correction 结合起来做 PV 功率预测，试图在天气变化和站点迁移下保持稳健。
- 相关性判断：最高。它同时命中 `PV forecasting + retrieval + foundation model` 三个关键词，是这三个月里最值得跟踪的一篇交叉论文。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：用 physics-informed synthetic histories 为冷启动光伏站点构造可用上下文，再让 TSFM 在 zero-shot / feedback 条件下做 cold-start 预测。
- 相关性判断：最高。它仍是近三个月里最直接把 TSFM 引入光伏冷启动场景的论文之一。

## 6. 补检与降优先级观察

- AI HOT 官方 `paper` 精选流本轮未返回比主列表更高相关的时间序列论文，因此只作为近 7 天补检信号，不单独升权。
- GitHub Search API 没有检到高质量且代码信号足够强的新 `timeseries harness` 仓库，最新命中的 `2026-08-30` 新仓库大多仍处在原型或空仓状态。
- [`allyyr/Tabular-AutoML-Agent`](https://github.com/allyyr/Tabular-AutoML-Agent)：创建于 `2026-08-30`，但当前无描述、`stargazers_count=0`，仅作低优先级观察项。
- [`ashandilgith/timeseries_prediction_agent-`](https://github.com/ashandilgith/timeseries_prediction_agent-)：创建于 `2026-08-30`，但当前无描述、`size=10`、`stargazers_count=0`，只说明“有新仓库出现”，不具备稳定研究信号。
- 本轮尝试直接读取 `DailyArXiv` 官方 README 原始文件时，常见 raw 路径没有稳定返回可用内容，因此今天不依据 `DailyArXiv` 新增主列表条目；主列表完全基于 arXiv 官方页面和 GitHub 官方 API。

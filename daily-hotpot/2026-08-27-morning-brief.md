# 2026-08-27 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-27 15:36:10 CST，Asia/Shanghai<br>
时间窗口：2026-05-27 至 2026-08-27<br>
优先来源：arXiv 官方 `abs` 页面 / arXiv 官方 API、GitHub 官方 Repo API / 仓库页、`DailyArXiv` 官方 GitHub README、官方项目页<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`AutoML agent`、`machine learning harness`、`photovoltaic forecasting`、`solar power forecasting`

## 今日摘要

- 截至 `2026-08-27 15:36 CST`，未检到 `2026-08-26 15:37 CST` 之后、同时满足“近三个月内首发/创建、与时间序列 Agent 或 reasoning 或 foundation model 强相关、且日期可核验”的更高优先级新论文；当前最高信号条目仍是 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)、[`MetaCaster`](https://arxiv.org/abs/2608.23473)、[`ReasonCast`](https://arxiv.org/abs/2608.15291) 和 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)。
- 近三个月的主线已经很清楚：`TSFM` 研究正从“更大模型”转向“偏差审计、live benchmark、部署性价比”；`Agent` 研究则从“让 LLM 直接预测”转向“让 agent 负责编排、选择性 reasoning、自演化实验和工具调用”。
- GitHub 侧最值得持续跟踪的不是泛 AI 仓库，而是和时序工作流直接耦合的几个项目：[`OpenTSLM/TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`TimeSage-Series/TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`Jesse-dry/AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent)、[`Janesong-AI/TSFM-Robustness-Benchmark`](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)。
- 光伏 / 光功率预测方向今天没有比 [`A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning`](https://arxiv.org/abs/2608.14698)、[`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088) 和 [`Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457) 更晚且更高相关的新论文；工程侧新仓库有增量，但研究优先级仍以后两篇论文与冷启动 TSFM 路线为主。
- `DailyArXiv` 官方 README 今日已更新到 `2026-08-27`；其 `Time Series` 区能补检到 `Causal Analysis`、`MetaCaster`、`ConceptTS`，但未见 `ReasonCast`、`TimeRLM`、`TimeSage-EV`，而 `Perseus` 的 arXiv 首发日期为 `2025-10`，因此只作降优先级备注。
- 今天是周四，`ISO week 35`，不触发周五周报更新条件，因此本轮只生成晨报。

## 0. 检索口径

- 只保留论文首次公开日期或 GitHub `created_at` 落在 `2026-05-27` 至 `2026-08-27` 的条目。
- 论文日期优先采用 arXiv 官方 `Submitted on` / 页面日期；GitHub 项目优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` 或 `updated_at`。
- `DailyArXiv` 仅作为补检与交叉核验来源，不覆盖 arXiv 首发日期。
- 无法稳定确认日期的候选条目不进入主列表；若只验证到仓库创建时间而论文本身早于窗口，会在相关性判断中降权说明。

## 1. 时间序列基础模型最新研究

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过对参数化合成时序生成器施加 `ceteris paribus` 干预，系统审计 `Chronos-2` 与 `TimesFM-2.5` 对趋势、谐波、regime switch、energy-release 等模式的保持能力，并把失败模式与预训练数据偏差联系起来。
- 相关性判断：最高。它直接回答“TSFM 在哪些模式上会系统性失真”，比静态 leaderboard 更接近真实选型。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测场景对 `MOMENT`、`Chronos-T5`、`TimesFM 2.5` 与轻量异常检测/残差模型做成本感知比较，结论是 TSFM 的收益高度任务相关，不能默认替代专用轻量模型。
- 相关性判断：最高。它直接命中“TSFM 是否值得部署”的工程问题。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world living benchmark，以真实未来数据做 prequential evaluation，检查 TSFM 在季节变化、分布漂移和突发事件下的长期有效性，而不是只在固定测试窗中排名。
- 相关性判断：最高。它把 TSFM 评测从静态 benchmark 推向持续有效性验证。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测振幅塌缩与横截面排序失效，并提出 `CalibRank` 在校准与排序之间做折中。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链条中的关键 failure mode。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，显式控制 dataset exposure、context window、prediction horizon 与 missingness，强调 TSFM 的进展不只来自架构，也来自训练分布设计。
- 相关性判断：高。它对“如何系统训练 TSFM”给出了一条更工程化的路线。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：提出 `meta-harness-optimized` 多 agent 框架，用 agentic data generation 与文本上下文，在少样本条件下自动训练轻量专用 forecaster。
- 相关性判断：最高。它非常明确地把 agent 定位为“编排与造数系统”，而不是直接承担部署预测。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进变点检测实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它是近三个月里最直接的“自演化 time-series research agent”代表作之一。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再用这些结构化上下文信号条件化 diffusion forecaster。
- 相关性判断：高。虽然更偏多模态预测，但它展示了 agent 如何把弱对齐文本转成可控 forecast guidance。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖真实机构场景和持续更新数据环境的 live benchmark，评测 agent 在 state identification、summarization、outlook reasoning 上的稳定性。
- 相关性判断：最高。它仍是当前窗口里最接近真实动态环境的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两套相互隔离的量化研究 agent 循环，通过保留已验证证据推动后续 proposal，形成 bounded recursive self-improvement。
- 相关性判断：中高。场景偏量化，但方法论与 time-series research harness、agentic experimentation 高度相通。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较直接喂数值、让 LLM 做 coding agent，以及两者结合三种设置，发现有代码工具访问的 agent 在时序理解基准上更强，但仍保留明显推理缺口。
- 相关性判断：最高。它是时间序列 agent 能力评测的基础参照物。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出任务相关概念并生成可执行标注规则，把预测过程拆成历史上下文、局部区间与完整 horizon 三类可读概念瓶颈。
- 相关性判断：最高。它把 LLM 带入时序预测内部表示层，是“可解释 reasoning”最直接的新进展之一。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日、价格变化等事件语义映射成结构化干预字段，对 foundation forecaster 做选择性修正。
- 相关性判断：最高。它把 reasoning 从“解释输出”推进到“决定何时以及如何干预 forecast”。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式工具调用过程，让模型借助代码与视觉能力多轮操纵时序信号，并逐步收缩定位范围。
- 相关性判断：最高。它是当前最清晰的 `tool-using time-series reasoning` 路线之一。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 框架，把时序理解从 pattern recognition 推进到 grounding、inferring、extrapolating 与 acting 等认知推理任务。
- 相关性判断：高。它仍是近三个月中最系统的 time-series reasoning benchmark 化工作之一。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：通过代码代理逐步查询数据、运行统计检验并解释结果，验证“工具调用”比纯文本读数更有效，但也揭示出错误率仍然偏高。
- 相关性判断：高。它更像 reasoning 能力下限测试，而不是完整方法论文，但对后续路线判断很关键。

## 4. GitHub 上值得跟踪的最新项目

### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：较早期的 multi-agent workflow 原型，直接面向 time-series analysis，并结合 GPT、Claude 与金融数据工具。
- 相关性判断：中高。成熟度有限，但它是窗口内最直接带 `agentic + timeseries` 标签的新仓库之一。

### [2026-08-21] [cw-wan/SELA](https://github.com/cw-wan/SELA)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/cw-wan/SELA) / [GitHub 仓库](https://github.com/cw-wan/SELA)
- 简短摘要：`Grammar of the Wave` 官方仓库，面向可解释多变量时序事件检测，强调 neuro-symbolic `VLM agents`。
- 相关性判断：中高。仓库本身在窗口内新建，但关联论文主页指向更早的 arXiv 版本，因此作为“新项目”可跟踪，作为“新论文”不宜升到更高优先级。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push），2026-08-21（API 最近更新时间）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，直接面向 `agentic time series analysis in evolving environments`。
- 相关性判断：最高。它是当前窗口里最值得直接复现的 time-series agent benchmark 资产。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（创建），2026-08-05（最近一次 push），2026-08-26（API 最近更新时间）
- 来源：[GitHub Repo API](https://api.github.com/repos/OpenTSLM/TimeRLM) / [GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：`TimeRLM` 官方实现，围绕长上下文时间序列异常定位提供可运行代码与推理流程。
- 相关性判断：最高。它同时命中 `time series reasoning`、`tool use` 和可复现实验资产。

### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`，而且场景与能源时序预测高度贴近。

### [2026-07-12] [Janesong-AI/TSFM-Robustness-Benchmark](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)

- 日期：2026-07-12（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Janesong-AI/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)
- 简短摘要：一个面向 edge cases 的系统化 `TSFM` robustness testing 工具仓库。
- 相关性判断：最高。它把“如何稳定评测 TSFM failure modes”推进成可复用工程资产。

### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（创建），2026-06-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/AkshajKashyap/autoresearch-timeseries-agent) / [GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：一个可复现的本地 time-series forecasting benchmark 与 experiment agent，包含 synthetic/CSV 数据、baseline、diagnostics、report 与 deterministic config runner。
- 相关性判断：高。它更像 research harness，而不是模型创新，但正符合 `timeseries agent / harness` 追踪目标。

## 5. 光伏功率预测最新研究

### [2026-08-09] [A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning](https://arxiv.org/abs/2608.14698)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.14698)
- 简短摘要：提出低成本 IoT 环境监测与嵌入式 solar forecasting 一体化装置，在设备侧执行 24 小时太阳能电压预测，并支持部署后的增量学习。
- 相关性判断：中高。更偏边缘部署与设备侧学习，但对低成本光伏场景的落地价值很强。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点 day-ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线，并强调 rolling-origin 评测。
- 相关性判断：最高。它是窗口内最贴近真实站点部署的公开 PV 预测论文之一。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：用 physics-informed synthetic histories 为冷启动光伏站点构造可用上下文，再让 TSFM 在 zero-shot / feedback 条件下做 cold-start 预测。
- 相关性判断：最高。它是近三个月里最直接把 TSFM 引入光伏冷启动场景的论文之一。

## 6. DailyArXiv 补检结论

- `DailyArXiv` 官方 README 当前 `Last update` 为 `2026-08-27`，默认分支仍为 `master`。
- 在 `Time Series` 区，窗口内且与本简报主题直接相关的条目可稳定补检到 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)、[`MetaCaster`](https://arxiv.org/abs/2608.23473) 和 [`ConceptTS`](https://arxiv.org/abs/2608.21277)。
- [`Perseus: Interactive Time Series Segmentation with Sparse Supervision via Stateful Memory`](https://arxiv.org/abs/2510.09930) 虽出现在 `2026-08-27` README 中，但 arXiv 首发日期为 `2025-10-13`，超出三个月窗口，因此只保留为“README 展示项”备注，不进入主列表。
- 今天的 README 中未检到 `ReasonCast`、`TimeRLM`、`TimeSage-EV` 或 `TS-Reasoner`。这更像 `DailyArXiv` 的当日选取结果，而不是对这些条目相关性的否定，因此主列表仍以官方首发日期和主题相关性为准。

## 7. 结论

- 过去三个月里，时间序列基础模型方向最值得投入精力的关键词已经从“更强 zero-shot”切换到“偏差审计、robustness、live evaluation 与成本收益分析”。
- 时间序列 Agent 方向最清晰的工程路线不是让单个大模型直接端到端预测，而是让 agent 负责数据生成、实验编排、上下文筛选、选择性语义干预和工具调用。
- 时间序列 reasoning 方向的高价值增量主要集中在 `ConceptTS`、`ReasonCast`、`TimeRLM` 与 `TSCognition` 这几条线上，分别对应概念瓶颈、选择性语义干预、递归工具推理和认知型 benchmark。
- 自上次运行以来，没有检到更高优先级的新条目替代上述主线，因此今天最合理的动作不是盲目扩表，而是持续跟踪这些条目的代码仓库、后续版本、living benchmark 更新，以及光伏部署论文的可复现资产。

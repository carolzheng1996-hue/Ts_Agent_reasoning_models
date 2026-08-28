# 2026-08-28 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-28 09:06:33 CST，Asia/Shanghai<br>
时间窗口：2026-05-28 至 2026-08-28<br>
优先来源：arXiv 官方 API / `abs` 页面、GitHub 官方 Repo API / 仓库页、GitHub Search、OpenReview / 会议官网补检<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`AutoML agent`、`machine learning harness`

## 今日摘要

- 截至 `2026-08-28 09:06 CST`，没有检到 `2026-08-27` 或 `2026-08-28` 首发、且相关性高于当前主线的时间序列基础模型 / Agent / reasoning 新论文；当前最高信号仍是 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)、[`MetaCaster`](https://arxiv.org/abs/2608.23473)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`ReasonCast`](https://arxiv.org/abs/2608.15291) 和 [`TimeRLM`](https://arxiv.org/abs/2608.03391)。
- 今天通过 arXiv 官方 API 补入两篇值得关注的晚 8 月条目：[`Towards A Unified Information Bottleneck Framework for Time Series Explanations`](https://arxiv.org/abs/2608.25897) 与 [`Structured Frequency-Domain Evidence for LLM-Based Time-Series Anomaly Detection`](https://arxiv.org/abs/2608.24113)。二者不改写主排序，但把 `explanation / evidence design` 补成了 reasoning 支线。
- 近三个月的主线进一步收敛为三条：`TSFM robustness + live evaluation + cost-awareness`、`agent 负责编排/造数/自演化实验`、`reasoning 只在必要时介入并与工具调用或结构化证据绑定`。
- GitHub 侧今天没有出现比 [`sriixz/agentic-timeseries`](https://github.com/sriixz/agentic-timeseries)、[`TimeSage-Series/TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`OpenTSLM/TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`Jesse-dry/AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent) 更高信号的新仓库；但 [`Lkhanaajav/timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp) 和 [`AkshajKashyap/autoresearch-timeseries-agent`](https://github.com/AkshajKashyap/autoresearch-timeseries-agent) 仍值得作为 harness/tooling 观察项保留。
- 今天是周五，`ISO week 35`，因此本轮除晨报外还同步更新周报 `weekly-brief-2026-W35.md`。

## 0. 检索口径

- 只保留论文 `published` 日期或 GitHub `created_at` 落在 `2026-05-28` 至 `2026-08-28` 的条目。
- 论文日期优先采用 arXiv 官方 API / `abs` 页面；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` 或 `updated_at`。
- OpenReview、ACL / NeurIPS / ICLR / ICML / KDD / AAAI 官方页面本轮仅作补检；未发现比 arXiv 主列表更晚且更高相关的新增项。
- 日期无法稳定确认的候选项不进入主列表；本轮主列表无“不确定日期”条目。

## 1. 时间序列基础模型最新研究

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：用可控合成生成器对 TSFM 施加 `ceteris paribus` 干预，系统审计 `Chronos-2`、`TimesFM-2.5` 等模型在趋势、周期、regime switch 等模式上的保持能力，并将失败模式与预训练分布偏差联系起来。
- 相关性判断：最高。它直接回答“TSFM 在哪些时序模式上会系统失真”，对 foundation model 选型和评测设计都很关键。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测任务上比较 `MOMENT`、`Chronos-T5`、`TimesFM 2.5` 与轻量异常检测 / 残差模型，强调 TSFM 的收益高度任务相关，不能默认替代专用模型。
- 相关性判断：最高。它把 TSFM 讨论从“能不能做”推向“值不值得部署”。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出用真实未来数据进行 prequential evaluation 的 living benchmark，检查 TSFM 在季节变化、分布漂移和突发事件下的长期有效性。
- 相关性判断：最高。它把 TSFM 评测从静态 snapshot 推进到持续有效性验证。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测振幅塌缩与横截面排序失效，并提出 `CalibRank` 在校准与排序之间折中。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链条里的关键 failure mode。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，显式控制 dataset exposure、context window、prediction horizon 与 missingness，强调 TSFM 进展同样依赖训练分布设计。
- 相关性判断：高。它代表 TSFM 研究从架构竞争转向训练制度竞争。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：提出 `meta-harness-optimized` 多 agent 框架，用 agentic data generation 与文本上下文，在少样本条件下自动训练轻量专用 forecaster。
- 相关性判断：最高。它把 agent 定位成“编排和训练专用模型的工程师”，而非直接替代 forecaster。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进变点检测实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它是近三个月最像“自演化时序研究员”的公开系统之一。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再把这些结构化上下文条件化进 diffusion forecaster。
- 相关性判断：高。虽然更偏多模态 forecasting，但它展示了 agent 如何把文本与场景信息转成可控预测信号。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖真实机构场景和持续更新数据环境的 live benchmark，评测 agent 在 state identification、summarization、outlook reasoning 等任务上的稳定性。
- 相关性判断：最高。它仍是当前最值得直接复现的 time-series agent benchmark。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较直接喂数值、让 LLM 做 coding agent，以及两者结合三种设置，发现有代码工具访问的 agent 在时序理解基准上更强，但错误率仍明显偏高。
- 相关性判断：最高。它是当前 time-series agent 能力评测的基线参照物。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25897)
- 简短摘要：用 information bottleneck 统一 attribution 与 counterfactual explanation，避免 trivial explanations 和 out-of-distribution counterfactuals。
- 相关性判断：中高。它更偏 explainability，但确实触及“时序模型如何给出稳定、可验证解释”的 reasoning 边界。

### [2026-08-25] [Structured Frequency-Domain Evidence for LLM-Based Time-Series Anomaly Detection](https://arxiv.org/abs/2608.24113)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24113)
- 简短摘要：在 LLM 零样本时序异常检测中同时暴露去季节化时域证据与 FFT 频域证据，用全局与局部频谱结构补足纯时域输入的缺口。
- 相关性判断：高。它说明 reasoning 效果不只取决于模型，还取决于喂给模型的结构化证据设计。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出任务相关概念并生成可执行标注规则，把预测过程拆成可读概念瓶颈。
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

## 4. GitHub 上值得跟踪的最新项目

### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-27（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：面向时序分析的原型 multi-agent workflow，组合 GPT、Claude 与金融数据工具。
- 相关性判断：中高。成熟度有限，但它是窗口内最直接带 `agentic + timeseries` 标签的新仓库之一。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push），2026-08-21（最近一次 API 更新时间）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，直接面向 `agentic time series analysis in evolving environments`。
- 相关性判断：最高。它是最值得直接复现的 time-series agent benchmark 工程资产。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（创建），2026-08-05（最近一次 push），2026-08-27（最近一次 API 更新时间）
- 来源：[GitHub Repo API](https://api.github.com/repos/OpenTSLM/TimeRLM) / [GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：`TimeRLM` 官方实现，围绕长上下文时间序列异常定位提供可运行代码与递归推理流程。
- 相关性判断：最高。它同时命中 `time series reasoning`、`tool use` 和可复现实验资产。

### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`，且场景与能源时序预测高度贴近。

### [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：2026-07-12（创建），2026-08-27（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：系统化测试 `TSFM` edge cases 的 robustness benchmark 工具仓库。
- 相关性判断：最高。它把“如何稳定评测 TSFM failure modes”推进成可复用工程资产。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（创建），2026-07-11（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp) / [GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 暴露 typed time-series statistics 工具，覆盖 anomaly detection、changepoint、decomposition 与 data-quality auditing。
- 相关性判断：高。它更像工具层 / harness，而不是模型创新，但与 time-series agent 工作流直接相关。

### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（创建），2026-06-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/AkshajKashyap/autoresearch-timeseries-agent) / [GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：一个可复现的本地 time-series forecasting benchmark 与 deterministic experiment agent，包含 synthetic / CSV 数据、baseline、diagnostics、report 和 CI。
- 相关性判断：高。它更偏 research harness，但正符合 `timeseries agent / harness` 跟踪目标。

## 5. 结论与下一个观察点

- 如果只保留最值得优先读的五篇论文，今天建议依次看：[`Causal Analysis`](https://arxiv.org/abs/2608.24303)、[`MetaCaster`](https://arxiv.org/abs/2608.23473)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`TimeRLM`](https://arxiv.org/abs/2608.03391)。
- 如果只保留最值得复现的三个仓库，今天建议依次跟踪：[`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent)。
- 下一个需要重点监控的增量不是“再来一篇泛时序论文”，而是三类东西：`TSFM robustness benchmark 是否放出更完整代码`、`agent benchmark 是否出现真实长周期 leaderboard`、`reasoning 路线是否继续向 selective intervention / tool use / structured evidence 收敛`。

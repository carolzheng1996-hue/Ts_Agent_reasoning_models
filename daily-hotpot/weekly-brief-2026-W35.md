# 2026-W35 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-08-28  
覆盖范围：2026-08-24 至 2026-08-28

## 本周重点

1. **基础模型方向**：本周最强的新信号集中在 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)、[`Do Time-Series Foundation Models Pay Off for Industrial Monitoring?`](https://arxiv.org/abs/2608.22968) 和前一周延续高热度的 [`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)。主线已经非常明确地从“更大 TSFM”转向 `偏差审计 + live evaluation + 成本感知部署`。
2. **Agent 方向**：[`MetaCaster`](https://arxiv.org/abs/2608.23473) 是本周最值得关注的新论文，它把 agent 定位成“少样本条件下自动造数并训练轻量 forecaster 的工程系统”；[`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 继续是最关键的 live benchmark 底座；[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933) 仍代表“自演化时序研究员”路线。
3. **Reasoning 方向**：本周信号最强的不是单一“大模型”，而是三条并行路线：[`ReasonCast`](https://arxiv.org/abs/2608.15291) 的选择性语义干预、[`TimeRLM`](https://arxiv.org/abs/2608.03391) 的递归工具调用、[`ConceptTS`](https://arxiv.org/abs/2608.21277) / [`Towards A Unified Information Bottleneck Framework for Time Series Explanations`](https://arxiv.org/abs/2608.25897) 的解释与概念瓶颈。
4. **工程 / GitHub 侧**：本周稳定复核后，最值得持续跟踪的项目仍是 [`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent)、[`TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)，以及更偏 tooling 的 [`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp) 与 [`autoresearch-timeseries-agent`](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)。

## 本周工作日晨报轨迹

- **2026-08-24（周一）**：主线仍以 [`SATS`](https://arxiv.org/abs/2608.20005)、[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`ReasonCast`](https://arxiv.org/abs/2608.15291) 和 [`TRACE-CASH`](https://arxiv.org/abs/2608.16410) 为核心；GitHub 侧新纳入 [`RuiCkg/ai-powered-energy-forecasting`](https://github.com/RuiCkg/ai-powered-energy-forecasting)。
- **2026-08-25（周二）**：通过官方来源补入 [`ConceptTS`](https://arxiv.org/abs/2608.21277)，使 `concept bottleneck / interpretable forecasting` 成为本周 reasoning 支线。
- **2026-08-26（周三）**：[`Causal Analysis`](https://arxiv.org/abs/2608.24303) 成为本周基础模型方向最重要新增；同时 [`MetaCaster`](https://arxiv.org/abs/2608.23473) 与 [`Do Time-Series Foundation Models Pay Off for Industrial Monitoring?`](https://arxiv.org/abs/2608.22968) 共同把讨论推进到 “agent 负责训练编排、TSFM 负责被审计和被部署评估”。
- **2026-08-27（周四）**：未检到更高优先级的新论文，主线判断稳定；GitHub 跟踪重点收敛到 [`TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent)、[`TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)。
- **2026-08-28（周五）**：官方 arXiv API 补入 [`Towards A Unified Information Bottleneck Framework for Time Series Explanations`](https://arxiv.org/abs/2608.25897) 与 [`Structured Frequency-Domain Evidence for LLM-Based Time-Series Anomaly Detection`](https://arxiv.org/abs/2608.24113)，作为 reasoning / explainability 的补充观察线，但未改变本周主排序。

## 本周新增论文主线

### 基础模型 / 评测 / 部署

- [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)
  - 价值：本周最值得记住的新基础模型条目。它把 TSFM failure mode 审计写成可控干预框架。
- [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)
  - 价值：把 TSFM 讨论从精度转向真实部署性价比。
- [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)
  - 价值：仍是 live benchmark 主线最强底座。

### Agent / Harness

- [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)
  - 价值：本周最新、且最清楚回答“agent 在 forecasting 系统里该干什么”的论文。
- [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)
  - 价值：自演化实验轨迹是 time-series research agent 很强的实现方向。
- [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)
  - 价值：benchmark 基建属性非常强，适合作为后续复现入口。

### Reasoning / Interpretable Routing / Tool Use

- [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)
  - 价值：补强 explainability 与 counterfactual reasoning 路线。
- [2026-08-25] [Structured Frequency-Domain Evidence for LLM-Based Time-Series Anomaly Detection](https://arxiv.org/abs/2608.24113)
  - 价值：说明结构化证据设计是 LLM 时序 reasoning 的关键变量。
- [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)
  - 价值：把可解释概念层嵌入 forecasting 内部表示。
- [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)
  - 价值：本周最贴近 `forecasting + reasoning + agent` 三者交集的论文。
- [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)
  - 价值：仍是最强的 `tool-using time-series reasoning` 公共实现之一。

## 本周新增或重点复核的 GitHub 项目

- [2026-08-24] [RuiCkg/ai-powered-energy-forecasting](https://github.com/RuiCkg/ai-powered-energy-forecasting)
  - 定位：面向电力负荷与光伏预测的工程仓库。
  - 判断：中高相关。更偏应用 pipeline，但和时序预测场景贴近。

- [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)
  - 定位：直接面向 time-series analysis 的 prototype multi-agent workflow。
  - 判断：中高相关。新、直接，但工程成熟度仍有限。

- [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)
  - 定位：`TimeSage-EV` live benchmark 官方仓库。
  - 判断：最高相关。benchmark 复现价值最高。

- [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)
  - 定位：长上下文 time-series anomaly localization 的递归推理实现。
  - 判断：最高相关。论文与代码耦合最紧。

- [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)
  - 定位：面向短期电力负荷预测的 LLM-driven AutoML agent。
  - 判断：最高相关。`time series + AutoML + agent` 交叉点非常明确。

- [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
  - 定位：面向 edge cases 的 TSFM robustness testing 仓库。
  - 判断：最高相关。是本周最值得持续盯的 TSFM 工程资产之一。

- [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)
  - 定位：给 agents 提供 typed time-series stats 工具的 MCP 项目。
  - 判断：高相关。更像 tooling / harness，但很适合搭建 deterministic time-series agent workflow。

- [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
  - 定位：本地可复现 benchmark、baseline、diagnostics 和 experiment agent 一体化仓库。
  - 判断：高相关。适合作为小规模研究 agent harness 参考实现。

## 下周跟踪项

- 检查 [`Causal Analysis`](https://arxiv.org/abs/2608.24303) 是否放出代码或补充实验，因为它很可能影响后续 TSFM robustness benchmark 设计。
- 跟进 [`MetaCaster`](https://arxiv.org/abs/2608.23473) 是否公开实现，以便和 [`AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent) 做“agent 负责编排训练”的路线对比。
- 持续监控 [`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`TimeRLM`](https://github.com/OpenTSLM/TimeRLM) 和 [`TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark) 是否出现新增 commit、benchmark 说明或数据发布。
- 如果下周出现更晚的新稿，优先看它是否继续沿着 `selective reasoning`、`structured evidence`、`live evaluation`、`robustness tooling` 这四条线扩展，而不是简单重复“LLM 做 forecasting”的旧套路。

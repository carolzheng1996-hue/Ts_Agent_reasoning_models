# 2026-W34 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-08-21  
覆盖范围：2026-08-17 至 2026-08-21

## 本周重点

1. **基础模型方向**：本周最强的新信号集中在 [`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106)、[`Model-agnostic Retrieval-Augmented Extended Forecasting for time series`](https://arxiv.org/abs/2608.14054) 和 [`Into the ORBIT for Time Series`](https://arxiv.org/abs/2608.13262)。主线已经非常明确地从“更大 TSFM”转向 `live evaluation + failure-mode analysis + retrieval adaptation + training regime control`。
2. **Agent 方向**：[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933) 是本周最新、也最像自演化实验研究员的时间序列 agent；[`SCENARIODIFF`](https://arxiv.org/abs/2608.17164) 则展示了多模态 forecasting 的分层场景 agent 结构；[`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 继续是最关键的 live benchmark 底座。
3. **Reasoning 方向**：[`Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B`](https://arxiv.org/abs/2608.18419)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149) 与 [`TimeRLM`](https://arxiv.org/abs/2608.03391) 共同说明，时间序列 reasoning 已经进入 `结构机制解释 + 选择性语义推理 + 样本级路由 + 多轮工具调用` 四条并行路线。
4. **工程 / GitHub 侧**：本周稳定复核到的最新值得跟踪仓库，按创建日期从近到远主要是 [`building-agentic-automl`](https://github.com/lucalullo/building-agentic-automl)、[`MS_Azure_Machine_Learning_Many_Models_1`](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)、[`Agentic-AutoML-MCP`](https://github.com/Harishrajan77/Agentic-AutoML-MCP)、[`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)。
5. **光伏方向**：本周没有比 [`A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning`](https://arxiv.org/abs/2608.14698) 更晚的新高相关公开论文进入主列表，但 [`solarbench`](https://github.com/shahoismael/solarbench)、[`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088) 和 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 仍是最值得保留的近三个月跟踪对象。

## 本周新增论文主线

### 基础模型 / 训练 / 评测

- [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)
  - 价值：本周最值得记住的新基础模型条目。它把 TSFM 评测从静态 snapshot 推进到真实未来数据持续更新的 live protocol。
- [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)
  - 价值：明确指出 TSFM 在低可预测性目标上会出现近乎“压平”的预测坍塌，是本周最重要的 failure-mode 论文。
- [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)
  - 价值：给出训练无关的 retrieval adaptation 路线，对短历史、冷启动和 memory tool 设计都很有参考意义。
- [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)
  - 价值：说明“训练分布如何设计”正在成为 TSFM 新一轮竞争重点。

### Agent / Harness

- [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)
  - 价值：本周最新、且最明确围绕时间序列建模任务构建自演化 agent 的论文。
- [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)
  - 价值：把多模态预测拆成分层 context agents，是 forecasting agent workflow 的一个新变体。
- [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)
  - 价值：本周继续是最重要的 time-series agent benchmark 底座。
- [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)
  - 价值：虽然场景偏量化，但它把递归自改进研究循环做成了可验证的时序研究系统。

### Reasoning / Router / Tool-Using

- [2026-08-19] [Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B](https://arxiv.org/abs/2608.18419)
  - 价值：给“LLM 是否真的在做数值序列结构推理”提供了机制层证据。
- [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)
  - 价值：本周最贴近 `forecasting + reasoning + agent` 三者交集的论文。
- [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)
  - 价值：把 reasoning 直接放进样本级 ensemble routing，是 forecasting runtime 的强信号。
- [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)
  - 价值：本周仍是最强的 `tool-using time-series reasoning agent` 公开系统之一。

## 本周新增纳入跟踪的 GitHub 项目

- [2026-08-19] [lucalullo/building-agentic-automl](https://github.com/lucalullo/building-agentic-automl)
  - 定位：从 baseline 到 senior ML agent 的 agentic AutoML 研发仓。
  - 判断：中高相关。偏通用 AutoML，但与 `agent + ML` 主线直接相关。

- [2026-08-17] [dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)
  - 定位：Azure AutoML 的时间序列预测样例仓。
  - 判断：中高相关。适合作为云端 AutoML forecasting workflow 快速入口。

- [2026-08-17] [Harishrajan77/Agentic-AutoML-MCP](https://github.com/Harishrajan77/Agentic-AutoML-MCP)
  - 定位：基于 LangGraph 与 MCP 的 agentic AutoML 平台。
  - 判断：高相关。对 time-series agent 的工具层设计有直接参考价值。

- [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)
  - 定位：`TimeSage-EV` live benchmark 官方仓库。
  - 判断：最高相关。它是最值得直接跟踪的 time-series agent benchmark 项目。

## 本周光伏方向保留项

- [2026-08-09] [A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning](https://arxiv.org/abs/2608.14698)
  - 判断：中高相关。偏部署与设备侧学习，但工程价值高。
- [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)
  - 判断：最高相关。跨气候带统一协议的光伏功率预测 benchmark。
- [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)
  - 判断：最高相关。最贴近真实站点部署的 PV 预测流水线之一。
- [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented Adaptation of Frozen Time-Series Foundation Models for Robust Photovoltaic Forecasting](https://arxiv.org/abs/2607.08079)
  - 判断：最高相关。直接连接 TSFM 与光伏预测场景。

## DailyArXiv 补检结论

- 本周检查了 [`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 的 `Time Series` 板块；页面在 2026-08-21 显示 `Last update: 2026-08-21`。
- 当前快照里能稳定确认的直接相关命中包括 [`Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B`](https://arxiv.org/abs/2608.18419)。
- 但 [`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149) 等本周核心条目未在今天的 README 快照里稳定出现。
- 结论：`DailyArXiv` 适合做补检和回溯，但不能替代本周正文的主排序依据。

## 下周跟踪项

- 检查 [`LiveHouse-TS`](https://arxiv.org/abs/2608.17299) 是否放出代码、leaderboard 或月度更新协议，因为它很可能成为 TSFM 新默认评测入口。
- 跟进 [`EvoTS-Agent`](https://arxiv.org/abs/2608.17933) 是否公开代码，以便与 [`TimeRLM`](https://github.com/OpenTSLM/TimeRLM) 和 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 组合出一版“benchmark + self-evolving solver”的实验路线。
- 对照 [`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149) 和 [`TSRouter`](https://github.com/tianyi-lab/TSRouter)，整理一版 `semantic reasoning + model routing + validation` 的可复用框架草图。
- 继续监控 [`building-agentic-automl`](https://github.com/lucalullo/building-agentic-automl)、[`MS_Azure_Machine_Learning_Many_Models_1`](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)、[`Agentic-AutoML-MCP`](https://github.com/Harishrajan77/Agentic-AutoML-MCP) 和 [`solarbench`](https://github.com/shahoismael/solarbench) 的新增 commit 与文档完善情况。

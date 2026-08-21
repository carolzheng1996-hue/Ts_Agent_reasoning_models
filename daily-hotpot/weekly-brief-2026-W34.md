# 2026-W34 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-08-21  
覆盖范围：2026-08-17 至 2026-08-21

## 本周重点

1. **基础模型方向**：本周最强的新信号集中在 [`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106)、[`Model-agnostic Retrieval-Augmented Extended Forecasting for time series`](https://arxiv.org/abs/2608.14054) 和 [`Into the ORBIT for Time Series`](https://arxiv.org/abs/2608.13262)。主线已经非常明确地从“更大 TSFM”转向 `live evaluation + failure mode analysis + retrieval adaptation + training regime control`。
2. **Agent 方向**：[`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 仍是本周最关键的 benchmark 底座，而 [`EvoTS-Agent`](https://arxiv.org/abs/2608.17933) 则把“验证反馈驱动的自演化实验搜索”真正落到时间序列建模任务上。
3. **Reasoning 方向**：[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149) 与 [`TimeRLM`](https://arxiv.org/abs/2608.03391) 共同说明，时间序列 reasoning 已经不只是生成解释，而是在直接介入 `是否推理、如何路由模型、如何多轮操作信号`。
4. **工程 / GitHub 侧**：本周稳定复核到的最新值得跟踪仓库主要是 [`OpenTSLM/TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`MS_Azure_Machine_Learning_Many_Models_1`](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)、[`time-series-autoML`](https://github.com/Naveen-Boddepalli/time-series-autoML) 和 [`COLDSTART`](https://github.com/priestly-ops/COLDSTART)。其中前两者更像“论文代码/快速工程入口”，后两者更像“平台或 harness 雏形”。
5. **本周工作口径变化**：从周中开始，晨报明确切换到“只按论文首发日期 / 仓库创建日期排序”的规则，聚合页收录时间不再参与主排序，因此本周列表比之前更保守，但时间窗口更干净。

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

- [2026-08-17] [dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)
  - 定位：Azure AutoML 的时间序列预测样例仓。
  - 判断：中高相关。适合作为云端 AutoML forecasting workflow 快速入口。

- [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)
  - 定位：`TimeRLM` 官方代码。
  - 判断：最高相关。本周最值得直接复现的 time-series reasoning / agent 代码仓之一。

- [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)
  - 定位：面向时序场景的 AutoML workflow / UI 平台。
  - 判断：中高相关。更偏平台工程，但与 AutoML 主题直接相关。

- [2026-06-22] [priestly-ops/COLDSTART](https://github.com/priestly-ops/COLDSTART)
  - 定位：带 `timeseries` 主题标签的 leakage-safe benchmarking framework。
  - 判断：中相关。更偏 benchmark / harness，而不是 forecasting 模型。

## 日期待复核但值得继续盯的项目

- [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)
  - 说明：官方代码仓已知存在，但本周末 GitHub API 触发速率限制，本轮未再次复核创建日期。
  - 判断：最高相关。后续若做 live benchmark 复现，它仍是优先入口。

- [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)
  - 说明：已知是 `CastFSR` 官方实现，本轮未再次复核创建日期。
  - 判断：最高相关。适合梳理 `fast-slow-reflect` forecasting agent workflow。

- [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)
  - 说明：与论文对应关系明确，但本轮未再次复核创建日期。
  - 判断：高相关。对 reasoning router 设计很重要。

## 下周跟踪项

- 检查 [`LiveHouse-TS`](https://arxiv.org/abs/2608.17299) 是否放出代码、leaderboard 或月度更新协议，因为它很可能成为 TSFM 新默认评测入口。
- 跟进 [`EvoTS-Agent`](https://arxiv.org/abs/2608.17933) 是否公开代码，以便与 [`TimeRLM`](https://github.com/OpenTSLM/TimeRLM) 和 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 组合出一版“benchmark + self-evolving solver”的实验路线。
- 对照 [`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149) 和 [`TSRouter`](https://github.com/tianyi-lab/TSRouter)，整理一版 `semantic reasoning + model routing + validation` 的可复用框架草图。
- 继续监控 [`OpenTSLM/TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`time-series-autoML`](https://github.com/Naveen-Boddepalli/time-series-autoML) 和 [`MS_Azure_Machine_Learning_Many_Models_1`](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1) 的新增 commit 与文档完善情况。

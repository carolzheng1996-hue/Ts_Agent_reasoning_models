# 2026-W32 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-08-07  
覆盖范围：2026-08-03 至 2026-08-07

## 本周重点

1. **基础模型方向**：本周最强的新信号是 [`Personalized Federated Sparse Adaptation of Time-Series Foundation Models`](https://arxiv.org/abs/2608.04695)、[`FinVerse`](https://arxiv.org/abs/2608.03259) 和 [`FedChronos`](https://arxiv.org/abs/2608.01290)。主线已经从“更大的 TSFM”进一步转向 `personalization + federated deployment + domain-aware evaluation`。
2. **Agent / Harness 方向**：本周最重要的新增是 [`TimeRLM`](https://arxiv.org/abs/2608.03391) 和 [`CastFSR`](https://arxiv.org/abs/2608.03031)。它们分别代表 `recursive tool-using agent` 与 `Fast-Slow-Reflect forecasting agent` 两条更具体、可实现的时序 Agent 路线。
3. **Reasoning 方向**：本周最重要的新增是 [`ReasonCast`](https://arxiv.org/abs/2608.01875) 和 [`TRACE-TS`](https://arxiv.org/abs/2608.00200)。焦点已经从“能否给解释”推进到 `forecast + reasoning joint generation` 与 `可验证证据链`。
4. **光伏主线**：本周新增了 [`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088) 与 [`solarbench`](https://github.com/shahoismael/solarbench)。`PARA-PV` 仍是研究主线，`solarbench` 则补上了更接近统一评测协议的工程入口。
5. **聚合源状态**：本周确认公开可访问的 [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv) 最近更新时间为 `2026-08-06`，已经收录 `TimeRLM`、`FinVerse`、`CastFSR`、`ReasonCast` 等高优先级主线；但它混用更新日期与原始首发日期，因此仍需二次核对 arXiv `published`。

## 本周新增论文主线

### 基础模型 / 部署

- [2026-08-05] [Personalized Federated Sparse Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2608.04695)
  - 价值：把 `TSFM + federated learning + sparse personalization` 落到建筑能耗预测，是本周最强的“真实部署约束”型新增工作。
- [2026-08-04] [FinVerse: Financial Time-Series Benchmark](https://arxiv.org/abs/2608.03259)
  - 价值：把 TSFM 评估从统一误差推进到金融决策相关指标，是 domain-aware benchmark 的强信号。
- [2026-08-02] [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](https://arxiv.org/abs/2608.01290)
  - 价值：说明 `privacy-preserving TSFM adaptation` 已经开始从概念讨论进入具体可复现实验。

### Agent / Runtime

- [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)
  - 价值：把时序分析写成 `recursive interaction + code execution + evidence retrieval` 的形式，是长上下文时序 Agent 的代表工作。
- [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)
  - 价值：本周最完整的 `fast prior + slow contextual reasoning + reflection` forecasting agent 框架。
- [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)
  - 价值：虽然不是本周新发，但随着 `CastFSR` 和 `TimeRLM` 出现，它重新凸显了 `agentic runtime + AutoML` 这条工程主线。

### Reasoning / Benchmark / Verifier

- [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)
  - 价值：首次明确把 `forecast` 与 `reasoning chain` 设计为同一次自回归生成的联合输出。
- [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)
  - 价值：强调时序 reasoning 不仅要“说得像”，还要能指回具体证据片段。
- [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)
  - 价值：本周仍是 `irregular time-series QA + low-latency reasoning` 的最强公开条目之一。

## 本周新增纳入跟踪的 GitHub 项目

- [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)
  - 定位：`CastFSR` 论文官方代码。
  - 判断：最高相关。它是本周最值得继续追代码细节的 forecasting agent 仓库。
- [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)
  - 定位：`ReasonCast` 官方代码仓库。
  - 判断：最高相关。适合作为 `forecast + rationale joint modeling` 的复现实验入口。
- [2026-08-05] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)
  - 定位：时序长上下文 anomaly localization 的 recursive agent 实现。
  - 判断：最高相关。它代表本周最强的 `tool-using time-series agent` 新路线。
- [2026-08-05] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)
  - 定位：time-series AutoML workflow / UI 脚手架。
  - 判断：中高相关。工程深度一般，但与 `time series + AutoML` 主题直接相关。
- [2026-07-26] [sureshkvn/inContextML](https://github.com/sureshkvn/inContextML)
  - 定位：forecasting / regression 的 MCP server。
  - 判断：高相关。适合作为时序 Agent 的工具层 / MCP runtime 参考。
- [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)
  - 定位：跨气候区的光伏预测 benchmark。
  - 判断：高相关。它是本周光伏方向最值得继续跟踪的新建评测仓库。
- [2026-08-06] [Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)
  - 定位：day-ahead PV forecasting 的新建实现仓库。
  - 判断：中相关。更像论文/学位项目落地仓库，但日期新，适合低成本跟踪。

## 下周跟踪项

- 检查 [`TimeRLM`](https://github.com/OpenTSLM/TimeRLM) 是否继续放出更完整的数据预处理、训练脚本或 RL post-training 细节。
- 对照 [`CastFSR`](https://github.com/Xiaoyu-Tao/CastFSR)、[`AION`](https://github.com/ztxtech/aion)、[`TimeClaw`](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp)，整理一版可复用的 `task schema + tool layer + validator` 设计草图。
- 继续监控 [`ReasonCast`](https://github.com/seunghan96/reasoncast) 与 [`TRACE-TS`](https://github.com/SparshRastogi/TRACE-TS) 是否补齐 benchmark、verifier 或更明确的可验证推理协议。
- 跟进 [`solarbench`](https://github.com/shahoismael/solarbench)、[`PARA-PV`](https://github.com/weican1103/PARA-PV) 与 [`Helios-Forecast`](https://github.com/ReikanYsora/Helios-Forecast) 的数据协议、评测脚本和部署形态。

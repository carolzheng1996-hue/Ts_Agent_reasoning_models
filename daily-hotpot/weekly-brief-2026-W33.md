# 2026-W33 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-08-14  
覆盖范围：2026-08-10 至 2026-08-14

## 本周重点

1. **基础模型方向**：本周最强的新论文信号集中在 [`Into the ORBIT for Time Series`](https://arxiv.org/abs/2608.13262)、[`FM-LLM`](https://arxiv.org/abs/2608.11623)、[`Market-Information-Aware Gated-LoRA`](https://arxiv.org/abs/2608.11359)、[`TORF`](https://arxiv.org/abs/2608.11114) 与 [`GTN-R`](https://arxiv.org/abs/2608.08010)。主线已经非常明确地从“更大 TSFM”转向 `训练分布控制 + 低成本适配 + 概率后处理 + RL 后训练`。
2. **Reasoning 方向**：本周最值得持续跟踪的新条目是 [`REATS`](https://arxiv.org/abs/2608.10149)。它把 `LLM reasoning` 放进样本级 ensemble routing，说明时间序列 reasoning 不再只是“生成解释”，而是在直接接管 forecasting runtime 的模型选择与权重分配。
3. **Agent / Harness 方向**：本周没有出现比 [`TimeRLM`](https://arxiv.org/abs/2608.03391) 与 [`CastFSR`](https://arxiv.org/abs/2608.03031) 更新且更强的论文；但工程体系更完整了，`AION`、`TimeClaw`、`timeseries-mcp` 这条 `task schema + tools + validator` 路线越来越清晰。
4. **光伏主线**：研究侧仍由 [`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`PARA-PV`](https://arxiv.org/abs/2607.08079) 和 [`Physics-Informed Synthetic Histories`](https://arxiv.org/abs/2606.07457) 主导；工程侧则以 [`solarbench`](https://github.com/shahoismael/solarbench) 和 [`Helios-Forecast`](https://github.com/ReikanYsora/Helios-Forecast) 最值得持续跟踪。
5. **聚合源状态**：本周确认公开可访问的 [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv) 最近更新时间为 `2026-08-14`。它已收录 `FM-LLM`、`Gated-LoRA`、`TORF` 等条目，但也收录了 `Speculative Decoding`、`TS-Mob` 这类“README 日期在窗内、arXiv 首发早于窗口”的内容，因此仍需二次核对首发日期。

## 本周新增论文主线

### 基础模型 / 训练 / 部署

- [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)
  - 价值：本周最重要的新基础模型论文。它把 TSFM 的训练分布设计显式化，而不是继续只卷模型结构。
- [2026-08-12] [FM-LLM: A frequency-enhanced mixture-of-experts framework for adapting LLMs to time series forecasting](https://arxiv.org/abs/2608.11623)
  - 价值：说明“冻结 LLM 做时序预测”这条线开始从 prompt engineering 转向频域对齐与结构化适配。
- [2026-08-11] [Market-Information-Aware Gated-LoRA of Foundation Models for Transferable Day-Ahead Electricity Price Forecasting](https://arxiv.org/abs/2608.11359)
  - 价值：本周最具体的 `TSFM + domain-conditioned PEFT transfer` 例子。
- [2026-08-11] [Two-stage Odd Residual Flows for Mean-Preserving Probabilistic Time Series Forecasting](https://arxiv.org/abs/2608.11114)
  - 价值：把均值预测与不确定性建模解耦，是 forecasting system 在风险感知部署上的强信号。
- [2026-08-08] [Ground-Truth Neighborhood Regularization for Reinforcement Learning Post-Training of Time Series Foundation Models](https://arxiv.org/abs/2608.08010)
  - 价值：本周继续强化了 `TSFM post-training` 的重要性，特别是 RL 后训练的可控性问题。

### Reasoning / Router / Verifier

- [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)
  - 价值：本周最强的 reasoning 新条目，直接把 reasoning 放进 sample-wise forecast routing。
- [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)
  - 价值：本周仍然是 `forecast + rationale` 联合生成路线的核心工作。
- [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)
  - 价值：它让 reasoning runtime 的“用哪个模态、调哪个模型”变成正式研究问题。
- [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)
  - 价值：继续提醒我们，写代码不等于真正具备时序推理与验证能力。

### 光伏 / 能源

- [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)
  - 价值：本周光伏方向最接近真实部署流水线的论文。
- [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)
  - 价值：本周仍然是 `retrieval + frozen TSFM + physics correction` 主线的代表作。
- [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)
  - 价值：把 TSFM 明确引入 PV 冷启动，是目前最贴近 foundation model 主题的光伏论文之一。

## 本周新增纳入跟踪的 GitHub 项目

- [2026-08-06] [masadi-99/align-rag](https://github.com/masadi-99/align-rag)
  - 定位：`Align-RAG` 官方代码。
  - 判断：最高相关。它是本周最值得直接复现的 TSFM retrieval 项目。
- [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)
  - 定位：跨气候带光伏预测 benchmark。
  - 判断：高相关。它是本周光伏评测侧最值得跟踪的新仓库。
- [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)
  - 定位：`CastFSR` 论文官方代码。
  - 判断：最高相关。forecasting agent workflow 的直接实现入口。
- [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)
  - 定位：`ReasonCast` 官方代码。
  - 判断：最高相关。适合作为时序 reasoning 复现实验入口。
- [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)
  - 定位：递归式长上下文 anomaly localization agent。
  - 判断：最高相关。本周仍是最强的 `tool-using time-series agent` 仓库之一。
- [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)
  - 定位：为 AI agents 提供 deterministic time-series MCP tools。
  - 判断：最高相关。对 agent 工具层设计价值很高。
- [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)
  - 定位：time-series AutoML workflow / UI 平台。
  - 判断：中高相关。偏平台工程，但和 AutoML 主题直接相关。
- [2026-06-11] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)
  - 定位：面向 Home Assistant 的自学习 solar forecast。
  - 判断：高相关。虽然不是论文代码，但工程活跃度和实际部署信号最强。

## 下周跟踪项

- 检查 [`Into the ORBIT for Time Series`](https://arxiv.org/abs/2608.13262) 是否补充代码、数据配方或更完整的训练协议细节。
- 跟进 [`REATS`](https://arxiv.org/abs/2608.10149) 是否放出代码，以便与 [`ReasonCast`](https://github.com/seunghan96/reasoncast)、[`TSRouter`](https://github.com/tianyi-lab/TSRouter) 对照整理一版 `reasoner + router + validator` 组合方案。
- 对照 [`AION`](https://github.com/ztxtech/aion)、[`TimeClaw`](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp) 和 [`CastFSR`](https://github.com/Xiaoyu-Tao/CastFSR)，整理一版可复用的 `task schema + tool layer + validation loop` 设计草图。
- 继续监控 [`solarbench`](https://github.com/shahoismael/solarbench)、[`PARA-PV`](https://github.com/weican1103/PARA-PV) 和 [`Helios-Forecast`](https://github.com/ReikanYsora/Helios-Forecast) 的数据协议、评测脚本和部署方式。

# 2026-W31 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-07-31  
覆盖范围：2026-07-27 至 2026-07-31

## 本周重点

1. **基础模型方向**：本周最强的新信号是 [`LLM as Forecasting Planner`](https://arxiv.org/abs/2607.24892)、[`Foundation Models and Fine-Tuning`](https://arxiv.org/abs/2607.23146) 与 [`Post-Training in Time Series Foundation Models`](https://arxiv.org/abs/2607.20002)。主线已经从“更大的 TSFM”明显转向 `planning + adaptation + deployment`。
2. **Agent / Harness 方向**：通用框架仍由 [`TimeClaw`](https://arxiv.org/abs/2606.05404)、[`AION`](https://arxiv.org/abs/2605.25045)、[`TimeRouter`](https://arxiv.org/abs/2606.11625)、[`GenAutoML`](https://arxiv.org/abs/2606.05860) 领跑；新增变化主要发生在工具层和评测层，而不是新的超强总框架。
3. **Reasoning 方向**：本周最重要的新增是 [`ClinPRISM`](https://arxiv.org/abs/2607.25947)。它和 [`TSRouter`](https://arxiv.org/abs/2607.08940)、[`TSCognition`](https://arxiv.org/abs/2606.22126)、[`TimeSage-MT`](https://arxiv.org/abs/2606.01498) 共同把焦点拉向 `多模态路由 + 多轮推理 + 可验证证据`。
4. **光伏主线**：本周没有出现比 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 更强的新代表作；`PARA-PV` 仍是 `retrieval + TSFM prior + physics correction` 的最完整公开方案，冷启动侧则继续由 [`Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457) 承担。
5. **DailyArXiv 状态**：本周确认公开可访问的 [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv) 已更新到 `2026-07-31`，适合作为 `Time Series` 关键词下的补检入口；但它会混用修订日期与原始首发日期，`Reverso`、`VisTR` 这类条目必须二次校验。

## 本周新增论文主线

### 基础模型 / 部署

- [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)
  - 价值：首次把文本条件预测清晰写成 `TSFM simulator + LLM planner`，非常适合后续扩展成 reasoning-time search 或 test-time control。
- [2026-07-25] [Foundation Models and Fine-Tuning: Toward a New Generation of Models for Time Series Forecasting](https://arxiv.org/abs/2607.23146)
  - 价值：把 `post-pretraining fine-tuning` 从经验技巧上升为当前 TSFM 实用化的核心步骤。
- [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)
  - 价值：给出了从预训练底座到可部署时序模型之间的完整后训练设计空间。

### Agent / Runtime

- [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)
  - 价值：说明 Agent 不只是调模型，也能显式负责外生变量选择与部署时上下文组织。
- [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)
  - 价值：说明 `多 TSFM 专家池 + 轻量路由` 已经可以替代部分高成本 LLM 控制器。
- [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)
  - 价值：把 AutoML 写成 agentic 反思循环，对时序模型自动生成与压缩很有启发。

### Reasoning / Benchmark / Verifier

- [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)
  - 价值：本周最新的高相关 reasoning 条目，突出 `不规则时序 + 低 token + 低延迟` 的实用部署路线。
- [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)
  - 价值：把时间序列 reasoning 的核心问题从“能不能答题”推进到“如何进行成本感知路由”。
- [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)
  - 价值：为 cognitive time-series reasoning 给出了更完整的任务定义与 benchmark 结构。

## 本周新增纳入跟踪的 GitHub 项目

- [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)
  - 定位：面向 AI agents 的 deterministic time-series MCP tool layer。
  - 判断：最高相关。适合作为时序 Agent 的标准工具层参考。
- [2026-07-11] [Lkhanaajav/mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)
  - 定位：tool-using agents 的 trajectory-level eval harness。
  - 判断：高相关。适合作为 verifier / CI gate / regression harness 参考。
- [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)
  - 定位：`PARA-PV` 官方代码。
  - 判断：高相关。优先跟进其 retrieval 与 shift-correction 实现。
- [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)
  - 定位：`TSRouter` 官方代码仓库。
  - 判断：高相关。它把 reasoning router 从论文推进到了可复现代码。
- [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)
  - 定位：time-series AutoML workflow / UI 脚手架。
  - 判断：中相关。工程深度有限，但贴合 `AutoML + time series` 关键词。
- [2026-07-29] [TimeCopilot/timecopilot](https://github.com/TimeCopilot/timecopilot)
  - 定位：多 TSFM + 自然语言接口的产品化 forecasting agent。
  - 判断：最高相关。虽然不是本周新建，但本周仍是最值得跟踪的高活跃工程实现。
- [2026-07-26] [ztxtech/aion](https://github.com/ztxtech/aion)
  - 定位：validation-driven time-series harness。
  - 判断：最高相关。它继续代表“任务文件 + 工作区 + 评测接口”的工程路线。

## 下周跟踪项

- 检查 [`LLM as Forecasting Planner`](https://arxiv.org/abs/2607.24892) 是否放出代码、实验脚本或更明确的 planner 组件说明。
- 对照 [`TimeClaw`](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[`AION`](https://github.com/ztxtech/aion)、[`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp)、[`mcp-trajectory-evals`](https://github.com/Lkhanaajav/mcp-trajectory-evals)，整理一版可复用的 `task schema + tool layer + trajectory eval` 框架。
- 继续监控 [`ClinPRISM`](https://arxiv.org/abs/2607.25947) 与 [`TSRouter`](https://arxiv.org/abs/2607.08940) 是否出现官方代码、额外 benchmark 或 verifier 设计。
- 跟进 [`PARA-PV`](https://github.com/weican1103/PARA-PV) 是否补齐训练、检索与评测细节，以及是否出现更强的窗内光伏预测新条目。

# 2026-W30 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-07-24  
覆盖范围：2026-07-20 至 2026-07-24

## 本周重点

1. **基础模型方向**：本周最强的新信号不是“又一个更大的 TSFM”，而是 [`Post-Training in Time Series Foundation Models`](https://arxiv.org/abs/2607.20002)、[`Expert-Guided Forecast Editing for Time-Series Foundation Models`](https://arxiv.org/abs/2607.19659)、[`The Spectrum Is Not Enough`](https://arxiv.org/abs/2607.13006) 和 [`When Do Foundation Models Pay Off?`](https://arxiv.org/abs/2607.04919) 这条 `post-train + test-time edit + context gate + break-even routing` 主线。
2. **Agent 方向**：本周没有出现比 [`TimeClaw`](https://arxiv.org/abs/2606.05404)、[`AION`](https://arxiv.org/abs/2605.25045)、[`KairosAgent`](https://arxiv.org/abs/2605.30002)、[`TimeRouter`](https://arxiv.org/abs/2606.11625) 更系统的新通用框架；新增更多体现在 `tool layer`、`trajectory eval`、`cost-aware routing` 和垂直监督系统上。
3. **Reasoning 方向**：过去一周继续验证了社区正在从“会不会做 TSQA”转向“能否做可路由、可验证、多轮累积证据的时序推理”。最值得持续盯住的还是 [`TSRouter`](https://arxiv.org/abs/2607.08940)、[`CLIR-Bench`](https://arxiv.org/abs/2607.09880)、[`TSCognition`](https://arxiv.org/abs/2606.22126)、[`IRTS-ToolBench`](https://arxiv.org/abs/2606.15107)、[`TimeSage-MT`](https://arxiv.org/abs/2606.01498) 和 [`ARTIST`](https://openreview.net/forum?id=yzBbBPheg7)。
4. **光伏主线**：当前最完整的方案仍是 [`PARA-PV`](https://arxiv.org/abs/2607.08079)，而 [`Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors`](https://arxiv.org/abs/2607.12954) 与 [`Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457) 则把焦点分别拉向 `天气输入误差鲁棒性` 和 `冷启动站点可用性`。
5. **DailyArXiv 状态**：本周确认公开可访问的 [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 适合作为 `Time Series` 关键词下的新标题补检入口，但会混用修订版更新时间与原始提交日期，且对 `agentic reasoning / harness / PV vertical` 的覆盖并不完整，不能替代独立检索。

## 本周新增论文主线

### 基础模型 / 部署

- [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)
  - 价值：把 TSFM 研究主轴从“继续预训练”明确推向 `post-training / context construction / output control / deployment specialization`。
- [2026-07-22] [Expert-Guided Forecast Editing for Time-Series Foundation Models](https://arxiv.org/abs/2607.19659)
  - 价值：把 `专家反馈` 变成结构化 test-time editing 问题，很适合未来做 human-in-the-loop forecast refinement。
- [2026-07-20] [Towards Reliable Zero-Shot Crowd Forecasting: Evaluating Time Series Foundation Models for Special Event Pedestrian Forecasting](https://arxiv.org/abs/2607.17758)
  - 价值：把 `零样本 TSFM 在极端短窗、高波动场景下还能不能信` 做成了直接可用的运营边界分析。
- [2026-07-20] [Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting](https://arxiv.org/abs/2607.17511)
  - 价值：代表 `frozen TSFM + inference-time wrapper` 的低成本部署路线。

### Agent / Runtime

- [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)
  - 价值：把 `agentic variable selection` 真正引入部署期外生变量选择问题。
- [2026-06-17] [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)
  - 价值：仍是“预测模型 + 风险门控 + 审计输出”的强参考实现。
- [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)
  - 价值：说明 `多 TSFM 专家池 + 轻量路由` 已经可以替代部分高成本 LLM 控制器。
- [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)
  - 价值：`TimeClaw` 依然是时序 Agent runtime、memory 与 tools 设计的代表方案。

### Reasoning / Benchmark / Verifier

- [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)
  - 价值：把 `文本 / 图像模态 + 模型成本` 的 runtime 路由正式建成时序 reasoning 的核心问题。
- [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)
  - 价值：把 `不规则临床时序 + 显式时间证据` 拉成独立 benchmark 主线。
- [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)
  - 价值：直接指出 code execution 仍不足以替代统计验证与严格审查。
- [2026-06-13] [Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning](https://arxiv.org/abs/2606.15107)
  - 价值：把 verifier、tool use 和 irregular TSQA 绑定成可复现实验协议。

### 光伏 / 光功率预测

- [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)
  - 价值：把 `NWP 输入误差如何放大到 PV 预测误差` 做成可解释鲁棒性评测问题。
- [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)
  - 价值：当前最完整的 `retrieval + TSFM prior + physics correction + shift correction` 光伏方案。
- [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)
  - 价值：回答“新站点几乎没有历史观测时还能不能用 TSFM”。

## 本周新增纳入跟踪的 GitHub 项目

- [2026-07-18] [Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting](https://github.com/Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting)
  - 定位：TSFM 与 specialist 的成本感知评测与复现 harness。
  - 判断：中高相关。适合作为模型路由成本规则的工程参考。
- [2026-07-11] [Lkhanaajav/mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)
  - 定位：tool-using agents 的 trajectory-level eval harness。
  - 判断：高相关。适合作为 verifier / CI gate / regression harness 参考。
- [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)
  - 定位：面向 AI agents 的 deterministic time-series MCP tools。
  - 判断：高相关。适合作为时序工具层与数据质量审计参考。
- [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)
  - 定位：`PARA-PV` 官方代码。
  - 判断：高相关。优先跟进其 retrieval 与 shift-correction 实现。
- [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)
  - 定位：`TSRouter` 官方代码仓库。
  - 判断：高相关。它把 reasoning router 从论文推进到了可复现代码。
- [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)
  - 定位：time-series AutoML web scaffold。
  - 判断：中相关。工程深度一般，但贴合 `AutoML + time series` 关键词。
- [2026-07-03] [xavierdurawa/forecast-playground](https://github.com/xavierdurawa/forecast-playground)
  - 定位：leak-free forecasting retrieval harness。
  - 判断：高相关。适合作为 as-of tool 与评测 scaffold 参考。

## 下周跟踪项

- 检查 [`Post-Training in Time Series Foundation Models`](https://arxiv.org/abs/2607.20002) 与 [`Expert-Guided Forecast Editing`](https://arxiv.org/abs/2607.19659) 是否放出更多代码、实验脚本或部署案例。
- 对照 [`TimeClaw`](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[`AION`](https://github.com/ztxtech/aion)、[`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp) 与 [`mcp-trajectory-evals`](https://github.com/Lkhanaajav/mcp-trajectory-evals)，整理一版可复用的 `task schema + tool layer + trajectory eval` 框架。
- 继续监控 7 月下旬是否出现比 [`TSRouter`](https://arxiv.org/abs/2607.08940) 与 [`CLIR-Bench`](https://arxiv.org/abs/2607.09880) 更强的新 reasoning 论文，尤其关注是否有官方代码与更明确的 verifier 设计。
- 跟进 [`PARA-PV`](https://github.com/weican1103/PARA-PV) 和 [`cost-aware-tsfm-forecasting`](https://github.com/Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting) 是否出现更完整的训练、检索或评测代码。

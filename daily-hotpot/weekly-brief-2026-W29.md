# 2026-W29 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-07-17  
覆盖范围：2026-07-13 至 2026-07-17

## 本周重点

1. **基础模型方向**：本周最强的新信号不是“更大的模型”，而是 [The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006)、[Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454) 和 [Bet on Features](https://arxiv.org/abs/2607.11653)。三者共同把焦点推向 `什么时候额外上下文 / retrieval / TSFM 真有用`、`TSFM 在异常检测上的失效边界`、`部署后如何持续审计`。
2. **Agent 方向**：本周没有出现比 [TimeClaw](https://arxiv.org/abs/2606.05404)、[KairosAgent](https://arxiv.org/abs/2605.30002)、[AION](https://arxiv.org/abs/2605.25045) 更系统的新框架，但 [Neuro-Agentic Control](https://arxiv.org/abs/2607.09076) 和 [TopoBrick](https://arxiv.org/abs/2607.06349) 分别把 `foundation model 作为 deterministic guard` 和 `agentic exogenous-variable selection` 明确做成了可执行原型。
3. **Reasoning 方向**：本周最重要的两条近作是 [CLIR-Bench](https://arxiv.org/abs/2607.09880) 和 [TSRouter](https://arxiv.org/abs/2607.08940)，再加上 [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)、[IRTS-ToolBench](https://arxiv.org/abs/2606.15107)、[TimeSage-MT](https://arxiv.org/abs/2606.01498) 等既有主线，可以看到社区正在从“会不会做时序 QA”转向“能否做可验证、多轮、可路由的时序推理”。
4. **GitHub 工具层**：本周纳入跟踪、且最贴合主题的一组新仓库是 [blf-forecaster](https://github.com/swarm-ai-research/blf-forecaster)、[timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)、[mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)、[forecast-playground](https://github.com/xavierdurawa/forecast-playground)、[time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)、[TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)、[automl/timee](https://github.com/automl/timee)。相比上周，这组项目更集中在 `forecasting harness + tool layer + eval + lightweight AutoML scaffold`。
5. **光伏主线**：本周除了 [PARA-PV](https://arxiv.org/abs/2607.08079)、[Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457) 和 [Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications](https://arxiv.org/abs/2604.22077)，还出现了 [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors](https://arxiv.org/abs/2607.12954)。这说明主线不仅是 `TSFM + retrieval + physics + shift correction`，还开始明显转向 `输入天气误差鲁棒性` 的工程评测。
6. **DailyArXiv 状态**：本周确认公开可访问的 [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 已更新到 `2026-07-17`，并能作为 `forecasting / foundation model` 的补检入口，但对 `agentic reasoning / harness` 仍不完整，不能替代独立检索。

## 本周新增论文主线

### 基础模型

- [2026-07-14] [The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting](https://arxiv.org/abs/2607.13006)
  - 价值：直接给出 `何时值得上 retrieval / TSFM / longer context` 的部署诊断视角。
- [2026-07-14] [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454)
  - 价值：提醒研究者不要把零样本 TSFM 直接当作多变量异常检测默认解。
- [2026-07-13] [Bet on Features: Anytime-Valid and Feature-Aware Auditing of Conditional Quantile Forecasters](https://arxiv.org/abs/2607.11653)
  - 价值：把连续审计、feature-aware validator 与 calibration 监控正式拉进部署主线。
- [2026-07-08] [TimEE: End-to-end Time Series Classification via In-Context Learning](https://arxiv.org/abs/2607.07500)
  - 价值：说明 TSFM 正从 forecasting 扩展到 task-level in-context learning。
- [2026-07-07] [RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models](https://arxiv.org/abs/2607.06504)
  - 价值：把“真实多变量语料是否真能提升 TSFM”推成独立主线。
- [2026-07-06] [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)
  - 价值：最适合直接转化为 Agent 模型路由和成本控制规则。

### Agent

- [2026-07-10] [Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls](https://arxiv.org/abs/2607.09076)
  - 价值：展示了 `LLM planner + TimesFM sentinel + counterfactual rejection` 的高风险闭环。
- [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)
  - 价值：把 `agentic selection` 真正带进部署时的外生变量选择问题。
- [2026-06-17] [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)
  - 价值：仍是“预测模型 + 风险门控 + 审计输出”的强参考实现。
- [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)
  - 价值：公开了 `TimeClaw` 的 runtime、memory、tooling 与 benchmark 思路。
- [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)
  - 价值：最清晰地把 semantic reasoning 注入 TSFM 预测过程。
- [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)
  - 价值：给出本周最值得借鉴的 task/workspace/validator 协议。

### Reasoning

- [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)
  - 价值：把不规则时序 QA 做成显式证据约束 benchmark。
- [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)
  - 价值：把 runtime 路由正式建成时序 reasoning 的核心问题。
- [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)
  - 价值：仍是本周最强的时序 reasoning 总纲论文。
- [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)
  - 价值：直接指出 code execution 仍不足以替代统计验证与严格审查。
- [2026-06-13] [Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning](https://arxiv.org/abs/2606.15107)
  - 价值：把 verifier、tool use 和不规则采样 TSQA 绑定成可复现实验协议。
- [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)
  - 价值：让多轮记忆、证据积累与决策型任务进入统一评测。

### 光伏 / 光功率预测

- [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)
  - 价值：把 `NWP 输入误差如何放大到 PV 预测误差` 正式做成可解释鲁棒性评测问题。
- [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)
  - 价值：是本周最完整的 `retrieval + TSFM prior + physics correction` 光伏方案。
- [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)
  - 价值：回答“站点刚上线、没有历史观测时还能不能用 TSFM”。
- [2026-04-23] [Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications](https://arxiv.org/abs/2604.22077)
  - 价值：直接比较 solar / wind / load 场景中的 TSFM 收益与限制。

## 本周纳入跟踪的 GitHub 项目

- [2026-07-17] [swarm-ai-research/blf-forecaster](https://github.com/swarm-ai-research/blf-forecaster)
  - 定位：belief-state forecasting agent + ForecastBench eval harness。
  - 判断：中高相关。虽不只服务时间序列，但很贴近 forecasting agent 与校准评测主线。
- [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)
  - 定位：面向 AI agents 的 deterministic time-series MCP tools。
  - 判断：高相关。适合作为时序工具层与数据质量审计参考。
- [2026-07-11] [Lkhanaajav/mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)
  - 定位：tool-using agents 的 trajectory-level eval harness。
  - 判断：中高相关。适合作为 verifier / harness 层参考。
- [2026-07-10] [9154327992/Solar-Power-Forecast-Agent](https://github.com/9154327992/Solar-Power-Forecast-Agent)
  - 定位：光伏预测 Agent demo。
  - 判断：中相关。主题直接，但更偏工程展示。
- [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)
  - 定位：PARA-PV 官方代码。
  - 判断：高相关。优先跟进其 retrieval 与 shift-correction 实现。
- [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)
  - 定位：time-series AutoML web scaffold。
  - 判断：中相关。工程深度一般，但贴合 `AutoML + time series` 关键词。
- [2026-07-06] [ChamoLu/TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)
  - 定位：时间序列异常检测 Agent。
  - 判断：中高相关。主题贴得很近，仍处早期阶段。
- [2026-07-03] [xavierdurawa/forecast-playground](https://github.com/xavierdurawa/forecast-playground)
  - 定位：leak-free forecasting retrieval harness。
  - 判断：高相关。适合作为 as-of tool 与评测 scaffold 参考。
- [2026-06-30] [automl/timee](https://github.com/automl/timee)
  - 定位：TimEE 官方实现。
  - 判断：中高相关。对时序 ICL 与 AutoML 社区都值得跟踪。
- [2026-05-24] [rnop/numerai-mcp-autoresearch](https://github.com/rnop/numerai-mcp-autoresearch)
  - 定位：research harness + AutoML loop。
  - 判断：中高相关。适合作为 autonomous experimentation 参考。

## 下周跟踪项

- 检查 [The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006) 与 [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454) 是否放出更多代码、实验脚本或复现实验说明。
- 观察 [blf-forecaster](https://github.com/swarm-ai-research/blf-forecaster) 是否继续补齐 time-series tools、calibration 和 ForecastBench 相关实现，判断它会不会从轻量 demo 长成可复用 harness。
- 对照 [TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[AION](https://ztxtech.github.io/aion/)、[timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp) 与 [mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)，整理一版可复用的 `task schema + tool layer + trajectory eval` 框架。
- 继续监控 7 月下旬是否出现比 [TSRouter](https://arxiv.org/abs/2607.08940) 与 [CLIR-Bench](https://arxiv.org/abs/2607.09880) 更强的新 reasoning 论文，尤其关注是否有官方代码与更明确的 verifier 设计。
- 跟进 [PARA-PV](https://github.com/weican1103/PARA-PV) 与 [Solar-Power-Forecast-Agent](https://github.com/9154327992/Solar-Power-Forecast-Agent) 是否出现更实质的训练、检索或评测代码。

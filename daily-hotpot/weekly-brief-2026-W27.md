# 2026-W27 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-07-03  
覆盖范围：2026-06-29 至 2026-07-03

## 本周重点

1. **基础模型方向**：本周主线从“统一接口”继续推向“在线可部署性与风险校准”。`Unified Zero-Shot Time Series Forecasting: A Darts Foundation` 统一了 TSFM 工程接口，`MACROCAST` 强调无泄漏 real-time forecasting，`STOIC` 将 foundation model 用到能源时序的不确定性校准，而今天新增的 `TiRex-2` 进一步把 TSFM 推向 `multivariate + streaming`。
2. **Agent 方向**：`DeXposure-Claw`、`TimeClaw`、`KairosAgent`、`AION` 仍是本周最值得反复看的四条主线。它们分别覆盖高风险监督、时序原生 runtime、多轮语义推理注入预测，以及 task/workspace/validator harness。
3. **Reasoning 方向**：本周没有比 `TSCognition/TSAlign`、`Can LLM Coding Agents Reason About Time Series?`、`TimeSage-MT` 更强的新主线；共识越来越明确，即时序 reasoning 必须显式考察 `memory`、`uncertainty handling` 和 `validator-backed tool use`。
4. **DailyArXiv 补检结论**：`Time Series` 板块在 2026-07-03 已明确收录 `TiRex-2`、`STOIC`、`DeXposure-Claw`，但未覆盖 `AION`、`TimeClaw`、`TSCognition/TSAlign`、`TFRBench`。因此下周继续把 `DailyArXiv` 当作补充源，而不是唯一监控入口。
5. **光伏方向**：本周最值得保留的仍是 2026-06-05 的冷启动 PV TSFM 论文；它比一般 PV baseline 更接近本仓库关注的 foundation model 与部署问题。

## 本周新增论文主线

### 基础模型

- [2026-07-01] [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)
  - 价值：直接把时序基础模型推向 streaming 场景，和在线 Agent、持续监控最相关。
- [2026-06-30] [Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models](https://arxiv.org/abs/2606.31804)
  - 价值：补齐能源图时序的可靠区间估计，对 agentic decision support 很关键。
- [2026-06-27] [MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting](https://arxiv.org/abs/2606.28670)
  - 价值：把无泄漏 real-time forecasting 作为 TSFM 设计约束，极具部署参考意义。
- [2026-06-26] [The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference](https://arxiv.org/abs/2606.27711)
  - 价值：把训练目标从误差最小化转向决策效用，对 validator / reward 设计很有启发。

### Agent

- [2026-06-17] [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)
  - 价值：展示“预测模型 + 风险门控 + 审计输出”的高风险时序 Agent 范式。
- [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)
  - 价值：公开了 `TimeClaw` 的 runtime、memory、tooling 和 benchmark 思路。
- [2026-05-29] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)
  - 价值：最清晰地把 semantic reasoning 注入 TSFM 预测过程。
- [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)
  - 价值：给出本周最值得借鉴的 task/workspace/validator 协议。

### Reasoning

- [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)
  - 价值：把时序 reasoning 系统化成五类认知任务，是方向性论文。
- [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)
  - 价值：直接指出 code execution 仍不足以替代统计验证与审查。
- [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)
  - 价值：让多轮交互、记忆与不确定性处理成为核心评测对象。

## 本周新增 GitHub 项目

- [2026-07-02] [shivansh-magnus/nimbus](https://github.com/shivansh-magnus/nimbus)
  - 定位：LangGraph 驱动的 multi-agent AutoML pipeline。
  - 判断：中高相关。偏 tabular AutoML，但适合作为 Agent 化建模流水线样板。
- [2026-07-01] [devYRPauli/tabfm-evaluation](https://github.com/devYRPauli/tabfm-evaluation)
  - 定位：Google TabFM 的独立复现实证与硬件评测。
  - 判断：中高相关。可作为 foundation model 评测风格参考。
- [2026-06-30] [ServiceNow/Dr-CiK](https://github.com/ServiceNow/Dr-CiK)
  - 定位：foresight-driven agents testbed。
  - 判断：高相关。非常适合借鉴 forecasting benchmark、retrieval 和 agent evaluation 的组织方式。
- [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
  - 定位：时序 Agent/harness 参考实现。
  - 判断：最高相关。优先跟 runtime、memory、tool protocol。
- [2026-06-01] [TROUBADOUR000/Awesome-Agentic-Time-Series](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
  - 定位：Agentic time-series 文献与系统清单。
  - 判断：高相关。适合作为监控入口与漏检补丁。
- [2026-05-14] [znasllc-io/memql](https://github.com/znasllc-io/memql)
  - 定位：AI-native time-series memory graph。
  - 判断：中高相关。更偏 memory / query / workflow 基础设施，但对 Agent 状态层很有参考价值。
- [2026-04-12] [ztxtech/aion](https://github.com/ztxtech/aion)
  - 定位：OpenCode-based time-series harness。
  - 判断：最高相关。是本周最值得持续拆解的时序 harness 仓库之一。

## 推荐阅读顺序

1. `TiRex-2`：补齐 streaming TSFM 视角。  
2. `AION` 论文与仓库：补齐 task/workspace/validator 协议。  
3. `TimeClaw` 仓库：补齐 tools/runtime/memory 的具体实现。  
4. `TSCognition/TSAlign`：补齐 reasoning taxonomy。  
5. 冷启动 PV TSFM：补齐光伏方向的部署场景。

## 下周跟踪项

- 检查 `TiRex-2` 是否放出官方代码、模型卡或 benchmark 复现实验。
- 对照 `AION`、`TimeClaw` 与 `Dr-CiK`，整理一份本仓库可复用的 `task schema + tool protocol + validation loop` 草案。
- 继续跟踪 `TFRBench` 与 `TimeSage-MT`，判断是否能复用其 reasoning / memory / uncertainty 评测结构。
- 光伏方向继续找 `Cold-Start Photovoltaic Forecasting with TSFMs` 的官方代码页；若仍无代码，下周可补一页复现实验计划。

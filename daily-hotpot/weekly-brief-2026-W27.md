# 2026-W27 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-07-03  
覆盖范围：2026-06-29 至 2026-07-03

## 本周重点

1. **基础模型方向**：本周主线从“统一接口”继续推向“可部署性与在线性”。`Unified Zero-Shot Time Series Forecasting: A Darts Foundation` 给出了统一 TSFM 工程接口，`MACROCAST` 强调 vintage-consistent real-time forecasting，`STOIC` 则把 foundation model 用到能源时序不确定性校准，今天新增的 `TiRex-2` 进一步把 TSFM 扩到 multivariate + streaming。
2. **Agent 方向**：`TimeClaw`、`KairosAgent`、`AION`、`DeXposure-Claw` 是本周最强组合。它们分别覆盖了工具运行时与记忆、多轮语义推理注入预测、任务协议与验证闭环，以及高风险风控场景里的 agentic supervision。
3. **Reasoning 方向**：`TSCognition/TSAlign`、`Can LLM Coding Agents Reason About Time Series?`、`TimeSage-MT` 与 `TFRBench` 共同说明，时序 reasoning 正在从单轮 QA 走向多轮、工具调用、可验证和 benchmark-first。
4. **光伏方向**：本周最值得保留的新增仍是 2026-06-05 的冷启动 PV TSFM 论文；它比一般 PV baseline 更接近本仓库关注的 foundation model 与部署问题。

## 本周新增论文主线

### 基础模型

- [2026-07-01] [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)
  - 价值：把时序基础模型推向 streaming 场景，直接关联在线 Agent 与持续监控。
- [2026-06-30] [Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models](https://arxiv.org/abs/2606.31804)
  - 价值：解决能源时序里的风险区间校准，对 agentic decision support 很关键。
- [2026-06-27] [MACROCAST: A Foundation Time-Series Model for Zero-Shot Probabilistic Forecasting](https://arxiv.org/abs/2606.28670)
  - 价值：强调 vintage consistency 和 contamination control，是“真实可部署 TSFM”的代表。
- [2026-06-26] [The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference](https://arxiv.org/abs/2606.27711)
  - 价值：把训练目标从误差最小化转向决策效用，对 validator/reward 设计有启发。

### Agent

- [2026-06-17] [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)
  - 价值：展示“预测模型 + 风险门控 + LLM 票据”的端到端高风险 agent 模式。
- [2026-05-29] [KairosAgent: A Time-Series-Agentic Framework for Forecasting and Monitoring](https://arxiv.org/abs/2605.30002)
  - 价值：最清晰地把 semantic reasoning 注入 TSFM 预测过程。
- [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)
  - 价值：给出时序 Agent 最需要的 task/workspace/validator 协议。
- [2026-05-11] [TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning](https://arxiv.org/abs/2605.10038)
  - 价值：公开运行时、记忆与工具层，最适合直接拆代码学习。

### Reasoning

- [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)
  - 价值：把时序 reasoning 系统化成五类认知任务。
- [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)
  - 价值：明确指出 code execution 有帮助，但仍不足以替代验证器与统计检查。
- [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)
  - 价值：把多轮交互、记忆与不确定性处理带进 benchmark。
- [2026-04-07] [Forecasting Systems Need Better Reasoning Benchmarks / TFRBench](https://arxiv.org/abs/2604.07493)
  - 价值：明确提出 forecasting systems 需要专门 reasoning benchmark 的论证框架。

## 本周新增 GitHub 项目

- [2026-07-02] [shivansh-magnus/nimbus](https://github.com/shivansh-magnus/nimbus)
  - 定位：LangGraph 驱动的 multi-agent AutoML pipeline。
  - 判断：中高相关。偏 tabular AutoML，但适合作为 Agent 化建模流程样板。
- [2026-07-01] [devYRPauli/tabfm-evaluation](https://github.com/devYRPauli/tabfm-evaluation)
  - 定位：Google TabFM 的独立复现实证与硬件评测。
  - 判断：中高相关。可作为 foundation model 评测风格参考。
- [2026-06-30] [ServiceNow/Dr-CiK](https://github.com/ServiceNow/Dr-CiK)
  - 定位：foresight-driven agents testbed。
  - 判断：高相关。虽然不是纯时序仓库，但与 forecasting benchmark、retrieval、agent evaluation 强关联。
- [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
  - 定位：时序 Agent/harness 参考实现。
  - 判断：最高相关。优先跟 runtime、memory、benchmark。
- [2026-06-01] [TROUBADOUR000/Awesome-Agentic-Time-Series](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
  - 定位：Agentic time-series 文献与系统清单。
  - 判断：高相关。适合作为监控入口与漏检补丁。
- [2026-05-30] [digitaldrywood/detent](https://github.com/digitaldrywood/detent)
  - 定位：GitHub Projects 驱动的 coding-agent orchestration。
  - 判断：中高相关。可借鉴 worktree、validation gate、merge train 设计。
- [2026-04-12] [ztxtech/aion](https://github.com/ztxtech/aion)
  - 定位：OpenCode-based time-series harness。
  - 判断：最高相关。是本周最值得持续拆解的时序 harness 仓库。

## 推荐阅读顺序

1. `TiRex-2`：补齐 streaming TSFM 视角。  
2. `AION` 论文与仓库：补齐 task-workspace-validation 协议。  
3. `TimeClaw` 仓库：补齐 tools/runtime/memory 的具体实现。  
4. `TSCognition/TSAlign`：补齐 reasoning task taxonomy。  
5. 冷启动 PV TSFM：补齐光伏方向的部署场景。

## 下周跟踪项

- 检查 `TiRex-2` 是否放出官方代码、模型卡或 benchmark 复现实验。
- 对照 `AION` 与 `TimeClaw`，整理一份本仓库可复用的 `task schema + tool protocol + validation loop` 草案。
- 继续跟踪 `Dr-CiK` 与 `TFRBench`，判断是否能为时序 reasoning/foresight 评测复用部分 task 结构。
- 光伏方向继续找 `Cold-Start Photovoltaic Forecasting with TSFMs` 的官方代码页；若仍无代码，下周可以补做一页“论文复现实验规划”。

# 2026-W36 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-09-04  
覆盖范围：2026-08-31 至 2026-09-04

## 本周重点

1. **基础模型方向**：本周最强的新信号集中在 [`TSPFN`](https://arxiv.org/abs/2608.31013)、[`When the Martingale Never Stops Firing`](https://arxiv.org/abs/2608.30502)、[`When Does Online Adaptation Pay on the Edge?`](https://arxiv.org/abs/2609.01126) 和 [`Frequency Selective Neural Networks as a Foundation Architecture for Time Series Learning`](https://arxiv.org/abs/2608.29012)。主线继续从“更大模型”转向 `可靠性审计 + 在线适配 + 可解释频域架构 + 部署评测`。
2. **Agent 方向**：[`A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting`](https://arxiv.org/abs/2608.30976) 仍是本周最像产品形态的 forecasting agent；[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`MetaCaster`](https://arxiv.org/abs/2608.23473)、[`CastFSR`](https://arxiv.org/abs/2608.03031) 和 [`TopoBrick`](https://arxiv.org/abs/2607.06349) 则分别代表 `受控评测`、`meta-harness 编排`、`reflective forecasting workflow`、`agentic covariate selection` 四条路线。
3. **Reasoning 方向**：本周新增最值得记住的是 [`CoSPOT`](https://arxiv.org/abs/2609.02093)，它把 LLM 在线适配做成组合式 spectral prompt；同时 [`ConceptTS`](https://arxiv.org/abs/2608.21277)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 继续构成最清晰的 reasoning 主线。
4. **光伏主线**：本周没有比 [`The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid`](https://arxiv.org/abs/2608.25703) 更晚的新高相关公开论文进入主表；但 [`FarSky`](https://arxiv.org/abs/2608.11254)、[`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`PARA-PV`](https://arxiv.org/abs/2607.08079) 与 [`Physics-Informed Synthetic Histories`](https://arxiv.org/abs/2606.07457) 仍是最值得保留的部署导向组合。
5. **工程 / GitHub 侧**：本周最新创建的项目是 [`omror/autoPilot`](https://github.com/omror/autoPilot)，今天额外确认到 [`LegitScarf/AutoML`](https://github.com/LegitScarf/AutoML) 在 `2026-09-04` 仍有活跃推送；时间序列垂直方向里，[`Neuraxis-Labs/TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)、[`lewis-lea/agentic-data-pipeline`](https://github.com/lewis-lea/agentic-data-pipeline)、[`Hammad7-dot/AI-Data-Science-Agent`](https://github.com/Hammad7-dot/AI-Data-Science-Agent) 与 [`sriixz/agentic-timeseries`](https://github.com/sriixz/agentic-timeseries) 仍是最值得盯的近窗工程资产。
6. **窗口变化**：由于本周五的三个月窗口起点移动到 `2026-06-04`，[`Harnessing Generalist Agents for Contextualized Time Series`](https://arxiv.org/abs/2606.05404) 因首发于 `2026-06-03` 被正式移出主列表。这一点比“又多一篇泛时序新稿”更重要，因为它直接影响后续自动化的入选口径。

## 本周工作日晨报轨迹

- **2026-08-31（周一）**：新增 [`EncoTESS`](https://arxiv.org/abs/2608.25019) 与 [`LLM Agents for Time-Series: A Survey`](https://arxiv.org/abs/2608.26226)，把本周开局主线定在 `TSFM failure audit + agent taxonomy`。
- **2026-09-01（周二）**：补齐 [`TSRouter`](https://arxiv.org/abs/2607.08940)、[`From Recognition to Understanding`](https://arxiv.org/abs/2606.22126) 和冷启动光伏 TSFM 交叉项，reasoning 与 PV 版图明显完整起来。
- **2026-09-02（周三）**：[`TSPFN`](https://arxiv.org/abs/2608.31013) 与 [`CastClaw`](https://arxiv.org/abs/2608.30976) 成为本周最强新增组合，分别代表基础模型扩展与 forecasting agent 产品化。
- **2026-09-03（周四）**：没有更晚且更强的新主线论文，但 [`When Does Online Adaptation Pay on the Edge?`](https://arxiv.org/abs/2609.01126) 被正式补入，补强了 `TSFM / harness / edge deployment` 评测链路。
- **2026-09-04（周五）**：今天通过 arXiv、GitHub API 与 `DailyArXiv` raw README 复核补强了 [`CoSPOT`](https://arxiv.org/abs/2609.02093)、[`Frequency Selective Neural Networks`](https://arxiv.org/abs/2608.29012)、[`CastFSR`](https://arxiv.org/abs/2608.03031) 与完整的光伏栏目，同时确认 `TimeClaw` 因首发日期 `2026-06-03` 滑出窗口。

## 本周新增论文主线

### 基础模型 / 评测 / 部署

- [2026-09-01] [When Does Online Adaptation Pay on the Edge? A Leakage-Free Evaluation of Warmup, Learning-Rate Selection, and Resource Trade-offs for Time-Series Forecasting](https://arxiv.org/abs/2609.01126)
  - 价值：把 `TSFM / forecaster deployment / edge harness` 的 commissioning 问题说清楚了。
- [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)
  - 价值：说明 foundation model 正从 forecasting 扩展到垂直时序分类。
- [2026-08-31] [When the Martingale Never Stops Firing: Anytime-Valid Gating on Real Forecast Streams](https://arxiv.org/abs/2608.30502)
  - 价值：是本周最强的在线监控 / 监测误触发警示。
- [2026-08-29] [Frequency Selective Neural Networks as a Foundation Architecture for Time Series Learning](https://arxiv.org/abs/2608.29012)
  - 价值：把“foundation architecture”命题推进到频域可解释建模。
- [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)
  - 价值：仍是 TSFM failure audit 的关键参照系。

### Agent / Harness

- [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)
  - 价值：本周最像真实产品工作流的 forecasting agent。
- [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)
  - 价值：把受控 benchmark 带进时序归因 agent 研究。
- [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)
  - 价值：是“agent 自动造数、训练、评测、选模”的最清晰路线。
- [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)
  - 价值：把 forecasting agent 明确落成 `Fast -> Slow -> Reflect` 的可执行流程。
- [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)
  - 价值：把 agent 的职责落到变量选择与上下文编排上，和生产 IoT forecasting 更贴近。

### Reasoning / Online Adaptation / Interpretable Routing

- [2026-09-02] [Compositional Spectral Prompts for LLM-based Online Time Series Forecasting](https://arxiv.org/abs/2609.02093)
  - 价值：是本周最新的 `LLM-based online adaptation` 路线，且实现上比重型持续训练更轻。
- [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)
  - 价值：把可解释概念层嵌进 forecasting 内部表示。
- [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)
  - 价值：最清晰地回答了“何时需要 reasoning、如何把 reasoning 接回 forecast”。
- [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)
  - 价值：代表 reasoning 作为 router / weight generator 的工程路线。
- [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)
  - 价值：把时序 reasoning 问题形式化为模态与模型路由。

### 光伏 / 光功率预测

- [2026-08-26] [The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid](https://arxiv.org/abs/2608.25703)
  - 价值：把 PV forecast 精度与调度收益直接联系起来，离真实运营决策最近。
- [2026-08-06] [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)
  - 价值：补上短时辐照度侧的生成式预测路线。
- [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)
  - 价值：是最贴近 day-ahead PV 部署流水线的公开方案。
- [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)
  - 价值：仍是 `retrieval + frozen TSFM + physics prior` 的代表性方案。
- [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)
  - 价值：是 TSFM 进入冷启动光伏场景的最佳样板之一。

## 本周新增或重点复核的 GitHub 项目

### 时间序列 / AutoML / Harness

- [2026-09-03] [omror/autoPilot](https://github.com/omror/autoPilot)
  - 定位：domain-agnostic agentic AutoML pipeline。
  - 判断：中高相关。虽非时序专用，但它是本周最新创建的 AutoML agent 项目。

- [2026-08-30] [Hammad7-dot/AI-Data-Science-Agent](https://github.com/Hammad7-dot/AI-Data-Science-Agent)
  - 定位：从 CSV 到验证后模型和报告的 AutoML agent。
  - 判断：高相关。`machine learning + AutoML + experimentation loop` 很完整。

- [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)
  - 定位：直接面向 time-series analysis 的 prototype multi-agent workflow。
  - 判断：中高相关。新且直接，但成熟度仍有限。

- [2026-08-16] [lewis-lea/agentic-data-pipeline](https://github.com/lewis-lea/agentic-data-pipeline)
  - 定位：时序数据摄取与清洗的 agentic pipeline。
  - 判断：中高相关。更像数据层 harness，但和时序 agent 系统很贴。

- [2026-08-09] [LegitScarf/AutoML](https://github.com/LegitScarf/AutoML)
  - 定位：能自剖析数据、生成训练代码并自纠错的 agentic AutoML 系统。
  - 判断：高相关。今天仍有推送，说明不是一锤子原型仓库。

- [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
  - 定位：面向 edge cases 的 TSFM robustness testing 仓库。
  - 判断：最高相关。它仍是本周最值得持续盯的 TSFM 工程资产之一。

### 光伏功率预测

- [2026-08-06] [Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)
  - 定位：day-ahead 光伏功率预测工程仓库。
  - 判断：中相关。新但更像单论文配套实现。

- [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)
  - 定位：cross-climate photovoltaic power forecasting benchmark。
  - 判断：高相关。统一评测协议价值很高。

- [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)
  - 定位：`PARA-PV` 官方代码。
  - 判断：高相关。是光伏方向最贴近研究主线的公开实现。

## 下周跟踪项

- 继续检查 [`CoSPOT`](https://arxiv.org/abs/2609.02093) 是否放出更完整代码、实验配置或长期在线评测细节，它很可能影响后续 `LLM-based OTSF` 路线判断。
- 跟进 [`Frequency Selective Neural Networks`](https://arxiv.org/abs/2608.29012) 是否被更多时序任务引用，判断它是“命名上的 foundation architecture”还是会真正演化为主线。
- 继续监控 [`CastClaw`](https://arxiv.org/abs/2608.30976)、[`TraceBench`](https://arxiv.org/abs/2608.27182)、[`CastFSR`](https://arxiv.org/abs/2608.03031) 和 [`TopoBrick`](https://arxiv.org/abs/2607.06349) 是否公开更多代码、数据协议或 benchmark 说明。
- 持续跟踪 [`TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)、[`agentic-data-pipeline`](https://github.com/lewis-lea/agentic-data-pipeline)、[`LegitScarf/AutoML`](https://github.com/LegitScarf/AutoML) 和 [`solarbench`](https://github.com/shahoismael/solarbench) 的新 commit 与 issue。

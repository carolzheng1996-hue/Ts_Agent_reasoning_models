# 2026-08-20 时间序列 Agent / Reasoning 晨间简报

检索时间：2026-08-20 08:50 CST，Asia/Shanghai  
时间窗口：2026-05-20 至 2026-08-20  
优先来源：arXiv 官方 `abs` / `api`、官方 GitHub 仓库页、[`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)  
检索主题：`time series foundation model`、`time series agent`、`time series harness`、`time series reasoning`、`agentic forecasting`、`timeseries-mcp`、`AutoML agent`、`photovoltaic forecasting`

## 今日摘要

- 截至 `2026-08-20 08:50 CST`，近三个月内高置信、且最晚公开的核心论文仍集中在 `2026-08-14` 到 `2026-08-15`：基础模型侧仍以 [`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106) 、[`Model-agnostic Retrieval-Augmented Extended Forecasting for time series`](https://arxiv.org/abs/2608.14054) 和 [`Into the ORBIT for Time Series`](https://arxiv.org/abs/2608.13262) 为主；reasoning / forecasting agent 侧仍以 [`ReasonCast`](https://arxiv.org/abs/2608.15291) 与 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 为最新代表。
- 我没有在 `2026-08-20` 检到比上述条目更晚、且能通过 arXiv 官方页确认首发日期的新论文；因此今天的更新重点是“校正日期、筛掉仅被聚合源最近收录的候选项”，而不是强行加入弱证据条目。
- Agent / harness 主线最值得持续跟踪的仍是 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`TimeRLM`](https://arxiv.org/abs/2608.03391)、[`Harnessing Generalist Agents for Contextualized Time Series`](https://arxiv.org/abs/2606.05404)、[`Bridging the Last Mile of Time Series Forecasting with LLM Agents`](https://arxiv.org/abs/2606.02497) 和 [`AION`](https://arxiv.org/abs/2605.25045)。
- GitHub 新项目里，按仓库创建日期看，最晚且贴题的入口仍是 [`agentic-data-pipeline`](https://github.com/lewis-lea/agentic-data-pipeline)、[`workkrishnpatel/automl-agent`](https://github.com/workkrishnpatel/automl-agent)、[`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`CastFSR`](https://github.com/Xiaoyu-Tao/CastFSR) 和 [`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp)。
- `DailyArXiv` 仍有增量价值，但像 “Assessing Time Series Reasoning in Foundation Models” 与 “OTIS” 这类标题，今天检索时未能用 arXiv 官方标题检索稳定确认首发页，故只保留在文末的低优先级候选说明。

## 0. 检索口径

- 只保留首次公开日期或仓库创建日期落在 `2026-05-20` 至 `2026-08-20` 的内容。
- 论文日期优先采用 arXiv `published` 日期；GitHub 项目日期优先采用仓库 `created_at`。
- 聚合页或 README 的收录日期不能替代论文首发日期；若官方页无法确认，则标为 `不确定` 并降优先级。

## 1. 时间序列基础模型最新研究

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：系统比较 TSFM、深度学习预测模型与公开 benchmark 设置后，指出低可预测性目标上会出现“预测几乎被压平、横截面排序很差”的 forecast collapse，并提出 `CalibRank` 在校准与排序间做折中。
- 相关性判断：最高。它直接揭示了 TS foundation model 在真实决策型时序任务中的关键失效模式，也会影响依赖排序信号的 agent / reasoning 系统。

### [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14054)
- 简短摘要：提出 `RAEF`，用输入空间检索与拼接式聚合替代 embedding 检索与平均融合，在不微调 foundation model 的情况下增强短历史或弱历史场景的预测能力。
- 相关性判断：高。它虽然不是 agent 论文，但对时间序列 memory / retrieval tool 的设计非常直接。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，用 bootstrap multi-level sampling 与 omni-range incremental training 显式控制大规模异构时序语料的暴露分布、上下文长度与预测跨度。
- 相关性判断：最高。它回答的是“TSFM 应该如何训练”的核心问题，而不只是换一个 backbone。

### [2026-08-12] [FM-LLM: A frequency-enhanced mixture-of-experts framework for adapting LLMs to time series forecasting](https://arxiv.org/abs/2608.11623)

- 日期：2026-08-12
- 来源：[arXiv](https://arxiv.org/abs/2608.11623)
- 简短摘要：提出频域 token 对齐器与非对称 `MoE` 解码器，把冻结 LLM 直接适配到时序预测，并通过时频混合损失降低长程自回归误差累积。
- 相关性判断：高。它更偏 “LLM 适配成时序基础模型”，对 foundation-style forecasting runtime 有直接参考价值。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：提出 live benchmark，覆盖 60 个真实机构场景、1,485 个 scenario-period QA 对，专门评测 agent 在数据持续发布、证据会过期的环境里做 state identification、summarization 与 outlook reasoning 的能力。
- 相关性判断：最高。它是当前最贴近真实动态数据环境的 time-series agent benchmark。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：把 context-aware forecasting 拆成 `Fast -> Slow -> Reflect` 三段：先用轻量 forecaster 构造 prior，再检索上下文并慢思考，最后通过反思校正时序、上下文和领域一致性。
- 相关性判断：最高。它仍然是 forecasting agent workflow 最清晰、最接近可执行系统的公开实现之一。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式 agent 过程，让模型持续调用代码与视觉能力操作时序信号，并在多轮交互里逼近异常位置。
- 相关性判断：最高。它是当前最强的 `tool-using time-series agent` 公开系统之一。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 为通用 agent 提供时序原生 runtime，包括可执行 temporal tools、经验驱动的可复用分析技能和 episodic multimodal memory。
- 相关性判断：最高。它是“怎样把 generalist agent 真正 harness 成时间序列系统”的代表性方案。

### [2026-06-01] [Bridging the Last Mile of Time Series Forecasting with LLM Agents](https://arxiv.org/abs/2606.02497)

- 日期：2026-06-01
- 来源：[arXiv](https://arxiv.org/abs/2606.02497)
- 简短摘要：把“统计预测变成业务可用预测”的最后一公里形式化为 LLM-agent 工作流，让系统调用工具检索节假日、活动、类比案例与专家反馈，并将 reasoning 结果转成显式 forecast revision action。
- 相关性判断：最高。它直击企业时序预测的真实落点，不再停留在静态 benchmark。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://github.com/ztxtech/aion)
- 简短摘要：提出把下一代时序任务写成 `task file + workspace + validation interface` 三元组，并以 `agents / skills / rules / memory / evaluation / protocols` 六组组件构建 harness。
- 相关性判断：最高。它明确把 “time-series agent” 从单篇方法论文推进到完整 harness / protocol 设计。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：围绕需求预测，把事件语义转换成结构化干预字段，并让 agent 判断是否需要语义 reasoning，再通过加性与乘性路径选择性修正 foundation forecaster。
- 相关性判断：最高。它是当前窗口里最贴近 `forecasting + reasoning + agent` 三者交集的论文。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 LLM reasoning 直接作为样本级 ensemble router，联合处理时序文本化模式描述与数值特征，输出可解释的动态模型权重。
- 相关性判断：最高。它说明 reasoning 已经进入 forecasting runtime 的决策层，而不只是解释层。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“选文本还是图像、选哪个模型、如何兼顾成本与效果”形式化为时序 reasoning 的动态图路由问题。
- 相关性判断：最高。它非常像 time-series reasoning runtime router 的原型系统。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 多模态 benchmark 与 `TSAlign` 方法，把时序 reasoning 从 pattern recognition 扩展到 grounding、inferring、extrapolating 与 acting 等认知型任务。
- 相关性判断：最高。它扩大了“时间序列 reasoning”任务定义，是后续 agent benchmark 的重要上游。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent 与混合模式，发现代码执行确实提升时序问答能力，但统计验证与细粒度理解仍有明显错误率。
- 相关性判断：最高。它直接回答“会写代码的 agent 是否真的能做时间序列推理”。

## 4. GitHub 上值得跟踪的新项目

### 时间序列

### [2026-08-16] [lewis-lea/agentic-data-pipeline](https://github.com/lewis-lea/agentic-data-pipeline)

- 日期：2026-08-16
- 来源：[GitHub](https://github.com/lewis-lea/agentic-data-pipeline)
- 简短摘要：用于时序数据摄取与清洗的 agentic pipeline，更偏数据供给层，而非预测模型本身。
- 相关性判断：中。它不是研究型 forecasting agent，但对真实 harness 的数据层非常有用。

### [2026-08-15] [workkrishnpatel/automl-agent](https://github.com/workkrishnpatel/automl-agent)

- 日期：2026-08-15
- 来源：[GitHub](https://github.com/workkrishnpatel/automl-agent)
- 简短摘要：一个自主管理建模目标、预处理、候选模型训练、调参和结果解释的 AutoML agent。
- 相关性判断：高。虽然不限定时间序列，但在 `agent + machine learning + AutoML` 交集上很贴近工程落地。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05
- 来源：[GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 的官方仓库。
- 相关性判断：最高。它是本窗口最值得直接跟踪的 time-series agent benchmark 项目。

### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03
- 来源：[GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，对应 `Fast-Slow-Reflect` forecasting agent workflow。
- 相关性判断：最高。是 forecasting agent 编排逻辑最直接的代码入口之一。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14
- 来源：[GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：长上下文 anomaly localization 的 recursive time-series agent 实现。
- 相关性判断：最高。代表 “代码/工具驱动的时序 agent” 方向。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、变点、分解、趋势检验和数据质量审计。
- 相关性判断：最高。它正好落在 time-series agent 的工具层与 protocol 层。

### [2026-07-07] [Optim-Agent/optim-agent](https://github.com/Optim-Agent/optim-agent)

- 日期：2026-07-07
- 来源：[GitHub](https://github.com/Optim-Agent/optim-agent)
- 简短摘要：把 LLM agent 当作超参优化器，聚焦机器学习优化与 agent skills 组合。
- 相关性判断：中高。它不是时间序列专用，但在 `agent + AutoML / HPO + machine learning` 方向上值得跟。

### [2026-06-18] [tezzuk/Multi-Agent-Forecasting](https://github.com/tezzuk/Multi-Agent-Forecasting)

- 日期：2026-06-18
- 来源：[GitHub](https://github.com/tezzuk/Multi-Agent-Forecasting)
- 简短摘要：以多 agent 方式组织 forecasting 工作流的实验型仓库。
- 相关性判断：中高。研究成熟度不如官方论文仓库，但主题非常贴近 agentic forecasting。

### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：可复现的本地时序预测 benchmark，带 baseline、诊断、报告、绘图和确定性实验 agent。
- 相关性判断：高。它更偏工程研究平台，但很适合做时序 agent / benchmark 原型。

### 光伏功率预测

### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04
- 来源：[GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候带统一协议的光伏功率预测 benchmark，强调四个 Köppen 气候区上的统一评测与开放 baseline。
- 相关性判断：最高。它是近期光伏预测项目里最值得直接跟的 benchmark 底座。

### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码，走 `physics-aware retrieval + frozen foundation model + distribution shift correction` 路线。
- 相关性判断：最高。它是 “TSFM 怎样落到 PV forecasting” 这条线最直接的代码入口。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-06] [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.11254)
- 简短摘要：利用 all-sky imager、任务感知潜空间和 latent diffusion 做小时内太阳辐照度生成式预测，并显著提升 ramp event 检测。
- 相关性判断：高。它偏辐照度而非直接功率，但对短时光伏功率 pipeline 很贴近。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点的 day-ahead PV 预测，构建 timestamp 校正、leakage-safe 特征、物理先验与 stacking 的部署导向流水线。
- 相关性判断：最高。它是本窗口内最贴近真实部署的 PV forecasting 论文之一。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结 Chronos 先验、残差适配器与 shift correction 结合起来，处理天气变化、昼夜切换和分布漂移下的 PV 预测。
- 相关性判断：最高。它是“foundation model + retrieval + 光伏”主线里最值得关注的公开工作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 physics-informed synthetic histories 在冷启动条件下为新站点合成时间上下文，再让 TSFM 进行 zero-shot / inference-time conditioning forecasting。
- 相关性判断：高。它把 foundation model、物理先验与冷启动部署问题接到了一起。

## 6. 不确定 / 降优先级候选

### [不确定] [DailyArXiv README / Time Series](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)

- 日期：不确定（`2026-08-20` 检索时可确认 README 中存在 `Time Series` 更新，但不能把收录日期等同于论文首发日期）
- 来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)
- 简短摘要：README 中仍能看到与今天主题高度相关的候选标题，例如 “Assessing Time Series Reasoning in Foundation Models” 和 “OTIS: A Large-Scale Foundation Model for Accurate Time Series Understanding”。
- 相关性判断：中高。主题上很相关，但今天无法通过 arXiv 官方标题检索稳定确认其首发页与准确日期，因此不放入正文高优先级列表。

## 7. 跟踪建议

- 如果你优先关心“基础模型本身”，今天最该看的是 `Forecast Collapse`、`RAEF` 和 `ORBIT`。
- 如果你优先关心“可执行的时序 Agent / harness”，最值得继续跟的是 `TimeSage-EV`、`CastFSR`、`TimeRLM`、`TimeClaw` 和 `AION`。
- 如果你优先关心“reasoning 何时真正进入 runtime”，应优先看 `ReasonCast`、`REATS`、`TSRouter` 和 `Can LLM Coding Agents Reason About Time Series?`。
- 如果你接下来要做工程实现，GitHub 侧最有直接复用价值的是 `CastFSR`、`TimeRLM`、`timeseries-mcp`、`workkrishnpatel/automl-agent`、`optim-agent`、`PARA-PV` 和 `solarbench`。

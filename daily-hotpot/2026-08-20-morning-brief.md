# 2026-08-20 时间序列 Agent / Reasoning 晨间简报

检索时间：2026-08-20 15:46 CST，Asia/Shanghai  
时间窗口：2026-05-20 至 2026-08-20  
优先来源：arXiv 官方 `abs` / `api`、GitHub 官方仓库页 / API、[`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)  
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`agentic forecasting`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic forecasting`

## 今日摘要

- 今天确认到一个比昨日正文更晚、且高相关的基础模型新条目：[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)，首发于 `2026-08-18`，把 TS foundation model 评测从静态 snapshot 推到了持续开放世界评测。
- Agent / harness 主线没有被更晚论文替代，但我补回了此前遗漏的 [`TimeSage-MT`](https://arxiv.org/abs/2606.01498)；现在 `TimeSage-EV`、`TimeSage-MT`、`AION`、`TimeClaw` 四条线分别对应 live benchmark、多轮对话 benchmark、practical harness 和通用 agent runtime。
- Reasoning 主线仍以 [`ReasonCast`](https://arxiv.org/abs/2608.15291) 和 [`REATS`](https://arxiv.org/abs/2608.10149) 为最新、最贴近 forecasting runtime 的条目；`TSRouter` 和 `Can LLM Coding Agents Reason About Time Series?` 则继续代表 router / tool-using 两个方向。
- GitHub 项目侧，今天更值得前置的是最近两天新出现、但仍有明确工程指向的仓库：[`building-agentic-automl`](https://github.com/lucalullo/building-agentic-automl)、[`Agentic-AutoML-MCP`](https://github.com/Harishrajan77/Agentic-AutoML-MCP)；而纯名字匹配但描述过薄的弱候选已剔除。
- `DailyArXiv` 的 `Time Series` 板块可以确认存在相关论文，但公开 README 对 `2026-08` 中旬之后的新论文覆盖明显不足，因此今天只把它作为补检与交叉核验来源，不改变正文主排序。

## 0. 检索口径

- 只保留首次公开日期或仓库创建日期落在 `2026-05-20` 至 `2026-08-20` 的内容。
- 论文日期优先采用 arXiv `published`；GitHub 项目日期优先采用仓库 `created_at`。
- 聚合页、README 或二手博客里的收录时间，不能替代论文或仓库首次公开时间。
- 无法稳定确认日期、或虽命中关键词但仓库内容明显过薄的候选项，不纳入正文主列表。

## 1. 时间序列基础模型最新研究

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出首个面向 TS foundation model 的 open-world living benchmark，用真实未来数据做 prequential evaluation，专门考察模型在持续分布漂移、季节性变化和突发事件中的长期稳健性，而不是一次性 snapshot 排行。
- 相关性判断：最高。它直接把 TSFM 的评测问题提升为“持续有效性”问题，和时间序列 agent / evolving benchmark 主线高度一致。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：系统比较 TSFM、深度学习 forecaster 和公开 benchmark，指出低可预测性目标上会出现“预测幅度被压平、横截面排序失败”的 forecast collapse，并提出 `CalibRank` 平衡校准与排序。
- 相关性判断：最高。它揭示了 TS foundation model 在真实决策任务中的关键失效模式，也会直接影响依赖排序信号的 agent / reasoning 系统。

### [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14054)
- 简短摘要：提出 `RAEF`，通过输入空间检索与拼接式聚合，在不微调 foundation model 的前提下增强短历史或弱历史场景下的预测能力。
- 相关性判断：高。它不是 agent 论文，但对 time-series memory / retrieval tool 的设计非常直接。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，用 bootstrap multi-level sampling 与 omni-range incremental training 显式控制异构时序语料的暴露分布、上下文长度和预测跨度。
- 相关性判断：最高。它回答的是“TSFM 应该怎样训练”的核心问题，而不是单纯换 backbone。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：提出 live benchmark，覆盖 60 个真实机构场景与 1,485 个 scenario-period QA 对，专门评测 agent 在“数据持续发布、旧证据会过期”的环境中做 state identification、summarization 与 outlook reasoning 的能力。
- 相关性判断：最高。它是当前最贴近真实动态数据环境的 time-series agent benchmark。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式 agent 过程，让模型持续调用代码与视觉能力操作时序信号，并在多轮交互里逼近异常位置。
- 相关性判断：最高。它是目前最强的一类 `tool-using time-series agent` 公开系统。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：把 context-aware forecasting 拆成 `Fast -> Slow -> Reflect` 三阶段：先用轻量 forecaster 构造 prior，再检索上下文并慢思考，最后通过反思修正时序、上下文与领域一致性。
- 相关性判断：最高。它仍是 forecasting agent workflow 最清晰、最接近可执行系统的公开实现之一。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 为通用 agent 提供时序原生 runtime，包括 temporal tools、可复用分析技能演化和 episodic multimodal memory。
- 相关性判断：最高。它是“如何把 generalist agent 真正 harness 成时间序列系统”的代表性方案。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建 240 个任务、2,680 个对话轮次的多轮 time-series reasoning benchmark，突出记忆、证据累积和决策导向分析中的失败模式。
- 相关性判断：最高。它是多轮时间序列 agent benchmark 的关键补足，和 `TimeSage-EV` 形成互补。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：将下一代时序任务形式化为 `task file + workspace + validation interface` 三元组，并以 `agents / skills / rules / memory / evaluation / protocols` 六组组件构建 practical harness。
- 相关性判断：最高。它明确把 “time-series agent” 从单篇方法论文推进到完整 harness / protocol 设计。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：围绕需求预测，把事件语义转换为结构化干预字段，并让 agent 判断何时需要语义 reasoning，再通过加性和乘性路径选择性修正 foundation forecaster。
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
- 相关性判断：最高。它很像 reasoning runtime router 的原型系统。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 方法，把时序 reasoning 从 pattern recognition 扩展到 grounding、inferring、extrapolating 与 acting 等认知型任务。
- 相关性判断：最高。它扩大了“时间序列 reasoning”任务定义，是后续 agent benchmark 的重要上游。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent 与 hybrid 模式，发现代码执行确实提升时序问答能力，但统计验证与细粒度理解仍有明显错误率。
- 相关性判断：最高。它直接回答“会写代码的 agent 是否真的能做时间序列推理”。

## 4. GitHub 上值得跟踪的新项目

### 时间序列 / Agent / AutoML

### [2026-08-19] [lucalullo/building-agentic-automl](https://github.com/lucalullo/building-agentic-automl)

- 日期：2026-08-19
- 来源：[GitHub](https://github.com/lucalullo/building-agentic-automl)
- 简短摘要：按“从 baseline 到 senior ML agent”的路线搭建 agentic AutoML 系统，工程目标明确，且 topics 明确包含 `agentic`、`automl`。
- 相关性判断：中高。它不是时间序列专用，但与 `agent + machine learning + AutoML` 主线直接相关。

### [2026-08-17] [Harishrajan77/Agentic-AutoML-MCP](https://github.com/Harishrajan77/Agentic-AutoML-MCP)

- 日期：2026-08-17
- 来源：[GitHub](https://github.com/Harishrajan77/Agentic-AutoML-MCP)
- 简短摘要：基于 LangGraph 与 MCP 的 agentic AutoML 平台，覆盖数据分析、预处理、模型选择、训练与评估。
- 相关性判断：高。它落在 `agent + AutoML + tool protocol` 的交叉点，对时序 agent 工具层也有参考价值。

### [2026-08-16] [lewis-lea/agentic-data-pipeline](https://github.com/lewis-lea/agentic-data-pipeline)

- 日期：2026-08-16
- 来源：[GitHub](https://github.com/lewis-lea/agentic-data-pipeline)
- 简短摘要：用于时序数据摄取与清洗的 agentic pipeline，更偏数据供给层，而不是预测模型本身。
- 相关性判断：中。它不是研究型 forecasting agent，但对真实 harness 的数据层很有用。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05
- 来源：[GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库。
- 相关性判断：最高。它是当前窗口最值得直接跟踪的 time-series agent benchmark 项目。

### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03
- 来源：[GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，对应 `Fast-Slow-Reflect` forecasting agent workflow。
- 相关性判断：最高。它是 forecasting agent 编排逻辑最直接的代码入口之一。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14
- 来源：[GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：长上下文 anomaly localization 的 recursive time-series agent 实现。
- 相关性判断：最高。代表 “代码 / 工具驱动的时序 agent” 方向。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它正好落在 time-series agent 的工具层与 protocol 层。

### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：可复现的本地时序预测 benchmark，带 baseline、诊断、报告、绘图和确定性实验 agent。
- 相关性判断：高。它更偏工程研究平台，但非常适合做时序 agent / benchmark 原型。

### 光伏功率预测

### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04
- 来源：[GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候带统一协议的光伏功率预测 benchmark，强调四个 Köppen 气候区上的 harmonized protocol 与开放 baseline。
- 相关性判断：最高。它是近期光伏预测项目里最值得直接跟踪的 benchmark 底座。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-09] [A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning](https://arxiv.org/abs/2608.14698)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.14698)
- 简短摘要：提出低成本 IoT 环境监测与嵌入式 solar forecasting 一体化装置，在微控制器上执行 24 小时太阳能电压预测，并支持部署后的增量学习。
- 相关性判断：中高。它更偏边缘部署与设备侧学习，不是 foundation model 路线，但对实际 solar forecasting 工程化很有价值。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点 day-ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线，并强调 rolling-origin 评测。
- 相关性判断：最高。它是本窗口内最贴近实际部署的公开 PV 功率预测论文之一。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented Adaptation of Frozen Time-Series Foundation Models for Robust Photovoltaic Forecasting](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、frozen TSFM 与 shift correction 结合起来，处理天气变化与站点分布偏移下的 PV 预测鲁棒性。
- 相关性判断：最高。它是“TSFM 怎样落到光伏预测”这条线最直接的公开工作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：用 physics-informed synthetic histories 缓解新站点冷启动数据不足问题，把基础模型迁移到缺少历史功率序列的 PV 站点。
- 相关性判断：高。它把 foundation model、domain prior 和 cold-start deployment 三个主题接到了一起。

## 6. DailyArXiv 补检结论

### [2026-08-20] [DailyArXiv README / Time Series](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)

- 日期：2026-08-20（补检日期）
- 来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)
- 简短摘要：已确认公开 README 中存在 `Time Series` 板块，也能检到近三个月内的相关主题论文；但截至今天补检，公开 README 对 `2026-08` 中旬之后的新论文覆盖明显不足，没有覆盖今天最关键的新条目 `LiveHouse-TS`、`ReasonCast` 与 `TimeSage-EV`。
- 相关性判断：中高。它适合作为补检与回捞来源，但不适合作为“最新”日期的主判据。

### 补检结论

- `DailyArXiv` 的确有时间序列相关条目，说明它对回捞近窗论文仍有价值。
- 但若 README 收录日期与 arXiv 首发日期不一致，正文仍以 arXiv 官方 `published` 为准。
- 今天没有发现 `DailyArXiv` 中存在、且比正文更晚、同时又能通过官方来源确认的高优先新条目。

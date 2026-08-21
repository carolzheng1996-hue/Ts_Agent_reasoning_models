# 2026-08-21 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-21 09:28 CST，Asia/Shanghai  
时间窗口：2026-05-21 至 2026-08-21  
优先来源：arXiv 官方 `abs` 页面、GitHub 官方仓库页 / API、[`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)  
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`agentic forecasting`、`timeseries harness`、`machine learning agent`、`AutoML`、`photovoltaic forecasting`

## 今日摘要

- 基础模型方向最近一周最强的四条线没有变化：[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299) 做 live benchmark、[`Forecast Collapse`](https://arxiv.org/abs/2608.14106) 做 failure-mode analysis、[`RAEF`](https://arxiv.org/abs/2608.14054) 做 retrieval augmentation、[`ORBIT`](https://arxiv.org/abs/2608.13262) 做训练范式设计。
- Agent / harness 方向今天最值得前置的仍是 [`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`SCENARIODIFF`](https://arxiv.org/abs/2608.17164) 和 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)。这三条线分别代表自演化实验搜索、分层场景 agent、live benchmark。
- Reasoning 方向最新且高相关的三篇仍是 [`Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B`](https://arxiv.org/abs/2608.18419)、[`ReasonCast`](https://arxiv.org/abs/2608.15291) 和 [`REATS`](https://arxiv.org/abs/2608.10149)。`TimeRLM` 与 `TSRouter` 继续代表 tool-using 与 router 两条实现路径。
- GitHub 侧今天能稳定复核创建日期的新项目，按日期从近到远优先看 [`building-agentic-automl`](https://github.com/lucalullo/building-agentic-automl)、[`MS_Azure_Machine_Learning_Many_Models_1`](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)、[`Agentic-AutoML-MCP`](https://github.com/Harishrajan77/Agentic-AutoML-MCP)、[`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)。
- 光伏功率预测方向今天没有更晚的新高相关论文超过已有主列表，但 [`solarbench`](https://github.com/shahoismael/solarbench)、[`A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning`](https://arxiv.org/abs/2608.14698)、[`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088) 仍是最近三个月最值得持续跟踪的条目。

## 0. 检索口径

- 只保留首次公开日期或仓库 `created_at` 落在 `2026-05-21` 至 `2026-08-21` 的内容。
- 论文日期优先采用 arXiv 首次公开日期；GitHub 项目日期优先采用官方 API `created_at`。
- 若无法确认日期，则标注 `不确定` 并降优先级；本轮主列表未纳入日期不确定项目。
- `DailyArXiv` 只作为补检与交叉核验来源，不替代论文首发日期和仓库创建日期。

## 1. 时间序列基础模型最新研究

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出面向时间序列基础模型的 open-world living benchmark，用真实未来数据做 prequential evaluation，专门衡量模型在持续分布漂移、季节变化和突发事件下的长期稳健性。
- 相关性判断：最高。它把 TS foundation model 的问题从静态榜单精度推进到持续有效性，和后续 agent benchmark 直接衔接。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：系统比较 TSFM、深度学习 forecaster 和大量公开配置，指出低可预测性目标上会出现预测幅度被压平、横截面排序失效的 forecast collapse，并提出 `CalibRank` 平衡校准与排序。
- 相关性判断：最高。它直接暴露 TSFM 在真实下游决策里的关键失效模式。

### [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14054)
- 简短摘要：提出 `RAEF`，通过输入空间检索和拼接式聚合，在不微调 foundation model 的前提下增强短历史、弱历史场景下的预测能力。
- 相关性判断：高。它虽然不是 agent 论文，但对 time-series memory / retrieval tool 设计非常直接。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，用 bootstrap multi-level sampling 与 omni-range incremental training 显式控制异构时序语料的暴露分布、上下文长度与预测跨度。
- 相关性判断：最高。它回答的是“TSFM 应该如何训练”的核心问题，而不只是更换 backbone。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：围绕金融时序变点检测，先做受控探索性分析，再通过 `Revision`、`Alternative Strategy`、`Recombination` 三种轨迹演化算子持续改进可执行实验路径，并用验证反馈驱动搜索。
- 相关性判断：最高。它是当前窗口内最明确把自演化研究 agent 落到时间序列建模任务上的新论文。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态时序预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层，先从文档中抽取结构化未来情景，再条件化扩散式 forecaster。
- 相关性判断：高。它不是通用 benchmark，但很好地展示了多 agent 分层建模时序上下文的系统设计。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：提出 live benchmark，覆盖 60 个真实机构场景与 1,485 个 scenario-period QA 对，专门评测 agent 在数据持续发布、旧证据会过期的环境中做 state identification、summarization 与 outlook reasoning 的能力。
- 相关性判断：最高。它是当前最贴近真实动态数据环境的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两个相互隔离的量化研究 agent 循环，一个做因子发现，一个做模型开发；系统保留已验证证据，并用其指导后续 proposal，形成 bounded recursive self-improvement loop。
- 相关性判断：高。场景偏量化交易，但方法论非常接近时间序列研究 agent / experiment harness。

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
- 相关性判断：最高。它明确把 time-series agent 从单篇方法论文推进到完整 harness / protocol 设计。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-08-19] [Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B](https://arxiv.org/abs/2608.18419)

- 日期：2026-08-19
- 来源：[arXiv](https://arxiv.org/abs/2608.18419)
- 简短摘要：从 mechanistic interpretability 角度分析 LLaMA 在数值序列建模中的内部机制，发现模型会在隐藏表征中显式编码一阶差分，并以近似 induction circuit 的方式取回并相加。
- 相关性判断：中高。它不直接是 forecasting 系统，但对“LLM 是否真的在做时序结构推理”给出了底层机制证据。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：围绕需求预测，把事件语义转成结构化干预字段，并让 agent 判断何时需要文本 reasoning，再通过加性与乘性路径选择性修正 foundation forecaster。
- 相关性判断：最高。它是当前窗口里最贴近 `forecasting + reasoning + agent` 三者交集的论文。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 LLM reasoning 直接作为样本级 ensemble router，联合处理时序文本化模式描述与数值特征，输出可解释的动态模型权重。
- 相关性判断：最高。它说明 reasoning 已经进入 forecasting runtime 的决策层，而不只是解释层。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式 agent 过程，让模型持续调用代码与视觉能力操作时序信号，并在多轮交互中逼近异常位置。
- 相关性判断：最高。它是目前最成熟的一类 `tool-using time-series reasoning agent`。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“选文本还是图像、选哪个模型、如何兼顾成本与效果”形式化为时间序列 reasoning 的动态图路由问题。
- 相关性判断：最高。它很像 reasoning runtime router 的原型系统。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 方法，把 time-series reasoning 从 pattern recognition 扩展到 grounding、inferring、extrapolating 与 acting 等认知型任务。
- 相关性判断：最高。它扩大了时间序列 reasoning 的任务定义，是后续 agent benchmark 的重要上游。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent 与 hybrid 模式，发现代码执行确实提升时序问答能力，但统计验证与细粒度理解仍有明显错误率。
- 相关性判断：最高。它直接回答“会写代码的 agent 是否真的能做时间序列推理”。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

### [2026-08-19] [lucalullo/building-agentic-automl](https://github.com/lucalullo/building-agentic-automl)

- 日期：2026-08-19（创建），2026-08-20（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/lucalullo/building-agentic-automl) / [GitHub 仓库](https://github.com/lucalullo/building-agentic-automl)
- 简短摘要：按“从 baseline 到 senior ML agent”的路线构建 agentic AutoML 系统，仓库描述和 topics 都明确指向 `agentic` 与 `AutoML`。
- 相关性判断：中高。它不是时间序列专用，但和 `agent + machine learning + AutoML` 主线直接相关。

### [2026-08-17] [dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)

- 日期：2026-08-17（创建），2026-08-19（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1) / [GitHub 仓库](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)
- 简短摘要：一个面向 Azure AutoML 的时间序列预测工程样例仓，定位清楚，适合快速了解云端 AutoML forecasting workflow。
- 相关性判断：中高。它更偏工程入口而不是研究原型，但和 `time series + AutoML` 主题直接相关。

### [2026-08-17] [Harishrajan77/Agentic-AutoML-MCP](https://github.com/Harishrajan77/Agentic-AutoML-MCP)

- 日期：2026-08-17（创建），2026-08-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Harishrajan77/Agentic-AutoML-MCP) / [GitHub 仓库](https://github.com/Harishrajan77/Agentic-AutoML-MCP)
- 简短摘要：基于 LangGraph 与 MCP 的 agentic AutoML 平台，覆盖数据分析、预处理、模型选择、训练和评估。
- 相关性判断：高。它落在 `agent + AutoML + tool protocol` 的交叉点，对时序 agent 工具层很有参考价值。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库。
- 相关性判断：最高。它是当前窗口内最值得直接跟踪的 time-series agent benchmark 项目。

### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（创建），2026-08-03（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Xiaoyu-Tao/CastFSR) / [GitHub 仓库](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，对应 `Fast-Slow-Reflect` forecasting agent workflow。
- 相关性判断：最高。它是 forecasting agent 编排逻辑最直接的代码入口之一。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（创建），2026-08-05（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/OpenTSLM/TimeRLM) / [GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：`TimeRLM` 论文官方代码，聚焦长上下文 anomaly localization 的递归式工具调用流程。
- 相关性判断：最高。它是当前窗口内最值得直接复现的 time-series reasoning / agent 代码仓之一。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（创建），2026-07-11（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp) / [GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、变点、分解、趋势检验和数据质量审计，且明确声明不执行任意代码。
- 相关性判断：最高。它正好落在 time-series agent 的工具层和 protocol 层。

### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（创建），2026-06-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/AkshajKashyap/autoresearch-timeseries-agent) / [GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：可复现的本地时序预测 benchmark，带 baseline、诊断、报告、绘图、CI 和确定性实验 agent。
- 相关性判断：高。它更偏工程研究平台，但非常适合做时序 agent / benchmark 原型。

### 光伏功率预测

### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（创建），2026-08-13（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/shahoismael/solarbench) / [GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候带统一协议的光伏功率预测 benchmark，强调四个 Köppen 气候区上的 harmonized protocol 与开放 baseline。
- 相关性判断：最高。它是近三个月光伏预测项目里最值得直接跟踪的 benchmark 底座。

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
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：把 physics prior 与 retrieval-augmented adaptation 结合到 frozen TS foundation model 上，以更稳健地处理跨气候、跨站点的光伏功率预测。
- 相关性判断：最高。它是当前窗口内最直接连接 TSFM 与光伏预测场景的论文。

## 6. DailyArXiv 补检结论

- 检查对象：[`zezhishao/DailyArXiv`](https://github.com/zezhishao/DailyArXiv) 官方 README，页面显示 `Last update: 2026-08-21`。
- 今天确认到 `Time Series` 板块里确实存在与本主题直接相关、且仍在三个月窗口内的条目：[`Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B`](https://arxiv.org/abs/2608.18419)。
- 但在今天的 README 快照里，没有稳定看到 [`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149) 等 8 月中下旬最关键条目。
- 结论：`DailyArXiv` 对 7 月至 8 月初的 time-series 回溯仍有帮助，但对 `2026-08-14` 之后的 time-series agent / reasoning / TSFM 重点论文覆盖不足，因此本轮继续把它作为补检来源而不是主排序依据。

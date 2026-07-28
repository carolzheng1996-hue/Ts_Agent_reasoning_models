# 2026-07-28 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-28 08:56 CST，Asia/Shanghai  
时间窗口：2026-04-28 至 2026-07-28  
优先来源：arXiv、OpenReview、官方项目页、机构博客、GitHub 官方仓库页 / GitHub API  
检索词：`time series foundation model`、`time series agent`、`agentic time series forecasting`、`time series reasoning`、`timeseries agent`、`timeseries harness`、`time-series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 过去三个月里，时间序列基础模型的增量重点明显从“继续扩底座”转向“如何做 post-training、数据配方优化、检索增强和部署校准”。
- Agent 方向的新增工作开始更明确地把 `LLM reasoning`、`TSFM forecasting`、`技能库` 与 `self-evolving workflow` 拆成可组合部件，而不是单一端到端模型。
- reasoning 方向最值得跟踪的是 `Can LLM Coding Agents Reason About Time Series?`、`ARTIST` 和 `TimeSage-MT`：一个测编码代理是否真会做时序推理，一个做自适应片段选择，一个把推理任务系统化成 benchmark。
- GitHub 上最近三周的新增项目更偏工程基建：`timeseries-mcp`、`agent-harness-4-ml-research`、`time-series-autoML` 这类仓库都在靠近“可调用工具层 + 评测/编排层 + 自动建模层”。
- 今天是周二，按规则不生成周报文件。

## 0. 检索说明

- 仅保留 `2026-04-28` 至 `2026-07-28` 时间窗内可确认日期的条目。
- 论文日期优先采用 arXiv `Submitted on` 日期；OpenReview 条目采用页面显示的 `Published` 日期；GitHub 项目日期优先采用 GitHub API `created_at`。
- 无法稳定确认日期或只有二手转载的候选项已降权，未放入主清单。

## 1. 时间序列基础模型最新研究

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 的主要路线，包括参数高效适配、上下文增强、模型组合、输出后处理和不确定性控制，核心问题是如何把预训练底座可靠迁移到真实任务。
- 相关性判断：最高。它直接对应 `foundation model -> agent runtime -> deployment policy` 这条主线。

### [2026-07-09] [SensorFM: Foundation model for wearables](https://research.google/blog/sensorfm-foundation-model-for-wearables/)

- 日期：2026-07-09
- 来源：[Google Research Blog](https://research.google/blog/sensorfm-foundation-model-for-wearables/)
- 简短摘要：Google 发布面向可穿戴传感器序列的 SensorFM，强调大规模预训练对健康与行为识别等时序任务的迁移能力。
- 相关性判断：高。虽然更偏健康传感器垂直场景，但本质仍是时间序列基础模型的新官方动态。

### [2026-06-06] [Mix, Don’t Pick: Why Synthetic Corpus Composition Matters for Time Series Foundation Model Pretraining](https://arxiv.org/abs/2606.09912)

- 日期：2026-06-06
- 来源：[arXiv](https://arxiv.org/abs/2606.09912)
- 简短摘要：研究合成语料的配比问题，指出 TSFM 预训练效果不只取决于“是否使用合成数据”，更取决于不同生成机制与序列结构的组合方式。
- 相关性判断：高。它直接影响未来时序基础模型的数据工程和预训练 recipe 设计。

### [2026-05-17] [Olivia: Harmonizing Time Series Foundation Models with Periodicity-Aware Spectral Decomposition](https://arxiv.org/abs/2605.17340)

- 日期：2026-05-17
- 来源：[arXiv](https://arxiv.org/abs/2605.17340)
- 简短摘要：通过周期性感知的频谱分解来重整 TSFM 对复杂周期结构的建模，使基础模型在长周期、多频率序列上的表示更加稳定。
- 相关性判断：高。它属于“如何补齐 TSFM 对时间结构理解缺口”的典型工作。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-08] [Self-Evolving Time-Series Agent (SE-TSA): A Strategic Data-Driven Decision Support System](https://zenodo.org/records/15677619)

- 日期：2026-06-08
- 来源：[Zenodo 项目页](https://zenodo.org/records/15677619) / [GitHub](https://github.com/manojjosephv/se-tsa)
- 简短摘要：提出可自演化的时间序列 Agent，把预测、异常诊断、上下文理解与策略建议放在同一工作流里，并强调持续反馈驱动的自我改进。
- 相关性判断：高。它更接近完整决策支持 Agent，而不是单点 forecasting 模块。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：将 LLM 语义推理器与 TSFM 数值预测器显式拆分，再通过融合模块把文本上下文理解和时间序列预测结果组合到一起。
- 相关性判断：最高。它是近三个月里最明确的 `semantic reasoning + time-series forecasting` Agent 方案之一。

### [2026-05-14] [Nexus : An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 流程拆成宏观波动、微观波动、上下文事件理解和最终融合四个阶段，通过多 Agent 协作同时优化预测值与解释性。
- 相关性判断：高。它代表了“forecasting as multi-step reasoning”这条 agentic 路线。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：直接测试 coding agent 处理时序任务时的真实推理能力，比较原始数值输入、代码执行与两者结合的效果，发现即使会写代码，代理仍容易在统计验证和细节理解上出错。
- 相关性判断：最高。它正面回答“会写代码的 Agent 是否已经可靠掌握时序 reasoning”。

### [2026-05-31] [TimeSage-MT: Benchmarking LLMs for Multi-Task Reasoning on Multivariate Time Series](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建面向多变量时间序列的多任务 benchmark，把识别、比较、归因和预测等多类推理任务放到统一测试框架里。
- 相关性判断：最高。它是目前少数专门面向“多变量时序推理”而不是单一 forecasting 指标的系统 benchmark。

### [2026-04-30] [Adaptive Time Series Reasoning via Segment Selection (ARTIST)](https://openreview.net/forum?id=Iyd9kAxaY1)

- 日期：2026-04-30
- 来源：[OpenReview / ICML 2026](https://openreview.net/forum?id=Iyd9kAxaY1)
- 简短摘要：提出自适应片段选择机制，让模型只聚焦对当前问题最关键的时间片段，以降低长序列推理时的噪声和计算冗余。
- 相关性判断：高。它非常接近未来时序 reasoning 模型中的 `segment router / evidence selector` 基础组件。

## 4. 光伏功率预测最新研究

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结的时间序列基础模型先验和分布偏移修正拼接成统一光伏预测管线，重点解决跨站点迁移和 shift 问题。
- 相关性判断：最高。它是当前 `TSFM + retrieval + physics prior + shift correction` 最清晰的光伏代表作。

### [2026-06-05] [Time Series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过物理先验构造 synthetic histories，缓解冷启动光伏站点缺乏历史数据的问题，使 TSFM 在 inference-time 仍有可用上下文。
- 相关性判断：高。它直接回应“新站点上线初期如何让基础模型工作起来”。

## 5. GitHub 上值得跟踪的新项目

### 时间序列

#### [2026-07-26] [Cyanisok3/agent-harness-4-ml-research](https://github.com/Cyanisok3/agent-harness-4-ml-research)

- 日期：2026-07-26（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Cyanisok3/agent-harness-4-ml-research)
- 简短摘要：一个面向机器学习研究流程的 agent harness，实现了用确定性状态机诊断和修复训练过程的工程框架。
- 相关性判断：高。虽然不是专门做时序，但很贴近 `time-series agent harness` 的基础设施需求。

#### [2026-07-16] [Dzui1/deterministic-ml-harness](https://github.com/Dzui1/deterministic-ml-harness)

- 日期：2026-07-16（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Dzui1/deterministic-ml-harness)
- 简短摘要：强调把开发者工具层与实际 ML 平台层严格分离的 deterministic harness 模板，便于回放、验证和自动化调试。
- 相关性判断：高。对构建可审计的时间序列 Agent runtime 很有参考价值。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供确定性的时间序列统计 MCP 工具，包括异常检测、变点、分解、趋势检验和数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定统计工具层”的可落地形态。

#### [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-07-08（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：面向时间序列预测的 AutoML Web 应用，覆盖数据上传、建模和结果展示，定位更偏可操作的自动化建模入口。
- 相关性判断：中高。研究深度一般，但对 `forecasting AutoML interface` 很贴近实际用户工作流。

#### [2026-06-27] [MarkAntonyRajS/ChronoSight-AI](https://github.com/MarkAntonyRajS/ChronoSight-AI)

- 日期：2026-06-27（GitHub `created_at`）
- 来源：[GitHub](https://github.com/MarkAntonyRajS/ChronoSight-AI)
- 简短摘要：把数据审计、统计检验、AutoML 预测和 LLM 业务报告整合成一个自治分析平台。
- 相关性判断：高。它属于“Agent + AutoML + 报告生成”的组合型时序分析项目。

### 光伏功率预测

#### [2026-07-27] [alidarodi/Photovoltaic-Power-Forecasting-with-ALRE-GRU-and-EDGOA](https://github.com/alidarodi/Photovoltaic-Power-Forecasting-with-ALRE-GRU-and-EDGOA)

- 日期：2026-07-27（GitHub `created_at`）
- 来源：[GitHub](https://github.com/alidarodi/Photovoltaic-Power-Forecasting-with-ALRE-GRU-and-EDGOA)
- 简短摘要：基于 `VMD + ALRE-GRU + EDGOA` 的光伏预测实现，强调超参数优化与短中期预测稳定性。
- 相关性判断：中。更偏传统深度学习基线，但创建时间很新，值得观察是否继续演化。

#### [2026-07-22] [cyrilvoyant/PV_ELM_pred](https://github.com/cyrilvoyant/PV_ELM_pred)

- 日期：2026-07-22（GitHub `created_at`）
- 来源：[GitHub](https://github.com/cyrilvoyant/PV_ELM_pred)
- 简短摘要：公开多个站点上的光伏功率预测 benchmark，对 persistence、BLEND、AR-OLS 和 ELM 变体做统一比较。
- 相关性判断：中高。虽然不是 Agent 方向，但对光伏子领域的可复现实验和基线对照很有用。

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（GitHub `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方实现，公开 physics-aware retrieval、冻结 TSFM prior 和 shift correction 的完整代码路径。
- 相关性判断：最高。它是当前光伏方向与时间序列基础模型结合最紧的公开仓库之一。

## 6. 观察与建议

- 如果后续要做你自己的 `TS Agent + reasoning` 研究线，最近三个月最值得持续追的核心组合是：`KairosAgent + TimeSage-MT + Can LLM Coding Agents Reason About Time Series? + Post-Training in TSFMs`。
- 工程落地方向可以重点跟踪 `timeseries-mcp` 和两类 `ml-harness` 仓库，因为它们最接近未来实验平台需要的工具层与可回放评测层。
- 光伏分支短期内建议继续盯 `PARA-PV` 和 `physics-informed synthetic histories` 这两条线；它们与 foundation model、retrieval 和 deployment 约束的结合度最高。

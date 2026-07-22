# 2026-07-22 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-22 08:25 CST，Asia/Shanghai  
时间窗口：2026-04-22 至 2026-07-22  
优先来源：arXiv 摘要页、官方项目页、GitHub 官方仓库页 / GitHub API  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic forecasting`

## 今日摘要

- 截至 `2026-07-22`，过去 24 小时内没有检出比 `2026-07-21` 更强、且日期清晰的新主线论文；基础模型、Agent、reasoning 三条主线仍由 `VLT`、`The Spectrum Is Not Enough`、`TimeClaw`、`KairosAgent`、`AION`、`TSRouter`、`TimeSage-MT` 等工作主导。
- 今天的净增量主要来自补检而非全新发布：基础模型侧补入了 [`When Do Foundation Models Pay Off?`](https://arxiv.org/abs/2607.04919)，Agent 侧补入了 [`Nexus: An Agentic Framework for Time Series Forecasting`](https://arxiv.org/abs/2605.09534)。两者都在三个月窗口内，且和 `路由 / planner / forecaster` 主线直接相关。
- GitHub 侧近两周最值得跟踪的不是“大而全”的新时序 Agent，而是 `tool layer + eval harness + forecasting scaffold`：[`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp)、[`mcp-trajectory-evals`](https://github.com/Lkhanaajav/mcp-trajectory-evals)、[`forecast-playground`](https://github.com/xavierdurawa/forecast-playground)、[`blf-forecaster`](https://github.com/swarm-ai-research/blf-forecaster) 形成了比较清晰的工具链。
- 光伏方向没有出现比 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 更完整的新方案，当前最有价值的组合仍是 `frozen TSFM prior + retrieval + physics constraints + shift correction`。

## 0. 检索说明

- 只保留 `2026-04-22` 至 `2026-07-22` 三个月窗口内的内容。
- 论文日期优先采用 arXiv 摘要页 `published` 日期；仓库日期优先采用 GitHub API `created_at`。
- 若同一工作同时有 arXiv 与项目页，正文优先给出 arXiv，并补充官方项目页或代码仓库。
- 若仓库文档稀疏、描述很短或缺少论文 / 项目页支撑，则降低优先级；本日报未纳入日期不确定条目。

## 1. 时间序列基础模型最新研究

### [2026-07-16] VLT: A Vision-Language-Time Series Multimodal Foundation Model for Industrial Intelligence

- 日期：2026-07-16
- 来源：[arXiv](https://arxiv.org/abs/2607.14510)
- 简短摘要：提出统一建模工业时间序列、视觉频谱表示与文本知识的多模态 foundation model，通过共享表征空间支持监测、诊断与解释任务。
- 相关性判断：最高。它比单任务 forecasting backbone 更接近未来时序 Agent 的多模态底座。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出频谱特征不足以判断 `长上下文 / retrieval / pretrained TSFM` 何时真正有用，并提出 `coverage deficit` 作为无标签部署诊断量。
- 相关性判断：最高。它直接服务于时序 Agent 的上下文开关、retrieval 触发与模型路由决策。

### [2026-07-14] Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12454)
- 简短摘要：系统评估 `TimesFM` 零样本迁移到多变量异常检测的可行性，结论是不能直接替代专用方法，但边界误差峰值适合作为 sentinel 信号。
- 相关性判断：高。它提醒时序 Agent 不应把 TSFM 零样本能力直接等同于异常检测能力。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建大规模真实多变量时序语料，并比较真实语料与合成语料预训练对 TSFM 零样本泛化能力的影响。
- 相关性判断：最高。它直接回答“TSFM 预训练是否真的需要高质量真实多变量语料”。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919)
- 简短摘要：从精度、推理成本与使用频率的角度分析 pretrained time-series forecaster 的 break-even 区间，回答“什么时候 foundation model 比专用模型更值得部署”。
- 相关性判断：最高。它非常适合转化为时序 Agent 的模型路由和成本控制规则。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出 tuning-free TSFM，通过多尺度 Transformer 与统一时间掩码目标覆盖 extrapolation、interpolation 与 global abstraction 等多类任务。
- 相关性判断：高。它代表了“统一多任务、尽量少调参”的 TSFM 部署路线。

### [2026-05-23] Assessing the Operational Viability of Foundation Models for Time Series Forecasting

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：按业务周期性、物理约束、金融时变性与需求异质性等 regime 比较 TSFM 与 specialist，并提出 `Complexity Router` 做精度与成本权衡。
- 相关性判断：最高。它对 `TSFM 何时值得上线、何时应回退专用模型` 的回答最直接。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-10] Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09076)
- 简短摘要：用 `LLM planner + TimesFM sentinel` 形成闭环控制，并在执行前通过反事实物理注入与约束检查拦截高风险策略。
- 相关性判断：中高。虽然场景偏工业控制安全，但架构上很像时序 Agent 的 `plan + simulate + gate`。

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：通过楼宇知识图谱与 `agentic topology sampler` 在部署时选择外生变量，不依赖训练即可做零样本楼宇 IoT 预测。
- 相关性判断：高。它把 agentic selection 真正嵌进时序部署链路。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：用图时序 foundation model 预测暴露网络，再结合 deterministic monitor、stress scenario 与 confidence gate 生成可审计风险票据。
- 相关性判断：最高。它仍是近窗里最像生产监督系统的时序 Agent 公开实现之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，把 temporal tools、经验复用与 episodic multimodal memory 整合进 time-series-native runtime。
- 相关性判断：最高。它仍然是时间序列 harness、tool use、memory 与可审计轨迹的代表作。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 通过多轮工具调用形成语义推理，再把语义先验融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的标志性工作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把真实时序任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、memory、evaluation、protocols 组织时序 harness。
- 相关性判断：最高。若目标是建设可复用的时序 Agent 平台，它仍是最系统的公开蓝图。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：提出多角色 agent 协同的 forecasting 框架，把数据理解、特征构造、模型选择、误差分析与报告生成拆成可组合流水线。
- 相关性判断：高。虽然系统性不如 AION 或 TimeClaw，但它更直接面向自动化 forecasting 工作流。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：围绕不规则、稀疏、异步的临床时序构建多模态 QA benchmark，把显式时间证据与答案规则绑定到每个问题。
- 相关性判断：高。它正中“不规则时序 + 可核验证据”这条 reasoning 主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将时序 reasoning 中 `文本模式 LLM` 与 `图像模式 VLM` 的选择显式建成异构图路由问题，按性能与成本偏好选择最优组合。
- 相关性判断：最高。它几乎就是未来时序 Agent runtime router 的直接原型。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` 基准，将时序 reasoning 拆成 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知能力，并给出 `TSAlign` 框架。
- 相关性判断：最高。它仍是近三个月里最像“时序 reasoning 总纲”的工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent、以及二者结合的时序问答路径，显示即便允许代码执行，模型仍会在统计假设与验证逻辑上稳定失误。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：提出 `IRTS-ToolBench`，将 irregular TSQA 做成可工具接入、可独立复现、可验证的 benchmark 协议。
- 相关性判断：高。它把 verifier 与 tool-grounded reasoning 正式拉进时序 QA 评测。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建 240 个任务、2680 轮对话的多轮时序推理 benchmark，重点暴露记忆、证据累积与不确定性处理的缺口。
- 相关性判断：最高。它比单轮 TSQA 更接近真实 analyst / agent 工作流。

## 4. 光伏功率预测相关动态

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：将 physics-aware retrieval、冻结 Chronos 先验和 distribution shift correction 串成统一的 PV forecasting 流程。
- 相关性判断：最高。它是“光伏版 foundation model + retrieval + physics constraints”的最直接近窗代表。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为冷启动 PV 场站生成 physics-informed synthetic histories，使 TSFM 在目标站点几乎无历史观测时仍可 zero-shot 预测。
- 相关性判断：高。它直接回答“新站点刚上线时 TSFM 是否还有实用价值”。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较 TSFM 与深度学习基线在负荷、风电、光伏等电力系统任务上的零样本、微调、上下文窗口与泛化表现。
- 相关性判断：高。它仍是“能源时序里 TSFM 到底值不值得上”的基础参照。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

- 本轮未检出需要单列写入的高优先级 HuggingFace 新项目；以下条目均来自 GitHub 官方仓库页 / GitHub API。

### 5.1 时间序列

### [2026-07-17] swarm-ai-research/blf-forecaster

- 日期：2026-07-17（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/swarm-ai-research/blf-forecaster)
- 简短摘要：实现 `belief-state agent loop + multi-trial logit aggregation + hierarchical Platt calibration + ForecastBench eval harness`，并明确接入 time-series tools。
- 相关性判断：高。它虽不是纯时序仓库，但很像 `forecasting agent + eval harness` 的轻量实验台。

### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供给 AI agents 的 deterministic time-series statistics MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定、可审计统计工具层”的实用方向。

### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：面向 tool-using agents 的 trajectory-level eval harness，逐步评分工具选择、参数、grounding 与效率，并支持 CI regression gate。
- 相关性判断：高。它正好补上时序 Agent 当前最缺的 `trajectory eval` 基础设施。

### [2026-07-08] tianyi-lab/TSRouter

- 日期：2026-07-08（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 论文官方代码仓库，公开了时序 reasoning 中的 modality-model routing 实现。
- 相关性判断：高。它把 reasoning router 从论文推进到了可复现代码层。

### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：面向时间序列任务的轻量 AutoML Web scaffold，最近一次更新在 `2026-07-20`，说明仓库仍在活跃演进。
- 相关性判断：中。主题贴合 `AutoML + time series`，但当前技术深度与评测支撑仍弱于工具层仓库。

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：将时间序列异常检测输出的异常分数、窗口和指标交给 LLM 做解释与分析结论生成。
- 相关性判断：中高。它更偏单一任务 Agent，但主题贴得很近，适合作为 anomaly-analysis workflow 参考。

### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供 `time-masked retrieval harness` 和 `leak-free as-of tools`，用于评测和搭建 forecasting agents。
- 相关性判断：高。它对构建时序 Agent 的数据访问安全边界和评测 scaffold 很有参考价值。

### 5.2 光伏功率预测

### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，围绕 retrieval、冻结 TSFM 先验和分布漂移校正实现 PV forecasting pipeline。
- 相关性判断：高。它把论文中的 `retrieval + shift correction` 方案落到了代码层。

## 6. 明日优先跟踪项

- 继续检查 `2026-07-22` 至 `2026-07-23` 是否出现比 `VLT`、`TSRouter`、`TimeClaw` 更强的新论文或官方代码发布。
- 跟踪 [`time-series-autoML`](https://github.com/Naveen-Boddepalli/time-series-autoML) 是否补齐更明确的 benchmark、模型搜索策略或结果对比。
- 对照 [`AION`](https://ztxtech.github.io/aion/)、[`TimeClaw`](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp)、[`mcp-trajectory-evals`](https://github.com/Lkhanaajav/mcp-trajectory-evals)，整理一版可复用的 `task schema + tool layer + trajectory eval` 框架。
- 跟进 [`PARA-PV`](https://github.com/weican1103/PARA-PV) 是否继续放出更完整的训练 / 检索 / 评测代码。

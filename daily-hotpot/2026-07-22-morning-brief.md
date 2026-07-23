# 2026-07-22 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-22 23:58 CST，Asia/Shanghai
时间窗口：2026-04-22 至 2026-07-22
优先来源：arXiv 摘要页、官方项目页、GitHub 官方仓库页 / GitHub API、`DailyArXiv` 公共页面
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-07-22`，过去 24 小时没有出现比 `VLT`、`TimeClaw`、`KairosAgent`、`AION`、`TSRouter`、`TimeSage-MT` 更强的新主线 Agent / reasoning 论文。
- 今天最有价值的论文增量仍然是 `2026-07-20` 这组 TSFM 部署向论文，分别聚焦 `special-event crowd forecasting`、`drought forecasting wrapper` 和 `residual refinement`；本轮没有检出更强的新 foundation-model 标题。
- 基础模型方向今天最值得补入的是 [`When Do Foundation Models Pay Off?`](https://arxiv.org/abs/2607.04919)、[`Towards Reliable Zero-Shot Crowd Forecasting`](https://arxiv.org/abs/2607.17758)、[`Lightweight Wrappers for Adapting TSFMs to Regional Drought Forecasting`](https://arxiv.org/abs/2607.17511)。
- GitHub 侧近两周仍然是 `tool layer + trajectory eval + forecasting scaffold` 最清晰：`timeseries-mcp`、`mcp-trajectory-evals`、`forecast-playground`、`blf-forecaster` 组合起来，已经接近一套可运行的时序 Agent 基础设施。
- 本轮 GitHub 真正值得新增写入的只有 [`SMAAI-DFS`](https://github.com/manu458-dev/SMAAI-DFS)；它更像 `multi-agent demand sensing / forecasting` 概念验证，相关但证据链明显弱于上面那条工具栈主线。
- 光伏方向暂时没有比 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 更完整的新方案；当前最强路线仍是 `frozen TSFM prior + retrieval + physics constraints + shift correction`。

## 0. 检索说明

- 只保留 `2026-04-22` 至 `2026-07-22` 三个月窗口内的内容。
- 论文日期优先采用 arXiv 摘要页 `Submitted on` 日期；如页面同时给出修订版日期，仅在正文中作为补充说明。
- 仓库日期优先采用 GitHub API `created_at`；本轮对正文中的 GitHub 条目重新做了逐仓库元数据复核，并补做了 `agent / harness / AutoML / forecasting agent` 定向搜索。
- `DailyArXiv` 仅用来补检新标题，不替代原始 arXiv / 官方项目页；若该来源的更新时间无法直接确认，则只保留为低优先级旁证。

## 1. 时间序列基础模型最新研究

### [2026-07-20] Towards Reliable Zero-Shot Crowd Forecasting: Evaluating Time Series Foundation Models for Special Event Pedestrian Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17758)
- 简短摘要：评估 pretrained TSFM 在稀历史、强波动的特殊事件人流预测场景中的零样本概率预测能力，并给出何时还能保持运营可靠性的经验边界。
- 相关性判断：中高。不是新 backbone，但对 `零样本 TSFM 的可上线边界` 很有参考价值。

### [2026-07-20] Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17511)
- 简短摘要：提出不改 backbone 权重的推理期 wrapper，用多分辨率残差修正和 block bootstrap 方式增强 frozen TSFM 在区域干旱预测上的适配能力。
- 相关性判断：中高。它证明 `frozen TSFM + inference-time adapter` 可以在资源受限场景下落地。

### [2026-07-20] Residual-Guided Multi-Resolution Refinement of Foundation Models: A Case Study in Drought Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17507)
- 简短摘要：把专家式的多尺度诊断与 residual refinement 显式加到 TSFM 推理流程里，在 drought forecasting 上稳定降低误差。
- 相关性判断：中。更偏气候应用，但对 `foundation model 部署侧 refinement` 很有启发。

### [2026-07-16] VLT: A Vision-Language-Time Series Multimodal Foundation Model for Industrial Intelligence

- 日期：2026-07-16
- 来源：[arXiv](https://arxiv.org/abs/2607.14510)
- 简短摘要：联合建模工业时间序列、频谱视觉表示与文本知识，通过共享表征空间支持监测、诊断与解释任务。
- 相关性判断：最高。它比单任务 forecasting backbone 更接近未来时序 Agent 的多模态底座。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14（v2 更新于 2026-07-15）
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
- 简短摘要：从精度、推理成本与样本规模的角度分析 pretrained forecaster 的 break-even 区间，给出何时 TSFM 比经典方法更值得部署的规则。
- 相关性判断：最高。它非常适合转化为时序 Agent 的模型路由和成本控制规则。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出 tuning-free TSFM，通过多尺度 Transformer 与统一时间掩码目标覆盖 extrapolation、interpolation 和 global abstraction 等任务。
- 相关性判断：高。它代表了“统一多任务、尽量少调参”的 TSFM 部署路线。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17（v2 更新于 2026-06-29）
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

- 日期：2026-07-09（v2 更新于 2026-07-18）
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

## 5. GitHub 上值得跟踪的新项目

- 本轮未检出需要单列写入的高优先级 HuggingFace 新项目；以下条目以 GitHub 官方仓库页和前序 API 复核结果为主。

### [2026-07-21] manu458-dev/SMAAI-DFS

- 日期：2026-07-21（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/manu458-dev/SMAAI-DFS)
- 简短摘要：一个围绕 `demand sensing + forecasting` 的多 Agent 概念验证仓库，描述中明确提到 foundation models 与 tools 协同，但当前主要还是案例性 workflow 展示。
- 相关性判断：中。主题贴近时间序列 Agent，但文档、评测和可复现深度明显弱于 `TimeClaw / AION / timeseries-mcp` 这条主线。

### [2026-07-17] swarm-ai-research/blf-forecaster

- 日期：2026-07-17（GitHub API `created_at`，2026-07-22 复核）
- 来源：[GitHub](https://github.com/swarm-ai-research/blf-forecaster)
- 简短摘要：复现 `belief-state agent loop + multi-trial aggregation + hierarchical calibration + ForecastBench eval harness`，并显式接入 time-series tools。
- 相关性判断：高。它虽不是纯时序仓库，但很像 `forecasting agent + eval harness` 的轻量实验台。

### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub API `created_at`，2026-07-22 复核）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供给 AI agents 的 deterministic time-series statistics MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定、可审计统计工具层”的实用方向。

### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub API `created_at`，2026-07-22 复核）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：面向 tool-using agents 的 trajectory-level eval harness，逐步评分工具选择、参数、grounding 与效率，并支持 CI regression gate。
- 相关性判断：高。它正好补上时序 Agent 当前最缺的 `trajectory eval` 基础设施。

### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub API `created_at`，沿用前序复核结果）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，围绕 retrieval、冻结 TSFM 先验和分布漂移校正实现 PV forecasting pipeline。
- 相关性判断：高。它把论文中的 `retrieval + shift correction` 方案落到了代码层。

### [2026-07-08] tianyi-lab/TSRouter

- 日期：2026-07-08（GitHub API `created_at`，2026-07-22 复核）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 论文官方代码仓库，公开了时序 reasoning 中的 modality-model routing 实现。
- 相关性判断：高。它把 reasoning router 从论文推进到了可复现代码层。

### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub API `created_at`，2026-07-22 复核）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：面向时间序列任务的轻量 AutoML Web scaffold；仓库在 `2026-07-22` 仍有推送，说明作者仍在快速迭代。
- 相关性判断：中。主题贴合 `AutoML + time series`，但当前技术深度与评测支撑仍弱于工具层仓库。

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`，2026-07-22 复核）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：将时间序列异常检测输出的异常分数、窗口和指标交给 LLM 做解释与分析结论生成。
- 相关性判断：中高。它更偏单一任务 Agent，但主题贴得很近，适合作为 anomaly-analysis workflow 参考。

### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`，2026-07-22 复核）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供 `time-masked retrieval harness` 和 `leak-free as-of tools`，用于评测和搭建 forecasting agents。
- 相关性判断：高。它对构建时序 Agent 的数据访问安全边界和评测 scaffold 很有参考价值。

## 6. DailyArXiv 补检结论

- 补检来源：[DailyArXiv 网站](https://dailyarxiv.com/) / [GitHub 仓库页](https://github.com/zezhishao/DailyArXiv)。
- 本次尝试直接抓取 GitHub README 原文时，预期路径返回 `404`，因此无法像前几轮那样稳定确认 `Last update` 的精确日期；该来源本轮只保留为低优先级旁证，不作为正文日期依据。
- 从公开可访问页面能确认的补检结论看，本轮没有发现比正文已列条目更强、且能直接归入 `Agent / reasoning / PV forecasting` 主线的新标题。
- 因此，`DailyArXiv` 在这次更新中的作用仅限于支持“未见更强新增”的判断，而不是提供独立的新主条目。

## 7. 结论

- 今日真正的增量不在 Agent 主体，而在 `TSFM 部署诊断与适配`。如果接下来要选一个最值得继续追的短线方向，优先级应放在 `break-even analysis`、`context/retrieval 何时有用`、以及 `frozen TSFM inference-time adaptation`。
- 时间序列 Agent 主线短期内仍由 `TimeClaw + AION + KairosAgent + Nexus + DeXposure-Claw` 组成：分别对应 `runtime`、`harness`、`semantic fusion`、`forecast workflow` 和 `risk-supervision system`。
- reasoning 主线最稳的组合仍是 `TSRouter + TSCognition + TimeSage-MT + IRTS-ToolBench`，即 `router + benchmark + multi-turn eval + verifier/tool grounding`。
- 工具侧值得继续观察的是 `timeseries-mcp` 和 `mcp-trajectory-evals`。如果仓库后续要落地自己的时序 Agent 评测栈，这两个项目比再追一个新 forecasting demo 更有复用价值。

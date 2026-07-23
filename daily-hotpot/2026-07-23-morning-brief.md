# 2026-07-23 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-23 15:35 CST，Asia/Shanghai
时间窗口：2026-04-23 至 2026-07-23
优先来源：arXiv 摘要页、官方项目页、GitHub API / 官方仓库页、[DailyArXiv README](https://github.com/zezhishao/DailyArXiv)、Hugging Face 数据集卡
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-07-23`，过去 24 小时没有检出比 `TimeClaw`、`KairosAgent`、`AION`、`TSRouter`、`TSCognition`、`PARA-PV` 更强的新主线论文。
- 今天最明确的增量来自 `DailyArXiv` README：其 `Time Series` 栏在 `2026-07-23` 已更新，并且能确认窗口内存在与本主题直接相关的 `TS-Skill`、`Towards Reliable Zero-Shot Crowd Forecasting`、`Lightweight Wrappers for Adapting TSFMs to Regional Drought Forecasting`。
- 因此，今天正文的真实新增重点不是全新 backbone，而是 `DailyArXiv` 补检确认后补入的 [`TS-Skill`](https://arxiv.org/abs/2605.24703)，以及对 GitHub 项目日期的重新精确核验。
- GitHub 侧，近 72 小时内真正新增且值得单列跟踪的仍只有 [`SMAAI-DFS`](https://github.com/manu458-dev/SMAAI-DFS)；其余高相关项目仍集中在 `MCP 统计工具层 + trajectory eval + forecasting scaffold + 单任务 agent` 这条链路上。
- 光伏方向今天没有比 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 更完整的新方案；当前主线仍是 `physics-aware retrieval + frozen TSFM prior + shift correction`。

## 0. 检索说明

- 仅保留 `2026-04-23` 至 `2026-07-23` 三个月窗口内的内容。
- 论文日期优先采用 arXiv 摘要页 `Submitted on` 日期；若同时看到版本更新，仅在摘要中补充。
- GitHub 项目日期优先采用 GitHub API `created_at`，并在必要时补记最新 `pushed_at`。
- Hugging Face 仅作补充旁证；今天未发现比正文更高优先级的新时序 Agent / reasoning / foundation-model 项目。

## 1. 时间序列基础模型最新研究

### [2026-07-20] Towards Reliable Zero-Shot Crowd Forecasting: Evaluating Time Series Foundation Models for Special Event Pedestrian Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17758)
- 简短摘要：评估 pretrained TSFM 在稀历史、强波动的特殊事件人流预测中的零样本概率预测能力，并强调运营场景下的不确定性质量。
- 相关性判断：中高。不是新 backbone，但对 `零样本 TSFM 在高波动稀样本场景的可靠边界` 很有参考价值。

### [2026-07-20] Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17511)
- 简短摘要：提出无需访问 backbone 权重、完全在推理期完成的 wrapper，通过多分辨率 residual 和 block bootstrap 提升 frozen TSFM 在区域干旱预测上的效果。
- 相关性判断：高。它把 `frozen TSFM + inference-time adapter` 路线做得相当明确。

### [2026-07-20] Residual-Guided Multi-Resolution Refinement of Foundation Models: A Case Study in Drought Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17507)
- 简短摘要：将 coarse-to-fine residual refinement 显式加到 TSFM 推理流程中，在 drought forecasting 上稳定降低误差。
- 相关性判断：中。更偏应用侧，但对 `TSFM 部署期 refinement` 很有借鉴意义。

### [2026-07-16] VLT: A Vision-Language-Time Series Multimodal Foundation Model for Industrial Intelligence

- 日期：2026-07-16
- 来源：[arXiv](https://arxiv.org/abs/2607.14510)
- 简短摘要：联合建模工业时间序列、视觉谱图和文本知识，支持监测、诊断和解释型任务。
- 相关性判断：最高。它比单一 forecasting backbone 更接近未来时序 Agent 的多模态底座。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14（v2 更新于 2026-07-15）
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出频谱特征不足以判断何时长上下文、retrieval 或 pretrained TSFM 真正有用，并提出 `coverage deficit` 作为部署诊断量。
- 相关性判断：最高。它非常适合转化成时序 Agent 的上下文开关和模型路由规则。

### [2026-07-14] Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12454)
- 简短摘要：系统评估 `TimesFM` 零样本迁移到多变量异常检测的能力，结论是不能直接替代专用方法，但某些误差峰值可作为 sentinel 信号。
- 相关性判断：高。它提醒时序 Agent 不应把 TSFM 的零样本 forecasting 能力误当成 anomaly 能力。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建大规模真实多变量时序语料，并比较真实语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：高。它直接回答 `高质量真实多变量语料` 对 TSFM 预训练是否关键。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：从精度、样本规模、推理成本和工程开销角度分析 TSFM 相比经典方法何时值得部署，并给出可操作的 break-even 决策规则。
- 相关性判断：最高。它非常适合沉淀成时序 Agent 的模型选择策略。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出 tuning-free TSFM，通过多尺度 Transformer 与统一掩码目标覆盖 extrapolation、interpolation 和 global abstraction 等任务。
- 相关性判断：高。代表了“统一多任务、尽量少调参”的 TSFM 路线。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17（v2 更新于 2026-06-29）
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：使用图时序 foundation model 预测暴露网络，再结合 deterministic monitor、stress scenario 和 confidence gate 生成可审计风险票据。
- 相关性判断：最高。它仍是近窗里最像生产监督系统的时序 Agent 公开实现之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，把 temporal tools、经验复用与 episodic multimodal memory 整合到 time-series-native runtime 中。
- 相关性判断：最高。它仍是时间序列 harness、tool use、memory 与审计轨迹的代表作。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块，让语义 reasoning 与数值 forecasting 显式解耦再融合。
- 相关性判断：最高。它仍是 `semantic reasoning + TSFM` 融合最清晰的代表工作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把真实时序任务 formalize 为 `task file + workspace + validation interface`，围绕 agents、skills、memory、evaluation 和 protocols 组织 harness。
- 相关性判断：最高。若目标是建设可复用时序 Agent 平台，它依然是最系统的公开蓝图。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：提出多角色 agent 协同的 forecasting 框架，把数据理解、特征构造、模型选择、误差分析与报告生成拆成可组合流水线。
- 相关性判断：高。系统性不如 `AION / TimeClaw`，但更直接面向自动化 forecasting workflow。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：围绕不规则、稀疏、异步的临床时序构建多模态 QA benchmark，把显式时间证据与答案规则绑定到每个问题。
- 相关性判断：高。它正中 `不规则时序 + 可核验证据` 这条 reasoning 主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09（v2 更新于 2026-07-18）
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将时序 reasoning 中 `文本模式 LLM` 与 `图像模式 VLM` 的选择显式建成异构图路由问题，按性能与成本偏好选择最优组合。
- 相关性判断：最高。它几乎就是未来时序 Agent runtime router 的直接原型。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` 基准，将时序 reasoning 拆成 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知能力，并给出 `TSAlign` 框架。
- 相关性判断：最高。它仍是近窗里最像“时序 reasoning 总纲”的工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent、以及二者结合的时序问答路径，显示即便允许代码执行，模型仍会在统计假设与验证逻辑上稳定失误。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：提出 `IRTS-ToolBench`，把 irregular TSQA 做成可工具接入、可复现、可验证的 benchmark 协议。
- 相关性判断：高。它把 verifier 与 tool-grounded reasoning 正式拉进时序 QA 评测。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建 240 个任务、2680 轮对话的多轮时序推理 benchmark，重点暴露记忆、证据累积与不确定性处理缺口。
- 相关性判断：最高。它比单轮 TSQA 更接近真实 analyst / agent 工作流。

### [2026-05-23] TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703) / [DailyArXiv README](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：把 TSQA 能力拆成 `时间尺度选择`、`时间定位`、`跨区间整合` 三类可组合技能，并用 `SKEvol` agentic pipeline 自动构造带时间戳证据的问题。
- 相关性判断：高。它不是最强模型论文，但非常适合补足 `skill-level` 时序 reasoning 评测视角。

## 4. 光功率 / 光伏功率预测相关最新研究

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：将 physics-aware retrieval、冻结 Chronos 先验和 distribution shift correction 串成统一的 PV forecasting 流程。
- 相关性判断：最高。它是 `光伏版 TSFM + retrieval + physics constraints` 的最直接近窗代表。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为冷启动 PV 场站生成 physics-informed synthetic histories，使 TSFM 在目标站点几乎无历史观测时仍可 zero-shot 预测。
- 相关性判断：高。它直接回答“新站点刚上线时 TSFM 是否还有实用价值”。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较 TSFM 与深度学习基线在负荷、风电、光伏等电力系统任务上的零样本、微调、上下文窗口与泛化表现。
- 相关性判断：高。它仍是“能源时序里 TSFM 是否值得部署”的基础参照。

## 5. GitHub 上值得跟踪的新项目

### [2026-07-21] manu458-dev/SMAAI-DFS

- 日期：2026-07-21（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/manu458-dev/SMAAI-DFS)
- 简短摘要：一个围绕 `demand sensing + forecasting` 的多 Agent 概念验证仓库，描述中明确提到 foundation models 与 tools 协同。
- 相关性判断：中。主题贴近时间序列 Agent，但目前更像概念验证而不是成熟工具链。

### [2026-07-17] swarm-ai-research/blf-forecaster

- 日期：2026-07-17（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/swarm-ai-research/blf-forecaster)
- 简短摘要：复现 `belief-state agent loop + multi-trial aggregation + hierarchical calibration + ForecastBench eval harness`，并显式接入 time-series tools。
- 相关性判断：高。它很像 `forecasting agent + eval harness` 的轻量实验台。

### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：面向 tool-using agents 的 trajectory-level eval harness，逐步评分工具选择、参数、grounding 与效率，并支持 CI regression gate。
- 相关性判断：高。它正好补上时序 Agent 最缺的 `trajectory eval` 基础设施。

### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供给 AI agents 的 deterministic time-series statistics MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定、可审计统计工具层”的实用方向。

### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，围绕 retrieval、冻结 TSFM 先验和分布漂移校正实现 PV forecasting pipeline。
- 相关性判断：高。它把论文中的 `retrieval + shift correction` 路线落到了代码层。

### [2026-07-08] tianyi-lab/TSRouter

- 日期：2026-07-08（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 论文官方代码仓库，公开了时序 reasoning 中的 modality-model routing 实现。
- 相关性判断：高。它把 reasoning router 从论文推进到了可复现代码。

### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub API `created_at`，最新 `pushed_at` 为 2026-07-22）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：面向时间序列任务的轻量 AutoML Web scaffold，近期仍有代码推送，说明作者还在快速迭代。
- 相关性判断：中。主题贴合 `AutoML + time series`，但当前技术深度与评测支撑仍弱于工具层仓库。

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：将时间序列异常检测输出的异常分数、窗口和指标交给 LLM 做解释与分析结论生成。
- 相关性判断：中高。更偏单任务 Agent，但主题贴得很近，适合作为 anomaly-analysis workflow 参考。

### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供 `time-masked retrieval harness` 和 `leak-free as-of tools`，用于评测与搭建 forecasting agents。
- 相关性判断：高。它对构建时序 Agent 的数据访问安全边界和评测 scaffold 很有参考价值。

## 6. DailyArXiv 补检结论

- 补检来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv)。
- README 明确写明：各个二级标题就是搜索关键词，只保留每个关键词最近的论文，最多 100 篇；当前 `Last update` 可确认是 `2026-07-23`。
- `Time Series` 条目下，能确认与本主题直接相关且仍在三个月窗口内的条目包括：
  - [`Towards Reliable Zero-Shot Crowd Forecasting`](https://arxiv.org/abs/2607.17758)，日期 `2026-07-20`
  - [`Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting`](https://arxiv.org/abs/2607.17511)，日期 `2026-07-20`
  - [`TS-Skill`](https://arxiv.org/abs/2605.24703)，日期 `2026-05-23`
- 前两项与正文主条目重合，因此只起到交叉验证作用；`TS-Skill` 此前未在晨报正文单列，今天已补入 reasoning 部分。
- 本轮未发现比正文已列条目更强、且能直接归入 `time series agent / reasoning / PV forecasting` 主线的新标题；若后续只出现窗口外旧条目，则应继续降优先级处理。

## 7. 结论

- 今天最值得留意的不是“又一个新 backbone”，而是两个更可操作的方向：`TSFM 何时值得用` 与 `TSFM 在推理期如何被适配 / 路由 / 校验`。
- Agent 主线短期内仍由 `TimeClaw + AION + KairosAgent + DeXposure-Claw` 组成，分别对应 `runtime`、`harness`、`semantic fusion` 和 `production supervision`。
- reasoning 主线目前最稳的组合仍是 `TSRouter + TSCognition + TimeSage-MT + IRTS-ToolBench + TS-Skill`，即 `router + cognitive benchmark + multi-turn eval + verifier + skill-level diagnosis`。
- 若仓库接下来要落地自己的时序 Agent 评测栈，GitHub 侧最值得先看的是 `timeseries-mcp`、`mcp-trajectory-evals` 和 `forecast-playground`，而不是再追一个纯 demo 型 forecasting agent。

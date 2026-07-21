# 2026-07-20 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-20（自动化复检，Asia/Shanghai）  
时间窗口：2026-04-20 至 2026-07-20  
优先来源：arXiv 摘要页、官方项目页、GitHub 官方仓库页 / GitHub API  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`

## 今日摘要

- 过去三个月里，时间序列基础模型最值得跟踪的增量，已经从“再做一个更大的 forecasting backbone”转向 `何时启用 context / retrieval / TSFM`、`如何做部署审计`、以及 `如何把语义与数值建模统一起来`。
- Agent 主线最强的公开信号仍然是 `TimeClaw`、`KairosAgent`、`AION`、`DeXposure-Claw` 与 `TopoBrick`。它们分别覆盖了 runtime、reasoner-forecaster 解耦、任务/验证接口、监管型闭环、外生变量选择等关键模块。
- Reasoning 主线已明显转向 `router + benchmark + verifier`：`TSRouter`、`TimeSage-MT`、`CLIR-Bench`、`IRTS-ToolBench`、`TSCognition` 都在把“时序推理是否可靠”拆成可测能力。
- GitHub 新仓库里，真正与时序 Agent 落地最接近的不是大模型本体，而是 `timeseries-mcp`、`mcp-trajectory-evals`、`blf-forecaster` 这类工具层与评测层项目。
- `DailyArXiv` 公开 README 当前显示 `Last update: 2026-07-21`，相对本简报日期 `2026-07-20` 属未来时间戳；因此本轮只把它作为补检线索，不把该时间戳本身当作日期依据，正文日期统一以原始 arXiv / GitHub 页面为准。

## 0. 检索说明

- 只保留三个月窗口 `2026-04-20` 至 `2026-07-20` 内、且能直接确认日期的条目。
- 论文日期优先采用 arXiv 摘要页的 `Submitted on`；仓库日期优先采用 GitHub API 的 `created_at`。
- 对日期与当前日期冲突的聚合页，仅作为线索使用，不进入主排序依据。
- 本轮没有发现比现有主线更强、且日期清晰的新 HuggingFace 项目；因此 GitHub 栏目以官方仓库为主。

## 1. 时间序列基础模型最新研究

### [2026-07-16] VLT: A Vision-Language-Time Series Multimodal Foundation Model for Industrial Intelligence

- 日期：2026-07-16
- 来源：[arXiv](https://arxiv.org/abs/2607.14510)
- 简短摘要：提出统一建模工业时间序列、频谱视觉表示与文本知识的多模态 foundation model，通过 `Time-MoE + Frequency-Text` 桥接连续信号与语义空间。
- 相关性判断：最高。它比单任务 forecasting 模型更接近未来时序 Agent 所需的多模态感知底座。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14（v2 更新于 2026-07-15）
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出频谱可预测性指标并不能回答 `更长上下文 / retrieval / pretrained TSFM` 何时有用，并提出 `coverage deficit` 作为无标签部署诊断量。
- 相关性判断：最高。它直接服务于时序 Agent 的 `是否启用上下文增强` 路由决策。

### [2026-07-14] Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12454)
- 简短摘要：系统评估把 `TimesFM` 零样本迁移到多变量异常检测的两种路径，结论是直接迁移并不强，但边界误差峰值对分布变化探测有价值。
- 相关性判断：高。它提醒时序 Agent 不应把 TSFM 零样本能力直接等同于异常检测能力。

### [2026-07-13] Bet on Features: Anytime-Valid and Feature-Aware Auditing of Conditional Quantile Forecasters

- 日期：2026-07-13
- 来源：[arXiv](https://arxiv.org/abs/2607.11653)
- 简短摘要：提出面向流式、非 i.i.d. 环境的持续审计框架，把 calibration 检验做成 feature-aware、anytime-valid 的证据过程，并报告 `Chronos-2` 的失准现象。
- 相关性判断：高。它不是新 TSFM，但对 deployment guardrail、在线 validator 和 agent 审计很关键。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建约 200 个真实多变量数据集、1420 亿时间点的公开语料，比较真实语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：最高。它直接回答“真实多变量语料到底能给 TSFM 带来什么”。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出 tuning-free TSFM，通过多尺度 Transformer 与统一的多目标时间掩码，同时覆盖 extrapolation、interpolation 与 global abstraction 等任务。
- 相关性判断：高。它代表了“统一多任务、尽量少调参”的 TSFM 部署路线。

### [2026-05-23] Assessing the Operational Viability of Foundation Models for Time Series Forecasting

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：从周期性业务、物理约束系统、金融市场、异质需求四类 operational regime 比较 TSFM 与 supervised specialist，并提出 `Complexity Router` 做精度-成本选择。
- 相关性判断：最高。它对 `TSFM 什么时候该上生产、什么时候应回退到专用模型` 给出了直接答案。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-10] Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09076)
- 简短摘要：用 `LLM planner + TimesFM sentinel` 形成闭环控制，并在执行前通过反事实物理注入机制拦截不安全动作。
- 相关性判断：中高。虽然场景是工业安全控制，但结构上很像时序 Agent 的 `plan + simulate + gate`。

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用楼宇知识图谱与 `agentic topology sampler` 在部署时选择目标相关的外生变量，不依赖训练即可做零样本 IoT 预测。
- 相关性判断：高。它把 agentic selection 真正嵌进了时序部署流程，而不是只做分析助手。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17（v2 更新于 2026-06-29）
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测暴露网络，再结合 deterministic monitor、stress scenario 与 confidence gate 生成可审计监管票据。
- 相关性判断：最高。它仍是近窗里最像“生产级时序监管 Agent”的系统之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，把可执行 temporal tools、经验驱动能力演化与 episodic multimodal memory 绑定到 time-series-native runtime 中。
- 相关性判断：最高。它仍然是时间序列 harness、tool use、memory 与审计轨迹的代表作。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，用多轮工具调用形成 morphology reasoning，再把语义先验融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的最强近窗样本之一。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把现实任务 formalize 为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是建设可复用的时序 Agent 平台，它仍是最系统的公开蓝图。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 拆成宏观/微观波动建模、上下文整合与结果合成等多阶段 agent 流程，强调事件型文本信号的纳入方式。
- 相关性判断：中高。它更偏 forecasting workflow orchestration，但对 analyst-style 时序 copilot 很有参考价值。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：围绕稀疏、不规则、异步的临床时序构建 6600 条 QA，给每个问题绑定显式时间证据与答案推导规则。
- 相关性判断：高。它正中“不规则时序 + 可核验证据”这条 reasoning 主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把 `文本模式 LLM` 与 `图像模式 VLM` 的选择问题建成异构图路由任务，按性能-成本偏好动态选择最优 `modality-model pair`。
- 相关性判断：最高。它几乎就是未来时序 Agent runtime router 的直接原型。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` 基准，把时序推理拆成 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知能力，并给出 `TSAlign` 框架。
- 相关性判断：最高。它是近三个月里最像“时序 reasoning 总纲”的工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent、以及二者结合的三种时序问答路径，发现即便允许写代码，最佳 agent 仍有约 22%-34% 的问题答错。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：提出 `IRTS-ToolBench`，把不规则 TSQA 做成可独立复现、可工具接入、可验证的基准协议。
- 相关性判断：高。它把 verifier 与 tool-grounded reasoning 正式拉进时序 QA 评测。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建 240 个任务、2680 轮对话的多轮时序推理 benchmark，重点暴露 memory、uncertainty handling 与 decision-making 的缺口。
- 相关性判断：最高。它比单轮 TSQA 更接近真实 analyst / agent 工作流。

## 4. 光伏功率预测最新研究

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、以及 distribution shift correction 串成统一的 PV 预测框架。
- 相关性判断：最高。它是“光伏版 foundation model + retrieval + physics constraints”的最直接近窗代表。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：面向冷启动站点生成 physics-informed synthetic history，让 TSFM 在没有目标站点历史观测时也能做 zero-shot PV forecasting。
- 相关性判断：高。它直接回答“新站点刚上线时，TSFM 是否还有实用价值”。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较多类 TSFM、Transformer 与深度学习基线在负荷、风电、光伏等电力场景中的零样本、微调、上下文窗口与泛化能力。
- 相关性判断：高。它仍是能源时序里“TSFM 到底值不值得上”的基础参照。

## 5. GitHub 上值得跟踪的新项目

### 5.1 时间序列

### [2026-07-17] swarm-ai-research/blf-forecaster

- 日期：2026-07-17（GitHub `created_at`）
- 来源：[GitHub](https://github.com/swarm-ai-research/blf-forecaster)
- 简短摘要：实现 `belief-state agent loop + multi-trial aggregation + calibration + ForecastBench harness`，并接入 time-series tools。
- 相关性判断：高。它虽不是纯时序仓库，但很像 `forecasting agent + eval harness` 的轻量实验台。

### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：面向 tool-using agents 的 trajectory-level eval harness，逐步评分工具选择、参数、grounding 与效率，并支持 CI regression gate。
- 相关性判断：高。它不是时序专用，但正好补上时序 Agent 当前最缺的 `trajectory eval` 基础设施。

### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供给 AI agents 使用的 deterministic time-series statistics MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定、可审计统计工具层”的实用方向。

### [2026-07-08] tianyi-lab/TSRouter

- 日期：2026-07-08（GitHub `created_at`）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 论文官方代码仓库，公开了时序 reasoning 中的 modality-model routing 实现。
- 相关性判断：高。它把 reasoning router 从论文推进到了可复现代码层。

### [2026-05-06] SanhornC/IRTS-ToolBench

- 日期：2026-05-06（GitHub `created_at`）
- 来源：[GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：收录 1700 个不规则 TSQA 问题与标准化评测协议，定位于 LLM / Agent 的 irregular TS reasoning benchmark。
- 相关性判断：高。它对时序 Agent 的 benchmark、verifier 与 regression 测试都很有价值。

### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：仓库名与最近提交都指向时序 AutoML 方向，但 GitHub API 未提供明确描述，当前公开信息较少。
- 相关性判断：中。方向相关，但信息稀疏，优先级低于前述具备清晰任务定义的 Agent / harness 项目。

### 5.2 光伏功率预测

### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，围绕 retrieval、冻结 TSFM 先验和分布漂移校正实现 PV forecasting pipeline。
- 相关性判断：高。它是目前最贴近“PV forecasting + foundation model + retrieval”组合的近窗开源项目。

## 6. 结论

- 若只跟三条主线，今天最值得持续深挖的是：
  - `TSFM 部署诊断与审计`：`The Spectrum Is Not Enough`、`Bet on Features`、`Assessing the Operational Viability...`
  - `时序 Agent runtime / harness`：`TimeClaw`、`KairosAgent`、`AION`
  - `时序 reasoning 的 router / benchmark / verifier`：`TSRouter`、`TimeSage-MT`、`IRTS-ToolBench`
- GitHub 层面，近期最实用的增量不是“又一个大模型”，而是：
  - `timeseries-mcp` 这类稳定工具层；
  - `mcp-trajectory-evals` 这类评测层；
  - `blf-forecaster` 这类把 agent、概率预测与 harness 合在一起的小型实验仓库。
- 光伏方向里，`PARA-PV` 与 `Cold-Start PV TSFM` 仍是最接近落地价值的组合：前者强调 retrieval + physics constraints，后者强调新站点冷启动。

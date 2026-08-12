# 2026-08-12 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-12 15:36 CST，Asia/Shanghai  
时间窗口：2026-05-12 至 2026-08-12  
优先来源：arXiv、官方项目页、GitHub 官方仓库页 / GitHub API  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`timeseries mcp`、`time series AutoML`、`photovoltaic forecasting`

## 今日摘要

- 过去一周的 `TSFM` 新动向非常集中：`GTN-R`、`TS-RAG`、`Align-RAG`、`FedChronos`、`Federated Sparse Adaptation` 连续出现，说明重心已明显从“预训练更大模型”转向“后训练、检索增强、联邦/隐私适配、部署期对齐”。
- `Agent / harness` 方向的主线已经很清晰：`TimeRLM` 强调递归工具使用，`CastFSR` 强调 `Fast-Slow-Reflect` 工作流，`TimeClaw` 与 `AION` 强调完整运行时与验证机制，`GenAutoML` 则把时序模型设计问题直接代理化。
- `Reasoning` 方向在近三个月内持续升温：`REATS` 开始把 `LLM reasoning` 用到自适应集成权重分配，`ReasonCast` 把预测与解释合并到同一生成过程，`TRACE-TS` 和 `CLIR-Bench / ClinPRISM` 把“证据可追溯”与“不规则时序问答”推到更前面，`TSRouter` 则开始研究 runtime 层面的模态/模型路由。
- GitHub 近窗内最值得跟踪的新仓库包括 `align-rag`、`reasoncast`、`CastFSR`、`TimeRLM`、`timeseries-mcp`、`TSRouter`，以及偏工程平台的 `time-series-autoML` 和 `time-series-forecasting-platform`。
- `DailyArXiv` 已补检到 `2026-08-12` 的最新 README；其 `Time Series` 板块对本期核心主题覆盖偏弱，因此正文仍以 arXiv 原始条目、官方项目页和 GitHub API 为主证据。
- 本次未纳入 `日期不确定` 条目；无法在正文中确认首次公开日期的内容一律降级或剔除。

## 0. 检索口径

- 只保留首次公开日期或仓库创建日期落在 `2026-05-12` 至 `2026-08-12` 的内容。
- 论文日期优先采用 arXiv `published` 时间；GitHub 项目日期优先采用 GitHub API `created_at`，活跃度参考 `pushed_at`。
- GitHub 栏目优先收录与 `timeseries agent / harness / reasoning / AutoML / forecasting platform` 直接相关的新仓库；单纯“近期有提交”但创建日期超窗的项目不纳入正文。
- 本期为周三，不生成 `weekly-brief-2026-W33.md`。

## 1. 时间序列基础模型最新研究

### [2026-08-08] [Ground-Truth Neighborhood Regularization for Reinforcement Learning Post-Training of Time Series Foundation Models](https://arxiv.org/abs/2608.08010)

- 日期：2026-08-08
- 来源：[arXiv](https://arxiv.org/abs/2608.08010)
- 简短摘要：提出 `GTN-R`，在 `TSFM` 的 RL 后训练阶段用 ground-truth neighborhood 约束采样分布，缓解后训练时偏离真实未来的 `suboptimal collapse`。
- 相关性判断：最高。它直接对应 `TSFM post-training + RL`，是近窗内最清晰的“基础模型部署后再优化”路线。

### [2026-08-06] [TS-RAG: Retrieval Augmented Generation for Time Series Forecasting](https://arxiv.org/abs/2608.06223)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.06223)
- 简短摘要：把 `RAG` 迁移到时序预测，设计 reference tokens 融合当前序列与检索到的相似历史序列，在多个真实基准上取得稳定提升。
- 相关性判断：最高。它直接命中 `retrieval-enhanced TSFM`，也是 agent 外部记忆层的关键基础能力。

### [2026-08-06] [Align-RAG: Alignment Is All You Need for TSFM In-Context Learning](https://arxiv.org/abs/2608.05571)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.05571) / [官方代码](https://github.com/masadi-99/align-rag)
- 简短摘要：提出无需训练的 retrieval alignment 方法，在冻结 `TSFM` 输入检索样本前做闭式幅度缩放和整数 lag 对齐，证明很多增益不必依赖额外 fusion adapter。
- 相关性判断：最高。它将 `TSFM in-context learning` 从“必须训练检索融合器”改写成“先做对齐再谈复杂模块”。

### [2026-08-05] [Personalized Federated Sparse Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2608.04695)

- 日期：2026-08-05
- 来源：[arXiv](https://arxiv.org/abs/2608.04695)
- 简短摘要：面向建筑能耗预测，提出带异构时序 `MoE` adapter 的个性化联邦适配框架，让不同楼宇与不同 backbone 共享/私有专家组合。
- 相关性判断：高。它把 `TSFM + personalization + federated deployment` 结合起来，偏落地部署。

### [2026-08-02] [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](https://arxiv.org/abs/2608.01290)

- 日期：2026-08-02
- 来源：[arXiv](https://arxiv.org/abs/2608.01290)
- 简短摘要：在 `Chronos-T5` 上做 LoRA 式联邦微调，仅交换轻量 adapter，并观察到差分隐私噪声在小样本联邦预测里还能起到正则化作用。
- 相关性判断：高。它是近窗内最明确的 `TSFM + PEFT + privacy-preserving adaptation` 案例之一。

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：把冻结 `TSFM` 视为轨迹生成器，让 `LLM` 通过 `MCTS` 充当 policy/value planner，在不重训 backbone 的前提下处理文本条件预测。
- 相关性判断：最高。它是 `TSFM + planning + reasoning` 的代表作，基础模型开始被用作 agent 内部的“世界模型”。

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 `TSFM post-training` 设计空间，把后训练方法归纳为参数适配、上下文增强、模型组合、输出处理与不确定性控制、压缩与特化五类。
- 相关性判断：最高。它提供了理解当前 `TSFM` 研究迁移方向的总框架。

### [2026-07-22] [Expert-Guided Forecast Editing for Time-Series Foundation Models](https://arxiv.org/abs/2607.19659)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.19659)
- 简短摘要：研究冻结 `TSFM` 的 test-time forecast editing，在有限查询预算下用专家反馈对候选轨迹做分解式 refinement。
- 相关性判断：高。它把“人类/外部评估器如何在线修正 TSFM 输出”显式化，和后续人机协同时序 Agent 很接近。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文时序异常定位写成递归式代理过程，允许模型借助代码和视觉能力反复操作信号、定位证据，并引入 `AnomalyXL` 基准。
- 相关性判断：最高。它是当前最接近 `tool-using time-series agent` 核心范式的工作之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段预测代理框架，先构造 forecast prior，再检索上下文并慢思考，最后反思并修正时间与领域一致性。
- 相关性判断：最高。它是近窗内最清晰的 `forecasting agent workflow` 新框架之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用 building knowledge graph 构造结构骨架，并通过 agentic topology sampler 自动挑选目标变量相关的外生变量。
- 相关性判断：高。它提示时序 Agent 的关键职责之一是“选对上下文与外生变量”，而不只是调用预测器。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：让 `LLM` 充当 neural architect，把自然语言需求映射为可执行 PyTorch 模型，并通过 `Sandboxed Reflection Loop` 自动纠错与优化。
- 相关性判断：最高。它位于 `time series + agent + AutoML` 的正中心。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 通过 temporal tools、经验演化与 episodic multimodal memory，为通用 LLM agent 提供 grounded、auditable 的时序运行时。
- 相关性判断：最高。它仍然是当前最完整的时序 harness 参考之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent)
- 简短摘要：把 `LLM-based reasoner` 与 `TSFM-based forecaster` 结合起来，并通过多轮 refinement 与 forecasting-aware reinforcement learning 提升多模态预测。
- 相关性判断：最高。它是 `reasoner + forecaster` 双系统时序 Agent 的代表作之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把时序任务形式化为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 搭建可验证 harness。
- 相关性判断：最高。它对“如何把时序 agent 做成可靠工程系统”最有参考价值。

### [2026-05-14] [Nexus : An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把真实世界预测拆成宏观波动、微观波动、上下文融合与最终综合四阶段，强调 forecasting 本质上是 agentic reasoning 问题。
- 相关性判断：高。它比单一 forecaster 更彻底地把时序预测重构成代理式工作流。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 `LLM reasoning` 用作时序集成学习的样本级路由器，同时联合文本化时序模式描述与数值特征，输出可解释的动态 ensemble 权重。
- 相关性判断：高。它不是完整 agent/harness，但直接展示了 `reasoning model` 如何介入 forecasting runtime 的模型选择与加权。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 与 `ReasonCast` recipe，让模型在同一自回归过程中同时输出 forecast 与 reasoning chain。
- 相关性判断：最高。它直接命中“时间序列 reasoning 模型”主题本身。

### [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2608.00200) / [GitHub](https://github.com/SparshRastogi/TRACE-TS)
- 简短摘要：先用 attribution 定位关键时空片段，再构造带显式证据出处的 DAG reasoning trace，联合输出活动识别与可追踪解释。
- 相关性判断：高。它更偏 sensor understanding，但对“时序 reasoning 如何可验证”非常重要。

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：`ClinPRISM` 用 irregularity-aware encoder、temporal evidence distiller 和 progressive alignment 处理不规则临床时序问答。
- 相关性判断：最高。它是近窗内最明确的 `irregular time-series QA + multimodal reasoning` 代表之一。

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880) / [HuggingFace](https://huggingface.co/datasets/winall/CLIR-Bench)
- 简短摘要：构建 `6,600` 个不规则临床时序 QA 样本，附带显式 temporal evidence 与 task-specific derivation rules，用于检验时序推理是否 grounded。
- 相关性判断：高。它是评估时序 reasoning 是否可靠的重要 benchmark。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把时序 reasoning 中“选文本还是图像、选哪种模型、如何兼顾成本与效果”表述为异构图上的动态路由问题。
- 相关性判断：最高。它很像时序 reasoning 系统的 runtime router 原型。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` 多模态 benchmark 与 `TSAlign` 框架，把时序 reasoning 从低级识别推进到 decoding、grounding、inferring、acting 等认知任务。
- 相关性判断：最高。它扩展了“时间序列 reasoning”的问题定义。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 与 hybrid 三种时序分析模式，发现代码执行能提升表现，但统计验证和细粒度理解仍存在明显短板。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否真的会做时间序列推理”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建覆盖 `240` 个任务和 `2,680` 个对话轮次的多轮时序 reasoning benchmark，集中暴露 memory、uncertainty handling 与 decision-making 弱点。
- 相关性判断：最高。它是多轮 agentic time-series reasoning 的关键评测底座。

## 4. 光伏功率预测最新研究

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：面向冷启动与有限站点历史场景，构建带时间戳校正、物理特征与 stacking 的日 ahead PV 预测流水线。
- 相关性判断：高。它不属于 Agent 论文，但很适合作为 `time-series agent` 的下游任务模板。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：系统评估多类深度时序模型在 `NWP` 误差扰动下的鲁棒性，结合受物理约束的扰动模拟与 `SHAP / IG` 解释，分析模型何时会从未来天气转而依赖历史观测与物理先验。
- 相关性判断：高。它虽然不是 foundation model 论文，但对光伏预测系统在真实部署中的稳健性评估非常关键。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：提出物理感知的检索增强光伏预测框架，先基于 patch 与 analog trajectory 做物理一致的检索，再用冻结 `Chronos` 先验和残差校正模块处理分布偏移。
- 相关性判断：最高。它直接把 `retrieval + frozen TSFM + physics-aware correction` 结合到 PV forecasting，是本期最贴合主线的光伏论文之一。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过基于物理知识的 synthetic history 解决 PV 冷启动问题，再让 `TSFM` 在推理时利用伪历史进行条件预测。
- 相关性判断：最高。它把 `TSFM` 与光伏冷启动场景直接结合，且体现了 inference-time conditioning 思路。

### [2026-05-27] [Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting](https://arxiv.org/abs/2605.28324)

- 日期：2026-05-27
- 来源：[arXiv](https://arxiv.org/abs/2605.28324)
- 简短摘要：把多变量太阳能功率预测重写成条件扩散下的 inpainting 问题，用历史观测条件化恢复未来时间片。
- 相关性判断：中。它更偏生成式预测方法，但对 `time-series foundation/generative forecasting` 仍有方法学参考价值。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

> 说明：本栏仅保留近三个月内可由 GitHub API 确认 `created_at` 的新项目；日期写仓库创建日，括号中补充最近一次 `pushed_at`。

### 5.1 时间序列

#### [2026-08-06] [masadi-99/align-rag](https://github.com/masadi-99/align-rag)

- 日期：2026-08-06（最近活跃：2026-08-06）
- 来源：[GitHub 仓库](https://github.com/masadi-99/align-rag)
- 简短摘要：`Align-RAG` 官方实现，聚焦冻结 `TSFM` 的 training-free retrieval alignment。
- 相关性判断：最高。它是近窗内最值得跟踪的 `foundation model + retrieval` 新仓库之一。

#### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（最近活跃：2026-08-03）
- 来源：[GitHub 仓库](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 论文官方代码仓库，围绕 `Fast-Slow-Reflect` forecasting agent 工作流组织。
- 相关性判断：最高。它是近窗内最直接的时序 forecasting agent 官方实现之一。

#### [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)

- 日期：2026-08-03（最近活跃：2026-08-03）
- 来源：[GitHub 仓库](https://github.com/seunghan96/reasoncast)
- 简短摘要：`ReasonCast` 官方代码仓库，聚焦“预测与解释联合生成”的时间序列 reasoning 模型。
- 相关性判断：最高。它正好落在 `timeseries reasoning model` 主线上。

#### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（最近活跃：2026-08-05）
- 来源：[GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：围绕递归工具使用、长上下文异常定位与 `AnomalyXL` 基准的 time-series agent 项目。
- 相关性判断：最高。它是当前最值得持续跟踪的 `tool-using time-series agent` 项目之一。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（最近活跃：2026-07-11）
- 来源：[GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 anomaly detection、changepoint、decomposition、trend test、data-quality auditing 等 deterministic MCP tools。
- 相关性判断：最高。它非常贴近 `time-series agent` 的标准工具层。

#### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08（最近活跃：2026-07-13）
- 来源：[GitHub 仓库](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方实现，研究时序 reasoning 场景中的模态-模型动态路由。
- 相关性判断：最高。它是 reasoning 系统调度层的关键新仓库。

#### [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-07-08（最近活跃：2026-08-05）
- 来源：[GitHub 仓库](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：轻量时序 AutoML 工程脚手架，把数据上传、建模、可视化和部署放进一个 Web 应用。
- 相关性判断：高。研究深度有限，但与 `timeseries + AutoML` 主题直接相关。

#### [2026-06-08] [jhondados/time-series-forecasting-platform](https://github.com/jhondados/time-series-forecasting-platform)

- 日期：2026-06-08（最近活跃：2026-08-05）
- 来源：[GitHub 仓库](https://github.com/jhondados/time-series-forecasting-platform)
- 简短摘要：面向 `50K+` 序列的 GCP 时序预测平台，强调 `AutoML + TFT + hierarchical reconciliation + uncertainty quantification`。
- 相关性判断：高。它偏工程平台，但非常贴近大规模时序建模与 AutoML 落地。

#### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：2026-06-03（最近活跃：2026-06-07）
- 来源：[GitHub 仓库](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 论文官方仓库，围绕通用 agent 的时序工具、记忆和可审计分析流程组织。
- 相关性判断：最高。它仍是 `timeseries harness` 的代表实现之一。

### 5.2 光伏功率预测

- 本次未发现近三个月内同时满足“与光伏功率预测直接相关”“项目形态较完整”“GitHub 创建日期可确认”的高优先级新仓库；因此该小节保留为空结果说明，不强行纳入低质量项目。

## 6. DailyArXiv 补检结论

- 已直接检查 `zezhishao/DailyArXiv` 的 GitHub README 页面；当前页面显示 `Last update: 2026-08-12`，且 `Time Series` 板块前列可见条目主要是通用 forecasting、benchmark、anomaly diagnosis 与 compliance 相关内容。
- 直接打开当天 README 时，未在前列可见内容中确认 `GTN-R`、`TimeRLM`、`CastFSR`、`ReasonCast`、`TSRouter`、`REATS` 等更贴合本期主题的 8 月新作，因此 `DailyArXiv` 对“timeseries agent / reasoning / foundation model / PV forecasting”主线的即刻覆盖偏弱。
- 通过 GitHub 搜索摘要补检，`DailyArXiv` 当前与本主题较相关且仍在三个月窗口内的条目主要包括 `TS-Skill`（2026-05-23，偏时序问答 reasoning 评测）以及 `ChronoVAE-HOPE`、`KairosHope`（均为 2026-05-23，偏 TSFM 分类技术报告）。
- 上述 `2026-05-23` 条目虽在窗口内，但与本期关注的 forecasting agent、reasoning runtime、TSFM 后训练、PV forecasting 相比相关性次级，因此本期未将其抬升到正文高优先级列表。
- 本次未发现必须因 `DailyArXiv` 而新增的“高相关但日期超窗”条目；若后续 README 中出现与 arXiv 首发日期不一致的情况，应继续以 arXiv `published` 时间为准并降优先级处理。

## 7. 需要继续跟踪的信号

- `TSFM post-training`：重点继续盯 `RL post-training`、`retrieval alignment`、`federated / personalized adaptation` 三条支线。
- `Agent runtime`：重点继续盯 `TimeRLM`、`CastFSR`、`TimeClaw`、`AION` 后续是否补 benchmark、代码更新和更完整实验。
- `Reasoning evaluation`：重点继续盯 `REATS`、`ReasonCast`、`TimeSage-MT`、`CLIR-Bench`、`TSRouter` 是否形成更统一的时序 reasoning 评测协议。
- `GitHub projects`：下次优先检查 `align-rag`、`reasoncast`、`TimeRLM`、`timeseries-mcp` 是否在 2026-08-12 之后出现实质性提交或新增文档。

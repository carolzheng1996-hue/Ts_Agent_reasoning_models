# 2026-08-13 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-13 15:39 CST，Asia/Shanghai  
时间窗口：2026-05-13 至 2026-08-13  
优先来源：arXiv、GitHub 官方仓库页 / GitHub API、官方项目页、DailyArXiv README  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`machine learning`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- 今日最值得补入的新论文集中在 `2026-08-11` 到 `2026-08-13` 的时间段：`REATS` 之后，近两天又出现了 `Market-Information-Aware Gated-LoRA`、`TORF`、`RCCP` 等条目，说明时序基础模型和 forecasting 系统正在从“更大模型”继续转向“后训练、检索校准、不确定性与领域适配”。
- `Agent / harness` 主线今天没有出现比 `TimeRLM`、`CastFSR`、`AION`、`TimeClaw` 更强的新公开系统，但 `DailyArXiv` 继续收录了 `CastFSR`，说明该工作仍在近期传播窗口内。
- `Reasoning` 主线仍由 `ReasonCast`、`TSRouter`、`ClinPRISM`、`CLIR-Bench`、`Can LLM Coding Agents Reason About Time Series?` 这些近三个月条目主导；`REATS` 是最近一周内最值得持续跟踪的新 work。
- GitHub 近三个月内最值得跟踪的新项目，仍以 `align-rag`、`CastFSR`、`reasoncast`、`TimeRLM`、`timeseries-mcp`、`TSRouter` 为核心；工程侧可继续观察 `time-series-forecasting-platform`、`time-series-autoML`、`ChronoSight-AI`。
- 光伏功率预测方向本期新增论文不多，但 `PARA-PV`、`Physics-Informed Synthetic Histories`、`Day-Ahead PV Decision-Support Pipeline` 仍然是和 `TSFM / retrieval / inference-time adaptation` 交集最强的主线；GitHub 里 `Helios-Forecast` 是近窗内最活跃、信号最强的工程项目。
- `DailyArXiv` 已补检 `master/README.md`，其 `Time Series` 板块更新时间为 `2026-08-13`；但该表里的日期是“被收录日期”，不是 arXiv 首发日期，因此像 `CastFSR`、`TS-Mob` 这类条目存在“README 日期在窗内、论文首次公开时间不完全一致”的情况，正文仍以 arXiv / GitHub API 首次日期为准。

## 0. 检索口径

- 仅保留首次公开日期或仓库创建日期落在 `2026-05-13` 至 `2026-08-13` 的内容。
- 论文日期优先采用 arXiv `published` 时间；GitHub 项目日期优先采用 GitHub API `created_at`，活跃度参考 `pushed_at`。
- `DailyArXiv` 补检基于公开可访问的 [`zezhishao/DailyArXiv` README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)；其 `Time Series` 板块日期用于判断“近期被收录”，不直接替代论文首发日期。
- 本期为周四，不生成 `weekly-brief-2026-W33.md`。

## 1. 时间序列基础模型最新研究

### [2026-08-11] [Market-Information-Aware Gated-LoRA of Foundation Models for Transferable Day-Ahead Electricity Price Forecasting](https://arxiv.org/abs/2608.11359)

- 日期：2026-08-11
- 来源：[arXiv](https://arxiv.org/abs/2608.11359)
- 简短摘要：提出结合 market information gating 的 `Gated-LoRA`，把基础模型适配到跨市场的日前电价预测，强调轻量参数高效迁移而不是全量重训。
- 相关性判断：高。它不属于通用 TSFM 综述型工作，但非常贴近“基础模型如何在时序垂域做可迁移后训练”。

### [2026-08-08] [Ground-Truth Neighborhood Regularization for Reinforcement Learning Post-Training of Time Series Foundation Models](https://arxiv.org/abs/2608.08010)

- 日期：2026-08-08
- 来源：[arXiv](https://arxiv.org/abs/2608.08010)
- 简短摘要：提出 `GTN-R`，在 `TSFM` 的 RL 后训练阶段引入 ground-truth neighborhood 约束，缓解后训练时预测轨迹偏离真实未来的问题。
- 相关性判断：最高。它直接命中 `TSFM post-training + RL`，是近窗内最清晰的部署后再优化路线之一。

### [2026-08-06] [Align-RAG: Alignment Is All You Need for TSFM In-Context Learning](https://arxiv.org/abs/2608.05571)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.05571) / [GitHub](https://github.com/masadi-99/align-rag)
- 简短摘要：提出训练自由的 retrieval alignment，在冻结 `TSFM` 输入检索样本前做闭式幅度缩放与整数 lag 对齐，避免依赖额外 fusion adapter。
- 相关性判断：最高。它重写了 `TSFM in-context learning` 的强基线，对 agent 的检索记忆层也很关键。

### [2026-08-05] [Personalized Federated Sparse Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2608.04695)

- 日期：2026-08-05
- 来源：[arXiv](https://arxiv.org/abs/2608.04695)
- 简短摘要：在建筑能耗预测中，用异构时间序列 `MoE adapter` 做个性化联邦适配，使不同 client 与不同 backbone 共享/私有专家组合。
- 相关性判断：高。它把 `TSFM + personalization + federated deployment` 明确结合起来，偏部署落地。

### [2026-08-02] [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](https://arxiv.org/abs/2608.01290)

- 日期：2026-08-02
- 来源：[arXiv](https://arxiv.org/abs/2608.01290)
- 简短摘要：在 `Chronos-T5` 上做 LoRA 式联邦微调，仅交换轻量 adapter，并讨论差分隐私噪声在小样本联邦预测中的正则化效应。
- 相关性判断：高。它是近窗内最明确的 `TSFM + PEFT + privacy-preserving adaptation` 案例之一。

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：把冻结 `TSFM` 当作轨迹生成器，让 `LLM` 通过 `MCTS` 扮演 planner，在不重训 backbone 的前提下处理文本条件预测。
- 相关性判断：最高。它是 `TSFM + planning + reasoning` 的代表作，基础模型开始被明确用作 agent 内部世界模型。

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统归纳 `TSFM post-training` 设计空间，把后训练方法整理为参数适配、上下文增强、模型组合、输出处理与不确定性控制、压缩与特化五类。
- 相关性判断：最高。它提供了理解当前 `TSFM` 研究迁移方向的总框架。

### [2026-07-22] [Expert-Guided Forecast Editing for Time-Series Foundation Models](https://arxiv.org/abs/2607.19659)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.19659)
- 简短摘要：研究冻结 `TSFM` 的 test-time forecast editing，在有限查询预算下用专家反馈对候选轨迹做分解式 refinement。
- 相关性判断：高。它把“如何在线修正 TSFM 输出”显式化，和人机协同时序 Agent 很接近。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文时序异常定位写成递归式代理过程，允许模型借助代码和视觉能力反复操作信号、定位证据，并配套 `AnomalyXL` 基准。
- 相关性判断：最高。它是当前最接近 `tool-using time-series agent` 范式的工作之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段代理式预测框架，先构造 forecast prior，再检索上下文并慢思考，最后反思修正时间与领域一致性。
- 相关性判断：最高。它是近窗内最清晰的 `forecasting agent workflow` 之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：借助 building knowledge graph 构造结构骨架，并通过 agentic topology sampler 自动挑选与目标变量相关的外生变量。
- 相关性判断：高。它提示时序 Agent 的关键职责之一是“选对外生上下文”。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：让 `LLM` 充当 neural architect，把自然语言需求映射为可执行 PyTorch 模型，并通过 `Sandboxed Reflection Loop` 自动纠错和优化。
- 相关性判断：最高。它位于 `time series + agent + AutoML` 的正中心。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 通过 temporal tools、经验演化与 episodic multimodal memory，为通用 LLM agent 提供 grounded、auditable 的时序运行时。
- 相关性判断：最高。它仍然是当前最完整的时序 harness 参考之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent)
- 简短摘要：把 `LLM-based reasoner` 和 `TSFM-based forecaster` 结合，通过多轮 refinement 与 forecasting-aware reinforcement learning 提升多模态时序预测。
- 相关性判断：最高。它是 `reasoner + forecaster` 双系统时序 Agent 的代表作之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把时序任务形式化为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 搭建可验证 harness。
- 相关性判断：最高。它对“如何把时序 agent 做成可靠工程系统”最有参考价值。

### [2026-05-14] [Nexus : An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把真实世界预测拆成宏观波动、微观波动、上下文融合和最终综合四阶段，强调 forecasting 本质上是 agentic reasoning 问题。
- 相关性判断：高。它比单一 forecaster 更彻底地把时序预测重构成代理式工作流。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 `LLM reasoning` 用作样本级路由器，同时联合文本化时序模式描述与数值特征，输出可解释的动态 ensemble 权重。
- 相关性判断：高。它不是完整 harness，但直接展示了 reasoning 模型如何介入 forecasting runtime 的模型选择与加权。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 与 `ReasonCast` recipe，让模型在同一自回归生成过程中同时输出 forecast 与 reasoning chain。
- 相关性判断：最高。它直接命中“时间序列 reasoning 模型”主题本身。

### [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2608.00200)
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
- 简短摘要：构建 `6,600` 个不规则临床时序 QA 样本，附带显式 temporal evidence 与 task-specific derivation rules。
- 相关性判断：高。它是评估时序 reasoning 是否 grounded 的重要 benchmark。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“选文本还是图像、选哪种模型、如何兼顾成本与效果”表述为异构图上的动态路由问题。
- 相关性判断：最高。它很像时序 reasoning runtime router 的原型。

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
- 简短摘要：面向冷启动与站点历史有限场景，构建带时间戳校正、物理特征与 stacking 的日前光伏预测流水线。
- 相关性判断：高。它不属于 Agent 论文，但很适合作为 `time-series agent` 的下游任务模板。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：系统评估多类深度时序模型在 `NWP` 误差扰动下的鲁棒性，并结合物理约束扰动模拟与解释方法分析模型依赖。
- 相关性判断：高。它对光伏预测系统在真实部署中的稳健性评估非常关键。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：提出物理感知的检索增强光伏预测框架，用物理一致检索、冻结 `Chronos` 先验和残差校正模块处理分布偏移。
- 相关性判断：最高。它直接把 `retrieval + frozen TSFM + physics-aware correction` 结合到 PV forecasting。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 physics-informed synthetic history 解决 PV 冷启动问题，再让 `TSFM` 在推理时利用伪历史做条件预测。
- 相关性判断：最高。它把 `TSFM` 与光伏冷启动场景直接结合，且体现了 inference-time conditioning 思路。

### [2026-05-27] [Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting](https://arxiv.org/abs/2605.28324)

- 日期：2026-05-27
- 来源：[arXiv](https://arxiv.org/abs/2605.28324)
- 简短摘要：把多变量太阳能功率预测重写成条件扩散下的 inpainting 问题，用历史观测条件化恢复未来时间片。
- 相关性判断：中。它更偏生成式预测方法，但对 `time-series foundation / generative forecasting` 仍有方法学参考价值。

## 5. GitHub 上值得跟踪的新项目

> 说明：本栏仅保留近三个月内可由 GitHub API 确认 `created_at` 的仓库；日期写仓库创建日，括号内补充最近一次 `pushed_at` 或与论文/工程的关系。

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
- 相关性判断：最高。它是近窗内最直接的 forecasting agent 官方实现之一。

#### [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)

- 日期：2026-08-03（最近活跃：2026-08-03）
- 来源：[GitHub 仓库](https://github.com/seunghan96/reasoncast)
- 简短摘要：`ReasonCast` 官方实现，对应“同时生成 forecast 与 reasoning chain”的时序 reasoning 路线。
- 相关性判断：最高。它与“时间序列 reasoning 模型”主题直接重合。

#### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（最近活跃：2026-08-05）
- 来源：[GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：围绕 `recursive interaction + code execution + anomaly localization` 的长上下文时序代理框架。
- 相关性判断：最高。它是当前最值得持续跟踪的 `time-series tool-using agent` 项目之一。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（最近活跃：2026-07-11）
- 来源：[GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 anomaly detection、changepoint、decomposition、trend tests 和 data-quality auditing 的 deterministic MCP tools。
- 相关性判断：最高。它非常贴近时间序列 Agent 的标准工具层。

#### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08（最近活跃：2026-07-13）
- 来源：[GitHub 仓库](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码仓库，关注 reasoning runtime 中的动态 modality-model routing。
- 相关性判断：最高。它可直接支撑后续时序 reasoning runtime 实验。

#### [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-07-08（最近活跃：2026-08-12）
- 来源：[GitHub 仓库](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：把数据上传、建模、可视化和部署串成轻量时序 AutoML 脚手架。
- 相关性判断：高。工程深度有限，但与 `time series + AutoML` 主题直接相关。

#### [2026-06-27] [MarkAntonyRajS/ChronoSight-AI](https://github.com/MarkAntonyRajS/ChronoSight-AI)

- 日期：2026-06-27（最近活跃：2026-06-27）
- 来源：[GitHub 仓库](https://github.com/MarkAntonyRajS/ChronoSight-AI)
- 简短摘要：把数据审计、统计检验、AutoML 建模、时间序列预测和 LLM 业务报告串成自治分析平台。
- 相关性判断：高。它更接近 `time series + AutoML + analytics agent` 的完整产品形态。

#### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（最近活跃：2026-06-17）
- 来源：[GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：把 synthetic / CSV forecasting benchmark、baseline、诊断、报告和确定性实验代理串到一条本地循环里。
- 相关性判断：高。它更偏实验代理与 benchmark automation，但与 `timeseries agent + harness + ML engineering` 的交集明确。

#### [2026-06-08] [jhondados/time-series-forecasting-platform](https://github.com/jhondados/time-series-forecasting-platform)

- 日期：2026-06-08（最近活跃：2026-08-05）
- 来源：[GitHub 仓库](https://github.com/jhondados/time-series-forecasting-platform)
- 简短摘要：面向 `50K+` 序列的 GCP forecasting platform，把 `AutoML + custom TFT + hierarchical reconciliation + uncertainty quantification` 放进同一工程栈。
- 相关性判断：高。它偏工程平台，但与 `time series + AutoML + large-scale deployment` 的交集明确。

### 5.2 光伏功率预测

#### [2026-07-27] [rogel/physanalog-mix](https://github.com/rogel/physanalog-mix)

- 日期：2026-07-27（最近活跃：2026-07-27）
- 来源：[GitHub 仓库](https://github.com/rogel/physanalog-mix)
- 简短摘要：面向多站点日前光伏预测的 supervised analog-day reranking 代码。
- 相关性判断：高。它直接对应“检索/相似日”路线，和 `PARA-PV` 这类检索增强思路有明显呼应。

#### [2026-06-11] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)

- 日期：2026-06-11（最近活跃：2026-08-12）
- 来源：[GitHub 仓库](https://github.com/ReikanYsora/Helios-Forecast)
- 简短摘要：面向 Home Assistant 的 self-learning solar production forecast 项目，近窗内活跃度和社区信号都明显高于多数 PV 新仓库。
- 相关性判断：高。它不是研究论文配套代码，但在实际光伏功率预测工程里最值得持续观察。

## 6. DailyArXiv 补检结论

- 已检查 [`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 的 `Time Series` 板块，`Last update` 为 `2026-08-13`。
- 板块内与本期主题直接相关的条目包括：
  - [`CastFSR`](https://arxiv.org/abs/2608.03031)
  - [`Time-Series Foundation Model Embeddings for Remaining Useful Life Estimation`](https://arxiv.org/abs/2606.11990)
  - [`TS-Mob`](https://arxiv.org/abs/2507.00945)
- 其中 `CastFSR` 与本期主题高度相关，且其 arXiv 首发日期 `2026-08-04` 落在时间窗口内，已纳入正文。
- `Time-Series Foundation Model Embeddings for Remaining Useful Life Estimation` 与基础模型主线相关，但更偏工业 RUL 下游任务；本期优先级低于 `GTN-R`、`Align-RAG`、`FedChronos`、`LLM as Forecasting Planner`，因此未进入正文主体。
- `TS-Mob` 在 `DailyArXiv` 中显示日期为 `2026-08-11`，但其 arXiv 标识为 `2507.00945`，首次公开时间明显早于本次三个月窗口；该条目属于“README 收录日期在窗内、论文首发日期超窗”的情况，已降优先级并不纳入正文。
- 结论：`DailyArXiv` 对本期主题有补充价值，但必须回到 arXiv 原始页面核对首发日期；本次不存在“因只看 README 日期而误纳入正文”的条目。

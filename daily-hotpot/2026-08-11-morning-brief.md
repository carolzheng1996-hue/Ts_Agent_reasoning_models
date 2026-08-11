# 2026-08-11 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-11 15:38 CST，Asia/Shanghai  
时间窗口：2026-05-11 至 2026-08-11  
优先来源：arXiv、GitHub 官方仓库页 / GitHub API、官方项目页、DailyArXiv README  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- `TSFM` 主线今天最值得补入的是 [`Ground-Truth Neighborhood Regularization for Reinforcement Learning Post-Training of Time Series Foundation Models`](https://arxiv.org/abs/2608.08010)（2026-08-08）；它和 [`Align-RAG`](https://arxiv.org/abs/2608.05571)、[`TS-RAG`](https://arxiv.org/abs/2608.06223) 一起，说明近一周重点已经从“单纯预训练”转向“检索增强 + RL 后训练 + 冻结骨干适配”。
- `Agent / harness` 方向仍以 [`TimeRLM`](https://arxiv.org/abs/2608.03391)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`TimeClaw`](https://arxiv.org/abs/2606.05404) 为最强近期主线；补入 [`KairosAgent`](https://arxiv.org/abs/2605.30002) 和 [`Nexus`](https://arxiv.org/abs/2605.14389) 后，时序 Agent 的“LLM reasoner + TSFM forecaster”路线更清晰。
- `Reasoning` 方向仍由 [`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TRACE-TS`](https://arxiv.org/abs/2608.00200)、[`ClinPRISM`](https://arxiv.org/abs/2607.25947)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 领跑；新增补入 [`CLIR-Bench`](https://arxiv.org/abs/2607.09880) 与 [`TSCognition / TSAlign`](https://arxiv.org/abs/2606.22126) 作为更偏 benchmark 与认知式推理的观察点。
- 光伏功率预测近三个月内能稳定确认日期的高相关论文不多，但已确认三篇高优先级条目：[`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457) 和 [`Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting`](https://arxiv.org/abs/2605.28324)。
- `DailyArXiv` 当前 `README` 已更新到 `2026-08-11`，其 `Time Series` 板块能直接确认本期相关命中包括 `KReF`、`TS-RAG`、`Align-RAG`、`TimeRLM`、`CastFSR`、`ReasonCast`；未发现与 arXiv 首发日期不一致的情况。

## 0. 检索口径

- 仅保留首次公开日期落在 `2026-05-11` 至 `2026-08-11` 的条目。
- 论文日期优先采用 arXiv `published` 时间；GitHub 项目日期优先采用 GitHub API `created_at`，活跃度采用 `pushed_at`。
- `DailyArXiv` 补检基于 `zezhishao/DailyArXiv` 当前公开 `master` 分支 `README.md`；本次确认其 `Last update` 为 `2026-08-11`。
- 无法稳定确认首次公开日期的条目不纳入正文；本期正文未纳入 `日期不确定` 条目。

## 1. 时间序列基础模型最新研究

### [2026-08-08] [Ground-Truth Neighborhood Regularization for Reinforcement Learning Post-Training of Time Series Foundation Models](https://arxiv.org/abs/2608.08010)

- 日期：2026-08-08
- 来源：[arXiv](https://arxiv.org/abs/2608.08010)
- 简短摘要：讨论 `TSFM` 在 RL 后训练中出现的 `suboptimal collapse`，并提出 `GTN-R`，用 ground-truth neighborhood 约束采样分布，降低轨迹偏离真实未来的风险。
- 相关性判断：最高。它直接对应 `TSFM post-training / RLVR / 部署后适配`，对后续 reasoning-enhanced forecasting 很关键。

### [2026-08-06] [TS-RAG: Retrieval Augmented Generation for Time Series Forecasting](https://arxiv.org/abs/2608.06223)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.06223)
- 简短摘要：把 `RAG` 明确迁移到时间序列预测，通过专门设计的 reference tokens 融合当前序列与相似历史片段，在多个真实基准上取得稳定收益。
- 相关性判断：最高。它直接命中 `retrieval-enhanced forecasting` 与 TSFM 外部上下文增强。

### [2026-08-06] [Align-RAG: Alignment Is All You Need for TSFM In-Context Learning](https://arxiv.org/abs/2608.05571)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.05571)
- 简短摘要：提出训练自由的 retrieval-augmented TSFM 方案，在检索样本进入冻结 backbone 前先做 closed-form 幅度缩放与整数 lag 对齐，不依赖 learned fusion 也能持续增益。
- 相关性判断：最高。它重新定义了 `TSFM in-context learning` 的强基线，也非常适合 agent 的外部记忆检索层。

### [2026-08-05] [Personalized Federated Sparse Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2608.04695)

- 日期：2026-08-05
- 来源：[arXiv](https://arxiv.org/abs/2608.04695)
- 简短摘要：面向建筑能耗预测，在预训练 TSFM 表征后接 heterogeneous temporal `MoE` adapter，并在联邦环境中做 client-aware、backbone-aware 稀疏个性化适配。
- 相关性判断：最高。它把 `TSFM + federated deployment + personalization + energy forecasting` 连成一条现实落地链。

### [2026-08-02] [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](https://arxiv.org/abs/2608.01290)

- 日期：2026-08-02
- 来源：[arXiv](https://arxiv.org/abs/2608.01290)
- 简短摘要：在 `Chronos-T5` 上做 LoRA 式联邦微调，只交换轻量 adapter 权重，并观察到差分隐私噪声在小样本联邦预测里还能起到一定正则化作用。
- 相关性判断：高。它是 `TSFM + PEFT + privacy + distributed adaptation` 的直接案例。

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：冻结 TSFM 先生成候选轨迹，再让 LLM 通过 `MCTS` 充当 policy / value planner，对文本上下文条件下的预测轨迹做搜索和筛选。
- 相关性判断：最高。它把 `TSFM + planning + reasoning` 直接接起来，是 foundation model 走向 agentic inference 的强信号。

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 设计空间，把后训练方法归纳为参数适配、上下文增强、模型组合、输出处理与不确定性控制、压缩与特化五类。
- 相关性判断：最高。它是理解当前 TSFM 研究从“预训练”向“部署前后适配”迁移的总纲。

### [2026-07-22] [Expert-Guided Forecast Editing for Time-Series Foundation Models](https://arxiv.org/abs/2607.19659)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.19659)
- 简短摘要：研究冻结 TSFM 下的 test-time forecast editing，用专家打分在有限查询预算内对候选轨迹做结构化 refinement。
- 相关性判断：高。它把 foundation model 的输出编辑问题显式化，与后续 `human-in-the-loop forecasting agent` 很接近。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文时序异常定位写成 `recursive language model`，通过代码与视觉能力反复操作信号、检索证据并完成精确定位，同时引入 `AnomalyXL` 基准。
- 相关性判断：最高。它非常接近 `tool-using time-series agent` 的核心范式。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段 agentic forecasting：轻量 forecaster 先给 forecast prior，再检索上下文并慢思考，最后做 reflection 修正时间与领域一致性。
- 相关性判断：最高。它是窗口内最直白的时间序列 Agent 新框架之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：用 building knowledge graph 构造结构骨架，并借助 agentic topology sampler 自动挑选目标变量相关的外生特征。
- 相关性判断：高。它说明 time-series agent 的关键职责之一是外生变量选择，而不只是套用预测器。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：让 LLM 充当 neural architect，把自然语言需求映射到可执行 PyTorch 模型，并通过 `sandboxed reflection loop` 自动修正与优化。
- 相关性判断：最高。它位于 `timeseries agent + AutoML + machine learning engineering` 的正中心。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 把 temporal tools、经验演化与 episodic multimodal memory 放进统一 harness，让 generalist LLM agent 可以做 grounded、auditable 的时间序列分析。
- 相关性判断：最高。它仍然是当前最完整的时序 harness 参考之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent)
- 简短摘要：把 `LLM-based reasoner` 与 `TSFM-based forecaster` 组合起来，并通过多轮 refinement 与 forecasting-aware reinforcement learning 提升多模态时序预测。
- 相关性判断：最高。它是 `reasoner + forecaster` 双系统路线的代表作之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把时序任务形式化为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 构建实用 harness。
- 相关性判断：最高。对搭建可验证、可追踪的时间序列 Agent 平台非常关键。

### [2026-05-14] [Nexus : An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把预测拆成宏观波动、微观波动、上下文融合和最终综合四个阶段，强调“真实世界 forecasting 是一个 agentic reasoning 问题”。
- 相关性判断：高。它比单一 forecaster 更明确地把时序预测重构为多阶段代理工作流。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 与 `ReasonCast` recipe，让模型在同一自回归生成里同时输出 forecast 与 reasoning chain。
- 相关性判断：最高。它直接命中“时间序列 reasoning 模型”这个主题本身。

### [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2608.00200)
- 简短摘要：先做 attribution 找关键时空片段，再构造带显式证据出处的推理轨迹，让模型联合输出活动识别与可追踪 reasoning。
- 相关性判断：高。它更偏 wearable sensor understanding，但在“如何让时序 reasoning 可验证”上很重要。

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：`ClinPRISM` 用 irregularity-aware encoder、temporal evidence distiller 和 progressive alignment 处理不规则临床时序问答。
- 相关性判断：最高。它是近窗内最明确的 `irregular time-series QA + multimodal reasoning` 新条目之一。

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880) / [HuggingFace](https://huggingface.co/datasets/winall/CLIR-Bench)
- 简短摘要：构建 `6,600` 个 irregular clinical time-series QA 实例，给出显式 temporal evidence 与 task-specific derivation rules。
- 相关性判断：高。它更偏 benchmark，但对评估时序 reasoning 是否真的 grounded 很有价值。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把时间序列 reasoning 里的“选文本还是图像模式、选哪种模型、如何平衡效果与成本”写成异构图上的动态路由问题。
- 相关性判断：最高。它基本是时序 reasoning runtime router 的原型。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` 多模态 benchmark 与 `TSAlign` 框架，把时序 reasoning 从 pattern recognition 推向 decoding、grounding、inferring、acting 等更认知式任务。
- 相关性判断：最高。它扩展了“时间序列 reasoning”问题定义，而不只是做 forecast explanation。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 和 hybrid 三类时间序列分析方式，发现代码执行显著有帮助，但统计验证和细粒度理解仍有短板。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否真的会做时间序列推理”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时间序列 reasoning benchmark，覆盖 `240` 个任务和 `2,680` 个对话轮次，集中暴露 memory、uncertainty handling 与 decision-making 弱点。
- 相关性判断：最高。它是当前最贴近多轮 agentic reasoning 评测底座的工作之一。

## 4. GitHub 上值得跟踪的最新项目

> 说明：本栏优先保留与 `timeseries agent / harness / machine learning / AutoML / photovoltaic forecasting` 直接相关、且可由 GitHub API 确认日期的项目。

### 4.1 时间序列

#### [2026-08-05] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-07-14）
- 来源：[GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：围绕 `recursive interaction + code execution + anomaly localization` 的长上下文时序代理式框架，仍在持续更新。
- 相关性判断：最高。它是当前最值得持续跟踪的 `time-series tool-using agent` 项目之一。

#### [2026-08-05] [jhondados/time-series-forecasting-platform](https://github.com/jhondados/time-series-forecasting-platform)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-06-08）
- 来源：[GitHub 仓库](https://github.com/jhondados/time-series-forecasting-platform)
- 简短摘要：面向大规模序列的时序预测平台，把 `AutoML + custom forecasting + hierarchical reconciliation + uncertainty quantification` 放进同一工程栈。
- 相关性判断：高。它偏工程平台，但与 `time series + AutoML + large-scale deployment` 的交集明确。

#### [2026-08-05] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-07-08）
- 来源：[GitHub 仓库](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：把数据上传、建模、可视化和部署串成轻量时序 AutoML 脚手架。
- 相关性判断：高。工程深度有限，但与 `time series + AutoML` 主题直接相关。

#### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 论文官方代码仓库，围绕 `Fast-Slow-Reflect` forecasting agent 流程组织。
- 相关性判断：最高。它是近窗内最值得跟踪的新建 forecasting agent 仓库之一。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 anomaly detection、changepoint、decomposition、trend tests 和 data-quality auditing 的 deterministic MCP tools。
- 相关性判断：最高。它非常贴近时间序列 Agent 的标准工具层。

#### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08（GitHub API `created_at`；活跃到 2026-07-13）
- 来源：[GitHub 仓库](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码仓库，关注 reasoning runtime 中的动态 modality-model routing。
- 相关性判断：最高。它可直接支撑后续时序 reasoning runtime 实验。

#### [2026-06-27] [MarkAntonyRajS/ChronoSight-AI](https://github.com/MarkAntonyRajS/ChronoSight-AI)

- 日期：2026-06-27（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/MarkAntonyRajS/ChronoSight-AI)
- 简短摘要：把数据审计、统计检验、AutoML 建模、时间序列预测和 LLM 报告串成自治分析平台。
- 相关性判断：高。它比单一预测仓库更接近 `time series + AutoML + analytics agent` 的完整产品形态。

#### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：把 synthetic / CSV forecasting benchmark、baseline、实验和报告放进同一条本地代理循环里。
- 相关性判断：高。它更偏实验代理与基准自动化，但与 `timeseries agent + harness + ML engineering` 的交集明确。

### 4.2 光伏功率预测

#### [2026-08-11] [Shivam4905/pv-dimensionality-reduction](https://github.com/Shivam4905/pv-dimensionality-reduction)

- 日期：2026-08-11（GitHub API `pushed_at`；仓库创建于 2026-07-30）
- 来源：[GitHub 仓库](https://github.com/Shivam4905/pv-dimensionality-reduction)
- 简短摘要：围绕 lagged production data 的特征压缩与轻量预测流程持续迭代，今天仍有更新。
- 相关性判断：中高。它更偏单点工程实验，但胜在活跃且贴近 PV forecasting pipeline。

#### [2026-08-06] [Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)

- 日期：2026-08-06（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)
- 简短摘要：围绕真实运行数据构建 day-ahead PV forecasting 工程仓库，强调 physics-driven 与 data-driven 组合。
- 相关性判断：高。它不是 Agent 平台，但与光伏预测主线直接相关。

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：构建跨气候带的光伏功率预测 benchmark，强调统一协议、公开基线与跨区域可比性。
- 相关性判断：高。它更像数据与评测基座，但对后续 PV forecasting agent / AutoML 实验很有用。

#### [2026-08-03] [Jouqio/climate-aware-pv-forecasting](https://github.com/Jouqio/climate-aware-pv-forecasting)

- 日期：2026-08-03（GitHub API `pushed_at`；仓库创建于 2026-05-28）
- 来源：[GitHub 仓库](https://github.com/Jouqio/climate-aware-pv-forecasting)
- 简短摘要：提供可复现的光伏预测框架，突出 climate-aware validation 与 leakage 检查。
- 相关性判断：高。它虽然不是 Agent 系统，但对构建更可靠的 PV forecasting benchmark 和 AutoML 流程很有价值。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：面向英国真实充电站场景，用 physics-aware stacking 把时间对齐修正、泄漏安全 solar-geometry 特征、短期大气上下文和集成模型串成部署导向的 day-ahead PV forecasting pipeline。
- 相关性判断：最高。它最接近“可落地 PV forecasting 工程链路”，也与决策支持系统直接相连。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对冷启动光伏站点，先用 plant metadata 与气象协变量生成 synthetic production history，再让多种 `TSFM` 在 inference-time conditioning 下做零样本预测。
- 相关性判断：最高。它直接把 `TSFM` 引入 `cold-start PV forecasting`，与本仓库主题交集很强。

### [2026-05-27] [Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting](https://arxiv.org/abs/2605.28324)

- 日期：2026-05-27
- 来源：[arXiv](https://arxiv.org/abs/2605.28324)
- 简短摘要：把多变量太阳能功率预测改写成条件扩散的 inpainting 问题，把未来时刻视为待重建区域，并在 `GEFCom2014` 等基准上验证短期预测精度。
- 相关性判断：高。它虽不专属 `PV` 单任务系统，但在光伏短期预测里提供了较新的一类生成式建模路线。

## 6. DailyArXiv 补检结论

- 本次核对的公开仓库为 [zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv)，默认分支为 `master`，`README.md` 中 `Last update` 为 `2026-08-11`。
- `Time Series` 板块里与本期主题直接相关且在三个月窗口内的条目包括：
  - [`KReF`](https://arxiv.org/abs/2608.06748)（2026-08-07）
  - [`TS-RAG`](https://arxiv.org/abs/2608.06223)（2026-08-06）
  - [`Align-RAG`](https://arxiv.org/abs/2608.05571)（2026-08-06）
  - [`TimeRLM`](https://arxiv.org/abs/2608.03391)（2026-08-04）
  - [`CastFSR`](https://arxiv.org/abs/2608.03031)（2026-08-04）
  - [`ReasonCast`](https://arxiv.org/abs/2608.01875)（2026-08-03）
- 其中，`TS-RAG`、`Align-RAG`、`TimeRLM`、`CastFSR`、`ReasonCast` 已纳入正文高优先级；`KReF` 虽在窗口内，但更偏 `training-free retrieval + predictive uncertainty`，与 `Agent / reasoning / foundation model` 三条主线的直接耦合略弱，因此降为次级跟踪线索。
- 本次未发现 `DailyArXiv` 标注日期与 arXiv `published` 日期冲突的情况。
- `TimeClaw`、`AION`、`KairosAgent`、`Nexus` 等本期正文条目未在当前 `DailyArXiv` README 的 `Time Series` 最近列表中直接出现，推测主要因为该列表只保留近期关键词命中，并不意味着这些论文不相关。

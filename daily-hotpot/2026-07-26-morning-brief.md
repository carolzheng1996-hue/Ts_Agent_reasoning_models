# 2026-07-26 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-26 16:00 CST，Asia/Shanghai  
时间窗口：2026-04-26 至 2026-07-26  
优先来源：arXiv、OpenReview、官方项目页、GitHub 官方仓库页 / GitHub API、`DailyArXiv` GitHub README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`time-series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-07-26`，过去 48 小时没有检出比 `2026-07-22` 那批更近、且与 `TS foundation model / time-series reasoning / time-series agent` 更相关的新论文；学术主线仍由 `Post-Training in Time Series Foundation Models`、`Expert-Guided Forecast Editing`、`TSRouter`、`KairosAgent`、`TimeClaw` 等条目主导。
- 基础模型方向的近窗增量仍集中在 `post-training / deployment routing / context diagnosis / frozen-model adaptation`，说明研究重点正在从“继续做更大的底座”转向“如何可靠落地和被 agent 编排”。
- 时间序列 Agent 方向今天没有出现比 `TopoBrick`、`DeXposure-Claw`、`TimeRouter`、`TimeClaw`、`AION` 更系统的新论文，但 GitHub 侧出现了当日新仓库 [`inContextML`](https://github.com/sureshkvn/inContextML)，显示 `MCP + forecasting` 工具层仍在快速冒头。
- reasoning 主线依旧是 `router + benchmark + verifier + tool-grounded reasoning`：`TSRouter`、`CLIR-Bench`、`TSCognition`、`Can LLM Coding Agents Reason About Time Series?`、`IRTS-ToolBench` 与 `TS-Skill` 形成了从路由到诊断的连续链条。
- 光伏 / 光功率预测方向过去三个月的最强主线仍是 `PARA-PV` 和 `physics-informed synthetic histories for cold-start PV`；它们都明显靠近 `frozen TSFM + retrieval / physics prior / shift correction` 这一路线。

## 0. 检索说明

- 仅保留 `2026-04-26` 至 `2026-07-26` 三个月窗口内的条目。
- 论文日期优先采用 arXiv `published` 日期；OpenReview 条目采用页面可见发表日期；GitHub 项目日期优先采用 GitHub API `created_at`。
- 如果 GitHub / 聚合页描述与论文原始发布日期不一致，正文排序以原始论文或仓库元数据为准，并在 `DailyArXiv` 补检结论中说明。
- 今天不是周五，因此本次不生成周报。

## 1. 时间序列基础模型最新研究

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 的五类干预位点，包括参数适配、上下文增强、模型组合、输出处理与不确定性控制、以及压缩与专门化，把研究焦点从“有没有通用底座”推进到“如何可靠下游化”。
- 相关性判断：最高。它直接对应 `foundation model -> agent runtime -> deployment policy` 这条路线。

### [2026-07-22] [Expert-Guided Forecast Editing for Time-Series Foundation Models](https://arxiv.org/abs/2607.19659)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.19659)
- 简短摘要：提出 `DEFT`，在冻结 TSFM 的前提下，用稀疏专家反馈对预测轨迹做 trend-seasonal 分解后的结构化编辑，兼顾先验 exploitation 和 test-time exploration。
- 相关性判断：高。它很接近未来时序 Agent 的 `human / simulator feedback -> forecast refinement` 工作流。

### [2026-07-22] [Zero-Shot Heart Rate Variability Forecasting from Consumer Wearables Using Time Series Foundation Models](https://arxiv.org/abs/2607.20027)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20027)
- 简短摘要：比较 `TimesFM`、`Chronos`、`MOIRAI` 在碎片化可穿戴 HRV 数据上的零样本表现，并通过保留变异性的插值方案缓解真实世界缺测。
- 相关性判断：中。更偏应用评测，但说明 TSFM 已开始进入高噪声、非规则的真实消费级时序场景。

### [2026-07-20] [Towards Reliable Zero-Shot Crowd Forecasting: Evaluating Time Series Foundation Models for Special Event Pedestrian Forecasting](https://arxiv.org/abs/2607.17758)

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17758)
- 简短摘要：系统评估 TSFM 在特殊事件人流预测中的零样本概率预测能力，强调尾部风险、不确定性和运营可靠性边界。
- 相关性判断：高。它回答的是 `Agent 何时敢信任 frozen TSFM`。

### [2026-07-20] [Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting](https://arxiv.org/abs/2607.17511)

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17511)
- 简短摘要：提出无需接触 backbone 权重的 inference-time wrapper，用多分辨率 residual 与 bootstrap 组合增强 frozen TSFM 在区域干旱预测上的适配能力。
- 相关性判断：高。代表 `frozen TSFM + cheap adapter` 的实用部署路线。

### [2026-07-14] [The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting](https://arxiv.org/abs/2607.13006)

- 日期：2026-07-14（v2 更新于 2026-07-15）
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出频谱可预测性指标并不能回答“长上下文、检索或 TSFM 是否值得加”，并提出更适合部署决策的 `coverage deficit` 诊断。
- 相关性判断：最高。非常适合转化成时序 Agent 的 `router / retrieval gate / model selector`。

### [2026-07-07] [RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models](https://arxiv.org/abs/2607.06504)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建大规模真实多变量时序语料，并比较真实语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：高。它直接关系到 `时序 foundation model 的数据配方`。

### [2026-07-06] [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919)
- 简短摘要：从样本规模、季节性和推理成本角度给出 pretrained forecaster 的 break-even 规则，并指出 LoRA 微调在短序列上可能反而伤性能。
- 相关性判断：最高。几乎可以直接转化为时序 Agent 的模型路由与成本控制规则。

### [2026-05-23] [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：在周期性业务、物理约束系统、金融市场和异质需求等 regime 下比较 TSFM 与 specialist，并提出 `Complexity Router` 做精度与成本权衡。
- 相关性判断：最高。它对 `TSFM 什么时候该上生产、什么时候该回退专用模型` 给出了非常直接的经验法则。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用楼宇知识图谱与 `agentic topology sampler` 在部署时选择目标相关的外生变量，不依赖训练即可做零样本 IoT 预测。
- 相关性判断：高。它把 agentic selection 真正带入时序部署流程，而不是停留在分析助手层。

### [2026-06-17] [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)

- 日期：2026-06-17（v2 更新于 2026-06-29）
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测暴露网络，再结合 deterministic monitor、stress scenario 与 confidence gate，最后输出可审计监管票据。
- 相关性判断：高。更偏垂直行业，但展示了 `TSFM + monitor + action gate` 的成品形态。

### [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625) / [GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：用轻量 discriminative router、selective gate 和 ensemble fallback 在多个 TSFM 之间做专家选择，避免每次都依赖高成本控制器。
- 相关性判断：高。它更像时序 Agent 的 `runtime sidecar`，但非常适合作为基础部件接入完整系统。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，将 temporal tools、经验复用、episodic multimodal memory 和 time-series-native runtime 组织进统一 harness。
- 相关性判断：最高。它仍是时间序列 harness / tools / memory 设计里最值得参考的公开方案之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：显式拆分 `semantic reasoner` 与 `TSFM forecaster`，把外部语义上下文和数值预测过程解耦再融合，并用多轮轨迹强化 reasoning。
- 相关性判断：最高。它是 `LLM reasoning + TSFM forecasting` 融合最清晰的代表工作之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：围绕 `task file + workspace + validation interface` 组织时间序列 Agent 的任务协议、memory、rules、evaluation 和 reliability 机制。
- 相关性判断：最高。若目标是搭建可复用的时间序列 Agent 平台，它仍是近窗里最系统的公开蓝图。

### [2026-05-14] [Nexus : An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：用多角色 agent 分解 forecasting 任务，把宏观波动、微观波动、上下文事件和最终预测整合为协作流程。
- 相关性判断：高。它比 `AION / TimeClaw` 更偏 forecasting 专用，但非常贴合 `reasoning-driven forecasting` 主线。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880) / [Hugging Face 数据集](https://huggingface.co/datasets/winall/CLIR-Bench)
- 简短摘要：为稀疏、异步、不规则的临床时间序列构建多模态 QA benchmark，把时间证据与答案验证更紧地绑定。
- 相关性判断：高。它把 `irregular TS + verifiable evidence` 拉成独立主线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09（v2 更新于 2026-07-18）
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将 time-series reasoning 中“文本模式 LLM 还是图像模式 VLM、更贵还是更便宜模型”的选择形式化为异构图路由问题。
- 相关性判断：最高。它几乎就是未来时序 Agent runtime router 的直接原型。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition`，把时序 reasoning 拆成 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知技能，并用 `TSAlign` 做统一对齐。
- 相关性判断：最高。它是近三个月最像“总纲”的时间序列 reasoning 论文之一。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent 与两者结合的时序问答路径，发现代码执行虽有增益，但仍大量暴露统计假设、验证逻辑与错误归因缺口。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经可靠掌握时序 reasoning”。

### [2026-06-13] [Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning](https://arxiv.org/abs/2606.15107)

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：构建 `IRTS-ToolBench`，把 verifier、tool use 和不规则采样 TSQA 绑定为可复现实验协议。
- 相关性判断：高。很适合作为 irregular time-series QA 的 verifier 基座。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序推理 benchmark，专门暴露记忆、证据积累、不确定性表达和多步分析链的问题。
- 相关性判断：高。它比单轮 TSQA 更接近 analyst / agent 的真实工作流。

### [2026-05-23] [TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering](https://arxiv.org/abs/2605.24703)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：把 TSQA 能力拆成 `时间尺度选择`、`时间定位`、`跨区间整合` 三类技能，并通过 `SKEvol` agentic pipeline 自动构造带时间戳证据的问题。
- 相关性判断：高。它对 `skill-level evaluation` 和 reasoning 失效诊断很有价值。

### [2026-04-30] [Adaptive Time Series Reasoning via Segment Selection](https://openreview.net/forum?id=yzBbBPheg7)

- 日期：2026-04-30
- 来源：[OpenReview / ICML 2026](https://openreview.net/forum?id=yzBbBPheg7)
- 简短摘要：提出 `ARTIST`，用 controller-reasoner 结构和强化学习做自适应片段选择，让模型先决定看哪里，再决定如何回答。
- 相关性判断：最高。它把“先定位证据，再推理”清楚做成了可训练 runtime。

## 4. 光功率 / 光伏功率预测最新研究

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：分析数值天气预报误差如何沿时空结构传导到 PV 预测误差，并用 SHAP、积分梯度和 Pareto 分析讨论鲁棒性、延迟与物理可解释性平衡。
- 相关性判断：高。它提醒光伏 Agent 不只要会 forecast，还要会识别上游气象输入失真。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结 TSFM 先验、residual adapter 和 shift correction 串成统一 PV forecasting pipeline。
- 相关性判断：最高。它是当前 `TSFM + retrieval + physics constraints + drift correction` 光伏主线的最完整代表。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为冷启动场站构造 physics-informed synthetic histories，使 TSFM 在目标站点几乎无历史观测时也能通过推理期 conditioning 保持可用预测。
- 相关性判断：高。它直接回答“新站点刚上线时 TSFM 还能不能用”。

## 5. GitHub 上值得跟踪的新项目

### [2026-07-26] [sureshkvn/inContextML](https://github.com/sureshkvn/inContextML)

- 日期：2026-07-26（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/sureshkvn/inContextML)
- 简短摘要：把 in-context forecasting、回归预测和 mock classifier 打包成一个 MCP server，面向 agent 直接暴露时序预测工具。
- 相关性判断：中高。仓库很新、成熟度未知，但它直接踩中 `MCP + forecasting timeseries` 的工具层方向。

### [2026-07-18] [Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting](https://github.com/Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting)

- 日期：2026-07-18（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting)
- 简短摘要：围绕 `TSFM vs. efficient specialist` 做成本感知评测，仓库中同时提供 harness、统计检验、图表和复现实验包。
- 相关性判断：中高。它不是 Agent 框架，但很适合给时序 Agent 的 `model-routing cost policy` 提供参考基线。

### [2026-07-11] [Lkhanaajav/mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)

- 日期：2026-07-11（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：为 tool-using agents 提供 trajectory-level eval harness，显式评分工具选择、参数、grounding 和效率，并支持 CI regression gate。
- 相关性判断：最高。它补上了时序 Agent 非常缺的 `trajectory regression / verifier / CI gate` 基础设施。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：面向 AI agents 的 deterministic time-series MCP 工具层，覆盖异常检测、变点、分解、趋势检验和数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定统计工具层”的实用形态。

### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方实现，公开了 retrieval、frozen TSFM prior 和 shift-correction 的光伏流水线代码。
- 相关性判断：高。它是光伏功率预测垂直方向最贴近当前主线的公开代码。

### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方实现，聚焦在 time-series reasoning 中动态选择 `modality-model pair`，兼顾性能与推理成本。
- 相关性判断：最高。它是当前最值得跟踪的 `reasoning router` 开源仓库之一。

### [2026-07-01] [tachyurgy/observability-assistant](https://github.com/tachyurgy/observability-assistant)

- 日期：2026-07-01（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/tachyurgy/observability-assistant)
- 简短摘要：提供一个零依赖 TypeScript agent demo，用异常检测、时序因果优先级与 abstain gate 回答 “why did p95 spike?”。
- 相关性判断：中高。更偏 observability demo，但非常贴近时序 reasoning agent 的真实应用外形。

### [2026-06-20] [chuan77/advanced_automl](https://github.com/chuan77/advanced_automl)

- 日期：2026-06-20（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/chuan77/advanced_automl)
- 简短摘要：面向 tabular 与 time-series 的生产化 AutoML 框架，强调 leakage-safe validation、adaptive pipeline 与 robust model selection。
- 相关性判断：中。它不是 agent-first 设计，但可作为 `time-series AutoML` 工具层的轻量跟踪对象。

## 6. DailyArXiv 补检结论

- 核查对象：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv)
- 当前可见结论：`DailyArXiv` 的 README 最新更新停留在 `2026-05-27`，因此它没有覆盖今天简报中的 7 月新论文，也无法替代原始论文源做近窗增量发现。
- 在其 `Time Series` 条目中，窗口内且与本主题直接相关的高优先级论文是 [`Assessing the Operational Viability of Foundation Models for Time Series Forecasting`](https://arxiv.org/abs/2605.24381)，已纳入正文基础模型部分。
- 同一 README 中还能看到 [`HEPA: Hierarchical Event Prediction for Real-world Time Series`](https://arxiv.org/abs/2505.17298) 这类窗口内时序论文，但它更偏事件预测，不直接落在 `Agent / reasoning / foundation model / 光伏功率预测` 主轴上，因此本次降优先级、不进正文主列表。
- 今天没有发现 `DailyArXiv` README 中对本次高优先级条目产生新的日期冲突；真正的问题是它更新滞后，导致 6 月下旬到 7 月的关键论文基本缺失。

## 7. 结论与跟踪建议

- 如果你的重点是 `可落地的时序 Agent 系统`，今天最值得继续盯的是：`TimeClaw`、`AION`、`TimeRouter`、`TSRouter`、`mcp-trajectory-evals`、`timeseries-mcp`。
- 如果你的重点是 `TSFM 如何进入生产`，最值得追的是：`Post-Training in Time Series Foundation Models`、`When Do Foundation Models Pay Off?`、`Assessing the Operational Viability...`、`The Spectrum Is Not Enough`。
- 如果你的重点是 `光伏/光功率预测`，则主线已经非常清晰：`PARA-PV` 与 `physics-informed synthetic histories for cold-start PV` 代表了 `frozen TSFM + retrieval / physics prior / shift correction` 的两种关键落地方向。

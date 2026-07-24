# 2026-07-24 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-24 15:36 CST，Asia/Shanghai  
时间窗口：2026-04-24 至 2026-07-24  
优先来源：arXiv、OpenReview、官方项目页、GitHub 官方仓库页 / GitHub API、NVIDIA Research、`DailyArXiv` 公开 README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`time-series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-07-24`，过去 24 小时没有检出比 `2026-07-22` 那组 TSFM 新作更强、且日期更近的论文主线；今天最值得保留的新增仍然是 [`Post-Training in Time Series Foundation Models`](https://arxiv.org/abs/2607.20002)、[`Expert-Guided Forecast Editing for Time-Series Foundation Models`](https://arxiv.org/abs/2607.19659) 和 [`Zero-Shot Heart Rate Variability Forecasting`](https://arxiv.org/abs/2607.20027)。
- 基础模型方向已经明显从“继续做更大的预训练 backbone”转向 `post-training / test-time editing / deployment diagnosis / routing`；`The Spectrum Is Not Enough`、`When Do Foundation Models Pay Off?` 与 `Assessing the Operational Viability` 这条线仍是时序 Agent 路由规则最值得参考的证据。
- 时间序列 Agent 主线本周没有出现比 `TimeClaw`、`AION`、`KairosAgent`、`TimeRouter` 更系统的新框架；增量主要在 `runtime sidecar`、`tool layer`、`trajectory eval` 与垂直场景化监督系统上。
- reasoning 主线仍由 `TSRouter`、`CLIR-Bench`、`TSCognition`、`Can LLM Coding Agents Reason About Time Series?`、`IRTS-ToolBench`、`TimeSage-MT` 和 `ARTIST` 这条 `router + benchmark + verifier + selective evidence` 链路主导。
- GitHub 侧当前最值得持续跟踪的项目不是又一个模型权重仓库，而是 `cost-aware-tsfm-forecasting`、`mcp-trajectory-evals`、`timeseries-mcp`、`forecast-playground`、`TSRouter`、`TimeRouter`、`PARA-PV`、`time-series-autoML` 这类 `时序工具层 + harness + router + 垂直 pipeline`。

## 0. 检索说明

- 仅保留 `2026-04-24` 至 `2026-07-24` 三个月窗口内的条目。
- 论文日期优先采用 arXiv 摘要页 `published` 日期；OpenReview 条目采用页面可见发表日期；GitHub 项目日期优先采用 GitHub API `created_at`。
- 若聚合页日期与原始论文提交日期不一致，正文排序一律以原始论文 / 官方仓库元数据为准，并在 `DailyArXiv` 补检结论中单独说明。
- 若找不到窗口内高相关新增，也保留“无更强新条目”的判断，不强行堆砌弱相关论文。

## 1. 时间序列基础模型最新研究

### [2026-07-22] Post-Training in Time Series Foundation Models: A Unifying Framework

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 的五类干预位点，包括参数适配、上下文增强、模型组合、输出处理与不确定性控制、以及压缩与专门化，把研究焦点从“有没有通用底座”推进到“如何可靠下游化”。
- 相关性判断：最高。它不是新 backbone，但对 `foundation model -> agent runtime -> deployment policy` 的研究路线判断最直接。

### [2026-07-22] Expert-Guided Forecast Editing for Time-Series Foundation Models

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.19659)
- 简短摘要：提出 `DEFT`，在冻结 TSFM 的前提下，用稀疏专家反馈对预测轨迹做 trend-seasonal 分解后的结构化编辑，避免 `best-of-N` 和纯黑盒优化各自的低效极端。
- 相关性判断：高。它很接近未来时序 Agent 的 `human / simulator feedback -> test-time refinement` 工作流。

### [2026-07-22] Zero-Shot Heart Rate Variability Forecasting from Consumer Wearables Using Time Series Foundation Models

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20027)
- 简短摘要：比较 `TimesFM`、`Chronos`、`MOIRAI` 在碎片化可穿戴 HRV 数据上的零样本表现，并通过保留变异性的插值方案降低真实世界缺测噪声。
- 相关性判断：中。更偏应用评测，但说明 TSFM 已开始被检验于高噪声、不规则的消费级健康时序。

### [2026-07-20] Towards Reliable Zero-Shot Crowd Forecasting: Evaluating Time Series Foundation Models for Special Event Pedestrian Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17758)
- 简短摘要：系统评估 TSFM 在特殊事件人流预测中的零样本概率预测能力，重点讨论不确定性、尾部风险与运营层面的可靠性边界。
- 相关性判断：高。偏评测，但对 `Agent 何时敢信任 frozen TSFM` 很关键。

### [2026-07-20] Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17511)
- 简短摘要：提出无需改动 backbone 权重的推理期 wrapper，用多分辨率 residual 与 moving-block bootstrap 组合增强 frozen TSFM 在区域干旱预测上的迁移能力。
- 相关性判断：高。它代表了 `frozen TSFM + cheap adapter` 的实用部署路线。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14（v2 更新于 2026-07-15）
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出频谱统计不足以决定是否应启用长上下文、检索或 TSFM，并提出更适合部署期诊断的 `coverage deficit` 视角。
- 相关性判断：最高。很适合转化成时序 Agent 的 `router / context gate / model selector`。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建大规模真实多变量时序语料，并比较真实语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：高。它直接关系到 `时序 foundation model 的数据配方`。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919)
- 简短摘要：从样本规模、季节性与推理成本的角度给出 pretrained forecaster 的 break-even 规则，说明何时 TSFM 比经典方法更值得部署。
- 相关性判断：最高。它几乎可以直接转化成时序 Agent 的模型路由和成本控制规则。

### [2026-05-23] Assessing the Operational Viability of Foundation Models for Time Series Forecasting

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：按周期性业务、物理约束系统、金融市场与异质需求等 operational regime 比较 TSFM 与 specialist，并提出 `Complexity Router` 做精度和成本权衡。
- 相关性判断：最高。它对 `TSFM 什么时候该上生产、什么时候该回退专用模型` 给出了最直接的经验法则。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用楼宇知识图谱与 `agentic topology sampler` 在部署时选择目标相关的外生变量，不依赖训练即可做零样本 IoT 预测。
- 相关性判断：高。它把 agentic selection 真正带进了时序部署流程，而不是只做分析助手。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17（v2 更新于 2026-06-29）
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测暴露网络，再结合 deterministic monitor、stress scenario 与 confidence gate 生成可审计监管票据。
- 相关性判断：高。更偏垂直行业，但它展示了 `TSFM + monitor + action gate` 的成品形态。

### [2026-06-10] TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625) / [GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：用轻量 discriminative router、selective gate 和 ensemble fallback 在多个 TSFM 之间做专家选择，避免每次都用 LLM 控制器做高成本模型编排。
- 相关性判断：高。它更像时序 Agent 的 `runtime sidecar`，而不是完整 Agent，但非常适合接在 `AION / TimeClaw` 这类系统后面。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，将 temporal tools、经验复用、episodic multimodal memory 和 time-series-native runtime 组织进同一系统。
- 相关性判断：最高。它仍是时间序列 harness / tools / memory 设计里最值得抄作业的公开方案之一。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：显式拆分 `semantic reasoner` 与 `TSFM forecaster`，把外部语义上下文和数值预测过程解耦再融合。
- 相关性判断：最高。它是 `LLM reasoning + TSFM forecasting` 融合最清晰的代表工作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：围绕 `task file + workspace + validation interface` 组织 agent benchmark 与运行时协议，把 agents、skills、rules、memory、evaluation、protocols 连成完整 harness。
- 相关性判断：最高。若目标是搭建可复用的时间序列 Agent 平台，它仍是近窗里最系统的公开蓝图。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：用多角色 agent 分解 forecasting 任务，把宏观波动、微观波动、上下文事件和最终预测整合为协作流程。
- 相关性判断：高。它比 `AION / TimeClaw` 更像面向 forecasting 的专用 agent pipeline。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：为不规则、稀疏、异步的临床时间序列构建多模态 QA benchmark，把时间证据与答案验证更紧地绑定。
- 相关性判断：高。它把 `irregular TS + verifiable evidence` 拉成独立主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09（v2 更新于 2026-07-18）
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将 time-series reasoning 中“文本模式 LLM 还是图像模式 VLM、更贵还是更便宜模型”形式化为异构图路由问题。
- 相关性判断：最高。它几乎就是未来时序 Agent runtime router 的直接原型。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition`，把时序 reasoning 能力拆成 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知技能，并配套 `TSAlign` 方法。
- 相关性判断：最高。它是近三个月最像“总纲”的时间序列 reasoning 论文之一。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent 与两者结合的时序问答路径，结果表明代码执行本身并不能自动解决统计假设、验证逻辑与错误归因问题。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经可靠掌握时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107)
- 简短摘要：构建 `IRTS-ToolBench`，把 verifier、tool use 和不规则采样 TSQA 绑定成可复现实验协议。
- 相关性判断：高。它很适合作为 irregular time-series QA 的 verifier 基座。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序推理 benchmark，专门暴露记忆、证据积累、不确定性表达和多步分析链的问题。
- 相关性判断：高。它比单轮 TSQA 更接近 analyst / agent 的真实工作流。

### [2026-05-23] TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：把 TSQA 能力拆成 `时间尺度选择`、`时间定位`、`跨区间整合` 三类技能，并通过 `SKEvol` agentic pipeline 自动构造带时间戳证据的问题。
- 相关性判断：高。它对 `skill-level evaluation` 很有价值，尤其适合拿来做 reasoning 失效诊断。

### [2026-05-09] Reasoning-Aware Training for Time Series Forecasting

- 日期：2026-05-09
- 来源：[arXiv](https://arxiv.org/abs/2605.08625)
- 简短摘要：提出 `STRIDE`，把蒸馏后的 reasoning trace 连续投影到 TSFM 的数值表征空间，在不依赖离散 token 的前提下给 forecasting 注入可解释语义先验。
- 相关性判断：中高。它更偏 forecasting enhancement，但它是“reasoning 如何进入 TSFM”这一问题的直接尝试。

### [2026-04-30] Adaptive Time Series Reasoning via Segment Selection

- 日期：2026-04-30
- 来源：[OpenReview / ICML 2026](https://openreview.net/forum?id=yzBbBPheg7)
- 简短摘要：提出 `ARTIST`，用 controller-reasoner 结构和强化学习做自适应片段选择，让模型先决定看哪里，再决定如何回答。
- 相关性判断：最高。它把“先定位证据，再推理”清楚做成了可训练 runtime。

## 4. 光功率 / 光伏功率预测最新研究

### [2026-07-14] Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：分析数值天气预报误差如何沿时空结构传导到 PV 预测误差，并通过 SHAP、积分梯度与 Pareto 分析讨论鲁棒性、延迟和物理可解释性之间的平衡。
- 相关性判断：高。它提醒光伏 Agent 不只要会 forecast，还要会识别上游气象输入失真。

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结 TSFM 先验和 shift correction 串成统一 PV forecasting pipeline。
- 相关性判断：最高。它是当前 `TSFM + retrieval + physics constraints + drift correction` 光伏主线的最完整代表。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为冷启动场站构造 physics-informed synthetic histories，帮助 TSFM 在几乎无历史观测时保持可用预测能力。
- 相关性判断：高。它直接回答“新站点刚上线时 TSFM 还能不能用”。

## 5. GitHub 上值得跟踪的新项目

### [2026-07-18] Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting

- 日期：2026-07-18（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting)
- 简短摘要：围绕 `TSFM vs. efficient specialist` 做成本感知评测，仓库里同时放了 harness、统计检验、图表和复现实验包。
- 相关性判断：中高。它不是 Agent 框架，但很适合拿来给时序 Agent 的 `model-routing cost policy` 做参考基线。

### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：为 tool-using agents 提供 trajectory-level eval harness，显式评分工具选择、参数、grounding、效率，并可做 CI regression gate。
- 相关性判断：最高。它补上了时序 Agent 最缺的 `trajectory regression / verifier / CI gate` 基础设施。

### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：面向 AI agents 的 deterministic time-series MCP 工具层，覆盖异常检测、变点、分解、趋势检验和数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定统计工具层”的实用形态。

### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方实现，公开了 retrieval、frozen TSFM prior 和 shift-correction 的光伏流水线代码。
- 相关性判断：高。它是光伏功率预测垂直方向最贴近当前主线的公开代码。

### [2026-07-08] tianyi-lab/TSRouter

- 日期：2026-07-08（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码仓库，公开时序 reasoning 中的 modality-model routing 实现。
- 相关性判断：高。它把 reasoning router 从论文推进到了可复现代码。

### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub 仓库创建时间；窗口内仍有代码更新）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：一个面向时序任务的轻量 AutoML scaffold，主题贴近 `forecasting workflow + quick experimentation`。
- 相关性判断：中。工程成熟度仍弱于工具层仓库，但贴合 `time-series + AutoML` 关键词。

### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：为 AI forecasting 提供 leak-free as-of retrieval tools 与 playground，强调 time-masked retrieval 和评测 scaffold。
- 相关性判断：高。适合作为 `forecasting harness + as-of tool` 的简洁参考实现。

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 官方仓库，包含 time-series-native runtime、工具调用和记忆模块的实现。
- 相关性判断：最高。它是时序 Agent runtime 与多模态 memory 的一手代码来源。

### [2026-05-24] rnop/numerai-mcp-autoresearch

- 日期：2026-05-24（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/rnop/numerai-mcp-autoresearch)
- 简短摘要：面向 Numerai 的 agentic research harness，把 Bayesian optimization、time-series CV、MCP server 和自动重训提交流程串起来。
- 相关性判断：中高。虽偏金融竞赛，但它是 `autonomous experimentation + weekly retraining loop` 的可运行样板。

### [2026-05-19] UConn-DSIS/TimeRouter

- 日期：2026-05-19（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：`TimeRouter` 官方实现，提供多个 TSFM 间的轻量专家路由与选择机制。
- 相关性判断：中高。它对多 TSFM 池化和低成本 runtime router 很实用。

## 6. DailyArXiv 补检结论

- 来源核查：[`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv) 当前公开页显示 `Last update: 2026-07-24`，可作为 `Time Series` 关键词下的新标题补检入口，但不能替代独立检索。
- 窗口内且直接相关、已补入正文的条目：
  - [`Post-Training in Time Series Foundation Models`](https://arxiv.org/abs/2607.20002)；README 日期 `2026-07-22`，与 arXiv 原始日期一致。
  - [`Expert-Guided Forecast Editing for Time-Series Foundation Models`](https://arxiv.org/abs/2607.19659)；README 日期 `2026-07-22`，与 arXiv 原始日期一致。
  - [`Towards Reliable Zero-Shot Crowd Forecasting`](https://arxiv.org/abs/2607.17758)；README 日期 `2026-07-20`，与 arXiv 原始日期一致。
  - [`Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting`](https://arxiv.org/abs/2607.17511)；README 日期 `2026-07-20`，与 arXiv 原始日期一致。
  - [`Residual-Guided Multi-Resolution Refinement of Foundation Models`](https://arxiv.org/abs/2607.17507)；README 日期 `2026-07-20`，与 arXiv 原始日期一致。
  - [`TSRouter`](https://arxiv.org/abs/2607.08940)；README 记录为 `2026-07-18`，但原始 arXiv 首次提交日期为 `2026-07-09`，README 显然采用了修订版更新时间；正文已按原始提交日期排序。
- 相关但降优先级或不纳入正文的条目：
  - [`Adaptive Time Series Reasoning via Segment Selection`](https://openreview.net/forum?id=yzBbBPheg7) 在 README 中显示为 `2026-07-16`，但原始 arXiv 首次提交日期为 `2026-02-20`，超出当前三个月窗口；因此只保留为“README 日期与原始日期不一致”的补检案例，不按新论文处理。
- `DailyArXiv` 当前 `Time Series` 板块没有完整覆盖 `TimeClaw`、`AION`、`KairosAgent`、`TimeSage-MT`、`TS-Skill`、`PARA-PV`、`Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting` 等高相关主题，因此后续仍需并行依赖 arXiv、官方项目页和 GitHub API。

# 2026-07-20 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-20 08:40-09:02 Asia/Shanghai  
时间窗口：2026-04-20 至 2026-07-20  
优先来源：arXiv 摘要页、官方项目页、GitHub 官方仓库页 / GitHub REST API、HuggingFace 官方 API、公开可访问的 `DailyArXiv` README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`、`solar power forecasting`

## 今日摘要

- 今天最值得补进主线的新论文是 `2026-07-16` 的 [VLT](https://arxiv.org/abs/2607.14510)。它把 `time series + frequency spectrum + text` 三模态明确收束到同一个 foundation model 里，说明 TSFM 正在向工业多模态场景外扩。
- `The Spectrum Is Not Enough`、`Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection` 和 `Bet on Features` 这组三篇新作继续强化一个判断：时间序列 foundation model 的真正门槛已经不只是“精度更高”，而是 `何时值得启用 / 怎样持续审计 / 何时会失效`。
- Agent 方向没有出现比 `TimeClaw / KairosAgent / AION` 更完整的新平台型工作，但 `TopoBrick` 和 `Neuro-Agentic Control` 把 `部署时外生变量选择` 与 `foundation-model-backed safety loop` 两条更工程化的路线补得更清楚。
- Reasoning 方向仍以 `TSRouter + CLIR-Bench + TSCognition + TimeSage-MT + IRTS-ToolBench` 为骨架；最近一周的新意主要在 `router / benchmark / verifier`，而不是出现单点碾压的新模型。
- GitHub / HuggingFace 侧，本轮最值得跟踪的新项目集中在 `agent tools + eval harness + AutoML scaffold + 光伏专用适配`：`blf-forecaster`、`timeseries-mcp`、`mcp-trajectory-evals`、`time-series-autoML`、`TSAD-Agent`、`forecast-playground`、`PARA-PV` 与 HuggingFace 上的 `chronos2-volta-solar-daily`。

## 0. 检索结论

- 本轮优先采用可直接确认日期的一手页面：
  - arXiv 摘要页的 `published` 日期。
  - GitHub REST API 的 `created_at`、`updated_at`、仓库描述与 topics。
  - HuggingFace API 的 `createdAt`、`lastModified` 与 model tags。
  - [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 当前公开页。
- 本轮未纳入主条目的内容：
  - 只能搜到二手转述、无法回到原始论文页确认日期的条目。
  - GitHub / HuggingFace 上日期可见，但更像课程作业、个人 demo 或研究含量偏轻的项目。
  - 超出时间窗口的相关条目，即使最近有 `v2/v3` 更新，也只在 `DailyArXiv` 补检结论中说明，不进入主排序。
- 总判断：截至 `2026-07-20`，过去三个月最值得持续跟踪的五条线仍然是：
  - `TSFM 的部署决策、失效边界与在线审计`；
  - `时间序列 Agent 的 runtime / memory / tool use / review harness`；
  - `时间序列 reasoning 的 router、benchmark、verifier 与多轮对话能力`；
  - `GitHub 上围绕 forecasting harness、trajectory eval、deterministic time-series tools、AutoML scaffold 的轻量工程实现`；
  - `光伏预测中 foundation model 与 retrieval、physics constraints、distribution-shift correction、cold-start prior 的结合`。

### DailyArXiv 补检结论

- 已直接核验公开可访问的 [`DailyArXiv` README 页面](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)，页面当前显示 `Last update: 2026-07-20`。
- `Time Series` 板块中，近三个月窗口内且与本次主题直接相关的条目包括：
  - `2026-07-16` [VLT](https://arxiv.org/abs/2607.14510v1)
  - `2026-07-15` [The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006v2)
  - `2026-07-14` [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454v1)
  - `2026-07-10` [Neuro-Agentic Control](https://arxiv.org/abs/2607.09076v1)
  - `2026-07-10` [CITRAS-FM](https://arxiv.org/abs/2606.10798v2)
  - `2026-07-09` [TSRouter](https://arxiv.org/abs/2607.08940v1)
- 相关但不进入主条目的 `DailyArXiv` 条目：
  - [Adaptive Time Series Reasoning via Segment Selection](https://arxiv.org/abs/2602.18645v3) 在 README 中显示日期为 `2026-07-16`，但 arXiv 编号为 `2602.*`，首发早于 `2026-04-20` 时间窗；因此只保留为补检备注，降优先级处理。
  - [The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006v2) 在 `DailyArXiv` 中记录为 `2026-07-15`，正文仍按原始 arXiv `published` 日期 `2026-07-14` 排序。
- 结论：`DailyArXiv` 这轮对 `TSFM / reasoning` 的覆盖明显有用，但对 `AION`、`TimeClaw`、`KairosAgent`、`IRTS-ToolBench` 等平台或 benchmark 型工作仍需独立补检。

## 1. 时间序列基础模型最新研究

### [2026-07-16] VLT: A Vision-Language-Time Series Multimodal Foundation Model for Industrial Intelligence

- 日期：2026-07-16
- 来源：[arXiv](https://arxiv.org/abs/2607.14510)
- 简短摘要：提出将时间序列、频谱图像和文本知识联合建模的多模态 foundation model，用 `Time-MoE` 与频谱-文本对齐机制提升工业少样本、噪声和模态缺失场景下的稳健性。
- 相关性判断：高。它把 TSFM 明确推向 `数值 + 视觉 + 文本` 的统一建模，后续很可能影响时序 Agent 的 multimodal runtime 设计。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出谱特征并不能回答“更长上下文、检索插件或预训练 foundation model 是否真的有帮助”，并提出无标签部署诊断量 `coverage deficit` 来判断额外上下文是否值得启用。
- 相关性判断：最高。它直接对应时间序列 Agent 的 `何时调用 retrieval / TSFM / longer context` 路由问题。

### [2026-07-14] Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12454)
- 简短摘要：系统评估把 `TimesFM` 零样本迁移到工业多变量异常检测的两条路径，结论是 naive zero-shot 方案不如专用方法，但在异常边界附近仍能提供变点信号。
- 相关性判断：高。它很适合反向指导 `什么时候不要盲上 TSFM`，以及 `TSFM 更适合当 sentinel 而非终端 detector`。

### [2026-07-13] Bet on Features: Anytime-Valid and Feature-Aware Auditing of Conditional Quantile Forecasters

- 日期：2026-07-13
- 来源：[arXiv](https://arxiv.org/abs/2607.11653)
- 简短摘要：提出面向黑盒条件分位数预测器的持续审计框架，在非 i.i.d. 流式环境中做 feature-aware calibration 检验，并展示 `Chronos-2` 在多种特征条件下的失准现象。
- 相关性判断：高。它不是新 TSFM 架构，但对部署后的 validator、告警和安全审计价值很高。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建真实世界多变量时序语料 `RMISC`，约含 200 个数据集和 1420 亿时间点，并比较真实多变量语料与合成语料预训练对零样本泛化的影响。
- 相关性判断：最高。它继续回答“TSFM 该用什么样的预训练语料”这一基础问题。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与经典统计 / ML 基线，给出 `样本量 + 季节性 + 基础设施成本` 联合决定的 break-even 框架。
- 相关性判断：最高。它最容易直接转成时序 Agent 的模型路由与上线准入规则。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出统一的 tuning-free TSFM，通过 `multi-scale Transformer + Multi-Objective Temporal Masking` 同时覆盖 extrapolation、interpolation 与 global abstraction 等多类任务。
- 相关性判断：高。它代表“多任务统一、少调参部署”的另一条 TSFM 路线。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-10] Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09076)
- 简短摘要：提出 `LLM planner + TimesFM sentinel` 的控制框架，借助 `Counterfactual Physics Injection` 在执行前模拟干预结果，拦截幻觉式高风险动作。
- 相关性判断：中高。虽然场景偏工业控制安全，但很像“foundation model 作为 deterministic guard 支撑 agentic control”的参考实现。

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：通过楼宇知识图谱构建结构骨架，并由 `agentic topology sampler` 在部署时动态选择目标相关的外生变量，实现零样本楼宇 IoT 预测。
- 相关性判断：高。它把 `agentic variable selection` 直接嵌进时序建模链路，而不是停留在泛化的数据分析代理层。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 与 confidence gate 输出可审计的监管告警票据。
- 相关性判断：高。它是近窗里最接近真实高风险监督系统的时序 Agent 样板之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，给通用 LLM agent 加上时序原生 runtime、可执行 temporal tools、经验复用与 episodic multimodal memory。
- 相关性判断：最高。它仍是时间序列 harness、tool use、memory 与 auditable runtime 的代表作。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 通过多轮工具调用形成语义推理轨迹，再把结果融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的代表作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把时序现实任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation 与 protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是构建可复用时序 Agent 平台，它仍是最系统的公开参考之一。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880) / [HuggingFace Dataset](https://huggingface.co/datasets/winall/CLIR-Bench)
- 简短摘要：围绕不规则、异步、稀疏的临床时序构建 6600 个 QA 样本，并将显式时间证据与答案推导规则绑定到每个问题上。
- 相关性判断：高。它虽是临床垂域，但正中 `不规则时序 + 可核验 reasoning` 主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将时序 reasoning 中 `文本模式 LLM` 与 `图像模式 VLM` 的选择问题显式建成异构图路由任务，并按性能-成本偏好动态选择最优 `modality-model pair`。
- 相关性判断：最高。它非常接近未来时序 Agent runtime router 的核心部件。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` benchmark 与 `TSAlign` 框架，覆盖 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知型时序 reasoning 任务。
- 相关性判断：最高。它仍是近三个月里最像“总纲”的时间序列 reasoning 工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：系统审查 coding agent 在时序任务中的真实推理能力，发现即使允许代码执行，模型仍会在统计假设、验证逻辑与不确定性处理上持续犯错。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：围绕不规则采样 TSQA 构建 `IRTS-ToolBench`，强调 tool-grounded reasoning、可验证分析链路与可复现实验协议。
- 相关性判断：高。它把 verifier 与多工具调用正式拉进了时序 reasoning 评测。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：提出多轮时间序列 agent benchmark，覆盖 240 个任务与 2680 轮对话，重点考察记忆、证据积累、不确定性处理与决策型任务。
- 相关性判断：最高。它比单轮 TSQA 更贴近真实 analyst / agent 工作流。

## 4. 光伏功率预测最新研究

### [2026-07-14] Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：围绕数值天气预报误差如何沿着 PV forecasting pipeline 传导，构建物理约束下的鲁棒性评测框架，并比较 PatchTST、GRU、N-HITS、LightGBM 等模型的稳健性与时延。
- 相关性判断：高。它直接回答 `天气输入误差会怎样传导到光伏预测模型` 这个工程问题。

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、distribution-shift correction 与分场景损失函数整合进同一条 PV 预测链路。
- 相关性判断：最高。它几乎就是“光伏版 foundation model + retrieval + physics constraints”的代表作。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：面向冷启动光伏场景生成 physics-informed synthetic history，让 TSFM 在没有目标站点历史观测时也能依靠元数据和气象协变量做 zero-shot 预测。
- 相关性判断：高。它回答了新站点刚上线时 TSFM 是否还能工作的关键落地问题。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较 TSFM、transformer 和深度学习基线在 solar、wind、load 三类电力预测任务上的零样本、微调、多变量输入、概率预测与泛化表现。
- 相关性判断：高。它仍是“电力系统里何时值得上 TSFM”的最实用对照基准之一。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### [2026-07-17] swarm-ai-research/blf-forecaster

- 日期：2026-07-17（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/swarm-ai-research/blf-forecaster)
- 简短摘要：一个面向 AI forecasting 的 belief-state agent loop 实现，绑定了 multi-trial aggregation、hierarchical calibration、time-series tools 和 ForecastBench eval harness。
- 相关性判断：中高。它不是时间序列专用研究代码，但和 `forecasting agent + calibration + harness` 的工程主线很贴近。

#### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供面向 AI agents 的 deterministic time-series MCP tools，覆盖 anomaly detection、changepoint、decomposition、trend tests 与 data-quality auditing。
- 相关性判断：高。它非常贴近“时序 Agent 的工具层与可审计统计能力”。

#### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：面向 tool-using agents 的 trajectory-level eval harness，按步骤评分工具选择、参数、grounding 与效率，并可作为 CI regression gate。
- 相关性判断：高。虽然不是时序专用仓库，但很适合直接嫁接到时间序列 Agent / harness 评测链路。

#### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：一个面向时序任务的 AutoML scaffold，含前端、服务端和可部署站点，明显偏向低门槛建模与 pipeline 包装。
- 相关性判断：中。研究深度有限，但属于近窗内可跟踪的 AutoML 新项目。

#### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：将时间序列异常检测输出的分数、窗口与统计量交给 LLM 生成分析结论，形成 `detector + explainer` 的本地 agent 组合。
- 相关性判断：中高。更像原型系统，但与时序异常分析 agent 的落地方向一致。

#### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：一个 time-masked retrieval harness，强调 leak-free `as-of` 工具与 forecasting playground，用于评估和搭建预测代理。
- 相关性判断：中高。它命中 `forecasting harness + retrieval discipline` 这条很实用的工程线。

### 光伏功率预测

#### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 论文官方代码，围绕光伏预测整合 retrieval、冻结的 Chronos 先验与分布漂移校正。
- 相关性判断：最高。它是本轮最值得直接复现实验的光伏专用代码仓库。

#### [2026-05-18] codenhenhe/chronos2-volta-solar-daily

- 日期：2026-05-18（HuggingFace API `createdAt`）
- 来源：[HuggingFace](https://huggingface.co/codenhenhe/chronos2-volta-solar-daily)
- 简短摘要：基于 `amazon/chronos-2` 的光伏日级 LoRA 微调模型，标签与卡片信息表明其针对澳大利亚光伏数据做了专门适配。
- 相关性判断：中高。它不是新论文，但属于时间窗口内、日期可确认且与光伏 foundation model 应用直接相关的 HF 模型。

### HuggingFace 补充说明

- 本轮只纳入一个高置信、日期可确认且与主题强相关的新 HuggingFace 条目：`codenhenhe/chronos2-volta-solar-daily`。
- 未纳入主条目的 HuggingFace 项目：
  - `ryukkt62/Suncast`：`createdAt=2026-03-19`，超出三个月窗口。
  - `nakedved/genai-capstone`：`createdAt=2026-04-19`，比窗口起点 `2026-04-20` 早一天，且更偏课程型实现，因此降优先级。

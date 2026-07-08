# 2026-07-08 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-08 15:42-16:18 Asia/Shanghai  
时间窗口：2026-04-08 至 2026-07-08  
筛选口径：优先检索 arXiv、DailyArXiv README、官方项目页与 GitHub 官方仓库元数据。主条目仅保留过去三个月内可确认日期的内容；GitHub 项目统一以 `created_at` 为准。若无法确认日期，则标注为 `不确定` 并降低优先级。  
本次重点检索词：`time series foundation model`, `TSFM`, `time series agent`, `agentic time series`, `time series reasoning`, `forecasting reasoning`, `time-series harness`, `AutoML agent`。

## 今日摘要

- 今天没有检出比 2026-07-06 那批条目更强的新论文，但过去 48 小时内最值得继续跟进的仍然是两篇 TSFM 部署导向工作：[Forecasting Realized Volatility with Time Series Foundation Models](https://arxiv.org/abs/2607.05291) 与 [When Do Foundation Models Pay Off?](https://arxiv.org/abs/2607.04919)。它们把焦点从“能不能赢 benchmark”推进到“什么时候值得真实部署”。
- Agent 主线过去一天没有出现更高优先级的新论文；系统实现上仍以 [TimeClaw](https://arxiv.org/abs/2606.05404)、[AION](https://arxiv.org/abs/2605.25045)、[KairosAgent](https://arxiv.org/abs/2605.30002)、[DeXposure-Claw](https://arxiv.org/abs/2606.19501) 这四条路线最值得持续跟踪。
- Reasoning 主线依旧由 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)、[T2SP](https://arxiv.org/abs/2606.12481)、[TimeSage-MT](https://arxiv.org/abs/2606.01498)、[Reasoning-Aware Training for Time Series Forecasting](https://arxiv.org/abs/2605.08625) 组成最完整的近窗图谱，暂未看到更新鲜且更强的替代者。
- GitHub 近窗项目今天新增一个值得记录的仓库：[ChamoLu/TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)（2026-07-06 创建），把异常检测结果和 LLM 解释串成可运行的本地时序分析 agent；而更系统化、复用价值更高的外部参考仍是 [tachyurgy/observability-assistant](https://github.com/tachyurgy/observability-assistant)、[iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[ztxtech/aion](https://github.com/ztxtech/aion)、[jaeukmoon/TSF](https://github.com/jaeukmoon/TSF)。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-08 16:02 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv) / [README 原文](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)
- 仓库状态：README 标注 `Last update: 2026-07-08`。
- 在 `Time Series` 板块中，本次没有看到比昨天更高相关的新条目进入核心主题；更新更偏一般时序建模、Granger causality 和连续时间建模。
- 在一手 arXiv 来源中已确认、但 DailyArXiv 仍未覆盖或未凸显的高相关条目包括：
  - [Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks](https://arxiv.org/abs/2607.05291)，日期 2026-07-06。
  - [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)，日期 2026-07-06。
  - [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)，日期 2026-06-03。
  - [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)，日期 2026-05-24。
  - [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)，日期 2026-06-20。
  - [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)，日期 2026-06-15。
- 结论：DailyArXiv 仍适合作为 TSFM 的辅助补检入口，但对时序 Agent、reasoning 和 harness 主线覆盖不足，因此今天继续把它视为次级信号，而不是主监控源。

## 1. 时间序列基础模型最新研究

### [2026-07-06] Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.05291)
- 简短摘要：系统比较 9 个 zero-shot TSFM 与 8 个经典计量波动率模型，结论不是“TSFM 全面胜出”，而是不同架构稳定性差异很大，很多收益来自 rescaling，而 `TTM + Log-HAR` 这类简单组合仍很强。
- 相关性判断：高。它直接回答“TSFM 在高噪声金融序列里什么时候真比经典模型更值得用”，对时序 Agent 的模型选择、fallback 和风险控制都很关键。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与 Naive、ETS、ARIMA、XGBoost，提出一个 break-even 框架，把“TSFM 是否值得部署”转化为数据规模、季节性强度与工程成本的联合决策问题。
- 相关性判断：最高。它非常适合被时序 Agent 用作自动路由和成本感知选择器的依据。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：提出统一的 tuning-free TSFM，使用多尺度 Transformer 与 `Multi-Objective Temporal Masking`，希望在 extrapolation、interpolation、global abstraction 等异构任务上减少任务专用调参。
- 相关性判断：高。它代表“一个 TSFM 覆盖多类时序分析任务”的近期强信号。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：把 TiRex 扩展到多变量与 streaming forecasting，用 memory-centric recurrent 设计保持常数级 patch 推理成本，并支持 future-known covariates。
- 相关性判断：高。它很贴近在线监控、滚动重规划和持续执行型时序 Agent 的推理约束。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：强调 `vintage-consistent` 与 `no leakage` 训练协议，避免使用真实部署时无法获得的修订数据和未来信息，把时间可用性边界写进 TSFM 评测与训练流程。
- 相关性判断：高。它对需要严格回测一致性和时间戳合规的研究 Agent 很重要。

### [2026-06-10] TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625) / [GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：提出轻量级 TSFM routing layer，用 discriminative routing、selective gating 与 ensemble fallback 完成 expert selection，而不依赖额外 LLM 控制器。
- 相关性判断：高。它是“多 TSFM 池如何被 Agent 高效调用”的直接工程解法。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：用图时序 foundation model 先预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 与 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它是近三个月最接近高风险生产监督场景的时序 Agent 系统之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，给通用 LLM agent 增加时序 runtime、可执行 temporal tools、episodic multimodal memory 和经验复用机制。
- 相关性判断：最高。它最直接命中时序 harness、tool use、memory 和 validation 闭环。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 通过多轮工具调用形成语义推理轨迹，再把结果融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的清晰公开方案。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把现实时序任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation、protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是建设可复用时序 Agent 平台，它仍是当前最值得直接拆解的系统化参考。

### [2026-05-14] Nexus : An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 拆成多阶段 agent 流程，分别处理宏观与微观波动，并在需要时引入文本上下文，再合成最终预测。
- 相关性判断：高。它代表“forecasting 本身就是 agentic reasoning problem”的方法论主张。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 与 `TSAlign`，把时序 reasoning 系统化拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务。
- 相关性判断：最高。它仍是过去三个月时序 reasoning 方向最完整的任务体系化工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合模式在时序理解任务上的表现，发现代码执行确实带来增益，但最佳 agent 仍会在相当比例的题目上失败。
- 相关性判断：最高。它直接回答“coding agent 是否真的足够胜任时间序列分析”这一核心方法论问题。

### [2026-06-10] Representing Time Series as Structured Programs for LLM Reasoning

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.12481)
- 简短摘要：提出 `T2SP`，把趋势、周期与显著事件转写为结构化程序表示，把时序理解负担从 LLM 本体转移到输入表示层。
- 相关性判断：高。它解决的是“时间序列该如何喂给 reasoning model”的接口层问题。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序 reasoning benchmark，覆盖真实领域任务、跨回合记忆和统一评测协议，并系统暴露 memory 与 uncertainty handling 的短板。
- 相关性判断：高。它比单轮 QA 更接近真实 analyst workflow。

### [2026-05-09] Reasoning-Aware Training for Time Series Forecasting

- 日期：2026-05-09
- 来源：[arXiv](https://arxiv.org/abs/2605.08625)
- 简短摘要：提出 `STRIDE`，把 reasoning trace 蒸馏为连续 embedding prior，再注入 TSFM 的数值编码器，尝试让 forecasting 模型本身吸收可解释 reasoning 结构。
- 相关性判断：高。它把 reasoning 从“评测项”推进成“训练信号”，是 forecasting 与 reasoning 收敛的一条强路线。

## 4. GitHub 上值得跟踪的最新项目

说明：以下日期均以 GitHub 仓库 `created_at` 为准，仅保留 `2026-04-08` 之后创建且与 timeseries Agent、harness、machine learning、AutoML 工作流直接相关的项目。

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：本地运行的时序异常检测 agent，把 anomaly scores、异常窗口和统计指标交给 LLM 生成自然语言分析结论。
- 相关性判断：高。它不是完整研究 harness，但很像“异常检测 + LLM 解释器”的轻量时序 Agent 原型。

### [2026-07-01] tachyurgy/observability-assistant

- 日期：2026-07-01
- 来源：[GitHub](https://github.com/tachyurgy/observability-assistant)
- 简短摘要：零依赖 TypeScript 原型，围绕“为什么 p95 spike”构建 synthetic time-series agent，集成 MAD 异常检测、时间先后因果排序、3 个 abstain gate 与 eval harness。
- 相关性判断：高。它是目前最干净的“时序 reasoning + abstention + evaluation”最小系统之一。

### [2026-07-01] idriss-aaidoun/emads

- 日期：2026-07-01
- 来源：[GitHub](https://github.com/idriss-aaidoun/emads)
- 简短摘要：可解释 multi-agent data science workflow，覆盖 EDA、model selection、explainability、reporting 和 persistent memory。
- 相关性判断：中高。它不是时序专用，但对可解释 AutoML workflow 的 agent 设计很有借鉴意义。

### [2026-06-04] REHXZ/AUTOML

- 日期：2026-06-04
- 来源：[GitHub](https://github.com/REHXZ/AUTOML)
- 简短摘要：本地优先的 `Agentic Machine Learning` 工作台，多 agent 覆盖完整 CRISP-DM 生命周期。
- 相关性判断：中高。虽然偏 tabular ML，但很适合借鉴多工位式建模流程。

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 论文的参考实现，聚焦时序原生 runtime、工具调用、记忆与评测。
- 相关性判断：最高。它是当前最值得继续拆解的时序 Agent 代码库之一。

### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 整理论文、架构与可靠性议题。
- 相关性判断：中高。它更像监控入口而不是系统实现，但适合持续发现新论文。

### [2026-05-27] skazhutin/autovibe-gym

- 日期：2026-05-27
- 来源：[GitHub](https://github.com/skazhutin/autovibe-gym)
- 简短摘要：LLM-powered AutoML gym，提供隐藏最终评测、轨迹日志和可重复协议，用于评估迭代式 ML agents。
- 相关性判断：中高。它虽然不是时序专用，但非常适合借鉴 evaluation harness 设计。

### [2026-05-24] rnop/numerai-mcp-autoresearch

- 日期：2026-05-24
- 来源：[GitHub](https://github.com/rnop/numerai-mcp-autoresearch)
- 简短摘要：面向 Numerai 的 agentic research harness，集成 autonomous experimentation loop、Bayesian optimization、time-series cross-validation 与定期重训。
- 相关性判断：中高。它更偏量化研究，但确实触及了时序研究 Agent 的自动实验闭环。

### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：`Plug-and-play benchmark harness for time-series forecasting foundation models`，面向 LTSF 与 GIFT-Eval 的标准化接入和评测。
- 相关性判断：高。它最接近 TSFM benchmark harness 的工程层落地。

### [2026-04-12] ztxtech/aion

- 日期：2026-04-12
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：OpenCode-based 时序 harness，明确面向 structured forecasting、contextual reasoning、tool use 与 validation-driven workflow。
- 相关性判断：最高。它仍是本仓库最值得持续对照的外部参考仓库之一。

## 5. 备注

- 本次检索没有发现可确认日期且优先级高于现有列表的 2026-07-07/2026-07-08 新论文，因此今天的主要增量集中在“GitHub 新项目补充”和“TSFM 部署决策信号继续强化”。
- 检索过程中也复核了 [TFRBench](https://arxiv.org/abs/2604.05364)；其发布日期是 2026-04-07，早于当前时间窗口起点 2026-04-08，因此今天未纳入主清单。

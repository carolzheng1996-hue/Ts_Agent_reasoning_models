# 2026-07-09 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-09 15:08-15:36 Asia/Shanghai  
时间窗口：2026-04-09 至 2026-07-09  
筛选口径：优先检索 arXiv、DailyArXiv README、官方项目页与 GitHub 官方仓库元数据。主条目仅保留过去三个月内可确认日期的内容；GitHub 项目统一以 `created_at` 为准。若无法确认日期，则标注为 `不确定` 并降低优先级。  
本次重点检索词：`time series foundation model`、`TSFM`、`time series agent`、`agentic time series`、`time series reasoning`、`irregular TSQA`、`time-series harness`、`AutoML agent`、`photovoltaic forecasting`。

## 今日摘要

- 今天最值得补记的新论文有两篇，且都来自 `2026-07-07`：一篇是 TSFM 数据侧工作 [RMISC](https://arxiv.org/abs/2607.06504)，另一篇是面向零样本 IoT 预测的 agentic 框架 [TopoBrick](https://arxiv.org/abs/2607.06349)。前者回答“真实多变量预训练语料是否真能提升 TSFM”，后者回答“Agent 如何在部署时为时序预测自动挑选外生变量”。
- 基础模型主线里，过去一周最强信号已经从单纯比 benchmark，进一步转向“真实部署是否值得”“预训练语料该怎么建”以及“能源类 covariate-driven 真实场景里能不能稳住”：代表条目分别是 [When Do Foundation Models Pay Off?](https://arxiv.org/abs/2607.04919)、[Forecasting Realized Volatility with Time Series Foundation Models](https://arxiv.org/abs/2607.05291)、[RMISC](https://arxiv.org/abs/2607.06504) 与 [Evaluating Time Series Foundation Models for Electricity Price Forecasting](https://arxiv.org/abs/2607.02623)。
- Agent 主线今天新增的 [TopoBrick](https://arxiv.org/abs/2607.06349) 虽然不是通用 LLM analyst，但它把 `agentic selection` 用在时序预测部署链路里，和 [TimeClaw](https://arxiv.org/abs/2606.05404)、[AION](https://arxiv.org/abs/2605.25045)、[KairosAgent](https://arxiv.org/abs/2605.30002) 一起，基本覆盖了 runtime、tooling、reasoner-forecaster fusion 与 deployment-time routing 四种路线。
- Reasoning 主线今天没有比 [TSCognition](https://arxiv.org/abs/2606.22126) 更新且更强的总览型论文，但 [Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning](https://arxiv.org/abs/2606.15107) 值得补进，因为它把不规则采样、多工具验证和可复现实验协议绑在了一起。
- GitHub 侧今天没有检出比昨天更近、且相关性更高的新仓库；结合仓库 `created_at` 元数据复核，窗口内最新且最值得继续跟踪的仍是 [ChamoLu/TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)、[tachyurgy/observability-assistant](https://github.com/tachyurgy/observability-assistant)、[idriss-aaidoun/emads](https://github.com/idriss-aaidoun/emads)。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-09 15:24 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv) / [README 原文](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)
- 仓库状态：README 标注 `Last update: 2026-07-09`。
- 今天在 `Time Series` 板块里，最值得补记的高相关近窗条目有：
  - [RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models](https://arxiv.org/abs/2607.06504)，日期 `2026-07-07`。
  - [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)，日期 `2026-07-07`。
  - [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)，日期 `2026-07-06`。
- DailyArXiv 同页还能确认两篇近窗、但与本次主题属于“相邻能源场景”的 TSFM 条目：
  - [Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence](https://arxiv.org/abs/2607.02623)，日期 `2026-07-02`。
  - [Probabilistic Low-Voltage Peak Load Forecasting with Time Series Foundation Models Evaluated on Application-Oriented Metrics](https://arxiv.org/abs/2607.01966)，日期 `2026-07-02`。
- DailyArXiv 仍未充分覆盖或凸显的高相关条目包括：
  - [Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks](https://arxiv.org/abs/2607.05291)，日期 `2026-07-06`。
  - [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)，日期 `2026-06-03`。
  - [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)，日期 `2026-05-24`。
  - [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)，日期 `2026-06-20`。
- 结论：DailyArXiv 今天补到了两个最值得记的新增项 `RMISC` 和 `TopoBrick`，并且还能补到两篇相邻能源场景 TSFM 论文；但它对时序 harness、reasoning benchmark 与 GitHub 工程落地的覆盖依然不够，因此今天继续把它视为次级发现源，而不是主监控源。

## 1. 时间序列基础模型最新研究

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：提出大规模真实世界多变量时序语料 `RMISC`，约含 200 个数据集和 1420 亿时间点，并系统比较“真实多变量语料预训练”与“合成多变量语料预训练”对零样本泛化的影响。
- 相关性判断：最高。它直接触及 TSFM 下一阶段最核心的问题之一：预训练数据分布本身是否决定模型跨域泛化上限。

### [2026-07-06] Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.05291)
- 简短摘要：系统比较 9 个 zero-shot TSFM 与 8 个经典计量波动率模型，结论不是“TSFM 全面胜出”，而是不同架构稳定性差异很大，很多收益来自 rescaling，而 `TTM + Log-HAR` 这类简单组合仍然很强。
- 相关性判断：高。它对研究 Agent 里的模型选择、fallback 和风险控制很有价值，因为它说明 TSFM 在高噪声金融序列中并非默认占优。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：提出一个 break-even 分析框架，把 TSFM 与经典方法的选择，转化成样本量、季节性强度、调参与算力成本的联合决策问题。
- 相关性判断：最高。它非常适合做成 Agent 的 routing policy 或 deployment guardrail。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：提出统一的 tuning-free TSFM，结合多尺度 Transformer 与 `Multi-Objective Temporal Masking`，试图在 extrapolation、interpolation 和 global abstraction 等任务间共享一个无需任务专调的基座模型。
- 相关性判断：高。它代表“一个 TSFM 覆盖多类分析任务”的近期强信号。

### [2026-07-02] Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.02623) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：针对电价预测这一强 covariate、强分布漂移场景，构建双数据集评测框架以降低 contamination 风险，并比较 TSFM、领域方法与简单集成在点预测、概率预测和尾部风险上的表现。
- 相关性判断：高。它对“TSFM 在真实部署里会不会被 covariates 和 regime shift 打回原形”给出了更贴近生产环境的答案。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：将 TiRex 扩展到多变量与 streaming forecasting，用 memory-centric recurrent 设计把 patch 推理成本压到常数级，并支持 future-known covariates。
- 相关性判断：高。它很贴近在线监控和持续执行型时序 Agent 的部署约束。

### [2026-06-10] TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625) / [GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：提出轻量级 TSFM routing layer，用 discriminative routing、selective gating 与 ensemble fallback 完成 expert selection，而不依赖额外的 LLM 控制器。
- 相关性判断：高。它是“多 TSFM 池如何被 Agent 高效调用”的直接工程解法。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：提出 training-free 的零样本楼宇 IoT 预测框架，利用知识图谱构建结构骨架，并让 `agentic topology sampler` 在部署时为目标序列挑选合适的外生变量。
- 相关性判断：高。它不是通用 analyst agent，但把 `agentic selection` 真正放进了时序预测部署链路。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：用图时序 foundation model 预测 DeFi 暴露网络，并通过 deterministic monitor、stress scenario、data-health gate 与 confidence gate 输出可审计风险票据。
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
- 相关性判断：最高。它仍是过去三个月里时序 reasoning 最完整的任务体系化工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合模式在时序理解任务上的表现，发现代码执行确实带来增益，但最佳 agent 仍会在相当比例题目上失败。
- 相关性判断：最高。它直接回答“coding agent 是否真的足够胜任时间序列分析”这一核心方法论问题。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：提出 `IRTS-ToolBench`，专门评估不规则采样时序上的 TSQA、工具调用和可验证推理，把“异步、缺失、频率不齐”的真实难点正式纳入 benchmark。
- 相关性判断：高。它把 reasoning 的讨论从规则采样环境推进到更接近真实工业数据的 setting。

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

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

说明：以下 GitHub 日期均以官方仓库 `created_at` 为准，仅保留 `2026-04-09` 之后创建且与 timeseries Agent、harness、machine learning、AutoML 工作流直接相关的项目。今天未检出高相关、且窗口内创建的 HuggingFace 新项目，因此本节以 GitHub 为主。

### 4.1 时间序列

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：本地运行的时序异常检测 agent，把 anomaly scores、异常窗口和统计指标交给 LLM 生成自然语言分析结论。
- 相关性判断：高。它是“异常检测 + LLM 解释器”的轻量时序 Agent 原型，也是窗口内目前最新的高相关仓库。

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
- 相关性判断：最高。它仍是当前最值得继续拆解的时序 Agent 代码库之一。

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

### 4.2 光伏功率预测

- 今日未检出 `2026-04-09` 之后创建、且与光伏功率预测 Agent / harness / AutoML 直接相关、优先级足够高的 GitHub 或 HuggingFace 新项目。
- 保留观察：窗口内论文主线比代码主线更新更快，当前更值得跟踪的是论文与是否后续开源。

## 5. 光功率 / 光伏功率预测最新研究

### [2026-06-23] Towards Continuous Power Forecasting: Practical Continual Learning for Real-World Energy Systems in Nonstationary Time Series

- 日期：2026-06-23
- 来源：[arXiv](https://arxiv.org/abs/2606.24955)
- 简短摘要：把真实能源系统里的功率预测正式表述为 continual learning 问题，系统比较 6 类持续学习方案在分布漂移、历史数据受限和长期在线服务约束下的适配行为。
- 相关性判断：中高。它不是光伏专用 TSFM，但非常贴近“已部署功率预测系统如何在漂移环境里持续自我修正”这一真实运维问题。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运光伏站点缺少历史功率数据的问题，用站点元数据与气象协变量生成 physics-informed synthetic history，再让 TSFM 在 zero-shot / feedback 设置下做冷启动预测。
- 相关性判断：最高。它是当前窗口内最直接连接 TSFM 与光伏功率预测落地的论文，也是冷启动能源预测最值得继续跟踪的工作。

### [2026-04-27] SolarTformer: A Transformer Based Deep Learning Approach for Short Term Solar Power Forecasting

- 日期：2026-04-27
- 来源：[arXiv](https://arxiv.org/abs/2604.24306)
- 简短摘要：使用 attention-based transformer 结合气象特征与电站元数据做短时太阳能功率预测，强调跨站点、跨季节和阴晴条件变化下的泛化稳定性。
- 相关性判断：中高。它不是 foundation-model 路线，但可以作为近窗光伏短时预测的重要领域基线。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：在 ERCOT 高分辨率电力系统数据上，系统比较 TimesFM、Chronos Bolt、Moirai、MOMENT、TTM 与传统深度模型在 solar、wind、load forecasting 上的 zero-shot、fine-tuning、概率预测和跨站点泛化表现。
- 相关性判断：高。它虽然覆盖的不只光伏，但对“TSFM 在真实电力与新能源预测里到底值不值”提供了非常直接的实证基线。

## 6. 备注

- 今天没有检出比 `2026-07-06` 更新、且明显强于现有列表的 GitHub 高相关新仓库。
- DailyArXiv 今天还能补到两篇 `2026-07-02` 的相邻能源场景 TSFM 论文，但它们更偏电价与低压负荷预测，因此未挤掉本简报主线的 TSFM / Agent / 光伏优先条目。
- `TFRBench` 的 arXiv 日期为 `2026-04-07`，早于本轮窗口起点 `2026-04-09`，因此今天继续不纳入主清单。
- 今天未检出可确认日期且优先级足够高的 OpenReview / ICLR / ICML / NeurIPS / ACL 新公开条目，主信号仍然来自 arXiv 与官方项目仓库。

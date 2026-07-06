# 2026-07-06 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-06 10:40-12:40 Asia/Shanghai  
时间窗口：2026-04-06 至 2026-07-06  
筛选口径：优先检索 arXiv、OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI、官方项目页、机构博客、GitHub 与 `DailyArXiv` README；主条目只保留过去三个月内可确认日期的内容。GitHub 项目优先使用仓库 `created_at`；无法再次核验详情或日期时不列为主条目。  
本次重点检索词：`time series foundation model`, `TSFM`, `time series agent`, `time series reasoning`, `Zeus`, `TiRex-2`, `AION`, `TimeClaw`, `KairosAgent`, `TSCognition`, `TFRBench`, `photovoltaic forecasting`, `DailyArXiv Time Series`。

## 今日摘要

- 过去 72 小时里最值得关注的 TSFM 新论文是 [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918) 与 [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)。前者强调多任务 tuning-free 统一建模，后者强调 streaming 场景下的常数级增量推理成本。
- `DailyArXiv` 的 `Time Series` 板块在 2026-07-06 已收录 `Zeus`、`Probabilistic Low-Voltage Peak Load Forecasting with TSFMs` 等 7 月 2 日新条目，说明这两篇已成为最近几天最活跃的公开信号。
- Agent 方向过去三个月的主线没有变化，但排序更清晰了：`DeXposure-Claw` 最接近高风险生产监督系统，`TimeClaw` 与 `AION` 最适合直接借鉴为本仓库的 harness / runtime / validation 设计。
- Reasoning 方向仍由 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545) 和 [TFRBench](https://arxiv.org/abs/2604.05364) 组成最强组合，分别对应任务体系、代码执行能力上限和 reasoning 专项评测。
- GitHub 新项目里，最值得继续跟踪的是 [tachyurgy/observability-assistant](https://github.com/tachyurgy/observability-assistant)、[REHXZ/AUTOML](https://github.com/REHXZ/AUTOML)、[skazhutin/autovibe-gym](https://github.com/skazhutin/autovibe-gym)、[jaeukmoon/TSF](https://github.com/jaeukmoon/TSF) 与 [ztxtech/aion](https://github.com/ztxtech/aion)。
- 光伏方向过去三个月最强条目仍是 [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)，它仍是 `TSFM + 冷启动部署 + PV forecasting` 结合最直接的一篇。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-06 12:05 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv)
- 仓库状态：README 标注 `Last update: 2026-07-06`。
- `Time Series` 板块内、且与本主题高相关的近窗条目：
  - [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)，日期 2026-07-02；README 注释显示 `Accepted by ICML 2026`，直接命中多任务 TSFM。
  - [Probabilistic Low-Voltage Peak Load Forecasting with Time Series Foundation Models Evaluated on Application-Oriented Metrics](https://arxiv.org/abs/2607.01966)，日期 2026-07-02；强调应用导向指标与峰值风险评估。
  - [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)，日期 2026-07-01；直接命中多变量与流式 TSFM。
- `Time Series` 板块内发现但相关性次一级的新增条目：
  - [Extreme Adaptive Transformer for Time Series Forecasting](https://arxiv.org/abs/2607.02437)，日期 2026-07-02；偏极端事件 forecasting，本次不列入主条目。
  - [Evolutionary Feature Engineering for Structured Data](https://arxiv.org/abs/2607.01548)，日期 2026-07-02；其 `EFE-Time` 对 Chronos-2 等 TSFM 有增益，但更偏结构化数据特征工程。
- 结论：`DailyArXiv` 本次对 TSFM 新论文补检很有帮助，但对 `AION`、`TimeClaw`、`TSCognition` 一类 Agent / reasoning 核心条目覆盖仍不完整，因此本晨报继续以 arXiv 直检与官方项目页为主。

## 1. 时间序列基础模型最新研究

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：提出统一的 tuning-free TSFM，核心是多尺度 Transformer 与 `Multi-Objective Temporal Masking`，希望在 extrapolation、interpolation、global abstraction 等异构任务上不依赖任务特定微调。
- 相关性判断：最高。它把“一个 TSFM 覆盖多种时序分析任务”明确推进到通用模型路线，对后续 Agent 的模型路由层和多任务基座价值很高。

### [2026-07-02] Probabilistic Low-Voltage Peak Load Forecasting with Time Series Foundation Models Evaluated on Application-Oriented Metrics

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01966) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：在 200 个真实低压馈线数据上对 Chronos-Bolt、Chronos-2、TabPFN-TS 与多种 baseline 做系统比较，重点不只是平均误差，而是峰值负荷与电网风险权衡的应用导向指标。
- 相关性判断：高。它不是新 TSFM 架构，但非常契合“TSFM 是否足够支撑真实决策与风险管理”的部署问题，对时序 Agent 的 validator 设计直接有用。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204)
- 简短摘要：将 TiRex 扩展到多变量与 streaming forecasting，使用 memory-centric recurrent 设计，在新观测持续到来时保持常数级 patch 推理成本，并支持 future-known covariates。
- 相关性判断：最高。它最直接面向在线监控、滚动预测和持续执行的时序 Agent 场景。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：围绕 real-time macro forecasting 强调 `vintage-consistent` 与 `no leakage`，显式避免模型使用未来修订数据和不符合真实时间戳的信息。
- 相关性判断：高。它把“真实部署可审计性”推到 TSFM 训练设计中心，对需要时间戳合规与回溯复现的研究 Agent 很关键。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：把 forecasting、区间估计、模型选择等任务统一进 decision-theoretic pretraining 框架，直接根据效用函数学习近似最优决策规则。
- 相关性判断：高。它对 Agent 的 reward design、后验校准与“预测不只是点估计”的思路很有启发。

### [2026-06-16] Do Time Series Foundation Model Benchmarks Hide Regime-Dependent Failures? Evidence from Traffic Speed Forecasting

- 日期：2026-06-16
- 来源：[arXiv](https://arxiv.org/abs/2606.18367)
- 简短摘要：指出 TSFM 的总体平均指标会掩盖 regime transition 时段的严重失败，建议按交通状态和切换区间做分层评测。
- 相关性判断：高。它提醒时序 Agent 不能只看 aggregate leaderboard，必须显式建模 failure mode 与 regime-aware validation。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 和 confidence gate 生成可审计监管票据。
- 相关性判断：最高。它是近三个月最接近真实高风险生产环境的时序 Agent 设计之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 补齐时序原生 runtime、可执行工具、episodic multimodal memory 和可审计分析链路。
- 相关性判断：最高。它直接命中本仓库关心的 harness / tools / memory / validation 闭环。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 多轮调用工具形成语义推理轨迹，再把结果注入预测器。
- 相关性判断：最高。它是“语义 reasoning 融入数值 forecasting”最清晰的公开路线之一。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把现实世界时序任务 formalize 为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 组成时序专用 harness。
- 相关性判断：最高。它最适合直接借鉴到本仓库的任务协议、review loop 与验证循环设计。

### [2026-05-14] Nexus : An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：将 forecasting 分解为时序模式理解、文本上下文整合和最终综合预测等多阶段 agent 流程，强调数值与非结构化语境的联合推理。
- 相关性判断：高。它代表“forecasting 本身就是 agentic reasoning problem”的一条路线。

### [2026-05-11] TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning

- 日期：2026-05-11
- 来源：[arXiv](https://arxiv.org/abs/2605.10038)
- 简短摘要：提出 `Explore -> Compare -> Distill -> Reinject` 的 exploratory execution learning，把历史执行经验蒸馏为可复用技能。
- 相关性判断：高。它补的是 Agent 长期能力积累，而不是单次求解，对时序分析类 coding agent 很重要。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 与 `TSAlign` 框架，把时序 reasoning 系统化拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类任务。
- 相关性判断：最高。它是近三个月时序 reasoning 方向最完整的任务体系化工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合模式在时序理解任务上的表现，发现代码执行可带来增益，但统计边界条件与验证仍是主要失败点。
- 相关性判断：高。它直接回答“LLM coding agent 是否真的会做时间序列分析”。

### [2026-06-10] Representing Time Series as Structured Programs for LLM Reasoning

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.12481)
- 简短摘要：提出 `T2SP`，把时间序列分解为趋势、周期和显著事件，并转写为更接近程序的结构化表示，降低 LLM 处理原始数值串的模态错配。
- 相关性判断：高。它直接改造了“时间序列如何喂给 reasoning model”这一接口层。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序 reasoning benchmark，覆盖真实领域任务、跨回合记忆和统一评测协议，显式暴露 memory、uncertainty handling 与 domain decision 的短板。
- 相关性判断：高。它比单轮 QA 更接近真实 analyst workflow。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：利用模板和 LLM agent 从真实数据自动生成大规模时序 reasoning 题目、答案与质量评估结果，降低 benchmark 构造成本。
- 相关性判断：中高。它更偏 benchmark factory，但很适合持续产出私有评测集。

### [2026-04-07] TFRBench: A Reasoning Benchmark for Evaluating Forecasting Systems

- 日期：2026-04-07
- 来源：[arXiv](https://arxiv.org/abs/2604.05364) / [项目页](https://tfrbench.github.io/)
- 简短摘要：把 forecasting system 的 reasoning trace 单独抽出来评测，强调 cross-channel dependency、trend、external events 等解释链路应成为独立基准。
- 相关性判断：高。它为“为什么 forecasting 需要 reasoning benchmark”给出了最清晰的方法论之一。

## 4. GitHub 上值得跟踪的新项目

### 时间序列 / Agent / Harness

#### [2026-07-01] tachyurgy/observability-assistant

- 日期：2026-07-01（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/tachyurgy/observability-assistant)
- 简短摘要：围绕“为什么 p95 突增”构建 synthetic time-series agent，包含 MAD 异常检测、时序因果排序、abstain gate 与 eval harness。
- 相关性判断：高。虽然规模不大，但它把 `time-series + reasoning + abstention + evaluation` 压成了一个很清晰的最小原型。

#### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 整理论文、系统架构与可靠性议题，是过去一个月最实用的补漏入口之一。
- 相关性判断：高。适合做持续监控索引，但不替代一手论文检索。

#### [2026-05-27] skazhutin/autovibe-gym

- 日期：2026-05-27（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/skazhutin/autovibe-gym)
- 简短摘要：提供 LLM-powered AutoML gym 环境，用隐藏最终评测、轨迹日志和可重复协议评估迭代式 ML agents。
- 相关性判断：中高。虽然更偏 tabular/AutoML，但对时序 Agent 的训练环境和评测闭环有直接借鉴意义。

#### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：仓库自述为 `Plug-and-play benchmark harness for time-series forecasting foundation models`，聚焦 LTSF 与 GIFT-Eval 评测。
- 相关性判断：高。它更偏 benchmark harness，但非常贴近 TSFM 接入与评测自动化。

#### [2026-04-12] ztxtech/aion

- 日期：2026-04-12（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：仓库描述直接写为 `time-series harness for structured forecasting, contextual reasoning, tool use, and validation-driven agent workflows`。
- 相关性判断：最高。它仍是当前最值得持续跟踪的时序 harness 仓库之一。

### 机器学习 / AutoML / Foundation Evaluation

#### [2026-06-04] REHXZ/AUTOML

- 日期：2026-06-04（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/REHXZ/AUTOML)
- 简短摘要：自述为 `Agentic Machine Learning` 本地优先工作台，用多 agent 覆盖 CRISP-DM 全流程。
- 相关性判断：中高。虽然不是时序专用，但对 Agent 化建模流程、工位式分解和 AutoML 编排很有参考价值。

#### [2026-06-20] MandeepKharb/automl-agent-system

- 日期：2026-06-20（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/MandeepKharb/automl-agent-system)
- 简短摘要：基于 LangGraph 和 Groq 的多 Agent ML pipeline，目标是自动训练模型并生成报告，形态上更像轻量级 AutoML 编排器。
- 相关性判断：中。研究深度明显弱于 `autovibe-gym`，但创建日期新、结构清晰，适合观察社区如何把通用 agent 快速套入 ML 流水线。

### 光伏功率预测

#### [未发现高置信新增项目]

- 日期：2026-07-06（本次检索时间）
- 来源：GitHub 补检
- 简短摘要：本次未确认到创建于 2026-04-06 之后、且同时满足 `PV forecasting + foundation model/agent/harness` 条件的高质量新仓库；该方向仍明显呈现“论文先出、官方代码滞后”的状态。
- 相关性判断：中。当前更适合追论文和项目页，而不是仓库追新。

## 5. 光伏功率预测最新研究

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运 PV 站点缺少历史观测的问题，先用站点元数据和气象协变量生成 physics-informed synthetic history，再用 TSFM 做 zero-shot / cold-start forecasting。
- 相关性判断：最高。它同时命中 `TSFM`、`冷启动`、`PV forecasting` 和 `可部署流程`。

### [2026-04-27] SolarTformer: A Transformer Based Deep Learning Approach for Short Term Solar Power Forecasting

- 日期：2026-04-27
- 来源：[arXiv](https://arxiv.org/abs/2604.24306)
- 简短摘要：围绕短期太阳能功率预测提出 attention-based transformer，并把站点元数据注入模型以增强跨电站泛化。
- 相关性判断：中高。它不是 foundation model，但适合作为短期 PV baseline。

### [2026-04-10] On-Meter Graph Machine Learning: A Case Study of PV Power Forecasting for Grid Edge Intelligence

- 日期：2026-04-10
- 来源：[arXiv](https://arxiv.org/abs/2604.19800)
- 简短摘要：研究在边缘智能电表上部署 GCN / GraphSAGE 进行 PV 功率预测，重点是图模型的端侧训练与 ONNX 部署。
- 相关性判断：中高。它更偏部署工程，但对“边缘侧光伏 Agent”与 station-level inference pipeline 很有参考价值。

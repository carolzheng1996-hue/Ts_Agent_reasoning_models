# 2026-07-03 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-03 11:35-14:25 Asia/Shanghai  
时间窗口：2026-04-03 至 2026-07-03  
筛选口径：优先检索 arXiv、官方项目页、GitHub、HuggingFace 与 `DailyArXiv` README；主条目只保留过去三个月内可确认日期的内容。GitHub 项目优先使用仓库 `created_at`；如仅能确认 `updated_at` 或 arXiv 版本日期，则明确降优先级。  
本次重点检索词：`time series foundation model`, `time series agent`, `time series reasoning`, `TiRex-2`, `AION`, `TimeClaw`, `TSCognition`, `TFRBench`, `photovoltaic forecasting`, `solar power forecasting`, `DailyArXiv Time Series`。

## 今日摘要

- 今天最明确的新基础模型条目仍是 [TiRex-2](https://arxiv.org/abs/2607.01204)。它已出现在 [DailyArXiv README](https://github.com/zezhishao/DailyArXiv) 的 `Time Series` 板块，说明过去 24 小时内最值得跟进的 TSFM 进展依然集中在 `multivariate + streaming + constant-cost inference`。
- `DailyArXiv` 对 foundation / 风控相关时序论文有一定覆盖，但对 `AION`、`TimeClaw`、`TSCognition/TSAlign`、`TFRBench` 这类 Agent / reasoning 核心条目并不完整，因此这些子方向仍需以 arXiv 与项目页直检为主。
- Agent 方向近三个月最强主线没有改变，仍是 `DeXposure-Claw`、`TimeClaw`、`KairosAgent`、`AION`、`Nexus`；其中 `DeXposure-Claw` 最接近“预测模型 + 验证门控 + 审计输出”的真实生产范式。
- GitHub 新项目方面，本周最值得继续跟踪的是 [ServiceNow/Dr-CiK](https://github.com/ServiceNow/Dr-CiK)、[shivansh-magnus/nimbus](https://github.com/shivansh-magnus/nimbus)、[devYRPauli/tabfm-evaluation](https://github.com/devYRPauli/tabfm-evaluation)。
- 光伏方向今天没有比 [Cold-Start Photovoltaic Forecasting with TSFMs](https://arxiv.org/abs/2606.07457) 更强的新条目；过去三个月里，它仍是最直接连接 `TSFM + 冷启动部署 + PV forecasting` 的论文。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-03 14:00 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv) / [仓库 API](https://api.github.com/repos/zezhishao/DailyArXiv)
- 仓库状态：默认分支 `master`，README 标注 `Last update: 2026-07-03`。
- `Time Series` 板块内、且与本主题高相关的近窗条目：
  - [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)，日期 2026-07-01，直接命中多变量 TSFM 与流式推理。
  - [Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models](https://arxiv.org/abs/2606.31804)，日期 2026-06-30，偏能源时序的不确定性控制。
  - [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)，论文日期 2026-06-17；`DailyArXiv` 行内显示为 2026-06-29，推测对应版本更新时间而非首次公开日期，因此保留但降低“按日追新”置信度。
- `Time Series` 板块内发现但需要降优先级的条目：
  - [DeXposure-FM: A Time-series, Graph Foundation Model for Credit Exposures and Stability on Decentralized Financial Networks](https://arxiv.org/abs/2602.03981) 原始 arXiv 编号对应 2026-02，超出三个月窗口；虽在 README 中出现 `v2` 更新，但不作为近窗主条目。
- 未在当前 `DailyArXiv Time Series` README 中检到的高相关主题：
  - `AION`
  - `TimeClaw`
  - `TSCognition / TSAlign`
  - `TFRBench`
- 结论：`DailyArXiv` 对 foundation model 与部分 agentic risk/energy 论文有帮助，但不足以覆盖时序 Agent / reasoning 全量进展；本晨报仍以 arXiv 直检结果为主，`DailyArXiv` 作为补充信号源。

## 1. 时间序列基础模型最新研究

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204)
- 简短摘要：将 TiRex 从单变量扩展到多变量与 streaming forecasting，使用 memory-centric recurrent 设计在新观测持续到来时保持常数级 patch 推理成本，并支持 future-known covariates。
- 相关性判断：最高。它直接面向在线时序 Agent、持续监控和长上下文滚动推理，是今天最需要优先阅读的 TSFM 新作。

### [2026-06-30] Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models

- 日期：2026-06-30
- 来源：[arXiv](https://arxiv.org/abs/2606.31804)
- 简短摘要：提出 `STOIC`，先用图时序预测器产生点预测，再把残差重写为 tabular 形式，借助 foundation model 做 zero-shot conformal calibration，提升能源图时序预测区间的可靠性。
- 相关性判断：高。它不属于通用 TSFM 预训练，但非常契合“预测 + 风险边界 + Agent 决策支持”的工程闭环。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：强调 `vintage-consistent` 和 `no leakage` 的真实宏观预测设置，避免 TSFM 在 real-time forecasting 中吃到未来修订数据或观测泄漏。
- 相关性判断：高。它把“真实部署可用性”推到 TSFM 设计中心，对需要审计时间戳和数据可用性的研究 Agent 很重要。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：把 forecasting、interval estimation、model selection 等任务统一到 decision-theoretic pretraining 框架中，用模拟世界和目标效用直接学习近似最优决策规则。
- 相关性判断：高。它对时序 Agent 的 reward design、validator 目标和推理后验设计都有直接启发。

### [2026-06-25] Unified Zero-Shot Time Series Forecasting: A Darts Foundation

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27438)
- 简短摘要：在 Darts 中引入统一 `FoundationModel` 接口，打通 Chronos-2、TimesFM 2.5、TiRex、PatchTST-FM 的 zero-shot、fine-tuning、uncertainty 与 backtesting 工作流。
- 相关性判断：中高。它更偏工程接口，但非常适合作为时序 Agent 的模型路由层与 benchmarking backend。

### [2026-06-16] Do Time Series Foundation Model Benchmarks Hide Regime-Dependent Failures? Evidence from Traffic Speed Forecasting

- 日期：2026-06-16
- 来源：[arXiv](https://arxiv.org/abs/2606.18367)
- 简短摘要：指出 TSFM 的总体平均指标会掩盖 regime transition 时段的严重失效，提出按交通状态分层评测并给出后处理修正方案。
- 相关性判断：高。它提醒时序 Agent 不能只看 aggregate leaderboard，必须配 regime-aware validator 与 failure analysis。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 monitor、stress scenario、data-health gate 和 confidence gate 生成可审计的监管票据。
- 相关性判断：最高。它是近三个月最接近真实高风险生产环境的时序 Agent 设计之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw` agentic harness，为通用 LLM agent 补齐时序原生 runtime、可执行工具、episodic multimodal memory 和可审计分析链路。
- 相关性判断：最高。它直接命中本仓库关心的 harness / tools / memory / validation 闭环。

### [2026-05-29] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-29
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 的双模块架构，让 LLM 多轮调用工具形成语义推理轨迹，再把结果注入预测器。
- 相关性判断：最高。它是“语义 reasoning 融入数值 forecasting”最清晰的公开路线之一。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把现实世界时序任务 formalize 为 `task file + workspace + validation interface`，并由 agents、skills、rules、memory、evaluation、protocols 组成时序专用 harness。
- 相关性判断：最高。它最适合直接借鉴到本仓库的任务协议与验证循环设计。

### [2026-05-14] Nexus : An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：将 forecasting 分解为时序模式理解、文本上下文整合和最终综合预测等多阶段 agent 流程，强调数值与非结构化语境的联合推理。
- 相关性判断：高。它代表“forecasting 本身就是 agentic reasoning problem”的一条路线。

### [2026-05-11] TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning

- 日期：2026-05-11
- 来源：[arXiv](https://arxiv.org/abs/2605.10038)
- 简短摘要：提出 exploratory execution learning，通过 `Explore -> Compare -> Distill -> Reinject` 机制把历史执行经验蒸馏成可复用技能。
- 相关性判断：高。它补的是 Agent 长期能力积累，而不是单次求解，对时序分析类 coding agent 很关键。

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
- 简短摘要：提出 `T2SP`，把时间序列分解为趋势、周期与显著事件，并转写成更贴近代码/程序的结构化表示，减少 LLM 对原始数值串的模态错配。
- 相关性判断：高。它不是完整 Agent 系统，但非常关键，因为它直接改造了“时序如何喂给 reasoning model”这一接口层。

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
- 相关性判断：高。它为“为什么 forecasting 需要 reasoning benchmark”给出了更明确的方法论。

## 4. GitHub 上值得跟踪的新项目

### 时间序列 / Agent / Harness

#### [2026-06-30] ServiceNow/Dr-CiK

- 日期：2026-06-30（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/ServiceNow/Dr-CiK)
- 简短摘要：仓库描述为 `A Testbed for Foresight-driven Agents`，topics 同时覆盖 `forecasting`、`foresight`、`benchmark`、`retrieval`、`time-series` 与 `codex`。
- 相关性判断：高。虽然不是纯时序预测仓库，但非常适合借鉴 foresight benchmark 与 agent evaluation 组织方式。

#### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：公开了时序 Agent 的代码基座，仓库直接对应 `Harnessing Generalist Agents for Contextualized Time Series`。
- 相关性判断：最高。优先读 runtime、tooling、memory 和 benchmark 目录。

#### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 整理论文、系统架构与可靠性议题，近一个月 star 增长快。
- 相关性判断：高。它适合做持续监控入口与补漏索引。

#### [2026-05-14] znasllc-io/memql

- 日期：2026-05-14（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/znasllc-io/memql)
- 简短摘要：自述为 `AI-native time-series memory graph`，提供 DSL 统一查询、memory graph 与 agent workflow。
- 相关性判断：中高。它不是 forecasting 仓库，但对时序 Agent 的 memory / state / query 层很有启发。

#### [2026-04-12] ztxtech/aion

- 日期：2026-04-12（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：仓库描述明确写为 `OpenCode-based time-series harness for structured forecasting, contextual reasoning, tool use, and validation-driven agent workflows`。
- 相关性判断：最高。它是当前最值得持续跟踪的时序 harness 仓库之一。

### 机器学习 / AutoML / Foundation Evaluation

#### [2026-07-02] shivansh-magnus/nimbus

- 日期：2026-07-02（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/shivansh-magnus/nimbus)
- 简短摘要：基于 LangGraph 的 multi-agent AutoML pipeline，覆盖 profiling、cleaning、feature engineering 和 classical ML model selection。
- 相关性判断：中高。虽然偏 tabular，但很适合作为 Agent 化建模流水线参考。

#### [2026-07-01] devYRPauli/tabfm-evaluation

- 日期：2026-07-01（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/devYRPauli/tabfm-evaluation)
- 简短摘要：独立复现实证 Google TabFM，测试 zero-shot tabular foundation model 的硬件与数据规模边界，并在仓库描述中明确记录上游 bug。
- 相关性判断：中高。对“foundation model 是否值得接入 Agent 工作流”提供了更现实的评测视角。

### 光伏功率预测

#### [未发现高置信新增项目]

- 日期：2026-07-03（本次检索时间）
- 来源：GitHub / HuggingFace 补检
- 简短摘要：本次未确认到创建于 2026-04-03 之后、且同时与 `PV forecasting + foundation model/agent` 强相关的高质量新仓库；光伏方向仍是“论文先走、官方代码滞后”。
- 相关性判断：中。说明当前追踪应以论文和机构页面为主。

## 5. 光伏功率预测最新研究

### [2026-06-30] Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models

- 日期：2026-06-30
- 来源：[arXiv](https://arxiv.org/abs/2606.31804)
- 简短摘要：虽然不专做 PV，但解决了能源图时序里的不确定性校准问题，适用于电站群和区域调度。
- 相关性判断：中高。适合做光伏站群预测区间与风险评估的迁移参考。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运 PV 站点缺少历史观测的问题，先生成 physics-informed synthetic history，再利用 TSFM 做 zero-shot / cold-start forecasting。
- 相关性判断：最高。它同时命中 `TSFM`、`冷启动`、`PV forecasting` 和 `可部署流程`。

### [2026-04-27] SolarTformer: A Transformer Based Deep Learning Approach for Short Term Solar Power Forecasting

- 日期：2026-04-27
- 来源：[arXiv](https://arxiv.org/abs/2604.24306)
- 简短摘要：围绕短期太阳能功率预测提出 transformer 方案，用自注意力建模时序依赖与气象变量交互，并利用站点元数据提升跨电站泛化。
- 相关性判断：中高。它不是 foundation model，但适合作为短期 PV baseline。

### [2026-04-10] On-Meter Graph Machine Learning: A Case Study of PV Power Forecasting for Grid Edge Intelligence

- 日期：2026-04-10
- 来源：[arXiv](https://arxiv.org/abs/2604.19800)
- 简短摘要：研究在边缘智能电表上部署 GCN / GraphSAGE 进行 PV 功率预测，重点是图模型在端侧设备上的训练与部署。
- 相关性判断：中高。它更偏部署工程，但对“边缘侧光伏 Agent”很有参考价值。

### [2026-04-05] Solar-VLM: Multimodal Vision-Language Models for Augmented Solar Power Forecasting

- 日期：2026-04-05
- 来源：[arXiv](https://arxiv.org/abs/2604.04145) / [GitHub](https://github.com/rhp413/Solar-VLM)
- 简短摘要：将多变量时间序列、卫星图像和文本天气描述统一进多模态 PV forecasting 框架，并用图结构建模站点间相关性。
- 相关性判断：中高。它和纯 TSFM 路线不同，但对多模态上下文增强与 reasoning 很有启发。

## 6. 观察与下一步

- 今天最值得优先精读的三项：`TiRex-2`、`AION`、`TSCognition/TSAlign`。
- 如果只看一个 GitHub 新项目：优先看 `Dr-CiK`；如果只看一个开箱可拆的时序 harness：优先看 `TimeClaw` 与 `aion`。
- 对本仓库后续工程最有价值的组合：`AION` 的 `task/workspace/validator` 协议、`TimeClaw` 的 runtime / memory、`TFRBench` 的 reasoning trace 评测思路。
- 光伏方向继续建议跟踪 `Cold-Start PV TSFM` 是否公开官方代码；若下周仍无代码，可单独整理一份“复现实验计划”。
- 今天是周五（2026-07-03），已同步更新本周周报 `weekly-brief-2026-W27.md`。

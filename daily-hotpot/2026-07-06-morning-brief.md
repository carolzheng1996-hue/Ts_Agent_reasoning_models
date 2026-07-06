# 2026-07-06 时间序列 Agent / Reasoning / Foundation Model 晨间简报

日期说明：自动化上下文仍显示 `2026-07-05`，但本机实际时间为 `2026-07-06 10:08 CST`；本文按本机日期 `2026-07-06` 生成。  
检索时间：2026-07-06 09:35-10:08 Asia/Shanghai  
时间窗口：2026-04-06 至 2026-07-06  
筛选口径：优先检索 arXiv、官方项目页、GitHub、HuggingFace 与 `DailyArXiv` README；主条目仅保留过去三个月内可确认日期的内容。若仅能确认 README 更新日期、仓库 `updated_at` 或 arXiv 版本日期，则在条目中明确降优先级。  
本次重点检索词：`time series foundation model`、`time series agent`、`time series reasoning`、`Zeus`、`TiRex-2`、`AION`、`TimeClaw`、`KairosAgent`、`TSCognition`、`TFRBench`、`photovoltaic forecasting`、`solar power forecasting`、`DailyArXiv Time Series`。

## 今日摘要

- 最新、且与本仓库最直接相关的 TSFM 进展是 [Zeus](https://arxiv.org/abs/2607.01918) 与 [TiRex-2](https://arxiv.org/abs/2607.01204)。前者强调 `tuning-free` 多任务统一，后者强调 `multivariate + streaming + constant-cost inference`，都直接贴近时序 Agent 的在线推理需求。
- `DailyArXiv` 当前 `Time Series` 板块比上次更偏“广义时序论文流”，但仍能补到 `Zeus`、`TiRex-2`、`STOIC`、`DeXposure-Claw` 等高价值条目；对 `AION`、`TimeClaw`、`KairosAgent`、`TSCognition/TSAlign`、`TFRBench` 与光伏冷启动论文仍覆盖不足。
- Agent 主线没有变：`AION`、`TimeClaw`、`KairosAgent`、`DeXposure-Claw` 依旧是最值得跟踪的四条路线；新增值得注意的是 [An Agentic AI Pipeline for Appliance-Level Energy Anomaly Detection and LLM-Driven Recommendations](https://arxiv.org/abs/2606.28467)，它更接近“时序告警 + RAG + recommendation”的落地系统。
- 推理主线依旧由 [TSCognition / TSAlign](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)、[T2SP](https://arxiv.org/abs/2606.12481)、[TimeSage-MT](https://arxiv.org/abs/2606.01498) 领跑，说明“时序如何表示给 LLM / agent”仍是当前瓶颈。
- GitHub 近窗项目里，最该继续盯的是 [shivansh-magnus/nimbus](https://github.com/shivansh-magnus/nimbus)、[devYRPauli/tabfm-evaluation](https://github.com/devYRPauli/tabfm-evaluation)、[ServiceNow/Dr-CiK](https://github.com/ServiceNow/Dr-CiK)、[ztxtech/aion](https://github.com/ztxtech/aion)。
- 光伏方向过去三个月里，最高相关条目仍是 [Cold-Start Photovoltaic Forecasting with TSFMs](https://arxiv.org/abs/2606.07457)；本次还新看到 [An unsupervised kernel norm monitoring for fault detection in a time series photovoltaic system](https://arxiv.org/abs/2607.01541)，但它偏故障检测，不是功率预测主线。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-06 09:50 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv) / [raw README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)
- 仓库状态：README 当前显示 `Last update: 2026-07-06`。
- 当前 `Time Series` 板块内、且与本主题高相关的近窗条目：
  - [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)，日期 2026-07-02，直接命中“统一多任务 TSFM”。
  - [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)，日期 2026-07-01，直接命中“流式多变量 TSFM”。
  - [Do Time Series Foundation Model Benchmarks Hide Regime-Dependent Failures? Evidence from Traffic Speed Forecasting](https://arxiv.org/abs/2606.18367)，README 日期 2026-07-01，首次公开日期 2026-06-16，说明其 README 日期更接近版本更新时间，但仍在三个月窗口内。
  - [Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models](https://arxiv.org/abs/2606.31804)，日期 2026-06-30，偏能源时序的 foundation-model-assisted uncertainty calibration。
  - [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)，README 日期 2026-06-29，首次公开日期 2026-06-17；主题高度相关，但按“逐日追新”口径需降低日期置信度。
- 当前 `Time Series` 板块内发现、但需要降优先级的相关条目：
  - [DeXposure-FM: A Time-series, Graph Foundation Model for Credit Exposures and Stability on Decentralized Financial Networks](https://arxiv.org/abs/2602.03981)，README 日期 2026-06-30，但 arXiv 编号对应首次公开于 2026-02，已超出三个月窗口。
  - [TS-Haystack: A Multi-Scale Retrieval Benchmark for Time Series Language Models](https://arxiv.org/abs/2602.14200)，README 日期 2026-06-30，但原始 arXiv 编号对应首次公开于 2026-02，也已超窗。
- 当前 `Time Series` 板块未检到的高相关主题：
  - `AION`
  - `TimeClaw`
  - `KairosAgent`
  - `TSCognition / TSAlign`
  - `TFRBench`
  - `Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`
- 结论：`DailyArXiv` 今天适合补 foundation/evaluation/energy 边上的近窗论文，但仍不足以覆盖时序 Agent、reasoning benchmark 与光伏预测主线；本晨报继续以 arXiv 直检与 GitHub/API 补证为主。

## 1. 时间序列基础模型最新研究

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出统一 `tuning-free` TSFM，通过多尺度 Transformer 与 `Multi-Objective Temporal Masking` 同时覆盖 extrapolation、interpolation 与 global abstraction 等多类任务，不再把 zero-shot forecasting 当成唯一目标。
- 相关性判断：最高。它直接指向“一个时序基础模型是否能被 Agent 当作通用底座”这个核心问题。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204)
- 简短摘要：将 TiRex 扩展到多变量与 streaming forecasting，采用 memory-centric recurrent 设计，在新观测持续到来时维持常数级 patch 推理成本，并支持 future-known covariates。
- 相关性判断：最高。它非常贴合在线时序 Agent、持续监控和滚动长上下文推理。

### [2026-06-30] Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models

- 日期：2026-06-30
- 来源：[arXiv](https://arxiv.org/abs/2606.31804)
- 简短摘要：提出 `STOIC`，先用图时序预测器做点预测，再把残差重写为 tabular 表示，借助 foundation model 做 zero-shot conformal calibration，从而提升能源图时序区间预测的可靠性。
- 相关性判断：高。它虽然不是“通用 TSFM 预训练”论文，但非常适合给时序 Agent 增加可审计的不确定性边界。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：围绕 `vintage-consistent` 与 `no leakage` 设计 TSFM，严格避免真实部署里常见的 revision bias 和 temporal contamination，用更真实的实时宏观预测设置重做 foundation-model 评估。
- 相关性判断：高。它把“时间戳纪律”和“真实可部署性”推到了 TSFM 设计中心。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：把 forecasting、interval estimation、model selection 等任务统一进 decision-theoretic pretraining，用模拟世界和目标效用直接训练近似最优的时序决策器。
- 相关性判断：高。它对 Agent 的 validator、reward design 和推理后验目标设定都很有启发。

### [2026-06-16] Do Time Series Foundation Model Benchmarks Hide Regime-Dependent Failures? Evidence from Traffic Speed Forecasting

- 日期：2026-06-16
- 来源：[arXiv](https://arxiv.org/abs/2606.18367)
- 简短摘要：指出 TSFM 的 aggregate metrics 会掩盖 regime transition 时段的严重失效，并给出分层评测与后处理修正方案。
- 相关性判断：高。它提醒时序 Agent 不能只信全局 leaderboard，必须配 regime-aware validator。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-26] An Agentic AI Pipeline for Appliance-Level Energy Anomaly Detection and LLM-Driven Recommendations

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.28467)
- 简短摘要：把电器级能耗监控拆成 forecasting、anomaly detection、RAG 检索、Diagnosis Agent 和 Report Agent，并用 reflective memory 吸收运维反馈。
- 相关性判断：高。它更偏应用，但很接近“时序告警 + 工具调用 + 结构化结论”的真实生产链路。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：以图时序 foundation model 预测 DeFi 暴露网络，再经 deterministic monitors、stress scenarios、data-health gate 和 confidence gate 输出可审计监管票据。
- 相关性判断：最高。它依旧是近三个月最成熟的高风险时序 Agent 公开方案之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw` harness，为通用 LLM agent 补齐时序原生 runtime、可执行工具、episodic multimodal memory 与可审计分析链路。
- 相关性判断：最高。它直接命中本仓库关注的 harness、tool use、memory、validation 闭环。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 的双模块架构，让 LLM 多轮调用工具形成语义推理轨迹，再把结果注入预测器。
- 相关性判断：最高。它是“文本/语义 reasoning 显式注入数值 forecasting”最清晰的公开路线之一。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把现实世界时序任务 formalize 为 `task file + workspace + validation interface`，并由 agents、skills、rules、memory、evaluation、protocols 构成时序专用 harness。
- 相关性判断：最高。它最适合直接借鉴到本仓库的任务协议与审查循环设计。

### [2026-05-14] Nexus : An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：将 forecasting 分解为时序模式理解、文本上下文整合和最终综合预测等多阶段 agent 流程，强调数值信号与非结构化语境的联合推理。
- 相关性判断：高。它代表“forecasting 本身就是 agentic reasoning 问题”的路线。

### [2026-05-11] TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning

- 日期：2026-05-11
- 来源：[arXiv](https://arxiv.org/abs/2605.10038)
- 简短摘要：提出 `Explore -> Compare -> Distill -> Reinject` 机制，把 exploratory execution 蒸馏成可复用技能，解决时序 Agent 容易“一次做对但不会积累经验”的问题。
- 相关性判断：高。它补的是长期能力积累，而不是单次推理。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 与 `TSAlign` 框架，把时序 reasoning 拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类任务，并用 patch-level alignment 强化 LLM 的语义对齐。
- 相关性判断：最高。它是近窗时序 reasoning 方向最完整的任务体系化工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent 和混合模式在时序理解任务上的表现，发现代码执行能带来稳定增益，但统计细节和验证边界仍是主要失败点。
- 相关性判断：高。它直接回答“LLM coding agent 是否真的会做时间序列分析”。

### [2026-06-10] Representing Time Series as Structured Programs for LLM Reasoning

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.12481)
- 简短摘要：提出 `T2SP`，把时间序列拆成趋势、周期与显著事件，并转写为更贴近代码/程序的结构化表示，减少 LLM 对原始数值串的模态错配。
- 相关性判断：高。它直接作用于“时序该如何喂给 reasoning model”的接口层。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序 reasoning benchmark，覆盖 8 个真实领域、240 个任务和 2680 个对话轮次，显式暴露 memory、uncertainty handling 与 domain decision 的短板。
- 相关性判断：高。它比单轮 QA 更贴近 analyst workflow。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：用模板和 LLM agent 从真实数据自动生成大规模时序 reasoning 题目、答案与质量评估结果，降低 benchmark 构造成本。
- 相关性判断：中高。它更像 benchmark factory，但很适合持续扩展私有评测集。

### [2026-04-07] TFRBench: A Reasoning Benchmark for Evaluating Forecasting Systems

- 日期：2026-04-07
- 来源：[arXiv](https://arxiv.org/abs/2604.05364) / [项目页](https://tfrbench.github.io/)
- 简短摘要：把 forecasting system 的 reasoning trace 单独抽出来做评测，强调 cross-channel dependency、trend、external events 等解释链路应成为独立 benchmark。
- 相关性判断：高。它为“为什么 forecasting 需要 reasoning benchmark”给出了更清晰的方法论。

## 4. GitHub 上值得跟踪的新项目

### [2026-07-02] shivansh-magnus/nimbus

- 日期：2026-07-02（GitHub `created_at`）
- 来源：[GitHub](https://github.com/shivansh-magnus/nimbus)
- 简短摘要：基于 LangGraph 的 multi-agent AutoML pipeline，覆盖 profiling、cleaning、feature engineering、feature selection 与 classical ML training。
- 相关性判断：中高。虽然偏 tabular，但很适合作为 Agent 化建模流水线参考。

### [2026-07-01] devYRPauli/tabfm-evaluation

- 日期：2026-07-01（GitHub `created_at`）
- 来源：[GitHub](https://github.com/devYRPauli/tabfm-evaluation)
- 简短摘要：独立复现实证 Google TabFM，重点测试 zero-shot tabular foundation model 的数据规模、硬件成本与失败边界，并记录上游 bug。
- 相关性判断：中高。它对“foundation model 是否值得接入 Agent 工作流”提供了更现实的评测视角。

### [2026-06-30] ServiceNow/Dr-CiK

- 日期：2026-06-30（GitHub `created_at`）
- 来源：[GitHub](https://github.com/ServiceNow/Dr-CiK)
- 简短摘要：`A Testbed for Foresight-driven Agents`，同时覆盖 foresight、forecasting、retrieval、benchmark 与 codex 等主题。
- 相关性判断：高。虽然不是纯时序仓库，但非常适合借鉴 foresight benchmark 和 agent evaluation 组织方式。

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：公开 `Harnessing Generalist Agents for Contextualized Time Series` 对应代码，重点可读 runtime、tooling、memory 与 benchmark 部分。
- 相关性判断：最高。它是时序 Agent 工程落地最直接的代码入口之一。

### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01（GitHub `created_at`）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 整理论文、系统结构与可靠性问题，当前 star 增速仍快。
- 相关性判断：高。适合作为持续监控入口与补漏索引。

### [2026-05-14] znasllc-io/memql

- 日期：2026-05-14（GitHub `created_at`）
- 来源：[GitHub](https://github.com/znasllc-io/memql)
- 简短摘要：自述为 `AI-native time-series memory graph`，以单一 DSL 统一概念、查询、agent workflow 与 memory graph。
- 相关性判断：中高。它不是 forecasting 仓库，但对时序 Agent 的 memory/state/query 层很有启发。

### [2026-04-12] ztxtech/aion

- 日期：2026-04-12（GitHub `created_at`）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：仓库描述明确写为 `OpenCode-based time-series harness for structured forecasting, contextual reasoning, tool use, and validation-driven agent workflows`。
- 相关性判断：最高。它仍是当前最值得持续跟踪的时序 harness 仓库之一。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-07-01] An unsupervised kernel norm monitoring for fault detection in a time series photovoltaic system

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01541)
- 简短摘要：提出 kernel-based norm monitoring，用无监督窗口化方法检测并解释光伏系统中的传感器故障与 partial shading。
- 相关性判断：中。它偏故障检测而非功率预测，但属于光伏时序运维链条上的近窗新作。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运 PV 站点缺少历史观测的问题，先生成 physics-informed synthetic history，再用 TSFM 做 zero-shot / cold-start forecasting。
- 相关性判断：最高。它同时命中 `TSFM`、`冷启动`、`PV forecasting` 和 `部署可行性`。

### [2026-04-27] SolarTformer: A Transformer Based Deep Learning Approach for Short Term Solar Power Forecasting

- 日期：2026-04-27
- 来源：[arXiv](https://arxiv.org/abs/2604.24306)
- 简短摘要：提出用于短期 solar power forecasting 的 transformer 方案，用自注意力建模时间依赖与气象变量交互，并利用站点元数据提升跨站泛化。
- 相关性判断：中高。它不是 foundation model，但可作为短期光伏预测 baseline。

### [2026-04-10] On-Meter Graph Machine Learning: A Case Study of PV Power Forecasting for Grid Edge Intelligence

- 日期：2026-04-10
- 来源：[arXiv](https://arxiv.org/abs/2604.19800)
- 简短摘要：研究在边缘智能电表上部署 GCN / GraphSAGE 进行 PV 功率预测，重点覆盖图模型的训练、ONNX 化与端侧执行。
- 相关性判断：中高。它对“边缘侧光伏 Agent / 部署型预测系统”很有参考价值。

## 6. 需要继续跟踪的空白

- `Cold-Start Photovoltaic Forecasting with TSFMs` 目前仍未确认到高置信官方代码仓库；下次继续优先补检 GitHub / HuggingFace / 作者主页。
- `DailyArXiv` 仍没有稳定覆盖 `AION`、`TimeClaw`、`KairosAgent`、`TSCognition/TSAlign`、`TFRBench` 这几条主线；后续仍应以 arXiv 定向检索为主。
- 若后续要做“当周新增项目”周报，建议重点对比 `nimbus`、`tabfm-evaluation`、`Dr-CiK`、`aion`、`TimeClaw` 是否出现新的 benchmark、tooling 或 validator 目录更新。

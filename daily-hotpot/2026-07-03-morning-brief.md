# 2026-07-03 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-03 11:35-13:10 Asia/Shanghai  
时间窗口：2026-04-03 至 2026-07-03  
筛选口径：优先检索 arXiv、OpenReview、ACL/NeurIPS/ICLR/ICML/KDD/AAAI 相关公开页、官方项目页、GitHub、机构博客与 DailyArXiv；主条目只保留过去三个月内可确认日期的内容。GitHub 项目优先使用仓库 `created_at`，若仅能确认 `updated_at` 或关联论文日期，则标注不确定并降优先级。  
本次重点检索词：`time series foundation model`, `TiRex-2`, `time series agent`, `agentic time series`, `time series reasoning`, `TFRBench`, `time series harness`, `AutoML`, `photovoltaic forecasting`, `DailyArXiv Time Series`。

## 今日摘要

- 今天最明确的新 foundation model 条目是 [TiRex-2](https://arxiv.org/abs/2607.01204)。`DailyArXiv` 的 `Time Series` 板块已在 2026-07-03 收录它，说明过去 24 小时内基础模型方向仍在向 `multivariate + streaming + constant-cost inference` 推进。
- Agent 和 reasoning 方向没有搜到比昨天更强、且日期更近的新论文；近三个月内仍以 `DeXposure-Claw`、`KairosAgent`、`AION`、`TimeClaw`、`TSCognition/TSAlign`、`TimeSage-MT` 为主线。
- GitHub 方面，本周新增最值得跟踪的项目是 `ServiceNow/Dr-CiK`、`shivansh-magnus/nimbus` 和 `devYRPauli/tabfm-evaluation`。前两者分别补 agent foresight benchmark 与轻量 AutoML pipeline，后者补 tabular foundation model 的复现实证。
- 光伏功率预测方向今天未发现比 2026-06-05 冷启动 PV TSFM 更强的新条目；本日继续保留该论文和 2026-06-30 的 `STOIC` 作为能源时序可迁移主线。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-03 12:05 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 仓库状态：GitHub API 返回 README `Last update: 2026-07-03`，`Time Series` 板块今天可见新条目。
- 今日高相关线索：
  - [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)，日期 2026-07-01，直接命中多变量 TSFM 与 streaming inference。
  - [Aionoscope: Debugging Latent-State Accessibility in Time-Series Representations](https://arxiv.org/abs/2607.00956)，日期 2026-07-01，更偏 representation diagnostics；与 Agent/reasoning 的直接关系中等。
  - [LeNEPA: No-Augmentation Next-Latent Prediction for Time-Series Representation Learning](https://arxiv.org/abs/2607.00958)，日期 2026-07-01，更偏 SSL recipe；与 foundation model 主线中等相关。
- 今日未见比 `DeXposure-Claw`、`TSCognition` 更近且更强的 Agent/reasoning 论文，因此这两个方向沿用昨天的主排序。

## 1. 时间序列基础模型最新研究

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204)
- 简短摘要：将 TiRex 从单变量扩展到多变量和 streaming forecasting，强调在连续到达的新观测下仍保持常数级 patch 推理成本，同时兼顾过去与未来协变量。
- 相关性判断：最高。它直接对应“可流式部署的时序基础模型”，对在线 Agent、持续监控和长上下文推理都很关键。

### [2026-06-30] Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models

- 日期：2026-06-30
- 来源：[arXiv](https://arxiv.org/abs/2606.31804)
- 简短摘要：提出 `STOIC`，在图时序预测后用 tabular foundation model 做 zero-shot conformal calibration，为能源图时序提供更可靠的预测区间。
- 相关性判断：高。它不属于“通用 TSFM 预训练”，但把 foundation model 用在高风险能源时序的不确定性控制上，对 agentic forecasting 很有工程价值。

### [2026-06-27] MACROCAST: A Foundation Time-Series Model for Zero-Shot Probabilistic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：针对宏观经济 nowcasting 与实时预测场景，强调 vintage-consistent 数据使用、零样本概率预测和对 temporal contamination 的显式控制。
- 相关性判断：高。它把“是否能部署”放到 TSFM 设计中心，对需要时间戳审计和数据版本控制的研究 Agent 很重要。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：把 forecasting、interval estimation、model selection 统一到 decision-theoretic pretraining 中，目标是围绕下游效用而不是单一误差指标训练模型。
- 相关性判断：高。它对 agentic forecasting 的 reward design、validator 目标和决策后验很有启发。

### [2026-06-25] Unified Zero-Shot Time Series Forecasting: A Darts Foundation

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27438)
- 简短摘要：在 Darts 生态里抽象统一 `FoundationModel` 接口，打通 Chronos、TimesFM、TiRex 等 TSFM 的 zero-shot、fine-tuning、uncertainty 与 backtesting 工作流。
- 相关性判断：中高。它更偏接口工程层，但非常适合作为时序 Agent 的模型路由与 benchmarking backend。

### [2026-06-25] Pretrained Time-Series Foundation Models for Financial Return Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27100)
- 简短摘要：系统比较 TimeGPT、TimesFM、Moirai、Chronos 等 TSFM 在金融收益率预测中的表现，并强调其相对随机游走基线的增益并不稳定。
- 相关性判断：中高。它为“Agent 是否应该默认信任 TSFM”提供了反例，提醒必须保留基线、置信度和统计检验。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先由时序/图模型预测 DeFi 暴露网络，再由包含 monitor、stress scenario、data-health gate 和 confidence gate 的 agentic pipeline 生成监管分析与风险票据。
- 相关性判断：最高。它是“预测模型 + 规则约束 + LLM 决策”最接近真实生产风控的时序 Agent 案例之一。

### [2026-05-29] KairosAgent: A Time-Series-Agentic Framework for Forecasting and Monitoring

- 日期：2026-05-29
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 的 modular 结构，让 LLM 多轮调用统计工具形成 morphology description，再把语义信息注入预测器。
- 相关性判断：最高。它直接连接 semantic reasoning 与 numeric forecasting，是时序 Agent 最有代表性的融合式路线。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把 realistic time-series work formalize 成 `task file + workspace + validation interface`，并提出由 rules、skills、memory、evaluation、protocol 组成的 harness。
- 相关性判断：最高。它补的是时序 Agent 最缺的任务协议与验证闭环，尤其适合作为本仓库后续实验框架参考。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：将 forecasting 拆为趋势理解、模式识别、上下文整合与最终 synthesis 等阶段，强调多阶段上下文推理对预测质量的贡献。
- 相关性判断：高。它代表“把 forecasting pipeline agent 化”的思路，但工程化 harness 证据弱于 AION 和 TimeClaw。

### [2026-05-11] TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning

- 日期：2026-05-11
- 来源：[arXiv](https://arxiv.org/abs/2605.10038) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：通过 exploratory execution learning 让 agent 在真实时序分析流程中调用工具、写代码、保存记忆并复用历史轨迹，提升 contextualized time-series analysis。
- 相关性判断：最高。它是公开可运行度最高的 time-series agent 基座之一，尤其值得看工具服务、memory bank 和 benchmark runner。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` benchmark 与 `TSAlign` 对齐框架，把时序 reasoning 拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务。
- 相关性判断：最高。它把时序 reasoning 从图形识别推进到认知任务结构化，是 reasoning model 与 benchmark 设计的关键参考。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合模式在时序理解任务上的表现，发现代码执行虽有帮助，但统计边界条件和验证仍是主要失误来源。
- 相关性判断：高。它直接回答“LLM coding agent 是否足够懂时间序列”，对是否必须配验证器、统计工具和多轮审查很有指导意义。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序 reasoning benchmark，覆盖真实领域任务、跨回合记忆与统一评测协议，目标是更接近真实分析工作流。
- 相关性判断：高。它适合专门测试 memory、uncertainty handling 和 iterative diagnosis。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：通过模板和 LLM agent 自动生成大量时序 reasoning 题目、答案与验证脚本，降低专用 benchmark 的构造成本。
- 相关性判断：中高。它更偏 benchmark factory，但对持续生成领域私有评测集很实用。

### [2026-04-07] Forecasting Systems Need Better Reasoning Benchmarks / TFRBench

- 日期：2026-04-07
- 来源：[arXiv](https://arxiv.org/abs/2604.07493) / [项目页](https://tfrbench.github.io/)
- 简短摘要：指出现有 forecasting benchmark 更偏误差打分，缺少对系统性推理能力、解释性与多步骤分析的评估，并据此构建更贴近分析流程的新基准。
- 相关性判断：高。它对“forecasting system 为什么需要 reasoning benchmark”给出了更明确的问题定义。

## 4. GitHub 上值得跟踪的新项目

### 时间序列

#### [2026-06-30] ServiceNow/Dr-CiK

- 日期：2026-06-30（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/ServiceNow/Dr-CiK)
- 简短摘要：`Dr-CiK` 自述为 foresight-driven agents testbed，topics 同时包含 `forecasting`、`retrieval`、`benchmark`、`time-series` 与 `codex`。
- 相关性判断：高。它不是纯时序预测仓库，但非常适合借鉴 foresight benchmark 与 agent evaluation 组织方式。

#### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：公开了 CLI、工具服务、memory、evaluation 和 benchmark 组件，是目前最完整的时序 Agent/harness 参考实现之一。
- 相关性判断：最高。优先读代码：runtime、memory bank、trajectory logging。

#### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 整理论文、系统架构和可靠性议题，星标增长较快。
- 相关性判断：高。它不是执行框架，但很适合做持续监控入口和文献漏检补丁。

#### [2026-05-30] digitaldrywood/detent

- 日期：2026-05-30（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/digitaldrywood/detent)
- 简短摘要：基于 GitHub Projects 的 agentic work orchestration，包含 worktree、validation gate 和 merge train。
- 相关性判断：中高。它不是 timeseries-specific，但对 AION/TimeClaw 式 harness 的工程调度层有直接参考价值。

#### [2026-05-17] DC-research/TempoWAVE

- 日期：2026-05-17（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/DC-research/TempoWAVE) / [arXiv](https://arxiv.org/abs/2606.26487)
- 简短摘要：通过 multi-wavelet number embeddings 改善 LLM 对连续数值与多尺度波动的表达能力，公开训练与评测代码。
- 相关性判断：高。它更偏 numeric interface，而不是 agent runtime，但对时序 reasoning 和语义-数值桥接很重要。

#### [2026-04-12] ztxtech/aion

- 日期：2026-04-12（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：仓库描述明确写为 `OpenCode-based time-series harness for structured forecasting, contextual reasoning, tool use, and validation-driven agent workflows`。
- 相关性判断：最高。它是当前最值得持续跟踪的时序 harness 项目之一。

### 机器学习 / AutoML / Harness

#### [2026-07-02] shivansh-magnus/nimbus

- 日期：2026-07-02（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/shivansh-magnus/nimbus)
- 简短摘要：基于 LangGraph 的 multi-agent AutoML pipeline，覆盖 profiling、cleaning、feature engineering 和 classical ML model selection。
- 相关性判断：中高。虽然偏 tabular，不是 timeseries-specific，但很适合作为“Agent 驱动 AutoML 流程”参考。

#### [2026-07-01] devYRPauli/tabfm-evaluation

- 日期：2026-07-01（GitHub 仓库创建日期）
- 来源：[GitHub](https://github.com/devYRPauli/tabfm-evaluation)
- 简短摘要：独立复现实证 Google TabFM，在不同硬件与数据规模下测试 zero-shot tabular foundation model 的性能边界。
- 相关性判断：中高。它更偏复现与评测，但可为时序 Agent 选择 tabular side-model 时提供现实基线。

### 光伏功率预测

#### [未发现高置信新增项目]

- 日期：2026-07-03（本次检索时间）
- 来源：GitHub / HuggingFace 补检
- 简短摘要：本次未确认到创建于 2026-04-03 之后、且同时与 `PV forecasting + time-series foundation model/agent` 强相关的高质量新项目；今天继续以论文与机构页为主。
- 相关性判断：中。说明光伏方向近期仍是“论文先行、代码滞后”的状态。

## 5. 光伏功率预测最新研究

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运 PV 站点缺少历史观测的问题，先生成 physics-informed synthetic history，再通过 TSFM 做 zero-shot / cold-start forecasting。
- 相关性判断：最高。它同时命中 `TSFM`、`冷启动`、`PV forecasting` 和 `可部署流程`，仍是本周光伏方向最该优先阅读的工作。

### [2026-06-30] Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models

- 日期：2026-06-30
- 来源：[arXiv](https://arxiv.org/abs/2606.31804)
- 简短摘要：虽然不专做 PV，但解决了能源图时序里的预测区间校准问题。
- 相关性判断：中高。对光伏电站群、区域调度和风险评估场景有较强迁移价值。

### [2026-04-27] SolarTformer: A Transformer Based Deep Learning Approach for Short Term Solar Power Forecasting

- 日期：2026-04-27
- 来源：[arXiv](https://arxiv.org/abs/2604.20621)
- 简短摘要：围绕短期太阳能功率预测提出面向时序模式捕获的 transformer 架构，重点在短时 horizon 的误差控制。
- 相关性判断：中高。它不是 foundation model，但仍适合作为光伏方向短期预测 baseline。

### [2026-04-10] On-Meter Graph Machine Learning: A Case Study of PV Power Forecasting for Grid Edge Intelligence

- 日期：2026-04-10
- 来源：[arXiv](https://arxiv.org/abs/2604.07399)
- 简短摘要：研究图机器学习在电表侧 PV 功率预测中的应用，更强调分布式电网边缘场景。
- 相关性判断：中高。与 foundation model 不同，但对未来把图结构先验接入 PV Agent 很有价值。

### [2026-04-05] Solar-VLM: Multimodal Vision-Language Models for Augmented Solar Power Forecasting

- 日期：2026-04-05
- 来源：[arXiv](https://arxiv.org/abs/2604.03470)
- 简短摘要：把视觉与语言辅助信号引入太阳能预测，探索超越纯数值时序输入的 multimodal forecasting。
- 相关性判断：中。与 Agent/reasoning 的关系不如 TSFM 直接，但对多模态上下文增强路线值得保留。

## 6. 观察与下一步

- 今天新增最值得跟进：`TiRex-2`、`Dr-CiK`、`nimbus`。
- 如果今天只精读三项：先读 `TiRex-2`，再读 `AION` 仓库与论文，最后读 `TSCognition/TSAlign`。
- 对本仓库后续工程最有价值的组合：`AION` 的 task-workspace-validation 协议、`TimeClaw` 的 runtime/memory、`Dr-CiK` 的 foresight benchmark。
- 今天是周五（2026-07-03），已同步更新本周周报 `weekly-brief-2026-W27.md`。

# 2026-07-02 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-02 09:45-10:45 Asia/Shanghai  
时间窗口：2026-04-02 至 2026-07-02  
筛选口径：优先保留 arXiv、OpenReview、官方项目页、机构博客、GitHub 与 `DailyArXiv` 中可确认日期的条目；仅纳入过去三个月内的内容。若 GitHub 项目无法直接确认创建日期，则以关联论文公开日期、仓库 `News`、README 自述或可见提交历史作近似，并标记为 `不确定`。

## 今日摘要

- 基础模型方向今天最值得补的是 `MACROCAST` 与 `Operational Viability` 两类信号：前者把 `real-time / vintage-consistent / leakage-free` 拉到宏观预测场景，后者直接讨论 TSFM 何时适合部署、何时该退回专用模型。
- Agent 方向依然由 `TimeClaw`、`AION`、`KairosAgent` 三条线领跑，重点已经从“让 LLM 预测”转到 `harness`、`tool runtime`、`memory`、`validation` 和 `语义-数值融合`。
- reasoning 方向最强信号仍然是 `TSCognition/TSAlign`、`TimeSage-MT` 和 `Can LLM Coding Agents Reason About Time Series?`，说明时序 reasoning 正在从单轮题转向 `认知任务拆解 + 多轮对话 + 代码执行`。
- GitHub 项目侧，今天最值得持续跟踪的是 `TimeClaw`、`TempoWAVE`、`TimeSeriesExamAgent` 和 `Awesome-Agentic-Time-Series`；它们分别代表 `agent runtime`、`numeric interface`、`benchmark generation` 与 `研究导航`。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-02 10:20 Asia/Shanghai
- 来源：[DailyArXiv 仓库](https://github.com/zezhishao/DailyArXiv)
- 结论：最近高相关增量仍主要落在 `MACROCAST`、`Simulacrum`、`Unified Zero-Shot Time Series Forecasting: A Darts Foundation` 以及 `TempoWAVE` 一类 foundation/interface 论文上；未见比 `TSCognition`、`TimeClaw` 更强的新 reasoning 或 agent 公开信号。

## 1. 时间序列基础模型最新研究

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：提出面向 real-time 宏观预测的 lightweight TSFM，核心是同时规避 temporal contamination 与 revision bias，保证训练与评测都遵守 vintage-consistent 约束。
- 相关性判断：高。它把“基础模型能否真实部署”这个问题推进了一步，尤其适合需要严格避免信息泄漏的经济、金融和政策场景。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：将 forecasting、estimation、model selection 放到 decision-theoretic pretraining 框架中学习，使模型更直接地贴合下游决策目标，而非仅优化点预测误差。
- 相关性判断：高。它代表 TSFM 正从“通用表征器”走向“任务和决策目标感知”的基础模型。

### [2026-06-25] Unified Zero-Shot Time Series Forecasting: A Darts Foundation

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27438)
- 简短摘要：在 Darts 生态里提供统一的 `FoundationModel` 接口，试图把 Chronos-2、TimesFM 2.5、TiRex、PatchTST-FM 等基座纳入可组合的零样本预测流程。
- 相关性判断：中高。它的关键价值不只在模型本身，而在把 TSFM 变成工程上可复用、可回测、可集成的标准组件。

### [2026-06-25] Speaking Numbers to LLMs: Multi-Wavelet Number Embeddings for Time Series Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.26487) / [GitHub](https://github.com/DC-research/TempoWAVE)
- 简短摘要：提出 `TempoWAVE`，通过 multi-wavelet、digit-wise 数值表征增强 LLM 对连续数值、局部波动和多尺度结构的理解能力。
- 相关性判断：高。它是 foundation model 与 reasoning/agent 之间非常关键的“数值接口层”工作。

### [2026-05-23] Assessing the Operational Viability of Foundation Models for Time Series Forecasting

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：不再只比较平均误差，而是按 `周期性强的人类系统`、`物理约束过程`、`金融市场`、`异构需求预测` 四类 operational regimes 评估 TSFM，并提出 `Complexity Router` 做模型路由。
- 相关性判断：高。它直接回答“什么时候该上 foundation model，什么时候不该”，对生产级时序 Agent 的模型选择和成本控制非常重要。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，用时序原生 runtime、episodic memory 和 capability-evolution loop，把通用 LLM agent 拉到 contextualized time-series 任务上。
- 相关性判断：最高。它仍然是近三个月里最像“可运行时序 Agent 基座”的公开工作之一。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent)
- 简短摘要：把 LLM-based reasoner 与 TSFM-based forecaster 组合成 agentic framework，通过工具调用和多轮 refinement 把语义推理与数值预测融合。
- 相关性判断：高。它代表 `语义推理 + 数值预测双通道` 的 Agent 路线，对多模态或事件驱动时序场景尤其关键。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045)
- 简短摘要：把 next-generation time-series tasks 形式化为 `task file + workspace + validation interface` 三元组，并围绕 agents、skills、rules、memory、evaluation、protocols 构建 practical harness。
- 相关性判断：最高。它把时序 Agent 研究从“刷单一 benchmark”推进到“可执行任务与工作区级评测”。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 分解为宏观趋势、微观模式、上下文整合和最终 synthesis 等专门阶段，强调非结构化上下文在时序预测中的作用。
- 相关性判断：高。它很清楚地把 forecasting 重述成 agentic reasoning 问题，而不只是数值外推问题。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` benchmark 和 `TSAlign` 框架，把时序 reasoning 拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务。
- 相关性判断：最高。它是当前“时间序列 reasoning 不只看图，而是做认知推理”的代表作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合方案在时序理解任务上的表现，发现代码执行显著提升结果，但仍会在统计细节与边界条件上出错。
- 相关性判断：高。它直接触及“代码代理是否足够可靠”这一时序 Agent 核心问题。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建面向多轮对话的时序 reasoning benchmark，覆盖 240 个任务、2680 轮交互和决策导向场景，强调 memory、uncertainty handling 和 domain decision gaps。
- 相关性判断：高。它把评测从单轮答题推进到更接近真实分析流程的 multi-turn 交互。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：利用模板与 LLM agent 自动生成大规模时序 reasoning benchmark，并支持多域、多模型与自动化验证。
- 相关性判断：中高。它更偏 benchmark generation infrastructure，但对数据供给和 reasoning 评测扩容很重要。

## 4. GitHub 上值得跟踪的新项目

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（以关联论文与官方代码公开日期近似）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：仓库 README 明确将其定义为 `time-series-native agent harness`，包含 runtime、memory bank、MCP tools、benchmark runner 和可复现实验入口。
- 相关性判断：最高。它是目前最值得直接读代码的 time-series agent/harness 项目之一。

### [2026-06-25] DC-research/TempoWAVE

- 日期：2026-06-25（以论文与官方代码公开日期近似）
- 来源：[GitHub](https://github.com/DC-research/TempoWAVE)
- 简短摘要：官方实现包含预训练、SFT、evaluation、tests 和 benchmark data workflow，工程组织比较完整。
- 相关性判断：高。它虽然不是 agent harness，但对增强时序 Agent 的 numeric interface 很关键。

### [2026-06，不确定] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06，不确定
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：README 明确写明该仓库创建于 2026-06，用于维护 `Agentic Time Series` 的 paper list，并按 benchmark、foundation model、LLM4TS、agent systems 等主题组织。
- 相关性判断：中高。它不是执行框架，但很适合作为日常补检入口和文献导航页。

### [2026-04-11] magwiazda/TimeSeriesExamAgent

- 日期：2026-04-11（以关联论文与公开代码日期近似）
- 来源：[GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：公开了自动出题、自动验证、样本可视化和 LLM 评测脚本，可直接用于构建 domain-specific 时序 reasoning benchmark。
- 相关性判断：中高。它不是 forecasting system，但对建立自己的时序 reasoning data factory 很有启发。

## 5. 观察与下一步

- 今天相对昨天最值得新增关注的是 `Assessing the Operational Viability of Foundation Models for Time Series Forecasting`。它把 TSFM 的讨论从“有没有提升”推进到“在哪些 operational regimes 里值得部署”。
- 如果只挑三条今天最该继续跟的线，建议顺序是 `TimeClaw`、`TSCognition`、`MACROCAST`，分别对应 `agent runtime`、`reasoning benchmark` 和 `real-time foundation model`。
- 今天未额外生成周报：当前日期是周四（2026-07-02），不满足“每周五更新周报”的条件。

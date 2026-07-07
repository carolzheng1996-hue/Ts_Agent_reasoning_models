# 2026-07-07 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-07 10:25-10:46 Asia/Shanghai  
时间窗口：2026-04-07 至 2026-07-07  
筛选口径：优先检索 arXiv、OpenReview、ICML / ICLR / NeurIPS / ACL / KDD / AAAI 相关论文页、官方项目页、GitHub 仓库主页与 GitHub repository metadata。主条目只保留过去三个月内可确认日期的内容；GitHub 项目创建日期统一以 `created_at` 核验。无法确认日期的条目不列入主列表。  
本次重点检索词：`time series foundation model`, `TSFM`, `time series agent`, `time series reasoning`, `Zeus`, `TiRex-2`, `MACROCAST`, `AION`, `TimeClaw`, `KairosAgent`, `TSCognition`, `TFRBench`, `AutoML agent`, `time-series harness`。

## 今日摘要

- 截至 2026-07-07，过去一周里最值得关注的 TSFM 新论文仍是 [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918) 与 [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)。前者把多任务统一 TSFM 往 tuning-free 推进，后者则把流式推理成本压到更适合在线 Agent 的形态。
- Agent 方向没有比 6 月主线更强的新公开论文冒头，当前最值得继续盯的是 [DeXposure-Claw](https://arxiv.org/abs/2606.19501)、[TimeClaw](https://arxiv.org/abs/2606.05404)、[KairosAgent](https://arxiv.org/abs/2605.30002) 和 [AION](https://arxiv.org/abs/2605.25045)。它们分别对应高风险监控、通用时序 agent runtime、语义 reasoning 融合预测器和 harness 协议层。
- Reasoning 方向仍由 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)、[Representing Time Series as Structured Programs for LLM Reasoning](https://arxiv.org/abs/2606.12481) 组成最强组合，覆盖任务体系、代码执行能力上限和序列表达接口。
- GitHub 新项目里，过去一周内最值得补记的是 [tachyurgy/observability-assistant](https://github.com/tachyurgy/observability-assistant) 与 [idriss-aaidoun/emads](https://github.com/idriss-aaidoun/emads)。它们不是重型时序研究仓库，但都很像“最小可运行的 agent + eval/harness 原型”。
- 若从“立即可借鉴到本仓库”的角度排序，今日最值得继续追踪的公开资产是：`Zeus`、`TiRex-2`、`TimeClaw`、`AION`、`TSCognition`、`observability-assistant`、`TSF`。

## 0. 快速补检结论

- 补检来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv)
- 核验时间：2026-07-07 10:30 Asia/Shanghai
- 结论：README 已更新到 2026-07-07；`Time Series` 相关近窗公开信号仍以 `Zeus`、`TiRex-2`、`Probabilistic Low-Voltage Peak Load Forecasting with Time Series Foundation Models...` 为主，没有发现比这几篇更高优先级的新 TSFM / Agent / reasoning 条目。
- 研判：`DailyArXiv` 适合做 TSFM 近窗补检，但对 `AION`、`TimeClaw`、`TSCognition` 这一类时序 Agent / reasoning 主线仍不够完整，因此本简报继续以 arXiv 直检、官方项目页和 GitHub 项目核验为主。

## 1. 时间序列基础模型最新研究

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出统一的 tuning-free TSFM，围绕多尺度 Transformer 与 `Multi-Objective Temporal Masking` 设计，希望在 extrapolation、interpolation、global abstraction 等异构任务上减少任务特定调参。
- 相关性判断：最高。它直接影响“一个 foundation model 如何服务多类时序 Agent 任务”的基座设计。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204)
- 简短摘要：将 TiRex 扩展到多变量与 streaming forecasting，采用 memory-centric recurrent 设计，在新观测持续到来时保持常数级 patch 推理成本，并支持 future-known covariates。
- 相关性判断：最高。它是当前最贴近在线监控、滚动重规划和持续执行 Agent 场景的 TSFM 路线之一。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：围绕 real-time macro forecasting 强调 `vintage-consistent` 和 `no leakage`，把真实部署中的发布时间戳、修订数据和回测一致性纳入 TSFM 训练与评测。
- 相关性判断：高。它提醒时序 foundation model 不能只追总体指标，必须把“真实时间可用信息边界”嵌进训练协议。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：把 forecasting、区间估计和模型选择统一进 decision-theoretic pretraining，把训练目标从“拟合序列”推向“直接学习近似最优决策规则”。
- 相关性判断：高。它对时序 Agent 的 reward 设计、后验校准和 action-aware forecasting 很有启发。

### [2026-06-16] Do Time Series Foundation Model Benchmarks Hide Regime-Dependent Failures? Evidence from Traffic Speed Forecasting

- 日期：2026-06-16
- 来源：[arXiv](https://arxiv.org/abs/2606.18367)
- 简短摘要：指出 TSFM 在总体平均指标上可能掩盖 regime transition 区间的严重失败，建议按状态切换和困难子区间做分层评测。
- 相关性判断：高。它直接关系到时序 Agent 的 validator 设计，尤其是何时该 abstain、回退或请求更多工具。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运光伏站点历史观测不足的问题，先构造 physics-informed synthetic history，再用 TSFM 做 cold-start / zero-shot forecasting。
- 相关性判断：高。它虽然是领域论文，但非常适合作为“TSFM 如何进入冷启动部署流程”的案例。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress test、data-health gate 和 confidence gate 生成可审计风险票据。
- 相关性判断：最高。它是近三个月最接近高风险生产监督系统的时序 Agent 之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 补齐时序 runtime、可执行工具、episodic multimodal memory 和可审计分析链路。
- 相关性判断：最高。它最直接命中本仓库关注的 harness、tool use、memory 和 validation 闭环。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 多轮调用工具形成语义推理轨迹，再把语义结论注入最终预测器。
- 相关性判断：最高。它代表“语义 reasoning 与数值 forecasting 显式解耦再融合”的清晰公开路线。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把现实时序任务 formalize 成 `task file + workspace + validator` 接口，并围绕 agents、skills、rules、memory、protocols 组织时序专用 harness。
- 相关性判断：最高。若目的是建设可复用的时序 Agent 运行框架，它是现在最值得直接拆解借鉴的开源基线之一。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 与 `TSAlign`，把时序 reasoning 系统化拆为 Decoding、Grounding、Inferring、Extrapolating、Acting 五类任务。
- 相关性判断：最高。它是近三个月最完整的时序 reasoning 任务体系化工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合模式在时序理解任务上的表现，发现代码执行带来增益，但统计边界条件和验证仍是主要失误来源。
- 相关性判断：高。它几乎直接对应“时序分析任务是否该默认交给 coding agent”的方法学问题。

### [2026-06-10] Representing Time Series as Structured Programs for LLM Reasoning

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.12481)
- 简短摘要：提出 `T2SP`，把时间序列分解成趋势、周期和显著事件，再转写成更接近程序的结构化表示，以缓解 LLM 处理原始数值串时的模态错配。
- 相关性判断：高。它解决的是“时间序列该如何喂给 reasoning model”这一关键接口层问题。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序 reasoning benchmark，覆盖真实领域任务、跨回合记忆、统一评测协议，并显式暴露 uncertainty handling 与 memory 的短板。
- 相关性判断：高。它比单轮 QA 更接近真实 analyst workflow，因此更适合检验 agentic reasoning。

### [2026-04-07] TFRBench: A Reasoning Benchmark for Evaluating Forecasting Systems

- 日期：2026-04-07
- 来源：[arXiv](https://arxiv.org/abs/2604.05364) / [项目页](https://tfrbench.github.io/)
- 简短摘要：把 forecasting system 的 reasoning trace 单独抽出来评测，强调跨变量依赖、趋势解释和外部事件影响不应被埋没在最终误差里。
- 相关性判断：高。它为“为什么 forecasting 需要 reasoning benchmark”提供了很清晰的方法论基座。

## 4. GitHub 上值得跟踪的最新项目

说明：以下条目均使用 GitHub repository metadata 核验创建日期，来源链接指向仓库主页。

### 时间序列 / Agent / Harness

#### [2026-07-01] tachyurgy/observability-assistant

- 日期：2026-07-01（GitHub `created_at`）
- 来源：[GitHub](https://github.com/tachyurgy/observability-assistant)
- 简短摘要：零依赖 TypeScript 原型，围绕“为什么 p95 spike”构建 synthetic time-series agent，集成 MAD 异常检测、时间先后因果排序、3 个 abstain gate 与 eval harness。
- 相关性判断：高。它是很小但很干净的时序 reasoning + abstention + evaluation 最小系统。

#### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01（GitHub `created_at`）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 组织论文、架构和可靠性问题，是过去一个月最实用的 agentic TS 补漏索引之一。
- 相关性判断：高。它不是系统代码，但非常适合持续扫面公开进展。

#### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16（GitHub `created_at`）
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：自述为 `Plug-and-play benchmark harness for time-series forecasting foundation models (LTSF + GIFT-Eval)`，强调快速接入 TSFM 与标准化评测。
- 相关性判断：高。它与本仓库关心的 benchmark harness 最接近。

#### [2026-04-12] ztxtech/aion

- 日期：2026-04-12（GitHub `created_at`）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：OpenCode-based 时序 harness，显式面向 structured forecasting、contextual reasoning、tool use 与 validation-driven workflow。
- 相关性判断：最高。它仍是当前最值得持续跟踪的时序 harness 仓库之一。

### Machine Learning / AutoML / Agentic Workflow

#### [2026-07-01] idriss-aaidoun/emads

- 日期：2026-07-01（GitHub `created_at`）
- 来源：[GitHub](https://github.com/idriss-aaidoun/emads)
- 简短摘要：可解释 multi-agent data science workflow，覆盖 EDA、model selection、explainability、reporting 和 persistent memory。
- 相关性判断：中高。它不是时序专用，但很像可迁移到时序 AutoML 的轻量 workflow 原型。

#### [2026-06-20] MandeepKharb/automl-agent-system

- 日期：2026-06-20（GitHub `created_at`）
- 来源：[GitHub](https://github.com/MandeepKharb/automl-agent-system)
- 简短摘要：基于 LangGraph 和 Groq 的 multi-agent ML pipeline，目标是自动训练模型并生成报告。
- 相关性判断：中。研究深度一般，但对“社区如何快速拼出 AutoML agent 管线”有观察价值。

#### [2026-06-04] REHXZ/AUTOML

- 日期：2026-06-04（GitHub `created_at`）
- 来源：[GitHub](https://github.com/REHXZ/AUTOML)
- 简短摘要：本地优先的 `Agentic Machine Learning` 工作台，多 agent 贯穿 CRISP-DM 生命周期，强调 goal-driven discovery workspace。
- 相关性判断：中高。虽然主要是 tabular ML，但对 agentic ML orchestration 和实验管理很有借鉴意义。

#### [2026-05-27] skazhutin/autovibe-gym

- 日期：2026-05-27（GitHub `created_at`）
- 来源：[GitHub](https://github.com/skazhutin/autovibe-gym)
- 简短摘要：LLM-powered AutoML gym，提供隐藏最终评测、轨迹日志、受控反馈和可重复交互协议，用于评估迭代式 ML agents。
- 相关性判断：中高。它虽然不是时序专用，但对构造时序 agent 的训练环境和 evaluation harness 很有帮助。

## 5. 研判与后续关注

- 如果目标是“找新的 foundation model 能力边界”，今天应该继续追 `Zeus`、`TiRex-2`、`MACROCAST`。
- 如果目标是“找能直接落成 runtime / harness 的设计”，优先拆 `TimeClaw`、`AION`、`TSF` 和 `observability-assistant`。
- 如果目标是“把 reasoning 从单轮题目推进到真实 analyst workflow”，优先跟 `TSCognition`、`TimeSage-MT`、`TFRBench`。
- 今天没有发现日期可确认、且显著强于现有主线的新公开论文；因此更合理的动作不是频繁换主线，而是围绕现有高价值条目做代码级复现、协议对比和 benchmark 映射。

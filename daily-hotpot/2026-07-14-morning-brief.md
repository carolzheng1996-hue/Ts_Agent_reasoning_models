# 2026-07-14 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-14 08:23-09:05 Asia/Shanghai（含 `DailyArXiv`、GitHub API 与官方项目页补检）  
时间窗口：2026-04-14 至 2026-07-14  
筛选口径：优先保留能在 arXiv 摘要页、官方项目页、GitHub 官方仓库页或 GitHub API metadata 中确认日期的条目；三个月外内容不列为主条目。  
本次重点检索词：`time series foundation model`、`TSFM`、`time series agent`、`agentic time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`、`solar power forecasting`。

## 今日摘要

- `2026-07-14` 时点没有检出比 `2026-07-10` 的 [Neuro-Agentic Control](https://arxiv.org/abs/2607.09076)、`2026-07-09` 的 [PARA-PV](https://arxiv.org/abs/2607.08079)、`2026-07-08` 的 [TimEE](https://arxiv.org/abs/2607.07500) 更新且更贴题的新主线论文。
- foundation model 主线仍然最值得盯的，是 `RMISC` 的预训练语料证据、`Break-Even Analysis` 的部署阈值、`Electricity Price Forecasting` 的污染与漂移评测，以及 `CITRAS-FM` 这种更轻量、可协变量驱动的 TSFM 设计。
- agent 主线没有换挡，最强的系统性参考仍是 [TopoBrick](https://arxiv.org/abs/2607.06349)、[TimeClaw](https://arxiv.org/abs/2606.05404)、[KairosAgent](https://arxiv.org/abs/2605.30002) 与 [AION](https://arxiv.org/abs/2605.25045)。
- reasoning 主线继续收敛在 `benchmark + verifier + tool-grounding`：即 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)、[IRTS-ToolBench](https://arxiv.org/abs/2606.15107)、[TimeSage-MT](https://arxiv.org/abs/2606.01498)。
- GitHub 侧今天没有比 `2026-07-11` 的 [timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp) / [mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals) 更近且更高相关的新仓库；窗口内仍值得跟踪的是 `timeseries-mcp`、`TSAD-Agent`、`forecast-playground`、`time-series-autoML`、`autoresearch-timeseries-agent`、`TSF`。

## 0. 检索结论

- 本次优先使用的一手来源：
  - arXiv 摘要页与版本日期。
  - 官方项目页：`KairosAgent`、`AION`。
  - GitHub 官方仓库页与 GitHub API `created_at` / `updated_at` metadata。
  - [`zezhishao/DailyArXiv`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 的 `## Time Series` 原文。
- `DailyArXiv` 已于 `2026-07-14` 更新，但新出现的 `2026-07-10` 条目大多偏一般 forecasting / anomaly detection，并没有比现有 agent / reasoning / TSFM 主线更强的新信号。
- 本次没有纳入主条目的情况：
  - 只能找到搜索摘要、无法回到论文页或仓库页确认日期的内容。
  - 新建 GitHub 仓库虽然在窗口内，但更偏课程作业、通用 demo 或主题过宽，和时间序列 Agent / harness / reasoning 主线距离较远。
- 总判断：截至 `2026-07-14`，过去三个月内最稳定的主线仍然是五条：
  - `TSFM 的部署价值和 break-even`;
  - `预训练语料质量、污染风险与分布漂移`;
  - `Agent runtime 如何组织 tool / memory / validator`;
  - `时间序列 reasoning 能否被 benchmark 和 verifier 真正审计`;
  - `能源 / 光伏场景里，TSFM 与物理先验、检索和校正模块该如何组合`。

## 1. 时间序列基础模型最新研究

### [2026-07-10] Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09076)
- 简短摘要：提出 `LLM planner + pretrained TimesFM sentinel` 的闭环控制框架，用 counterfactual physics injection 在执行前模拟干预效果，并拒绝物理上不合理的动作。
- 相关性判断：中高。虽然应用是工业控制安全，但它很像时间序列 Agent 在高风险环境中的 `planner + verifier + world model` 原型。

### [2026-07-08] TimEE: End-to-end Time Series Classification via In-Context Learning

- 日期：2026-07-08
- 来源：[arXiv](https://arxiv.org/abs/2607.07500) / [GitHub](https://github.com/automl/timee)
- 简短摘要：提出 4.5M 参数的时序分类 foundation model，用 PFN 风格的合成任务元训练，在不重新训练目标数据集的情况下直接完成 end-to-end in-context classification。
- 相关性判断：中高。它不属于 forecasting 主线，但对“时间序列 foundation model 是否能直接承载 task-level ICL”很关键。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建真实世界多变量时序语料 `RMISC`，约含 200 个数据集和 1420 亿时间点，并直接比较真实多变量语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：最高。它仍然是“预训练语料到底决定了什么”这条主线里最硬的新证据之一。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与 Naive、ETS、ARIMA、XGBoost，给出 `样本量 + 季节性 + 基础设施成本` 共同决定的 break-even 框架。
- 相关性判断：最高。它最容易直接转成时序 Agent 的模型路由规则和 deployment guardrail。

### [2026-07-06] Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.05291)
- 简短摘要：系统比较 9 个 zero-shot TSFM 与 8 个经典计量波动率模型，指出 TSFM 在高噪声金融序列上并不会自动获胜，简单组合如 `TTM + Log-HAR` 仍然很强。
- 相关性判断：高。它为高噪声金融场景中的 fallback 和组合策略提供了直接证据。

### [2026-07-02] Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.02623)
- 简短摘要：面向电价预测构建降低 contamination risk 的评测框架，比较 TSFM、领域方法与简单集成在点预测、概率预测和尾部风险上的表现。
- 相关性判断：高。它非常贴近真实部署环境，尤其适合指导能源场景中的 validator 设计。

### [2026-06-09，v2 更新于 2026-07-10] CITRAS-FM: Tiny Time Series Foundation Model for Covariate-Informed Zero-Shot Forecasting

- 日期：2026-06-09（arXiv v2 更新于 2026-07-10）
- 来源：[arXiv](https://arxiv.org/abs/2606.10798) / [GitHub](https://github.com/hitachi-ais/citras-fm)
- 简短摘要：提出仅 7M 参数的 covariate-aware TSFM，通过 `Shifted Attention + CovSynth` 同时支持单变量、多变量和协变量驱动的 zero-shot forecasting，并强调 CPU 实时推理。
- 相关性判断：高。它代表了“更小、更便宜、对已知未来协变量更友好”的 TSFM 设计方向。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：提出 training-free 的零样本楼宇 IoT 预测框架，借助知识图谱构建结构骨架，并由 `agentic topology sampler` 在部署时为目标序列挑选外生变量。
- 相关性判断：高。它把 `agentic selection` 直接放进了时序部署链路，而不只是做通用 analyst agent。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 和 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它仍是近三个月最接近高风险生产监督场景的时序 Agent 系统之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 增加时序 runtime、可执行 temporal tools、episodic multimodal memory 与经验复用机制。
- 相关性判断：最高。它仍是时间序列 harness、tool use、memory 和 auditable runtime 的核心参考实现。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 通过多轮工具调用形成语义推理轨迹，再把结果融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的公开代表作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把现实时序任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation、protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是建设可复用时序 Agent 平台，它仍然是最系统化的参考之一。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：定义覆盖 Decoding、Grounding、Inferring、Extrapolating、Acting 的认知型时序 reasoning 任务谱系，并给出 `TSCognition` benchmark 与 `TSAlign` 框架。
- 相关性判断：最高。它仍是近三个月最像“总纲”的时间序列 reasoning 工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：审查 coding agent 在时序任务中的实际推理能力，发现即便有代码执行能力，模型仍会在统计假设、验证逻辑与不确定性处理上系统失误。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：围绕不规则采样 TSQA 构建 `IRTS-ToolBench`，强调 tool-grounded reasoning、可验证分析链路与可复现实验协议。
- 相关性判断：高。它把 verifier 和多工具调用正式拉进了时序 reasoning 评测。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：提出多轮时间序列 agent benchmark，覆盖 240 个任务和 2680 轮对话，强调记忆、证据积累、不确定性处理和决策型任务。
- 相关性判断：最高。它比单轮 TSQA 更接近真实 analyst / agent 工作流，是当前窗口内最值得保留的多轮 benchmark。

### [2026-05-05] FinSTaR: Towards Financial Reasoning with Time Series Reasoning Models

- 日期：2026-05-05
- 来源：[arXiv](https://arxiv.org/abs/2605.03460) / [GitHub](https://github.com/seunghan96/FinSTaR)
- 简短摘要：围绕金融场景提出 `FinTSR-Bench` 和 `FinSTaR`，把单实体 / 多实体与当前状态评估 / 未来行为预测组成 2x2 taxonomy，并引入 Compute-in-CoT 与 Scenario-Aware CoT。
- 相关性判断：高。它把时间序列 reasoning 的方法论真正压进了高噪声金融场景，而不是只做通用 QA。

## 4. GitHub 上最新且值得跟踪的新项目

### 时间序列

#### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供面向 AI agents 的 deterministic time-series MCP tools，覆盖 anomaly detection、changepoint、decomposition、trend tests 和 data-quality auditing，强调 typed interface 与无代码执行。
- 相关性判断：高。它比通用 agent infra 更贴近“时序 Agent 的工具层与可审计统计能力”。

#### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：为 tool-using agents 提供 trajectory-level eval harness，逐步评分工具选择、参数、grounding 和效率，并显式对接 CI 回归门禁。
- 相关性判断：中高。它不是时间序列专用仓库，但对构建时序 Agent 的 verifier / harness 层有直接借鉴价值。

#### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：一个面向时间序列 forecasting 的 AutoML web 工具，提供数据上传、模型运行和可视化入口，并独立部署到站点。
- 相关性判断：中。工程深度暂时有限，但它是窗口内最贴题、日期也最新的 `time-series + AutoML` 明确项目之一。

#### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：聚焦时间序列异常检测 Agent，本地运行，结合 TSAD 检测层与 LLM 分析层输出异常窗口、分数和解释结论。
- 相关性判断：中高。它仍然是窗口内主题最直接贴近 `timeseries agent` 的公开仓库之一。

#### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供面向 AI forecasting 的 `time-masked retrieval harness`，强调 leak-free 的 as-of tools 和 forecaster scaffold。
- 相关性判断：高。它非常贴近“防泄漏工具层 + 评测场”的核心工程问题。

#### [2026-06-17] AkshajKashyap/autoresearch-timeseries-agent

- 日期：2026-06-17（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：提供本地可复现的时间序列 forecasting benchmark，支持 synthetic/CSV 数据、基线模型、诊断报告、绘图和 config-driven experiment loop。
- 相关性判断：中高。它更像 benchmark scaffold，但对本地时序 Agent 试验台搭建很有参考价值。

#### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01（GitHub API `created_at`，`updated_at=2026-07-12`）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 维护论文清单，聚合时间序列 agentic systems 的架构、可靠性和前沿话题。
- 相关性判断：中高。它不是可执行框架，但作为情报聚合点很有用，且活跃度明显高于多数个人 demo 仓库。

#### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16（GitHub API `created_at`，`updated_at=2026-07-13`）
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：一个 plug-and-play 的 time-series foundation model benchmark harness，主打 `LTSF + GIFT-Eval` 评测管线。
- 相关性判断：高。虽然不是本周新建，但它是窗口内仍在活跃更新、且更贴近 `TSFM harness` 的仓库。

### 光伏功率预测

- 本轮未检出在 `2026-04-14` 至 `2026-07-14` 窗口内、同时又高度贴合 `光伏功率预测 + Agent / harness / reasoning` 的新 GitHub 或 HuggingFace 项目；因此本栏不强行补录低相关仓库。

## 5. 光伏功率预测最新研究

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：提出 physics-aware retrieval-augmented PV 预测框架，先检索形态相似且物理一致的历史片段，再用冻结的 Chronos 先验和轻量残差适配器校准预测，最后做分布漂移校正。
- 相关性判断：最高。它是最近三个月里把 `物理先验 + 检索 + TSFM prior + shift correction` 结合得最完整的光伏新工作之一。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运光伏站点缺少历史观测的问题，先用 plant metadata 与气象协变量生成 physics-informed synthetic histories，再让多种 TSFM 在 cold-start 条件下做推断式预测。
- 相关性判断：高。它把 `冷启动 PV forecasting + TSFM + 物理先验生成上下文` 明确联到一起，和部署场景非常贴近。

### [2026-05-18] Learning Long-Term Temporal Dependencies in Photovoltaic Power Output Prediction Through Multi-Horizon Forecasting

- 日期：2026-05-18
- 来源：[arXiv](https://arxiv.org/abs/2605.19074)
- 简短摘要：提出从单步预测转向 multi-horizon forecasting 的训练范式，联合利用天空图像与历史 PV 发电数据来捕获跨步长的长期依赖。
- 相关性判断：高。它直接贴近光伏功率预测本身，而且强调训练目标设计，而不是单一架构堆叠。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：在 ERCOT 高分辨率数据上系统比较 TimesFM、Chronos Bolt、MoiraiL、MOMENT、TTM 与经典深度学习基线在 solar、wind、load forecasting 上的零样本与微调表现。
- 相关性判断：最高。它仍是“TSFM 到底能否落在能源预测生产面”的直接证据。

## 6. 备注

- 今天不是周五（`2026-07-14`，周二），因此本次不生成 `weekly-brief-2026-WW.md`。
- 当前窗口起点是 `2026-04-14`；`2026-04-13` 及更早条目继续排除，不回流到主清单。
- 本次简报未纳入无法确认日期的条目，因此没有 `不确定` 优先级条目。

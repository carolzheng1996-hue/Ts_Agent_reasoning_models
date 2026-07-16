# 2026-07-16 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-16 14:45-15:35 Asia/Shanghai  
时间窗口：2026-04-16 至 2026-07-16  
优先来源：arXiv、官方项目页、GitHub 官方仓库页 / GitHub API、公开可访问的 `DailyArXiv` README、HuggingFace 公开搜索页  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`、`solar power forecasting`、`PV forecasting`

## 今日摘要

- 今天没有检出比 `2026-07-14` 的 [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454) 更近、且更贴近时间序列 foundation model / agent / reasoning 主线的新论文；因此主增量仍然是对 `TSFM 失效边界`、`router / verifier` 和 `光伏检索增强预测` 的复核。
- GitHub 新增检索里，`2026-07-14` 的 [StrikeDB](https://github.com/Mr-DS-ML-85/StrikeDB) 和 `2026-07-16` 的若干 solar demo 仓库都已检查，但和时间序列 Agent / harness 主线相关性偏弱或仓库内容过轻，本轮不升为主条目。
- 光伏方向过去三个月内最值得继续盯的仍是 [PARA-PV](https://arxiv.org/abs/2607.08079)、[Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)、[Empirical Assessment of TSFMs For Power System Forecasting Applications](https://arxiv.org/abs/2604.22077) 三条线：`检索增强 + 物理约束`、`零样本冷启动`、`电力系统实际部署评测`。
- 公开可访问的 [`DailyArXiv` README 页面](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 仍显示 `Last update: 2026-04-15`，`Time Series` 板块最新可稳定复核条目仍停在 `2026-04-13`，继续只作为低优先级补检来源。

## 0. 检索结论

- 本轮优先采用可直接确认日期的一手页面：
  - arXiv 摘要页上的 `Submitted on` 日期与摘要。
  - 官方项目页：`KairosAgent`、`AION`。
  - GitHub API 返回的 `created_at` / `updated_at` 与仓库描述。
- 本轮未纳入主条目的内容：
  - 只能搜到二手转述、但无法回到原始论文页确认日期的条目。
  - 新建 GitHub 仓库虽然日期更近，但本质上只是课程作业、portfolio、空壳 demo 或泛数据库工程。
  - HuggingFace 公开搜索页本轮未检出近三个月内、可确认日期且高相关的新 `timeseries agent / harness / PV forecasting` 模型或 Space。
- 总判断：截至 `2026-07-16`，过去三个月最稳定的五条主线仍然是：
  - `TSFM 的部署价值、失效边界与持续审计`;
  - `Agent runtime 如何组织 tool use、memory、validator 与外生变量选择`;
  - `时间序列 reasoning 是否能被 benchmark、router 与 verifier 真正审计`;
  - `GitHub 上开始出现更贴近时序工具层、trajectory eval harness 与 AutoML scaffold 的轻量实现`;
  - `光伏预测中，foundation model 要与检索、物理约束、分布漂移校正或冷启动先验结合才更实用`。

### DailyArXiv 补检结论

- 已直接核验公开可访问的 [`DailyArXiv` README 页面](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)。
- 页面当前显示 `Last update: 2026-04-15`，`Time Series` 板块最新可稳定复核条目是 `2026-04-13` 的 `MSTN` 与 `TempusBench`。
- 这些条目均早于本轮窗口起点 `2026-04-16`，因此今天不把 `DailyArXiv` 作为窗口内新增条目的主要来源。
- 如果仓库内前序晨报曾把 `7 月条目` 记作来自 `DailyArXiv Time Series`，今天公开页面无法复核到对应日期，因此统一按 `公开页日期不一致` 降优先级处理。

## 1. 时间序列基础模型最新研究

### [2026-07-14] Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12454)
- 简短摘要：评估将 `TimesFM` 零样本迁移到工业多变量异常检测的两条路径：按变量做 forecasting error 检测，或提取中间表示后接经典 outlier detector。结论是两条路径都不如现有专用方法，但异常边界处的误差峰值仍有价值。
- 相关性判断：高。它非常适合反向指导时序 Agent 的 `什么时候不要盲调 TSFM` 与 `change-point sentinel` 设计。

### [2026-07-13] Bet on Features: Anytime-Valid and Feature-Aware Auditing of Conditional Quantile Forecasters

- 日期：2026-07-13
- 来源：[arXiv](https://arxiv.org/abs/2607.11653)
- 简短摘要：提出面向黑盒条件分位数预测器的持续审计框架，在非 i.i.d. 流式环境里做 feature-aware calibration 检验，并给出对 `Chronos-2` 等模型的失准证据。
- 相关性判断：高。它不是新 TSFM 架构，但对 deployment guardrail、online validator 与风险告警极有用。

### [2026-07-08] TimEE: End-to-end Time Series Classification via In-Context Learning

- 日期：2026-07-08
- 来源：[arXiv](https://arxiv.org/abs/2607.07500) / [GitHub](https://github.com/automl/timee)
- 简短摘要：提出 4.5M 参数的时序分类 foundation model，用 PFN 风格的合成任务元训练，让模型在目标数据集上无需额外训练即可完成 in-context classification。
- 相关性判断：中高。它显示 TSFM 正在从 forecasting 扩展到 task-level ICL。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建真实世界多变量时序语料 `RMISC`，约含 200 个数据集和 1420 亿时间点，并系统比较真实多变量语料与合成语料预训练对零样本泛化的影响。
- 相关性判断：最高。它仍是“预训练语料质量决定什么”这条主线里最强的新证据之一。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与 Naive、ETS、ARIMA、XGBoost，给出 `样本量 + 季节性 + 基础设施成本` 共同决定的 break-even 决策框架。
- 相关性判断：最高。它最容易直接转成时序 Agent 的模型路由与上线准入规则。

### [2026-07-02] Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.02623)
- 简短摘要：围绕电价预测建立更严格的评测框架，重点检查 contamination risk、分布漂移与协变量依赖，并比较 TSFM、领域方法与简单集成在点预测、概率预测和尾部风险上的表现。
- 相关性判断：高。对能源类时序 Agent 的 validator 设计非常直接。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：提出强调 `vintage-consistent` 和 `no leakage` 的宏观预测 TSFM，把真实发布时间与可获得性边界显式写进训练和评测协议。
- 相关性判断：高。对任何强调严格回测一致性和无泄漏实验设计的时序 harness 都有参考价值。

### [2026-06-09，v2 更新于 2026-07-10] CITRAS-FM: Tiny Time Series Foundation Model for Covariate-Informed Zero-Shot Forecasting

- 日期：2026-06-09（arXiv 页显示后续更新）
- 来源：[arXiv](https://arxiv.org/abs/2606.10798) / [GitHub](https://github.com/hitachi-ais/citras-fm)
- 简短摘要：提出 7M 参数的 covariate-aware TSFM，通过 `Shifted Attention + CovSynth` 支持单变量、多变量和协变量驱动的 zero-shot forecasting，并强调 CPU 友好推理。
- 相关性判断：高。它代表了更小、更便宜、对已知未来协变量更友好的 TSFM 分支。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-10] Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09076)
- 简短摘要：提出 `LLM planner + TimesFM sentinel` 的闭环控制框架，用 counterfactual physics injection 在动作执行前模拟干预并拦截不合理方案。
- 相关性判断：中高。虽然是工业控制安全场景，但清楚展示了 foundation model 作为 deterministic guard 支撑 agentic control 的模式。

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：提出 training-free 的楼宇 IoT 零样本预测框架，通过知识图谱构建结构骨架，并由 `agentic topology sampler` 在部署时挑选外生变量。
- 相关性判断：高。它把 `agentic selection` 直接放进时序部署链路，而不是停留在通用 analyst agent 层。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 与 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它仍是近三个月里最像生产监督系统的时序 Agent 实现之一。

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
- 简短摘要：把现实时序任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation 与 protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是建设可复用的时序 Agent 平台，它仍是最系统化的公开参考之一。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：围绕稀疏、不规则、异步的临床时序构建 6600 个 QA 样本，并把显式时间证据与答案推导规则绑定到每个问题上。
- 相关性判断：高。它虽是临床垂域，但正中“不规则时序 + 可核验 reasoning”主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将时序 reasoning 中的 `文本模式 LLM` 与 `图像模式 VLM` 选择问题显式建成异构图路由任务，并按性能-成本偏好动态选择最优 `modality-model pair`。
- 相关性判断：最高。它非常接近未来时序 Agent 的 runtime router 与 cost-aware orchestration 设计。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：定义覆盖 `Decoding / Grounding / Inferring / Extrapolating / Acting` 的认知型时序 reasoning 谱系，并给出 `TSCognition` benchmark 与 `TSAlign` 框架。
- 相关性判断：最高。它仍是近三个月里最像“总纲”的时间序列 reasoning 工作。

### [2026-06-17] Beyond Tokenization: Direct Timestep Embedding and Contrastive Alignment for Time-Series Question Answering

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.18986)
- 简短摘要：提出 `CADE`，用直接 timestep embedding 与监督式对比对齐替代 BPE tokenization，把每个时间点直接映射到 LLM embedding space。
- 相关性判断：高。它切中了“LLM 为什么在数值时序上推理不稳”的一个核心瓶颈。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：审查 coding agent 在时序任务中的真实推理能力，发现即便允许代码执行，模型仍会在统计假设、验证逻辑与不确定性处理上系统失误。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：围绕不规则采样 TSQA 构建 `IRTS-ToolBench`，强调 tool-grounded reasoning、可验证分析链路与可复现实验协议。
- 相关性判断：高。它把 verifier 与多工具调用正式拉进了时序 reasoning 评测。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：提出多轮时间序列 agent benchmark，覆盖 240 个任务和 2680 轮对话，强调记忆、证据积累、不确定性处理与决策型任务。
- 相关性判断：最高。它比单轮 TSQA 更接近真实 analyst / agent 工作流。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供面向 AI agents 的 deterministic time-series MCP tools，覆盖 anomaly detection、changepoint、decomposition、trend tests 与 data-quality auditing。
- 相关性判断：高。它非常贴近“时序 Agent 的工具层与可审计统计能力”。

#### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：为 tool-using agents 提供 trajectory-level eval harness，逐步评分工具选择、参数、grounding 与效率。
- 相关性判断：中高。它不是时间序列专用仓库，但对时序 Agent 的 verifier / harness 层有直接借鉴价值。

#### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub API `created_at`，`updated_at=2026-07-15`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：一个面向时间序列 forecasting 的 AutoML web 工具，提供数据上传、模型运行和可视化入口。
- 相关性判断：中。工程深度有限，但它是窗口内最明确的 `time-series + AutoML` 新项目之一。

#### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：聚焦时间序列异常检测 Agent，本地运行，结合 TSAD 检测层与 LLM 分析层输出异常窗口、分数和解释结论。
- 相关性判断：中高。它仍然是窗口内主题最直接贴近 `timeseries agent` 的公开仓库之一。

#### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供面向 AI forecasting 的 `time-masked retrieval harness`，强调 leak-free 的 as-of tools 与 forecaster scaffold。
- 相关性判断：高。它非常贴近“防泄漏工具层 + 评测场”的核心工程问题。

#### [2026-06-30] automl/timee

- 日期：2026-06-30（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/automl/timee)
- 简短摘要：`TimEE` 官方代码仓库，对应近期 end-to-end time-series ICL foundation model，并且在窗口内保持活跃更新。
- 相关性判断：中高。更偏 foundation-model 实现，但与 `AutoML + time series model selection` 社区连接直接。

#### [2026-05-24] rnop/numerai-mcp-autoresearch

- 日期：2026-05-24（GitHub API `created_at`，`updated_at=2026-07-12`）
- 来源：[GitHub](https://github.com/rnop/numerai-mcp-autoresearch)
- 简短摘要：一个面向 Numerai 的 autonomous research harness，结合实验循环、Bayesian optimization、time-series cross-validation 与自定义 MCP server。
- 相关性判断：中高。虽然偏金融竞赛，但它是窗口内最像 `research harness + AutoML loop` 的可执行工程之一。

#### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16（GitHub API `created_at`，`updated_at=2026-07-13`）
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：一个 plug-and-play 的 time-series foundation model benchmark harness，主打 `LTSF + GIFT-Eval` 评测管线。
- 相关性判断：高。虽然不是本周新建，但它是窗口内仍在活跃更新、且更贴近 `TSFM harness` 的仓库。

- HuggingFace 补检：本轮未发现近三个月内可确认日期且高相关的新 `timeseries agent / harness / AutoML` 模型或 Space。

### 光伏功率预测

#### [2026-07-10] 9154327992/Solar-Power-Forecast-Agent

- 日期：2026-07-10（GitHub API `created_at`，`updated_at=2026-07-16`）
- 来源：[GitHub](https://github.com/9154327992/Solar-Power-Forecast-Agent)
- 简短摘要：一个基于 XGBoost、FastAPI、Streamlit 和 SQLite 的 solar power forecast agent，包含预测与可视化分析链路。
- 相关性判断：中。更像应用 demo，但明确把 `solar forecasting + agent` 组合在一起。

#### [2026-07-07] Keshav95299/PV-Power-Forecasting-and-Fault-Detection

- 日期：2026-07-07（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Keshav95299/PV-Power-Forecasting-and-Fault-Detection)
- 简短摘要：短期光伏功率预测与故障检测仓库，强调 conformal prediction 与 fault detection 的组合。
- 相关性判断：中。更偏课程 / 实验工程，但主题贴合 `PV forecasting + uncertainty`。

#### [2026-07-06] Kuba129cz/fve-probabilistic-prediction

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Kuba129cz/fve-probabilistic-prediction)
- 简短摘要：面向光伏系统的概率型日前功率预测仓库，采用 quantile-based 机器学习方法处理天气不确定性。
- 相关性判断：中高。虽然不是 foundation model，但它比纯 demo 更接近可部署的 PV uncertainty modeling。

- HuggingFace 补检：本轮未发现近三个月内可确认日期且高相关的新光伏预测模型或 Space。

## 5. 光伏功率预测最新研究

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：提出 `physics-aware retrieval + frozen Chronos prior + distribution shift correction` 的组合框架，先做物理一致的历史片段检索，再用轻量残差适配器接入 foundation model 先验，并对昼夜与天气切换造成的条件分布漂移做校正。
- 相关性判断：最高。它是当前窗口内把 `foundation model + 检索增强 + 物理约束 + 漂移校正` 组合得最完整的 PV 工作之一。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对新投运电站没有历史功率数据的冷启动场景，先用站点元数据和气象协变量构造 synthetic history，再让 TSFM 在推理时条件化使用。论文比较了 5 个 TSFM 与经典基线，并报告 covariate-aware 模型在多个数据集上明显更优。
- 相关性判断：最高。它是近三个月里最贴近真实新站点部署问题的 TSFM 光伏论文。

### [2026-04-27] SolarTformer: A Transformer Based Deep Learning Approach for Short Term Solar Power Forecasting

- 日期：2026-04-27
- 来源：[arXiv](https://arxiv.org/abs/2604.24306)
- 简短摘要：提出面向短期 solar power forecasting 的 attention-based 模型，并显式注入电站元数据以提升跨站点泛化。
- 相关性判断：中。它不是 agent / foundation model 路线，但仍是窗口内可确认日期的较新 PV forecasting 模型工作。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较 TimesFM、Chronos-Bolt、Moirai、MOMENT、TTM 等模型在 solar、wind、load forecasting 中的零样本、微调、多变量、长短上下文与泛化能力。
- 相关性判断：高。它为电力系统中的 `何时该用 TSFM，何时经典方法更实用` 提供了最贴近部署的证据。

## 6. 低优先级补充观察

- `2026-07-14` 新建的 [StrikeDB](https://github.com/Mr-DS-ML-85/StrikeDB) 同时带有 `timeseries`、`agent-memory`、`machine-learning` 话题，但核心是统一数据库引擎，不是时间序列 Agent / harness，本轮不列为主条目。
- `2026-07-15` 到 `2026-07-16` 之间确实出现了若干 solar forecasting 新仓库，但不少仓库内容很轻或刚初始化完成，因此只把更可读、主题更聚焦的三个项目保留在正文。

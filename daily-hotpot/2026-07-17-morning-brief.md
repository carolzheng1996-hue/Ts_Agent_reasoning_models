# 2026-07-17 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-17 08:40-16:30 Asia/Shanghai  
时间窗口：2026-04-17 至 2026-07-17  
优先来源：arXiv 摘要页 / arXiv API、官方项目页、GitHub 官方仓库页 / GitHub API、公开可访问的 `DailyArXiv` README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`、`solar power forecasting`

## 今日摘要

- 今天最值得补进主线的新信号不是“又一个更大的 TSFM”，而是 `2026-07-14` 的 [The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006) 与 [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454)。前者直接回答“什么时候额外上下文、检索或 foundation model 真能带来增益”，后者则更清楚地划出了 `TimesFM` 在多变量异常检测上的失效边界。
- `DailyArXiv` 今天可直接复核到 `Last update: 2026-07-17`，`Time Series` 板块里确实包含 `2026-07-15` 的 [The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006v2) 等近窗条目；因此它本轮恢复为中等优先级补检来源，但正文排序仍以 arXiv 原始 `published/submitted` 日期为准。
- Agent / reasoning 方向过去三个月最稳的骨架没有变化，仍是 `TimeClaw + KairosAgent + AION + TimeSage-MT + TSRouter + IRTS-ToolBench` 这条线；今天的增量更偏“怎么做 deployment audit / routing / guardrail”，而不是出现更强的新 benchmark。
- GitHub 侧，这周最值得继续跟的仍是 [timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)、[mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)、[time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)、[forecast-playground](https://github.com/xavierdurawa/forecast-playground) 和 [TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)。它们分别覆盖 `统计工具层`、`trajectory eval harness`、`AutoML UI scaffold`、`leak-free forecasting playground` 和 `异常检测 Agent`。
- 光伏方向过去三个月最有跟踪价值的仍是 [PARA-PV](https://arxiv.org/abs/2607.08079)、[Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)、[Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications](https://arxiv.org/abs/2604.22077) 三条线，分别对应 `检索增强 + 物理约束`、`零样本冷启动`、`电力系统部署评测`。

## 0. 检索结论

- 本轮优先采用可直接确认日期的一手页面：
  - arXiv 摘要页与 arXiv API 的 `published` / `updated` 元数据。
  - 官方项目页：`KairosAgent`、`AION`。
  - GitHub API 返回的 `created_at` / `updated_at` 与仓库描述。
  - [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 当前公开页。
- 本轮未纳入主条目的内容：
  - 只能搜到二手转述、无法回到原始论文页确认日期的条目。
  - 新建 GitHub 仓库虽然日期更近，但本质上是课程作业、portfolio 或内容过轻的 demo。
  - HuggingFace 公开页本轮未检出近三个月内、可确认日期且高相关的新 `timeseries agent / harness / AutoML` 项目。
- 总判断：截至 `2026-07-17`，过去三个月最稳定的五条主线仍然是：
  - `TSFM 的部署价值、失效边界与持续审计`;
  - `Agent runtime 如何组织 tool use、memory、validator 与外生变量选择`;
  - `时间序列 reasoning 是否能被 benchmark、router 与 verifier 真正审计`;
  - `GitHub 上开始出现更贴近时序工具层、trajectory eval harness 与 AutoML scaffold 的轻量实现`;
  - `光伏预测中，foundation model 要与检索、物理约束、分布漂移校正或冷启动先验结合才更实用`。

### DailyArXiv 补检结论

- 已直接核验公开可访问的 [`DailyArXiv` README 页面](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)。
- 页面当前显示 `Last update: 2026-07-17`，`Time Series` 板块里可以直接看到：
  - `2026-07-15` [The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting](https://arxiv.org/abs/2607.13006v2)
  - `2026-07-14` [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454)
  - `2026-07-10` [Neuro-Agentic Control](https://arxiv.org/abs/2607.09076)
  - `2026-07-09` [TSRouter](https://arxiv.org/abs/2607.08940)
  - `2026-07-09` [PARA-PV](https://arxiv.org/abs/2607.08079)
  - `2026-07-08` [TimEE](https://arxiv.org/abs/2607.07500)
- `DailyArXiv` 对 `forecasting / foundation model` 覆盖明显好于 `agentic reasoning / harness`；`TimeClaw`、`AION`、`KairosAgent`、`TimeSage-MT`、`IRTS-ToolBench` 仍然需要独立检索补齐。
- 日期口径：
  - 若 `DailyArXiv` 记录的是 `v2/v3` 更新日期，正文仍按 arXiv 原始 `published` 日期排序，并在需要时注明 `updated`。

## 1. 时间序列基础模型最新研究

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14（公开页 `online_date=2026-07-15`）
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出仅靠谱特征无法回答“更长上下文、检索插件或预训练 foundation model 是否有帮助”，并提出 `coverage deficit` 作为无标签部署诊断量，用来预测何时额外上下文真正带来收益。
- 相关性判断：最高。它直接服务于时间序列 Agent 的 `是否启用 retrieval / TSFM / longer context` 路由判断。

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

## 4. 光伏功率预测最新研究

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、分布漂移校正和分情境损失函数绑在同一条 PV 预测链路里。
- 相关性判断：最高。它几乎就是“光伏版 foundation model + retrieval + physics constraints”的最直接代表作。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：面向冷启动光伏场景生成 physics-informed synthetic history，让 TSFM 在没有目标站点历史观测时也能依靠元数据和气象协变量做 zero-shot 预测。
- 相关性判断：高。它回答了“站点刚上线时 TSFM 还能否工作”的关键落地问题。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较 TSFM、transformer 和深度学习基线在 solar、wind、load 三类电力预测任务上的零样本、微调、多变量输入、概率预测和泛化表现。
- 相关性判断：高。它为“电力系统里何时值得上 TSFM”提供了最像部署前检查表的证据。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

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

- 日期：2026-07-08（GitHub API `created_at`，`updated_at=2026-07-16`）
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

- 日期：2026-06-30（GitHub API `created_at`，`updated_at=2026-07-16`）
- 来源：[GitHub](https://github.com/automl/timee)
- 简短摘要：`TimEE` 官方代码仓库，对应近期 end-to-end time-series ICL foundation model，并且在窗口内保持活跃更新。
- 相关性判断：中高。更偏 foundation-model 实现，但与 `AutoML + time series model selection` 社区连接直接。

#### [2026-05-24] rnop/numerai-mcp-autoresearch

- 日期：2026-05-24（GitHub API `created_at`，`updated_at=2026-07-12`）
- 来源：[GitHub](https://github.com/rnop/numerai-mcp-autoresearch)
- 简短摘要：一个面向 Numerai 的 autonomous research harness，结合实验循环、Bayesian optimization、time-series cross-validation 与自定义 MCP server。
- 相关性判断：中高。虽然偏金融竞赛，但它是窗口内最像 `research harness + AutoML loop` 的可执行工程之一。

- HuggingFace 补检：本轮未发现近三个月内可确认日期且高相关的新 `timeseries agent / harness / AutoML` 模型或 Space。

### 光伏功率预测

#### [2026-07-10] 9154327992/Solar-Power-Forecast-Agent

- 日期：2026-07-10（GitHub API `created_at`，`updated_at=2026-07-16`）
- 来源：[GitHub](https://github.com/9154327992/Solar-Power-Forecast-Agent)
- 简短摘要：一个基于 XGBoost、FastAPI、Streamlit 和 SQLite 的 solar power forecast agent，包含预测与可视化分析链路。
- 相关性判断：中。更像工程 demo，但主题直接贴近 `PV forecasting agent`。

#### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，对应 `physics-aware retrieval + frozen foundation model prior + shift correction` 的光伏预测论文。
- 相关性判断：高。它是窗口内最值得优先拆解的光伏 foundation-model 项目。

## 推荐阅读顺序

1. 先看 [The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006)、[Break-Even Analysis](https://arxiv.org/abs/2607.04919)、[EPF Evaluation](https://arxiv.org/abs/2607.02623)，建立 `什么时候该上 TSFM / retrieval / longer context` 的部署视角。
2. 再看 [TimeClaw](https://arxiv.org/abs/2606.05404)、[AION](https://arxiv.org/abs/2605.25045)、[KairosAgent](https://arxiv.org/abs/2605.30002)、[TSRouter](https://arxiv.org/abs/2607.08940)，整理 runtime、tool schema、router 与 validator。
3. 最后看 [PARA-PV](https://arxiv.org/abs/2607.08079)、[Cold-Start PV Forecasting](https://arxiv.org/abs/2606.07457)、[timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)，把 `physics / retrieval / auditable tools` 三条线串起来。

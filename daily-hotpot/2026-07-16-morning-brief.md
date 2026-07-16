# 2026-07-16 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-16 15:10-15:57 Asia/Shanghai（含 arXiv、GitHub API、官方项目页、公开可访问的 `DailyArXiv` README 页面复核）  
时间窗口：2026-04-16 至 2026-07-16  
筛选口径：优先保留能在 arXiv 摘要页、官方项目页、GitHub 官方仓库页或 GitHub API 中确认日期的条目；三个月外内容不列为主条目。  
本次重点检索词：`time series foundation model`、`TSFM`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`machine learning timeseries`。

## 今日摘要

- 今天确认到的最有价值新论文是 `2026-07-14` 的 [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454)。它给出一个很有用的负结果：把通用 forecasting TSFM 直接零样本套到工业多变量异常检测上并不可靠，但对 change-point / boundary detection 仍有启发。
- 过去 24 小时没有检出比 [TSRouter](https://arxiv.org/abs/2607.08940)、[CLIR-Bench](https://arxiv.org/abs/2607.09880)、[Bet on Features](https://arxiv.org/abs/2607.11653)、[RMISC](https://arxiv.org/abs/2607.06504) 更近且更贴题的新 reasoning / agent / foundation model 论文。
- GitHub API 对 `created:2026-07-15..2026-07-16` 的 `timeseries agent`、`time-series harness`、`AutoML time series` 检索结果为 `0`；今天没有确认到新的高相关仓库，窗口内重点项目仍然是 [timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)、[mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)、[TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)、[forecast-playground](https://github.com/xavierdurawa/forecast-playground)、[TSF](https://github.com/jaeukmoon/TSF)。
- 公开可访问的 [`DailyArXiv` README 页面](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 仍显示 `Last update: 2026-04-15`，`Time Series` 板块最新可复核条目仍停在 `2026-04-13`；因此今天继续把它降为低优先级补充来源。

## 0. 检索结论

- 本次优先使用的一手来源：
  - arXiv 摘要页的 `Submitted on` 日期与摘要。
  - 官方项目页：`KairosAgent`、`AION`。
  - GitHub 官方仓库页与 GitHub API 返回的 `created_at` / `updated_at`。
- 本次没有纳入主条目的情况：
  - 只能检索到搜索命中、但无法回到论文页或仓库页确认日期的条目。
  - 主题上更接近通用 BI、portfolio、课程作业或单点 demo 的 GitHub 仓库。
- `DailyArXiv` 补检结论：
  - 已直接核验公开可访问的 [`DailyArXiv` README 页面](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)，页面仍显示 `Last update: 2026-04-15`。
  - 该页面 `Time Series` 板块当前最新可稳定复核条目仍是 `2026-04-13` 的 `MSTN` 与 `TempusBench`，早于本轮窗口起点 `2026-04-16`。
  - 因此今天不把 `DailyArXiv` 当作窗口内新增条目的主要来源，只保留为公开页面状态核验。
- 总判断：截至 `2026-07-16`，过去三个月内最稳定的四条主线仍然是：
  - `TSFM 的部署价值、失效边界与审计框架`;
  - `Agent runtime 如何组织外生变量选择、tool use、memory 与 validator`;
  - `时间序列 reasoning 是否能被 benchmark、router 与 verifier 真正审计`;
  - `GitHub 上开始出现更贴近时序工具层、eval harness 与 AutoML scaffold 的轻量工程实现`。

## 1. 时间序列基础模型最新研究

### [2026-07-14] Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12454)
- 简短摘要：评估把 `TimesFM` 直接零样本迁移到工业多变量异常检测的两种方案：按变量做 forecasting error 阈值检测，或提取中间表示再接经典异常检测器。结果显示两条路径都显著落后于现有基线，但预测误差在异常边界处会稳定抬升，提示 TSFM 更适合作为 change-point 信号而非完整 MTSAD 方案。
- 相关性判断：高。它不是正向刷新 SOTA 的工作，但对时序 Agent / harness 的 `什么时候不要盲目调用 TSFM` 非常关键。

### [2026-07-13] Bet on Features: Anytime-Valid and Feature-Aware Auditing of Conditional Quantile Forecasters

- 日期：2026-07-13
- 来源：[arXiv](https://arxiv.org/abs/2607.11653)
- 简短摘要：提出面向黑盒条件分位数预测器的持续审计框架，在非 i.i.d. 流式环境里做 feature-aware calibration 检验，并在真实数据上发现 `Chronos-2` 对多个特征维度存在显著失准。
- 相关性判断：高。它不是新 TSFM 架构，但对 foundation model 上线后的 validator、deployment guardrail 与持续监控非常关键。

### [2026-07-08] TimEE: End-to-end Time Series Classification via In-Context Learning

- 日期：2026-07-08
- 来源：[arXiv](https://arxiv.org/abs/2607.07500) / [GitHub](https://github.com/automl/timee)
- 简短摘要：提出 4.5M 参数的时序分类 foundation model，用 PFN 风格的合成任务元训练，让模型在目标数据集上无需额外训练即可直接做 in-context classification。
- 相关性判断：中高。它把 TSFM 从 forecasting 扩展到 task-level ICL，是当前窗口内最清晰的泛化方向之一。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建真实世界多变量时序语料 `RMISC`，约含 200 个数据集和 1420 亿时间点，并系统比较真实多变量语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：最高。它仍然是“预训练语料质量决定了什么”这条主线里最强的新证据之一。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与 Naive、ETS、ARIMA、XGBoost，给出 `样本量 + 季节性 + 基础设施成本` 共同决定的 break-even 决策框架。
- 相关性判断：最高。它最容易直接转成时序 Agent 的模型路由规则与上线准入规则。

### [2026-07-06] Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.05291)
- 简短摘要：系统比较 9 个 zero-shot TSFM 与 8 个经典计量波动率模型，指出 TSFM 在高噪声金融序列上不会自动获胜，简单组合如 `TTM + Log-HAR` 仍然很强。
- 相关性判断：高。它为金融场景中的 fallback、ensemble 与风险控制给出直接证据。

### [2026-07-02] Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.02623)
- 简短摘要：围绕电价预测构建更严格的评测框架，重点检查 contamination risk、分布漂移与协变量依赖，并比较 TSFM、领域方法与简单集成在点预测、概率预测和尾部风险上的表现。
- 相关性判断：高。它非常接近真实部署场景，尤其适合指导能源类时序 Agent 的 validator 设计。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：提出强调 `vintage-consistent` 和 `no leakage` 的宏观预测 TSFM，把真实发布时间与可获得性边界显式写进训练和评测协议。
- 相关性判断：高。它对需要严格回测一致性、时间戳合规和无泄漏实验设计的时序 harness 很有参考价值。

### [2026-06-13] TS-ICL: A Flexible Time-Indexed Foundation Model for Time Series via In-Context Learning

- 日期：2026-06-13（v2；v1 为 2026-06-04）
- 来源：[arXiv](https://arxiv.org/abs/2606.05878)
- 简短摘要：提出统一 forecasting 与 imputation 的 probabilistic ICL 模型，把时间序列任务写成 timestamp-aligned regression，并通过因果先验生成合成依赖结构。
- 相关性判断：中高。它补强了“foundation model 不应只做 forecasting，还应原生处理缺失与不规则观测”的方向。

### [2026-05-31] Time Series as Language: A Universal Tokenizer for General-Purpose Time Series Foundation Models

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.09861)
- 简短摘要：提出 `UniTok` 通用 tokenizer 与 `UniTok-FM`，把连续时序离散化为 token，让统一的 next-token prediction 训练同时支持 zero-shot / prompt-boosted forecasting、few-shot generation 与 classification。
- 相关性判断：中高。它代表了“把 time series 真正当语言来建模”的一条更激进路线。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-10] Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09076)
- 简短摘要：提出 `LLM planner + TimesFM sentinel` 的闭环控制框架，用 `Counterfactual Physics Injection` 在执行前模拟干预效果，拦截物理上不合理的动作。
- 相关性判断：中高。虽是工业控制安全应用，但清楚展示了 foundation model 如何作为 deterministic guard 支撑 agentic control。

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：提出 training-free 的楼宇 IoT 零样本预测框架，借助知识图谱构建结构骨架，并由 `agentic topology sampler` 在部署时挑选目标序列所需的外生变量。
- 相关性判断：高。它把 `agentic selection` 直接放进时序部署链路，而不只是做通用 analyst agent。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 与 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它仍是近三个月最接近高风险生产监督场景的时序 Agent 系统之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，给通用 LLM agent 增加时序 runtime、可执行 temporal tools、episodic multimodal memory 与经验复用机制。
- 相关性判断：最高。它仍是时间序列 harness、tool use、memory 与 auditable runtime 的核心参考实现。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 通过多轮工具调用形成语义推理轨迹，再把结果融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的代表作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把现实时序任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation、protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是建设可复用的时序 Agent 平台，它仍然是最系统化的公开参考之一。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：围绕稀疏、不规则、异步的临床时序构建 6600 个 QA 样本，并把显式时间证据和答案推导规则绑定到每个问题上，用于同时评估答案正确性与证据使用。
- 相关性判断：高。它虽是临床垂域，但正中“不规则时序 + 可核验 reasoning”这条主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把时间序列 reasoning 中的 `文本模式 LLM` 与 `图像模式 VLM` 选择问题显式建成异构图路由任务，并按性能-成本偏好动态选择最优 `modality-model pair`。
- 相关性判断：最高。它非常接近未来时序 Agent 的 runtime router 与 cost-aware orchestration 设计。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：定义覆盖 `Decoding / Grounding / Inferring / Extrapolating / Acting` 的认知型时序 reasoning 任务谱系，并给出 `TSCognition` benchmark 与 `TSAlign` 框架。
- 相关性判断：最高。它仍是近三个月最像“总纲”的时间序列 reasoning 工作。

### [2026-06-17] Beyond Tokenization: Direct Timestep Embedding and Contrastive Alignment for Time-Series Question Answering

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.18986)
- 简短摘要：提出 `CADE`，用直接 timestep embedding 与监督式对比对齐替代 BPE tokenization，把每个时间点直接映射到 LLM embedding space，以改善 TSQA 对数值、趋势与精确索引的理解。
- 相关性判断：高。它切中了“LLM 为什么在数值时序上推理不稳”的一个核心技术瓶颈。

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
- 相关性判断：最高。它比单轮 TSQA 更接近真实 analyst / agent 工作流，是当前窗口内最值得保留的多轮 benchmark 之一。

## 4. GitHub 上有关 timeseries Agent、harness、machine learning、AutoML 的最新项目

- 检索说明：今天额外用 GitHub API 检查了 `created:2026-07-15..2026-07-16` 的 `timeseries agent`、`time-series harness`、`AutoML time series`，结果均为 `0`；因此本节继续保留过去三个月窗口内、但截至今天仍最值得跟踪的项目。

### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供面向 AI agents 的 deterministic time-series MCP tools，覆盖 anomaly detection、changepoint、decomposition、trend tests 与 data-quality auditing，强调 typed interface 与无代码执行。
- 相关性判断：高。它比通用 agent infra 更贴近“时序 Agent 的工具层与可审计统计能力”。

### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：为 tool-using agents 提供 trajectory-level eval harness，逐步评分工具选择、参数、grounding 与效率，并显式对接 CI 回归门禁。
- 相关性判断：中高。它不是时间序列专用仓库，但对构建时序 Agent 的 verifier / harness 层有直接借鉴价值。

### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub API `created_at`，`updated_at=2026-07-15`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：一个面向时间序列 forecasting 的 AutoML web 工具，提供数据上传、模型运行与可视化入口。
- 相关性判断：中。工程深度暂时有限，但它是窗口内较贴题的 `time-series + AutoML` 明确项目之一。

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：聚焦时间序列异常检测 Agent，本地运行，结合 TSAD 检测层与 LLM 分析层输出异常窗口、分数和解释结论。
- 相关性判断：中高。它仍然是窗口内主题最直接贴近 `timeseries agent` 的公开仓库之一。

### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供面向 AI forecasting 的 `time-masked retrieval harness`，强调 leak-free 的 as-of tools 与 forecaster scaffold。
- 相关性判断：高。它非常贴近“防泄漏工具层 + 评测场”的核心工程问题。

### [2026-07-01] tachyurgy/observability-assistant

- 日期：2026-07-01（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/tachyurgy/observability-assistant)
- 简短摘要：一个面向时间序列监控问答的轻量 agent / eval harness，围绕 `why did p95 spike?` 这类 observability 问题提供异常检测、时序因果排序与 abstain gate。
- 相关性判断：中高。它不是通用 TSFM 项目，但对时序诊断 Agent 的可执行约束设计有启发。

### [2026-06-30] automl/timee

- 日期：2026-06-30（GitHub API `created_at`，`updated_at=2026-07-13`）
- 来源：[GitHub](https://github.com/automl/timee)
- 简短摘要：`TimEE` 官方代码仓库，对应近期 end-to-end time-series ICL foundation model，并且在窗口内保持活跃更新。
- 相关性判断：中高。更偏 foundation-model 实现，但与 `AutoML + time series model selection` 社区连接很直接。

### [2026-06-17] AkshajKashyap/autoresearch-timeseries-agent

- 日期：2026-06-17（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：提供本地可复现的时间序列 forecasting benchmark，支持 synthetic/CSV 数据、基线模型、诊断报告、绘图和 config-driven experiment loop。
- 相关性判断：中高。它更像 benchmark scaffold，但对本地时序 Agent 试验台搭建很有参考价值。

### [2026-05-24] rnop/numerai-mcp-autoresearch

- 日期：2026-05-24（GitHub API `created_at`，`updated_at=2026-07-12`）
- 来源：[GitHub](https://github.com/rnop/numerai-mcp-autoresearch)
- 简短摘要：一个面向 Numerai 的 autonomous research harness，结合实验循环、Bayesian optimization、time-series cross-validation 与自定义 MCP server。
- 相关性判断：中高。虽然偏金融竞赛场景，但它是窗口内最像 `research harness + AutoML loop` 的可执行工程之一。

### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16（GitHub API `created_at`，`updated_at=2026-07-13`）
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：一个 plug-and-play 的 time-series foundation model benchmark harness，主打 `LTSF + GIFT-Eval` 评测管线。
- 相关性判断：高。虽然不是本周新建，但它是窗口内仍在活跃更新、且更贴近 `TSFM harness` 的仓库。

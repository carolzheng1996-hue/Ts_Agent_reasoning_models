# 2026-07-10 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-10 09:35-10:48 Asia/Shanghai  
时间窗口：2026-04-10 至 2026-07-10  
筛选口径：优先保留能在 arXiv、官方项目页、GitHub 官方仓库或 GitHub API metadata 中确认日期的条目；三个月外内容不列为主条目。  
本次重点检索词：`time series foundation model`、`TSFM`、`time series agent`、`agentic forecasting`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`、`solar irradiance forecasting`。

## 今日摘要

- 最新两条最强信号仍然来自 `2026-07-07` 的 [RMISC](https://arxiv.org/abs/2607.06504) 与 [TopoBrick](https://arxiv.org/abs/2607.06349)，但今天补检后可以确认 `2026-07-08` 的 [TimEE](https://arxiv.org/abs/2607.07500) 与 [TimesX / Rethinking Multimodal Time-Series Forecasting Evaluation](https://arxiv.org/abs/2607.06973) 值得作为补充观察项纳入。
- 基础模型主线已经明显从“再造一个 TSFM”转向“什么数据值得预训练”“什么时候值得部署”“在强漂移、强 covariate、强金融噪声场景是否还能成立”。
- Agent 主线依然由 [TimeClaw](https://arxiv.org/abs/2606.05404)、[AION](https://arxiv.org/abs/2605.25045)、[KairosAgent](https://arxiv.org/abs/2605.30002)、[DeXposure-Claw](https://arxiv.org/abs/2606.19501) 支撑；[TopoBrick](https://arxiv.org/abs/2607.06349) 则把 `agentic selection` 明确带进部署时外生变量选择。
- Reasoning 方向过去一周没有比 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)、[IRTS-ToolBench](https://arxiv.org/abs/2606.15107) 更新且更强的新主线，研究重点仍是 benchmark、tool grounding 与可验证性。
- GitHub 侧本轮值得保留的近窗仓库更新为：`TSAD-Agent`、`forecast-playground`、`automl/timee`、`autoresearch-timeseries-agent`、`TimeClaw`、`timeseries-sparklines`、`TSF`、`aion`。
- 本次补齐了“光功率/光伏功率预测”专门条目；窗口内最值得看的组合是 [Learning Long-Term Temporal Dependencies in Photovoltaic Power Output Prediction Through Multi-Horizon Forecasting](https://arxiv.org/abs/2605.19074) 与 [Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications](https://arxiv.org/abs/2604.22077)。

## 0. 检索结论

- 本次优先使用的一手来源：
  - arXiv 摘要页与提交日期。
  - 官方项目页：`KairosAgent`、`AION`。
  - GitHub 官方仓库页与 GitHub API `created_at` / `updated_at` metadata。
  - `DailyArXiv` 官方 README 原文。
- 本次未纳入主条目的情况：
  - 只能找到二手转述、无法确认原始日期的内容。
  - GitHub 仓库虽然新，但主题更偏通用 dashboard、课程作业或泛数据分析，和时间序列 Agent / reasoning / harness 主线相关性不足。
- 总判断：截至 `2026-07-10`，过去三个月内最稳定的研究主线有五条：
  - `TSFM 的部署价值与 break-even`;
  - `预训练语料是否足够真实且无泄漏`;
  - `Agent runtime 如何组织 tool / memory / validator`;
  - `Reasoning 是否能被 benchmark 和 verifier 真正审计`;
  - `能源/光伏场景是否适合直接借用 TSFM，而不是继续只做单点模型比较`。

## 1. 时间序列基础模型最新研究

### [2026-07-08] TimEE: End-to-end Time Series Classification via In-Context Learning

- 日期：2026-07-08
- 来源：[arXiv](https://arxiv.org/abs/2607.07500) / [GitHub](https://github.com/automl/timee)
- 简短摘要：提出 4.5M 参数的时序分类 foundation model，使用 PFN 风格的合成任务元训练，在无需针对目标数据集重新训练的前提下直接完成 end-to-end in-context classification。
- 相关性判断：中高。它不属于 forecasting 主线，但对“时序 foundation model 能否通过合成先验完成 task-level ICL”是很新的、可迁移到 Agent routing 的信号。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建真实世界多变量时序语料 `RMISC`，约含 200 个数据集和 1420 亿时间点，并直接比较真实多变量语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：最高。它直接命中 TSFM 下一阶段最关键的问题之一：预训练数据分布是否决定跨域泛化上限。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与 Naive、ETS、ARIMA、XGBoost，给出 `样本量 + 季节性 + 基础设施成本` 三者联合决定的 break-even 框架。
- 相关性判断：最高。它最适合直接被转化为时序 Agent 的模型路由规则、deployment guardrail 或成本感知选择器。

### [2026-07-06] Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.05291)
- 简短摘要：系统比较 9 个 zero-shot TSFM 与 8 个经典计量波动率模型，指出 TSFM 不会在高噪声金融序列上自动获胜，且简单组合如 `TTM + Log-HAR` 仍很强。
- 相关性判断：高。它为时序 Agent 的 fallback、风险控制和模型组合策略提供了直接证据。

### [2026-07-02] Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.02623)
- 简短摘要：面向电价预测构建降低 contamination risk 的评测框架，比较 TSFM、领域方法与简单集成在点预测、概率预测和尾部风险上的表现。
- 相关性判断：高。它非常贴近真实部署环境，特别适合指导能源与外生变量丰富场景下的 validator 设计。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204)
- 简短摘要：把 TiRex 扩展到多变量和 streaming forecasting，使用 memory-centric recurrent 设计将流式推理成本压到常数级，并支持 future-known covariates。
- 相关性判断：高。它直接贴近在线监控、滚动预测与持续执行型 Agent 的部署约束。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：强调 `vintage-consistent` 与 `no leakage` 训练协议，把发布时间和可获得性边界明确写入宏观预测 TSFM 的训练与评测流程。
- 相关性判断：高。对需要严格回测一致性和时间戳合规的研究 Agent 很重要。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：提出 training-free 的零样本楼宇 IoT 预测框架，借助知识图谱构建结构骨架，并由 `agentic topology sampler` 在部署时为目标序列挑选外生变量。
- 相关性判断：高。它不是通用 analyst agent，但把 `agentic selection` 真正放进了时序部署链路。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 和 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它是近三个月最接近高风险生产监督场景的时序 Agent 系统之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 增加时序 runtime、可执行 temporal tools、episodic multimodal memory 与经验复用机制。
- 相关性判断：最高。它最直接命中时序 harness、tool use、memory 和 validation 闭环。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 通过多轮工具调用形成语义推理轨迹，再把结果融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的清晰公开方案。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把现实时序任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation、protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是建设可复用时序 Agent 平台，它仍是当前最值得直接拆解的系统化参考。

### [2026-05-14] Nexus : An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 拆成多阶段 agent 流程，分别处理宏观和微观波动，并在需要时融合文本上下文，再合成最终预测。
- 相关性判断：高。它代表“forecasting 本身就是 agentic reasoning problem”的方法论主张。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：定义了覆盖 Decoding、Grounding、Inferring、Extrapolating、Acting 的认知型时序 reasoning 任务谱系，并给出 `TSCognition` benchmark 与 `TSAlign` 框架。
- 相关性判断：最高。它仍是近三个月最像“总纲论文”的时序 reasoning 工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：审查 coding agent 在时序任务中的实际推理能力，发现即便有代码执行能力，模型仍会在统计假设、验证逻辑与不确定性处理上系统失误。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：围绕不规则采样 TSQA 构建 `IRTS-ToolBench`，强调 tool-grounded reasoning、可验证分析链路与可复现实验协议。
- 相关性判断：高。它把 verifier 和多工具调用正式拉进时序 reasoning 评测，对本仓库非常贴近。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：提出从真实数据自动生成大规模时序 reasoning benchmark 的流程，以模板和 LLM agent 联合扩展任务覆盖面。
- 相关性判断：中高。它更偏 benchmark 入口，但对系统评估时序 reasoning 的覆盖度很有价值。

## 4. GitHub 上最新且值得跟踪的相关项目

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：聚焦时间序列异常检测 Agent，本地运行，结合 TSAD 检测层与 LLM 分析层输出异常窗口与解释结论。
- 相关性判断：中高。它是窗口内最新、且命题最直接贴近 `timeseries agent` 的公开仓库之一，但工程成熟度仍需观察。

### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供面向 AI forecasting 的 `time-masked retrieval harness`，强调 leak-free 的 as-of tools 与 forecaster scaffold。
- 相关性判断：高。它虽然不是完整 Agent 平台，但非常贴近“防泄漏工具层 + 评测场”的核心工程问题。

### [2026-06-30] automl/timee

- 日期：2026-06-30（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/automl/timee)
- 简短摘要：`TimEE` 官方代码仓库，对应近期 end-to-end time-series ICL foundation model。
- 相关性判断：中高。更偏 foundation-model 实现，但与 `AutoML + time series model selection` 社区联系紧密，值得跟踪。

### [2026-06-17] AkshajKashyap/autoresearch-timeseries-agent

- 日期：2026-06-17（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：提供本地可复现的时间序列 forecasting benchmark，支持 synthetic/CSV 数据、基线模型、诊断报告和 deterministic config-driven experiment loop。
- 相关性判断：中高。它更偏 benchmark scaffold，但对搭建本地时序 Agent 试验台有直接参考价值。

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`Harnessing Generalist Agents for Contextualized Time Series` 的官方实现，承载时序 runtime、tooling 与 benchmark 结构。
- 相关性判断：最高。它仍是窗口内最值得拆解的时序 Agent / harness 仓库之一。

### [2026-05-06] vrraj/timeseries-sparklines

- 日期：2026-05-06（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/vrraj/timeseries-sparklines)
- 简短摘要：为 agentic workflows、SSR 应用与 API 提供轻量级 SVG sparkline / bar chart 渲染 harness。
- 相关性判断：中高。它不是 forecasting 模型仓库，但对时序 Agent 的可视化反馈层和报告层很实用。

### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：面向 LTSF 与 GIFT-Eval 的 `plug-and-play benchmark harness`，聚焦 time-series forecasting foundation models。
- 相关性判断：高。它是窗口内少数明确把 TSFM benchmark harness 独立做成项目的仓库。

### [2026-04-12] ztxtech/aion

- 日期：2026-04-12（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：OpenCode 风格的 time-series harness，围绕 tasks、rules、memory、evaluation 和 protocols 组织研究流程。
- 相关性判断：最高。虽然创建时间较早，但在窗口内仍是最系统化、最值得长期跟踪的时序 harness 项目之一。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-05-18] Learning Long-Term Temporal Dependencies in Photovoltaic Power Output Prediction Through Multi-Horizon Forecasting

- 日期：2026-05-18
- 来源：[arXiv](https://arxiv.org/abs/2605.19074)
- 简短摘要：提出从单步预测转向 multi-horizon forecasting 的训练范式，联合利用天空图像与历史 PV 发电数据来捕获跨步长的长期依赖。
- 相关性判断：高。它直接贴近光伏功率预测本身，而且强调的是训练目标设计，而不是单一架构堆叠。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：在 ERCOT 的高分辨率数据上系统比较 TimesFM、Chronos Bolt、MoiraiL、MOMENT、TTM 与经典深度学习基线在 solar、wind、load forecasting 上的零样本与微调表现。
- 相关性判断：最高。它是“TSFM 到底能否落在能源预测生产面”的直接证据，对光伏与可再生能源场景都非常有参考价值。

### [2026-04-23] Forecasting Solar Energy Using a Single Image

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.21982)
- 简短摘要：从单张现场图像估计未来任意时刻的辐照条件，试图用视觉几何与反射建模替代粗糙 3D 模型或只依赖辐照表的方法。
- 相关性判断：中高。它更偏 irradiance forecasting 与选址评估，但对“如何把视觉上下文引进太阳能预测”有启发。

### [2026-04-15] Outperforming Self-Attention Mechanisms in Solar Irradiance Forecasting via Physics-Guided Neural Networks

- 日期：2026-04-15
- 来源：[arXiv](https://arxiv.org/abs/2604.13455)
- 简短摘要：提出 physics-guided 的 CNN-BiLSTM，用显式清空指数、太阳天顶角等特征约束模型，在高噪声气象环境中挑战“Transformer 必然更优”的默认假设。
- 相关性判断：中高。它提醒能源预测场景里物理先验仍可能比更大的通用注意力结构更重要。

## 6. DailyArXiv 补检结论

- 已确认 `zezhishao/DailyArXiv` 的 README `Time Series` 条目中，在三个月窗口内且与本主题直接相关的论文至少包括：
  - [TimEE](https://arxiv.org/abs/2607.07500)（2026-07-08）
  - [Rethinking Multimodal Time-Series Forecasting Evaluation](https://arxiv.org/abs/2607.06973)（2026-07-08）
  - [RMISC](https://arxiv.org/abs/2607.06504)（2026-07-07）
  - [TopoBrick](https://arxiv.org/abs/2607.06349)（2026-07-07）
  - [Evaluating Time Series Foundation Models for Electricity Price Forecasting](https://arxiv.org/abs/2607.02623)（2026-07-02）
- 处理方式：
  - `RMISC`、`TopoBrick`、`Evaluating Time Series Foundation Models for Electricity Price Forecasting` 已纳入本日报主条目。
  - `TimEE` 作为新的 foundation-model 观察项纳入主条目。
  - `Rethinking Multimodal Time-Series Forecasting Evaluation` 与本主题相关，但更偏 benchmark / evaluation，因此保留为补充观察项，不挤占本日报的核心主线位置。
- 针对 `AION`、`KairosAgent`、`TimeClaw`、`Can LLM Coding Agents Reason About Time Series?`、`TimeSeriesExamAgent` 的 README 原文定向补检没有命中；这说明 `DailyArXiv` 对通用 `time series` 关键词覆盖较好，但对 `agent / reasoning / harness` 子方向并不完整，因此不能替代定向检索。

## 推荐阅读顺序

1. `RMISC`、`Break-Even Analysis`、`EPF Evaluation`：先看 TSFM 的数据、部署价值和能源外生变量问题。
2. `TopoBrick`、`TimeClaw`、`AION`、`KairosAgent`：再看 runtime、tool protocol 和 deployment-time selection。
3. `TSCognition`、`Can LLM Coding Agents Reason About Time Series?`、`IRTS-ToolBench`：最后补 reasoning taxonomy、可靠性审查和 verifier-backed tool use。

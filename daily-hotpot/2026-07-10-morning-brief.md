# 2026-07-10 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-10 08:20-09:32 Asia/Shanghai  
时间窗口：2026-04-10 至 2026-07-10  
筛选口径：优先检索 arXiv、官方项目页、GitHub 官方仓库页与 GitHub repository metadata；主条目仅保留过去三个月内可确认日期的内容。若日期无法确认，则不列为主条目。  
本次重点检索词：`time series foundation model`、`TSFM`、`time series agent`、`agentic forecasting`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`GitHub timeseries agent`。

## 今日摘要

- 过去 24 小时内没有检出比 `2026-07-07` 的 [RMISC](https://arxiv.org/abs/2607.06504) 和 [TopoBrick](https://arxiv.org/abs/2607.06349) 更新且更强的 foundation-model / agent 主线论文；过去一周最强研究信号仍集中在 `TSFM 的真实部署价值`、`预训练语料质量` 与 `agentic deployment-time selection`。
- 基础模型方向最值得持续跟踪的组合已比较明确：[RMISC](https://arxiv.org/abs/2607.06504)、[When Do Foundation Models Pay Off?](https://arxiv.org/abs/2607.04919)、[Forecasting Realized Volatility with Time Series Foundation Models](https://arxiv.org/abs/2607.05291)、[TiRex-2](https://arxiv.org/abs/2607.01204) 与 [Evaluating Time Series Foundation Models for Electricity Price Forecasting](https://arxiv.org/abs/2607.02623) 基本覆盖了数据、成本、金融高噪声、流式部署与强 covariate 场景。
- Agent 方向仍由 [TimeClaw](https://arxiv.org/abs/2606.05404)、[AION](https://arxiv.org/abs/2605.25045)、[KairosAgent](https://arxiv.org/abs/2605.30002) 和 [DeXposure-Claw](https://arxiv.org/abs/2606.19501) 构成主线；新增的 [TopoBrick](https://arxiv.org/abs/2607.06349) 说明 `agentic selection` 已开始直接进入零样本时序部署链路。
- Reasoning 方向过去 24 小时没有检出比 6 月主线更强的新论文；总览型主线仍然是 [TSCognition](https://arxiv.org/abs/2606.22126)、[IRTS-ToolBench](https://arxiv.org/abs/2606.15107)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545) 和 [TimeSeriesExamAgent](https://arxiv.org/abs/2604.08093)。
- GitHub 侧今天没有发现比 [ChamoLu/TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent) 更新且更相关的新仓库；本轮更适合保留一组“可直接借鉴”的近窗仓库：`TSAD-Agent`、`TimeClaw`、`aion`、`timeseries-sparklines`、`autoresearch-timeseries-agent`、`Preprocessing-for-AutoML`、`AutoML_TimeSeries_Studio`。

## 0. 检索结论

- 本次优先使用的一手来源：
  - arXiv 论文页与摘要页。
  - 官方项目页：`KairosAgent`、`AION`。
  - GitHub 官方仓库页与公开 repository metadata，GitHub 项目日期统一以 `created_at` 为准。
- 本次未纳入主条目的情况：
  - 仅有搜索摘要、无法再确认原始日期的内容。
  - 明显偏通用 tabular / dashboard / 数据集整理，和时间序列 Agent / reasoning / foundation model 主线相关性不足的 GitHub 项目。
- 结论：截至 `2026-07-10`，过去三个月内的高优先级信号已经从“单一 TSFM 架构比拼”转向三条更成熟的主线：
  - `TSFM 是否值得部署`；
  - `Agent 如何把 tool / memory / validator 组织成可审计运行时`；
  - `Reasoning 是否真的提升时序理解，而不只是生成看起来合理的解释`。

## 1. 时间序列基础模型最新研究

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：提出大规模真实世界多变量时序语料 `RMISC`，约含 200 个数据集和 1420 亿时间点，并系统比较“真实多变量语料预训练”与“合成语料预训练”对零样本泛化的影响。
- 相关性判断：最高。它直接触及 TSFM 下一阶段最关键的问题之一：预训练数据分布本身是否决定跨域泛化上限。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919) / [GitHub](https://github.com/nicolaisi/fm-breakeven)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与 Naive、ETS、ARIMA、XGBoost，提出 break-even 框架，把 TSFM 选择转化为样本量、季节性强度、调参与算力成本的联合决策问题。
- 相关性判断：最高。它非常适合被时序 Agent 做成 routing policy、deployment guardrail 或成本感知的模型选择器。

### [2026-07-06] Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.05291)
- 简短摘要：系统比较 9 个 zero-shot TSFM 与 8 个经典计量波动率模型，结论不是“TSFM 默认胜出”，而是不同架构稳定性差异很大，且简单组合如 `TTM + Log-HAR` 仍然很强。
- 相关性判断：高。它对研究 Agent 的 fallback、风险控制和模型选择有直接参考价值，因为它说明 TSFM 在高噪声金融序列中并非默认最优。

### [2026-07-02] Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.02623)
- 简短摘要：针对电价预测这一强 covariate、强分布漂移场景，构建双数据集评测框架以降低 contamination 风险，并比较 TSFM、领域方法与简单集成在点预测、概率预测和尾部风险上的表现。
- 相关性判断：高。它非常贴近真实部署环境，尤其适合指导能源、交易和外生变量丰富场景下的 Agent validator 设计。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204)
- 简短摘要：将 TiRex 扩展到多变量与 streaming forecasting，使用 memory-centric recurrent 设计把 patch 推理成本压到常数级，并支持 future-known covariates。
- 相关性判断：高。它很贴近在线监控、滚动重规划和持续执行型时序 Agent 的部署约束。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：强调 `vintage-consistent` 与 `no leakage` 训练协议，避免使用真实部署时不可能获得的修订数据和未来信息，把时间可用性边界写进 TSFM 训练流程。
- 相关性判断：高。它对需要严格回测一致性和时间戳合规的研究 Agent 很重要。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：提出 training-free 的零样本楼宇 IoT 预测框架，利用知识图谱构建结构骨架，并让 `agentic topology sampler` 在部署时为目标序列挑选合适的外生变量。
- 相关性判断：高。它不是通用 analyst agent，但把 `agentic selection` 真正放进了时序预测部署链路。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 和 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它是近三个月最接近高风险生产监督场景的时序 Agent 系统之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，为通用 LLM agent 增加时序 runtime、可执行 temporal tools、episodic multimodal memory 和经验复用机制。
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
- 简短摘要：把 forecasting 拆成多阶段 agent 流程，分别处理宏观与微观波动，并在需要时引入文本上下文，再合成最终预测。
- 相关性判断：高。它代表“forecasting 本身就是 agentic reasoning problem”的方法论主张。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：系统定义时序 reasoning 的认知任务谱系，把判断、解释、因果线索、趋势理解与复杂问答纳入统一框架，并给出 benchmark 与分析。
- 相关性判断：最高。它仍是近三个月最像“方向性总纲”的时序 reasoning 论文。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107)
- 简短摘要：围绕不规则采样 TSQA 构建 `IRTS-ToolBench`，强调 tool-grounded reasoning、可验证分析链路与可复现实验协议，而不是只比较文本答案表面匹配度。
- 相关性判断：高。它把 verifier 和多工具调用正式拉进时序 reasoning 评测，对本仓库非常贴近。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：审查 coding agent 在时序任务中的实际推理能力，发现即便具备代码执行能力，模型仍会在统计假设、验证逻辑与不确定性处理上系统失误。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”，结论对研究与部署都很重要。

### [2026-04-11] TimeSeriesExamAgent: A Comprehensive Time Series Understanding Benchmark for Multimodal Large Language Models

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.08093)
- 简短摘要：构建覆盖图像、表格、文本与数值序列理解的综合 benchmark，强调多模态时间序列理解而非单一 forecasting accuracy。
- 相关性判断：中高。它更偏 benchmark 入口，但对衡量时序 reasoning 的任务覆盖面很有价值。

## 4. GitHub 上最新且值得跟踪的相关项目

### [2026-07-06] ChamoLu/TSAD-Agent

- 日期：2026-07-06（GitHub `created_at`）
- 来源：[GitHub](https://github.com/ChamoLu/TSAD-Agent)
- 简短摘要：聚焦时间序列异常检测 Agent，仓库说明虽仍较简短，但命题本身与“诊断型时序 Agent”高度贴近。
- 相关性判断：中高。它是窗口内最新、且主题最直接命中 timeseries agent 的公开仓库之一，但工程成熟度仍需继续观察。

### [2026-06-17] AkshajKashyap/autoresearch-timeseries-agent

- 日期：2026-06-17（GitHub `created_at`）
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：提供本地可复现的时间序列 forecasting benchmark，支持 synthetic/CSV 数据，定位在 agent 化实验与可复现实验链路。
- 相关性判断：中高。它更偏 benchmark scaffold，但对搭建本地时序 Agent 试验台有直接参考价值。

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`Harnessing Generalist Agents for Contextualized Time Series` 的官方实现，承载时序 runtime、tooling 与 benchmark 结构。
- 相关性判断：最高。它仍是窗口内最值得拆解的时序 Agent / harness 仓库之一。

### [2026-05-13] dallasta-gui/Preprocessing-for-AutoML

- 日期：2026-05-13（GitHub `created_at`）
- 来源：[GitHub](https://github.com/dallasta-gui/Preprocessing-for-AutoML)
- 简短摘要：围绕 `AutoML 2026` 投稿实验，研究领域知识驱动预处理如何影响溶解氧时间序列 forecasting 的 AutoML 效果。
- 相关性判断：中高。它不是 Agent 仓库，但对“时序 AutoML 的前处理层是否需要显式知识注入”有现实参考意义。

### [2026-05-11] md1415/AutoML_TimeSeries_Studio

- 日期：2026-05-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/md1415/AutoML_TimeSeries_Studio)
- 简短摘要：提供自动选择并训练多类 ML/DL 预测器的时序 AutoML Web 应用，强调模型选择和训练自动化。
- 相关性判断：中。更偏应用层集成，但对低门槛基线与 AutoML 产品形态有参考价值。

### [2026-05-06] vrraj/timeseries-sparklines

- 日期：2026-05-06（GitHub `created_at`）
- 来源：[GitHub](https://github.com/vrraj/timeseries-sparklines)
- 简短摘要：为 agentic workflows、SSR 应用和 API 提供轻量级 SVG sparkline / bar chart 渲染 harness。
- 相关性判断：中高。它不是 forecasting 模型仓库，但对时序 Agent 的可视化反馈层、报告层和工具封装层非常实用。

### [2026-04-12] ztxtech/aion

- 日期：2026-04-12（GitHub `created_at`）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：OpenCode 风格的 time-series harness，围绕 tasks、rules、memory、evaluation 和 protocols 组织研究流程。
- 相关性判断：最高。虽然创建时间早于其他仓库，但在三个月窗口内仍是最系统化、最值得长期跟踪的时序 harness 项目之一。

## 推荐阅读顺序

1. `RMISC` 与 `Break-Even Analysis`：先看 TSFM 的数据与部署价值。
2. `TimeClaw`、`AION`、`KairosAgent`：再看时序 Agent 的 runtime、task protocol 与 reasoner-forecaster 融合。
3. `TSCognition` 与 `IRTS-ToolBench`：最后补 reasoning taxonomy 与 verifier-backed tool use。

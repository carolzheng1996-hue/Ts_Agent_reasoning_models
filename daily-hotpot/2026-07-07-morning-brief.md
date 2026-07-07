# 2026-07-07 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-07 15:10-15:36 Asia/Shanghai  
时间窗口：2026-04-07 至 2026-07-07  
筛选口径：优先检索 arXiv、`DailyArXiv` README、GitHub 仓库主页与 GitHub repository metadata。主条目只保留过去三个月内可确认日期的内容；GitHub 项目统一以 `created_at` 为准。若 `DailyArXiv` 中未出现但一手来源确认相关的条目，会在补检结论中说明并降低对 `DailyArXiv` 的依赖权重。  
本次重点检索词：`time series foundation model`, `TSFM`, `time series agent`, `agentic time series`, `time series reasoning`, `photovoltaic forecasting`, `solar power forecasting`, `time-series harness`, `AutoML agent`。

## 今日摘要

- 今天最值得补进主线的是两篇 2026-07-06 的 TSFM 新论文：[Forecasting Realized Volatility with Time Series Foundation Models](https://arxiv.org/abs/2607.05291) 和 [When Do Foundation Models Pay Off?](https://arxiv.org/abs/2607.04919)。它们不是新架构，但都把 TSFM 从“能不能用”推进到“什么时候值得部署、何时不如经典方法”的真实决策层。
- `DailyArXiv` 的 `Time Series` 板块在 2026-07-07 仍能稳定抓到 [Zeus](https://arxiv.org/abs/2607.01918)、[TiRex-2](https://arxiv.org/abs/2607.01204) 和 [Probabilistic Low-Voltage Peak Load Forecasting with Time Series Foundation Models...](https://arxiv.org/abs/2607.01966)，但没有覆盖今天新增关注的两篇 7 月 6 日 TSFM 论文，也没有覆盖 `AION`、`TimeClaw`、`TSCognition` 等核心 Agent / reasoning 条目。
- Agent 主线过去 24 小时没有更强新论文冒头，当前仍以 [DeXposure-Claw](https://arxiv.org/abs/2606.19501)、[TimeClaw](https://arxiv.org/abs/2606.05404)、[KairosAgent](https://arxiv.org/abs/2605.30002)、[AION](https://arxiv.org/abs/2605.25045) 为最值得持续跟踪的组合。
- Reasoning 主线仍由 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)、[T2SP](https://arxiv.org/abs/2606.12481)、[TFRBench](https://arxiv.org/abs/2604.05364) 支撑，但今天更清楚的一点是：reasoning 的价值正在开始反向影响 forecasting 本身，例如 [Reasoning-Aware Training for Time Series Forecasting](https://arxiv.org/abs/2605.08625)。
- GitHub 近窗项目里，最值得看的依旧是 [tachyurgy/observability-assistant](https://github.com/tachyurgy/observability-assistant)、[iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[ztxtech/aion](https://github.com/ztxtech/aion)、[jaeukmoon/TSF](https://github.com/jaeukmoon/TSF)；偏通用 ML workflow 的新项目里，[idriss-aaidoun/emads](https://github.com/idriss-aaidoun/emads) 和 [REHXZ/AUTOML](https://github.com/REHXZ/AUTOML) 仍最值得借鉴。
- 光伏方向三个月窗口内仍以 [Cold-Start Photovoltaic Forecasting with TSFMs](https://arxiv.org/abs/2606.07457) 为最高优先级；如果目标是把 foundation model 接到真实能源部署，这篇仍是最直接的入口。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-07 15:22 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv) / [README 原文](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)
- 仓库状态：README 标注 `Last update: 2026-07-07`。
- 在 `Time Series` 板块中确认处于三个月窗口且与本主题高相关的条目：
  - [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)，日期 2026-07-02。
  - [Probabilistic Low-Voltage Peak Load Forecasting with Time Series Foundation Models Evaluated on Application-Oriented Metrics](https://arxiv.org/abs/2607.01966)，日期 2026-07-02。
  - [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)，日期 2026-07-01。
- 在一手 arXiv 来源中确认相关、但 `DailyArXiv` README 本次未检出的近窗条目：
  - [Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks](https://arxiv.org/abs/2607.05291)，日期 2026-07-06。
  - [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)，日期 2026-07-06。
  - [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)，日期 2026-06-10。
- 在 `DailyArXiv` README 中未确认到本次核心 Agent / reasoning 条目：
  - [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)
  - [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)
  - [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)
  - [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)
  - [TFRBench: A Reasoning Benchmark for Evaluating Forecasting Systems](https://arxiv.org/abs/2604.05364)
- 结论：`DailyArXiv` 仍适合做 TSFM 近窗补检，但它对时序 Agent / reasoning 主线覆盖不完整，对 7 月 6 日刚出现的 TSFM 论文也未形成有效补录；因此今天继续把它视为辅助信号，而不是主监控源。

## 1. 时间序列基础模型最新研究

### [2026-07-06] Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.05291)
- 简短摘要：系统比较 9 个 zero-shot TSFM 与 8 个经典计量波动率模型，结论不是“TSFM 全面胜出”，而是不同架构差异很大，很多优势来自 forecast rescaling，最稳妥方案反而是 `TTM + Log-HAR` 的简单组合。
- 相关性判断：高。它直接回答“TSFM 在高噪声金融时间序列里是否真的比经典方法更值当”，对 Agent 的模型选择器和 fallback 设计很有参考价值。

### [2026-07-06] When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919)
- 简短摘要：在 30 个 benchmark 数据集上比较 Chronos、Moirai、Lag-Llama 与 Naive / ETS / ARIMA / XGBoost，给出一个部署导向的 break-even 框架，核心问题不再是“TSFM 能不能赢”，而是“在什么样的数据规模和季节性下值得付出 GPU 与工程成本”。
- 相关性判断：最高。它把 TSFM 从 leaderboard 问题推进成 deployment decision problem，非常适合时序 Agent 的自动路由和资源分配逻辑。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：提出统一的 tuning-free TSFM，利用多尺度 Transformer 与 `Multi-Objective Temporal Masking`，希望在 extrapolation、interpolation、global abstraction 等异构任务上减少任务专用调参。
- 相关性判断：最高。它是最近一周“一个 TSFM 覆盖多种分析任务”路线里最强的新公开信号。

### [2026-07-01] TiRex-2: Generalizing TiRex to Multivariate Data and Streaming

- 日期：2026-07-01
- 来源：[arXiv](https://arxiv.org/abs/2607.01204) / [DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 简短摘要：把 TiRex 扩展到多变量和 streaming forecasting，用 memory-centric recurrent 设计保持常数级 patch 推理成本，同时支持 future-known covariates。
- 相关性判断：最高。它是当前最贴近在线监控、滚动重规划和持续执行型时序 Agent 的 TSFM 方案之一。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：强调 `vintage-consistent` 与 `no leakage`，避免使用真实部署时不可能获得的修订数据和未来信息，把时间可用性边界直接写进 TSFM 训练协议。
- 相关性判断：高。它对需要严格回测一致性和时间戳合规的研究 Agent 极其重要。

### [2026-06-10] TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625) / [GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：提出轻量级 TSFM routing layer，用 discriminative routing、selective gating 和 ensemble fallback 在不调用 LLM 控制器的情况下完成 expert selection。
- 相关性判断：高。它是“多 TSFM 池如何被 Agent 高效调用”的直接解法，比单模型比拼更接近系统实现问题。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：用图时序 foundation model 先预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario、data-health gate 与 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它仍是近三个月最接近高风险生产监督场景的时序 Agent 系统之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，给通用 LLM agent 增加时序 runtime、可执行 temporal tools、episodic multimodal memory 和经验复用机制。
- 相关性判断：最高。它最直接命中本仓库关注的 harness、tool use、memory 和 validation 闭环。

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
- 简短摘要：提出 `TSCognition` benchmark 与 `TSAlign`，把时序 reasoning 系统化拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务。
- 相关性判断：最高。它是最近三个月时序 reasoning 方向最完整的任务体系化工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合模式在时序理解任务上的表现，发现代码执行能带来增益，但最佳 agent 仍会在 22%-34% 的问题上出错。
- 相关性判断：最高。它直接回答“coding agent 是否真的足够胜任时间序列分析”这一核心方法论问题。

### [2026-06-10] Representing Time Series as Structured Programs for LLM Reasoning

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.12481)
- 简短摘要：提出 `T2SP`，把趋势、周期与显著事件转写为结构化程序表示，把时序理解的负担从 LLM 本体挪到输入表示层。
- 相关性判断：高。它解决的是“时间序列该如何喂给 reasoning model”这一接口层难题。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序 reasoning benchmark，覆盖真实领域任务、跨回合记忆和统一评测协议，并系统暴露 memory 与 uncertainty handling 的短板。
- 相关性判断：高。它比单轮 QA 更接近真实 analyst workflow。

### [2026-05-09] Reasoning-Aware Training for Time Series Forecasting

- 日期：2026-05-09
- 来源：[arXiv](https://arxiv.org/abs/2605.08625)
- 简短摘要：提出 `STRIDE`，把 reasoning trace 蒸馏为连续 embedding prior，再注入 TSFM 的数值编码器，尝试让 forecasting 模型本身吸收可解释 reasoning 结构。
- 相关性判断：高。它把 reasoning 从“评测项”推进到“训练信号”，是 forecasting 与 reasoning 收敛的一条很强路线。

### [2026-04-07] TFRBench: A Reasoning Benchmark for Evaluating Forecasting Systems

- 日期：2026-04-07
- 来源：[arXiv](https://arxiv.org/abs/2604.05364) / [项目页](https://tfrbench.github.io/)
- 简短摘要：把 forecasting system 的 reasoning trace 单独抽出来评测，强调跨变量依赖、趋势解释和外部事件影响不该埋没在最终误差里。
- 相关性判断：高。它仍是“为什么 forecasting 需要 reasoning benchmark”的最清晰方法论支点之一。

## 4. GitHub 上值得跟踪的最新项目

说明：以下日期均以 GitHub 仓库 `created_at` 为准。

### [2026-07-01] tachyurgy/observability-assistant

- 日期：2026-07-01
- 来源：[GitHub](https://github.com/tachyurgy/observability-assistant)
- 简短摘要：零依赖 TypeScript 原型，围绕“为什么 p95 spike”构建 synthetic time-series agent，集成 MAD 异常检测、时间先后因果排序、3 个 abstain gate 与 eval harness。
- 相关性判断：高。它是目前最干净的“时序 reasoning + abstention + evaluation”最小系统之一。

### [2026-07-01] idriss-aaidoun/emads

- 日期：2026-07-01
- 来源：[GitHub](https://github.com/idriss-aaidoun/emads)
- 简短摘要：可解释 multi-agent data science workflow，覆盖 EDA、model selection、explainability、reporting 和 persistent memory。
- 相关性判断：中高。它不是时序专用，但对可解释 AutoML workflow 的 agent 设计很有借鉴意义。

### [2026-06-04] REHXZ/AUTOML

- 日期：2026-06-04
- 来源：[GitHub](https://github.com/REHXZ/AUTOML)
- 简短摘要：本地优先的 `Agentic Machine Learning` 工作台，多 agent 覆盖完整 CRISP-DM 生命周期。
- 相关性判断：中高。虽然偏 tabular ML，但很适合借鉴多工位式建模流程。

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 论文的参考实现，聚焦时序原生 runtime、工具调用、记忆与评测。
- 相关性判断：最高。它是当前最值得继续拆的时序 Agent 代码库之一。

### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 `The Landscape of Agentic Time Series Systems` 整理论文、架构与可靠性议题。
- 相关性判断：高。它适合作为持续监控入口，但不替代一手论文检索。

### [2026-05-27] skazhutin/autovibe-gym

- 日期：2026-05-27
- 来源：[GitHub](https://github.com/skazhutin/autovibe-gym)
- 简短摘要：LLM-powered AutoML gym，提供隐藏最终评测、轨迹日志和可重复协议，用于评估迭代式 ML agents。
- 相关性判断：中高。它虽然不是时序专用，但非常适合借鉴 evaluation harness 设计。

### [2026-05-24] rnop/numerai-mcp-autoresearch

- 日期：2026-05-24
- 来源：[GitHub](https://github.com/rnop/numerai-mcp-autoresearch)
- 简短摘要：面向 Numerai 的 agentic research harness，集成 autonomous experimentation loop、Bayesian optimization、time-series cross-validation 与定期重训。
- 相关性判断：中高。它更偏量化研究，但确实触及了时序研究 Agent 的自动实验闭环。

### [2026-04-16] jaeukmoon/TSF

- 日期：2026-04-16
- 来源：[GitHub](https://github.com/jaeukmoon/TSF)
- 简短摘要：`Plug-and-play benchmark harness for time-series forecasting foundation models`，面向 LTSF 与 GIFT-Eval 的标准化接入和评测。
- 相关性判断：高。它最接近 TSFM benchmark harness 的工程层落地。

### [2026-04-12] ztxtech/aion

- 日期：2026-04-12
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：OpenCode-based 时序 harness，明确面向 structured forecasting、contextual reasoning、tool use 与 validation-driven workflow。
- 相关性判断：最高。它仍是本仓库最值得持续对照的外部参考仓库之一。

## 5. 光功率 / 光伏功率预测最新研究

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为新投运 PV 站点生成 physics-informed synthetic history，再用 TSFM 做 cold-start / zero-shot forecasting；在 440 个站点上比较多个 TSFM 与经典基线。
- 相关性判断：最高。它同时命中 `TSFM`、`冷启动部署`、`PV forecasting` 和真实能源场景，是今天该方向最值得优先读的一篇。

### [2026-06-04] Step-adaptive multimodal fusion network with multi-scale cloud feature learning for ultra-short-term solar irradiance forecasting

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.06102)
- 简短摘要：把云图多尺度视觉特征与气象时序特征做 step-adaptive 融合，面向 ultra-short-term solar irradiance forecasting。
- 相关性判断：高。它不是 foundation model，但很适合对比“图像云图信号与纯时序 TSFM”在超短时场景中的互补性。

### [2026-05-27] Decision-focused learning for optimal PV-Battery scheduling

- 日期：2026-05-27
- 来源：[arXiv](https://arxiv.org/abs/2605.28340)
- 简短摘要：将光伏预测器直接按电池调度成本进行训练，而不是只优化 RMSE；结果表明更高误差的模型也可能带来更低实际电费。
- 相关性判断：高。它把“预测指标”转成“下游决策收益”，对时序 Agent 的 objective design 非常关键。

### [2026-05-27] Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting

- 日期：2026-05-27
- 来源：[arXiv](https://arxiv.org/abs/2605.28324)
- 简短摘要：将多变量太阳能时序转写成二维结构，并把未来时段视为待补全区域，用条件扩散模型完成 solar power forecasting。
- 相关性判断：中高。它展示了 generative modeling 在 PV forecasting 上的另一条路线，适合和 TSFM 方案并行比较。

### [2026-05-18] Learning Long-Term Temporal Dependencies in Photovoltaic Power Output Prediction Through Multi-Horizon Forecasting

- 日期：2026-05-18
- 来源：[arXiv](https://arxiv.org/abs/2605.19074)
- 简短摘要：从单步点预测转向 multi-horizon forecasting，论证联合优化多个未来步可以更好地学习 PV 输出的长期依赖。
- 相关性判断：中高。它不是 Agent 论文，但对构造更稳定的光伏 forecasting backbone 很有参考价值。

### [2026-05-04] High-Fidelity Full-Sky Video Prediction for Photovoltaic Ramp Event Forecasting

- 日期：2026-05-04
- 来源：[arXiv](https://arxiv.org/abs/2605.03165)
- 简短摘要：用未来天空视频生成模型配合 ramp-aware PV forecasting 模型，在快速云层变化条件下做 16 分钟前瞻的 ramp event 预测。
- 相关性判断：中高。它非常贴近电网友好的极端波动预警场景，适合补足 TSFM 主线对 ramp events 的覆盖不足。

## 6. 今日研判

- 如果目标是继续追“TSFM 什么时候真的值得部署”，今天优先读 `When Do Foundation Models Pay Off?` 和 `Forecasting Realized Volatility with TSFMs`。
- 如果目标是继续搭建本仓库的时序 Agent / harness 方案，优先对照 `AION`、`TimeClaw`、`TimeRouter`、`TSF`。
- 如果目标是让 forecasting 系统具备更强 reasoning，可优先对照 `TSCognition`、`Can LLM Coding Agents Reason About Time Series?`、`T2SP`、`STRIDE`、`TFRBench`。
- 如果目标是找光伏方向最值得直接落到实验里的主线，今天仍建议优先拆 `Cold-Start Photovoltaic Forecasting with TSFMs`，再对照 `decision-focused PV-battery scheduling` 看预测目标如何与下游调度目标对齐。

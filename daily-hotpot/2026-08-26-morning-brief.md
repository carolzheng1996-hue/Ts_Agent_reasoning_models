# 2026-08-26 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-26 15:37:44 CST，Asia/Shanghai<br>
时间窗口：2026-05-26 至 2026-08-26<br>
优先来源：arXiv 官方 `abs` 页面 / arXiv 官方 API、GitHub 官方 Repo API / 仓库页、`DailyArXiv` 官方 GitHub README / 提交记录<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning harness`、`AutoML agent`、`photovoltaic power forecasting`、`solar power forecasting`

## 今日摘要

- 截至 `2026-08-26 15:37 CST`，今天最重要的主线增量是 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)。它是 `2026-08-25` 首发的新稿，直接把 TSFM 的偏差与 failure mode 审计写成可控干预框架，应该补到基础模型主列表首位。
- `MetaCaster` 与 [`Do Time-Series Foundation Models Pay Off for Industrial Monitoring?`](https://arxiv.org/abs/2608.22968) 仍是过去 48 小时最值得持续跟踪的两篇论文：前者回答“agent 是否应负责训练/编排”，后者回答“TSFM 是否值得部署”。
- GitHub 侧，时间序列主线仍以 `TimeSage-EV`、`AutoML-Agent`、`TSFM-Robustness-Benchmark`、`agentic-timeseries` 为主；光伏方向新增值得补看的仓库是 [`silverisland/tabm4pv`](https://github.com/silverisland/tabm4pv)，虽然创建时间早于 `solarbench`，但在 `2026-08-26` 仍有新 push。
- `DailyArXiv` 今日官方 README 已更新到 `2026-08-26`，默认分支仍为 `master`；其 `Time Series` 区今天可以补检到 `MetaCaster`，但 `Perseus` 与 `TS-Reasoner` 仍然属于“README 展示日期落窗内、arXiv 首发日期超窗”的降优先级条目。
- 今天是周三，不触发周五周报更新条件，因此本轮只生成晨报。

## 0. 检索口径

- 只保留首次公开日期或 GitHub `created_at` 落在 `2026-05-26` 至 `2026-08-26` 的条目。
- 论文日期优先采用 arXiv 官方 `published` / `Submitted on`；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at`。
- `DailyArXiv` 只作为补检与交叉核验来源，不覆盖 arXiv 首发日期。
- 无法稳定确认日期的条目不进入主列表；若有观察价值，则在补检结论中说明并降优先级。

## 1. 时间序列基础模型最新研究

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过对参数化合成时序生成器做 `ceteris paribus` 干预，系统审计 `Chronos-2` 与 `TimesFM-2.5` 对趋势、谐波、regime switch、energy-release 等模式的保持能力，并把失败模式与预训练数据偏差关联起来。
- 相关性判断：最高。它不再只比较 benchmark 分数，而是直接回答“TSFM 在什么模式上会系统性失真”。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测场景下系统比较 `MOMENT`、`Chronos-T5`、`TimesFM 2.5` 与轻量异常检测/残差模型，结论是 TSFM 的收益高度任务相关，不能默认替代经过拟合的轻量模型。
- 相关性判断：最高。它直接回答“TSFM 值不值得落地”这一部署问题，比单纯刷分更接近真实决策。

### [2026-08-23] [Semantics or Structure? Auditing Text Sensitivity in Multimodal Time-Series Forecasting](https://arxiv.org/abs/2608.22321)

- 日期：2026-08-23
- 来源：[arXiv](https://arxiv.org/abs/2608.22321)
- 简短摘要：对 `Aurora` 等多模态时序模型做受控文本扰动，发现不少性能增益并不来自文本语义本身，而是由共随的数值结构信号驱动。
- 相关性判断：高。它属于对多模态 TS foundation model 的“去幻觉式”审计，能帮助后续判断文本增强到底有没有真实贡献。

### [2026-08-20] [Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking](https://arxiv.org/abs/2608.20005)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20005)
- 简短摘要：提出 `SATS`，把 patch size 显式建模为 scale，并用 multi-patch token alignment 与 hybrid masking 处理跨频率、跨尺度预训练。
- 相关性判断：最高。它直接命中 TSFM 在 heterogeneous corpora 上的核心训练问题。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world living benchmark，用真实未来数据做 prequential evaluation，检查 TSFM 在季节变化、分布漂移和突发事件下是否仍然稳健。
- 相关性判断：最高。它把 TSFM 评测从静态测试集推进到持续有效性检验。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测振幅塌缩与横截面排序失效，并提出 `CalibRank` 在校准与排序之间折中。
- 相关性判断：最高。它暴露了 TSFM 在真实下游决策中的关键 failure mode。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，显式控制 dataset exposure、context window、prediction horizon 与 missingness，强调 TSFM 的进展不只来自架构，也来自训练分布设计。
- 相关性判断：最高。它是“如何稳定训练 TSFM”的代表性新工作。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：提出一个 meta-harness-optimized multi-agent framework，用 agentic data generation 和文本上下文，在少样本条件下自动训练轻量专用 forecaster。
- 相关性判断：最高。它很清楚地区分了“agent 负责编排与造数”“轻量 forecaster 负责部署推断”的职责边界。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：围绕金融时序变点检测，让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它是近三个月里最直接的“自演化 time-series research agent”新稿之一。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再用这些结构化上下文条件化 diffusion forecaster。
- 相关性判断：高。它展示了 forecasting agent 如何把文档语境转化为可控的 forecast guidance。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖真实机构情境和持续更新数据环境的 live benchmark，评测 agent 在 state identification、summarization、outlook reasoning 上的稳定性。
- 相关性判断：最高。它仍是当前最接近真实动态环境的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两个相互隔离的量化研究 agent 循环，通过保留已验证证据推动后续 proposal，形成 bounded recursive self-improvement。
- 相关性判断：中高。场景偏量化，但方法论和时序实验代理、研究 harness 高度相近。

### [2026-08-09] [Agentic Anomaly Detection with ORCA-Style Dynamic Inductive Bias Adaptation in Multimodal Wearable Time Series Data](https://arxiv.org/abs/2608.08859)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.08859)
- 简短摘要：通过一个 supervisory controller 在推理时动态选择 temporal receptive field，使异常检测模型不必事先固定时间尺度。
- 相关性判断：中高。更偏 anomaly detection controller，但体现了“agent 作为运行时 inductive-bias 调度器”的思路。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：提出 `ConceptTS`，让 LLM 自动提出任务相关概念并生成可执行标注规则，把预测过程拆成历史上下文、局部区间与完整 horizon 三类可读概念瓶颈。
- 相关性判断：最高。它把 LLM 引入时序预测内部表示与概念级干预层，是“forecasting 是否具备可解释 reasoning”最直接的新工作之一。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日、价格变化等事件语义映射成结构化干预字段，对 foundation forecaster 做选择性修正。
- 相关性判断：最高。它把 reasoning 从“解释输出”推进到“决定何时以及如何干预 forecast”。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 LLM reasoning 放到样本级 ensemble routing 层，联合数值模式与语义描述，输出动态且可解释的模型权重。
- 相关性判断：高。它说明 reasoning 已经进入 forecasting runtime 的决策层，而不只是事后说明。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式工具调用过程，让模型用代码与视觉能力多轮操纵时序信号，并逐步收缩定位范围。
- 相关性判断：最高。它是目前最清晰的 `tool-using time-series reasoning` 路线之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：将 context-aware forecasting 写成 `Fast-Slow-Reflect` 三阶段流程：先构造数据驱动 prior，再检索上下文并推理其影响，最后做一致性反思与修正。
- 相关性判断：最高。它是“慢思考 + 反思”范式进入时间序列预测的代表作。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把 time-series reasoning 写成 `modality-model routing` 问题，针对每个 query 在 LLM、VLM 与不同成本约束之间动态选路。
- 相关性判断：高。它说明 time-series reasoning 已经从“单模型能力”延展到“运行时路由与成本控制”。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 框架，把时序理解从 pattern recognition 推进到 grounding、inferring、extrapolating 与 acting 等认知推理任务。
- 相关性判断：高。它仍是近三个月“time series reasoning”命题最系统的基准化工作之一。

## 4. GitHub 上值得跟踪的新项目

### 4.1 时间序列 / Agent / Harness / AutoML

#### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个较早期的 multi-agent workflow 原型，明确面向 time-series analysis，并结合 GPT、Claude 与金融数据工具。
- 相关性判断：中高。成熟度有限，但它是窗口内最直接带 `agentic + timeseries` 标签的新仓库之一。

#### [2026-08-21] [cw-wan/SELA](https://github.com/cw-wan/SELA)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/cw-wan/SELA) / [GitHub 仓库](https://github.com/cw-wan/SELA)
- 简短摘要：`[EMNLP'26] Grammar of the Wave` 官方仓库，面向可解释多变量时序事件检测，强调 neuro-symbolic VLM agents。
- 相关性判断：高。虽然更偏 event detection，但与 `time-series agent + explainability` 交叉很强。

#### [2026-08-21] [SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer) / [GitHub 仓库](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)
- 简短摘要：基于 LangGraph 的多 agent AutoML pipeline，覆盖自动 EDA、特征工程、Optuna 调参、SHAP explainability 与自愈式 sandbox execution。
- 相关性判断：高。虽非时间序列专用，但对 `agent + AutoML + ML workflow` 很直接。

#### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，描述中直接标注其为 `agentic time series analysis` 基准。
- 相关性判断：最高。它是当前窗口里最值得直接复现的 time-series agent benchmark 资产。

#### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：一个面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`，且应用域与能源预测高度贴近。

#### [2026-07-12] [Janesong-AI/TSFM-Robustness-Benchmark](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)

- 日期：2026-07-12（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Janesong-AI/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)
- 简短摘要：一个面向 edge cases 的系统化 TSFM robustness testing 工具仓库。
- 相关性判断：最高。它把“如何稳定评测 TSFM failure modes”推进成可复用的工程资产。

### 4.2 光伏功率预测

#### [2026-08-24] [RuiCkg/ai-powered-energy-forecasting](https://github.com/RuiCkg/ai-powered-energy-forecasting)

- 日期：2026-08-24（创建），2026-08-24（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/RuiCkg/ai-powered-energy-forecasting) / [GitHub 仓库](https://github.com/RuiCkg/ai-powered-energy-forecasting)
- 简短摘要：新建的能源预测仓库，直接覆盖 electricity load 与 photovoltaic energy forecasting，并说明同时提供 baseline 与 sequence models。
- 相关性判断：高。它不是 agent 项目，但与本简报的电力/光伏预测主题直接重合，而且是窗口内最新仓库之一。

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（创建），2026-08-13（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/shahoismael/solarbench) / [GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：一个跨气候带统一协议的光伏功率预测 benchmark，强调四个 Köppen 气候区和开放 baseline。
- 相关性判断：最高。它是近三个月光伏预测方向最值得直接复现和跟踪的 benchmark 底座。

#### [2026-07-28] [silverisland/tabm4pv](https://github.com/silverisland/tabm4pv)

- 日期：2026-07-28（创建），2026-08-26（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/silverisland/tabm4pv) / [GitHub 仓库](https://github.com/silverisland/tabm4pv)
- 简短摘要：一个面向跨站点超短期光伏功率预测的 `Encoder + TabM` 仓库，强调 cross-station transfer 与 ultra-short-term 场景。
- 相关性判断：高。创建时间略早于 `solarbench`，但今天仍在活跃更新，适合作为工程实现向的补充观察点。

## 5. 光伏功率预测最新研究

### [2026-08-09] [A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning](https://arxiv.org/abs/2608.14698)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.14698)
- 简短摘要：提出低成本 IoT 环境监测与嵌入式 solar forecasting 一体化装置，在设备侧执行 24 小时太阳能电压预测，并支持部署后的增量学习。
- 相关性判断：中高。更偏边缘部署与设备侧学习，但工程落地价值很强。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点 day-ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线，并强调 rolling-origin 评测。
- 相关性判断：最高。它是窗口内最贴近真实站点部署的公开 PV 预测论文之一。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：用 physics-informed synthetic histories 为冷启动光伏站点构造可用上下文，再让 TSFM 在 zero-shot / feedback 条件下做 cold-start 预测。
- 相关性判断：最高。它是近三个月里最直接把 TSFM 引入光伏冷启动场景的论文之一。

## 6. DailyArXiv 补检与不确定性说明

- `DailyArXiv` 官方仓库已核验：默认分支为 `master`，GitHub 仓库首页 README `Last update` 为 `2026-08-26`，最新自动更新提交时间为 `2026-08-25T17:06:30Z`。这说明它今天的 README 快照是可用的，但仍应作为补检入口，而不是替代 arXiv 首发日期。
- `DailyArXiv` 今日 `Time Series` 区已明确出现 [`MetaCaster`](https://arxiv.org/abs/2608.23473)；结合仓库页面检索结果，窗口内与本主题高度相关的条目仍可确认包括 `MetaCaster` 与 `ConceptTS`。
- `DailyArXiv` 中的 [`Perseus`](https://arxiv.org/abs/2510.09930v2) 与 [`TS-Reasoner`](https://arxiv.org/abs/2510.03519v3) 仍需降优先级处理：README 展示日期分别为 `2026-08-21` 与 `2026-08-19`，但 arXiv 官方 `published` 日期分别是 `2025-10-11` 与 `2025-10-03`，均超出三个月窗口，因此不纳入主列表。
- 本轮没有把日期无法由官方来源确认的条目纳入主列表。

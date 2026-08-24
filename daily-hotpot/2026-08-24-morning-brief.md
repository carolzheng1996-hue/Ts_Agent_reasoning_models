# 2026-08-24 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-24 15:44 CST，Asia/Shanghai<br>
时间窗口：2026-05-24 至 2026-08-24<br>
优先来源：arXiv 官方 `abs` 页面、GitHub 官方 Repo API / 仓库页、[`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv)<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`time-series CASH`、`AutoML agent`、`photovoltaic forecasting`

## 今日摘要

- 论文侧今天没有比 `2026-08-20` 更晚、且更高相关的 TSFM / time-series agent 新 arXiv 条目；因此主线仍然是 [`SATS`](https://arxiv.org/abs/2608.20005)、[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`ReasonCast`](https://arxiv.org/abs/2608.15291) 和 [`TRACE-CASH`](https://arxiv.org/abs/2608.16410)。
- GitHub 侧今天最明确的新信号是 [`RuiCkg/ai-powered-energy-forecasting`](https://github.com/RuiCkg/ai-powered-energy-forecasting) 于 `2026-08-24` 创建，主题直接覆盖电力负荷与光伏功率预测。
- `DailyArXiv` 当前 GitHub README 页面在今天可见，`Last update` 为 `2026-08-24`，`Time Series` 区明确收录了 `EvoTS-Agent`、`LiveHouse-TS`、`ReasonCast`、`Mechanistic Interpretability...` 等条目。
- `DailyArXiv` 同时收录了 [`TS-Reasoner`](https://arxiv.org/abs/2510.03519)，但该论文主 arXiv 页面公开日期是 `2025-10-03`，与 README 中的 `2026-08-19` 展示日期不一致，因此本轮只在补检结论中降优先级说明，不进入三个月主列表。
- 今天是周一，不触发周五周报更新条件，因此本轮只生成晨报。

## 0. 检索口径

- 只保留首次公开日期或 GitHub `created_at` 落在 `2026-05-24` 至 `2026-08-24` 的内容。
- 论文日期优先采用 arXiv `published` 日期；GitHub 项目日期优先采用官方 Repo API 的 `created_at`。
- 若仅能确认二级来源中的展示日期，而无法与论文主来源日期对齐，则降优先级处理，不进入主列表。
- `DailyArXiv` 只作为补检与交叉核验来源，不替代论文首发日期与仓库创建日期。
- 本轮没有纳入日期完全不确定的主列表条目。

## 1. 时间序列基础模型最新研究

### [2026-08-20] [Systematic Evaluation of TabPFN-TS for Zero-Shot Probabilistic Heat Load Forecasting in District Heating Networks](https://arxiv.org/abs/2608.20024)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20024)
- 简短摘要：系统比较 `TabPFN-TS`、TSFM 与传统机器学习基线在区域供热热负荷概率预测中的零样本表现，并分析上下文长度、时间分辨率和迁移能力。
- 相关性判断：中高。它更偏能源负荷评测，但对 zero-shot TSFM 在真实运维场景中的可用性判断很有价值。

### [2026-08-20] [Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking](https://arxiv.org/abs/2608.20005)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20005)
- 简短摘要：提出 `SATS`，把 patch size 显式建模为 scale，并结合 multi-patch token alignment 与 hybrid masking 处理跨频率、跨尺度的时间序列预训练。
- 相关性判断：最高。它直接回答 TSFM 如何做多尺度、跨数据集预训练，是近几天最值得跟踪的基础模型论文。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world living benchmark，用真实未来数据做 prequential evaluation，衡量 TSFM 在分布漂移、季节变化和突发事件中的长期稳健性。
- 相关性判断：最高。它把 TSFM 评测从静态 benchmark 推向持续有效性检验。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测幅度压平、排序失效的 `forecast collapse`，并提出兼顾校准与排序的 `CalibRank`。
- 相关性判断：最高。它直接暴露 TSFM 在真实决策场景中的关键 failure mode。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练框架，显式控制 dataset exposure、context length 与 prediction horizon，强调 TSFM 的竞争点正在转向训练范式。
- 相关性判断：最高。它是“如何训练 TSFM”这一核心问题的代表作。

## 2. 时间序列建模 Agent / Harness / AutoML 最新研究

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：围绕金融时序变点检测，让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它是窗口内最明确把自演化 research agent 落到时间序列任务上的新论文。

### [2026-08-17] [TRACE-CASH: Trial-History-Conditioned Reinforcement Learning for Adaptive Configuration Exploration in Time-Series CASH](https://arxiv.org/abs/2608.16410)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.16410)
- 简短摘要：把时间序列 `CASH` 搜索写成 trial-history-conditioned 的混合序列决策过程，用 grouped actor-critic 生成模型、时间窗口、训练配置等候选动作。
- 相关性判断：最高。它直接命中 `timeseries harness + AutoML + adaptive search`，是今天最该补入主列表的 AutoML 论文。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态时序预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再用这些结构化上下文条件化 diffusion forecaster。
- 相关性判断：高。它展示了 forecasting agent 在结构化场景理解上的成熟系统设计。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖真实机构场景与持续更新数据环境的 live benchmark，评测 agent 在 state identification、summarization 与 outlook reasoning 上的稳定性。
- 相关性判断：最高。它仍是当前最接近真实动态数据环境的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两个相互隔离的量化研究 agent 循环，通过保留已验证证据推动后续 proposal，形成 bounded recursive self-improvement。
- 相关性判断：中高。场景偏量化，但方法论与时间序列 research agent / experiment harness 高度相近。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-08-19] [Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B](https://arxiv.org/abs/2608.18419)

- 日期：2026-08-19
- 来源：[arXiv](https://arxiv.org/abs/2608.18419)
- 简短摘要：从 mechanistic interpretability 角度分析 LLaMA 在数值序列任务中的内部机制，发现模型会显式编码并检索一阶差分信息。
- 相关性判断：中高。它不是 forecasting 系统本身，但对“LLM 是否真的在做时序结构推理”给出机制层证据。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：围绕需求预测，让 agent 判断何时需要文本 reasoning，再把事件语义映射成结构化干预字段，对 foundation forecaster 做加性和乘性修正。
- 相关性判断：最高。它是 `forecasting + reasoning + agent` 三者交叉最明确的近期论文。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 LLM reasoning 放到样本级 ensemble routing 层，联合数值特征与模式描述，输出动态且可解释的模型权重。
- 相关性判断：最高。它说明 reasoning 已经进入 forecasting runtime 的决策层，而不只是解释层。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式工具调用过程，让模型用代码和视觉能力多轮操纵时序信号并逐步收缩定位范围。
- 相关性判断：最高。它是当前最成熟的一类 `tool-using time-series reasoning agent`。

## 4. GitHub 上值得跟踪的新项目

### [2026-08-24] [RuiCkg/ai-powered-energy-forecasting](https://github.com/RuiCkg/ai-powered-energy-forecasting)

- 日期：2026-08-24（创建），2026-08-24（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/RuiCkg/ai-powered-energy-forecasting) / [GitHub 仓库](https://github.com/RuiCkg/ai-powered-energy-forecasting)
- 简短摘要：新建的能源预测仓库，直接覆盖 electricity load 与 photovoltaic energy forecasting，并说明同时提供 baseline 与 sequence models。
- 相关性判断：高。它不是 agent 项目，但与本简报的电力/光伏预测主题直接重合，而且是今天窗口内最新仓库。

### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个极早期的 multi-agent time-series analysis 原型，描述中明确提到 GPT、Claude 与金融数据工具协作。
- 相关性判断：中高。仓库还很新，但它是近两天最直接带 `agentic + timeseries` 标签的项目。

### [2026-08-21] [SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer) / [GitHub 仓库](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)
- 简短摘要：基于 LangGraph 的多 agent AutoML pipeline，覆盖自动 EDA、特征工程、Optuna 调参、SHAP explainability 与 self-healing sandboxed code execution。
- 相关性判断：高。虽然不是时间序列专用，但对 `agent + AutoML + ML workflow` 非常直接。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，描述中直接标注其为 `agentic time series analysis` 基准。
- 相关性判断：最高。它是当前窗口里最值得直接跟踪的 time-series agent benchmark 项目。

### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（创建），2026-08-13（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/shahoismael/solarbench) / [GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：一个跨气候带统一协议的光伏功率预测 benchmark，强调四个 Köppen 气候区和开放 baseline。
- 相关性判断：最高。它是近三个月光伏预测方向最值得直接复现和跟踪的 benchmark 底座。

### [2026-07-26] [Cyanisok3/agent-harness-4-ml-research](https://github.com/Cyanisok3/agent-harness-4-ml-research)

- 日期：2026-07-26（创建），2026-07-26（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Cyanisok3/agent-harness-4-ml-research) / [GitHub 仓库](https://github.com/Cyanisok3/agent-harness-4-ml-research)
- 简短摘要：一个面向机器学习训练诊断与修复的 deterministic state-machine agent harness 实现。
- 相关性判断：高。它直接命中 `harness + ML research + agent` 的工程主题。

### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：一个面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：高。它同时命中 `time series + AutoML + agent`，比一般性 AutoML 项目更贴近本仓库关注面。

## 5. 光功率 / 光伏功率预测相关最新研究

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

## 6. DailyArXiv 补检结论

- 检查对象：[`zezhishao/DailyArXiv`](https://github.com/zezhishao/DailyArXiv) GitHub README 页面；当前可见 `Last update` 为 `2026-08-24`。
- 当前 `Time Series` 区可直接确认与本主题高度相关、且仍在三个月窗口内的条目包括 [`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B`](https://arxiv.org/abs/2608.18419)、[`TRACE-CASH`](https://arxiv.org/abs/2608.16410)。
- 当前可见页面还出现了 [`TS-Reasoner`](https://arxiv.org/abs/2510.03519)，但 `DailyArXiv` 在 README 中展示日期为 `2026-08-19`，而论文主 arXiv 页面公开日期为 `2025-10-03`；两者不一致，因此本轮将其视为“相关但日期不一致”的补检条目，不纳入三个月主列表。
- 与昨天相比，当前可见 `Time Series` 快照里没有稳定检出 `TimeSage-EV` 与 `Forecast Collapse in Time-Series Foundation Models`，因此 `DailyArXiv` 仍然只能作为次级交叉核验来源，而不是完整主检索入口。

# 2026-08-23 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-23 11:27 CST，Asia/Shanghai  
时间窗口：2026-05-23 至 2026-08-23  
优先来源：arXiv 官方 API / `abs` 页面、GitHub 官方仓库 API / 仓库页、[`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)  
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`agentic forecasting`、`timeseries harness`、`machine learning agent`、`AutoML`、`photovoltaic forecasting`

## 今日摘要

- 基础模型方向今天最重要的新增信号是 [`SATS`](https://arxiv.org/abs/2608.20005) 和 [`TabPFN-TS` 热负荷零样本评测](https://arxiv.org/abs/2608.20024)。前者直接讨论 TSFM 预训练中的尺度对齐，后者说明 zero-shot TSFM 已经在能源负荷场景进入系统化评测阶段。
- Agent 方向主线没有变：[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`SCENARIODIFF`](https://arxiv.org/abs/2608.17164)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 仍是时间序列研究 agent、分层 forecasting agent、live benchmark 三条最清楚的路线。
- Reasoning 方向仍以 [`Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B`](https://arxiv.org/abs/2608.18419)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149)、[`TimeRLM`](https://arxiv.org/abs/2608.03391) 为主，重点落在结构推理机制、选择性语义干预、样本级路由和多轮工具调用。
- GitHub 侧今天最值得新纳入的是 [`sriixz/agentic-timeseries`](https://github.com/sriixz/agentic-timeseries)（2026-08-22 创建）和 [`SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer`](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)（2026-08-21 创建）；前者是极新的 time-series multi-agent 原型，后者是 AutoML agent pipeline。
- 光伏方向没有比昨天更晚的新论文，但 [`A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning`](https://arxiv.org/abs/2608.14698)、[`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457) 仍是近三个月最值得跟踪的三条线。
- 今天是周日，不触发周五周报更新条件，因此本轮只生成晨报。

## 0. 检索口径

- 只保留首次公开日期或仓库 `created_at` 落在 `2026-05-23` 至 `2026-08-23` 的内容。
- 论文日期优先采用 arXiv `published` 日期；GitHub 项目日期优先采用官方 API `created_at`。
- 若只能确认项目最近更新时间而无法确认创建时间，则不进入主列表；本轮主列表未纳入日期不确定条目。
- `DailyArXiv` 只作为补检与交叉核验来源，不替代论文首发日期和仓库创建日期。

## 1. 时间序列基础模型最新研究

### [2026-08-20] [Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking](https://arxiv.org/abs/2608.20005)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20005)
- 简短摘要：提出 `SATS`，把 patch size 显式建模为 scale，并用 multi-patch token alignment 与 hybrid masking 同时处理异构采样频率和多尺度结构。
- 相关性判断：最高。它直接回答 TSFM 预训练如何处理跨频率、跨尺度语料，是今天最值得加入主列表的新基础模型论文。

### [2026-08-20] [Systematic Evaluation of TabPFN-TS for Zero-Shot Probabilistic Heat Load Forecasting in District Heating Networks](https://arxiv.org/abs/2608.20024)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20024)
- 简短摘要：系统比较 `TabPFN-TS`、其他 TSFM 与传统机器学习基线在区域供热热负荷概率预测中的零样本表现，并分析上下文长度、分辨率和迁移性。
- 相关性判断：中高。它更偏能源应用评测，但对 TSFM 在真实运维场景里的 zero-shot 能力判断很有参考价值。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world living benchmark，用真实未来数据进行 prequential evaluation，衡量 TSFM 在分布漂移、季节变化和突发事件下的长期稳健性。
- 相关性判断：最高。它把 TSFM 评测从静态 snapshot 推进到持续有效性。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测幅度压平、横截面排序失效的 `forecast collapse`，并提出 `CalibRank` 平衡校准和排序。
- 相关性判断：最高。它直接暴露 TSFM 在真实决策使用中的关键 failure mode。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT`，显式控制 dataset exposure、context length 和 prediction horizon，强调 TSFM 的核心竞争点正在从 backbone 转向训练范式。
- 相关性判断：最高。它是“如何训练 TSFM”这一核心问题的代表作。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：围绕金融时序变点检测，让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它是窗口内最明确把自演化 research agent 落到时间序列建模任务上的新论文。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：将多模态时序预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再用这些结构化上下文条件化 diffusion forecaster。
- 相关性判断：高。它展示了 forecasting agent 在文档上下文建模上的一个较成熟系统设计。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖 60 个真实机构场景、1,485 个 scenario-period QA 对的 live benchmark，评测 agent 在持续更新数据环境中的 state identification、summarization 和 outlook reasoning。
- 相关性判断：最高。它是当前最接近真实动态数据环境的 time-series agent benchmark。

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
- 简短摘要：把长上下文异常定位写成递归式工具调用过程，让模型用代码和视觉能力多轮操纵时序信号并收缩定位范围。
- 相关性判断：最高。它是当前最成熟的一类 `tool-using time-series reasoning agent`。

## 4. GitHub 上值得跟踪的新项目

### 时间序列 / Agent / Harness

### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个极新的 multi-agent time-series analysis 原型，描述中明确提到 GPT、Claude 和金融数据工具协作。
- 相关性判断：中高。仓库还很早期，但它是今天最新进入窗口且直接带 `time-series + multi-agent` 标签的项目。

### [2026-08-21] [SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer) / [GitHub 仓库](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)
- 简短摘要：基于 LangGraph 的多 agent AutoML pipeline，覆盖 EDA、特征工程、Optuna 调参、SHAP explainability 与 sandboxed code execution。
- 相关性判断：高。虽然不是时间序列专用，但对 `agent + AutoML + ML workflow` 很直接。

### [2026-08-19] [lucalullo/building-agentic-automl](https://github.com/lucalullo/building-agentic-automl)

- 日期：2026-08-19（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/lucalullo/building-agentic-automl) / [GitHub 仓库](https://github.com/lucalullo/building-agentic-automl)
- 简短摘要：从 baseline 到 senior ML agent 的 agentic AutoML 研发仓，明确强调 experiment-driven ML agent。
- 相关性判断：中高。不是时序专用，但与 `machine learning agent + AutoML` 主线直接相关。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，主题标签明确包含 `agent`、`benchmark`、`timeseries`。
- 相关性判断：最高。它是当前窗口里最值得直接跟踪的 time-series agent benchmark 项目。

### [2026-05-31] [adamthuvesen/agentic-ml-loop](https://github.com/adamthuvesen/agentic-ml-loop)

- 日期：2026-05-31（创建），2026-08-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/adamthuvesen/agentic-ml-loop) / [GitHub 仓库](https://github.com/adamthuvesen/agentic-ml-loop)
- 简短摘要：一个面向 agent-driven ML experiments 的 harness，强调每轮只验证一个有界假设，并由确定性 referee 打分。
- 相关性判断：高。它很贴近 `harness + experimentation + AutoML/ML agent` 的工程实现方式。

### 光伏

### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（创建），2026-08-13（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/shahoismael/solarbench) / [GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：一个跨气候带统一协议的光伏功率预测 benchmark，强调四个 Köppen 气候区和开放 baseline。
- 相关性判断：最高。它是近三个月光伏预测方向最值得直接复现和跟踪的 benchmark 底座。

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
- 相关性判断：最高。它是近三个月里最直接把 TSFM 引到光伏冷启动场景的论文之一。

## 6. DailyArXiv 补检结论

- 检查对象：[`zezhishao/DailyArXiv`](https://github.com/zezhishao/DailyArXiv) 官方 README；本次抓取显示 `Last update: 2026-08-21`。
- 在本次可见的 `Time Series` 快照里，能稳定确认到与本主题直接相关且仍在三个月窗口内的条目包括 [`Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B`](https://arxiv.org/abs/2608.18419)。
- 同一份可见快照前列还出现了更泛化的时序论文，如 `Lévy Attention`、`MDTIM` 等，但它们与 `time-series agent / reasoning / foundation model / photovoltaic forecasting` 的直接重合度低于正文主列表。
- 在本次可见快照中，没有稳定看到今天最关键的新增或主线条目，如 [`Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking`](https://arxiv.org/abs/2608.20005)、[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149)。
- 结论：`DailyArXiv` 仍适合做回溯和补检，但对 `2026-08-14` 之后的 time-series agent / reasoning / TSFM 关键条目覆盖滞后，因此本轮继续把它作为次级交叉核验来源。

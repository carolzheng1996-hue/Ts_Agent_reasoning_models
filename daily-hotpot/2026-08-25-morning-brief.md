# 2026-08-25 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-25 09:14 CST，Asia/Shanghai<br>
时间窗口：2026-05-25 至 2026-08-25<br>
优先来源：arXiv 官方 `abs` 页面、GitHub 官方 Repo API / 仓库页、OpenReview / 顶会官方页面<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`AutoML agent`、`photovoltaic power forecasting`、`solar power forecasting`

## 今日摘要

- 截至 `2026-08-25 09:14 CST`，没有检出比 `2026-08-20` 更晚、且相关性更高的 time-series foundation model / agent / reasoning 新论文；今天的高优先级主线仍然是 [`SATS`](https://arxiv.org/abs/2608.20005)、[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299)、[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933)、[`TRACE-CASH`](https://arxiv.org/abs/2608.16410) 和 [`ReasonCast`](https://arxiv.org/abs/2608.15291)。
- 研究趋势上，`TSFM 训练范式与稳健性评测`、`agentic benchmark / live evaluation`、`reasoning 何时介入 forecasting runtime` 是当前最密集的三条线。
- GitHub 侧今天最值得跟踪的新项目仍是 [`sriixz/agentic-timeseries`](https://github.com/sriixz/agentic-timeseries)、[`SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer`](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)、[`Jesse-dry/AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent) 和 [`RuiCkg/ai-powered-energy-forecasting`](https://github.com/RuiCkg/ai-powered-energy-forecasting)。
- `DailyArXiv` 公开 README 在今天两次抓取均超时，因此本轮没有把它作为稳定主来源；论文与项目日期全部回落到 arXiv 官方页和 GitHub 官方 API 校验。
- 今天是周二，不触发周五周报更新条件，因此本轮只生成晨报。

## 0. 检索口径

- 只保留首次公开日期或 GitHub `created_at` 落在 `2026-05-25` 至 `2026-08-25` 的条目。
- 论文日期优先采用 arXiv `published` 日期；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at`。
- 无法确认日期的条目不进入主列表；若只在二级来源中出现展示日期，则降优先级处理。
- 对 GitHub 项目，优先保留与 `time-series agent / harness / AutoML / TSFM benchmark / PV forecasting` 直接相关的仓库。

## 1. 时间序列基础模型最新研究

### [2026-08-20] [Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking](https://arxiv.org/abs/2608.20005)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20005)
- 简短摘要：提出 `SATS`，把 patch size 显式建模为 scale，并结合 multi-patch token alignment 与 hybrid masking 处理跨频率、跨尺度的时间序列预训练。
- 相关性判断：最高。它直接回答 TSFM 如何做多尺度、跨数据集预训练，是最近几天最值得持续跟踪的基础模型论文。

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

### [2026-07-25] [Foundation Models and Fine-Tuning: Toward a New Generation of Models for Time Series Forecasting](https://arxiv.org/abs/2607.23146)

- 日期：2026-07-25
- 来源：[arXiv](https://arxiv.org/abs/2607.23146)
- 简短摘要：系统回顾 foundation model 在时序预测中的迁移、适配与微调策略，对任务适配、数据规模和部署代价做了统一梳理。
- 相关性判断：高。它不是新模型，但对近期 TSFM 工作的比较框架和实验口径很有帮助。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：围绕金融时序变点检测，让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它是窗口内最明确把自演化 research agent 落到时间序列任务上的新论文。

### [2026-08-17] [TRACE-CASH: Trial-History-Conditioned Reinforcement Learning for Adaptive Configuration Exploration in Time-Series CASH](https://arxiv.org/abs/2608.16410)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.16410)
- 简短摘要：把时间序列 `CASH` 搜索写成 trial-history-conditioned 的混合序列决策过程，用 grouped actor-critic 生成模型、时间窗口、训练配置等候选动作。
- 相关性判断：最高。它直接命中 `timeseries harness + AutoML + adaptive search`。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态时序预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再用这些结构化上下文条件化 diffusion forecaster。
- 相关性判断：高。它展示了 forecasting agent 在结构化场景理解上的系统设计。

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

## 3. 时间序列 reasoning 模型最新研究

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

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 任务设定，把时序理解从 pattern recognition 推进到 event chain、causal clue 与自然语言解释层面的认知推理。
- 相关性判断：高。它是近三个月里“time series reasoning”命题最直接的论文之一。

## 4. GitHub 上值得跟踪的新项目

### 4.1 时间序列 / Agent / Harness / AutoML

#### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个极早期的 multi-agent time-series analysis 原型，描述中明确提到 GPT、Claude 与金融数据工具协作。
- 相关性判断：中高。成熟度还低，但它是当前窗口里最直接带 `agentic + timeseries` 标签的新仓库之一。

#### [2026-08-21] [SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer) / [GitHub 仓库](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)
- 简短摘要：基于 LangGraph 的多 agent AutoML pipeline，覆盖自动 EDA、特征工程、Optuna 调参、SHAP explainability 与 self-healing sandboxed code execution。
- 相关性判断：高。虽然不是时间序列专用，但对 `agent + AutoML + ML workflow` 很直接。

#### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，描述中直接标注其为 `agentic time series analysis` 基准。
- 相关性判断：最高。它是当前窗口里最值得直接跟踪的 time-series agent benchmark 项目。

#### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-24（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：一个面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：高。它同时命中 `time series + AutoML + agent`，比一般性 AutoML 项目更贴近本仓库关注面。

#### [2026-07-12] [Janesong-AI/TSFM-Robustness-Benchmark](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)

- 日期：2026-07-12（创建），2026-08-24（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Janesong-AI/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)
- 简短摘要：一个面向 edge cases 的系统化 TSFM robustness testing 工具仓库。
- 相关性判断：最高。它把“如何稳定评测 TSFM failure modes”从论文问题推进成工程资产。

#### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（创建），2026-06-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/AkshajKashyap/autoresearch-timeseries-agent) / [GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：一个可复现实验代理框架，覆盖 synthetic/CSV 数据、baseline models、CI、诊断报告与 deterministic config-running experiment agent。
- 相关性判断：高。它更像 research harness，而不是聊天式 agent，工程可复现性更强。

#### [2026-05-31] [adamthuvesen/agentic-ml-loop](https://github.com/adamthuvesen/agentic-ml-loop)

- 日期：2026-05-31（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/adamthuvesen/agentic-ml-loop) / [GitHub 仓库](https://github.com/adamthuvesen/agentic-ml-loop)
- 简短摘要：一个 agent-driven ML 实验 harness，要求每轮只提出一个有界假设，并由 deterministic referee 评分。
- 相关性判断：高。虽然不是时序专用，但对 `research loop / harness / reproducibility` 非常契合。

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

## 6. 补检与不确定性说明

- `DailyArXiv`：今天通过公开 README 做补检时，两次抓取均超时，因此本轮不把它作为稳定来源；仅以 arXiv 主页面和 GitHub Repo API 作为主证据链。
- `OpenReview / 顶会页面`：今天没有检出比上述 arXiv 条目更晚、且相关性更高的 time-series foundation model / agent / reasoning 新公开条目，因此未单列顶会正式版补充。
- 不确定日期条目：本轮没有将日期无法由官方源确认的内容纳入主列表。

# 2026-08-10 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-10 15:38 CST，Asia/Shanghai  
时间窗口：2026-05-10 至 2026-08-10  
优先来源：arXiv、OpenReview、GitHub 官方仓库页 / GitHub API、官方项目页、DailyArXiv README  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-08-10` 15:38 CST，论文侧仍以 `2026-08-06` 的 [`Align-RAG`](https://arxiv.org/abs/2608.05571) 和 `2026-08-05` 的 [`Personalized Federated Sparse Adaptation of Time-Series Foundation Models`](https://arxiv.org/abs/2608.04695) 为最近且最值得跟踪的 TSFM 新条目；本轮复检仍未检到比它们更晚、且相关性更高的时间序列 foundation model 新论文。
- Agent / harness 方向的主线没有变化，仍由 [`TimeRLM`](https://arxiv.org/abs/2608.03391)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`TopoBrick`](https://arxiv.org/abs/2607.06349)、[`TimeClaw`](https://arxiv.org/abs/2606.05404) 和 [`AION`](https://arxiv.org/abs/2605.25045) 组成，覆盖 `recursive interaction`、`Fast-Slow-Reflect`、`agentic variable selection`、`generalist-agent harness` 与 `task/workspace/validator` 基础设施。
- reasoning 方向当前最强的近窗组合仍是 [`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TRACE-TS`](https://arxiv.org/abs/2608.00200)、[`ClinPRISM`](https://arxiv.org/abs/2607.25947)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 与 [`TimeSage-MT`](https://arxiv.org/abs/2606.01498)，分别代表 `forecast + reasoning joint generation`、`traceable evidence`、`irregular clinical QA`、`runtime routing` 和 `multi-turn evaluation`。
- GitHub 侧今天没有出现比 `2026-08-06` 更高信号的新建 time-series agent 项目，但 [`OpenTSLM/TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`Naveen-Boddepalli/time-series-autoML`](https://github.com/Naveen-Boddepalli/time-series-autoML)、[`jhondados/time-series-forecasting-platform`](https://github.com/jhondados/time-series-forecasting-platform)、[`Xiaoyu-Tao/CastFSR`](https://github.com/Xiaoyu-Tao/CastFSR)、[`seunghan96/reasoncast`](https://github.com/seunghan96/reasoncast) 和 [`Lkhanaajav/timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp) 仍是最值得继续跟踪的仓库组合。
- 光伏功率预测方向补检到 `2026-08-01` 的新论文 [`A novel physics-inspired method for efficient and robust ultra-short-term photovoltaic power forecasting`](https://www.sciencedirect.com/science/article/pii/S0960148126008980)，但整体上仍未出现比 [`AutoPV`](https://www.sciencedirect.com/science/article/pii/S0306261926005039) 更强的 `AutoML / NAS + forecasting` 主线；[`Bhavin2127/...Photovoltaic...`](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach) 这类工程仓库仍值得继续跟踪。
- `DailyArXiv` 公开 `README` 今天已更新到 `2026-08-10`；`Time Series` 板块现可直接核对到 [`Align-RAG`](https://arxiv.org/abs/2608.05571)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`ReasonCast`](https://arxiv.org/abs/2608.01875) 与 [`TS-Reasoner`](https://arxiv.org/abs/2510.03519)。其中 `TS-Reasoner` 在 README 中列为 `2026-08-01`，但其 arXiv 首次公开时间早于三个月窗口，因此继续仅作降优先级记录。

## 0. 检索口径

- 仅保留首次公开日期落在 `2026-05-10` 至 `2026-08-10` 的条目。
- 论文日期优先采用 arXiv / OpenReview / 期刊官方页的公开日期。
- GitHub 项目日期优先采用 GitHub API `created_at`；若仓库创建时间更早但近期仍强相关，则补充 `pushed_at` 作为活跃度日期。
- `DailyArXiv` 补检基于 `zezhishao/DailyArXiv` 仓库当前公开 `README.md` 直接核对。
- 未能稳定确认首次公开日期的条目不纳入正文；本次正文未纳入 `日期不确定` 条目。

## 1. 时间序列基础模型最新研究

### [2026-08-06] [Align-RAG: Alignment Is All You Need for TSFM In-Context Learning](https://arxiv.org/abs/2608.05571)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.05571)
- 简短摘要：提出训练自由的 retrieval-augmented TSFM 方案，在把检索到的 past-future windows 注入冻结 backbone 前，先做 closed-form 幅度缩放与整数 lag 对齐；在冻结 `Chronos-Bolt` 和其他 TSFM 上，不依赖 learned fusion 也能超过现有 retrieval adapter。
- 相关性判断：最高。它直接命中 `TSFM + retrieval + in-context learning`，也会影响后续 time-series agent 如何设计外部记忆与 demonstration retrieval。

### [2026-08-05] [Personalized Federated Sparse Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2608.04695)

- 日期：2026-08-05
- 来源：[arXiv](https://arxiv.org/abs/2608.04695)
- 简短摘要：面向建筑能耗预测，在预训练 TSFM 后接 heterogeneous temporal MoE adapter，并在联邦环境里做 client-aware、backbone-aware 的稀疏个性化适配。
- 相关性判断：最高。它把 `TSFM + personalization + federated deployment + energy forecasting` 放进一条非常现实的落地链路。

### [2026-08-04] [FinVerse: Financial Time-Series Benchmark](https://arxiv.org/abs/2608.03259)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03259)
- 简短摘要：提出金融场景 TSFM benchmark，覆盖 `116,897` 条金融时间序列与更贴近决策的分任务指标，强调通用误差低并不等于真实金融决策价值高。
- 相关性判断：高。它不是新 backbone，但对 foundation model 在高价值垂直场景中的真实可用性评估很重要。

### [2026-08-02] [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](https://arxiv.org/abs/2608.01290)

- 日期：2026-08-02
- 来源：[arXiv](https://arxiv.org/abs/2608.01290)
- 简短摘要：在 `Chronos-T5` 上做 LoRA 式联邦微调，只交换轻量 adapter 权重，并研究差分隐私噪声在小样本联邦商品价格预测中的正则化作用。
- 相关性判断：高。它是 `TSFM + privacy + PEFT + distributed deployment` 的直接案例。

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：冻结 TSFM 先生成候选轨迹，再让 LLM 通过 MCTS 扮演 policy/value planner，对文本上下文条件下的预测轨迹做搜索与筛选。
- 相关性判断：最高。它把 TSFM、planning 和 reasoning 直接连起来，是基础模型走向 agentic inference 的典型信号。

### [2026-05-28] [Rethinking Post-Training Recipes for Multimodal Time-Series Forecasting](https://arxiv.org/abs/2605.29401)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.29401)
- 简短摘要：提出 `PostTime`，用 `SFT + RLVR` 把 LLM 训练成 TSFM forecast prior 的 context-guided revisor，在多模态时序预测上优于单独 TSFM 与 LLM baseline。
- 相关性判断：高。它代表 TSFM 不再单独完成预测，而是成为 reasoning-aware post-training 管线的一部分。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文时间序列异常定位写成 `recursive language model`，通过代码与外部上下文反复交互完成 evidence retrieval、定位和说明。
- 相关性判断：最高。它非常接近 `tool-using time-series agent` 的核心范式。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段 agentic forecasting：轻量 forecaster 先给 forecast prior，再检索上下文并慢思考，最后做 reflection 修正时间与领域一致性。
- 相关性判断：最高。它是目前窗口内最直白的时间序列 Agent 新框架之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用 building knowledge graph 与 agentic topology sampler 自动挑选目标变量相关的外生特征，并区分历史可见与未来可见上下文。
- 相关性判断：高。它说明 time-series agent 的一个关键职责是外生变量选择，而不只是套用预测器。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：让 LLM 充当 neural architect，把自然语言需求映射到可执行 PyTorch 模型，并通过 `sandboxed reflection loop` 自动修正与优化。
- 相关性判断：最高。它位于 `timeseries agent + AutoML + machine learning engineering` 的正中心。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 把 temporal tools、经验演化与 episodic multimodal memory 放进统一 harness，让 generalist LLM agent 可以做 grounded、auditable 的时间序列分析。
- 相关性判断：最高。它仍然是当前最完整的时序 harness 参考之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：将时序任务形式化为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 构建实用 harness。
- 相关性判断：最高。对搭建可验证、可追踪的时间序列 Agent 平台非常关键。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 与 `ReasonCast` recipe，让模型在同一自回归生成里同时输出 forecast 与 reasoning chain。
- 相关性判断：最高。它直接命中“时间序列 reasoning 模型”这个主题本身。

### [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2608.00200)
- 简短摘要：先用 attribution 找关键时空片段，再构造带显式证据出处的 DAG 推理轨迹，让模型联合输出活动识别与可追踪 reasoning。
- 相关性判断：高。它更偏 wearable sensor understanding，但在“如何让时序 reasoning 可验证”这一点上很重要。

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：`ClinPRISM` 用 irregularity-aware multi-scale encoder、temporal evidence distiller 和 progressive alignment 处理不规则临床时序问答。
- 相关性判断：最高。它是近窗内最明确的 `irregular time-series QA + multimodal reasoning` 新条目之一。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940)
- 简短摘要：把时间序列 reasoning 里“选文本还是图像模式、选哪种模型、如何平衡效果与成本”写成异构图上的动态路由问题。
- 相关性判断：最高。它基本是时序 reasoning runtime router 的原型。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 和 hybrid 三类时间序列分析方式，发现代码执行显著有帮助，但统计验证和细粒度理解仍有明显短板。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否真的会做时间序列推理”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时间序列 reasoning benchmark，覆盖 `240` 个任务和 `2,680` 个对话轮次，集中暴露 memory、uncertainty handling 与 decision-making 弱点。
- 相关性判断：最高。它是当前最贴近多轮 agentic reasoning 评测底座的工作之一。

## 4. GitHub 上值得跟踪的最新项目

> 说明：本栏优先保留与 `timeseries agent / harness / machine learning / AutoML / photovoltaic forecasting` 直接相关、且可由 GitHub API 确认日期的项目。

### 4.1 时间序列

#### [2026-08-05] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-07-14）
- 来源：[GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：`recursive interaction + code execution + anomaly localization` 的长上下文时序代理式框架，仍在持续更新。
- 相关性判断：最高。它是当前最值得继续跟踪的 time-series tool-using agent 项目之一。

#### [2026-08-05] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-07-08）
- 来源：[GitHub 仓库](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：把数据上传、建模、可视化和部署串成轻量时序 AutoML 脚手架。
- 相关性判断：高。工程深度有限，但与 `time series + AutoML` 交集明确。

#### [2026-08-05] [jhondados/time-series-forecasting-platform](https://github.com/jhondados/time-series-forecasting-platform)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-06-08）
- 来源：[GitHub 仓库](https://github.com/jhondados/time-series-forecasting-platform)
- 简短摘要：面向 `50K+` 序列的 GCP 时序预测平台，把 `AutoML + custom TFT + hierarchical reconciliation + uncertainty quantification` 放到同一工程栈里。
- 相关性判断：高。它更偏工程平台，但与 `time series + AutoML + large-scale deployment` 的交集明确。

#### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 论文官方代码仓库，围绕 `Fast-Slow-Reflect` forecasting agent 流程组织。
- 相关性判断：最高。它是近窗内最值得跟踪的新建 forecasting agent 仓库之一。

#### [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)

- 日期：2026-08-03（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/seunghan96/reasoncast)
- 简短摘要：`ReasonCast` 官方代码仓库，目标是一次生成 forecast 与 reasoning。
- 相关性判断：最高。它是后续 `forecast + rationale joint generation` 复现实验的直接入口。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 anomaly detection、changepoint、decomposition、trend tests 和 data-quality auditing 的 deterministic MCP tools。
- 相关性判断：最高。它非常贴近时间序列 Agent 的标准工具层。

#### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：把 synthetic/CSV forecasting benchmark、baseline、报告与 deterministic experiment agent 放在同一条本地循环里。
- 相关性判断：高。它更偏实验代理与基准自动化，但与 `timeseries agent + harness + ML engineering` 的交集明确。

### 4.2 光伏功率预测

#### [2026-08-06] [Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)

- 日期：2026-08-06（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)
- 简短摘要：围绕真实运行数据构建 day-ahead PV forecasting 工程仓库，强调 physics-driven 与 data-driven 组合。
- 相关性判断：高。它不是 Agent 平台，但与光伏预测主线直接相关。

#### [2026-08-05] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)

- 日期：2026-08-05（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/ReikanYsora/Helios-Forecast)
- 简短摘要：围绕太阳能功率预测组织数据、建模与结果展示的轻量工程仓库，适合快速补实验。
- 相关性判断：中高。工程体量有限，但和 `PV forecasting` 主题直接相关。

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：面向太阳能功率建模与评估的仓库骨架，便于后续补入基准与对照实验。
- 相关性判断：中高。更偏工程底座，但对 `PV forecasting benchmark` 有实用价值。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-01] [A novel physics-inspired method for efficient and robust ultra-short-term photovoltaic power forecasting](https://www.sciencedirect.com/science/article/pii/S0960148126008980)

- 日期：2026-08-01
- 来源：[ScienceDirect / Renewable Energy](https://www.sciencedirect.com/science/article/pii/S0960148126008980)
- 简短摘要：提出物理启发式的超短期光伏功率预测方法，把可解释的机理约束与数据驱动建模结合起来，目标是同时提升效率、鲁棒性和复杂天气条件下的稳定性。
- 相关性判断：高。它不是 Agent 工作，但对光伏功率预测中“物理先验 + 数据建模”这条主线很关键，也适合作为后续 reasoning-aware PV 系统的强基线。

### [2026-07-26] [Toward Trustworthy AI Software Evaluation: A Controlled Benchmark of Deep Learning Architectures for 24-h Photovoltaic Power Forecasting](https://www.mdpi.com/2073-431X/15/8/474)

- 日期：2026-07-26
- 来源：[MDPI / Computers](https://www.mdpi.com/2073-431X/15/8/474)
- 简短摘要：对 `24h` 光伏功率预测的多类深度学习架构做受控 benchmark，强调软件评测可信度、可复现性与统一对比。
- 相关性判断：高。它不直接是 Agent 论文，但对后续评测 harness 与实验基线设计非常有价值。

### [2026-07-18] [AI-Based Multi-Timescale Photovoltaic Power Scenario Generation and Forecasting: A Statistical Relational Perspective](https://www.mdpi.com/2076-3417/16/14/7202)

- 日期：2026-07-18
- 来源：[MDPI / Applied Sciences](https://www.mdpi.com/2076-3417/16/14/7202)
- 简短摘要：从统计关系视角联合做多时间尺度光伏场景生成与预测，面向电网规划、调度与实时运行中的不确定性管理。
- 相关性判断：高。它把 forecasting 从点预测扩展到 scenario generation，更接近决策型时序 Agent 需要的输出。

### [2026-07-15] [AutoPV: An intelligent framework for automated design of photovoltaic forecasting models](https://www.sciencedirect.com/science/article/pii/S0306261926005039)

- 日期：2026-07-15
- 来源：[ScienceDirect / Applied Energy](https://www.sciencedirect.com/science/article/pii/S0306261926005039)
- 简短摘要：提出光伏功率预测 AutoML 框架 `AutoPV`，通过为 PVPF 定制的 modular search space 与架构搜索，在多任务设置下取得 `5%–20%` 平均误差下降。
- 相关性判断：最高。它和本仓库最关心的 `time series + AutoML + practical deployment` 高度同构。

### [2026-06-22] [A Critical Review and Strategic Roadmap of PV Power Forecasting (2016–2026): Addressing Temporal Leakage and Operational Integration Gaps](https://www.mdpi.com/1996-1073/19/12/2937)

- 日期：2026-06-22
- 来源：[MDPI / Energies](https://www.mdpi.com/1996-1073/19/12/2937)
- 简短摘要：系统回顾 2016–2026 年 PV forecasting，重点指出 temporal leakage 与 operational integration 这两个常被忽视但实际影响很大的问题。
- 相关性判断：高。它对评估光伏预测论文是否真的可部署、是否存在数据泄漏很关键。

### [2026-06-15] [Multi-source fusion-based cross-dimensional temporal feature-enhanced photovoltaic forecasting model](https://www.sciencedirect.com/science/article/pii/S0960148126004830)

- 日期：2026-06-15
- 来源：[ScienceDirect / Renewable Energy](https://www.sciencedirect.com/science/article/pii/S0960148126004830)
- 简短摘要：提出多源数据耦合和跨维时序特征提取的光伏预测框架，并结合数据清洗与重构提升跨季节、跨天气条件鲁棒性。
- 相关性判断：高。它代表更典型的工业级 PV forecasting 主线，可作为 AutoPV 这类 AutoML 工作的强基线参考。

## 6. DailyArXiv 补检结论

- 直接核对 `zezhishao/DailyArXiv` 当前公开 `README`，页面 `Last update` 已更新到 `2026-08-10`。
- 当前 `Time Series` 板块可直接确认的相关条目包括：
  - `2026-08-06` [`Align-RAG`](https://arxiv.org/abs/2608.05571)
  - `2026-08-04` [`CastFSR`](https://arxiv.org/abs/2608.03031)
  - `2026-08-03` [`ReasonCast`](https://arxiv.org/abs/2608.01875)
  - `README 日期 2026-08-01，但首次公开超窗` [`TS-Reasoner`](https://arxiv.org/abs/2510.03519)
- `Align-RAG / CastFSR / ReasonCast` 与正文核验结果一致，可以直接视为 `DailyArXiv` 在三个月窗口内的有效补检命中。
- `TS-Reasoner` 虽在 `README` 中以 `2026-08-01` 出现，但其 arXiv 编号对应的首次公开时间早于本次三个月窗口，因此继续降优先级，不抬升到正文主条目。

## 7. 额外备注

- 今天是周一（`2026-08-10`），按要求本次不生成周报。
- 本次未检到需要以 `日期不确定` 纳入正文的候选条目。
- 本次主条目主要来自 arXiv、GitHub API、ScienceDirect / MDPI 官方页与 DailyArXiv 公开 README；本轮复检仍未发现窗口内更强的新 Hugging Face 独立项目卡片。

# 2026-08-11 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-11 08:43 CST，Asia/Shanghai  
时间窗口：2026-05-11 至 2026-08-11  
优先来源：arXiv、OpenReview、GitHub 官方仓库页 / GitHub API、官方项目页、DailyArXiv README  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-08-11` 08:43 CST，`DailyArXiv` 公开 `README` 已更新到 `2026-08-11`；过去 24 小时里最值得加到正文的新 foundation 方向条目是 [`TS-RAG`](https://arxiv.org/abs/2608.06223) 与仍然高优先级的 [`Align-RAG`](https://arxiv.org/abs/2608.05571)，说明最近一周最强的新主线仍是 `retrieval / in-context adaptation for TSFM`。
- Agent / harness 方向没有出现比 [`TimeRLM`](https://arxiv.org/abs/2608.03391)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`TimeClaw`](https://arxiv.org/abs/2606.05404) 和 [`AION`](https://arxiv.org/abs/2605.25045) 更高相关的新论文；今天新增的 `agentic` 命中大多更偏医疗或通用平台，暂未进入主线。
- reasoning 方向的最高优先级组合仍是 [`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TRACE-TS`](https://arxiv.org/abs/2608.00200)、[`ClinPRISM`](https://arxiv.org/abs/2607.25947)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 与 [`TimeSage-MT`](https://arxiv.org/abs/2606.01498)；本轮未发现更晚且更聚焦“时间序列 reasoning 模型”的新条目。
- GitHub 项目侧没有出现明显强于现有论文官方代码仓库的新建 time-series agent 仓库，但补入了 [`MarkAntonyRajS/ChronoSight-AI`](https://github.com/MarkAntonyRajS/ChronoSight-AI) 与光伏基准仓库 [`shahoismael/solarbench`](https://github.com/shahoismael/solarbench) 作为新增观察点。
- `DailyArXiv` 的 `Time Series` 板块还出现了 [`KReF`](https://arxiv.org/abs/2608.06748) 等训练自由 retrieval forecasting 新条目，但相较于 `TSFM / agent / reasoning` 三条主线的直接相关性略低，因此本期仅保留为次级跟踪线索。
- 本期正文未纳入 `日期不确定` 条目；所有保留条目都能从 arXiv、官方页面或 GitHub API 直接确认时间。

## 0. 检索口径

- 仅保留首次公开日期落在 `2026-05-11` 至 `2026-08-11` 的条目。
- 论文日期优先采用 arXiv / OpenReview / 期刊官方页的公开日期。
- GitHub 项目日期优先采用 GitHub API `created_at`；若仓库更适合按活跃度跟踪，则补充 `pushed_at`。
- `DailyArXiv` 补检基于 `zezhishao/DailyArXiv` 当前公开 `README.md`，本次确认其 `Last update` 为 `2026-08-11`。
- 无法稳定确认首次公开日期的条目不纳入正文；本次正文未纳入 `日期不确定` 条目。

## 1. 时间序列基础模型最新研究

### [2026-08-06] [Align-RAG: Alignment Is All You Need for TSFM In-Context Learning](https://arxiv.org/abs/2608.05571)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.05571)
- 简短摘要：提出训练自由的 retrieval-augmented TSFM 方案，在把检索到的 past-future windows 注入冻结 backbone 前，先做 closed-form 幅度缩放与整数 lag 对齐；在冻结 `Chronos-Bolt` 等 TSFM 上，不依赖 learned fusion 也能超过现有 retrieval adapter。
- 相关性判断：最高。它直接命中 `TSFM + retrieval + in-context learning`，对后续 time-series agent 的外部记忆检索设计也有直接影响。

### [2026-08-06] [TS-RAG: Retrieval Augmented Generation for Time Series Forecasting](https://arxiv.org/abs/2608.06223)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.06223)
- 简短摘要：尝试把 RAG 明确移植到时间序列预测，使用专门设计的 reference tokens，把当前输入与检索到的相似序列一起融合进 forecasting backbone，报告多个真实基准上的一致增益。
- 相关性判断：高。它不是最典型的 TSFM 论文，但与 `retrieval-enhanced forecasting` 和 foundation model 外部上下文增强高度相关。

### [2026-08-05] [Personalized Federated Sparse Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2608.04695)

- 日期：2026-08-05
- 来源：[arXiv](https://arxiv.org/abs/2608.04695)
- 简短摘要：面向建筑能耗预测，在预训练 TSFM 表征后接 heterogeneous temporal MoE adapter，并在联邦环境中做 client-aware、backbone-aware 的稀疏个性化适配。
- 相关性判断：最高。它把 `TSFM + personalization + federated deployment + energy forecasting` 放进一条现实的落地链路。

### [2026-08-02] [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](https://arxiv.org/abs/2608.01290)

- 日期：2026-08-02
- 来源：[arXiv](https://arxiv.org/abs/2608.01290)
- 简短摘要：在 `Chronos-T5` 上做 LoRA 式联邦微调，只交换轻量 adapter 权重，并展示差分隐私噪声在小样本联邦商品价格预测里可能兼具隐私保护和正则化作用。
- 相关性判断：高。它是 `TSFM + privacy + PEFT + distributed deployment` 的直接案例。

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：冻结 TSFM 先生成候选轨迹，再让 LLM 通过 MCTS 扮演 policy / value planner，对文本上下文条件下的预测轨迹做搜索与筛选。
- 相关性判断：最高。它把 TSFM、planning 和 reasoning 明确接起来，是基础模型走向 agentic inference 的强信号。

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 设计空间，把后训练方法归纳为参数适配、上下文增强、模型组合、输出处理与不确定性控制、压缩与特化五类。
- 相关性判断：最高。它不是新 backbone，但对理解接下来 TSFM 研究如何从“预训练”转向“部署前后适配”非常关键。

### [2026-07-22] [Expert-Guided Forecast Editing for Time-Series Foundation Models](https://arxiv.org/abs/2607.19659)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.19659)
- 简短摘要：研究冻结 TSFM 下的 test-time forecast editing，用专家打分在有限查询预算内对候选轨迹做 trend / seasonal 分解后的结构化 refinement。
- 相关性判断：高。它把 foundation model 的输出编辑问题显式化，与后续 `human-in-the-loop forecasting agent` 很接近。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文时间序列异常定位写成 `recursive language model`，通过代码与视觉能力反复操作信号、检索证据并完成精确定位；还引入 `AnomalyXL` 长上下文基准。
- 相关性判断：最高。它非常接近 `tool-using time-series agent` 的核心范式。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段 agentic forecasting：轻量 forecaster 先给 forecast prior，再检索上下文并慢思考，最后做 reflection 修正时间与领域一致性。
- 相关性判断：最高。它是窗口内最直白的时间序列 Agent 新框架之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：用 building knowledge graph 构造结构骨架，并借助 agentic topology sampler 自动挑选目标变量相关的外生特征，同时区分历史可见与未来可见上下文。
- 相关性判断：高。它说明 time-series agent 的关键职责之一是外生变量选择，而不只是套用预测器。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：让 LLM 充当 neural architect，把自然语言需求映射到可执行 PyTorch 模型，并通过 `sandboxed reflection loop` 和 `signature-aware runtime` 自动修正与优化。
- 相关性判断：最高。它位于 `timeseries agent + AutoML + machine learning engineering` 的正中心。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 把 temporal tools、经验演化与 episodic multimodal memory 放进统一 harness，让 generalist LLM agent 可以做 grounded、auditable 的时间序列分析。
- 相关性判断：最高。它仍然是当前最完整的时序 harness 参考之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把时序任务形式化为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 构建实用 harness。
- 相关性判断：最高。对搭建可验证、可追踪的时间序列 Agent 平台非常关键。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 与 `ReasonCast` recipe，让模型在同一自回归生成里同时输出 forecast 与 reasoning chain，并用单次生成联合完成理解与预测。
- 相关性判断：最高。它直接命中“时间序列 reasoning 模型”这个主题本身。

### [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2608.00200)
- 简短摘要：先用 attribution 找关键时空片段，再构造带显式证据出处的 DAG 推理轨迹，让模型联合输出活动识别与可追踪 reasoning。
- 相关性判断：高。它更偏 wearable sensor understanding，但在“如何让时序 reasoning 可验证”这一点上很重要。

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：`ClinPRISM` 用 irregularity-aware multi-scale encoder、temporal evidence distiller 和 progressive alignment 处理不规则临床时序问答，用 4B 级 LLM 和少量时间序列 token 实现高效推理。
- 相关性判断：最高。它是近窗内最明确的 `irregular time-series QA + multimodal reasoning` 新条目之一。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把时间序列 reasoning 里的“选文本还是图像模式、选哪种模型、如何平衡效果与成本”写成异构图上的动态路由问题。
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

#### [2026-08-05] [jhondados/time-series-forecasting-platform](https://github.com/jhondados/time-series-forecasting-platform)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-06-08）
- 来源：[GitHub 仓库](https://github.com/jhondados/time-series-forecasting-platform)
- 简短摘要：面向 `50K+` 序列的 GCP 时序预测平台，把 `AutoML + custom TFT + hierarchical reconciliation + uncertainty quantification` 放到同一工程栈里。
- 相关性判断：高。它更偏工程平台，但与 `time series + AutoML + large-scale deployment` 的交集明确。

#### [2026-08-05] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-07-08）
- 来源：[GitHub 仓库](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：把数据上传、建模、可视化和部署串成轻量时序 AutoML 脚手架。
- 相关性判断：高。工程深度有限，但与 `time series + AutoML` 交集明确。

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

#### [2026-06-27] [MarkAntonyRajS/ChronoSight-AI](https://github.com/MarkAntonyRajS/ChronoSight-AI)

- 日期：2026-06-27（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/MarkAntonyRajS/ChronoSight-AI)
- 简短摘要：把数据审计、统计检验、AutoML 建模、时间序列预测和 LLM 报告串成自治分析平台。
- 相关性判断：高。它比单一预测仓库更接近 `time series + AutoML + analytics agent` 的完整产品形态。

#### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：把 synthetic / CSV forecasting benchmark、baseline、报告与 deterministic experiment agent 放在同一条本地循环里。
- 相关性判断：高。它更偏实验代理与基准自动化，但与 `timeseries agent + harness + ML engineering` 的交集明确。

### 4.2 光伏功率预测

#### [2026-08-06] [Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)

- 日期：2026-08-06（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)
- 简短摘要：围绕真实运行数据构建 day-ahead PV forecasting 工程仓库，强调 physics-driven 与 data-driven 组合。
- 相关性判断：高。它不是 Agent 平台，但与光伏预测主线直接相关。

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：构建跨气候带的光伏功率预测 benchmark，强调统一协议、公开基线与跨区域可比性。
- 相关性判断：高。它更像数据与评测基座，但对后续 PV forecasting agent / AutoML 实验很有用。

#### [2026-07-30] [Shivam4905/pv-dimensionality-reduction](https://github.com/Shivam4905/pv-dimensionality-reduction)

- 日期：2026-07-30（GitHub API `created_at`；仓库活跃到 2026-08-10）
- 来源：[GitHub 仓库](https://github.com/Shivam4905/pv-dimensionality-reduction)
- 简短摘要：围绕 lagged production data 的特征压缩与 MATLAB 预测流程，强调在精度与模型 footprint 之间做折中。
- 相关性判断：中高。它更偏单点工程实验，但可作为轻量 PV forecasting pipeline 观察对象。

#### [2026-05-28] [Jouqio/climate-aware-pv-forecasting](https://github.com/Jouqio/climate-aware-pv-forecasting)

- 日期：2026-05-28（GitHub API `created_at`；仓库活跃到 2026-08-03）
- 来源：[GitHub 仓库](https://github.com/Jouqio/climate-aware-pv-forecasting)
- 简短摘要：提供可复现的光伏预测框架，突出 climate-aware validation 与 target leakage 检查。
- 相关性判断：高。它虽然不是 Agent 系统，但对构建更可靠的 PV forecasting benchmark 和 AutoML 流程很有价值。

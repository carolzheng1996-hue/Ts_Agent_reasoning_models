# 2026-08-07 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-07 15:40 CST，Asia/Shanghai  
时间窗口：2026-05-07 至 2026-08-07  
优先来源：arXiv、GitHub 官方仓库页 / GitHub API、DailyArXiv 公开 README、官方项目页  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-08-07` 15:40 CST，基础模型方向确认出现了一个比昨稿更晚的新主条目：[`Align-RAG: Alignment Is All You Need for TSFM In-Context Learning`](https://arxiv.org/abs/2608.05571)，arXiv 首发于 `2026-08-06`。它直接挑战“检索增强 TSFM 必须依赖可训练 fusion adapter”的默认假设，是今天最需要补入的新论文。
- 基础模型方向当前最值得连续跟踪的三条线是 [`Align-RAG`](https://arxiv.org/abs/2608.05571)、[`Personalized Federated Sparse Adaptation of Time-Series Foundation Models`](https://arxiv.org/abs/2608.04695) 和 [`FinVerse`](https://arxiv.org/abs/2608.03259)。主线已经从“更大的 TSFM”进一步转向 `retrieval in-context learning + deployment personalization + domain-aware evaluation`。
- Agent / harness 方向本周最强的新框架仍是 [`TimeRLM`](https://arxiv.org/abs/2608.03391) 与 [`CastFSR`](https://arxiv.org/abs/2608.03031)。前者代表 `recursive interaction + code execution + evidence retrieval`，后者代表 `Fast-Slow-Reflect` 这类显式慢思考 forecasting agent。
- reasoning 方向仍以 [`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TRACE-TS`](https://arxiv.org/abs/2608.00200) 与 [`ClinPRISM`](https://arxiv.org/abs/2607.25947) 最值得跟。它们分别覆盖 `forecast + explanation joint generation`、`可追踪证据链` 与 `不规则临床时序推理` 三条路线。
- GitHub 侧今天最值得记录的新增变化是光伏工程仓库 [`Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach`](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach) 于 `2026-08-06` 新建；时间序列 Agent / AutoML 侧则继续由 [`OpenTSLM/TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`Naveen-Boddepalli/time-series-autoML`](https://github.com/Naveen-Boddepalli/time-series-autoML)、[`sureshkvn/inContextML`](https://github.com/sureshkvn/inContextML) 和 [`Lkhanaajav/timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp) 维持最高跟踪优先级。
- `DailyArXiv` README 最新公开更新时间仍是 `2026-08-06`。本次确认其 `Time Series` 栏已收录 `TimeRLM`、`FinVerse`、`CastFSR`、`ReasonCast`、`TRACE-TS`、`ClinPRISM` 和 `TS-Reasoner`；其中 `TS-Reasoner` 虽然主题高度相关，但 arXiv 编号对应首发为 `2025-10-03`，超出三个月窗口，因此只在补检结论中降优先级说明。`Align-RAG` 截至本次检索尚未在公开 README 中检到。
- 今天是周五，除日报外一并生成 `weekly-brief-2026-W32.md`。

## 0. 检索口径

- 仅保留首次公开日期落在 `2026-05-07` 至 `2026-08-07` 的条目。
- 论文日期优先采用 arXiv `published`；GitHub 项目日期优先采用 GitHub API `created_at` 或 `pushed_at`。
- GitHub 项目分为两类：
  - `窗内新建项目`：按 `created_at`。
  - `窗内高活跃项目`：仓库创建时间早于窗口，但 `pushed_at` 在窗口内且主题强相关。
- `DailyArXiv` 补检基于 `zezhishao/DailyArXiv` 的公开 README；本次确认到的最新公开更新时间为 `2026-08-06`。
- 无法确认日期的条目应标记为 `不确定` 并降低优先级；本次正文未纳入日期不确定条目。

## 1. 时间序列基础模型最新研究

### [2026-08-06] [Align-RAG: Alignment Is All You Need for TSFM In-Context Learning](https://arxiv.org/abs/2608.05571)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.05571)
- 简短摘要：提出训练自由的 `Align-RAG`，在把检索到的 past-future windows 注入冻结 TSFM 前，先做 closed-form 幅度缩放和整数 lag 对齐；在冻结 `Chronos-Bolt` 与其他 TSFM 上，不用 learned fusion module 也能稳定超过现有 retrieval adapter。
- 相关性判断：最高。它直接命中 `TSFM + retrieval + in-context learning`，而且把“是否必须训练额外融合器”这个关键假设翻了过来，和时间序列 Agent 的外部记忆设计也强相关。

### [2026-08-05] [Personalized Federated Sparse Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2608.04695)

- 日期：2026-08-05
- 来源：[arXiv](https://arxiv.org/abs/2608.04695)
- 简短摘要：面向建筑能耗预测，把预训练 TSFM 后接 heterogeneous temporal MoE adapter，并在联邦场景里做 client-aware、backbone-aware 的稀疏个性化适配。
- 相关性判断：最高。它不仅是新的 TSFM 论文，还把 `federated deployment + personalization + energy time series` 这组实际约束放进统一框架里。

### [2026-08-04] [FinVerse: Financial Time-Series Benchmark](https://arxiv.org/abs/2608.03259)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03259)
- 简短摘要：提出金融场景的 TSFM benchmark，覆盖 `116,897` 条金融时间序列，并按经济含义分配更贴近真实决策的指标，而不是只看统一误差。
- 相关性判断：高。它不是新 TSFM 架构，但对“foundation model 是否真正适配高价值垂直场景”非常关键。

### [2026-08-02] [FedChronos: Federated Fine-Tuning of Time-Series Foundation Models for Privacy-Preserving Commodity Price Forecasting](https://arxiv.org/abs/2608.01290)

- 日期：2026-08-02
- 来源：[arXiv](https://arxiv.org/abs/2608.01290)
- 简短摘要：在 `Chronos-T5` 上进行 LoRA 式联邦微调，只交换轻量 adapter 权重，面向数据不能集中存放的商品价格预测。
- 相关性判断：高。它把 `TSFM + privacy + PEFT + deployment` 这组现实约束放进同一条技术链里。

### [2026-07-31] [TFGformer: Multivariate Time Series Forecasting via Time-Frequency Graph Learning and Covariate Fusion](https://arxiv.org/abs/2607.29459)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2607.29459)
- 简短摘要：摘要主体实际提出 `CrossRAG` 风格的检索增强预测框架，用 shape-aware memory、future-consistent contrastive learning 和 cross-attention temporal fusion 把历史-未来参考对注入 forecasting backbone。
- 相关性判断：最高。它直接连接 `TSFM + retrieval memory`，与时间序列 Agent 的外部记忆层设计非常接近。

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：冻结 TSFM 生成候选轨迹，再让 LLM 通过 MCTS 充当 policy / value planner，在不重训 TSFM 和 LLM 的前提下完成文本条件预测。
- 相关性判断：最高。它把 foundation model、planning、reasoning 三者放进了一条清晰的测试时推理链。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把时间序列分析写成 `recursive language model`，通过代码与外部上下文反复交互，在超长上下文时序里定位异常并给出证据。
- 相关性判断：最高。它不是传统 forecasting agent，但非常贴近 `time-series tool-using agent` 的核心范式。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段 agentic forecasting：先用轻量 forecaster 构造先验，再检索上下文证据并做慢思考推理，最后通过 reflection 校验时间一致性与领域约束。
- 相关性判断：最高。它是近三个月最直接、最完整的时间序列 Agent 新框架之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：使用 building knowledge graphs 与 agentic topology sampler 自动选择目标相关的外生变量，并按部署时可得性组织上下文。
- 相关性判断：高。它说明 Agent 不只是调模型，也能显式负责外生变量选择与部署时上下文组织。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：把时间序列 AutoML 写成多轮 agentic 循环，包含需求解析、架构生成、沙箱执行、反思和再优化。
- 相关性判断：最高。它与 `timeseries agent + AutoML + machine learning` 的交集最直接。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 将 temporal tools、经验演化与 episodic multimodal memory 组织进统一 harness，强调一般型 agents 如何做 contextualized time series。
- 相关性判断：最高。它仍然是公开资料里最成熟的时间序列 Agent harness 之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：通过 `task file + workspace + validator` 的形式定义时间序列任务，并把 agents、skills、memory、evaluation、protocols 连接成实用 harness。
- 相关性判断：最高。若目标是搭建可执行的时间序列 Agent 平台，它仍然很有工程参考价值。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 和 `ReasonCast` recipe，让模型在一次自回归生成中同时输出 forecast 与 reasoning chain，而不是把预测和解释拆成两个任务。
- 相关性判断：最高。它直接命中“时间序列 reasoning 模型”这一主题本身。

### [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2608.00200) / [GitHub](https://github.com/SparshRastogi/TRACE-TS)
- 简短摘要：通过 attribution 先定位关键时空片段，再构造带显式证据出处的 DAG 推理轨迹，最终让模型联合输出活动预测与可追踪推理。
- 相关性判断：高。它更偏 wearable sensor understanding，但在“如何让时序 reasoning 可验证”这一点上非常值得跟踪。

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：`ClinPRISM` 通过 irregularity-aware multi-scale encoder、temporal evidence distiller 和 progressive alignment 处理不规则临床时序 QA。
- 相关性判断：最高。它是近三个月最明确的 `time-series QA + multimodal reasoning` 新条目之一。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把时间序列 reasoning 中的 `文本模式还是图像模式、选哪类模型、如何平衡效果与成本` 建模成异构图上的动态路由问题。
- 相关性判断：最高。它几乎就是时序 reasoning runtime router 的原型。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 和 hybrid 三类方式，发现代码执行有帮助，但统计验证和细粒度理解仍是主要短板。
- 相关性判断：最高。它直接问“会写代码的 Agent 是否真的会做时间序列推理”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序 reasoning benchmark，集中暴露 memory、uncertainty handling 和 decision-making 短板。
- 相关性判断：最高。它仍然是当前最贴近多轮时间序列 reasoning 评测底座的工作之一。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

> 说明：本次没有检到与正文高度相关、且独立于 GitHub 仓库的新 Hugging Face 项目卡片，因此本栏保留 GitHub 官方入口，避免重复。

### 4.1 时间序列

#### [2026-08-05] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-07-14）
- 来源：[GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：围绕 `recursive interaction + code execution + anomaly localization` 的时序长上下文代理式框架，`2026-08-05` 仍有新推送。
- 相关性判断：最高。它是当前最值得继续观察的时序工具调用式 Agent 项目之一。

#### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 论文官方代码，围绕 `Fast-Slow-Reflect` agentic forecasting 流程组织。
- 相关性判断：最高。它是近窗内最值得继续跟踪的新建 forecasting agent 仓库之一。

#### [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)

- 日期：2026-08-03（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/seunghan96/reasoncast)
- 简短摘要：`ReasonCast` 官方代码仓库，目标是让模型一次生成 forecast 与 reasoning。
- 相关性判断：最高。它将成为后续 `forecast + rationale joint modeling` 复现实验的重要入口。

#### [2026-08-05] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-07-08）
- 来源：[GitHub 仓库](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：把时序 AutoML 封装成可交互工程脚手架，覆盖上传数据、建模、部署展示与持续更新。
- 相关性判断：高。工程深度有限，但与 `time series + AutoML` 的交集明确，适合作为轻量实践样本。

#### [2026-07-26] [sureshkvn/inContextML](https://github.com/sureshkvn/inContextML)

- 日期：2026-07-26（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/sureshkvn/inContextML)
- 简短摘要：一个面向 Agent 的 MCP server，封装了 forecasting、regression 和 mock classifier 的 in-context learning 接口。
- 相关性判断：高。它不是完整时序 Agent，但很贴近 `timeseries tool layer / MCP runtime` 这条工程线。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 anomaly detection、changepoint、decomposition、trend tests、data-quality auditing 等 deterministic MCP tools。
- 相关性判断：最高。它非常贴近时间序列 Agent 的工具层标准件。

#### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：一个可复现实验仓库，把 synthetic/CSV forecasting benchmark、baseline、诊断图、报告和 deterministic experiment agent 放在同一条本地循环里。
- 相关性判断：高。它更偏实验代理与基准自动化，但与 `timeseries agent + harness + regression workflow` 的交集明确。

### 4.2 光伏功率预测

#### [2026-08-06] [Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)

- 日期：2026-08-06（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Bhavin2127/Day-Ahead-AI-Driven-Photovoltaic-Energy-Forecasting-A-Physics-and-Data-Driven-Approach)
- 简短摘要：当天创建的光伏日 ahead 预测仓库，按描述聚焦真实运行数据上的多路线对比与论文/学位项目复现。
- 相关性判断：中。它胜在足够新，但更像单论文/学位项目配套代码，工程可复用性暂时弱于 `solarbench`、`Helios-Forecast` 和 `PARA-PV`。

#### [2026-08-05] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)

- 日期：2026-08-05（GitHub API `pushed_at`；仓库创建于 2026-06-11）
- 来源：[GitHub 仓库](https://github.com/ReikanYsora/Helios-Forecast)
- 简短摘要：面向 Home Assistant 的自学习 solar production forecast 项目，昨天仍在持续更新。
- 相关性判断：高。它更偏应用工程，但对光伏预测的真实部署形态很有参考价值。

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候区的光伏功率预测 benchmark，强调统一 protocol 和开源 baseline。
- 相关性判断：高。它是窗内很新的 benchmark 入口，适合继续跟踪数据集与评测协议。

#### [2026-07-17] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-17（GitHub API `pushed_at`；仓库创建于 2026-07-09）
- 来源：[GitHub 仓库](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码，对应 physics-aware retrieval-augmented PV prediction。
- 相关性判断：最高。它是 `TSFM / retrieval / PV forecasting` 三线交叉最直接的工程入口。

## 5. 光伏功率预测最新研究

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：面向新部署、数据短缺的英国站点，强调 timestamp correction、leakage-safe solar geometry、短期气象上下文和 stacking ensemble，并用 rolling-origin 评估而非随机切分。
- 相关性判断：最高。它不是最炫的新模型，但很贴近真实 PV 预测部署流程。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：系统研究 NWP 误差如何传播到 PV 预测，发现序列模型在中高扰动条件下比强 tabular baseline 具备更好的噪声滤波与时序韧性。
- 相关性判断：高。它直接面向“模型上线后会如何被天气预报误差击穿”这个工程问题。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：通过 physics-aware retrieval、冻结 Chronos prior、残差适配器与 shift correction 共同提升光伏预测。
- 相关性判断：最高。它是近期 `retrieval + TSFM prior + PV domain constraint` 融合得最完整的公开方案。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：先根据站点元数据与气象协变量生成 physics-informed synthetic histories，再让 TSFM 通过推理时条件化完成冷启动 PV 预测。
- 相关性判断：高。它说明 TSFM 在零样本或冷启动光伏场景里确实具备部署价值。

## 6. DailyArXiv 补检结论

- 补检时间：2026-08-07 15:40 CST。
- 公开 README 最近更新时间为 `2026-08-06`，`Time Series` 栏已确认收录 [`TimeRLM`](https://arxiv.org/abs/2608.03391)、[`FinVerse`](https://arxiv.org/abs/2608.03259)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TRACE-TS`](https://arxiv.org/abs/2608.00200) 和 [`ClinPRISM`](https://arxiv.org/abs/2607.25947)。
- [`TS-Reasoner`](https://arxiv.org/abs/2510.03519) 也在 `Time Series` 栏，但其 arXiv 编号对应首发日期是 `2025-10-03`，与 README 中的 `2026-08-01` 更新日期不是同一语义；因此判定为“聚合相关、日期超窗”，本期不纳入正文主条目。
- [`Align-RAG`](https://arxiv.org/abs/2608.05571) 截至本次检索尚未在公开 README 中检到，说明它比聚合源更新更快；因此今天正文优先采用 arXiv 首发日期而不是等待聚合收录。

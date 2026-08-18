# 2026-08-18 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-18 10:32 CST，Asia/Shanghai  
时间窗口：2026-05-18 至 2026-08-18  
优先来源：arXiv `abs` 页面、OpenReview / 会议官方页面检索结果、GitHub 官方仓库页 / GitHub API、官方项目页、DailyArXiv README  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`timeseries mcp`、`machine learning`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-08-18`，未检到比 `2026-08-14` 更晚、且与“时间序列基础模型 / Agent / reasoning”三条主线更强相关的新公开论文；今天最重要的公开研究信号仍然是 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106) 与 [`RAEF`](https://arxiv.org/abs/2608.14054)。
- 基础模型方向仍在从“更大 TSFM”转向“训练分布控制、检索增强、后训练与部署评测”。`Forecast Collapse` 继续提醒单序列误差会掩盖横截面排序失败，`ORBIT` 与 `RAEF` 则分别对应训练配方与推理时检索适配。
- Agent / harness 方向本轮没有比 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`TimeRLM`](https://arxiv.org/abs/2608.03391) 和 [`CastFSR`](https://arxiv.org/abs/2608.03031) 更新且更高相关的新论文，但 GitHub 上新增了 [`lewis-lea/agentic-data-pipeline`](https://github.com/lewis-lea/agentic-data-pipeline) 这类偏工程工具链的新仓库。
- Reasoning 方向近窗内仍由 [`REATS`](https://arxiv.org/abs/2608.10149)、[`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 和 [`Can LLM Coding Agents Reason About Time Series?`](https://arxiv.org/abs/2606.16545) 主导；今天没有检到更新且更强的公开条目。
- 光伏功率预测方向最值得持续跟踪的研究组合没有变化，仍是 [`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`FarSky`](https://arxiv.org/abs/2608.11254)、[`PARA-PV`](https://arxiv.org/abs/2607.08079) 与 [`Physics-Informed Synthetic Histories`](https://arxiv.org/abs/2606.07457)。
- [`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 顶部已更新到 `2026-08-18`，但其 `Time Series` 板块同时包含 [`OTIS`](https://arxiv.org/abs/2410.07299) 与 [`TS-Mob`](https://arxiv.org/abs/2507.00945) 这类“README 日期在窗内、arXiv 首发早于窗口”的条目，因此仍只能作为补充聚合源。

## 0. 检索口径

- 只保留首次公开日期或仓库创建日期落在 `2026-05-18` 至 `2026-08-18` 的内容。
- 论文日期优先采用 arXiv `citation_date` / `Submitted on`；GitHub 项目日期优先采用 GitHub API `created_at`。
- `DailyArXiv` README 的 `Date` 仅表示收录或刷新日期，不能替代论文首发日期；若与 arXiv 首发日期不一致，则以 arXiv 为准并降优先级。
- 无法确认日期的候选条目本轮均未进入正文；因此正文没有 `不确定` 日期条目。

## 1. 时间序列基础模型最新研究

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性金融收益率上会出现近乎“压平”的预测塌缩，单序列误差会掩盖 cross-series ranking failure；论文提出 `CalibRank`，试图在校准和横截面排序之间做显式折中。
- 相关性判断：最高。它直接命中 TSFM 在真实决策场景里的评测盲区，也会影响依赖排序信号的 agent / reasoning downstream runtime。

### [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14054)
- 简短摘要：提出 `RAEF`，通过输入空间直接检索与拼接式聚合替代 embedding retrieval 和平均融合，在无需微调的前提下把 retrieval augmentation 做成通用 TSFM 适配层。
- 相关性判断：高。它虽然不是 agent 论文，但对 `time-series memory / retrieval tool` 的设计很关键。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，通过 bootstrap multi-level sampling 与 omni-range incremental training 显式控制大规模异构时序语料的训练分布。
- 相关性判断：最高。它回答的是“TSFM 该怎样训练”，而不仅是“TSFM 用什么 backbone”。

### [2026-08-12] [FM-LLM: A frequency-enhanced mixture-of-experts framework for adapting LLMs to time series forecasting](https://arxiv.org/abs/2608.11623)

- 日期：2026-08-12
- 来源：[arXiv](https://arxiv.org/abs/2608.11623)
- 简短摘要：通过频域 token 对齐器和非对称 `MoE` 解码器，把冻结 LLM 适配到时序预测，减少对长文本 prompt 的依赖。
- 相关性判断：高。它更偏 `LLM-adaptation for forecasting`，但对 foundation-style forecasting runtime 仍有直接参考价值。

### [2026-08-11] [Market-Information-Aware Gated-LoRA of Foundation Models for Transferable Day-Ahead Electricity Price Forecasting](https://arxiv.org/abs/2608.11359)

- 日期：2026-08-11
- 来源：[arXiv](https://arxiv.org/abs/2608.11359)
- 简短摘要：在冻结 `Chronos-2` 的前提下，利用 market information gate 动态调节 source-domain LoRA adapter，把 TSFM 迁移到跨市场日前电价预测。
- 相关性判断：高。它展示了 `TSFM + PEFT + state-conditioned transfer` 的实用路线。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：提出持续更新的 live benchmark，覆盖 60 个真实机构场景与 1,485 个 scenario-period QA 对，专门评测 agent 在“数据会继续发布、证据会过期”的环境里做 state identification、summarization 和 outlook reasoning 的能力。
- 相关性判断：最高。它是当前最贴近“真实时间演化数据环境”的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两个相互独立的量化研究 agent 循环，让系统根据既往实验验证结果递归改进后续假设与候选配置。
- 相关性判断：高。场景偏量化交易，但它展示了 `sandboxed recursive improvement loop` 在时序研究任务中的可行形态。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归代理过程，结合代码与视觉操作，在不断检索与验证中逼近异常位置。
- 相关性判断：最高。它是当前最像 `tool-using time-series agent` 的公开系统之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段预测 agent：先产出 forecast prior，再做上下文检索和慢思考，最后反思修正。
- 相关性判断：最高。它仍然是 forecasting agent workflow 最清晰的公开实现之一。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 把 temporal tools、经验演化和 episodic multimodal memory 放进统一 runtime，让通用 agent 做 grounded、auditable 的时序分析。
- 相关性判断：最高。对搭建可追溯的时序 harness 仍然是强参考实现。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：让 `LLM reasoning` 直接承担样本级 ensemble router 角色，结合文本化模式描述与数值特征，输出可解释的动态权重。
- 相关性判断：最高。它说明 reasoning 已经从“解释层”进入 forecasting runtime 的决策层。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 和 `ReasonCast` 配方，让模型在同一生成过程中联合输出 forecast 与 rationale。
- 相关性判断：最高。它是“时间序列 reasoning 模型”主题本身的核心条目之一。

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：`ClinPRISM` 用 irregularity-aware encoder、temporal evidence distiller 和 progressive alignment 处理不规则临床时序问答。
- 相关性判断：高。它是 `irregular time-series QA + multimodal reasoning` 方向的代表作。

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880) / [HuggingFace](https://huggingface.co/datasets/winall/CLIR-Bench)
- 简短摘要：构建 6,600 个不规则临床时序 QA 样本，并给出显式 temporal evidence 与 task-specific derivation rules。
- 相关性判断：高。它是检验 reasoning 是否 grounded 的关键 benchmark。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“选文本还是图像、选哪个模型、如何兼顾成本和效果”形式化为时序 reasoning 的动态路由问题。
- 相关性判断：最高。它很像 reasoning runtime router 的原型系统。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值、coding agent 和 hybrid 三种模式，发现代码执行能提升表现，但统计验证和细粒度理解仍有明显短板。
- 相关性判断：最高。它直接回答“会写代码的 agent 是否真的会做时间序列推理”。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### [2026-08-16] [lewis-lea/agentic-data-pipeline](https://github.com/lewis-lea/agentic-data-pipeline)

- 日期：2026-08-16（GitHub `created_at`）
- 来源：[GitHub](https://github.com/lewis-lea/agentic-data-pipeline)
- 简短摘要：面向 timeseries 数据摄取、清洗和下游复用的工程流水线仓库，重点不在预测模型本身，而在把时序数据供给到其他 agent / ML 任务。
- 相关性判断：中。它更像 agent 数据层基础设施，不是研究型 time-series agent，但对实际 harness 组装有用。

#### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（GitHub `created_at`）
- 来源：[GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，指向 evolving-environment 下的 agentic time-series evaluation。
- 相关性判断：最高。它是本窗口最值得直接跟踪的 time-series agent benchmark 项目。

#### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，对应 `Fast-Slow-Reflect` agentic forecasting workflow。
- 相关性判断：最高。forecasting agent workflow 的直接实现入口。

#### [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)

- 日期：2026-08-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：`ReasonCast` 官方代码仓库，围绕 `forecast + rationale` 联合生成。
- 相关性判断：最高。时序 reasoning 复现实验的直接起点。

#### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（GitHub `created_at`）
- 来源：[GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：长上下文 anomaly localization 的 recursive time-series agent 实现。
- 相关性判断：最高。当前最强的 `tool-using time-series agent` 仓库之一。

#### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：面向短期电力负荷预测的 LLM-driven AutoML agent，集成 automated feature engineering 和 hyperparameter optimization。
- 相关性判断：高。它是 `time series + agent + AutoML` 主题里最直接的新工程项目之一。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它正好落在 time-series agent 的工具层和 protocol 层。

#### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（GitHub `created_at`）
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：可复现的本地时序预测 benchmark / report pipeline，强调 synthetic/CSV 数据、基线模型、诊断图和确定性配置。
- 相关性判断：中高。研究深度一般，但它贴近“用 agent 组织 forecasting 实验”的工程实践。

### 光伏功率预测

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（GitHub `created_at`）
- 来源：[GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候带统一协议的光伏功率预测 benchmark，给出 harmonized protocol 与 open baselines。
- 相关性判断：最高。它是光伏项目侧目前最该跟的评测底座。

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（GitHub `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，对应 `physics-aware retrieval + frozen foundation model + shift correction` 的 PV 预测路线。
- 相关性判断：最高。它是 `retrieval + frozen TSFM + PV` 主线最直接的代码入口。

#### [2026-06-11] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)

- 日期：2026-06-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/ReikanYsora/Helios-Forecast)
- 简短摘要：面向 Home Assistant 的自学习太阳能产出预测项目，近窗内仍在持续维护。
- 相关性判断：高。虽然不是论文代码，但工程落地信号很强。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-06] [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.11254)
- 简短摘要：利用 all-sky imager 和 latent diffusion 做小时内太阳辐照度生成式预测，同时显著提升 ramp event 检测。
- 相关性判断：高。它偏辐照度而非直接功率，但对短时 PV power pipeline 很贴近。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点日 ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线。
- 相关性判断：最高。它是本窗口内最贴近实际部署的公开 PV 功率预测论文。

### [2026-07-26] [A Controlled Visual-Backbone Benchmark for Multimodal Short-Term Solar Irradiance Forecasting](https://arxiv.org/abs/2607.23633)

- 日期：2026-07-26
- 来源：[arXiv](https://arxiv.org/abs/2607.23633)
- 简短摘要：在固定 pipeline 下只替换视觉 backbone，对短时太阳辐照度预测做可复现实验比较。
- 相关性判断：中高。更偏 benchmark，但对“图像侧该怎样接入 PV forecasting”很有参考价值。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把物理约束检索、冻结 Chronos 先验、distribution shift correction 和 physics-constrained loss 串成统一 PV 预测框架。
- 相关性判断：最高。它是 `retrieval + frozen TSFM + PV` 的核心条目。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对 cold-start PV 站点，用 physics-informed synthetic histories 构造推理期可用上下文，再比较多种 TSFM 的 zero-shot / feedback 策略。
- 相关性判断：最高。它是目前最直接把 foundation model 引入冷启动 PV 预测的工作之一。

## 6. DailyArXiv 补检结论

- 检查对象：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)
- 仓库状态：README 顶部显示 `Last update: 2026-08-18`。
- 当前 `Time Series` 板块窗口内且与本主题直接相关、可作为补充条目的 README 收录项：
  - [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)
  - [`Market-Information-Aware Gated-LoRA`](https://arxiv.org/abs/2608.11359)
  - [`CastFSR`](https://arxiv.org/abs/2608.03031)
- 当前应降优先级对待的 README 条目：
  - [`OTIS`](https://arxiv.org/abs/2410.07299)：README 日期在窗口内，但 arXiv 首发早于本次三个月窗口。
  - [`TS-Mob`](https://arxiv.org/abs/2507.00945)：README 日期在窗口内，但 arXiv 首发同样早于本次三个月窗口。
- 本轮判断：`DailyArXiv` 适合做“是否有新收录”的补充提醒，不适合替代首发日期核验；因此正文仍以 arXiv 首发日期和 GitHub `created_at` 为准。

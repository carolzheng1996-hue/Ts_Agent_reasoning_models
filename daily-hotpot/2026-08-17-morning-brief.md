# 2026-08-17 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-17 15:43 CST，Asia/Shanghai  
时间窗口：2026-05-17 至 2026-08-17  
优先来源：arXiv、OpenReview 检索结果、GitHub 官方仓库页 / GitHub API、官方项目页、HuggingFace、DailyArXiv README  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`timeseries mcp`、`machine learning`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- `2026-08-15` 至 `2026-08-17` 未检到比 `2026-08-14` 更晚、且更高相关的新论文或新仓库创建；今天最重要的新增信号仍然是 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270) 和 [`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106)。
- 基础模型方向从“做更大 TSFM”继续转向“训练分布控制、检索增强、后训练与评测盲区修补”。`Forecast Collapse` 和 `RAEF` 分别补上了 `cross-series ranking failure` 与 `training-free retrieval adaptation` 两个部署痛点。
- Agent / harness 方向新增重点是 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)，它不只是新 benchmark，也同时放出了 [`TimeSage-EV` GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)，把“会随时间演化的数据环境”正式纳入评测。
- Reasoning 方向近窗内仍以 [`REATS`](https://arxiv.org/abs/2608.10149)、[`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TSRouter`](https://arxiv.org/abs/2607.08940) 和 [`Can LLM Coding Agents Reason About Time Series?`](https://arxiv.org/abs/2606.16545) 为主线；本轮没有检到比这些更新且更强的新公开论文。
- 光伏 / 光功率方向本轮没有比 [`Temperature-Driven Sequential Modeling...`](https://arxiv.org/abs/2608.11261)（偏材料效率时序）和 [`FarSky`](https://arxiv.org/abs/2608.11254)（偏辐照度）更晚的高相关公开条目；若只看最贴近工程部署的 PV 功率预测，主线仍由 [`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`PARA-PV`](https://arxiv.org/abs/2607.08079) 和 [`Physics-Informed Synthetic Histories`](https://arxiv.org/abs/2606.07457) 组成。
- [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 已核到仓库 `master` 分支、最近提交时间 `2026-08-16 16:52:50 UTC`，README 顶部标注 `Last update: 2026-08-17`。其 `Time Series` 板块窗口内已收录 `ORBIT`、`FM-LLM`、`Gated-LoRA`、`TORF`、`CastFSR`、`REATS`，但尚未覆盖 `TimeSage-EV` 与 `Forecast Collapse`；同时包含 `Speculative Decoding`（`2511.18191`）和 `TS-Mob`（`2507.00945`）这类“README 日期在窗内、arXiv 首发超窗”的条目，因此只能降优先级引用。

## 0. 检索口径

- 只保留首次公开日期或仓库创建日期落在 `2026-05-17` 至 `2026-08-17` 的内容。
- 论文日期优先采用 arXiv `published` 时间；GitHub 项目日期优先采用 GitHub API `created_at`。
- `DailyArXiv` README 的 `Date` 仅表示收录/刷新日期，不能替代论文首发日期；若与 arXiv 首发日期不一致，则以 arXiv 为准并降优先级。
- 本轮未发现必须依赖闭源博客或未标日期页面才能成立的核心条目，因此正文全部使用可验证日期来源。

## 1. 时间序列基础模型最新研究

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性金融收益率上会出现近乎“压平”的预测塌缩，单序列误差指标会掩盖 cross-series ranking failure；论文提出 `CalibRank`，试图在校准与横截面排序之间做显式折中。
- 相关性判断：最高。它直接命中 TSFM 在真实决策场景中的评测盲区，对 agent / reasoning runtime 的 downstream ranking 也有连带影响。

### [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14054)
- 简短摘要：提出 `RAEF`，用输入空间直接检索和拼接式聚合替代 embedding retrieval 与平均融合，在无需微调的前提下把 retrieval augmentation 做成通用 TSFM 适配层。
- 相关性判断：高。它虽然不是 agent 论文，但对 `time-series memory / retrieval tool` 的设计非常关键。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，通过 bootstrap multi-level sampling 与 omni-range incremental training 显式控制大规模异构时序语料的训练分布。
- 相关性判断：最高。它回答的是“TSFM 该如何被训练”，而不是仅仅“TSFM 用什么 backbone”。

### [2026-08-12] [FM-LLM: A frequency-enhanced mixture-of-experts framework for adapting LLMs to time series forecasting](https://arxiv.org/abs/2608.11623)

- 日期：2026-08-12
- 来源：[arXiv](https://arxiv.org/abs/2608.11623)
- 简短摘要：通过频域 token 对齐器与非对称 `MoE` 解码器，把冻结 LLM 适配到时序预测，减少对长文本 prompt 的依赖。
- 相关性判断：高。它更偏 `LLM-adaptation for forecasting`，但对 foundation-style forecasting runtime 很有参考价值。

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
- 相关性判断：最高。它是目前最贴近“真实时间演化数据环境”的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两个相互独立的量化研究 agent 循环，让系统根据既往实验的验证结果递归改进后续假设与候选配置。
- 相关性判断：高。场景偏量化交易，但它展示了 `sandboxed recursive improvement loop` 在时序研究任务中的可行形态。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段预测 agent：先产出 forecast prior，再做上下文检索和慢思考，最后反思修正。
- 相关性判断：最高。它仍然是 forecasting agent workflow 最清晰的公开实现之一。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归代理过程，结合代码与视觉操作，在不断检索与验证中逼近异常位置。
- 相关性判断：最高。它是当前最像 `tool-using time-series agent` 的公开系统之一。

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

## 4. GitHub 上值得跟踪的新项目

### [2026-08-06] [masadi-99/align-rag](https://github.com/masadi-99/align-rag)

- 日期：2026-08-06（GitHub `created_at`）
- 来源：[GitHub](https://github.com/masadi-99/align-rag)
- 简短摘要：`Align-RAG` 官方代码仓库，围绕冻结 TSFM 的 retrieval alignment。
- 相关性判断：最高。它是 `TSFM + retrieval + memory` 的直接代码入口。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（GitHub `created_at`）
- 来源：[GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，指向 evolving-environment 下的 agentic time-series evaluation。
- 相关性判断：最高。它是本轮最值得直接跟踪的新 benchmark 项目。

### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04（GitHub `created_at`）
- 来源：[GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候带统一协议的光伏功率预测 benchmark，给出 harmonized protocol 与 open baselines。
- 相关性判断：最高。它是光伏项目侧目前最该跟的评测底座。

### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，对应 `Fast-Slow-Reflect` agentic forecasting workflow。
- 相关性判断：最高。forecasting agent workflow 的直接实现入口。

### [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)

- 日期：2026-08-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：`ReasonCast` 官方代码仓库，围绕 `forecast + rationale joint generation`。
- 相关性判断：最高。时序 reasoning 复现实验的直接起点。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（GitHub `created_at`）
- 来源：[GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：长上下文 anomaly localization 的 recursive time-series agent 实现。
- 相关性判断：最高。当前最强的 `tool-using time-series agent` 之一。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它正好落在 time-series agent 的工具层和 protocol 层。

### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08（GitHub `created_at`）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码仓库，研究时序 reasoning 的模态/模型路由。
- 相关性判断：最高。是 runtime routing 方向最值得直接追的仓库之一。

### [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-07-08（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：面向时序数据的 AutoML workflow / UI 平台，近一周仍有更新。
- 相关性判断：中高。工程深度一般，但与 `time series + AutoML` 主题直接相关。

### [2026-06-11] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)

- 日期：2026-06-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/ReikanYsora/Helios-Forecast)
- 简短摘要：面向 Home Assistant 的自学习太阳能产出预测，近期仍持续推送。
- 相关性判断：高。虽然不是论文代码，但工程落地信号很强。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-09] [Temperature-Driven Sequential Modeling for the Prediction of Annual Power Conversion Efficiency Profiles of Organic Photovoltaic Materials: Douala Case Study](https://arxiv.org/abs/2608.11261)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.11261)
- 简短摘要：基于 NASA POWER 气候数据和分子动力学轨迹，预测有机光伏材料在真实气候条件下的年度 PCE 曲线，并提出 seasonal stability score。
- 相关性判断：中。它更偏光伏材料效率时序，而非站点级光伏功率预测，因此只作外围信号保留。

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
- 相关性判断：中高。更偏 benchmark，但对“图像侧该如何接入 PV forecasting”很有参考价值。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把物理约束检索、冻结 Chronos 先验、distribution shift correction 和 physics-constrained loss 串成统一 PV 预测框架。
- 相关性判断：最高。它是 `retrieval + frozen TSFM + PV` 的最核心条目。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对 cold-start PV 站点，用 physics-informed synthetic histories 构造推理期可用上下文，再比较多种 TSFM 的 zero-shot / feedback 策略。
- 相关性判断：最高。它是目前最直接把 foundation model 引入冷启动 PV 预测的工作之一。

## 6. DailyArXiv 补检结论

- 检查对象：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)
- 仓库状态：本地核对的远端 `master` 分支最近提交时间为 `2026-08-16 16:52:50 UTC`，README 顶部显示 `Last update: 2026-08-17`。
- 窗口内且与本主题直接相关、可作为补充条目的 README 收录项：
  - [`Into the ORBIT for Time Series`](https://arxiv.org/abs/2608.13262)
  - [`FM-LLM`](https://arxiv.org/abs/2608.11623)
  - [`Market-Information-Aware Gated-LoRA`](https://arxiv.org/abs/2608.11359)
  - [`TORF`](https://arxiv.org/abs/2608.11114)
  - [`CastFSR`](https://arxiv.org/abs/2608.03031)
  - [`REATS`](https://arxiv.org/abs/2608.10149)
- README 当前未覆盖但本轮应优先纳入的更新：
  - [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)
  - [`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106)
- 相关但应降优先级的 README 条目：
  - [`Accelerating Time Series Foundation Models with Speculative Decoding`](https://arxiv.org/abs/2511.18191)：README 日期为 `2026-08-12`，但 arXiv 首发早于本次三个月窗口。
  - [`TS-Mob`](https://arxiv.org/abs/2507.00945)：README 日期为 `2026-08-11`，但 arXiv 首发同样早于本次三个月窗口。

# 2026-08-14 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-14 15:45 CST，Asia/Shanghai  
时间窗口：2026-05-14 至 2026-08-14  
优先来源：arXiv、GitHub 官方仓库页 / GitHub API、官方项目页、HuggingFace 数据页、DailyArXiv README  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`timeseries mcp`、`machine learning`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-08-14`，基础模型方向最值得补入的新信号来自 [`Into the ORBIT for Time Series: Training Regimes for Foundation Models`](https://arxiv.org/abs/2608.13262)（`2026-08-13`）和 [`FM-LLM`](https://arxiv.org/abs/2608.11623)（`2026-08-12`）。这说明近一周 TSFM 的重点继续从“更大 backbone”转向“更好的训练分布控制、冻结 LLM 适配和部署期后处理”。
- `Agent / harness` 方向今天没有检到比 [`TimeRLM`](https://arxiv.org/abs/2608.03391) 与 [`CastFSR`](https://arxiv.org/abs/2608.03031) 更晚、且更高相关的新论文；当前主线仍是 `recursive tool use`、`Fast-Slow-Reflect workflow`、`task/workspace/validator harness` 与 `agentic AutoML`。
- `Reasoning` 方向近窗内最近的强信号仍是 [`REATS`](https://arxiv.org/abs/2608.10149)（`2026-08-10`）。与 [`ReasonCast`](https://arxiv.org/abs/2608.01875)、[`TSRouter`](https://arxiv.org/abs/2607.08940)、[`CLIR-Bench`](https://arxiv.org/abs/2607.09880) 组合起来看，重点已经从“能否解释”推进到 `runtime routing`、`样本级模型加权` 和 `有证据约束的时序问答`。
- GitHub 近窗内最值得继续跟踪的新项目组合仍是 `align-rag`、`CastFSR`、`reasoncast`、`TimeRLM`、`timeseries-mcp`、`TSRouter`、`time-series-autoML` 和 `solarbench`；`Helios-Forecast` 虽不是论文代码，但在光伏工程侧的活跃度和关注度最强。
- 光伏功率预测方向本轮没有比 [`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)（`2026-08-03`）更新的高相关论文；研究主线仍然由 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 和 [`Physics-Informed Synthetic Histories`](https://arxiv.org/abs/2606.07457) 代表。
- `DailyArXiv` 已补检到 `2026-08-14` 的公开 README。其 `Time Series` 板块中，`FM-LLM`、`Market-Information-Aware Gated-LoRA`、`TORF` 等条目与本主题相关且在窗口内；但 `Speculative Decoding`（`2511.18191`）和 `TS-Mob`（`2507.00945`）虽然在 README 中以 `2026-08` 被收录，实际 arXiv 首发时间早于本次三个月窗口，因此仅作降优先级记录。

## 0. 检索口径

- 只保留首次公开日期或仓库创建日期落在 `2026-05-14` 至 `2026-08-14` 的内容。
- 论文日期优先采用 arXiv `published` 时间；GitHub 项目日期优先采用 GitHub API `created_at`，活跃度参考 `pushed_at`。
- `DailyArXiv` 的 README 日期仅表示“最近被收录/刷新”，不能直接替代论文首发日期；若与 arXiv 首发时间不一致，则以 arXiv 为准并降优先级。
- 未能稳定确认日期的 HuggingFace 新模型 / Space 本期不纳入项目列表；HuggingFace 仅作为 `CLIR-Bench` 数据集分发页的补充来源出现。

## 1. 时间序列基础模型最新研究

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，通过多层级 bootstrap sampling 和 context / horizon 渐进训练，显式控制大规模异构时序语料的域分布、上下文长度、预测跨度与缺失模式，并据此训练 `Falcon-2.0`。
- 相关性判断：最高。它不是单纯换 backbone，而是在回答“TSFM 该如何被训练得更像一个稳健基础模型”。

### [2026-08-12] [FM-LLM: A frequency-enhanced mixture-of-experts framework for adapting LLMs to time series forecasting](https://arxiv.org/abs/2608.11623)

- 日期：2026-08-12
- 来源：[arXiv](https://arxiv.org/abs/2608.11623)
- 简短摘要：提出面向冻结 LLM 的频域增强适配框架，用频谱 token 对齐器和非对称 `MoE` 解码器，把周期结构与非周期残差分开建模，避免依赖长文本 prompt 做模态对齐。
- 相关性判断：高。它更偏 `LLM-adaptation for forecasting` 而非标准 TSFM，但对 foundation-style forecasting runtime 很有参考价值。

### [2026-08-11] [Market-Information-Aware Gated-LoRA of Foundation Models for Transferable Day-Ahead Electricity Price Forecasting](https://arxiv.org/abs/2608.11359)

- 日期：2026-08-11
- 来源：[arXiv](https://arxiv.org/abs/2608.11359)
- 简短摘要：在冻结 `Chronos-2` 的前提下，利用 market information gating 调节 source-domain LoRA adapter，把基础模型迁移到跨市场日前电价预测。
- 相关性判断：高。它展示了 `TSFM + PEFT + domain-conditioned transfer` 的实际落地方向。

### [2026-08-11] [Two-stage Odd Residual Flows for Mean-Preserving Probabilistic Time Series Forecasting](https://arxiv.org/abs/2608.11114)

- 日期：2026-08-11
- 来源：[arXiv](https://arxiv.org/abs/2608.11114)
- 简短摘要：提出 `TORF`，把点预测与不确定性建模拆成两阶段，在保持均值预测不被概率目标拉坏的同时，用受限 normalizing flow 学习残差分布。
- 相关性判断：高。它不是 Agent 论文，但对 `TSFM / forecasting system` 的概率后处理和风险感知部署很重要。

### [2026-08-08] [Ground-Truth Neighborhood Regularization for Reinforcement Learning Post-Training of Time Series Foundation Models](https://arxiv.org/abs/2608.08010)

- 日期：2026-08-08
- 来源：[arXiv](https://arxiv.org/abs/2608.08010)
- 简短摘要：提出 `GTN-R`，在 `TSFM` 的 RL 后训练阶段通过 ground-truth neighborhood 约束缓解 `suboptimal collapse`，减少采样分布偏离真实未来的问题。
- 相关性判断：最高。它直接命中 `TSFM post-training + RL`，是近窗内最明确的部署后再优化路线之一。

### [2026-08-06] [Align-RAG: Alignment Is All You Need for TSFM In-Context Learning](https://arxiv.org/abs/2608.05571)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.05571) / [GitHub](https://github.com/masadi-99/align-rag)
- 简短摘要：提出训练自由的 retrieval alignment，在冻结 `TSFM` 注入检索样本前做闭式幅度缩放与整数 lag 对齐，无需 learned fusion adapter 也能取得稳定增益。
- 相关性判断：最高。它重写了 `TSFM in-context learning` 的强基线，也会影响 time-series agent 的外部记忆设计。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文时序异常定位写成递归代理过程，借助代码与视觉能力反复操作信号、检索证据并完成精确定位，同时配套 `AnomalyXL` 基准。
- 相关性判断：最高。它是当前最接近 `tool-using time-series agent` 的公开实现之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：提出 `Fast -> Slow -> Reflect` 三阶段代理式预测流程，先生成 forecast prior，再检索上下文并慢思考，最后做反思修正。
- 相关性判断：最高。它是近窗内最清晰的 forecasting agent workflow 论文之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：结合 building knowledge graph 和 agentic topology sampler，自动挑选目标变量相关的外生变量并区分历史可见/未来可见上下文。
- 相关性判断：高。它强调时序 Agent 的一个关键职责是“选对上下文”，而不是只调用一个 forecaster。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：让 `LLM` 充当 neural architect，把自然语言需求映射成可执行模型，并通过 `sandboxed reflection loop` 自动修复和优化时序网络。
- 相关性判断：最高。它位于 `timeseries agent + AutoML` 的正中心。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 把 temporal tools、经验演化与 episodic multimodal memory 放进统一运行时，让通用 LLM agent 做 grounded、auditable 的时序分析。
- 相关性判断：最高。它仍然是最完整的时序 harness 参考实现之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：将时序任务形式化为 `task file + workspace + validation interface`，并用 agents、skills、rules、memory、evaluation、protocols 构建实践导向的 harness。
- 相关性判断：最高。对搭建可验证、可追踪的时间序列 Agent 平台非常关键。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 `LLM reasoning` 用作样本级 ensemble router，联合文本化时序模式描述与数值特征，输出可解释的动态权重。
- 相关性判断：最高。它直接展示了 reasoning 模型如何在 forecasting runtime 中承担决策角色。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 与 `ReasonCast` recipe，让模型在同一自回归生成过程中同时输出 forecast 与 reasoning chain。
- 相关性判断：最高。它直接命中“时间序列 reasoning 模型”主题本身。

### [2026-07-31] [TRACE-TS: Attribution-Grounded and Traceable Sensor-Language Reasoning for Human Activity Understanding](https://arxiv.org/abs/2608.00200)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2608.00200)
- 简短摘要：先用 attribution 定位关键时空片段，再构造带显式证据出处的 DAG reasoning trace，联合输出识别结果与可追踪解释。
- 相关性判断：高。它更偏 sensor understanding，但对“时序 reasoning 如何可验证”非常重要。

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：`ClinPRISM` 用 irregularity-aware encoder、temporal evidence distiller 和 progressive alignment 处理不规则临床时序问答。
- 相关性判断：最高。它是近窗内最明确的 `irregular time-series QA + multimodal reasoning` 代表之一。

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880) / [HuggingFace](https://huggingface.co/datasets/winall/CLIR-Bench)
- 简短摘要：构建 `6,600` 个不规则临床时序 QA 样本，并附带显式 temporal evidence 与 task-specific derivation rules。
- 相关性判断：高。它是评估时序 reasoning 是否 grounded 的关键 benchmark。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“选文本还是图像、选哪种模型、如何兼顾成本与效果”形式化为异构图上的动态路由问题。
- 相关性判断：最高。它很像时序 reasoning runtime router 的原型系统。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 与 hybrid 三种时序分析模式，发现代码执行能提升表现，但统计验证与细粒度理解仍有明显短板。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否真的会做时间序列推理”。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### [2026-08-06] [masadi-99/align-rag](https://github.com/masadi-99/align-rag)

- 日期：2026-08-06
- 来源：[GitHub](https://github.com/masadi-99/align-rag)
- 简短摘要：`Align-RAG` 论文官方代码仓库，聚焦冻结 TSFM 的 retrieval alignment。
- 相关性判断：最高。它是当前 `TSFM + retrieval + in-context learning` 最值得直接追代码的仓库之一。

#### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03
- 来源：[GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，对应 `Fast-Slow-Reflect` agentic forecasting workflow。
- 相关性判断：最高。它是时序 Agent workflow 设计的直接代码入口。

#### [2026-08-03] [seunghan96/reasoncast](https://github.com/seunghan96/reasoncast)

- 日期：2026-08-03
- 来源：[GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：`ReasonCast` 官方代码仓库，围绕 `forecast + rationale joint generation`。
- 相关性判断：最高。适合作为时序 reasoning 模型的复现实验起点。

#### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14
- 来源：[GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：长上下文 anomaly localization 的 recursive time-series agent 实现。
- 相关性判断：最高。它代表当前最强的 `tool-using time-series agent` 路线之一。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、changepoint、分解、趋势检验和数据质量审计。
- 相关性判断：最高。它直接对应 time-series agent 的工具层和 protocol 层。

#### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码仓库，研究 time-series reasoning 的模态/模型动态路由。
- 相关性判断：最高。它是 runtime routing 方向的代表实现。

#### [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-07-08
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：面向时序数据的 AutoML Web workflow / UI 脚手架，近期仍有推送。
- 相关性判断：中高。工程深度一般，但与 `time series + AutoML` 主题直接相关。

#### [2026-06-27] [MarkAntonyRajS/ChronoSight-AI](https://github.com/MarkAntonyRajS/ChronoSight-AI)

- 日期：2026-06-27
- 来源：[GitHub](https://github.com/MarkAntonyRajS/ChronoSight-AI)
- 简短摘要：自治分析平台，组合数据审计、统计检验、AutoML 建模、时序预测和 LLM 报告。
- 相关性判断：中高。更偏工程平台，但和 `timeseries agent + AutoML analytics` 紧密相关。

### 光伏功率预测

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04
- 来源：[GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候带的统一光伏预测 benchmark，强调 harmonized protocol 和开源 baselines。
- 相关性判断：高。它是当前最值得持续跟踪的光伏预测评测仓库。

#### [2026-06-11] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)

- 日期：2026-06-11
- 来源：[GitHub](https://github.com/ReikanYsora/Helios-Forecast)
- 简短摘要：面向 Home Assistant 的自学习 solar production forecast，近窗内活跃度和社区关注度都较高。
- 相关性判断：高。它不是学术 benchmark，但非常接近真实部署环境。

#### [2026-05-28] [Jouqio/climate-aware-pv-forecasting](https://github.com/Jouqio/climate-aware-pv-forecasting)

- 日期：2026-05-28
- 来源：[GitHub](https://github.com/Jouqio/climate-aware-pv-forecasting)
- 简短摘要：强调 climate-aware validation 和 deterministic target leakage 修正的可复现实验框架。
- 相关性判断：中高。它对光伏预测的数据协议和评测口径有参考价值。

## 5. 光伏功率预测最新研究

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：面向短历史站点场景，构建带时间戳校正、物理特征、leakage-safe validation 和 stacking 的日前光伏预测流水线。
- 相关性判断：高。它不属于 Agent 论文，但非常适合作为时序 Agent 的下游任务模板。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：提出物理感知的检索增强光伏预测框架，用 physics-aware retrieval、冻结 `Chronos` 先验和 shift correction 模块处理分布偏移。
- 相关性判断：最高。它直接把 `retrieval + frozen TSFM + physics-aware correction` 结合到 PV forecasting。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 physics-informed synthetic history 解决 PV 冷启动问题，再让 `TSFM` 在推理时利用伪历史做条件预测。
- 相关性判断：最高。它把 `TSFM` 与光伏冷启动场景直接结合，且明显体现了 inference-time conditioning 思路。

## 6. DailyArXiv 补检结论

- `DailyArXiv` 公开 README 的 `Last update` 已到 `2026-08-14`，`Time Series` 板块在本窗口内可补入的相关条目包括：
  - [`FM-LLM`](https://arxiv.org/abs/2608.11623)：README 收录日期 `2026-08-12`，arXiv 首发 `2026-08-12`，日期一致，可正常纳入。
  - [`Market-Information-Aware Gated-LoRA`](https://arxiv.org/abs/2608.11359)：README 收录日期 `2026-08-11`，arXiv 首发 `2026-08-11`，日期一致，可正常纳入。
  - [`TORF`](https://arxiv.org/abs/2608.11114)：README 收录日期 `2026-08-11`，arXiv 首发 `2026-08-11`，日期一致，可正常纳入。
  - 公开 README 中此前也已出现 [`TimeRLM`](https://arxiv.org/abs/2608.03391)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`ReasonCast`](https://arxiv.org/abs/2608.01875) 等本主题条目。
- 相关但超窗或日期不一致的条目：
  - [`Accelerating Time Series Foundation Models with Speculative Decoding`](https://arxiv.org/abs/2511.18191)：README 中显示为 `2026-08-12`，但 arXiv 编号对应 `2025-11` 首发，超出本次三个月窗口，不纳入正文高优先级列表。
  - [`TS-Mob`](https://arxiv.org/abs/2507.00945)：README 中显示为 `2026-08-11`，但 arXiv 编号对应 `2025-07` 首发，超出本次三个月窗口，不纳入正文高优先级列表。
- 结论：`DailyArXiv` 适合作为“近期被传播/被收录”的补充线索，但本晨报仍以 arXiv 首发日期和 GitHub API 创建日期作为主判据。

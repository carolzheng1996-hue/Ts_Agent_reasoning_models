# 2026-08-19 时间序列 Agent / Reasoning 晨间简报

检索时间：2026-08-19 15:42 CST，Asia/Shanghai  
时间窗口：2026-05-19 至 2026-08-19  
优先来源：arXiv `abs` 页面、OpenReview / 官方项目页、GitHub 官方仓库页、HuggingFace、[`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`machine learning`、`AutoML forecasting`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-08-19 15:42 CST`，近窗内最晚、且强相关的新论文信号仍集中在 `2026-08-14` 到 `2026-08-15`：基础模型侧是 [`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106) 与 [`Model-agnostic Retrieval-Augmented Extended Forecasting for time series`](https://arxiv.org/abs/2608.14054)，reasoning / demand-forecasting 侧是 [`ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning`](https://arxiv.org/abs/2608.15291)。
- Agent / harness 主线没有被更晚论文替代，公开最值得继续跟进的仍是 [`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`CastFSR`](https://arxiv.org/abs/2608.03031)、[`TimeRLM`](https://arxiv.org/abs/2608.03391)、[`TimeClaw`](https://arxiv.org/abs/2606.05404) 和 [`Bridging the Last Mile of Time Series Forecasting with LLM Agents`](https://arxiv.org/abs/2606.02497)。
- GitHub 项目侧，今天更应该优先看“新仓库”而不是“老仓库最近活跃”：[`agentic-data-pipeline`](https://github.com/lewis-lea/agentic-data-pipeline)、[`TimeSage-EV`](https://github.com/TimeSage-Series/TimeSage-EV)、[`CastFSR`](https://github.com/Xiaoyu-Tao/CastFSR)、[`TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`timeseries-mcp`](https://github.com/Lkhanaajav/timeseries-mcp)、[`AutoML-Agent`](https://github.com/Jesse-dry/AutoML-Agent) 仍是最贴题的入口。
- 光伏 / 光功率预测方向没有检到比 [`FarSky`](https://arxiv.org/abs/2608.11254) 和 [`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088) 更晚且更强相关的新公开论文；代码与 benchmark 侧则继续建议跟 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 和 [`solarbench`](https://github.com/shahoismael/solarbench)。
- [`DailyArXiv README`](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 已确认存在 `Time Series` 条目，而且窗口内确有相关论文；但 README 的收录日期不能替代 arXiv 首发日期，`F-LLM`、`TALON`、`FinSTaR` 这类“README 日期在窗内、首发日期在窗外”的条目已在文末降优先级说明。

## 0. 检索口径

- 只保留首次公开日期或仓库创建日期落在 `2026-05-19` 至 `2026-08-19` 的内容。
- 论文日期优先采用 arXiv 首发日期；GitHub 项目日期优先采用仓库创建日期。
- `DailyArXiv` README 的 `Date` 仅表示收录或刷新日期，不能替代论文首发日期；若与 arXiv 首发日期不一致，则以 arXiv 为准并降优先级。
- 未能稳定确认日期、或者虽相关但明显更偏泛金融 / 泛医疗 / 泛多模态的候选项，不纳入正文。

## 1. 时间序列基础模型最新研究

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性金融收益率场景会出现近乎“压平”的预测塌缩，单序列误差会掩盖横截面排序失败；论文提出 `CalibRank`，尝试在校准与排序之间做显式折中。
- 相关性判断：最高。它直接命中 TSFM 在真实决策场景里的评测盲区，也会影响依赖排序信号的 agent / reasoning 下游运行。

### [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14054)
- 简短摘要：提出 `RAEF`，通过输入空间直接检索与拼接式聚合替代 embedding retrieval 和平均融合，在无需微调的前提下把 retrieval augmentation 做成通用 TSFM 适配层。
- 相关性判断：高。它虽然不是 agent 论文，但对 `time-series memory / retrieval tool` 的设计很关键。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，通过 bootstrap multi-level sampling 与 omni-range incremental training 显式控制大规模异构时序语料的训练分布。
- 相关性判断：最高。它回答的是“TSFM 应该怎样训练”，而不仅是“TSFM 用什么 backbone”。

### [2026-08-12] [FM-LLM: A frequency-enhanced mixture-of-experts framework for adapting LLMs to time series forecasting](https://arxiv.org/abs/2608.11623)

- 日期：2026-08-12
- 来源：[arXiv](https://arxiv.org/abs/2608.11623)
- 简短摘要：通过频域 token 对齐器和非对称 `MoE` 解码器，把冻结 LLM 适配到时序预测，减少对长文本 prompt 的依赖。
- 相关性判断：高。它更偏 `LLM adaptation for forecasting`，但对 foundation-style forecasting runtime 仍有直接参考价值。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：提出持续更新的 live benchmark，覆盖 60 个真实机构场景与 1,485 个 scenario-period QA 对，专门评测 agent 在“数据会继续发布、证据会过期”的环境里做 state identification、summarization 和 outlook reasoning 的能力。
- 相关性判断：最高。它是当前最贴近“真实时间演化数据环境”的 time-series agent benchmark。

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

### [2026-06-01] [Bridging the Last Mile of Time Series Forecasting with LLM Agents](https://arxiv.org/abs/2606.02497)

- 日期：2026-06-01
- 来源：[arXiv](https://arxiv.org/abs/2606.02497)
- 简短摘要：聚焦统计预测到业务可用预测之间的“最后一公里”，让 LLM agent 调用工具检索节假日、运营计划、历史类比与专家反馈，并把推理结果转成显式 forecast revision action。
- 相关性判断：最高。它准确命中了时序 agent 在企业应用里的真实落点，不再停留在 benchmark QA。

## 3. 时间序列 Reasoning 最新研究

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：围绕需求预测，把语义上下文筛选、结构化检索与 selective reasoning 绑定进 agentic forecasting pipeline，重点不是“解释好看”，而是让语义证据只在有帮助时介入预测修正。
- 相关性判断：最高。它是今天窗口里最新、且与 `forecasting + reasoning + agent` 三者交集最贴近的条目。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：让 `LLM reasoning` 直接承担样本级 ensemble router 角色，结合文本化模式描述与数值特征，输出可解释的动态权重。
- 相关性判断：最高。它说明 reasoning 已经从“解释层”进入 forecasting runtime 的决策层。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“选文本还是图像、选哪个模型、如何兼顾成本和效果”形式化为时序 reasoning 的动态路由问题。
- 相关性判断：最高。它很像 reasoning runtime router 的原型系统。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 方法，把时序 reasoning 从 pattern recognition 扩展到 grounding、inferring、extrapolating 和 acting 等认知型任务。
- 相关性判断：最高。它把“时间序列 reasoning”从单一 forecast explanation 扩成更完整的认知任务空间。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值、coding agent 和 hybrid 三种模式，发现代码执行能提升表现，但统计验证和细粒度理解仍有明显短板。
- 相关性判断：最高。它直接回答“会写代码的 agent 是否真的会做时间序列推理”。

## 4. GitHub 上值得跟踪的新项目

### [2026-08-16] [lewis-lea/agentic-data-pipeline](https://github.com/lewis-lea/agentic-data-pipeline)

- 日期：2026-08-16
- 来源：[GitHub](https://github.com/lewis-lea/agentic-data-pipeline)
- 简短摘要：面向 timeseries 数据摄取、清洗和下游复用的工程流水线仓库，重点不在预测模型本身，而在把时序数据供给到其他 agent / ML 任务。
- 相关性判断：中。它更像 agent 数据层基础设施，不是研究型 time-series agent，但对实际 harness 组装有用。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05
- 来源：[GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，指向 evolving-environment 下的 agentic time-series evaluation。
- 相关性判断：最高。它是本窗口最值得直接跟踪的 time-series agent benchmark 项目。

### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：2026-08-04
- 来源：[GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨气候带统一协议的光伏功率预测 benchmark，给出 harmonized protocol 与 open baselines。
- 相关性判断：最高。它是光伏项目侧目前最该跟的评测底座。

### [2026-08-03] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03
- 来源：[GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，对应 `Fast-Slow-Reflect` agentic forecasting workflow。
- 相关性判断：最高。forecasting agent workflow 的直接实现入口。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14
- 来源：[GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：长上下文 anomaly localization 的 recursive time-series agent 实现。
- 相关性判断：最高。当前最强的 `tool-using time-series agent` 仓库之一。

### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12
- 来源：[GitHub](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：面向短期电力负荷预测的 LLM-driven AutoML agent，集成 automated feature engineering 和 hyperparameter optimization。
- 相关性判断：高。它是 `time series + agent + AutoML` 主题里最直接的新工程项目之一。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它正好落在 time-series agent 的工具层和 protocol 层。

### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，对应 `physics-aware retrieval + frozen foundation model + shift correction` 的 PV 预测路线。
- 相关性判断：最高。它是 `retrieval + frozen TSFM + PV` 主线最直接的代码入口。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-06] [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.11254)
- 简短摘要：利用 all-sky imager 和 latent diffusion 做小时内太阳辐照度生成式预测，同时显著提升 ramp event 检测。
- 相关性判断：高。它偏辐照度而非直接功率，但对短时 PV power pipeline 很贴近。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：围绕真实站点 day-ahead PV 预测，构建 physics-aware、leakage-safe、stacking-based 的部署导向流水线。
- 相关性判断：最高。它是本窗口内最贴近实际部署的公开 PV 功率预测论文。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented Adaptation of Frozen Time-Series Foundation Models for Robust Photovoltaic Forecasting](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、frozen TSFM 和 shift correction 结合起来，处理天气变化与站点分布偏移下的 PV 预测鲁棒性。
- 相关性判断：最高。它是“TSFM 怎样落到光伏预测”这条线上最直接的公开工作。

### [2026-06-10] [Time Series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：用 physics-informed synthetic histories 缓解新站点冷启动数据不足问题，把基础模型迁移到缺少历史功率序列的 PV 站点。
- 相关性判断：高。它把 foundation model、domain prior 和 cold-start deployment 三个主题接到了一起。

## 6. DailyArXiv 补检结论

### [2026-08-19] [DailyArXiv README / Time Series](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)

- 日期：2026-08-19
- 来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)
- 简短摘要：已确认 README 中存在 `Time Series` 条目；窗口内直接相关的近期条目包括 `ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning`（2026-08-19 收录）、`Assessing Time Series Reasoning in Foundation Models`（2026-08-18 收录）、`OTIS: A Large-Scale Foundation Model for Accurate Time Series Understanding`（2026-08-16 收录）、`Forecasting Time Series with Infinitely Wide Attention Models`（2026-08-15 收录）和 `AION: Next-Generation Tasks and Practical Harness for Time Series`（2026-05-24 收录）。
- 相关性判断：高。它证明 `DailyArXiv` 的 `Time Series` 聚合源对今天主题仍有增量价值，尤其适合做补检而不是做首发日期依据。

### [降优先级] [F-LLM](https://arxiv.org/abs/2507.23587) / [TALON](https://arxiv.org/abs/2508.07195) / [FinSTaR](https://arxiv.org/abs/2605.03460)

- 日期：README 收录日期分别为 2026-08-17、2026-08-16、2026-05-24；arXiv 首发日期分别落在 2025-07-31、2025-08-10、2026-05-05。
- 来源：[DailyArXiv README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) / [F-LLM arXiv](https://arxiv.org/abs/2507.23587) / [TALON arXiv](https://arxiv.org/abs/2508.07195) / [FinSTaR arXiv](https://arxiv.org/abs/2605.03460)
- 简短摘要：这些条目主题都相关，但 README 日期与论文首发日期并不一致；按本简报“只保留过去三个月首次公开内容”的口径，它们不应进入正文高优先级列表。
- 相关性判断：中。对主题跟踪有参考价值，但不能当作近三个月新增论文。

## 7. 跟踪建议

- 如果你优先关心“时间序列基础模型本身”，今天最该跟的是 `Forecast Collapse`、`RAEF`、`ORBIT`。
- 如果你优先关心“可执行的时序 Agent”，最值得继续追的是 `TimeSage-EV`、`CastFSR`、`TimeRLM`、`TimeClaw`。
- 如果你优先关心“reasoning 怎么真正进入 runtime”，最值得看的组合是 `ReasonCast (2608.15291)`、`REATS`、`TSRouter`、`TSCognition`。
- 如果你接下来要做工程实现，GitHub 侧最有直接复用价值的是 `CastFSR`、`TimeRLM`、`timeseries-mcp`、`AutoML-Agent`、`PARA-PV` 与 `solarbench`。

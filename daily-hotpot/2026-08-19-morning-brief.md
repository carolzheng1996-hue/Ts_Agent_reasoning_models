# 2026-08-19 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-19 09:05 CST，Asia/Shanghai  
时间窗口：2026-05-18 至 2026-08-19  
优先来源：arXiv `abs` 页面、OpenReview / 会议官方页面、GitHub 官方仓库页与 GitHub API、官方项目页  
检索主题：`time series foundation model`、`time series agent`、`agentic forecasting`、`time series reasoning`、`timeseries harness`、`machine learning`、`AutoML`

## 今日摘要

- 截至 `2026-08-19 09:05 CST`，没有检到比 `2026-08-14` 更晚、且同时强相关于“时间序列基础模型 / Agent / reasoning”三条主线的新公开论文；今天更适合把过去三个月已公开、且仍然最值得跟进的条目做一次收敛整理。
- 基础模型方向的最新信号已经从“再做一个更大的 TSFM”转向“训练分布控制、鲁棒性盲点和多模态 post-hoc 分析”，代表条目是 `Forecast Collapse`、`ORBIT`、`Chronicle`。
- Agent 方向最强的公开增量来自 `TimeSage-EV`、`CastFSR`、`TimeRLM` 与 `Bridging the Last Mile...`：一个做 live benchmark，一个做 forecasting workflow，一个做长上下文 anomaly agent，一个把统计预测和业务修正动作接起来。
- Reasoning 方向的主题更清晰了：`ReasonCast` 把 forecast 与 rationale 合并生成，`REATS` 把 reasoning 放进 ensemble router，`TSRouter` 做成本感知的 modality/model routing，`TSCognition/TSAlign` 则把认知型时序推理单独做成 benchmark。
- GitHub 新项目仍然偏早期、小团队、低 star，但已经出现可直接复现的“仓库级入口”：`CastFSR`、`TimeSage-EV`、`TimeRLM`、`timeseries-mcp` 更偏 agent/harness，`automlbenchmark`、`neps` 更偏评测与 AutoML 基建。

## 0. 检索口径

- 只保留首次公开日期或仓库创建 / 最近活跃日期能落在 `2026-05-18` 至 `2026-08-19` 的内容。
- 论文日期优先采用 arXiv 首发日期；GitHub 项目日期优先采用 GitHub API 的 `created_at`，必要时补充 `pushed_at`。
- 若条目主题相关但日期边界不够稳固，我会在“相关性判断”里降级；本期没有把“日期无法确认”的候选条目放进正文。

## 1. 时间序列基础模型最新研究

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：论文指出 TSFM 在低可预测性金融收益率场景会出现“预测塌缩”，即数值上看似校准、但横截面排序能力显著失真；作者进一步提出 `CalibRank` 在校准与排序之间做折中。
- 相关性判断：最高。它直接暴露了 foundation model 在真实决策链路里的评测盲区，对后续 agent 排序决策和 reasoning-based routing 都有直接影响。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，用 bootstrap multi-level sampling 和 omni-range incremental training 显式控制大规模异构时序语料的曝光、窗口长度、预测 horizon 与缺失模式。
- 相关性判断：最高。它回答的是“TSFM 该怎么训练”，不是只换 backbone，因此对下一代通用时序基础模型更关键。

### [2026-06-17] [PostTime: A Multimodal Time Series Foundation Model for Post Hoc Analysis](https://arxiv.org/abs/2606.16717)

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.16717)
- 简短摘要：把时间序列、文本与图像上下文放到统一 post-hoc 分析框架里，目标不是单纯提升 forecast accuracy，而是提升“预测后解释、事件归因和辅助分析”能力。
- 相关性判断：高。它连接了 foundation model 与后验 reasoning/analysis，是时序 agent 做解释和复盘时的自然上游。

### [2026-05-18] [Chronicle: A Foundation Model for Time Series Data](https://arxiv.org/abs/2605.20268)

- 日期：2026-05-18
- 来源：[arXiv](https://arxiv.org/abs/2605.20268)
- 简短摘要：Chronicle 把大规模预训练直接带到广谱时序数据，目标是提供跨域迁移、零样本泛化与统一下游适配能力。
- 相关性判断：高。虽然发布时间处在窗口下沿，但它仍是近三个月讨论 TSFM 时绕不开的基础底座型工作。

## 2. 时间序列建模 Agent 的最新研究

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建 live benchmark，覆盖 60 个真实机构场景、1,485 个 scenario-period QA，对 agent 在数据持续更新环境中的 state identification、summarization 和 outlook reasoning 做月度更新评测。
- 相关性判断：最高。它是目前最贴近真实生产环境的 time-series agent benchmark，也直接暴露 temporal validity 问题。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：将 context-aware forecasting 写成 `Fast -> Slow -> Reflect` 三阶段 agent workflow：先给出 prior，再检索外部上下文做慢思考，最后通过反思环路修正预测。
- 相关性判断：最高。它是目前公开实现里最像“可复用 forecasting agent runtime”的工作之一。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位建模成递归 agent 过程，让模型通过代码与视觉操作逐步缩小证据范围，并引入 `AnomalyXL` 评测此类能力。
- 相关性判断：最高。它代表的是“工具使用型时序 agent”，不是只会输出文本解释的时序模型。

### [2026-06-01] [Bridging the Last Mile of Time Series Forecasting with LLM Agents](https://arxiv.org/abs/2606.02497)

- 日期：2026-06-01
- 来源：[arXiv](https://arxiv.org/abs/2606.02497)
- 简短摘要：聚焦统计预测到业务可用预测之间的“最后一公里”，让 LLM agent 调用工具检索节假日、运营计划、历史类比与专家反馈，并把推理结果转成显式 forecast revision action。
- 相关性判断：最高。它准确命中了时序 agent 在企业应用里的真实落点，不再停留在 benchmark QA。

## 3. 时间序列 Reasoning 模型的最新研究

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 LLM reasoning 直接放进 ensemble router，让模型结合文本化模式描述与数值特征，输出样本级、自适应、可解释的集成权重。
- 相关性判断：最高。它说明 reasoning 已经进入 forecasting runtime 的决策层，而不只是事后解释层。

### [2026-08-03] [ReasonCast: Towards Explainable Time Series Forecasting with Reasoning](https://arxiv.org/abs/2608.01875)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.01875) / [GitHub](https://github.com/seunghan96/reasoncast)
- 简短摘要：提出 `ReasonTS-Bench` 与 `ReasonCast` 训练配方，让模型在同一自回归过程中同时输出 forecast 与 reasoning chain。
- 相关性判断：最高。它是“时间序列 reasoning 模型”这一主题最直接的代表作之一。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“数值文本化输入 vs. 图像化输入、选哪个底层模型、如何兼顾效果与成本”形式化成动态路由问题，并在多种时序 reasoning 任务上验证提升。
- 相关性判断：最高。它很像未来时序 reasoning runtime 的调度层原型。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 方法，把时序 reasoning 从低层 pattern recognition 扩展到 decoding、grounding、inferring、extrapolating 和 acting 等认知型任务。
- 相关性判断：最高。它把“时间序列 reasoning”从单一 forecast explanation 扩成更完整的认知任务空间。

### [2026-05-21] [Reasoning through Verifiable Forecast Actions: Consistency-Grounded RL for Financial LLMs](https://arxiv.org/abs/2605.21975)

- 日期：2026-05-21
- 来源：[arXiv](https://arxiv.org/abs/2605.21975) / [GitHub](https://github.com/Cather-Chen/StockR1)
- 简短摘要：`StockR1` 通过可验证的 forecast action，把金融问答、时序预测与强化学习奖励耦合到同一链路中，强调“解释动作”和“数值轨迹”之间的一致性。
- 相关性判断：高。场景偏金融，但它很好地展示了 reasoning 与 forecast action 联动的训练方式。

## 4. GitHub 上有关 timeseries Agent / harness / machine learning / AutoML 的最新项目

### [2026-08-05 创建] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（GitHub API `created_at`）
- 来源：[仓库](https://github.com/TimeSage-Series/TimeSage-EV) / [API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` 的官方 benchmark 仓库，主题非常聚焦于 evolving-environment 下的 agentic time-series evaluation。
- 相关性判断：最高。它是本窗口里最值得直接跟踪的时序 agent benchmark 项目。

### [2026-08-03 创建] [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)

- 日期：2026-08-03（GitHub API `created_at`）
- 来源：[仓库](https://github.com/Xiaoyu-Tao/CastFSR) / [API](https://api.github.com/repos/Xiaoyu-Tao/CastFSR)
- 简短摘要：`CastFSR` 官方实现，直接给出 fast-slow-reflect forecasting agent 的代码入口。
- 相关性判断：最高。对做时序 agent 原型或复现实验都很有价值。

### [2026-07-14 创建] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（GitHub API `created_at`，最近更新 `2026-08-05`）
- 来源：[仓库](https://github.com/OpenTSLM/TimeRLM) / [API](https://api.github.com/repos/OpenTSLM/TimeRLM)
- 简短摘要：长上下文 anomaly localization 的 recursive time-series agent 实现，同时提供 `AnomalyXL` 基准。
- 相关性判断：最高。它把“时序 agent + 代码执行 + 长上下文检索”做成了可运行仓库。

### [2026-07-11 创建] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[仓库](https://github.com/Lkhanaajav/timeseries-mcp) / [API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 typed MCP 工具，覆盖异常检测、变点、分解、趋势检验和数据质量审计，定位非常明确。
- 相关性判断：最高。它正好落在 time-series harness / tool layer，而不是又一个下游模型仓库。

### [最近活跃：2026-08-17 push] [openml/automlbenchmark](https://github.com/openml/automlbenchmark)

- 日期：2026-08-17（GitHub API `pushed_at`；仓库创建于 2018-08-06）
- 来源：[仓库](https://github.com/openml/automlbenchmark) / [API](https://api.github.com/repos/openml/automlbenchmark)
- 简短摘要：成熟的 AutoML benchmarking framework，主题覆盖 `automl`、`benchmark`、`machine-learning`，适合作为时序 AutoML/harness 的评测底座。
- 相关性判断：中高。它不是“专门的 timeseries agent”仓库，但非常适合作为 agent 驱动实验系统的外层 benchmark harness。

### [最近活跃：2026-08-03 push] [automl/neps](https://github.com/automl/neps)

- 日期：2026-08-03（GitHub API `pushed_at`；仓库创建于 2021-06-15）
- 来源：[仓库](https://github.com/automl/neps) / [API](https://api.github.com/repos/automl/neps)
- 简短摘要：NePS 是 neural pipeline search / AutoML 基建，继续在 2026-08 上旬保持更新，适合与时序 agent 的自动搜索环路结合。
- 相关性判断：中高。它不是时序专用，但对“timeseries + AutoML + agent orchestration”很实用。

## 5. 结论与跟踪建议

- 如果你优先关心“时间序列基础模型本身”，今天最该跟的是 `Forecast Collapse`、`ORBIT`、`PostTime`。
- 如果你优先关心“可执行的时序 Agent”，最值得继续追的是 `TimeSage-EV`、`CastFSR`、`TimeRLM`、`Bridging the Last Mile...`。
- 如果你优先关心“reasoning 怎么真正进入 runtime”，最值得看的组合是 `REATS`、`ReasonCast`、`TSRouter`、`TSCognition/TSAlign`。
- 如果你接下来要做工程实现，GitHub 侧最有直接复用价值的是 `CastFSR`、`TimeRLM`、`timeseries-mcp`；如果要搭实验评测外壳，则看 `automlbenchmark` 与 `neps`。

## 6. 低优先级说明

- 今天没有把日期无法确认、只有二手转载、或虽与时序相关但更偏泛 agent / 泛金融 / 泛医疗的候选条目写进正文。
- `Chronicle` 处在时间窗口下沿；之所以保留，是因为它对近三个月 TSFM 讨论仍具有基础性影响。

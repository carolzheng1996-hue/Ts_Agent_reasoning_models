# 2026-08-26 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-26 09:06:29 CST，Asia/Shanghai<br>
时间窗口：2026-05-26 至 2026-08-26<br>
优先来源：arXiv 官方 `abs` 页面、arXiv 官方 API、OpenReview 官方页面、GitHub 官方 Repo API / 仓库页<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning harness`、`AutoML agent`

## 今日摘要

- 截至 `2026-08-26 09:06 CST`，过去 24 小时内最值得补入主线的新增论文是 [`MetaCaster`](https://arxiv.org/abs/2608.23473) 与 [`Do Time-Series Foundation Models Pay Off for Industrial Monitoring?`](https://arxiv.org/abs/2608.22968)；前者把 agent 作为轻量 forecaster 的“中间工程层”，后者直接审视 TSFM 的部署性价比。
- 与昨日相比，`TSFM 训练与评测协议`、`agent 作为实验编排器`、`reasoning 作为 forecast intervention / routing 机制` 仍是最强三条研究主线。
- GitHub 侧最值得继续跟踪的项目仍集中在 `TimeSage-EV`、`AutoML-Agent`、`TSFM-Robustness-Benchmark`、`agentic-timeseries`、`autoresearch-timeseries-agent` 这几类“可复现 benchmark / harness / AutoML loop”资产。
- 我额外检索了 OpenReview 与 ICLR/NeurIPS/ICML/KDD/AAAI 官方入口；在 `2026-05-26` 之后，没有发现比下列 arXiv 新稿更强、且日期更清晰的 time-series foundation/agent/reasoning 新条目进入主列表。
- 今天是周三，不触发周五周报更新条件，因此本轮只生成晨报。

## 0. 检索口径

- 仅保留首次公开日期或 GitHub `created_at` 落在 `2026-05-26` 至 `2026-08-26` 的条目。
- 论文日期优先采用 arXiv 官方 `Submitted on` / `published` 日期；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at`。
- OpenReview / 顶会官方页面若未提供处于窗口内的新条目，作为交叉核验来源，不强行纳入主列表。
- 日期无法稳定确认的条目不进入主列表；若仍有观察价值，则移入“低优先级观察”。

## 1. 时间序列基础模型最新研究

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测场景下系统比较 `MOMENT`、`Chronos-T5`、`TimesFM 2.5` 与轻量异常检测/残差模型，结论是 TSFM 的收益高度任务相关，不能默认替代经过拟合的轻量模型。
- 相关性判断：最高。它直接回答“TSFM 值不值得落地”这一部署问题，比单纯刷分更接近真实决策。

### [2026-08-23] [Semantics or Structure? Auditing Text Sensitivity in Multimodal Time-Series Forecasting](https://arxiv.org/abs/2608.22321)

- 日期：2026-08-23
- 来源：[arXiv](https://arxiv.org/abs/2608.22321)
- 简短摘要：对 `Aurora` 等多模态时序模型做受控文本扰动，发现不少性能增益并不来自文本语义本身，而是由共随的数值结构信号驱动。
- 相关性判断：高。它属于对多模态 TS foundation model 的“去幻觉式”审计，能帮助后续判断文本增强到底有没有真实贡献。

### [2026-08-20] [Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking](https://arxiv.org/abs/2608.20005)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20005)
- 简短摘要：提出 `SATS`，把 patch size 显式建模为 scale，并用 multi-patch token alignment 与 hybrid masking 处理跨频率、跨尺度预训练。
- 相关性判断：最高。它直接命中 TSFM 在 heterogeneous corpora 上的核心训练问题。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出 open-world living benchmark，用真实未来数据做 prequential evaluation，检查 TSFM 在季节变化、分布漂移和突发事件下是否仍然稳健。
- 相关性判断：最高。它把 TSFM 评测从静态测试集推进到持续有效性检验。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测振幅塌缩与横截面排序失效，并提出 `CalibRank` 在校准与排序之间折中。
- 相关性判断：最高。它暴露了 TSFM 在真实下游决策中的关键 failure mode。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，显式控制 dataset exposure、context window、prediction horizon 与 missingness，强调 TSFM 的进展不只来自架构，也来自训练分布设计。
- 相关性判断：最高。它是“如何稳定训练 TSFM”的代表性新工作。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：提出一个 meta-harness-optimized multi-agent framework，用 agentic data generation 和文本上下文，在少样本条件下自动训练轻量专用 forecaster。
- 相关性判断：最高。它很清楚地区分了“agent 负责编排与造数”“轻量 forecaster 负责部署推断”的职责边界。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：围绕金融时序变点检测，让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它是近三个月里最直接的“自演化 time-series research agent”新稿之一。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层结构，再用这些结构化上下文条件化 diffusion forecaster。
- 相关性判断：高。它展示了 forecasting agent 如何把文档语境转化为可控的 forecast guidance。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖真实机构情境和持续更新数据环境的 live benchmark，评测 agent 在 state identification、summarization、outlook reasoning 上的稳定性。
- 相关性判断：最高。它仍是当前最接近真实动态环境的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两个相互隔离的量化研究 agent 循环，通过保留已验证证据推动后续 proposal，形成 bounded recursive self-improvement。
- 相关性判断：中高。场景偏量化，但方法论和时序实验代理、研究 harness 高度相近。

### [2026-08-09] [Agentic Anomaly Detection with ORCA-Style Dynamic Inductive Bias Adaptation in Multimodal Wearable Time Series Data](https://arxiv.org/abs/2608.08859)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.08859)
- 简短摘要：通过一个 supervisory controller 在推理时动态选择 temporal receptive field，使异常检测模型不必事先固定时间尺度。
- 相关性判断：中高。更偏 anomaly detection controller，但体现了“agent 作为运行时 inductive-bias 调度器”的思路。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：提出 `ConceptTS`，让 LLM 自动提出任务相关概念并生成可执行标注规则，把预测过程拆成历史上下文、局部区间与完整 horizon 三类可读概念瓶颈。
- 相关性判断：最高。它把 LLM 引入时序预测内部表示与概念级干预层，是“forecasting 是否具备可解释 reasoning”最直接的新工作之一。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日、价格变化等事件语义映射成结构化干预字段，对 foundation forecaster 做选择性修正。
- 相关性判断：最高。它把 reasoning 从“解释输出”推进到“决定何时以及如何干预 forecast”。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 LLM reasoning 放到样本级 ensemble routing 层，联合数值模式与语义描述，输出动态且可解释的模型权重。
- 相关性判断：高。它说明 reasoning 已经进入 forecasting runtime 的决策层，而不只是事后说明。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式工具调用过程，让模型用代码与视觉能力多轮操纵时序信号，并逐步收缩定位范围。
- 相关性判断：最高。它是目前最清晰的 `tool-using time-series reasoning` 路线之一。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：将 context-aware forecasting 写成 `Fast-Slow-Reflect` 三阶段流程：先构造数据驱动 prior，再检索上下文并推理其影响，最后做一致性反思与修正。
- 相关性判断：最高。它是“慢思考 + 反思”范式进入时间序列预测的代表作。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 框架，把时序理解从 pattern recognition 推进到 grounding、inferring、extrapolating 与 acting 等认知推理任务。
- 相关性判断：高。它仍是近三个月“time series reasoning”命题最系统的基准化工作之一。

## 4. GitHub 上值得跟踪的新项目

### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：一个较早期的 multi-agent workflow 原型，明确面向 time-series analysis，并结合 GPT、Claude 与金融数据工具。
- 相关性判断：中高。成熟度有限，但它是窗口内最直接带 `agentic + timeseries` 标签的新仓库之一。

### [2026-08-21] [cw-wan/SELA](https://github.com/cw-wan/SELA)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/cw-wan/SELA) / [GitHub 仓库](https://github.com/cw-wan/SELA)
- 简短摘要：`[EMNLP'26] Grammar of the Wave` 官方仓库，面向可解释多变量时序事件检测，强调 neuro-symbolic VLM agents。
- 相关性判断：高。虽然更偏 event detection，但与 `time-series agent + explainability` 交叉很强。

### [2026-08-21] [SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)

- 日期：2026-08-21（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer) / [GitHub 仓库](https://github.com/SubhadeepSarkar04/Mutli_Agent_Autonomous_Data_Analyzer)
- 简短摘要：基于 LangGraph 的多 agent AutoML pipeline，覆盖自动 EDA、特征工程、Optuna 调参、SHAP explainability 与自愈式 sandbox execution。
- 相关性判断：高。虽非时间序列专用，但对 `agent + AutoML + ML workflow` 很直接。

### [2026-08-05] [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)

- 日期：2026-08-05（创建），2026-08-05（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/TimeSage-Series/TimeSage-EV) / [GitHub 仓库](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：`TimeSage-EV` live benchmark 官方仓库，直接标注为 `agentic time series analysis` 基准。
- 相关性判断：最高。它是当前窗口里最值得直接复现的 time-series agent benchmark 资产。

### [2026-07-12] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：一个面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`，且应用域与能源预测高度贴近。

### [2026-07-12] [Janesong-AI/TSFM-Robustness-Benchmark](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)

- 日期：2026-07-12（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Janesong-AI/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Janesong-AI/TSFM-Robustness-Benchmark)
- 简短摘要：一个面向 edge cases 的系统化 TSFM robustness testing 工具仓库。
- 相关性判断：最高。它把“如何稳定评测 TSFM failure modes”推进成可复用的工程资产。

### [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)

- 日期：2026-06-17（创建），2026-06-17（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/AkshajKashyap/autoresearch-timeseries-agent) / [GitHub 仓库](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：一个可复现实验代理框架，覆盖 synthetic/CSV 数据、baseline models、诊断报告、CI 与 deterministic config-running experiment agent。
- 相关性判断：高。它更像 research harness，而不是聊天式 agent，工程复现价值更强。

### [2026-05-31] [adamthuvesen/agentic-ml-loop](https://github.com/adamthuvesen/agentic-ml-loop)

- 日期：2026-05-31（创建），2026-08-23（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/adamthuvesen/agentic-ml-loop) / [GitHub 仓库](https://github.com/adamthuvesen/agentic-ml-loop)
- 简短摘要：一个 agent-driven ML 实验 harness，要求每轮只提出一个有界假设，并由 deterministic referee 评分。
- 相关性判断：高。虽然不是时序专用，但与 research loop / harness / reproducibility 非常契合。

## 5. 低优先级观察

### [2026-08-25] [msganchau2017-ops/Agentic_ML_Framework](https://github.com/msganchau2017-ops/Agentic_ML_Framework)

- 日期：2026-08-25（创建），2026-08-25（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/msganchau2017-ops/Agentic_ML_Framework) / [GitHub 仓库](https://github.com/msganchau2017-ops/Agentic_ML_Framework)
- 简短摘要：一个新建的 agent-based ML framework，目标是做自适应预处理、特征工程和模型选择。
- 相关性判断：中。日期很新，但仓库体量和实现深度暂时较薄，先作为 watchlist 保留，不进入主推荐列表。

## 6. 建议关注

- `MetaCaster` 与 `AutoML-Agent` 值得并行跟踪，因为两者都在回答“agent 是否应该负责训练/搜索，而不是直接做 forecast”。
- `Do Time-Series Foundation Models Pay Off...`、`Forecast Collapse...`、`TSFM-Robustness-Benchmark` 三者构成了一个很清晰的评测闭环：部署性价比、失败模式、工程化稳健性测试。
- 如果后续要补仓库内的 paper reading，优先顺序建议是：`MetaCaster`、`ConceptTS`、`Do Time-Series Foundation Models Pay Off...`、`TimeRLM`。

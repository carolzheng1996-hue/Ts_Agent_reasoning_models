# 2026-08-21 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-21 09:01 CST，Asia/Shanghai  
时间窗口：2026-05-21 至 2026-08-21  
优先来源：arXiv 官方 `api` / `abs`、GitHub 官方 `repo API` / 仓库页、已有官方论文代码页  
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`agentic forecasting`、`timeseries harness`、`machine learning`、`AutoML`

## 今日摘要

- 基础模型方向今天最值得前置的仍是最近一周集中出现的四条主线：[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299) 把 TSFM 评测推进到 live benchmark，[`Forecast Collapse`](https://arxiv.org/abs/2608.14106) 揭示横截面排序失效，[`RAEF`](https://arxiv.org/abs/2608.14054) 把 retrieval augmentation 做成训练无关适配层，[`ORBIT`](https://arxiv.org/abs/2608.13262) 则明确回答 TSFM 应如何训练。
- Agent 方向在最近 72 小时内出现了两个更强新信号：[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933) 把自演化搜索引入金融时序变点检测，[`SCENARIODIFF`](https://arxiv.org/abs/2608.17164) 用分层 context agent 为多模态时序预测提供显式场景推理。
- Reasoning 方向的最新高相关条目是 [`ReasonCast`](https://arxiv.org/abs/2608.15291)、[`REATS`](https://arxiv.org/abs/2608.10149) 和 [`TimeRLM`](https://arxiv.org/abs/2608.03391)。这条线已经从“生成解释”推进到“选择何时推理、如何路由模型、如何多轮操作时序信号”。
- GitHub 新项目侧，本轮在官方 API 限额触发前，已稳定复核到四个近三个月内值得跟踪的仓库：[`OpenTSLM/TimeRLM`](https://github.com/OpenTSLM/TimeRLM)、[`MS_Azure_Machine_Learning_Many_Models_1`](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)、[`time-series-autoML`](https://github.com/Naveen-Boddepalli/time-series-autoML)、[`COLDSTART`](https://github.com/priestly-ops/COLDSTART)。
- 对 `TimeSage-EV`、`CastFSR` 这类已知存在官方代码仓但本轮未再次稳定复核创建日期的项目，我保留在低优先补充区，避免把“仓库存在”误写成“今天能确认的创建日期”。

## 0. 检索口径

- 只保留首次公开日期或仓库 `created_at` 落在 `2026-05-21` 至 `2026-08-21` 的内容。
- 论文日期优先采用 arXiv `published`；GitHub 项目日期优先采用官方 API `created_at`，`updated_at` / `pushed_at` 只作为活跃度补充。
- 若本轮无法稳定确认日期，则标注“日期待复核”并降优先级，不纳入主列表排序。
- 会议接受信息只作为补充，不替代首次公开日期。

## 1. 时间序列基础模型最新研究

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出首个面向 TS foundation model 的 open-world living benchmark，用真实未来数据做 prequential evaluation，专门考察模型在持续分布漂移、季节性变化和突发事件中的长期稳健性，而不是一次性 snapshot 排行。
- 相关性判断：最高。它把 TS foundation model 的核心问题从“静态榜单精度”推进到“持续时间有效性”，与后续 agent benchmark 和 evolving environment 直接衔接。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：系统比较 TSFM、深度学习 forecaster 和 97 个公开 benchmark 配置，指出低可预测性目标上会出现“预测幅度被压平、横截面排序失败”的 forecast collapse，并提出 `CalibRank` 平衡校准与排序。
- 相关性判断：最高。它直接揭示 TS foundation model 在真实下游决策任务里的关键失效模式。

### [2026-08-14] [Model-agnostic Retrieval-Augmented Extended Forecasting for time series](https://arxiv.org/abs/2608.14054)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14054)
- 简短摘要：提出 `RAEF`，通过输入空间检索与拼接式聚合，在不微调 foundation model 的前提下增强短历史或弱历史场景下的预测能力，并降低 retrieval inference 开销。
- 相关性判断：高。它虽然不是 agent 论文，但对 time-series memory / retrieval tool 的设计非常直接。

### [2026-08-13] [Into the ORBIT for Time Series: Training Regimes for Foundation Models](https://arxiv.org/abs/2608.13262)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.13262)
- 简短摘要：提出 `ORBIT` 训练范式，用 bootstrap multi-level sampling 与 omni-range incremental training 显式控制异构时序语料的暴露分布、上下文长度与预测跨度，并据此训练 `Falcon-2.0`。
- 相关性判断：最高。它回答的是“TSFM 应该怎样训练”的核心问题，而不仅是更换 backbone。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：围绕金融时序变点检测，先做受控探索性分析，再通过 `Revision`、`Alternative Strategy`、`Recombination` 三种轨迹演化算子持续改进可执行实验路径，并用验证反馈驱动搜索。
- 相关性判断：最高。它是当前窗口内最明确把“自演化实验 agent”落到时间序列建模任务上的新论文。

### [2026-08-17] [SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting--Extended Version](https://arxiv.org/abs/2608.17164)

- 日期：2026-08-17
- 来源：[arXiv](https://arxiv.org/abs/2608.17164)
- 简短摘要：把多模态时序预测拆成 `Historical Context Agent`、`Scenario Agent`、`Anchor Guidance Agent` 三层，先从文档中抽取结构化未来情景，再条件化扩散式 forecaster。
- 相关性判断：高。它不是通用 benchmark，但很好地展示了“多 agent 分层建模时序上下文”的系统设计。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270)
- 简短摘要：提出 live benchmark，覆盖 60 个真实机构场景与 1,485 个 scenario-period QA 对，专门评测 agent 在“数据持续发布、旧证据会过期”的环境中做 state identification、summarization 与 outlook reasoning 的能力。
- 相关性判断：最高。它是当前最贴近真实动态数据环境的 time-series agent benchmark。

### [2026-08-13] [AQuA: Recursively Self-Improving Quantitative Trading Research Agents](https://arxiv.org/abs/2608.12841)

- 日期：2026-08-13
- 来源：[arXiv](https://arxiv.org/abs/2608.12841)
- 简短摘要：构建两个相互隔离的量化研究 agent 循环，一个做因子发现，一个做模型开发；系统保留已验证证据，并用其指导后续 proposal，形成 bounded recursive self-improvement loop。
- 相关性判断：高。场景偏量化交易，但方法论非常接近时间序列研究 agent / experiment harness。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-08-19] [Mechanistic Interpretability of Structure-Aware Numerical Reasoning in LLaMA 3.1 8B](https://arxiv.org/abs/2608.18419)

- 日期：2026-08-19
- 来源：[arXiv](https://arxiv.org/abs/2608.18419)
- 简短摘要：从 mechanistic interpretability 角度分析 LLaMA 在数值序列建模中的内部机制，发现模型会在隐藏表征中显式编码一阶差分，并以近似 induction circuit 的方式取回并相加。
- 相关性判断：中高。它不直接是 forecasting 系统，但对“LLM 是否真的在做时序结构推理”给出了更底层的机制证据。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：围绕需求预测，把事件语义转成结构化干预字段，并让 agent 判断何时需要文本 reasoning，再通过加性与乘性路径选择性修正 foundation forecaster。
- 相关性判断：最高。它是当前窗口里最贴近 `forecasting + reasoning + agent` 三者交集的论文。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把 LLM reasoning 直接作为样本级 ensemble router，联合处理时序文本化模式描述与数值特征，输出可解释的动态模型权重。
- 相关性判断：最高。它说明 reasoning 已经进入 forecasting runtime 的决策层，而不只是解释层。

### [2026-08-04] [TimeRLM: Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series](https://arxiv.org/abs/2608.03391)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03391) / [GitHub](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：把长上下文异常定位写成递归式 agent 过程，让模型持续调用代码与视觉能力操作时序信号，并在多轮交互中逼近异常位置；论文还报告 RL 后训练能减少交互轮次。
- 相关性判断：最高。它是目前最成熟的一类 `tool-using time-series reasoning agent`。

## 4. GitHub 上值得跟踪的最新项目

### [2026-08-17] [dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)

- 日期：2026-08-17（创建），2026-08-19（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1) / [GitHub 仓库](https://github.com/dmitrii-govorukhin/MS_Azure_Machine_Learning_Many_Models_1)
- 简短摘要：一个面向 Azure AutoML 的时间序列预测工程样例仓，体量不大，但定位清楚，适合快速了解云端 AutoML forecasting workflow。
- 相关性判断：中高。它更偏工程入口而不是研究原型，但与 `time series + AutoML` 主题直接相关。

### [2026-07-14] [OpenTSLM/TimeRLM](https://github.com/OpenTSLM/TimeRLM)

- 日期：2026-07-14（创建），2026-08-17（最近一次更新）
- 来源：[GitHub Repo API](https://api.github.com/repos/OpenTSLM/TimeRLM) / [GitHub 仓库](https://github.com/OpenTSLM/TimeRLM)
- 简短摘要：`TimeRLM` 论文官方代码，聚焦长上下文 time-series anomaly localization 的递归式工具调用流程。
- 相关性判断：最高。它是当前窗口内最值得直接复现的 time-series reasoning / agent 代码仓之一。

### [2026-07-08] [Naveen-Boddepalli/time-series-autoML](https://github.com/Naveen-Boddepalli/time-series-autoML)

- 日期：2026-07-08（创建），2026-08-19（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Naveen-Boddepalli/time-series-autoML) / [GitHub 仓库](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：面向时序场景的 AutoML workflow / UI 平台，仓库规模不大，但从命名、主页和近期提交看，仍在积极完善。
- 相关性判断：中高。更偏平台工程，但对 `AutoML + timeseries` 主题有直接参考价值。

### [2026-06-22] [priestly-ops/COLDSTART](https://github.com/priestly-ops/COLDSTART)

- 日期：2026-06-22（创建），2026-08-21（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/priestly-ops/COLDSTART) / [GitHub 仓库](https://github.com/priestly-ops/COLDSTART)
- 简短摘要：一个 leakage-safe benchmarking framework，面向机器人异常检测中的 commissioning sample complexity；topics 明确包含 `timeseries`。
- 相关性判断：中。它不是 forecasting agent，但属于“timeseries + harness / benchmark”侧值得留意的新工程仓。

## 5. 日期待复核，降优先级补充

- [TimeSage-Series/TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)
  - 说明：论文正文与前几日晨报都能确认其为官方代码入口，但本轮 GitHub API 在进一步查询前触发速率限制，未再次稳定复核仓库创建日期。
  - 相关性判断：最高。若后续需要做基准复现，它仍是首要入口之一。

- [Xiaoyu-Tao/CastFSR](https://github.com/Xiaoyu-Tao/CastFSR)
  - 说明：已知是 `CastFSR` 论文官方实现，但本轮未重新拿到仓库创建时间，故不与主列表的日期已验证项目混排。
  - 相关性判断：最高。适合做 `forecast prior -> context retrieval -> reflection` agent workflow 复现。

- [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)
  - 说明：仓库存在与论文对应关系在此前工作中已确认，但今天未再次复核创建日期。
  - 相关性判断：高。它是 reasoning router 方向的重要代码入口。

# 2026-09-07 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-07 09:05 CST，Asia/Shanghai  
时间窗口：2026-06-07 至 2026-09-07  
优先来源：arXiv、OpenReview、主要会议官网、官方项目页、GitHub 官方仓库/API、AI HOT 论文精选流  
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`

## 今日摘要

- 9 月 5—7 日处于周末至周一早间，未发现新的 arXiv 首发；论文主线仍由 9 月 2 日的 `CoSPOT`、8 月底的 TSFM 审计与 forecasting-agent 工作构成。
- AI HOT 近 7 天论文精选流返回 8 条，但均与时间序列 foundation model / Agent / reasoning 不直接相关，故未纳入正文。
- GitHub 未检到 9 月 6—7 日新建且直接相关的高质量仓库；值得记录的活跃度变化是 `TSFM-Robustness-Benchmark` 于 9 月 5 再次推送。
- 本期补入 `temporal-community/temporal-agent-harness` 作为通用 Agent harness 对照：它不做时序建模，但其耐久执行、审批、回放和可观测协议可直接借鉴到 forecasting Agent。
- 今天是周一，不触发周报更新。

## 0. 检索口径

- 仅保留论文 `v1` 首发日或 GitHub 仓库创建日落在 2026-06-07 至 2026-09-07 的条目。
- 论文日期以 arXiv 官方 `Submitted on` 为准；GitHub 日期以官方 API `created_at` 为准，`pushed_at` 只表示活跃度。
- OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI 官网补检未发现更晚且更直接相关的新条目。
- 日期无法核验的候选不进入主列表。本期不存在日期不确定的正式条目。

## 1. 时间序列基础模型最新研究

### [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.31013) / [GitHub](https://github.com/Jeremstym/TSPFN)
- 简短摘要：把 TabPFN 式 in-context learning 扩展到生理时序分类，以结构化时间表示和真实生理数据预训练增强跨域泛化。
- 相关性判断：高。代表 TSFM 从 forecasting 向 classification 与 temporal-tabular transfer 扩展。

### [2026-08-31] [When the Martingale Never Stops Firing: Anytime-Valid Gating on Real Forecast Streams](https://arxiv.org/abs/2608.30502)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30502)
- 简短摘要：审计 anytime-valid martingale monitor 在真实预测流上的误触发与漂移响应放大问题。
- 相关性判断：最高。直接关联 TSFM 上线后的 monitoring、gating 和 evaluation harness。

### [2026-08-29] [Frequency Selective Neural Networks as a Foundation Architecture for Time Series Learning](https://arxiv.org/abs/2608.29012)

- 日期：2026-08-29
- 来源：[arXiv](https://arxiv.org/abs/2608.29012) / [GitHub](https://github.com/ad6174hhhh/FSNN)
- 简短摘要：用可微 Wiener-like filter bank 学习可解释频段，并将频率选择网络定位为时序基础架构。
- 相关性判断：高。为 TSFM 提供物理可解释的频域表征替代路线。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过合成时序生成器做受控干预，审计 Chronos-2 与 TimesFM-2.5 对趋势、谐波和状态切换的保真度。
- 相关性判断：最高。是近窗内直接分析 TSFM failure mode 的关键研究。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：以 prequential evaluation 持续监测 TSFM 在未来数据、漂移和突发事件下的表现。
- 相关性判断：最高。把 TSFM 评测从静态榜单推进到持续、开放世界 harness。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30976)
- 简短摘要：`CastClaw` 把数据、forecaster、分析工具、用户约束与版本化执行记录接入统一 runtime，并显式管理预测修订和停止条件。
- 相关性判断：最高。是近窗内最接近可交付工业 forecasting Agent 的系统之一。

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：用受控物理动力系统模拟，评测 Agent 根据时间序列完成根因归因的能力。
- 相关性判断：最高。为时序 Agent 提供可验证、可控的归因 benchmark。

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.26226)
- 简短摘要：按预测与推理、增强与生成、异常诊断、决策支持四类梳理时序 Agent，并比较工具、记忆和评测设计。
- 相关性判断：高。是目前构建时序 Agent 研究图谱最直接的近窗综述入口。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：让多 Agent 自动生成数据、训练轻量 forecaster，并通过 meta-harness 优化少样本部署流程。
- 相关性判断：最高。直接命中 `forecasting agent + harness + lightweight model`。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：以 `Fast → Slow → Reflect` 三阶段整合预测先验、外部上下文检索和反思修正。
- 相关性判断：最高。是当前最清晰的 agentic time-series forecasting 框架之一。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-09-02] [Compositional Spectral Prompts for LLM-based Online Time Series Forecasting](https://arxiv.org/abs/2609.02093)

- 日期：2026-09-02
- 来源：[arXiv](https://arxiv.org/abs/2609.02093) / [GitHub](https://github.com/seungyoon-Choi/CoSPOT)
- 简短摘要：`CoSPOT` 冻结 LLM 骨干，通过频域 basis prompt 的组合完成长期在线适配与跨数据集泛化。
- 相关性判断：高。把 LLM prompt composition 与在线时序适配直接结合，仍是本栏目最新条目。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：由 LLM 提出领域概念和标注规则，将多变量预测拆解到可命名、可干预的 concept bottleneck。
- 相关性判断：最高。把可解释 reasoning 融入 forecasting 内部表示。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：Agent 判断何时需要文本 reasoning，并把促销、节假日和价格变化转成结构化语义干预以修正 TSFM 预测。
- 相关性判断：最高。明确回答 reasoning 何时以及如何介入预测。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把时序转为模式描述与数值特征，由 LLM 生成样本级 ensemble 权重和路由决策。
- 相关性判断：高。代表 `reasoning-as-router` 的实用路线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：按任务及性能—成本偏好，动态选择 LLM、VLM 和组合路径。
- 相关性判断：最高。将时序 reasoning 明确形式化为模态和模型路由问题。

## 4. GitHub 上值得跟踪的新项目

### [2026-09-05] [Hemeskyo/mlx-ios-temporal-agent](https://github.com/Hemeskyo/mlx-ios-temporal-agent)

- 日期：创建 `2026-09-05T09:46Z`；最近推送 `2026-09-05T09:47Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Hemeskyo/mlx-ios-temporal-agent) / [GitHub](https://github.com/Hemeskyo/mlx-ios-temporal-agent)
- 简短摘要：SwiftUI iOS 应用由小语言模型做工具路由，在 iPhone 本地调用 TimesFM-3/MLX 完成预测和区间展示。
- 相关性判断：最高。直接实现 `LLM Agent → TSFM tool → chart`；目前 0 star，成熟度仍待验证。

### [2026-09-04] [siwekk/PV-probabilistic-day-ahead-forecasting](https://github.com/siwekk/PV-probabilistic-day-ahead-forecasting)

- 日期：创建 `2026-09-04T08:03Z`；最近推送 `2026-09-04T08:20Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/siwekk/PV-probabilistic-day-ahead-forecasting) / [GitHub](https://github.com/siwekk/PV-probabilistic-day-ahead-forecasting)
- 简短摘要：公开物理约束、分位数模型、Chronos-2、共形校准与不确定性审计的概率光伏预测实验。
- 相关性判断：高。连接 TSFM、时序 ML、约束与评测；目前 0 star，需等待论文来源和外部复现。

### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：创建 `2026-08-22T21:00Z`；最近推送 `2026-09-03T03:59Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：组合多个 LLM 与金融数据工具的时序分析 multi-agent workflow 原型。
- 相关性判断：中高。直接命中 timeseries Agent，但目前仅 1 star，成熟度有限。

### [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：创建 `2026-07-12T11:33Z`；最近推送 `2026-09-05T13:08Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：针对 edge cases 系统测试时间序列基础模型鲁棒性的 benchmark 工具。
- 相关性判断：最高。位于 `time series + foundation model + evaluation harness` 的直接交叉点；当前 2 stars，但仍在更新。

### [2026-06-18] [temporal-community/temporal-agent-harness](https://github.com/temporal-community/temporal-agent-harness)

- 日期：创建 `2026-06-18T22:43Z`；最近推送 `2026-09-04T22:56Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/temporal-community/temporal-agent-harness) / [GitHub](https://github.com/temporal-community/temporal-agent-harness)
- 简短摘要：提供耐久执行、工具审批、human-in-the-loop、结构化事件流、回放与多 SDK 适配的 Agent harness。
- 相关性判断：中高。不是时序专用，但可作为 forecasting Agent 的运行时与评测基础设施；当前 36 stars，工程成熟度高于多数新原型。

## 5. 今日建议关注顺序

1. 优先检查 `TSFM-Robustness-Benchmark` 9 月 5 日推送内容，确认是否新增模型、数据集或 failure case。
2. 继续验证 `mlx-ios-temporal-agent` 的 TimesFM-3/MLX 移植、端侧资源占用和工具调用边界。
3. 将 `temporal-agent-harness` 的可回放事件流、审批策略和 durable execution 与 CastClaw / MetaCaster 的 forecasting workflow 对照，评估能否形成更可靠的时序 Agent harness。
4. 论文侧等待下一个 arXiv 工作日，重点观察 `CoSPOT`、`CastClaw`、`TraceBench` 和 `LiveHouse-TS` 是否出现代码、修订或会议接收信息。


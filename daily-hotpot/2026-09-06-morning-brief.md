# 2026-09-06 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-06 15:43:36 CST，Asia/Shanghai<br>
时间窗口：2026-06-06 至 2026-09-06<br>
优先来源：arXiv 官方页面、GitHub 官方 Repo/Search API、[`DailyArXiv` 官方 README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)、官方项目页及主要会议站点<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic power forecasting`

## 今日摘要

- 9 月 5—6 日适逢周末，未发现新的 arXiv 首发；论文主线仍由 9 月 2 日的 `CoSPOT` 和 8 月下旬的 TSFM 审计、Agent/harness、reasoning 工作组成。
- 今日最值得关注的新项目是 [`Hemeskyo/mlx-ios-temporal-agent`](https://github.com/Hemeskyo/mlx-ios-temporal-agent)：小语言模型在 iPhone 本地调用 TimesFM-3，将“LLM 编排 TSFM 工具”落到端侧应用。
- 光伏方向新增 [`siwekk/PV-probabilistic-day-ahead-forecasting`](https://github.com/siwekk/PV-probabilistic-day-ahead-forecasting)，公开物理约束、分位数模型、Chronos-2、共形校准与不确定性审计的复现实验。
- `DailyArXiv` raw README 已核验，`Last update` 仍为 `2026-09-04`；其中 `Time Series` 板块的近窗高相关条目仍包括 `CoSPOT`、`TopoBrick`、`When Does Online Adaptation Pay on the Edge?`。`QABBA` 的 README 收录日为 2026-09-01，但 arXiv v1 为 2024-11-20，超窗并降级。
- 今天是周日，不触发周报更新。

## 0. 检索口径

- 论文以 arXiv `v1` 首发日为准；GitHub 项目以官方 API `created_at` 为准，并用 `pushed_at` 补充活跃度。
- 只保留首发/创建日期落在 2026-06-06 至 2026-09-06 的条目；无法确认日期者不进入主列表。
- 今日重点记录相对 9 月 4 日晨报的新增；各栏目同时保留近窗内最具代表性的研究，均按日期由近及远排列。

## 1. 时间序列基础模型最新研究

### [2026-08-31] [TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification](https://arxiv.org/abs/2608.31013)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.31013) / [GitHub](https://github.com/Jeremstym/TSPFN)
- 简短摘要：把 TabPFN 风格的 in-context learning 扩展到生理时序分类，以结构化时间表示和真实生理数据预训练增强跨域泛化。
- 相关性判断：高。代表 TSFM 从 forecasting 向 classification 与 temporal-tabular transfer 扩展。

### [2026-08-31] [When the Martingale Never Stops Firing: Anytime-Valid Gating on Real Forecast Streams](https://arxiv.org/abs/2608.30502)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30502)
- 简短摘要：审计 anytime-valid martingale monitor 在真实 forecast stream 上的误触发与漂移响应放大问题。
- 相关性判断：最高。直接关联 TSFM 上线后的 monitoring、gating 与 evaluation harness。

### [2026-08-29] [Frequency Selective Neural Networks as a Foundation Architecture for Time Series Learning](https://arxiv.org/abs/2608.29012)

- 日期：2026-08-29
- 来源：[arXiv](https://arxiv.org/abs/2608.29012) / [GitHub](https://github.com/ad6174hhhh/FSNN)
- 简短摘要：用可微 Wiener-like filter bank 学习可解释频段，提出频率选择神经网络作为时序基础架构。
- 相关性判断：高。以物理可解释频域表征挑战主流黑盒 TSFM 路线。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：通过合成时序生成器做受控干预，审计 Chronos-2 与 TimesFM-2.5 对趋势、谐波和 regime switch 的保真度。
- 相关性判断：最高。是近窗内直接研究 TSFM failure mode 的关键工作。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：以 prequential evaluation 持续监测 TSFM 在未来数据、漂移和突发事件下的表现。
- 相关性判断：最高。将 TSFM 评测从静态榜单推进到持续、开放世界 harness。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-31] [A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://arxiv.org/abs/2608.30976)

- 日期：2026-08-31
- 来源：[arXiv](https://arxiv.org/abs/2608.30976)
- 简短摘要：`CastClaw` 把数据、forecaster、分析工具、用户约束和版本化执行记录接入统一 runtime，并显式管理预测修订与停止条件。
- 相关性判断：最高。是近窗内最接近可交付工业 forecasting agent 的系统之一。

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：用受控物理动力系统模拟评测 agent 根据时间序列完成根因归因的能力。
- 相关性判断：最高。提供了可验证的时序 Agent 归因 benchmark。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：让多 Agent 自动生成数据、训练轻量 forecaster，并通过 meta-harness 优化少样本部署流程。
- 相关性判断：最高。直接命中 `forecasting agent + harness + lightweight model`。

### [2026-08-04] [CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2608.03031)

- 日期：2026-08-04
- 来源：[arXiv](https://arxiv.org/abs/2608.03031) / [GitHub](https://github.com/Xiaoyu-Tao/CastFSR)
- 简短摘要：以 `Fast → Slow → Reflect` 三阶段整合预测先验、外部上下文检索与反思修正。
- 相关性判断：最高。是目前最明确的 agentic time-series forecasting 框架之一。

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07（DailyArXiv 于 2026-09-02 收录 v2）
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用建筑知识图谱与 agentic topology sampler 为零样本 IoT forecasting 选择目标相关外生变量。
- 相关性判断：高。展示 Agent 负责上下文选择与变量编排的具体落地。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-02] [Compositional Spectral Prompts for LLM-based Online Time Series Forecasting](https://arxiv.org/abs/2609.02093)

- 日期：2026-09-02
- 来源：[arXiv](https://arxiv.org/abs/2609.02093) / [GitHub](https://github.com/seungyoon-Choi/CoSPOT)
- 简短摘要：`CoSPOT` 冻结 LLM 骨干，通过频域 basis prompt 的组合完成长期在线适配和跨数据集泛化。
- 相关性判断：高。把 LLM prompt composition 与在线时序适配直接结合。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：由 LLM 提出领域概念并生成标注规则，将多变量预测拆解到可命名、可干预的 concept bottleneck。
- 相关性判断：最高。把可解释 reasoning 融入 forecasting 内部表示。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：Agent 判断何时需要文本 reasoning，并把促销、节假日和价格变化转化为结构化语义干预以修正 TSFM 预测。
- 相关性判断：最高。明确回答 reasoning 何时以及如何介入预测。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把时序转为模式描述和数值特征，由 LLM 生成样本级 ensemble 权重与路由决策。
- 相关性判断：高。代表 reasoning-as-router 的实用路线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：按任务与性能—成本偏好动态选择 LLM、VLM 和组合路径。
- 相关性判断：最高。将时序 reasoning 形式化为模态与模型路由问题。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列

#### [2026-09-05] [Hemeskyo/mlx-ios-temporal-agent](https://github.com/Hemeskyo/mlx-ios-temporal-agent) — 今日新增

- 日期：创建 `2026-09-05T09:46Z`；最近 push `2026-09-05T09:47Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Hemeskyo/mlx-ios-temporal-agent) / [GitHub](https://github.com/Hemeskyo/mlx-ios-temporal-agent)
- 简短摘要：SwiftUI iOS 应用由 LFM2.5-2.6B 做工具路由，在本地调用作者移植的 TimesFM-3/MLX，为 HealthKit、照片和 Wikipedia 浏览量生成预测与区间图。
- 相关性判断：最高。直接实现 `LLM Agent → TSFM tool → chart`，且给出 iPhone 端内存、速度与精度折衷；当前 0 star、早期项目，需观察可复现性。

#### [2026-09-05] [shanthg01/gridpulse-multiagent](https://github.com/shanthg01/gridpulse-multiagent) — 低优先级观察

- 日期：创建 `2026-09-05T17:17Z`；最近 push `2026-09-05T21:06Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/shanthg01/gridpulse-multiagent) / [GitHub](https://github.com/shanthg01/gridpulse-multiagent)
- 简短摘要：自称面向监管政策与电网时序分析的 multi-agent RAG 和合成数据引擎，但 README 目前只有一句描述。
- 相关性判断：中。主题命中能源时序 Agent，但证据和代码成熟度不足，故降级。

#### [2026-09-05] [Vanshika-devi/EchoML](https://github.com/Vanshika-devi/EchoML) — 今日新增

- 日期：创建 `2026-09-05T05:28Z`；最近 push `2026-09-05T09:19Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Vanshika-devi/EchoML) / [GitHub](https://github.com/Vanshika-devi/EchoML)
- 简短摘要：围绕 `failure → pattern → hypothesis → controlled experiment → evidence` 循环构建自主 ML 研究工作流。
- 相关性判断：中高。不是时序专用，但与 AutoML Agent、实验 harness 和 failure-driven reflection 高度相关。

#### [2026-08-22] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：创建 `2026-08-22T21:00Z`；最近 push `2026-09-03T03:59Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：组合多个 LLM 和金融数据工具的时序分析 multi-agent workflow 原型。
- 相关性判断：中高。直接命中 timeseries agent，但成熟度仍有限。

#### [2026-07-12] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：创建 `2026-07-12T11:33Z`；最近 push `2026-09-03T13:50Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：面向 edge cases 的 TSFM robustness testing 工具与 benchmark。
- 相关性判断：最高。处于 `time series + foundation model + evaluation harness` 的直接交集。

### 4.2 光伏功率预测

#### [2026-09-04] [siwekk/PV-probabilistic-day-ahead-forecasting](https://github.com/siwekk/PV-probabilistic-day-ahead-forecasting) — 今日新增

- 日期：创建 `2026-09-04T08:03Z`；最近 push `2026-09-04T08:20Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/siwekk/PV-probabilistic-day-ahead-forecasting) / [GitHub](https://github.com/siwekk/PV-probabilistic-day-ahead-forecasting)
- 简短摘要：论文配套复现实验，覆盖 NREL 模拟系统与 PVOD 遥测、LightGBM/XGBoost 分位数模型、Chronos-2、物理可行性投影、共形校准和依赖感知不确定性分析。
- 相关性判断：最高。将 TSFM 与物理约束、概率光伏预测和完整评测协议放在同一代码库；当前 0 star，仍需等待论文正式来源与外部复现。

#### [2026-08-04] [shahoismael/solarbench](https://github.com/shahoismael/solarbench)

- 日期：创建 `2026-08-04T20:00Z`；最近 push `2026-08-13T13:16Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/shahoismael/solarbench) / [GitHub](https://github.com/shahoismael/solarbench)
- 简短摘要：跨四个气候带的 harmonized photovoltaic power forecasting benchmark。
- 相关性判断：高。对统一评测与跨气候泛化很有工程价值。

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：创建 `2026-07-09T02:27Z`；最近 push `2026-07-17T09:04Z`
- 来源：[GitHub Repo API](https://api.github.com/repos/weican1103/PARA-PV) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：公开 retrieval、frozen TSFM prior 与 shift-correction 的光伏预测流水线。
- 相关性判断：高。是光伏方向与 TSFM 主线结合最直接的公开实现之一。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-08-26] [The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid](https://arxiv.org/abs/2608.25703)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25703)
- 简短摘要：把 LSTM 光伏功率预测与 PV-BESS 多目标调度联动，量化预测质量对成本、并网注入与电池利用的影响。
- 相关性判断：高。直接揭示预测误差到运营决策的下游价值链。

### [2026-08-09] [A Low-Cost IoT Device for Environmental Monitoring and Embedded Solar Forecasting with On-Device Incremental Learning](https://arxiv.org/abs/2608.14698)

- 日期：2026-08-09
- 来源：[arXiv](https://arxiv.org/abs/2608.14698)
- 简短摘要：在 ESP32 上做 24 小时太阳能电压预测，并支持部署后的增量学习。
- 相关性判断：中高。连接低成本端侧部署与在线适配。

### [2026-08-06] [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)

- 日期：2026-08-06
- 来源：[arXiv](https://arxiv.org/abs/2608.11254)
- 简短摘要：用全天空图像和 latent diffusion 做小时内辐照度生成式预测，并强化 ramp event 检测。
- 相关性判断：高。虽预测辐照度而非直接功率，但紧邻短时 PV power pipeline。

### [2026-08-01] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-01
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：面向 day-ahead PV 场景整合气象、特征工程、预测与运营决策支持。
- 相关性判断：高。重点不只在模型精度，也在可部署预测流水线。

### [2026-07-08] [PARA-PV: Retrieval-Augmented Foundation Models for Photovoltaic Power Forecasting](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-08
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：用历史相似日检索增强冻结 TSFM，并通过残差/分布偏移修正提升 PV forecasting。
- 相关性判断：最高。直接处于 `TSFM + retrieval + 光伏功率预测` 交叉点。

### [2026-06-07] [Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-07
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：在缺少站点历史数据时，用物理先验生成合成历史以支持冷启动 PV forecasting。
- 相关性判断：高。仍在本次窗口内，但将在 2026-09-07 移出三个月窗口。

## 6. DailyArXiv 补检结论

- 官方 raw README 显示 `Last update: 2026-09-04`，截至本次检索没有 9 月 5—6 日更新。
- `Time Series` 板块中与本晨报最相关、且按 arXiv v1 仍在三个月窗口内的条目包括：[`CoSPOT`](https://arxiv.org/abs/2609.02093)、[`TopoBrick`](https://arxiv.org/abs/2607.06349)、[`When Does Online Adaptation Pay on the Edge?`](https://arxiv.org/abs/2609.01126) 以及基础架构方向的 [`FSNN`](https://arxiv.org/abs/2608.29012)。
- 日期不一致项：`TopoBrick` 在 README 显示 2026-09-02（v2/收录日），但 v1 是 2026-07-07；本报按 v1 排序。`QABBA` 在 README 显示 2026-09-01，但 v1 为 2024-11-20，已超窗，仅保留此降级说明。
- 本轮未发现 DailyArXiv 中比上述条目更晚且更直接命中 time-series Agent/reasoning/foundation model 或光伏预测的新论文。

## 7. 今日建议关注顺序

1. 先检查 `mlx-ios-temporal-agent` 的 TimesFM-3 Swift/MLX 移植与端侧工具调用边界，这是今日最具体的新型 forecasting Agent 实现。
2. 再审阅 `PV-probabilistic-day-ahead-forecasting` 的物理投影、Chronos-2 和共形校准实验脚本，它与光伏概率预测和 TSFM 评测直接相交。
3. 论文侧继续等待下一个 arXiv 工作日；优先观察 `CoSPOT`、`CastClaw/CastFSR`、`TraceBench` 与 `LiveHouse-TS` 是否出现代码、修订或会议接收信息。

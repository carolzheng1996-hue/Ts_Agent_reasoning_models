# 2026-09-01 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-01 08:41:00 CST，Asia/Shanghai<br>
时间窗口：2026-06-01 至 2026-09-01<br>
优先来源：arXiv 官方 API / `abs` 页面、GitHub 官方 Repo API / Search API、OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI 官网补检、官方项目页、公开可访问 GitHub 项目页<br>
检索主题：`time series foundation model`、`time series agent`、`time series reasoning`、`timeseries harness`、`machine learning agent`、`AutoML agent`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-09-01 08:41 CST`，未检到 `2026-09-01` 当天首发、且足以重排主列表的时间序列 foundation model / agent / reasoning 新论文；今天的主要变化仍来自对 `8 月中下旬` arXiv 条目的补检确认，以及 GitHub 在 `9 月 1 日` 凌晨前后的活跃更新。
- foundation model 主线没有比昨天更晚的新高相关论文；窗口内最高优先级条目仍是 [`Causal Analysis for Time Series Foundation Models`](https://arxiv.org/abs/2608.24303)、[`Do Time-Series Foundation Models Pay Off for Industrial Monitoring?`](https://arxiv.org/abs/2608.22968)、[`LiveHouse-TS`](https://arxiv.org/abs/2608.17299) 与 [`Forecast Collapse in Time-Series Foundation Models`](https://arxiv.org/abs/2608.14106)。
- reasoning 主线今天补强了两篇更“直接”的时间序列推理论文：[`TSRouter`](https://arxiv.org/abs/2607.08940) 把不同模态和模型的时序推理路由写成动态图选择问题；[`TSCognition / TSAlign`](https://arxiv.org/abs/2606.22126) 则把 time-series reasoning 正式扩展为认知型 QA benchmark 与对齐框架。
- Agent 方向仍由 [`TraceBench`](https://arxiv.org/abs/2608.27182)、[`MetaCaster`](https://arxiv.org/abs/2608.23473)、[`TimeSage-EV`](https://arxiv.org/abs/2608.14270)、[`EvoTS-Agent`](https://arxiv.org/abs/2608.17933) 构成最强公开主线；其中 `TraceBench` 和 `TimeSage-EV` 仍是最值得复现的 benchmark 资产。
- GitHub 侧今天最值得记录的是三个“仍在动”的仓库：[`Neuraxis-Labs/TSFM-Robustness-Benchmark`](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark) 最近一次 `push` 为 `2026-09-01 00:04Z`，[`shukebeta/baton`](https://github.com/shukebeta/baton) 最近一次 `push` 为 `2026-09-01 00:34Z`，[`P2Enjoy/nvidia-ova-oss`](https://github.com/P2Enjoy/nvidia-ova-oss) 最近一次 `push` 为 `2026-09-01 00:33Z`。
- 光伏功率预测方向本轮新增高相关论文锚点是 [`An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting`](https://arxiv.org/abs/2608.02088)、[`Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors`](https://arxiv.org/abs/2607.12954) 与 [`Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457)；项目侧则以 [`SUNOVA-Solar-Power-Forecasting-System`](https://github.com/youssefaboelmaged942-del/SUNOVA-Solar-Power-Forecasting-System) 为最晚新建仓库。
- 今天是周二 `2026-09-01`，不是周五，因此本轮不更新 `weekly-brief-2026-W36.md`。

## 0. 检索口径

- 只保留论文 `published` 日期或 GitHub 仓库 `created_at` 落在 `2026-06-01` 至 `2026-09-01` 的条目。
- 论文日期优先采用 arXiv 官方 API / `abs` 页面首发日期；GitHub 项目日期优先采用官方 Repo API 的 `created_at`，活跃度补充采用 `pushed_at` 或 `updated_at`。
- OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI 官网本轮仅作为补检源；未发现比当前 arXiv 主列表更晚且更高相关的窗口内新增项。
- 由于本轮没有稳定拿到窗口内更高优先级的 HuggingFace 新项目，`GitHub 和 HuggingFace` 栏目实际仅纳入 GitHub 条目，并在条目里明确来源。
- 日期无法稳定确认的候选项不进入主列表；本轮主列表无 `不确定` 日期条目。

## 1. 时间序列基础模型最新研究

### [2026-08-25] [EncoTESS: Age-Sensitive Encodings from Raw TESS Light Curves](https://arxiv.org/abs/2608.25019)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.25019)
- 简短摘要：提出面向 `TESS` 天文光变曲线的轻量时间序列基础模型 `EncoTESS`，显式处理观测噪声、异方差、非规则采样与大缺口，并输出可迁移到年龄估计和分类任务的统一表征。
- 相关性判断：中高。更偏垂直领域，但确实属于窗口内新增的 TSFM，说明基础模型路线正在向“小模型 + 强领域结构”扩展。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24303)
- 简短摘要：利用参数化合成生成器做 `ceteris paribus` 干预，系统审计 `Chronos-2`、`TimesFM-2.5` 等 TSFM 对趋势、周期、regime switch 和 energy release 等模式的保持能力与失真模式。
- 相关性判断：最高。它直接回答了 TSFM 在哪些时间序列结构上会系统性失效，是 foundation model 评测和部署风控的关键论文。

### [2026-08-24] [Do Time-Series Foundation Models Pay Off for Industrial Monitoring? A Cost-Aware Empirical Study](https://arxiv.org/abs/2608.22968)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.22968)
- 简短摘要：在工业监测任务上比较 `MOMENT`、`Chronos-T5`、`TimesFM 2.5` 与轻量异常检测 / 残差模型，强调 TSFM 收益强依赖任务类型、资源预算和部署约束。
- 相关性判断：最高。它把 TSFM 讨论从“能不能做”推进到“值不值得上生产”。

### [2026-08-20] [Scale-Aware Pretraining of Time Series Foundation Models via Multi-Patch Token Alignment and Hybrid Masking](https://arxiv.org/abs/2608.20005)

- 日期：2026-08-20
- 来源：[arXiv](https://arxiv.org/abs/2608.20005)
- 简短摘要：提出 `SATS`，把 patch size 显式建模为 scale，并用 multi-patch token alignment 与 hybrid masking 提升跨采样频率预训练的一致性与效率。
- 相关性判断：高。它代表 TSFM 竞争焦点继续从模型规模转向预训练制度和跨频率泛化。

### [2026-08-18] [LiveHouse-TS: An Open-world Living Benchmark for Time Series Foundation Models](https://arxiv.org/abs/2608.17299)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17299)
- 简短摘要：提出基于真实未来数据的 living benchmark，以 prequential evaluation 持续检验 TSFM 在季节变化、分布漂移和突发事件中的长期有效性。
- 相关性判断：最高。它把 TSFM 评测从静态 benchmark 推向持续有效性验证。

### [2026-08-14] [Forecast Collapse in Time-Series Foundation Models](https://arxiv.org/abs/2608.14106)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14106)
- 简短摘要：指出 TSFM 在低可预测性目标上会出现预测振幅塌缩和横截面排序失效，并提出 `CalibRank` 平衡校准与排序能力。
- 相关性判断：最高。它暴露了 TSFM 在真实决策链路里的核心 failure mode。

## 2. 时间序列建模 Agent 最新研究

### [2026-08-27] [TraceBench: Controlled Evaluation of LLM Agents for Time-Series Root-Cause Attribution](https://arxiv.org/abs/2608.27182)

- 日期：2026-08-27
- 来源：[arXiv](https://arxiv.org/abs/2608.27182) / [项目页](https://tracebench.github.io/)
- 简短摘要：构建 simulation-based 的受控 root-cause attribution benchmark，让 agent 基于机械系统生成的时间序列判断是否发生参数改动以及改动来源。
- 相关性判断：最高。它把 time-series agent 从“做系统”推进到“如何严格评测归因能力”。

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.26226)
- 简短摘要：按照 forecasting/reasoning、augmentation/synthesis、anomaly/diagnosis、decision support 四类任务梳理现有 time-series agent 的架构、工具与记忆设计。
- 相关性判断：高。它不是新系统，但适合作为近三个月时序 Agent 版图的索引。

### [2026-08-24] [MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters](https://arxiv.org/abs/2608.23473)

- 日期：2026-08-24
- 来源：[arXiv](https://arxiv.org/abs/2608.23473)
- 简短摘要：提出 `meta-harness-optimized` 多 agent 框架，在少样本条件下借助 agentic data generation 与文本上下文自动训练轻量 forecaster。
- 相关性判断：最高。它把 agent 定位成“为部署准备专用 forecaster 的工程师”，而不是直接替代 forecaster。

### [2026-08-18] [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](https://arxiv.org/abs/2608.17933)

- 日期：2026-08-18
- 来源：[arXiv](https://arxiv.org/abs/2608.17933)
- 简短摘要：让 agent 通过 `Revision`、`Alternative Strategy`、`Recombination` 三类演化算子持续改进变点检测实验轨迹，并由验证反馈驱动搜索。
- 相关性判断：最高。它仍是最像“自演化时序研究员”的公开系统之一。

### [2026-08-14] [TimeSage-EV: A Live Benchmark for Agentic Time Series Analysis in Evolving Environments](https://arxiv.org/abs/2608.14270)

- 日期：2026-08-14
- 来源：[arXiv](https://arxiv.org/abs/2608.14270) / [GitHub](https://github.com/TimeSage-Series/TimeSage-EV)
- 简短摘要：构建覆盖真实机构场景和持续更新数据环境的 live benchmark，评测 agent 在 state identification、summarization、outlook reasoning 等任务上的稳定性。
- 相关性判断：最高。它仍是当前最值得直接复现的 time-series agent benchmark 之一。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较直接喂数值、让 LLM 做 coding agent、以及二者结合三种设置，发现可访问代码工具的 agent 在时序理解基准上更强，但错误率仍明显存在。
- 相关性判断：最高。它仍是评估 `coding agent + time series` 能力边界的关键基线。

## 3. 时间序列 reasoning 模型最新研究

### [2026-08-26] [Towards A Unified Information Bottleneck Framework for Time Series Explanations](https://arxiv.org/abs/2608.25897)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25897)
- 简短摘要：用 information bottleneck 统一 attribution 与 counterfactual explanation，显式避免 trivial explanations 与 out-of-distribution counterfactuals。
- 相关性判断：中高。它更偏 explainability，但确实触及“时序模型如何给出稳定、可验证解释”的 reasoning 边界。

### [2026-08-25] [Structured Frequency-Domain Evidence for LLM-Based Time-Series Anomaly Detection](https://arxiv.org/abs/2608.24113)

- 日期：2026-08-25
- 来源：[arXiv](https://arxiv.org/abs/2608.24113)
- 简短摘要：在 LLM 零样本时序异常检测中同时暴露去季节化时域证据和 FFT 频域证据，用结构化证据设计弥补纯时域输入的缺口。
- 相关性判断：高。它说明 reasoning 效果高度依赖喂给模型的结构化证据，而不只是 backbone 本身。

### [2026-08-21] [ConceptTS: LLM-Guided Concept Bottlenecks for Interpretable Multivariate Time-Series Forecasting](https://arxiv.org/abs/2608.21277)

- 日期：2026-08-21
- 来源：[arXiv](https://arxiv.org/abs/2608.21277)
- 简短摘要：让 LLM 自动提出任务相关概念并生成可执行标注规则，把预测过程拆成可读的 concept bottleneck。
- 相关性判断：最高。它把 LLM 引入时序预测内部表示层，是“可解释 reasoning”最直接的新进展之一。

### [2026-08-15] [ReasonCast: Agentic Demand Forecasting with Selective Semantic Reasoning](https://arxiv.org/abs/2608.15291)

- 日期：2026-08-15
- 来源：[arXiv](https://arxiv.org/abs/2608.15291)
- 简短摘要：让 agent 先判断是否需要文本 reasoning，再把促销、节假日、价格变化等事件语义映射成结构化干预字段，对 foundation forecaster 做选择性修正。
- 相关性判断：最高。它把 reasoning 从“解释输出”推进到“决定何时、如何干预 forecast”。

### [2026-08-10] [REATS: LLM Reasoning-based Ensemble Learning for Adaptive Time Series Forecasting](https://arxiv.org/abs/2608.10149)

- 日期：2026-08-10
- 来源：[arXiv](https://arxiv.org/abs/2608.10149)
- 简短摘要：把时序模式文本描述与数值特征联合送入 LLM，由模型生成样本级、可解释的 ensemble 权重和路由策略。
- 相关性判断：高。它代表“reasoning 作为 forecasting router”这条路线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：针对时序推理任务，动态选择 `LLM` 与 `VLM` 不同模态及不同模型组合，在性能和成本偏好下做图结构路由。
- 相关性判断：最高。它直接把 `time series reasoning` 写成“模型路由”问题，是当前很清晰的一条 reasoning engineering 路线。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` 多模态 benchmark 和 `TSAlign` 框架，把 time-series understanding 扩展为 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知型推理任务。
- 相关性判断：最高。它是近三个月里最直接把时序 reasoning 升格为独立研究对象的工作之一。

## 4. 光伏功率预测最新研究

### [2026-08-26] [The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid](https://arxiv.org/abs/2608.25703)

- 日期：2026-08-26
- 来源：[arXiv](https://arxiv.org/abs/2608.25703)
- 简短摘要：把 `LSTM` 光伏发电预测与 PV-BESS 调度控制联动，量化 forecast 精度对自发自用率、并网注入与电池使用的影响。
- 相关性判断：中高。更偏系统运行，但直接展示了预测质量如何影响下游控制收益。

### [2026-08-03] [An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting](https://arxiv.org/abs/2608.02088)

- 日期：2026-08-03
- 来源：[arXiv](https://arxiv.org/abs/2608.02088)
- 简短摘要：面向记录较短的新建站点，构建 deployment-oriented 的日 ahead 光伏预测流水线，通过物理约束特征、时间泄漏防护和 stacking 提升实际可部署性。
- 相关性判断：最高。它兼顾方法、评测协议和部署约束，是本轮最值得跟踪的 PV forecasting 工程型论文。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：在受控的数值天气预报误差扰动下比较 PatchTST、GRU、N-HITS、LightGBM 等模型，并用 SHAP / IG 分析鲁棒性来源。
- 相关性判断：最高。它把 PV forecasting 从单纯精度竞争推进到“输入误差下的稳健性”评估。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对冷启动光伏站点，先基于物理信息和气象协变量生成 synthetic history，再让 `Chronos-2`、`TabPFN-TS` 等 TSFM 在零样本和反馈条件下进行条件化预测。
- 相关性判断：最高。它把 `TSFM` 直接带入 PV forecasting 冷启动场景，是本轮最贴近“foundation model 落地光伏预测”的论文之一。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### [2026-09-01] [Neuraxis-Labs/TSFM-Robustness-Benchmark](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)

- 日期：2026-07-12（创建），2026-09-01（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Neuraxis-Labs/TSFM-Robustness-Benchmark) / [GitHub 仓库](https://github.com/Neuraxis-Labs/TSFM-Robustness-Benchmark)
- 简短摘要：系统测试 `TSFM` edge cases 的 robustness benchmark 工具仓库，最新一次 `push` 已推进到 `2026-09-01 00:04Z`。
- 相关性判断：最高。它是 `time series + foundation model + benchmark harness` 的直接交集，且今天仍在活跃更新。

#### [2026-08-31] [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries)

- 日期：2026-08-22（创建），2026-08-31（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/sriixz/agentic-timeseries) / [GitHub 仓库](https://github.com/sriixz/agentic-timeseries)
- 简短摘要：面向时序分析的 prototype multi-agent workflow，组合 GPT、Claude 与金融数据工具，最近一次 `push` 为 `2026-08-31 05:33Z`。
- 相关性判断：中高。成熟度有限，但仍是窗口内最直接命中 `agentic + timeseries` 标签的新仓库之一。

#### [2026-08-30] [Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)

- 日期：2026-07-12（创建），2026-08-30（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Jesse-dry/AutoML-Agent) / [GitHub 仓库](https://github.com/Jesse-dry/AutoML-Agent)
- 简短摘要：面向短期电力负荷预测的 LLM-driven AutoML agent，覆盖自动特征工程、超参搜索与实验迭代。
- 相关性判断：最高。它同时命中 `time series + AutoML + agent`，仍是本轮最值得继续观察的实作仓库。

#### [2026-08-30] [ahsiwt101/kairos-automl-research-agent](https://github.com/ahsiwt101/kairos-automl-research-agent)

- 日期：2026-08-30（创建），2026-08-31（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/ahsiwt101/kairos-automl-research-agent) / [GitHub 仓库](https://github.com/ahsiwt101/kairos-automl-research-agent)
- 简短摘要：一个围绕“验证集是否在误导研究代理”的 autonomous ML research agent 原型，最近一次 `push` 为 `2026-08-31 19:42Z`。
- 相关性判断：中高。它不直接是时序项目，但与 `AutoML / research agent / harness` 高相关，适合作为外围观察项。

#### [2026-08-24] [Pranavthatenough/mle-bench](https://github.com/Pranavthatenough/mle-bench)

- 日期：2026-08-24（创建），2026-08-31（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Pranavthatenough/mle-bench) / [GitHub 仓库](https://github.com/Pranavthatenough/mle-bench)
- 简短摘要：面向端到端数据科学与机器学习任务的 agent benchmark，最近一次 `push` 为 `2026-08-31 16:25Z`。
- 相关性判断：高。它不是 time-series 专项，但对搭建 `timeseries agent harness` 的评测协议很有借鉴价值。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（创建），2026-07-11（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp) / [GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供异常检测、变点检测、分解、趋势检验和数据质量审计等 deterministic time-series 工具的 `MCP` 服务器。
- 相关性判断：最高。它是目前最直接把时序分析能力打包成 agent-tooling 接口的新仓库之一。

#### [2026-06-12] [shukebeta/baton](https://github.com/shukebeta/baton)

- 日期：2026-06-12（创建），2026-09-01（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/shukebeta/baton) / [GitHub 仓库](https://github.com/shukebeta/baton)
- 简短摘要：一个面向结构化 agent 协作的 AI-to-AI communication harness，最近一次 `push` 为 `2026-09-01 00:34Z`。
- 相关性判断：中高。它不特定于时序，但与 `timeseries agent harness` 的基础设施层高度相关。

#### [2026-08-27] [P2Enjoy/nvidia-ova-oss](https://github.com/P2Enjoy/nvidia-ova-oss)

- 日期：2026-08-27（创建），2026-09-01（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/P2Enjoy/nvidia-ova-oss) / [GitHub 仓库](https://github.com/P2Enjoy/nvidia-ova-oss)
- 简短摘要：一个由 `Agentic Software Factory harness` 驱动的论文复现型仓库，主题不是时序，但 `harness` 标签和持续 push 活跃度都很明确。
- 相关性判断：中。它不直接面向 time series，不过对观察 agent harness 如何组织工程复现仍有参考价值。

### 光伏功率预测

#### [2026-08-30] [youssefaboelmaged942-del/SUNOVA-Solar-Power-Forecasting-System](https://github.com/youssefaboelmaged942-del/SUNOVA-Solar-Power-Forecasting-System)

- 日期：2026-08-30（创建），2026-08-31（最近一次 push）
- 来源：[GitHub Repo API](https://api.github.com/repos/youssefaboelmaged942-del/SUNOVA-Solar-Power-Forecasting-System) / [GitHub 仓库](https://github.com/youssefaboelmaged942-del/SUNOVA-Solar-Power-Forecasting-System)
- 简短摘要：一个采用 Dual-Input LSTM 与 FastAPI 的太阳能发电预测系统型仓库，最近一次 `push` 为 `2026-08-31 09:02Z`。
- 相关性判断：中高。研究新意有限，但它是窗口内最晚创建、且能直接运行的 PV forecasting 工程原型之一。

#### [2026-06-29] [tateshita1908/solar-power-forecasting-system](https://github.com/tateshita1908/solar-power-forecasting-system)

- 日期：2026-06-29（创建），2026-08-22（最近一次 push）
- 来源：[GitHub Search API](https://api.github.com/search/repositories?q=%22solar+power+forecasting%22+OR+%22photovoltaic+forecasting%22+created:%3E=2026-06-01&sort=updated&order=desc&per_page=10) / [GitHub 仓库](https://github.com/tateshita1908/solar-power-forecasting-system)
- 简短摘要：使用 LightGBM、DuckDB 与 Streamlit 构建光伏功率预测与分析流程，项目结构完整，适合作为轻量 benchmark/演示基线。
- 相关性判断：中高。更偏工程系统，但对 PV forecasting 的复现与对比很实用。

## 6. 备注

- 本轮未纳入任何 `HuggingFace` 新项目，因为没有在 `2026-06-01` 至 `2026-09-01` 窗口内稳定确认到比上述 GitHub 条目更高相关、且来源信息完整的新仓库或模型页。
- 本轮未纳入 `不确定` 日期条目。

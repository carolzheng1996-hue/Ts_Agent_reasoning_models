# 2026-06-30 时间序列 Agent / Reasoning / Foundation Model 与光伏功率预测晨间简报

检索时间：2026-06-30 07:00-08:07 Asia/Shanghai  
时间窗口：2026-03-30 至 2026-06-30  
筛选口径：优先保留 arXiv、官方项目页、GitHub、HuggingFace 中可确认日期的条目；补检 `DailyArXiv`。仅纳入过去三个月内的内容；若日期无法确认，则标记为 `不确定` 并降低优先级。本次未发现公开可访问的 `DailyArXiv/timeseries` 分支，实际检查对象仍为 `master` 分支的 `Time Series` 板块与最新自动更新提交。

## 今日摘要

- 时间序列 foundation model 的新增高价值信号，继续集中在 `真实场景评测`、`数值接口/tokenizer` 和 `non-stationarity 适配` 三条线。
- 时间序列 Agent 的最新工作开始更明显地向 `contextualized forecasting`、`multi-agent decomposition` 和 `execution harness` 靠拢，`TimeClaw`、`Nexus`、`CastFlow` 是当前最值得持续跟踪的组合。
- reasoning 方向的主线已经从单轮读图题转向 `认知分解 + 多轮交互 + 可执行代码代理`，其中 `TSCognition/TSAlign` 与 `T2SP` 的信号最强。
- GitHub 新项目侧，近三个月最有跟踪价值的仍然是 `TimeClaw`、`advanced_automl`、`autoresearch-timeseries-agent`、`Inference-Harness` 和 `Awesome-Agentic-Time-Series`。
- 光伏附加栏目中，最值得保留的近三个月增量仍是 `cold-start PV + TSFM benchmark`、`Solar-VLM` 和 `climate-aware validation`。

## 0. DailyArXiv 补检结论

- 检查时间：2026-06-30 08:00 Asia/Shanghai
- 来源：[DailyArXiv 仓库](https://github.com/zezhishao/DailyArXiv) / [2026-06-30 自动更新提交](https://github.com/zezhishao/DailyArXiv/commit/52d26cda46a996bcde3a95151f8e606ba0bc247c)
- 分支状态：GitHub API 当前仅返回 `master` 分支，未发现公开可访问的 `timeseries` 分支。
- 与本简报最相关的补充条目：
  - `The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference`（2026-06-26，[arXiv](https://arxiv.org/abs/2606.27711)）：把 forecasting/estimation/model-selection 统一成 decision-theoretic pretraining。相关性判断：中高。
  - `Are Time-Series Foundation Models Ready for E-Nose Data? An Empirical Assessment of Their Embeddings`（2026-06-26，[arXiv](https://arxiv.org/abs/2606.27672)）：评估 Chronos-2、MOMENT 等 TSFM 在电子鼻数据上的嵌入质量。相关性判断：中。
- 结论：`DailyArXiv` 今天新增的 `Time Series` 条目更偏一般 forecasting 与垂直评测，没有出现比主条目更强的时序 Agent / reasoning 新信号。

## 1. 时间序列基础模型最新研究

### [2026-06-25] Pretrained Time-Series Foundation Models for Financial Return Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27100)
- 简短摘要：系统比较 TimeGPT、TimesFM-2.5、Moirai-2.0、Chronos/Chronos-2 与 NBEATS、NHITS、PatchTST、iTransformer 等模型在美股收益率预测中的表现。核心结论是 TSFM 平均排名更强，但对 random walk 的显著优势并不稳定。
- 相关性判断：高。它直接回答 TS foundation model 在高噪声金融序列中的真实有效性，对后续金融 Agent 的模型路由和校准判断非常关键。

### [2026-06-25] Speaking Numbers to LLMs: Multi-Wavelet Number Embeddings for Time Series Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.26487)
- 简短摘要：提出 TempoWave，把标量观测转成 multi-wavelet、digit-wise embedding，以提升 LLM 对连续数值、局部波动与全局结构的建模能力。
- 相关性判断：高。它虽然更像数值接口层工作，但直接影响 LLM/Agent 读取时间序列数字的能力，是 foundation model 与 reasoning 之间的重要接口。

### [2026-06-05] GlucoFM-Bench: Benchmarking Time-Series Foundation Models for Blood Glucose Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.06881)
- 简短摘要：在 15 个糖尿病相关公开数据集、1117 名个体上评测 Chronos-2、TimesFM 等 TSFM 与传统监督模型，覆盖 zero-shot、few-shot、full-shot 和不同预测步长。
- 相关性判断：中高。它为高风险医疗时序提供了更像真实部署的 benchmark，能帮助 Agent 在小样本和高风险场景里更谨慎地选模型。

### [2026-04-23] An Empirical Assessment of Time-Series Foundation Models in Power System Forecasting

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.16535)
- 简短摘要：把多种 TSFM 放到电力系统 forecasting 任务里做系统评测，重点观察跨数据集泛化、数据效率和 domain mismatch 下的稳定性。
- 相关性判断：中高。它属于“TSFM 落地行业场景”的硬评测，对基础模型是否能直接进入能源类 Agent 工作流有直接参考价值。

### [2026-04-06] Overcoming the Challenge of Non-stationarity in Time Series Foundation Models Through the Lens of the Embedding Space

- 日期：2026-04-06
- 来源：[arXiv](https://arxiv.org/abs/2604.05116)
- 简短摘要：从 embedding space 出发分析 TSFM 遇到 non-stationarity 时的退化机制，并提出更稳健的适配思路。
- 相关性判断：高。non-stationarity 是 foundation model 真正落地时最常见的问题之一，这类工作对长期在线 Agent 特别重要。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：把 generalist LLM 封装成 time-series-native harness，核心组件包括可执行时序工具、episodic multimodal memory 和 capability-evolution loop，评测覆盖 CiK、TSRBench、TSAIA。
- 相关性判断：最高。它是当前最像“能跑起来的时序 Agent 系统”的公开实现之一，兼顾工具调用、记忆和评测闭环。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389) / [GitHub](https://github.com/NiharJani2002/nexus-forecasting)
- 简短摘要：把 forecasting 拆成宏观分析、微观分析、上下文整合与最终 synthesis 等多个 Agent 阶段，强调新闻与事件等非结构化上下文的重要性。
- 相关性判断：高。它把 forecasting 明确重述成 agentic reasoning problem，是“时序预测不只是拟合曲线”的代表性工作。

### [2026-05-02] CastFlow: A Multi-Agent Framework for Fine-Grained Time-Series Forecasting

- 日期：2026-05-02
- 来源：[arXiv](https://arxiv.org/abs/2605.02241)
- 简短摘要：使用多 Agent 协作完成更细粒度的时间序列 forecasting，重点强调局部模式分析、角色分工和组合式预测。
- 相关性判断：中高。它比通用 LLM forecasting 更贴近“任务拆分 + 多角色协作”范式，对后续工程化调度很有参考意义。

### [2026-04-16] Bridging the Last Mile in Time Series Forecasting with an AI Agent

- 日期：2026-04-16
- 来源：[arXiv](https://arxiv.org/abs/2604.12256)
- 简短摘要：聚焦真实工作流中的最后一公里问题，包括模型调用、上下文补全、结果解释与决策接口，而不是只比单点误差。
- 相关性判断：中高。它提醒时序 Agent 的核心难点不只是模型本体，而是如何把预测接入实际业务决策链。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` benchmark，把时序 reasoning 拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务；同时提出 `TSAlign`，把时间序列表征注入 LLM embedding space。
- 相关性判断：最高。它把“时序理解”从图形识别推进到认知推理和行动决策，是近三个月最关键的 reasoning 新工作之一。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较三种模式处理时序问题的能力：直接读原始数值、作为 coding agent 写 Python、以及二者结合。结果显示 coding agent 优于纯文本输入，但错误率仍明显偏高。
- 相关性判断：高。它直接回答“代码代理是否真的能做时序 reasoning”这一核心问题，对 Agent 设计的启发比单纯刷分更大。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：提出 multi-turn 时序 reasoning benchmark，覆盖 240 个任务、2680 轮对话和 8 个真实领域，并配套结构化 agent 与 leaderboard。
- 相关性判断：高。它把时序推理从单轮问答推进到更接近真实分析流程的多轮交互场景。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291)
- 简短摘要：用模板和 LLM agent 自动化构建大规模时序 reasoning benchmark，覆盖 pattern recognition、similarity、anomaly、causality 等能力。
- 相关性判断：中高。它更偏 benchmark 生成基础设施，但对 reasoning 数据供给和评测扩展非常重要。

## 4. 光伏功率预测最新研究

### [2026-06-05] Physics-Informed Synthetic Histories to Benchmark Time-Series Foundation Models for Cold Start PV Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.04694)
- 简短摘要：用 physics-informed synthetic histories 评测 TS foundation model 在 cold-start 光伏预测中的适配能力，重点关注新站点历史不足时的泛化表现。
- 相关性判断：高。它把 TSFM 与光伏 forecasting 的冷启动难题直接绑在一起，对能源 Agent 的快速部署很有价值。

### [2026-05-27] Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting

- 日期：2026-05-27
- 来源：[arXiv](https://arxiv.org/abs/2605.28324)
- 简短摘要：把多变量光伏功率预测改写成 conditional diffusion 的时序 inpainting 问题，以更自然地处理未来序列的不确定性和联合结构。
- 相关性判断：中高。它代表光伏 forecasting 正在吸收更强的生成式建模路线，尤其适合高不确定性场景。

### [2026-04-05] Solar-VLM: Multimodal Vision-Language Models for Augmented Solar Power Forecasting

- 日期：2026-04-05
- 来源：[arXiv](https://arxiv.org/abs/2604.04145) / [GitHub](https://github.com/rhp413/Solar-VLM)
- 简短摘要：联合时序观测、卫星图像和天气文本信息做多模态光伏预测，并用图结构学习建模站点间空间依赖。
- 相关性判断：高。它是当前最接近“多模态 reasoning + 能源时序”交叉点的工作之一。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 5.1 时间序列

#### [2026-06-20] chuan77/advanced_automl

- 日期：2026-06-20
- 来源：[GitHub](https://github.com/chuan77/advanced_automl)
- 简短摘要：面向 tabular 与 time-series 数据的 AutoML 框架，强调 adaptive pipelines、leakage-safe validation 和稳健模型选择。
- 相关性判断：高。它不是研究论文配套代码，而是一个更接近可落地工具链的时序 AutoML 项目。

#### [2026-06-17] AkshajKashyap/autoresearch-timeseries-agent

- 日期：2026-06-17
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：可复现实验型 time-series forecasting benchmark，包含 synthetic/CSV 数据、baseline models、diagnostics、reports、plots 和 deterministic experiment agent。
- 相关性判断：中高。偏工程 benchmark 与实验自动化，适合作为轻量本地 harness 参考。

#### [2026-06-15] Iambackup/granite-timeseries-ttm-r2

- 日期：2026-06-15
- 来源：[HuggingFace](https://huggingface.co/Iambackup/granite-timeseries-ttm-r2)
- 简短摘要：HuggingFace 上近三个月内可确认的新 TSFM 分发节点，标签直接指向 `granite-tsfm`、`foundation models` 和 `time-series-forecasting`。
- 相关性判断：中。它更像模型分发与复用节点，但对观察 HF 上 TSFM 生态变化很有信号价值。

#### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`Harnessing Generalist Agents for Contextualized Time Series` 的官方代码仓，覆盖 timeseries agent、memory、tool-use、benchmark 和统一 CLI。
- 相关性判断：最高。它是当前最值得跟踪的 time-series-native harness 项目之一。

#### [2026-06-03] benman1928/Inference-Harness

- 日期：2026-06-03
- 来源：[GitHub](https://github.com/benman1928/Inference-Harness)
- 简短摘要：面向复杂软件环境中机器学习代理的训练、benchmark 和验证工具集。
- 相关性判断：中。不是时序专用项目，但对后续构建时序 Agent 评测框架有借鉴意义。

#### [2026-06-01] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06-01
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：配套 `The Landscape of Agentic Time Series Systems` 的 paper list，当前 star 增长较快，适合作为近线文献入口。
- 相关性判断：中高。它不是代码实现，但对快速追踪 agentic time-series 文献谱系非常有效。

### 5.2 光伏功率预测

#### [2026-06-25] lujingxiang/LNHF

- 日期：2026-06-25
- 来源：[GitHub](https://github.com/lujingxiang/LNHF)
- 简短摘要：Lead-Time-Aware NWP correction 与 heterogeneous dual-branch fusion Transformer 的多步光伏功率预测实现。
- 相关性判断：中高。主题非常贴近实际多步 PV forecasting，值得继续观察是否补出完整实验细节。

#### [2026-05-28] Jouqio/climate-aware-pv-forecasting

- 日期：2026-05-28
- 来源：[GitHub](https://github.com/Jouqio/climate-aware-pv-forecasting)
- 简短摘要：基于 NASA POWER 数据的可复现光伏预测框架，重点暴露并修正 deterministic target leakage，同时采用 climate-aware validation。
- 相关性判断：中高。它的工程价值在于验证协议与泄漏控制，而不是单纯追求模型分数。

#### [2026-04-05] rhp413/Solar-VLM

- 日期：2026-04-05
- 来源：[GitHub](https://github.com/rhp413/Solar-VLM)
- 简短摘要：`Solar-VLM` 论文配套代码仓，聚焦时序、图像、文本三模态联合的光伏功率预测。
- 相关性判断：高。它是目前最值得持续跟踪的光伏多模态项目之一。

- 说明：本次 HuggingFace API 未检索到近三个月内可确认、且与光伏功率预测直接相关的独立模型仓，因此该子栏暂不单列 HuggingFace 条目。

## 观察与下一步

- foundation model 方向最值得继续追的是 `真实场景评测` 与 `embedding/tokenization`，因为这两类工作最直接决定 TSFM 能否真正服务 Agent。
- Agent 方向的最佳跟踪组合仍然是 `TimeClaw + Nexus + CastFlow`，分别代表 `harness`、`task decomposition` 和 `multi-agent collaboration`。
- reasoning 方向的核心变化是：评测重点已经从“能不能看懂曲线”切到“能不能做认知分解、代码执行和多轮推理”。
- 如果今天只挑三项优先读，建议顺序是：`TSCognition/TSAlign`、`Can LLM Coding Agents Reason About Time Series?`、`Pretrained Time-Series Foundation Models for Financial Return Forecasting`。

## 检索记录

- 论文查询：`site:arxiv.org "time series foundation model" 2026`、`site:arxiv.org "time series agent" 2026`、`site:arxiv.org "time series reasoning" 2026`、`photovoltaic power forecasting`、`PV forecasting`。
- 项目查询：GitHub Search API、GitHub 仓库详情 API、HuggingFace Models API。
- `DailyArXiv` 补检：检查 GitHub API 分支列表、最新自动更新提交，以及 `README.md` 中的 `Time Series` 板块。

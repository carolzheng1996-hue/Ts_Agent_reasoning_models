# 2026-08-04 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-08-04 15:34 CST，Asia/Shanghai  
时间窗口：2026-05-04 至 2026-08-04  
优先来源：arXiv、OpenReview、官方项目页、GitHub 官方仓库页 / GitHub API、Hugging Face 官方页、机构项目页、DailyArXiv 公开 README  
检索主题：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`timeseries harness`、`time series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-08-04` 15:34 CST，没有检索到比 `2026-07-31` 更晚、且高相关的新窗内论文；当前最新、最值得跟进的仍是 [`TFGformer`](https://arxiv.org/abs/2607.29459) 与其对应的 `CrossRAG` 式检索增强预测思路。
- 基础模型主线继续收敛到 `retrieval + planning + post-training + deployment`：[`TFGformer`](https://arxiv.org/abs/2607.29459)、[`LLM as Forecasting Planner`](https://arxiv.org/abs/2607.24892)、[`Foundation Models and Fine-Tuning`](https://arxiv.org/abs/2607.23146)、[`Post-Training in Time Series Foundation Models`](https://arxiv.org/abs/2607.20002) 仍是今天最强的连续链路。
- Agent / harness 方向今天没有出现强于 [`TimeClaw`](https://arxiv.org/abs/2606.05404)、[`GenAutoML`](https://arxiv.org/abs/2606.05860)、[`TimeRouter`](https://arxiv.org/abs/2606.11625)、[`AION`](https://arxiv.org/abs/2605.25045) 的新通用框架，但 [`Nexus`](https://arxiv.org/abs/2605.14389) 仍是“多 Agent 组织上下文推理做预测”的代表作。
- Reasoning 方向仍以 [`ClinPRISM`](https://arxiv.org/abs/2607.25947)、[`TSRouter`](https://arxiv.org/abs/2607.08940)、[`TSCognition`](https://arxiv.org/abs/2606.22126)、[`TimeSage-MT`](https://arxiv.org/abs/2606.01498) 为主；OpenReview 补检没有发现比这些更强的新窗内条目。
- GitHub 侧今天最值得跟踪的仍是 `timecopilot` 的持续活跃更新，以及 `timeseries-mcp`、`mcp-trajectory-evals` 这类更接近 Agent 工具层 / 评测层标准件的新仓库。
- 光伏 / 光功率预测方向没有出现强于 [`PARA-PV`](https://arxiv.org/abs/2607.08079) 与 [`Cold-Start Photovoltaic Forecasting`](https://arxiv.org/abs/2606.07457) 的新窗内论文；工程侧仍可继续跟踪 [`Helios-Forecast`](https://github.com/ReikanYsora/Helios-Forecast) 与 [`climate-aware-pv-forecasting`](https://github.com/Jouqio/climate-aware-pv-forecasting)。

## 0. 检索口径

- 仅保留首次公开日期落在 `2026-05-04` 至 `2026-08-04` 的论文条目。
- 论文日期优先采用 arXiv `Submitted on`、OpenReview `Published`；若聚合页显示为修订日期，则回退到原始首发日期，并在 `DailyArXiv 补检结论` 中说明。
- GitHub 项目分为两类：
  - `窗内新建项目`：以 GitHub API `created_at` 为准。
  - `窗内高活跃项目`：创建时间早于窗口，但 `pushed_at` 在窗口内且主题强相关。
- GitHub 项目继续按 `时间序列` 与 `光伏功率预测` 拆分；若 Hugging Face 与 GitHub 指向同一项目，仅保留一个官方入口。
- OpenReview 已补查 `time series reasoning`、`agentic time series`、`time series foundation model`、`photovoltaic forecasting` 等关键词；今天未发现比正文更强的新高优先级窗内条目。
- 无法确认精确首发日期的条目应标记为 `不确定` 并降优先级；本次正文未纳入日期不确定条目。
- 今天是周二，不生成周报文件。

## 1. 时间序列基础模型最新研究

### [2026-07-31] [TFGformer: Multivariate Time Series Forecasting via Time-Frequency Graph Learning and Covariate Fusion](https://arxiv.org/abs/2607.29459)

- 日期：2026-07-31
- 来源：[arXiv](https://arxiv.org/abs/2607.29459)
- 简短摘要：标题写作 `TFGformer`，但摘要主体实际提出了 `CrossRAG` 式检索增强预测框架，用 shape-aware memory、future-consistent contrastive learning 和 cross-attention fusion 为 TSFM 注入外部历史-未来参考对。
- 相关性判断：最高。它直接把 `retrieval memory layer` 放进 TSFM 主干，离时间序列 Agent 的外部记忆设计非常近。

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：把文本条件预测写成 `冻结 TSFM 生成候选轨迹 + LLM 作为 policy/value planner 做 MCTS 搜索`，不需要重训 TSFM 或 LLM。
- 相关性判断：最高。它把 foundation model、reasoning 与 agent planning 放进同一条推理链路。

### [2026-07-25] [Foundation Models and Fine-Tuning: Toward a New Generation of Models for Time Series Forecasting](https://arxiv.org/abs/2607.23146)

- 日期：2026-07-25
- 来源：[arXiv](https://arxiv.org/abs/2607.23146)
- 简短摘要：系统回顾 TSFM 架构、预训练与优化策略，并实证说明 `post-pretraining fine-tuning` 能稳定优于纯 zero-shot。
- 相关性判断：最高。它明确指出 TSFM 研究重心正在从“有没有用”转向“如何可靠适配”。

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：把 TSFM post-training 总结为参数适配、上下文增强、模型组合、输出后处理与不确定性控制、压缩与专门化五大类。
- 相关性判断：最高。它是当前最清晰的 `pretrained TSFM -> deployment-ready TSFM` 设计地图。

### [2026-07-06] [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919)
- 简短摘要：从样本量、季节性和部署成本出发分析 TSFM 相对经典方法的 break-even 条件，并给出可操作的选择规则。
- 相关性判断：高。它直接服务于“什么时候值得上线 TSFM”的工程决策。

### [2026-07-02] [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出统一 tuning-free TSFM，希望同一底座同时覆盖 extrapolation、interpolation 与 global abstraction 等多类分析任务。
- 相关性判断：高。它代表 TSFM 从 forecasting backbone 继续向通用时序分析底座推进。

### [2026-06-27] [MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting](https://arxiv.org/abs/2606.28670)

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：强调 vintage consistency 与无泄漏 real-time 评测，避免使用修订后宏观数据带来的信息穿越。
- 相关性判断：高。它对真实生产中的数据口径、泄漏控制与评测协议非常有参考价值。

### [2026-05-26] [Falcon-X: A Time Series Foundation Model for Heterogeneous Multivariate Modeling](https://arxiv.org/abs/2605.27286)

- 日期：2026-05-26
- 来源：[arXiv](https://arxiv.org/abs/2605.27286)
- 简短摘要：把异构变量映射到共享 latent prototype space，再用 unified prototype diff-attention 与 variate reassembly router 做跨变量建模。
- 相关性判断：高。它是窗口内少数明确推进 `heterogeneous multivariate TSFM` 的新工作。

### [2026-05-24] [AME-TS: Anchored Mixture-of-Experts for Time Series Forecasting](https://arxiv.org/abs/2605.25166)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25166)
- 简短摘要：用结构先验约束 sparse expert routing，把 forecastability、seasonality、trend、sparsity 等描述符映射成专家选择偏置。
- 相关性判断：高。它对 `TSFM router`、专家池稳定性和可解释调度都很关键。

### [2026-05-23] [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：按周期系统、物理约束系统、金融市场和异质需求四类 operational regime 讨论 TSFM 的上线边界，并提出 `Complexity Router`。
- 相关性判断：最高。它回答的是“什么时候该用 foundation model，什么时候该退回 specialist”的关键部署问题。

### [2026-05-19] [Toto 2.0: Time Series Forecasting Enters the Scaling Era](https://arxiv.org/abs/2605.20119)

- 日期：2026-05-19
- 来源：[arXiv](https://arxiv.org/abs/2605.20119)
- 简短摘要：Datadog 发布从 4M 到 2.5B 参数的开放权重 TSFM 家族，强调统一训练 recipe 下的规模化收益。
- 相关性判断：高。它仍是近三个月工业界最强的公开 TSFM 规模化信号之一。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用知识图谱与 topology sampler 自动选择目标相关的外生变量，并按部署时可得性组织上下文。
- 相关性判断：高。它展示了 Agent 如何显式管理时序上下文，而不只是串模型。

### [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625) / [GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：用轻量 routing head、selective gate 和 fallback ensemble 在多个 TSFM 专家间做自适应选择，不依赖 LLM 控制器。
- 相关性判断：最高。它是时序 Agent runtime 中最接近“专家调度层”的公开实现。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：把时间序列 AutoML 写成 agentic 循环，包含自然语言需求解析、架构生成、sandboxed reflection 和动态再优化。
- 相关性判断：最高。它与 `timeseries agent + machine learning + AutoML` 的交集最直接。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，把 temporal tools、经验演化与 episodic multimodal memory 组织进统一 harness。
- 相关性判断：最高。它仍是当前最完整的时间序列 Agent harness 公开方案之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：由 LLM reasoner 与 TSFM forecaster 协同，把语义推理结果融合回数值预测链路，并用多轮 refinement 强化 reasoning 轨迹。
- 相关性判断：最高。它是“语义理解 + 数值预测融合”这一 agentic 路线的代表工作。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把时序任务定义成 `task file + workspace + validation interface`，并提出由 agents、skills、rules、memory、evaluation、protocols 构成的 harness。
- 相关性判断：最高。若目标是搭建时间序列 Agent 平台，它仍然是最有工程参考价值的骨架之一。

### [2026-05-14] [Nexus: An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：通过多 Agent 分解宏观趋势、微观波动和文本上下文整合，让 LLM 预测链路更适合带事件语义的真实 forecasting。
- 相关性判断：高。它证明了“预测不是单模型问题，而是 agentic reasoning workflow”的论点。

## 3. 时间序列 Reasoning 最新研究

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：提出 `ClinPRISM`，通过 irregularity-aware multi-scale encoder、temporal evidence distiller 与 progressive alignment 处理不规则临床时序 QA。
- 相关性判断：最高。它是窗口内最新、且主题最明确的时间序列 reasoning 条目。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把“用文本模式还是图像模式、选哪类模型、如何平衡效果和成本”建模成异构图上的动态路由问题。
- 相关性判断：最高。它几乎就是时序 reasoning runtime router 的原型。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准与 `TSAlign` 对齐框架，把时序推理任务提升到 grounding、inferring、extrapolating、acting 等认知层级。
- 相关性判断：高。它补齐了“时间序列 reasoning 到底在测什么”的任务定义问题。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 和 hybrid 三类方法，发现代码执行有帮助，但统计验证和细节理解仍不稳定。
- 相关性判断：最高。它直接检验“会写代码的 Agent 是否真的会做时间序列推理”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建覆盖 240 个任务、2680 个对话轮次的多轮时序推理 benchmark，集中暴露 memory、uncertainty handling 和 decision-making 短板。
- 相关性判断：最高。它是当前最接近多轮时间序列 reasoning 标准评测底座的公开资产。

### [2026-05-23] [TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering](https://arxiv.org/abs/2605.24703)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：把 TSQA 能力拆成 temporal scale selection、temporal localization、cross-interval integration 三种可诊断技能，并用 agentic 流程构造数据。
- 相关性判断：高。它更适合用来定位 reasoning 系统失败模式，而不是只看总分。

## 4. GitHub 上值得跟踪的新项目

> 日期口径：优先采用 GitHub API `created_at` / `pushed_at`。仓库页用于内容说明，日期以 API 为准。

### 4.1 时间序列

#### [2026-08-03] [TimeCopilot/timecopilot](https://github.com/TimeCopilot/timecopilot)

- 日期：2026-08-03（GitHub API `pushed_at`；仓库创建于 2025-06-18）
- 来源：[GitHub 仓库](https://github.com/TimeCopilot/timecopilot) / [GitHub API](https://api.github.com/repos/TimeCopilot/timecopilot)
- 简短摘要：自然语言驱动 forecasting、cross-validation、anomaly detection 与多 TSFM 统一调用接口，是面向生产场景的 GenAI forecasting agent。
- 相关性判断：最高。它仍是当前最接近“产品化时间序列 GenAI Agent”的公开工程实现。

#### [2026-08-03] [DataDog/toto](https://github.com/DataDog/toto)

- 日期：2026-08-03（GitHub API `pushed_at`；仓库创建于 2025-05-05）
- 来源：[GitHub 仓库](https://github.com/DataDog/toto) / [GitHub API](https://api.github.com/repos/DataDog/toto)
- 简短摘要：Datadog 的开源 TSFM 工程仓库，近三个月持续围绕 `Toto 2.0` 推进模型、训练与评测接口。
- 相关性判断：高。它偏 foundation model 工程而非 Agent，但非常适合观察工业级 TSFM 的落地路径。

#### [2026-07-26] [ztxtech/aion](https://github.com/ztxtech/aion)

- 日期：2026-07-26（GitHub API `pushed_at`；仓库创建于 2026-04-12，早于窗口）
- 来源：[GitHub 仓库](https://github.com/ztxtech/aion) / [GitHub API](https://api.github.com/repos/ztxtech/aion)
- 简短摘要：OpenCode-based time-series harness，强调 structured forecasting、contextual reasoning、tool use 与 validation-driven workflow。
- 相关性判断：最高。虽然不是窗内新建仓库，但仍是当前最值得盯的时序 harness 工程骨架。

#### [2026-07-11] [Lkhanaajav/mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Lkhanaajav/mcp-trajectory-evals) / [GitHub API](https://api.github.com/repos/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：面向 tool-using agents 的 trajectory-level eval harness，逐步评分 tool selection、arguments、grounding 与效率，并可接入 CI regression gate。
- 相关性判断：高。虽然不是纯时序仓库，但非常贴合 `harness / eval / regression gate` 这条 Agent 工程主线。

#### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/Lkhanaajav/timeseries-mcp) / [GitHub API](https://api.github.com/repos/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供 anomaly detection、changepoint、decomposition、trend tests、data-quality auditing 等 deterministic time-series MCP tools。
- 相关性判断：最高。它非常接近时间序列 Agent 的工具层标准件。

#### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/tianyi-lab/TSRouter) / [GitHub API](https://api.github.com/repos/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码，把 modality-model routing 从论文推进到可复现实验代码。
- 相关性判断：最高。它是 reasoning runtime router 的公开实现。

#### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：2026-06-03（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw) / [GitHub API](https://api.github.com/repos/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：时间序列 Agent harness 官方实现，强调 temporal tools、经验演化与 episodic memory。
- 相关性判断：最高。对 `timeseries agent runtime / harness` 的参考价值依旧最大。

#### [2026-05-19] [UConn-DSIS/TimeRouter](https://github.com/UConn-DSIS/TimeRouter)

- 日期：2026-05-19（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/UConn-DSIS/TimeRouter) / [GitHub API](https://api.github.com/repos/UConn-DSIS/TimeRouter)
- 简短摘要：公开 TSFM router、selective gate 与 fallback ensemble 的实现，面向 foundation model pool 的高效专家选择。
- 相关性判断：最高。它是多 TSFM 专家池调度层的高相关代码仓库。

### 4.2 光伏功率预测

#### [2026-08-03] [Jouqio/climate-aware-pv-forecasting](https://github.com/Jouqio/climate-aware-pv-forecasting)

- 日期：2026-08-03（GitHub API `pushed_at`；仓库创建于 2026-05-28）
- 来源：[GitHub 仓库](https://github.com/Jouqio/climate-aware-pv-forecasting) / [GitHub API](https://api.github.com/repos/Jouqio/climate-aware-pv-forecasting)
- 简短摘要：提供可复现的 PV forecasting 框架，强调 deterministic target leakage 识别与 climate-aware validation。
- 相关性判断：中高。它不直接使用 TSFM/Agent，但对光伏预测数据口径与验证协议很有参考价值。

#### [2026-08-03] [ReikanYsora/Helios-Forecast](https://github.com/ReikanYsora/Helios-Forecast)

- 日期：2026-08-03（GitHub API `pushed_at`；仓库创建于 2026-06-11）
- 来源：[GitHub 仓库](https://github.com/ReikanYsora/Helios-Forecast) / [GitHub API](https://api.github.com/repos/ReikanYsora/Helios-Forecast)
- 简短摘要：面向 Home Assistant 的自学习 solar production forecasting 项目，工程完成度较高。
- 相关性判断：中。它更偏应用工程，但能反映 `solar forecast` 的产品化需求和数据接口形态。

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/weican1103/PARA-PV) / [GitHub API](https://api.github.com/repos/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码，围绕 physics-aware retrieval、冻结 TSFM prior 与 shift correction 组织光伏预测流水线。
- 相关性判断：高。它是 `TSFM + retrieval + PV forecasting` 的直接代码实现。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结 Chronos prior、residual adapter 和 distribution shift correction 串成统一光伏预测框架。
- 相关性判断：最高。它是 `TSFM + retrieval + physics prior + drift correction` 在光伏预测中的代表作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 plant metadata 与气象变量生成 synthetic histories，让 TSFM 在新站点冷启动阶段也能直接做光伏预测。
- 相关性判断：高。它直接回答“没有历史数据时如何启用 TSFM 做 PV forecasting”。

## 6. DailyArXiv 补检结论

- 已核查 [zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv)。GitHub API 显示仓库 `updated_at` 为 `2026-08-03T18:18:31Z`，其公开 README 明示 `Last update: 2026-08-04`。
- 当前 `Time Series` 分栏里，窗口内且与本主题直接相关的直接命中包括：
  - [TFGformer: Multivariate Time Series Forecasting via Time-Frequency Graph Learning and Covariate Fusion](https://arxiv.org/abs/2607.29459)（README 日期 `2026-07-31`，与 arXiv 首发一致）。
  - [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)（README 日期 `2026-07-28`，与 arXiv 首发一致）。
  - [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)（README 日期 `2026-07-27`，与 arXiv 首发一致）。
  - [Foundation Models and Fine-Tuning: Toward a New Generation of Models for Time Series Forecasting](https://arxiv.org/abs/2607.23146)（README 日期 `2026-07-25`，与 arXiv 首发一致）。
  - [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)（README 日期 `2026-07-22`，与 arXiv 首发一致）。
- 当前 README 里还存在几类需要降优先级或排除的“伪新条目”：
  - [TimeRFT: Stimulating Generalizable Time Series Forecasting for TSFMs via Reinforcement Finetuning](https://arxiv.org/abs/2605.00015)：README 显示 `2026-07-31`，但 arXiv 原始提交日期是 `2026-04-18`，已超出三个月窗口；本次不纳入正文。
  - [CENDRe: Concept Extraction with Natural Domain Representations](https://arxiv.org/abs/2607.29621)：首发日期是 `2026-07-31`，但主题更偏时间序列可解释性 / concept extraction，而非 foundation model、Agent 或 reasoning 主轴，因此本次仅在补检中记录，不进正文主清单。
- `TimeClaw`、`GenAutoML`、`AION`、`KairosAgent`、`TS-Skill`、`TSRouter` 等正文核心条目并非都能在 `Time Series` 分栏直接命中，因此继续以原始 arXiv 页面、官方项目页与 GitHub API 为主来源。

## 7. 结论

- 如果优先关心 `TSFM 主线`，今天最值得读的是 `TFGformer / CrossRAG`、`LLM as Forecasting Planner`、`Foundation Models and Fine-Tuning`、`Post-Training in TSFMs`、`Falcon-X`。
- 如果优先关心 `Agent 系统设计`，建议先看 `TimeRouter`、`TimeClaw`、`GenAutoML`、`AION`、`Nexus`，再跟踪 `timeseries-mcp`、`mcp-trajectory-evals` 与 `timecopilot`。
- 如果优先关心 `Reasoning / Benchmark`，建议先看 `ClinPRISM`、`TSRouter`、`TSCognition / TSAlign`、`TimeSage-MT`、`Can LLM Coding Agents Reason About Time Series?`。
- 如果优先关心 `光伏 / 光功率预测`，本窗口内最值得持续跟踪的仍然是 `PARA-PV` 与 `Cold-Start Photovoltaic Forecasting`；工程实现可补看 `Helios-Forecast` 与 `climate-aware-pv-forecasting`。

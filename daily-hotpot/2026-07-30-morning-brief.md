# 2026-07-30 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-30 15:36 CST，Asia/Shanghai  
时间窗口：2026-04-30 至 2026-07-30  
优先来源：arXiv、OpenReview、官方项目页、GitHub 官方仓库页 / API、Hugging Face 官方页、机构项目页  
检索主题：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`timeseries harness`、`time series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 过去一周最值得跟进的主线是 `TSFM + LLM/Agent` 的桥接层：`LLM as Forecasting Planner`、`Foundation Models and Fine-Tuning`、`Post-Training in TSFMs` 连成了“文本规划 -> 模型适配 -> 生产部署”的新链条。
- Agent 方向仍由三类问题驱动：`runtime/harness`（`TimeClaw`、`AION`）、`router`（`TimeRouter`）、`agentic AutoML`（`GenAutoML`）。
- Reasoning 方向最靠前的新信号是 `ClinPRISM`，其次是 `TSRouter`、`TSCognition/TSAlign`、`TimeSage-MT` 这组“多模态/多轮/带验证”的评测与路由工作。
- GitHub 侧，窗口内真正“新建”的高相关仓库仍集中在 `TimeClaw`、`TimeRouter`、`Awesome-Agentic-Time-Series`、`PARA-PV`；高活跃老仓库则是 `TimeCopilot`、`aion`、`DataDog/toto`。

## 0. 检索口径

- 仅保留首次公开日期落在 `2026-04-30` 至 `2026-07-30` 的条目。
- 论文日期优先采用 arXiv `Submitted on` 或 OpenReview `Published`；若 README/聚合页使用的是修订日期，则回退到原始首发日期，并在 `DailyArXiv 补检结论` 中说明。
- GitHub 项目区分为两类：
  - `新建项目`：以 GitHub API `created_at` 为准。
  - `活跃更新项目`：创建时间早于窗口，但 `pushed_at` 或 `updated_at` 在窗口内且与主题强相关。
- 今天是周四，不生成周报；下一个周报文件应为 `daily-hotpot/weekly-brief-2026-W31.md`。

## 1. 时间序列基础模型最新研究

### [2026-07-27] [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)

- 日期：2026-07-27
- 来源：[arXiv](https://arxiv.org/abs/2607.24892)
- 简短摘要：把文本条件预测改写为 `TSFM 生成候选轨迹 + LLM 通过 MCTS 做 policy/value 规划`，不需要重新训练 TSFM 或 LLM。
- 相关性判断：最高。它直接连接 foundation model、reasoning 和 agent planning，是近一周最值得跟进的桥接型工作。

### [2026-07-25] [Foundation Models and Fine-Tuning: Toward a New Generation of Models for Time Series Forecasting](https://arxiv.org/abs/2607.23146)

- 日期：2026-07-25
- 来源：[arXiv](https://arxiv.org/abs/2607.23146)
- 简短摘要：系统回顾 TSFM 架构、预训练策略与微调方案，并用实验强调 `post-pretraining fine-tuning` 对真实数据集的稳定增益。
- 相关性判断：最高。它说明 TSFM 研究正在从“zero-shot 可用”转向“如何可控地适配具体任务”。

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：把 TSFM 的 post-training 归纳为参数适配、上下文增强、模型组合、输出处理与不确定性控制、压缩与专门化五大类。
- 相关性判断：最高。它是目前最清晰的 `pretrained TSFM -> deployment-ready TSFM` 设计地图。

### [2026-07-02] [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出统一 tuning-free TSFM，希望一套模型在 extrapolation、interpolation、global abstraction 等多类任务上都能直接工作。
- 相关性判断：高。它代表 TSFM 从单一 forecasting backbone 向通用时序分析底座演进。

### [2026-06-27] [MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting](https://arxiv.org/abs/2606.28670)

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：围绕实时宏观预测设计具备 vintage consistency 的 TSFM，重点控制信息泄漏和时间口径漂移。
- 相关性判断：高。它对真实生产环境里 TSFM 的数据切分和评估方式很有参考价值。

### [2026-05-23] [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：不只比较平均精度，而是从周期业务、物理约束系统、金融市场和异质需求四类 operational regime 分析 TSFM 的上线边界，并给出 `Complexity Router`。
- 相关性判断：最高。它直接回答“什么时候该用 foundation model，什么时候不该用”。

### [2026-05-19] [Toto 2.0: Time Series Forecasting Enters the Scaling Era](https://arxiv.org/abs/2605.20119)

- 日期：2026-05-19
- 来源：[arXiv](https://arxiv.org/abs/2605.20119) / [Hugging Face](https://huggingface.co/Datadog/Toto-Open-Base-1.0)
- 简短摘要：Datadog 发布从 4M 到 2.5B 参数的开放权重 TSFM 家族，强调统一训练 recipe 下的可扩展性和工业可复用性。
- 相关性判断：高。它仍是近三个月工业界 TSFM 最强公开信号之一。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：用知识图谱和 topology sampler 自动挑选外生变量，在楼宇 IoT 零样本预测里做 agentic 变量选择。
- 相关性判断：高。它展示了 Agent 不只是调模型，也可以显式管理时序上下文和外生变量。

### [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625)
- 简短摘要：用轻量 routing head、selective gate 和 ensemble fallback 在多个 TSFM 之间自适应选专家，不依赖 LLM 控制器。
- 相关性判断：最高。它非常接近时间序列 Agent runtime 中的基础调度层。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：把时间序列 AutoML 写成 agentic 循环，包含自然语言需求解析、PyTorch 架构生成、sandboxed reflection 和动态再优化。
- 相关性判断：最高。它与 `timeseries agent + machine learning + AutoML` 的主题最直接重合。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，把 temporal tools、经验复用和 episodic multimodal memory 组织进统一 harness。
- 相关性判断：最高。它仍是当前最完整的时间序列 Agent harness 公开方案之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：由 LLM reasoner 与 TSFM forecaster 协同工作，把语义推理结果注入数值预测链路。
- 相关性判断：最高。它是“语义理解 + 数值预测融合”的代表性 agentic 架构。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：把时序任务建模成 `task file + workspace + validation interface`，并提出由 agents、skills、rules、memory、evaluation、protocols 组成的时序 harness。
- 相关性判断：最高。若目标是搭建时间序列 Agent 平台，它依旧是最有工程参考价值的骨架之一。

## 3. 时间序列 Reasoning 最新研究

### [2026-07-28] [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)

- 日期：2026-07-28
- 来源：[arXiv](https://arxiv.org/abs/2607.25947)
- 简短摘要：提出 `ClinPRISM`，通过 irregularity-aware multi-scale encoder、temporal evidence distiller 与 progressive alignment 处理不规则临床时间序列 QA。
- 相关性判断：最高。它是今天窗口里最新、且主题最明确的时间序列 reasoning 新条目。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940)
- 简短摘要：把“用文本模式还是图像模式、用哪类模型、如何平衡成本和效果”建模成异构图上的动态路由。
- 相关性判断：最高。它几乎就是时序 reasoning runtime router 的原型。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` 基准和 `TSAlign` 对齐框架，把时序推理任务从低层识别提升到 grounding、inferring、extrapolating、acting 等认知层级。
- 相关性判断：高。它补齐了“reasoning 到底在测什么”的任务定义问题。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 和 hybrid 三类方法，发现代码执行有帮助，但代理在统计验证和细节理解上仍不稳定。
- 相关性判断：最高。它直接检验“会写代码的 Agent 是否真的会做时间序列推理”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建覆盖 240 个任务、2680 个对话轮次的多轮时序推理 benchmark，并暴露 memory、uncertainty handling 和 decision-making 的主要短板。
- 相关性判断：最高。它是当前最接近多轮时间序列 reasoning 标准评测底座的公开资产。

### [2026-05-23] [TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering](https://arxiv.org/abs/2605.24703)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：把 TSQA 能力拆成 temporal scale selection、temporal localization、cross-interval integration 三种可诊断技能，并用 agentic 流程构建数据。
- 相关性判断：高。它适合拿来定位 reasoning 系统的失败模式，而不是只看总分。

## 4. GitHub 上值得跟踪的最新项目

> 日期口径：优先采用 GitHub API `created_at` / `pushed_at`。仓库页只用于内容说明，不用于日期判定。

### 4.1 近三个月内新建的项目

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/weican1103/PARA-PV) / [GitHub API](https://api.github.com/repos/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码，围绕 physics-aware retrieval、冻结 TSFM prior 和 distribution shift correction 组织光伏预测流水线。
- 相关性判断：高。它是 `TSFM + retrieval + PV forecasting` 的直接实现。

#### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：2026-06-03（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw) / [GitHub API](https://api.github.com/repos/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：时间序列 Agent harness 官方实现，强调 temporal tools、experience evolution 和 episodic memory。
- 相关性判断：最高。对 `timeseries agent runtime / harness` 的参考价值最大。

#### [2026-06-01] [TROUBADOUR000/Awesome-Agentic-Time-Series](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)

- 日期：2026-06-01（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series) / [GitHub API](https://api.github.com/repos/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：集中整理 Agentic Time Series 的论文、代码、benchmark 与 survey，适合做后续持续跟踪入口。
- 相关性判断：高。它不是模型本体，但能显著提升后续检索效率。

#### [2026-05-19] [UConn-DSIS/TimeRouter](https://github.com/UConn-DSIS/TimeRouter)

- 日期：2026-05-19（GitHub API `created_at`）
- 来源：[GitHub 仓库](https://github.com/UConn-DSIS/TimeRouter) / [GitHub API](https://api.github.com/repos/UConn-DSIS/TimeRouter)
- 简短摘要：公开 TSFM router、selective gate 和 fallback ensemble 的实现，面向 foundation model pool 的高效专家选择。
- 相关性判断：最高。它是时序 Agent 中最接近“模型调度器”的公开代码之一。

### 4.2 近三个月内高活跃更新的项目

#### [2026-07-29] [TimeCopilot/timecopilot](https://github.com/TimeCopilot/timecopilot)

- 日期：2026-07-29（GitHub API `pushed_at`；仓库创建于 2025-06-18）
- 来源：[GitHub 仓库](https://github.com/TimeCopilot/timecopilot) / [GitHub API](https://api.github.com/repos/TimeCopilot/timecopilot)
- 简短摘要：把自然语言请求映射到 forecasting、cross-validation、anomaly detection 和多 TSFM 调用的统一 Agent 接口。
- 相关性判断：最高。它是当前最接近“产品化时间序列 GenAI Agent”的公开工程实现。

#### [2026-07-26] [ztxtech/aion](https://github.com/ztxtech/aion)

- 日期：2026-07-26（GitHub API `pushed_at`；仓库创建于 2026-04-12，早于窗口）
- 来源：[GitHub 仓库](https://github.com/ztxtech/aion) / [GitHub API](https://api.github.com/repos/ztxtech/aion)
- 简短摘要：OpenCode-based time-series harness，强调 structured forecasting、contextual reasoning、tool use 和 validation-driven workflow。
- 相关性判断：最高。虽然不是窗口内新建仓库，但仍是当前最值得盯的时序 harness 工程骨架。

#### [2026-07-20] [DataDog/toto](https://github.com/DataDog/toto)

- 日期：2026-07-20（GitHub API `pushed_at`；仓库创建于 2025-05-05）
- 来源：[GitHub 仓库](https://github.com/DataDog/toto) / [GitHub API](https://api.github.com/repos/DataDog/toto)
- 简短摘要：Datadog 的开源 TSFM 工程仓库，近三个月主要围绕 `Toto 2.0` 持续推进模型、训练与评测接口。
- 相关性判断：高。它偏 foundation model 工程而非 Agent，但非常适合观察工业级 TSFM 实作路径。

## 5. 光功率 / 光伏功率预测相关最新研究

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、residual adapter 和 distribution shift correction 串成统一光伏预测框架。
- 相关性判断：最高。它是 `TSFM + retrieval + physics prior + drift correction` 在光伏预测中的代表作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 plant metadata 与气象变量生成 synthetic histories，让 TSFM 在新站点冷启动阶段也能预测发电量。
- 相关性判断：高。它直击真实能源部署里“没有历史数据如何启用 TSFM”的核心问题。

## 6. DailyArXiv 补检结论

- 已核查 [zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv)，公开页 `Last update` 为 `2026-07-30`。
- 当前 `Time Series` 分栏中，窗口内且与本主题直接相关的命中包括：
  - [A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.25947)（README 日期 `2026-07-28`，与 arXiv 首发一致）。
  - [LLM as Forecasting Planner: Training-Free Text Conditioning for Time-Series Foundation Models](https://arxiv.org/abs/2607.24892)（README 日期 `2026-07-27`，与 arXiv 首发一致）。
  - [Foundation Models and Fine-Tuning: Toward a New Generation of Models for Time Series Forecasting](https://arxiv.org/abs/2607.23146)（README 日期 `2026-07-25`，与 arXiv 首发一致）。
  - [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)（README 日期写作 `2026-07-24`，但 arXiv 首次提交是 `2026-07-22`；正文已按原始日期保留，并标记为 README/原始日期不一致）。
- 当前 README 里还出现两类需要降优先级的“相关但不应当按窗内新条目处理”的情况：
  - [Reverso: Efficient Time Series Foundation Models for Zero-shot Forecasting](https://arxiv.org/abs/2602.17634)：README 显示 `2026-07-27`，但 arXiv 首发是 `2026-02-19`，超出三个月窗口；本次仅在补检结论中说明，不纳入正文。
  - [VisTR: Visualizations as Representations for Time-series Table Reasoning](https://arxiv.org/abs/2406.03753)：README 显示 `2026-07-26`，但 arXiv 首发是 `2024-06-06`，同样属于修订导致的日期错觉，不纳入正文。
- `AION`、`TimeRouter`、`TS-Skill`、`KairosAgent` 等我们今天正文保留的核心条目，并未在 `2026-07-30` 当天公开 README 的 `Time Series` 分栏中直接命中，因此继续以原始 arXiv 页面为主来源。

## 7. 结论

- 如果你优先关心 `TSFM 研究主线`，今天最值得读的是 `LLM as Forecasting Planner`、`Foundation Models and Fine-Tuning`、`Post-Training in TSFMs`、`Operational Viability`。
- 如果你优先关心 `Agent 系统设计`，建议先看 `TimeRouter`、`TimeClaw`、`GenAutoML`、`AION`。
- 如果你优先关心 `Reasoning / Benchmark`，建议先看 `ClinPRISM`、`TSRouter`、`TSCognition/TSAlign`、`TimeSage-MT`。
- 如果你优先关心 `光伏/光功率预测`，本窗口里最值得持续跟踪的仍然是 `PARA-PV` 和 `Physics-Informed Synthetic Histories for Cold-Start PV Forecasting`。

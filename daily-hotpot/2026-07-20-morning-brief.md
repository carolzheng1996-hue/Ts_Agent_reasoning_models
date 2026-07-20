# 2026-07-20 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-20 08:45-09:05、15:20-15:35 Asia/Shanghai  
时间窗口：2026-04-20 至 2026-07-20  
优先来源：arXiv 摘要页、官方项目页、GitHub 官方仓库页 / GitHub API、公开可访问的 `DailyArXiv` README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`AutoML time series`、`photovoltaic power forecasting`、`solar power forecasting`

## 今日摘要

- 今天最值得补进主线的是 `2026-07-16` 的 [VLT](https://arxiv.org/abs/2607.14510)。它把视觉、语言与时间序列放进同一工业多模态 foundation model 里，比单纯 forecasting backbone 更接近未来时序 Agent 的统一感知底座。
- [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv) 当前公开页已更新到 `Last update: 2026-07-20`，`Time Series` 板块仍能稳定补到 `VLT`、`The Spectrum Is Not Enough`、`TSRouter` 等近窗论文；但 `Adaptive Time Series Reasoning via Segment Selection (ARTIST)` 在 README 里显示为 `2026-07-16`，其 arXiv 原始提交页却是 `2026-02-24`，本轮只保留为补检线索，不纳入正文主排序。
- 15:35 复检补进了 `2026-05-23` 的 [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)。这篇把 TSFM 的适用场景拆成可操作的 deployment regime，并给出 `Complexity Router` 作为选型思路。
- 过去三个月里，时间序列基础模型的增量重点仍然不是“更大参数”，而是 `何时值得启用更长上下文 / retrieval / TSFM`、`如何做持续审计`、`以及多模态或任务级 ICL 是否真的带来稳定收益`。
- Agent / reasoning 方向的新信号仍集中在 `runtime + router + verifier + benchmark`：`TimeClaw`、`KairosAgent`、`AION`、`TSRouter`、`CLIR-Bench` 和 `IRTS-ToolBench` 依旧是最直接影响时序 Agent 实作的公开基线。
- GitHub 项目本轮新增信号主要还是轻量工具层：`blf-forecaster`、`timeseries-mcp`、`mcp-trajectory-evals`、`time-series-autoML`、`forecast-playground`。高质量、近窗、且真正聚焦“PV forecasting agent/harness”的新仓库依然偏少，官方代码里最值得跟的仍是 [PARA-PV](https://github.com/weican1103/PARA-PV)。

## 0. 检索结论

- 本轮继续优先采用可直接确认日期的一手页面：
  - arXiv 摘要页的提交 / 更新日期；
  - 官方项目页：`KairosAgent`、`AION`；
  - GitHub API 返回的 `created_at` / `updated_at`；
  - 公开可访问的 [`DailyArXiv` README](https://github.com/zezhishao/DailyArXiv)。
- 本轮未纳入主条目的内容：
  - 只能回到二手博客或聚合页、无法核验原始日期的条目；
  - 虽在 GitHub 搜索里较新，但本质上是课程仓库、作品集或与时序 Agent 主线关系很弱的 repo；
  - HuggingFace 本轮未检出近三个月内、日期清晰且明显高于 GitHub 官方仓库价值的新 `timeseries agent / harness / AutoML` 项目，更多仍是论文镜像页。
- 总判断：截至 `2026-07-20`，过去三个月最稳定的五条主线仍然是：
  - `TSFM` 的部署价值、失效边界与持续审计；
  - `Agent runtime` 如何组织 tools、memory、validator 与外生变量选择；
  - `时间序列 reasoning` 是否能被 benchmark、router 与 verifier 真正审计；
  - GitHub 上开始出现更接近 `trajectory eval harness / deterministic stats tools / AutoML scaffold` 的轻量实现；
  - 光伏预测里，foundation model 仍然要和 `retrieval / physics constraints / shift correction / cold-start prior` 结合才更实用。
- 复检增量：
  - 增补了 `2026-05-23` 的 `Assessing the Operational Viability of Foundation Models for Time Series Forecasting`，因为它直接回答了 `TSFM 何时值得部署、何时该回退到 specialist`。

### DailyArXiv 补检结论

- 已直接核验公开可访问的 [`DailyArXiv` README 页面](https://github.com/zezhishao/DailyArXiv)，页面当前显示 `Last update: 2026-07-20`。
- `Time Series` 板块里仍可直接看到近窗相关条目，包括：
  - `2026-07-16` [VLT: A Vision-Language-Time Series Multimodal Foundation Model for Industrial Intelligence](https://arxiv.org/abs/2607.14510)
  - `2026-07-15` [The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting](https://arxiv.org/abs/2607.13006)
  - `2026-07-14` [Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection](https://arxiv.org/abs/2607.12454)
  - `2026-07-10` [Neuro-Agentic Control](https://arxiv.org/abs/2607.09076)
  - `2026-07-09` [TSRouter](https://arxiv.org/abs/2607.08940)
  - `2026-07-09` [PARA-PV](https://arxiv.org/abs/2607.08079)
- 日期不一致条目：
  - `DailyArXiv` 中的 `Adaptive Time Series Reasoning via Segment Selection (ARTIST)` 显示为 `2026-07-16`，但 [arXiv 原始摘要页](https://arxiv.org/abs/2602.18645) 的首次提交时间为 `2026-02-24`，超出本轮三个月窗口。
  - 因此 `ARTIST` 本轮仅作为 `DailyArXiv` 补检说明保留，不进入正文主条目排序。
- 结论：`DailyArXiv` 依然适合补检 `forecasting / TSFM / multimodal time series`，但对 `agentic harness / reasoning benchmark / GitHub tooling` 的覆盖仍不够，需要独立检索补齐。

## 1. 时间序列基础模型最新研究

### [2026-07-16] VLT: A Vision-Language-Time Series Multimodal Foundation Model for Industrial Intelligence

- 日期：2026-07-16
- 来源：[arXiv](https://arxiv.org/abs/2607.14510)
- 简短摘要：提出统一处理工业图像、文本与时间序列的多模态 foundation model，目标是把设备状态理解、告警解释与时序分析放进同一表示空间里。
- 相关性判断：最高。它比单任务 forecasting backbone 更接近时序 Agent 所需的多模态底座。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出仅依赖频谱特征不足以判断“更长上下文、检索插件或 foundation model 何时真的有帮助”，并提出 `coverage deficit` 作为部署前诊断量。
- 相关性判断：最高。它直接服务于时序 Agent 的 `是否启用 retrieval / TSFM / longer context` 路由判断。

### [2026-07-14] Exploring Zero-Shot Foundation Models for Multivariate Time Series Anomaly Detection

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12454)
- 简短摘要：评估把 `TimesFM` 零样本迁移到工业多变量异常检测的两条路径，结论是仍不如专用方法，但边界误差峰值可用于 sentinel 设计。
- 相关性判断：高。它很适合反向指导时序 Agent 的 `什么时候不要盲调 TSFM`。

### [2026-07-13] Bet on Features: Anytime-Valid and Feature-Aware Auditing of Conditional Quantile Forecasters

- 日期：2026-07-13
- 来源：[arXiv](https://arxiv.org/abs/2607.11653)
- 简短摘要：提出面向黑盒分位数预测器的持续审计框架，在非 i.i.d. 流式环境里做 feature-aware calibration 检验，并报告 `Chronos-2` 等模型的失准证据。
- 相关性判断：高。它不是新 backbone，但对 deployment guardrail 和 online validator 很关键。

### [2026-07-08] TimEE: End-to-end Time Series Classification via In-Context Learning

- 日期：2026-07-08
- 来源：[arXiv](https://arxiv.org/abs/2607.07500) / [GitHub](https://github.com/automl/timee)
- 简短摘要：提出面向时序分类的 ICL-style foundation model，通过合成任务元训练，让模型在目标数据集上无需再训练即可执行分类。
- 相关性判断：中高。它显示 TSFM 正在从 forecasting 向 task-level in-context inference 扩展。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建真实世界多变量时序语料 `RMISC`，并系统比较真实语料与合成语料预训练对零样本泛化的影响。
- 相关性判断：最高。它仍是“预训练语料质量究竟决定什么”的强证据。

### [2026-07-02] Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出统一的 tuning-free TSFM，通过多尺度建模与多目标时间掩码，覆盖 extrapolation、interpolation 与 global abstraction 等多类任务。
- 相关性判断：高。它代表了一条“尽量少调参、统一多任务”的部署路线。

### [2026-05-23] Assessing the Operational Viability of Foundation Models for Time Series Forecasting

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：系统比较 foundation model 与 supervised specialist 在周期性业务、物理约束系统、金融市场与异质需求预测等不同 operational regime 下的表现，并提出 `Complexity Router` 在精度与推理成本之间做选择。
- 相关性判断：最高。它不是新 backbone，但对 `TSFM 是否该上线、何时退回专用模型` 的部署决策非常直接。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-10] Neuro-Agentic Control: A Deep Learning-based LLM-Powered Agentic AI Framework for Controlling Security Controls

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09076)
- 简短摘要：提出 `LLM planner + time-series sentinel` 的闭环控制框架，在动作执行前用可计算的动态约束与预测结果拦截不合理策略。
- 相关性判断：中高。虽然是工业控制安全场景，但很像未来时序 Agent 的 `plan + simulate + gate` 模式。

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：提出 training-free 的楼宇 IoT 零样本预测框架，通过结构知识图谱与 `agentic topology sampler` 在部署时选择外生变量。
- 相关性判断：高。它把 `agentic selection` 直接放进时序部署链路，而不是只做通用分析助手。

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：先用图时序 foundation model 预测 DeFi 暴露网络，再通过 deterministic monitor、stress scenario 与 confidence gate 输出可审计风险票据。
- 相关性判断：最高。它仍是近窗里最像生产监督系统的时序 Agent 实现之一。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，给通用 LLM agent 加上时序原生 runtime、可执行 temporal tools、经验复用与 episodic multimodal memory。
- 相关性判断：最高。它仍是时间序列 harness、tool use、memory 与 auditable runtime 的代表作。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 `LLM reasoner + TSFM forecaster` 双模块架构，让 LLM 通过多轮工具调用形成语义推理轨迹，再把结果融合进预测器。
- 相关性判断：最高。它是“语义 reasoning 与数值 forecasting 显式解耦再融合”的代表作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：把现实时序任务 formalize 为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation 与 protocols 组织时序专用 harness。
- 相关性判断：最高。若目标是建设可复用的时序 Agent 平台，它仍是最系统化的公开参考之一。

### [2026-05-14] Nexus: A Foundation for End-to-End Human-AI Collaborative Time Series Analysis

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：提出面向人机协作的端到端时序分析框架，把交互式问题澄清、分析建议与模型调用整合到统一流程。
- 相关性判断：中高。它不完全等同于 forecasting agent，但很接近 analyst-style time series copilot 的产品骨架。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：围绕稀疏、不规则、异步的临床时序构建多模态 QA benchmark，把显式时间证据与答案推导规则绑定到每个问题上。
- 相关性判断：高。它正中“不规则时序 + 可核验 reasoning”这条主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将时序 reasoning 中的 `文本模式 LLM` 与 `图像模式 VLM` 选择问题显式建成异构图路由任务，并按性能-成本偏好动态选择最优 `modality-model pair`。
- 相关性判断：最高。它非常接近未来时序 Agent 的 runtime router 与 cost-aware orchestration 设计。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：定义覆盖 `Decoding / Grounding / Inferring / Extrapolating / Acting` 的认知型时序 reasoning 谱系，并给出 `TSCognition` benchmark 与 `TSAlign` 框架。
- 相关性判断：最高。它仍是近三个月里最像“总纲”的时间序列 reasoning 工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：审查 coding agent 在时序任务中的真实推理能力，发现即便允许代码执行，模型仍会在统计假设、验证逻辑与不确定性处理上系统失误。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经具备可靠时序 reasoning”。

### [2026-06-13] Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：围绕不规则采样 TSQA 构建 `IRTS-ToolBench`，强调 tool-grounded reasoning、可验证分析链路与可复现实验协议。
- 相关性判断：高。它把 verifier 与多工具调用正式拉进了时序 reasoning 评测。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：提出多轮时间序列 agent benchmark，覆盖 240 个任务和 2680 轮对话，强调记忆、证据积累、不确定性处理与决策型任务。
- 相关性判断：最高。它比单轮 TSQA 更接近真实 analyst / agent 工作流。

## 4. 光伏功率预测最新研究

### [2026-07-14] Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：围绕数值天气预报误差如何沿着 PV forecasting pipeline 传导，构建受物理约束的鲁棒性评测框架，并比较多种深度模型在不同扰动强度下的稳健性与计算开销。
- 相关性判断：高。它直接回答 `天气输入误差会怎样放大到光伏功率预测结果`。

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、分布漂移校正和分情境损失函数绑在同一条 PV 预测链路里。
- 相关性判断：最高。它几乎就是“光伏版 foundation model + retrieval + physics constraints”的最直接代表作。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：面向冷启动光伏场景生成 physics-informed synthetic history，让 TSFM 在缺少目标站点历史观测时也能依靠元数据和气象协变量做 zero-shot 预测。
- 相关性判断：高。它回答了“站点刚上线时 TSFM 还能否工作”的关键落地问题。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较多类 TSFM 在电力系统预测任务中的准确率、校准性与泛化表现，指出零样本优势并不稳定，仍受场景与协变量设置影响。
- 相关性判断：高。它仍是“能源时序里 TSFM 到底值不值得上”的基础参照。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 5.1 时间序列

### [2026-07-17] swarm-ai-research/blf-forecaster

- 日期：2026-07-17（GitHub `created_at`）
- 来源：[GitHub](https://github.com/swarm-ai-research/blf-forecaster)
- 简短摘要：实现 `belief-state agent loop + multi-trial aggregation + calibration + ForecastBench harness`，并把 time-series tools 接进概率预测评测流程。
- 相关性判断：高。它虽不是纯时序仓库，但很像 `forecasting agent + eval harness` 的轻量实验台。

### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：面向 tool-using agents 的 trajectory-level eval harness，逐步评分工具选择、参数、grounding 与效率，并支持 CI regression gate。
- 相关性判断：高。它不是时序专用，但正好补上时序 Agent 目前最缺的 `trajectory eval` 基础设施。

### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：提供面向 AI agents 的 deterministic time-series statistics MCP 工具，覆盖异常检测、变点、分解、趋势检验与数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定、可审计统计工具层”的实用方向。

### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：一个近窗新建的时序 AutoML scaffold，虽然仓库描述很短，但最近仍有更新，值得继续观察其是否补齐搜索、回测与模型选择能力。
- 相关性判断：中。方向相关，但当前公开信息偏少，优先级低于 `timeseries-mcp` 和 `mcp-trajectory-evals`。

### [2026-07-03] xavierdurawa/forecast-playground

- 日期：2026-07-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/xavierdurawa/forecast-playground)
- 简短摘要：提供 leak-free `as-of` retrieval 工具与 forecasting playground，用于搭建和评估检索增强型预测器。
- 相关性判断：高。它与 `retrieval-aware forecasting harness` 这条主线贴合度很高。

### 5.2 光伏功率预测

### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 的官方代码仓库，连接 physics-aware retrieval、冻结 TSFM 和分布漂移校正。
- 相关性判断：最高。它是近窗里最值得持续跟踪的光伏预测开源实现。

### [不确定] HuggingFace 近窗项目补检

- 日期：不确定
- 来源：[HuggingFace 搜索结果页](https://huggingface.co/papers)
- 简短摘要：本轮能检出的近窗 `time series / PV forecasting` 相关 HuggingFace 页面，多数仍是论文镜像或旧模型页，没有明显优于官方 GitHub 仓库的新 agent / harness / AutoML 项目。
- 相关性判断：低。可继续作为镜像入口，但本轮不建议把 HuggingFace 作为主跟踪源。

# 2026-07-23 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-23 16:20 CST，Asia/Shanghai  
时间窗口：2026-04-23 至 2026-07-23  
优先来源：arXiv、OpenReview、官方项目页、GitHub 官方仓库页 / GitHub 搜索 API、Hugging Face  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`timeseries harness`、`time-series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 过去三个月里，时间序列基础模型的主线明显从“继续做更大的预训练模型”转向“部署后如何 post-train、wrap、route、audit”。最新且最值得关注的是 [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)、[The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006) 和一组 2026-07-20 的 drought-forecasting adapter 论文。
- 时间序列 Agent 方向目前仍由 [TimeClaw](https://arxiv.org/abs/2606.05404)、[AION](https://arxiv.org/abs/2605.25045)、[KairosAgent](https://arxiv.org/abs/2605.30002)、[Nexus](https://arxiv.org/abs/2605.14389) 这条“runtime + tools + memory + TSFM/LLM 协同”主线领跑，近几周没有出现更系统的新通用框架。
- reasoning 方向这三个月的最强增量是把“看哪里、怎么路由、怎么多轮累积证据、怎么验证”拆开做：代表性工作包括 [ARTIST](https://openreview.net/forum?id=yzBbBPheg7)、[TSRouter](https://arxiv.org/abs/2607.08940)、[TimeSage-MT](https://arxiv.org/abs/2606.01498)、[TSCognition](https://arxiv.org/abs/2606.22126) 和 [CLIR-Bench](https://arxiv.org/abs/2607.09880)。
- GitHub / Hugging Face 侧最值得跟踪的新信号不是“又一个大模型仓库”，而是 `timeseries-mcp`、`mcp-trajectory-evals`、`TSRouter`、`PARA-PV`、`time-series-autoML` 这类 `时序工具层 + trajectory eval + reasoning router + 垂直应用 scaffold`。

## 0. 检索说明

- 仅保留 `2026-04-23` 至 `2026-07-23` 窗口内的条目。
- 论文日期优先采用 arXiv 摘要页日期或 OpenReview `Published` 日期。
- GitHub 项目日期优先采用 GitHub 官方仓库元数据中的创建日期；若只确认到更新时间，会明确标注。
- 若某个 Hugging Face 项目与 GitHub / 论文同源，则只保留更值得跟踪的一侧，避免重复。

## 1. 时间序列基础模型最新研究

### [2026-07-22] Post-Training in Time Series Foundation Models: A Unifying Framework

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 的五类干预位点，包括参数适配、上下文增强、模型组合、输出处理与部署压缩，核心问题从“有没有通用底座”转向“如何可靠下游化”。
- 相关性判断：最高。它不是新 backbone，但对 `foundation model -> agent runtime -> deployment policy` 的研究路线判断最直接。

### [2026-07-20] Towards Reliable Zero-Shot Crowd Forecasting: Evaluating Time Series Foundation Models for Special Event Pedestrian Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17758)
- 简短摘要：系统评估 TSFM 在特殊事件人流预测中的零样本概率预测能力，重点检查不确定性与极端波动场景下的可靠性边界。
- 相关性判断：高。偏评测，但对 `Agent 何时敢信任 frozen TSFM` 很关键。

### [2026-07-20] Lightweight Wrappers for Adapting Time Series Foundation Models to Regional Drought Forecasting

- 日期：2026-07-20
- 来源：[arXiv](https://arxiv.org/abs/2607.17511)
- 简短摘要：提出无需改动 backbone 权重的轻量 wrapper，在 inference-time 叠加多分辨率 residual 与 bootstrap 组件，提升 frozen TSFM 在区域干旱预测上的可迁移性。
- 相关性判断：高。它代表了 `frozen TSFM + cheap adapter` 的实用部署路线。

### [2026-07-14] The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting

- 日期：2026-07-14（v2：2026-07-15）
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出频谱统计不足以决定是否应启用长上下文、检索或 foundation model，并提出更适合部署期诊断的 `coverage deficit` 视角。
- 相关性判断：最高。很适合转化成时序 Agent 的 `router / context gate / model selector`。

### [2026-07-07] RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建大规模真实多变量时序语料，并比较真实语料与合成语料对 TSFM 零样本泛化的影响。
- 相关性判断：高。它直接关系到 `时序 foundation model 的数据配方`。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17（v2：2026-06-29）
- 来源：[arXiv](https://arxiv.org/abs/2606.19501) / [GitHub](https://github.com/EVIEHub/DeXposure-Claw)
- 简短摘要：把图时序预测、压力测试、规则门控和风险票据输出组合成可审计 agentic supervision 流程。
- 相关性判断：高。更偏垂直行业，但它展示了 `TSFM + monitor + action gate` 的成品形态。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，将 temporal tools、经验复用、episodic multimodal memory 和 time-series-native runtime 组织进同一系统。
- 相关性判断：最高。它仍是时间序列 harness / tools / memory 设计里最值得抄作业的公开方案之一。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：显式拆分 `semantic reasoner` 与 `TSFM forecaster`，把外部语义上下文和数值预测过程解耦再融合。
- 相关性判断：最高。它是 `LLM reasoning + TSFM forecasting` 融合最清晰的代表工作。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：围绕 `task file + workspace + validator + skills + memory` 组织 agent benchmark 与运行时协议，明显向真实工作流靠拢。
- 相关性判断：最高。若目标是搭建可复用的时间序列 Agent 平台，它仍是近窗里最系统的公开蓝图。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：用多角色 agent 分解 forecasting 任务，把宏观波动、微观波动、上下文事件和最终预测整合为协作流程。
- 相关性判断：高。它比 `AION / TimeClaw` 更像面向 forecasting 的专用 agent pipeline。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：为不规则、稀疏、异步的临床时间序列构建多模态 QA benchmark，把时间证据与答案验证更紧地绑定。
- 相关性判断：高。它把 `irregular TS + verifiable evidence` 拉成独立主线。

### [2026-07-09] TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning

- 日期：2026-07-09（v2：2026-07-18）
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：将 time-series reasoning 中“文本模式 LLM 还是图像模式 VLM、更贵还是更便宜模型”形式化为异构图路由问题。
- 相关性判断：最高。它几乎就是未来时序 Agent runtime router 的直接原型。

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition`，把时序 reasoning 能力拆成 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知技能，并配套 `TSAlign` 方法。
- 相关性判断：最高。它是近三个月最像“总纲”的时间序列 reasoning 论文之一。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较原始数值输入、coding agent 与两者结合的时序问答路径，结果表明代码执行本身并不能自动解决统计假设、验证逻辑与错误归因问题。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已可靠掌握时序 reasoning”。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时序推理 benchmark，专门暴露记忆、证据积累、不确定性表达和多步分析链的问题。
- 相关性判断：高。它比单轮 TSQA 更接近 analyst / agent 的真实工作流。

### [2026-05-23] TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：把 TSQA 能力拆成 `时间尺度选择`、`时间定位`、`跨区间整合` 三类技能，并通过 `SKEvol` agentic pipeline 自动构造带时间戳证据的问题。
- 相关性判断：高。它对 `skill-level evaluation` 很有价值，尤其适合拿来做 reasoning 失效诊断。

### [2026-04-30] Adaptive Time Series Reasoning via Segment Selection

- 日期：2026-04-30
- 来源：[OpenReview / ICML 2026](https://openreview.net/forum?id=yzBbBPheg7)
- 简短摘要：提出 `ARTIST`，用 controller-reasoner 结构和强化学习做自适应片段选择，让模型先决定看哪里，再决定如何回答。
- 相关性判断：最高。它把“先定位证据，再推理”清楚做成了可训练 runtime。

### [2026-04-24] TimeOmni-1: Incentivizing Complex Reasoning with Time Series in Large Language Models

- 日期：2026-04-24
- 来源：[NVIDIA Research 项目页](https://research.nvidia.com/index.php/publication/2026-04_timeomni-1-incentivizing-complex-reasoning-time-series-large-language-models) / [Hugging Face](https://huggingface.co/TimeOmni-1)
- 简短摘要：提出 `TSR-Suite` 和统一时序 reasoning 模型 `TimeOmni-1`，覆盖场景理解、因果发现、事件感知预测与决策型任务。
- 相关性判断：最高。它是三个月窗口内最接近“统一时间序列 reasoning model”叙事的项目。

## 4. 光伏功率预测最新研究

### [2026-07-14] Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：分析数值天气预报误差如何沿时空结构传导到 PV 预测误差，并尝试给出更物理可解释的鲁棒性分析。
- 相关性判断：高。它提醒光伏 Agent 不只要会 forecast，还要会识别上游气象输入失真。

### [2026-07-09] PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结 TSFM 先验和 shift correction 串成统一 PV forecasting pipeline。
- 相关性判断：最高。它是当前 `TSFM + retrieval + physics constraints + drift correction` 光伏主线的最完整代表。

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为冷启动场站构造 physics-informed synthetic histories，帮助 TSFM 在几乎无历史观测时保持可用预测能力。
- 相关性判断：高。它直接回答“新站点刚上线时 TSFM 还能不能用”。

### [2026-04-23] Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications

- 日期：2026-04-23
- 来源：[arXiv](https://arxiv.org/abs/2604.22077)
- 简短摘要：系统比较 TSFM 在电力负荷、风电和光伏任务上的零样本、微调和泛化表现。
- 相关性判断：高。它仍是能源时序里评估 TSFM 值不值得部署的基础参照。

## 5. GitHub 和 Hugging Face 上值得跟踪的新项目

### 5.1 时间序列

#### [2026-07-11] Lkhanaajav/timeseries-mcp

- 日期：2026-07-11（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：面向 AI agents 的 deterministic time-series MCP 工具层，覆盖异常检测、变点、分解、趋势检验和数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定统计工具层”的实用形态。

#### [2026-07-11] Lkhanaajav/mcp-trajectory-evals

- 日期：2026-07-11（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：为 tool-using agents 提供 trajectory-level eval harness，显式评分工具选择、参数、grounding 和效率。
- 相关性判断：高。它补上了时序 Agent 最缺的 `trajectory regression / CI gate` 基础设施。

#### [2026-07-08] tianyi-lab/TSRouter

- 日期：2026-07-08（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码仓库，公开时序 reasoning 中的 modality-model routing 实现。
- 相关性判断：高。它把 reasoning router 从论文推进到了可复现代码。

#### [2026-07-08] Naveen-Boddepalli/time-series-autoML

- 日期：2026-07-08（GitHub 仓库创建时间；窗口内仍有代码更新）
- 来源：[GitHub](https://github.com/Naveen-Boddepalli/time-series-autoML)
- 简短摘要：一个面向时序任务的轻量 AutoML scaffold，主题贴近 `forecasting workflow + quick experimentation`。
- 相关性判断：中。工程成熟度仍弱于工具层仓库，但贴合 `time-series + AutoML` 关键词。

#### [2026-04-23] TimeOmni-1 / TimeOmni-1-4B 与 9B

- 日期：2026-04-23（Hugging Face 模型页更新时间）
- 来源：[Hugging Face](https://huggingface.co/TimeOmni-1)
- 简短摘要：围绕 `TSR-Suite` 发布的 TimeOmni-1 系列模型集合，便于快速验证统一时序 reasoning 模型的推理风格。
- 相关性判断：高。若要复现“统一 reasoning model”路线，这是目前最值得跟踪的公开入口之一。

### 5.2 光伏功率预测

#### [2026-07-10] 9154327992/Solar-Power-Forecast-Agent

- 日期：2026-07-10（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/9154327992/Solar-Power-Forecast-Agent)
- 简短摘要：面向光伏预测的早期 Agent demo，重点在于把 forecasting、解释和应用包装成可交互流程。
- 相关性判断：中。主题直接，但目前更像工程演示而不是成熟研究框架。

#### [2026-07-09] weican1103/PARA-PV

- 日期：2026-07-09（GitHub 仓库创建时间）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码仓库，围绕 retrieval、冻结 TSFM 先验和分布漂移校正实现 PV forecasting pipeline。
- 相关性判断：高。是当前最值得直接跟进的光伏时序代码仓库。

- 额外说明：本次未检出比上述两项更值得单列的 Hugging Face 光伏新项目，优先继续跟踪 `PARA-PV` 的代码更新与复现实验。

## 6. 建议跟踪项

- 把 [Post-Training in Time Series Foundation Models](https://arxiv.org/abs/2607.20002)、[The Spectrum Is Not Enough](https://arxiv.org/abs/2607.13006) 和 7 月 20 日的 wrapper 论文整理成一份 `TSFM 部署决策表`：什么时候直接 zero-shot，什么时候做 wrapper，什么时候必须接检索或 verifier。
- 以 [TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)、[AION](https://ztxtech.github.io/aion/)、[timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)、[mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals) 为骨架，整理一版内部 `task schema + tool layer + trajectory eval` 模板。
- 持续监控 [TSRouter](https://github.com/tianyi-lab/TSRouter)、[TimeOmni-1](https://huggingface.co/TimeOmni-1)、[PARA-PV](https://github.com/weican1103/PARA-PV) 是否新增更完整的训练、推理或评测脚本。

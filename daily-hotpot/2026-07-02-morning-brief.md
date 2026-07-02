# 2026-07-02 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-02 10:55-12:15 Asia/Shanghai  
时间窗口：2026-04-02 至 2026-07-02  
筛选口径：优先检索 arXiv、OpenReview、ACL/NeurIPS/ICLR/ICML/KDD/AAAI 相关公开页、官方项目页、GitHub、HuggingFace 与机构博客；主条目只保留过去三个月内可确认日期的内容。若 GitHub 项目无法直接确认创建日期，以关联论文日期、项目页日期或 README 可见信息近似，并标注不确定。  
本次重点检索词：`time series foundation model`, `time series agent`, `time series reasoning`, `time series harness`, `AutoML time series`, `photovoltaic power forecasting`, `PV forecasting`, `solar power forecasting`, `DailyArXiv Time Series`。

## 今日摘要

- `DailyArXiv` 的 `Time Series` 板块今天出现多条强相关线索，其中最值得新增的是 `STOIC`、`DeXposure-Claw` 与 `TS-Haystack`。其中 `TS-Haystack` 相关性很高，但 arXiv 原始发布日期为 2026-02-15，超出三个月窗口，故仅作为补检提醒。
- 基础模型方向的最新增量集中在两类：一类是能源/金融等高风险场景里的不确定性与泄漏控制，另一类是把 TSFM 纳入统一工程接口和 zero-shot 工作流。
- Agent 和 reasoning 方向继续从单次预测走向 `工具调用 + 记忆 + harness + 多轮验证`。`TimeClaw`、`AION`、`KairosAgent`、`TSCognition/TSAlign` 仍是近三个月最核心组合。
- 光伏功率预测方向今天最相关的新论文是 2026-06-05 的冷启动 PV forecasting 工作，它直接把 TSFM、物理先验合成历史和零样本部署结合起来。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-02 11:20 Asia/Shanghai
- 来源：[zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 仓库状态：README 显示 `Last update: 2026-07-02`，`Time Series` 板块保留最近条目。
- 高相关且纳入主条目的 DailyArXiv 线索：
  - [Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models](https://arxiv.org/abs/2606.31804)，DailyArXiv 日期 2026-06-30，能源时序 + foundation model + 不确定性。
  - [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)，DailyArXiv 摘要显示 forecast-grounded agentic supervision，与 Agent/harness/reasoning 强相关。
  - [MACROCAST](https://arxiv.org/abs/2606.28670)、[The Simulacrum](https://arxiv.org/abs/2606.27711)、[Unified Zero-Shot Time Series Forecasting: A Darts Foundation](https://arxiv.org/abs/2606.27438)，继续作为 foundation model 主线。
- 高相关但降优先级或不纳入主排序：
  - [TS-Haystack](https://arxiv.org/abs/2602.14200)：DailyArXiv `Time Series` 板块显示 2026-06-30 的相关条目，内容是 long-context time-series reasoning/retrieval benchmark，并强调 agentic retrieval；但 arXiv 原始发布日期为 2026-02-15，超出本次三个月窗口。建议单独跟踪 GitHub 项目 [AI-X-Labs/TS-Haystack](https://github.com/AI-X-Labs/TS-Haystack)，不作为今日主条目。

## 1. 时间序列基础模型最新研究

### [2026-06-30] Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models

- 日期：2026-06-30
- 来源：[arXiv](https://arxiv.org/abs/2606.31804)
- 简短摘要：提出 `STOIC`，将 STGNN 点预测后的时空残差重组为表格表示，并利用 tabular foundation model 做 zero-shot calibration，从而给能源图时序预测提供更可靠的预测区间。
- 相关性判断：高。它不是通用 TSFM 预训练论文，但把 foundation model 用在能源时序的不确定性校准上，对光伏/电力预测 Agent 的风险控制很有价值。

### [2026-06-27] MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：提出轻量级 real-time 宏观 TSFM，重点处理 temporal contamination 与 revision bias，使训练、评测和实际可见数据保持 vintage-consistent。
- 相关性判断：高。它把 TSFM 的“可部署性”和“信息泄漏控制”放到核心位置，对需要审计的数据分析 Agent 很关键。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：把 forecasting、estimation、prediction interval 与 model selection 统一到 decision-theoretic pretraining 里，目标是近似具体决策目标下的最优规则，而不只是降低平均预测误差。
- 相关性判断：高。它提供了“按下游决策训练基础模型”的路线，对 agentic forecasting 的模型选择和效用函数设计有直接启发。

### [2026-06-25] Unified Zero-Shot Time Series Forecasting: A Darts Foundation

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27438)
- 简短摘要：在 Darts 生态中提供统一的 `FoundationModel` 接口，覆盖 Chronos-2、TimesFM 2.5、TiRex、PatchTST-FM 等模型，支持 zero-shot、fine-tuning、uncertainty estimation 与 backtesting。
- 相关性判断：中高。它的价值偏工程接口层，适合作为时序 Agent 的 forecasting tool backend 或模型路由基础。

### [2026-06-25] Pretrained Time-Series Foundation Models for Financial Return Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27100)
- 简短摘要：比较 TimeGPT、TimesFM、Moirai、Chronos 等预训练 TSFM 与从零训练神经基线在金融收益率预测中的表现，并强调相对 random-walk 的增益有限。
- 相关性判断：中高。它提醒 Agent 系统不能盲信 TSFM 排名，尤其在高噪声金融时序中需要显式不确定性、基线和统计检验。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-17] DeXposure-Claw: An Agentic System for DeFi Risk Supervision

- 日期：2026-06-17
- 来源：[arXiv](https://arxiv.org/abs/2606.19501)
- 简短摘要：提出 forecast-grounded agentic supervision 系统：先由 DeXposure-FM 预测 DeFi 暴露网络，再由确定性 monitor、stress scenario、data-health gate 和 confidence gate 约束 LLM 生成监管票据。
- 相关性判断：高。它是“预测模型 + 规则证据 + LLM 决策”的 Agent 范式，尤其适合高风险时序监督场景；论文称代码在 `EVIEHub/DeXposure-Claw`，但本次打开 GitHub 返回 404，日期和可用性需继续复核。

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series / TimeClaw

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 将通用 LLM 包装为 time-series-native agent harness，包含 MCP 工具运行时、episodic memory、能力演化循环，以及 CiK、TSRBench、TSAIA 三类 benchmark 评测。
- 相关性判断：最高。它是目前最接近“可跑的时序 Agent 基座”的公开项目之一，覆盖工具调用、记忆、轨迹复用和 benchmark runner。

### [2026-05-28] KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：采用 LLM reasoner + TSFM forecaster 的 modular reason-then-forecast 设计，让 LLM 多轮调用统计工具形成 morphology description，再把语义先验注入 TSFM 解码器。
- 相关性判断：最高。它直接把语义 reasoning 与数值预测融合，并提供 T-STAR 轨迹语料、SFT、multimodal alignment 和 turn-level credit assignment。

### [2026-05-24] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045)
- 简短摘要：将下一代时序任务形式化为 `task file + workspace + validation interface`，并提出由 agents、skills、rules、memory、evaluation、protocols 组成的 practical harness。
- 相关性判断：最高。它补的是时序 Agent 最缺的任务协议和评测基础设施，适合长期作为本仓库的 harness 设计参考。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 拆为宏观趋势、微观模式、上下文整合和最终 synthesis 等阶段，强调外部上下文与结构化推理对预测的贡献。
- 相关性判断：高。它代表“forecasting pipeline agent 化”的路线，但相比 TimeClaw/AION，公开工程 harness 信号较弱。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` benchmark 和 `TSAlign` 框架，将时间序列 reasoning 拆为 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务，并把时序 patch 表征对齐到 LLM embedding space。
- 相关性判断：最高。它把时序 reasoning 从图形识别推进到认知任务分解，是构建 reasoning model/harness 的关键参考。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw numerical input、coding agent 和混合模式在时序理解任务上的表现；代码执行能提升表现，但最佳 agent 仍有约 22%-34% 错误，错误集中在统计细节与边界条件。
- 相关性判断：高。它直接回答“LLM coding agent 是否足以处理时序问题”，对工具选择、验证器和多轮审查设计很重要。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建 240 个任务、2680 轮交互、覆盖 8 个真实领域的多轮时序 reasoning benchmark，并提供统一评测协议和 leaderboard。
- 相关性判断：高。它把 reasoning 评测从单轮 QA 推向真实分析流程，尤其适合验证 memory、uncertainty handling 和 domain decision making。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：使用模板与 LLM agent 自动生成大规模时序 reasoning benchmark，支持多域题目、自动验证和可视化。
- 相关性判断：中高。它更偏 benchmark data factory，但对持续构造专用 reasoning 任务非常实用。

## 4. GitHub 上值得跟踪的新项目

### 时间序列

#### [2026-06-30，不确定] AI-X-Labs/TS-Haystack

- 日期：DailyArXiv 显示 2026-06-30；arXiv 原始发布日期 2026-02-15，日期口径不一致，故标注不确定并降优先级。
- 来源：[GitHub](https://github.com/AI-X-Labs/TS-Haystack) / [arXiv](https://arxiv.org/abs/2602.14200)
- 简短摘要：长上下文时间序列 retrieval/reasoning benchmark，覆盖 direct retrieval、temporal reasoning、multi-step reasoning、contextual anomaly 等任务，并提供数据生成和 HuggingFace 下载脚本。
- 相关性判断：高但窗口外。它非常贴近 time-series reasoning 和 agentic retrieval，但由于原始论文日期超窗，本次不放入主研究排序。

#### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（以关联 arXiv 论文与仓库 README 信息近似）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：包含 `main.py` CLI、FastMCP 工具服务、memory bank、benchmark loader、结果记录和多模型 provider 层，是完整 time-series agent/harness 参考实现。
- 相关性判断：最高。优先读代码：`timeclaw/tools/server.py`、`timeclaw/memory/`、`timeclaw/evaluation/`。

#### [2026-06-20] EIT-NLP/CognitiveTSR

- 日期：2026-06-20（以关联 arXiv 日期近似）
- 来源：[GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：`TSCognition/TSAlign` 官方代码入口，用于多维时间序列 cognitive reasoning benchmark 与模型对齐实验。
- 相关性判断：高。适合补齐 reasoning 数据集和模型评测代码，尤其关注任务 schema 与评测脚本。

#### [2026-06-25] DC-research/TempoWAVE

- 日期：2026-06-25（以关联论文日期近似）
- 来源：[GitHub](https://github.com/DC-research/TempoWAVE) / [arXiv](https://arxiv.org/abs/2606.26487)
- 简短摘要：通过 multi-wavelet number embeddings 改善 LLM 对连续数值和多尺度波动的表达能力，仓库公开预训练、SFT、evaluation 和 tests 工作流。
- 相关性判断：高。它不是 agent harness，但可作为时序 Agent 的 numeric interface 组件跟踪。

#### [2026-05-24，不确定] microsoft/aion

- 日期：2026-05-24（以关联 arXiv 日期近似；本次 GitHub 页面打开不稳定，需后续复核）
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub 搜索入口](https://github.com/search?q=microsoft+aion+time+series&type=repositories)
- 简短摘要：AION 论文描述了面向 realistic time-series tasks 的 practical harness，可能包含 task/workspace/validation 规范和 agent evaluation 组件。
- 相关性判断：最高但需复核仓库状态。若代码公开稳定，应作为后续 daily tracking 的重点。

#### [2026-04-11] magwiazda/TimeSeriesExamAgent

- 日期：2026-04-11（以关联论文日期近似）
- 来源：[GitHub](https://github.com/magwiazda/TimeSeriesExamAgent) / [arXiv](https://arxiv.org/abs/2604.10291)
- 简短摘要：自动生成时序 reasoning 考题、答案与验证逻辑的项目，可用于构建私有领域 benchmark。
- 相关性判断：中高。更偏数据生产与评测扩展，而不是预测 Agent 运行时。

### 光伏功率预测

#### [2026-06-05] Cold-Start Photovoltaic Forecasting with TSFMs

- 日期：2026-06-05（以论文日期近似）
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：论文没有在摘要中给出官方 GitHub；建议后续继续检索题名、作者和机构页，确认是否发布代码或数据处理脚本。
- 相关性判断：最高。它直接命中“光伏功率预测 + 时间序列基础模型 + 冷启动部署”。

## 5. 光伏功率预测最新研究

### [2026-06-05] Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：针对 PV 电站投运初期缺少目标站历史观测的问题，先用站点元数据和气象协变量生成 physics-informed synthetic production history，再让 TSFM 通过 inference-time conditioning 做 zero-shot/cold-start forecasting。实验覆盖 440 个 PV sites、四个数据集和多气候区；协变量感知 TSFM 明显优于传统 baseline。
- 相关性判断：最高。它同时关联 `TSFM`、`光伏功率预测`、`冷启动` 和 `可部署工作流`，应作为光伏方向本周首要阅读。

### [2026-06-30] Relational and Sequential Conformal Inference for Energy Time Series over Graphs via Foundation Models

- 日期：2026-06-30
- 来源：[arXiv](https://arxiv.org/abs/2606.31804)
- 简短摘要：虽然聚焦 energy demand / district heating network，不是 PV 专题，但它解决能源时序的图结构不确定性校准问题。
- 相关性判断：中高。对光伏功率预测中的区域电站群、预测区间、调度风险评估有迁移价值。

### [2026-02-11，窗口外] LightGTS-Cov: Covariate-Enhanced Time Series Forecasting

- 日期：2026-02-11，超出本次三个月窗口
- 来源：[arXiv](https://arxiv.org/abs/2602.10412)
- 简短摘要：提出协变量增强的轻量级 TSFM，并在真实工业场景中包含长期光伏功率预测案例。
- 相关性判断：高但窗口外。今天不纳入主排序，但后续若需要构建光伏 baseline，应回补阅读。

## 6. 观察与下一步

- 今日新增最值得跟进：`STOIC`、`DeXposure-Claw`、冷启动光伏 TSFM。
- 如果今天只精读三篇：先读 `TimeClaw` 代码与论文，再读 `TSCognition/TSAlign`，最后读冷启动光伏 TSFM。
- 对本仓库后续最有工程价值的线索：`TimeClaw` 的 MCP tools/runtime、`AION` 的 task-workspace-validation 协议、`KairosAgent` 的 morphology-conditioned forecasting。
- 今天是周四（2026-07-02），不满足“每周五更新周报”的条件，未更新 weekly brief。

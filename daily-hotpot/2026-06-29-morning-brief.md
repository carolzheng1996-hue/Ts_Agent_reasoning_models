# 2026-06-29 时间序列 Agent / Reasoning / Foundation Model 与光伏功率预测晨间简报

检索时间：2026-06-29 08:00-11:03 Asia/Shanghai  
时间窗口：2026-03-29 至 2026-06-29  
筛选口径：优先保留 arXiv、官方项目页、GitHub、HuggingFace 中可确认日期的条目；额外补检 `DailyArXiv`。用户指定的 `timeseries` 分支当前未公开可访问，实际回退检查其 `master` 分支中的 `Time Series` 板块与 2026-06-29 自动更新提交；三个月外条目不纳入主条目；若无法确认日期则标注为 `不确定` 并降低优先级。

## 今日摘要

- 时间序列基础模型主线仍然是两条：一条是把 TSFM 做成更通用的数值接口与 token 化体系，另一条是把 TSFM 放进金融、医疗等高噪声真实场景里检验鲁棒性。
- 时间序列 Agent 与 reasoning 继续集中在 `harness + memory + benchmark + 可审计轨迹` 这条线上，`TimeClaw`、`Nexus`、`TSCognition` 仍是最关键的三组工作。
- `DailyArXiv` 的最新自动更新继续主要贡献 forecasting 本体增量，其中 `Speaking Numbers to LLMs` 和强线性基线工作最值得并入今天判断。
- 光伏功率预测栏目里，近三个月的有效增量主要集中在 `diffusion / transformer / multimodal VLM / edge deployment` 四个方向。
- 项目跟踪栏目已按新规则改成 `GitHub 和 HuggingFace`，并按日期从近到远排序；若 GitHub 与 HuggingFace 对应同一项目，本简报只保留一个条目。

## 0. DailyArXiv 补检结论

- 检查时间：2026-06-29 10:42 Asia/Shanghai
- 来源：[DailyArXiv 仓库](https://github.com/zezhishao/DailyArXiv) / [2026-06-29 自动更新提交](https://github.com/zezhishao/DailyArXiv/commit/4c73ad96fed180db407f5061fe6aad1331281afe)
- 分支状态：GitHub API 当前仅返回 `master` 分支，未发现公开可访问的 `timeseries` 分支；本次实际检查对象是 `master` 下的 `Time Series` 板块。
- 与本简报最相关的补充条目：
  - `How Good Can Linear Models Be for Time-Series Forecasting?`（2026-06-25，[arXiv](https://arxiv.org/abs/2606.27282)）：强预处理线性基线在多组 benchmark 上仍然能压过不少深度模型。相关性判断：中高。
  - `Speaking Numbers to LLMs: Multi-Wavelet Number Embeddings for Time Series Forecasting`（2026-06-25，[arXiv](https://arxiv.org/abs/2606.26487)）：从数值接口层增强 LLM 对时序数字的表达。相关性判断：高。
  - `End-to-end probabilistic hierarchical forecasting of large hierarchies via probabilistic top-down`（2026-06-25，[arXiv](https://arxiv.org/abs/2606.26774)）：更快的层级概率预测路线。相关性判断：中。
  - `FoReco and FoRecoML: A Unified Toolbox for Forecast Reconciliation in R`（2026-06-25，[arXiv](https://arxiv.org/abs/2604.27696)）：forecast reconciliation 工具链。相关性判断：中。

## 1. 时间序列基础模型最新研究

### [2026-06-25] Pretrained Time-Series Foundation Models for Financial Return Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27100)
- 简短摘要：系统比较 TimeGPT、TimesFM-2.5、Moirai-2.0、Chronos/Chronos-2 与 NBEATS、NHITS、PatchTST、iTransformer 等模型在美股收益率预测中的表现。论文结论比较克制：预训练 TSFM 的平均排名更强，但对 random walk 的显著优势很稀疏。
- 相关性判断：高。它直接测试 TSFM 在高噪声金融时序中的真实价值，对金融 Agent 的模型选择和置信度控制很重要。

### [2026-06-25] Speaking Numbers to LLMs: Multi-Wavelet Number Embeddings for Time Series Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.26487) / [DailyArXiv 更新](https://github.com/zezhishao/DailyArXiv/commit/4c73ad96fed180db407f5061fe6aad1331281afe)
- 简短摘要：提出 TempoWave，把每个标量观测编码成 multi-wavelet、digit-wise embedding，以改进 LLM 对连续数值、局部波动和全局结构的建模。论文在五个 context-enriched forecasting benchmark 上报告了优于标准数值 tokenization 的结果。
- 相关性判断：高。它虽然不是传统 TSFM，但非常接近“LLM 作为时序接口”的关键层，直接影响 reasoning/agent 对数字序列的读取质量。

### [2026-06-25] How Good Can Linear Models Be for Time-Series Forecasting?

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27282) / [DailyArXiv 更新](https://github.com/zezhishao/DailyArXiv/commit/4c73ad96fed180db407f5061fe6aad1331281afe)
- 简短摘要：系统搜索 lookback、local normalization、regularization 与 augmentation 等超参后，作者发现认真调参的 Ridge 基线在多个 benchmark 上可超过既有线性方法，并在六个 benchmark 上优于 Transformer、MLP、CNN 基线。
- 相关性判断：中高。它不是 foundation model，但对 TSFM/Agent 研究的评测设计很关键，能有效抬高 baseline 下限。

### [2026-06-05] GlucoFM-Bench: Benchmarking Time-Series Foundation Models for Blood Glucose Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.06881)
- 简短摘要：在 15 个糖尿病相关公开数据集、1117 名个体上系统评测 Chronos-2、TimesFM 等 TSFM 和传统监督模型，覆盖 zero-shot、few-shot、full-shot、上下文长度和预测步长变化。结果显示 TSFM 在低样本场景有优势，但数据充分时轻量 LSTM 仍然很强。
- 相关性判断：中高。它提供了一个高价值医疗垂直 benchmark，可为 Agent 在高风险时序场景中的 calibration 提供参考。

### [2026-05-31] Time Series as Language: A Universal Tokenizer for General-Purpose Time Series Foundation Models

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.09861)
- 简短摘要：提出 UniTok 与 UniTok-FM，把连续时间序列离散为 token，并用 next-token prediction 训练通用 TS foundation model。论文强调一个统一模型即可覆盖 forecasting、generation、classification，并支持 training-free in-context inference。
- 相关性判断：高。若时间序列能被稳定 token 化，时序 foundation model 与 LLM/Agent 的接口会明显更自然。

### [2026-04-12] WaveMoE: A Wavelet-Enhanced Mixture-of-Experts Foundation Model for Time Series Forecasting

- 日期：2026-04-12
- 来源：[arXiv](https://arxiv.org/abs/2604.10544)
- 简短摘要：将 wavelet token 与时间域 token 放入统一时轴，并通过共享 expert routing 协调双路径 MoE，以增强周期性和局部高频模式建模。实验覆盖 16 个 benchmark，强调频域信息对通用 TSFM 的增益。
- 相关性判断：中高。频域 expert-routing 很适合接入 Agent 的自动诊断与模型路由工作流。

### [2026-04-05] A Family of Open Time-Series Foundation Models for the Radio Access Network

- 日期：2026-04-05
- 来源：[arXiv](https://arxiv.org/abs/2604.04271)
- 简短摘要：提出面向 RAN 场景的 TimeRAN 与配套 DataPile，数据规模超过 355K 条时间序列和 0.56B measurements，覆盖 anomaly detection、classification、forecasting、imputation，并展示了真实 5G testbed 集成。
- 相关性判断：中。它代表 TSFM 正在向行业化数据堆、多任务头和真实系统闭环推进。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-03] Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：把 generalist LLM 包装成 time-series-native harness，核心包括可执行时序工具、episodic multimodal memory 和 capability-evolution loop，评测覆盖 CiK、TSRBench、TSAIA。
- 相关性判断：高。它是目前最接近“可运行时序 Agent 系统”的公开实现之一。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：将 forecasting 拆成宏观波动分析、微观波动分析、上下文整合与最终 forecast synthesis 等多个 Agent 阶段，强调真实预测任务依赖新闻、事件等非结构化信息。
- 相关性判断：高。它把 forecasting 明确重述成 agentic reasoning problem，对多 Agent 任务分解很重要。

### [2026-05-11] TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning

- 日期：2026-05-11
- 来源：[arXiv](https://arxiv.org/abs/2605.10038)
- 简短摘要：提出 Explore、Compare、Distill、Reinject 四阶段循环，把多条工具执行轨迹蒸馏为层级经验，再在推理时回注到冻结基座模型中。
- 相关性判断：高。它不只是 tool-use prompt，而是在研究时序 Agent 如何从探索过程本身积累能力。

### [2026-04-21] Time Series Augmented Generation for Financial Applications

- 日期：2026-04-21
- 来源：[arXiv](https://arxiv.org/abs/2604.19633)
- 简短摘要：提出 TSAG，用工具增强的方式评估 LLM agent 在金融时间序列任务中的推理、工具选择和幻觉控制能力，并构建 100 题金融定量 benchmark。
- 相关性判断：中高。它更偏金融工具增强与评测框架，但可作为时序 Agent harness 的组成部分。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 TSCognition benchmark，收集约 41K QA 样本，并把时序 reasoning 拆为 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务；同时提出 TSAlign，把时间序列表征注入 LLM embedding space。
- 相关性判断：高。它把“时序理解”从单纯曲线拟合扩展到语义、上下文与行动决策，是当前最像认知时序推理 benchmark 的新工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较三种时序推理模式：直接给原始数值、作为 coding agent 写 Python、以及两者结合。结果显示 coding agent 虽优于纯数值输入，但最优 agent 在两个 benchmark 上仍有约 22%-34% 错误率。
- 相关性判断：高。它直接回答“代码代理到底能不能处理时序推理”这一关键问题。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：提出 multi-turn 时序推理 benchmark，覆盖 240 个任务、2680 轮对话、8 个真实领域，并配套 TimeSage 结构化 agent 与 leaderboard。
- 相关性判断：高。它把时序 reasoning 从单轮题目推进到更接近真实工作流的多轮交互场景。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：提出用模板与 LLM agent 自动构建大规模时序推理 benchmark 的方法，覆盖 pattern recognition、similarity、anomaly、causality 等能力，并开放多域 exam-generation pipeline。
- 相关性判断：中高。它不直接做推理模型，但为时序 reasoning 的数据构造和评测扩展提供了重要基础设施。

## 4. 光伏功率预测最新研究

### [2026-05-27] Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting

- 日期：2026-05-27
- 来源：[arXiv](https://arxiv.org/abs/2605.28324)
- 简短摘要：把多变量光伏功率预测重述成 conditional diffusion 的时序 inpainting 问题，用 mask-based 机制在保留历史观测的同时逐步重建未来时段，并在 GEFCom2014 上验证短期预测表现。
- 相关性判断：高。它代表光伏 forecasting 正在吸收更强的生成式建模路线，尤其适合处理不确定性与多变量联合结构。

### [2026-04-27] SolarTformer: A Transformer Based Deep Learning Approach for Short Term Solar Power Forecasting

- 日期：2026-04-27
- 来源：[arXiv](https://arxiv.org/abs/2604.24306)
- 简短摘要：提出基于 attention 的 SolarTformer，用气象数据和站点元数据做短期 solar power forecasting，强调跨站点泛化与阴天条件鲁棒性。
- 相关性判断：中高。它不是最激进的新范式，但代表了 transformer 在短期光伏预测上的稳健工程化路线。

### [2026-04-10] On-Meter Graph Machine Learning: A Case Study of PV Power Forecasting for Grid Edge Intelligence

- 日期：2026-04-10
- 来源：[arXiv](https://arxiv.org/abs/2604.19800)
- 简短摘要：研究如何把 GCN 与 GraphSAGE 部署到边缘智能电表上做 PV power forecasting，并重点讨论 ONNX/ONNX Runtime 与自定义算子的落地问题。
- 相关性判断：中高。它把光伏预测从“模型准确率”延伸到“边缘部署可行性”，对后续 agentized grid-edge workflow 很有启发。

### [2026-04-05] Solar-VLM: Multimodal Vision-Language Models for Augmented Solar Power Forecasting

- 日期：2026-04-05
- 来源：[arXiv](https://arxiv.org/abs/2604.04145) / [GitHub](https://github.com/rhp413/Solar-VLM)
- 简短摘要：提出 LLM 驱动的多模态 PV forecasting 框架，联合时序观测、卫星图像和天气文本信息，并用 graph learner 建模多站点空间依赖。
- 相关性判断：高。它是当前光伏预测里最接近“多模态 reasoning + 大模型接口”的工作之一。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 5.1 时间序列

#### [2026-06-17] AkshajKashyap/autoresearch-timeseries-agent

- 日期：2026-06-17
- 来源：[GitHub](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
- 简短摘要：可复现实验型 time-series forecasting benchmark，包含 synthetic/CSV data、baseline models、diagnostics、reports、plots、CI，以及 deterministic experiment agent。
- 相关性判断：中高。偏工程 benchmark 和实验自动化，适合作为轻量 local harness 参考。

#### [2026-06-15] Iambackup/granite-timeseries-ttm-r2

- 日期：2026-06-15
- 来源：[HuggingFace](https://huggingface.co/Iambackup/granite-timeseries-ttm-r2)
- 简短摘要：HuggingFace 上近三个月内可确认的新时间序列 forecasting 模型仓之一，标签直接指向 `granite-tsfm`、`time-series-forecasting` 与 foundation model 路线。
- 相关性判断：中。它更像模型分发节点而不是完整研究项目，但对跟踪 HF 上的 TSFM 生态变化有信号价值。

#### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：time-series-native agent harness，支持 CiK、TSRBench、TSAIA，包含 MCP 工具 server、memory bank、evaluation runner 和统一 CLI。
- 相关性判断：最高。它同时覆盖 timeseries agent、harness、benchmark、memory、tool-use 五条主线。

#### [2026-04-12] ztxtech/aion

- 日期：2026-04-12
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：OpenCode-based time-series harness，目标是 structured forecasting、contextual reasoning、tool use 和 validation-driven workflow。
- 相关性判断：高。更偏工程系统与 workspace/critic 组织方式，适合作为 harness 架构参考。

### 5.2 光伏功率预测

#### [2026-06-25] lujingxiang/LNHF

- 日期：2026-06-25
- 来源：[GitHub](https://github.com/lujingxiang/LNHF)
- 简短摘要：Lead-Time-Aware NWP correction 与 heterogeneous dual-branch fusion Transformer 的多步光伏功率预测实现。
- 相关性判断：中高。虽然项目热度还低，但主题非常贴近实际多步 PV forecasting。

#### [2026-06-07] USTC-AI4EEE/Tyan

- 日期：2026-06-07
- 来源：[GitHub](https://github.com/USTC-AI4EEE/Tyan)
- 简短摘要：USTC AI4EEE 团队公开的大模型家族入口，描述中明确包含 weather forecasting、wind power prediction 与 photovoltaic power prediction。
- 相关性判断：中。方向重要，但当前公开仓库内容还比较早期，适合作为观察位而不是立即复现对象。

#### [2026-05-28] Jouqio/climate-aware-pv-forecasting

- 日期：2026-05-28
- 来源：[GitHub](https://github.com/Jouqio/climate-aware-pv-forecasting)
- 简短摘要：强调 climate-aware validation 与 deterministic target leakage 修正的可复现实验框架，使用 NASA POWER 数据。
- 相关性判断：中高。比单纯模型堆叠更关注验证协议和数据泄漏问题，工程价值不错。

#### [2026-04-05] rhp413/Solar-VLM

- 日期：2026-04-05
- 来源：[GitHub](https://github.com/rhp413/Solar-VLM)
- 简短摘要：配套 `Solar-VLM` 论文的代码仓，聚焦时序、图像、文本三模态联合的光伏功率预测。
- 相关性判断：高。它是本期最值得持续跟踪的光伏多模态项目之一。

- 说明：本次 HuggingFace API 检索到近三个月时间序列模型仓，但未筛出独立且成熟的光伏功率预测 HuggingFace 项目；同时，若 GitHub 与 HuggingFace 指向同一项目，本简报已按规则去重保留单一条目。

## 观察与下一步

- 时间序列主线没有改变，仍然是 `TSFM 真实场景评测` + `time-series-native harness` + `multi-turn reasoning benchmark`。
- 新增的光伏栏目显示，近期增量最值得关注的是 `多模态 VLM`、`扩散模型` 和 `边缘部署` 三条线，而不是传统单一气象特征回归。
- 若只选三项时间序列优先跟踪，建议顺序仍是：`TimeClaw`、`TSCognition/TSAlign`、`Nexus`。
- 若只选两项光伏优先跟踪，建议顺序是：`Solar-VLM`、`Inpainting-Style Conditional Diffusion for Multivariable Time Series Forecasting`。

## 检索记录

- 时间序列论文查询：`site:arxiv.org "time series foundation model" 2026`、`site:arxiv.org "time series agent" 2026`、`site:arxiv.org "time series reasoning" 2026`。
- 光伏论文查询：`"photovoltaic power forecasting"`、`"solar power forecasting"`、`"PV power forecasting"`、`"photovoltaic generation forecasting"` 的 arXiv API 时间倒序检索。
- `DailyArXiv` 补检：检查 GitHub API 分支列表、2026-06-29 自动更新提交，以及 `README.md` 中的 `Time Series` 板块；确认当前公开仓库未暴露 `timeseries` 分支，因此实际以 `master` 作为替代来源。
- 项目查询：GitHub Search API 与 HuggingFace Models API；项目栏按日期从近到远排序，并对 GitHub/HuggingFace 同项目条目去重。

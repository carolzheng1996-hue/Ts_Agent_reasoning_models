# 2026-06-29 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-06-29 08:00-10:42 Asia/Shanghai  
时间窗口：2026-03-29 至 2026-06-29  
筛选口径：优先保留 arXiv、官方项目页、GitHub 仓库中可确认日期的条目；额外补检 `DailyArXiv` 仓库。用户指定的 `timeseries` 分支当前未公开可访问，实际回退检查其 `master` 分支中的 `Time Series` 板块与 2026-06-29 自动更新提交；超过三个月的内容不纳入主条目；日期无法确认的条目标注为“不确定”并降低优先级。

## 今日摘要

- 时间序列基础模型近一个月的主线已经很清楚：一条是把 TSFM 做成更通用的 token 化语言接口，另一条是把 TSFM 放进金融、医疗、RAN 这类更垂直、更难的真实场景里检验泛化与可靠性。
- 时间序列 Agent 研究正在从“会不会调用工具”转向“有没有完整 harness、memory、validation 和可审计轨迹”。`TimeClaw`、`Nexus`、`TSAG` 分别代表运行时、任务分解和金融工具增强三条路线。
- 时间序列 reasoning 研究在 5-6 月明显加速，最新工作已经从单轮 QA 走向 multi-turn benchmark、认知任务分解和 coding-agent 诊断，说明社区开始把时序推理当作独立能力而不只是 forecasting 的附属品。
- `DailyArXiv` 的 2026-06-29 自动更新补进了一批 2026-06-25 的时间序列论文，其中最值得并入今天观察的是 `How Good Can Linear Models Be for Time-Series Forecasting?`、`Speaking Numbers to LLMs` 和层级预测/对账工具链相关工作。
- GitHub 上真正值得跟踪的项目还不算多，但 `TimeClaw`、`aion`、`TimeSeriesExamAgent` 已经体现出“bench + tool + harness + reproducibility”的工程走向。

## 0. DailyArXiv 补检结论

- 检查时间：2026-06-29 10:42 Asia/Shanghai
- 来源：[DailyArXiv 仓库](https://github.com/zezhishao/DailyArXiv) / [2026-06-29 自动更新提交](https://github.com/zezhishao/DailyArXiv/commit/4c73ad96fed180db407f5061fe6aad1331281afe)
- 分支状态：GitHub API 当前仅返回 `master` 分支，未发现公开可访问的 `timeseries` 分支；本次实际检查对象是 `master` 下的 `Time Series` 板块。
- 补检结果：2026-06-29 的自动更新把一批 2026-06-25 的 time-series 论文纳入列表。与本晨报主题最相关的新增/补充条目是：
  - `How Good Can Linear Models Be for Time-Series Forecasting?`（2026-06-25，arXiv:2606.27282）：提醒近期 foundation model/大模型热度下，强预处理的线性基线依然可能在标准 benchmark 上击败 Transformer/MLP/CNN。相关性判断：中高。它不是 Agent/Reasoning 论文，但对后续评测 harness 的 baseline 选择非常重要。
  - `Speaking Numbers to LLMs: Multi-Wavelet Number Embeddings for Time Series Forecasting`（2026-06-25，arXiv:2606.26487）：提出 TempoWave，把数值映射为 multi-wavelet digit embeddings，增强 LLM 对连续数值和多尺度结构的表达。相关性判断：高。它直接连接 LLM 接口与时序数字建模，是 reasoning/agent 能否稳定读懂数值序列的关键问题。
  - `End-to-end probabilistic hierarchical forecasting of large hierarchies via probabilistic top-down`（2026-06-25，arXiv:2606.26774）：针对大规模层级时序给出更快的概率 top-down 路线。相关性判断：中。它更偏 forecasting 系统，但对多层级业务 Agent 的 coherent forecast 汇总有现实价值。
  - `FoReco and FoRecoML: A Unified Toolbox for Forecast Reconciliation in R`（2026-06-25，arXiv:2604.27696）：统一 cross-sectional / temporal / cross-temporal reconciliation 工具链。相关性判断：中。更像实用工具箱，但值得在时序 Agent 的后处理与约束一致性环节留意。

## 1. 时间序列基础模型最新研究

### Pretrained Time-Series Foundation Models for Financial Return Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27100)
- 简短摘要：系统比较 TimeGPT、TimesFM-2.5、Moirai-2.0、Chronos/Chronos-2 与 NBEATS、NHITS、PatchTST、iTransformer 等从头训练模型在美股收益率预测中的表现。论文结论比较克制：预训练 TSFM 的平均排名更强，但对 random walk 的显著优势很稀疏。
- 相关性判断：高。它直接回答“TS foundation model 放进高噪声真实金融时序后是否还成立”，对金融 Agent 的模型选择、置信度控制和 tool-routing 很有参考价值。

### Time Series as Language: A Universal Tokenizer for General-Purpose Time Series Foundation Models

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.09861)
- 简短摘要：提出 UniTok 与 UniTok-FM，把连续时间序列离散为 token，并用 next-token prediction 训练通用 TS foundation model。论文强调一个统一模型即可覆盖 forecasting、generation、classification，并支持 training-free in-context inference。
- 相关性判断：高。若时间序列能被稳定 token 化，时序 foundation model 与 LLM/Agent 的接口会更自然，后续把“序列片段 + 文本上下文 + 工具结果”统一到同一推理栈的成本会更低。

### GlucoFM-Bench: Benchmarking Time-Series Foundation Models for Blood Glucose Forecasting

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.06881)
- 简短摘要：在 15 个糖尿病相关公开数据集、1117 名个体上系统评测 Chronos-2、TimesFM 等 TSFM 以及传统监督模型，覆盖 zero-shot、few-shot、full-shot、上下文长度和预测步长变化。结果显示 TSFM 在低样本场景有优势，但数据充分时轻量 LSTM 仍然很强。
- 相关性判断：中高。它提供了一个高价值垂直 benchmark，适合拿来思考 Agent 在医疗时序场景里如何做风险提示、个体差异建模和置信度表达。

### Speaking Numbers to LLMs: Multi-Wavelet Number Embeddings for Time Series Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.26487) / [DailyArXiv 2026-06-29 更新](https://github.com/zezhishao/DailyArXiv/commit/4c73ad96fed180db407f5061fe6aad1331281afe)
- 简短摘要：提出 TempoWave，把每个标量观测编码成 multi-wavelet、digit-wise embedding，并直接覆盖标准 token 表征，从而让 LLM 更稳定地处理连续数值、局部波动与全局结构。论文在五个 context-enriched forecasting benchmark 上报告了优于标准数值 tokenization 的结果。
- 相关性判断：高。它不是传统 TS foundation model，但非常接近“LLM 作为 time-series interface”这一层，直接影响时序 reasoning/agent 能否读对数值、保留顺序和尺度信息。

### How Good Can Linear Models Be for Time-Series Forecasting?

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27282) / [DailyArXiv 2026-06-29 更新](https://github.com/zezhishao/DailyArXiv/commit/4c73ad96fed180db407f5061fe6aad1331281afe)
- 简短摘要：系统搜索 lookback、local normalization、regularization 和 augmentation 等超参后，作者发现经过认真调参的 Ridge 基线可在八个 benchmark 中的大多数数据集-预测步组合上超过既有线性方法，并在六个 benchmark 上优于 Transformer、MLP、CNN 基线。
- 相关性判断：中高。它本身不是 foundation model，但对 foundation model/Agent 研究的实验设计很关键：如果 baseline 不够强，后续关于 Agent 或 TSFM 的结论会被高估。

### WaveMoE: A Wavelet-Enhanced Mixture-of-Experts Foundation Model for Time Series Forecasting

- 日期：2026-04-12
- 来源：[arXiv](https://arxiv.org/abs/2604.10544)
- 简短摘要：将 wavelet token 与时间域 token 放入统一时轴，并通过共享 expert routing 协调双路径 MoE，以增强周期性和局部高频模式建模。实验覆盖 16 个 benchmark，强调频域信息对通用 TSFM 的增益。
- 相关性判断：中高。频域 expert-routing 很适合接入 Agent 的自动诊断流程，尤其适用于“先识别周期/突变/噪声结构，再决定调用何种模型或解释模板”的工作流。

### A Family of Open Time-Series Foundation Models for the Radio Access Network

- 日期：2026-04-05
- 来源：[arXiv](https://arxiv.org/abs/2604.04271)
- 简短摘要：提出面向 RAN 场景的 TimeRAN 与配套 DataPile，数据规模超过 355K 条时间序列、0.56B measurements，覆盖 anomaly detection、classification、forecasting、imputation，并展示了真实 5G testbed 集成。
- 相关性判断：中。它代表 TSFM 正在向行业化数据堆、多任务头和真实系统闭环部署推进，对后续行业 Agent 的“模型即工具”封装方式很有启发。

## 2. 时间序列建模 Agent 最新研究

### Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：把 generalist LLM 包装成 time-series-native harness，核心包括可执行时序工具、episodic multimodal memory 和 capability-evolution loop，评测覆盖 CiK、TSRBench、TSAIA。官方仓库给出了 CLI、memory bank 和 benchmark runner。
- 相关性判断：高。它是目前最接近“可运行时序 Agent 系统”的公开实现之一，不只是论文概念，而是已经有 runtime、工具接口和复现实验骨架。

### TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning

- 日期：2026-05-11
- 来源：[arXiv](https://arxiv.org/abs/2605.10038)
- 简短摘要：提出 Explore、Compare、Distill、Reinject 四阶段循环，把多条工具执行轨迹比较后蒸馏成层级经验，再在推理时回注到冻结基座模型中。重点解决“数值可验证任务里，早期成功会让 Agent 过早收缩工具先验”的问题。
- 相关性判断：高。它不是简单的 tool-use 提示工程，而是在研究时序 Agent 如何从探索过程本身积累可复用能力。

### Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：将 forecasting 拆成宏观波动分析、微观波动分析、上下文整合与最终 forecast synthesis 等多个 Agent 阶段，强调真实预测任务依赖新闻、事件和其他非结构化信息，而不只是数值外推。
- 相关性判断：高。它把 forecasting 明确重述成 agentic reasoning problem，对多 Agent 任务分解、上下文注入和解释型预测轨迹都很重要。

### Time Series Augmented Generation for Financial Applications

- 日期：2026-04-21
- 来源：[arXiv](https://arxiv.org/abs/2604.19633)
- 简短摘要：提出 TSAG，用工具增强的方式评估 LLM agent 在金融时间序列任务中的推理、工具选择和幻觉控制能力，并构建 100 题的金融定量 benchmark 比较多种前沿模型。
- 相关性判断：中高。它更偏金融工具增强与评测框架，但“可验证工具链 + 代理评测”这条路线非常适合作为时序 Agent harness 的一部分。

## 3. 时间序列 reasoning 模型最新研究

### From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 TSCognition benchmark，收集约 41K QA 样本，并把时序 reasoning 拆为 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务；同时提出 TSAlign，把时间序列表征注入 LLM embedding space。
- 相关性判断：高。它把“时序理解”从单纯曲线拟合扩展到语义、上下文与行动决策，是当前最像“认知时序推理 benchmark”的新工作。

### Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较三种时序推理模式：直接给原始数值、作为 coding agent 写 Python、以及两者结合。结果显示 coding agent 的确优于纯原始数值输入，但即使最优 agent 在两个 benchmark 上仍有约 22%-34% 错误率。
- 相关性判断：高。它直接触及“代码代理到底能不能处理时序推理”这个问题，对后续构建时序 coding agent、judge 和 harness 非常关键。

### TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：提出 multi-turn 时序推理 benchmark，覆盖 240 个任务、2680 轮对话、8 个真实领域，并配套 TimeSage 结构化 agent 与 leaderboard。论文显示 decision-oriented 任务上的性能明显下降，短板主要在 memory、uncertainty handling 和 domain-grounded decision。
- 相关性判断：高。它把时序 reasoning 从单轮题目推进到真实对话工作流，对 Agent 系统设计比传统单轮 benchmark 更贴近实际。

### TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291) / [GitHub](https://github.com/magwiazda/TimeSeriesExamAgent)
- 简短摘要：提出用模板与 LLM agent 自动构建大规模时序推理 benchmark 的方法，覆盖 pattern recognition、similarity、anomaly、causality 等能力，并开放了面向医疗、金融、天气等场景的 exam-generation pipeline。
- 相关性判断：中高。它不直接做推理模型，但为时序 reasoning 的数据构造、评测扩展和自动 benchmark 生产提供了重要基础设施。

## 4. GitHub 上值得跟踪的新项目

### iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（以配套论文发布日期为准）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw) / [arXiv](https://arxiv.org/abs/2606.05404)
- 简短摘要：仓库 README 明确给出其定位为 time-series-native agent harness，支持 CiK、TSRBench、TSAIA，包含 MCP 工具 server、memory bank、evaluation runners 和统一 CLI。
- 相关性判断：最高。它同时覆盖 timeseries agent、harness、benchmark、memory、tool-use 五条主线，是当前最值得直接复现和拆解的项目。

### ztxtech/aion

- 日期：2026-06-14（GitHub README “News” 可确认）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：AION 把 time-series task formalize 成 task/workspace/execution/review 四层 harness，强调 temporal grounding、validation-driven workflow、critic 和多 Agent runtime。仓库文档较完整，已经包含 CLI、插件、技能和示例工作区。
- 相关性判断：高。它比单篇论文更偏工程体系，尤其适合参考其 harness、critic、workspace/memory 组织方式。

### magwiazda/TimeSeriesExamAgent

- 日期：2026-04-11（以配套论文发布日期为准）
- 来源：[GitHub](https://github.com/magwiazda/TimeSeriesExamAgent) / [arXiv](https://arxiv.org/abs/2604.10291)
- 简短摘要：项目实现了自动出题、验证、可视化和评测脚本，可从用户提供的数据集生成时序 reasoning benchmark，并支持多域、多模型评估。
- 相关性判断：中高。它更偏 benchmark factory，而不是最终生产型 Agent，但对“如何低成本扩展时序 reasoning 数据集”非常有价值。

### EIT-NLP/CognitiveTSR

- 日期：2026-06-20（以论文发布日期为准；GitHub 链接当前返回 404，仓库状态不确定）
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub 链接](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：论文声称代码已在 GitHub 提供，但当前仓库链接返回 404，可能是尚未公开、仓库迁移或临时下线。由于 TSCognition/TSAlign 本身很重要，仍建议保留观察位。
- 相关性判断：中。研究相关性高，但工程可用性暂时不稳定，因此优先级低于前面三个可访问项目。

## 观察与下一步

- 近三个月最强组合主题是：`TSFM 真实场景评测` + `time-series-native harness` + `multi-turn reasoning benchmark`。
- `DailyArXiv` 补检说明，近期时间序列新论文的增量主要仍集中在 forecasting 本体、层级预测和数值接口层；真正直接命中 agent/reasoning 的新增条目仍然稀疏，因此今天主线判断没有被推翻，但数值表示与强 baseline 的重要性被明显放大。
- 若只选三项优先跟踪，建议顺序是：`TimeClaw`、`TSCognition/TSAlign`、`Nexus`。
- 若本仓库后续要做自己的时序 Agent/reasoning 体系，短期最值得复用的是：
  - `TimeClaw` 的 MCP 工具与 memory bank 设计
  - `aion` 的 harness / critic / workspace 结构
  - `TimeSage-MT` 与 `TimeSeriesExamAgent` 的 benchmark 生产与多轮评测思路

## 检索记录

- 论文查询：`site:arxiv.org "time series foundation model" 2026`、`site:arxiv.org "time series agent" 2026`、`site:arxiv.org "time series reasoning" 2026` 以及各论文标题精确检索。
- `DailyArXiv` 补检：检查其 GitHub API 分支列表、2026-06-29 自动更新提交，以及 `README.md` 中的 `Time Series` 板块；确认当前公开仓库未暴露 `timeseries` 分支，因此实际以 `master` 作为替代来源。
- 项目查询：优先检查论文中的官方代码链接，再补充查看 GitHub 仓库主页与 README 中可确认日期的 news/release 信息。
- 排除项：2026-03-29 之前的论文或项目动态未纳入主条目，例如较早版本的 TSRBench 动态未计入本次晨报。

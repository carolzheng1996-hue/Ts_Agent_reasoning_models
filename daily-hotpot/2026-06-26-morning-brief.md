# 2026-06-26 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-06-26 08:00-09:30 Asia/Shanghai  
时间窗口：2026-03-26 至 2026-06-26  
筛选口径：优先保留 arXiv/OpenReview/官方 GitHub/项目主页中可确认日期的条目；三个月外条目未列入主条目。

## 今日摘要

- 时间序列基础模型方向正在从“通用零样本预测”转向更细的工程问题：统一 tokenizer、频域 MoE、行业语料预训练、医疗/金融垂直 benchmark。
- 时间序列 Agent 方向在 5-6 月明显活跃：Nexus 强调多 Agent 拆分预测流程，TimeClaw 强调工具化 runtime、episodic memory 和能力演化。
- 时间序列 reasoning 方向出现更明确的 benchmark 化：TSCognition 将任务拆成 Decoding、Grounding、Inferring、Extrapolating、Acting，更接近“理解 + 行动”而不是单纯曲线拟合。
- GitHub 新项目多数还在早期，但 `TimeClaw` 和 `ztxtech/aion` 已经比较贴近可复现实验 harness；`autoresearch-timeseries-agent`、`numerai-mcp-autoresearch`、`advanced_automl` 值得继续观察。

## 1. 时间序列基础模型最新研究

### Pretrained Time-Series Foundation Models for Financial Return Forecasting

- 日期：2026-06-25
- 来源：https://arxiv.org/abs/2606.27100
- 摘要：在 AAPL、AMZN、GOOG、JPM、META 等股票收益率任务上比较 TimeGPT/TimeGPT-LH、TimesFM-2.5、Moirai-2.0、Chronos、Chronos-2 与 NBEATS、NHITS、PatchTST、iTransformer、KAN 等从头训练模型。结论比较克制：预训练 TSFM 能降低低数据场景下建模成本，但相对 random-walk 的统计显著收益稀疏，不应被解读为稳定 alpha 引擎。
- 相关性判断：高。它把 TSFM 放入噪声极高、结构突变频繁的金融回报预测中检验，对 Agent 做金融时序任务时的模型选择和置信度校准很有价值。

### Time Series as Language: A Universal Tokenizer for General-Purpose Time Series Foundation Models

- 日期：2026-05-31
- 来源：https://arxiv.org/abs/2606.09861
- 摘要：提出 UniTok 和 UniTok-FM，将连续时间序列离散成 token，并用 next-token prediction 训练通用 TS foundation model。模型支持零样本/提示增强预测、少样本生成和分类，并强调不依赖任务专用架构也可进行训练外 in-context inference。
- 相关性判断：高。若时间序列可被稳定 token 化，Agent 可以把“序列片段 + 工具结果 + 文本上下文”统一到更接近 LLM 的推理接口。

### GlucoFM-Bench: Benchmarking Time-Series Foundation Models for Blood Glucose Forecasting

- 日期：2026-06-05
- 来源：https://arxiv.org/abs/2606.06881
- 摘要：在 15 个公开糖尿病相关数据集、1,117 名个体上评测 Chronos-2、TimesFM 等 TSFM 和监督深度模型，覆盖 zero-shot、few-shot、full-shot、上下文长度和预测步长变化。结果显示 TSFM 在 zero/few-shot 下有竞争力，但数据充足时轻量 LSTM 仍可领先。
- 相关性判断：中高。医疗时序场景对 calibration、低/高血糖区间和个体异质性要求高，可作为 Agent 输出风险提示和模型置信度的 benchmark 参考。

### WaveMoE: A Wavelet-Enhanced Mixture-of-Experts Foundation Model for Time Series Forecasting

- 日期：2026-04-12
- 来源：https://arxiv.org/abs/2604.10544
- 摘要：提出把 wavelet 频域 token 与时间序列 token 放入统一时间轴，并通过共享 expert routing 协调双路径 MoE。初步实验覆盖 16 个 benchmark，目标是增强周期性和局部高频模式建模。
- 相关性判断：中高。频域专家路由很适合接入 Agent 的自动诊断流程：先判断周期/高频/突变特征，再路由到合适预测器或解释模板。

### A Family of Open Time-Series Foundation Models for the Radio Access Network

- 日期：2026-04-05
- 来源：https://arxiv.org/abs/2604.04271
- 摘要：提出 TimeRAN，面向无线接入网络的多任务时间序列基础模型，并开源 TimeRAN DataPile，包含 355K+ 时间序列和 0.56B 测量值。任务覆盖异常检测、分类、预测、插补，并在 5G testbed 中做了验证。
- 相关性判断：中。它说明垂直行业 TSFM 正在向“数据堆 + 多任务头 + 真实系统集成”演进，适合 Agent 作为行业工具库调用。

## 2. 时间序列建模 Agent 最新研究

### Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：https://arxiv.org/abs/2605.14389
- 摘要：把预测拆成多 Agent 阶段：宏观/微观 temporal fluctuation 分析、上下文整合和最终 forecast synthesis。论文强调真实预测不是单纯数值外推，而需要新闻、事件等非结构化上下文。
- 相关性判断：高。Nexus 的价值在于把 forecasting 明确定义成 agentic reasoning problem，可直接启发“模型路由 + 上下文检索 + 可解释预测轨迹”的系统设计。

### TimeClaw: A Time-Series AI Agent with Exploratory Execution Learning

- 日期：2026-05-11
- 来源：https://arxiv.org/abs/2605.10038
- 摘要：提出 Explore、Compare、Distill、Reinject 四阶段循环，把多次工具执行和候选解比较蒸馏成可复用经验。模型权重冻结，通过 metric-supervised exploration、tool dropout 和层级经验注入提升推理时表现。
- 相关性判断：高。它针对“数值可验证任务中，早期成功会导致工具先验坍缩”的问题，给出了 Agent 自改进但不在线微调的工程路线。

### Harnessing Generalist Agents for Contextualized Time Series

- 日期：2026-06-03
- 来源：https://arxiv.org/abs/2606.05404
- 代码：https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw
- 摘要：同名 TimeClaw 项目把 generalist LLM 包装成 time-series-native agent harness，包含 MCP 工具 runtime、episodic multimodal memory、capability-evolution loop，评测覆盖 CiK、TSRBench、TSAIA。GitHub README 显示其工具包括 series overview、ACF、periodicity、ARIMA forecast、portfolio VaR/Sharpe/CAPM 等。
- 相关性判断：高。它不仅是论文概念，还给出可运行 CLI、memory bank 和 benchmark harness，对复现 Agent 时序推理最直接。

## 3. 时间序列 reasoning 模型最新研究

### From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：https://arxiv.org/abs/2606.22126
- 代码：https://github.com/EIT-NLP/CognitiveTSR
- 摘要：提出 TSCognition benchmark，包含约 41K QA 样本，覆盖 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知推理任务；同时提出 TSAlign，把时间序列编码成 patch-level 表征并注入 LLM embedding space。
- 相关性判断：高。它把“时序理解”从预测误差扩展到语义、上下文和行动选择，和时序 reasoning Agent 的评价目标高度一致。

### TimeClaw / TSRBench / TSAIA 线索

- 日期：2026-06-03
- 来源：https://arxiv.org/abs/2606.05404
- 代码：https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw
- 摘要：TimeClaw 的官方 repo 显示其评测包含 TSRBench 的 chart-style reasoning、TSAIA 的 quantitative finance Q&A 和 CiK 的上下文预测；工具调用轨迹可审计，memory bank 记录验证过的成功推理过程。
- 相关性判断：高。它是“reasoning benchmark + tool-use agent + memory retrieval”的组合，尤其适合用来搭建时序 reasoning harness。

### Nexus 的 reasoning trace

- 日期：2026-05-14
- 来源：https://arxiv.org/abs/2605.14389
- 摘要：Nexus 报告其输出不仅评估数值准确率，也强调 forecast reasoning trace，展示预测背后的 fundamental drivers。
- 相关性判断：中高。虽然论文主目标是 forecasting，但它把 reasoning trace 纳入 Agent 输出质量，是后续构建可解释时序 Agent 的关键指标。

## 4. GitHub 三个月内新项目

### iDEA-iSAIL-Lab-UIUC/TimeClaw

- 创建/更新：GitHub 页面显示公开 repo，论文日期 2026-06-03；页面含 3 commits、Apache-2.0 license。
- 地址：https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw
- 摘要：面向 contextualized time series 的 agent harness，包含 MCP 工具 server、memory bank、benchmark runner、CiK/TSRBench/TSAIA 支持。
- 相关性判断：最高。直接覆盖 timeseries agent + harness + reasoning。

### ztxtech/aion

- 创建/更新：2026-04-12 创建，2026-06-21 更新；GitHub API 显示 8 stars、1 fork。
- 地址：https://github.com/ztxtech/aion
- 摘要：OpenCode-based time-series harness，目标是 structured forecasting、contextual reasoning、tool use 和 validation-driven agent workflows。
- 相关性判断：高。关键词高度匹配 Agent/harness/reasoning，是除 TimeClaw 外最值得跟踪的项目。

### AkshajKashyap/autoresearch-timeseries-agent

- 创建/更新：2026-06-17 创建并更新。
- 地址：https://github.com/AkshajKashyap/autoresearch-timeseries-agent
- 摘要：可复现实验型时间序列 forecasting benchmark，含 synthetic/CSV data、baseline models、diagnostics、reports、plots、CI，以及 deterministic config-running experiment agent。
- 相关性判断：中高。偏工程 benchmark 和实验自动化，适合作为轻量 local harness 参考。

### rnop/numerai-mcp-autoresearch

- 创建/更新：2026-05-24 创建，2026-06-23 更新。
- 地址：https://github.com/rnop/numerai-mcp-autoresearch
- 摘要：面向 Numerai classic tournament 的 agentic research harness，含 autonomous experimentation loop、XGBoost、Bayesian optimization、time-series cross-validation 和自定义 MCP server。
- 相关性判断：中高。金融竞赛/周度再训练场景非常贴近“自动研究 Agent + 时序 CV + 工具协议”。

### chuan77/advanced_automl

- 创建/更新：2026-06-20 创建并更新；GitHub API 显示 1 star。
- 地址：https://github.com/chuan77/advanced_automl
- 摘要：面向 tabular 和 time-series datasets 的 AutoML 框架，强调 adaptive pipelines、leakage-safe validation、robust model selection。
- 相关性判断：中。AutoML + time series 相关，但 Agent 属性较弱，可作为模型选择和验证流程参考。

### mohsenmohammadi2050/AI-agent-timeseries-analyser

- 创建/更新：2026-06-12 创建，2026-06-21 更新。
- 地址：https://github.com/mohsenmohammadi2050/AI-agent-timeseries-analyser
- 摘要：Python 项目，名称指向 AI agent timeseries analyser；当前 GitHub API 未返回描述，需后续检查 README 成熟度。
- 相关性判断：中低。名称匹配，但项目成熟度和说明不足，先放入观察列表。

## 观察与下一步

- 优先复现：`iDEA-iSAIL-Lab-UIUC/TimeClaw`，因为它同时有论文、代码、benchmark 和工具 runtime。
- 优先阅读：Nexus、TSCognition、UniTok-FM。三者分别代表 Agent decomposition、reasoning benchmark、TS tokenization。
- 风险提示：近三个月 GitHub 新项目里有不少 0 star/低 commit 项目，今天简报只把它们作为线索，不作为成熟工具推荐。

## 检索记录

- arXiv 查询：`time series foundation model 2026`、`time series agent 2026`、`time series reasoning 2026`、具体标题查询。
- GitHub API 查询：`timeseries agent created:>2026-03-26`、`time-series harness created:>2026-03-26`、`time-series automl created:>2026-03-26`、`timeseries machine-learning created:>2026-03-26`。

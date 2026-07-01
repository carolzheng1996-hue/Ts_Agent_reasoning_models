# 2026-07-01 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-01 07:20-08:15 Asia/Shanghai  
时间窗口：2026-04-01 至 2026-07-01  
筛选口径：优先保留 arXiv、OpenReview、官方项目页、机构博客、GitHub 与 `DailyArXiv` 中可确认日期的条目；仅纳入过去三个月内的内容。若 GitHub 项目无法直接确认创建日期，则以论文公开日期、README 中的公开新闻日期或仓库自述作为近似，并标记为 `不确定`。

## 今日摘要

- 基础模型方向在 6 月下旬明显转向 `通用预训练目标`、`零样本统一基座` 和 `跨领域严肃评测`，`Simulacrum`、`MACROCAST`、`Darts Foundation` 是今天最值得补读的三条线。
- 时间序列 Agent 方向已经不再只是“让 LLM 调一个 forecast API”，而是往 `任务定义 + harness + execution loop + context grounding` 这套完整系统靠拢，`TimeClaw`、`AION`、`KairosAgent` 的信号最强。
- reasoning 方向的主线继续从读图问答转向 `认知分解`、`多轮交互` 和 `代码执行代理`，`TSCognition/TSAlign` 仍是最近三个月最关键的工作。
- GitHub 项目侧，今天最值得跟踪的是 `TimeClaw`、`microsoft/aion`、`TempoWAVE`、`Awesome-Agentic-Time-Series`；其中后两者分别代表 `数值接口层` 与 `研究地图/文献入口`。

## 0. DailyArXiv 补检结论

- 检查时间：2026-07-01 08:00 Asia/Shanghai
- 来源：[DailyArXiv 仓库](https://github.com/zezhishao/DailyArXiv)
- 结论：`Time Series` 板块在最近几天新增的高相关条目主要集中在 `MACROCAST`、`Simulacrum`、`Are Time-Series Foundation Models Ready for E-Nose Data?`、`Unified Zero-Shot Time Series Forecasting: A Darts Foundation`。这些条目整体更偏 `foundation model / pretraining / benchmark`，没有比 `TSCognition` 或 `TimeClaw` 更强的新 reasoning/agent 信号。

## 1. 时间序列基础模型最新研究

### [2026-06-27] MACROCAST: A Foundation Time-Series Model for Zero-Shot Probabilistic Forecasting

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：提出支持 zero-shot probabilistic forecasting 的 foundation time-series model，重点强调统一建模多个频率、尺度和不确定性表达。
- 相关性判断：高。它直接对应“基础模型能否在零样本下给出可用概率分布”这一核心问题，对后续 Agent 的风险感知和置信度控制有直接意义。

### [2026-06-26] The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27711)
- 简短摘要：把 forecasting、inference 和 model selection 统一进 decision-theoretic pretraining 视角，目标不是只压低点误差，而是学到更接近下游决策的时序先验。
- 相关性判断：高。它很像把 TSFM 从“通用表征器”推向“可服务决策的基础模型”，对 agentic forecasting 的价值明显高于普通 leaderboard 型工作。

### [2026-06-26] Are Time-Series Foundation Models Ready for E-Nose Data? An Empirical Assessment of Their Embeddings

- 日期：2026-06-26
- 来源：[arXiv](https://arxiv.org/abs/2606.27672)
- 简短摘要：在电子鼻数据上评估 Chronos-2、MOMENT 等 TSFM 的 embedding 质量，关注 domain transfer、表征可分性和下游适配表现。
- 相关性判断：中高。它属于非常典型的“新领域迁移压力测试”，对判断 TSFM 是否真能被 Agent 拿去跨域复用很有参考价值。

### [2026-06-25] Unified Zero-Shot Time Series Forecasting: A Darts Foundation

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27438)
- 简短摘要：尝试构建统一的 zero-shot forecasting 基座，强调在多任务、多频率和不同数据条件下维持通用预测能力。
- 相关性判断：中高。它直接服务“一个基础模型覆盖多个 forecasting 工作流”的路线，对构建模型路由型 Agent 很重要。

### [2026-06-25] Pretrained Time-Series Foundation Models for Financial Return Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.27100)
- 简短摘要：系统比较 TimeGPT、TimesFM、Chronos 等 TSFM 在金融收益率预测中的表现，并与经典深度预测基线和 random walk 进行对照。
- 相关性判断：高。金融序列是高噪声、弱信号场景，这类结果能更真实地暴露 TSFM 在复杂决策环境中的边界条件。

### [2026-06-25] Speaking Numbers to LLMs: Multi-Wavelet Number Embeddings for Time Series Forecasting

- 日期：2026-06-25
- 来源：[arXiv](https://arxiv.org/abs/2606.26487) / [GitHub](https://github.com/DC-research/TempoWAVE)
- 简短摘要：提出 `TempoWave`，把时间序列数值映射为 multi-wavelet、digit-wise 数值表征，以增强 LLM 对连续值、局部波动和多尺度结构的理解能力。
- 相关性判断：高。它不只是 forecast trick，而是 foundation model 与 reasoning model 共享的数值接口层工作，对时序 Agent 尤其关键。

## 2. 时间序列建模 Agent 最新研究

### [2026-06-03] Harnessing Generalist Agents Through Exploratory Learning for Contextualized Time Series

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，把 generalist agent 扩展成面向 contextualized time series 的系统，核心包含工具调用、episodic memory、capability evolution 和统一评测接口。
- 相关性判断：最高。它是目前最接近“可运行时序 Agent 基座”的公开工作之一，兼具 harness、memory、execution 和 benchmark 视角。

### [2026-05-29] KairosAgent: A Time-Series-Agentic Framework for Forecasting and Monitoring

- 日期：2026-05-29
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://rdkls.github.io/kairosagent/)
- 简短摘要：把 forecasting 与 monitoring 放进同一个 agentic workflow，强调对时序上下文、异常状态和实时信号的联合处理。
- 相关性判断：高。它比纯预测论文更贴近实际分析流程，尤其适合监控型、在线型时间序列任务。

### [2026-05-28] AION: Next-Generation Tasks and Practical Harness for Time Series

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/microsoft/aion)
- 简短摘要：提出面向时间序列任务的新一代 practical harness，重点不只是出题，而是定义可执行任务、可复现实验和系统化评测接口。
- 相关性判断：最高。它直接瞄准时序 Agent 研究最缺的“统一任务和 harness 层”，对后续 benchmark、训练与回归测试都非常关键。

### [2026-05-14] Nexus: An Agentic Framework for Time Series Forecasting

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把时序预测拆成宏观趋势、微观模式、上下文整合与最终 synthesis 等多个 agent 阶段，强调非结构化外部信息的增益。
- 相关性判断：高。它代表“forecasting 不是单模型拟合，而是一个 agentic reasoning pipeline”的清晰范式。

## 3. 时间序列 reasoning 模型最新研究

### [2026-06-20] From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126)
- 简短摘要：提出 `TSCognition` benchmark，并用 `TSAlign` 把时间序列表征对齐到 LLM embedding space，把时序 reasoning 拆成 Decoding、Grounding、Inferring、Extrapolating、Acting 五类认知任务。
- 相关性判断：最高。它把“读懂曲线”推进到“能做时序认知推理与行动决策”，是当前 reasoning 主线的代表工作。

### [2026-06-15] Can LLM Coding Agents Reason About Time Series?

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较直接文本输入、coding agent 写 Python、以及混合模式在时序问题上的能力，结论是代码代理明显更强，但错误仍集中在统计判断和边界条件处理。
- 相关性判断：高。它直接回答“代码执行是否真的能补齐时序 reasoning 缺口”，对 Agent 系统设计非常关键。

### [2026-05-31] TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建 multi-turn 时间序列 reasoning benchmark，覆盖多领域真实任务、多轮对话过程与结构化评测协议。
- 相关性判断：高。它把评测重点从单轮答题推进到更接近真实分析流程的多轮交互。

### [2026-04-11] TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale

- 日期：2026-04-11
- 来源：[arXiv](https://arxiv.org/abs/2604.10291)
- 简短摘要：利用模板与 LLM agent 自动生成大规模时序 reasoning benchmark，覆盖 pattern recognition、anomaly、causality、similarity 等任务。
- 相关性判断：中高。它更偏 benchmark 生成基础设施，但对 reasoning 数据供给和持续扩容非常重要。

## 4. GitHub 上值得跟踪的新项目

### [2026-06-14] microsoft/aion

- 日期：2026-06-14（依据仓库 README 中公开 `News` 日期，非创建日期）
- 来源：[GitHub](https://github.com/microsoft/aion)
- 简短摘要：微软公开的时间序列 tasks + harness 仓库，围绕 benchmark 设计、可执行任务与 practical evaluation 展开。
- 相关性判断：最高。它是当前“timeseries harness”最值得直接跟踪的公开工程资产之一。

### [2026-06-03] iDEA-iSAIL-Lab-UIUC/TimeClaw

- 日期：2026-06-03（以关联论文与官方代码公开日期近似）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`TimeClaw` 官方代码仓，覆盖 agent runtime、memory、工具调用、benchmark 和统一 CLI。
- 相关性判断：最高。它是时序 Agent 方向最接近“完整可跑系统”的 GitHub 项目之一。

### [2026-06-25] DC-research/TempoWAVE

- 日期：2026-06-25（以论文与官方代码公开日期近似）
- 来源：[GitHub](https://github.com/DC-research/TempoWAVE)
- 简短摘要：围绕 multi-wavelet number embeddings 的实现仓库，重点解决 LLM 读取连续时序数值时的表达瓶颈。
- 相关性判断：高。虽然更偏基础建模层，但它直接影响 reasoning model 和 Agent 对数值序列的消费质量。

### [2026-06-27] hiepnh137/SpecTF

- 日期：2026-06-27（以关联论文公开日期近似，仓库创建日期未直接确认）
- 来源：[GitHub](https://github.com/hiepnh137/SpecTF)
- 简短摘要：AISTATS 2026 论文 `SpecTF` 的官方实现，从频谱角度做 foundation-leaning 的时间序列建模。
- 相关性判断：中。它更偏时序机器学习本体，不是 Agent 项目，但对构建更强的时序 base learner 有跟踪价值。

### [2026-06，不确定] TROUBADOUR000/Awesome-Agentic-Time-Series

- 日期：2026-06，不确定
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 agentic time series systems 的文献和项目清单，仓库首页明确说明该列表与综述工作在 2026-06 建立并持续更新。
- 相关性判断：中高。它不是执行框架，但非常适合作为 Agent / reasoning / harness 方向的近线导航页。

## 5. 观察与下一步

- 如果只选三篇优先阅读，建议顺序是 `TSCognition`、`TimeClaw`、`Simulacrum`。它们分别代表 `reasoning benchmark`、`agent runtime` 和 `foundation pretraining objective` 三个最核心增量。
- 下一轮晨报值得重点补跟：`AION` 的评测协议是否继续扩展，`TimeClaw` 是否补出更完整实验脚本，`TempoWAVE` 是否出现下游复现或衍生项目。
- 今天未额外生成周报：当前日期是周三（2026-07-01），不满足“每周五更新周报”的条件。

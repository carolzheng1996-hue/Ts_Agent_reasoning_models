# 2026-07-29 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-29 16:20 CST，Asia/Shanghai  
时间窗口：2026-04-29 至 2026-07-29  
优先来源：arXiv、OpenReview、GitHub 官方仓库页、Hugging Face 官方页、官方项目页、GitHub `zezhishao/DailyArXiv` README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`timeseries harness`、`time series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 过去三个月里，时间序列基础模型的重心继续从“大规模预训练”转向“上线可用性”：`Post-Training in TSFMs`、`Zeus`、`MACROCAST`、`Operational Viability` 都在回答如何把 TSFM 真正部署到复杂业务环境。
- 时间序列建模 Agent 的最近增量更偏系统设计而不是单模型刷榜：`TopoBrick` 做外生变量 agentic 选择，`TimeRouter` 做 TSFM 路由，`TimeClaw` 与 `AION` 做 runtime / harness，`GenAutoML` 则把架构搜索自动化。
- reasoning 方向的最新强信号仍然是“显式路由 + 多轮评测 + 工具执行体检”：`TSRouter`、`TimeSage-MT`、`Can LLM Coding Agents Reason About Time Series?`、`TS-Skill` 形成了一条很完整的研究链。
- GitHub / Hugging Face 上最值得跟踪的公开资产仍是 `TimeRouter`、`TimeClaw`、`AION`、`TimeSage-MT`、`ARTIST` 与 `Awesome-Agentic-Time-Series`；其中一部分仓库页不能稳定给出创建日期，已在条目里标成日期代理或不确定。
- 按仓库规则，本期继续保留 `光伏功率预测` 补充栏目；这条线当前最贴近真实落地，和 `TSFM + retrieval + physics prior + drift correction` 的主线高度一致。

## 0. 检索说明

- 仅保留 `2026-04-29` 至 `2026-07-29` 三个月窗口内的内容。
- 论文日期优先采用 arXiv `Submitted on` 或 OpenReview `Published`；GitHub / Hugging Face 条目若仓库页未稳定暴露创建日期，则采用对应论文公开日期、README 公告日期或公开页面可见更新时间，并明确标注为代理日期或不确定。
- 已按要求执行 `ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_demo_agent_pg`，并完成 `git pull --ff-only origin main`。
- 今天是周三，不生成每周简报文件。

## 1. 时间序列基础模型最新研究

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统整理 TSFM post-training 的五类核心干预位点，包括参数适配、上下文增强、模型组合、输出后处理与不确定性控制、压缩与专门化，重点转向“如何把底座模型稳妥接到真实应用”。
- 相关性判断：最高。它直接对应 `foundation model -> agent runtime -> deployment policy` 的关键过渡层。

### [2026-07-02] [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出 tuning-free TSFM 设计，通过多尺度结构与多目标 temporal masking，尽量减少 forecasting、interpolation 与全局表征等任务上的手工调参负担。
- 相关性判断：高。它反映了 TSFM 从“会预测”向“能直接拿来分析”的迁移。

### [2026-06-27] [MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting](https://arxiv.org/abs/2606.28670)

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：围绕真实时点宏观预测构建无泄漏 TSFM，显式使用 vintage data 与合成时序，强调 real-time forecasting 场景里的数据口径严谨性。
- 相关性判断：高。它对“TSFM 在生产数据流水线上如何避免信息泄漏”非常关键。

### [2026-05-23] [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：不只比较 aggregate accuracy，而是从周期性业务、物理约束系统、金融市场和异质需求四类 operational regime 评估 TSFM 适用边界，并提出 `Complexity Router` 兼顾精度与成本。
- 相关性判断：最高。它正面回答“TSFM 什么时候该上生产、什么时候该退回专用模型”。

### [2026-05-18] [Chronicle: A Multimodal Foundation Model for Joint Language and Time Series Understanding](https://arxiv.org/abs/2605.20268)

- 日期：2026-05-18
- 来源：[arXiv](https://arxiv.org/abs/2605.20268)
- 简短摘要：从头联合预训练文本与时间序列，希望用同一 backbone 同时覆盖自然语言理解、时序分类与多模态预测。
- 相关性判断：高。它和 `language-grounded TSFM` 这条长期主线直接相关。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：在楼宇 IoT 预测里利用知识图谱与 topology sampler 进行 agentic 外生变量选择，不依赖额外训练即可做零样本预测。
- 相关性判断：高。它把 `agentic variable selection` 明确带进时间序列部署链路。

### [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625)
- 简短摘要：针对多个 TSFM 的选择问题，提出轻量 routing head、selective gate 和 fallback ensemble，减少每次都依赖重型控制器调度的成本。
- 相关性判断：最高。它很像未来时间序列 Agent runtime 里的基础零件。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：把时间序列模型搜索拆成 agentic 架构生成、评估与优化循环，试图把 AutoML 从静态搜索升级为交互式、可迭代的建模系统。
- 相关性判断：高。它与用户指定的 `timeseries Agent + AutoML` 主题高度对齐。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404)
- 简短摘要：提出 `TimeClaw`，把 temporal tools、经验复用和 episodic multimodal memory 组织进统一 harness，让通用 Agent 获得时间序列原生运行时。
- 相关性判断：最高。它仍是近三个月里最像“时间序列 Agent 基建蓝图”的公开方案之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [官方项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：显式拆分 LLM reasoner 与 TSFM forecaster，将文本语义理解和数值预测解耦后再融合，并利用多轮轨迹增强整体推理质量。
- 相关性判断：最高。它是 `semantic reasoning + numerical forecasting` 融合路线里最清晰的一类代表。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045)
- 简短摘要：把 next-generation time series task 形式化为 `task file + workspace + validation interface`，并配套 agents、skills、rules、memory、evaluation 与 protocols 的完整 harness。
- 相关性判断：最高。若目标是搭建时序 Agent 平台，它依然是最系统的工程化公开参考之一。

### [2026-05-14] [Nexus: An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 流程拆成宏观波动、微观波动、上下文事件理解与最终融合四个阶段，用多 Agent 协作联合优化预测值与可解释性。
- 相关性判断：高。它代表了“forecasting as agentic reasoning”的典型路线。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：面向不规则临床时间序列构建带显式时间证据的 multimodal QA benchmark，暴露模型在稀疏时序证据检索与归因上的明显短板。
- 相关性判断：高。它把 `irregular TS + evidence-grounded QA` 变成了独立主线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940)
- 简短摘要：把“用文本模式还是图像模式、用贵模型还是便宜模型”的选择形式化为异构图路由问题，在时间序列推理时动态切换模态与模型。
- 相关性判断：最高。它几乎就是未来时序 reasoning runtime router 的直接原型。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 与 hybrid 三种路径，结论是代码执行虽能提升正确率，但代理在统计验证与细节理解上仍有显著缺口。
- 相关性判断：最高。它直接体检“会写代码的 Agent 是否已经可靠掌握时间序列 reasoning”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时间序列推理 benchmark，覆盖 240 个任务、2680 个对话轮次，重点评估记忆、不确定性处理与领域决策能力。
- 相关性判断：最高。它是目前少数直接面向 `multi-turn agentic time series reasoning` 的系统评测资产。

### [2026-05-23] [TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering](https://arxiv.org/abs/2605.24703)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：将 TSQA 能力拆成时间尺度选择、时间定位、跨区间整合等技能，并用 `SKEvol` agentic pipeline 生成和验证数据。
- 相关性判断：高。它适合定位 reasoning 失效究竟发生在哪一层技能。

### [2026-05-05] [FinSTaR: Towards Financial Reasoning with Time Series Reasoning Models](https://arxiv.org/abs/2605.03460)

- 日期：2026-05-05
- 来源：[arXiv](https://arxiv.org/abs/2605.03460)
- 简短摘要：面向金融场景定义 2x2 能力分类框架，并通过 `Compute-in-CoT` 与 `Scenario-Aware CoT` 改善金融时间序列推理表现。
- 相关性判断：中高。它偏金融子领域，但对 `domain-specific TSRM` 很有代表性。

### [2026-04-30] [Adaptive Time Series Reasoning via Segment Selection (ARTIST)](https://openreview.net/forum?id=yzBbBPheg7)

- 日期：2026-04-30
- 来源：[OpenReview / ICML 2026](https://openreview.net/forum?id=yzBbBPheg7)
- 简短摘要：提出 controller-reasoner 结构，在问答时自适应选择关键信号片段，而不是一次性编码整段序列。
- 相关性判断：高。它非常接近未来时序 reasoning 模型中的 `segment router / evidence selector` 基础组件。

## 4. 光伏功率预测最新研究

> 本节按 `daily-hotpot/PROJECT_RULES.md` 持续保留。

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：研究数值天气预报误差如何传导到光伏功率预测，并从鲁棒性、可解释性与时延三方面评估模型在工程部署中的表现。
- 相关性判断：高。它提醒光伏 forecasting/agent 系统不能只看名义精度，还要看对上游气象误差的鲁棒性。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、residual adapter 与 distribution shift correction 串成统一光伏预测流水线。
- 相关性判断：最高。它是当前 `TSFM + retrieval + physics prior + drift correction` 在光伏方向最清晰的代表作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 plant metadata 与气象变量生成 synthetic histories，让 TSFM 在新建站点几乎没有目标站历史观测时仍可进行 cold-start 预测。
- 相关性判断：高。它直接回答“新站上线初期如何让 foundation model 工作起来”。

## 5. GitHub / Hugging Face 上值得跟踪的新项目

> 日期口径说明：GitHub 仓库页在当前可访问视图中未稳定暴露创建日期时，以下日期采用对应论文公开日期、README 公告日期或页面可见更新时间；无法精确到日时会显式标注。

### 5.1 时间序列

#### [2026-06（具体日不确定）] [TROUBADOUR000/Awesome-Agentic-Time-Series](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)

- 日期：2026-06（GitHub README `News` 写明 `2026.06 Create this repository`，具体日期不确定）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：面向 Agentic Time Series 的精选清单，集中整理论文、代码库、benchmark 与 survey，适合作为后续日更检索入口。
- 相关性判断：高。它不是模型本体，但对持续跟踪 `timeseries agent / harness / reasoning` 非常高效。

#### [2026-06-10] [UConn-DSIS/TimeRouter](https://github.com/UConn-DSIS/TimeRouter)

- 日期：2026-06-10（采用对应论文公开日期作为仓库公开代理日期）
- 来源：[GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：公开 `router + gate + fallback ensemble` 的 TSFM 路由代码，目标是在多模型池中做轻量专家选择。
- 相关性判断：最高。它非常适合作为时间序列 Agent 里的 `forecast model router` 参考实现。

#### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：2026-06-03（采用对应论文公开日期作为仓库公开代理日期）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：时间序列 Agent harness 官方实现，强调 temporal tools、经验蒸馏与 episodic multimodal memory。
- 相关性判断：最高。它对 `timeseries agent runtime / harness` 的直接参考价值最大。

#### [2026-05-31] [Timesage/TimeSage-MT](https://huggingface.co/datasets/Timesage/TimeSage-MT)

- 日期：2026-05-31（采用对应论文提交日期；Hugging Face 页面当前未稳定展示首发日期）
- 来源：[Hugging Face](https://huggingface.co/datasets/Timesage/TimeSage-MT)
- 简短摘要：多轮时间序列推理 benchmark 数据集，公开真实领域任务、结构化答案与多轮评测格式。
- 相关性判断：最高。它是后续 `time-series reasoning agent` 最值得复用的评测资产之一。

#### [2026-05-30] [mims-harvard/ARTIST](https://github.com/mims-harvard/ARTIST)

- 日期：2026-05-30（GitHub 组织页可见更新时间；非创建日期）
- 来源：[GitHub](https://github.com/mims-harvard/ARTIST)
- 简短摘要：`Adaptive Time Series Reasoning via Segment Selection` 的官方实现，围绕片段选择与 QA 推理展开。
- 相关性判断：高。它对应 `segment selection / evidence routing` 这一条 reasoning 基础能力线。

#### [2026-05-24] [ztxtech/aion](https://github.com/ztxtech/aion)

- 日期：2026-05-24（采用对应论文公开日期作为仓库公开代理日期）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：围绕 `task file + workspace + validation interface` 组织时间序列 Agent 任务、规则与验证协议的 harness 仓库。
- 相关性判断：最高。对搭建你自己的 `TS agent + reasoning` 实验框架很贴近。

### 5.2 光伏功率预测

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（采用对应论文公开日期作为仓库公开代理日期）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方实现，公开 physics-aware retrieval、冻结 TSFM prior 与 distribution shift correction 的完整代码路径。
- 相关性判断：最高。它是光伏功率预测方向与 TSFM 结合最紧的公开代码之一。

## 6. DailyArXiv 补检结论

- 检查对象：[zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv)
- 当前公开页显示 `Last update: 2026-07-29`，并保留 `Time Series` 板块。
- 最近 24 小时在公开 README 中能看到新的 broader time-series 条目，但与本晨报最强相关的近三个月核心条目仍主要集中在 `Post-Training in TSFMs`、`TSRouter`、`CLIR-Bench`、`TimeRouter`、`TimeClaw`、`AION`、`TimeSage-MT` 这一组。
- 结论：`DailyArXiv` 适合作为补检入口，但真正落入 `timeseries agent / reasoning / foundation model` 主线的高价值条目仍需要回到原始 arXiv / OpenReview 页面确认日期与摘要。

## 7. 观察与建议

- 如果后续继续聚焦 `TS Agent + reasoning`，建议优先盯住 `Post-Training in TSFMs`、`TimeRouter`、`TimeClaw`、`TSRouter`、`TimeSage-MT`、`AION` 这六条线。
- 如果你更偏系统搭建，`AION + TimeClaw + TimeRouter + TimeSage-MT` 基本覆盖了任务协议、运行时、模型路由与评测集四个关键层。
- 如果你更偏 AutoML / 自动建模，`GenAutoML` 值得单独跟踪，因为它是这批近三个月条目里最直接把 agentic loop 用到时间序列架构优化上的工作。
- 光伏方向的研究虽然是补充栏目，但它实际上最贴近生产落地；`PARA-PV` 与 `Physics-Informed Synthetic Histories` 都适合作为“TSFM 如何进入真实能源场景”的样板。

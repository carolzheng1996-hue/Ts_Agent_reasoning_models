# 2026-07-28 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-28 15:32 CST，Asia/Shanghai  
时间窗口：2026-04-28 至 2026-07-28  
优先来源：arXiv、OpenReview、GitHub 官方仓库页、Hugging Face 官方页、GitHub `zezhishao/DailyArXiv` README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`time series QA`、`photovoltaic power forecasting`、`timeseries harness`、`time-series AutoML`

## 今日摘要

- 基础模型主线继续从“大底座预训练”转向“如何可靠部署”：`Post-Training in TSFMs`、`Zeus`、`MACROCAST` 分别对应 post-training 设计、免调参多任务泛化、无泄漏真实时点预测。
- 时间序列 Agent 方向的最新重心很明确：`TopoBrick` 做部署时外生变量选择，`TimeRouter` 做 TSFM 路由，`TimeClaw` 与 `AION` 做运行时与 harness 基建，`KairosAgent` / `Nexus` 做语义推理与数值预测融合。
- reasoning 方向最近三个月最值得跟的几条线是：`TSRouter` 的模态-模型动态路由、`CLIR-Bench` 的不规则临床时序 QA、`Can LLM Coding Agents Reason About Time Series?` 的代理能力体检、`TimeSage-MT` 的多轮 agentic benchmark。
- 光伏功率预测方向最强相关的仍是 `PARA-PV` 与 `Physics-Informed Synthetic Histories`，二者都把 TSFM、检索或先验物理知识拉进了实际部署问题。
- `DailyArXiv` 公开 README 已在 `2026-07-28` 更新；其 `Time Series` 板块确实包含本晨报关注主题，但存在个别 README 日期与 arXiv 提交日期不一致的情况，已在补检结论中单列降权说明。

## 0. 检索说明

- 仅保留 `2026-04-28` 至 `2026-07-28` 三个月窗口内可确认日期的条目。
- arXiv 条目日期优先采用 `Submitted on`；OpenReview 条目采用页面 `Published`；GitHub / Hugging Face 项目若仓库页未直接暴露创建日期，则使用对应论文提交日期或模型 / 数据集公开日期，并在条目内注明口径。
- 本次已按要求先执行 `ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_demo_agent_pg`。
- 本地环境对 GitHub 出站 SSH 连接受限，`git pull --ff-only` 无法完成；内容检索与文件生成已继续完成，最终推送状态见本次运行说明。

## 1. 时间序列基础模型最新研究

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 的五类干预位点：参数适配、上下文增强、模型组合、输出处理与不确定性控制、压缩与专门化，核心目标是把预训练底座可靠迁移到真实下游部署。
- 相关性判断：最高。它直接对应 `foundation model -> agent runtime -> deployment policy` 这条主线。

### [2026-07-02] [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出统一的 tuning-free TSFM，通过多尺度结构与多目标 temporal masking，在 forecasting、interpolation 和 global abstraction 等多类任务上减少任务专属调参依赖。
- 相关性判断：高。它代表了“把 TSFM 从 zero-shot forecasting 推向更通用分析底座”的尝试。

### [2026-06-27] [MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting](https://arxiv.org/abs/2606.28670)

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：面向宏观经济预测构建无数据泄漏 TSFM，只用真实时点 vintage 数据与合成序列训练，强调 real-time forecasting 的部署严谨性。
- 相关性判断：高。它对 `真实生产环境中的 TSFM 评估与数据泄漏控制` 很关键。

### [2026-05-18] [Chronicle: A Multimodal Foundation Model for Joint Language and Time Series Understanding](https://arxiv.org/abs/2605.20268)

- 日期：2026-05-18
- 来源：[arXiv](https://arxiv.org/abs/2605.20268)
- 简短摘要：从头联合预训练文本与时间序列，尝试用统一 backbone 同时承担自然语言理解、时序分类和多模态预测。
- 相关性判断：高。它和 `TSFM + language grounding` 的长期路线高度相关。

### [2026-05-23] [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：不只比较 aggregate accuracy，而是按周期性业务、物理约束系统、金融市场和异质需求四类 operational regime 分析 TSFM 的适用边界，并提出 `Complexity Router` 平衡精度与成本。
- 相关性判断：最高。它直接回答“TSFM 什么时候值得上生产，什么时候该回退专用模型”。

## 2. 时间序列建模 Agent / Harness 最新研究

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：在部署时基于楼宇知识图谱与 agentic topology sampler 为目标序列挑选外生变量，不依赖训练即可做零样本 IoT 预测。
- 相关性判断：高。它把 `agentic variable selection` 明确带进时间序列部署链路。

### [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625)
- 简短摘要：在多个 TSFM 之间用轻量 routing head、selective gate 和 ensemble fallback 做专家选择，避免每次都依赖 LLM 控制器。
- 相关性判断：最高。它更像 `agent runtime` 的基础零件，工程价值很高。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404)
- 简短摘要：提出 `TimeClaw`，将 temporal tools、经验复用和 episodic multimodal memory 组合进统一 harness，使通用 Agent 具备时间序列原生运行时。
- 相关性判断：最高。它仍是近三个月里最像“时间序列 Agent 基建蓝图”的公开方案之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002)
- 简短摘要：显式拆分 LLM reasoner 与 TSFM forecaster，把文本语义理解和数值预测解耦后再融合，并利用多轮轨迹增强推理能力。
- 相关性判断：最高。它是 `semantic reasoning + numerical forecasting` 融合最清晰的代表工作之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045)
- 简短摘要：把 next-generation time series task 形式化为 `task file + workspace + validation interface`，并围绕 agents、skills、rules、memory、evaluation 和 protocols 组织完整 harness。
- 相关性判断：最高。若目标是搭建时序 Agent 平台，它仍是最系统的工程化公开参考之一。

### [2026-05-14] [Nexus : An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 流程拆成宏观波动、微观波动、上下文事件理解和最终融合四个阶段，用多 Agent 协作同时优化预测值与解释性。
- 相关性判断：高。它代表了“forecasting as agentic reasoning”的典型路线。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：面向不规则临床时间序列构建带显式时间证据的 QA benchmark，暴露模型在稀疏时序证据检索与归因上的短板。
- 相关性判断：高。它把 `irregular TS + evidence-grounded QA` 变成了独立主线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940)
- 简短摘要：把时序推理场景中的“用 LLM 文本模式还是 VLM 图像模式、用贵模型还是便宜模型”形式化为异构图路由问题。
- 相关性判断：最高。它几乎就是未来时序 reasoning runtime router 的直接原型。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 与 hybrid 三种路径，发现代码执行虽能提升正确率，但代理在统计验证与细节理解上仍有明显缺口。
- 相关性判断：最高。它正面回答“会写代码的 Agent 是否已经可靠掌握时间序列 reasoning”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建多轮时间序列推理 benchmark，覆盖 240 个任务、2680 个对话轮次，重点评估记忆、不确定性处理和领域决策能力。
- 相关性判断：最高。它是目前少数直接面向 `multi-turn agentic time series reasoning` 的系统基准。

### [2026-05-23] [TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering](https://arxiv.org/abs/2605.24703)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：将 TSQA 能力拆解为时间尺度选择、时间定位、跨区间整合三类技能，并用 `SKEvol` agentic pipeline 生成与验证题目。
- 相关性判断：高。它适合用来定位 reasoning 失效究竟出在什么技能层级。

### [2026-05-05] [FinSTaR: Towards Financial Reasoning with Time Series Reasoning Models](https://arxiv.org/abs/2605.03460)

- 日期：2026-05-05
- 来源：[arXiv](https://arxiv.org/abs/2605.03460)
- 简短摘要：面向金融领域定义 2x2 能力分类框架，并通过 `Compute-in-CoT` 与 `Scenario-Aware CoT` 改善金融时间序列推理。
- 相关性判断：中高。它偏金融子领域，但对 `domain-specific TSRM` 很有代表性。

### [2026-04-30] [Adaptive Time Series Reasoning via Segment Selection (ARTIST)](https://openreview.net/forum?id=yzBbBPheg7)

- 日期：2026-04-30
- 来源：[OpenReview / ICML 2026](https://openreview.net/forum?id=yzBbBPheg7)
- 简短摘要：提出 controller-reasoner 结构，在问答时自适应选择关键信号片段，而不是一次性编码整段序列。
- 相关性判断：高。它非常接近未来时序 reasoning 模型中的 `segment router / evidence selector` 基础组件。

## 4. 光功率 / 光伏功率预测最新研究

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：研究数值天气预报误差如何传导到光伏功率预测，并从鲁棒性、可解释性与时延三方面评估模型在工程部署中的表现。
- 相关性判断：高。它提醒光伏 forecasting/agent 系统不能只看名义精度，还要看对上游气象误差的鲁棒性。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、residual adapter 和 distribution shift correction 串成统一光伏预测流水线。
- 相关性判断：最高。它是当前 `TSFM + retrieval + physics prior + drift correction` 在光伏方向最清晰的代表作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 plant metadata 与气象变量生成 synthetic histories，让 TSFM 在新建站点几乎没有目标站历史观测时仍可进行 cold-start 预测。
- 相关性判断：高。它直接回答“新站上线初期如何让 foundation model 工作起来”。

## 5. GitHub / Hugging Face 上值得跟踪的项目

> 日期口径说明：GitHub 仓库页在当前可访问视图中未稳定暴露创建时间时，以下日期采用对应论文 `Submitted on` 或 Hugging Face 数据集 / 模型公开日期。

### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（对应论文提交日期）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方实现，公开 retrieval、冻结 TSFM prior 和 shift correction 的完整代码路径。
- 相关性判断：最高。它是光伏功率预测方向与 TSFM 结合最紧的公开代码之一。

### [2026-06-10] [UConn-DSIS/TimeRouter](https://github.com/UConn-DSIS/TimeRouter)

- 日期：2026-06-10（对应论文提交日期）
- 来源：[GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：面向 TSFM 池的路由代码，主打 `router + gate + fallback ensemble` 的轻量专家选择。
- 相关性判断：高。非常适合作为时间序列 Agent 里的 `forecast model router` 参考实现。

### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：2026-06-03（对应论文提交日期）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：时间序列 Agent harness 官方实现，强调 temporal tools、经验蒸馏和 episodic multimodal memory。
- 相关性判断：最高。它对 `timeseries agent runtime / harness` 最直接。

### [2026-05-31] [Timesage/TimeSage-MT](https://huggingface.co/datasets/Timesage/TimeSage-MT)

- 日期：2026-05-31（对应 arXiv 提交日期）
- 来源：[Hugging Face](https://huggingface.co/datasets/Timesage/TimeSage-MT)
- 简短摘要：多轮时间序列推理 benchmark 数据集，包含 240 个任务、8 个真实领域和结构化可验证答案。
- 相关性判断：最高。它适合作为后续 `time-series reasoning agent` 的核心评测资产。

### [2026-05-24] [ztxtech/aion](https://github.com/ztxtech/aion)

- 日期：2026-05-24（对应论文提交日期）
- 来源：[GitHub](https://github.com/ztxtech/aion)
- 简短摘要：围绕 task file、workspace、validation interface 组织时间序列 Agent 任务与验证协议的 harness 仓库。
- 相关性判断：最高。对搭建你自己的 `TS agent + reasoning` 实验框架非常贴近。

### [2026-05-05] [seunghan96/FinSTaR](https://github.com/seunghan96/FinSTaR)

- 日期：2026-05-05（对应论文提交日期）
- 来源：[GitHub](https://github.com/seunghan96/FinSTaR)
- 简短摘要：金融时间序列推理 benchmark 与模型实现，围绕 assessment / prediction 与 single / multi-entity 任务组织。
- 相关性判断：中高。它虽然偏金融，但很适合作为 domain-specific reasoning 参考。

## 6. DailyArXiv 补检结论

- 检查对象：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv)
- README 当前公开页显示 `Last update: 2026-07-28`，并存在 `Time Series` 板块。
- 在三个月窗口内，`Time Series` 板块可确认包含以下相关主题：
  - `Post-Training in Time Series Foundation Models: A Unifying Framework`
  - `AION: Next-Generation Tasks and Practical Harness for Time Series`
  - `FinSTaR: Towards Financial Reasoning with Time Series Reasoning Models`
  - `TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering`
- 日期一致性检查：
  - `Post-Training...`：DailyArXiv README 列示日期为 `2026-07-24`，但 arXiv `Submitted on` 为 `2026-07-22`；已保留，但排序按 arXiv 原始提交日期处理。
  - `AION`：README 列示 `2026-05-24`，与 arXiv 提交日期一致。
  - `TS-Skill`：README 列示 `2026-05-23`，与 arXiv 提交日期一致。
  - `FinSTaR`：README 公开结果中显示为 `2026-05-24` 的同批条目，但 arXiv `Submitted on` 实际为 `2026-05-05`；因此本晨报已按 `2026-05-05` 处理并降一档优先级。
- 结论：`DailyArXiv` 对本主题确实有补充价值，尤其适合做 `Time Series` 方向的补检入口；但排序与日期仍应以原始 arXiv / OpenReview 页面为准。

## 7. 观察与建议

- 如果后续继续聚焦 `TS Agent + reasoning`，建议把跟踪优先级放在 `Post-Training in TSFMs`、`TimeRouter`、`TimeClaw`、`TimeSage-MT`、`TSRouter`、`PARA-PV` 这六条线上。
- 如果你更偏系统搭建，`AION + TimeClaw + TimeRouter + TimeSage-MT` 基本覆盖了任务协议、运行时、模型路由和评测集四个关键层。
- 如果你更偏光伏部署研究，`PARA-PV` 与 `Physics-Informed Synthetic Histories` 是当前最贴近真实上线约束的两篇；前者偏检索增强与分布修正，后者偏冷启动。

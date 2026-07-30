# 2026-07-30 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-30 08:32 CST，Asia/Shanghai  
时间窗口：2026-04-30 至 2026-07-30  
优先来源：arXiv、OpenReview、官方项目页、GitHub 官方仓库页 / API、Hugging Face 官方页、机构博客  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`timeseries harness`、`time series AutoML`、`time series forecasting agent`

## 今日摘要

- 时间序列基础模型过去三个月最强的信号仍然是“从预训练转向部署闭环”：`Post-Training in TSFMs`、`Operational Viability`、`Toto 2.0` 和 `MACROCAST` 都在回答怎样把 TSFM 接入真实业务。
- 时间序列 Agent 研究继续沿三条线推进：`routing`（`TimeRouter`）、`harness/runtime`（`TimeClaw`、`AION`）、`语义融合建模`（`KairosAgent`）；`GenAutoML` 则把 agentic workflow 明确带入 AutoML。
- reasoning 方向的近期重点是“多轮评测 + 模态/模型路由 + 代码执行检验”：`TSRouter`、`TimeSage-MT`、`TS-Skill`、`Can LLM Coding Agents Reason About Time Series?` 组成了比较完整的研究链。
- GitHub 项目清单这次做了额外日期清洗：优先使用 GitHub API 的 `created_at` / `pushed_at`，因此比昨天更容易区分“近三个月新建项目”和“老仓库在近三个月有关键更新”的差别。

## 0. 检索说明

- 仅保留 `2026-04-30` 至 `2026-07-30` 窗口内的内容。
- 论文日期优先采用 arXiv `Submitted on`、OpenReview `Published` 或官方模型卡/项目页可核对日期。
- GitHub 项目日期优先采用 GitHub API `created_at`；若仓库创建时间早于三个月窗口，但近三个月有重要版本、模型卡或高活跃更新，则明确标注为“活跃更新项目”而非“新建项目”。
- 已执行 `ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_demo_agent_pg`，并完成 `git pull --ff-only origin main`。
- 今天是周四，不生成每周简报；下一个周报文件应在周五生成到 `daily-hotpot/weekly-brief-2026-W31.md`。

## 1. 时间序列基础模型最新研究

### [2026-07-25] [Foundation Models and Fine-Tuning: Toward a New Generation of Models for Time Series Forecasting](https://arxiv.org/abs/2607.23146)

- 日期：2026-07-25
- 来源：[arXiv](https://arxiv.org/abs/2607.23146)
- 简短摘要：系统回顾 TSFM 的架构、预训练方式与微调策略，并强调 post-pretraining fine-tuning 在大量真实任务里比纯 zero-shot 更稳。
- 相关性判断：最高。它直接解释了 foundation model 如何进入可落地的任务适配阶段。

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：把 TSFM 的 post-training 总结为参数适配、上下文增强、模型组合、输出后处理与压缩专门化五类干预位点。
- 相关性判断：最高。它是 `foundation model -> agent runtime -> deployment policy` 之间最关键的过渡层论文之一。

### [2026-07-02] [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)

- 日期：2026-07-02
- 来源：[arXiv](https://arxiv.org/abs/2607.01918)
- 简短摘要：提出尽量减少手工调参与任务专门化的 TSFM 设计，希望一套模型同时覆盖 forecasting、interpolation 与表示学习。
- 相关性判断：高。它反映了 TSFM 从“专用预测器”向“通用时序分析底座”演进。

### [2026-06-27] [MACROCAST: A Vintage-Consistent Time Series Foundation Model for Real-Time Macroeconomic Forecasting](https://arxiv.org/abs/2606.28670)

- 日期：2026-06-27
- 来源：[arXiv](https://arxiv.org/abs/2606.28670)
- 简短摘要：围绕 real-time macro forecasting 建立显式避免信息泄漏的 TSFM，强调 vintage data 与时间口径一致性。
- 相关性判断：高。对任何想把 TSFM 接到真实数据流水线的人都很重要。

### [2026-05-23] [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：不只比较 aggregate accuracy，而是从周期性业务、物理约束系统、金融市场与异质需求等 operational regime 评估 TSFM 上线边界。
- 相关性判断：最高。它直接回答“什么时候该用 TSFM，什么时候该退回专用模型”。

### [2026-05-19] [Toto 2.0: Time Series Forecasting Enters the Scaling Era](https://arxiv.org/abs/2605.20119)

- 日期：2026-05-19
- 来源：[arXiv](https://arxiv.org/abs/2605.20119) / [Hugging Face 模型页](https://huggingface.co/Datadog/Toto-Open-Base-1.0)
- 简短摘要：Datadog 将 observability 场景里的时序建模扩展到更大规模训练，突出 scaling、工业数据覆盖面与可复用 foundation model 接口。
- 相关性判断：高。它是近三个月里最值得关注的工业界 TSFM 强信号之一。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用知识图谱和 topology sampler 自动挑选外生变量，在楼宇 IoT forecasting 中做零样本预测。
- 相关性判断：高。它展示了 agentic variable selection 如何直接影响时序预测质量。

### [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625)
- 简短摘要：在多个 TSFM 候选之间加入轻量 router、selective gate 与 fallback ensemble，用更低成本做模型选择。
- 相关性判断：最高。它非常像未来时间序列 Agent runtime 中的核心调度模块。

### [2026-06-04] [GenAutoML: An Agentic Framework for Dynamic Architecture Generation and Optimization in Time-Series Analysis](https://arxiv.org/abs/2606.05860)

- 日期：2026-06-04
- 来源：[arXiv](https://arxiv.org/abs/2606.05860)
- 简短摘要：把时间序列 AutoML 从静态搜索扩展成 agentic 循环，包含候选架构生成、评估、反馈和再优化。
- 相关性判断：最高。它与用户指定的 `timeseries Agent + machine learning + AutoML` 主题高度重合。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404)
- 简短摘要：提出 `TimeClaw`，把 temporal tools、经验复用与 episodic multimodal memory 组织进统一 harness，赋予通用 Agent 时间序列原生工作流。
- 相关性判断：最高。它仍是近三个月里最完整的时间序列 harness/runtime 公开方案之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [官方项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：显式拆分语言语义理解和数值预测，由 LLM reasoner 与 TSFM forecaster 协同生成更可解释的预测。
- 相关性判断：最高。它是“语义理解 + 数值预测融合”的代表性 agentic 时序方案。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045)
- 简短摘要：把时间序列任务定义成 `task file + workspace + validation interface`，并配套 rules、skills、memory、protocols 与评测机制。
- 相关性判断：最高。若目标是搭建时序 Agent 平台，它仍是工程结构最完整的公开参考之一。

## 3. 时间序列 Reasoning 模型最新研究

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880)
- 简短摘要：针对不规则临床时间序列构建带证据链的多模态问答 benchmark，暴露模型在稀疏时序证据检索与归因上的薄弱点。
- 相关性判断：高。它把 irregular TS reasoning 单独提升成重要评测方向。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08940)
- 简短摘要：把“用文本模式还是图像模式、用便宜模型还是贵模型”的选择形式化为异构图上的动态路由问题。
- 相关性判断：最高。它几乎就是时序 reasoning runtime router 的原型。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 与 hybrid 三种路径，发现代码执行能提升正确率，但代理在统计验证和细节理解上仍不稳定。
- 相关性判断：最高。它直接检验“会写代码的 Agent 是否真的会做时间序列推理”。

### [2026-05-31] [TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning](https://arxiv.org/abs/2606.01498)

- 日期：2026-05-31
- 来源：[arXiv](https://arxiv.org/abs/2606.01498)
- 简短摘要：构建覆盖 240 个任务、2680 个对话轮次的多轮时序推理 benchmark，重点评估记忆、不确定性处理与决策能力。
- 相关性判断：最高。它是当前最像 `multi-turn time-series reasoning` 标准评测底座的公开资产之一。

### [2026-05-23] [TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering](https://arxiv.org/abs/2605.24703)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：将 TSQA 能力拆成时间尺度选择、时间定位、跨区间整合等可诊断技能，并配套 agentic 生成与验证流程。
- 相关性判断：高。适合作为 reasoning 失败定位工具，而不是只看最终答对率。

## 4. GitHub 上值得跟踪的最新项目与活跃更新

> 日期口径：优先使用 GitHub API `created_at` 判断“新建项目”；若创建时间不在窗口内，但近三个月有关键版本或持续活跃更新，则列入“活跃更新项目”。

### 4.1 近三个月内新建的项目

#### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方代码，围绕 physics-aware retrieval、冻结 TSFM prior 与 distribution shift correction 组织光伏预测流水线。
- 相关性判断：高。虽然偏光伏子领域，但它是 `TSFM + retrieval + deployment correction` 的实战样板。

#### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：2026-06-03（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：时间序列 Agent harness 官方实现，强调 temporal tools、经验蒸馏与 episodic memory。
- 相关性判断：最高。对 `timeseries agent runtime / harness` 的参考价值最大。

#### [2026-06-01] [TROUBADOUR000/Awesome-Agentic-Time-Series](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)

- 日期：2026-06-01（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/TROUBADOUR000/Awesome-Agentic-Time-Series)
- 简短摘要：围绕 Agentic Time Series 的论文、代码、benchmark 与 survey 清单，适合做后续跟踪入口。
- 相关性判断：高。它不是模型本体，但能显著提升后续检索效率。

#### [2026-05-19] [UConn-DSIS/TimeRouter](https://github.com/UConn-DSIS/TimeRouter)

- 日期：2026-05-19（GitHub API `created_at`）
- 来源：[GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：公开 TSFM router、gate 和 fallback ensemble 的实现，面向多模型池下的高效选择。
- 相关性判断：最高。它是时间序列 Agent 中最接近“模型调度器”的公开代码之一。

### 4.2 近三个月内高活跃更新的项目

#### [2026-07-29] [TimeCopilot/timecopilot](https://github.com/TimeCopilot/timecopilot)

- 日期：2026-07-29（GitHub API `pushed_at`；仓库创建于 2025-06-18，不属于新建项目）
- 来源：[GitHub](https://github.com/TimeCopilot/timecopilot) / [PyPI](https://pypi.org/project/timecopilot/)
- 简短摘要：把自然语言查询映射到 forecasting、cross-validation、异常检测与多 TSFM 调用的统一 Agent 接口，近三个月仍保持高活跃更新。
- 相关性判断：最高。它是当前最接近“可直接上手的时序 GenAI Agent 产品化仓库”的公开实现。

#### [2026-07-26] [ztxtech/aion](https://github.com/ztxtech/aion)

- 日期：2026-07-26（GitHub API `pushed_at`；仓库创建于 2026-04-12，略早于三个月窗口）
- 来源：[GitHub](https://github.com/ztxtech/aion) / [项目页](https://ztxtech.github.io/aion/)
- 简短摘要：OpenCode-based time-series harness，强调 structured forecasting、contextual reasoning、tool use 与 validation-driven workflow。
- 相关性判断：最高。虽然不是窗口内新建，但仍是你做时间序列 Agent 平台时最值得持续跟踪的工程骨架。

#### [2026-07-20] [DataDog/toto](https://github.com/DataDog/toto)

- 日期：2026-07-20（GitHub API `pushed_at`；仓库创建于 2025-05-05，不属于新建项目）
- 来源：[GitHub](https://github.com/DataDog/toto) / [Hugging Face 模型页](https://huggingface.co/Datadog/Toto-Open-Base-1.0)
- 简短摘要：Datadog 的开源 TSFM 工程仓库，近三个月以 `Toto 2.0` 为中心持续推进模型、数据与训练接口。
- 相关性判断：高。它更偏 foundation model 工程而非 Agent，但非常适合观察工业级 TSFM 实作路径。

## 5. 附：按仓库规则保留的光伏功率预测补充

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079)
- 简短摘要：把 physics-aware retrieval、冻结的 Chronos 先验、residual adapter 与 drift correction 串成统一光伏预测流水线。
- 相关性判断：最高。它是 `TSFM + retrieval + physics prior + drift correction` 在垂直场景中的代表作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：通过 plant metadata 与气象变量合成 synthetic histories，让 TSFM 在新建站点冷启动阶段也能工作。
- 相关性判断：高。它回答了真实能源场景里最棘手的“没历史数据如何启用 TSFM”问题。

## 6. 结论

- 如果你现在更关心“研究趋势”，优先读 `Post-Training in TSFMs`、`Operational Viability`、`TSRouter`、`TimeSage-MT`。
- 如果你更关心“搭系统”，优先看 `TimeClaw`、`AION`、`TimeRouter`、`TimeCopilot` 四条代码线。
- 如果你更关心“AutoML / Agent 结合”，今天最值得继续深挖的仍是 `GenAutoML` 与 `KairosAgent`，前者偏自动化架构搜索，后者偏语义推理和数值预测融合。

# 2026-07-27 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-07-27 15:34 CST，Asia/Shanghai  
时间窗口：2026-04-27 至 2026-07-27  
优先来源：arXiv、官方项目页、GitHub 官方仓库页 / GitHub API、DailyArXiv 公开 README  
检索词：`time series foundation model`、`time series agent`、`agentic time series`、`time series reasoning`、`TSQA`、`time-series harness`、`time-series AutoML`、`photovoltaic power forecasting`

## 今日摘要

- 截至 `2026-07-27` 早晨，过去 24 小时未检出比 `2026-07-22` 那组 TSFM 论文更近、且更强相关的新学术条目；研究增量仍主要集中在 `post-training`、`forecast editing`、`routing`、`tool-grounded reasoning` 和 `frozen TSFM deployment`。
- 基础模型方向的最新信号很明确：研究重点正在从“继续做更大底座”转向“如何把已有 TSFM 更可靠地接入 agent runtime、retrieval、deployment policy 与人类反馈”。
- Agent 方向在论文层面仍由 `TopoBrick`、`TimeRouter`、`TimeClaw`、`KairosAgent`、`AION` 等工作主导；GitHub 侧则出现了 `2026-07-26` 新建的 [`inContextML`](https://github.com/sureshkvn/inContextML)，说明 `MCP + forecasting tool` 仍在快速演化。
- reasoning 主线依旧围绕 `benchmark -> verifier -> router -> tool use` 展开，`TSRouter`、`CLIR-Bench`、`TSCognition`、`IRTS-ToolBench` 与 `TS-Skill` 已形成较完整链条。
- 光伏功率预测方向最近三个月最值得跟踪的仍是 `PARA-PV` 与 `physics-informed synthetic histories for cold-start PV`；二者都明显靠近 `retrieval + frozen TSFM + domain prior + shift correction`。

## 0. 检索说明

- 仅保留 `2026-04-27` 至 `2026-07-27` 三个月窗口内的条目。
- 论文日期优先采用 arXiv `Submitted on` 日期；GitHub 项目日期优先采用 GitHub API `created_at`。
- `DailyArXiv` 公开页已检查到 `Time Series` 板块，但其公开 README 显示 `Last update: 2026-05-27`，未提供比原始 arXiv 更近的独有条目，因此只作为补检参考，不作为主排序依据。
- OpenReview 端候选页本次触发浏览器验证，无法稳定抽取日期；未能独立确认的 OpenReview 条目不进入主清单。
- 今天是周一，不生成周报文件。

## 1. 时间序列基础模型最新研究

### [2026-07-22] [Post-Training in Time Series Foundation Models: A Unifying Framework](https://arxiv.org/abs/2607.20002)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.20002)
- 简短摘要：系统梳理 TSFM post-training 的五类干预位点：参数适配、上下文增强、模型组合、输出处理与不确定性控制、压缩与专门化，核心目标是把预训练底座可靠迁移到真实下游部署。
- 相关性判断：最高。它直接对应 `foundation model -> agent runtime -> deployment policy` 这一条主线。

### [2026-07-22] [Expert-Guided Forecast Editing for Time-Series Foundation Models](https://arxiv.org/abs/2607.19659)

- 日期：2026-07-22
- 来源：[arXiv](https://arxiv.org/abs/2607.19659)
- 简短摘要：提出 `DEFT`，让冻结 TSFM 先生成候选轨迹，再用昂贵专家反馈在 trend-seasonal 分解空间里做结构化编辑，在有限查询预算下平衡 exploitation 与 exploration。
- 相关性判断：高。它很像未来时序 Agent 的 `expert feedback -> forecast revision` 子模块。

### [2026-07-14] [The Spectrum Is Not Enough: When Context Helps Time-Series Forecasting](https://arxiv.org/abs/2607.13006)

- 日期：2026-07-14（v2 更新于 2026-07-15）
- 来源：[arXiv](https://arxiv.org/abs/2607.13006)
- 简短摘要：指出频谱指标并不能回答“增加上下文、长窗口、retrieval 或 pretrained model 是否有用”，并提出 `coverage deficit` 作为更接近部署决策的无标签诊断。
- 相关性判断：最高。非常适合转化成时序 Agent 的 `retrieval gate / router / model selector`。

### [2026-07-07] [RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models](https://arxiv.org/abs/2607.06504)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06504)
- 简短摘要：构建大规模真实多变量时序语料，并比较真实语料与合成语料预训练对 TSFM 零样本泛化的影响。
- 相关性判断：高。它直接影响 `TS foundation model 的数据配方` 与真实世界泛化能力。

### [2026-07-06] [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)

- 日期：2026-07-06
- 来源：[arXiv](https://arxiv.org/abs/2607.04919)
- 简短摘要：在 30 个数据集上比较零样本 / LoRA TSFM 与经典方法，给出 `n_train` 与 seasonality 驱动的 break-even 规则，并指出短序列上 LoRA 甚至可能降级性能。
- 相关性判断：最高。几乎可以直接写进时序 Agent 的成本感知路由规则。

### [2026-05-23] [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24381)
- 简短摘要：按周期性业务、物理约束系统、金融市场和异质需求四类 regime 比较 TSFM 与 supervised specialist，并提出 `Complexity Router` 平衡精度与成本。
- 相关性判断：最高。它回答的是 `TSFM 什么时候值得上生产，什么时候应该回退专用模型`。

## 2. 时间序列建模 Agent 最新研究

### [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)

- 日期：2026-07-07
- 来源：[arXiv](https://arxiv.org/abs/2607.06349)
- 简短摘要：利用楼宇知识图谱和 `agentic topology sampler` 在部署时为目标序列选择外生变量，不依赖训练即可做零样本 IoT 预测。
- 相关性判断：高。它把 agentic variable selection 真正带进了时序部署链路。

### [2026-06-10] [TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models](https://arxiv.org/abs/2606.11625)

- 日期：2026-06-10
- 来源：[arXiv](https://arxiv.org/abs/2606.11625) / [GitHub](https://github.com/UConn-DSIS/TimeRouter)
- 简短摘要：利用轻量 routing head、selective gate 和 ensemble fallback 在多个 TSFM 之间做专家选择，避免每次依赖 LLM 控制器。
- 相关性判断：高。它更像 agent runtime 的基础零件，而不是完整 Agent，但工程价值很高。

### [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)

- 日期：2026-06-03
- 来源：[arXiv](https://arxiv.org/abs/2606.05404) / [GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：提出 `TimeClaw`，把 temporal tools、经验复用和 episodic multimodal memory 组合进统一 harness，使通用 Agent 具备面向时序的可审计运行时。
- 相关性判断：最高。它仍是近三个月最像“时间序列 Agent 基建蓝图”的公开方案之一。

### [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)

- 日期：2026-05-28
- 来源：[arXiv](https://arxiv.org/abs/2605.30002) / [项目页](https://foundation-model-research.github.io/KairosAgent/)
- 简短摘要：显式拆分 LLM reasoner 与 TSFM forecaster，把文本语义理解和数值预测解耦再融合，并用多轮轨迹强化 reasoning。
- 相关性判断：最高。它是 `LLM reasoning + TSFM forecasting` 融合最清晰的代表工作之一。

### [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)

- 日期：2026-05-24
- 来源：[arXiv](https://arxiv.org/abs/2605.25045) / [GitHub](https://github.com/ztxtech/aion)
- 简短摘要：围绕 `task file + workspace + validation interface` 形式化时间序列 Agent 任务，并把 agents、skills、rules、memory、evaluation 与 protocol 组织成统一 harness。
- 相关性判断：最高。若目标是搭建时序 Agent 平台，它仍是最系统的工程化公开参考之一。

### [2026-05-14] [Nexus : An Agentic Framework for Time Series Forecasting](https://arxiv.org/abs/2605.14389)

- 日期：2026-05-14
- 来源：[arXiv](https://arxiv.org/abs/2605.14389)
- 简短摘要：把 forecasting 拆成宏观波动、微观波动、上下文事件与最终合成四个阶段，用多 Agent 协作提升数值预测与解释性。
- 相关性判断：高。它明显站在 `forecasting as reasoning` 的方向上，而不是传统单模型回归。

## 3. 时间序列 reasoning 模型最新研究

### [2026-07-10] [CLIR-Bench: Benchmarking Multimodal Question Answering over Irregular Clinical Time Series](https://arxiv.org/abs/2607.09880)

- 日期：2026-07-10
- 来源：[arXiv](https://arxiv.org/abs/2607.09880) / [Hugging Face 数据集](https://huggingface.co/datasets/winall/CLIR-Bench)
- 简短摘要：为不规则临床时间序列构建多模态 QA benchmark，把问题、答案与显式时间证据绑定，暴露一般模型在稀疏临床证据检索上的短板。
- 相关性判断：高。它让 `irregular TS + evidence-grounded QA` 成为独立主线。

### [2026-07-09] [TSRouter: Dynamic Modality-Model Selection for Time Series Reasoning](https://arxiv.org/abs/2607.08940)

- 日期：2026-07-09（v2 更新于 2026-07-18）
- 来源：[arXiv](https://arxiv.org/abs/2607.08940) / [GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：把时序推理里“用 LLM 文本模式还是 VLM 图像模式、用贵模型还是便宜模型”的选择形式化为异构图路由问题。
- 相关性判断：最高。它几乎就是未来时序 reasoning runtime router 的直接原型。

### [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)

- 日期：2026-06-20
- 来源：[arXiv](https://arxiv.org/abs/2606.22126) / [GitHub](https://github.com/EIT-NLP/CognitiveTSR)
- 简短摘要：提出 `TSCognition` 多模态 benchmark，把时序 reasoning 拆成 `Decoding / Grounding / Inferring / Extrapolating / Acting` 五类认知任务，并用 `TSAlign` 做统一对齐。
- 相关性判断：最高。它是近三个月最像“总纲”的时序 reasoning 工作之一。

### [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)

- 日期：2026-06-15
- 来源：[arXiv](https://arxiv.org/abs/2606.16545)
- 简短摘要：比较 raw 数值输入、coding agent 与二者结合三种路径，发现代码执行虽能提升正确率，但最佳代理仍有显著错误率，并暴露统计验证与细节理解缺口。
- 相关性判断：最高。它直接回答“会写代码的 Agent 是否已经可靠掌握时序 reasoning”。

### [2026-06-13] [Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning](https://arxiv.org/abs/2606.15107)

- 日期：2026-06-13
- 来源：[arXiv](https://arxiv.org/abs/2606.15107) / [GitHub](https://github.com/SanhornC/IRTS-ToolBench)
- 简短摘要：提出 `IRTS-ToolBench`，聚焦真实部署更常见的不规则时间序列问答，用工具调用与可复现实验协议做 verifiable evaluation。
- 相关性判断：高。它很适合作为 irregular TSQA 的 verifier / benchmark 基座。

### [2026-05-23] [TS-Skill: A Benchmark for Evaluating Analytical Skills in Time-Series Question Answering](https://arxiv.org/abs/2605.24703)

- 日期：2026-05-23
- 来源：[arXiv](https://arxiv.org/abs/2605.24703)
- 简短摘要：把 TSQA 能力拆成 `时间尺度选择`、`时间定位`、`跨区间整合` 三类技能，并通过 `SKEvol` agentic pipeline 生成并验证带时间戳证据的问题。
- 相关性判断：高。它对 `skill-level diagnosis` 和 reasoning 失效定位非常有价值。

## 4. 光功率 / 光伏功率预测最新研究

### [2026-07-14] [Robustness of Deep Learning Models for PV Power Forecasting under NWP Forecast Errors: A Spatiotemporal and Physically Interpretable Analysis](https://arxiv.org/abs/2607.12954)

- 日期：2026-07-14
- 来源：[arXiv](https://arxiv.org/abs/2607.12954)
- 简短摘要：分析数值天气预报误差如何时空耦合地传导到光伏功率预测，并用 SHAP、积分梯度与 Pareto 分析讨论鲁棒性、延迟与解释性的平衡。
- 相关性判断：高。它提醒光伏 Agent 不能只追求名义精度，还要识别上游天气输入失真。

### [2026-07-09] [PARA-PV: Physics-Aware Retrieval-Augmented PV Prediction Based on Frozen Foundation Model and Distribution Shift Correction](https://arxiv.org/abs/2607.08079)

- 日期：2026-07-09
- 来源：[arXiv](https://arxiv.org/abs/2607.08079) / [GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：把 physics-aware retrieval、冻结 Chronos 先验、residual adapter 与 distribution shift correction 串成统一光伏预测流水线。
- 相关性判断：最高。它是当前 `TSFM + retrieval + physics prior + drift correction` 的光伏代表作。

### [2026-06-05] [Time series Foundation Models based on Physics-Informed Synthetic Histories for Cold-Start Photovoltaic Forecasting](https://arxiv.org/abs/2606.07457)

- 日期：2026-06-05
- 来源：[arXiv](https://arxiv.org/abs/2606.07457)
- 简短摘要：为冷启动场站生成 physics-informed synthetic histories，使多个 TSFM 在几乎没有目标站历史观测的情况下仍可通过 inference-time conditioning 保持可用预测。
- 相关性判断：高。它直接回答“新站点刚上线时 TSFM 还能否工作”。

## 5. GitHub 上值得跟踪的新项目

### [2026-07-26] [sureshkvn/inContextML](https://github.com/sureshkvn/inContextML)

- 日期：2026-07-26（GitHub `created_at`）
- 来源：[GitHub](https://github.com/sureshkvn/inContextML)
- 简短摘要：把 in-context forecasting、回归预测和 mock classifier 打包成一个 MCP server，直接面向 Agent 暴露时序预测工具。
- 相关性判断：高。仓库很新，但方向非常贴近 `MCP + forecasting tool layer`。

### [2026-07-18] [Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting](https://github.com/Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting)

- 日期：2026-07-18（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Muhtasim-Munif-Fahim/cost-aware-tsfm-forecasting)
- 简短摘要：围绕 TSFM 与高效 specialist 的成本感知对比，公开 harness、统计检验、图表和复现实验包。
- 相关性判断：高。它可直接为时序 Agent 的 `model-routing cost policy` 提供参考。

### [2026-07-11] [Lkhanaajav/mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals)

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/mcp-trajectory-evals)
- 简短摘要：提供 trajectory-level eval harness，逐步评分 tool selection、arguments、grounding 与效率，并支持 CI regression gate。
- 相关性判断：最高。它正好补上时序 Agent 很缺的 `trajectory verifier / CI gate` 基础设施。

### [2026-07-11] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 日期：2026-07-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/Lkhanaajav/timeseries-mcp)
- 简短摘要：为 AI agents 提供 deterministic time-series statistics MCP，包括异常检测、变点、分解、趋势检验和数据质量审计。
- 相关性判断：最高。它非常接近“给时序 Agent 一个稳定统计工具层”的实用形态。

### [2026-07-09] [weican1103/PARA-PV](https://github.com/weican1103/PARA-PV)

- 日期：2026-07-09（GitHub `created_at`）
- 来源：[GitHub](https://github.com/weican1103/PARA-PV)
- 简短摘要：`PARA-PV` 官方实现，公开 retrieval、frozen TSFM prior 和 shift correction 的光伏流水线代码。
- 相关性判断：高。它是光伏功率预测垂直方向最贴近当前研究主线的公开代码。

### [2026-07-08] [tianyi-lab/TSRouter](https://github.com/tianyi-lab/TSRouter)

- 日期：2026-07-08（GitHub `created_at`）
- 来源：[GitHub](https://github.com/tianyi-lab/TSRouter)
- 简短摘要：`TSRouter` 官方代码，聚焦时序 reasoning 场景中的 `modality-model selection` 与 cost-aware routing。
- 相关性判断：最高。它将 reasoning router 从论文概念推进到可复现实装。

### [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)

- 日期：2026-06-03（GitHub `created_at`）
- 来源：[GitHub](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
- 简短摘要：`Harnessing Generalist Agents for Contextualized Time Series` 的官方仓库，指向时序 Agent 的工具、记忆和轨迹化 runtime。
- 相关性判断：最高。它仍是时间序列 harness 设计里最值得跟踪的代码基线之一。

### [2026-05-11] [md1415/AutoML_TimeSeries_Studio](https://github.com/md1415/AutoML_TimeSeries_Studio)

- 日期：2026-05-11（GitHub `created_at`）
- 来源：[GitHub](https://github.com/md1415/AutoML_TimeSeries_Studio)
- 简短摘要：面向时间序列预测的 AutoML Web 应用，自动比较 XGBoost、Prophet、Random Forest 和 LSTM，并导出带区间的预测结果。
- 相关性判断：中高。它不是 Agent 框架，但补上了本轮主题里 `timeseries + AutoML` 的新项目样本。

## 6. DailyArXiv 补检结论

- 补检来源：[zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv)；公开页可见 `Last update: 2026-05-27`，因此它更适合作为补检索引，不适合作为比 arXiv 原始页面更高优先级的日期来源。
- 三个月窗口内，与本晨报主题最高相关且可直接纳入主清单的 DailyArXiv `Time Series` 条目仍是 [Assessing the Operational Viability of Foundation Models for Time Series Forecasting](https://arxiv.org/abs/2605.24381)；该文原始 arXiv 日期为 `2026-05-23`，正文已纳入。
- [HEPA: A Self-Supervised Horizon-Conditioned Event Predictive Architecture for Time Series](https://arxiv.org/abs/2605.11130) 在 README 中可见且日期显示为 `2026-05-25`；但原始 arXiv 页面显示其 `Submitted on` 为 `2026-05-11`、最新修订为 `2026-06-03`。它在时间窗口内，但主题更偏 `self-supervised event prediction`，与 `TS Agent / reasoning / PV forecasting` 主轴相关性较弱，因此降优先级，不进入主清单。
- 本次未发现 DailyArXiv `Time Series` 板块中“日期在窗口内、且主相关性高、但正文尚未覆盖”的独有新增条目；若 README 日期与原始 arXiv 日期冲突，正文一律以 arXiv `Submitted on` 为准。

## 7. 观察结论

- 学术前沿已经明显从“训练更大的 TSFM”转向“让 TSFM 更可路由、更可反馈、更可验证、更能接入 Agent”。
- `routing` 是当前最核心的工程主题，分别出现在 `TimeRouter`、`TSRouter`、`The Spectrum Is Not Enough` 与 `Assessing the Operational Viability...` 这几条线里。
- reasoning 研究不再只做“会不会答题”，而是在补 `benchmark / verifier / evidence / tool use / cost-aware model selection` 这些更接近真实 analyst workflow 的部件。
- GitHub 新仓库的增量主要落在 `MCP 工具层`、`trajectory eval harness`、`cost-aware TSFM evaluation` 与 `AutoML 应用化`，和论文主线高度一致。

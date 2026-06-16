# 《TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning》中文文献解读

**论文**：TimeSage-MT: A Multi-Turn Benchmark for Evaluating Agentic Time Series Reasoning  
**论文链接**：[arXiv:2606.01498](https://arxiv.org/abs/2606.01498) / [PDF](https://arxiv.org/pdf/2606.01498) / [TeX](https://arxiv.org/e-print/2606.01498)  
**项目/数据**：[GitHub: TimeSage-Series/TimeSage-MT](https://github.com/TimeSage-Series/TimeSage-MT) / [Hugging Face: TimeSage-Series/TimeSage-MT](https://huggingface.co/datasets/TimeSage-Series/TimeSage-MT)

## 1. 一句话总结

TimeSage-MT 是一个面向**时间序列分析 Agent** 的多轮 benchmark。它不再只问模型一个 forecasting、classification 或 anomaly detection 问题，而是模拟真实分析工作流：用户连续追问，Agent 需要读数据、选方法、写代码、记住前文、串联分析、纠正误导、评估不确定性，并最终给出有领域依据的建议或决策。

论文同时提出了一个结构化时间序列 Agent 系统 **TimeSage**，配备 226 个分析技能、36 个技能类别，并用 TimeSage-MT 对 direct answering、code-enabled reasoning、skill-guided reasoning 和完整 agentic pipeline 进行比较。

## 2. 这篇论文解决的问题

传统时间序列 benchmark 大多是单步任务：

| 任务类型 | 典型输入输出 |
|---|---|
| Forecasting | 给历史序列，预测未来值 |
| Anomaly Detection | 给序列，找异常点 |
| Classification | 给序列，判断类别 |
| Imputation | 给缺失序列，补全缺失值 |

这些 benchmark 适合比较模型在固定任务上的性能，但无法评估真实分析流程。现实中，一个分析师通常不会只做一次预测，而是经历以下过程：

1. 检查数据质量、频率、缺失值、异常点、趋势和季节性。
2. 根据数据属性选择方法，例如分解、预测、异常检测、变点检测或因果分析。
3. 设置方法参数，例如 forecast horizon、seasonal period、异常阈值、训练测试切分。
4. 把上一轮结论带入下一轮分析。
5. 当用户改变目标或提出错误假设时，基于证据调整分析。
6. 在最终答案中给出风险、不确定性、领域解释和决策建议。

TimeSage-MT 的核心目标就是评测这整个过程，而不是只评测一个终点任务。

## 3. Benchmark 规模

TimeSage-MT 的基本规模如下：

| 项目 | 数值 |
|---|---:|
| 任务数 | 240 |
| 对话轮数 | 2,680 |
| 难度/复杂度层级 | 4 |
| 真实领域 | 8 |
| 每个层级任务数 | 60 |
| 数据源 | 65 个白名单真实时间序列来源 |
| 技能库 | 226 个技能，36 类 |
| 污染风险标记 | 15/65 个源、65/240 个任务带 contamination-risk metadata |

8 个领域包括 healthcare、energy、manufacturing、climate、finance、telecommunications、transportation、retail。

数据时间粒度覆盖很广，包括 100 Hz、逐样本、逐连接、1 分钟、5 分钟、15 分钟、小时、日、月以及不规则事件流。

## 4. 四个复杂度层级 L1-L4

TimeSage-MT 不是简单把 prompt 写得更难，而是把真实分析流程拆成 4 个阶段。

| 层级 | 名称 | 对话长度 | Reasoning graph | 主要测试内容 |
|---|---|---:|---|---|
| L1 | Open Exploration | 3-10 轮 | 无深层分析链 | 数据画像、开放探索、基础统计总结 |
| L2 | Multi-skill Analysis | 5-12 轮 | 2-4 个分析节点，至少一个依赖 | 多技能串联、跨轮发现、依赖跟踪 |
| L3 | Grounded Synthesis | 8-15 轮 | 4-6 个领域相关分析节点 | 跨方法证据整合、领域化总结 |
| L4 | Full Decision Path | 12-20 轮 | 6-10 个分析节点，最终是 decision node | 推荐、理由、置信度、风险、结构化决策 |

L1-L2 是 general-purpose tasks；L3-L4 是 domain-grounded tasks。也就是说，越往后越接近真实场景里的“分析支持决策”，而不是单纯把题目变长。

论文还设计了三类用户风格：

| 用户风格 | 含义 |
|---|---|
| Open | 用户自然提问，不暗示答案 |
| Guided-correct | 用户给出有帮助的正确方向 |
| Guided-wrong | 用户给出看似合理但错误的建议，要求 Agent 能基于证据反驳 |

这个 guided-wrong 设计很关键，因为真实用户经常会带着错误假设来问问题。一个可靠 Agent 不能只是顺从用户，而要能解释为什么某个方向不成立。

## 5. 九个能力 C1-C9

TimeSage-MT 的诊断性来自 9 个 capability 维度。每个能力不是抽象标签，而是可以从对话、代码、工具调用和最终输出中评分的可观察行为。

| ID | 能力 | 家族 | 操作定义 |
|---|---|---|---|
| C1 | Read | Basic | 识别频率、长度、平稳性、季节性、缺失、异常、趋势等数据属性，不编造数值 |
| C2 | Select | Basic | 根据数据画像和任务，从 226 个技能中选择合适方法 |
| C3 | Configure | Basic | 正确设置 forecast horizon、seasonal period、异常阈值、train/test split 等参数 |
| C4 | Remember | Reasoning | 使用前文结果、决策或中间产物，不自相矛盾 |
| C5 | Chain | Reasoning | 按 gold reasoning graph 的依赖边组织分析顺序 |
| C6 | Adapt | Reasoning | 面对用户重定向、新证据或误导性建议时能恢复和调整 |
| C7 | Decide | Action | 把分析转化成连贯、可执行的决策 |
| C8 | Calibrate | Action | 报告合理的不确定性、置信度、区间或保守措辞 |
| C9 | Ground | Action | 在领域任务中应用行业惯例、阈值、监管或业务知识 |

这个 taxonomy 的价值是：它能区分不同失败类型。比如总分低可能来自 C1 读数据失败，也可能来自 C3 参数配置失败，还可能来自 C8 不确定性校准失败。单一 accuracy 无法提供这种诊断。

## 6. 数据生成与质控流程

TimeSage-MT 的构造流程分成生成阶段和质控阶段。

### 6.1 生成阶段

| 阶段 | 类型 | 作用 |
|---|---|---|
| S1 Data Selection | deterministic | 从 65 个白名单真实数据源中筛选，检查 license、格式、长度和时间轴 |
| S2 Profiling | deterministic | 做 80/20 visible/held-out split，并计算频率、维度、平稳性、季节性、缺失、复杂度等 11 类 profile |
| S3 Task Assignment | deterministic | 分配层级、长度、用户风格、领域、任务家族，保证每层 60 个任务 |
| S4 Reasoning Path | deterministic | 构建 typed analytical DAG，定义分析节点、依赖边和预期输出 |
| S5 Dialogue Generation | LLM-powered | 用 Claude Opus 4.6 根据 profile、reasoning graph、数据预览和技能注册表生成多轮对话 |

最重要的设计是：**对话文本可以由 LLM 生成，但 gold target 不来自 LLM**。可验证答案由 deterministic extractor 运行 reference code 产生，且 reference code 和 gold target 不暴露给被测 Agent。

### 6.2 80/20 visible/held-out split

S2 会把每个数据源切成：

- 前 80%：visible slice，用于构造任务和给 Agent 看；
- 后 20%：held-out slice，用于 gold extraction 和最终评分。

这使 benchmark 能评估 forecast、decision、held-out verification 等任务，同时减少对话中泄漏目标答案的风险。

### 6.3 Reasoning graph

S4 把任务转成 typed DAG：

$$
G=(V,E,\tau_V,\tau_E,\alpha)
$$

其中 $V$ 是分析节点，$E$ 是依赖边，$\tau_V$ 是节点类型，$\tau_E$ 是边类型，$\alpha$ 存储用于生成和评估的属性。

节点类型包括 profile、transform、forecast、anomaly、classification、regression、imputation、change-point、causal、counterfactual、uncertainty、synthesis、decision 等。边类型包括 data-preparation、parameter dependence、evidence dependence、comparison、correction、synthesis、decision-support。

这个 graph 不只是生成对话用的脚本，也用于 capability scoring，尤其是 C5 Chain 和跨轮依赖检查。

### 6.4 质控阶段

| 阶段 | 作用 |
|---|---|
| P2 Reproducibility Audit | 46 个 deterministic checks，覆盖数据完整性、split、assignment、graph、reference code、gold provenance 等 |
| P3 LLM Cross-Family Review | 用不同模型家族做审核，检查事实漂移、held-out 泄漏、训练记忆痕迹、open-loop evaluability |
| P4 Human Review | 人工 dashboard 审核 source data、dialogue、reasoning graph、reference code、gold fields |
| P5 Final Check | 重新跑 P2 audit，在干净 sandbox 中重跑 reference code，确认 gold target 稳定 |

这套管线比普通“LLM 生成题目 + 人工抽查”严得多，尤其强调可复现和可审计。

## 7. 评测协议

TimeSage-MT 有两条评分线：Outcome scoring 和 Capability scoring。

### 7.1 Outcome scoring

Outcome track 看 Agent 最终和中间输出是否正确。它有 5 个维度：

| 维度 | 缩写 | 评分方式 |
|---|---|---|
| Numerical Accuracy | NA | deterministic，比对数值、forecast、anomaly F1、change-point F1、causal edge F1 等 |
| Factual Verification | FV | deterministic，比对数据属性和关键事实 |
| Analytical Quality | AQ | LLM judge，评估事实正确性、分析深度、结论可靠性 |
| Decision Making / Quality | DM | LLM judge，仅 L4 适用 |
| Code Correctness | CC | sandbox 运行 Agent 代码并比对输出 |

每个任务的 outcome score 是适用维度的平均值：

$$
\mathrm{Outcome}(t)=
\begin{cases}
|M(t)|^{-1}\sum_{m\in M(t)}s_m(t), & |M(t)|>0\\
\mathrm{N/A}, & |M(t)|=0
\end{cases}
$$

其中 $M(t)$ 是任务 $t$ 中非空且适用的 outcome components。

### 7.2 Capability scoring

Capability track 看过程行为是否符合预期。C1-C9 共 28 个 sub-check，其中 26 个是 deterministic 或局部 embedding check，只有 C7 Decide 和 C9 Ground 的部分判断使用 LLM judge。

能力分数定义为：

$$
\mathrm{Cap}_c(t)=
\begin{cases}
|S_c(t)|^{-1}\sum_{s\in S_c(t)}s(t), & |S_c(t)|>0\\
\mathrm{N/A}, & |S_c(t)|=0
\end{cases}
$$

Capability score 不是 leaderboard 结论，而是诊断工具。比如一个系统 C5 高但 C1 低，说明它分析链条顺序没错，但开头读错了数据。

### 7.3 LLM judge

论文使用 GPT-5.4 作为 judge。需要注意的是，论文强调所有 reference targets 都由 executable code 产生，而不是由 judge 产生。LLM judge 只用于 free-form analytical quality、decision quality、C7 和 C9 中较难 rule-based 的部分。

## 8. 被评测系统

论文比较了四种系统设置：

| 设置 | 说明 |
|---|---|
| Direct Answering | 模型直接回答，无计算工具 |
| Code-Enabled Reasoning | 模型可访问执行环境，写代码、算统计量、跑分析 |
| Skill-Guided Code Reasoning | 模型可调用 TimeSage 技能库中的模板和说明，也可自己写代码 |
| TimeSage | 完整结构化 agent pipeline：Planner、Validator、Profiler、Executor、Evaluator、Reporter |

TimeSage 的 6 个阶段中，Planner 和 Reporter 使用 LLM，Validator、Profiler、Executor、Evaluator 是 deterministic。它的设计思想是把“规划、执行、验证、汇报”拆开，降低模型随意编数字或跳步的风险。

## 9. TimeSage 技能库

TimeSage 技能库包含 226 个技能，覆盖 36 类分析能力。部分技能类别如下：

| 类别 | 数量 | 类别 | 数量 |
|---|---:|---|---:|
| anomaly detection | 15 | imputation | 15 |
| classification | 13 | deep-learning forecasting | 33 |
| foundation-model forecasting | 10 | statistical forecasting | 8 |
| causal and change-point detection | 6 | uncertainty | 5 |
| decomposition | 5 | volatility | 5 |
| preprocessing | 7 | evaluation | 6 |
| symbolic | 6 | numerical | 8 |

技能库的作用不是替代模型，而是给模型可复用的分析例程和代码模板。实验表明，技能库是否有效取决于 backbone 是否能正确选择、配置和整合技能结果。

## 10. 主实验结果

论文在 Code-Enabled Reasoning 设置下评测 6 个 frontier LLM。

| 模型 | L1 | L2 | L3 | L4 | Overall |
|---|---:|---:|---:|---:|---:|
| GLM-5.1 | 49.11 | 37.50 | **36.50** | **38.87** | **40.50** |
| Claude-Sonnet-4.6 | **49.61** | **38.30** | 35.89 | 37.96 | 40.44 |
| GPT-5.3-Codex | 48.86 | 34.96 | 36.47 | 37.69 | 39.49 |
| Qwen-3.5-122B-A10B | 47.18 | 33.63 | 32.41 | 36.13 | 37.34 |
| MiniMax-M2.7 | 45.29 | 33.42 | 31.62 | 35.44 | 36.44 |
| Gemini-3-Flash-Preview | 44.08 | 31.74 | 31.58 | 33.45 | 35.21 |

主结论有三个：

1. **对话深度增加后性能明显下降**。所有模型在 L1 最好，到 L2 下降约 10-15 分，说明多轮、多技能依赖很快暴露问题。
2. **前沿模型差距很小**。GLM-5.1、Claude-Sonnet-4.6、GPT-5.3-Codex 的 overall 都在 39-41 左右，没有模型明显解决 benchmark。
3. **更高成本不等于更高质量**。论文指出，在有成本统计的模型中，推理花费差异接近 5 倍，但分数只差几个点。

## 11. 细粒度能力结果

Capability scores 暴露了一个有意思的结构：

| 模型 | C1 Read | C2 Select | C3 Configure | C4 Remember | C5 Chain | C8 Calibrate |
|---|---:|---:|---:|---:|---:|---:|
| Claude-Sonnet-4.6 | 26.60 | 44.19 | 19.77 | 88.81 | 99.54 | **44.59** |
| GLM-5.1 | **27.49** | 48.48 | **20.05** | 84.76 | 99.47 | 42.34 |
| GPT-5.3-Codex | 25.32 | 42.90 | 19.89 | 80.51 | 98.54 | 42.34 |
| Qwen-3.5-122B-A10B | 22.46 | **53.05** | 19.38 | **88.83** | 99.52 | 42.62 |

模型在 C4 Remember 和 C5 Chain 上很高，说明它们能保持一定多轮记忆，也能按依赖链推进。但 C1 Read 和 C3 Configure 很低，说明更基础的时序分析能力仍不稳定：

- 读不准频率、趋势、缺失、异常和数据属性；
- 选了方法但参数设置不对；
- 代码能跑，但分析前提和配置可能错；
- 不确定性校准和领域决策仍然弱。

论文的重要判断是：**代码执行不是瓶颈，可靠分析才是瓶颈。**

## 12. Observation 1：代码执行显著优于直接回答

在 100-task paired subset 上，Code-Enabled Reasoning 明显优于 Direct Answering。

| 模型 | Direct Overall | Code-Enabled Overall |
|---|---:|---:|
| GPT-5.3-Codex | 15 | **39** |
| Qwen-3.5-122B-A10B | 18 | **37** |

Direct Answering 没有 executable evidence，Code Correctness 为 0，容易编造数值和统计结论。时间序列分析里，小的数值错误可能改变趋势判断、隐藏异常或反转决策，因此代码执行几乎是必要条件。

## 13. Observation 2：技能库有帮助，但依赖模型能否用好

Skill-Guided Code Reasoning 和普通 Code-Enabled Reasoning 的对比如下：

| 模型 | Code-Enabled Overall | Skill-Guided Overall | 主要变化 |
|---|---:|---:|---|
| GPT-5.3-Codex | 39 | **45** | AQ 从 35 到 61，DM 从 63 到 76 |
| Qwen-3.5-122B-A10B | 37 | **38** | 只小幅提升 |

这说明技能库不是万能插件。它对 GPT-5.3-Codex 帮助明显，因为模型能较好选择技能、理解输出并组织分析。但对 Qwen-3.5-122B，技能访问并没有自动转化为高质量分析。

## 14. Observation 3：完整 TimeSage pipeline 有取舍

论文进一步比较 Skill-Guided Code Reasoning 和完整 TimeSage pipeline。

| 模型 | Skill-Guided Overall | TimeSage Overall | 变化 |
|---|---:|---:|---:|
| GPT-5.3-Codex | 44.94 | 41.50 | -3.45 |
| Qwen-3.5-122B-A10B | 37.58 | 38.23 | +0.65 |

对 Qwen-3.5-122B，TimeSage 提升 Numerical Accuracy、Factual Verification、Analytical Quality，但降低 Decision Making 和 Code Correctness。对 GPT-5.3-Codex，TimeSage 降低总体表现，尤其伤害 Analytical Quality 和 Decision Making。

论文的解释是：结构化 pipeline 可以帮助较弱 backbone 保持 grounded，但对已经有较强 agentic harness 的模型，额外编排可能引入规划冲突，限制模型自己的表达和推理能力。

这个结论很务实：**更多 agent pipeline 不一定更好。关键不是堆阶段，而是找到合适的 orchestration 强度。**

## 15. 与 TSRBench 的关系

TimeSage-MT 和 TSRBench 都关注时间序列推理，但评测对象不同。

| 维度 | TSRBench | TimeSage-MT |
|---|---|---|
| 核心问题 | 模型能否解时间序列推理题 | Agent 能否完成多轮时间序列分析流程 |
| 交互形式 | 主要是单题问答 | 多轮对话 |
| 能力重点 | Perception, Reasoning, Prediction, Decision-Making | Read, Select, Configure, Remember, Chain, Adapt, Decide, Calibrate, Ground |
| 评测粒度 | 任务级 accuracy | outcome + capability + per-turn trace |
| 工具使用 | 辅助消融 | 核心评测对象 |
| 适用场景 | 测试模型的题目级时间序列推理能力 | 测试真实分析 Agent 的工作流可靠性 |

可以把 TSRBench 理解为“题目级 reasoning benchmark”，把 TimeSage-MT 理解为“工作流级 agent benchmark”。

## 16. 论文贡献

TimeSage-MT 的主要贡献有三点：

1. **提出第一个面向 agentic time series reasoning 的多轮 benchmark**。它覆盖 240 个任务、2,680 个对话轮、8 个真实领域和 4 个复杂度层级。
2. **建立可诊断的 C1-C9 能力体系**。它能定位模型失败在读数据、选方法、参数配置、记忆、链式推理、适应、决策、不确定性还是领域 grounding。
3. **提供可复现的构造与评测协议**。包括 reference code、held-out gold extraction、46 个 deterministic checks、LLM cross-family review、human dashboard、public leaderboard 和 226-skill library。

## 17. 局限

论文也有明显边界：

- 对话仍是 scripted conversation，无法完全覆盖真实长期协作中的开放目标变化。
- 任务规模 240 个，适合评测和诊断，不一定足够作为训练数据。
- Analytical Quality、Decision Quality、C7、C9 仍部分依赖 LLM judge，存在 judge bias 风险。
- 公开数据源无法覆盖大量高风险场景中的私有数据、监管约束、机构政策和稀有事件。
- TimeSage pipeline 显示结构化编排有副作用，但论文还没有给出自适应 orchestration 的完整方案。

## 18. 总体评价

TimeSage-MT 的价值不在于又做了一个时间序列排行榜，而在于把“时间序列 Agent 是否可靠”拆成了可测、可复现、可诊断的问题。它说明当前模型的短板不是单纯不会预测，也不是不会写代码，而是完整工作流中的多处失稳：读数据不准、参数配置不稳、证据 grounding 不够、不确定性处理弱、领域决策缺少闭环。

这篇论文对后续研究的启发很直接：可靠的时间序列 Agent 不能只靠更强 LLM，也不能简单堆工具和 pipeline。更关键的是让 Agent 在合适的时刻使用合适的技能，能验证中间结果，能保留跨轮状态，能校准不确定性，并且能把数值证据转化为领域可执行的决策。

# 《QoEReasoner: An Agentic Reasoning Framework for Automated and Explainable QoE Diagnosis in RANs》中文文献解读

**论文**：Qizhe Li, Haolong Chen, Shan Dai, Zhuo Li, Zhiwei Hu, Xuan Li, Guangxu Zhu, Qingjiang Shi. *QoEReasoner: An Agentic Reasoning Framework for Automated and Explainable QoE Diagnosis in RANs*. arXiv:2606.01925  
**方法名**：QoEReasoner  
**领域**：Radio Access Networks (RANs) / Quality-of-Experience (QoE) diagnosis / Agentic AI  
**论文链接**：[arXiv](https://arxiv.org/abs/2606.01925) / [PDF](https://arxiv.org/pdf/2606.01925) / [TeX Source](https://arxiv.org/e-print/2606.01925)  
**代码与数据**：论文正文写明将于发表后释放实现代码和文档；截至当前项目检索，未发现官方 GitHub 或 Hugging Face 链接。数据为真实运营 RAN 数据，论文未提供公开下载入口。

## 1. 一句话总结

QoEReasoner 不是让 LLM 直接读原始 RAN KPI 时间序列并“凭感觉诊断”，而是把 LLM 放在 planner / verifier / reporter 的位置，通过确定性工具、协议知识库和历史案例库，把 QoE 退化诊断拆成可控的 anomaly detection、fault causal chain reasoning 和 root-cause categorization 流程。

> 核心公式化理解：QoEReasoner = LLM planner + deterministic KPI tools + Knowledge Base constraints + Historical Bank retrieval + evidence-grounded report generation。

## 2. 背景：RAN QoE 诊断为什么难

RAN 运维关注的是用户体验质量 QoE，例如吞吐下降、时延升高、卡顿或连接质量变差。难点在于，QoE 退化只是最终症状，真实原因可能隐藏在 PHY、MAC、RLC、PDCP 等多层协议 KPI 的时间动态中。

论文总结了三个实际系统必须满足的要求：

| 要求 | 含义 | 直接用 LLM 的问题 |
|---|---|---|
| R1 Reliable numeric perception | 能可靠理解高维 KPI 时间序列 | LLM 数值时间序列理解不稳，prompt 敏感 |
| R2 Causally grounded explanation | 解释必须符合协议层传播逻辑 | LLM 容易生成违反协议机制的因果链 |
| R3 Coherent cross-task reasoning | AD、FCR、RCC 多任务之间要保持状态一致 | 单轮问答无法维护诊断状态和证据闭环 |

因此论文的出发点是：LLM 适合做调度、解释和结构化推理，但不适合直接承担原始 KPI 感知和协议约束验证。

## 3. 任务定义

输入是 session-level multivariate KPI telemetry：

$$
\mathbf{X}\in\mathbb{R}^{T\times M}
$$

其中 $T$ 是时间戳数量，$M$ 是 KPI 维度数。KPI 来自 PHY、MAC、RLC、PDCP 等协议层。

### 3.1 Anomaly Detection (AD)

判断 session 是否出现用户感知 QoE degradation：

$$
f_{\text{AD}}:\mathbf{X}\mapsto \hat{y}^{\mathrm{deg}},\qquad
\hat{y}^{\mathrm{deg}}\in\{0,1\}
$$

$y^{\mathrm{deg}}=1$ 表示该 session 被标注为退化。

### 3.2 Fault Chain Reasoning (FCR)

输出一条结构化、有方向的故障传播链：

$$
\mathbf{c}:c_1\rightarrow c_2\rightarrow\cdots\rightarrow c_L
$$

其中每个 $c_i\in\mathcal{C}$ 是全局 fault atom vocabulary 中的异常现象，边 $c_i\rightarrow c_{i+1}$ 表示协议一致的因果依赖。模型要预测：

$$
f_{\text{FCR}}:\mathbf{X}\mapsto
\hat{\mathbf{c}}=(\hat{c}_1,\ldots,\hat{c}_{\hat{L}}),\qquad
\hat{c}_i\in\mathcal{C}
$$

直观上，FCR 不是只说“弱覆盖”或“干扰”，而是要解释从底层异常到 QoE 退化的传播路径。

### 3.3 Root-Cause Categorization (RCC)

识别导致 QoE 退化的根因类别：

$$
f_{\text{RCC}}:\mathbf{X}\mapsto \hat{y}^{\mathrm{rc}},\qquad
\hat{y}^{\mathrm{rc}}\in\{1,\ldots,K\}
$$

根因类别包括 interference、weak coverage 等预定义类型。论文中 RCC 既可由辅助分类器给出先验，也可由 FCR 预测链的起始 fault atom 映射得到。

## 4. QoEReasoner 系统设计

QoEReasoner 分为 core diagnostic modules 和 supporting components。

### 4.1 Planner：状态驱动的多任务协调

Planner 是 LLM 驱动的控制核心。它维护共享 workflow state，包括消息历史、AD 结果、rule-based 判断、FCR 输出、验证反馈等。每轮根据当前状态选择下一步动作：

- 调用 KPI Perception 获取更多证据；
- 调用 FCR 生成或验证 causal chain；
- 查询 KB/HB；
- 终止并交给 Reporter。

这对应 ReAct 式 `Reason -> Act -> Observe -> Update state` 闭环。它的作用不是做所有计算，而是决定“下一步该看什么证据”。

### 4.2 KPI Perception：把原始时间序列变成结构化证据

KPI Perception 通过确定性工具把 raw KPI streams 转成 LLM 友好的 typed state objects。包括：

- 数据预处理：归一化、缺失插值；
- 统计摘要：percentile、peak、valley、trend、fluctuation；
- feature selection：选择任务相关 KPI；
- AD model：给出异常概率和置信度。

这解决 R1：不要让 LLM 自己在几十上百维 KPI 序列里做不可靠的数值判断。

### 4.3 Fault Causal Chain Reasoning (FCR)

FCR 是论文最核心的结构化推理模块，包含三个阶段。

**Retrieval**：从 Historical Bank 中检索相似历史案例。检索信号有两个：

1. root-cause classifier 预测的类别先验；
2. 共享 encoder 在 embedding space 中的 KPI 模式相似度。

检索得到 top-$n$ candidate chains，用作候选假设，而不是直接当答案。

**Verifier**：把候选 chain 分解为相邻 atom pair，对每条边查询 Knowledge Base 中的 expected KPI-level manifestations，然后检查当前观测 KPI 是否符合该因果边。

**Adjuster**：融合 retrieval similarity 和 causal verification score，重新排序候选链，保留 top-ranked alternatives。最终链的第一个 atom 被视为 root cause。

### 4.4 Reporter：证据落地成诊断报告

Reporter 用 LLM 汇总 planner state、已验证 causal chain、KPI 证据和替代假设，生成面向工程师的报告。报告不是自由发挥，而是基于经过工具和 KB/HB 验证的证据。

### 4.5 Knowledge Base (KB)

KB 是 protocol-aware 约束系统，包括：

| KB 组件 | 作用 |
|---|---|
| Hierarchical fault-atom abstraction | 把异常分成 symptom、mechanism、root cause 三层 |
| Global causal graph | 规定哪些 fault atom 之间可以形成协议一致传播路径 |
| Edge-level causal constraints | 给每条边附加 expected KPI manifestations |
| Expert-defined rules | 提供可解释阈值和运营规则 |

KB 的关键价值是把 LLM 的假设空间从开放式自然语言缩小到协议一致的图结构。

### 4.6 Historical Bank (HB)

HB 中每条记录包含代表性 KPI segment 和专家验证 fault causal chain。它不是答案库，而是 case-based reference：

- 帮助初始化候选 causal chains；
- 缩小组合搜索空间；
- 提供类似历史故障的结构先验；
- 但所有历史假设都必须在当前 KPI 证据和 KB 约束下重新验证。

论文也强调：HB 覆盖不足时会带来 biased priors，因此不能只依赖历史模板。

## 5. Agent 视角拆解

| Agent 要素 | QoEReasoner 中的对应设计 |
|---|---|
| State / workspace | shared workflow state，保存消息历史、AD 结果、规则判断、FCR 候选链、验证反馈、诊断证据 |
| Policy / model | LLM planner 选择下一步诊断动作；verifier/reporter 也由 LLM 承担结构化判断和生成 |
| Action space | 调用 KPI tools、AD/RCC classifiers、KB 查询、HB 检索、FCR verifier、reporter、stop |
| Tools | preprocessing、summary、feature selection、CNN AD classifier、RCC classifier、encoder embedding |
| Rollout / trajectory | ReAct-style 多轮 `plan -> tool/retrieval -> observe -> verify -> update state` |
| Memory / retrieval | Historical Bank 检索专家验证历史案例 |
| Knowledge constraint | Knowledge Base 约束 fault atom 层级、global causal graph 和 edge-level KPI manifestations |
| Update mechanism | 不微调 LLM；通过状态更新、候选链重排和证据验证逐步收敛 |
| Evaluation | AD、FCR、RCC 三类任务 + case study + domain expert user study |

## 6. 实验设置

### 6.1 实现

论文使用 LangGraph 实现 QoEReasoner，并组织为 ReAct-style control loop。工具以 callable nodes 暴露结构化输入输出。Tool Pool 中包含 preprocessing utilities 和轻量 CNN-based classifiers。

### 6.2 数据集

实验使用真实运营移动网络数据：

| 项目 | 数值 |
|---|---:|
| session 总数 | 300 |
| abnormal sessions | 130 |
| normal sessions | 170 |
| root-cause categories | 6 |
| expert-validated fault-chain templates | 21 |

论文强调该数据标注成本高，因为每条 causal chain 都需要经验工程师从多层 KPI traces 中人工验证。数据未公开下载。

### 6.3 指标

AD 使用 Precision、Recall、False Alarm Rate (FAR)、F1：

$$
\mathrm{F1}=
\frac{2\cdot\mathrm{Precision}\cdot\mathrm{Recall}}
{\mathrm{Precision}+\mathrm{Recall}}
$$

RCC 使用 top-1 accuracy、macro-F1、balanced accuracy：

$$
\mathrm{macro\_F1}=\frac{1}{|\mathcal{C}|}\sum_{c\in\mathcal{C}}F1_c
$$

FCR 使用 node precision/recall、edge precision、exact chain match。模块分析还使用 MRR、Top-5 AUC、Recall@1/3/5。

## 7. 主要结果

### 7.1 Anomaly Detection

| Backbone / Method | Precision | Recall | FAR | F1 |
|---|---:|---:|---:|---:|
| Rule | 0.6833 | 0.6496 | 0.2883 | 0.6520 |
| DeepSeek-V3.2 | 0.2452 | **1.0000** | 1.0000 | 0.3939 |
| DeepSeek + RCA-Agent | 0.4567 | **1.0000** | 1.0000 | 0.6270 |
| DeepSeek + QoEReasoner | **0.8600** | 0.8686 | **0.1472** | **0.8500** |
| GPT-5.2 | 0.3643 | 0.6623 | 0.3755 | 0.4700 |
| GPT-5.2 + QoEReasoner | **0.8600** | **0.8686** | **0.1472** | **0.8500** |
| Qwen3-14B | 0.2637 | **0.9863** | 0.9095 | 0.4162 |
| Qwen3-14B + QoEReasoner | **0.8567** | 0.8686 | **0.1534** | **0.8479** |

直接 LLM 的典型问题是 recall 很高但 FAR 极高，几乎把所有 session 都判成异常。QoEReasoner 通过工具和状态化验证显著降低 false alarms，同时保持较高 recall。

### 7.2 FCR 与 RCC

| Method | FCR node_p | FCR node_r | edge_p | chain_em | RCC top1_acc | macro_F1 | balanced_acc |
|---|---:|---:|---:|---:|---:|---:|---:|
| DeepSeek-V3.2 | 0.1488 | 0.1036 | 0.0048 | 0.0000 | 0.0286 | 0.0870 | 0.0098 |
| DeepSeek + QoEReasoner | **0.4271** | **0.4264** | **0.3095** | **0.2857** | **0.5714** | **0.5333** | **0.5518** |
| GPT-5.2 | 0.3083 | 0.2207 | 0.0476 | 0.0000 | 0.3623 | 0.6757 | 0.1220 |
| GPT-5.2 + QoEReasoner | **0.5414** | **0.5400** | **0.4286** | **0.4000** | **0.6714** | 0.6171 | **0.5859** |
| Qwen3-14B | 0.1738 | 0.0879 | 0.0143 | 0.0000 | 0.0000 | 0.0000 | 0.0000 |
| Qwen3-14B + QoEReasoner | **0.4464** | **0.4429** | **0.3286** | **0.3000** | **0.6000** | **0.5829** | **0.5566** |

最重要的现象是：纯 LLM 的 chain exact match 基本为 0，因为它可以写出看似合理但结构不对的解释；QoEReasoner 借助 KB/HB 和 verifier，把 edge-level 与 chain-level 正确性显著拉高。

### 7.3 FCR 模块阶段分析

以 GPT-5.2 作为 verifier backbone：

| Stage | MRR | AUC | R@1 | R@3 | R@5 |
|---|---:|---:|---:|---:|---:|
| Retrieval | 0.6003 | 3.1714 | 0.3429 | 0.6857 | 0.8714 |
| Verifier | 0.5817 | 3.4143 | 0.3426 | 0.7429 | 0.9000 |
| Adjuster | **0.6206** | **3.5714** | **0.4000** | **0.7571** | **0.9142** |

Retrieval 已能覆盖较多 ground-truth chain，但排序较粗；Verifier 和 Adjuster 进一步提高 ranking concentration，使正确链更容易进入 Top-K。

### 7.4 KB/HB 消融

| HB | KB | node_p | node_r | edge_p | chain_em |
|---|---|---:|---:|---:|---:|
| 无 | 无 | 0.3083 | 0.2207 | 0.0476 | 0.0000 |
| 无 | 有 | 0.4957 | 0.5050 | 0.3810 | 0.3143 |
| 部分 HB ($r=0.5$) | 有 | 0.4550 | 0.4514 | 0.3476 | 0.3143 |
| 有 | 无 | 0.4286 | 0.4257 | 0.2762 | 0.2429 |
| 有 | 有 | **0.5414** | **0.5400** | **0.4286** | **0.4000** |

KB 和 HB 是互补的。KB 提供结构合法性，HB 提供数据驱动先验。只有 HB 没有 KB 时，历史模板不能排除结构无效转移；只有 KB 没有 HB 时，搜索空间仍较大。部分 HB 覆盖不足甚至可能引入偏置，说明检索记忆必须有当前证据再验证。

## 8. Case study 与专家评估

论文展示了一个 uplink interference 诊断案例。QoEReasoner 输出最高排名 fault chain、替代假设和自然语言解释，把多层 KPI 动态和 root cause 连接起来。

效率方面，单个 case 的 end-to-end 诊断使用：

| Token 类型 | 数量 |
|---|---:|
| cached input tokens | 117,888 |
| non-cached input tokens | 35,929 |
| output tokens | 12,558 |
| total tokens | 166,375 |
| API cost | 约 0.02 美元 |

用户研究中，3 位领域专家共同评审 50 份 GPT-5.2 + QoEReasoner 生成报告，从 Correctness、Evidence Grounding、Knowledge Grounding、Interpretability 四个维度打分，平均分都超过 4/5。论文还报告 QoEReasoner 通常约 3 分钟完成一次诊断，而人工专家分析通常需要 30-60 分钟。

## 9. 贡献

1. 提出首个面向 RAN QoE 自动化、多任务诊断的 agentic framework，统一 AD、FCR、RCC。
2. 用 deterministic tools 解决 LLM 的数值 KPI 感知弱点。
3. 用 KB 把故障链限制在协议一致的 causal graph 中，降低幻觉。
4. 用 HB 检索专家验证历史案例，把开放式组合搜索转成候选链验证。
5. 用 planner 维护跨任务状态，使诊断流程从单轮回答变成闭环证据积累。

## 10. 局限与实践启示

局限：

- 当前数据集规模较小，只有 300 个 sessions 和 130 个异常样本；
- 数据来自真实运营网络，未公开下载，外部复现受限；
- 采用 single-dominant-chain 假设，但真实 RAN 退化可能由多条并发故障链共同造成；
- 诊断延迟主要受多轮 LLM 调用和 verifier 执行影响。

实践启示：

QoEReasoner 的设计适合很多工业诊断场景：如果任务既有高维时间序列，又有严格领域规则，还需要可解释报告，那么更合理的架构不是“端到端 LLM 直接判断”，而是让 LLM 负责编排和解释，让工具负责数值感知，让知识库负责约束，让历史案例负责候选假设。


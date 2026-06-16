# 《Time Series Reasoning via Process-Verifiable Thinking Data Synthesis and Scheduling for Tailored LLM Reasoning》中文文献解读

**论文**：Jiahui Zhou, Dan Li, Boxin Li, Xiao Zhang, Erli Meng, Lin Li, Zhuomin Chen, Jian Lou, See-Kiong Ng  
**机构**：Sun Yat-sen University, Xiaomi Corporation, National University of Singapore  
**方法名**：VeriTime  
**数据生成管线**：TSRgen  
**论文内数据集名**：TSRBench。注意：该 TSRBench 是 VeriTime 论文生成的 process-verifiable CoT 训练/评测数据集，不等同于另一篇论文 *TSRBench: A Comprehensive Multi-task Multi-modal Time Series Reasoning Benchmark for Generalist Models* 的公开 benchmark。  
**论文链接**：[arXiv:2602.07830](https://arxiv.org/abs/2602.07830) / [PDF](https://arxiv.org/pdf/2602.07830) / [TeX](https://arxiv.org/e-print/2602.07830)  
**代码**：[anonymous.4open.science/r/VeriTime-E017](https://anonymous.4open.science/r/VeriTime-E017)  
**本地 TeX 源码目录**：[Time_Series_Reasoning_via_Process_Verifiable_Thinking_Data_Synthesis_and_Scheduling_for_Tailored_LLM_Reasoning](Time_Series_Reasoning_via_Process_Verifiable_Thinking_Data_Synthesis_and_Scheduling_for_Tailored_LLM_Reasoning/)

## 1. 一句话总结

VeriTime 的核心思想是：时间序列推理模型不能只看最终答案对错，还要监督推理过程是否真的识别了任务意图、关键模式、初步答案和自检结果；论文用 TSRgen 合成带 process-verifiable annotations 的 CoT 数据，并用难度调度 + 多目标 GRPO，让 3B-4B 级 LLM 在多类时序推理任务上显著提升。

## 2. 背景与问题诊断

现有 LLM+时间序列方法通常有三类不足：

1. **CoT 数据不足**：ChatTS、Time-MQA 等主要做 TS-text 对齐或问答 SFT，但缺少专门为时间序列设计的长 CoT 推理轨迹。
2. **奖励过于 outcome-based**：Time-R1、TimeOmni 等 RL 方向通常强调最终答案，较少验证中间推理步骤是否正确。
3. **训练数据调度不足**：RL 阶段不是数据越多越好。哪些样本适合 SFT，哪些适合 RL，需要根据任务难度和模型当前能力来分配。

VeriTime 的回答是三件事：合成 process-verifiable reasoning data；用数据调度把样本分成 normal/hard；用结构、最终答案和中间过程共同构成奖励。

## 3. TSRgen：过程可验证推理数据合成

TSRgen 是论文提出的数据生成管线，用来构造时间序列-文本多模态推理数据集。流程是：

1. 从 synthetic 和 real-world time series 中选择任务实例。
2. 用规则抽取器过滤符合任务条件的样本。
3. 用 DeepSeek-R1 生成结构化 TS-tailored CoT。
4. 只保留最终答案和 ground truth 一致的 reasoning trajectories。
5. 从 CoT 中抽取可验证的 process labels。
6. 用 cross-LLM validation 检查中间推理质量。

TSRgen 的 CoT 不是通用“think step by step”，而是六步时间序列专用推理过程：

| Step | 名称 | 作用 |
|---|---|---|
| 1 | Analyzing task intent | 识别题目目标、实体、要求 |
| 2 | Selecting task-relevant key patterns | 提取趋势、阈值、幅度、波动、领域关键词等关键模式 |
| 3 | Analyzing time series samples | 用关键模式分析整段或关键片段 |
| 4 | Generating preliminary answer | 给出初步结论 |
| 5 | Reflection / backtracking | 检查模式是否完整、排除干扰因素 |
| 6 | Summarizing and final answer | 汇总推理并输出最终答案 |

其中 Step 1、2、4、6 会被抽取为可验证过程标签；Step 3 和 Step 5 留给模型探索，不强行打标签。

## 4. VeriTime-TSRBench 数据集

论文中的 TSRBench 覆盖两类任务。

### 4.1 Scenario-based reasoning

这部分来自 ChatTS 合成数据，重新过滤并组织为三类推理：

| 任务 | 推理类型 | 样本数 | 平均时间点 | 平均 token |
|---|---|---:|---:|---:|
| Anomaly Detection | deductive reasoning | 1,180 | 300 | 2,759 |
| Scenario Attribution | causal reasoning | 930 | 300 | 2,932 |
| Inferential Calculation | quantitative reasoning | 410 | 324 | 2,783 |
| Total | - | 2,520 | - | 2,784 |

### 4.2 Knowledge-based reasoning

这部分来自真实世界数据，要求模型结合领域知识判断类别：

| 任务/数据 | 领域 | 样本数 | 平均时间点 | 平均 token |
|---|---|---:|---:|---:|
| CTU | energy / consumer behavior | 270 | 720 | 5,942 |
| ECG | medical / arrhythmia | 780 | 500 | 4,239 |
| EMG | healthcare / neuromuscular signal | 450 | 600 | 4,990 |
| RCW | bioacoustics / right whale call | 320 | 500 | 4,201 |
| Total | - | 1,820 | - | 4,627 |

训练测试划分：scenario-based 任务约 5:1；knowledge-based 任务沿用原始数据集划分。

## 5. 数据质量验证

论文对 DeepSeek-R1 生成的 CoT 做 cross-model evaluation，独立 judge 包括 Qwen3-235B、GPT-5、Gemini-2.5。每类子任务随机采样 100 个实例，按五个维度评分：

| 维度 | 含义 |
|---|---|
| Intent Alignment | Step 1 是否识别正确任务目标 |
| Pattern Relevance | Step 2 是否抓住关键时序模式 |
| Logical Coherence | Steps 3-6 推理是否连贯 |
| Robustness vs. Shortcuts | 是否避免捷径和猜测 |
| Bias/Artifact Check | 是否引入无关偏见或伪线索 |

关键结果：

| Task type | Judge | Intent | Pattern | Coherence | Robustness | Bias |
|---|---|---:|---:|---:|---:|---:|
| Scenario | Qwen3-235B | 4.99 | 4.96 | 4.70 | 4.56 | 4.70 |
| Scenario | GPT-5 | 4.97 | 4.85 | 4.50 | 4.30 | 4.62 |
| Scenario | Gemini-2.5 | 5.00 | 4.98 | 4.31 | 4.38 | 4.62 |
| Knowledge | Qwen3-235B | 5.00 | 4.99 | 4.21 | 4.18 | 4.05 |
| Knowledge | GPT-5 | 4.94 | 4.58 | 3.92 | 3.68 | 4.03 |
| Knowledge | Gemini-2.5 | 5.00 | 4.99 | 4.07 | 4.14 | 4.99 |

这说明被抽取为过程标签的 intent 和 pattern 两步质量较高，后续逻辑质量也大体可靠。

## 6. VeriTime 训练框架

论文把训练数据定义为：

$$
\mathcal{D}_{train}=\{(x_i,y_i,\mathcal{L}_i)\mid i=1,2,\dots,n\}
$$

其中 $x_i$ 是时间序列推理问题，$y_i$ 是 CoT reasoning path，$\mathcal{L}_i$ 是标签集合：

$$
\mathcal{L}_i=\{l_{\text{final}},l_{\text{process}}\}
$$

$l_{\text{final}}$ 是最终答案标签，$l_{\text{process}}$ 是中间过程标签。模型学习的是：

$$
x_i \rightarrow (y_i,\mathcal{L}_i)
$$

### 6.1 难度层级与数据调度

VeriTime 先把 knowledge-based tasks 视为 hard，因为真实领域序列更长、模式更复杂。Scenario-based tasks 则由 warmup model 自动分难度。

第一步，从全量训练集随机采样 10% 得到 $\mathcal{D}_{sample}$，对 base model $\pi_{\theta_0}$ 做 warmup SFT：

$$
\theta_1=\arg\min_{\theta}\frac{1}{|\mathcal{D}_{sample}|}\sum_{(x_i,y_i)\in\mathcal{D}_{sample}}\mathcal{L}_{SFT}(\pi_{\theta}(x_i),y_i)
$$

第二步，用 warmup model $\pi_{\theta_1}$ 在 scenario-based 数据上推理。若最终答案正确，则进入 normal；否则进入 hard：

$$
\mathcal{D}_{normal}=\{(x_i,y_i,\mathcal{L}_i)\in\mathcal{D}_{train}\mid \operatorname{Acc}(f_{\theta_1}(x_i),l_{\text{final}})=1\}
$$

$$
\mathcal{D}_{hard}=\{(x_i,y_i,\mathcal{L}_i)\in\mathcal{D}_{train}\mid \operatorname{Acc}(f_{\theta_1}(x_i),l_{\text{final}})=0\}
$$

第三步，normal 样本用于 SFT，hard 样本用于 RL：

$$
\theta_2=\arg\min_{\theta}\frac{1}{|\mathcal{D}_{normal}|}\sum_{(x_i,y_i)\in\mathcal{D}_{normal}}\mathcal{L}_{SFT}(\pi_{\theta}(x_i),y_i)
$$

$$
\theta_{final}=\arg\max_{\theta}\mathbb{E}_{(x_i,\mathcal{L}_i)\sim\mathcal{D}_{hard}}\left[\mathcal{R}(\pi_{\theta}(x_i),\mathcal{L}_i)\right]
$$

直觉是：会做的中等题，用 SFT 巩固格式和模式；不会做的难题，用 RL 让模型探索并被过程奖励纠偏。

## 7. 多目标奖励设计

VeriTime 的 reward 分三类：

| 类别 | 奖励 | 作用 |
|---|---|---|
| Structural | $r_{\text{fmt}}$, $r_{\text{len}}$ | 控制 `<THINK>` / `<ANSWER>` 格式和合理长度 |
| Hard | $r_{\text{hard}}$ | 最终答案是否正确，权重最大 |
| Process | $r_{\text{intent}}$, $r_{\text{pattern}}$, $r_{\text{align}}$, $r_{\text{verify}}$ | 验证中间步骤 |

### 7.1 任务理解奖励

$$
r_{\text{intent}}(y)=\mathbb{I}\left[\operatorname{FuzzySim}(J_1(y),\hat{J_1})\ge T_1\right]
$$

$J_1(y)$ 是模型 Step 1 的判断，$\hat{J_1}$ 是过程标签，$T_1$ 是 fuzzy similarity 阈值。

### 7.2 关键模式奖励

模型从 Step 2 提取候选模式集合 $D=\{d_1,\dots,d_n\}$，ground truth 关键模式集合为 $S=\{s_1,\dots,s_m\}$：

$$
M(y)=\sum_{d\in D}\mathbb{I}\left[\max_{s\in S}\operatorname{FuzzySim}(d,s)\ge T_2\right]
$$

奖励为：

$$
r_{\text{pattern}}(y)=
\begin{cases}
2.0,&M(y)\ge 2\\
1.0,&M(y)=1\\
0.0,&\text{otherwise}
\end{cases}
$$

识别关键模式比格式重要，但低于最终答案正确性。

### 7.3 答案对齐与验证奖励

Step 4 的初步答案：

$$
r_{\text{align}}(y)=2.0\times\mathbb{I}\left[\operatorname{ExactMatch}(J_4(y),\hat{a})\right]
$$

Step 6 的最终自检答案：

$$
r_{\text{verify}}(y)=\mathbb{I}\left[\operatorname{ExactMatch}(J_6(y),\hat{a})\right]
$$

全局奖励：

$$
r(y)=r_{\text{struct}}(y)+r_{\text{hard}}(y)+r_{\text{process}}(y)
$$

其中 hard reward 的定义是：

$$
r_{\text{hard}}(y)=
\begin{cases}
5.0,&A(y)=\hat{a}\\
-2.0,&\text{otherwise}
\end{cases}
$$

## 8. GRPO 训练

VeriTime 用 GRPO 而不是 PPO，因为 GRPO 不需要单独训练 value network。对每个输入 $x$，从旧策略采样 $G$ 个输出：

$$
\{y_i\}_{i=1}^{G}\sim\pi_{\text{old}}(\cdot\mid x)
$$

计算奖励 $r_i$ 后，用 group normalization 得到 advantage：

$$
\hat{A}_i=\frac{r_i-\mu_r}{\sigma_r},\quad
\mu_r=\frac{1}{G}\sum_{j=1}^{G}r_j,\quad
\sigma_r=\sqrt{\frac{1}{G}\sum_{j=1}^{G}(r_j-\mu_r)^2+\varepsilon}
$$

clip objective：

$$
\mathcal{L}_{clip}(\theta)=\min\left(\rho_{i,k}\hat{A}_i,\operatorname{clip}(\rho_{i,k},1-\epsilon,1+\epsilon)\hat{A}_i\right)
$$

其中：

$$
\rho_{i,k}=\frac{\pi_{\theta}(y_{i,k}\mid y_{i,<k},x)}{\pi_{\text{old}}(y_{i,k}\mid y_{i,<k},x)}
$$

整体目标：

$$
\mathcal{L}_{GRPO}(\theta)=\frac{1}{G}\sum_{i=1}^{G}\frac{1}{|y_i|}\sum_{k=1}^{|y_i|}
\left[\mathcal{L}_{clip}(\theta)-\beta\operatorname{KL}[\pi_{\theta}\|\pi_{\text{ref}}]\right]
$$

训练配置：2 x A100 80G；base model 为 Qwen2.5-3B-Instruct 和 Qwen3-4B-Instruct；最大序列长度 10K；GRPO 学习率 $5\times10^{-6}$，LoRA rank 32，generation number $G=4$，per-device batch size 4；SFT 学习率 $2\times10^{-4}$。

## 9. 主结果：scenario-based reasoning

| Model | Overall | Anomaly Detection | Scenario Attribution | Inferential Calculation |
|---|---:|---:|---:|---:|
| GPT-4o-mini | 70.43 | 82.12 | 61.36 | 65.71 |
| Time-R1 (Qwen2.5-7B) | 51.73 | 54.55 | 53.14 | 40.35 |
| Qwen2.5-3B Base | 40.99 | 26.67 | 61.36 | 31.43 |
| Qwen2.5-3B + ChatTS SFT | 78.31 | **91.67** | 78.98 | 54.28 |
| **Qwen2.5-3B + VeriTime** | **82.86** | 90.56 | **83.52** | **68.57** |
| Qwen3-4B Base | 75.48 | 77.78 | 80.68 | 62.85 |
| Qwen3-4B + ChatTS SFT | 82.21 | 89.44 | 80.68 | 72.38 |
| **Qwen3-4B + VeriTime** | **86.55** | **91.11** | **87.50** | **77.14** |

Qwen2.5-3B 从 40.99 提升到 82.86，相对提升 102.15%；Qwen3-4B 从 75.48 到 86.55，相对提升 14.67%。复杂的 inferential calculation 提升尤其明显。

## 10. 主结果：knowledge-based reasoning

| Model | CTU | ECG | EMG | RCW |
|---|---:|---:|---:|---:|
| TimesNet | 64.00 | 28.13 | **73.33** | 59.33 |
| Time-R1 (Qwen2.5-7B) | 59.17 | 23.74 | 42.86 | 33.52 |
| Qwen2.5-3B Base | 52.54 | 23.16 | 51.09 | 43.32 |
| **Qwen2.5-3B + VeriTime** | 64.93 | 25.79 | 64.96 | **64.89** |
| Qwen3-4B Base | 42.50 | 15.15 | 56.46 | 43.08 |
| **Qwen3-4B + VeriTime** | **67.50** | **30.30** | 65.31 | 63.59 |

VeriTime 让小模型在多个真实领域任务上接近或超过传统时间序列模型。传统模型需要 task-specific training，而 VeriTime 保持统一的语言模型接口，并给出可解释推理。

## 11. 迁移与效率

在其他 benchmark 上：

| Benchmark | Model | Base | VeriTime | Improvement |
|---|---|---:|---:|---:|
| TimeSeriesExam | Qwen3 | 37.98 | 47.27 | +24.46% |
| TimeSeriesExam | Qwen2.5 | 35.66 | 41.67 | +16.85% |
| DROP | Qwen3 | 73.83 | 80.00 | +8.36% |
| DROP | Qwen2.5 | 54.00 | 82.55 | +52.87% |

VeriTime 还显著降低推理 token 数。Qwen3-4B base 在 ECG 平均输出 7,093 tokens，VeriTime 降到 965，减少 86.40%；8 个任务平均减少约 71%。原因是 TS-tailored CoT 把模型约束到“任务意图 -> 关键模式 -> 分析 -> 初答 -> 自检 -> 总结”的结构中，减少无效长推理。

## 12. 消融结论

奖励消融显示：

- 去掉 structural reward，影响最小，主要导致格式混乱或过长输出。
- 去掉 hard reward，inferential calculation 从 68.6% 降到 47.6%，最终答案监督仍然关键。
- 去掉 process reward，性能也明显下降，说明中间过程标签不是装饰。
- 去掉 critical pattern reward，平均下降 18.94%，说明“抓住关键时序模式”是最终正确的核心。
- 去掉 answer alignment 和 verification，inferential calculation 下降 23.62%，说明数值推理尤其依赖中间答案与自检监督。

数据调度消融显示：scenario-based 任务适合 model-guided allocation，RL 样本约为 SFT 的 0.25 倍；knowledge-based 任务更需要 full RL 或更多 RL 暴露，model-guided allocation 下 RL 样本约为 SFT 的 1.4 倍。

## 13. Agent/系统视角拆解

| 组件 | VeriTime 对应内容 |
|---|---|
| state / input | 时间序列、文本问题、领域上下文、任务类型 |
| policy/model | Qwen2.5-3B 或 Qwen3-4B，经 SFT + GRPO 训练 |
| action/output | `<THINK>` 中的六步 CoT 和 `<ANSWER>` 最终答案 |
| trajectory | DeepSeek-R1 生成并通过验证的 TS-tailored reasoning path |
| tool / verifier | rule-based extractor、final answer checker、process label extractor、cross-LLM judge |
| memory/retrieval | 无显式检索记忆；训练数据中包含过程标签 |
| update | 10% warmup SFT -> model-guided data split -> normal SFT -> hard GRPO |
| reward | format/length + final answer + intent/pattern/align/verify |
| evaluation | VeriTime-TSRBench、TimeSeriesExam、DROP、Time-MMD case study |

## 14. 贡献与局限

主要贡献：

1. 提出 TSRgen，自动生成带 TS-tailored CoT 和 process-verifiable annotations 的时间序列推理数据。
2. 提出 VeriTime，用难度调度把数据分配给 SFT 与 RL，提高训练效率。
3. 设计多目标奖励，不只评最终答案，也评任务理解、关键模式、初步答案和自检答案。
4. 证明 3B-4B 模型通过专门训练可以接近甚至超过更大模型和传统 TS 模型。

局限：

- 代码链接仍是 anonymous 形式，尚未看到正式 GitHub/HF 发布。
- 主要实验集中在 compact LLM；大模型上是否按比例放大收益还未验证。
- 过程标签依赖 DeepSeek-R1 生成和规则抽取，未来需要更广领域、更复杂任务和更强 verifier。

实践启发：如果要做时间序列 reasoning RL，最好不要只做 final-answer reward。更稳的方案是把推理过程拆成可检查步骤，先用 SFT 教格式和常规模式，再把模型不会的 hard cases 交给 RL 优化。

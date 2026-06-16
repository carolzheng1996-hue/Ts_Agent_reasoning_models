# 《TSRBench: A Comprehensive Multi-task Multi-modal Time Series Reasoning Benchmark for Generalist Models》中文文献解读

**论文**：Fangxu Yu, Xingang Guo, Lingzhi Yuan, Haoqiang Kang, Hongyu Zhao, Lianhui Qin, Furong Huang, Bin Hu, Tianyi Zhou  
**机构**：MBZUAI, UIUC, University of Maryland, UC San Diego  
**论文链接**：[arXiv:2601.18744](https://arxiv.org/abs/2601.18744) / [PDF](https://arxiv.org/pdf/2601.18744) / [TeX](https://arxiv.org/e-print/2601.18744)  
**项目页/数据**：[https://tsrbench.github.io/](https://tsrbench.github.io/) / [Hugging Face: umd-zhou-lab/TSRBench](https://huggingface.co/datasets/umd-zhou-lab/TSRBench)  
**本地 TeX 源码目录**：[TSRBench_A_Comprehensive_Multi_task_Multi_modal_Time_Series_Reasoning_Benchmark_for_Generalist_Models](TSRBench_A_Comprehensive_Multi_task_Multi_modal_Time_Series_Reasoning_Benchmark_for_Generalist_Models/)

## 1. 这篇论文真正想解决什么问题

TSRBench 的核心问题不是“LLM 能不能做时间序列预测”，而是更宽的一个问题：**通用模型能不能像现实分析人员一样，围绕时间序列完成感知、解释、归因、预测和决策？**

传统时间序列评测通常把序列当作孤立数值对象，任务集中在 forecasting、classification、imputation、anomaly detection 等固定形式上。这种评测适合比较时间序列专用模型，但不够评估通用模型的现实问题解决能力。现实场景里，时间序列往往同时伴随：

- 文本事件，例如财报、天气报告、宏观经济公告、临床描述；
- 多变量信号，例如多个传感器、多只股票、多项生理指标；
- 领域规则，例如医学诊断规则、物理系统方程、农业蒸散量公式；
- 决策约束，例如选择哪种操作策略、哪种干预方案收益更高。

因此，TSRBench 把时间序列能力从“预测未来数值”扩展为一个综合推理问题：模型需要读懂序列形态，理解上下文，定位事件，应用规则，比较方案，并最终给出可验证答案。

一句话概括：**TSRBench 是一个面向 LLM、VLM 和 Time Series LLM 的多任务、多模态时间序列推理 benchmark，用 4,125 道题测试通用模型是否真正具备时间序列问题解决能力。**

## 2. 与已有 benchmark 的差异

论文认为已有工作主要有三类不足：

| 类型 | 代表工作 | 局限 |
|---|---|---|
| 传统时间序列评测 | Monash, TFB, TimeEval 等 | 更关注数值预测、分类、插补、异常检测，通常缺少文本语义、因果结构和决策过程 |
| 上下文增强预测评测 | TimeMMD, CiK, CAMFE 等 | 开始引入事件或背景，但中心仍是 forecasting |
| 时间序列理解/推理评测 | TimeSeriesExam, MTBench, TimeMQA, EngineMT-QA, TSR-SUITE | 任务范围、领域范围或推理类型仍然较窄 |

TSRBench 的差异在于它把“时间序列 reasoning”系统化拆成四个层次：

1. **Perception**：能否看懂形状、趋势、噪声、异常、相似性。
2. **Reasoning**：能否基于时序模式、上下文和规则做因果、归因、归纳、演绎、数值推理。
3. **Prediction**：能否结合历史序列与事件背景判断未来走势或未来事件。
4. **Decision-Making**：能否基于时间序列和上下文做定性或定量决策。

这个划分很重要，因为它把 forecasting 从唯一目标降级为多个能力中的一类。论文后续实验也证明：模型在 perception/reasoning 上变强，不自动意味着 prediction 变强。

## 3. Benchmark 规模与基本组成

TSRBench 的规模如下：

| 项目 | 数值 |
|---|---:|
| 问题数 | 4,125 |
| 时间序列 channel 数 | 15,250 |
| 领域数 | 14 |
| 大能力维度 | 4 |
| 细粒度任务 | 15 |
| 多变量样本占比 | 58.1% |
| 评测模型 | 30+ proprietary / open-source LLM, VLM, TSLLM |
| 输入形式 | text, vision, text+vision, time-series embedding |

这里的“channel”比“问题数”多很多，说明大量题目不是单变量序列，而是多变量、多信号共同输入。附录报告整体 **58.1%** 样本为多变量实例；其中 Comparative Analysis、Causal Discovery、Time Series Forecasting、Event Prediction、Qualitative Decision-Making 都是 100% 多变量。这一点决定了 TSRBench 不是简单曲线识别题，而是要求模型在多个信号之间建立关系。

## 4. 四大维度与 15 个任务

### 4.1 Perception：时间序列感知

Perception 测的是最基础但不可跳过的能力：模型能否正确识别序列的结构属性。论文把它分成 4 个任务：

| 任务 | 缩写 | 测试点 |
|---|---|---|
| Pattern Recognition | PR | 趋势、周期性、平稳性、均值等基本属性 |
| Noise Understanding | NU | 噪声规模、随机扰动强弱、信号是否被噪声掩盖 |
| Anomaly Detection | AD | 异常位置、异常类型，以及异常前原本模式 |
| Comparative Analysis | CA | 多个序列之间的共同模式、趋势一致性、方差或分布相似性 |

这部分看似简单，但它是后续推理的地基。错误分析显示，很多复杂题失败并不是因为模型缺少领域知识，而是第一步就看错了趋势、异常或局部结构。

### 4.2 Reasoning：时间序列推理

Reasoning 是 TSRBench 最核心的部分，共 7 个任务：

| 任务 | 缩写 | 能力边界 |
|---|---|---|
| Etiological Reasoning | ER | 从观测序列反推出生成来源或底层原因 |
| Causal Discovery | CD | 判断多个时间序列之间是否存在因果关系，以及因果方向 |
| Abductive Reasoning | AR | 根据前后观测推断最可能发生过的潜在事件 |
| Temporal Relation Reasoning | TR | 根据序列定位事件，并判断多个事件的先后顺序 |
| Numerical Reasoning | NR | 结合领域语义和时间序列做定量计算 |
| Deductive Reasoning | DR | 给定明确规则或方程，严格推演结果 |
| Inductive Reasoning | IR | 从历史模式中归纳规律，再应用到未来特定事件 |

这 7 类任务覆盖了不同形式的“为什么”和“所以”：ER 问“它是什么原因产生的”，CD 问“谁影响谁”，AR 问“什么事件解释了变化”，TR 问“事件顺序是什么”，NR/DR 问“规则和数字推演后答案是什么”，IR 问“从历史规律能推广出什么”。

论文的关键观点是：这些任务不是传统时间序列分析的简单包装。比如 Causal Discovery 不只是看两个曲线是否相关，还要结合上下文和方向定义；Deductive Reasoning 不只是估计趋势，而是要求严格执行给定规则，任何一步近似或偷懒都可能错。

### 4.3 Prediction：预测

Prediction 包含两个任务：

| 任务 | 缩写 | 说明 |
|---|---|---|
| Time Series Forecasting | TSF | 给定历史序列和事件上下文，从候选未来轨迹中选择最合理走势 |
| Event Prediction | EP | 根据历史时间序列预测未来离散事件 |

TSF 被设计成多选题，而不是要求模型直接输出一串未来数值。这样做的原因是通用模型直接数值生成能力较弱，多选题能更稳定地比较模型是否理解候选轨迹。论文附录进一步验证了这一点：MCQ 形式下的模型规模-性能相关性，与 open-ended numerical forecasting 下用 nMAE 衡量的趋势高度一致。具体来说，LLM 的 Spearman 相关在 MCQ 中为 -0.55，在直接数值预测中为 -0.61；VLM 分别为 0.03 和 -0.05。也就是说，多选形式并没有虚构出一个完全不同的预测能力排序。

### 4.4 Decision-Making：决策

Decision-Making 分成定性和定量两类：

| 任务 | 缩写 | 说明 |
|---|---|---|
| Qualitative Decision-Making | QualDM | 结合时序模式和领域知识做判断，例如临床/诊断类决策 |
| Quantitative Decision-Making | QuantDM | 模拟不同操作流程或策略的结果，比较指标并选择最优方案 |

QuantDM 是特别难的一类，因为它要求模型不只是“理解题意”，还要能把规则逐步应用到时间序列上，计算每种方案的结果，再做比较。这也是论文里低准确率、低方差的任务之一，说明强弱模型普遍都处理不好。

## 5. 数据构造：为什么 TSRBench 不只是题目拼盘

论文强调数据构造有四个原则：

1. **High Text-Timeseries Alignment**：文本上下文必须和时间序列强相关，并且对解题不可或缺。
2. **Domain Diversity and Generalizability**：数据来自多个领域，防止模型靠单领域模板或记忆过拟合。
3. **Verifiable and Unambiguous Ground Truth**：答案必须能由仿真、代码、规则抽取或元数据检索得到，避免开放式主观评分。
4. **Synthetic Data for Quantitative Reasoning**：对于数值推理、演绎推理、定量决策等需要高精度答案的任务，用合成数据和代码 verifier 保证正确性。

构造 pipeline 分为三步：

| 阶段 | 做什么 | 目的 |
|---|---|---|
| Raw data collection | 从公开数据源收集真实时间序列，或用代码合成可控序列 | 获得多领域、多结构数据 |
| Question generation | 人工设计任务模板，再用代码或规则生成答案 | 减少自动生成题目的歧义 |
| Verification | 对合成数据用 code verifier，对真实数据用 fact verifier | 保证答案和干扰项可靠 |

这套流程处理了时间序列 benchmark 最难的一个问题：文本和数值的时间对齐。比如新闻发布时间要对应到正确的时间步，季度/季节性报告要对应到合适的时间窗口；如果对齐错误，模型可能看似答错，实际是题目本身不严谨。

主要数据源如下：

| 任务 | 数据源 |
|---|---|
| PR / NU / AD / CA | TimeSeriesExam |
| ER | LEAVES, Human Activity Recognition |
| CD | CausalRiver |
| AR | GAMETIME |
| TR | Time-IMM |
| NR / DR / QuantDM | Synthetic Data |
| IR | Kaggle Philippines Typhoon Trend, Sunspots Dataset |
| TSF | CAMFE |
| EP | TimeCAP |
| QualDM | ECG-QA, PTB-XL |

为降低数据污染风险，论文还做了 n-gram leakage 检测：把问题、文本时间序列和答案拼接后随机选取 $K=20$ 个位置抽 5-gram，若模型能预测出真实 5-gram 就视作潜在污染。o4-mini、GPT-5-mini、GPT-5 的 n-gram accuracy 分别只有 0.3%、0.1%、0.4%，说明明显泄漏风险较低。

## 6. 多模态评测设置

TSRBench 的一个重要设计是同一题可以用不同形式喂给模型：

| 输入形式 | 面向模型 | 表示方式 |
|---|---|---|
| T | LLM | 把时间序列写成文本数字序列 |
| V | VLM | 把时间序列渲染成 line chart |
| T+V | proprietary multimodal models | 同时提供文本序列和图像 |
| Embedded TS | TSLLM | 通过时间序列模型的 projector/embedding 输入 |

图像渲染也不是随便画图。论文把单变量样本画成单张折线图，多变量样本画成共享时间轴的纵向子图，每个子图有网格和变量名。根据分辨率消融，主实验固定为 **100 PPI**：低分辨率会丢失细节，过高分辨率会引入过多视觉复杂度，100 PPI 在可见性和 token 成本之间较平衡。

被评测模型包括：

| 类别 | 模型 |
|---|---|
| Proprietary | DeepSeek-V3.2, Gemini-2.5-Flash, Claude-4.5-Haiku, o4-mini, GPT-5-mini, GPT-5 |
| Open-source LLM | Qwen2.5, Qwen3, Gemma3, InternLM3, GPT-OSS, TimeOmni |
| Open-source VLM | Llama-4-Scout, Qwen2.5-VL, Qwen3-VL, Phi4-Multimodal, InternVL3.5, MiniCPM-V, MiMo-VL |
| TSLLM | OpenTSLM, ChatTS, TS-Reasoner |

主指标是 accuracy。论文默认给模型开启 reasoning；同时也做了 inference-time compute 的消融，比较 reasoning / non-reasoning 模式差异。

## 7. 主结果：最强模型也远未解决 TSRBench

主表的关键结果如下：

| 类别 | 最强模型 | Overall Acc |
|---|---|---:|
| Proprietary | GPT-5 (T+V) | **55.6** |
| Proprietary, high reasoning | GPT-5-mini-high (T+V) | 54.1 |
| Open-source LLM | Qwen2.5-72B | 42.4 |
| Open-source VLM | Qwen3-VL-32B | 44.9 |
| TSLLM | TS-Reasoner-7B | 36.4 |
| TSLLM | ChatTS-14B | 33.5 |

几个细节值得注意：

- GPT-5(T+V) 最高也只有 55.6%，说明 TSRBench 对当前模型仍然很难。
- 开源 VLM 最好的是 Qwen3-VL-32B，44.9%，略高于开源 LLM 最好结果 Qwen2.5-72B 的 42.4%。
- TSLLM 没有显著领先通用 LLM/VLM。TS-Reasoner-7B 是 TSLLM 中最好，36.4%，但距离 GPT-5 和强开源 VLM 仍有明显差距。
- 推理强度有效：o4-mini-high 比 o4-mini(T+V) 高 4.3 个点，GPT-5-mini-high 比 GPT-5-mini(T+V) 高 7.2 个点。

这说明 TSRBench 里的难点确实需要更长推理，而不是只靠图像识别或检索式回答。

## 8. Finding 1：规模定律多数成立，但 prediction 例外

论文计算了模型参数规模和性能之间的 Spearman 相关：

| 模型类型 | Overall | Perception | Reasoning | Prediction | Decision |
|---|---:|---:|---:|---:|---:|
| LLM | 0.9248 (*) | 0.8929 (*) | 0.9795 (*) | -0.2415 | 0.7380 (*) |
| VLM | 0.6436 (*) | 0.8301 (*) | 0.6389 (*) | -0.2612 | 0.5596 |

结论是：模型越大，整体、感知、推理、决策通常越强；但预测任务不随规模增长而变好，甚至呈弱负相关。

这个发现很关键。它说明预测能力不是通用 reasoning ability 的自然副产品。一个大模型可能更会读题、更会解释、更会推理，但仍然不会稳定做 context-aware forecasting。预测需要的可能是另一类训练信号：连续数值动态、长期依赖、事件冲击建模，以及未来轨迹不确定性的表示。

## 9. Finding 2：Prediction 与其他能力相对脱钩

论文进一步做了任务间相关性分析，发现 Perception、Reasoning、Decision 三者之间相关较强，但它们和 Prediction 的相关性弱。

这可以理解为两个能力簇：

| 能力簇 | 特征 |
|---|---|
| 理解-推理-决策簇 | 依赖模式识别、语言理解、规则应用和上下文推理 |
| 预测簇 | 依赖未来动态建模、事件影响估计和数值轨迹选择 |

因此，TSRBench 的结果提醒我们：不能用“模型会解释过去”来推断“模型会预测未来”。过去解释和未来预测之间有共享部分，但不是同一能力。

## 10. Finding 3：文本和图像互补，但 T+V 融合失败

论文比较了 T、V、T+V 三种输入形式。

视觉表示在 Perception 上更有优势，因为趋势、周期、异常、整体形状在图像里更直观。文本数字序列在需要精细读取具体数值、规则计算、比较局部点位时更有优势。

更有意思的是，论文计算了 T 和 V 正确样本的交集和并集：交集低、并集高。这说明文本和图像解决的是不同子集，并不存在一种模态全面支配另一种模态。

但 T+V 并没有稳定超过单模态。模型看到文本和图像后，答案大多仍落在 T 或 V 原本能解决的样本上，没有有效吃到“并集上限”。这暴露的是当前 MLLM 的跨模态融合短板：

- 模型可能把图像当作辅助说明，而没有将图像证据和文本数字逐步对齐；
- 模型可能在 T 和 V 冲突时没有可靠的仲裁机制；
- 多变量时间序列图像里局部结构多，模型难以把视觉模式映射回具体变量和时间点；
- 文本序列很长时，模型也可能丢失局部数值细节。

对后续研究来说，TSRBench 暗示需要的不只是“把图也给模型”，而是显式的跨模态对齐、证据选择和工具化数值核验。

## 11. Finding 4：有些任务适合蒸馏，有些任务需要新数据

论文按各任务的平均准确率和模型间方差把任务分成两类：

| 类型 | 代表任务 | 含义 |
|---|---|---|
| 高方差任务 | Abductive Reasoning, Event Prediction | 强模型能做、弱模型做不好，说明可能通过蒸馏或更好推理训练迁移能力 |
| 低准确率、低方差任务 | Quantitative Decision-Making, Time Series Forecasting | 所有模型都差，说明不是小模型缺少强模型技巧，而是当前范式普遍缺少所需能力 |

这个分析比单纯排名更有价值。高方差任务适合 model-centric 改进，例如蒸馏、test-time reasoning、better prompting；低准确率低方差任务更可能需要 data-centric 或 objective-centric 改进，例如更大规模的时序-文本联合预训练、可执行规则监督、真实决策轨迹数据。

## 12. 工具增强实验：统计特征有帮助，但不是根治

论文尝试给模型追加确定性时间序列分析特征，测试“模型失败是不是因为看不懂数值结构”。工具模块会对输入序列 $X=\{x_1,x_2,\dots,x_n\}$ 生成结构化摘要，包括：

### 12.1 描述统计

包括均值、标准差、范围、中位数、方差、偏度和峰度：

$$
\mu,\ \sigma,\ x_{\max}-x_{\min},\ \mathrm{median},\ \sigma^2,\ \mathrm{skewness},\ \mathrm{kurtosis}
$$

这些特征提供全局尺度、离散程度和分布形状。

### 12.2 趋势分析

工具用 OLS 拟合：

$$
x_t = \beta_1 t + \beta_0 + \epsilon
$$

其中 $\beta_1$ 表示趋势方向和幅度，$R^2$ 衡量线性趋势解释度。趋势强度按 Pearson $r$ 分成 strong、moderate、weak：$|r|>0.7$ 为 strong，$0.4<|r|\le0.7$ 为 moderate，否则 weak。

### 12.3 峰谷和突变点

局部峰值/谷值使用 prominence threshold：

$$
P = 0.5 \cdot \sigma_X
$$

change point 用一阶差分：

$$
\Delta x_t = x_t - x_{t-1}
$$

若满足：

$$
|\Delta x_t| > \theta,\quad \theta = 2\cdot\operatorname{std}(\Delta X)
$$

则标记为突变点。

### 12.4 多变量比较

对多个序列，工具计算 Pearson correlation、Welch's t-test，并通过 cross-correlation 找最佳滞后：

$$
\tau_{\text{best}} = \operatorname*{argmax}_{\tau} (X \star Y)(\tau)
$$

工具增强的总体收益很小：

| 模型 | Overall 变化 |
|---|---:|
| o4-mini (T+V) | +1.2 |
| GPT-5-mini (T+V) | +0.5 |
| GPT-5 (T+V) | +0.6 |

这说明显式统计摘要能补一部分 perception 或局部数值读取问题，但不能自动解决推理链、领域规则和决策模拟问题。换句话说，工具提供“看见了什么”，但模型仍要解决“这意味着什么、该如何推演”。

## 13. 分辨率和推理预算消融

### 13.1 视觉分辨率

论文比较 10、50、100、200、400 PPI，发现 100 PPI 最均衡：

- 低分辨率会损失局部波动、异常点和曲线交叉等细节；
- 过高分辨率会增加视觉复杂度，让模型更难抓住全局结构；
- T+V 设置下，文本序列能部分补偿低分辨率图像的信息损失。

这对实际评测很有启发：时间序列图像不是越清晰越好。对 VLM 来说，图像既是信息载体，也是视觉 token 负担。

### 13.2 Inference-time scaling

论文比较 GPT-5、Qwen3-32B、Qwen3-VL-32B 的 reasoning 和 non-reasoning 模式。结果显示：

- Perception 对推理预算不太敏感；
- Reasoning、Prediction、Decision-Making 在降低推理预算后明显下降。

这说明很多 TSRBench 题目不是“第一眼看出来”就能答对，而需要显式中间步骤：定位时间点、抽取数值、应用规则、比较候选项、检查方向定义。

## 14. 错误分析：主要不是不会读题，而是感知和推理失败

论文抽样 GPT-5(T+V)、Gemini-2.5-Flash(T+V)、Claude-4.5-Haiku(T+V) 的 150 个失败样本，每个任务 10 个，并把错误分成四类：

| 错误类型 | 说明 |
|---|---|
| Reasoning Error | 推理链不完整、跳步、提前下结论、规则应用不严 |
| Perception Error | 看错趋势、异常、局部形态或变量关系 |
| Question Understanding Error | 误解题目约定，例如因果矩阵行列方向 |
| Domain Knowledge Error | 用错领域公式、规则或专业定义 |

主要失败来自 Reasoning 和 Perception，而不是 Question Understanding 或 Domain Knowledge。这一点很值得注意：当前模型通常能读懂题目表面意思，也知道很多领域知识，但在把时间序列证据转化为严谨推理时仍不稳。

### 14.1 Reasoning Error 例子：Lorenz 系统推演

一个错误案例给出 Lorenz Attractor 的 Euler 离散迭代方程、参数和初始条件，要求选择 120 步 $x(t)$ 的完整轨迹。模型算了前两步，然后声称“完整模拟后 A 匹配”，但没有展示中后段计算，也没有逐项比较候选序列。正确答案是 C。

这个例子暴露了 LLM 常见问题：它会生成看似合理的计算过程，但在需要长链精确执行时用局部验证替代完整验证。对混沌系统而言，早期几步相似没有意义，差异可能在后期才显现。

### 14.2 Domain Knowledge Error 例子：FAO-56 Penman-Monteith

另一个案例要求根据温度、相对湿度、净辐射和 2m 风速计算累计参考蒸散量 $ET_0$。模型选择了 216.3 mm，但正确答案是 166.4 mm。

错误原因是模型用了错误分母：

$$
\Delta + \gamma
$$

而标准 FAO-56 Penman-Monteith 形式中应包含风速修正项：

$$
\Delta + \gamma(1 + 0.34u_2)
$$

漏掉 $1+0.34u_2$ 会低估 aerodynamic resistance，使每日 $ET_0$ 被系统性高估，最终累计值被推到错误选项。

### 14.3 Question Understanding Error 例子：因果矩阵方向

Causal Discovery 样例要求根据东德国 5 个河流传感器的 runoff water level 判断因果图，并明确规定矩阵中“列是 cause，行是 result”。模型如果把行列方向反过来，图结构会整体错位。

这类错误看似是读题问题，但更深层是模型没有把自然语言约定、矩阵语义和图结构进行一致绑定。

## 15. 论文贡献

TSRBench 的主要贡献可以归纳为四点：

1. **提出系统化时间序列推理 taxonomy**：从 perception 到 reasoning、prediction、decision-making，覆盖 15 个细粒度任务。
2. **构建大规模多领域 benchmark**：4,125 道题、15,250 个 channel、14 个领域，并包含大量多变量样本。
3. **统一比较多种输入形式和模型类型**：LLM 的文本序列、VLM 的图像序列、T+V 多模态输入、TSLLM embedding 输入在同一任务体系下比较。
4. **给出有诊断价值的实证结论**：规模定律在 prediction 上失效，T/V 互补但融合不足，工具增强收益有限，错误主要来自感知和推理。

## 16. 局限

论文自身和实验结果也暴露了一些局限：

- **多选题仍是主形式**。虽然论文验证 TSF 的 MCQ 与 open-ended forecasting 趋势一致，但真实应用最终常需要生成连续数值、置信区间或可执行策略。
- **数据源和任务模板仍会影响能力边界**。TSRBench 覆盖很广，但每个任务的具体形式仍由已有数据集和人工模板决定。
- **T+V 失败说明 benchmark 暴露问题，但不提供训练解法**。论文证明跨模态融合不足，但没有提出新的融合模型。
- **工具增强较浅**。工具主要提供统计摘要，没有形成可交互的程序执行、候选验证或搜索式推理框架。
- **高风险领域仍需更严格验证**。医疗、金融、工业等场景中，benchmark accuracy 不能直接等价于部署安全性。

## 17. 对后续研究的启发

TSRBench 对时间序列 + 通用模型研究有几个直接启发：

1. **不要只做 forecasting benchmark**。如果目标是 generalist model，时间序列能力应包含解释、归因、因果、规则推演和决策。
2. **Prediction 需要专门训练信号**。规模扩大和通用推理增强不能自然解决未来轨迹建模。
3. **跨模态融合是关键瓶颈**。文本数字和图像曲线明显互补，但当前模型无法有效逼近二者并集上限。
4. **定量推理需要可执行验证**。Lorenz 和 QuantDM 类任务说明，长链数值推演不适合只靠自然语言 CoT，应该结合代码执行、符号计算或验证器。
5. **低准确率低方差任务应优先数据建设**。如果所有模型都差，蒸馏强模型的收益有限，更需要新的预训练数据、监督任务和可执行反馈。
6. **时间序列 agent 可能比单模型 prompt 更合适**。一个可行方向是把任务拆成 perception extractor、event aligner、rule executor、forecast verifier、decision scorer 等模块，再由模型协调。

## 18. 总体评价

TSRBench 的价值不在于又给了一个排行榜，而在于把“时间序列推理”从模糊概念拆成可评测的能力谱系。它证明了当前通用模型在时间序列场景中的短板并不单一：有些是看图和读数问题，有些是跨模态对齐问题，有些是长链数值推演问题，还有一些是未来动态建模问题。

如果只看最高分 55.6%，TSRBench 的结论很直接：即使最强的通用模型也还没有可靠掌握时间序列问题解决能力。未来真正有用的时间序列 reasoning model，应该同时具备三种能力：**能稳健感知时序结构，能用文本和领域规则做可验证推理，能在预测与决策中处理连续动态和不确定性。**

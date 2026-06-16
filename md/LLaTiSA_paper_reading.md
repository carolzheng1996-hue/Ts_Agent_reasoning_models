# 《LLaTiSA: Towards Difficulty-Stratified Time Series Reasoning from Visual Perception to Semantics》中文文献解读

**论文**：Yueyang Ding, HaoPeng Zhang, Rui Dai, Yi Wang, Tianyu Zong, Kaikui Liu, Xiangxiang Chu. Amap, Alibaba Group  
**方法名**：LLaTiSA，Large Language and Time Series Assistant  
**数据集**：HiTSR，Hierarchical Time Series Reasoning dataset  
**论文链接**：[arXiv:2604.17295](https://arxiv.org/abs/2604.17295) / [PDF](https://arxiv.org/pdf/2604.17295) / [TeX](https://arxiv.org/e-print/2604.17295)  
**代码**：[GitHub: RainingNovember/LLaTiSA](https://github.com/RainingNovember/LLaTiSA)  
**本地 TeX 源码目录**：[LLaTiSA_Towards_Difficulty_Stratified_Time_Series_Reasoning_from_Visual_Perception_to_Semantics](LLaTiSA_Towards_Difficulty_Stratified_Time_Series_Reasoning_from_Visual_Perception_to_Semantics/)

## 1. 一句话总结

LLaTiSA 认为时间序列推理不应被笼统地评测为“会不会回答问题”，而应按从数值读出到模式感知再到语义推理的难度层级诊断；论文构造 83K 规模的 HiTSR 数据集，并用“折线图 + 索引数值表”双图输入训练 VLM，让模型同时具备视觉模式直觉和精确数值 grounding。

## 2. 背景与问题诊断

现有时间序列推理数据集有两个突出问题。

第一，任务定义碎片化。TSQA、BEDTime、Engine-QA、Heartcare-Bench 等数据集各自关注 forecasting、classification、pattern description 或领域 QA，但没有一个统一的认知难度坐标系。因此，一个模型在高层语义问题上表现好，可能只是利用语言先验，并不代表它真的会读出时间点和值。

第二，benchmark 可靠性不足。论文指出一些现有题目存在上下文不足、选项语义模糊、标签不唯一、数值证据不严的问题。对时间序列推理来说，这会直接污染模型训练：模型可能学到“说得像推理”，却没有学到“每一步都能落到真实数值和时间位置”。

LLaTiSA 的核心判断是：复杂时间序列推理需要先打牢基础能力。如果模型连最大值、最小值、局部 spike、起止变化都不能稳定定位，那么后续语义解释和预测就会变成不可靠的语言生成。

## 3. TSR 四层难度 taxonomy

论文把 Time Series Reasoning (TSR) 拆成四个递进层级：

| Level | 名称 | 能力目标 | 例子 |
|---|---|---|---|
| L1 | Numerical Read-out | 时间索引感知、点级数值检索 | 找最大值及其 index；比较起点和终点 |
| L2 | Pattern Perception | 识别局部/全局模式，并用数值证据区分 | 判断 spike、周期、趋势、局部形态 |
| L3 | Semantic Reasoning | 把序列证据和上下文/领域知识结合 | 判断风机功率、ECG、交通、经济等场景解释 |
| L4 | Predictive Inference | 生成或选择高保真未来序列 | 从候选 continuation 中选真实后继片段 |

主文重点放在 L1-L3，因为作者发现很多强模型甚至在基础 L1/L2 上仍然不稳。附录进一步补充了 L4 实验，说明该 taxonomy 也可以扩展到预测推理。

可形式化理解为：给定时间序列集合 $X=\{x^{(n)}_{1:T}\}_{n=1}^{N}$ 和问题/上下文 $Q$，模型生成自然语言回答 $R$：

$$
R \sim p_{\theta}(R \mid X, Q)
$$

这里 $X$ 可以被表示成文本数组、图像、数值表图像或专用时序编码；$Q$ 是任务指令与语义上下文；$R$ 不只是标签，而是包含 reasoning 的自然语言输出。LLaTiSA 的关键不是改变这个条件生成形式，而是改变 $X$ 的呈现方式和训练课程，让 $p_\theta$ 在生成时有可靠的数值 grounding。

## 4. HiTSR 数据集

HiTSR 是论文构造的分层时间序列推理数据集，共约 83K 样本，覆盖 L1-L3。

| 子集 | 样本数 | 数据来源 | 主要任务 |
|---|---:|---|---|
| HiTSR-L1 | 30,000 | ChatTS 合成时间序列 | Min/Max grounding、multi-series comparison、start/end comparison、subseries localization |
| HiTSR-L2 | 50,703 | ChatTS 合成时间序列 | local pattern differentiation、global pattern differentiation、numerical perception |
| HiTSR-L3 | 3,121 | 公开真实时间序列 | semantic understanding |

L1 和 L2 中可规则确定答案的任务，用 deterministic scripts 生成标签；L2 的 pattern differentiation 和 L3 的 semantic understanding 则采用 LLM 生成、GPT-5 交叉检查、人类审核的多阶段流程。

数据质量控制很重：

| 层级 | 验证方式 |
|---|---|
| L1 | 规则构造，10% 样本用确定性脚本检查 |
| L2 | 10% 测试池人工审核；local/global pattern 还用 GPT-5 生成 CoT 并过滤歧义题 |
| L3 | 3,121 条全部人工复核 |

论文还用 Qwen3-235B-A22B-Instruct 做 cross-model validation。L2 Local、L2 Global、L3 的 Cohen's Kappa 分别为 0.865、0.847、0.831，平均约 0.848，说明 GPT-5 与 Qwen3 对题目有效性的判断高度一致。

## 5. LLaTiSA 方法：双图输入 + 分层课程学习

### 5.1 为什么不是只用折线图或文本数组

时间序列可以用三类方式喂给大模型：

- 文本数组：数值精确，但长序列 token 成本高，且模型容易在索引和值之间配错。
- 折线图：全局趋势和局部形态直观，但精确读数差。
- 专用 TS encoder：更像时序模型，但在基础 reasoning 上不一定优于通用 VLM。

LLaTiSA 的设计是把折线图和“数值表图像”一起输入 VLM：

| 视图 | 作用 |
|---|---|
| plot image | 看全局趋势、周期、spike、局部形态 |
| numerical table image | 精确校验 index-value、区间、最大/最小点 |
| text context | 提供题目、选项、领域语义 |

因此它不是单纯把数值序列转成文本，而是让 VLM 通过图像 token 同时处理模式和表格。这个思路受 DeepSeek-OCR 等“用视觉 token 表示文本/结构信息”的工作启发。

### 5.2 三阶段课程训练

LLaTiSA 以 Qwen3-VL-8B-Instruct 为 backbone，采用三阶段 SFT：

| Stage | 数据 | 目标 |
|---|---|---|
| Stage 1 | HiTSR-L1 | 建立精确数值读出和 index grounding |
| Stage 2 | HiTSR-L2 | 学习局部/全局 pattern perception |
| Stage 3 | HiTSR-L3 或领域任务 | 学习语义推理和场景迁移 |

训练配置来自附录：共享 optimizer 为 AdamW，scheduler 为 cosine，weight decay 0.1，8 张 H20 GPU。Stage 1/2/3 学习率均为 $1\times10^{-5}$，样本量分别约 27K、45K、2.7K；ECG 迁移阶段使用 30K ECG-Grounding 样本。

## 6. Agent/框架视角拆解

LLaTiSA 不是工具调用 agent，但可以按推理系统的组件来理解：

| 组件 | 对应内容 |
|---|---|
| state / input object | 时间序列 plot、数值表图像、文本问题、选项、领域 metadata |
| policy/model | Qwen3-VL-8B-Instruct 经过 HiTSR 分阶段 SFT 后的 VLM |
| action/output | 生成自然语言 CoT 和最终选项/数值回答 |
| tool space | 无外部工具；“数值表图像”相当于内置精确读数辅助视图 |
| trajectory | HiTSR 中经验证的 Chain-of-Thought，从 numerical evidence 到 pattern 再到 semantic conclusion |
| memory/retrieval | 无显式记忆库；依靠训练中内化的 difficulty-stratified reasoning pattern |
| update mechanism | L1 -> L2 -> L3 curriculum SFT；附录还尝试 L4 阶段 |
| evaluation | OOD benchmark：HiTSR real-world L1、BEDTime、MMTS-Bench、MCQ2，以及 ECG-Grounding ID/OOD |

## 7. 实验设置

OOD 评测覆盖：

| 层级 | 数据集 | 样本/说明 |
|---|---|---|
| L1 | HiTSR-L1 real-world subset | LLaTiSA 训练只用 synthetic counterpart，因此是真实分布 OOD |
| L2 local | BEDTime | 随机采样 500 个问题 |
| L2 global | MMTS-Bench | 使用对应完整 subset，120 个样本 |
| L3 | MCQ2 | 按 ChatTS setting 随机采样 100 个问题 |
| ECG | ECG-Grounding 30K | 领域 SFT 后评估 ID/OOD |

Baselines 包括 GPT-4o、Qwen3-8B、Qwen3-VL-8B、Time-R1、Time-MQA、ChatTS、OpenTSLM，以及 ECG 领域模型 GEM、PULSE。

## 8. 主结果：OOD L1-L3

| 模型 / 表示 | L1 Acc | L1 half-Acc | L1 SR | L2 Local | L2 Global | L3 Series Comparison |
|---|---:|---:|---:|---:|---:|---:|
| GPT-4o text w/o index | 47.4 | 69.8 | 100.0 | 47.6 | 95.0 | 43.0 |
| GPT-4o vision plot | - | - | - | 72.2 | 96.7 | 39.0 |
| ChatTS | 7.8 | 29.2 | 100.0 | 57.0 | 80.0 | 59.0 |
| GPT-4o vision+text w/ index | 54.2 | 88.6 | 100.0 | 65.8 | 96.7 | 48.0 |
| Qwen3-VL-8B vision+text w/ index | 34.2 | 68.0 | 90.6 | 43.0 | 93.3 | 54.0 |
| **LLaTiSA plot+num** | **86.8** | **96.0** | **100.0** | **75.6** | **97.5** | **67.0** |

这个表的含义很清楚：

- 只看图的 VLM 在 L2 pattern 上可以很强，但无法做 L1 精确读数。
- 文本数组如果没有 index，长序列定位容易失败。
- 即使给 GPT-4o vision+text w/ index，L1 Acc 也只有 54.2。
- LLaTiSA 的 plot+num 双图输入在 L1、L2、L3 全部最好，说明它确实把“读数”和“看形状”结合起来了。

## 9. 编码策略对比

在相同 backbone 和训练设置下，论文比较了多种时间序列表示。

| 表示策略 | L1 Acc | L1 SR | L2 Local | L2 Global | L3 |
|---|---:|---:|---:|---:|---:|
| Text w/ index | **87.6** | 100.0 | 39.0 | 94.2 | 47.0 |
| Text w/o index | 65.2 | 92.4 | 37.6 | 89.2 | 43.0 |
| Vision single plot | - | - | 68.0 | **97.5** | 62.0 |
| Vision single num | 86.8 | 100.0 | 32.4 | 75.0 | 32.0 |
| Plot + Text w/ index | 85.2 | 100.0 | 49.8 | 95.8 | 60.0 |
| **LLaTiSA plot+num** | 86.8 | 100.0 | **75.6** | **97.5** | **67.0** |

这说明不同表示有互补性：text w/ index 最适合 L1；plot 最适合全局 pattern；num table 单独使用不适合 L2/L3。LLaTiSA 的优势在于把 plot 和 num table 组合成同一个 VLM 输入，使模型可以先看形状，再用表格校验证据。

## 10. ECG 迁移实验

论文把 LLaTiSA 作为通用 TSR foundation model，再用 ECG-Grounding 30K 做 SFT。结果显示它不是只会合成数据上的模式题，而能迁移到真实多变量医学序列。

| Setting | Model | Diagnosis Acc | Lead Coverage | Lead Accuracy | Evidence Reasoning |
|---|---|---:|---:|---:|---:|
| ID | PULSE | 81.1 | 7.1 | 3.0 | 52.4 |
| ID | GEM (LLaVA) | **87.2** | 71.1 | 46.4 | **75.1** |
| ID | Qwen3-VL-8B | 60.9 | 69.3 | 50.1 | 63.8 |
| ID | **LLaTiSA** | 62.8 | **84.0** | **53.0** | 71.2 |
| OOD | GEM (PULSE) | **73.6** | 78.9 | 48.0 | **75.4** |
| OOD | Qwen3-VL-8B | 59.0 | 56.4 | 38.1 | 63.8 |
| OOD | **LLaTiSA** | 62.2 | 66.5 | **49.2** | 66.6 |

诊断准确率上，GEM/PULSE 这类专门 ECG 模型更强；但 LLaTiSA 在 lead-wise coverage/accuracy 上很突出。论文强调它只用了 GEM 约 2.5% 的 instruction data，即 30K vs 1.186M，却能在导联级分析上表现很强。

## 11. 消融实验

### 11.1 CoT 是否重要

| Setting | Variant | L2 | L3 | ECG-Grounding |
|---|---|---:|---:|---:|
| ID | w/o CoT | 97.0 | 80.0 | 57.4 |
| ID | joint training | 95.0 | 84.0 | 61.5 |
| ID | **LLaTiSA** | **97.0** | **87.0** | **62.8** |
| OOD | w/o CoT | 93.3 | 55.0 | 54.3 |
| OOD | joint training | 95.8 | 57.0 | 59.7 |
| OOD | **LLaTiSA** | **97.5** | **67.0** | **62.2** |

去掉 CoT 后，ID 上损失不明显，但 OOD L2/L3 明显下降，尤其 L3 从 67.0 掉到 55.0。说明 CoT 的作用不是让模型背答案，而是帮助它学习从数值证据到 pattern 再到语义判断的可迁移推理过程。

### 11.2 curriculum 是否重要

joint training 把 L1/L2/L3 混在一起训练，性能低于 L1 -> L2 -> L3 的顺序训练。论文解释是：高层语义任务不会自然“反向继承”低层 grounding；如果模型没有先学会读数，就直接学语义题，泛化会变差。

附录扩展实验也支持这一点：only L2 的 OOD L1 只有 10.0，而完整 LLaTiSA 的 OOD L1 为 96.0；完整 curriculum 的 OOD L3 为 67.0，高于 L1+L2 的 53.0 和 L1 -> L2 的 56.0。

## 12. L4 扩展实验

虽然主文说重点是 L1-L3，附录加入了 L4 predictive inference：给定历史片段 $x$，从四个候选后继片段 $y_1,\dots,y_4$ 中选择真实 chronological successor。

负例筛选包括：

- Pearson correlation 低于 0.8，避免候选太相似。
- split point 避开 spike 或 turning point，减少多解。
- 用 gradient consistency 和 tail-to-head difference 检查趋势连续性。
- 负例之间也互斥，避免冗余选项。

L4 OOD 结果：

| 模型 | Acc |
|---|---:|
| GPT-4.1 text | 79.1 |
| GPT-4o text | 75.6 |
| Claude-3.5-Sonnet text | 82.2 |
| Qwen3-VL-8B plot+num | 42.1 |
| LLaTiSA L1->L2->L3 | 54.2 |
| **LLaTiSA L1->L2->L3->L4** | **83.3** |

加上 L4 训练后，LLaTiSA 从 54.2 提升到 83.3，说明 L1-L3 是基础，但预测推理仍需要专门训练阶段。

## 13. 贡献

1. 提出 L1-L4 difficulty-stratified TSR taxonomy，把“读数、感知、语义、预测”拆成可诊断层级。
2. 构造 HiTSR，约 83K 条样本，包含 verified CoT，并对 L3 做全量人工审核。
3. 提出 LLaTiSA，用 plot + numerical table image 的双图 VLM 输入解决视觉直觉和数值精度之间的矛盾。
4. 通过 OOD benchmark 和 ECG 迁移证明，分层课程训练比混合训练更适合时间序列推理。

## 14. 局限与实践启发

局限方面，论文主要是 SFT，没有深入探索 RL/RFT；HiTSR 的 L1/L2 大量依赖合成数据，真实复杂场景覆盖仍可扩展；L4 虽然附录验证有效，但还不是主数据集和主实验的核心。

实践上，这篇论文最值得借鉴的是两个设计原则：

- 不要直接训练复杂时序问答；先让模型稳定读数和定位。
- 不要只给图或只给文本数组；对 VLM 来说，图形视图和精确数值视图是互补的。

如果要构造自己的时间序列 reasoning agent 或 benchmark，可以复用 HiTSR 的思路：先定义能力层级，再为每一层设计可验证标签，最后用 CoT 把数值证据、模式判断和语义结论串起来。

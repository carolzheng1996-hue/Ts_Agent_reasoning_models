# 《TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning》中文文献解读

论文：Shunyu Wu 等，*TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning*，arXiv:2606.03629  
方法名：**TSQAgent**  
配套基准：**TSQBench**  
本地 TeX 源码目录：[TSQAgent_Rating_Time_Series_Data_Quality_via_Dedicated_Agentic_Reasoning](TSQAgent_Rating_Time_Series_Data_Quality_via_Dedicated_Agentic_Reasoning/)

资源链接：

- 论文页面：[arXiv:2606.03629](https://arxiv.org/abs/2606.03629)
- PDF：[https://arxiv.org/pdf/2606.03629](https://arxiv.org/pdf/2606.03629)
- TeX 源码：[https://arxiv.org/e-print/2606.03629](https://arxiv.org/e-print/2606.03629)
- 代码仓库：[clsr1008/TSQualityAgent](https://github.com/clsr1008/TSQualityAgent)
- Hugging Face：未在论文正文或 arXiv 信息中发现明确官方链接

## 1. 一句话总结

TSQAgent 研究的问题不是“如何预测时间序列”，而是“如何判断哪段时间序列数据质量更高，并据此选择更有价值的训练数据”。论文先构造 TSQBench 来证明现有 LLM 很难自动识别关键质量维度，也很难做可靠的定量质量比较；随后提出三角色 agent 框架：Perceiver 选择质量维度，Inspector 用工具做维度级定量分析，Adjudicator 汇总和反思，最终把 pairwise preference 转成可用于数据筛选的质量分数。

可以概括为：

$$
\text{TSQAgent}
=
\text{Perceiver}
+
\text{Inspector with tools}
+
\text{Adjudicator}
+
\text{Bradley--Terry rating model}
$$

## 2. 背景：为什么时间序列数据质量评估很难

时间序列数据常见质量问题包括缺失值、噪声、异常点、分布漂移、趋势破坏、频率不一致、幅度漂移和模式结构断裂。低质量样本会显著影响下游预测、分类或基础模型微调。

传统做法依赖统计规则、影响函数、Shapley 或人工设计的质量指标。近年的 LLM 方法开始尝试让语言模型做时间序列质量判断，但已有方法通常有两个限制：

- 质量维度由人工预设，模型不需要判断“哪些维度真正相关”；
- 判断主要依赖文本化推理，缺少工具产生的定量证据。

论文因此提出研究问题：LLM 能否自适应识别相关质量维度，并在这些维度上做有证据支撑的质量比较？

## 3. TSQBench：测试 LLM 的质量推理能力

TSQBench 是论文提出的合成 pairwise benchmark，用于评估两个逐步能力：

1. **quality dimension identification**：给定两段时间序列，模型能否找出它们在哪些质量维度上存在差异；
2. **quality comparison**：给定某个质量维度，模型能否判断哪段序列质量更高。

论文定义统一质量维度集合：

$$
\mathcal{D}=\{d_1,\ldots,d_7\}
$$

七个维度为：

| 维度 | 含义 |
|---|---|
| Missing Value | 缺失或未观测值比例 |
| Noise Level | 噪声或随机扰动程度 |
| Rare Pattern | 由传感器故障、数据污染等造成的异常模式 |
| Trend | 趋势是否清晰、稳定、持续 |
| Frequency | 周期是否规则、稳定 |
| Amplitude | 周期振幅是否一致 |
| Pattern Consistency | 全局结构是否连贯，是否有断裂、平坦段、均值漂移 |

构造方式是先生成共享模板序列，再复制成 $(\mathrm{series}_A,\mathrm{series}_B)$，对其中一侧注入维度特定缺陷。这样 ground truth 是可控的：被注入缺陷的一侧在对应维度上质量更低。

对每个样本，活跃维度数按偏斜分布采样：

| 活跃维度数 | 概率 |
|---:|---:|
| 1 | 35% |
| 2 | 35% |
| 3 | 20% |
| 4 | 8% |
| 5 | 2% |

论文用 1,000 个合成样本评估多个 LLM。结果显示，LLM 在维度识别上 precision 很低，在质量比较上也只略高于随机猜测：

| 模型 | 维度识别 Precision | 维度识别 Recall | 质量比较 Accuracy |
|---|---:|---:|---:|
| Qwen3-4B | 33.5% | 80.9% | 54.7% |
| Gemma4-E4B | 38.0% | 75.7% | 58.6% |
| Phi4-mini | 33.4% | 69.7% | 54.9% |
| Qwen3-8B | 37.4% | 78.0% | 58.4% |
| GPT-4o mini | 34.7% | 83.0% | 60.0% |
| Claude Haiku 4.5 | 43.0% | 63.9% | 61.0% |

关键诊断是：LLM 往往会过度选择无关质量维度，同时缺乏可靠的数值比较能力。

## 4. TSQAgent 总体框架

TSQAgent 处理的是 pairwise time series quality assessment。输入为两段时间序列和数据集上下文：

$$
(\mathrm{series}_A,\mathrm{series}_B,c)
$$

输出是：

$$
R=(w,s,C)
$$

其中：

- $w$：整体质量更高的序列，取值为 $A$、$B$ 或 TIE；
- $s$：置信度；
- $C$：基于多维证据的结构化解释。

框架由三个角色组成：

| 角色 | 作用 |
|---|---|
| Perceiver | 观察两段序列，选择最相关的质量维度 |
| Inspector | 对每个维度做 ReAct 式分析，并调用工具获得定量证据 |
| Adjudicator | 汇总维度级证据，反思是否需要 recheck/replan，输出最终判断 |

## 5. Perceiver：质量维度选择

Perceiver 的目标是生成感知摘要和分析计划：

$$
(Z,\mathcal{D}_{\text{plan}})
=
\mathcal{A}_p(c,\mathrm{series}_A,\mathrm{series}_B)
$$

其中 $Z$ 是高层观察总结，$\mathcal{D}_{\text{plan}}\subseteq\mathcal{D}$ 是后续需要检查的质量维度集合。

论文用 TS quality-tailored GRPO 来训练 Perceiver。训练数据来自 TSQBench，共 3,320 个样本。模型需要输出 JSON，其中 `planned_dimensions` 字段是 reward 的核心目标。

奖励函数为：

$$
R=0.10R_{\mathrm{format}}+0.90R_{\mathrm{dim}}
$$

其中格式奖励鼓励可解析 JSON，维度奖励衡量预测维度和真实维度的 precision：

$$
R_{\mathrm{dim}}
=
\frac{|\mathcal{D}_{pred}\cap\mathcal{D}_{gt}|}{|\mathcal{D}_{pred}|}
$$

这个 reward 是 precision-oriented 的：它不鼓励模型“多选一些也许相关的维度”，而是惩罚冗余维度，从而减少后续 Inspector 的无效工具调用和无关证据。

GRPO 设置包括：每个 prompt 采样 $K=8$ 个 completion，训练 1 个 epoch，学习率 $10^{-5}$，KL 系数 $\beta=0.04$，LoRA rank 16，LoRA alpha 32，LoRA dropout 0.05。

## 6. Inspector：维度级工具增强分析

Inspector 是核心证据获取模块。给定计划维度 $\mathcal{D}_{\text{plan}}$ 和感知摘要 $Z$，它对每个维度独立执行有限步 ReAct：

$$
q_d
\rightarrow
(\text{Reason}_t
\rightarrow
\text{Action}_t
\rightarrow
\text{Observation}_t)^{*_{K}}
\rightarrow
R_d
$$

其中 $q_d$ 是某个维度的分析问题，$K$ 是每个维度允许的最大推理-动作轮数。维度级结果为：

$$
R_d=(w_d,s_d,E_d,C_d)
$$

其中：

- $w_d\in\{A,B,\text{TIE}\}$：该维度下质量更高的一侧；
- $s_d\in[0,1]$：置信度；
- $E_d$：工具证据；
- $C_d$：文本结论。

论文的关键主张是：质量比较不能只靠 LLM 看文本化序列，而要让 Inspector 调用定量工具。TSQAgent 设计了 16 个一元时间序列工具，覆盖信号质量、异常模式和结构模式。

| 类别 | 工具 |
|---|---|
| Signal Quality | `missing_ratio`, `noise_profile`, `volatility`, `range_stats` |
| Rare Pattern | `zscore_outlier`, `outlier_density`, `mad_residual_outlier`, `contextual_rare_pattern` |
| Structural Pattern | `trend_classifier`, `change_point_detector`, `seasonality_detector`, `autocorr`, `pattern_consistency_indicators`, `stationarity_test`, `rolling_amplitude`, `cycle_amplitude` |

例如缺失率工具：

$$
\texttt{missing\_ratio}(x)
=
\frac{|\{x_t\mid x_t=\mathrm{NaN}\}|}{T}
$$

噪声比例工具：

$$
\texttt{noise\_ratio}(x)
=
\frac{\sigma(x-\hat{x}_{\mathrm{roll}}^{(w)})}{\sigma(x)}
$$

Z-score 异常检测：

$$
z_t=\frac{|x_t-\mu|}{\sigma},
\quad
\mathbb{I}_{\mathrm{outlier}}(t)=\mathbb{I}[z_t>\lambda]
$$

IQR 异常密度：

$$
\mathrm{IQR}=Q_3-Q_1,\quad
\ell=Q_1-1.5\mathrm{IQR},\quad
u=Q_3+1.5\mathrm{IQR}
$$

趋势分类器：

$$
x_t=\beta_0+\beta_1t+\epsilon_t,
\quad
\texttt{trend\_strength}=R^2
$$

周期检测通过 ACF 搜索主周期：

$$
\rho(\tau)
=
\frac{\mathbb{E}[(x_t-\bar{x})(x_{t+\tau}-\bar{x})]}{\mathrm{Var}(x)},
\quad
\tau^\star=\arg\max_\tau\rho(\tau)
$$

这些工具返回结构化 observation，并被注入 Inspector 的推理轨迹中，替代纯文本主观判断。

## 7. Adjudicator：反思与聚合

Adjudicator 汇总所有维度级结果：

$$
\mathcal{R}=\{R_d\mid d\in\mathcal{D}_{\text{plan}}\}
$$

它先做 reflection，判断证据是否充分、一致。反思指令为：

$$
\rho\in\{\texttt{recheck}(\mathcal{D}_{\text{recheck}}),\texttt{replan},\varnothing\}
$$

含义是：

- `recheck`：某些维度证据不足或冲突，返回 Inspector 重新检查；
- `replan`：当前维度集合遗漏重要质量方面，返回 Perceiver 重新规划；
- $\varnothing$：证据足够，直接聚合。

反思步数有上限，避免无限循环。最终输出整体结果：

$$
R=(w,s,C)
$$

## 8. 从 pairwise preference 到全局质量分数

TSQAgent 本身输出 pairwise preference。为了用于数据选择，论文训练一个轻量 rating model，把 pairwise 判断转成每个样本的标量质量分数。

模型使用冻结的 MOMENT 编码器提取时间序列表征，再用 MLP 输出质量分数 $s_\theta(\mathbf{x})$。训练目标是 Bradley--Terry 风格 pairwise ranking loss：

$$
\mathcal{L}_\theta
=
\mathbb{E}_{(\mathbf{x}_i,\mathbf{x}_j,p_{i\succ j})\in\mathcal{J}}
\left[
-p_{i\succ j}\log\sigma(s_\theta(\mathbf{x}_i)-s_\theta(\mathbf{x}_j))
-(1-p_{i\succ j})\log\sigma(s_\theta(\mathbf{x}_j)-s_\theta(\mathbf{x}_i))
\right]
$$

这里 $\mathcal{J}$ 是 agent 产生的 pairwise comparison 集合，$p_{i\succ j}$ 表示 $\mathbf{x}_i$ 是否优于 $\mathbf{x}_j$。

为了跨数据集比较质量分数，论文还加入 meta-learning。每个数据集视为一个任务，支持集上适配，查询集上优化：

$$
\min_\theta
\sum_{\mathcal{T}_i}
\mathcal{L}_{\mathcal{T}_i}^{\mathrm{query}}
\left(
\theta-\alpha\nabla_\theta
\mathcal{L}_{\mathcal{T}_i}^{\mathrm{support}}(\theta)
\right)
$$

这个设计让质量分数在 Electricity、ExchangeRate、Traffic、Weather 等异构数据集之间更可比。

## 9. 实验设置

论文做两类实验。

第一类是在 TSQBench 上评估能力：

- 维度识别：看 GRPO 是否提升 Perceiver precision；
- 质量比较：看工具增强是否提升 Inspector accuracy。

第二类是真实数据选择实验。论文使用 11 个真实数据集：

| 任务类别 | 数据集 |
|---|---|
| Long-term forecasting | Electricity, ExchangeRate, Traffic, Weather |
| Short-term forecasting | M4 Yearly, M4 Monthly, M4 Daily |
| Classification | MedicalImages, CBF, BME, Handwriting |

数据按 7:2:1 切成 train/validation/test，再切成固定长度样本。不同方法给训练样本打分，选择 top 50% 样本训练下游模型。指标为：

- long-term forecasting：RMSE；
- short-term forecasting：MAPE；
- classification：Accuracy。

比较方法包括 Random、DataOob、DataShapley、TimeInf、TSRating。

## 10. 主要结果

### 10.1 TSQBench 能力提升

论文报告两个明确结论：

- GRPO 将开源模型维度识别 precision 从约 33%--38% 提升到接近 60%；
- 工具增强将质量比较 accuracy 从约 55%--61% 提升到 78%--84% 以上。

这说明 TSQAgent 的两个核心组件分别对应两个瓶颈：Perceiver 解决“不要乱选维度”，Inspector 工具解决“不要凭感觉比较数值”。

### 10.2 真实数据选择

在 50% 高质量数据预算下，TSQAgent 在多数设置中取得最好或接近最好的下游表现。论文表格显示：

- long-term forecasting 中，在 Linear 和 CNN 下优势明显；
- short-term forecasting 中，9 个设置里 7 个 MAPE 最优；
- classification 中，12 个设置里 9 个 Accuracy 第一。

部分关键结果如下：

| 下游模型 | 任务 | Random | TSRating | TSQAgent |
|---|---|---:|---:|---:|
| Linear | Electricity RMSE | 1.601 | 1.390 | **1.273** |
| Linear | Weather RMSE | 0.665 | 0.611 | **0.593** |
| CNN | Traffic RMSE | 0.504 | 0.428 | **0.412** |
| CNN | M4-Yearly MAPE | 2.332 | 1.782 | **1.744** |
| PatchTST | Traffic RMSE | 0.361 | 0.351 | **0.348** |
| PatchTST | M4-Monthly MAPE | 2.044 | 1.957 | **1.856** |
| PatchTST | Handwriting Acc | 0.124 | 0.156 | **0.166** |

### 10.3 TSFM 微调数据效率

论文还把四个长预测数据集合并，用质量分数选择样本微调 Timer-S1。结果显示，75% TSQAgent 选择数据已经接近 100% 全量数据：

| 配置 | Electricity | ExchangeRate | Traffic | Weather | Avg |
|---|---:|---:|---:|---:|---:|
| Untrained | 0.477 | 0.228 | 0.293 | 0.510 | 0.377 |
| Random 50% | 0.448 | 0.225 | 0.290 | 0.492 | 0.364 |
| TSQAgent 50% | 0.425 | 0.221 | 0.283 | 0.484 | 0.353 |
| Random 75% | 0.421 | 0.222 | 0.285 | 0.470 | 0.350 |
| TSQAgent 75% | 0.400 | 0.218 | 0.278 | 0.468 | 0.341 |
| Full 100% | **0.395** | **0.218** | **0.274** | **0.465** | **0.338** |

关键实践意义是：高质量数据选择可以减少 TSFM 微调数据量，75% 数据几乎追平全量训练。

## 11. 消融结论

论文做了三类消融。

第一，GRPO 维度选择训练。开启后，不仅下游 RMSE 更低，平均选择维度数、token 使用和推理时间也下降。说明 Perceiver 学会了聚焦，而不是把所有可能维度都交给 Inspector。

第二，工具增强。去掉工具后，Inspector 退化为纯文本推理，多个 LLM backbone 上下游表现都下降。说明显式统计、异常、频谱和结构工具对质量判断是必要的。

第三，质量维度设计。移除 Data Quality、Rare Pattern、Pattern Structure 任一组都会造成性能下降；其中 Pattern Structure 和 Rare Pattern 的影响最大。这说明时间序列质量不仅是缺失率或噪声，更依赖趋势、周期、振幅和结构一致性。

## 12. 贡献

1. 提出面向 LLM 的时间序列质量评估问题，并构造 TSQBench 来分解评估维度识别和质量比较能力。
2. 提出 TSQAgent，通过 Perceiver、Inspector、Adjudicator 三角色协作，把质量判断拆成规划、工具证据和反思聚合。
3. 用 precision-oriented GRPO 训练 Perceiver，减少无关维度选择。
4. 设计 16 个时间序列分析工具，让 Inspector 用定量 observation 支撑质量判断。
5. 将 pairwise preference 转为标量质量分数，用于真实数据选择和 TSFM 微调。

## 13. 局限与实践启发

论文的局限主要在于：TSQBench 是合成控制基准，真实场景中的质量维度可能更复杂；真实数据选择实验虽然覆盖 11 个数据集，但数据质量标签本身仍是通过 agent preference 间接获得；同时，agent 评估流程比简单统计规则更昂贵。

实践上，这篇论文的价值在于把“数据质量评估”从静态规则扩展为 agentic workflow：

- 先判断哪些质量维度重要，而不是固定检查所有维度；
- 对关键维度调用可靠工具，而不是让 LLM 猜；
- 对冲突证据做反思和重查；
- 最后把 pairwise 判断蒸馏成可批量打分的轻量模型。

这对构建大规模时间序列训练集很有启发：LLM agent 不一定直接参与每次模型训练，但可以作为高成本、高质量的偏好标注器，训练出便宜的质量评分模型供后续批量筛选。

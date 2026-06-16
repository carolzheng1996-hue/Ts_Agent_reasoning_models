# 《FinSTaR: Towards Financial Reasoning with Time Series Reasoning Models》中文文献解读

**论文**：Seunghan Lee 等，*FinSTaR: Towards Financial Reasoning with Time Series Reasoning Models*. arXiv:2605.03460  
**机构**：LG AI Research  
**方法名**：FinSTaR (Financial Time Series Thinking and Reasoning)  
**基准**：FinTSR-Bench  
**论文链接**：[arXiv](https://arxiv.org/abs/2605.03460) / [PDF](https://arxiv.org/pdf/2605.03460) / [TeX Source](https://arxiv.org/e-print/2605.03460)  
**代码链接**：[GitHub: seunghan96/FinSTaR](https://github.com/seunghan96/FinSTaR)；论文结论称 FinTSR-Bench、FinSTaR checkpoints 和评测代码将在发表后开放。

## 1. 一句话总结

FinSTaR 研究“金融时间序列推理模型”为什么不能只照搬通用时间序列 reasoning：金融任务同时包含可从价格精确计算的确定性 assessment，以及受不可观测事件影响的随机性 prediction。论文构造 FinTSR-Bench，并用两套 CoT 监督训练 FinSTaR：assessment 用 Compute-in-CoT 显式计算，prediction 用 Scenario-Aware CoT 先生成 base/adverse/favorable 场景再判断。

更准确地说，这篇论文的主张不是“LLM 能预测股票”，而是：

$$
\text{金融 TSRM} \neq \text{价格预测器}
$$

它要解决的是“给定 120 天价格序列，模型能否按金融分析任务要求做可解释、格式稳定、可评测的推理”。其中一部分任务确实是未来判断，但论文刻意把这类任务定义成分类式、场景式、概率式判断，而不是直接输出未来价格点预测。

可以把 FinSTaR 理解为：

$$
\text{FinSTaR}
=
\text{TimeOmni-1-7B}
+ \text{FinTSR-Bench}
+ \text{结构化 CoT 监督}
$$

其中真正的设计重点是后两项：数据集如何把金融 reasoning 拆开，以及 CoT 如何针对“可计算”和“不可完全知道”的问题采用不同推理格式。

## 2. 背景：金融 TSRM 为什么特殊

已有 TSRM 在天气、交通、医疗等通用场景里有一定能力，但论文发现它们在金融任务上几乎只略高于随机。原因是金融序列有独特结构：

- volatility clustering；
- momentum 与 mean reversion；
- support / resistance；
- drawdown 与 recovery；
- cross-asset correlation 和 relative performance；
- 未来受财报、宏观政策、行业轮动等不可观测因素影响。

论文最关键的区分是：

| 推理模式 | 问题 | 性质 | 示例 |
|---|---|---|---|
| Assessment | 当前状态是什么 | deterministic，可由价格数据计算 | 当前 drawdown、volatility regime、trend、correlation |
| Prediction | 未来会怎样 | stochastic，受不可观测因素影响 | event 后 persistence/mean-reversion、breakout/bounce、volatility increase/decrease |

这个区分很重要，因为它决定了训练信号应该长什么样。若把 assessment 当成普通文本问答，模型可能只学到“看起来像大跌就是 severe”这种粗糙模式，遇到阈值边界或双股票相关性时容易错。若把 prediction 当成确定性计算，又会鼓励模型用一条看似严密的 CoT 伪装不确定未来，形成过度自信的解释。FinSTaR 的方法设计就是围绕这两个失败模式展开。

论文也把金融时间序列和通用时间序列区分开：天气、交通、传感器任务中，物理或工程规律通常更稳定；金融价格则受到市场参与者预期、信息披露、宏观事件和流动性冲击影响。历史价格当然包含信息，但不包含所有未来因果变量。因此论文没有追求 prediction 任务满分，而是把“能否在不确定条件下给出更合理的场景推理”作为核心评价点。

## 3. FinTSR-Bench：2x2 能力分类

论文提出通用 $2\times2$ taxonomy：数据范围是 single-entity vs multi-entity，时间范围是 assessment vs prediction。落到金融领域后形成 10 个任务。

形式上可以写成两个轴：

$$
\mathcal{C}
=
\{\text{single}, \text{multi}\}
\times
\{\text{assessment}, \text{prediction}\}
$$

这里 single/multi 不是简单的输入维度差异，而是推理对象差异。single-stock 任务关注一只股票自身的走势、波动、回撤和技术位；multi-stock 任务要求模型比较两个资产之间的关系，例如相关性、相对收益、价差收敛。assessment/prediction 则决定答案是否能由窗口内数据完全确定。

| 类别 | 单股票 | 多股票 |
|---|---|---|
| Assessment | Drawdown、Volatility Regime、Trend Direction | Correlation |
| Prediction | Event Response、Support/Resistance、Drawdown Recovery、Volatility Forecast | Relative Performance、Pair Convergence |

任务规格：

| Task | Classes | Description |
|---|---:|---|
| Drawdown | 4 | 分类 peak-to-current decline severity |
| Volatility Regime | 3 | 分类 recent vs overall volatility ratio |
| Trend Direction | 5 | 分类 120-day cumulative return regime |
| Correlation | 3 | 两只股票日收益相关性 |
| Event Response | 2 | 极端波动后 mean-reversion 或 persistence |
| Support/Resistance | 2 | key level 附近 breakout 或 bounce |
| Drawdown Recovery | 2 | 向 peak 恢复或进一步下跌 |
| Volatility Forecast | 2 | 未来波动率 increase 或 decrease |
| Relative Performance | 2 | 哪只股票未来收益更高 |
| Pair Convergence | 2 | 价格 spread converge 或 diverge |

这些任务之间并不是任意拼凑的。论文有意识地设计了若干 assessment-prediction 配对，让模型先学会某个金融概念的“当前状态判断”，再在预测任务中使用同一概念：

| 共享金融技能 | Assessment 任务 | Prediction 任务 | 关系 |
|---|---|---|---|
| 回撤 | Drawdown | Drawdown Recovery | 先判断当前离峰值有多远，再判断未来是否向峰值恢复 |
| 波动 | Volatility Regime | Volatility Forecast | 先计算近期/总体波动率，再判断未来波动是否上升 |
| 跨资产关系 | Correlation | Pair Convergence | 先看收益相关性，再判断价差是否收敛 |

这种配对设计解释了为什么论文后面要做 joint training 和 leave-one-category-out：作者关心的不只是每个任务单独表现，而是这些能力类别是否互补。

## 4. 数据构造

FinTSR-Bench 来自 S&P 500 中按 2024 年 1 月市值排序的前 250 只股票，使用 2010-2025 日收盘价，约 3,750 个交易日。输入窗口统一为 120 个交易日。

| Split | 股票数 | 时间段 | 股票 universe | 时间 period |
|---|---:|---|---|---|
| Train | 200 | 2010-2022 | ID | ID |
| Test A | 200 | 2023-2025 | ID | OOD |
| Test B | 50 | 2010-2022 | OOD | ID |
| Test C | 50 | 2023-2025 | OOD | OOD |

每个任务约 3,500 个训练样本、每个测试 split 约 1,000 个样本，总计约 35K 训练样本、每个测试集约 10K 样本。

QA 生成参数：

| 参数 | 值 |
|---|---|
| Window length | 120 trading days |
| Samples per task raw | 100,000 |
| Train cap per task | 3,500 |
| Test cap per task | 1,000 |
| Correlation thresholds | pos > 0.30, neg < -0.10 |
| Event threshold | $\lvert z\rvert > 2.5$ |
| Relative performance margin | 5% |
| S/R breakout margin | 3% |
| Drawdown Recovery min drawdown | 5% |
| Volatility Forecast change threshold | 25% |
| Pair Convergence spread margin | 3% |

这里有几个容易忽略的设计点。

第一，Test A/B/C 不是普通随机切分，而是沿“股票”和“时间”两个维度切分。Test A 用训练股票但未来年份，考察时间 OOD；Test B 用未见股票但训练期年份，考察股票 universe OOD；Test C 同时换股票和年份，是最难的双重 OOD。论文主结果中 A/B/C 都在 78% 左右，说明模型并没有只记住某些股票的固定行为。

第二，训练和测试样本做了 class balance / undersampling。金融数据天然类别不平衡，例如强回撤、极端事件、突破等事件并不均匀出现；如果不控制类别分布，模型可能靠多数类策略拿到表面准确率。论文把任务做成多选分类并平衡类别，是为了让 accuracy 更接近推理能力指标。

第三，所有任务共享 120 个交易日输入窗口。这相当于约半年的日频价格历史。窗口太短会缺失趋势和波动背景，窗口太长会让 LLM/TSRM 的输入和注意力压力变大。120 天是金融技术分析里相对自然的中期尺度，也使每个样本长度可控。

## 5. 方法：两类 CoT

### 5.1 Compute-in-CoT

Assessment 任务答案完全由观测价格决定，因此训练链条应教模型执行计算，而不是凭视觉/语言直觉估计。Compute-in-CoT 有三步：

1. Extract：抽取相关价格量，如 peak price、current price、recent returns；
2. Compute：计算 drawdown、volatility ratio、correlation 等；
3. Classify：根据题目阈值映射到选项。

例如 drawdown：

$$
\mathrm{Drawdown}=\frac{\mathrm{Peak}-\mathrm{Current}}{\mathrm{Peak}}
$$

如果 peak 为 261.44，current 为 136.00，则：

$$
\frac{261.44-136.00}{261.44}=48.0\%
$$

超过 20%，分类为 severe decline。

Compute-in-CoT 的关键不是“让模型多说几步”，而是把监督信号改成可执行计算轨迹。对每个 assessment 样本，数据生成程序已经知道真实价格、阈值和标签，因此可以自动生成正确的中间量。这样有三个效果：

1. 模型学到的是计算路径，而不只是答案标签。
2. 中间步骤可审计，人工能检查模型到底算了什么。
3. 数据生成可扩展，因为只要定义好金融指标和阈值，就能程序化生成大量 CoT。

不同 assessment 任务对应的计算大致如下：

| 任务 | 核心中间量 | 为什么需要 CoT |
|---|---|---|
| Drawdown | peak price、current price、drawdown ratio | 需要找窗口峰值并按阈值分类 |
| Volatility Regime | recent volatility / overall volatility | 需要计算收益率标准差和比值 |
| Trend Direction | 120-day cumulative return | 需要区分强涨、弱涨、横盘、弱跌、强跌 |
| Correlation | 两只股票日收益相关系数 | 需要先转收益率再算相关性 |

这也解释了为什么 CoT 对 assessment 的提升特别大：这些任务不是“知识问答”，而是 arithmetic + thresholding。没有显式计算时，7B 模型很容易在波动率、相关性这类数值任务上失败。

### 5.2 Scenario-Aware CoT

Prediction 任务不能被历史价格完全决定。若用 deterministic CoT，模型会学到过度自信的单路径解释。FinSTaR 改为生成三类场景：

- Base case：没有重大外部事件时最可能发生的结果；
- Adverse scenario：外部冲击使判断反转；
- Favorable scenario：正向催化增强预期结果。

五阶段结构：

1. Extract：抽取相关量；
2. Compute：计算 drawdown、momentum、volatility 等；
3. Scenario Analysis：生成 base/adverse/favorable；
4. Assessment：综合场景；
5. Judgment：选择最受当前数据和场景支持的答案。

这更符合金融分析师处理不确定性的方式：不是声称未来可确定，而是在有限历史证据下给出概率性判断。

Scenario-Aware CoT 还解决了 prediction 任务的另一个问题：历史价格给出的证据经常是单向的，但真实未来可能被外部事件打断。比如当前处于回撤但动量稳定，base case 可能是逐步恢复；若出现盈利下修或宏观冲击，adverse scenario 可能是继续下跌；若出现评级上调或风险偏好改善，favorable scenario 可能是快速反弹。模型最终不是对三个场景投票，而是基于当前价格证据判断哪个结果更受支持。

论文提到每个 task-answer pair 都有领域化 scenario template。例如 Volatility Forecast 会使用 volatility clustering、事件冲击、市场冷静等金融概念。这里需要注意：template 不是直接泄漏答案。训练链条要求模型先生成 base/adverse/favorable 三种可能性，再做 judgment；并且论文在 CoT quality verification 中检查了 scenario diversity，说明模型输出不是简单复制模板。

这种做法的局限也很清楚：scenario 本身仍来自训练分布和模板化金融知识，并没有接入新闻、财报、宏观数据或实时订单流。因此 Scenario-Aware CoT 更像“让模型承认和组织不确定性”，不是让模型真正观测到未来事件。

## 6. 训练设置

FinSTaR 用 LoRA fine-tuning：

| 项目 | 设置 |
|---|---|
| Base backbone | TimeOmni-1-7B |
| 对照 backbone | Qwen2.5-7B-Instruct |
| LoRA rank | 32 |
| LoRA alpha | 64 |
| Learning rate | $5\times10^{-5}$ |
| Epochs | 4 |
| Batch size | 1，gradient accumulation 16 |
| Max sequence length | 4096 |
| Hardware | 2 x NVIDIA L40S |

实验里有两个 backbone 层面的对照：

| Backbone | 角色 | 含义 |
|---|---|---|
| Qwen2.5-7B-Instruct | 通用 LLM baseline | 没有专门的时间序列 reasoning 预训练 |
| TimeOmni-1-7B | FinSTaR base model | 基于 Qwen2.5-7B 做过 TS reasoning SFT/RL |

这个设计用于回答一个关键问题：结构化 CoT 是否足够，还是必须建立在已有时间序列推理能力之上？后面的 backbone sensitivity 结果显示：Compute-in-CoT 对通用 LLM 也有帮助，但 Scenario-Aware CoT 只有在 TimeOmni-1 这种已有 TS reasoning 能力的 backbone 上才稳定有效。

## 7. Baselines：论文到底和谁比

主表包含四类 reasoning/language model baseline：

| 类别 | 模型 | 作用 |
|---|---|---|
| 通用 LLM | Phi-3.5-mini、Mistral-7B、Gemma-2-9B、Llama-3.1-8B、Qwen2.5-7B | 测 zero-shot 语言模型是否天然能做金融 TSR |
| TS Language Models | TimeMQA-Qwen/Mistral/Llama | 测一般 TS QA 微调是否能迁移到金融 |
| TS Reasoning Model | TimeOmni-1-7B | 测已有 TSRM 在金融任务上的 zero-shot 能力 |
| SFT baseline | Qwen2.5-7B w/o CoT、Qwen2.5-7B w/ CoT | 隔离 FinTSR-Bench SFT 与 CoT 的贡献 |

另外，论文在 analysis 中还加入 forecasting baselines。它们不做语言推理，而是采用 forecast-then-classify：先预测未来价格，再把预测结果转成对应任务标签。包括 Last Value、MA、ETS、Drift、Momentum 等统计方法，以及 DLinear、Chronos-1/2、DeepAR、PatchTST、TFT、TiDE 等深度预测模型。

这个对照很必要。否则有人会质疑：prediction 任务是否只需要一个传统预测模型，不需要 TSRM？论文的回答是：传统预测器在部分任务上有竞争力，例如 PatchTST 在 Support/Resistance 接近 FinSTaR，但平均 prediction accuracy 仍低于 FinSTaR，尤其在需要场景判断和金融概念组合的任务上差距明显。

## 8. 主结果

FinSTaR 在三个 split 上均稳定领先：

| Model | Split A Avg | Split B Avg | Split C Avg |
|---|---:|---:|---:|
| Qwen2.5-7B zero-shot | 51.6 | 51.7 | 51.4 |
| TimeOmni-1-7B zero-shot | 51.3 | 50.9 | 49.9 |
| Qwen2.5-7B w/ CoT | 57.8 | 58.7 | 57.8 |
| FinSTaR | **78.9** | **78.3** | **78.1** |

Test A 上，FinSTaR 相比：

- 最强 zero-shot LLM Qwen2.5-7B：+27.3；
- 最强 SFT baseline Qwen2.5-7B w/ CoT：+21.1；
- base TSRM TimeOmni-1-7B：+27.6。

更细地看，assessment 任务几乎接近满分，例如 Test A 上 Drawdown 99.3、Volatility 93.5、Trend 99.3、Correlation 88.1。prediction 任务也超过所有 baseline，例如 Support/Resistance 80.5、Volatility Forecast 79.5、Drawdown Recovery 74.4。

逐项看主结果，有几条更值得关注：

1. 通用 LLM 并非完全无能。Qwen2.5-7B zero-shot 在 Test A 上达到 51.6，明显高于一些模型，但基本仍停留在略高于随机的水平，说明语言常识和基础数值能力不足以解决金融 TSR。
2. TimeMQA 反而很差，多个版本只有个位数到十来点准确率。这说明“做过时间序列 QA”不等于“会金融推理”，领域、任务格式和输出约束都很重要。
3. TimeOmni-1 zero-shot 只有 51.3，与 Qwen 接近。这是论文的动机证据：通用 TSRM 迁移到金融领域时并不自动可靠。
4. Qwen2.5-7B w/ CoT 只有 57.8，说明“同样给 CoT 监督”还不够；FinSTaR 的 78.9 来自 TS reasoning backbone 与金融结构化 CoT 的组合。

从 OOD 角度看，Test A/B/C 平均准确率分别是 78.9、78.3、78.1，差距很小。Test B 覆盖未见股票，Test C 同时覆盖未见股票和未来年份；如果模型只是记住个股或时间段模式，Test B/C 应该明显下降。论文用这个结果支持 FinSTaR 学到的是较通用的金融推理流程。

## 9. 消融实验

### 9.1 CoT 的价值

| Setting | Draw | Vol | Trend | Corr | Event | S/R | DDR | V.F. | R.P. | P.C. | Avg |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| w/o CoT | 78.3 | 37.2 | 68.3 | 32.1 | 49.0 | 56.3 | 66.8 | 69.1 | 46.9 | 54.6 | 55.9 |
| w/ CoT | **99.3** | **93.5** | **99.3** | **88.1** | **57.2** | **80.5** | **74.4** | **79.5** | **51.5** | **65.8** | **78.9** |
| Delta | +21.0 | +56.3 | +31.0 | +56.0 | +8.2 | +24.2 | +7.6 | +10.4 | +4.6 | +11.2 | +23.0 |

CoT 最大收益来自 assessment，因为这些任务需要精确计算；prediction 也有稳定提升。

这个表的含义可以拆成两层。

第一，answer-only SFT 并不能自动学会计算。TimeOmni-1-7B w/o CoT 在 Drawdown 上有 78.3，但在 Volatility 和 Correlation 上只有 37.2、32.1，几乎接近随机。这说明模型即使看过答案，也不一定学到“先算收益率标准差/相关系数再分类”的程序。

第二，prediction 的提升幅度较小但更有意义。Event Response 从 49.0 到 57.2，Relative Performance 从 46.9 到 51.5，这些数字不高，但金融预测本身接近有效市场假设下的困难区。论文并没有把这些任务包装成高精度预测，而是承认它们存在天然上限。

### 9.2 Scenario-Aware CoT 的价值

| CoT | Assessment Avg | Prediction Avg |
|---|---:|---:|
| Standard | 94.5 | 65.2 |
| Scenario-Aware | **95.0** | **68.2** |
| Delta | +0.5 | +3.0 |

因为 assessment 任务两种设置都用 deterministic CoT，差异很小；prediction 中 scenario-aware 带来更明显提升，尤其 Event Response +6.2、Volatility Forecast +10.2。

### 9.3 四类能力是否互补

论文还做了 capability dependency analysis，把 10 个任务分成四类：

| 缩写 | 类别 | 任务 |
|---|---|---|
| AS | Assessment-Single | Drawdown、Volatility Regime、Trend Direction |
| AM | Assessment-Multi | Correlation |
| PS | Prediction-Single | Event Response、S/R、Drawdown Recovery、Volatility Forecast |
| PM | Prediction-Multi | Relative Performance、Pair Convergence |

Leave-One-Category-Out 结果显示，去掉某类训练数据时，对应类别下降最明显。例如去掉 AS 后 assessment 下降最大，去掉 PS 后 prediction 下降最大。更重要的是，solo vs joint training 显示联合训练四类任务通常优于只训练单类任务：Drawdown 98.8 到 99.3，Volatility 91.1 到 93.5，Correlation 85.7 到 88.1，Event 55.9 到 57.2，Pair Convergence 64.5 到 65.8。

这说明 taxonomy 不是只用于排版的数据集标签，而是参与了训练设计：不同类别提供互补信号。单股票 assessment 学到的计算能力、多股票任务学到的关系比较、prediction 任务学到的场景判断，会在 joint training 中相互增强。

### 9.4 Backbone sensitivity：为什么不是普通 Qwen SFT

论文最有说服力的细节之一是 backbone sensitivity：

| Backbone | Config | Assessment Avg | Prediction Avg | Overall |
|---|---|---:|---:|---:|
| Qwen2.5-7B | w/o CoT | 57.0 | 56.1 | 56.4 |
| Qwen2.5-7B | w/ CoT | 67.7 | 51.1 | 57.8 |
| TimeOmni-1-7B | w/o CoT | 54.3 | 56.9 | 55.9 |
| TimeOmni-1-7B | w/ CoT | **95.0** | **68.2** | **78.9** |

结论很明确：CoT 对 Qwen 的 assessment 有帮助，因为通用 LLM 可以学一些显式算术流程；但 CoT 反而让 Qwen 的 prediction 从 56.1 降到 51.1。论文的解释是，Scenario-Aware CoT 要求模型围绕价格动态生成有根据的场景。没有 TS reasoning 预训练时，通用 LLM 容易生成听起来合理但与价格证据脱节的金融故事，反而引入噪声。

因此 FinSTaR 的方法不是“拿 Qwen 做金融 CoT 微调”这么简单，而是：

$$
\text{TS reasoning prior}
+ \text{financial task supervision}
+ \text{structured CoT}
$$

三者组合才产生明显提升。

### 9.5 训练数据量效率

FinSTaR 还测试了每任务训练样本量从 350 到 3500 的变化：

| 每任务训练样本 | 占 full data | Avg |
|---:|---:|---:|
| 350 | 10% | 71.7 |
| 875 | 25% | 74.7 |
| 1750 | 50% | 75.2 |
| 3500 | 100% | 78.9 |

10% 数据就能达到 71.7，说明结构化 CoT 提供了强归纳偏置：模型不需要从海量样本里自己发现“先提取、再计算、再按阈值分类”或“三场景后判断”的格式。后续数据增加仍有收益，但从 25% 到 50% 的提升已经很小，主要增益来自完整数据对部分 prediction 任务的覆盖。

### 9.6 Forecasting baseline 对照

只看 prediction 任务，FinSTaR 在 Test A/B/C 上的平均准确率为 68.2、67.0、67.0。传统 forecast-then-classify 方法中，Test A 最强大约是 PatchTST 的 57.4；统计方法里 Drift 在 Test A 为 55.7。FinSTaR 的优势不是每个子任务都碾压，例如 PatchTST 在 Support/Resistance 上达到 80.4，接近 FinSTaR 的 80.5；但在 Drawdown Recovery、Volatility Forecast、Pair Convergence 等需要金融概念组合的任务上，FinSTaR 更稳定。

这个实验提醒我们：FinSTaR 不是替代所有预测模型。若目标是单一数值预测，专门的 forecasting model 仍然合理；但若目标是“读价格序列后回答带金融语义的推理问题”，TSRM + 结构化 CoT 更适合。

### 9.7 CoT 质量验证

论文还检查了 CoT 是否只是模板化表演：

| 维度 | 发现 | 含义 |
|---|---|---|
| Format compliance | 99% 以上输出包含有效 `<think>...<answer>` 结构 | 模型基本能稳定遵循评测格式 |
| Arithmetic faithfulness | assessment 近满分，人工检查中间计算与 ground truth 对齐 | Compute-in-CoT 不只是多写文字 |
| Scenario diversity | 每个 prediction 任务 100 个采样输出中有 85+ unique scenario descriptions | 不是简单复制固定模板 |
| Output length | prediction CoT 平均约 249 tokens，assessment 约 104 tokens | 场景分析确实引入额外推理步骤 |

这部分不是主结果，但对判断论文可信度很重要。因为 CoT 论文常见问题是“解释看起来合理，但和答案无关”。FinSTaR 至少在 assessment 中通过可验证计算缓解了这个问题；prediction 中仍无法完全验证场景是否真实因果，但 diversity 和 ablation 结果表明它不是纯格式噪声。

## 10. Agent / reasoning 视角拆解

FinSTaR 不是 agentic tool-use 系统，但它是 reasoning model 训练方法，具备清晰的推理结构：

| 要素 | FinSTaR 中的对应 |
|---|---|
| State / input | 120 天股票收盘价，单股票或双股票 |
| Policy / model | TimeOmni-1-7B 经 LoRA SFT 后的 FinSTaR |
| Reasoning mode | Assessment 用 Compute-in-CoT；Prediction 用 Scenario-Aware CoT |
| Action / step | Extract、Compute、Classify 或 Extract、Compute、Scenario、Assess、Judge |
| Memory / external info | 无外部检索；只使用输入价格和训练中学到的金融模式 |
| Evaluation | 10 个 QA 分类任务，Test A/B/C 覆盖时间和股票 OOD |

和 TimeClaw、TimeART 这类 tool-augmented / agentic time-series 系统相比，FinSTaR 更像一个“内化工具流程”的模型：计算、场景枚举、判断都写进 CoT 监督里，而不是在推理时真的调用外部计算器或检索器。这带来两个取舍：

| 维度 | FinSTaR 的选择 | 好处 | 代价 |
|---|---|---|---|
| 计算 | 模型在 CoT 中内化计算 | 推理部署简单，不需要工具环境 | 数值计算仍可能出错，不如真实工具可控 |
| 信息 | 只用价格序列 | 评测干净，避免外部信息泄漏 | 无法使用新闻、财报、宏观数据 |
| 推理 | SFT 学习固定结构 | 输出稳定，训练可控 | 适应新任务不如 agent 灵活 |
| 解释 | `<think>` 形式 reasoning | 便于检查中间步骤 | prediction 解释仍可能是合理化 |

因此，它适合被看作金融 TSRM 的基础训练方案，而不是完整金融分析 agent。

## 11. 贡献与局限

贡献：

1. 提出适用于 TSRM 的 $2\times2$ 能力分类：single/multi entity 与 assessment/prediction。
2. 构造 FinTSR-Bench，覆盖 250 只 S&P 股票、2010-2025、10 个金融推理任务。
3. 提出 Compute-in-CoT，让确定性金融计算可审计。
4. 提出 Scenario-Aware CoT，让预测任务显式承认不确定性。
5. 在金融 TSRM 上达到 78.9% 平均准确率，大幅超过 LLM、TSRM 和 SFT baseline。

局限：

- 只覆盖美国股票，未覆盖债券、期货、外汇、加密资产等；
- 模型规模主要是 7B；
- prediction 任务受市场效率限制，存在天然性能上限；
- 论文强调不能作为自动交易或投资建议系统，只适合作为辅助分析工具。

实践启示：

金融时间序列推理不能简单等同于预测，也不能只靠语言模型的常识。确定性任务应该强制计算，随机性任务应该显式建模场景和不确定性。FinSTaR 的价值在于把“可算的”和“不可完全知道的”分开训练。

更具体地说，这篇论文对后续工作有三点启发：

1. 做金融 reasoning benchmark 时，必须区分 assessment 和 prediction，否则容易把可计算任务和不可预测任务混在一个平均分里。
2. 对 deterministic 任务，最可靠的训练信号不是自然语言解释，而是程序生成的计算轨迹。
3. 对 stochastic 任务，CoT 不应该伪装成确定性证明，而应该显式列出可能场景，并承认判断只是基于当前证据的概率性结论。

如果要继续扩展 FinSTaR，最自然的方向不是再堆更多价格样本，而是加入外部信息通道：新闻、财报、宏观指标、行业指数、期权隐含波动率等。那会把 FinSTaR 从“只看价格的金融 TSRM”推进到更接近真实投研流程的 multimodal financial reasoning agent。

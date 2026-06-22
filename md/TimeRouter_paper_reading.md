# 《TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models》中文文献解读

论文：*TimeRouter: Efficient and Adaptive Routing of Time-Series Foundation Models*，arXiv:2606.11625  
方法名：**TimeRouter**  
代码：<https://github.com/UConn-DSIS/TimeRouter>  
本地 TeX 源码目录：[TimeRouter_Efficient_and_Adaptive_Routing_of_Time_Series_Foundation_Models](TimeRouter_Efficient_and_Adaptive_Routing_of_Time_Series_Foundation_Models/)

## 1. 一句话总结

TimeRouter 解决的问题是：在一组冻结的时间序列基础模型 TSFM 中，如何为每条输入序列快速选择最合适的专家，或者在不确定时退回到 ensemble。它用一个轻量 one-vs-all XGBoost 路由头替代 LLM controller，在 GIFT-EVAL 上取得 LB MASE 0.6765，同时路由开销只有 9.9ms/series。

可以把它理解为：

$$
\text{TimeRouter}
=
\text{frozen TSFM pool}
+ \text{discriminative router}
+ \text{selective gate}
+ \text{CV-weighted ensemble fallback}.
$$

这篇论文和 TimeCopilot、MoiraiAgent、TSOrchestra 的关系很直接：后者用 LLM 或 reasoning model 做模型编排，TimeRouter 认为“选择 TSFM”本身可以被建模为一个轻量监督分类问题，不必每次推理都调用 LLM。

## 2. 背景：为什么 TSFM 需要路由

过去几年出现了大量 time-series foundation models，例如 Chronos、TimesFM、TiRex、Moirai、Sundial、PatchTST-FM、FlowState、TTM 等。它们的预训练语料、patch size、embedding 方式、loss 设计、架构归纳偏置都不同，因此没有一个模型能在所有频率、预测步长、领域、噪声结构上稳定最优。

这就把问题从“找一个万能 TSFM”转成：

$$
\text{给定输入序列 } x,\quad \text{选择哪个 } F_k \text{ 最可能预测得最好？}
$$

已有 agentic forecasting 系统通常让 LLM 读任务描述、分析特征、选择模型或组合模型。这种方式灵活，但有两个工程问题：

1. 推理延迟高。MoiraiAgent、TSOrchestra 这类 3B LLM router 级别的 orchestration 往往是数百毫秒。
2. 适配新 TSFM 成本高。新增一个 foundation model 后，LLM router 可能需要重新微调或重新设计 prompt。

TimeRouter 的核心假设是：TSFM 的互补性可以从历史验证误差、上下文统计和各模型预测形态中学习出来，因此一个判别式 router 就足够。

## 3. 问题定义

给定固定的 $K$ 个冻结 TSFM：

$$
\mathcal{F}=\{F_1,\dots,F_K\},
$$

每个模型把长度为 $T$ 的单变量历史窗口映射为长度为 $H$ 的点预测：

$$
F_k:\mathbb{R}^{T}\rightarrow \mathbb{R}^{H},\qquad F_k(x)\in\mathbb{R}^{H}.
$$

系统还预先定义一个 deterministic ensemble combiner：

$$
\mathrm{Ens}:\mathbb{R}^{H\times K}\rightarrow \mathbb{R}^{H}.
$$

router 是一个策略：

$$
\pi(x;\mathcal{F})\in\{1,\dots,K,\mathrm{Ens}\}.
$$

最终预测为：

$$
\hat{y}_{\pi}(x)=
\begin{cases}
F_{\pi(x)}(x), & \pi(x)\in [K],\\
\mathrm{Ens}(F_1(x),\dots,F_K(x)), & \pi(x)=\mathrm{Ens}.
\end{cases}
$$

训练目标是最小化期望逐样本损失：

$$
\pi^\star
=
\arg\min_{\pi}
\mathbb{E}_{(x,y)\sim\mathcal{D}}
\left[
\ell(\hat{y}_{\pi}(x),y)
\right],
$$

其中 $\ell$ 是 per-row MASE。直观上，router 不需要直接预测未来值，它只需要决定“这条序列更适合哪个已存在专家，或者应该用 ensemble”。

## 4. 路由特征 $\phi(x)$

TimeRouter 的输入不是原始序列文本化后的 token，而是一个固定维度特征向量：

$$
\phi(x)\in\mathbb{R}^{d}.
$$

四模型池时维度为：

$$
d=165+35K=305.
$$

特征由四块组成：

| 特征块 | 维度 | 内容 | 作用 |
|---|---:|---|---|
| Context-window statistics | 31 | 均值、标准差、range、IQR、skewness、kurtosis、ACF、trend slope、zero-crossings、turning points、horizon/length ratio、频率、regime shift 等 | 描述输入序列本身 |
| Normalized context snippet | 128 | 历史窗口按自身均值/标准差归一化后重采样到 128 buckets | 保留粗粒度形状 |
| Per-FM CV statistics | $3K+6$ | 每个 FM 的 context-tail CV-MASE、rank、gap to best，以及 pool-level aggregate | 近似每个专家在当前上下文上的可靠性 |
| Per-FM forecast snippets | $32K$ | 每个 FM 的预测重采样到 32 buckets 并归一化 | 让 router 看见专家之间的预测形态差异 |

后两块是 stacking-style features：第一层模型是各 TSFM，第二层模型是路由头。不同于传统 stacking 输出加权平均，TimeRouter 让二层模型学习“选择谁”以及“何时退回 ensemble”。

## 5. 路由头：one-vs-all oracle-best 分类

训练数据中每条样本都有真实未来 $y$，因此可以事后定义 oracle-best TSFM：

$$
k^\star(x,y)
=
\arg\min_{k\in[K]}\ell(F_k(x),y).
$$

TimeRouter 为每个专家训练一个二分类器：

$$
g_{\theta_k}:\mathbb{R}^{d}\rightarrow[0,1],
$$

它预测“第 $k$ 个专家是不是 oracle-best”。训练目标是 binary cross-entropy：

$$
\theta_k^\star
=
\arg\min_{\theta_k}
\mathbb{E}_{(x,y)\sim\mathcal{D}}
\left[
\mathrm{BCE}
\left(
g_{\theta_k}(\phi(x)),
\mathbb{1}\{k^\star=k\}
\right)
\right].
$$

论文默认用 XGBoost 训练 $K$ 个 one-vs-all 分类器。推理时得到 $K$ 个分数后，做 $L_1$ 归一化：

$$
p(x)=(p_1(x),\dots,p_K(x)),\qquad \sum_{k=1}^{K}p_k(x)=1.
$$

若只做普通 classifier router，策略就是：

$$
\pi(x)=\arg\max_k p_k(x).
$$

但论文认为这还不够，因为分类器可能低置信，或者专家们预测非常接近，此时强行选单个模型没有意义。因此引入 selective gate。

## 6. Selective Gate：何时选择专家，何时 defer

TimeRouter 在推理时计算两个标量信号。

第一是 decision-space margin：

$$
m(x)=p_{(1)}(x)-p_{(2)}(x),
$$

其中 $p_{(1)}$ 和 $p_{(2)}$ 是 score vector 中最大和第二大的分数。margin 大表示 classifier 对 top expert 更有信心。

第二是 forecast-space diversity：

$$
d(x)
=
\frac{1}{H}
\sum_{t=1}^{H}
\operatorname{std}_{k}
\left(
\frac{F_k(x;t)}{s(x)}
\right),
$$

其中 $F_k(x;t)$ 是第 $k$ 个专家在 horizon step $t$ 的预测值，$s(x)$ 是该序列的 scale。diversity 描述专家池在未来预测空间里有多分歧。

给定阈值 $(\tau_m,\tau_d)$，路由规则为：

$$
\pi(x)=
\begin{cases}
\mathrm{Ens}, & m(x)<\tau_m\ \text{or}\ d(x)<\tau_d,\\
\arg\max_k p_k(x), & \text{otherwise}.
\end{cases}
$$

这个 gate 的逻辑是：

- margin 太小：router 自己没信心，defer 到 ensemble；
- diversity 太小：各专家预测差不多，选单个专家收益有限，也 defer 到 ensemble；
- margin 足够大且专家预测有实际差异：commit 到 top expert。

论文在训练集 OOF split 上网格搜索阈值：

$$
\tau_m\in\{0.00,0.02,0.05,0.07,0.09,0.10,0.12,0.15,0.20,0.25\},
$$

$$
\tau_d\in\{0.0,0.01,0.02,0.03,0.04,0.05,0.07,0.10\}.
$$

四模型池最终选择：

$$
(\tau_m,\tau_d)=(0.12,0.02).
$$

## 7. Ensemble fallback

TimeRouter 的 fallback 不是简单平均，而是 context-tail CV 反比加权：

$$
\mathrm{Ens}(F_1(x),\dots,F_K(x))
=
\sum_{k=1}^{K}w_k(x)F_k(x),
$$

$$
w_k(x)\propto
\frac{1}{\mathrm{CV\_score}_k(x)+\epsilon},
\qquad
\sum_{k=1}^{K}w_k(x)=1.
$$

$\mathrm{CV\_score}_k(x)$ 是第 $k$ 个模型在当前 context 尾部 validation window 上的 CV-MASE。含义很直接：最近上下文上表现越好的专家，ensemble 权重越大。

这个 fallback 和 gate 是配套的。gate 不确定时，不是放弃预测，而是退回一个由局部验证误差校准过的集成预测。

## 8. 训练与实现细节

实验使用 GIFT-EVAL 训练 split 构造训练行，与 97 个 test task 分离。训练前预计算：

- 每个 FM 的预测；
- oracle-best label $k^\star(x,y)$；
- 特征向量 $\phi(x)$。

过滤规则：

| 过滤条件 | 原因 |
|---|---|
| $\mathrm{best\_mase}>1.0$ | oracle headroom 太差，路由也难以改善 |
| $\mathrm{scale}<0.01$ | 近常数序列，scale 退化 |
| 有效 FM 少于 2 个 | 无法做有意义路由/ensemble |

四模型池最终约有 155K training rows、约 93 个 training tasks。

默认 TSFM pool 包含：

| 模型 | 角色 |
|---|---|
| Chronos-2 | 最强单模型 anchor |
| FlowState | 不同预测范式，提供互补性 |
| PatchTST-FM | patch-based FM |
| Sundial | 不同预训练/架构归纳偏置 |

所有 TSFM 均冻结，训练只发生在路由头。

## 9. 主结果

GIFT-EVAL leaderboard 上，TimeRouter 的 LB MASE 为 0.6765，低于所有对照：

| 方法 | 类别 | LB MASE |
|---|---|---:|
| Chronos-2 | strongest single FM | 0.6978 |
| TSOrchestra | LLM-judge router | 0.6768 |
| MoiraiAgent | agentic router | 0.6887 |
| ZooCast | embedding selector | 0.6920 |
| Synapse | adaptive arbitration | 0.6986 |
| TimeCopilot | LLM agent | 0.7051 |
| TimeRouter | lightweight router | **0.6765** |

LB MASE 是 97 个 GIFT-EVAL task 上 method MASE / Seasonal-Naive MASE 的几何平均，越低越好。TimeRouter 相比最强单模型 Chronos-2 提升约 200bp，相比 TSOrchestra 只领先约 3bp，但关键差异是它不需要 LLM inference。

## 10. 效率结果

论文把路由层开销单独比较，排除 TSFM forward time：

| 方法 | 额外学习成本 | 路由延迟/series |
|---|---|---:|
| TSOrchestra | fine-tune 3B LLM | $\geq 472.6$ ms |
| MoiraiAgent | fine-tune 3B LLM | 472.6 ms |
| TimeCopilot | no training; LLM agent | $\geq 450$ ms |
| TimeRouter | 约 110s 训练路由头 | **9.9 ms** |

这解释了 TimeRouter 的工程价值：它的准确率接近或略高于 LLM router，但延迟低一个到两个数量级，并且新增 TSFM 后只需重新生成特征和训练二层 router。

## 11. 消融实验

### 11.1 Selective gate

固定 one-vs-all 分类器和 CV-weighted fallback，比较有无 gate：

| Variant | Short | Medium | Long | Overall |
|---|---:|---:|---:|---:|
| w/o gate | **0.6570** | 0.6911 | 0.7213 | 0.6778 |
| w/ gate | 0.6584 | **0.6897** | **0.7123** | **0.6765** |
| Delta | -14bp | +14bp | +90bp | +13bp |

gate 对 long horizon 最有价值，因为预测步长越长，专家分歧越大，单模型误选风险也越高。short horizon 中 classifier argmax 已经足够强，fallback 反而略微拖累。

### 11.2 Routing head

在相同特征、OvA 结构和 gate 下替换二分类器：

| Head | LB MASE | Delta |
|---|---:|---:|
| LightGBM | **0.6762** | -3bp |
| XGBoost | 0.6765 | 0 |
| Random Forest | 0.6776 | +11bp |
| MLP | 0.6787 | +22bp |
| Logistic Regression | 0.6836 | +71bp |

非线性模型之间差距很小，说明关键不是 XGBoost 本身，而是要能建模上下文统计、CV 分数、预测形态之间的非线性交互。线性 logistic regression 明显变差。

### 11.3 Pool composition

四模型完整池最好：

| Pool | LB MASE |
|---|---:|
| Full four-FM pool | **0.6765** |
| drop FlowState | 0.6807 |
| drop PatchTST-FM | 0.6814 |
| drop Sundial | 0.6834 |
| drop Chronos-2 | 0.6876 |
| Chronos-2 + Sundial | 0.6847 |
| FlowState + Sundial | 0.7082 |

Chronos-2 是关键 anchor：去掉它的三模型池退化最明显；保留 Chronos-2 的二模型组合也普遍更强。与此同时，pool size 也重要，$K=4$ 到最佳 $K=3$ 再到最佳 $K=2$，每减少一个层级大约损失 40bp。

## 12. Agent / routing 视角拆解

| 要素 | TimeRouter 中的对应 |
|---|---|
| State / input | 历史序列 $x$、预测步长、频率、上下文统计、各 TSFM 的 CV 分数和预测片段 |
| Expert pool | 冻结 TSFM $\{F_1,\dots,F_K\}$ |
| Policy | one-vs-all router + selective gate |
| Action | 选择某个 $F_k$，或 defer 到 $\mathrm{Ens}$ |
| Reward / label | 训练期 oracle-best $k^\star=\arg\min_k \ell(F_k(x),y)$ |
| Fallback | CV-inverse-weighted ensemble |
| Evaluation | GIFT-EVAL 97 tasks，LB MASE |

它不是一个完整 agent，因为没有多步工具调用、记忆或反思；但它是 agentic forecasting 系统里非常实用的 routing primitive。更大的 forecasting agent 可以把 TimeRouter 当成底层模型选择模块，而不是让 LLM 每次亲自做低层专家选择。

## 13. 贡献、局限与启示

贡献：

1. 把 TSFM 选择形式化为 oracle-best supervised routing，而不是 LLM prompt decision。
2. 设计了结合 decision margin 和 forecast diversity 的 selective gate。
3. 使用 context-tail CV 反比加权作为低置信 fallback。
4. 在 GIFT-EVAL 上取得 0.6765 LB MASE，并显著降低路由延迟。

局限：

- 需要训练 split 上预计算各 TSFM 预测和 oracle label；
- 主要验证在 GIFT-EVAL 和固定 TSFM pool 上；
- router 依赖手工构造的特征 $\phi(x)$，不是端到端学习；
- 当前输出是点预测专家选择，没有处理概率预测分布的更细粒度校准。

实践启示：

如果系统已经有多个 TSFM，先不要急着用 LLM 做昂贵 orchestration。很多“选哪个模型”的问题可以由轻量监督 router 解决。LLM 更适合处理任务解释、外部上下文、异常场景和高层规划；底层专家选择可以交给 TimeRouter 这类低延迟判别器。

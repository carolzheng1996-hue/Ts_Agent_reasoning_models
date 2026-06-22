# 《Evaluating Interactive 2D Visualization as a Sample Selection Strategy for Biomedical Time-Series Data Annotation》中文文献解读

**论文**：Einari Vaaras, Manu Airaksinen, Okko Räsänen，*Evaluating Interactive 2D Visualization as a Sample Selection Strategy for Biomedical Time-Series Data Annotation*  
**时间**：2026-03-27 arXiv 首发  
**方法主题**：2DV / TSExplorer / biomedical time-series annotation  
**论文链接**：[arXiv:2603.26592](https://arxiv.org/abs/2603.26592) / [PDF](https://arxiv.org/pdf/2603.26592) / [TeX](https://arxiv.org/e-print/2603.26592)  
**代码**：[GitHub: SPEECHCOG/TSExplorer](https://github.com/SPEECHCOG/TSExplorer)  
**本地 TeX 源码目录**：`tex/Evaluating_Interactive_2D_Visualization_as_a_Sample_Selection_Strategy_for_Biomedical_Time_Series_Data_Annotation`

## 1. 一句话总结

这篇论文用真实人类标注实验证明：交互式 2D 可视化能帮助标注者挑选更有信息量、尤其是稀有类样本，但在标注预算很小时也会引入更高的标注分布不稳定风险；它适合多标注者聚合和预算不太极限的生物医学时间序列标注场景。

## 2. 研究动机

生物医学时间序列常见于 IMU、EEG、ECG、EMG、语音、ICU 监护等场景。模型性能高度依赖标签质量，但人工标注昂贵且不稳定。传统主动学习或样本选择实验通常使用已有标签模拟，忽略了一个关键事实：标注者看到什么样的样本，会影响他们的标注行为和疲劳程度。

论文比较三种样本选择策略：

| 策略 | 含义 |
|---|---|
| RND | uniform random sampling |
| FAFT | farthest-first traversal / $k$-center greedy |
| 2DV | 标注者在 TSExplorer 中浏览 PCA/t-SNE/UMAP 等 2D 投影，自由选择样本 |

## 3. FAFT 公式

FAFT 的思想是让被选样本覆盖特征空间。给定特征向量集合 $\mathcal{X}$，已选集合 $\mathcal{S}_t$，下一点为：

$$
x_{t+1}
=
\arg\max_{x\in\mathcal{X}\setminus\mathcal{S}_t}
\min_{s\in\mathcal{S}_t} d(x,s).
$$

内层 $\min$ 表示一个候选点到已选集合的最近距离，外层 $\arg\max$ 选择“离现有标注最远”的点。它追求几何覆盖，但不一定等价于任务相关性。例如某些远离区域可能对分类边界并不重要。

## 4. 2DV 的任务假设

2DV 的隐含假设是：如果高维特征的 2D 投影能显示簇、边界或异常区域，人类可以把标注预算集中到更有判别价值的样本上。

可以把 2DV 选择看成一个人类策略：

$$
\mathcal{S}_{\mathrm{2DV}}
=
\pi_{\mathrm{human}}
\left(
\operatorname{Proj}_1(\mathbf{Z}),
\operatorname{Proj}_2(\mathbf{Z}),
\operatorname{Proj}_3(\mathbf{Z}),
\mathcal{I}
\right),
$$

其中 $\mathbf{Z}$ 是 SSL 特征，$\operatorname{Proj}$ 是 t-SNE/PCA/UMAP 等 2D 投影，$\mathcal{I}$ 是交互界面状态。这里没有固定算法，而是 human-in-the-loop sample selection。

## 5. 数据集与任务

论文覆盖两个生物医学时间序列模态、四个分类任务：

| 领域 | 数据 | 任务 | 指标 |
|---|---|---|---|
| Infant motility assessment (IMA) | MAIJU-DS，多传感器 IMU | posture、movement | UAF1 |
| Speech emotion recognition (SER) | NICU-A，新生儿 ICU 语音 | valence、arousal | UAR |

共有 12 位标注者，分为专家和非专家。每个方法在固定标注预算下采样，之后用标注结果微调 SSL 预训练模型。

## 6. 评价指标

IMA 使用 unweighted average F1：

$$
\mathrm{UAF1}
=
\frac{1}{C}\sum_{c=1}^{C}
\mathrm{F1}_c.
$$

SER 使用 unweighted average recall：

$$
\mathrm{UAR}
=
\frac{1}{C}\sum_{c=1}^{C}
\frac{\mathrm{TP}_c}{\mathrm{TP}_c+\mathrm{FN}_c}.
$$

这两个指标都避免多数类支配结果，适合类别不平衡的医学任务。

## 7. 失败风险分析

论文定义综合失败风险分数：

$$
S(m,c)
=
\sum_{k\in\mathcal{M}(c)}
R_k(m,c).
$$

$m$ 是采样方法，$c$ 是实验条件，$\mathcal{M}(c)$ 包含模型性能失败、稀有类覆盖失败和标签分布不稳定等风险指标，$R_k(m,c)$ 是对应排名。$S$ 越低，风险越小。

论文还用 Hellinger distance 衡量标注者间 label histogram 差异。对两个离散分布 $p,q$：

$$
H(p,q)
=
\frac{1}{\sqrt{2}}
\sqrt{\sum_i(\sqrt{p_i}-\sqrt{q_i})^2}.
$$

2DV 在 IMA 中风险较高，原因不是可视化无效，而是自由选择导致不同标注者覆盖区域差异很大。

## 8. 主要结果

核心结论可以概括为：

| 场景 | 更优策略 | 解释 |
|---|---|---|
| IMA 单标注者、预算很小 | FAFT / RND 更稳 | 多类别且不平衡，2DV 容易漏类 |
| IMA 多标注者标签合并 | 2DV 在较高预算后更强 | 多人异质探索互补，覆盖更丰富 |
| SER 专家标注者 | 2DV 最好 | 任务接近二分类，漏类风险较低 |
| 标注者数量/专业度不确定 | RND 最保守 | 失败风险总分最低 |

论文报告的失败风险排名显示：IMA 中 FAFT 和 RND 通常风险最低，2DV 风险最高；SER 中专家条件下 2DV 风险最低。总体跨任务总风险分数为 RND 105.0、FAFT 110.0、2DV 126.0，因此随机采样反而是最稳妥基线。

## 9. 贡献与局限

贡献在于它不是离线模拟主动学习，而是真实标注者实验，并且同时评估标签分布、下游分类性能和失败风险。它也提供了 TSExplorer 作为可复用工具。

局限是标注者数量和预算有限，2D 投影依赖 SSL 特征质量，且自由探索没有加入覆盖约束。实践上，2DV 应和轻量约束结合，例如提示未覆盖区域、稀有类覆盖目标、跨投影探索提醒，而不是完全放任标注者自由点选。

这篇论文对时间序列 agent 的启发是：样本选择不只是算法问题，也是人机交互问题。一个 annotation agent 如果只最大化 uncertainty，可能忽略标注者认知负担和标签分布稳定性。

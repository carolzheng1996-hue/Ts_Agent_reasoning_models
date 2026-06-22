# 《VESTA: Visual Exploration with Statistical Tool Agents》中文文献解读

**论文**：William Rudman 等，*VESTA: Visual Exploration with Statistical Tool Agents*  
**时间**：2026-05-29 arXiv 首发  
**方法名**：VESTA，Visual Exploration with Statistical Tool Agents  
**基准**：DAWN，Dataset for Automated Workflows and Numerical Modeling  
**论文链接**：[arXiv:2606.00384](https://arxiv.org/abs/2606.00384) / [PDF](https://arxiv.org/pdf/2606.00384) / [TeX](https://arxiv.org/e-print/2606.00384)  
**代码**：[GitHub: wrudman/VESTA](https://github.com/wrudman/VESTA)  
**本地 TeX 源码目录**：`tex/VESTA_Visual_Exploration_with_Statistical_Tool_Agents`

## 1. 一句话总结

VESTA 把“LLM/VLM 自动拟合统计模型”从单纯的反复自我批评，推进到可执行的视觉统计探索：agent 会选择或动态生成残差图、频谱图、自相关、Ljung-Box 检验、分布拟合诊断等工具，用可视化证据改进 PyMC 概率模型。

## 2. 背景与动机

论文关注的不是常规时间序列预测，而是更贴近科学建模的问题：给定观测数据，自动恢复一个合理的数据生成模型。已有 Box-LM、PyVision 一类系统可以让 LLM 生成 PyMC 模型或视觉分析代码，但困难样本上会出现两个瓶颈：

- 只靠语言 critique 容易停留在“模型看起来不太对”，缺少可验证诊断。
- 一次性生成的工具不会保留，无法在同一任务中形成逐步积累的统计探索流程。

VESTA 的核心判断是：统计建模不是一次生成代码，而是一个带证据的循环：

$$
\text{提出模型} \rightarrow \text{诊断模型} \rightarrow \text{发现错配} \rightarrow \text{修正模型}.
$$

## 3. 问题定义

论文设输入数据集为 $D$，真实数据生成过程为 $M(\theta)$，候选模型为 $\tilde{M}(\tilde{\theta})$。模型拟合质量由指标

$$
R(D,\tilde{M}(\tilde{\theta}))
$$

衡量。$R$ 可以是分布拟合中的 Jensen-Shannon divergence，也可以是时间序列建模中的 ELPD-LOO。VESTA 的新增对象是视觉诊断工具：

$$
\varepsilon(D,M,\theta).
$$

这里 $\varepsilon$ 是一个可执行 Python 函数，输入数据、当前模型和参数，输出图像、统计量或诊断摘要。关键点是这些工具进入注册表 $\mathcal{E}$，在同一次建模 run 中可复用。

## 4. Agent 框架

| Agent 要素 | VESTA 中的对应设计 |
|---|---|
| State / workspace | 数据 $D$、当前 PyMC 模型、参数、历史摘要 $s_i$、工具注册表 $\mathcal{E}$ |
| Policy / model | LLM/VLM 组合，包含模型生成、工具管理、视觉 critic、summarizer |
| Action space | 选旧工具、生成新工具、执行工具、提出新 PyMC 模型、终止 |
| Tool space | 分布诊断、残差分析、频域分析、自相关、统计检验、模型拟合可视化 |
| Trajectory | 每轮产生 $(M_i,\theta_i,T_i,s_i)$ |
| Memory | 当前 run 内的工具注册表和压缩历史摘要 |
| Update | 用 $R$ 和工具输出选择下一轮最优候选模型 |

算法可概括为：

$$
\varepsilon_i^*=\operatorname{ToolManager}(s_{i-1},D,\mathcal{E})
$$

$$
T_i=\varepsilon_i^*(D,M_{i-1},\theta_{i-1})
$$

$$
(M_i,\theta_i)=\operatorname{Critique}(T_i,s_{0:i-1},D)
$$

$$
(M_{\mathrm{best}},\theta_{\mathrm{best}})
=
\arg\min_{(M,\theta)}
R(D,M(\theta)).
$$

直觉上，ToolManager 决定“现在应该看什么证据”，工具输出 $T_i$ 把模型错配变成可见证据，Critique 再把证据翻译成新的 PyMC 结构。

## 5. 关键指标：ELPD-LOO

时间序列任务中，论文使用 Expected Log Predictive Density under Leave-One-Out：

$$
\mathrm{ELPD\text{-}LOO}
=
\sum_{i=1}^{n}
\int p_t(\tilde{y}_i)
\log p(\tilde{y}_i\mid y)
d\tilde{y}_i .
$$

其中 $p_t(\tilde{y}_i)$ 表示真实数据生成分布的近似，$p(\tilde{y}_i\mid y)$ 是当前模型的后验预测分布。这个指标不是衡量点预测误差，而是衡量模型给留出观测分配的预测密度。值越高，说明模型作为概率生成模型越可信。

## 6. DAWN Benchmark

DAWN 包含两类任务：

- 分布拟合：要求 agent 从样本中恢复分布结构，指标使用 JS divergence 等。
- 时间序列建模：要求 agent 写出合适的 PyMC/GP 类模型，指标使用 ELPD-LOO、$R^2$、CRPS。

数据难度分为 Easy、Hard、Astro。Astro 包含真实科学问题，例如初始质量函数和引力波 chirp 信号。

## 7. 实验结果

论文比较 VESTA 的三种配置：No-Toolkit、Dynamic-Toolkit、Expert-Toolkit，并与 PyVision、Box-LM 对比。

时间序列平均结果中，Claude Sonnet 4.6 的表现如下：

| 方法 | Easy ELPD | Easy $R^2$ | Astro ELPD | Astro $R^2$ | Hard ELPD | Hard $R^2$ |
|---|---:|---:|---:|---:|---:|---:|
| VESTA No-Toolkit | 30.2 | 0.870 | 10.1 | 0.675 | -210.7 | 0.819 |
| VESTA Dynamic | 55.9 | 0.965 | 23.3 | 0.842 | -85.1 | 0.920 |
| VESTA Expert | 82.7 | 0.981 | 42.3 | 0.909 | -71.8 | 0.938 |
| PyVision | -62.5 | 约 0 | -153.1 | 约 0 | -335.9 | 约 0 |

动态工具在 Hard 和 Astro 上提升尤其明显，说明复杂时序结构需要残差、频率、自相关、统计检验等多角度诊断。Expert 工具整体最强，但 Dynamic 工具强于已有自动工具系统，证明模型能生成有用的统计诊断工具。

## 8. 工具分析

VESTA 的动态工具与 PyVision 的差异不只是“也会画图”。论文显示，VESTA 更偏向 residual analysis 和 statistical tests。附录中提到，在时间序列工具类别覆盖上，VESTA 对残差分析的覆盖远高于 PyVision，并且会使用统计检验，而 PyVision 基本没有这一类工具。

这点很关键：对于 GP kernel 或周期模型，原始曲线拟合看起来不错不代表残差独立。残差自相关、频谱峰和 Ljung-Box $p$ 值往往更能揭示模型是否漏掉了周期、状态切换或长程依赖。

## 9. 局限与启发

VESTA 仍受限于 VLM 对复杂多面板图的理解能力。动态工具常常生成丰富图像，但图越复杂，critic 越可能漏读关键证据。另一方面，跨任务长期积累工具的实验效果有限，说明当前工具记忆更适合同一问题内复用，而不是自动形成通用统计工具库。

实践启发是：时间序列 agent 不应只允许“调用预测模型”，还应内置可审计诊断工具。一个可靠的 agent 需要能回答：

$$
\text{为什么当前模型错了？错在趋势、周期、残差、尾部、状态切换，还是噪声假设？}
$$

VESTA 的价值就在于把这个问题变成可执行的诊断循环。

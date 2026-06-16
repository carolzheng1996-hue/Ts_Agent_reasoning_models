# 《Adaptive Time Series Reasoning via Segment Selection》中文文献解读

**论文**：Shvat Messica, Jiawen Zhang, Kevin Li, Theodoros Tsiligkaridis, Marinka Zitnik. *Adaptive Time Series Reasoning via Segment Selection*. arXiv:2602.18645 / ICML 2026  
**方法名**：ARTIST (Adaptive Reasoning for Time-Series via Temporal Selection)  
**论文链接**：[arXiv](https://arxiv.org/abs/2602.18645) / [PDF](https://arxiv.org/pdf/2602.18645) / [TeX Source](https://arxiv.org/e-print/2602.18645)  
**代码链接**：[GitHub: mims-harvard/ARTIST](https://github.com/mims-harvard/ARTIST)  
**项目页**：[ARTIST project page](https://zitniklab.hms.harvard.edu/ARTIST/)

## 1. 一句话总结

ARTIST 把时间序列推理从“把整条序列编码成固定表示再回答”改成“边推理边选择片段”：同一个 Qwen3-4B 策略模型通过不同 prompt 扮演 controller 和 reasoner，controller 逐轮选择与问题相关的时间片段，reasoner 只基于已选片段生成推理和答案；训练时用层级强化学习分别优化片段选择和回答可靠性。

## 2. 问题定义

输入是自然语言问题 $q$ 和时间序列：

$$
T\in\mathbb{R}^{H\times V}
$$

其中 $H$ 是序列长度，$V$ 是变量数。论文主要关注单变量场景 $V=1$。时间序列大模型输出文本回答：

$$
\pi_\theta(q,T)\rightarrow Y
$$

论文把推理看作寻找从 $(q,T)$ 到正确答案 $Y$ 的隐式中间路径：

$$
p_\theta(Y\mid q,T)=
\sum_{z\in\mathcal{Z}}
p_\theta(Y\mid z,q)\,p_\theta(z\mid q,T)
$$

这里 $z=(z_1,\ldots,z_L)$ 表示模型如何检查、理解和利用信号。ARTIST 的核心是让 $z$ 显式包含“选择哪些时间片段”。

一个片段是连续切片：

$$
s=T_{t_{\text{start}}:t_{\text{end}}},\qquad
0\le t_{\text{start}}<t_{\text{end}}\le H
$$

模型维护累计片段列表：

$$
\mathcal{S}=[s^1,\ldots,s^K]
$$

## 3. Controller-Reasoner 交互

ARTIST 使用同一个策略模型 $\pi_\theta$，通过 role-specific prompting 分成两个角色：

- controller $\pi_\theta^{\text{ctl}}$：决定下一步看哪个时间片段，或是否接受当前答案；
- reasoner $\pi_\theta^{\text{rsn}}$：基于已选片段生成 reasoning trace 和答案。

第 $i$ 轮 controller 的状态为：

$$
x_i^{\text{ctl}}=(q,T,\mathcal{S}_{i-1},a_{i-1},\hat{y}_{i-1})
$$

其中 $\mathcal{S}_{i-1}$ 是之前选择的片段，$a_{i-1}$ 和 $\hat{y}_{i-1}$ 是上一轮 reasoner 的推理和答案。

controller 输出：

$$
(u_i,d_i,s_i)\sim\pi_\theta^{\text{ctl}}(\cdot\mid x_i^{\text{ctl}})
$$

$d_i\in\{\textsc{Continue},\textsc{Accept}\}$。如果继续，则加入新片段 $s_i$；如果接受，则上一轮 reasoner 答案成为最终答案。

reasoner 在继续时输出：

$$
(a_i,\hat{y}_i)\sim\pi_\theta^{\text{rsn}}(\cdot\mid q,\mathcal{S}_i)
$$

整个交互轨迹为：

$$
\tau=\{(u_i,s_i,d_i,a_i,\hat{y}_i)\}_{i=1}^{L},\qquad d_L=\textsc{Accept}
$$

这个设计让最终答案有明确 evidence trail：模型为什么看这些片段、片段中有什么证据、答案如何得出。

## 4. 奖励设计

### 4.1 Correctness Reward

$$
C(q,y^*,\hat{y})=\mathbf{1}[\hat{y}=y^*]
$$

只有预测答案等于标准答案时奖励为 1。

### 4.2 Reliability Reward

controller 的目标不是让某一次 reasoner 碰巧答对，而是选择一组能稳定支持正确答案的片段。论文对同一片段集合 $\mathcal{S}$ 重采样 $N$ 次 reasoner：

$$
D(q,\mathcal{S},y^*)=
\frac{1}{N}\sum_{n=1}^{N}
\mathbf{1}[\hat{y}^{(n)}=y^*]
$$

$D$ 越高，说明这些片段越可靠。

### 4.3 Controller Reward

controller 还要满足格式约束。其 reward 为：

$$
R_{\text{ctl}}(\tau_{\text{ctl}},D)=
\begin{cases}
-1,&F_{\text{ctl}}(\tau_{\text{ctl}})<0\\
w_DD+w_fF_{\text{ctl}}(\tau_{\text{ctl}}),&\text{otherwise}
\end{cases}
$$

如果 controller 输出不可执行片段、多个冲突 decision 或格式坏掉，会被直接 hard penalty。

### 4.4 Reasoner Reward

$$
R_{\text{rsn}}(\tau_{\text{rsn}},c)=
w_c c+w_eF_{\text{rsn}}(\tau_{\text{rsn}})
$$

reasoner 同时优化答案正确性和 `<think>...</think><answer>...</answer>` 格式。

## 5. Hierarchical Policy Optimization

ARTIST 的 RL 是嵌套 rollout：

1. 对每个训练样本采样 $G$ 条 controller-reasoner interaction trajectories；
2. 对每条 trajectory 最终片段集合，再采样 $N$ 次 reasoner；
3. 用 $N$ 次 correctness 均值作为 controller 的 reliability reward；
4. 用方差引导采样选择信息量更高的 reasoner group；
5. controller advantage 传播到所有 controller rounds；
6. reasoner advantage 只传播到最后一轮 reasoner 输出。

controller group-relative advantage：

$$
\hat{A}_{\text{ctl}}^{(g)}=
\begin{cases}
0,&\sigma_{\text{ctl}}<\epsilon\\
\dfrac{r_{\text{ctl}}^{(g)}-\mu_{\text{ctl}}}{\sigma_{\text{ctl}}+\epsilon},&\text{otherwise}
\end{cases}
$$

reasoner group-relative advantage：

$$
\hat{A}_{\text{rsn}}^{(g^*,n)}=
\begin{cases}
0,&\sigma_{\text{rsn}}<\epsilon\\
\dfrac{r_{\text{rsn}}^{(g^*,n)}-\mu_{\text{rsn}}}{\sigma_{\text{rsn}}+\epsilon},&\text{otherwise}
\end{cases}
$$

最终联合目标：

$$
\mathcal{J}=\mathcal{J}_{\text{ctl}}+\mathcal{J}_{\text{rsn}}
$$

直观上，controller 学“长期片段集合是否让答案稳定正确”，reasoner 学“给定片段如何细粒度推理”。这比把两个角色都当成最后一步短视优化更适合多轮片段选择。

## 6. 实验设置

实现：

- backbone：Qwen3-4B；
- 时间序列编码：5-layer MLP + patch-based time-series inputs；
- 训练阶段：LoRA SFT + full-parameter RL；
- controller temperature：1.0；
- reasoner temperature：0.7；
- top-p：0.95；
- RL：4 张 NVIDIA H100；
- 评估：每个数据集 8 次独立运行，报告 Accuracy 和 F1。

数据集：

| Dataset | Task | Train | Val | Test | TS Len. | Domain |
|---|---|---:|---:|---:|---:|---|
| RCW | Binary Choice | 19,135 | 4,405 | 226 | 4000 | Nature |
| ECG-QA | Binary Choice | 16,663 | 1,999 | 202 | 1000 | ECG |
| Sleep-QA | Multi Choice | 7,268 | 1,817 | 204 | 1500 | EEG |
| TSQA | Multi Choice | 7,243 | 1,811 | 207 | 22±5 | Web/Nature/Healthcare/Energy |
| TRQA | Mixed | 17,241 | 2,487 | 200 | 136±65 | Web/Transport/Finance/Energy/Sales/Nature |
| ETI | Multi Choice | 11,778 | 1,000 | 200 | 407±353 | Sales/Energy/Entertainment/Tech/Transport/Health/Nature/Education |

## 7. 主要结果

### 7.1 与文本 LLM 和时间序列 encoder baseline 比较

| Model | ETI Acc | RCW Acc | ECG Acc | Sleep Acc | TSQA Acc | TRQA Acc | Avg Acc | Avg F1 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Random Guess | 25.00 | 50.00 | 50.00 | 16.67 | 29.67 | 37.13 | 34.74 | 34.74 |
| GPT-5 w/ statistics | 63.54 | 32.74 | 53.96 | 0.49 | 35.75 | 25.00 | 35.25 | 34.48 |
| ChatTS-14B + SFT | 50.50 | 73.89 | 53.47 | 26.47 | 46.38 | 69.00 | 53.28 | 35.15 |
| OpenTSLM-4B + SFT | 82.69 | 65.49 | 69.50 | 35.37 | 47.50 | 76.25 | 62.80 | 47.68 |
| ITFormer-4B + SFT | 84.62 | 67.31 | 57.31 | 33.62 | 49.50 | 80.12 | 62.08 | 51.01 |
| ARTIST + SFT | 85.12 | 69.75 | 56.31 | 28.13 | 60.06 | 82.26 | 63.61 | 56.61 |
| ARTIST + SFT + RL | **87.03** | **77.00** | **69.81** | **36.63** | **62.00** | **83.06** | **69.26** | **57.61** |

ARTIST 相对每个数据集最强 baseline 的平均准确率提升为 **+6.46** 个百分点，平均 F1 提升 **+6.60**。

### 7.2 与视觉模型比较

| Model | ETI | RCW | ECG-QA | Sleep-QA | TSQA | TRQA |
|---|---:|---:|---:|---:|---:|---:|
| TimeMaster + RL | 49.00 | 76.99 | 69.31 | **72.55** | 61.22 | 72.08 |
| ARTIST + SFT + RL | **87.03** | **77.00** | **69.81** | 36.63 | **62.00** | **83.34** |

ARTIST 在 6 个数据集中赢 5 个，但 Sleep-QA 落后。论文进一步用视觉 backbone 做 modality analysis，发现 Sleep-QA 差距主要来自 EEG 输入模态编码，而不是 segment selection 机制本身。

## 8. 消融实验

| Method | ECG | RCW | Avg |
|---|---:|---:|---:|
| ARTIST | **69.81** | **77.00** | **73.41** |
| Reasoner Only | 65.33 | 62.88 | 64.11 |
| Controller-only RL | 60.81 | 68.13 | 64.47 |
| w/o Reliability Reward | 52.50 | 51.44 | 51.97 |
| w/o Trajectory-based Objective | 55.19 | 67.06 | 61.13 |
| w/o Variance-guided Sampling | 68.13 | 72.75 | 70.44 |

关键结论：

- 去掉 controller、直接全序列 reasoning，平均准确率下降 9.30；
- 只训练 controller、不更新 reasoner，平均下降 8.94；
- 去掉 reliability reward，平均下降 21.44，是最关键的组件；
- 去掉 trajectory-level objective，平均下降 12.28；
- 方差引导采样贡献较小但稳定，下降 2.97。

## 9. Agent 视角拆解

| Agent 要素 | ARTIST 中的对应设计 |
|---|---|
| State / workspace | $x_i^{\text{ctl}}=(q,T,\mathcal{S}_{i-1},a_{i-1},\hat{y}_{i-1})$ |
| Policy / model | 同一个 Qwen3-4B policy，通过 prompt 扮演 controller 和 reasoner |
| Action space | controller 选择 `Continue + segment` 或 `Accept`；reasoner 输出 reasoning trace 和 answer |
| Tool | `timeseries_selection_tool` 返回指定时间片段 |
| Trajectory | 多轮 $\tau=\{(u_i,s_i,d_i,a_i,\hat{y}_i)\}_{i=1}^{L}$ |
| Memory / context | 累计片段列表 $\mathcal{S}$ 和上一轮 reasoner 输出 |
| Training | SFT 生成结构化 segment-selection CoT；RL 做 hierarchical policy optimization |
| Evaluation | 六个 TS reasoning benchmark，Accuracy/F1，8 次独立运行 |

## 10. 贡献与局限

贡献：

1. 把时间序列 reasoning 建模为 sequential decision problem，而不是静态全序列编码。
2. 提出 controller-reasoner 架构，让模型按问题自适应选择证据片段。
3. 用 reliability reward 解决单次采样“碰巧答对”误导 controller 的问题。
4. 用 hierarchical policy optimization 解决多轮 segment selection 的 credit assignment。
5. 在 6 个 benchmark 上取得平均准确率 69.26%，相对最强 baseline 提升 6.46 个百分点。

局限：

- 当前主实验是单变量时间序列；
- 多轮模型调用会增加推理成本；
- Sleep-QA 上 tokenized time-series representation 明显不如视觉表示；
- segment selection 虽可解释，但仍依赖模型能否正确识别候选片段边界。

实践启示：

对于长序列或证据稀疏的时间序列问答，把全部序列塞给模型并不总是最好。更有效的方式是让模型先决定“该看哪里”，再基于局部证据推理；但这要求训练目标奖励稳定、可复现的证据选择，而不是单次答案正确。


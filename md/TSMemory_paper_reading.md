# 《TS-Memory: Plug-and-Play Memory for Time Series Foundation Models》中文文献解读

**论文**：Sisuo Lyu 等，*TS-Memory: Plug-and-Play Memory for Time Series Foundation Models*  
**时间**：2026-02-12 arXiv 首发  
**方法名**：TS-Memory / Parametric Memory Distillation / PlugMem  
**论文链接**：[arXiv:2602.11550](https://arxiv.org/abs/2602.11550) / [PDF](https://arxiv.org/pdf/2602.11550) / [TeX](https://arxiv.org/e-print/2602.11550)  
**代码**：[GitHub: sisuolv/TS-Memory](https://github.com/sisuolv/TS-Memory)  
**本地 TeX 源码目录**：`tex/TS_Memory_Plug_and_Play_Memory_for_Time_Series_Foundation_Models`

## 1. 一句话总结

TS-Memory 解决冻结时间序列基础模型在新域适配中的效率-性能矛盾：它先离线用 kNN 检索构造“记忆教师”的分位数目标，再把检索带来的分布修正蒸馏进轻量 PlugMem 模块，推理时不再检索，实现常数时间的 plug-and-play 记忆增强。

## 2. 背景与动机

时间序列基础模型（TSFM）零样本能力强，但遇到下游域偏移时常不稳。已有适配方法分两类：

| 范式 | 优点 | 问题 |
|---|---|---|
| Parametric Adaptation | 直接更新参数，适配强 | 容易灾难性遗忘，多域维护成本高 |
| Non-Parametric Retrieval | 不改模型，可利用历史相似样本 | 推理时要查库，延迟随数据库增长 |
| TS-Memory | 离线蒸馏检索知识，推理无检索 | 依赖检索教师质量和域匹配 |

论文的核心洞察是：检索提供的不只是一个点预测，而是“相似历史未来”的条件分布。这个分布可以离线编译进一个小模块。

## 3. 任务定义

给定多变量时间序列：

$$
\mathbf{x}_{1:T}\in\mathbb{R}^{T\times C},
$$

lookback context 和 forecast horizon 为：

$$
\mathbf{X}_t=\mathbf{x}_{t-L+1:t}\in\mathbb{R}^{L\times C},
\quad
\mathbf{Y}_t=\mathbf{x}_{t+1:t+H}\in\mathbb{R}^{H\times C}.
$$

目标是概率预测，使用分位数集合：

$$
\mathcal{Q}=\{q_k\}_{k=1}^{Q},\quad q_k\in(0,1).
$$

冻结 TSFM 输出基础分位数预测：

$$
\widehat{\mathbf{Q}}^{\mathrm{base}}_t
=
f_{\theta}(\mathbf{X}_t).
$$

PlugMem 输出记忆分位数：

$$
\widehat{\mathbf{Q}}^{\mathrm{mem}}_t
=
g_{\phi}(\mathbf{X}_t).
$$

## 4. Stage I：离线检索教师

TS-Memory 只从训练集构造检索教师，避免 test leakage。对训练窗口 $t$，先得到 embedding $\mathbf{e}_t$，在训练知识库中检索 $K$ 个近邻：

$$
\mathcal{N}_K(t)
=
\operatorname*{TopK}_{i\ne t}
(-\|\mathbf{e}_t-\mathbf{e}_i\|_2).
$$

对近邻未来轨迹加权，权重可写作：

$$
w_i=
\frac{\exp(-\psi(d_i)/\tau_{\mathrm{ret}})}
{\sum_{j\in\mathcal{N}_K(t)}
\exp(-\psi(d_j)/\tau_{\mathrm{ret}})}.
$$

其中 $d_i$ 是 embedding 距离，$\tau_{\mathrm{ret}}$ 控制近邻权重尖锐程度。

对每个 horizon-channel 标量 $u=(h,c)$，将近邻未来值排序为 $v_{\pi(1)}\le \cdots\le v_{\pi(K)}$，累计权重：

$$
S_m=\sum_{r=1}^{m}w_{\pi(r)}.
$$

加权经验分位数定义为：

$$
\widetilde{Q}_{t,u}(q)
=
v_{\pi(m^*)},
\quad
m^*=\min\{m:S_m\ge q\}.
$$

这就是检索教师给出的分布目标。它比单个真实未来 $\mathbf{Y}_t$ 更丰富，因为近邻集合表达了局部不确定性。

检索置信度用权重集中度衡量：

$$
\mathrm{Conf}_t=\sum_{i\in\mathcal{N}_K(t)}w_i^2.
$$

如果近邻权重集中，说明少数高度相似样本主导预测，教师更可信；如果权重分散，说明检索证据弱。

## 5. Stage II：置信门控蒸馏

PlugMem 是轻量 encoder-decoder Transformer：输入 context，patch 化后编码，再用 horizon queries 解码分位数。

基础监督是 quantile regression pinball loss：

$$
\mathcal{L}_{\mathrm{task}}
=
\operatorname{Pinball}_{\mathcal{Q}}
(\widehat{\mathbf{Q}}^{\mathrm{mem}}_t,\mathbf{Y}_t).
$$

对单个分位数 $q$，pinball loss 为：

$$
\rho_q(y-\hat{y})
=
\max(q(y-\hat{y}),(q-1)(y-\hat{y})).
$$

蒸馏不是无条件模仿教师。论文先比较教师和冻结 backbone 的 median absolute error：

$$
\mathrm{err}^{T}_t
=
|\widetilde{Q}_{t}(0.5)-Y_t|,
\quad
\mathrm{err}^{\mathrm{base}}_t
=
|\widehat{Q}^{\mathrm{base}}_{t}(0.5)-Y_t|.
$$

只有当教师比 backbone 更好时，才强蒸馏：

$$
\chi_t=\mathbb{I}[
\mathrm{err}^{T}_t < \mathrm{err}^{\mathrm{base}}_t
].
$$

结合置信度形成门控权重：

$$
\omega_t=\chi_t\cdot \mathrm{Conf}_t.
$$

这就是 confidence-gated distillation：有用且可靠的检索信号才进入训练，避免把坏近邻蒸馏成错误记忆。

## 6. 推理时融合

推理时完全不查库，只跑 frozen backbone 和 PlugMem：

$$
\widehat{\mathbf{Q}}^{\mathrm{final}}_t
=
(1-\alpha)
\widehat{\mathbf{Q}}^{\mathrm{base}}_t
+\alpha
\widehat{\mathbf{Q}}^{\mathrm{mem}}_t.
$$

$\alpha$ 是验证集调节的融合权重。$\alpha=0$ 退化为原 TSFM，$\alpha=1$ 完全依赖记忆模块。论文发现中间值最好，因为 PlugMem 是校正器，不应完全替代强 backbone。

## 7. 实验设置与结果

论文在多个 TSFM backbone 和长预测 benchmark 上评估，包括 ChronosBolt、Chronos2、Sundial、TimesFM 等。指标覆盖点预测误差和概率预测质量。

主要结论：

- TS-Memory 在多种 backbone 上稳定改善 MSE/MAE 和概率预测。
- 跨 backbone transfer 可行，PlugMem 从一个 teacher/backbone 蒸馏后仍能帮助其他冻结 TSFM。
- 平均 MSE 降幅在跨模型设置中约 6% 到 10%。
- 域迁移中，cross-domain 训练仍有约 2.7% MSE 改善；distribution-shift 约 3.5%；multi-domain 约 4.0%；in-domain 最好，约 6.8% MSE 和 1.9% MAE 改善。
- 组件消融显示 full TS-Memory 相比 frozen backbone 平均降低约 5.3% MSE 和 1.9% MAE。

## 8. Gate 行为

论文报告教师在八个数据集上约 83.5% 的训练窗口优于 backbone，但 gate 并非永远打开。这个结果说明检索教师通常有价值，但仍需门控抑制坏检索和噪声未来。

这也是 TS-Memory 区别于简单 RAG 蒸馏的地方：它蒸馏的是“相对 backbone 有增益的分布修正”，不是盲目拟合近邻。

## 9. 局限与启发

TS-Memory 主要面向长 horizon 概率预测，尚未扩展到 imputation、anomaly detection、决策型 forecasting。若检索库和部署域不匹配，教师目标会变噪，虽然 advantage gate、anchoring 和 backbone fusion 能缓解，但不能完全消除风险。

实践启发是：时间序列记忆不一定要在线检索。可以把历史相似模式离线压缩进一个小模块，让推理路径保持常数复杂度：

$$
\text{retrieval benefit}
\rightarrow
\text{offline distillation}
\rightarrow
\text{retrieval-free memory}.
$$

这对边缘部署、低延迟监控、多域模型维护很有价值。

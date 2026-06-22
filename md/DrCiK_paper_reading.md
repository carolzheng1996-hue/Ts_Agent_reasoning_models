# 《Dr-CiK: A Testbed for Foresight-Driven Agents》中文文献解读

论文：*Dr-CiK: A Testbed for Foresight-Driven Agents*，arXiv:2605.27904  
方法/基准名：**Dr-CiK**  
本地 TeX 源码目录：[Dr_CiK_A_Testbed_for_Foresight_Driven_Agents](Dr_CiK_A_Testbed_for_Foresight_Driven_Agents/)

## 1. 一句话总结

Dr-CiK 不是提出一个新 forecasting model，而是提出一个评测 foresight-driven agents 的基准：给 agent 历史时间序列和一个含支持文档与干扰文档的 corpus，要求它主动检索、过滤、合成 forecast-useful evidence，再让 forecaster 基于这些 evidence 做 context-aided forecasting。

核心问题是：

$$
\text{能否找到真正会改变未来预测的上下文，而不是找到表面相关的文本？}
$$

论文发现：高质量 supporting evidence 能显著改善预测，但现有 deep research agents 通常找不到足够支持证据，supporting evidence recall 多数低于 5%，引用文档中超过 80% 可能是 distractors，甚至会让 forecaster 比无上下文时更差。

## 2. 背景：CAF 和 DR 为什么要合并评测

传统概率预测估计：

$$
P(\mathbf{X}_F\mid \mathbf{X}_H),
$$

其中 $\mathbf{X}_H=[X_1,\dots,X_t]$ 是历史序列，$\mathbf{X}_F=[X_{t+1},\dots,X_T]$ 是未来序列。

Context-aided forecasting (CAF) 估计：

$$
P(\mathbf{X}_F\mid \mathbf{X}_H,\mathbf{C}),
$$

其中 $\mathbf{C}$ 是外部文本上下文。已有 CAF benchmark 往往直接把相关 context 给模型，评测模型是否会用 context。但真实场景更难：forecasting agent 需要从大量文档里主动找 context。

Deep research (DR) benchmark 则通常评测检索、报告生成和引用质量，把“研究报告”当最终产物。Dr-CiK 认为这不够，因为 forecasting 场景中，检索质量最终要由预测效用检验。

因此 Dr-CiK 定义 **CAF via DR**：agent 必须先做 deep research，再支持数值 forecasting。

## 3. 形式化定义

agent 可以访问文档集合：

$$
\mathbf{D}=\{D_1,\dots,D_n\}.
$$

其中只有子集 $\mathbf{D}_s\subset\mathbf{D}$ 包含 supporting context。supporting evidence 记为：

$$
\mathbf{E}_s.
$$

supporting document 是包含有用信息的文档；supporting evidence 是其中真正 forecast-relevant 的具体内容或摘要。

理想情况下，给定任何从 corpus 合成的上下文 $\mathbf{C}\in\mathcal{C}(\mathbf{D})$，使用真实 supporting evidence 应该达到最优预测损失：

$$
\mathbb{E}_{\mathbf{x}_F}
\mathcal{L}
\left(
P(\mathbf{X}_F\mid \mathbf{X}_H,\mathbf{E}_s),
\mathbf{x}_F
\right)
\le
\mathbb{E}_{\mathbf{x}_F}
\mathcal{L}
\left(
P(\mathbf{X}_F\mid \mathbf{X}_H,\mathbf{C}),
\mathbf{x}_F
\right),
\quad
\forall \mathbf{C}\in\mathcal{C}(\mathbf{D}).
$$

这条不等式表达了 Dr-CiK 的核心评价逻辑：不是所有“相关文本”都有用，只有支持未来预测的 evidence 才应该降低 forecasting loss。

## 4. Dr-CiK 数据规模

Dr-CiK 包含：

| 项目 | 数量/范围 |
|---|---:|
| 总任务数 | 240 |
| 生成任务 | 199 |
| 专家标注任务 | 41 |
| 总文档数 | 8,849 |
| 平均 supporting documents / task | 约 12 |
| 平均 distractors / task | 约 25 |
| 文档比例 | 约 1:2 supporting-to-distractor |
| 覆盖领域 | energy、finance、transportation、retail、public health、compute observability 等 |

199 个任务来自 CiK 和 GIFT-CTX 等已有 CAF 资源；41 个任务由专家构造，使用真实未编辑时间序列和专家撰写上下文，目标是提高部署真实性。

## 5. 任务生成流水线

Dr-CiK 的生成流程有三阶段。

### 5.1 Entity Disambiguation

所有任务文档被放进共享 corpus，因此不同任务中可能出现相似实体。Dr-CiK 会：

1. 抽取 task 中的实体和 containment relations；
2. 为实体生成 synthetic profiles；
3. 把原上下文改写到这些 profiles 上；
4. 对真实时间窗口和文档 timestamp 做 time shifting。

这样可以降低模型靠参数记忆或表面实体名称完成任务的可能。

### 5.2 Multi-hop Decomposition

如果 supporting evidence 都放在单个文档里，任务会退化成单文档检索。Dr-CiK 把支持证据拆成多跳 reasoning chain：

$$
E_1 \rightarrow R_1 \rightarrow E_2 \rightarrow R_2 \rightarrow \cdots \rightarrow E_m,
$$

其中 $E_i$ 是 supporting evidence node，$R_i$ 是 reasoning link node。链路被约束为无分支、无环、无 shortcut。

hop count 是难度旋钮：

- 1-hop：接近单文档 recall；
- 多跳：需要跨文档检索、连接和合成。

### 5.3 Document Generation

支持文档采用 overlapping assignment：每个 supporting document 覆盖相邻两个 evidence nodes 及中间 reasoning link。这样连续文档共享 causal anchor，保持链路可追踪。

随后生成 distractor metadata，再渲染成自然语言文档。每一步由校准过的人类/LLM judge 检查，不合格则 regenerate-until-correct，最后用 Agent Judge 做整体 audit。

## 6. Forecast-dependent distractor taxonomy

Dr-CiK 的 distractors 不是普通语义 hard negative，而是 forecast-dependent：它们看起来相关，但如果 agent 用它们，会把预测推向错误方向。每个 distractor 都应该可被排除，方法是核对 task metadata 或历史时间序列。

五类 distractors：

| 类型 | 含义 | 测试能力 |
|---|---|---|
| Confounder | 合理但作用于另一个变量的伪因果机制 | 因果链是否真的指向目标序列 |
| Profile Mismatch | 正确场景模板套到同类型错误实体上 | 实体 grounding |
| Temporal Misalignment | 正确事件和实体，但不在预测窗口 | 时间锚定 |
| Time-series Misinterpretation | 故意误读历史序列，推出错误未来 | 数值/形态推理 |
| Noisy | 同实体同时间窗口但无预测价值的细节 | 区分 causal evidence 和 filler |

其中 time-series misinterpretation 又按 scope 和 feature 细分：

$$
\mathit{scope}\in\{\mathit{segment},\mathit{global}\},
\qquad
\mathit{feature}\in\{\mathit{value},\mathit{trend},\mathit{periodicity}\}.
$$

这类干扰项最能暴露 agent 的时间序列理解缺陷：文本可能和目标实体、目标时间都相关，但它对历史走势的解释是错的。

## 7. 三层评估协议

Dr-CiK 把端到端失败拆成三层：

| 层级 | 评估对象 | 问题 |
|---|---|---|
| Level 1 End-to-End | DR agent + forecaster | 检索/合成/预测整体是否好 |
| Level 2 Deep Research | DR agent | 是否找回 supporting evidence、是否引用 distractors |
| Level 3 Context-Aided Forecasting | forecaster | 在不同 context 条件下是否能用文本改进预测 |

这个设计很重要。否则 forecast 错了时无法判断原因：是 agent 没找到证据，还是找到证据但合成错了，还是 forecaster 不会用文本。

## 8. Deep Research 指标

对任务 $t$，ground-truth supporting evidence 集合为 $\mathcal{E}_t$。每个 evidence item $e$ 需要一组 supporting documents $R_e$ 支撑。DR agent 输出 synthesized evidence items 和引用文档。

令：

- $M_e\in\{0,1\}$：judge 是否认为某个 synthesized evidence 与 ground-truth evidence $e$ 语义匹配；
- $C_e$：匹配的 synthesized evidence 引用的文档集合；
- $Q_t$：DR report 中所有被解析引用的文档；
- $D_t$：任务 $t$ 的 distractor documents。

### 8.1 Evidence Recall

$$
\mathrm{EvidenceRecall}
=
\frac{1}{\sum_t|\mathcal{E}_t|}
\sum_t
\sum_{e\in\mathcal{E}_t}
M_e
\frac{|R_e\cap C_e|}{|R_e|}.
$$

只有 synthesized evidence 语义匹配时才给分，并且按引用到的 required supporting docs 比例给 partial credit。

### 8.2 Supporting Document Recall

$$
\mathrm{SuppDocRecall}
=
\frac{1}{\sum_t|\mathcal{E}_t|}
\sum_t
\sum_{e\in\mathcal{E}_t}
\frac{|R_e\cap Q_t|}{|R_e|}.
$$

这个指标只看 agent 是否找到源文档，不管 evidence synthesis 是否语义正确。它能区分“没检索到文档”和“检索到了但总结错了”。

### 8.3 Distractor Avoidance

$$
\mathrm{DistractorAvoidance}
=
1-
\frac{|Q_t\cap D_t|}{|Q_t|}.
$$

值越高说明引用中 distractor 越少。论文强调它不按 corpus 中 distractor base rate 归一化，因为关心的是 agent 实际引用证据源的质量。

## 9. Forecasting 指标

每个任务 horizon 为 $T$，每个 forecaster 采样 $S$ 条预测轨迹 $\hat{y}_{s,t}$，真实值为 $y_t$。缩放因子：

$$
a
=
\left(
\frac{1}{T}\sum_{t=1}^{T}|y_t|
\right)^{-1}.
$$

点预测为样本均值：

$$
\bar{y}_t
=
\frac{1}{S}
\sum_{s=1}^{S}\hat{y}_{s,t}.
$$

scaled MAE：

$$
\mathrm{sMAE}
=
a\cdot
\frac{1}{T}
\sum_{t=1}^{T}
|\bar{y}_t-y_t|.
$$

scaled RMSE：

$$
\mathrm{sRMSE}
=
a\cdot
\sqrt{
\frac{1}{T}
\sum_{t=1}^{T}
(\bar{y}_t-y_t)^2
}.
$$

经验 CRPS：

$$
\mathrm{CRPS}_t
=
\frac{1}{S}
\sum_{s=1}^{S}
|\hat{y}_{s,t}-y_t|
-
\frac{1}{2S^2}
\sum_{s=1}^{S}
\sum_{s'=1}^{S}
|\hat{y}_{s,t}-\hat{y}_{s',t}|.
$$

scaled CRPS：

$$
\mathrm{sCRPS}
=
a\cdot
\frac{1}{T}
\sum_{t=1}^{T}
\mathrm{CRPS}_t.
$$

sCRPS 越低，概率预测分布越好。主实验每个 forecaster 每任务采样 $S=25$ 条预测轨迹。

## 10. 实验设置

DR agents：

| Agent | 类型 |
|---|---|
| Codex | OpenAI Codex CLI agent，GPT-5.5 high reasoning |
| DRBench | deep research baseline |
| Bench2Future | ReAct-style corpus search |
| Open-Deep-Research | LangChain-style open DR |
| Retrieval | embedding retrieval + one-shot synthesis |

Forecasters：

| 类别 | 模型 |
|---|---|
| Statistical | ARIMA、ETS、SES、Naive |
| TS / multimodal | Chronos、Aurora、TimeOmni-7B |
| LLM direct prompt | Gemini、Mistral、Qwen、Llama、Phi |
| Forecasting agent | MoiraiAgent + Gemini |

上下文条件包括 No Context、Original Context、Supporting Evidence、Supporting Documents、DR-synthesized Evidence、Verified DR 等，用于隔离不同失败来源。

## 11. 关键结果

端到端表中，sCRPS 越低越好：

| Context | Aurora | DP-Gemini | MoiraiAgent |
|---|---:|---:|---:|
| No Context | 0.483 | 0.319 | 0.338 |
| Original Context | 0.487 | 0.233 | **0.206** |
| Bench2Future DR | 0.481 | 0.631 | 0.521 |
| DrBench DR | 0.483 | 0.567 | 0.483 |
| Retrieval DR | **0.479** | 0.586 | 0.515 |
| OpenDR | 0.482 | 0.582 | 0.415 |
| Codex-GPT5.5 DR | 0.483 | **0.326** | **0.310** |

解读：

1. 原始高质量上下文能明显帮助 DP-Gemini 和 MoiraiAgent，例如 MoiraiAgent 从 0.338 降到 0.206。
2. 现有 DR agent 产生的上下文通常不能复现这种收益，甚至会显著变差。
3. Aurora 对上下文不敏感，说明它主要依赖数值模态，文本条件没有强影响。
4. Codex 是 DR 条件里较好的，但仍远不如 Original Context。

论文的更强结论是：问题不在于 context-aided forecasting 没用，而在于当前 DR agent 没有可靠找到和保留 forecasting 所需 evidence。

## 12. 失败模式：specificity collapse

论文给了一个 Codex 失败案例：agent 找到了正确 supporting docs，也能避开不少 distractors，但在 synthesis 时丢掉关键数值锚点和 modal qualifiers。

例如：

- 具体装修时间被压缩成“renovation phase”；
- 169-reading 低用电段被泛化成“wattage reductions”；
- 1:00 AM handover 被泛化成“October 13”；
- “permanent baseline increase” 被改写成“rising/drifting higher”。

这类错误不是检索失败，而是 read-then-synthesize 失败。对 forecasting 来说，小时级时间锚点、持续性/永久性判断、具体 regime change index 正是预测模型需要的输入。流畅摘要反而会损害预测。

## 13. Agent 视角拆解

| 要素 | Dr-CiK 中的对应 |
|---|---|
| State / input | 历史时间序列 $\mathbf{X}_H$、任务说明、共享文档 corpus $\mathbf{D}$ |
| Agent action | 搜索、阅读、引用、合成 supporting evidence |
| Environment | 8,849 文档，含 supporting docs 和 forecast-dependent distractors |
| Ground truth | supporting evidence $\mathbf{E}_s$、supporting docs、future values $\mathbf{X}_F$ |
| Reward / evaluation | Evidence Recall、SuppDocRecall、DistractorAvoidance、sCRPS |
| Downstream model | statistical/LLM/TSFM/multimodal forecasters |
| Failure decomposition | DR retrieval failure、evidence synthesis failure、forecaster grounding failure |

Dr-CiK 不是训练 agent 的方法，而是一个 diagnostic testbed：它让我们能判断 foresight-driven agent 到底是“找不到证据”“引用了干扰项”“总结时丢了关键细节”，还是“forecaster 不会用证据”。

## 14. 贡献、局限与启示

贡献：

1. 定义 CAF via DR，把 deep research 的质量绑定到 downstream numerical forecasting。
2. 构造 240 个任务、8,849 个文档的可控 benchmark。
3. 提出 forecast-dependent distractor taxonomy，尤其覆盖 time-series misinterpretation。
4. 提供三层评估协议，分离 DR agent 和 forecaster 的失败来源。
5. 实验证明当前 DR agent 引入的上下文常常不如人工/原始 supporting context，甚至会降低预测表现。

局限：

- 大量文档和任务由 LLM 生成并经 judge 校验，仍可能有生成分布偏差；
- 目前 benchmark 数量为 240，覆盖面比开放网络环境更可控但也更有限；
- 使用的闭源模型和未来模型名称会影响可复现性；
- Dr-CiK 主要评估 forecast-useful evidence retrieval，不直接提出新 agent 改进算法。

实践启示：

真实 forecasting agent 不能只做语义检索。它必须验证 retrieved context 是否与目标实体、预测窗口、历史走势和未来变量一致。对时间序列预测来说，最危险的不是完全无关文档，而是“看起来很相关、但会把未来方向带错”的 context。Dr-CiK 的价值就在于把这种失败显式测出来。

# 时间序列研究晨间简报｜2026-11-06

检索时间：2026-11-06 08:13（Asia/Shanghai）。严格时间窗口：**2026-08-06 至 2026-11-06**；论文按 arXiv v1/官方首发日期、工程按 GitHub `created_at` 或可核验公告日期排序。作者指标未经本地复现。

## 1. 时间序列基础模型最新研究

### 2026-11-04｜[Decouple to Reuse: Fine-Grained Knowledge Augmentation for Time Series Foundation Models](https://arxiv.org/abs/2611.05993)

- **来源与日期**：arXiv v1，2026-11-04 05:37 UTC；匿名代码入口为 [TSFM-Component-Token-Adapter](https://github.com/yuppielqx/TSFM-Component-Token-Adapter)。
- **简短摘要**：提出两阶段 FKA：分别以趋势和季节残差构建紧凑、任务共享的 codebook，再按任务自适应检索、门控融合到冻结 TSFM，目标是避免整段窗口检索带来的无关上下文。作者在八个基准、四个 TSFM backbone 上报告精度与计算效率提升。
- **相关性判断：高（TSFM 检索增强 / Agent 工具）**。分解级检索可成为 Agent 在“相似片段”之外可调用的结构化记忆；上线前应以严格按时间构建的 codebook、冷启动序列和跨域数据检验，避免检索库混入预测时点之后的数据。

### 2026-11-04｜[Graph Foundation Models Can Become Effective Multivariate Time Series Anomaly Detectors](https://arxiv.org/abs/2611.06441)

- **来源与日期**：arXiv v1，2026-11-04 12:43 UTC。
- **简短摘要**：Gfm4Mtsad 将预训练图基础模型适配到多变量时序异常检测：以结构—信息对齐缩小连续序列与图表征的鸿沟，以伪异常筛选和尾部证据校准修正窗口判定。作者称在两个 GFM backbone 上优于所比基线。
- **相关性判断：中高（基础模型扩展 / 诊断 Agent）**。它把 TSFM 的适用边界从预测扩至告警与传感器证据，可作为运维 Agent 的异常检测候选；但伪异常生成、图构建和阈值必须只使用历史可见数据，并单独审计误报成本。

### 2026-10-31｜[Chronos-2: A foundation model for multivariate time series forecasting](https://arxiv.org/abs/2610.41956)

- **来源与日期**：arXiv v1，2026-10-31（本周持续高优先级）。
- **简短摘要**：多变量、协变量感知 TSFM，已在 11 月 3 日晨报记录；本轮仍将其保留为上述方法的统一对照候选，而非默认最优模型。
- **相关性判断：高（Agent 可调用预测底座）**。需在同一 rolling-origin、可得协变量和推理预算下同 TimesFM-3、Tabby、统计基线比较。

## 2. 时间序列建模 Agent 最新研究

### 2026-11-04｜[ElecLoad: Adaptive Electricity Load Forecasting Guided by Multiple Events](https://arxiv.org/abs/2611.06508)

- **来源与日期**：arXiv v1，2026-11-04 13:38 UTC；作者给出 [官方代码](https://github.com/zhjai/ElecLoad)，仓库创建于 2026-11-02。
- **简短摘要**：针对网页通知、天气预警、日程等多事件，Agent 判断各事件与负荷的相关性、作用时间和交互，动态选择直接预测整段 horizon 或分段；分段时由子 Agent 预测、主 Agent 审阅并选择性修订。作者称在多个电力负荷数据集的大多数场景达到 SOTA。
- **相关性判断：高（多 Agent 预测编排 / 外部证据）**。其按事件效应切分 horizon 的机制很适合调度类时序 Agent；首要复核项是网页、预警、日程的发布时间与修订历史，以及主审阅 Agent 是否在留出集上过度选择。

### 2026-11-03｜[GlucoAgent: Personalized Glucose Forecasting from Multimodal Personal Context](https://arxiv.org/abs/2611.04126)

- **来源与日期**：arXiv v1，2026-11-03；已在昨日晨报详述。
- **简短摘要**：在每个预测点以个人传感器、饮食和健康上下文驱动程序检索、模型拟合和回测，为个体化血糖预测提供证据链。
- **相关性判断：高（工具调用型时序 Agent）**。值得和 ElecLoad 对比：前者重点是病例级工具选择，后者重点是事件效应下的时域拆分；二者都必须按 forecast origin 审计上下文可得性。

## 3. 时间序列 reasoning 模型最新研究

### 2026-11-04｜[TSFM Meets LLM: Context as Covariates](https://arxiv.org/abs/2611.05515)

- **来源与日期**：arXiv v1，2026-11-03 19:13 UTC（北京时间 11 月 4 日）。
- **简短摘要**：CoCo 让 LLM 把新闻、报告和注释的推理压缩为数值预测与置信度协变量，再输入 TSFM；训练包含面向预测改进的 GRPO 与 TSFM 微调。
- **相关性判断：高（显式 reasoning-to-covariate 接口）**。比直接让 LLM 外推数值更便于记录、校准和消融；应逐条回放文本的首发/修订时点，验证置信度是否在不同领域有效校准。

### 2026-11-04｜[From Fixed Defaults to Calibrated Activation Policies for Long-Term Time-Series Forecasting](https://arxiv.org/abs/2611.06559)

- **来源与日期**：arXiv v1，2026-11-04 14:22 UTC；[代码](https://github.com/Tt200411/From-Fixed-Defaults-to-Calibrated-Activation-Policies-for-Long-Term-Time-Series-Forecasting)。
- **简短摘要**：通过累积实验学习默认激活配置，只有证据充分才为新任务调整激活函数及其位置；作者基于 1,225 次 Informer 运行报告平均 MSE 降低 7.86%。
- **相关性判断：中高（受约束的配置 reasoning / AutoML）**。虽非语言推理模型，但“保留默认、证据不足不切换”可直接作为 Agent 的安全配置策略；应在跨数据集留出、不同模型族和计算预算下复核，避免同一实验池的选择偏差。

## 4. 光伏功率预测最新研究

### 2026-10-29｜[The Utility of Physics-Informed Machine Learning in Solar Power Production Forecasting](https://arxiv.org/abs/2610.38976)

- **来源与日期**：arXiv v1，2026-10-28 22:01 UTC（北京时间 10 月 29 日）；标注投稿至 *Solar Energy*。
- **简短摘要**：在 33 个欧洲国家、3,713 个光伏站点、逾 300 万样本上，将 ADR 物理效率模型以特征增强或残差学习方式与 TSMixer 结合。结果显示物理信息可能加快收敛，但相较纯数据驱动基线，测试精度、迁移和低样本性能未有一致提升。
- **相关性判断：高（PV 预测的负向证据 / Agent 模型选择）**。对 AutoML/Agent 很关键：物理模块应作为可检验候选而非先验必选项；评测需分地区、天气和训练样本量报告，不能用训练收敛速度替代上线收益。

### 2026-10-22｜[Reducing Multi-Horizon Photovoltaic Forecast Error through Tree-Anchored Expert Combination](https://arxiv.org/abs/2610.31248)

- **来源与日期**：arXiv v1，2026-10-22 13:27 UTC。
- **简短摘要**：以强 LightGBM 为锚点，在 15–240 分钟 PVDAQ 预测中让七类神经模型按非负、和为一的权重补充残差；作者报告共享 MAE 权重使缩放 MAE 降低 3.21%，而更复杂的动态修正未继续改善。
- **相关性判断：中高（PV 集成 / 模型路由）**。说明 Agent 的合理默认是带回退的稀疏集成，而非无条件增加专家；论文也明确未证明独立复现、天气因果或普适收益。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### 2026-11-04｜[lucasbravo00/kronos-agent](https://github.com/lucasbravo00/kronos-agent)

- **来源与日期**：GitHub `created_at` 2026-11-04 19:21 UTC，MIT；仓库描述为 Kronos TSFM 过滤 BTC 交易策略的可复现预测、微调和预注册评测，并明确记录为负结果。
- **简短摘要**：一个范围很小的研究复现实验，而非通用交易框架；其价值是保留了“模型没有带来正收益”的检验出口。
- **相关性判断：中高（TSFM 评测 harness）**。适合借鉴预注册与负结果登记；不应把单一 BTC 策略结果外推至基础模型总体能力，更不能据此直接交易。

#### 2026-11-03｜[Nikhil-creat/OrbitSentry](https://github.com/Nikhil-creat/OrbitSentry)

- **来源与日期**：GitHub `created_at` 2026-11-03 06:28 UTC，MIT。
- **简短摘要**：针对 NASA SMAP/MSL 遥测异常，组合 CNN-BiLSTM、RAG 事件回忆、带人工批准的 LangGraph 分诊流程、FastAPI 与 Docker。
- **相关性判断：中高（时序异常 Agent 原型）**。人工批准与事件检索可供运维 Agent 借鉴；它是项目原型，需先核验数据切分、RAG 文档时间边界和异常标签泄漏，再比较纯检测基线。

#### 2026-10-30（11-04 有更新）｜[Kiran-980/1ml](https://github.com/Kiran-980/1ml)

- **来源与日期**：GitHub `created_at` 2026-10-30 05:52 UTC，最近推送 2026-11-04，MIT。
- **简短摘要**：面向编码 Agent 的开源 ML skills，覆盖分类、回归、时间序列预测、聚类与可复现 notebook。
- **相关性判断：中（通用 ML/AutoML 工具包）**。可作为任务模板线索，但不是已验证的时序 Agent 或 AutoML 系统；接入前应审查其中的时序切分、搜索空间和依赖锁定。

### 光伏功率预测

- **本轮结果：无日期可确认、在本窗口内的新独立 GitHub/Hugging Face PV 预测项目。** 继续以 IMPACT、分布式 PV 预训练与上述两篇论文的官方代码状态为监控对象，避免用未核验仓库凑数。

## 6. 今日观察与行动建议

1. **把“证据不足则不改动”设为 Agent 默认策略。** 激活策略、PV 树锚集成和 `kronos-agent` 的负结果共同说明：接受新组件前必须有隔离验证与明确回退。
2. **外部上下文要进入 as-of 数据合同。** ElecLoad 和 CoCo 的真正风险在事件/文本发布时间、版本与有效区间，而非提示词本身；应记录事件发生、首次可见、预测发出与标签成熟四个时间戳。
3. **TSFM 不应只评预测。** FKA 的可检索模式库与 Gfm4Mtsad 的告警证据，适合组成“预测—异常—解释”工具层，但每层都需独立滚动回测和成本上限。

## 7. 检索与筛选说明

- 本轮直接检索/复核 arXiv API（`submittedDate`）、论文原页、官方 GitHub API 元数据与 README；关键词覆盖 `time series foundation model`、`time series agent`、`reasoning`、`harness`、`machine learning`、`AutoML`、`photovoltaic/solar power forecasting`。
- 仅保留 2026-08-06 后可确认的首发/创建/近期官方动态；不能可靠确证日期的项目不进入新增主清单。论文性能均是作者报告，未做本地复现。
- 访问时间：2026-11-06 08:13（Asia/Shanghai）。

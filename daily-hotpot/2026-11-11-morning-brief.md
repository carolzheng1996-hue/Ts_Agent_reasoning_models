# 2026-11-11 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-11 15:37–15:46 CST（Asia/Shanghai；本次为晨报补跑）。
- 时间窗口：2026-08-11 至 2026-11-11，含首尾；论文按可核验的 arXiv v1/正式公开日，项目按 GitHub `created_at`。无首发日期或仅有修订日期的材料降级说明。
- 覆盖来源：arXiv、OpenReview、官方 GitHub/API、DailyArXiv README；作者报告的指标尚未独立复现。
- 增量参照：2026-11-10 晨报。今天是周二，不生成周报。

## 今日重点

1. **可复验的基础模型结论比“新模型”更值得先看。** 11 月 9 日的期货盲测显示五类冻结 TSFM 在 160 个组合中均未胜过 no-change；这是给 Agent 的模型选择/验收层设置朴素基线、盲集和多重比较控制的直接证据。
2. **新出现的工程线索是 `CastWorld`。** 它把 agentic forecasting 的准确度、过程执行、可信行为与资源效率放在同一个 benchmark/harness 中，适合拆解其 as-of 数据边界与回放协议。
3. **光伏侧出现“负结果”和空间场建模两条路线。** 大规模实验未证明 ADR 物理模型能稳定提升 TSMixer 的日 ahead PV 预测；另一工作以区域发电场连接多站点超短期预测，报告优于单站时序基线。

## 1. 时间序列基础模型最新研究

### [2026-11-09] [Do Time-Series Foundation Models Forecast Index-Futures Returns?](https://arxiv.org/abs/2611.12141)

- 来源：arXiv v1。
- 摘要：预注册地比较 Chronos-Bolt、Chronos-2、TimesFM 2.5、Moirai 2.0、TiRex（另有 Kronos 实验）在 NQ/ES 5–120 分钟预测上的增量能力。作者在一次开启的盲集里报告 160 个模型—表示—期限组合均未胜过 no-change，并指出价格层级相关和日内 RankIC 会制造表观 skill。
- 相关性判断：**很高（TSFM / harness）**。这不是新 TSFM，但它为 Agent 的数值工具准入提供了更强的验证模板：预测原点、no-change、盲集和统计检验必须固化，不能只看高相关或单一误差指标。

### [2026-11-04] [Decouple to Reuse: Fine-Grained Knowledge Augmentation for Time Series Foundation Models](https://arxiv.org/abs/2611.05993)

- 来源：arXiv v1；亦列入 [DailyArXiv Time Series](https://github.com/zezhishao/DailyArXiv#time-series)。
- 摘要：把趋势与季节残差分别压缩进可复用 codebook，再按任务检索/门控融合，用于增强冻结 TSFM 的跨域迁移；作者在八个真实世界基准、四个 TSFM 骨干上报告优于对比方法。
- 相关性判断：**高（foundation model / retrieval）**。适合纳入 Agent 的“组件级检索”候选，而非只检索整段相似窗口；需验证 codebook 是否只由预测原点之前的数据构建。

### [2026-10-30] [Chronos-2: A foundation model for multivariate time series forecasting](https://arxiv.org/abs/2610.41956)

- 来源：arXiv v1；[官方代码](https://github.com/amazon-science/chronos-forecasting)。
- 摘要：以历史上下文推断多变量序列与异构协变量的关系，进行零样本概率预测；作者报告平均 skill score 相对强基线提高 5.2 个百分点，并覆盖传染病、宏观、碳通量与径流等科学场景。
- 相关性判断：**很高（TSFM / Agent 工具）**。可作为多站点光伏预测的数值底座；协变量必须按“在预测时刻是否已知”分层，避免 Agent 将未来天气观测当作可用上下文。

## 2. 时间序列建模 Agent 最新研究

### [2026-11-10] [Forever-Pan/CastWorld](https://github.com/Forever-Pan/CastWorld)

- 来源：GitHub 官方仓库/API；创建与最近推送均为 2026-11-10 UTC。
- 摘要：开源的 context-aware agentic time-series forecasting benchmark，声明包含 25 个数据集、八个领域、状态自适应 harness、上下文资源/工具，以及对预测质量、过程执行、行为可信度与资源效率的可复现实验。
- 相关性判断：**很高（timeseries Agent / harness）**。它的评测维度比只比较 MAE 更贴近 Agent；当前应优先核查数据版本、工具可见性和资源账本，而不能仅依据 README 主张判定性能。

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源：arXiv v1。
- 摘要：FASE 将已完成预测路径写入 episodic memory，并用延迟到达的真实标签提供在线策略信号；作者在 GIFT-Eval 的 29 个配置上报告相对最佳单一 TSFM 的 normalized MAE 降低 9.1%。
- 相关性判断：**很高（forecasting Agent / online learning）**。直接命中持续预测闭环；光伏迁移时需以严格 walk-forward 模拟标签延迟和概念漂移，防止记忆混入未来标签。

### [2026-08-22] [MetaCaster](https://github.com/D2I-Group/metacaster)

- 来源：GitHub 官方仓库；创建 2026-08-22，最近更新 2026-11-03；关联论文标题为“Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters”。
- 摘要：面向少样本和轻量时序预测器的 Agent/harness 路线，项目定位为端到端的 meta-harness 优化。
- 相关性判断：**高（Agent / few-shot AutoML）**。新光伏站或边缘设备的数据稀缺场景尤其相关；本次仅核验仓库元数据，未将未复查的论文性能写作已证实结论。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源：arXiv v1。
- 摘要：CastReasoner 将推理链限制为“提取上下文预测证据—判断未来动态—与数值 forecast prior 比对—决策”，并用多教师轨迹、难度筛选、SFT 和多目标 RL 后训练。
- 相关性判断：**很高（reasoning / contextual forecasting）**。其价值在于让自然语言 reasoning 与可检查的数值先验连接；上线前需审计每条证据的发布时间与归因，禁止事后信息进入上下文。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源：arXiv v1（DailyArXiv 中显示的 10 月 31 日为 v2 修订，不能替代首发日）。
- 摘要：以“充分性损失 + 模型可实现性”约束学习压缩表示，用门控保留关键频率模式并对齐 System-1 模型空间；作者在 13 个数据集上报告较 reasoning 模型平均减少 62.9% 推理时间。
- 相关性判断：**高（reasoning efficiency）**。适合 fast-path/slow-path：先判定压缩表示是否足够，再把困难样本交给工具调用或长推理；速度数字不等同于更好的预测可靠性。

### [2026-09-29] [TimeOmni-1: Incentivizing Complex Reasoning with Time Series in Large Language Models](https://arxiv.org/abs/2509.24803)

- 来源：arXiv v1；**超出本报三个月窗口**，仅作背景对照。
- 摘要：提出 TSR-Suite，并以感知、因果、事件感知预测和决策构成时序 reasoning 任务；论文自称是统一 reasoning 模型。
- 相关性判断：主题很高，但首发为 2025-09-29，故不作为近三个月动态或优先实验对象。

## 4. GitHub：timeseries Agent / harness / ML / AutoML

### [2026-11-11] [jiang-2007/agent-harness-kit](https://github.com/jiang-2007/agent-harness-kit)

- 来源：GitHub 官方仓库/API；创建 2026-11-11 UTC。
- 摘要：轻量、模型无关的 LLM Agent harness，含 ReAct loop、工具注册表、可插拔 provider、会话记忆与 policy guard。
- 相关性判断：**中高（通用 harness）**。非时序专用，但可借鉴模型/工具边界和会话安全策略；迁移前必须补上时间切分、预测原点及数据泄漏 gate。

### [2026-10-23] [KL363/time-series-paper-assistant](https://github.com/KL363/time-series-paper-assistant)

- 来源：GitHub 官方仓库/API；创建 2026-10-23、最近更新 2026-11-04 UTC。
- 摘要：面向时序预测论文深度解读的开源 Agent Skill。
- 相关性判断：**中（research workflow）**。可辅助文献抽取与对比，但不是预测 Agent，且不应让其摘要替代对论文原文和发布日期的核验。

### [2026-08-26] [HimnshuKumar7/timeseries-automl-studio](https://github.com/HimnshuKumar7/timeseries-automl-studio)

- 来源：GitHub 官方仓库/API；创建 2026-08-26 UTC。
- 摘要：浏览器内隐私优先的 Time-Series AutoML 原型，宣称以 Pyodide/TensorFlow.js 在 Web Worker 中训练 ARIMA、scikit-learn 与 Transformer。
- 相关性判断：**中高（AutoML / local-first）**。本地数据边界适合敏感能源数据；需补充滚动验证、置信区间和与服务端基线的性能/资源对照。

## 5. 光功率 / 光伏功率预测最新研究

### [2026-10-28] [The Utility of Physics-Informed Machine Learning in Solar Power Production Forecasting](https://arxiv.org/abs/2610.38976)

- 来源：arXiv v1。
- 摘要：在 3,713 个欧洲 PV 装置、300 万余样本上，将 ADR 光伏效率模型以特征增强和残差学习接入 TSMixer。作者发现 physics-informed 版本训练收敛略快，但在测试精度、跨区域泛化和有限数据下没有稳定优势。
- 相关性判断：**很高（PV / negative result）**。应把物理模型作为 Agent 可选择、可拒绝的候选工具，不应默认认为“物理注入”必然提升预测。

### [2026-10-12] [Constructed regional photovoltaic generation fields improve ultra-short-term distributed solar forecasting](https://arxiv.org/abs/2610.16110)

- 来源：arXiv v1。
- 摘要：SatPV-Field 将分散电站读数转成区域发电场，用历史场、卫星短波辐射引导和气象预测来推演区域状态，并指导单站预测；在 496 个站点实验中，作者报告单站 MAE 相对最佳单站时序基线约降 10.0%。
- 相关性判断：**高（PV / spatial time series）**。多站点 Agent 应把空间邻域与未来可知天气分开建模；论文是区域建模方法，尚非 Agent/reasoning 系统。

## 6. DailyArXiv 补检结论

已读取 [DailyArXiv 官方 README 的 Time Series 栏](https://github.com/zezhishao/DailyArXiv#time-series) 与 [master 原文](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)。README 标注最后更新为 **2026-11-06**，因此不能覆盖 11 月 9–11 日的新 arXiv 首发。

- **窗口内且已补充：** 2026-11-04 的 *Decouple to Reuse*（TSFM 组件级知识增强）；该日期与 arXiv v1 一致，列入主条目。
- **窗口内但非本轮主条目：** README 的 2026-10-31 *TimesJev* 是修订日；其 arXiv v1 是 2026-10-19，本文按 v1 排序并已说明版本差异。
- **超窗/日期不一致而降级：** *AdaMamba* 在 README 显示 2026-11-04，但链接为 `2604.23239v2`，v1 为 2026-04，超出窗口，不计为近三个月新研究；*TimeOmni-1* v1 为 2025-09-29，也仅作背景。
- 结论：DailyArXiv 是发现线索的补充源，日期列可能是修订日；最终纳入必须回到 arXiv v1 或官方发布页核验。

## 7. 行动建议与限制

1. 用 CastWorld/FASE 类路线时，优先建立不可变 `prediction_origin`、工具输入时间戳、真实标签到达时间和完整回放日志。
2. PV 基线至少保留单站、空间场、纯数据驱动与物理增强四类，并对每类做跨区域、阴天/晴天分层和概率校准评估。
3. GitHub 新仓库以 README/API 元数据为线索，未运行代码；论文性能均是作者报告。未确认首发日期的材料不用于“最新研究”主结论。

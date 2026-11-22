# 2026-11-22 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-22 17:13 CST（Asia/Shanghai；含 17:13 的增量复核）。
- 时间窗口：2026-08-22 至 2026-11-22（含首尾）。论文日期使用 arXiv v1 的 `published`；项目日期使用 GitHub API 的 `created_at`，无法由项目自身独立证实的能力主张均降级为线索。
- 增量参照：2026-11-20 晨报；11 月 21–22 日未检出新的、直接面向时间序列 Agent/reasoning 的 arXiv 首发论文，以下重点补入 11 月中旬遗漏和新出现的条目。

## 今日结论

1. **测试时计算正在被改写为“只能用过去验证候选”的因果选择问题。** 新的 TSFM 工作把候选预测的选择锚定在历史回测，而非未来真值；这是 Agent 编排中最应固化的泄漏防线。
2. **研究重心从“更强的历史拟合”转到非平稳下可被推翻的假设。** 组合 reasoning、增量域适配和模型发现都要求把假设、证据与逐预测原点的评估轨迹存档。
3. **光伏新增工作开始明确处理建筑遮挡、图像延迟与边缘状态。** 对实际调度而言，天气/视觉/逆变器数据的 `available_at` 与置信区间同样是模型输入契约的一部分。

## 1. 时间序列基础模型最新研究

### [2026-11-18] [A Verifier from the Past: Test-Time Compute for Time Series Foundation Models](https://arxiv.org/abs/2611.25171)

- 来源与日期：arXiv v1，2026-11-18。
- 摘要：提出以历史可用窗口的回测表现，为多种预测增强视图打分并在测试时选择/平均候选；核心约束是 forecaster 不能用未来标签验证候选。
- 相关性判断：**很高（TSFM / 因果评测工具）**。很适合成为 Agent 的候选路由器，但每个候选、回测窗与数据可得时点都必须可追溯；论文报告结果尚待独立复现。

### [2026-11-18] [Recurrent Domain Incremental Adaptation of Time-Series Foundation Models](https://arxiv.org/abs/2611.24075)

- 来源与日期：arXiv v1，2026-11-18。
- 摘要：研究 TSFM 在未知且持续变化的运行条件下，以少量标注校准样本进行循环增量适配，同时避免遗忘旧环境的表征与性能。
- 相关性判断：**高（TSFM / 漂移适配）**。适用于跨电站或设备工况迁移；应另设未见域和回放遗忘的验收门，不能以混合随机切分替代。

## 2. 时间序列建模 Agent 最新研究

### [2026-11-13] [NeoResearch: Literature- and Experience-Guided Autonomous Time Series Model Discovery](https://arxiv.org/abs/2611.18235)

- 来源与日期：arXiv v1，2026-11-13。
- 摘要：将文献证据、既往实验经验和任务假设联结起来，自动提出并迭代验证时间序列模型设计，而不是只从大规模模型/超参数空间盲搜。
- 相关性判断：**高（TS Agent / AutoML）**。与研究型 forecasting Agent 直接相关；生产使用前要限制检索来源、记录每项设计的证据与失败试验，并以 walk-forward 回测替代一次性 leaderboard 选择。

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 以 episodic memory 保存预测过程，并在标签延迟到达后更新在线策略，构造“预测—兑现—学习”的闭环。
- 相关性判断：**很高（forecasting Agent / memory）**。仍是近三个月最完整的 Agent 闭环范式之一；记忆写入时间和真值到达时间应在部署日志中分列。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-19] [Falsifiable Compositional Reasoning in Time Series Forecasting](https://arxiv.org/abs/2611.25388)

- 来源与日期：arXiv v1，2026-11-19。
- 摘要：指出常规历史验证难以区分不变耦合与暂态相关，提出把预测/推理建立在预先声明、可由数据推翻的组合假设、耦合约束与校准检验上，并在合成基准和德国日前电价上诊断失效模式。
- 相关性判断：**很高（reasoning / OOD）**。为 Agent 的“为什么信任这次预测”提供可审计结构；值得把假设登记、反证测试和分布切换标签写入 harness。

### [2026-11-16] [TRACK: Tool-Augmented Reasoning over Time Series for Fault Diagnosis in Power Management System](https://arxiv.org/abs/2611.21178)

- 来源与日期：arXiv v1，2026-11-16。
- 摘要：用时序编码器配合小语言模型生成结构化、物理约束的电力管理故障报告，并调用工具完成可核验的数值计算；作者以 rubric 评估信号忠实度、物理推理与可行动性。
- 相关性判断：**高（工具增强 reasoning / 能源时序）**。虽非功率预测，却很适合作为“预测后诊断”组件；应验证工具输入、计算结果与原始波形之间的证据链。

## 4. 光功率 / 光伏功率预测最新研究

### [2026-11-15] [Edge-Adaptive Hiera-Seg Model for Building-Integrated Photovoltaic Power Forecasting](https://arxiv.org/abs/2611.21680)

- 来源与日期：arXiv v1，2026-11-15。
- 摘要：针对建筑一体化光伏，将立面/RGB 图像、可选热信息、辐照度、组件温度、朝向、遮挡和边缘设备状态对齐进同步预测窗，并在缺帧、延迟和局部遮挡下调整特征权重。
- 相关性判断：**高（短临 BIPV / 多模态）**。对有相机的分布式电站有直接启发；数据集含模拟多建筑测试，真实场景需单独检验图像时间戳、遮挡标注与跨建筑泛化。

### [2026-10-29] [IMPACT: Inverter-Informed Multimodal Learning for Photovoltaic Generation Forecasting](https://arxiv.org/abs/2610.40418)

- 来源与日期：arXiv v1，2026-10-29。
- 摘要：融合电站历史、逆变器级空间云动态、未来太阳几何与当前气象，进行 10–110 分钟概率预测，并加入在线共形校准。
- 相关性判断：**很高（PV / 概率预测）**。可作为 Agent 的数值工具候选；须以当时可获得的云图、气象和逆变器状态复放，按天气型核验区间覆盖率。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

### [2026-11-21] [shivangkhajuria/modelsmith](https://github.com/shivangkhajuria/modelsmith)

- 来源与日期：GitHub Search API，创建及最后更新均为 2026-11-21 UTC。
- 摘要：声明可从 CSV 与自然语言目标自动设计、训练、评估并解释机器学习模型的 AutoML Agent；当前为零星标项目。
- 相关性判断：**中低（通用 AutoML 观察线索）**。可借鉴任务编排界面；未见时序切分、预测原点或 benchmark 证据，不能直接接入 forecasting 流程。

### [2026-11-20] [Lelekhoa1812/prophet](https://github.com/Lelekhoa1812/prophet)

- 来源与日期：GitHub Search API，创建 2026-11-20、最后更新 2026-11-21 UTC。
- 摘要：自述为时间序列预测 Agent，仓库星标和维护历史极少。
- 相关性判断：**低（早期 TS Agent 线索）**。在出现可复现脚本、滚动回测和数据切分说明前，仅作观察，不作为能力判断依据。

### 光伏功率预测

### [2026-11-22] [gamyfreelancer-web/Solar-Radiation-Prediction-Forecastin](https://github.com/gamyfreelancer-web/Solar-Radiation-Prediction-Forecastin)

- 来源与日期：GitHub Search API，创建 2026-11-22 UTC、最后更新 2026-11-22 UTC。
- 摘要：项目自述使用 NASA POWER 数据、周期性时间特征、气候基线和 LightGBM 预测全球/散射水平辐照度（GHI/DHI），并明确将气候基线用于避免数据泄漏。
- 相关性判断：**低（太阳辐照度预测线索，非 PV 功率模型）**。辐照度可作为光伏功率预测的外生变量；但该新建仓库尚无电站功率标签、滚动原点评测或可复现实验，不能作为 PV forecasting 基准或部署候选。

### [2026-11-20] [onurayvaz10/pvbench](https://github.com/onurayvaz10/pvbench)

- 来源与日期：GitHub Search API，创建/最后更新为 2026-11-20 UTC。
- 摘要：提供面向 25 个电站的深度学习光伏预测多站点 benchmark 代码与 Colab 校验 notebook；仓库说明不含数据。
- 相关性判断：**中高（PV benchmark / harness）**。多站点比较方向有价值；需先核实数据获取、站点/时间切分、天气协变量和许可证，再将指标用于模型选型。

## 6. DailyArXiv 补检结论

- 已直接检查 [zezhishao/DailyArXiv 的 README / Time Series 板块](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)：页面标示最后更新为 **2026-11-06**，因此不能覆盖 11 月 7 日以后的新论文。
- 板块中存在仍在三个月窗口内、与主题相关的 [Graph Foundation Models Can Become Effective Multivariate Time Series Anomaly Detectors](https://arxiv.org/abs/2611.06441)（README 收录日 2026-11-04，arXiv v1 同日）：将预训练图基础模型适配到多变量时序异常检测。其与 TSFM/诊断 Agent 有中等相关性，但不属于 forecasting/reasoning 主线，故作为补检线索而未替换正文重点。
- 同页的 *AdaMamba* 显示为 `2604.23239v2`、README 收录日 2026-11-04；首发时间超出窗口且收录日与首发日不一致，已降优先级、不纳入推荐。

## 7. 本轮检索与限制

- 覆盖 arXiv 元数据、官方 GitHub 搜索/API 与 DailyArXiv README；17:13 CST 增量 GitHub 检索仅新增一项低优先级的辐照度预测线索；未发现可核验的 HuggingFace 新增项目，故不以无日期的模型卡补量。
- 论文效果和仓库自述均为作者/维护者报告，本轮未运行或复现。项目创建时间只证明仓库出现的时间，不证明成熟度。
- 建议优先把四项事实纳入统一实验记录：`prediction_origin`、每项外生数据的 `available_at`、候选/路由版本，以及标签兑现时间；它们是将 TSFM、Agent、reasoning 与光伏预测安全接入同一 harness 的共同底座。

# 时间序列研究晨间简报｜2026-11-02

检索时间：2026-11-02 10:15–10:28（Asia/Shanghai）。严格时间窗口：**2026-08-02 至 2026-11-02**。论文日期优先采用 arXiv v1（UTC 转北京时间）；GitHub 项目日期采用 `created_at`，`pushed_at` 只作为近期活跃度提示。下述性能均为作者报告，尚未本地复现。

## 1. 时间序列基础模型最新研究

### 2026-10-29｜[Modular Bayesian Foundation Models](https://arxiv.org/abs/2610.39043)：用不确定性路由紧凑时序专家

- **来源与日期**：arXiv v1，2026-10-28 23:16 UTC（北京时间 10 月 29 日）。
- **简短摘要**：以轻量 Bayesian 时序编码器组成可扩展专家集合，并按认知不确定性对未标注输入进行专家选择。作者在七个流入数据集上报告：相较距离路由，校准和概率预测指标更好，且选中模型的存储占用更低。
- **相关性判断：高（TSFM / Agent 路由）**。其“何时选哪个预测器”的接口可直接服务于 Agent；但 OOD 判断、路由选择和预测评测须使用相互隔离的滚动时间段，避免选择偏差。

### 2026-09-21｜[$t_0$: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)：面向已知未来协变量的开放权重 TSFM

- **来源与日期**：arXiv v1，2026-09-21 13:22 UTC。
- **简短摘要**：发布 102M/256M 参数的开放权重模型，以时间轴与变量轴交替注意力处理目标历史、过去协变量和已知未来协变量，并输出分位数预测。作者报告在 GIFT-Eval 与 fev-bench 的零样本结果，并分析缺失值、长预测窗和已知未来协变量的影响。
- **相关性判断：高（TSFM / 能源预测候选）**。相比只输入单变量历史的基础模型，它更贴近天气预报、日历等特征可用的电力场景；接入 Agent 前仍需逐一审计“已知未来”特征的真实发布时间。

## 2. 时间序列建模 Agent 最新研究

### 2026-09-26｜[FASE：Self-Evolving Time-Series Forecasting Agents](https://arxiv.org/abs/2609.32689)：以已兑现结果驱动在线策略更新

- **来源与日期**：arXiv v1，2026-09-26 14:51 UTC。
- **简短摘要**：Feedback-Aware Self-Evolving agent 将过往预测实例及其随后揭示的标签转为 episodic memory，并以在线策略学习汇总排序指导；在 GIFT-Eval 的 29 个配置上评测。作者报告相对最佳单一基础模型的归一化 MAE 降低 9.1%。
- **相关性判断：高（时序 Agent / 闭环学习）**。它明确处理“预测发出后、标签滞后到来”的生产时序；需重点复验经验检索是否穿越 forecast origin，以及在线策略的灾难性遗忘与概念漂移边界。

### 2026-10-28｜[Vendster](https://arxiv.org/abs/2610.38292)：评测预测工具质量怎样改变 LLM Agent 决策

- **来源与日期**：arXiv v1，2026-10-28 05:23 UTC；[官方代码](https://github.com/amazon-science/Vendster)。
- **简短摘要**：在 M5 需求序列生成的买卖双方谈判中，受控替换预测偏差与区间宽度，测量 LLM Agent 的下游决策变化。作者发现常见准确率指标与谈判结果不显著对应，而偏差方向和 Agent 对预测的反应性更关键。
- **相关性判断：高（Agent harness）**。值得借鉴的是“固定 Agent、干预预测工具输出、观测决策效用”的验收法；谈判模拟不等同于能源调度，应在目标业务中重新定义收益与风险。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-19｜[TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)：以充分表征压缩换取低延迟推理

- **来源与日期**：arXiv v1，2026-10-19 08:26 UTC。
- **简短摘要**：针对长链式时序推理的 token 与延迟成本，先以门控机制学习保留关键频率模式的压缩表示，再与快速 System-1 模型表征对齐。作者在 13 个数据集上报告较其微调 reasoning 基线更高表现及更低推理时间。
- **相关性判断：高（时序 reasoning / 线上延迟）**。为实时 Agent 提供“何时无需长推理”的模型化方向；其“优于 reasoning model”的结论依赖所选基线与任务定义，部署时须同时报告延迟、错误类型和置信度校准。

### 2026-10-28｜[Vendster](https://arxiv.org/abs/2610.38292)：把 reasoning 的价值转为可干预的下游效用

- **来源与日期**：arXiv v1，2026-10-28 05:23 UTC。
- **简短摘要**：该工作不是数值 reasoning 主干，而是以受控预测输入测量 Agent 的推理/行动轨迹对偏差与不确定性的敏感度，避免把预测误差直接等同于业务价值。
- **相关性判断：高（reasoning 评测）**。适合做时序 Agent 的 harness：固定信息可用时点，分别干预点预测、区间、偏差方向，最终以任务效用和安全约束而非 RMSE 单独判定。

## 4. GitHub：timeseries Agent、harness、ML、AutoML 项目

日期均为 GitHub UTC 创建时间；本轮读取仓库元数据与公开项目说明，未执行代码。

### 时间序列 / Agent / harness

### 2026-10-20｜[autonomous-volatility-forecasting](https://github.com/Dhruv-cs50/autonomous-volatility-forecasting)

- **摘要**：波动率预测 harness，项目说明将 `load_panel()` 设为唯一读数路径，以截断等价性做 point-in-time 测试，并使用 model confidence set、预注册 holdout 与全量 trial 计数约束评测。
- **相关性判断：高（harness）、领域直接性中**。虽然目标是金融波动率，其机械化防泄漏和不可见 holdout 的设计很适合迁移到通用时序 Agent；模型与数据域不能直接外推。

### 2026-09-07｜[agentic-forecast-review](https://github.com/rahulyg/agentic-forecast-review)

- **摘要**：项目定位为“代码负责数值、模型只作有界选择”，提供证据链接的 Agent 循环与离线评估套件；截至本次检索仍在更新（最新推送 2026-11-02）。
- **相关性判断：高（Agent / 可审计 harness）**。这种职责分离可降低 LLM 擅自计算或改写结果的风险；仍需逐项检查其数据切分、证据绑定和离线评测是否覆盖目标业务的多步预测。

### 2026-10-02｜[timeseries-forecasting-benchmark](https://github.com/franciscogamarra10/timeseries-forecasting-benchmark)

- **摘要**：声明比较基础模型、AutoML 与现代 tabular 方法的多序列预测 benchmark。
- **相关性判断：中高（TSFM / AutoML 对照）**。可作为选型清单起点，但仓库创建后活跃度有限；在未核实 rolling-origin、调参预算和数据版本前，不应把其分数当作模型结论。

### 光伏功率预测

### 2026-10-16｜[photovoltaic-forecast-optimization](https://github.com/ThomasSerna/photovoltaic-forecast-optimization)

- **摘要**：为哥伦比亚农村学校的光伏能源调度，在共享 MPC 控制器下比较 beta-based 与 Chronos-2 预测。
- **相关性判断：中高（光伏预测 / 下游决策）**。将 TSFM 预测与调度控制放在同一实验是有价值的；单一场景与天气、负荷、控制器假设限制了泛化，需复核预测发布时点和成本函数。

### 2026-11-01｜[pvforecast-go](https://github.com/kviatkovsky/pvforecast-go)

- **摘要**：Go 实现的物理型 PV 功率预测，组合 NREL SPA、Perez 与 PVWatts，并声明以 pvlib 校验。
- **相关性判断：中（物理基线 / 工程组件）**。它不是 Agent 或 TSFM，但适合作为可解释的物理基线或 Agent 工具；接入前应使用站点参数、天气预报延迟和实测功率进行独立验证。

## 5. 光伏功率预测最新研究

**本轮论文空结果（已说明原因）**：在严格窗口内，未检索到日期与首发来源均可确认、且直接聚焦光伏功率预测的新论文条目。为避免将相邻能源或旧版论文冒充为新增研究，本栏仅保留上述两个可复查项目；下轮优先补检 arXiv、OpenReview 与能源领域会议的首发页面。

## 6. 观察与行动建议

- **研究主线**：TSFM 的关键竞争已从单一零样本误差延展到协变量可用性（$t_0$）、专家路由校准（Modular Bayesian）与部署延迟（TimesJev）。
- **Agent 评测主线**：FASE 将已兑现标签纳入闭环学习，Vendster 与新 harness 项目则强调预测误差不等于任务效用；建议在自己的系统中同时追踪 rolling-origin 误差、泄漏测试、决策效用和风险约束。
- **本轮限制**：GitHub 的 `created_at` 不代表成熟度，项目说明中的机制和性能均需复现；未以 GitHub 推送时间替代论文首发时间。

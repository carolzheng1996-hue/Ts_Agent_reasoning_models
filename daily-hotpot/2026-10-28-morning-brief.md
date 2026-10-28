# 时间序列 Agent / Reasoning 晨间简报 · 2026-10-28

- **检索时间**：2026-10-28 09:00–09:07，北京时间；周三，本次不生成周报。
- **滚动窗口**：2026-07-28 至 2026-10-28（含首尾）。论文以原始页面 v1 日期判断首发，GitHub 以仓库创建日期判断新项目；源日期采用 UTC 日历日，各栏目按日期倒序排列。
- **增量基准**：上次自动运行时间为 10 月 25 日；本地最近已有晨报为 10 月 23 日。下文标明新近发布、首次补录与持续跟踪，避免把本次发现等同于今天发布。
- **证据范围**：已读论文摘要及版本记录、入选项目 README；四个项目额外核对文件树。未运行外部代码、未复现作者实验。性能数字均为作者报告。

今日优先看 **TimeWorld 的动作条件建模、带接受门控的风电残差 Agent、基础模型动态解码**。工程侧优先跟踪 **Timestral Studio 与 DMU-NACI**：前者便于把预测器接入 Agent，后者强调延迟反馈和残差来源，但尚不支持从原始数据完整复现。

## 1. 时间序列基础模型最新研究

### 2026-10-26｜Self-Supervised Pretraining for PHM：迁移收益具有任务依赖性【新近发布】

- **来源**：[arXiv 原文及 v1 记录](https://arxiv.org/abs/2610.35280)。
- **摘要**：在 47 个设备健康管理数据集上研究自监督预训练，整库留出 11 个数据集。故障分类明显受益，但剩余寿命估计未稳定超过从头训练；自监督损失也不能可靠预测下游表现。
- **相关性：高，基础模型评估**。适合用于设计 Agent 的模型晋级标准：必须依据目标任务的独立验证表现，不能仅凭预训练损失。集中式与联邦式对比存在学习率日程混杂、每种配置仅一次预训练等限制。

### 2026-10-25｜Dynamic Multi-Step Decoding for Time-Series Foundation Models【上次运行后发布】

- **来源**：[arXiv 原文](https://arxiv.org/abs/2610.34409)，v1 为 10 月 25 日 16:10 UTC，晚于上次运行。
- **摘要**：冻结预测主干，训练轻量选择器按输入选择预测分段方案；动态规划缩小候选空间，五个选择器一致时采用其选择，否则退回一次性预测。在 Chronos-2 和 Moirai 上报告点预测改进。
- **相关性：高，基础模型推理策略**。适合成为 forecasting harness 的可控决策模块；选择器使用目标任务历史窗口训练，因此不能把整体方法称为完全零样本。论文只主张点预测收益，尚未证明概率校准改善。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-26｜Guarded Agent-in-the-Loop Residual Adaptation for Evolving Wind Power Regimes【新近发布】

- **来源**：[arXiv 原文](https://arxiv.org/abs/2610.34968)。
- **摘要**：冻结时序主干，由 Agent 解读外部天气场景并路由到小型残差专家；只有近期已观测误差支持时才启用修正，新专家经验证后才能加入。作者报告九种主干、五个预测提前量上的误差下降。
- **相关性：高，Agent + 能源预测；对光伏为迁移线索**。可借鉴“场景解释—残差修正—接受门控”闭环。研究对象是风电，不是光伏；候选场景晋级仍是受控实验，未评估长期无人值守部署。移植时需重新检查天气信息时点与标签成熟延迟。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-26｜TimeWorld：动作条件的多模态时序世界模型【新近发布】

- **来源**：[arXiv 原文](https://arxiv.org/abs/2610.34797)，页面标注 under review。
- **摘要**：提出覆盖七个真实数据集的 TSWM-Bench，用记录的动作—结果数据构造文本干预；通过原型引导潜变量调制和动作对比学习，使预训练预测器显式响应动作条件。
- **相关性：高，foundation model + 决策推理**。适合研究计划、运维或调度动作如何改变预测轨迹。它是已有主干的适配框架；观察到的动作—结果关联不自动构成可识别的因果效应，需结合下一条审计研究阅读。

### 2026-10-24｜Benchmarking System One Models for Time-Series Decision Making: A Case Study of Jev【首次补录】

- **来源**：[arXiv 原文](https://arxiv.org/abs/2610.33410)。
- **摘要**：将部分连续预测任务离散化为决策，评测 Jev 1.13.0 的分类、事件类型与方向判断。显式模式和事件任务表现较好，但多种数值序列任务和股票方向预测接近随机区分水平。
- **相关性：中高，推理评测**。提示应分别报告排序能力、离散决策质量与连续预测误差；这是特定模型案例研究，不是新时序基础模型，也不是通用 reasoning 能力证明。

### 2026-10-22｜Forecasting Associations, Not Interventions：协变量基础模型因果审计【首次补录】

- **来源**：[arXiv 原文](https://arxiv.org/abs/2610.31869)。
- **摘要**：从理论、受控结构模型与内部表征检查带未来协变量的预测器是否回答了真正的干预问题。作者发现多个 TSFM 仍受混杂影响，干预后训练可以缩小部分差距。
- **相关性：高，what-if reasoning 的验证边界**。未来协变量输入接口不等于因果模拟器；用于光伏储能调度或检修方案比较前，应明确可识别性、干预数据和预测精度代价。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

日期为 GitHub `created_at` 的 UTC 日期；推送时间只说明活动，不能证明新增功能。下列功能主要据 README，文件树检查不等于实现正确性审计。GitHub 与 HuggingFace 指向同一模型时不重复列项。

### 4.1 时间序列

#### 2026-10-27｜BalTac/timestral-studio【新项目，高相关】

- **来源**：[仓库与 README](https://github.com/BalTac/timestral-studio)；创建于 23:49 UTC，即北京时间 10 月 28 日 07:49，最近推送为 10 月 28 日 00:15 UTC。
- **摘要**：围绕 Timestral 提供概率预测、留出回测、多模型比较、协变量场景及 Agent 工具发现接口。文件树确认存在 `app.py`、前端和测试文件。
- **判断**：适合做预测工具服务原型，不能据 README 认定它已实现自主模型研究闭环。场景接口不应直接解释为因果反事实；延迟、覆盖率和测试通过情况未经本次验证。第三方 README 的许可概述也不能替代官方许可：[官方仓库](https://github.com/mistralai/timestral)明确区分推理代码 Apache-2.0 与权重 Modified MIT。

#### 2026-10-27｜Kedar-V/automl-research-lab【新项目，观察级】

- **来源**：[仓库与 README](https://github.com/Kedar-V/automl-research-lab)；创建于 01:36 UTC。
- **摘要**：面向教学的 LangGraph 多 Agent AutoML 演示，设计了隔离留出集、微服务通信与实验流程图。
- **判断**：README 明确当前 B2 阶段依赖 mock SSE，真实实验服务尚待 Phase C。可参考编排与界面设计，不能作为已验证 AutoML 系统或时间序列预测成果推荐。

#### 2026-10-25｜csalamando/harness-mllc【新项目，中高相关】

- **来源**：[仓库与 README](https://github.com/csalamando/harness-mllc)；创建于 19:27 UTC。
- **摘要**：围绕表格 ML 实验记录假设、候选晋级、冠军模型沿革、一次性留出评估及交付证据。文件树确认存在 holdout、ledger、gates、evaluation 等模块与测试。
- **判断**：可借鉴 Agent 实验治理与证据保存；尚未核实时间序列专用的滚动切分、标签延迟和协变量可用性控制。作者声明的测试数与机制效果未经本次执行验证。

### 4.2 光伏功率预测

#### 2026-10-27｜chaos97yuan/DMU-NACI【新项目，高相关；复现范围受限】

- **来源**：[仓库与 README](https://github.com/chaos97yuan/DMU-NACI)；创建于 13:11 UTC。
- **摘要**：TCN 均值分支、GRU 误差尺度分支、来源受控残差池与自适应共形校准，用于 15 分钟提前量的跨年光伏预测区间。README 明确将反馈延迟三个步长，仅使用成熟标签；文件树确认存在模型权重归档。
- **判断**：适合研究光伏概率预测及在线校准。关联稿件仍处于拟投稿准备阶段，独立论文发布日期**不确定**，因此只列新代码项目。作者披露早期数据窗口生成依赖未全部公开，不能从原始 CSV 完整端到端复现；本次未核验其逐位一致性声明。

#### 2026-10-26｜MariusTechLab/arome-solar-forecast【新项目，高相关】

- **来源**：[仓库与 README](https://github.com/MariusTechLab/arome-solar-forecast)；创建于 14:37 UTC，10 月 27 日仍有推送。
- **摘要**：把 Météo-France AROME / Open-Meteo 气象预报转为 Home Assistant 光伏功率和能量预测；README 描述按历史归档预报与实发电量学习逐小时修正，并可寻找电器运行窗口。文件树存在预测、修正和集成模块。
- **判断**：是预测服务到用能决策的工程样例，未证实使用 LLM Agent。下一步应核查预报归档时间、时区、功率与电量转换，以及模型基准是否使用相同预报版本。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-10-22｜Reducing Multi-Horizon Photovoltaic Forecast Error through Tree-Anchored Expert Combination【首次补录】

- **来源**：[arXiv 原文](https://arxiv.org/abs/2610.31248)。
- **摘要**：以 LightGBM 为锚点，对七种神经预测器进行非负、和为一的组合，允许无益专家权重为零；研究 15–240 分钟提前量。两套同地 PVDAQ 系统的历史评估中，共享 MAE 权重相对单树降低 scaled MAE 3.21%。
- **相关性：高，光伏专家选择**。可为 Agent 的候选池设计提供强基线。作者明确复用了已查看的评估区间，新增有界神经修正也未进一步降低 MAE；不能称为独立复现或普适增益。

### 2026-10-12｜SatPV-Field：区域发电场驱动分布式光伏预测【持续跟踪，非新增】

- **来源**：[arXiv 原文](https://arxiv.org/abs/2610.16110)，已在 10 月 15 日晨报出现。
- **摘要**：把站点发电序列组织为区域图像式发电场，融合卫星辐射指导和气象预报，先预测区域再指导单站。实验覆盖 496 个系统，其中 50 个为留出目标站。
- **相关性：高，光伏时空预测**。适合与单站 foundation model 对照，但需审计未来辐射与气象输入在预测起点的实际可得性；它本身不是 Agent 系统。

**光通信接收光功率**：本轮检索未核实到窗口内可新增的直接预测论文。命中的 [FSO 耦合光功率 TCN 预测](https://opg.optica.org/ao/abstract.cfm?uri=ao-65-19-H43)检索日期线索在窗口外，未纳入主条目；不以光伏、风电或光网络优化替代这一方向的空结果。

## 6. DailyArXiv 必查结论

已完整读取 [DailyArXiv master README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)及其 [原始内容](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)。页面标注 **Last update: 2026-10-28**；`Time Series` 板块有 **78 条论文**（不含表头），最新条目日期为 **10 月 26 日**。因此 README 更新时间不能当作论文首发日期。

- **确认有相关主题并已补充**：PHM 自监督迁移、风电残差 Agent、TimeWorld、动态多步解码、Jev 时序决策与协变量因果审计，均在窗口内且已核对 arXiv v1。
- **日期冲突，降级排除**：[EF-LLM](https://arxiv.org/abs/2411.00852)在 README 标为 2026-10-26 / v3，但本轮 arXiv 页面显示 v1 为 **2024-10-30**，可见最新记录为 2024-12-24 / v2。首发超窗，且两源版本不一致，不能据聚合表当作新论文。
- **旧作修订，排除**：[Sliding-Window Signatures](https://arxiv.org/abs/2510.12337)是 **2025-10-14** 首发、2026-10-26 v2；[Mathematical Reasoning via Intervention-Based Time-Series Causal Discovery](https://arxiv.org/abs/2605.07600)是 **2026-05-08** 首发、10 月 25 日 v2。后者重点还是数学概念激活，不宜仅凭标题归为新时序预测 reasoning 模型。
- **语义过滤**：板块中的 Agent-Based Models 仿真参数推断，不自动等于 LLM 时间序列建模 Agent；异常检测、压缩等邻近论文未全部展开。

## 7. 检索记录与下一步

- **论文检索**：arXiv 的 time series / foundation / agent / reasoning / photovoltaic / optical power 组合；OpenReview、ACL Anthology、NeurIPS、ICML/PMLR、ICLR、KDD、AAAI 官方域名定向搜索。部分结果是早期论文或会议年标签，未确认新的窗口内首发就不晋级；本轮不是全库穷尽检索。
- **项目检索**：GitHub Search 三个月创建窗口，以及 10 月 24–28 日增量窗口；后者返回 time-series agent 3 个、automl agent 4 个、machine learning harness 2 个、photovoltaic forecasting 7 个候选，按更新时间取样并以创建日期重新排序。宽窗口首次查询的排序参数不可靠，未据其返回顺序宣称“最新排名”；timeseries agent 的一次请求受限。入选项目均读取 README；Timestral Studio、harness-mllc、DMU-NACI、AROME 项目核对了文件树。
- **HuggingFace / 官方项目页**：检查 Timestral 模型生态线索；与已知官方模型及新包装项目去重，未将权重更新时间记为新模型发布。
- **AI HOT**：使用技能补检，返回六条线索，未新增直接相关条目；旧接口提示 10 月 31 日停用，后续需更新本地技能。未将聚合摘要当作论文原始证据。
- **建议优先验证**：① 动态解码选择器的训练/最终测试隔离；② 风电残差 Agent 的标签成熟与门控时点；③ TimeWorld 的动作响应能否通过可识别因果测试；④ DMU-NACI 缺失数据构建依赖及跨年校准；⑤ Timestral Studio 的接口、概率覆盖率与未来协变量契约。

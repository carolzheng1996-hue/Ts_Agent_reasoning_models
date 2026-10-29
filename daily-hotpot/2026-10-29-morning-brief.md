# 时间序列研究晨间简报｜2026-10-29

检索时间：2026-10-29 08:00–08:35（Asia/Shanghai）；严格窗口：2026-07-29 至 2026-10-29。条目以 arXiv 的 **v1 提交日期**、官方页面发布日期或 GitHub `created_at` 为准；更新时间不替代首发日期。相较 10 月 28 日晨报，今日可独立确认的主要增量是 Timestral 的 arXiv 技术报告、Pneuma 工业时序基准，以及两项需谨慎使用的新 GitHub 工程。

今日应优先看：**Timestral 的已知未来协变量契约是否能被 Agent 安全调用**，以及 **Pneuma 是否能作为预测—异常检测—维护决策闭环的外部测试集**。直接面向时间序列 Agent / reasoning 的新首发论文未确认，不以通用 Agent 新闻填补空缺。

## 1. 时间序列基础模型最新研究

### 2026-10-27｜Timestral：概率预测 TSFM 的正式技术报告【本轮新增归档】

- **来源**：[arXiv v1](https://arxiv.org/abs/2610.37585) · [Mistral 官方发布](https://mistral.ai/news/timestral/) · [代码](https://github.com/mistralai/timestral) · [权重合集](https://huggingface.co/collections/mistralai/timestral)。arXiv v1 为 10 月 27 日 17:25 UTC；官方产品发布为 10 月 15 日，故这不是新的模型发布。
- **摘要**：技术报告给出 5M、28M、123M、209M 四种规模；用 Decoupled Horizon Forecasting、因果架构下的已知未来协变量和“合成预训练—真实/合成后训练”两阶段流程进行概率预测。作者报告在 GIFT-Eval、TIME、fev-bench 上领先。
- **相关性：高，TSFM / Agent 预测工具**。已知未来协变量接口很适合 Agent 传入已锁定的日历、排程或数值天气预报；但必须将“预测时已知”与事后观测严格分开。排行榜和作者性能结论未在本轮复现，权重许可仍应以官方模型页为准。

### 2026-10-27｜Pneuma：真实航空预测维护时序基准【本轮新增】

- **来源**：[arXiv v1](https://arxiv.org/abs/2610.37563)。v1 为 10 月 27 日 17:09 UTC。
- **摘要**：公开在役飞机引气系统数据，约 9.2 亿多变量时间步、四种机型和九类经维护记录验证的故障情景；统一提供预测、监督故障分类和无监督异常检测任务，并比较 25+ 个模型。
- **相关性：中高，TSFM 评测 / Agent 运维闭环**。它能检验 Agent 从预测误差转向异常证据与维护动作时是否仍稳健，尤其适合标签稀缺、类别不均衡与机型转移。它是数据集与评测，不是基础模型或自主 Agent；论文的“额外上下文示例有收益”不能外推成所有 in-context 学习均有效。

### 2026-10-26｜PHM 自监督预训练：迁移收益具有任务依赖性【持续跟踪】

- **来源**：[arXiv v1](https://arxiv.org/abs/2610.35280)。
- **摘要**：在 47 个设备健康管理数据集上整库留出 11 个数据集评估自监督预训练。故障分类收益明显，而剩余寿命估计未稳定优于从头训练。
- **相关性：高，TSFM 选择与评测门控**。应让 Agent 按目标任务的独立留出表现选择模型，不能以预训练损失或单一迁移案例晋级。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-26｜Guarded Agent-in-the-Loop Residual Adaptation for Evolving Wind Power Regimes【持续跟踪】

- **来源**：[arXiv](https://arxiv.org/abs/2610.34968)。
- **摘要**：冻结时序主干后，Agent 解读外部天气场景并路由至残差专家；近期成熟误差不足时不启用修正，新专家须经验证才可加入。
- **相关性：高，时序 Agent + 能源预测**。其中“场景解释—残差修正—接受门控”可用于光伏或工业预测系统；研究对象是风电，迁移时仍要审计 NWP 发布时点、标签成熟延迟与长期无人值守风险。

### 2026-10-23｜MAPS：模型无关的任务可预测性度量【持续跟踪】

- **来源**：[arXiv](https://arxiv.org/abs/2610.33209)。
- **摘要**：以协变量信息量量化不同回看窗口、预测跨度下的任务可预测性，并与六种度量比较。
- **相关性：中高，Agent 搜索预算 / harness 分层**。适合先把昂贵调参预算投向更可预测、数据契约更明确的任务；该用法是工程推论，论文未证明它能直接提升 Agent 规划质量。

**本轮空结果**：截至检索截止，未确认 10 月 27 日之后具有可核实 v1 日期、且直接提出时间序列建模 Agent 的新增论文。OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI 的定向检索也未发现应取代以上条目的更晚官方首发。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-26｜TimeWorld：动作条件的多模态时序世界模型【持续跟踪】

- **来源**：[arXiv](https://arxiv.org/abs/2610.34797)。
- **摘要**：提供 TSWM-Bench，在记录的动作—结果轨迹上构造文本干预；通过原型引导的潜变量调制及动作对比学习，使预测器响应动作条件。
- **相关性：高，决策 reasoning / foundation model**。适于探索运维或调度行动如何改变预测轨迹；观测到的动作—结果关系不自动具有因果可识别性，不能直接当作反事实决策器。

### 2026-10-24｜Benchmarking System One Models for Time-Series Decision Making【持续跟踪】

- **来源**：[arXiv](https://arxiv.org/abs/2610.33410)。
- **摘要**：将连续序列任务转化为决策，评测 Jev 1.13.0 的分类、事件与方向判断；部分显式模式任务较好，而多种数值序列与股票方向任务接近随机区分。
- **相关性：中高，reasoning 评测**。说明应分别汇报连续预测误差、排序与离散决策质量；是特定模型的案例评测，不是通用时间序列 reasoning 能力证明。

### 2026-10-19｜TimesJev：面向快速时序推理的 System-1 压缩【持续跟踪】

- **来源**：[arXiv v1](https://arxiv.org/abs/2610.26002)。
- **摘要**：通过保留关键频率的门控压缩，将时序表示对齐到快速模型嵌入空间，以降低长链推理成本。
- **相关性：高，reasoning 延迟预算**。若用于 Agent，应额外测试稀有事件、突变与低频结构是否被压缩丢失，不能只以平均准确率判定证据充分。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

日期为 GitHub `created_at`（UTC）；`pushed_at` 仅表示活动，不能证明新增功能。README 与文件树检查不等于运行验证。

### 4.1 时间序列 / AutoML / harness

#### 2026-10-28｜sheldonshi115/AutoFineTuning【线索级，直接相关】

- **来源**：[GitHub](https://github.com/sheldonshi115/AutoFineTuning)。创建 13:41 UTC；仓库描述为“文本增强、面向特定领域的时间序列基础模型 Agent 自动微调框架”。
- **摘要**：名称和仓库描述直接命中 TSFM + Agent 微调主题。
- **判断：相关性高、证据等级低**。默认分支的 README 原始入口返回 404，且创建与最后推送时间几乎相同；本轮未能核实实现、数据切分、真实模型调用或评测协议，因此仅作为待复查线索，不能当作可用 harness 或研究复现代码。

#### 2026-10-28｜akshay-data-ai/fraud-automl-agent【新项目，中等相关】

- **来源**：[GitHub](https://github.com/akshay-data-ai/fraud-automl-agent)。创建 13:19 UTC。
- **摘要**：Streamlit 二分类 AutoML 演示，README 声明训练期预处理、验证集选模、一次性测试；可选择按时间列的 60/20/20 切分，并限制时间步不被拆散。
- **判断：AutoML / harness 相关性中高，时间序列直接性中**。其显式时间列与泄漏控制值得借鉴；任务是欺诈分类，不是预测，且没有自动 HPO 或时序滚动回测，不能作为 forecasting Agent 的验证证据。本轮未执行该项目。

#### 2026-10-28｜AyushSaki/AutoML-Agent-Lab【新项目，观察级】

- **来源**：[GitHub](https://github.com/AyushSaki/AutoML-Agent-Lab)。创建 19:46 UTC。
- **摘要**：本地 Flask 工作台，含 CSV/Excel 上传、数据剖析、分类/回归候选比较，以及可选 Ollama 解释。
- **判断：通用 AutoML 相关性中，时序相关性低**。README 未描述时间切分、滚动回测或 Agent 自主实验闭环；宜作为界面与本地解释集成线索，不应被列为时间序列 Agent 成果。

### 4.2 光伏功率预测

**本轮空结果**：GitHub 的 `photovoltaic forecasting` 当日创建查询触发未认证 API 限制（403），未将“未返回”表述为生态不存在。未确认可核实日期的高相关新光伏工程；继续关注 [DMU-NACI](https://github.com/chaos97yuan/DMU-NACI) 的成熟标签延迟、跨年校准与数据构建依赖。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-10-22｜Tree-Anchored Expert Combination：多提前量光伏专家组合【持续跟踪】

- **来源**：[arXiv](https://arxiv.org/abs/2610.31248)。
- **摘要**：用 LightGBM 作锚点，对七种神经预测器进行非负、和为一的组合，并允许无益专家权重为零；覆盖 15–240 分钟提前量。
- **相关性：高，Agent 候选模型池**。可用于为 Agent 提供受约束的专家选择基线；作者使用已查看评估区间来拟合权重，不能视为独立泛化证明。

### 2026-10-20｜分布式光伏 Foundation-Style 预训练【持续跟踪】

- **来源**：[arXiv](https://arxiv.org/abs/2610.27763)。
- **摘要**：把历史功率、气象、未来 NWP 与时间编码统一为序列补全任务，在 479 个站点上进行空间留出评估。
- **相关性：高，领域 TSFM**。对冷启动与跨站泛化有价值；复现时需确保使用预测起点可获得的历史 NWP 版本，不能以事后再分析资料替代。

## 6. DailyArXiv、AI HOT 与来源核验

- [DailyArXiv master README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 标注 **Last update: 2026-10-29**，`Time Series` 最新可见日期为 **2026-10-27**；Timestral 与 Pneuma 已据各自 arXiv v1 再核验。聚合页更新时间不作为论文发布日期。
- arXiv Export API 的全量关键词查询受到 429 限流；本报改用可访问的单篇官方记录、DailyArXiv 和官方网站做交叉核验，未把搜索摘要作为唯一证据。
- 依 AI HOT 技能拉取最近 7 日精选论文流，共 16 条；没有直接时间序列 foundation model、Agent、reasoning 或光伏预测新增，因此未硬性纳入主栏目。
- GitHub 检索覆盖 `time series agent`、`timeseries agent`、`automl agent`、`machine learning harness` 与 `photovoltaic forecasting` 的增量候选。最后一项遭遇 403，已如实披露；其它入选项均重新核对创建日期和 README / 元数据。

## 7. 建议的下一步验证

1. 用严格的“预测时已知协变量”契约复核 Timestral 的情景接口，特别是天气预报版本与发布时刻。
2. 以 Pneuma 设置跨机型、故障成熟延迟和不均衡评估，检验预测—异常—维护 Agent 是否在同一时间线无泄漏。
3. 等待 AutoFineTuning 补齐 README 或代码后，再检查微调数据切分、文本信息时点及基础模型权重许可；当前不应下载或运行。
4. 对 fraud-automl-agent 的“按时间”模式补充滚动起点回测与预测提前量定义，之后才可迁移至一般时序 harness。

# 2026-09-10 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-10 08:32–08:43 CST；下午增量复核 15:30–15:37（Asia/Shanghai）。三个月窗口：2026-06-10 至检索时点。论文按 arXiv 首发或出版商公开发表日期筛选，版本更新单独标明；GitHub 按创建时间筛选，最近推送仅代表活跃度。下文来源时间均为 UTC。今天周四，不生成周报。

增量参照：2026-09-09 晨报，包含其下午补检。**新增发现不等于今天发布**；持续跟踪条目不重复计新。按项目规则保留光伏和 HuggingFace 补检。

## 今日重点

- **下午新增：SDD 合成数据蒸馏**（9 月 9 日首发），把已知生成过程的条件预测分布用于训练目标；是今天最值得优先阅读的 TSFM 方法增量。
- **下午新增：中文时序分析 Agent**（9 月 10 日创建），代码目录支持分析、记忆与报告质检；另一个维护 Copilot 候选实际仅有 README，已降级。

- 新增发现 **NOAH**（9 月 8 日）：多模态、非规则时间的纵向患者模型，值得关注时间表示，但不是已验证的通用预测 Agent。
- 新增 **Time-Series-Diagnostic-Agent** 与 **nse-multi-agent-trading**（均 9 月 9 日创建）：前者以确定性工具路由为基线，后者报告多 Agent 未超过买入持有的实验结果。重点在可检查的证据接口与消融设计，性能尚未复现。
- 新增血糖事件预测的输入表示研究（9 月 8 日）：更多上下文不一定改善效果；归为 reasoning 相邻评测，不包装成新推理模型。
- 光伏补检确认 9 月 3 日综述，并复核 9 月 8 日修订的日前预测流水线：随机日折叠与滚动验证给出的收益差异很大。

## 1. 时间序列基础模型最新研究

### [2026-09-09] Distillation of Synthetic Data for Time Series Foundation Models — 下午新增

- 日期与来源：arXiv v1 2026-09-09 01:15:46；[官方论文](https://arxiv.org/abs/2609.09586)。
- 摘要：提出 synthetic data distillation（SDD），将合成轨迹的条件预测分布用于损失目标，而非只监督一次随机实现的未来观测。作者证明其保持随机梯度期望、降低协方差；在 4M–2.5B 参数模型的高斯过程数据实验中，报告达到相当或更低验证损失所需迭代减少 10%–40%。
- 相关性：TSFM 预训练高、Agent 数据生成中高、显式 reasoning 低。适合探索合成数据生成器能否同时提供分布监督；理论和实验依赖相应生成过程与目标条件，不能直接承诺真实光伏预测提升。只核验摘要和首发记录，未复现。


### [2026-09-08] NOAH: Learning the Full Patient Journey. A Longitudinal Multimodal Time-Aware Model for Representation and Forecasting — 新增发现

- 日期与来源：arXiv v1 2026-09-08 17:56；[官方论文](https://arxiv.org/abs/2609.09140)。
- 摘要：以时间感知生成式 Transformer、双向时间整合和变分潜空间建模患者状态，结合医学图像、数值时序、分类事件及文本记录。作者使用 MIMIC 系列中约 5.59 亿事件、29.9 万患者的数据，支持自回归状态预测与可选时间控制。
- 相关性：多模态时序 foundation model 高，直接 Agent/reasoning 中低。可借鉴不规则事件与连续信号的统一表示；医疗域结果不能外推成能源预测效果，反事实模拟也不等同于因果识别已成立。本轮核验摘要与版本元数据，未确认权重开放和跨域通用性。

### [2026-09-08] IPM-FM — 持续跟踪

- 日期与来源：arXiv v1 2026-09-08 07:43；[官方论文](https://arxiv.org/abs/2609.08375)。
- 摘要：自监督 Informer 表征配合共识特征筛选、滞后回归头与校准 MC dropout，服务工业软测量及少标签适配。
- 相关性：工业 TSFM 高，Agent 中。适合作为预测工具与不确定性输出接口的参考；证据主要来自单类工业装置，尚不能证明跨域基础能力。昨日已收录，本轮返回仍为 v1。

### [2026-09-08] PV-Surgery：多变量预测的可靠性感知梯度修正 — DailyArXiv 下午补充，相邻训练研究

- 日期与来源：arXiv v1 2026-09-08 10:38:13；[官方论文](https://arxiv.org/abs/2609.08554)。这里的 PV 指 Per-Variable，不是 photovoltaic。
- 摘要：观察平均损失掩盖各变量梯度差异，利用输出侧信号构造梯度代理，按可靠性选择层并修正共同方向。作者在五类骨干、七个数据集、四个预测时距上报告平均 MSE 降低 3.61%、MAE 降低 2.93%。
- 相关性：多变量训练/AutoML 中高，TSFM 适配中，Agent/reasoning 低。可作为 Agent 训练工具的候选，但并非新基础模型；变量冲突频率不等于负迁移危害，迁移到不同骨干需检查代理适用性。未复现作者结果。

### [2026-09-06] Assessing Covariate-Informed Grid Load Forecasting with a Time-Series Foundation Model — 持续跟踪

- 日期与来源：arXiv v1 2026-09-06 15:09；[官方论文](https://arxiv.org/abs/2609.06656)。
- 摘要：在 ISO New England、ENTSO-E 上比较 Chronos-2 的零样本、协变量与任务微调；作者发现微调改善短时距预测，零样本仍落后于专用模型。
- 相关性：TSFM/电力高，Agent 中。选模工具应区分适配预算与预测时距，不能把“基础模型”标签当作自动胜出的证据。本轮复核，未计新增。

## 2. 时间序列建模 Agent 最新研究

本轮 `time series AND agent` 定向查询未确认比昨日已收录 STQA 更晚的高相关首发论文；新增工程项目见第 4 栏。以下保留两项直接支持建模 Agent 设计的窗口内重点。

### [2026-09-05] Memory in Deep Time-Series Models — 持续跟踪，综述

- 日期与来源：arXiv v1 2026-09-05 10:19；[官方论文](https://arxiv.org/abs/2609.06006)。
- 摘要：将固定状态/参数内记忆与外部可寻址记忆放在同一框架下，讨论显式记忆模块、检索增强和 Agent 维护存储的写入、访问、保留、修订与遗忘。
- 相关性：Agent/harness 高。适合定义预测任务的案例记忆生命周期；它是综述，不是新 Agent 的胜出实验。

### [2026-08-31] CastClaw — 持续跟踪，预测 harness

- 日期与来源：arXiv v1 2026-08-31 15:36；[官方论文](https://arxiv.org/abs/2608.30976)。
- 摘要：连接数据、专用预测器、分析工具、用户约束与版本化轨迹，按证据保留、修订或升级预测，设置明确停止条件并形成执行报告。
- 相关性：Agent/harness 高。今天新发现的确定性诊断路由可与该类自主闭环作设计对照；这是一项比较建议，尚未开展实验。当前官方返回仍为 v1。

### [2026-08-24；v2 2026-09-03] MetaCaster — DailyArXiv 复核，持续跟踪

- 日期与来源：arXiv v1 2026-08-24 16:40，v2 2026-09-03 18:53；[官方论文](https://arxiv.org/abs/2608.23473)。作者备注 Accepted by EMNLP 2026。
- 摘要：用经过 meta-harness 优化的多 Agent 流程，从少量样本和文本上下文生成数据、训练轻量专用预测器；Agent 在训练流水线中承担工程角色。
- 相关性：Agent/harness/少样本建模高。与 SDD 的组合是本报提出的研究方向，尚无联合实验证据；DailyArXiv 的 9 月 3 日是修订日，不能计为该日首发。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-08] It's All in the Way You Say It: The Role of Information Representation in LLM-Based Glycemic-Event Prediction — 新增相邻评测

- 日期与来源：arXiv v1 2026-09-08 14:07；[官方论文](https://arxiv.org/abs/2609.08772)。作者标注已投稿期刊，未标注接收。
- 摘要：在 OhioT1DM 上比较不同开源权重 LLM 的零样本/少样本事件预测，覆盖 30、60、90 分钟时距，改变数值的文字表达、派生描述及胰岛素/饮食等上下文。作者发现最佳方式随高/低血糖任务变化，增加上下文并无稳定收益。
- 相关性：时序语言输入设计高，显式 reasoning 中低。可借鉴固定模型下的表示与信息量消融；它未提出新推理模型，也没有据此证明推理链忠实性。研究结果仅作方法讨论。

### [2026-09-07] ICF-DLM：物理分解驱动的扩散语言模型波形预测 — DailyArXiv 下午补充

- 日期与来源：arXiv v1 2026-09-07 17:00:02；[官方论文](https://arxiv.org/abs/2609.07756)。
- 摘要：从激光脉冲和靶设计直接预测 512 步中子率波形，将目标分解为产额、峰时与局部波形，再使用双向去噪和物理指标驱动的 PPO 奖励。作者在 5 万模拟样本与 232 次实验发次组成的 ICFBench 上报告，相对匹配的自回归 LLaMA-3-8B，峰时误差由 11.6 降到 9.2 步。
- 相关性：结构化数值生成、物理约束奖励高，显式时序 reasoning 中、光伏低。这是惯性约束聚变波形预测，不是光伏功率研究；目标分解不能单独证明推理链忠实性，稀疏峰值方法的跨域价值仍待验证。

### [2026-09-05] STQA / SQFRS — 持续跟踪，检索—预测—推理基准

- 日期与来源：arXiv v1 2026-09-05 14:32；[官方论文](https://arxiv.org/abs/2609.06117)、[作者代码](https://github.com/xuxubaobaoan/STQA_Project)。
- 摘要：31,400 个问答覆盖历史查询、数值预测和基于预测的推理，SQFRS 用 Agent 编排 SQL 与时序预测器，突出工具协同及不确定性推理难点。
- 相关性：Agent/reasoning 高；是基准与系统，不是新预训练 reasoning 模型。仓库此前已于 2025 年创建，整个研究最早公开日仍不确定，降低“全新成果”的优先级，不把 9 月 arXiv 日期视为新代码发布日期。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列

#### [2026-09-10] wyx53508-cloud/time-series-analysis-agent — 下午新增

- 日期与来源：创建 2026-09-10 04:38:34，最近推送 04:48:06；[GitHub](https://github.com/wyx53508-cloud/time-series-analysis-agent)、[官方元数据](https://api.github.com/repos/wyx53508-cloud/time-series-analysis-agent)。
- 摘要：面向 CSV 的统计、趋势图、异常检测和报告质检流程，支持知识库引用、连续问答及按文件/列恢复记忆。默认示例列为 PREPOWER，知识库含风电与时序预测资料。
- 相关性：时序分析 Agent/harness 高，预测建模与光伏中低。可参考报告数字核验及记忆隔离设计；目前不能认定它具有自动训练预测器或经验证的光伏预测能力。
- 成熟度：已读取 README、官方目录及部分实现；目录存在 ReAct 引擎、计算工具、质检、记忆和示例数据；ReAct 代码检查必需工具是否已调用，异常工具采用 pandas 规则统计。未安装运行、未测数值正确率或评审有效性，归为早期工程候选。


#### [2026-09-09] PallabBiswas3/Time-Series-Diagnostic-Agent — 新增

- 日期与来源：创建 2026-09-09 19:33；最近推送 22:21；[GitHub](https://github.com/PallabBiswas3/Time-Series-Diagnostic-Agent)、[官方元数据](https://api.github.com/repos/PallabBiswas3/Time-Series-Diagnostic-Agent)。
- 摘要：组合频谱/包络、PCA/概率监测、Granger 依赖筛查、域偏移检查、外部模型适配与证据验证。README 明确当前路由是确定性的，LLM/学习型/RL 路由留作后续比较。
- 相关性：时序诊断/harness 高，当前 LLM reasoning 中低。文件树包含 agents、tools、TEP benchmark、评测与测试目录；预训练深度模型需另行注册，不能把适配接口当作已附带模型。
- 成熟度：已读 README 与目录，尚未运行或复核 TEP 结果；Granger 仅作为预测依赖证据，不能当作物理因果证明。建议关注证据数据结构及 SUPPORTED/CONTRADICTED/INSUFFICIENT 验证接口。

#### [2026-09-09] Vipluv01/nse-multi-agent-trading — 新增

- 日期与来源：创建 2026-09-09 16:08；早间最近推送 2026-09-09 21:57，下午元数据推进至 2026-09-10 07:11:35；[GitHub](https://github.com/Vipluv01/nse-multi-agent-trading)、[官方元数据](https://api.github.com/repos/Vipluv01/nse-multi-agent-trading)。
- 摘要：深度时序预测、LLM 新闻情绪、牛熊辩论与风险组件共享回测流程。README 报告在其样本上多 Agent 未超过买入持有，并描述 purged walk-forward、交易成本、块 bootstrap 和多重比较控制。
- 相关性：Agent/reasoning/harness 高。最值得借鉴的是逐组件消融和成本后的评测，不应将辩论过程视作有效推理的充分证据。
- 成熟度：已读 README 并检查目录，确有 agents、LLM 后端、回测统计、数据模块和防前视测试文件；未运行，未审计数据时间可得性、历史成分选择和预注册时间。负面结论为作者报告，仅适用于其测试范围。

#### [2026-09-08] harshulbafna008-code/automl-agent — 已收录，无新推送

- 日期与来源：创建 2026-09-08 11:02；最近推送仍为 11:13；[GitHub](https://github.com/harshulbafna008-code/automl-agent)、[官方元数据](https://api.github.com/repos/harshulbafna008-code/automl-agent)。
- 摘要：Ollama 规划、sklearn 执行与反思重规划循环。今日只复核搜索元数据，没有新版本证据。
- 相关性：AutoML/Agent 高，时序中。昨日代码核查发现调参使用普通整数交叉验证；迁移时序需先换成时间切分。该代码结论沿用昨日核验，今日未重新审计。

HuggingFace `time-series` 名称检索按创建时间取前 5，未确认比昨日 IBM 模型更值得新增的 foundation/reasoning 项目；这是名称查询的覆盖，不代表平台全量没有发布。

### 4.2 光伏功率预测

#### [2026-08-10] doccodyblue/ha-pvstrings — 活跃度更新

- 日期与来源：创建 2026-08-10 14:15；最近推送 2026-09-09 12:28，较昨日记录推进；[GitHub](https://github.com/doccodyblue/ha-pvstrings)、[官方元数据](https://api.github.com/repos/doccodyblue/ha-pvstrings)。
- 摘要：以 pvlib 物理潜力配合学习修正做组串预测。当前 README 强调按预测提前量校正辐照度偏差、限发样本处理和按小时评测，目录含 forecast、quality、learning 与相应测试。
- 相关性：光伏/在线 ML 高，Agent 中，LLM reasoning 低。适合作为预测器和证据输出的工程参考；本轮读 README 与目录，未做提交差分，不把现有功能说成昨天新增。

另命中 9 月 9 日新建的学生太阳能预测项目，但只有搜索描述层证据，未进入推荐条目。光伏关键词返回共 52 项，本轮只审看按更新排列的前 5 项。

## 5. 光伏功率预测最新研究

### [2026-09-05] SolarBench — 持续跟踪

- 日期与来源：arXiv v1 2026-09-05 17:09；[官方论文](https://arxiv.org/abs/2609.06187)。
- 摘要：统一 11 站、十年跨度的六百多万张天空/卫星图像及辐照度或 PV 输出，关注跨云况、新站适配与快速波动捕获。
- 相关性：光伏/多模态时序高，Agent 评测中高。建议同时报告总体误差与爬坡事件能力；今日仍为 v1，未重复计新。

### [2026-09-03] Machine learning for wind and solar PV energy production forecasting: a systematic literature review — 新增发现

- 日期与来源：出版商公开发表 2026-09-03；[Springer Nature 原文](https://link.springer.com/article/10.1007/s41060-026-01261-z)。更早预印本日期不确定，降低首次公开的新颖性优先级。
- 摘要：纳入 31 项至少提前 24 小时的风光预测研究，整理预测时距、模型、天气输入、不确定性及决策关联。指出真实天气预报输入与决策效用评价不足。
- 相关性：光伏/评测设计高，Agent 中，reasoning 低。其文献搜索日期为 **2026-01-09**，不能用来覆盖最近三个月的新模型；价值在评测口径，而非最新模型目录。

### [2026-08-03；v2 2026-09-08] An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting — 修订复核

- 日期与来源：arXiv 首发 2026-08-03 11:48，v2 修订 2026-09-08 15:02；[官方论文](https://arxiv.org/abs/2608.02088)。以首发日期排序，非 9 月新论文。
- 摘要：对英国充电站一年的缺失光伏数据，校验时间对齐、构造太阳/晴空特征并以验证集拟合非负 stacking。当前摘要报告：回溯天气下，相对 smart persistence 的白天归一化 RMSE 收益为随机日折叠 31.2%、滚动验证 2.9%，后者跨日不稳健；换为固定提前 24 小时的天气产品后误差进一步上升。
- 相关性：光伏/AutoML 评测高，LLM reasoning 低。强调时间切分和真实可得输入会改变收益判断；上述为当前版本作者数字，未复现，未逐版比较，不能断言这些结果全部在 v2 新增。

## 6. 检索记录、排除与限制

| 来源 | 实际覆盖 | 结果与边界 |
|---|---|---|
| arXiv 官方 API | 2026-06-10 至本日，`time series` 分别与 foundation/pretrained、agent、reasoning 组合，另查 photovoltaic + forecasting；各按首发倒序取前 8 | 基础模型新增 NOAH；Agent/reasoning 主查询最新仍为 STQA；另按编号核验血糖输入表示研究。非全量综述 |
| DailyArXiv | [实时 master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) | Last update 2026-09-10，Time Series 已含 9 月 8 日 NOAH、血糖事件等。部分条目按修订日排列，不能直接当首发日期 |
| GitHub 官方搜索 | `time-series agent`、`automl agent`、`harness machine-learning`，创建窗口 9 月 8–10 日，按 updated 各取前 5 | 分别返回 2、1、3 项；新时序仓库 2 项；通用 harness 命中客服、网红筛选和 RAG，与直接时序主题弱，未纳入 |
| GitHub 光伏 / HF | 光伏 forecasting 创建窗口为完整三个月；HF time-series 名称检索按创建时间取前 5 | 光伏跟踪 ha-pvstrings 推送；HF 无已核验新增主条目。未读取 GitHub Trending，采用官方 Search |
| OpenReview / ACL | time series + agent/reasoning + 2026 定向检索 | 命中旧首发 AXIS、STReasoner、Time-RA 等，不计新；没有逐篇遍历全部会议录 |
| NeurIPS / ICML-PMLR / KDD / AAAI | 域名限定的基础模型关键词补检 | 本轮搜索未带来已核验的窗口内新增主条目，不代表这些会议没有相关研究 |
| 出版商 | photovoltaic forecasting + September 2026 | 确认 9 月 3 日综述；只显示 9 月卷期的候选不据此推断在线首发 |
| AI HOT | 近七天 time series 精选关键词补检 | 0 条线索；不以聚合源替代上述官方来源 |

日期过滤：DailyArXiv 命中的 [A City-Scale Dataset](https://arxiv.org/abs/2605.18782) 与 [Fewer yet critical](https://arxiv.org/abs/2503.06867) 编号显示更早首发，9 月为修订；未进入新研究主列表。旧会议版本与当前窗口的综述引用文献也不作为新条目。

所有性能数字保留作者归属；未安装候选项目、下载模型或复现实验。创建时间不是完整代码首次公开的证明，推送时间不是新功能证据。网页搜索可能有索引延迟，API 关键词和结果上限亦可能漏检。机构博客早间未单独补检；下午补查 Google Research 与 HuggingFace 博客，命中已报道的 TimesFM-3（8 月 31 日）及 IBM 部署动态（9 月 2 日），未重复计新。

## 7. 下午补检结论与覆盖边界

本节记录本次自动化的独立复核，早间表格保留为早间检索记录。

- **DailyArXiv 已确认有相关论文**：[实时 master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 显示 Last update 2026-09-10；实际抽取 Time Series 表格 71 行，最新行日期 9 月 8 日。确认 NOAH、IPM-FM、血糖表示研究、PV-Surgery、ICF-DLM、STQA、Memory、MetaCaster 等；本轮将此前未列入今天晨报的 PV-Surgery、ICF-DLM 补入，MetaCaster 作为持续跟踪补回。SDD 尚不在该表，是独立检索新增。
- **DailyArXiv 日期不一致或超窗项**：[MetaCaster](https://arxiv.org/abs/2608.23473) 表内 9 月 3 日对应 v2，首发 8 月 24 日，仍在窗口；[MarsTSC](https://arxiv.org/abs/2605.09395) 表内 9 月 5 日对应 v3，首发 5 月 10 日，超窗排除；[城市交通数据集](https://arxiv.org/abs/2605.18782) 表内 9 月 8 日对应 v2，官方历史列 v1 为 5 月 6 日，超窗；[Fewer yet critical](https://arxiv.org/abs/2503.06867) 表内 9 月 8 日为 v2，首发 2025 年 3 月 10 日，超窗。降级仅作日期核查记录，不计新研究。
- **GitHub**：官方 Search 检索 9 月 9–10 日创建的 time-series agent，返回 6 项；新增中文分析 Agent。另一个 [Maintenance Engineer Copilot](https://github.com/Arishkhan-A/Maintenance-Engineer-Copilot-for-Machine-Failures) 创建于 9 月 10 日 06:50:14，README 宣称完整模型、25 项测试及生产级性能，但官方递归文件树只有 README.md；相关性为工业时序 Agent 高，证据成熟度极低，只作占位项目记录，不采信其运行和性能宣称。同期 automl agent 查询为 0；完整三个月 harness machine-learning 查询返回 132 项，仅查看按更新时间前 6 项，未确认新的直接时序实现，不作平台全量结论。
- **光伏与光功率**：GitHub photovoltaic forecasting 三个月查询仍返回 52 项，审看前 6；ha-pvstrings 无比早间更晚的推送。另核查 [pv-dimensionality-reduction](https://github.com/Shivam4905/pv-dimensionality-reduction)（创建 7 月 30 日，推送 9 月 10 日）：存在 MATLAB 工具文件，但方法来源与基准证据不足，暂不推荐。论文补检未确认比早间 SolarBench/日前流水线更直接的新预测条目。出版商搜索命中 9 月 8 日双面组件物理与 ML 建模[候选摘要](https://pubs.aip.org/aip/jrse/article-abstract/18/5/056101/3404027/Hybrid-physics-machine-learning-framework-for-cell)，正文访问失败，精确首发未独立复核，日期不确定、降低优先级；不可等同于日前预测。光通信方向的 [S+C+L 光功率多 Agent 优化](https://arxiv.org/abs/2606.05795) 官方首发为 6 月 4 日，超窗排除。
- **HuggingFace、会议与机构**：定向搜索出现 [SenTSR-Bench](https://arxiv.org/abs/2602.19455)，官方首发 2 月 23 日，不能把聚合页的 Sep 9 当作新发布；IBM PatchTST-FM-r2 已在昨日按模型仓库 8 月 7 日创建记录，不把 9 月媒体转载当新模型。OpenReview、ACL、ICML/PMLR 定向补检未确认新增首发条目，未遍历全部论文集。机构来源参考 [Google TimesFM-3 公告](https://www.research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/) 和 [HF 博客索引](https://huggingface.co/blog?p=0)。
- **检索故障与限制**：下午四组 arXiv 官方 API 查询（foundation、agent、reasoning、photovoltaic forecasting）均被远端断开；改用网页搜索、arXiv 官方摘要与版本历史逐项核验，不能声称完成 API 全量覆盖。AI HOT 近七天 time series 精选补检为 0。所有条目仍按所属栏目日期倒序；当天无周报任务。

## 今日建议

优先阅读 SDD 的训练目标及适用假设，再检查中文分析 Agent 与新诊断项目的证据接口，再参考交易项目如何逐项测量情绪、辩论与风险组件的贡献。光伏实验优先固定滚动验证、目标时点可得天气与 smart persistence 基线；在同一评测协议下再测 Agent 是否带来收益。NOAH 作为多模态时序表示的阅读候选，暂不提升为能源预测主基线。

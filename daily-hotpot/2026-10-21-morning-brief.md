# 时间序列研究晨间简报｜2026-10-21

- **窗口**：2026-07-21 至本次检索截止；论文按 arXiv v1 或明确公开日，GitHub 创建及推送日期按 UTC。窗口内增量优先，旧条目明确标记持续跟踪。
- **今日重点**：新增核实五篇 10-19 首发论文：WhatIf-Bench、CaFE、R2R、ActTime、TimesJev。重点从预测误差扩展到干预泛化、决策质量与推理成本；不是五个新开源基础模型。
- **下午补检**：补录 CTLite（10-19）、EasyResearch（10-18）及 AF-WPT-RL 光伏研究（10-10）；新增两个 10-21 创建的工程项目。上午五篇首发发现保留，不重复计为下午新增。
- **新增工程线索**：AFAC2026 自动实验 Agent、hilhool/alfa-automl-agent、HelioRoute-PV；WhatIf-Bench 论文、GitHub 与 HuggingFace 合并一项。
- 对照截至昨日包含下午补检的归档去重。今天周三，不生成周报。所有性能结论均为作者报告，本轮未执行外部代码或复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-19｜WhatIf-Bench：检验未见干预下的预测｜新增，高优先级

- **来源**：[arXiv 2610.26582](https://arxiv.org/abs/2610.26582)，v1 15:32 UTC；[GitHub](https://github.com/ashok-arjun/whatif-bench)、[HuggingFace 榜单](https://huggingface.co/spaces/arjunashok/WhatIf-Bench)。
- **摘要**：从数据中心、电网、交通和供水的机制模拟器构造 37,665 个任务，区分重复历史协变量值的 Replay 与未见值的 Novel 情景。作者报告各模型在 Novel 情景明显退化，联合改变更多协变量时更难。
- **相关性**：TSFM 评测高、Agent 情景决策高、reasoning 评测高；是基准而非新预测模型。应把历史拟合、未见干预外推和多变量联合改变分开评分，不能凭协变量输入接口推断模型具备因果推理能力。
- **可用性**：仓库创建 10-16 22:05 UTC、最近推送 10-18 23:00 UTC（[元数据](https://api.github.com/repos/ashok-arjun/whatif-bench)）。本轮目录树只有 README 与展示图，README 明确代码和数据即将发布；HF Space 页面可访问，不等于评测代码或数据已可下载。

### 2026-10-19｜CaFE：用结构能力画像替代单一榜单分数｜新增，高优先级

- **来源**：[arXiv 2610.26251](https://arxiv.org/abs/2610.26251)，v1 12:10 UTC。
- **摘要**：围绕八类时序结构特征，对原始基准重采样、增强并过滤，生成可刷新评测集；结合误差与干预响应指标，给出模型的逐特征能力画像。在 GIFT-Eval、FEV-Mini20 上评估，作者报告据此选模优于按总榜单选模。
- **相关性**：TSFM 评测高、建模 Agent 选模与 harness 高、显式 reasoning 中。可用于让 Agent 根据任务结构选模型；但刷新样本不自动消除基准污染，仍需独立时间段或新数据来源验证。它是评估方法，不是新 TSFM。

### 2026-10-19｜R2R：检索增强的时序分类后训练｜新增，中高优先级

- **来源**：[arXiv 2610.26114](https://arxiv.org/abs/2610.26114)，v1 10:09 UTC。arXiv 作者备注称 NeurIPS 2026 接收，本轮未独立核对录用清单。
- **摘要**：独立查询编码器从知识库检索实例级数值模式，再融合检索表示与 TSFM 的参数化嵌入，改善分类迁移；作者在 158 个时序数据集上报告提升。
- **相关性**：TSFM 后训练高、Agent 检索工具中、显式 reasoning 低。不是重新预训练基础模型，也不能把分类增益直接移植为多步预测增益。后续应审查知识库来源、样本隔离与检索成本。

### 2026-10-19｜CTLite：复用连续时间摘要的轻量预测｜下午补录，相邻方法

- **来源**：[arXiv 2610.26379](https://arxiv.org/abs/2610.26379)，v1 10-19 13:32 UTC；[作者代码入口](https://github.com/SSMa913/NICLab-CTLite)。由 DailyArXiv Time Series 发现并回原始版本史核验。
- **摘要**：无参数编码器提取不规则序列多尺度水平与趋势，小型读出层结合阻尼外推和低秩变量修正；相同历史的摘要可跨优化步骤及预测请求复用。作者在四个基准报告仅 88–2,537 个可训练参数及较低延迟。
- **相关性**：Agent 多次调用预测工具与算力预算中高；TSFM 对照基线中；显式 reasoning 低。属于轻量预测器，不是基础模型。复用收益限于历史不变的请求，新增观测后需重算；论文摘要核验，代码未运行。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-19｜ActTime：动作条件时序世界模型｜新增，高优先级相邻组件

- **来源**：[arXiv 2610.25764](https://arxiv.org/abs/2610.25764)，v1 04:24 UTC。
- **摘要**：历史阶段按动作更新变量级隐状态并用观测校正；未来阶段在不同候选动作下滚动相同转移模型，生成轨迹。仅用实际发生的轨迹训练，在建筑能源、交通、温室与库存模拟环境中评估事实预测、干预效应、离线决策和闭环规划。
- **相关性**：Agent 规划与行动评估高、时序干预 reasoning 高、通用 TSFM 中低。是可服务规划的世界模型，不等于完整自主建模 Agent。作者报告 16 个域任务组合中 12 个第一，并发现事实预测、干预忠实性和决策排名会发生反转。
- **关注点**：候选动作覆盖范围、模拟器与真实部署差异、规划器预算和约束。不能把低预测误差等同低决策后悔值，也不能把观察轨迹训练等同无条件可识别反事实。

### 2026-10-18｜EasyResearch：将时间切分和独立终评作为默认流程｜下午补录，评测工具

- **来源**：[arXiv 2610.25263](https://arxiv.org/abs/2610.25263)，v1 10-18 13:33 UTC；DailyArXiv Time Series 已收录。
- **摘要**：提供回归、预测与信号分类分析核心及无代码桌面应用；数据学习限制于训练部分，选模后另设最终评估，预测不使用打乱交叉验证。作者在 15 条序列上比较打乱窗口评测与未来留出误差，展示前者的乐观偏差。
- **相关性**：AutoML / Agent harness 评测高、TSFM 公平对照中、显式 reasoning 低。它不是 LLM Agent；可作为建模 Agent 的评测约束参考。小样本实验不能证明所有部署场景无偏，本轮只核验摘要与日期。

### 2026-10-14｜TimeRSI｜持续跟踪

- **来源**：[arXiv 2610.19725](https://arxiv.org/abs/2610.19725)，v1 10-14，v2 10-15；[官方代码](https://github.com/haoxin1998/TimeRSI)。本轮重核原始页，非新增论文。
- **摘要**：编码 Agent 改写冻结预测模型外围流水线，用历史窗口误差迭代修订，部署时根据已完成预测选择流程。
- **相关性**：时序 Agent / TSFM 部署高、reasoning 中。适合与 CaFE 的结构化选模组合研究，但组合收益是待验证假设；所有适配反馈必须满足标签当时已可得。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-19｜TimesJev：以压缩表征支持快速时序推理｜新增，高优先级

- **来源**：[arXiv 2610.26002](https://arxiv.org/abs/2610.26002)，v1 08:26 UTC。
- **摘要**：提出时序 System 1 sufficiency，保留关键频率模式压缩长序列，以充分性与可实现性两类散度约束压缩和模型嵌入对齐。作者在 13 个数据集上报告相对推理基线的性能及延迟优势。
- **相关性**：时序 reasoning 高、Agent 低延迟感知与判断高、数值预测 TSFM 中。重点是减少显式长思维链的成本，不能把“快速”直接等同解释忠实或具有多步规划能力。
- **关注点**：作者摘要给出平均推理时间减少 62.9%；须核对比较模型、硬件、输出长度与任务指标。压缩是否丢失稀有异常或关键短时事件尤其值得检查。

### 2026-10-16｜Perceive, Solve, Reason｜持续跟踪

- **来源**：[arXiv 2610.23521](https://arxiv.org/abs/2610.23521)，v1 10-16，本轮复核，昨日已收录。
- **摘要**：按感知、求解、推理顺序训练 TS-LLM，比较专用时序编码与文本输入、顺序与混合训练。
- **相关性**：时序 reasoning 与 Agent 表征高、预测 TSFM 中。可与 TimesJev 对照“能力形成顺序”和“推理期成本”，但两篇任务与基线不同，不能直接横比作者分数。

### 2026-08-10｜REATS｜10-19 修订，持续跟踪

- **来源**：[arXiv 2608.10149](https://arxiv.org/abs/2608.10149)，v1 08-10 19:04 UTC、v2 10-19 14:52 UTC。
- **摘要**：当前版本结合文本模式描述与数值特征，以 LLM 推理生成逐样本集成权重，采用 SFT 与 GRPO 两阶段训练。
- **相关性**：reasoning 与 Agent 模型路由高、TSFM 集成中高。此前已收录，本轮未逐段比较版本差异，因此只记录修订日期，不把当前所有方法细节称作此次新增。解释是否忠实于权重选择仍需单独评估。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 AutoML / machine learning / harness

#### 2026-10-21 创建｜dclabai｜下午新增，中高优先级待审计

- **来源**：[Shahriyar-Moradi/dclabai](https://github.com/Shahriyar-Moradi/dclabai) · [元数据](https://api.github.com/repos/Shahriyar-Moradi/dclabai) · [预测核心](https://github.com/Shahriyar-Moradi/dclabai/blob/main/dclab_core/forecast.py)。创建 06:22 UTC，最近推送 06:58 UTC。
- **摘要**：支持自带模型或规则回退的数据科学工作台。已读 README、目录树和预测核心：滚动起点评估、朴素及梯度提升等基线、历史滞后特征、按步长残差区间；未来协变量通过 `known_ahead` 声明传入。
- **相关性**：AutoML Agent / harness 高，时序建模高，TSFM/reasoning 本体低。源码显示时间截断与早期起点校准，但可得性仍依赖调用方声明；`backtest` 的 `best` 使用聚合回测分数，不能直接当作独立终评。尚未审计上层最终留出协议或执行测试，README 的全面防泄漏主张未获独立验证。

#### 2026-10-21 创建｜forecasting_agents｜下午新增，数据准备组件

- **来源**：[shanudengre82/forecasting_agents](https://github.com/shanudengre82/forecasting_agents) · [元数据](https://api.github.com/repos/shanudengre82/forecasting_agents) · [调度代码](https://github.com/shanudengre82/forecasting_agents/blob/main/src/fcagents/orchestrator.py)。创建 05:34 UTC，最近推送 05:51 UTC。
- **摘要**：Streamlit 演示包含时间列识别、规则性检查、重采样、频率解释四个步骤。已读 README、目录树及调度代码，确认流水线仅包含这四类；确定性工具计算、规则决定路径，小型 Qwen 负责解释。
- **相关性**：时序 Agent 数据准备中高、完整 AutoML 中低、TSFM/reasoning 模型低。目前未实现完整训练与预测选模闭环，不能因仓库名称认定其已完成端到端预测。目录含测试与容器配置，本轮未运行；插值等操作在接入预测时须限制于每个起点的历史。

#### 2026-10-21 创建｜AFAC2026 自动化实验 Agent｜新增，相邻工程高优先级

- **来源**：[Alwayshere-su/afac2026-auto-experiment-agent](https://github.com/Alwayshere-su/afac2026-auto-experiment-agent) · [元数据](https://api.github.com/repos/Alwayshere-su/afac2026-auto-experiment-agent)。创建 00:57 UTC、最近推送 01:00 UTC。
- **摘要**：Pi-Agent 在两小时时间预算内迭代图节点分类和序列推荐实验；README 描述配置、验证反馈、工具调用、剩余预算的轨迹记录，并提供固化预测器、部分权重和记忆。本轮已读 README 并确认目录树存在 Agent 模块与相关文件，未核对全部轨迹或比赛成绩。
- **相关性**：AutoML Agent / 实验 harness 高、时序序列任务迁移中、TSFM/reasoning 模型本体低。序列推荐不能直接当作数值预测。README 的 103/165 轮实验与成绩是作者报告；运行需官方数据、GPU，完整 Agent 还需模型 API，不能宣称开箱复现已通过。

#### 2026-10-20 创建｜hilhool/alfa-automl-agent｜新增，低优先级待审计

- **来源**：[仓库](https://github.com/hilhool/alfa-automl-agent) · [元数据](https://api.github.com/repos/hilhool/alfa-automl-agent) · [入口代码](https://github.com/hilhool/alfa-automl-agent/blob/main/solution.py)。创建 15:37 UTC、最近推送 18:00 UTC。
- **摘要**：仓库描述为 LLM 引导的表格 AutoML。根目录未提供 README；已读入口部分，先写常数预测，再运行规则解析及 LightGBM 核心，候选改进以同组 folds 的指标决定是否接纳，失败时保留既有输出。
- **相关性**：AutoML / Agent 容错中高、时间序列中低、TSFM 低。当前检查不足以证实 LLM 自主研究循环、时间切分或无泄漏主张，不与不同所有者的 NolReaction 同名项目混为一项。

#### 2026-10-16 创建｜WhatIf-Bench｜论文与代码状态合并

该项目统一收录于第一栏，不重复计数。当前主要是论文展示与 HF 榜单入口，评测代码、数据待发布；与 TSFM / reasoning / Agent 评测高度相关。

#### 2026-08-27 创建｜VIPER｜持续跟踪，实验 harness

- **来源**：[pvd232/viper](https://github.com/pvd232/viper) · [元数据](https://api.github.com/repos/pvd232/viper)。最近推送 10-18 23:16 UTC，本轮重读 README。
- **摘要**：从 Python 实验声明生成保存的计划，执行后核验计划与证据，支持产物恢复、运行比较及 CLI/MCP 查询。
- **相关性**：ML / Agent harness 高、时序评测治理中高、TSFM/reasoning 本体低。计划一致性不代表时间切分正确；今天未发现可确认的新版本变化，不计新增。

### 光伏功率预测

#### 2026-10-20 创建｜HelioRoute-PV｜新增，中高优先级研究代码线索

- **来源**：[zhongyuan-lv/HelioRoute-PV](https://github.com/zhongyuan-lv/HelioRoute-PV) · [元数据](https://api.github.com/repos/zhongyuan-lv/HelioRoute-PV)。创建 10:14 UTC、最近推送 10:34 UTC。
- **摘要**：多站点共享与私有路由，站点选择 KEEP/ABSTAIN；ABSTAIN 精确回退共享预测，并通过物理投影约束非负、夜间零功率与晨昏衰减。README 说明九个 PVOD 站与八个 HKUST 屋顶系统的研究快照。
- **相关性**：光伏预测高、Agent 候选模型与回退机制中高、TSFM/reasoning 低。稿件尚未接收或发表、无 DOI，论文公开日期不确定，因此只列代码项目。
- **证据边界**：README 明确原始数据、checkpoint、预测数组未打包，部分分析依赖缺失产物；后续对照重复使用已观察 Test，属于探索性证据。发布方只做语法、文件与哈希检查，未做新训练或数值复现；物理可行及回退机制不保证 KEEP 站未来误差下降。

M4-Loop 昨日下午已收录，今天检索仍可见，未计为新增项目。

## 5. 光伏功率预测最新研究

### 2026-10-10 在线公开｜AF-WPT-RL：动态融合多尺度光伏预测｜下午补录

- **来源**：[Energy Engineering 官方页面](https://www.techscience.com/energy/online/detail/28584) · [DOI](https://doi.org/10.32604/ee.2026.088725)，明确 Published online 10-10；收到稿件 07-08 不作为公开日。
- **摘要**：将注意力/GRU、小波包分解与连续 actor-critic 融合，用状态调整尺度和特征权重，覆盖 15 分钟至 7 天预测。摘要说明按通道时间切分、仅训练集归一化、多随机种子；排名随预测跨度及比较对象变化，天气预报辅助实验未带来一致提升。
- **相关性**：光伏功率预测高、Agent 模型路由组件中高、通用 TSFM/显式 reasoning 低。作者明确动作不影响后续观测，属于自适应门控，不是光伏过程闭环控制；注意力关联也不等于因果识别。尚未核查完整训练流水线或复现实验。

### 2026-10-08 在线公开｜决策级多模态融合｜持续跟踪

- **来源**：[Energy Engineering 官方页面](https://www.techscience.com/energy/online/detail/28550) · [DOI](https://doi.org/10.32604/ee.2026.090466)。搜索保留的在线页面明确 10-08 公开；当前页面改为卷期信息，显示 Issue published 10-18。记录两种日期，不把卷期日当新首发。
- **摘要**：一路预测云图再回归功率，一路用气象数据与 CatBoost 预测功率，最后固定权重融合。
- **相关性**：光伏多模态预测高、Agent 可调用预测工具中、通用 TSFM 与显式 reasoning 低。本轮未确认比既有归档更新且日期明确的高相关新论文；新增工程线索见 HelioRoute-PV。

**日期不确定，低优先级观察**：[全天空图像与物理动态特征的 5 分钟光伏预测](https://doi.org/10.1016/j.renene.2026.126183)显示卷期日 10-15，但检索提示更早已抓取，未确认首次在线日。摘要描述云图及动态特征与表格模型对照；光伏相关性高、Agent 工具中、TSFM/reasoning 低。暂不作为三个月内新研究计数。

## 6. 检索覆盖、日期过滤与局限

- **DailyArXiv**：[Time Series 板块](https://github.com/zezhishao/DailyArXiv#time-series)及完整原始 README 已读，Last update 10-21，实际论文行 **84**，最新列示日期 10-19；[最新自动提交](https://github.com/zezhishao/DailyArXiv/commit/707a9e9163534328ecc623cc6db216fb7fb2e4b4)为 10-20 20:05 UTC。`timeseries` 分支不可访问，已按目录规则回退 master。聚合日期只用于发现，本报五篇新增均回 arXiv 确认 v1。
- **旧稿过滤**：TimeART、STRIDE、CastFlow 等虽然近期修订，但首发早于 07-21，不纳入本日新研究。REATS 首发在窗内，按 v1 排序并单列修订。SELA 仓库描述与时序 Agent 高相关，但 README 指向三月预印本，今天推送不能证明新研究，未提升为新增论文。
- **会议补检**：定向检索 OpenReview/ICLR、ACL、NeurIPS、ICML/PMLR、KDD/ACM、AAAI 官方域名；没有确认比本报五篇更晚且直接相关的窗内新增。部分搜索只返回旧会议论文，不能据会议年份或抓取时间纳入窗口。这不是全量论文扫描。
- **GitHub**：搜索 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting`，限制创建日 07-21 至 10-21，按更新排序各取四项，原始命中数 **4 / 123 / 91 / 28 / 65**；计数有重叠，也包含个人主页和弱相关结果，不是有效新增数。另直接核查 WhatIf-Bench 元数据与目录树。
- [GitHub Trending](https://github.com/trending)页面可访问，本报新增项目来自定向搜索，未宣称其登上 Trending。新仓库创建日期不代表其代码或方法首次诞生日期。
- **机构补检**：使用 AI HOT 技能获取近七天论文精选 12 条，未发现需提升至本报三条研究主线的直接新增；[AI HOT](https://aihot.virxact.com)仅用于发现线索，聚合摘要不替代原文。HF 与 GitHub 对应同一项目时合并。
- **核验深度**：五篇新论文核到摘要与版本史；项目核到元数据、README 或注明的入口/目录。未下载运行模型，未独立复现成绩；“高相关”是本报对研究适配性的判断，不是质量认证。

## 7. 今日建议

1. 优先读 WhatIf-Bench 与 ActTime，把事实误差、干预响应和决策效果分成三组评测。
2. 用 CaFE 思路检查现有 Agent 选模是否只追逐总榜单；在独立留出集验证任何路由策略。
3. 将 TimesJev 的延迟与 Perceive/Solve/Reason 的能力形成分开研究，测量压缩后异常细节是否保留。
4. 工程先审查 AFAC 的实验轨迹和预算管理；WhatIf-Bench 等代码发布后再安排复现。

检索与编写截止：2026-10-21 09:14（北京时间）。已按指令加载 SSH key 并执行 `git pull --ff-only`；仅提交今日晨报，保留既有暂存、修改和未跟踪资料。

## 8. 下午增量核验记录

- **与上午的关系**：保留 09:14 版本内容；本轮新增三篇窗内研究/方法、两个新建仓库。正文已按各栏目日期倒序插入。上午已核验来源的描述保留为上午证据，不冒充下午全部重新审计。
- **DailyArXiv 补检结论**：重新下载完整 [master 原始 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，Last update 2026-10-21，Time Series 实际 84 行论文，最新列示 10-19；直接确认 WhatIf-Bench、CaFE、R2R、ActTime、TimesJev、CTLite、EasyResearch、REATS 等。补录后两篇此前遗漏的方法。没有发现 README 中比上午更新的日期批次。
- **日期冲突与过滤**：[TimeART](https://arxiv.org/abs/2601.13653)原始版本史为 01-20 首发、10-17 v2，虽与 Agent/reasoning 高相关且聚合日期在窗内，首发超窗，排除主榜并降低新颖性优先级。原有 REATS 的 08-10 首发/10-19 修订区别继续保留。
- **GitHub 增量搜索**：同样五组关键词，创建日限制 07-21 至 10-21，按更新取各前三项，命中数为 4 / 124 / 92 / 28 / 64；计数不代表有效项目数。两个新增均核查元数据、README、目录及关键代码。AFAC 最新推送已到 10-21 06:38 UTC、hilhool/alfa 到 06:26 UTC；仅记录活动，未做版本差异审计，不宣称功能新增。正文先前推送时间属于上午快照。
- **其他来源**：重新定向搜索 arXiv、OpenReview、ACL、NeurIPS 官方论文域、HuggingFace、光伏出版商与光网络论文；未确认 10-20/21 首发且高相关的新论文。上午的 ICML/KDD/AAAI 检索结论保留，本轮不宣称重做全量会议扫描。AI HOT 近七日精选论文仍为 12 条，未提升新的直接相关条目。
- **光功率单独核验**：[现场光网络 LLM Agent](https://opg.optica.org/jocn/abstract.cfm?uri=jocn-18-5-481)公开日 04-22，[S+C+L 多 Agent](https://arxiv.org/abs/2606.05795)首发 06-04，均超窗；它们讨论功率优化，也不能混同未来功率预测。本轮没有确认更晚的窗内直接光网络功率预测研究。
- **检索服务维护**：AI HOT 返回旧技能接口将在 10-31 停用的通知；本次仍成功获得结果。后续可按[官方迁移说明](https://aihot.news/agent)更新，本轮未修改技能。

下午检索与编写截止：2026-10-21T15:33:27+08:00（北京时间）；周三，不更新周报。

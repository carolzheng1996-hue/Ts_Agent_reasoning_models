# 2026-09-23 时间序列 Agent / Reasoning 晨间简报

检索截止：**2026-09-23 15:36 CST（北京时间）**；保留 09:04 早版并补充下午核验。窗口：**2026-06-23 至检索截止**。以昨日含下午补充的简报及历史晨报去重；“新增”表示本简报首次收录，不表示今天首发。论文日期沿用来源的公开日期（arXiv 为 UTC 的 v1 日期），GitHub 创建和推送日期另行注明。今天周三，不生成周报。

## 1. 今日重点

- **优先读 TimEvolve**：把预测结果到达后的反馈用于更新专家信任、Agent 路径和干预强度，直接面向部署中的时序 Agent。
- **优先看 t₀ 与 TimeLitmus 的组合**：前者提供带协变量的数值预测骨干，后者检验文本事件与时序证据是否真正影响预测。二者不是同一项目，组合是本简报提出的研究方向。
- **harness 关注 RRSI**：为自我改进引入编辑预算、评审和剪枝；研究验证来自通用 Agent 任务，尚不能外推为时序预测收益。
- 早版收录 **6 篇 9 月 21 日 arXiv 首发论文**，另补录 **1 篇 7 月 ACL 论文**；项目部分包含 **4 个首次收录仓库**、**1 个已知光伏仓库的实现状态复核**。下午另补录 CGTime、VeriTS 和屋顶光伏遮挡建模 3 篇窗内论文，以及 1 条日期待进一步复核的光伏监测线索。所有性能均为作者报告，本轮未运行模型或复现实验。

## 2. 时间序列基础模型最新研究

### [2026-09-21｜新增] t₀：支持上下文的多变量基础模型

- **来源**：[arXiv 2609.24559](https://arxiv.org/abs/2609.24559)，v1：9 月 21 日 13:22 UTC。
- **摘要**：发布 102M 的 t0-alpha 与 256M 的 t0-beta，输入目标历史、历史协变量和已知未来协变量；时间与变量维度交替注意力，通过分位数输出概率预测。作者报告 beta 在 GIFT-Eval 的 CRPS、MASE 均列第三；alpha 在 30 项任务上引入已知未来协变量后 skill 提升 6.3 个百分点。
- **相关性**：**TSFM 高，时序 Agent 工具层高，显式 reasoning 低**。可作为 Agent 的数值专家；“已知未来”输入必须在起报时可获得，不能用真实未来天气替代天气预报。
- **边界**：论文称开放权重；本轮未核实具体权重版本、许可及下载可用性，不把论文发布等同于部署验证。

### [2026-08-31｜持续跟踪] TimesFM-3

- **来源与日期**：[Google Research 官方发布](https://www.research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/)，8 月 31 日；今日重查，不计新增。
- **摘要**：330M 参数，原生多变量、历史与已知未来协变量、单次前向概率预测。
- **相关性**：**TSFM 高，Agent 数值骨干高，显式 reasoning 低**。可与 t₀ 在相同信息集、滚动起报和概率指标下对照；不直接比较不同输入条件下的榜单名次。

## 3. 时间序列建模 Agent 最新研究

### [2026-09-21｜新增，优先级高] TimEvolve：从已实现的未来学习调度策略

- **来源**：[When Tomorrow Becomes Today](https://arxiv.org/abs/2609.24862)，v1：9 月 21 日 16:33 UTC（北京时间 9 月 22 日 00:33）。
- **摘要**：冻结基础模型，在观察目标值前保存专家预测和候选 Agent 路径；目标到达后持续更新专家信任、路径选择与干预强度。按“预测—揭示结果—更新”时间顺序执行。作者在 Time-MMD 八领域、十五种方法中报告最佳平均 MSE/MAE 排名，并在七领域同时取得最低两项误差。
- **相关性**：**时序 Agent 高，reasoning 策略调度高，TSFM 集成中高**。与单次反思不同，重点是跨起报点持续更新的策略。
- **重点核查**：多步预测标签何时完全到达、候选路径是否全部提前固化、重叠预测窗口怎样防止未来信息进入策略更新。摘要支持其协议设计，本轮未做实现审计。

### [2026-09-21｜新增，相邻研究] RRSI：约束 Agent harness 的递归自我改进

- **来源**：[arXiv 2609.24972](https://arxiv.org/abs/2609.24972)，v1：9 月 21 日 17:54 UTC；[官方代码](https://github.com/google-research/rrsi)。
- **摘要**：通过逐渐收紧的编辑预算、历史引导探索、筛除基准特定逻辑和无效改动，减少 harness 搜索过拟合。作者在编码、工作空间及工程设计任务上报告分布外收益，并降低策略 token 消耗。
- **相关性**：**Agent harness / AutoML 高，时序直接证据低**。可借鉴到自动选模与实验规划，但需要另设时间留出、跨数据集测试和成本预算，不能把通用 Agent 结果写成预测提升。

### [2026-08-28｜下午补录，相邻工具研究] VeriTS：可验证的时序查询

- **来源与日期**：[arXiv 2608.28318](https://arxiv.org/abs/2608.28318)，v1 为 8 月 28 日 13:29 UTC，v2 为 9 月 21 日；DailyArXiv 展示的是 v2 日期。
- **摘要**：面向区块链链下查询，用携带认证聚合值的树支持时间范围和窗口聚合验证；允许利用紧凑模型给出带认证区间的近似答案。其安全性设计不依赖模型可信。
- **相关性**：**Agent 数值查询证据层中，时序数据基础设施高，预测 / TSFM / 显式 reasoning 低**。可借鉴“工具返回可核验结果”的接口思想，但它不是预测 Agent，认证区间也不是未来预测置信区间。代码与性能未复现。

### [2026-07｜补录，日期精度有限] CTRL：LLM 控制信号驱动残差校正

- **来源**：[ACL Findings 正式论文](https://aclanthology.org/2026.findings-acl.1104/)列明 **2026 年 7 月**；[arXiv 2609.23257](https://arxiv.org/abs/2609.23257)于 9 月 20 日上传。**更早首发具体日不确定**，降低新颖性优先级；不按 9 月新论文排序。
- **摘要**：冻结预测骨干，Agent 分析趋势、季节和不规则分量误差，输出紧凑控制信号，由轻量残差解码器修正预测；基于输入统计量检测漂移，支持无标签测试时适配。
- **相关性**：**时序 Agent / reasoning 高，TSFM 组合中高**。适合与 TimEvolve 对比：前者以控制信号修正预测，后者强调随已实现结果持续更新联合策略。

## 4. 时间序列 reasoning 模型最新研究

### [2026-09-21｜新增，优先级高] TimeLitmus：预测解释忠实性诊断

- **来源**：[arXiv 2609.24677](https://arxiv.org/abs/2609.24677)，v1：9 月 21 日 14:38 UTC。
- **摘要**：在金融与交通构建 4,856 条评测记录，包含反事实、对照干预、解释忠实性和捷径控制。十个 LLM 的困难配对正确率最高仅为金融 19.2%、交通 11.7%；交通中多数模型虽在超过 90% 的解释中提及被操纵的时序因素，行为支持却低于 22%。
- **相关性**：**时序 reasoning 评测高，Agent 证据校验高，TSFM 数值预测中**。它是基准而非新 reasoning 模型；说明解释中提及证据并不等于决策使用了证据。
- **可用性**：摘要表示将公开基准、评测与适配数据；本轮未确认已发布下载，不能当作现成可运行 harness。

### [2026-09-21｜新增，相邻方法] TAC-Time：将文本转为额外时序通道

- **来源**：[arXiv 2609.24156](https://arxiv.org/abs/2609.24156)，v1：9 月 21 日 06:18 UTC。
- **摘要**：把文本特征与数值序列放入共享时间骨干，保留文本信息的时间变化；通过注意力与频域分析检查跨模态依赖。
- **相关性**：**多模态时序预测高，reasoning 中低，Agent 特征工具中**。本轮未见显式推理轨迹或自主工具闭环证据，不称为新 reasoning 模型。其文本贡献值得用 TimeLitmus 式干预验证。

### [2026-08-05｜下午补录，9 月修订] CGTime：先计算事实，再生成语言描述

- **来源与日期**：[arXiv 2608.05238v2](https://arxiv.org/abs/2608.05238v2)，v1 为 8 月 5 日 13:57 UTC，v2 为 9 月 19 日；不是 9 月新首发。
- **摘要**：从真实多变量序列用确定性程序计算统计事实，再由 LLM 将事实转成描述，以此训练 4B 时序语言模型，减少让 LLM 自行读曲线生成标签的误差。作者报告在留出多变量事实评测与数值描述准确性上优于所比较的通用模型。
- **相关性**：**时序理解 / 数值证据 grounding 高，reasoning 数据构造高，Agent 工具层中**。重点是事实对齐而非已验证的长链推理；事实标签覆盖范围、时间隔离及真实异常适用性仍待审计。页面仅称投稿 AAAI 2027，不代表录用；本轮未核实权重和代码发布。

早版重点新增落在 reasoning 的评测与输入融合；未核实比已收录 WaveTLM 更新、且独立发布的通用时序 reasoning 模型。TimEvolve、CTRL 的 Agent 推理机制见上一节。

## 5. GitHub 和 Hugging Face 上值得跟踪的新项目

项目按仓库创建日期从近到远排列；日期为 GitHub 元数据 UTC，不代表首次公开代码或论文首发。研究与对应代码合并理解，不重复计论文数。

### 时间序列、Agent harness 与 AutoML

| 创建日期 / 最近推送 | 项目与来源 | 摘要、核验程度及相关性 |
|---|---|---|
| 2026-09-22 / 09-22 | [alikiany80/evots-agent](https://github.com/alikiany80/evots-agent)（首次收录） | EvoTS-Agent 的**独立第三方研究实现**，明确不是作者官方代码，也未宣称复现论文表格。提供模型规格选择与 Python 代码演化两种模式；已读 README、目录及 `evots/execution.py`，后者有 Docker 禁网与只读参数。smoke 示例为确定性模拟 proposer。**时序变点 Agent 高，harness 高，预测 / TSFM 低**；未验证隔离完整性或真实 LLM 性能。 |
| 2026-09-22 / 09-22 | [timescale/agent-observability-workshop](https://github.com/timescale/agent-observability-workshop)（首次收录） | Postgres / TimescaleDB 的 Agent 观测教程：调用、延迟、成本、错误事件，连续聚合与保留策略；README 和目录包含六步 SQL 及看板。**Agent 运行观测高，时序数据工程高，时序建模 / reasoning 低**；不能因数据带时间戳就称预测 Agent。 |
| 2026-09-16 / 09-22 | [google-research/rrsi](https://github.com/google-research/rrsi)（首次收录） | 上述 RRSI 官方实现；README 将提议、评审、评估、选择、历史映射到代码，并记录 9 月 21 日论文发布。候选编辑使用独立 git worktree。**harness / ML 实验管理高，时序适配中**；本轮读 README，未运行领域评测或审计全部实现。 |
| 2026-08-26 / 09-23 | [aooty/automl-agent-share](https://github.com/aooty/automl-agent-share)（首次收录） | LangGraph 的规划、模型选择、训练、评价、失败诊断循环，以聚合数据卡提供 LLM 上下文。目录有真实客户端、训练与留出评测模块；抽查 `scoring/splits.py` 为随机分层或按组划分，约 60/20/20，**不是按时间滚动验证**。**AutoML Agent 高，时序直接可用性低**；本地 LLM 失败可能回退规则，需检查 `plan_source`，不能将回退运行当作 LLM 效果。 |

Hugging Face 对 t0-beta 的定向入口本轮访问失败，未确认权重仓库，不增加单独条目；GitHub Trending 返回页面但可见内容不足以支持完整榜单判断，项目筛选以 GitHub API 搜索及原仓库为准。

### 光伏功率预测

- **[创建 2026-09-21；最近推送 09-21｜状态复核] [Italo-1/05-mev-P3](https://github.com/Italo-1/05-mev-P3)**：研究赤道与中纬度光伏在 1–24 小时预测中的模型比较。此前记录为占位线索；今日目录已见下载、预处理、实验、统计和绘图脚本，应修正为“有实现、未复现”。抽查 [实验脚本](https://github.com/Italo-1/05-mev-P3/blob/HEAD/src/03_experiment.py)可见按时间位置构建训练/测试窗口。**光伏高，时序评测 harness 中高，Agent / TSFM 低**。README 标注的是目标期刊，不能当作已发表论文；数据来源、完整预处理与实验结果仍待核验。
- **[创建 2026-08-10；最近推送 09-22｜仅活动刷新] [doccodyblue/ha-pvstrings](https://github.com/doccodyblue/ha-pvstrings)**：pvlib 物理预测叠加残差校正，面向 Home Assistant。**光伏工程高，Agent 工具层中，reasoning / TSFM 低**。本次只核验推送元数据，未比较提交差分，不宣称新增功能。

## 6. 光伏功率预测最新研究

### [2026-09-23｜下午线索，低优先级] 自适应正常功率参照与遮挡监测

- **来源与日期**：[Preprints.org 202609.1986](https://www.preprints.org/manuscript/202609.1986)，官方站点搜索结果列 Submitted 9 月 22 日、Posted 9 月 23 日。原页打开失败，**日期仅由官方索引确认，更早首发与完整实验不确定**；预印本未经同行评审。
- **摘要范围**：使用邻近光伏阵列及环境传感器，构建正常功率的自适应参照，区分遮挡损失与天气引起的正常波动。只依据官方索引摘要，不列性能结论。
- **相关性**：**光伏功率监测高，预测残差诊断中，未来功率预测 / Agent / TSFM 低**。属于监测旁支，不能据此声称已验证未来功率预测效果。

### [2026-09-21｜新线索，低优先级] DTW-PAM 聚类与 TCN 分位数回归的光伏概率预测

- **来源**：[AIP / Journal of Renewable and Sustainable Energy 官方页面](https://pubs.aip.org/aip/jrse/article-abstract/18/5/053502/3404791/Probabilistic-forecasting-of-photovoltaic-power)。搜索结果明确列在线日期 **2026-09-21**，但正文打开失败；**更早预印本日期不确定**。
- **摘要范围**：标题与官方搜索摘要支持“区间预测、误差校正、DTW-PAM 聚类、改进 TCN 分位数回归”；未取得完整摘要与实验协议，不列数值收益。
- **相关性**：**光伏概率预测高，Agent 的区间预测工具中，TSFM / 显式 reasoning 低**。仅列待核线索，尚不能评价区间校准、时间隔离或起报天气可得性。

### [2026-09-21｜新增，相邻能源方法] GraphToolbox：图预测实验的统一接口

- **来源**：[arXiv 2609.24609](https://arxiv.org/abs/2609.24609)，官方 v1 日期 9 月 21 日。
- **摘要**：把图构造、卷积选择、训练、在线专家聚合、解释与显著性检验统一到配置流程。法国区域负荷案例中聚合改善误差；**净负荷案例中图模型仍不及传统加性模型**，拆分物理分量预测虽改善仍未弥合差距。
- **相关性**：**ML / forecasting harness 高，多站点能源预测中高，光伏直接证据中低，LLM Agent 低**。这是能源建模工具论文，不是光伏专项验证；本轮未核 GitHub 首次公开日期，不另计新建仓库。

### [2026-09-19｜下午补录，相邻光伏研究] Shading-Aware Rooftop PV Placement

- **来源与日期**：[arXiv 2609.23021](https://arxiv.org/abs/2609.23021)，v1 为 9 月 19 日 13:39 UTC；[论文所链官方工具](https://github.com/tobiasvonarx/shading-aware-pv)。
- **摘要**：结合小时天气、地形及周边建筑、树木、屋顶细节模拟遮挡，用于既有阵列发电量估计及新布局优化；在 11 个瑞士站点对照生产记录，并对另外 19 个屋顶模拟布局。作者明确指出绝对发电量估计仍对系统规格敏感。
- **相关性**：**光伏物理特征 / 场站建模高，功率预测前处理中，Agent / TSFM / reasoning 低**。这是布局与发电量模拟，不是起报时使用天气预报的未来功率预测实验；模拟收益不可当成实测增益。官方仓库本轮访问失败，创建日期与实现状态**不确定**，不另计已核实新 GitHub 项目。

## 7. 检索记录与边界

以下原有检索记录来自 09:04 早版；下午新增核验范围与限制见本节末尾，早版计数不视为下午重测。

- **DailyArXiv 必检**：[仓库](https://github.com/zezhishao/DailyArXiv)的 `timeseries` 分支返回不存在，回退默认 README；标注 **Last update: 2026-09-23**，Time Series 共 **72 条**，最新条目日期 9 月 21 日。[最新自动提交](https://github.com/zezhishao/DailyArXiv/commit/24e9b81be99d9bab2acdf8e31146e4cef5293f69)时间为 9 月 22 日 19:50 UTC。直接 raw 下载超时后改用 GitHub README 接口成功。聚合列表只用于发现，主要条目已回 arXiv 核对。
- **arXiv**：读取 [cs.LG recent](https://arxiv.org/list/cs.LG/recent)、[cs.AI recent](https://arxiv.org/list/cs.AI/recent)与候选摘要。可见最新公告为 9 月 22 日；cs.LG 该日共 426 条，本轮首先检查前 50 条，再结合 DailyArXiv 补查，**不是全学科、全分页穷尽检索**。TimeLitmus 为 cs.AI 条目，已单独核验。
- **会议 / 机构**：定向搜索 OpenReview/ICLR、ACL、PMLR/ICML、NeurIPS、KDD、AAAI 与 Google Research。ACL 补出 CTRL 的 7 月版本；[AAAI ORTCL](https://ojs.aaai.org/index.php/AAAI/article/view/39526)为 3 月 14 日，超窗排除。[KDD 教程](https://kdd2026.kdd.org/tutorials/)和 [NeurIPS workshop 公告](https://blog.neurips.cc/2026/08/10/announcing-the-neurips-2026-workshops/)不当作模型新发布；其余未核实更高优先级新首发，不表示不存在更新。
- **旧论文过滤**：[Overlay_dx](https://arxiv.org/abs/2609.24586)虽 9 月上传，官方 journal-ref 指向 **2025 年 OLA**，排除近三个月新研究。DailyArXiv 中 2025 年视觉 Transformer、2024 年 NIRVAR 的 9 月修订也不计新首发。
- **GitHub 搜索**：限定创建日期 6 月 23 日至 9 月 23 日，分别查 `time-series agent`、`timeseries agent`、`automl`、`harness machine-learning`、`photovoltaic forecasting`，按更新排序各取前 6；总命中依次 **143 / 8 / 809 / 139 / 52**。关键词噪声多，总数不代表相关项目数量；另跟随论文定位 RRSI 官方代码。只有描述而缺实现核验的 FinAgent、第三方 API 索引等未列主项目。
- **AI HOT**：用技能补检近七天 `time series` 线索，仅返回芯片贸易分析，主题不相关，排除。数据来自 [AI HOT](https://aihot.virxact.com)。
- **建议下一步**：先审 TimEvolve 的延迟标签协议，再用 TimeLitmus 式反事实测试检查解释忠实性；选模实验比较 t₀ / TimesFM-3 时固定起报信息集，并为自适应 harness 留出独立时间段与数据集。这些是本简报的研究建议，不是已复现结论。

### 下午复核与 DailyArXiv 补检结论

- **DailyArXiv**：本轮重新打开[官方 README](https://github.com/zezhishao/DailyArXiv)，仍显示 Last update 2026-09-23；Time Series 中直接确认 t₀、TAC-Time、VeriTS、CGTime 等相关主题。窗内补录 VeriTS（v1 8 月 28 日 / 列表 9 月 21 日）与 CGTime（v1 8 月 5 日 / 列表 9 月 19 日），按 v1 排序并降低“最新首发”优先级；列表中的 [gwBenchmarks](https://arxiv.org/abs/2605.11269v2)为 5 月 11 日 v1、9 月 20 日 v2，首发超窗，排除主榜。早版的 72 条计数本轮未重新统计。聚合日期不等于首发日期。
- **光通信光功率**：定向检索未核实新的窗内预测论文；再次命中 [Efficient Multi-Agent Optimization of Optical Power](https://arxiv.org/abs/2606.05795)，首发 6 月 4 日，早于 6 月 23 日窗口，且主题是功率优化，排除主榜。
- **论文增量**：对 arXiv 时序 / reasoning 与光伏主题追加定向检索并读上述原始摘要及历史。未核实比早版 TimEvolve / t₀ 更晚的直接时序 Agent 或 TSFM 首发；光伏侧增加相邻建模论文与一条低优先级监测线索。会议、机构博客及 Hugging Face 广度沿用早版，本轮不声称再做完整扫描。
- **GitHub**：按同一三个月创建窗口尝试 `time-series agent`、`timeseries agent`、`automl`、`harness machine-learning`、`photovoltaic forecasting` 五类 API 检索，均因 DNS 失败未返回结果；补充网页搜索未得到可提升优先级的新项目证据。保留早版的四个新仓库及光伏状态复核，不将旧项目的新推送写成新项目发布。
- **AI HOT**：下午再次按时序关键词补检近七天精选，仅得一条无关芯片贸易分析，排除；未增加来源未经核实的新闻。
- **优先阅读**：保留 TimEvolve 的延迟标签协议、TimeLitmus 的干预忠实性评估为主线；新增 CGTime 可作为数值事实标签构造参考。VeriTS 与两项光伏旁支列为工具和特征设计参考，均未做实验复现。

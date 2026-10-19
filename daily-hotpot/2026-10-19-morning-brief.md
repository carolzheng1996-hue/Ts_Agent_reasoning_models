# 时间序列 Agent / Reasoning 晨间简报｜2026-10-19

- **窗口**：2026-07-19 至本次检索截止（北京时间 2026-10-19 下午；具体时间见文末）。今天周一，不更新周报。
- **今日增量**：补收 conformalForecast、FDMSNet，以及 10-18/19 新建的两个 Agent 实验监控仓库。未确认比 10-15 更晚的核心 TSFM / 时序 reasoning 首发论文；保留少量已核验重点，不把重复收录计为新增。
- **日期口径**：研究按 arXiv v1 或出版商发布日期；项目按 GitHub 创建日期（UTC），各栏目从近到远。推送、修订、聚合器更新与研究首发分别标明。所有效果均为作者报告，本轮未运行项目或复现实验。
- **优先关注**：顺序校准如何保存已发预测与逐预测步长误差；Agent 如何在固定预算下筛除无效实验；光伏对照是否具有相同的信息可用性和更新频率。

## 1. 时间序列基础模型最新研究

### 2026-10-15｜Timestral｜持续跟踪，高优先级

- 来源：[Mistral 官方发布](https://mistral.ai/news/timestral) · [209M 模型卡](https://huggingface.co/mistralai/Timestral-209M) · [官方代码](https://github.com/mistralai/timestral)。这是模型发布，技术报告尚待发布；代码和权重合并计一项。
- 摘要：四档 5M、28M、123M、209M 模型，支持多变量、历史与已知未来协变量以及概率分位数输出。官方报告零样本基准优势，本次未复核排行榜或复现。
- **相关性**：TSFM 高，Agent 预测工具高，光伏迁移潜力高，显式 reasoning 低。光伏实验应输入预测起点实际可取得的天气预报；分位数输出不等同联合未来路径。仓库创建日仍未确认，不称当天新建项目。

### 2026-10-15｜PathFM：联合未来轨迹生成｜持续跟踪，高优先级

- 来源：[arXiv 2610.22358](https://arxiv.org/abs/2610.22358)，本轮核实 v1 为 10-15。
- 摘要：用 flow matching 生成完整未来轨迹，蒸馏到一至两步并共享历史缓存；fps-bench 在边际误差之外增加 energy、variogram 与下游路径指标。
- **相关性**：概率 TSFM 高，Agent 决策输入中高，光伏累计发电量、峰值及事件时刻评估有迁移价值；尚不能据摘要断言光伏收益。路径相关评分应与边际准确率分别比较。

### 2026-10-15｜conformalForecast：顺序、多步预测区间工具｜今日补收，配套方法

- 来源：[arXiv 2610.21648](https://arxiv.org/abs/2610.21648)，v1 10-15 10:28 UTC；由 DailyArXiv 补检发现并回原页核验。
- 摘要：R 包将点预测与校准分离，保存不同预测步长的误差与校准状态；支持经验分位数、反馈式及依赖感知校准。新观测到达后增量更新，同时保留此前发出的区间。示例为澳大利亚五地区短期电价。
- **相关性**：TSFM 输出校准、Agent 顺序评测工具高，光伏概率预测迁移中高，显式 reasoning 低。它是配套方法而非新基础模型；总体覆盖率接近目标不能保证每个时段和步长均达标，非交换时序也不能直接套用无条件覆盖保证。尚未独立核实代码仓库首发日，不重复计作新 GitHub 项目。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-14｜TimeRSI：冻结骨干外的部署流程自改进｜持续跟踪

- 来源：[arXiv 2610.19725](https://arxiv.org/abs/2610.19725) · [代码](https://github.com/haoxin1998/TimeRSI)。v1 10-14，v2 10-15；DailyArXiv 列示的是后者。
- 摘要：编码 Agent 把任务描述转成可执行流程，在历史预测窗口上按误差修订；部署时根据已完成预测的反馈选择候选流程。作者在 TIME 与 fev-bench 的 198 个任务上比较。
- **相关性**：时序 Agent / harness / TSFM 部署高，reasoning 中。优先审查反馈标签到达时点、搜索预算及选择集与测试集隔离。冻结骨干不等于整个系统没有任务适配。

本轮未确认更新的直接时序建模 Agent 首发。新增通用实验监控工具见第四栏，不能据工具名称认定已支持时序任务。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-15｜Twice Upon a Time：双视图时序推理｜持续跟踪

- 来源：[arXiv 2610.22327](https://arxiv.org/abs/2610.22327)，本轮核实 v1 为 10-15。
- 摘要：折线图保留绝对量纲，归一化延迟嵌入突出时间结构；两个视觉编码器连接共享语言模型。作者在 Qwen3-VL-8B 上报告 TSRBench 准确率由单折线图的 44.5% 提升至 53.2%。
- **相关性**：时序 reasoning 高，Agent 感知组件高，直接光伏数值预测中低。应关注视图干预与单视图消融；问答准确率不能替代解释忠实性或数值预测校准验证。

### 2026-10-15｜PocketTSLM：手机端 soft-prompt 推理｜持续跟踪

- 来源：[arXiv 2610.21308](https://arxiv.org/abs/2610.21308) · [官方代码](https://github.com/SchmiedmayerLab/PocketTSLM)。本轮 DailyArXiv 列为 v1 10-15，与上次核验一致。
- 摘要：把 OpenTSLM 的时序嵌入接入手机 MLX 推理，针对 EEG 睡眠分期与 ECG 问答比较数值一致性与上下文成本。
- **相关性**：端侧时序 reasoning 高，通用预测基础模型中低。属于已有模型的移动部署；约 12 倍 token 节省是特定格式下的作者结果，不代表普遍性能收益。代码与论文合并，不额外认定仓库新建日期。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 machine learning / AutoML / harness

### 2026-10-19 创建｜younghwan91/stoploss｜新增，中优先级

- 来源：[项目与 README](https://github.com/younghwan91/stoploss) · [项目元数据](https://api.github.com/repos/younghwan91/stoploss)。GitHub 搜索核实创建 03:27 UTC、推送 03:43 UTC；已读原始 README 与 pyproject.toml。
- 摘要：Python 标准库 CLI 与 Claude Code 插件，登记指标和预算，通过追加式记录给出继续、停止或请求人工判断；包含吞吐下降、预算、顺序置换检验与可选平台期规则。无后台进程，状态在调用或会话钩子触发时检查。
- **相关性**：Agent 实验预算 / harness 高，时序 AutoML 迁移中，TSFM 本体低。适合借鉴实验停止治理，尚未验证时序搜索适用性。
- 限制：README 明确平台期规则在一种容差设置下检验失败，容差并非遗漏收益上界；顺序置换检验依赖对照抽样可交换性。不可将逐试验或逐单元结论直接升级为多重比较整体保证。未安装或运行。

### 2026-10-18 创建｜itsuresha/agentic-automl-harness｜新增，中高优先级

- 来源：[项目与 README](https://github.com/itsuresha/agentic-automl-harness) · [冻结协议](https://github.com/itsuresha/agentic-automl-harness/blob/main/FREEZE_PROTOCOL.md) · [元数据](https://api.github.com/repos/itsuresha/agentic-automl-harness)。创建 14:20 UTC、推送 14:28 UTC。
- 摘要：在 AutoML trial 执行前，利用验证分数、配置哈希及执行信息决定运行或跳过；包含重复配置、预处理泄漏和训练预算故障监控。README 描述 16 个 OpenML 数据集的开发轨迹与 6 个外部数据集验证。
- **相关性**：Agent / AutoML / harness 高，时序流程质量监控迁移中高，TSFM/reasoning 本体低。其主要数据为表格分类，尚未证明对滚动窗口、标签延迟或分布漂移有效。
- 限制：作者报告外部 Tier 2 误跳过率 0.1111，高于 0.10 目标；一个数据集净节省为负。README 还注明部分绘图脚本违反冻结值读取流程，重跑前需修复。已读 README、协议、CITATION，未验证产物哈希和实验。
- **日期区别**：协议自述冻结于 09-15；10-18 是仓库创建日，不是全部方法首次产生或论文正式发表日。正式论文发表日期不确定，不纳入已发表新论文统计。

### 光伏功率预测

### 2026-09-21 创建｜Italo-1/equatorial-photovoltaic-forecasting｜持续跟踪，今日补读实现

- 来源：[项目](https://github.com/Italo-1/equatorial-photovoltaic-forecasting) · [实验脚本](https://github.com/Italo-1/equatorial-photovoltaic-forecasting/blob/main/src/03_experiment.py) · [元数据](https://api.github.com/repos/Italo-1/equatorial-photovoltaic-forecasting)。本轮搜索显示 10-18 22:09 UTC 推送；九月晨报已收录，不算新增项目。
- 摘要：比较 persistence、ARIMA、Prophet、RF、XGBoost、LSTM 与 Transformer，覆盖 1/6/24 小时预测；赤道站为 PVGIS 模拟发电，中纬度站用实测发电。
- **相关性**：光伏预测基线与评测高，Agent 自动实验工具中，TSFM/reasoning 低。
- 核查边界：已读 README 与实验脚本。脚本说明 ARIMA/Prophet 每窗口拟合一次并静态预测整个测试块，而其他方案使用滞后输入；更新频率与信息可得性可能不同，需统一预测起点后再解释排名。未完整审计预处理、运行结果或此次提交差异，不将推送视为新功能。文章仅称为 MEV 准备，发表日期不确定。

### 2026-07-22 创建｜cyrilvoyant/PV_ELM_pred｜持续跟踪

- 来源：[项目与 README](https://github.com/cyrilvoyant/PV_ELM_pred) · [元数据](https://api.github.com/repos/cyrilvoyant/PV_ELM_pred)。本轮核实 10-18 09:32 UTC 推送，创建日在三个月窗口内。
- 摘要：比较 persistence、BLEND、AR-OLS 与多种 ELM，多站点、多预测步长，README 列有 TimeGPT 接口。
- **相关性**：光伏时序基线高，TSFM 对照中，Agent/reasoning 低。README 说明仅 Palaiseau 示例数据公开附带，其他站点需申请；不能据仓库存在认定所有实验可直接复现。已读 README，未运行，未把推送当新增研究。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-10-13｜FDMSNet：频率分解与多尺度混合预测｜今日补收，中优先级

- 来源：[PLOS ONE 原文与 DOI](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0356755)。出版商索引明确 Published October 13, 2026；本次直接页面打开失败，以出版商已索引摘要和日期为证据，未读完整方法。
- 摘要：把风电与光伏序列分解为非平稳和稳定成分，分别采用 MLP 与多分支下采样、多尺度融合预测；数据来自 2021 年国家电网新能源预测竞赛。
- **相关性**：光伏预测高，时序结构化建模中高，Agent/reasoning/基础预训练模型低。可作为领域基线线索；需核验频率分解、归一化及模型选择是否严格限制在训练窗口，未作领先性或可部署性判断。

### 2026-10-13｜已发布光伏预测的概率残差校正｜持续跟踪

- 来源：[Preprints.org 原文](https://www.preprints.org/manuscript/202610.1212)。10-12 提交、10-13 公开，本轮复核，未同行评审。
- 摘要：以供应商已发布预测、日历和历史测量误差做 LightGBM 残差修正，并用顺序校准构建区间；比较有限适配的 Chronos-2。点误差、覆盖率与区间评分收益并不完全一致。
- **相关性**：光伏概率预测 / TSFM 对照高，Agent 反馈工具中高，显式 reasoning 低。必须核对完整预测轨迹的发布时间、误差反馈延迟和校准窗口；可与 conformalForecast 的逐步状态管理对照。

**光通信功率预测增量**：本轮检索 optical power prediction / forecasting，未确认新增直接论文。检出的光源稳定性测量、光器件设计和过窗光网络研究不等同未来光功率预测，不以相关关键词填充条目。

## 6. DailyArXiv 必检结论

本轮成功下载并读取完整 [DailyArXiv master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，重点核查 [Time Series 板块](https://github.com/zezhishao/DailyArXiv#time-series)。**Last update 已由上次 10-16 变为 2026-10-19；该板块实际论文行 83 条，最新列示日 10-15**。行数是当前快照，不是三个月全部论文数。

- **有相关窗内论文**：PathFM、Twice Upon a Time、PocketTSLM、TimeCap、TimeRSI、conformalForecast 等。前三者及 TimeRSI 已在正文跟踪；conformalForecast 本日补入。TimeCap 为 10-15 v1 的确定性可重建时序描述管线，相关性为 TSLM 训练数据 / Agent 证据高，已在上一期收录，来源：[arXiv 2610.21274](https://arxiv.org/abs/2610.21274)。本日不重复计新增。
- **窗内修订不当作首发**：TimeRSI 的 README 日期 10-15 对应 v2，官方 v1 为 10-14，正文按 v1 排序。
- **FANTF 降级排除**：[官方版本史](https://arxiv.org/abs/2504.00070)确认 v1 **2025-03-31**、v2 **2026-10-15**；README 用修订日。其模糊注意力与时序建模相关，但首发超窗，本次不列新研究；未审计版本差异。
- **AlphaCast 降级排除**：[官方版本史](https://arxiv.org/abs/2511.08947)确认 v1 **2025-11-12**、v6 **2026-10-12**；README 列 10-12。Agent/reasoning 高相关，但首发超窗，保留排除说明，不推断新增能力。
- 聚合器已补齐上期独立检出的数篇论文；**10-19 是列表更新时间，不是论文发布日期**。本轮对高相关条目核验，不声称审计全部 83 篇全文。

## 7. 检索范围与证据限制

- **原始来源优先**：arXiv 摘要与版本史、DailyArXiv 完整 README、Mistral 与 HuggingFace 官方材料、GitHub 搜索元数据和原始文件、Preprints.org、PLOS ONE。定向搜索 OpenReview、ACL、ICML/PMLR、NeurIPS、KDD/ACM、AAAI；会议检索不是逐篇穷尽。
- **日期过滤**：BECRA 的 PMLR 卷本虽在九月上线，但会议为 7 月 6–11 日，已有窗外公开记录，不作为本轮首发；来源：[ICML 官方页](https://proceedings.mlr.press/v306/zeng26e.html)。旧 ICLR/AAAI 条目也不以检索抓取日期算新论文。
- **GitHub 覆盖**：五组 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting`，限定创建日 07-19 至 10-19，按更新排序各取前三项，分别命中 **4 / 126 / 91 / 27 / 62**。数字有重叠，非有效新增数；不声称 Trending 排名或全量覆盖。个人主页、用量监控库及与时序关系弱的项目未提升优先级。
- **访问限制**：仓库搜索成功，随后 README/目录 API 限流；已回退原始 README，另查 stoploss 的 pyproject、AutoML harness 协议与引用文件、光伏实验脚本。未取得完整目录清单，不声称完成源码审计。仓库创建日不等同所有代码首次公开日。
- **资讯补充**：通过 AI HOT 技能读取 [AI HOT](https://aihot.virxact.com) 近七天论文精选，共 11 条，未发现需额外加入的直接时序主线；聚合摘要不替代原始证据。
- **下一步**：优先验证 conformalForecast 的标签延迟处理、AutoML gate 在非平稳时序上的误跳过控制、光伏模型比较的统一预测起点与更新频率。
- **仓库操作**：检索前已加载指定 SSH key，`git pull --ff-only` 成功且已是最新。仅暂存、提交本日晨报，保留用户原有修改、暂存文件和未跟踪文件。推送结果以任务回执为准。

检索记录完成时间：2026-10-19 15:39:26 CST。

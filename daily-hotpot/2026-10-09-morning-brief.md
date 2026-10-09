# 2026-10-09 时间序列 Agent / Reasoning 晨间简报

检索时间：2026-10-09 08:50—09:00（北京时间）；窗口：**2026-07-09 至检索截止，含边界**。今天周五，另生成 ISO 第 41 周周报。论文按官方首次提交日、项目按 GitHub 创建日在各栏目内倒序排列；日期使用来源原始日期（arXiv / GitHub 为 UTC），修订日另列。本文为定向精选，不是完整文献目录。论文性能均为作者报告，未执行模型或项目。

对照仓库实际最新的 10 月 8 日晨报与自动化记忆去重；“新增”表示本日补充发现，不等于今天首次发表。重点新增 WxFM-XL、轨迹分歧、预处理评测，以及五个有明确创建日期的 GitHub 项目；TeeMoE 是窗内修订跟踪，Agent 核心论文继续跟踪。

## 1. 时间序列基础模型最新研究

### 2026-10-07｜WxFM-XL：从单变量基础模型到多站点天气预测｜新增

- **来源**：[arXiv 2610.10057](https://arxiv.org/abs/2610.10057)，v1 10 月 7 日；DailyArXiv Time Series 命中。
- **摘要**：在单变量 TSFM 之上引入站点间误差相关先验图，并与空间相关图动态融合，使适配同时考虑地理关系和各站点相对基础模型的误差模式。作者报告多个数据集上优于所比基线。
- **相关性**：**TSFM 高，光伏上游气象迁移中高，Agent / 显式 reasoning 低**。这是天气预测实证，不是光伏功率实证；误差先验图必须只由训练期或当时已揭示的误差建立。

### 2026-10-07｜Temporal Predictive Multiplicity：误差相近不代表轨迹相同｜新增

- **来源**：[arXiv 2610.09994](https://arxiv.org/abs/2610.09994)，v1 10 月 7 日；DailyArXiv 命中。
- **摘要**：把近似同等准确模型的分歧从单个预测点扩展到完整轨迹。在 19 种神经预测架构、11 个数据集上发现，整体误差接近仍可能对应明显不同的时序路径，逐步分歧也不能充分代表轨迹分歧。
- **相关性**：**Agent 选模 / harness 高，TSFM 评测中高，光伏爬坡与调度迁移中高**。不是新基础模型；可作为仅按 MAE 晋升候选的补充检查，不能据此声称已改善电站调度。

### 2026-10-06｜预处理感知的预测基准｜新增

- **来源**：[Are We Really Benchmarking Forecasting Models?](https://arxiv.org/abs/2610.09096)，v1 10 月 6 日，标注 Under Review；DailyArXiv 命中。
- **摘要**：在 29,000 条 M4 序列上组合 11 种模型与 16 条可逆预处理流程，说明差分等处理会显著改变模型比较；仅统一简单缩放可能偏向内置预处理的架构。
- **相关性**：**AutoML / 建模 Agent / harness 高，TSFM 公平评测高**。应把预处理作为验证集搜索的一部分，并统计额外搜索预算；摘要中的逐序列最优收益不能直接视为部署时可实现收益。

## 2. 时间序列建模 Agent 最新研究

本轮未核实比以下条目更晚的直接时序自主建模论文；保留最近窗内重点，不将新 GitHub 创建日期当作新研究发表日。

### 2026-10-04｜TSHarness：数值感知与语义推理解耦｜持续跟踪

- **来源**：[arXiv 2610.04942](https://arxiv.org/abs/2610.04942)，今日重新核验摘要与 v1 日期。
- **摘要**：学习式工具选择器提取统计和时序证据，写入结构化感知状态；回答 Agent 在证据不足时触发再次感知，实现目标侧不训练的跨数据集问答。
- **相关性**：**时序 Agent / reasoning / harness 高，自动训练预测器低**。目标侧零样本不等于工具选择器未经训练；需要审计选择器训练数据和评测数据隔离。

### 2026-10-03｜EvoCast：自主预测架构演化｜持续跟踪

- **来源**：[arXiv 2610.04517](https://arxiv.org/abs/2610.04517) · [官方代码](https://github.com/18e0-x/EvoCast)，今日重新核验论文。
- **摘要**：从运行基线与机制消融出发，利用数据特征、失败记录提出架构修改；LLM 提出假设和实现代码，确定性程序管理修改范围、评估和候选晋升。
- **相关性**：**时序建模 Agent / AutoML / harness 高**。继续作为工程审计优先项；论文三个案例的结果不证明任意数据集上的可靠性，下一步应查验证集晋升与最终测试隔离。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-05｜COMMON-TSQA：回答正确与证据使用分开评价｜持续跟踪

- **来源**：[arXiv 2610.05686](https://arxiv.org/abs/2610.05686)，v1 10 月 5 日，今日重新核验。
- **摘要**：统一已有时序问答数据与答案格式，比较四个系统，通过六种输入干预检查数值证据使用，并审计解释的事实依据、推理有效性及答案一致性。
- **相关性**：**reasoning / Agent 验证高，直接功率预测低**。这是评测方法，不是新推理权重；可用于发现模型靠问题文本猜答案的情况。

### 2026-09-30｜OpenTSLM TeeMoE：预测、上下文和时序语言分析统一｜10 月 7 日 v2

- **来源**：[arXiv 2609.40265](https://arxiv.org/abs/2609.40265) · [官方 GitHub](https://github.com/OpenTSLM/OpenTSLM-TeeMoE) · [官方 HuggingFace](https://huggingface.co/OpenTSLM/TeeMoE)。v1 为 9 月 30 日，v2 为 10 月 7 日；DailyArXiv 使用修订日。
- **摘要**：共享骨干上独立训练预测聚合、原生预测、时序分析三个低秩专家，由学习式控制器对冻结的专家参数更新进行混合，统一数值预测与语言分析。
- **相关性**：**TSFM / reasoning 高，Agent 预测工具高**。今日确认论文指向官方仓库和模型页；未下载权重或运行，也未比较 v1/v2 差分，不宣称本次修订新增某项能力。记忆已记录该模型，本日不计新首发或新仓库。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

项目日期是 **GitHub 创建日（UTC）**；晚间创建项目的北京时间可能已是次日。以下五项相对昨日实际晨报均为新增收录，且 API 均显示非 fork；非 fork 不代表代码首次创作于该日。已读仓库目录并抽查关键源码，均未安装或执行。GitHub 与 HF 同一项目不重复计数。

### 时间序列、Agent harness、machine learning 与 AutoML

| 创建日期 | 来源 | 摘要、相关性与核验结论 |
|---|---|---|
| 2026-10-08 16:43 UTC | [claude-code-kaggle-grandmaster](https://github.com/TranBaDat2607/claude-code-kaggle-grandmaster) · [切分代码](https://github.com/TranBaDat2607/claude-code-kaggle-grandmaster/blob/main/plugins/kaggle-grandmaster/kgkit/cv.py) | Claude Code 竞赛工作流，含实验记录、验证、集成、提交检查与时序策略。**ML Agent / harness 高，时序建模中高**。源码确有按唯一时间戳的扩展窗口、gap、最大训练长度；默认 assign_folds 仍是普通折分，必须显式调用 time_series_splits。不能把 Grandmaster 名称当竞赛成绩或效果认证。优先级中高。 |
| 2026-10-08 08:14 UTC | [Multi-Agent-Data-Analyst](https://github.com/tanyaverma20/Multi-Agent-Data-Analyst) · [模型工具](https://github.com/tanyaverma20/Multi-Agent-Data-Analyst/blob/main/src/tools/model_tools.py) | 用多角色和工具总线连接画像、EDA、特征工程、AutoML、验证与报告。**通用 AutoML 高，时序预测低**。代码使用随机留出及 shuffled KFold；特征工程、预处理和带标签的特征筛选在完整外层训练集上先拟合，再把变换结果交给内层 CV，存在内层验证信息泄漏风险。README 的防泄漏表述不能直接采信，工程优先级低。 |
| 2026-10-07 22:15 UTC | [EpochGo](https://github.com/AryanDinakaran/EpochGo) · [benchmark_runner.py](https://github.com/AryanDinakaran/EpochGo/blob/main/epoch_go/tools/benchmark_runner.py) | CrewAI / Ollama 驱动本地预处理、七类模型比较、调参与服务生成。**通用 AutoML / Agent 高，时序预测低**。抽查基准执行器采用默认随机 train_test_split，没有在该路径看到时间切分；不能直接用于预测回测。可借鉴本地工具编排，优先级中低。 |

### 光伏功率预测

| 创建日期 | 来源 | 摘要、相关性与核验结论 |
|---|---|---|
| 2026-10-08 17:05 UTC | [QEFSF-for-Solar-Photovoltaic-Generation-Forecasting](https://github.com/SunawarKhan/QEFSF-for-Solar-Photovoltaic-Generation-Forecasting) · [Notebook](https://github.com/SunawarKhan/QEFSF-for-Solar-Photovoltaic-Generation-Forecasting/blob/main/notebook.ipynb) | 将光伏特征选择写成带基数约束的 QUBO，比较经典、量子启发与模拟 QAOA；下游使用 HistGradientBoosting。**光伏 / AutoML 高，Agent / TSFM 低**。源码按行序 80/20 留出，主流程全量筛选后另加训练期重算检查；重算仍使用既有 KEPT 候选集，不足以证明整个选择流程完全隔离。使用同期天气预测同期 Energy delta[Wh]，尚未核实真实预报可得性与预测跨度；目标是区间电量，不能直接当瞬时功率。README 路径与实际根目录文件不同；论文首发日期不确定，仅按代码创建事件收录，优先级低。 |
| 2026-10-08 12:18 UTC | [PowerForecasting](https://github.com/18271631957/PowerForecasting) · [数据加载器](https://github.com/18271631957/PowerForecasting/blob/main/dataloader/data_loader.py) | 风光预测框架目录包含 DLinear、PatchTST、TimeXer 和多种 PMDformer。**光伏建模高，Agent / reasoning 低**。未发现 README；数据加载器导入 models.MachineLearning.XGBoost.DataSetUtils，但当前递归目录没有对应模块。仅可作为代码线索，暂不能称可直接运行或结果已复现，优先级低。 |

## 5. 光功率 / 光伏功率预测最新研究

本轮没有核实 10 月 7—9 日新的直接光伏预测论文；代码新建不等于论文新发表。保留一个近期、原站日期明确的研究重点，并单列不确定线索。

### 2026-09-29｜STR：短时状态校正适配器｜持续跟踪

- **来源**：[State Transport Routing](https://arxiv.org/abs/2609.36926)，v1 9 月 29 日，今日重新核验。
- **摘要**：在冻结预测骨干之上结合原预测、最新功率水平与近期趋势，只修正前 120 分钟；四个公开光伏数据集上的结果支持短时适配，但 LightGBM 未得到可靠改善。
- **相关性**：**直接光伏预测高，Agent 在线校正工具高，TSFM 适配迁移中**。下一步查观测延迟与适配器训练切分，不把冻结骨干理解为无需训练任何模块。

### 日期不确定｜低优先级候选，不计已确认窗内首发

- [Climate-informed residual learning and conformal calibration](https://ruja.ujaen.es/items/7aa55261-4550-4188-b8d2-8381a821c669) · [DOI](https://doi.org/10.1016/j.seta.2026.105403)：机构索引描述物理基线、XGBoost 残差和共形区间用于德国聚合光伏，**光伏概率预测高、Agent 风险工具中**。全文页访问失败，首次上线日期未确认；不采用搜索抓取日期，不引用性能数字。
- [PI-SDNN](https://www.nature.com/articles/s41598-026-74064-8)：昨日记录官方发表日 10 月 1 日，本轮页面跳转失败，最早预印本仍不确定。物理约束与稀疏网络用于太阳能预测，**光伏高、TSFM / reasoning 低**；仅继承线索，今日未重新确证正文。

光通信方向的 [多 Agent 光功率优化](https://arxiv.org/abs/2606.05795) 首发 6 月 4 日，超窗且是优化任务；[9 月 22 日星间光链路研究](https://arxiv.org/abs/2609.25986)讨论偏振与能量传输，非时间序列功率预测，不纳主清单。

## 6. DailyArXiv 必查结论

已成功下载完整 [master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，并解析 [Time Series 栏目](https://github.com/zezhishao/DailyArXiv#time-series)：**Last update: 2026-10-09，89 条论文记录，最新行日期 2026-10-07**。这是滚动栏目当前快照，不是累计论文总数；README 更新日也不是论文发表日。

- **确认有相关窗内论文并补充**：WxFM-XL、Temporal Predictive Multiplicity、预处理基准；TeeMoE 按 9 月 30 日首发、10 月 7 日修订保留。上文所有这些条目均回 arXiv 核过日期。
- **相关但超窗，排除主清单并降优先级**：[电价 TSFM 评测](https://arxiv.org/abs/2607.02623)列表日 10 月 7 日，对应 v2，v1 实为 **7 月 2 日**；[DiTS](https://arxiv.org/abs/2602.06597)列表日 10 月 7 日，对应 v2，v1 实为 **2 月 6 日**。修订不重置首发日；ICML workshop 标注也不改变该过滤。
- **其他窗内相关方向**：[MORA](https://arxiv.org/abs/2610.09473)，v1 10 月 7 日，利用长短期上下文区分漂移和异常，**Agent 异常诊断中高、直接预测 / TSFM 低**，作为次级工具线索；不把所有传统时序论文都称为 foundation model 或 reasoning。

## 7. 来源覆盖、限制与下一步

- arXiv：通过定向搜索、DailyArXiv 线索与官方摘要 / 版本史交叉核验；未核实 10 月 8 日新论文不代表当日没有发表。
- 会议：定向检索 OpenReview / ICLR、ACL、PMLR / ICML、NeurIPS、KDD、AAAI。OpenReview 命中的较早 ICLR reasoning 工作不作为新动态；[ACL ODTQA-FoRe / TimeFore](https://aclanthology.org/2026.findings-acl.347/)是 SQL 检索—预测工具—答案综合的 Agent 框架，**时序 Agent 高**，但官方只给 2026 年 7 月，无法判断相对 7 月 9 日边界和更早公开日期，降级观察。其余未获得可确认的新条目，未全量审阅会议目录。
- GitHub：五组创建窗口限定查询成功，关键词分别是 time-series agent、timeseries agent、automl agent、harness machine learning、photovoltaic forecasting，每组检查按更新时间排序的前四项。查询总数分别为 149、6、95、22、57，存在重复及低相关命中，不能相加当项目总量，也不是 Trending 排名。排除纯数据库、线缆 harness 等主题误命中。
- HuggingFace：回论文所指 TeeMoE 官方模型页；未下载或评测权重。AI HOT 技能仅作为近七日辅助线索，返回的 Agent Lightning 博客已在昨日收录，未重复计新增；机构博客线索未形成新的直接时序研究。
- 下一步优先：审计 EvoCast 的验证/测试边界；把预处理搜索预算和完整轨迹分歧加入候选比较；核验光伏模型天气输入在预测时刻是否可得；先修复新项目的切分或导入缺陷，再考虑复现。
- 交付：运行前已加载指定 SSH key，git pull --ff-only 成功。仅本日晨报与 W41 周报纳入本次提交，保留已有暂存及未跟踪用户文件。

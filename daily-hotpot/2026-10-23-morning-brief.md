# 时间序列研究晨间简报｜2026-10-23

- **检索窗口**：2026-07-23 至本次检索截止。论文按首版公开日期、项目按创建日期排序，日期采用 UTC；文末截止时间为北京时间。
- **今日增量**：新增核验 TCEE、FairAMO、GRAIL、SCDM，以及相邻 ML-Agent 反馈协议。新增两项 GitHub 线索：Valensaco/automl-agent 与自演化推荐系统资料库。新增指本报首次收录，并非今天首发。
- **优先阅读**：FairAMO 与反馈协议。前者隔离候选预测器质量对编排收益的影响，后者控制反复观察验证分数造成的适应性选择。这两项比单纯增加 Agent 数量更直接影响实验可信度。
- 今天周五，同时生成 2026-W43 周报。按目录既有规则补充光伏及 HuggingFace 线索。效果均为作者报告；本轮未运行外部代码或复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-21｜TCEE：冻结 TSFM 增强金融交易图｜新增，高优先级应用研究

- **来源与日期**：[Leveraging Time-Series Foundation Models for Financial Crime Detection](https://arxiv.org/abs/2610.29667)，v1 12:42 UTC。作者备注 ICAIF 2026 接收，未独立核验会议录用清单。
- **摘要**：以冻结 TSFM 总结账户交易历史，将时间上下文补充到交易边表示，再直接分类或输入 GNN。作者在六个 AMLWorld 数据集中的五个上报告相对最强对照平均 10.8% PR-AUC 提升及 6 倍端到端训练加速。
- **相关性**：TSFM 跨任务应用高，Agent 特征工具中高，显式 reasoning 低。它复用已有基础模型，不是新预训练骨干；金融检测分类收益不能直接推断预测收益。后续应核查每条交易的历史截断和图划分，避免用未来账户行为解释过去交易。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-21｜FairAMO：单独衡量模型编排的增益｜新增，最高优先级

- **来源与日期**：[Rethinking Agentic Model Orchestration for Time Series Forecasting](https://arxiv.org/abs/2610.29504)，v1 09:55 UTC。作者备注 NeurIPS 2026 FMTS workshop 接收，不能写作 NeurIPS 主会论文。
- **摘要**：冻结候选 TSFM 的预测结果，在同一候选池上比较编排方法。GIFT-Eval 实验中，最佳编排相对跨任务最佳单一 TSFM 的 MASE 改善小于 6%；候选互补性比数量重要，冗余成员可能抵消收益，历史证据收益也很快饱和。
- **相关性**：时序 Agent、TSFM 工具选型和 harness 高，reasoning 评测中高。最值得迁移的是控制协议，而不是将“小于 6%”当作所有任务的普适上限。建议固定预测缓存、候选池与预算，并对照简单平均、近期误差选模和 LLM 编排。
- **核验边界**：摘要与 v1 日期已核，未确认独立代码发布，也未复现候选互补性分析。

### 2026-10-20｜Explicit Feedback Contract：限制 Agent 对验证集的反复适配｜新增，相邻研究高优先级

- **来源与日期**：[An Explicit Feedback Contract for Iterative ML-Agent Harnesses](https://arxiv.org/abs/2610.28798)，v1 18:24 UTC；由新资料库发现后回 arXiv 核验。
- **摘要**：规定 Agent 可观察什么、何时停止、何时访问测试集；仅当提交超过配对标准误估计的噪声阈值时释放验证分数。无信号控制任务中，作者报告精确反馈下的表面收益为 0.0157，协议下为 0.0033；协议运行在 4–12 次尝试后停止。
- **相关性**：ML Agent / AutoML harness 高，时序 Agent 迁移高，TSFM/reasoning 本体低。实验是 CTR 与排序等任务，并非时间序列实证；时序窗口相关性会影响标准误估计，迁移时需要专门验证，不能照搬独立样本假设或声称已消除全部选择偏差。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-21｜GRAIL：从逐点显著性转向语义区域解释｜新增，推理证据组件

- **来源与日期**：[GRAIL: From Saliency to Semantics in Time-Series Explanation](https://arxiv.org/abs/2610.29036)，v1 01:09 UTC。
- **摘要**：用 ECG 的 P 波、QRS 等领域区间构造解释单元，以可读特征描述区域，并用流形上的条件生成器构造反事实基线；静态变量可作为单独单元共同归因，采用 Owen values 与方差缩减。
- **相关性**：时序解释与 Agent 证据生成高，显式 LLM reasoning 模型中低，TSFM 本体低。适合为推理输出提供结构化证据，但它是解释框架，不是新链式推理语言模型；条件生成的反事实也不自动构成真实干预因果证据。

### 2026-10-21｜SCDM：共享参数的时序因果发现｜新增，相邻方法

- **来源与日期**：[SCDM](https://arxiv.org/abs/2610.29992)，v1 16:31 UTC；同日条目不按具体时分排序。作者备注 NeurIPS 2026 接收，未独立核验。
- **摘要**：把各目标变量视为任务，共享时序预测器与因果强度矩阵，每个元学习回合只更新部分任务；训练后读出有向关系分数，降低高维系统逐目标优化成本。
- **相关性**：Agent 因果结构工具中高，reasoning 的结构证据中高，TSFM 低。属于因果发现而非 LLM reasoning 模型。图恢复结果依赖完全观测的延迟系统、正风险间隔及误差界条件，不能直接声称适用于存在隐藏混杂的真实系统。

### 2026-10-19｜TimesJev：快速时序推理｜持续跟踪

- **来源与日期**：[TimesJev](https://arxiv.org/abs/2610.26002)，v1 08:26 UTC，本轮复核，10-21 已收录。
- **摘要**：学习保留关键频率的压缩表征，再对齐快速模型嵌入，降低长思维链的时延与输入成本。
- **相关性**：直接时序 reasoning 高，Agent 推理预算高，TSFM 中。今天未确认比它更晚的同类直接 reasoning 模型；GRAIL、SCDM 属于辅助组件，不用它们替代这一事实。建议检验压缩后异常和稀有事件信息是否保留。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 machine learning / AutoML / harness

#### 2026-10-22 创建｜shangliy/Awesome-Self-Evolving-RecSys｜新增，资料库

- **来源与日期**：[仓库与 README](https://github.com/shangliy/Awesome-Self-Evolving-RecSys) · [元数据](https://api.github.com/repos/shangliy/Awesome-Self-Evolving-RecSys)。创建 20:37 UTC，推送 20:38 UTC。
- **摘要**：整理会修改配置、代码或策略的推荐系统 Agent 循环，并按反馈、选择协议与证据强度组织条目。本轮据此发现上述反馈协议论文。
- **相关性**：自演化 ML Agent / harness 高，时序研究迁移中，TSFM 低。目录目前是 README、贡献说明、许可与图像，属于资料库，不是可运行 Agent；其审计意见仍须逐项回原文核实。收录旧论文不代表这些论文均在本次三个月窗口内，本报未整表转载。

#### 2026-10-22 创建｜Valensaco/automl-agent｜新增，中优先级工程参考

- **来源与日期**：[仓库与 README](https://github.com/Valensaco/automl-agent) · [元数据](https://api.github.com/repos/Valensaco/automl-agent) · [数据切分代码](https://github.com/Valensaco/automl-agent/blob/main/src/prepare_data.py)。创建 18:39 UTC，推送 20:19 UTC。
- **摘要**：规划 Agent 从 MLflow 实验记录选择下一步，执行 Agent 调用限定训练工具；在预算内比较四类分类器，README 描述最后单次测试。目录包含 Agent、训练工具、应用和保存的报告。
- **相关性**：AutoML / 实验 harness 高，时序 Agent 迁移中，基础模型与直接 reasoning 模型低。
- **核验边界**：已读 README、目录和切分实现，确认使用信用卡违约表格数据及 60/20/20 随机分层切分，不是时间滚动验证。README 的在线应用链接仍为占位符；未执行代码，也未完整审计“只访问一次测试集”的执行保障。不能把数据文件夹名 locked 当成安全隔离证明。

#### 2026-10-19 创建｜NolReaction/alfa-automl-agent｜持续跟踪，文档状态有变化

- **来源与日期**：[仓库](https://github.com/NolReaction/alfa-automl-agent) · [元数据](https://api.github.com/repos/NolReaction/alfa-automl-agent)。创建 19:30 UTC，最近推送 10-22 23:50 UTC。
- **摘要**：当前 README 描述离线多模型搜索和 Qwen 生成/运行代码路径，说明旧 v2 已在小型控制任务完成真实 API 循环，但该结果不验证新 v3。相比 10-20 归档“尚未接入”描述，当前文档状态已变化。
- **相关性**：AutoML Agent 高，时序中。仅重读 README，未检查提交差分或运行；不能据旧协议测试推断 v3 可用、隐藏测试成绩或完整时序正确性。保持工程观察优先级。

#### 2026-08-22 创建｜sriixz/agentic-timeseries｜持续跟踪，高相关原型

- **来源与日期**：[仓库](https://github.com/sriixz/agentic-timeseries) · [元数据](https://api.github.com/repos/sriixz/agentic-timeseries)。创建 21:00 UTC，最近推送 10-22 14:00 UTC。
- **摘要**：金融分析、FluSight 分析和 NeuralForecast AutoLSTM 搜索三条流程；LLM 给出结构化范围或配置，Python 校验并执行，README 描述测试前调参与 1–4 周分步长留出评估。
- **相关性**：时序 Agent / AutoML 高，reasoning 工作流中高，TSFM 本体低。本轮仅重读 README，未将推送当成新功能；数据获取、历史修订版本和信息发布时间仍待审计。

### 光伏功率预测

#### 2026-10-16 创建｜ThomasSerna/photovoltaic-forecast-optimization｜近期活动跟踪

- **来源与日期**：[仓库与 README](https://github.com/ThomasSerna/photovoltaic-forecast-optimization) · [元数据](https://api.github.com/repos/ThomasSerna/photovoltaic-forecast-optimization)。创建 16:38 UTC，推送 10-22 17:32 UTC。
- **摘要**：在哥伦比亚乡村学校的半合成案例中，以相同能量模拟器和启发式 MPC 比较 beta 参考预测与 Chronos-2；README 描述成对评估、冻结模型版本及输入哈希记录。
- **相关性**：TSFM 下游决策评估与光伏高，Agent 工具评测中高，显式 reasoning 低。代码采用 ERA5 可用时间理想化，不能当作真实在线天气预报部署验证；本轮读 README，未运行，也未核实全部产物。HF 模型入口为既有 Chronos-2，合并记录，不算新模型发布。

## 5. 光伏功率预测最新研究

### 2026-10-20｜Foundation-Style Pretraining for Distributed PV Forecasting｜持续跟踪

- **来源与日期**：[arXiv 2610.27763](https://arxiv.org/abs/2610.27763)，v1 07:26 UTC；昨日已收录，本轮复核。
- **摘要**：将历史功率、气象、未来 NWP 与时间编码统一为序列补全，对比三类预训练目标；479 个场站中 139 个空间留出，预测跨度 6 小时至 7 天。
- **相关性**：光伏领域 TSFM 高，Agent 冷启动/适配决策高，显式 reasoning 低。优先核查空间与时间留出、NWP 发布版本；未确认专属公开权重。本轮未确认更晚且日期明确的高相关光伏首发。

**日期不确定、低优先级线索**：[Physics-as-a-layer multi-task forecasting](https://doi.org/10.1016/j.epsr.2026.113181)，出版商页面列 2026 年 10 月卷期，首次在线日不确定，不计入已确认新增。以可微辐照/热过程联合预测功率与组件温度；光伏相关性高，TSFM/Agent/reasoning 直接相关性低。

## 6. 检索覆盖、去重与限制

- **DailyArXiv 必检**：[完整 master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)已读取，Last update 2026-10-23；Time Series 板块 **85 条实际论文行**，最新列示日期 10-21。最新[自动提交 27366e6](https://github.com/zezhishao/DailyArXiv/commit/27366e63c3db83795f0a58a2d26f684100152b42)为 10-22 20:15 UTC。timeseries 分支不可访问，按规则回退 master。聚合更新时间不充当首发日期。
- **首发过滤**：该栏的 2511.19100、2603.18712、2602.05286、2510.16511 等编号来自窗口前的月份，虽 10-21 修订，未纳入新增主榜；未审计修订差分。85 是滚动快照行数，不是三个月论文总量。
- **GitHub 搜索**：五组 timeseries agent、time series agent、automl agent、machine learning harness、photovoltaic forecasting；创建范围 07-23 至 10-23，按更新各取前四项，总命中 **4 / 121 / 97 / 28 / 66**，有重叠和弱相关，非有效新增数。已访问 [Trending](https://github.com/trending)，本报项目来自定向搜索，不声称上榜。旧仓库近期更新覆盖有限。
- **会议检索**：定向覆盖 OpenReview、ACL、NeurIPS、ICML/PMLR、KDD/ACM、AAAI。未确认比本报更晚的直接高相关首发。ACL 七月条目若具体公开日不能确认落在 07-23 之后，不进入确定新增；搜索不是会议全量扫描。
- **机构与模型来源**：补检 Google Research、AWS、HuggingFace。Google 10-14 [Research@ 总览](https://www.research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/)提及 TimesFM/TabFM；10-20 更新不是新的 TSFM 发布证据，未据此增加模型条目。
- **资讯补充**：[AI HOT](https://aihot.virxact.com)近七天论文精选返回 13 条，没有额外直接时序主线新增。仅作发现源，研究摘要与日期回原始来源核验。
- **核验深度**：新增论文核到摘要与版本史，项目核到上述明确列示的 README、元数据、目录或代码。尚未读完论文全文、复现实验或完成安全审计；“高相关”不表示效果已独立验证。
- **下步建议**：固定候选预测缓存测编排增益；为 Agent 设置反馈/停止/终评协议；把数值答案、解释证据与因果断言分开评分。以上为本报研究建议，未声称组合方案已有实证收益。

检索与编写截止：2026-10-23T08:56:34+08:00（北京时间）。运行前已加载指定 SSH key，SSH `pull --ff-only` 成功；当前远端已包含昨日两次提交。提交只包含今日晨报与本周周报，推送结果以任务回执为准。

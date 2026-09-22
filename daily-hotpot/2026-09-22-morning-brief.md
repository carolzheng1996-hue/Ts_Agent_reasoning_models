# 2026-09-22 时间序列研究晨间简报

检索截止：**2026-09-22 09:19 CST**。滚动窗口：**2026-06-22 至检索时点**。今天是周二，不更新周报。以下“持续跟踪”均为此前已收录的窗口内成果，不算今日首发。

## 今日重点

- 截至检索时点，[arXiv cs.LG recent](https://arxiv.org/list/cs.LG/recent)与[cs.AI recent](https://arxiv.org/list/cs.AI/recent)仍显示最新公告为 **9 月 21 日**；本次没有核实到比昨日晨报更新的高相关时序基础模型、Agent 或 reasoning 论文。
- GitHub 新检到一个 **9 月 20 日创建、21 日推送**的 AutoML 邻域项目 InsightFlow，但其 README 明确当前实现以 CSV 质量检查和分析看板为主；不能把仓库描述中的 AutoML 视为已实现。另有时序 reasoning 名称的空仓库，作为低优先级线索。
- 研究上仍应优先核验 FreqCondNorm 的跨频率留出、KDAgent 的数值证据校验、WaveTLM 的预测质量与输出契约，以及光伏预测的真实起报信息可得性。

## 1. 时间序列基础模型最新研究

### [2026-09-18] BrainWideBench — 持续跟踪

- **日期 / 来源**：arXiv v1，2026-09-18；[论文](https://arxiv.org/abs/2609.22064)。
- **摘要**：比较大规模神经时序预训练在行为解码、未来活动预测与跨动物迁移等任务上的表现；没有单一方案在所有任务上占优。
- **相关性**：领域时序基础模型评测**高**，Agent 选模 harness **中高**，通用预测与显式 reasoning **低**。跨任务评测方法可借鉴，结果不直接代表通用 TSFM 能力。

### [2026-09-17] FreqCondNorm — 持续跟踪

- **日期 / 来源**：arXiv v1，2026-09-17；[论文](https://arxiv.org/abs/2609.20535)。
- **摘要**：用频率条件归一化处理工业信号采样率差异；摘要报告故障诊断迁移收益，同时指出剩余寿命预测没有改善。
- **相关性**：工业 TSFM **高**，Agent 工具选择 **中高**，直接 reasoning **低**。需核查预训练与零样本评测的数据交叠和留出单位。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-18] AutoRecLab — 持续跟踪的相邻研究

- **日期 / 来源**：arXiv v1，2026-09-18；[论文](https://arxiv.org/abs/2609.21863)。
- **摘要**：用文档检索、类型校验和执行反馈扩展推荐系统实验搜索。论文讨论可执行原型与运行成功率。
- **相关性**：ML Agent / AutoML harness **高**，直接时间序列**低**。没有证据表明已实现时序滚动划分或防泄漏。

### [2026-09-16] TuiML — 持续跟踪

- **日期 / 来源**：arXiv v1，2026-09-16；[论文](https://arxiv.org/abs/2609.17984)、[官方项目](https://tuiml.ai/)。
- **摘要**：以工具元数据、参数模式和实验状态支持 Agent 发现、组合和执行机器学习工具。
- **相关性**：时序 Agent 工具层与 AutoML harness **高**，TSFM 模型本体**低**。时序任务仍需单独检查时间隔离。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-17] Conditional Independence Testing in Time Series — 证据工具，非 reasoning 模型

- **日期 / 来源**：arXiv v1，2026-09-17；[论文](https://arxiv.org/abs/2609.20772)。
- **摘要**：对暴露和结果分别做历史回归，用残差协方差构造时序条件独立性检验。
- **相关性**：Agent 假设检验和因果证据层**中高**，TSFM 本体**低**。条件独立检验本身不证明干预因果。

### [2026-09-16] WaveTLM — 持续跟踪

- **日期 / 来源**：arXiv v1，2026-09-16；[论文](https://arxiv.org/abs/2609.18812)。
- **摘要**：将语言任务编译为带类型状态，再执行预测、插补、分类、异常检测等时序任务，并检查输出结构。
- **相关性**：可执行时序 reasoning / Agent 输出验证**高**。合法输出与数值预测精度是不同指标；本轮没有核实到新版本或新代码。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列

#### [2026-09-21] AgenthonT2—ReasoningAugmentedTimeSeries—Money-Miner — 空仓库线索

- **日期 / 来源**：创建于 2026-09-21 02:51 UTC；[仓库](https://github.com/WaydeWan/AgenthonT2---ReasoningAugmentedTimeSeries---Money-Miner)、[元数据](https://api.github.com/repos/WaydeWan/AgenthonT2---ReasoningAugmentedTimeSeries---Money-Miner)。
- **摘要**：公开元数据无描述、仓库大小为 0，目录 API 返回 404；目前不能确认任何方法或实现。
- **相关性**：名称与时序 reasoning **表面相关，证据极低**；仅保留观察线索，不列为可用项目。

#### [2026-09-20] InsightFlow — 新候选，低优先级

- **日期 / 来源**：GitHub 创建于 2026-09-20 18:40 UTC，最近推送为 2026-09-21 16:41 UTC；[仓库](https://github.com/harshita-bhatia-cse/InsightFlow)、[元数据](https://api.github.com/repos/harshita-bhatia-cse/InsightFlow)。按 UTC 创建日期为 **9 月 20 日**。
- **摘要**：[README](https://github.com/harshita-bhatia-cse/InsightFlow/blob/main/README.md)列出当前 CSV 上传、字段和重复值校验、隔离不安全记录、数据剖析与 Streamlit 看板。文件树有后端代码；README 当前状态未列 AutoML 训练器。
- **相关性**：ML 数据质量 harness **中**，时间序列 Agent / AutoML 实现**低**。可参考运行 ID 与隔离流程，但不计时序建模新成果，也未运行代码。

GitHub 另检到 [Lithicsoft-Trainer-Forge](https://github.com/ahmadluthfan421-star/Lithicsoft-Trainer-Forge)（2026-09-21 创建）与 [TS-Forge](https://github.com/avri22222/TS-Forge)（2026-09-21 创建）；公开根目录均以 README、HTML、SVG 为主，未见训练代码，且未确认时序任务，故排除主列表。此前收录的 [KDAgent](https://github.com/HFJ0624/KDAgent)（2026-09-18 创建）仍是更直接的工业时序根因分析 Agent；本轮没有复核新提交，不计新增。

### 4.2 光伏功率预测

本轮 GitHub 创建窗口检索未发现比昨日新增且已确认有实现的光伏预测仓库。[MDG-Mamba](https://github.com/Yingcode-Lab/MDG-Mamba)（2026-09-18 创建）与 [05-mev-P3](https://github.com/Italo-1/05-mev-P3)（2026-09-21 创建）均已在此前晨报收录；后者仍只确认研究协议，代码完整性未确定。

## 5. 光伏功率预测最新研究

### [2026-09-17] IWOA-TCN-BiGRU-MATT — 持续跟踪

- **日期 / 来源**：出版商在线发表，2026-09-17；[官方页面](https://www.techscience.com/CMES/online/detail/28334)。
- **摘要**：以改进鲸鱼优化调整 TCN、双向 GRU 与注意力组合，在单电站数据上比较天气条件下的短期光伏功率预测。
- **相关性**：光伏预测**高**，Agent 自动调参**中**，TSFM / 显式 reasoning**低**。需核公平调参预算、持久性基线和起报时输入可得性。

## 6. 检索覆盖与结论

- [arXiv cs.LG recent](https://arxiv.org/list/cs.LG/recent)及[cs.AI recent](https://arxiv.org/list/cs.AI/recent)：09:19 CST 查看近期页，最新公告仍为 9 月 21 日；未进行所有学科全量扫描。
- [GitHub Search](https://github.com/search?type=repositories)：按 **2026-09-18 以来创建、updated 降序**查询 `time-series agent`、`timeseries agent`、`automl`、`harness machine learning`、`photovoltaic forecasting`，对应 API 总数为 **6 / 0 / 24 / 2 / 4**；对候选读取仓库元数据与根目录，抽查 InsightFlow README。查询计数取决于关键词，不表示项目总量或增长率。
- [OpenReview](https://openreview.net/)、[ACL Anthology](https://aclanthology.org/)、[PMLR](https://proceedings.mlr.press/)、[NeurIPS](https://neurips.cc/)、[KDD](https://kdd2026.kdd.org/)、[AAAI](https://ojs.aaai.org/)及[DailyArXiv](https://github.com/zezhishao/DailyArXiv)：本轮未完成逐站点新增核验；因此只报告此前已核的窗口内条目，不以本次无发现推断这些来源无新工作。
- 未运行外部项目或复现论文；日期依据 arXiv 既有首发记录、出版商页面和本轮 GitHub API 元数据。凡“持续跟踪”条目，摘要沿用昨日已核记录。

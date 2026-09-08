# 2026-09-08 时间序列研究晨间简报

检索时间：2026-09-08 09:00—09:09，北京时间（Asia/Shanghai）。
三个月窗口：2026-06-08 至检索截止时刻。论文首发日期沿用 arXiv 的 UTC 日期；GitHub 时间转换为北京时间。
本期聚焦：时间序列基础模型、建模 Agent、reasoning，以及 GitHub 的时序 / harness / ML / AutoML 项目。

## 今日重点与相对昨日的变化

- **新增检出 4 篇 9 月 4 日首发论文**：Chronos 量子微调、WearableQA、MMTClinic、PRICE。它们比昨日主列表中的 CoSPOT 更新，但不是 9 月 8 日首发。arXiv 官方接口与摘要页已交叉核验。
- **reasoning 优先关注 WearableQA**：真实长期可穿戴记录上的跨信号问答，更贴近数值证据驱动的推理评测。MMTClinic 补充多模态、多语言临床任务，但数据尚待公开。
- **工程优先关注 Predictors and Orchestrators**：9 月 6 日创建，直接把五类 Agent 与水文预测模型接入同一执行流程；论文尚未发布，作为代码项目收录。
- **9 月 7 日新仓库不能一概视为成熟 LLM Agent**：ML-Agent 支持 LLM 提案和确定性评测；InsightForge 当前是启发式 AutoML 加轨迹回放；agentic-automl-evaluation 明确仍为占位页。
- 本轮 arXiv 增量查询未返回 9 月 5—8 日的时序首发条目。这只描述本次查询结果，不代表整个领域没有新增。今天是周二，不更新周报。

## 1. 时间序列基础模型最新研究

### 1.1 [2026-09-04｜新增检出] Chronos 表征上的量子微调与扩展

**Towards Scaling Quantum Fine-Tuning of Foundational Time Series Models for Classification**
来源：[arXiv:2609.05408](https://arxiv.org/abs/2609.05408)。日期：v1，2026-09-04。

- 摘要：在 PSML-5 电网事件分类中，给 Chronos 表征接入量子分类头，并提出通过附加小规模 wing 电路增加输入信息带宽。作者报告，同输入下量子头较较大的经典 MLP 提升 1.7—2.0 个百分点的平衡准确率。
- 相关性：**基础模型高，Agent / reasoning 低**。这是 TSFM 下游适配研究，不是新的通用预训练模型，也不能由此推出广泛的量子优势。
- 关注点：区分传感器分组带来的收益与量子头本身收益；证据目前局限于论文所测分类设置，尚未独立复现。

### 1.2 [2026-08-31｜复核保留] TSPFN

**TSPFN: A Temporal Tabular Foundation Model for Physiological Time Series Classification**
来源：[arXiv:2608.31013](https://arxiv.org/abs/2608.31013)、[官方代码](https://github.com/Jeremstym/TSPFN)。日期：v1，2026-08-31。

- 摘要：改造 TabPFN 的时序与通道表示，并在 14 万条真实生理时序上预训练，以支持小中样本分类和跨域迁移。arXiv 作者备注为 STACOM 2026 接收。
- 相关性：**基础模型高，Agent 间接**。可作为 Agent 的分类工具后端；其贡献是时序分类的 in-context learning，不能等同于通用预测能力。
- 今日状态：核验摘要及首发日；未将旧条目写成新增论文。

## 2. 时间序列建模 Agent 最新研究

### 2.1 [2026-08-31｜复核保留] CastClaw：工业预测中的人机协作 Agent

**A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting**
来源：[arXiv:2608.30976](https://arxiv.org/abs/2608.30976)。日期：v1，2026-08-31。

- 摘要：将工业预测工作组织为人机协作流程，连接预测工具、用户约束和执行记录，支持对预测的分析与修订。
- 相关性：**Agent 高，foundation model / reasoning 中高**。重点是预测流程的编排、可追溯性和人类反馈，而非单个预测网络的误差改进。
- 今日状态：本次增量接口没有发现更晚且明确以建模 Agent 为核心的论文；保留已核验入口，新增工程系统见第 4 节。

## 3. 时间序列 reasoning 模型最新研究

本栏目区分“推理评测基准”“LLM 数值预测方法”与“显式推理模型”；使用 LLM 不自动意味着具备可验证 reasoning。

### 3.1 [2026-09-04｜新增检出] WearableQA：真实长期可穿戴数据推理

来源：[arXiv:2609.05405](https://arxiv.org/abs/2609.05405)。日期：v1，2026-09-04。

- 摘要：基于 200 名真实用户、最长 500 天的可穿戴记录及生物标志物构造 4,084 道十选一问题，覆盖 16 种题型。区分数据计算与健康解释、单信号与跨信号推理；14 个模型的准确率为 19.6%—72.9%，随机基线为 10%。
- 相关性：**reasoning 高，Agent 评测高**。可用于检验 Agent 的工具计算、证据整合与答案生成是否一致；它是 benchmark，不是新训练的 reasoning 模型。
- 关注点：跨用户隔离、长历史截断、是否允许调用数值工具，以及医学解释的证据来源。结果仅反映论文基准表现。

### 3.2 [2026-09-04｜新增检出] MMTClinic：多模态、多语言临床时序问答

来源：[arXiv:2609.04842](https://arxiv.org/abs/2609.04842)。日期：v1，2026-09-04。

- 摘要：结合文本、医学图像和多变量生理信号，构造五种语言的 30,000 个问答对，覆盖死亡率预测、心率预测与 SOFA 评分估计，并比较 13 个 LLM 的零样本、少样本和 CoT 设置。
- 相关性：**reasoning 高，Agent 评测中高**。适合观察模型在语言、模态和时序任务间的能力差异；不是完整的建模 Agent 系统。
- 可用性：作者明确表示数据将在论文成功接收后公开，不能写成已可下载复现。优先跟踪数据发布。

### 3.3 [2026-09-04｜新增检出] PRICE：LLM 预测中的适配选择

来源：[arXiv:2609.05235](https://arxiv.org/abs/2609.05235)。日期：v1，2026-09-04。

- 摘要：在比特币短期价格预测中系统组合量化 LLaMA-3 8B、LoRA、整数数值表示、递归预测、Context-Task-Format 提示及零温度解码。作者报告该任务中结构化提示优于 CoT、隐式 CoT 与 few-shot 提示。
- 相关性：**LLM 时序建模高，reasoning 中**。价值在于检验“增加推理文本是否真的有用”，而不是证明所有时序任务都不需要 CoT。
- 关注点：时间切分、滚动评测、提示消融与基线公平性；论文预测误差结论不构成交易收益证据。

### 3.4 [2026-09-02｜复核保留] CoSPOT：组合频谱提示的在线预测

来源：[arXiv:2609.02093](https://arxiv.org/abs/2609.02093)、[官方代码](https://github.com/seungyoon-Choi/CoSPOT)。日期：v1，2026-09-02；作者备注 CIKM 2026。

- 摘要：冻结 LLM，通过按频率幅度组合频谱基提示实现低成本在线适配，评测长期在线阶段与跨数据集分布变化。
- 相关性：**在线预测高，显式 reasoning 中低**。可作 Agent 的适配工具，但摘要没有建立可验证推理链；调整昨日将其直接视为高相关 reasoning 工作的口径。

### 3.5 [2026-07｜会议版本补录，具体日不确定] CaTS-Bench 与 TimeSAF

| 工作与来源 | 日期及摘要 | 相关性判断 |
|---|---|---|
| [CaTS-Bench，ACL Findings](https://aclanthology.org/2026.findings-acl.1722/) | 官方出版月份 2026-07，具体日不确定。以 11 个领域的 1,746 条人工重写描述及 910 道选择题评测时序描述、数值细节和上下文理解。 | reasoning 高；可借鉴用于 Agent 报告的数值忠实度评测。 |
| [TimeSAF，ACL](https://aclanthology.org/2026.acl-long.1208/) | 官方出版月份 2026-07，具体日不确定。将单模态特征学习与跨模态语义交互分离，通过异步融合引导预测。 | LLM 时序预测高，显式 reasoning 中低；不是 Agent。 |

两条仅作为窗口内正式会议版本补录；未确认最早预印本日期，不宣称是近三个月首次提出。因具体日与首发历史未核全，优先级低于上述日期已确认的新稿。

## 4. GitHub 上的最新项目与活跃度

日期来自 GitHub 官方 Search API 的创建 / 推送字段，以下转换为北京时间。创建日用于“新项目”判定，推送时间只表示仓库活动，不能单独证明新增功能。README 内容为维护者陈述，本轮未安装运行或独立复现；star 不作为质量证明。

### 4.1 时间序列、harness、machine learning / AutoML

| 项目与来源 | 创建；最近推送（北京时间） | 摘要与相关性判断 |
|---|---|---|
| [InsightForge](https://github.com/AI-ML-Engineering-Lab/insightforge-agentic-automl) · [API](https://api.github.com/repos/AI-ML-Engineering-Lab/insightforge-agentic-automl) | 2026-09-07 19:31；09-07 19:33 | CSV 清洗、特征、模型比较、重试与轨迹回放；**AutoML / harness 中高，时序低**。README 明确当前使用启发式逻辑，LLM 替换仍是后续方向。0 star，不能称为成熟 LLM research Agent。 |
| [mowne67/ML-Agent](https://github.com/mowne67/ML-Agent) · [API](https://api.github.com/repos/mowne67/ML-Agent) | 2026-09-07 18:08；09-07 18:23 | LLM 可提议实验，确定性代码验证计划、评测 sklearn pipeline 并打包模型。**AutoML / harness 高，时序间接**；README 未证明具备滚动时间切分，迁移到预测前需补时序协议。0 star。 |
| [agentic-automl-evaluation](https://github.com/Hiramdu/agentic-automl-evaluation) · [API](https://api.github.com/repos/Hiramdu/agentic-automl-evaluation) | 2026-09-07 12:02；09-07 12:34 | 拟审计决策有效性、推理一致性、模型风险与反事实影响。**评测 harness 中高、时序间接；低优先级**。官方 README 写明是占位页，代码、schema 和复现脚本尚未发布；关联的是窗口外旧论文，不能列为新研究。0 star。 |
| [Predictors and Orchestrators](https://github.com/pramodlekhak/Predictors-and-Orchestrators-Machine-Learning-within-an-Agentic-AI-Harness-for-Forecasting) · [API](https://api.github.com/repos/pramodlekhak/Predictors-and-Orchestrators-Machine-Learning-within-an-Agentic-AI-Harness-for-Forecasting) | 2026-09-06 10:15；09-06 10:25 | 面向 Edwards Aquifer 的 1—12 周预测；README 描述 120 个预训练模型和五类协调 Agent，覆盖采集、模型编排、预测监测、文献与报告。**时序 Agent / ML harness 高**；Claude 负责受限决策和文字总结，数值来自预测模型。论文链接待发布，0 star，优先阅读架构。 |
| [sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries) · [API](https://api.github.com/repos/sriixz/agentic-timeseries) | 2026-08-23 05:00；09-07 11:39 | 官方描述为组合 GPT、Claude 与金融数据工具的 multi-agent 时序原型。**时序 Agent 中高**；1 star。本轮确认推送较昨日记录前移，但未检查提交差异，不推断新增算法。 |
| [faheemkhaskheli9/timeseries-data-agent](https://github.com/faheemkhaskheli9/timeseries-data-agent) · [API](https://api.github.com/repos/faheemkhaskheli9/timeseries-data-agent) | 2026-08-19 01:39；09-08 02:01 | 官方描述面向销售、指标等时序数据的自然语言分析。**时序分析 Agent 中；低优先级观察**。本轮仅核验元数据，未核验 README / 代码，不能判断是否支持 forecasting 或 TSFM。0 star。 |

### 4.2 光伏功率预测 / 多能源时序（项目规则补充）

**[Jesse-dry/AutoML-Agent](https://github.com/Jesse-dry/AutoML-Agent)** · [官方 API](https://api.github.com/repos/Jesse-dry/AutoML-Agent)
创建：2026-07-12 23:04；最近推送：2026-09-06 18:54，北京时间。

- 摘要：官方 README 已描述负荷、风电、光伏、电价任务。LLM 在受约束动作空间内提出特征修改，确定性引擎执行，结合误差画像、回滚、经验记忆与跨任务漂移检测；列有 GEFCom2014 光伏任务接入。
- 相关性：**时间序列 Agent / AutoML 高，光伏高**。可与通用表格 ML-Agent 对照，重点检查可用历史、特征泄漏检查和滚动评测协议。
- 限制：README 的“无泄漏”是项目主张，本轮未审计代码；概率预测部分混有路线图内容，不把规划当作已实现。最近推送日期也不能证明所有这些功能在当天引入。当前 1 star。
- HuggingFace 补检未确认更适合纳入且日期可靠的独立新项目，本期不重复列出同源模型页面。

## 5. 光伏功率预测最新研究（补检）

本轮未确认比现有跟踪项更新、且同时具备可靠窗口内日期与原始论文证据的光伏专门论文，因此不填充旧研究。窗口内工程进展见第 4.2 节；不将电网事件分类的量子微调论文误称为光伏功率预测。

## 6. 检索来源、日期口径与覆盖限制

- **arXiv**：[官方接口说明](https://info.arxiv.org/help/api/index.html)。本轮增量查询为 `all:"time series"` 与首发区间 2026-09-03—2026-09-08 相交，按首发降序，返回 25 条；新稿重点回查摘要页。其余三个月窗口以历史跟踪记录与定向补检覆盖，非穷尽性系统综述。
- **DailyArXiv**：[公开 master README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 标记更新到 2026-09-08，Time Series 板块补出四篇新主条目。采用公开 master 回退；没有将聚合页更新日期用作论文日期，也未声称本轮已检查 timeseries 分支。
- **会议来源**：定向检索 OpenReview、ACL Anthology、NeurIPS、ICLR 相关页面、ICML / PMLR、KDD、AAAI。ACL 返回上述两篇 7 月会议版本；AAAI 命中的 VLM4TS 等为 3 月出版，排除。其他查询未提供可核验的更晚高相关候选，不代表这些会议没有相关论文。
- **GitHub Search**：查询 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`，创建区间均为 2026-06-08—2026-09-08；分别返回 11、132、103、18 个匹配，每组读取最近更新的前 8 项再筛选。四组有重复，数量不相加，也不把关键词里的采集 daemon 或动词 harness 当作研究 Agent。
- **GitHub 证据强度**：5 个重点项目额外读取官方 README，包括三项 9 月 7 日 AutoML 项目、Predictors and Orchestrators、Jesse-dry/AutoML-Agent。`timecalc-mcp` 单仓库请求遭遇限流，未取得创建日，本期不纳入。搜索结果不是 Trending 排名。
- **AI HOT**：[AI HOT](https://aihot.virxact.com) 近 7 天论文精选返回 7 条，未见与本期三条研究主线直接匹配者；不据其二手摘要新增研究结论。
- **日期处理**：以窗口内论文首发、明确标注的会议出版事件或仓库创建为收录依据；抓取日、索引日和 README 更新日不替代发布日期。会议只给月份时明确标“具体日不确定”并降优先级。关联旧论文的新仓库仅作为代码发布事件观察。

## 7. 今天先看什么

1. **WearableQA**：检查跨信号题型能否转化为“数值工具输出—证据引用—答案”一致性测试，再对照 MMTClinic 的语言与模态维度。
2. **Predictors and Orchestrators + Jesse-dry/AutoML-Agent**：对照模型编排、滚动协议、停止与回滚、运行记录；验证 Agent 决策收益和预测器本身收益能否分开测量。
3. **ML-Agent / InsightForge**：借鉴确定性计划校验和可回放轨迹；接入时序任务前先确认时间切分、标签可用时点及独立测试集。
4. **PRICE**：将结构化提示与 CoT 作为同预算消融项，检验 reasoning 是否改善结果，而不只增加输出文本。

本简报基于官方摘要、项目文档与元数据整理；方法效果为作者报告，未进行实验复现。今天不触发周五汇总。

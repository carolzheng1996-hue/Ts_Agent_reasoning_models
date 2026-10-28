# 时间序列研究晨间简报｜2026-10-28

- 检索窗口：2026-07-28 至 2026-10-28 本次检索截止；北京时间 2026-10-28 09:06。论文日期按 arXiv 首版 UTC 日期，项目日期按 GitHub UTC 元数据，避免时区造成“新一天发布”的误判。
- 去重基准：自动化记忆及仓库最新已归档晨报 10-23。调度记录虽列上次运行 10-26，本地与远端未见该日晨报，不能将它当作已完成归档。本文“新增”表示相对可核验归档补收，不等于今天首发。
- 今天周三，不更新周报。研究条目按日期倒序；HuggingFace 与同一项目合并记录。

## 今日重点

1. **模型之外的适配越来越具体**：TimeWorld 在既有 TSFM 上建动作响应模块；动态解码选择器在冻结骨干上选择预测步长组合；PHM 研究提醒预训练收益取决于下游任务和调参协议。
2. **Agent 需要明确的采纳规则**：风电残差适配只在近期观测误差支持时应用修正，新专家需通过验证后进入候选池；尚未验证长期无人值守。
3. **快速决策不等于稳健 reasoning**：Jev 新评测在部分模式任务表现较好，但不少数值分类及股价方向任务接近随机。应同时评价准确率、排序能力和运行成本。
4. **工程新增**：timestral-studio、harness-mllc、DS-Cortex 可分别参考工具接口、实验追溯、证据驱动 AutoML；experimental-ml-framework 仍处于 MVP 实现前的规划阶段。

## 1. 时间序列基础模型最新研究

### 2026-10-26｜Self-Supervised Pretraining for PHM｜新增，高相关

- **来源**：[arXiv 2610.35280](https://arxiv.org/abs/2610.35280)，v1 10-26 11:50 UTC。
- **摘要**：在 47 个工业健康管理数据集上研究自监督预训练，11 个数据集完整留出。故障分类可明显受益，但剩余寿命估计没有稳定优于从零训练；预训练损失不能直接作为下游选择指标。
- **相关性**：TSFM 迁移评估高；Agent 自动选择检查点、学习率和任务策略高；显式 reasoning 低。
- **边界**：联邦与集中式对比受到学习率日程差异影响，且每种预训练设置仅一次运行；不能概括为联邦预训练普遍较差。

### 2026-10-26｜TimeWorld｜新增，高相关

- **来源**：[arXiv 2610.34797](https://arxiv.org/abs/2610.34797)，v1 10-26 03:39 UTC，页面标注 under review。
- **摘要**：提出七个真实数据集构成的 TSWM-Bench，用有记录的动作—结果数据构造文本干预；在预训练 TSFM 上通过响应原型调制未来表示，并以动作对比学习区分同一历史下的不同动作。
- **相关性**：TSFM 高，Agent 规划与 what-if 工具高，动作条件 reasoning 高；属于既有 TSFM 的适配框架。
- **边界**：动作条件预测改进不自动证明任意场景下的因果识别。建议结合第三节因果审计设置检验；该建议为本报推论。

### 2026-10-25｜Dynamic Multi-Step Decoding for Time-Series Foundation Models｜新增，高相关

- **来源**：[arXiv 2610.34409](https://arxiv.org/abs/2610.34409)，v1 10-25 16:10 UTC。
- **摘要**：冻结 Chronos-2 或 Moirai 骨干，利用隐藏状态学习预测展开方案的选择器；动态规划缩减候选搜索，五个选择器一致时采纳，否则回退单次预测。
- **相关性**：TSFM 推理策略高；Agent 的预算分配、方案选择和回退机制中高；不是 LLM 思维链模型。
- **边界**：选择器在被评估任务的历史窗口训练，不能将整套方法称作完全免训练零样本；作者只主张点预测收益，恢复约 6–8% 的 oracle 增益，不是误差降低 6–8%。

### 2026-10-15｜Mistral Timestral｜窗口内持续跟踪

- **来源**：[官方发布](https://mistral.ai/news/timestral/) · [官方代码](https://github.com/mistralai/timestral) · [HF 模型集合](https://huggingface.co/collections/mistralai/timestral)。日期由官方发布页确认。
- **摘要**：5M、28M、123M、209M 四档模型，面向零样本概率与多变量预测，支持历史及已知未来协变量。官方报告多个公开基准领先，本轮未独立复算。
- **相关性**：TSFM 高；可作为 Agent 预测工具，直接显式 reasoning 低。与第四节第三方 Studio 区分，后者不是官方模型新发布。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-26｜Guarded Agent-in-the-Loop Residual Adaptation for Evolving Wind Power Regimes｜新增，高优先级

- **来源**：[arXiv 2610.34968](https://arxiv.org/abs/2610.34968)，v1 10-26 07:38 UTC。
- **摘要**：固定时间序列骨干，由 Agent 解释外部场景、识别天气工况、选择残差专家；只有近期已观测误差支持时才应用修正，新专家通过验证后才入池。作者在九个骨干、五个预测跨度上报告误差改善。
- **相关性**：时间序列 Agent 与模型维护高；reasoning 体现在场景解释及选择流程，TSFM 本体低。
- **边界**：候选场景的晋升实验为受控评估，未验证长期无人值守部署。复现优先检查观测标签成熟时间、路由输入发布时间和专家验证集是否反复使用。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-24｜Benchmarking System One Models for Time-Series Decision Making: A Case Study of Jev｜新增，高相关评测

- **来源**：[arXiv 2610.33410](https://arxiv.org/abs/2610.33410) · [作者代码 JevOnTS](https://github.com/Liam4776/JevOnTS)，v1 10-24 02:58 UTC。代码入口来自论文页；仓库创建日期本轮未另核，不单列为新建项目。
- **摘要**：以 Jev 1.13.0 测试分类、事件类型、油温方向及股票涨跌，将连续目标转换为离散决策，用 accuracy/AUC 建立统一评测。显式模式与部分事件任务较强，但不少数值序列及股价任务判别接近随机。
- **相关性**：时序快速推理与决策评估高，Agent 选模型高，TSFM 中低。这是评测研究，不是新训练的 reasoning 模型。
- **研究提示**：与此前 TimesJev 讨论互补，但任务和适配方式不同，不能直接将两篇数字横向排名。

### 2026-10-22｜Forecasting Associations, Not Interventions｜补收，高相关能力审计

- **来源**：[arXiv 2610.31869](https://arxiv.org/abs/2610.31869)，v1 10-22 20:01 UTC。
- **摘要**：对可接收未来协变量的 TSFM 做预注册因果审计，比较条件预测与干预效应；在有反事实真值的结构模型及随机执行器物理系统中发现混杂偏差，并研究干预后训练缓解方案。
- **相关性**：TSFM 因果 reasoning 和 Agent what-if 决策高；属于能力审计与适配研究，不是通用聊天推理模型。
- **边界**：结果限于所测试模型和系统，不能推广为所有 TSFM 均无因果能力。使用协变量场景 API 时应明确其输出是条件预测还是已验证的干预估计。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

以下“创建”与“最近推送”均来自 GitHub API；摘要基于本轮读取的 README。未运行项目、未确认全部测试或性能声明，推送时间不等于功能首发。

### 时间序列与可迁移 ML 工具

| 创建日期（UTC） | 项目与来源 | 简短摘要与成熟度 | 相关性判断 |
|---|---|---|---|
| 2026-10-27 23:49 | [BalTac/timestral-studio](https://github.com/BalTac/timestral-studio) · [元数据](https://api.github.com/repos/BalTac/timestral-studio) | 第三方 Timestral 工作台，README 描述预测、留出回测、分位数风险及 Agent 工具 schema；最近推送 10-28 00:15。它的 what-if 文案不构成因果有效性证明。 | TSFM 工具接入、时序 Agent 高；reasoning 模型本体低。优先核验 API 和回测。 |
| 2026-10-26 18:27 | [aleerangel/experimental-ml-framework](https://github.com/aleerangel/experimental-ml-framework) · [元数据](https://api.github.com/repos/aleerangel/experimental-ml-framework) | 规划共享切分、嵌套调参、恢复执行和结果溯源。README 的实现阶段 M1–M7 尚未勾选；最近推送 10-27 20:54。低优先级设计参考，不能称已可用框架。 | ML harness 高；时序验证和 AutoML 可迁移性中；TSFM/reasoning 低。 |
| 2026-10-25 19:27 | [csalamando/harness-mllc](https://github.com/csalamando/harness-mllc) · [元数据](https://api.github.com/repos/csalamando/harness-mllc) | 表格 ML 实验治理：候选晋升、champion 谱系、一次性 holdout、哈希证据和交付复核。最近推送 10-25 21:05；本轮只核 README 的设计声明。 | harness 高，AutoML 实验管理高；时序迁移中，需另核时间切分和反馈泄漏。 |
| 2026-10-22 04:43 | [dulfazl/DS-Cortex](https://github.com/dulfazl/DS-Cortex) · [元数据](https://api.github.com/repos/dulfazl/DS-Cortex) | CSV 数据审计、候选流水线、批评与证据验证、实验记忆及 Optuna 调参；LLM 规划解释，数值由 Python 工具产生，无 key 可模板运行。最近推送 10-27 17:14。 | AutoML Agent 与可追溯 reasoning 流程高；时序中，尚未核实专门的滚动验证支持；TSFM 低。 |

Timestral 官方 GitHub/HF 已合并在第一节，不重复计数。搜索到的个人主页不算项目；仓库描述中“LangGraph agent planned”也不当作已实现 Agent。

### 光伏功率预测

#### 2026-10-27｜chaos97yuan/DMU-NACI｜新增，工程观察

- **来源**：[仓库](https://github.com/chaos97yuan/DMU-NACI) · [元数据](https://api.github.com/repos/chaos97yuan/DMU-NACI)。创建 13:11 UTC，最近推送 14:04 UTC。
- **摘要**：15 分钟超前光伏预测，TCN 均值分支与 GRU 误差尺度分支分离，结合有来源约束的残差池及延迟反馈的自适应共形校准。
- **相关性**：概率时序与光伏高，Agent 反馈协议参考中高，TSFM 与直接 reasoning 低。
- **边界**：README 明确稿件仍在准备投稿，不能写作已发表论文；冻结数据产物之后的复现与从原始 CSV 端到端复现不同，部分旧工具依赖无法随仓库分发。稿件具体首发日不确定，故只按确定的新仓库日期收录，不提升为论文新增。

## 5. 光伏功率预测最新研究

### 2026-10-20｜Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting｜持续跟踪

- **来源**：[arXiv 2610.27763](https://arxiv.org/abs/2610.27763)，v1 10-20 07:26 UTC，本轮复核。
- **摘要**：将历史功率、气象观测、未来 NWP 和时间信息统一为序列补全，研究三类预训练目标；479 个场站中 139 个空间留出，预测跨度 6 小时至 7 天。
- **相关性**：领域 TSFM 与冷启动迁移高；Agent 选择是否适配的实验参考中高，显式 reasoning 低。继续关注天气预报发布版本和空间/时间留出。
- **本轮新增状态**：未独立核实更晚且直接相关的光伏基础模型论文首发。10-27 的 DMU-NACI 是代码与待投稿稿件线索，已在项目栏说明。

## 6. 检索范围与限制

- **arXiv / 聚合发现**：读取 [DailyArXiv master](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 完整快照，Last update 为 10-28，Time Series 板块 78 条实际论文行，最新列示日期 10-26。[最新自动提交](https://github.com/zezhishao/DailyArXiv/commit/0c4a4b0a6be8ca6bf3054e72346c2b14228d95a6)时间为 10-27 20:53 UTC；timeseries 分支返回 404，回退 master。正式论文条目均回 arXiv 摘要和首版时间核实，未将聚合日期当作首发。
- **过滤**：不收录窗口前首发论文作为新增；例如 2025 年 TS-Agent 及 2026 年 6 月编码 Agent 评测虽被搜索返回，均超窗。Agent-based simulation 不自动归入 LLM 建模 Agent。旧论文修订未比较差分，不包装成新研究。
- **会议来源**：对 OpenReview/ICLR、ACL、NeurIPS、ICML/PMLR、KDD/ACM、AAAI 做定向搜索；返回含旧论文与综述。本轮未确认比所列 arXiv 更晚的直接相关首发，并非全量会议扫描。[ACL 的 LLM Agents for Time-Series 综述](https://aclanthology.org/2026.findings-emnlp.367/)与此前 arXiv 工作不重复计为新研究。
- **GitHub 搜索**：timeseries agent、"time series" agent、automl agent、"machine learning" harness、photovoltaic forecasting；附 created:2026-07-28..2026-10-28，按 updated 倒序各取前三。总命中分别 4 / 120 / 100 / 28 / 72，有交叉与弱相关，非有效项目数。已访问 [Trending](https://github.com/trending)，本报项目来自定向搜索，不宣称上榜。对旧仓库近期实质更新的覆盖有限。
- **机构 / 模型平台**：定向补检 Mistral、Google Research、AWS、HF；Mistral 发布日采用官方页，HF 只合并入口，不把集合更新时间当首发。第三方 Studio 的模型许可描述未作为官方许可依据。
- **受限来源**：光伏补检命中 [CrossLinear 风光预测](https://www.mdpi.com/1996-1073/19/20/5017)，但直接页面返回 429，本轮未充分核实内容，未列正式条目；若仅见十月卷期而不能确认首次公开日，也不作确定新增。
- **核验深度**：论文核到摘要和版本史；项目核到 API 创建/推送元数据及 README，未审计完整代码、运行实验或独立验证作者指标。相关性是本报判断，不能替代效果证据。

## 建议优先阅读

先读风电 Agent 的采纳与晋升规则，再读 TimeWorld 和因果审计，最后对照 Jev 评测设计快速决策基线。工程上优先提取可复用的记录格式、冻结切分与回退规则，再评估是否引入自动搜索。上述为研究建议，尚无组合方案实证。

检索截止：2026-10-28 09:06（Asia/Shanghai）。本轮已执行指定 ssh-add 并成功 pull --ff-only；仅提交当天晨报，保留仓库中既有暂存和未提交资料。推送结果见任务回执。

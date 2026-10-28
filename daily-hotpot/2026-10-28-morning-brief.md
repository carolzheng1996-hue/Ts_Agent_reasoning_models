# 时间序列研究晨间简报｜2026-10-28

- **窗口**：2026-07-28 至本次检索截止（北京时间）；论文条目日期采用 arXiv 首版 UTC 日期，GitHub 采用创建日期，最近推送另列。月份不明确的首发不提升为确定新增。
- **对照**：上次完成记录为 10-23，今天重点补查其后的增量；“新增”指本报首次收录，不表示今天首发。任务跨日恢复，采用当前实际日期 10-28，不回填 10-26。
- **优先阅读**：TimeWorld、风电残差适配 Agent、TSFM 因果审计。三者分别回答“如何接入行动”“何时允许修正”“what-if 是否真正代表干预”。这些是可组合的研究线索，并非已经验证的统一方案。
- **核验深度**：论文已核原始摘要与版本史；项目已读 README，部分核到目录。指标均为作者报告，本轮未运行外部研究代码或复现实验。今天周三，不生成周报。

## 1. 时间序列基础模型最新研究

### 2026-10-26｜TimeWorld：行动条件化的时间序列世界模型｜新增，高优先级

- **来源**：[arXiv 2610.34797](https://arxiv.org/abs/2610.34797)，v1 03:39 UTC，页面标注 under review。
- **摘要**：提出覆盖七个真实数据集的 TSWM-Bench，将文本行动与记录中的行动—结果配对。TimeWorld 用响应原型调制 TSFM 潜在表示，并通过行动对比学习区分相同历史下的不同操作。作者发现简单文本前缀适配已能改善所测 TSFM，而常规多模态预测器不一定胜过仅历史输入的 TSFM。
- **相关性**：TSFM 高、Agent 行动规划高、reasoning 场景推演高。它是预训练模型适配框架，不是全新从零预训练骨干；观察记录上的行动条件预测不自动建立因果识别，应与下文因果审计联合阅读。

### 2026-10-26｜PHM 自监督预训练迁移审计｜新增，高优先级负结果

- **来源**：[Self-Supervised Pretraining for PHM](https://arxiv.org/abs/2610.35280)，v1 11:50 UTC。
- **摘要**：统一 47 个公开设备健康数据集，其中 11 个整体不参与预训练。约 80 万参数的掩码预训练编码器明显改善部分故障分类，但 CMAPSS 剩余寿命预测未稳定超越从头训练；自监督重建损失不能可靠选择下游模型。
- **相关性**：基础模型迁移评测高，Agent 选模型/学习率高，显式 reasoning 低。联邦与集中式比较存在学习率日程混杂且每种预训练只跑一次，不能据其差距断言联邦学习普遍更差。适合加入“预训练是否值得”的任务级对照。

### 2026-10-25｜Dynamic Multi-Step Decoding｜新增，推理阶段策略选择

- **来源**：[arXiv 2610.34409](https://arxiv.org/abs/2610.34409)，v1 16:10 UTC。
- **摘要**：冻结 Chronos-2 或 Moirai 骨干，训练轻量选择器决定一步预测或分块滚动；动态规划压缩候选日程，五个选择器投票，不一致则回退一步预测。报告 fev-bench 点预测改善，Chronos-2 仅恢复真值 oracle 增益的约 6–8%。
- **相关性**：TSFM 高，Agent 预算与策略路由中高，语言 reasoning 低。选择器在评测任务的历史窗口训练，不能将“骨干冻结”写成整个系统完全零样本；作者只主张点预测收益，不推断区间校准改善。

### 2026-10-23｜TSFM 生命周期成本与剪枝｜新增，部署研究

- **来源**：[Sustainability of TSFM Deployment and Pretraining](https://arxiv.org/abs/2610.32859)，v1 16:32 UTC。
- **摘要**：在工业部署情景中估算预训练与持续服务的累计碳成本。频繁查询可摊薄 Chronos-2 预训练开销，小规模低频场景则可能始终是经典模型更省；移除一个编码器块，在 25 项任务中报告约 6–9% FLOPs、排放与时延降低，预测性能基本保持。
- **相关性**：TSFM 部署高，Agent 成本路由中高，reasoning 低。摊销结论依赖调用频率与成本假设，不是任意硬件上的实测保证。

### 2026-10-15｜Mistral Timestral｜持续跟踪，官方模型入口复核

- **来源**：[官方发布](https://mistral.ai/news/timestral/) · [GitHub](https://github.com/mistralai/timestral) · [HuggingFace 权重合集](https://huggingface.co/collections/mistralai/timestral)。发布日 10-15，仓库创建同日 10:20 UTC，本轮未发现新的官方发布版本。
- **摘要**：5M、28M、123M、209M 四种规模，支持多变量概率预测及历史/已知未来协变量，提供 CPU/GPU 独立推理接口。官方报告发布时的基准领先结果，今日未独立复核排行榜。
- **相关性**：TSFM 与 Agent 预测工具高，显式 reasoning 低。官方 README 明确区分代码 Apache-2.0 与权重 Modified MIT；社区封装的许可描述不能替代权重许可。GitHub 与 HF 合并为一个项目，不重复计数。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-26｜Guarded Agent-in-the-Loop Residual Adaptation｜新增，最高优先级

- **来源**：[风电场景残差适配论文](https://arxiv.org/abs/2610.34968)，v1 07:38 UTC。
- **摘要**：保持时序骨干不变，Agent 根据外部场景选择小型残差专家，只有近期已观测误差支持时才接受修正；新专家也需先通过验证门槛。九种骨干、五个预测跨度共 45 组中，作者报告 MAE/RMSE 均改善，按骨干汇总 MAE 降幅 11.21–20.26%。
- **相关性**：时序 Agent 高、harness 接受/回退机制高、TSFM 适配中高、显式推理模型中。尚未评估长期无人值守部署；摘要不足以确认 Agent 是否完全依赖 LLM。迁移时应核对气象信息可用时间、反馈延迟、专家晋升与最终测试的隔离。

### 2026-10-23｜MAPS：任务可预测性度量｜新增，相邻评测工具

- **来源**：[Model-agnostic predictability quantification](https://arxiv.org/abs/2610.33209)，v1 19:00 UTC。
- **摘要**：用协变量信息衡量不同回看窗口、预测跨度下的任务可预测性，试图区分任务难度与模型能力；在合成和真实数据上与六种度量比较。
- **相关性**：Agent 搜索预算分配及 harness 分层评测中高，TSFM 评估中，reasoning 本体低。将其用于分配搜索预算是本报建议，论文摘要未证明这种 Agent 用法有效；不能把估计得分当作所有模型准确率的严格上界。

## 3. 时间序列 reasoning 模型最新研究

本轮没有确认晚于 10-19、且属于直接时序语言推理模型的新首发；新增重点是解释证据与干预语义审计，不将它们冒称新 reasoning LLM。

### 2026-10-23｜TempShap：定位“何时、哪个变量”影响预测｜新增，解释证据组件

- **来源**：[arXiv 2610.33330](https://arxiv.org/abs/2610.33330)，v1 22:08 UTC。
- **摘要**：把输入单元 `(时间, 变量)` 作为 Shapley 参与者，用损失归因张量描述时间定位与预测跨度影响，比较冗余输入下的归因与删除排序。
- **相关性**：reasoning 证据审计与 Agent 解释工具高，基础模型本体低。它是回顾性、基于损失的归因，不是新推理语言模型，也不是因果干预证明；需避免让在线 Agent 提前使用未来真值构造解释。

### 2026-10-22｜Forecasting Associations, Not Interventions｜新增，最高优先级审计

- **来源**：[TSFM 预注册因果审计](https://arxiv.org/abs/2610.31869)，v1 20:01 UTC。
- **摘要**：区分条件关联与干预效应，在有反事实真值的结构模型和随机执行器物理系统上审计 Chronos-2、TiRex-2、TabPFN-TS、TimesFM-2.5。作者报告预测常沿观察关联变化，即使嵌入含有可解码的机制信息，也未充分反映到预测；小规模干预后训练可缩小差距，但伴随预测分布权衡。
- **相关性**：时序 reasoning/what-if、Agent 决策与 TSFM 均高。对 TimeWorld 和社区 what-if API 的直接启示是分别测试“条件预测正确”与“干预效应正确”；论文未直接评测今天的社区封装，不能据此给该项目下性能结论。

### 2026-10-22｜TT-SAX：面向自然语言形状查询的双轨符号化｜新增，工具层研究

- **来源**：[arXiv 2610.30593](https://arxiv.org/abs/2610.30593) · [作者代码](https://github.com/Atlamtiz/tt-sax)，v1 01:49 UTC；作者注明 ADC 2026 接收、上传稿为评审前版本。
- **摘要**：保留 SAX 水平符号，为各片段增加跨邻段趋势符号，使方向及幅度更贴合语言查询。在 NLQTSBench 上比较六种经典符号化和六个 LLM。
- **相关性**：时序 Agent 检索与推理表征高，TSFM 低。不是新 LLM，也不能将形状检索改善外推为预测或因果推理改善；本轮未检查代码实现。

### 2026-10-19｜TimesJev｜持续跟踪，直接时序 reasoning

- **来源**：[arXiv 2610.26002](https://arxiv.org/abs/2610.26002)，v1 08:26 UTC，本轮复核。
- **摘要**：以门控压缩保留关键频率信息，再对齐快速模型的嵌入空间，降低长思维链成本。
- **相关性**：时序 reasoning 与 Agent 延迟预算高、TSFM 中。应重点检查压缩是否丢失稀有事件，不能仅用平均性能替代证据忠实度检查。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

项目日期为 UTC 创建日；“已读目录”只证明有对应文件，不代表运行通过。未列项目不等于没有更新。

### 时间序列及 machine learning / AutoML / harness

| 创建日期 / 最近推送 | 项目与来源 | 摘要及核验边界 | 相关性判断 |
| --- | --- | --- | --- |
| 10-27 23:49 / 10-28 00:15 | [BalTac/timestral-studio](https://github.com/BalTac/timestral-studio) · [元数据](https://api.github.com/repos/BalTac/timestral-studio) | Timestral 社区工作台，README 描述留出回测、分位数预测、协变量场景和 Agent API。已读 README/目录，存在 app.py、测试及前端；未运行、未核完整 API 协议实现。README 把 what-if 描述为干预模拟，因果有效性尚无证据；权重许可见官方说明。 | TSFM 工具与时序 Agent **高**，独立 reasoning 模型低；新封装不等于新模型发布。 |
| 10-26 18:27 / 10-27 20:54 | [aleerangel/experimental-ml-framework](https://github.com/aleerangel/experimental-ml-framework) · [元数据](https://api.github.com/repos/aleerangel/experimental-ml-framework) | 规划共享数据划分、嵌套调参、实验恢复、统计比较与可复现报告。README 的 MVP 实现 M1–M7 及实验验证均未勾选，故仅作为设计文档观察，不能称已可用框架。 | ML harness **高**，时序/AutoML 迁移中；**低优先级、待实现**。 |
| 10-25 19:27 / 10-25 21:05 | [csalamando/harness-mllc](https://github.com/csalamando/harness-mllc) · [元数据](https://api.github.com/repos/csalamando/harness-mllc) | 表格 ML 生命周期工具，强调 champion 谱系、一次终评、哈希与阶段检查。已读 README/目录，含数据、holdout、gates 和测试；文档列随机、分层、分组切分，未列时间切分。未审计“一次终评”是否不可绕过。 | harness **高**，时序 Agent 迁移中；需补时间滚动验证，不直接拿默认协议评测时序。 |
| 10-22 04:43 / 10-27 17:14 | [dulfazl/DS-Cortex](https://github.com/dulfazl/DS-Cortex) · [元数据](https://api.github.com/repos/dulfazl/DS-Cortex) | 多 Agent 提出、批评和裁决候选流水线，要求论断关联工具运行，以实验估计置信度。已读 README/目录，有 Agent、ledger、评测脚本及测试；无密钥时使用模板叙述。未核其校准结果及测试隔离。 | AutoML / ML Agent 与证据 harness **高**，时序中；未确认时间序列专用流程，不能直接声称时序无泄漏。 |

**官方模型与 HF 去重**：Timestral 官方 GitHub/权重合集统一记录在第 1 节；社区 Studio 是不同工程项目，单列。以上均为定向搜索发现，不声称进入 GitHub Trending。

### 光伏功率预测

**2026-10-27 13:11 创建，14:04 推送｜[chaos97yuan/DMU-NACI](https://github.com/chaos97yuan/DMU-NACI) · [元数据](https://api.github.com/repos/chaos97yuan/DMU-NACI)**

- **摘要**：15 分钟超前 PV 区间预测，分离均值与误差尺度，跟踪残差来源，并只在 15 分钟标签成熟后更新自适应共形校准。已读 README 与目录，存在检查点、配置和实验产物。
- **边界**：作者明确标注原始 CSV 到冻结窗口的完整依赖未发布，不能称端到端可复现。论文为准备投稿 Solar Energy 的 2026 年 10 月草稿，**论文首次公开日期不确定**；本条按可确认的仓库创建日收录，不称已发表论文。
- **相关性**：光伏与延迟反馈 harness 高，时序 Agent 迁移中高，TSFM/显式 reasoning 低。适合参考数据来源与成熟反馈约束，未独立复核“位级一致复现”声明。

## 5. 光伏功率预测最新研究

### 2026-10-20｜Foundation-Style Pretraining for Distributed PV Forecasting｜持续跟踪

- **来源**：[arXiv 2610.27763](https://arxiv.org/abs/2610.27763)，v1 07:26 UTC，本轮复核。
- **摘要**：历史功率、气象、未来 NWP 与时间编码统一为序列补全，比较三种预训练目标；479 个站点中 139 个作为空间留出，评估 6 小时至 7 天预测。
- **相关性**：领域 TSFM 与光伏高，Agent 冷启动适配中高，reasoning 低。本轮未确认更晚且直接相关的光伏基础模型首发；NWP 历史发布版本与时间划分仍是复现重点。新增工程线索见 DMU-NACI，不混作新论文。

## 6. 检索覆盖与过滤记录

- **DailyArXiv**：[master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)完整获取，Last update 10-28；Time Series 板块 78 条实际论文行，最新列示 10-26。[最新提交 0c4a4b0](https://github.com/zezhishao/DailyArXiv/commit/0c4a4b0a6be8ca6bf3054e72346c2b14228d95a6)为 10-27 20:53 UTC。timeseries 分支不可访问，回退 master。聚合列表日期不替代 v1。
- **GitHub Search**：timeseries agent、带引号 time series agent、automl agent、带引号 machine learning harness、photovoltaic forecasting 五组；创建窗口 07-28 至 10-28，按更新每组取前四。总命中分别 4 / 120 / 100 / 28 / 72，存在重叠与弱相关，不能视为有效新增数。另访问 [Trending](https://github.com/trending)；未做全量仓库或所有旧项目更新审计。
- **会议与预印本**：定向查询 arXiv、OpenReview（含 ICLR 线索）、ACL、NeurIPS、ICML/PMLR、KDD/ACM、AAAI。ACL 检到十月 EMNLP 论文页；会议版本不自动算新首发，未将仅会议月份的条目冒充新论文。AAAI 三月与 ACL 七月上旬论文均早于窗口，排除。检索有限，不能宣称会议全覆盖。
- **首发过滤示例**：DailyArXiv 中 2605.07600、2411.00852 虽近期修订，首发编号月份在窗口前，未纳入新研究；DF-NPE 的 agent-based models 是仿真个体模型，不等同 LLM 建模 Agent，未因关键词收录主栏。
- **官方与资讯**：补检机构博客和 HuggingFace，回到 Mistral 官方确认 10-15 发布与代码/权重边界。[AI HOT](https://aihot.virxact.com)近七天论文精选 19 条，无额外直接时序主线新增；只作线索，不把资讯摘要作为论文证据。
- **今日研究建议**：对行动条件化模型分别测预测与因果效应；为 Agent 专家修正设延迟反馈和回退；将策略选择器训练成本、经典基线与硬件成本一起记账。均为本报推导，尚无统一方案的复现实验。

检索与编写截止：2026-10-28 09:08:58（北京时间）。已执行指定 ssh-add 并成功完成 SSH pull --ff-only。仅提交本日简报；提交、推送结果以任务回执为准。

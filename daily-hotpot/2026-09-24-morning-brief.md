# 2026-09-24 时间序列 Agent / Reasoning 晨间简报

检索截止：**2026-09-24 08:49 CST（北京时间）**。近三个月窗口：**2026-06-24 至检索截止**。以昨日含下午补充版（仓库提交 `3ff1870`）及历史晨报去重；“新增”指首次收录，不等于今天首发。论文采用来源公开日期，arXiv v1 和仓库元数据日期为 UTC；期刊上线与更早预印本日期分别判断。今天周四，不更新周报。

## 1. 今日重点

- **TimeInteract 是首要新读物**：从离线问答转向持续感知、决定响应时机、生成回答时继续接收时序观测。与 Agent 的实时监控和主动交互直接相关。
- **概率预测要分开检查边际与联合轨迹**：新论文研究如何在冻结 TSFM 的条件下构造跨时间、跨变量依赖；另一篇评测强调点预测准确并不保证概率可靠。
- **新增四个 GitHub 候选**：AdaptAD、Chronos-2 forecasting workshop、AML evaluation harness、Avaloka，分别覆盖异常诊断、预测工具调用、评测溯源及 ML Agent 编排。均未安装运行。
- **撤回过滤**：arXiv 2609.22836 的 9 月 22 日更新实际是撤回，不能按新基础模型成果推荐。

## 2. 时间序列基础模型最新研究

### [2026-09-22｜新增] Gnomon：按数据可得性切换的物理信息预测系统

- **来源与日期**：[arXiv 2609.26696](https://arxiv.org/abs/2609.26696)，v1 为 9 月 22 日 16:50 UTC。
- **摘要**：利用天气、轨道、路由等物理协变量预测低轨卫星链路吞吐量和时延；有本站或邻站历史时使用微调 TSFM，只有物理协变量时使用提升树，三种模式共用输出接口。作者以九站点数据、三站训练六站留出评估跨站迁移。
- **相关性**：**TSFM 应用高，Agent 工具路由中高，显式 reasoning 低**。值得借鉴“先判断可用信息，再选择预测路径”，但不是新通用基础模型，也未证明 LLM 自主调度收益。本轮核验摘要与日期，未审计天气在起报时的可得性。

### [2026-09-22｜新增] Interweaving Marginals：免训练构造多变量预测轨迹

- **来源与日期**：[arXiv 2609.25980](https://arxiv.org/abs/2609.25980)，v1 为 9 月 22 日 10:35 UTC。
- **摘要**：坐标级预测分布不能唯一决定联合未来轨迹。论文冻结 TSFM，并在各通道、各步长保持相同边际样本集合，单独比较依赖重建；历史时间关系与变量关系改善相应诊断指标。
- **相关性**：**概率 TSFM 高，场景生成 / Agent 决策工具高，语言 reasoning 低**。适合研究储能调度等依赖整条路径的任务；不能把边际覆盖率当作联合轨迹可靠性的证明。它是后处理研究，非新训练骨干。

### [2026-09-22｜新增，日期边界待补核] 零样本 TSFM 的准确性与概率可靠性评测

- **来源与日期**：[arXiv 2609.25788](https://arxiv.org/abs/2609.25788)，v1 为 9 月 22 日 07:21 UTC；注释为 ADBIS 2026 录用。**更早会议版本公开日不确定**，降低首发新颖性优先级。
- **摘要**：在能源、交通和金融数据上比较六个 TSFM 与统计、监督学习基线，报告点预测和概率校准之间的权衡，以及上下文长度饱和现象。
- **相关性**：**TSFM 评测高，Agent 选模 / 风险工具高，显式 reasoning 低**。摘要中的 zero-shot reasoning 不等于经过验证的语言推理能力；架构优劣只限作者所测模型、数据及预测步长。

### [2026-09-19｜补录；9 月 22 日修订] Oracle-informed stress tests：拆开环境风险与模型误差

- **来源与日期**：[arXiv 2609.22820](https://arxiv.org/abs/2609.22820)，v1 为 9 月 19 日，v2 为 9 月 22 日；本轮未做版本差分。
- **摘要**：用机制可控的数据生成过程和不向被测模型开放的预测 oracle，分解环境风险与预测偏离条件均值的距离；比较 24 种预测器，并用独立生成实例检验结论稳定性。部分发现集上的模式未能复现。
- **相关性**：**forecasting harness / 自动选模高，TSFM 诊断高，Agent 方法中**。有助于防止 Agent 将所有 MSE 上升都归因于模型退化；oracle 归因依赖合成机制，不直接迁移成真实数据的因果解释。

## 3. 时间序列建模 Agent 最新研究

### [2026-09-22｜新增，优先级高] TimeInteract：实时流式时序交互

- **来源与日期**：[arXiv 2609.26389](https://arxiv.org/abs/2609.26389)，v1 为 9 月 22 日 13:29 UTC。
- **摘要**：双视图流式编码器同时提取局部变化与历史动态，响应控制决定沉默或回答，解耦推理允许回答期间继续接收数据。StreamTSI-34K 包含 34,588 个交互片段、77,505 条响应；作者报告交互任务收益、触发能力与流阻塞改善。
- **相关性**：**实时 Agent 交互高，时序理解 / reasoning 中高，数值预测 TSFM 中低**。重点是持续感知与响应控制；尚不能据此宣称完成自动建模、选模或多工具实验闭环。
- **待核**：迟报与误触发代价、长时间连续运行、真实流的时间隔离以及生成中到达的新证据如何处理。未核实官方代码和权重发布，不列成已可部署模型。

### [2026-09-21｜持续跟踪] TimEvolve：结果到达后更新策略

- **来源与日期**：[When Tomorrow Becomes Today](https://arxiv.org/abs/2609.24862)，v1 为 9 月 21 日；今日重核，不计新增。
- **摘要**：冻结基础模型，在未来结果揭示后更新专家信任、路径和干预策略。
- **相关性**：**时序建模 Agent 高，策略 reasoning 高**。与 TimeInteract 的比较方向是“何时响应”与“反馈到达后如何更新”；这是本简报提出的研究联系，非两篇已完成的联合实验。

## 4. 时间序列 reasoning 模型最新研究

本轮最新模型进展是上一节 **TimeInteract（9 月 22 日）** 的交互控制与时序理解，不重复计条目；未核实比它更晚且独立发布的通用时序 reasoning 模型。

### [2026-09-21｜持续跟踪] TimeLitmus：解释是否真的使用时序证据

- **来源与日期**：[arXiv 2609.24677](https://arxiv.org/abs/2609.24677)，v1 为 9 月 21 日；今日重核，不计新增。
- **摘要**：用金融、交通任务的反事实和对照干预诊断跨模态理解与解释忠实性，揭示“解释提到某因素”和“预测确实受该因素影响”的差距。
- **相关性**：**reasoning 评测高，Agent 证据核验高，TSFM 中**。这是基准而非新模型；可为 TimeInteract 的响应理由和 AdaptAD 的工具证据设计类似干预检查，但适配效果仍待实验。

## 5. GitHub 和 Hugging Face 上值得跟踪的新项目

### 时间序列、Agent harness、machine learning 与 AutoML

按创建日期从近到远排列。同日用创建时间排序。日期来自 GitHub 官方 API，仓库创建不必然等于首次公开实现；相关性为本简报判断。

| 创建 / 最近推送（UTC） | 项目 | 摘要、相关性和核验边界 |
|---|---|---|
| 2026-09-23 20:38 / 09-23 | [BuiltByDu/AdaptAD](https://github.com/BuiltByDu/AdaptAD)（首次收录） | ViT4TS 初筛后，ReAct Agent 通过绘图、数值读取、相似片段检索调整异常分数。已读 README、目录及 `ours/agent/loop.py`，代码包含真实模型调用、工具预算、拒绝记录和轨迹保存。**时序 Agent / reasoning 高，TSFM 低至中**。README 明确是 ICASSP 2027 投稿，不能称录用；性能为作者自报，阈值和证据忠实性未复现。 |
| 2026-09-23 12:33 / 09-23 | [mert-at-msft/chronos2-forecasting-workshop](https://github.com/mert-at-msft/chronos2-forecasting-workshop)（首次收录） | 八个实验将预测、微调、基线评测和工具调用串联。抽查 `scripts/forecast_agent.py`，LLM 调用托管 Chronos-2 端点后解释结果，默认合成负荷数据。**TSFM 工具集成 / Agent 工程高，AutoML 中，新增模型研究低**。本地探索脚本可能回退替代模型，不能把流程跑通当成真实 Chronos-2 结果；仓库声明是样例而非受支持的微软产品。 |
| 2026-09-23 04:18 / 09-23 | [NirmalKumar31/aml-evaluation-harness](https://github.com/NirmalKumar31/aml-evaluation-harness)（新仓库，相关作者旧项目已报道） | 面向合成反洗钱交易的按日告警预算评测、随机基线、可达上限、结果溯源与发布检查。已读 README 和目录。**ML harness 高，时序评测中高，TSFM / reasoning 低**；AML 指反洗钱，非 AutoML。README 明确完整回放包未分发，历史容器无法逐位重建，不能写成完整可复现。与此前 `aml-evaluation-harness-public` 不重复认定为全新研究。 |
| 2026-09-14 / 09-23 | [guruvaidev/avaloka](https://github.com/guruvaidev/avaloka)（首次收录） | LangGraph 编排采样、分析、代码生成、验证、执行、训练和推理，可接本地或 Ray。已核 README 及实际训练 / 执行模块目录。**ML / AutoML 工作流 Agent 高，时序直接证据低**；未验证滚动时间切分、未来协变量约束或预测效果，不认为可直接替代时序专用 AutoML。 |

Hugging Face 定向检索 `TimeInteract` 未返回模型条目；这只表示该名称检索未命中，不证明不存在别名或数据集发布。新教程使用既有 Chronos-2，不将该模型重新计算为三个月内新发布。

### 光伏功率预测

- **[创建 2026-09-21；推送 09-21｜链接维护] [Italo-1/equatorial-photovoltaic-forecasting](https://github.com/Italo-1/equatorial-photovoltaic-forecasting)**：今日 GitHub 搜索返回的新路径与昨日 `05-mev-P3` 的创建时间、项目描述相同，**疑似改名，未独立确认迁移关系**；不计新增项目。七类预测模型比较，**光伏评测高，Agent / TSFM 低**；本轮仅核元数据。
- **[创建 2026-08-10；推送 09-23｜活动刷新] [doccodyblue/ha-pvstrings](https://github.com/doccodyblue/ha-pvstrings)**：pvlib 物理预测加学习式残差校正，**光伏工程高，Agent 工具层中，显式 reasoning 低**。只确认最近推送，未比较提交差分，不宣称新增功能。

## 6. 光伏功率预测最新研究

### [2026-09-23｜新线索，低优先级] CIPformer：日内功率预测的自适应分解与通道关系

- **来源与日期**：[Springer 官方页面](https://link.springer.com/article/10.1007/s44443-026-01285-2)，官方搜索索引列 Published 23 September 2026；全文入口访问失败，**更早预印本日期不确定**。
- **摘要范围**：标题与官方摘要片段支持自适应趋势 / 季节 / 残差分解及通道关系建模；不列未核实性能数字。
- **相关性**：**光伏预测高，Agent 数值专家中，TSFM / 显式 reasoning 低**。需补核时间切分及天气输入是否起报时已知后再进入复现优先列表。

### [2026-09-22｜新线索，低优先级] 分布式光伏的相关稀疏建模与不确定性模式预测

- **来源与日期**：[Electronics 15(19), 4346](https://www.mdpi.com/2079-9292/15/19/4346)，官方索引列 Published 22 September 2026；正文访问失败，**更早首发日期不确定**。
- **摘要范围**：面向分布式光伏超短期区间预测，讨论大规模站点的时空关系与不确定性建模；实验规模及校准效果未核实。
- **相关性**：**光伏概率预测高，Agent 风险工具中，TSFM / reasoning 低**。作为待核线索，不能与完整核验的 arXiv 方法并列评价性能。

## 7. 检索记录与边界

- **DailyArXiv**：[仓库](https://github.com/zezhishao/DailyArXiv)的 `timeseries` 分支本轮返回不存在；回退默认 README，标记 Last update **2026-09-24**，Time Series 共 **73 条**，最新条目为 9 月 22 日。[自动提交 74fd7ae](https://github.com/zezhishao/DailyArXiv/commit/74fd7aeada130bd30a095555fa3a6e82ff79e314)为 9 月 23 日 19:46 UTC。聚合仅用于发现，重点逐篇回 arXiv 查日期、摘要与状态。
- **arXiv 覆盖**：定向检索 9 月 22–23 日时序论文，并核验上述候选原页；本轮未全量扫描所有学科和分页，因此不能声称覆盖 9 月 24 日全部公告。
- **会议与机构**：定向搜索 OpenReview / ICLR、ACL、PMLR / ICML、NeurIPS、KDD、AAAI 与 Google Research。返回的 [TS-Reasoner](https://openreview.net/attachment?id=yhy7Vigjcf&name=pdf)为 3 月，超窗排除；[ICLR TSALM](https://openreview.net/group?id=ICLR.cc%2F2026%2FWorkshop%2FTSALM)为 4 月 workshop，不能作为近期模型发布。[ACL STReasoner](https://aclanthology.org/2026.acl-long.702/)虽为 7 月正式出版，更早首发未在本轮核实，不将出版页视为新增研究。Google 的 [TimesFM-3](https://research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/)仍为 8 月 31 日已报道条目。检索未得到更多已核实新增，不表示这些来源没有更新。
- **撤回与超窗排除**：[不规则多变量 Hybrid Attention](https://arxiv.org/abs/2609.22836)9 月 19 日 v1、9 月 22 日 v2 **withdrawn**，不纳入成果推荐。DailyArXiv 中 5 月农业预警、1 月农产品 TSFM 等旧稿的 9 月修订不按新首发计数。
- **GitHub 搜索**：创建窗口 6 月 24 日至 9 月 24 日，按更新排序；`time-series agent` / `timeseries agent` / `automl` / `harness machine-learning` / `photovoltaic forecasting` 各取前 6，总命中 **147 / 8 / 809 / 141 / 52**。另查 `automl agent` 前 5，总计 98。总数含噪声，非相关项目数量。未检查完整 Trending 榜单；项目依赖和性能未运行验证。
- **AI HOT 补检**：使用 AI HOT 技能检索近七天 time series 精选，返回 0 条；数据来自 [AI HOT](https://aihot.virxact.com)，不据此推断全行业无更新。
- **日期与验证限制**：三个月外旧研究只出现在排除说明中；日期不确定的期刊线索已降级。所有性能均来自作者陈述，未进行独立复现。今天不重复罗列近期所有旧条目，保留最新新增及必要比较基线。

# 2026-09-17 时间序列研究晨间简报

检索截止：**2026-09-17 15:36 CST（Asia/Shanghai）**；保留 09:03 早版，下午增量补检。三个月窗口：**2026-06-17 至检索时点**，含起始日。论文日期采用官方 arXiv v1 UTC 日期，并检查更早发表线索；GitHub 采用创建日期，推送日期只代表活动。增量基线为 9 月 16 日含下午增补版（aa4a19b），并搜索既有日报去重。今天周四，不更新周报；按 PROJECT_RULES 保留光伏栏目。

## 今日重点

- **新增发现 6 篇已核验论文**：WaveTLM、TERN、SOTER、Distributed JEPA、人流预测 TSFM 对照研究，以及临床时序推理的 hindsight bias 基准。首发为 9 月 11–16 日，均不是今日首发。
- **新增 2 个 GitHub 项目**：FLUX 金融预测系统、AutoML-Agent-Yield 材料建模展示代码。后者的产物校验机制值得研究，但公开版明确无法直接端到端运行。
- **今日关注评测边界**：领域预训练的收益、传统基线在短历史条件下的竞争力，以及未来信息暴露如何改变推理答案。没有确认比昨日 LongAgent 更新的高相关自主建模 Agent 论文。

## 1. 时间序列基础模型最新研究

### [2026-09-15] Distributed JEPA：异质能源序列的自监督表示 — 新增发现

- 日期与来源：v1 **2026-09-15 11:36:20 UTC**；[官方摘要与版本历史](https://arxiv.org/abs/2609.17029)。
- 摘要：在共享嵌入空间结合时序与上下文，预测被遮蔽片段的潜在表示，并通过协方差和时间方差正则抑制表示坍塌。作者报告建筑能耗上接近 Transformer，5 个用户簇中 3 个更好，在 10 个未见光伏资产中 9 个优于对照，缺失数据下更稳健。
- 相关性：**自监督时序迁移 / 能源高，Agent 可复用表示中高，显式 reasoning 低**。属于通向可迁移基础表示的研究，不应仅凭 JEPA 名称认定其已具备通用大规模 TSFM 能力。光伏结果见第 5 栏交叉引用，不重复计篇数。
- 核验：官方日期和摘要已读；未确认代码、权重或跨资产划分细节，性能为作者报告。

### [2026-09-15] SOTER：面向可穿戴生理信号的生成式 TSFM — 新增发现

- 日期与来源：v1 **2026-09-15 08:11:03 UTC**；[官方论文](https://arxiv.org/abs/2609.16804)。
- 摘要：结合跨通道依赖、功率谱密度引导的专家路由与连续时间解码器，支持任意时间点预测和插补。在五个公开生理数据集共 2260 亿时间点上预训练；作者报告零样本预测在六个数据集中的四个取得最佳 RMSE，75% 缺失率插补在六个数据集上均取得最低误差。
- 相关性：**领域 TSFM / 不规则多变量时序高，Agent 多任务工具中高，显式 reasoning 低**。专家路由使用固定、可检查的频带规则，不等同于语言推理或自主规划。可研究生理领域归纳偏置是否比跨域通用骨干更重要。
- 核验：摘要和 v1 日期已确认；未复现。HuggingFace 搜索命中论文聚合页，未独立确认官方权重发布，不计新模型仓库。

### [2026-09-14] 人流预测中 TSFM 究竟有多好？ — 新增发现

- 日期与来源：v1 **2026-09-14 22:46:32 UTC**；[How Good Are Time-Series Foundation Models for Pedestrian Crowd Count Forecasting?](https://arxiv.org/abs/2609.16415)。
- 摘要：在五天特殊活动与多年季节性人流数据上比较 Seasonal Naive、树模型、深度模型、TimesFM 和 Chronos-2。作者发现短历史、高流量传感器的长步长预测中，季节朴素基线仍有竞争力；基础模型的优势主要出现在长上下文、历史丰富且季节性强的设置。
- 相关性：**TSFM 评测 / AutoML 条件选模高，Agent 路由策略中高，reasoning 低**。为 Agent 选择模型提供条件化证据，不支持“基础模型总是优于传统方法”。
- 核验：官方摘要和日期已确认。作者注释为投稿 IEEE ITSC 2026，不写成已接收；未复现实验。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-16] TERN：阶段感知记忆与在线适应 — 下午新增，Agent 工具邻近研究

- 日期与来源：v1 **2026-09-16 10:00:53 UTC**；[官方摘要与版本历史](https://arxiv.org/abs/2609.18407)。
- 摘要：针对流感周序列，以 delta-rule 快速权重记忆结合通道衰减、学习到的定址擦除、显式季节参考和在线适应，在阶段变化时遗忘过时关联。作者在三个 Cola-GNN 基准上报告优于若干预测对照，并以控制实验考察记忆模块贡献。
- 相关性：**时序记忆 / 在线适应高，Agent 预测工具与记忆设计启发中高，TSFM / 显式 reasoning 低**。这是领域预测器，不是 LLM 自主建模 Agent，也未证明可直接迁移到光伏；列于此处作为工具设计候选。
- 核验：摘要和 v1 时间已确认；未核验代码和实验划分，未复现。对 Agent 的借鉴为本简报判断。

### [2026-09-14] LongAgent — 持续跟踪，非今日新增

- 日期与来源：v1 **2026-09-14**；[LongAgent: History-Guided Agentic Search for Longitudinal Outcome Prediction](https://arxiv.org/abs/2609.15859)。今日重新打开官方页面。
- 摘要：通过搜索历史与数值评价，联合探索变量、时间窗口及纵向聚合函数。作者在合成数据上报告小幅收益，临床真实数据上与最强基线相当。
- 相关性：**纵向建模 Agent / 特征搜索高，reasoning 过程设计中高，通用 TSFM 低**。今天新增的工程候选见第 4 栏；没有充分证据宣布新的更强自主建模系统。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-16] WaveTLM：将时序请求编译为可验证输出 — 下午新增，优先阅读

- 日期与来源：v1 **2026-09-16 15:21:39 UTC**；[官方摘要与历史](https://arxiv.org/abs/2609.18812)、[论文方法正文](https://arxiv.org/html/2609.18812v1)。
- 摘要：提出 ExecTS-QA，覆盖预测、插补、分类、异常检测和波形分析；任务编译器把自然语言请求、可见参数和时序证据转为带类型的状态，由专用执行器构造数值张量、合法标签或结构化记录。作者报告输出契约有效覆盖率 **99.40%**，所比较的最强字符串优先基线为 **37.83%**。
- 相关性：**时序语言接口 / Agent 执行契约与评估 harness 高，reasoning 的可执行性高，显式思维链真实性及通用 TSFM 能力未证实**。输出合法率不等于预测准确率；应分别测量形状、通道顺序、时间对齐、尺度和实际误差。
- 核验：已读官方摘要、日期及方法定义；正文称路由仅使用可见请求，契约参数不包含目标。代码、构造脚本和数据仍写作“发表后公开”，**不计已发布 GitHub / HF 项目**。未复现实验或独立审计训练数据隔离。

### [2026-09-11] TimeThink — 持续跟踪，非今日新增

- 日期与来源：v1 **2026-09-11 19:22:05 UTC**；[官方论文](https://arxiv.org/abs/2609.13457)。今日重核官方页面，代码状态沿用昨日记录。
- 摘要：利用合成时序原语及组合问答提供推理轨迹，再以可验证奖励训练时序语言模型。
- 相关性：**组合 reasoning / RLVR 高，Agent 可验证回答中高，未来数值预测中低**。今日更值得补充的是下项“推理是否看到了未来”的评测，不将合成问答提升直接外推为预测提升。

### [2026-09-11] Hindsight Bias in Clinical Temporal Reasoning — 新增发现，评测研究

- 日期与来源：v1 **2026-09-11 19:15:20 UTC**；[官方摘要与版本历史](https://arxiv.org/abs/2609.13454)。
- 摘要：将 171 篇病例报告转为叙述与文本时间序列，对同一问题比较决策截点前信息和完整时间线，设置与最终结局一致的“事后偏见陷阱”。作者报告暴露完整时间线会系统性改变回答，而时间遮蔽降低偏差且未降低准确率。
- 相关性：**时序 reasoning 评测 / Agent 信息可得性高，连续值 TSFM 低**。建议借鉴成对遮蔽实验，分别记录准确率、陷阱率与答案不稳定率；临床文本时间序列证据不等于数值预测基准上的已验证收益。
- 核验：已核验官方摘要、日期；未审计病例标注或复现实验。这是基准与偏差分析，不是新 reasoning 骨干；会议状态仅依据作者注释，不独立背书接收。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（Agent、harness、machine learning、AutoML）

#### [2026-09-16] lijy-forge/Automl-Agent-Yield — 新建，代码展示版

- 日期与来源：创建 **2026-09-16 11:46:02 UTC**，推送 **11:55:51 UTC**；[仓库与 README](https://github.com/lijy-forge/Automl-Agent-Yield)、[官方元数据](https://api.github.com/repos/lijy-forge/Automl-Agent-Yield)。
- 摘要：基于既有 AutoML-Agent 二次开发，面向浆料屈服应力预测，以管理器组织资料检索、候选机制、模型规划、代码生成与失败修订；要求保存指标、预测、模型、预处理和机制报告。
- 核验：读取 README、文件树及 [yield_guardrails.py](https://github.com/lijy-forge/Automl-Agent-Yield/blob/HEAD/operation_agent/yield_guardrails.py) 的生成契约，确认要求 OOF、训练折内预处理与机制证据记录；未逐项审计全部验证函数。README 明确缺少实验数据、运行产物等，**不能直接端到端运行**。
- 相关性：**AutoML / 生成代码 harness 高，时序迁移启发中，TSFM 低**。可借鉴“生成—执行—产物验收—反馈”接口，但屈服应力回归不是时序预测，其 K-fold 要求也不能直接移用于时序。上游 2025 年论文不计本窗口新研究。

#### [2026-09-16] nishanthsr7-eng/FLUX-Agentic_Finance_System — 新建，有预测代码

- 日期与来源：创建 **2026-09-16 08:50:59 UTC**，推送 **09:01:20 UTC**；[仓库](https://github.com/nishanthsr7-eng/FLUX-Agentic_Finance_System)、[元数据](https://api.github.com/repos/nishanthsr7-eng/FLUX-Agentic_Finance_System)。
- 摘要：金融数据应用包含 XGBoost 预测、带间隔的前向评估、校准与不确定性区间。README 另宣称 Chronos 对照和 LLM 否决层，尚未核验这些模块是否完整接入。
- 核验：读取 README、目录及 [cv.py](https://github.com/nishanthsr7-eng/FLUX-Agentic_Finance_System/blob/HEAD/backend/prediction/cv.py)。划分实现要求训练标签结束时间早于测试前缓冲截点；但对乱序输入在函数内排序后返回位置索引，未映射回原始顺序。**需确认调用方始终传入已排序数据**，本轮未审计调用链。
- 相关性：**时序 ML / 评估 harness 高，Agent 集成中，TSFM / 已验证 reasoning 收益不确定**。未运行测试或回测，不将 README 的准确性与无泄漏表述当成已验证结论。

#### [2026-09-03] omror/autoPilot — 已知项目，活动更新与边界复核

- 日期与来源：创建 **2026-09-03 20:40:22 UTC**，最近推送 **2026-09-17 00:26:41 UTC**；[仓库](https://github.com/omror/autoPilot)、[元数据](https://api.github.com/repos/omror/autoPilot)。9 月 4 日已收录，不计新项目或已确认功能增量。
- 摘要：规则优先、可选 LLM 的表格 AutoML 流程，README 说明固定有限策略重试与历史运行记忆；不支持日期特征或超参数搜索。
- 核验与相关性：读 README 及 [splitter.py](https://github.com/omror/autoPilot/blob/HEAD/automl/agents/splitter.py)，确认为随机 80/20 划分。**AutoML 工程中，时序 / TSFM / 显式 reasoning 低**。即使预处理在划分后执行，也不能据此判定时序评估有效；本轮未做提交差分。

### 4.2 光伏功率预测

#### [2026-07-30] Shivam4905/pv-dimensionality-reduction — 已知项目，低优先级活动更新

- 日期与来源：创建 **2026-07-30 10:30:35 UTC**，推送 **2026-09-16 07:16:32 UTC**；[仓库](https://github.com/Shivam4905/pv-dimensionality-reduction)、[元数据](https://api.github.com/repos/Shivam4905/pv-dimensionality-reduction)。
- 摘要：光伏历史输入降维与模型成本权衡线索。今日 README 与文件树可读，存在 MATLAB 脚本、数据和降维工具目录。
- 相关性：**光伏 / 时序 ML 中，Agent 工具候选中低，TSFM / reasoning 低**。方法来源、划分与可复现证据仍不足；未跟随外部下载链接或运行程序，维持 9 月 10 日低优先级判断。没有确认需要提升优先级的新建光伏项目。

## 5. 光伏功率预测最新研究

### [2026-09-15] Distributed JEPA — 与第 1 栏合并计数

- 日期与来源：v1 **2026-09-15**；[原论文](https://arxiv.org/abs/2609.17029)。
- 摘要：在未见光伏资产与缺失数据条件下评估自监督表示迁移；方法和总体结果见第 1 栏。
- 相关性：**光伏跨资产迁移高，基础表示高，Agent 模型工具中高，reasoning 低**。下一步应核查预训练资产与测试资产隔离、天气输入起报可得性以及 Transformer 对照是否公平；当前只是摘要级证据。

## 6. 检索覆盖、过滤与局限

| 来源 | 本轮实际范围 | 结果与限制 |
|---|---|---|
| [arXiv](https://arxiv.org/) | time series + foundation / agent / reasoning，photovoltaic；新增四篇逐一打开官方摘要和版本历史 | 早版新增首发 9 月 11–15 日；下午读取 cs.LG 9 月 17 日公告前 50 项，核验 WaveTLM、TERN 的 9 月 16 日 v1；未全量读取 arXiv 增量 |
| [DailyArXiv](https://github.com/zezhishao/DailyArXiv) | timeseries 分支返回 404，回退默认 README，完整提取 Time Series | Last update 9 月 17 日，76 条带日期行，最新行 9 月 15 日；最新提交 ec46828，UTC 9 月 16 日 19:39:27。聚合日期不是首发证据 |
| [GitHub Search](https://github.com/search?type=repositories) | created:2026-06-17..2026-09-17，按 updated 排序；time-series agent、timeseries agent、automl agent、harness machine-learning、photovoltaic forecasting 各前 6 项 | 总数依次 155 / 10 / 102 / 132 / 51；人工筛选候选，非 Trending 榜、非全量审计。通用游戏与编码 harness 未因关键词命中纳入主列表 |
| [OpenReview](https://openreview.net/) / [ACL](https://aclanthology.org/) / [PMLR](https://proceedings.mlr.press/) / [AAAI](https://ojs.aaai.org/) | 官方域名定向检索时序与 2026 年研究 | 多为既有论文及会议版本，未核验到可提升优先级的新增；不把会议出版月重置为首发 |
| [ICML](https://icml.cc/Downloads/2026) / [NeurIPS](https://neurips.cc/Downloads/2026) / [KDD](https://kdd2026.kdd.org/tutorials/) | 官方目录与 workshop / tutorial 定向搜索 | 有时序与自主 ML 主题活动，但未遍历全部论文，未将教程或研讨会当新模型 |
| [Google Research](https://research.google/blog/) / [IBM](https://www.ibm.com/) / [HuggingFace](https://huggingface.co/) | 机构官方域名时序发布补检及 SOTER 模型线索 | 未核验到更晚官方模型发布；HF 论文页不能证明权重公开，未全量扫描模型库 |
| [AI HOT](https://aihot.virxact.com) | 最近七天精选 time series 搜索 | 返回 0 条，仅补充中文线索，不用于推断三个月无研究 |

**日期过滤**：新上 arXiv 的 [LLMs as Master Forgers](https://arxiv.org/abs/2609.16155) 官方注释已发表于 **2024 ICICML**，因此不作为近三个月新研究；确切更早公开日未进一步追查。DailyArXiv 中 2412.00606v2、2605.02656v2、2508.17090v5 等近期修订均有窗口外旧版本，排除新研究列表。代码或权重首发无法确认时标注不确定，不以论文日替代。

本轮未下载权重、安装项目、执行生成代码或复现实验；论文数值均为作者报告，仓库核验限所述 README、目录和源码抽查。原始检索存在覆盖限制，不能将“未确认新增”写成全领域空结果。

### 下午补检记录与 DailyArXiv 结论（15:36 CST）

- 完整下载 [DailyArXiv 默认分支 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，确认 `Last update: 2026-09-17`，Time Series 共 **76 条带日期行**，最新行 **9 月 15 日**。其中 **Distributed JEPA、SOTER** 符合本窗口且已在上文收录；WaveTLM、TERN、StableEval 不在该板块，本次独立补检发现。聚合器更新日不能代替论文首发日。
- 日期冲突降级：[量子 LSTM / Reservoir 对照](https://arxiv.org/abs/2605.02656) README 为 **9 月 15 日**，官方 v1 为 **5 月 4 日**、v2 为 9 月 15 日，排除新研究列表。[交叉公平性论文](https://arxiv.org/abs/2412.00606) README 为 **9 月 15 日 / v2**，本次官方页面仅显示 **2024 年 11 月 30 日 v1**；版本显示也不一致，首发明确超窗，维持排除。
- 日期不确定候选：[StableEval Arena](https://arxiv.org/abs/2609.18949) 官方页面显示 **2026-08-07 v1**，但编号为 2609 且出现在 9 月 17 日公告；保留页面日期、不自行改成 9 月 16 日。该研究在隐藏七天预测期评估稳定币风险 Agent，兼顾预测、结构化输出、延迟和成本，作者发现罕见严重风险仍常漏报。**Agent 评估 harness 相关性高，TSFM 低；日期不一致，低优先级待核，不计已核验新增论文**。代码和 HF 数据仅有摘要发布声明，本次未核验具体仓库。
- GitHub 下午重跑窗口内四类检索，按 updated 排序各查看前 3 项元数据：time-series agent **156**、automl agent **103**、harness machine-learning **132**、photovoltaic forecasting **51**。未新增经过源码核验的项目推荐；早版项目保留。推送时间变化不视为功能更新，通用游戏 / 网红评估 harness 未纳入。
- 光伏补检命中 [全国尺度卫星 PV 预测](https://doi.org/10.1016/j.egyai.2026.100786)（期刊卷期 **2026 年 9 月**，在线首发**不确定**）和 [多站点超短期辐照预测](https://www.sciencedirect.com/science/article/pii/S036054422601594X)（卷期 **2026-09-30**，晚于检索时点，在线首发**不确定**）。前者比较六类卫星 / 物理预测方法，后者利用多站点云移动信息；均与光伏预测相关性高、Agent / reasoning 低。出版商全文访问失败，不能用卷期日期判定首发入窗，均仅作低优先级线索，未加入已核验主列表。
- AI HOT 最近七天 time series 精选仍为 0。下午另做 OpenReview 定向查询；会议目录、机构博客和 HF 的广度覆盖沿用早版记录，未声称下午重复全量扫描。本次没有新增已验证光伏论文或已发布基础模型，不能据此推断领域无更新。

## 7. 接下来优先看什么

1. **WaveTLM**：优先检查输出契约有效率与实际预测质量是否独立改善，跟踪代码与 ExecTS-QA 公开状态。
2. **SOTER 与 Distributed JEPA**：比较领域预训练、跨资产迁移和缺失数据鲁棒性，先检查预训练与评测隔离。
3. **Hindsight Bias 基准**：给时序 Agent 增加“决策截点前 / 完整时间线”的成对测试，避免未来信息让推理看起来更强。
4. **AutoML-Agent-Yield 与 FLUX**：前者关注产物契约与失败修订，后者先核验调用方排序和标签时间；两者均需补充实际运行证据。

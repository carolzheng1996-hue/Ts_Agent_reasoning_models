# 2026-09-14 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：**2026-09-14 11:40–11:49 CST（Asia/Shanghai）**。本次为晨报任务的实际执行时段。三个月窗口：**2026-06-14 至检索时点**，含起始日。论文日期优先采用 arXiv v1；机构动态按文章发布日期；新仓库按 GitHub 创建日期，推送日期仅表示活动。原始来源日期采用 UTC。

增量基线：9 月 13 日含下午增补的晨报，并全文检索既有日报去重。今天周一，不触发周五周报。以下明确区分本轮新增发现、持续跟踪和降级观察；“未确认新增”不等于全领域没有新成果。

## 今日重点

- **未确认新的高相关论文首发**。保留 CGM 基础模型评测、CompEvo、WearableQA 和 SolCloudLLM 等窗口内主线，不重复计新。arXiv 增量接口受限，本轮依靠官方摘要、网页搜索与 DailyArXiv 交叉检索，覆盖存在缺口。
- **新增发现 3 个有代码的 GitHub 候选**：9 月 13 日创建的 MLZero-Agentic-AutoML、9 月 11 日创建的 ML Benchmark Harness 和微电网预测调度项目。其中 AutoML 项目应降级：真实 LLM 客户端仍抛出未实现异常，模拟响应不能证明自主建模能力。
- **最可借鉴的新增证据**：ML Benchmark Harness 的源码确实在划分后、仅用训练集统计量处理缺失值与标准化；但它采用随机划分的合成分类任务，迁移时序仍需重建时间与站点留出。
- **继续优先关注 SolCloudLLM 与光伏决策评测**：分别考察多模态输入是否改善预测，以及预测误差如何影响调度成本；本轮没有复现实验。

## 1. 时间序列基础模型最新研究

### [2026-09-10] Evaluating Time-Series Foundation Models and Multimodal Dietary Context for CGM Forecasting — 持续跟踪

- 日期与来源：arXiv v1 **2026-09-10**；[官方摘要及版本历史](https://arxiv.org/abs/2609.11872)。本轮重新打开官方页面，昨日已收录。
- 摘要：在八个公开连续血糖数据集上比较预测模型与饮食上下文利用方式。零样本 TSFM 并未稳定胜过 Elastic Net、PatchTST 等基线，轻量微调和残差融合值得继续评估。
- 相关性：**TSFM / Agent 选模高，显式 reasoning 低**。建议将零样本、任务专用基线、轻量适配放在相同协议下比较；血糖领域结论不能直接视作光伏收益。仅核验摘要与日期。

### [2026-09-09] A Later Test Set Is Not a New Domain — 持续跟踪

- 日期与来源：arXiv v1 **2026-09-09**；[官方论文](https://arxiv.org/abs/2609.10357)、[配套代码](https://github.com/mahdinaser/tsfm-bench)。本轮官方页面与 DailyArXiv 交叉核验。
- 摘要：在晚于模型发布的数据上比较十三个预测器，进一步分析不同领域的表现差异。结果提示，时间留出虽然降低窗口记忆风险，仍保留对预训练领域的熟悉度。
- 相关性：**TSFM / harness / Agent 评测高，reasoning 低**。支持同时报告时间留出与领域留出；不能把相关分析当成训练数据影响的因果证明。此前已收录，不计新增。

### [2026-09-09] IBM PatchTST-FM-r2 官方发布解读 — 已有模型动态

- 日期与来源：[IBM 官方文章](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)发表于 **2026-09-09**；[模型仓库](https://huggingface.co/ibm-granite/granite-timeseries-patchtst-fm-r2)创建于 **2026-08-07**，本轮模型目录再次确认。文章日期不是权重首发日期。
- 摘要：约 385M 参数，提供零样本概率预测与缺失值处理。文章报告截至 9 月 8 日、在可复现零样本等筛选条件下的 GIFT-Eval 表现，强调宽松许可模型中的排名。
- 相关性：**TSFM / Agent 预测工具高，显式 reasoning 低**。适合作为候选预测器；排行榜结论必须保留日期和筛选条件。本轮未独立重跑榜单，此前已收录。

### [2026-08-31] TimesFM-3 — 已有官方发布，持续跟踪

- 日期与来源：**2026-08-31**；[Google Research 官方发布](https://www.research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/)。
- 摘要：330M 参数，原生支持多变量零样本预测和协变量输入，官方介绍预训练覆盖超过一万亿时间点，并报告多个预测基准结果。
- 相关性：**TSFM 高，Agent 可调用预测器高，显式 reasoning 低**。可检验站点相关序列和已知未来协变量的价值。本文只转述发布事件，未将官方排名视作本地复现结论，也不重复计新。

## 2. 时间序列建模 Agent 最新研究

**本轮未确认晚于既有主线的高相关新论文首发**；新增工程实现见第 4 栏。

### [2026-09-03] CompEvo — 持续跟踪

- 日期与来源：arXiv v1 **2026-09-03 03:12 UTC**；[官方论文与版本历史](https://arxiv.org/abs/2609.09195)。按页面版本历史排序，不从编号推断首发日。
- 摘要：使用竞争式进化组织异质 Agent 的新闻证据搜索，将预测反馈转成选择权重，并维持策略多样性。
- 相关性：**时间序列 Agent / reasoning 高，TSFM 中**。重点检查起报时新闻可得性、同预算比较及多样性消融。理论保证依赖论文假设，本轮仅核验摘要和日期，未运行代码。

## 3. 时间序列 reasoning 模型最新研究

**本轮没有确认新的显式时序 reasoning 模型首发**。以下为已有评测主线，不作为新预训练模型计数。

### [2026-09-04] WearableQA — 持续跟踪

- 日期与来源：arXiv v1 **2026-09-04**；[官方论文](https://arxiv.org/abs/2609.05405)。
- 摘要：以 200 名真实用户的长期可穿戴数据构造 4,084 道选择题，区分数据计算与健康解释、单信号与跨信号推理，评估 14 个语言模型。
- 相关性：**时序 reasoning 高，Agent 评测中高**。可借鉴计算正确性和领域解释的分项评价；健康解释任务不能直接代表能源诊断能力。此前已收录，本轮重新核验摘要与首发日期。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

以下项目均区分仓库创建日和最近推送日。日期来自本轮 GitHub 官方搜索元数据；有代码不等于已经验证可运行或达到宣传效果。

### 4.1 时间序列（含 machine learning / AutoML / harness）

#### [2026-09-13] ACT2039/mlzero-agentic-automl — 新增发现，降级为实现观察

- 日期与来源：创建 **2026-09-13 11:29 UTC**；最近推送 **2026-09-13 18:42 UTC**；[仓库](https://github.com/ACT2039/mlzero-agentic-automl)、[官方元数据](https://api.github.com/repos/ACT2039/mlzero-agentic-automl)。
- 摘要：围绕感知、语义/情节记忆、代码生成、执行及错误重试构建 AutoML 流程，目录包含 API、UI、AutoGluon Tabular 适配和评测文件。README 说明是受 MLZero 启发的学术实现，不声称复现原作者基础设施；不能把旧论文当成新研究。
- **源码核验**：[LLM 客户端](https://github.com/ACT2039/mlzero-agentic-automl/blob/HEAD/mlzero/core/llm.py)的真实实现仍抛出 `NotImplementedError`；模拟客户端通过预置失败和修复代码驱动演示，修复分支还在训练数据上计算报告指标。[已提交评测报告](https://github.com/ACT2039/mlzero-agentic-automl/blob/HEAD/reports/evaluation_report.md)只有 `cli_test` 成功，迭代次数与执行时间为空，不能证明真实 LLM 的任务成功率。
- 相关性：**AutoML / Agent 架构中高，真实自主建模证据低，时序 / TSFM 低**。可参考结构化代码和错误上下文接口；应先补真实客户端、独立测试评估及时间序列适配，再考虑实验使用。已读 README、目录、coder 与客户端源码，未执行。

#### [2026-09-11] srvpal/ml-benchmark-harness — 新增发现，评测工程候选

- 日期与来源：创建 **2026-09-11 16:02 UTC**；最近推送 **2026-09-11 16:28 UTC**；[仓库](https://github.com/srvpal/ml-benchmark-harness)、[官方元数据](https://api.github.com/repos/srvpal/ml-benchmark-harness)。
- 摘要：固定随机种子生成合成表格分类数据，在 CPU 上比较小型 PyTorch 分类器和多数类基线，输出结构化 JSON；目录含数据、训练、指标、评测及测试文件。
- **源码核验**：[dataset.py](https://github.com/srvpal/ml-benchmark-harness/blob/HEAD/src/dataset.py)先划分样本，再仅用训练集的中位数、均值与标准差处理两侧数据；划分由随机排列生成，数据没有时间轴。
- 相关性：**machine learning / harness 高，Agent 结果核验中高，直接时序 / reasoning 低**。可借鉴训练期预处理、预测形状检查和固定基线设计；作为时序 harness 需改为滚动验证、增加独立模型选择集与跨站点测试。未运行其测试，未把 README 的分类分数当作时序性能。

#### [2026-09-11] dlmastery/ml-task-harness — 新增线索，暂不推荐使用

- 日期与来源：创建及最近推送均为 **2026-09-11 14:03 UTC**；[仓库](https://github.com/dlmastery/ml-task-harness)、[官方元数据](https://api.github.com/repos/dlmastery/ml-task-harness)。
- 摘要：README 声称计划演示固定评分器的迭代优化流程，参考 MLE-bench / MLAgentBench 风格；本轮递归目录仅有 README，没有实现。
- 相关性：**harness 概念相关性中，实际可用性低，时序相关性未证实**。只保留观察，不计入“有代码候选”数量。

#### [2026-09-08] TrianaLab/mira — 仅活动更新

- 日期与来源：创建 **2026-09-08**；最近推送更新为 **2026-09-13 21:41 UTC**；[仓库](https://github.com/TrianaLab/mira)、[官方元数据](https://api.github.com/repos/TrianaLab/mira)。
- 摘要：遥测收集、查询及 MCP 工具层，昨日已核验 README 与目录；今天仅复核推送元数据，没有比较提交差分。
- 相关性：**Agent 可观测性 / harness 中高，直接预测与 TSFM 低**。新的推送时间不能作为功能改进证据，不计新增项目。

HuggingFace 本轮按 time-series 名称和创建日检索前 5 项，仍返回已知 IBM 模型等，未确认新的高相关模型。名称检索会漏掉 TimesFM 等命名，故另查官方机构博客；不据此声称全站无更新。IBM 模型已合并在第 1 栏，不重复计项目。

### 4.2 光伏功率预测

#### [2026-09-11] Jason-TongR/CUMCM2026-Problem-C — 新增发现，预测到调度的工程候选

- 日期与来源：创建 **2026-09-11 01:18 UTC**；最近推送 **2026-09-14 02:50 UTC**；[仓库](https://github.com/Jason-TongR/CUMCM2026-Problem-C)、[官方元数据](https://api.github.com/repos/Jason-TongR/CUMCM2026-Problem-C)。论文正式出版日期**不确定**，只按项目收录。
- 摘要：竞赛背景的微电网建模项目，串联历史负荷/光伏预测、日前线性规划、日内预测校准和储能调度。README 描述按星期结构构造负荷预测、用 OLS 校准光伏预报，并评估电价变化；目录含 Python、MATLAB、附件和结果文件。
- 相关性：**光伏预测 / 决策评测高，Agent 工具链中高，TSFM / 显式 reasoning 低**。可借鉴把预测误差传导到调度成本的评测思路；目前呈现的是优化与控制流程，不能据此称为 LLM Agent。已读 README 与目录，未审计预报校准的数据边界，未核验竞赛官方题面或复现收益；案例金额不外推到真实电站。

## 5. 光伏功率预测最新研究

### [2026-09-10] SolCloudLLM — 持续跟踪，仍为优先阅读项

- 日期与来源：arXiv v1 **2026-09-10**；[官方摘要与版本历史](https://arxiv.org/abs/2609.11135)、[论文全文](https://arxiv.org/html/2609.11135v1)。昨日已独立补入，今天不重复计新。
- 摘要：将天空图像 patch 与历史序列 patch 对齐，经双向融合后输入 LLM 表征空间，预测光伏功率和辐照度；摘要报告多模态收益主要集中于多云条件。
- 相关性：**光伏 / 多模态时序高，Agent 可调用模型中高，显式 reasoning 低**。采用 LLM 不等于展示了推理链或自主规划。继续沿用昨日全文核验的关注点：严格时间划分、站点泛化和简单拼接消融。本轮重新核验摘要与日期，没有新实验验证。

本轮未确认晚于昨日简报的新光伏论文。微电网项目列于第 4 栏，不以新建仓库替代新研究论文。

## 6. DailyArXiv 补检

来源：[DailyArXiv](https://github.com/zezhishao/DailyArXiv)、[master README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)。本轮完整下载公开 master README，提取 Time Series 至下一同级标题：**Last update 为 2026-09-11，73 条带日期论文，最新行日期 2026-09-09**，与昨日复核一致。本轮直接使用公开 master，未独立探测其他分支。

- 领域留出评测、SDD、NOAH、WearableQA 等已收录，不重复计新。
- CGM 评测与 SolCloudLLM 已通过独立来源补齐；该列表更新时间不能代表整个 arXiv 的更新上限。
- README 的 SurF、KairosAgent 等 9 月日期对应既有论文修订；既有官方核验记录的 v1 均在 5 月，超出本轮窗口，未重新纳入正文主列表。

## 7. 检索覆盖、排除与建议

| 来源 | 本轮实际检索 | 结果与限制 |
|---|---|---|
| [arXiv](https://arxiv.org/) | 9 月 time series / foundation / agent / reasoning；photovoltaic forecasting；另请求 9 月 10–14 日增量 | 增量接口限流，改用官方摘要和网页搜索核验；未取得完整候选列表，不能声称覆盖全部三个月 |
| [OpenReview](https://openreview.net/)、[ACL](https://aclanthology.org/)、[PMLR](https://proceedings.mlr.press/) | time series 与 Agent / reasoning / foundation 定向搜索 | 多为既有会议论文；Chat-TS 是 3 月 EACL，超窗。STReasoner / Time-RA 的 7 月会议版已有更早预印本，不计新首发 |
| [ICML 官方目录](https://icml.cc/Downloads/2026) | 时序基础模型关键词 | 命中 Channel Adapter、Olivia、领域基准等标题；本轮未完成各项首发时间复核，因此不按目录抓取日新增 |
| [NeurIPS 官方目录](https://neurips.cc/Downloads/2026) | time series / foundation | 命中教程与 workshop 等，不能当已发表研究论文；未使用开发站列表作为录用证据 |
| [KDD 教程](https://kdd2026.kdd.org/tutorials/) | time series / AutoML / Agent | 确认 8 月 9–10 日课程与教程，不以活动日期重置相关论文首发 |
| [AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/39908) | time series / Agent | 例如 ExoTimer 官方发布日期为 3 月 14 日，超窗排除 |
| [GitHub Search](https://github.com/search?type=repositories) | created:2026-06-14..2026-09-14，分别检索 time-series agent、timeseries agent、automl agent、harness machine-learning、photovoltaic forecasting，按更新取各前 8 | 总量分别为 160、10、101、132、54；抽查而非全量质量排名。首次带括号 OR 的时序查询明显失配，已作废并拆成两次查询；正文只依据纠正后的结果 |
| [HuggingFace 模型](https://huggingface.co/models)、[Google Research](https://www.research.google/blog/)、[IBM 官方文章](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series) | 名称检索和官方发布补检 | TimesFM-3 与 PatchTST-FM-r2 已有动态，没有把博客的新抓取时间当发布日期 |
| [AI HOT](https://aihot.virxact.com) | 最近七天 time series 精选线索 | 返回 0 条，仅作为辅助，不代表领域无更新 |

**建议优先顺序**：先借鉴 ML Benchmark Harness 的训练期预处理和结果检查，再为本项目构造时间/站点留出；结合 SolCloudLLM 和微电网项目，分别评估预测精度与调度后果。MLZero-Agentic-AutoML 目前只作架构观察，待真实客户端和独立评测补齐后再考虑接入。

本报为公开资料检索与有限源码核验；没有安装候选项目、下载数据/权重或复现实验。仓库同步使用指定 SSH key 与快进拉取，本次仅提交当日晨报，保留既有用户改动。

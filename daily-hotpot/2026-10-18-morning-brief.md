# 时间序列 Agent / Reasoning 晨间简报｜2026-10-18

- 初版检索跨日；本次于北京时间 2026-10-18 15:39 完成增量补检。滚动窗口为 **2026-07-18 至检索截止**。今天周日，不改周报。
- 本次新增：Timestral 官方发布与权重、Home Assistant 光伏学习预测项目、8 月 FTTH 光功率退化研究；保留今日初版条目。除明确标注本次重核的内容，其余证据沿用初版，未把重复收录算作新发布。
- 对照上次 10 月 16 日晨报：新增收录 PathFM、Twice Upon a Time、PocketTSLM、TimeCap 四篇 10 月 15 日 arXiv 论文，并发现两个 10 月 17 日新建代码仓库。“新增收录”不等于当天首发。
- arXiv 论文按 v1 日期（UTC）、其他研究/发布按官方首发日期排列，各栏目由近及远；项目按创建日期（UTC）排列。论文首发与代码创建分别核验；未运行代码或复现实验，性能均为作者报告。
- 优先阅读：**PathFM 的路径级概率评测、双视图 reasoning 的不变性消融、TimeRSI 的反馈时点**。新光伏仓库必须区分实测未来天气与当时可获得的天气预报。

## 1. 时间序列基础模型最新研究

### 2026-10-15｜Timestral：支持协变量的多变量概率基础模型｜本次补充，高优先级

- 来源：[Mistral 官方公告](https://mistral.ai/news/timestral)明确发布日期为 10-15；[209M 模型卡](https://huggingface.co/mistralai/Timestral-209M) · [官方代码](https://github.com/mistralai/timestral)。技术报告仍标为待发布，属于模型与工程发布，不冒称新论文。
- 摘要：提供 5M、28M、123M、209M 四档模型，支持历史与已知未来协变量、32,768 步上下文及 21 个分位数。结合合成数据预训练与真实数据后训练；官方报告在 GIFT-Eval、TIME、fev-bench 的零样本比较中领先，本次未独立复现排名。
- 相关性：**TSFM 高，时序 Agent 预测工具高，显式 reasoning 低，光伏迁移潜力高**。适合与 Chronos-2、TimesFM 对照；天气必须采用预测起点可获得的预报。分位数预测不能直接替代 PathFM 的联合轨迹分布，官方 Agent 工作流示例也不是已验证的自主诊断实验。
- 工程：已核查 README 与源码/测试目录；代码 Apache-2.0，权重 Modified MIT。GitHub 元数据请求遭限流，仓库创建日期**不确定**，仅按已确认的官方发布日计入，不称 10-15 新建仓库。代码与 HF 权重在此合并收录。

### 2026-10-15｜PathFM：快速生成多变量未来轨迹｜新增，高优先级

- 来源：[arXiv 2610.22358](https://arxiv.org/abs/2610.22358)，v1 17:58 UTC。
- 摘要：通过 flow matching 生成完整未来路径，并蒸馏为一至两步采样、共享历史注意力缓存。除 TIME、fev-bench 边际指标外，提出 fps-bench，加入 energy、variogram 及下游路径指标。
- 相关性：**TSFM / 概率预测高，Agent 决策输入中高，显式 reasoning 低**。适合研究累计发电量、峰值与事件时刻；这是向光伏迁移的研究判断，本文摘要并未证明光伏收益。作者报告路径综合评分优于其外部基线，不代表所有单项指标领先。
- 注意：HuggingFace 搜到的 [GenBio-PathFM](https://huggingface.co/genbio-ai/genbio-pathfm) 是病理图像模型，与本论文无关；本次未确认时序 PathFM 权重发布。

### 2026-10-15｜TimeCap / MHCap：可重建的时序文本标注｜新增，数据配套

- 来源：[arXiv 2610.21274](https://arxiv.org/abs/2610.21274) · [官方代码](https://github.com/SchmiedmayerLab/TimeCAP)，v1 05:10 UTC。
- 摘要：直接从信号生成确定性描述，包含统计、结构、语义提取及跨通道综合；不让 LLM 参与标注环节。作者在 19 类 HealthKit 通道上构建约 700 万条描述，并报告描述增强训练在 32 个逐用户二分类比较中的 29 个优于仅标签训练。
- 相关性：**TSLM 数据/证据可追溯性高，Agent 工具中高，数值预测基础模型中低**。可以借鉴可重建的标注流程，但没有证明描述忠实性等同推理能力。
- 日期限制：[GitHub 元数据](https://api.github.com/repos/SchmiedmayerLab/TimeCAP) 显示仓库 2026-02-05 创建、10-14 推送。论文是窗内 arXiv 首发，代码早已存在；更早公开材料是否覆盖全部论文贡献尚未审计，降低“首次公开成果”判断的确定性，不把它计作近期新建仓库。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-14｜TimeRSI：冻结基础模型外的部署流程优化｜持续跟踪

- 来源：[arXiv 2610.19725](https://arxiv.org/abs/2610.19725) · [代码](https://github.com/haoxin1998/TimeRSI)。v1 10-14；本次核实 v2 为 **10-15**，未做版本差异审计。
- 摘要：编码 Agent 将任务描述转成可执行流程修改，在历史预测窗口上评估并利用误差迭代；上线阶段按已完成预测的反馈选择流程。作者在 TIME 与 fev-bench 共 198 个任务上评测。
- 相关性：**时序 Agent / harness / TSFM 部署高，reasoning 中**。重点应检查候选选择只使用已到达标签、测试窗口是否隔离，以及搜索预算；骨干冻结不意味着整套系统无需任务适配。

本轮未确认比上述四篇 10-15 论文更晚、且直接面向时序建模的 Agent 新论文。通用 ML harness 项目见第四栏。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-15｜Twice Upon a Time：保留量纲与提取动力结构的双视图｜新增，高优先级

- 来源：[arXiv 2610.22327](https://arxiv.org/abs/2610.22327)，v1 17:52 UTC。
- 摘要：折线图保留绝对数值和坐标系，归一化延迟嵌入弱化正比例缩放及偏移并突出时间结构；双视觉编码器通过视觉 token 和多层特征融合连接 Qwen3-VL-8B。作者报告 TSRBench 准确率从仅折线图的 44.5% 升至 53.2%。
- 相关性：**时序 reasoning 高，Agent 感知/推理组件高，直接光伏预测中低**。值得复核不同视图的不变性实验及单视图消融；问答分数提高并不自动证明解释忠实或预测值校准。

### 2026-10-15｜PocketTSLM：手机端 soft-prompt 时序推理｜新增，部署方向

- 来源：[arXiv 2610.21308](https://arxiv.org/abs/2610.21308)，v1 05:56 UTC；作者注明相关版本被 COLM 2026 DAIH workshop 接收，不等同主会论文。
- 摘要：把时序窗口编码为嵌入接入 OpenTSLM SoftPrompt，在手机 MLX 环境推理。Swift 与 Python MLX 参考比较贪心输出一致性；与 PyTorch 的答案一致而理由措辞可能不同。作者在其格式下报告约 12 倍时序 token 节省，测试 EEG 睡眠分期和 ECG 问答。
- 相关性：**端侧时序 reasoning / Agent 感知高，通用预测基础模型中低**。是已有模型的移动部署，不应称全新推理基础模型；token 节省不是准确率或所有手机耗时的普遍保证。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 machine learning / AutoML / harness

| 日期与状态 | 来源 | 摘要与相关性判断 |
|---|---|---|
| **2026-10-17 创建｜新增，低优先级** | [Vavchik/agent_automl](https://github.com/Vavchik/agent_automl) · [元数据](https://api.github.com/repos/Vavchik/agent_automl) | README 只有项目名，但根目录确有 agent、ml_core、sandbox、tests 与 main.py。**AutoML/Agent 候选中，时序适用性不确定**。没有据名称推定已实现 LLM 规划或安全隔离；缺少任务、评测和时间切分说明，暂不推荐复现。 |
| **2026-08-27 创建｜本轮补检，中优先级** | [pvd232/viper](https://github.com/pvd232/viper) · [元数据](https://api.github.com/repos/pvd232/viper) | README 提供从不可变实验计划到执行证据的 Python 流程，记录源提交、输入、运行设置与产物哈希，并提供 CLI/MCP。**ML harness 高，时序 Agent 实验治理中高，预测模型本体低**。已读 README 和根目录，未审计执行器；验证产物一致性不等于验证时间切分正确性，不能替代防泄漏评估。 |

TimeCAP 的代码与论文合并在第一栏说明，避免重复计数；其二月创建日期超窗。HuggingFace 初版未确认上述新论文的独立权重；本次补检已确认 Timestral 四档官方权重，合并于第一栏，不重复计数。

### 光伏功率预测

**2026-10-17 创建｜新增，中高优先级工程线索**：[Mohammedgmail/pv-power-forecasting](https://github.com/Mohammedgmail/pv-power-forecasting) · [官方元数据](https://api.github.com/repos/Mohammedgmail/pv-power-forecasting)。创建于 14:17 UTC；根目录包含 src、data、results、tests、docs 和 pyproject.toml，已核查 README 与目录，未运行。

- 摘要：NREL 单站功率、卫星天气、pvlib 与梯度提升，比较 30 分钟至日前预测，并提供 conformal 区间。README 描述 2011–2012 训练、2013 测试；概率模型以训练期后六个月校准，另有 Open-Meteo 实时物理预测入口。
- 相关性：**光伏概率预测/工程基线高，时序 AutoML 中，LLM Agent/reasoning 低**。相比昨日仅文档仓库，本项目可见源码与数据结构，但仍须核验实现与结果。
- 关键限制：带天气的高分实验使用**目标时刻实测卫星天气**，属于理想信息条件；实时入口是物理模型且未在这组实验验证。数据对齐、异常停机排除及全部预处理是否仅据训练数据决定，还需源码审计。不能把 README 的日前提升当成可部署收益。

**2026-10-12 创建｜本次新增收录，中优先级**：[dominikamann/ha-machine-learning-based-pv-forecast](https://github.com/dominikamann/ha-machine-learning-based-pv-forecast) · [元数据](https://api.github.com/repos/dominikamann/ha-machine-learning-based-pv-forecast)。GitHub 搜索返回创建时间 14:08 UTC。

- 摘要：从 Home Assistant 历史发电及 Open-Meteo 天气学习各电站模型，支持 30 分钟至 72 小时输出、分位数、预测归档与误差反馈；README 描述四种候选配置自动选择，并使用历史天气预报训练，较早年份再分析数据降低权重。
- 相关性：**光伏预测高，轻量 AutoML/反馈闭环中高，LLM Agent/reasoning 低**。可与使用目标时刻实测天气的实验形成工程对照。已读 README 并确认 custom_components、tests、tools 目录；未审计源码或运行，历史预报发布时间、模型替换验证集及区间覆盖率均待验证。仓库创建日不保证功能均于当天完成。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-10-13 公开｜已发布光伏预测的概率残差校正｜持续跟踪

- 来源：[Preprints.org 原文](https://www.preprints.org/manuscript/202610.1212)。10-12 提交、10-13 公开；未同行评审，本轮重核。
- 摘要：不依赖电站元数据，以供应商已发布预测、日历和历史实测误差做残差修正与概率校准，并比较适配后的 Chronos-2。点误差收益与概率评分收益并不完全一致。
- 相关性：**光伏预测/TSFM 对照高，Agent 反馈工具中高，显式 reasoning 低**。优先核查输入预测轨迹的发布时间、误差反馈延迟和校准窗口。

### 2026-08-13｜FTTH 光功率退化：RF 与 LSTM 比较｜本次补充，中低优先级

- 来源：[JAIC 期刊原始条目](https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/13717?articlesBySimilarityPage=35) · [DOI](https://doi.org/10.30871/jaic.v10i4.13717)。出版商搜索索引明确 Published 2026-08-13；直接网页抓取超时，本次使用出版商已索引的摘要与日期，未读全文。
- 摘要：以 58 个 ONT 的 63,145 条记录比较带滞后/滚动特征的 RF 与六步 LSTM，预测 Normal、Warning、Critical 状态；作者报告时间顺序切分下 RF 准确率 98.59%。
- 相关性：**光通信功率退化预警高，时序 ML 中高，光伏/TSFM/显式 reasoning 低**。主要结果是状态分类，不宜把准确率当作连续光功率多步预测精度。仍需核验标签时点、预测提前量、设备隔离和滚动特征生成；因全文不可访问降低优先级。

**近期增量说明**：本次补收 8 月光功率退化研究，未确认晚于 10-13 首发的直接光功率/光伏预测论文。检索覆盖 photovoltaic / solar power forecasting 与 optical power prediction；光传输硬件、激光供能和光学遥感不等同光功率预测。仅有“October 2026”卷期的期刊线索，若不能确认在线首发日，均降为待核，不以卷期日期升级为新增。

## 6. DailyArXiv 必检结论

初版已读取 [DailyArXiv 官方仓库 README](https://github.com/zezhishao/DailyArXiv#time-series) 的 **Time Series** 板块：页面显示 **Last update: 2026-10-16**，可见最新列示日为 **10-14**。初版原始文件下载超时；**本次已成功下载完整 [master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)**，核实 Time Series 实际论文行 **84 条**，最新列示日仍为 10-14。聚合器未更新不代表没有新发布，Timestral 由官方独立检索补足。

- **确有相关窗内内容**：TimeRSI、TEX-MEX、Test-Time Forecasting、RAMSAD、MMTA 等。TimeRSI 已在第二栏复核补充 v2 日期；TEX-MEX 等见 [10-16 晨报](2026-10-16-morning-brief.md)，本轮未发现足以再次列为新增的证据。
- **直接研究补充**：PathFM、Twice Upon a Time、TimeCap、PocketTSLM 来自独立 arXiv 检索；在本次读取的聚合器页面中未确认这些标题，不将聚合器当作唯一覆盖来源。
- **日期冲突、降级排除**：[AlphaCast](https://arxiv.org/abs/2511.08947) 在 README 列为 2026-10-12，但官方历史显示 v1 为 **2025-11-12**、v6 为 2026-10-12。虽然 Agent/reasoning 高度相关，首发超窗，排除新研究主列表；未审计 v6 差异，不能推断有新能力。
- 昨日已核实的 KMB-DF、Bellman Conformal Inference、TIDES 旧首发排除继续沿用；本轮未重新核验其全部版本历史，详见昨日晨报。README 日期常对应修订时间，与首发口径不同。

## 7. 检索范围、限制与下一步

- **论文**：arXiv 官方摘要及版本史；定向搜索 OpenReview、ACL、NeurIPS、ICML/PMLR、KDD/ACM、AAAI。未逐篇穷尽会议录。[BECRA 的 ICML 官方页](https://proceedings.mlr.press/v306/zeng26e.html) 对应 7 月 6–11 日会议，已超本轮窗口，不能按搜索抓取日算新论文。
- **初版 GitHub**：官方仓库搜索限定 7-18 至 10-18 创建，按更新排序各取前三项。五组 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting` 分别命中 **4 / 126 / 89 / 27 / 61**；数字有重叠、不是有效新项目数。精选候选另查 README、根目录和创建时间；无 Trending 排名结论。旧项目新 push 不计首发。
- **机构与聚合补充**：使用 [AI HOT](https://aihot.virxact.com) 近七天论文精选，返回 13 条；未发现可直接替代上述原始来源的新时序主线。旧技能接口提示将于 10 月 31 日停用，本次未修改技能。
- **建议下一步**：比较 PathFM 的边际与联合路径评分；复核双视图模型是否真正利用信号；对新光伏仓库重点审查预处理与未来天气可得性。以上是后续研究建议，不是已完成复现。
- **本次补检记录**：重新检索 arXiv、OpenReview、ACL、官方机构发布与 HF；会议检索非穷尽。OpenReview 的 Time Series Reasoning via Process-Verifiable Thinking 显示 4 月首发、9 月修订，超窗不加入。未确认晚于 10-15 的直接时序 Agent/reasoning 首发；沿用初版相关条目。
- **本次 GitHub 复查**：五组同口径创建窗口搜索命中 4 / 126 / 90 / 27 / 62，各取更新排序前三项；结果有重叠，不是有效项目数。新增核实 Home Assistant PV 项目；RampSense 已在 10-14 收录，不重复算新增。Timestral 从官方公告发现，不依赖关键词检索命中。随后元数据接口限流，未据此推断仓库不存在。
- **本次 AI HOT 补检**：近七天论文精选仍为 13 条，没有新增直接时序线索；不以聚合摘要替代原文核验。
- **仓库同步状态**：本次成功加载指定 SSH key，`git pull --ff-only` 返回 Already up to date。仅提交本日晨报，保留原有暂存及未跟踪文件；最终推送结果见任务回执。

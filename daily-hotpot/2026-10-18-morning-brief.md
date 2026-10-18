# 时间序列 Agent / Reasoning 晨间简报｜2026-10-18

- 检索跨日：北京时间 2026-10-17 至 2026-10-18 06:14；按落稿当天命名。滚动窗口为 **2026-07-18 至检索截止**。今天周日，不改周报。
- 对照上次 10 月 16 日晨报：新增收录 PathFM、Twice Upon a Time、PocketTSLM、TimeCap 四篇 10 月 15 日 arXiv 论文，并发现两个 10 月 17 日新建代码仓库。“新增收录”不等于当天首发。
- 论文按 arXiv v1 日期（UTC）排列，各栏目由近及远；项目按创建日期（UTC）排列。论文首发与代码创建分别核验；未运行代码或复现实验，性能均为作者报告。
- 优先阅读：**PathFM 的路径级概率评测、双视图 reasoning 的不变性消融、TimeRSI 的反馈时点**。新光伏仓库必须区分实测未来天气与当时可获得的天气预报。

## 1. 时间序列基础模型最新研究

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

TimeCAP 的代码与论文合并在第一栏说明，避免重复计数；其二月创建日期超窗。HuggingFace 本轮未确认上述新时序论文的独立新权重发布。

### 光伏功率预测

**2026-10-17 创建｜新增，中高优先级工程线索**：[Mohammedgmail/pv-power-forecasting](https://github.com/Mohammedgmail/pv-power-forecasting) · [官方元数据](https://api.github.com/repos/Mohammedgmail/pv-power-forecasting)。创建于 14:17 UTC；根目录包含 src、data、results、tests、docs 和 pyproject.toml，已核查 README 与目录，未运行。

- 摘要：NREL 单站功率、卫星天气、pvlib 与梯度提升，比较 30 分钟至日前预测，并提供 conformal 区间。README 描述 2011–2012 训练、2013 测试；概率模型以训练期后六个月校准，另有 Open-Meteo 实时物理预测入口。
- 相关性：**光伏概率预测/工程基线高，时序 AutoML 中，LLM Agent/reasoning 低**。相比昨日仅文档仓库，本项目可见源码与数据结构，但仍须核验实现与结果。
- 关键限制：带天气的高分实验使用**目标时刻实测卫星天气**，属于理想信息条件；实时入口是物理模型且未在这组实验验证。数据对齐、异常停机排除及全部预处理是否仅据训练数据决定，还需源码审计。不能把 README 的日前提升当成可部署收益。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-10-13 公开｜已发布光伏预测的概率残差校正｜持续跟踪

- 来源：[Preprints.org 原文](https://www.preprints.org/manuscript/202610.1212)。10-12 提交、10-13 公开；未同行评审，本轮重核。
- 摘要：不依赖电站元数据，以供应商已发布预测、日历和历史实测误差做残差修正与概率校准，并比较适配后的 Chronos-2。点误差收益与概率评分收益并不完全一致。
- 相关性：**光伏预测/TSFM 对照高，Agent 反馈工具中高，显式 reasoning 低**。优先核查输入预测轨迹的发布时间、误差反馈延迟和校准窗口。

**空增量说明**：本轮未确认更晚首发的直接光功率/光伏预测论文。检索覆盖 photovoltaic / solar power forecasting 与 optical power prediction；光传输硬件、激光供能和光学遥感不等同光功率预测。仅有“October 2026”卷期的期刊线索，若不能确认在线首发日，均降为待核，不以卷期日期升级为新增。

## 6. DailyArXiv 必检结论

已读取 [DailyArXiv 官方仓库 README](https://github.com/zezhishao/DailyArXiv#time-series) 的 **Time Series** 板块：页面显示 **Last update: 2026-10-16**，可见最新列示日为 **10-14**。原始文件的直接下载超时，web 原始文件视图缓存较旧，因此以本轮成功读取的 GitHub 渲染页为准，不声称完成最新 master 全量同步或准确行数核验。

- **确有相关窗内内容**：TimeRSI、TEX-MEX、Test-Time Forecasting、RAMSAD、MMTA 等。TimeRSI 已在第二栏复核补充 v2 日期；TEX-MEX 等见 [10-16 晨报](2026-10-16-morning-brief.md)，本轮未发现足以再次列为新增的证据。
- **直接研究补充**：PathFM、Twice Upon a Time、TimeCap、PocketTSLM 来自独立 arXiv 检索；在本次读取的聚合器页面中未确认这些标题，不将聚合器当作唯一覆盖来源。
- **日期冲突、降级排除**：[AlphaCast](https://arxiv.org/abs/2511.08947) 在 README 列为 2026-10-12，但官方历史显示 v1 为 **2025-11-12**、v6 为 2026-10-12。虽然 Agent/reasoning 高度相关，首发超窗，排除新研究主列表；未审计 v6 差异，不能推断有新能力。
- 昨日已核实的 KMB-DF、Bellman Conformal Inference、TIDES 旧首发排除继续沿用；本轮未重新核验其全部版本历史，详见昨日晨报。README 日期常对应修订时间，与首发口径不同。

## 7. 检索范围、限制与下一步

- **论文**：arXiv 官方摘要及版本史；定向搜索 OpenReview、ACL、NeurIPS、ICML/PMLR、KDD/ACM、AAAI。未逐篇穷尽会议录。[BECRA 的 ICML 官方页](https://proceedings.mlr.press/v306/zeng26e.html) 对应 7 月 6–11 日会议，已超本轮窗口，不能按搜索抓取日算新论文。
- **GitHub**：官方仓库搜索限定 7-18 至 10-18 创建，按更新排序各取前三项。五组 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting` 分别命中 **4 / 126 / 89 / 27 / 61**；数字有重叠、不是有效新项目数。精选候选另查 README、根目录和创建时间；无 Trending 排名结论。旧项目新 push 不计首发。
- **机构与聚合补充**：使用 [AI HOT](https://aihot.virxact.com) 近七天论文精选，返回 13 条；未发现可直接替代上述原始来源的新时序主线。旧技能接口提示将于 10 月 31 日停用，本次未修改技能。
- **建议下一步**：比较 PathFM 的边际与联合路径评分；复核双视图模型是否真正利用信号；对新光伏仓库重点审查预处理与未来天气可得性。以上是后续研究建议，不是已完成复现。
- **仓库同步状态**：已成功加载指定 SSH key；执行 `git pull --ff-only` 后连接长时间无响应，终止该挂起进程并带超时重试，返回 GitHub SSH 超时。报告仍落盘，提交/推送结果以本次任务最终回执为准。

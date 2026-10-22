# 时间序列研究晨间简报｜2026-10-22

- **检索窗口**：2026-07-22 至本次检索截止。论文以首版公开日为准；论文及 GitHub 日期均按 UTC，检索截止按北京时间。修订、仓库活动和首次收录分别注明。
- **今日新增**：五篇重点研究——TS2Vec-FM、电力负荷参数高效适配、Prompt Evolution、TxnQA、分布式光伏 foundation-style 预训练。前三条研究主线分别指向低成本表征、反馈驱动适配和证据可核验的推理。
- **新增项目**：petroskiNB/automl_agent、Wanxiang、STR-PV-Forecasting；TimeSage-EV 与 VIPER 只记持续跟踪。已对照昨日含下午补检的归档去重。
- 今天周四，不生成周报。性能数字为作者报告，本轮未运行候选代码或复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-20｜TS2Vec-FM：小型卷积编码器也能跨数据集复用｜新增，高优先级

- **来源与日期**：[arXiv 2610.28602](https://arxiv.org/abs/2610.28602)，v1 17:47 UTC。
- **摘要**：在合成语料上预训练，分别输入原始幅值与实例归一化形状视图，再将两个专门编码器蒸馏为一个冻结编码器。作者报告 160 万参数的膨胀卷积网络在线性探测下达到 UCR-128 83.3%、UEA-27 75.3%，无需注意力与 patch tokenizer。
- **相关性**：分类 TSFM **高**，Agent 低成本表征工具 **中高**，显式 reasoning **低**。可作为 Agent 分类工具库的轻量候选；这是冻结表征加下游线性探测，不是无标签零样本分类，也不能直接推断多步预测能力。
- **核验边界**：核到摘要和版本史；未确认可下载权重或官方代码发布，暂不列为已可复现项目。

### 2026-10-20｜电力负荷 TSFM 的参数高效适配｜新增，中高优先级

- **来源与日期**：[arXiv 2610.28200](https://arxiv.org/abs/2610.28200)，v1 13:40 UTC。作者备注为 PESS 2026 展示接收，未独立核查会议清单。
- **摘要**：比较 MOIRAI 1.0 Large 与 Chronos-2 的预训练推理、全量微调和 LoRA，覆盖四级负荷聚合尺度及域内/域外设置。MOIRAI 的 rank-16 LoRA 更新约 314.6 万参数，作者报告平均 NMAE 降低 7.5%；更强的 Chronos-2 预训练基线从适配中获益较少。
- **相关性**：TSFM 部署 **高**，Agent 自动决定是否微调 **高**，显式 reasoning **低**。适配收益依赖模型和目标，应将“保持预训练模型不动”纳入自动选型候选；负荷结果不能直接当作光伏功率结论。

光伏领域预训练新稿统一列在第五栏，不重复计数。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-20｜Training-Free Continual Learning via Prompt Evolution｜新增，高优先级

- **来源与日期**：[arXiv 2610.27468](https://arxiv.org/abs/2610.27468)，v1 01:38 UTC。
- **摘要**：冻结 LLM 预测器，以结果反馈演化提示词中的指导块；评估涉及搜索指数、汇率和商品序列及检索新闻。作者报告约 900 词指导块改善留出预测，并可编译为调用 TSFM 工具的代码。
- **相关性**：Agent 反思/持续适配 **高**，reasoning 策略 **高**，TSFM 工具编排 **高**；不是新预训练基础模型。作者发现循环内增益可能高估循环外增益 2–3 倍，主要收益集中于首轮反思；纯误差目标可能抑制文本模态。
- **研究判断**：值得对照 TimeRSI 的流水线代码改写。即使冻结权重，提示词仍使用反馈学习，不能笼统称系统完全零样本；需区分指导块选择、监控集和最终未触碰评测集。新闻移除后未掉分也不等于每次预测都进行了实时事件推理。

### 2026-08-14｜TimeSage-EV｜持续跟踪，代码活动更新

- **来源与日期**：[arXiv 2608.14270](https://arxiv.org/abs/2608.14270)，v1 08-14；[官方仓库](https://github.com/TimeSage-Series/TimeSage-EV)创建 08-05、最近推送 10-21 22:11 UTC；[GitHub 元数据](https://api.github.com/repos/TimeSage-Series/TimeSage-EV)。
- **摘要**：围绕连续数据发布检验状态识别、摘要和前景推理。当前 README 描述按截止期构建数据环境、记录轨迹、网络审计、跨周期记忆/技能库及四轴报告评价。
- **相关性**：时序 Agent / reasoning harness **高**，TSFM 本体 **中低**。本轮重读 README 与目录树，确认存在 agents、evbench、evsandbox 及实验配置；未比较提交差分，不能将全部能力称为今日新增。
- [HuggingFace 数据入口](https://huggingface.co/datasets/TimeSage-Series/TimeSage-EV)由官方 README 提供，与仓库合并记录；本轮未下载数据。仓库自述 EMNLP Findings 录用，未独立核验录用页。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-19｜TxnQA：同时评估答案和事件证据｜新增，相邻推理基准

- **来源与日期**：[arXiv 2610.27256](https://arxiv.org/abs/2610.27256)，v1 20:25 UTC。
- **摘要**：针对不规则交易事件序列设计 27 类分析问答任务及五类风险推理场景，答案由程序生成；将格式合规、内容正确和端到端正确分开评分。作者报告风险场景判断准确率常超过 80%，但同时要求证据归因精确时联合准确率最高约 23%。
- **相关性**：事件序列 reasoning 与 Agent 证据审计 **高**，连续数值预测 TSFM **低**。这是基准及模型适配研究，不是新通用时序预测模型；可借鉴“答案对但证据错”的单独评分，不能把金融交易事件 QA 等同规则采样数值预测。

### 2026-10-19｜TimesJev：压缩表征降低推理成本｜持续跟踪

- **来源与日期**：[arXiv 2610.26002](https://arxiv.org/abs/2610.26002)，v1 08:26 UTC，本轮复核，昨日已收录。
- **摘要**：保留关键频率信息压缩长序列，再与快速推理模型嵌入对齐；作者在 13 个数据集上报告性能和延迟改善。
- **相关性**：时序 reasoning **高**，Agent 推理预算 **高**，预测 TSFM **中**。今天未确认更晚首发的同类直接 reasoning 模型；TxnQA 提供的是相邻评测增量。建议检查压缩后稀有异常是否丢失，以及证据是否忠实。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### 2026-10-21 创建｜petroskiNB/automl_agent｜新增，相邻 AutoML 工程

- **来源**：[仓库与 README](https://github.com/petroskiNB/automl_agent) · [元数据](https://api.github.com/repos/petroskiNB/automl_agent) · [控制入口](https://github.com/petroskiNB/automl_agent/blob/main/solution.py)。创建 16:10 UTC，最近推送 20:12 UTC。
- **摘要**：Qwen 选择实验，CatBoost/LightGBM 执行训练，工具包含数据检查、任务配置、训练与生成代码分析。已读 README、目录树和入口片段；提供测试文件，数据与日志需另取。
- **相关性**：AutoML / ML Agent **高**，时序建模 **中**，TSFM 本体 **低**。README 明确验证方案由 Qwen 选定，控制器只固定划分并检查基本条件，不保证领域正确性；时间列需能正确排序。生成代码不在真正沙箱内，本轮未执行，也未核验比赛成绩。

#### 2026-08-27 创建｜VIPER｜持续跟踪，ML harness

- **来源**：[仓库](https://github.com/pvd232/viper) · [元数据](https://api.github.com/repos/pvd232/viper)。创建 01:32 UTC，最近推送 10-21 19:44 UTC。
- **摘要**：Python 实验声明生成保存的计划，执行后校验计划与产物证据，支持恢复、运行比较和 CLI/MCP 查询；本轮重读 README、确认目录结构。
- **相关性**：ML / Agent harness **高**，时序实验治理 **中高**，TSFM/reasoning 本体 **低**。未比较版本差分，不称功能新增；产物一致性不能替代时间切分和信息可得性检查。

TimeSage-EV 已在第二栏合并论文、GitHub 与 HF 入口，不重复计数。Kaggle Grandmaster 插件已于 10-09 收录；本轮搜索再出现，未算新增。

### 光伏功率预测

#### 2026-10-21 创建｜STR-PV-Forecasting｜新增，短时适配组件

- **来源**：[仓库与 README](https://github.com/2503255081/STR-PV-Forecasting) · [元数据](https://api.github.com/repos/2503255081/STR-PV-Forecasting)。创建 14:44 UTC，最近推送 14:48 UTC。
- **摘要**：冻结预测骨干，小型路由器融合骨干预测、持续性和局部线性趋势，并加残差；只适配前两小时，之后直接复用骨干结果。README 描述 1,204 个可训练参数，发布范围为 PVDAQ/iTransformer 的缓存、权重和补充材料；目录确有相应入口。
- **相关性**：光伏短时预测 **高**，Agent 适配与回退工具 **中高**，通用 TSFM/显式 reasoning **低**。
- **证据边界**：README 明确评测期已用于开发，不能证明新站点泛化；广泛实验不等于全部可运行复现。论文最终引用信息和作者软件许可仍待确认，论文公开日期**不确定、低优先级**；仅将仓库创建作为此次项目动态日期。本轮未加载权重或验证数值结果。

#### 2026-10-21 创建｜明月·万象 Wanxiang｜新增，高相关、待工程验证

- **来源**：[仓库与 README](https://github.com/SLAI-wanxiang-automl/Wanxiang) · [元数据](https://api.github.com/repos/SLAI-wanxiang-automl/Wanxiang) · [路线图](https://github.com/SLAI-wanxiang-automl/Wanxiang/blob/main/docs/roadmap.md)。创建 08:01 UTC，最近推送 09:03 UTC。
- **摘要**：将新能源建模引擎与长期运行系统整合，前者负责滚动评测、选模和集成，后者管理建模/预测/回测/更新任务、候选发布和审计。外部宿主 Agent 驱动确定性数值代码；基础模型适配器定位为 zero-shot。
- **相关性**：时序 Agent / harness **高**，光伏部署 **高**，TSFM 集成 **高**，新 reasoning 模型 **低**。这是已有组件合并的新仓库，不等于方法首次发布。
- **证据边界**：已读 README、路线图和根目录。路线图明确两组件自动贯通未完成、运行系统端到端测试待补、NWP 发布时间/版本自动核验未实现。故不能把“时序切分”直接解读为全链路无泄漏，也不能称已验证生产可用。

## 5. 光伏功率预测最新研究

### 2026-10-20｜Foundation-Style Pretraining for Distributed PV Forecasting｜新增，高优先级

- **来源与日期**：[arXiv 2610.27763](https://arxiv.org/abs/2610.27763)，v1 07:26 UTC。
- **摘要**：将历史功率、气象观测、未来 NWP 和时间编码统一为序列补全，比较预测对齐、通用与混合重建三类预训练目标。479 个分布式场站中 340 个用于模型开发、139 个空间留出用于零样本评估，预测范围 6 小时至 7 天；作者报告混合目标在精度、退化天气预报和适配之间较均衡。
- **相关性**：领域 TSFM **高**，Agent 冷启动选模/适配 **高**，显式 reasoning **低**。是光伏领域 foundation-style 框架，不应直接称通用时序基础模型。
- **关注点**：空间留出与时间留出应分别核查，未来 NWP 必须是预测起点当时已发布版本。与 Wanxiang 结合属于本报提出的工程研究方向，尚无组合效果证据；本轮只核验论文摘要和版本史，未确认其专属官方代码/权重入口。

## 6. 检索覆盖与筛选记录

- **DailyArXiv**：读取完整 [master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 的 Time Series 栏，Last update 10-22，**86 条实际论文行**（不含表头），最新列示 10-20；[自动更新提交 bd81725](https://github.com/zezhishao/DailyArXiv/commit/bd817255ee32883128e73d23407fddad6e489ca1)时间为 10-21 20:19 UTC。timeseries 分支返回不可访问，已回退 master。聚合日期只作发现，五篇重点新增均回原始 arXiv 页确认首版日期。
- **候选降级**：[BEACON](https://arxiv.org/abs/2610.27542)首发 10-20，结合指标、日志与系统拓扑检测异常，适合 Agent 感知工具，但与新 TSFM/显式 reasoning 模型直接相关性较低，未提升主榜。其 ICDE 2027 接收为作者备注。
- **超窗排除**：DailyArXiv 中 Time2Decide 的 2602 编号论文、TimeART 等虽近期修订，但首发超出三个月，不算新研究；不以聚合更新时间替代 v1。
- **会议来源**：定向检索 OpenReview/ICLR、ACL、NeurIPS、ICML/PMLR、KDD/ACM、AAAI。未确认更晚且直接相关的窗内新增；ACL 命中多为 7 月早期会议版本，AAAI 多为 03-14 公开，未纳入。搜索未命中不代表相应会议没有相关论文，也不构成全量扫描。
- **GitHub**：五组查询 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting`，限制创建日 07-22 至 10-22，按更新各取前四项；命中总数 **4 / 124 / 94 / 28 / 66**，有重叠与弱相关项，不等于有效新增数量。[Trending](https://github.com/trending)已访问，新项目来自定向搜索，未声称上榜。创建窗口筛选对较早仓库的最近更新覆盖有限。
- **机构与 HF**：定向补检 Google Research、AWS 和 HuggingFace；未确认比上述论文更晚的直接新模型。AI HOT 技能返回近七日论文精选 15 条，未提升新的直接时序主线条目；[AI HOT](https://aihot.virxact.com)仅作发现源，摘要不替代原文。
- **核验深度**：论文核到摘要和版本史；项目核到元数据、README、目录，以及明确注明的入口片段/路线图。高相关表示适配研究方向，不等同质量认证；不确定日期的论文线索不计入窗内新增论文数。

## 7. 今日阅读建议

1. 先读 Prompt Evolution，明确反思反馈、监控集和最终评估之间的边界；将训练免费与评估免费分开讨论。
2. 对照 TS2Vec-FM 与电力 LoRA，分别讨论轻量冻结表征和需要付出适配成本的预测骨干，避免混用分类与预测指标。
3. 借鉴 TxnQA 把数值答案、格式和证据评分拆开；工程优先审查 Wanxiang 的 NWP 可得性及组件贯通，再考虑部署实验。

检索与编写截止：2026-10-22T08:33:39+08:00（北京时间）。已按指令加载 SSH key；SSH 常规连接无响应，备用 443 端口超时，随后通过 HTTPS 完成 `pull --ff-only`，确认本地与远端同步。仅提交今日简报，保留其他已有改动。

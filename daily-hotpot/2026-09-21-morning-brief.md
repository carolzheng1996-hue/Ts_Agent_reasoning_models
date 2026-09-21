# 2026-09-21 时间序列研究晨间简报

检索截止：**2026-09-21 10:57 CST（Asia/Shanghai）**。滚动窗口：**2026-06-21 至检索时点**，含起始日。运行期间系统日期由 9 月 20 日更新为 9 月 21 日，按实际执行日期命名。论文按已核验的 arXiv v1 / 出版商在线发表日排序；尚不能排除更早公开版本的条目另行说明。项目按创建日期排序，原始时间为 UTC。启动时增量基线为 9 月 19 日晨报（803f7d4）；检索期间同日早版及时间校正进入仓库（4a22bbc、b12706d），本版合并其独有跟踪条目并补充研究。今天周一，不更新周报。

## 今日重点

- **新增收录 10 项研究，另将 1 项光伏会议摘要从待核线索升级为日期已确认**；新增跟踪 3 个 GitHub 候选，其中光伏项目仅确认研究协议，尚未确认完整实现。其中 4 项研究、2 个项目已由同日早版收录，本轮补充 6 项研究、1 个项目候选及上述会议摘要核验。这里的“新增”指相对 9 月 19 日及更早晨报首次收录，不代表今天首发。
- **基础模型**：优先看 FreqCondNorm 的跨采样频率迁移及其剩余寿命预测负结果；BrainWideBench 同样提示预训练收益取决于下游任务，不能用一个任务的提升代表通用能力。
- **Agent / harness**：KDAgent 有双分支根因候选融合代码，VIPER 有保存实验计划和执行证据的示例。结构校验通过、实验可追溯、推理正确和预测有效，应分别验收。
- **光伏**：补充短期混合模型、离网光伏 10 分钟预测、日前 stacking 摘要。均需继续核查滚动验证、天气可得性和持久性基线，不直接采信论文摘要中的“优于”结论。

## 1. 时间序列基础模型最新研究

### [2026-09-18] BrainWideBench — 新增，领域基础模型评测

- **日期 / 来源**：arXiv v1 **17:54:32 UTC**；[原文与版本历史](https://arxiv.org/abs/2609.22064)。
- **摘要**：利用 139 只小鼠、276 个脑区的神经及行为记录，统一比较行为解码、遮蔽或未来活动预测、解剖结构恢复。预训练整体有益，但没有单一方案在所有任务上占优。
- **相关性**：**领域时序基础模型评测高，Agent 选模 / harness 中高，光伏和显式 reasoning 低**。值得借鉴跨主体留出与多任务验收，不能据此声称通用时序预测已获突破。仅核摘要和日期，未核全部数据划分或运行评测。

### [2026-09-18] Spectrally aligned latent flow matching — 新增，合成数据方向

- **日期 / 来源**：arXiv v1 **16:49:46 UTC**；[原文](https://arxiv.org/abs/2609.21989)。
- **摘要**：针对潜空间压缩导致合成序列频谱失配的问题，使用傅里叶、小波与 signature 变换相关的微调损失，使生成数据保留局部结构、平滑性和目标频谱。
- **相关性**：**TSFM 预训练数据中高，Agent 数据增强工具中高，直接 reasoning 低**。这是生成方法，并非已验证的通用预测基础模型；生成逼真度不等于下游预测增益，尤其应单独验证光伏日周期与爬坡事件。未复现。

### [2026-09-17] FreqCondNorm — DailyArXiv 新补充，优先阅读

- **日期 / 来源**：arXiv v1 **15:07:43 UTC**；[原文](https://arxiv.org/abs/2609.20535)。
- **摘要**：在 Transformer 中加入频率条件归一化，结合掩码自编码、对比学习和均衡域采样，在五个预测性维护数据集上预训练，以处理不同机器和大幅不同采样率的信号。摘要报告故障诊断迁移收益，但**未改善剩余寿命预测**。
- **相关性**：**工业 TSFM 高，时序 Agent 工具选择中高，光伏设备诊断潜在相关、功率预测尚无直接证据**。不能把诊断精度推广为预测或寿命估计能力；摘要将 MFPT 同时列为预训练数据集与零样本评测对象，因此须核验实际留出单位及可见范围，不能直接称为未见数据集泛化。未独立核验模型发布状态。

### [2026-09-17] CoRe — 新增，基础模型适配相关方法

- **日期 / 来源**：arXiv v1 **04:15:11 UTC**；[原文](https://arxiv.org/abs/2609.19670)，作者注明 ICONIP 2026 接收，会议更早公开版本日期不确定。
- **摘要**：通过频谱一致性和低秩关系图损失约束多变量未来轨迹；不增加可训练参数，只修改现有预测骨干的训练目标。
- **相关性**：**时序模型训练 / Agent 自动损失选择中高，TSFM 适配中，显式 reasoning 低**。这是损失设计而非新基础模型。多电站光伏的相关结构可作为迁移假设，但需要训练集内拟合变换、跨站留出及额外计算预算审计。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-18] AutoRecLab — 新增，相邻 AutoML 研究

- **日期 / 来源**：arXiv v1 **14:54:44 UTC**；[原文](https://arxiv.org/abs/2609.21863)。作者注明 RecSys 2026 Demo 接收；会议在线首发是否更早**不确定**，按已核 arXiv 日期记录，优先级中。
- **摘要**：从自然语言实验要求构造并验证原型，再用文档检索、静态类型校验和执行反馈驱动的树搜索扩展实验。作者在推荐系统小规模基线比较中报告 9 次运行成功 8 次。
- **相关性**：**ML Agent / AutoML / harness 高，直接时间序列中低**。可参考需求到可执行实验的闭环，但没有据此确认时序滚动划分、防泄漏或预测收益；未将推荐实验成功率外推到时序任务。

### [2026-09-17] A Lightweight Plug-in Gate for Transformer-Based Time-Series Forecasters — 新增，Agent 候选工具

- **日期 / 来源**：arXiv v1 **20:04:01 UTC**；[原文](https://arxiv.org/abs/2609.21044)。
- **摘要**：在编码器前对协变量表示施加轻量 sigmoid 门控，另测试使用量正则。将模块接入 TimeXer、iTransformer、PatchTST，沿用原基线设置，测试额外调参预算为零的比较。
- **相关性**：**时序 AutoML / 协变量选择中高，光伏天气输入筛选潜在相关，Agent 本体和显式 reasoning 低**。门控对象是表示单元，不能直接当作原始变量的因果重要性；作者只称竞争性表现，不宜写成全面超越基线。

### [2026-09-16] TuiML — 持续跟踪

- **日期 / 来源**：arXiv v1 **01:14:25 UTC**；[原文](https://arxiv.org/abs/2609.17984)、[官方项目](https://tuiml.ai/)。
- **摘要**：以机器可读元数据、参数模式、调用轨迹和实验状态支持 Agent 发现与组合 ML 工具，提供 MCP、Python、CLI 等接口。
- **相关性**：**时序 Agent / AutoML 工具层与 harness 高，TSFM 本体低**。本轮重核摘要，没有确认新的代码或模型发布，不重复计新增。

## 3. 时间序列 reasoning 模型最新研究

本轮未确认比已跟踪 WaveTLM 更晚、直接面向通用时序显式 reasoning 的新模型；以下两项新增为可支持推理的统计或物理方法，不混称为 LLM reasoning 模型。

### [2026-09-17] Conditional Independence Testing in Time Series — DailyArXiv 新补充

- **日期 / 来源**：arXiv v1 **17:46:50 UTC**；[原文](https://arxiv.org/abs/2609.20772)。
- **摘要**：提出 Generalised Temporal Covariance Measure，对结果与暴露分别进行非线性历史回归，再由残差协方差构造检验；结合方差权重和滞后展开，处理时序条件独立性问题。
- **相关性**：**Agent 假设检验工具 / 因果 reasoning 证据层中高，TSFM 本体低**。Granger 条件独立性检验不能脱离混杂、回归收敛率及依赖假设解释为干预因果。论文关于特定假设下不拆分数据的结论，也不意味着预测评测可以复用测试集。

### [2026-09-17] Physical knowledge on historical data matters more than enforcing physical constraints on the forecast — DailyArXiv 新补充

- **日期 / 来源**：arXiv v1 **08:23:08 UTC**；[原文](https://arxiv.org/abs/2609.19871)。
- **摘要**：PIRNN 同时估计历史和未来的不可观测物理变量，并以地下水模型方程约束建模；12 个真实数据集上有 5 个优于比较模型，另有消融和专家一致性评估。
- **相关性**：**物理辅助时序建模高，Agent 可解释证据中，显式语言 reasoning 低**。对光伏潜在状态估计具有方法启发，但该研究对象是地下水，尚无光伏迁移实验；不将物理一致性等同于推理正确性。

### [2026-09-16] WaveTLM — 持续跟踪

- **日期 / 来源**：arXiv v1 **15:21:39 UTC**；[原文](https://arxiv.org/abs/2609.18812)。
- **摘要**：将自然语言任务编译为带类型的状态，再由任务执行器生成数值张量、合法标签或结构化记录；ExecTS-QA 覆盖预测、插补、分类、异常等任务。
- **相关性**：**可执行时序 reasoning / Agent 输出验证高**。契约可靠性与预测质量需要分开评价；本次未确认新代码发布。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（Agent、harness、machine learning、AutoML）

#### [2026-09-18] HFJ0624/KDAgent — 新增，有根因候选融合代码

- **日期 / 来源**：创建 **06:29:36 UTC**，最近推送 **2026-09-20 12:07:51 UTC**；[仓库](https://github.com/HFJ0624/KDAgent)、[元数据](https://api.github.com/repos/HFJ0624/KDAgent)。论文首发日期**不确定**，仅计仓库。
- **摘要**：以工业时序证据和 Top-10 根因候选为输入，比较普通提示、RAG、自我修订与双分支融合，保存原始回复、解析结果及指标。README 主要围绕 SWaT；仓库描述提及 WADI，本轮未核验 WADI 实验。
- **相关性**：**时序分析 Agent / reasoning harness 高，直接预测 / TSFM 低**。适合研究候选重排序和证据审计，不能视为自由发现根因的通用系统。
- **源码核验**：[融合器](https://github.com/HFJ0624/KDAgent/blob/main/src/dual_branch_fusion_agent.py)优先采用数据分支主因，但数据分支无合法主因时会回退 RAG；其融合 `validation_passed` 取决于是否得到主因与候选，并非完整重做验证。[验证器](https://github.com/HFJ0624/KDAgent/blob/main/src/response_validator.py)检查候选集合、置信度范围、四步结构及解释非空，没有核对数值证据是否与原始时序一致。故“无集合外变量”不等于“无幻觉 / 因果正确”。未执行外部项目，也未全面审计标签隔离。

#### [2026-08-27] pvd232/viper — 新增发现，实验可追溯 harness

- **日期 / 来源**：创建 **01:32:24 UTC**，最近推送 **2026-09-19 15:47:23 UTC**；[仓库](https://github.com/pvd232/viper)、[元数据](https://api.github.com/repos/pvd232/viper)。
- **摘要**：先声明实验与不可变计划，再运行并保存执行证据；README 介绍文件哈希核验、恢复、运行比较和 CLI / MCP 查询。
- **相关性**：**ML Agent / harness 高，时序实验管理中高，直接 TSFM / reasoning 模型低**。可将数据、代码版本和运行产物纳入研究记录。
- **核验边界**：读 README 与实际 [CPU 示例](https://github.com/pvd232/viper/blob/main/examples/cpu_quickstart.py)，确认种子、训练阶段、MSE 最小化目标、计划执行和恢复状态接口；示例是简单训练任务，不证明时序泄漏自动检查。未深入核验核心哈希实现或运行结果，README 的可复现承诺保留为作者说明。

### 4.2 光伏功率预测

#### [2026-09-21] Italo-1/05-mev-P3 — 新建仓库，研究协议候选，降低优先级

- **日期 / 来源**：创建 **02:09:21 UTC**，推送 **02:09:30 UTC**；[仓库](https://github.com/Italo-1/05-mev-P3)、[元数据](https://api.github.com/repos/Italo-1/05-mev-P3)、[README](https://github.com/Italo-1/05-mev-P3/blob/main/README.md)。
- **摘要**：计划比较持久性、ARIMA、Prophet、RF、XGBoost、LSTM 和 Transformer，在赤道与中纬度光伏序列上做 1/6/24 小时预测，强调滚动验证与相对持久性的 skill score。数据说明区分 PVGIS 模拟量与 OPSD 实测量。
- **相关性**：**光伏评测高，Agent 自动选模 / harness 中高，显式 reasoning 低**。可参考协议设计；不能混合模拟与实测数据后声称跨区域真实部署验证。
- **日期与实现边界**：README 标注 8 月 29 日开始，又含 8 月 20 日起的日志；这些内部记录早于仓库创建，不作为已发表论文证据。README 所列实验脚本在仓库根路径本次未取得，完整树查询又受限，故**代码可用性及论文发表日期不确定**，不将协议或日志中的结果写成已复现结论。

早版保留的活动记录：[tiny-model-lab](https://github.com/melissa-pereira-deel/tiny-model-lab)创建于 **9 月 18 日**，早版核到 **9 月 20 日 21:17:32 UTC**推送，预算与基线 harness 相关性高；本轮未复核差分，不声明此前误差方向问题已修复。

去重与活动记录：[janavkamesh/agentic-automl](https://github.com/janavkamesh/agentic-automl)创建于 **9 月 17 日**、9 月 20 日推送，AutoML 相关性高，9 月 18 日已收录；[MDG-Mamba](https://github.com/Yingcode-Lab/MDG-Mamba)创建于 **9 月 18 日**、9 月 20 日推送，光伏相关性高，9 月 19 日已审查。两者本次只确认活动，不声明新增功能。HF 定向检索未确认新的独立模型发布，不将 GitHub 同项目重复计数。

## 5. 光伏功率预测最新研究

### [2026-09-17] IWOA-TCN-BiGRU-MATT — 新增期刊论文

- **日期 / 来源**：出版商明确 **Published online 17 September 2026**；[官方页面](https://www.techscience.com/CMES/online/detail/28334)，DOI 10.32604/cmes.2026.081823。更早预印本日期不确定，当前按在线发表日纳入。
- **摘要**：用改进鲸鱼优化调节 TCN、双向 GRU 与多头注意力混合模型，在华中某光伏电站数据上比较不同天气条件下的短期预测。
- **相关性**：**光伏预测高，Agent 自动调参候选中，TSFM / 显式 reasoning 低**。只核摘要与在线日期；需要检查调参预算公平性、持久性和强树模型对照，以及输入窗口是否始终早于预测起点，不能仅凭双向结构名称判定泄漏。

### [2026-09-16] Photovoltaic Power Forecasting and Performance Assessment for Off-Grid Systems — 新增期刊论文

- **日期 / 来源**：官方页面标注 **16 September 2026**；[Solar 原文](https://www.mdpi.com/2673-9941/6/5/60)，DOI 10.3390/solar6050060。更早公开版本不确定。
- **摘要**：使用离网光伏储能系统一年、5 分钟间隔的运营数据，以多变量 LSTM 做提前 10 分钟功率预测，输入包含历史功率、辐照、负荷和电池电流电压；摘要报告日间 R² 为 0.728。
- **相关性**：**光伏功率预测高，预测到能量管理的 Agent 工具中，TSFM / reasoning 低**。电池 SOC 的运行统计不是预测改善调度收益的对照试验证据。出版商正文直读失败，已通过官方域名索引取得日期与摘要；未核完整时间划分，证据强度低于全文审查。

### [2026-09-16] TCN–XGBoost–LSTM Stacking — 既有线索升级为日期已确认

- **日期 / 来源**：官方页面 **Published date 16 Sep, 2026**；[会议摘要与海报页](https://sciforum.net/paper/33668)。9 月 21–22 日是会议举办日期，不作为论文首发日；尚未确认更早版本。
- **摘要**：由 TCN 和 XGBoost 提取时序及非线性信息，再以 LSTM 元学习器组合输入及基础预测；使用 15 分钟数据开展日前光伏预测。
- **相关性**：**光伏预测 / Agent 集成选择高，TSFM / 显式 reasoning 低**。9 月 18 日详情读取失败，本次已核到原页日期与摘要。仅为会议摘要级证据；需检查元学习器是否只用训练折外预测、气象输入是否在起报时可得，不直接以其摘要误差跨数据集排名。

### [2026-09-15] 天空图像与 CNN-BiGRU-Attention 短期光伏预测 — 保留同日早版跟踪

- **日期 / 来源**：早版核验出版商 **Published: 15 September 2026**；[官方全文页](https://www.sciepublish.com/article/pii/1221)，DOI 10.70322/sesr.2026.10012。更早预印本不确定，本轮未重复核全文。
- **摘要**：以光流刻画云运动、ResNet50 估计辐照，将辐照预测、天气及历史功率接入经贝叶斯优化的 CNN-BiGRU-Attention，预测下一小时功率。
- **相关性**：**多模态光伏预测高，Agent 工具流水线中高，TSFM / 显式 reasoning 低**。保留 9 月 18 日及同日早版的已有记录，不计新增；仍需检查起报信息可得性与跨站点泛化。

**光通信光功率补检**：本轮未确认窗口内新的直接预测成果。[多 Agent 光功率优化](https://arxiv.org/abs/2606.05795)为 **6 月 4 日**首发，已超窗；[现场网络专家知识 Agent](https://doi.org/10.1364/JOCN.588873)官方发表日为 **4 月 22 日**，同样排除。两者与光通信优化有关，不等同于光伏发电预测。

## 6. DailyArXiv 补检结论

已检查用户指定的 [DailyArXiv 官方仓库 README](https://github.com/zezhishao/DailyArXiv)，确认 **Last update: 2026-09-21**，**Time Series** 最新行日期为 **9 月 17 日**。小节代表检索关键词，不要求存在 timeseries 分支。原始 README 下载超时，仅取得前 38,196 字节；改以 GitHub 渲染页补查，未把部分下载的 24 行计数误作栏目总数。同日早版另一次完整提取记录为 71 行；此数量属于早版检查，本轮未独立重测。

- **相关且在三个月内，已补入主清单**：FreqCondNorm、CoRe、Conditional Independence Testing、Physical knowledge / PIRNN，均已逐一核对 arXiv v1 日期及摘要。QUALS、SETTer、WaveTLM、TuiML 为已跟踪主题，不因聚合更新重计新增。
- **首发超窗**：[Nonlinear Probabilistic Forecast Reconciliation](https://arxiv.org/abs/2604.26668)为 **4 月 29 日 v1**，README 的 **9 月 17 日**对应 v3；虽对约束预测相关，降优先级并排除新首发主清单。
- **超窗且版本日期不一致**：[Granular Time Series Segmentation](https://arxiv.org/abs/2505.17640)首发 **2025-05-23**；README 链接 v3 并标 **2026-09-17**，本次 arXiv 页面却只列至 **2025-12-10 v2**。可能涉及来源刷新差异，修订时间未解决；分割方法与 Agent 工具库相关，但不列近三个月新论文。
- DailyArXiv 的聚合日期滞后于本次已读取的周一 arXiv 公告；BrainWideBench、频谱对齐生成等研究通过独立公告核验，不能仅依赖聚合页判断最新动态。

## 7. 检索覆盖、局限与下一步

| 来源 | 本次实际检查与边界 |
|---|---|
| [arXiv cs.LG recent](https://arxiv.org/list/cs.LG/recent) | 确认 9 月 21 日公告有 149 项，打开前 50 与后续 100 项分页，并对选中条目核摘要 / 版本历史；不声称对全部学科或所有条目精读。另从 DailyArXiv 补查 cs.AI、stat.ME。 |
| [DailyArXiv](https://github.com/zezhishao/DailyArXiv) | 原始 README 部分下载与渲染页交叉确认；日期冲突单列。 |
| [GitHub Search](https://github.com/search?type=repositories) | 创建窗口 6 月 21 日至 9 月 21 日，按 updated 降序，五组各取前 4；time-series agent、timeseries agent、automl agent、harness + machine learning、photovoltaic forecasting 返回总数 148 / 8 / 102 / 22 / 53。查询词与窗口变化会影响数量，不能据此判断生态增减，也不是 Trending 排名。 |
| GitHub 候选内容 | 搜索元数据成功，后续 README / 文件树 API 受限；改读原始 README。对 KDAgent 两个模块和 VIPER 示例抽查源码；未执行项目、未取得完整目录或复现结果。 |
| [OpenReview](https://openreview.net/) / ICLR、[ACL](https://aclanthology.org/) | 进行时序 reasoning / Agent 定向搜索，命中大量较早投稿；未确认更晚直接相关新首发。不以会议年份作为发布日期。 |
| [ICML / PMLR](https://proceedings.mlr.press/)、[NeurIPS](https://neurips.cc/)、[KDD](https://kdd2026.kdd.org/)、[AAAI](https://ojs.aaai.org/) | 官方域名定向检索，不是完整目录扫描；本轮没有新增已核验首发。AAAI 多项结果为 3 月发表，排除。 |
| [HuggingFace](https://huggingface.co/) 与机构发布 | 定向搜索时序模型 / 官方博客；未确认新的高相关独立发布，未遍历全部模型版本。保留早版已核的 [TimesFM-3（8 月 31 日）](https://research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/)及 [IBM r2（9 月 9 日）](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)记录，两者 TSFM 相关性高，均为既有发布，本轮未重复核原页。 |
| 光伏出版商 / SCIFORUM | 核验在线发表日与摘要；仅显示卷期月份的 Elsevier 线索未作为精确首发纳入。MDPI 文章读取边界见条目。 |
| [AI HOT](https://aihot.virxact.com) | 近七天时序关键词精选只返回芯片贸易分析，与本任务不直接相关，排除；不以该结果推断三个月内无成果。 |

建议优先继续：**核验 FreqCondNorm 的域划分和负迁移；为 KDAgent 增加数值与时间证据校验；将 VIPER 的实验记录接入滚动时序评测；对光伏 stacking 检查折外预测和真实天气起报条件。** 本报为文献与有限源码筛查，未运行训练或独立复现实验。

# 2026-09-21 时间序列研究晨间简报

检索截止：**2026-09-21 10:55 CST（Asia/Shanghai）**。筛选窗口：**2026-06-21 至检索时点**，含起始日；论文按官方 v1 日期，GitHub 新项目按创建日期，原始时间为 UTC。增量基线为 9 月 19 日晨报（803f7d4），并检索历史简报去重。今天周一，不更新周报。

## 今日重点

- **新增收录 4 篇论文、2 个 GitHub 项目**，均在三个月窗口内；新增收录不代表今天首发。其中 2 篇属于基础模型预训练与迁移评测，另 2 篇为生成与预测工具层的相邻研究。
- **优先看 FreqCondNorm 与 BrainWideBench**：前者尝试跨采样频率迁移，但没有改善剩余寿命预测；后者显示预训练收益取决于下游任务。避免把单项成绩解释为通用时序能力。
- **工程重点是 KDAgent 和 VIPER**：前者有工业时序证据与知识检索的双分支实现，后者记录实验计划与产物。KDAgent 源码存在 RAG 首因回退，不能照搬 README 中“知识分支只补充后四名”的绝对表述。
- 本轮未确认比 TuiML、WaveTLM 更晚且直接相关的建模 Agent / 显式 reasoning 新论文。两条主线保留为持续跟踪，不重复计新增。

## 1. 时间序列基础模型最新研究

### [2026-09-18] BrainWideBench — 新增，跨个体迁移评测

- **日期与来源**：v1 **2026-09-18 17:54:32 UTC**；[arXiv 官方论文](https://arxiv.org/abs/2609.22064)。9 月 21 日公告不等于首发日期。
- **摘要**：基于 139 只小鼠、276 个脑区的神经与行为记录，建立行为解码、遮蔽或未来神经活动预测、解剖组织恢复三个任务组，比较微调与未见动物零样本迁移。作者发现预训练优于匹配的单会话基线，但没有一个方法在全部任务组上均领先。
- **相关性**：**领域时序基础模型 / 迁移评测高，Agent 实验 harness 中高，显式 reasoning 低**。可借鉴主体留出与多任务验收，不能外推成通用预测模型榜单。
- **核验边界**：已读官方摘要与版本历史；未审核分割清单或复现实验。小鼠神经信号上的结果不直接代表工业或光伏数据收益。

### [2026-09-17] FreqCondNorm — 新增，跨频率工业预训练

- **日期与来源**：v1 **2026-09-17 15:07:43 UTC**；[arXiv 官方论文](https://arxiv.org/abs/2609.20535)。
- **摘要**：用 FiLM 式频率条件归一化统一不同采样频率的工业时序，结合掩码自编码、对比学习和均衡域采样，在五个维护数据集上预训练。作者报告故障诊断与跨频率迁移收益，同时明确**没有改善剩余使用寿命（RUL）预测**。
- **相关性**：**工业 TSFM / 跨域表征高，Agent 模型选择中高，显式 reasoning 低**。值得研究是否需要按故障分类与寿命回归分别选择预训练目标。
- **核验边界**：摘要同时列 MFPT 为预训练数据集、报告其零样本准确率；“零样本”的具体留出单位和预训练可见范围需读完整协议核实，本轮不直接称其为未见数据集泛化。未确认可运行官方代码或权重。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-16] TuiML: Machine Learning for AI Agents — 持续跟踪

- **日期与来源**：v1 **2026-09-16 01:14:25 UTC**；[论文](https://arxiv.org/abs/2609.17984)、[官方文档](https://tuiml.ai/)、[代码](https://github.com/tuiml/tuiml)。
- **摘要**：通过机器可读元数据和参数模式，让 Agent 发现、组合和验证 ML 组件；统一 MCP、Python、CLI 等入口，并记录种子、调用轨迹和实验会话。
- **相关性**：**时序建模 Agent / AutoML 工具层高，harness 高，TSFM 本体低**。关注组件发现、运行前验证和实验状态保存。
- **核验边界**：本轮重核摘要与 v1，无新实验或代码发布证据；仓库创建早于窗口，不计新项目。可追踪调用仍需配合独立的时间划分与数据可得性检查。

### [2026-09-18 / 2026-09-17] 可供 Agent 调用的相邻研究 — 新增两篇

| 首发日期与来源 | 摘要 | 与本任务的相关性及边界 |
|---|---|---|
| **2026-09-18 16:49:46 UTC**：[Time series generation with spectrally aligned latent flow matching](https://arxiv.org/abs/2609.21989) | 以 Fourier、小波及 signature 变换相关损失微调潜在流生成模型，减少压缩导致的频谱失配，保留局部结构与动态性质。 | **Agent 合成数据工具中高、TSFM 数据构造中、显式 reasoning 低**。这是生成研究；摘要的真实性与效率指标不等于下游预测增益，也未证明通用基础模型能力。 |
| **2026-09-17 20:04:01 UTC**：[A Lightweight Plug-in Gate for Transformer-Based Time-Series Forecasters](https://arxiv.org/abs/2609.21044) | 在编码器前给协变量表示施加轻量 sigmoid 门控；沿用 TimeXer、iTransformer、PatchTST 的基线配置，检验使用惩罚、位置和初始化。 | **Agent 协变量选择 / AutoML 消融中高、TSFM 适配中、reasoning 低**。作者称误差与基线相当、使用惩罚降低平均准入分数；不是已证明全面超越基线。 |

两篇均核验官方摘要和 v1 日期；未审查训练代码或运行实验。不将常规门控或数据生成归类为自主建模 Agent。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-16] WaveTLM — 持续跟踪，可执行输出契约

- **日期与来源**：v1 **2026-09-16 15:21:39 UTC**；[官方论文](https://arxiv.org/abs/2609.18812)。
- **摘要**：将用户请求和时序证据编译为带类型任务状态，由专用执行器生成数值序列、合法标签或结构化记录，覆盖预测、插补、分类、异常与波形任务。
- **相关性**：**工具执行 / 输出验证 / Agent 高，显式 reasoning 相关性中高，TSFM 中**。适合分别考察时间对齐、形状合法性和数值质量。
- **核验边界**：官方摘要仍写代码、构造脚本和 ExecTS-QA 将在发表后公开，本轮未确认新发布。契约通过率不能替代预测准确率或因果推理正确性。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（Agent、harness、machine learning、AutoML）

#### [2026-09-18] HFJ0624/KDAgent — 新增，工业时序根因分析

- **日期与来源**：创建 **2026-09-18 06:29:36 UTC**，最近推送 **2026-09-20 12:07:51 UTC**；[仓库](https://github.com/HFJ0624/KDAgent)、[README](https://raw.githubusercontent.com/HFJ0624/KDAgent/HEAD/README.md)、[带日期的检索元数据](https://api.github.com/search/repositories?q=repo%3AHFJ0624%2FKDAgent)。
- **摘要**：基于上游 Top-10 候选和窗口时序证据比较直接提示、RAG、自我修正与双分支融合；记录原始响应、候选命中和诊断指标，提供统一 LLM API 客户端。
- **相关性**：**时序 Agent / reasoning 工程 / 评测 harness 高，预测 AutoML 中低，TSFM 本体低**。它执行根因候选重排，不是端到端训练新的预测器。论文首发日期**不确定**，只按代码项目收录。
- **源码核验**：[融合实现](https://github.com/HFJ0624/KDAgent/blob/HEAD/src/dual_branch_fusion_agent.py)使用 `primary = evidence_primary or rag_primary`；当数据分支没有合法首因时，会采用知识分支首因，并标记 `dual_branch_rag_fallback`。因此 README 所说“知识分支只补充 2–5 名”有回退例外。
- **限制**：[验证器](https://github.com/HFJ0624/KDAgent/blob/HEAD/src/response_validator.py)检查候选范围、置信度数值、四步结构与解释字段，不能据此断言根因正确。上游候选召回、完整数据无泄漏和报告分数未独立验证；未运行或调用外部模型。

#### [2026-08-27] pvd232/viper — 新增发现，ML 实验 harness

- **日期与来源**：创建 **2026-08-27 01:32:24 UTC**，推送 **2026-09-19 15:47:23 UTC**；[仓库](https://github.com/pvd232/viper)、[README](https://raw.githubusercontent.com/pvd232/viper/HEAD/README.md)、[检索元数据](https://api.github.com/search/repositories?q=repo%3Apvd232%2Fviper)。
- **摘要**：以保存的实验计划组织阶段、变体与种子，记录源码提交、输入、环境、指标和产物；支持恢复、比较以及 CLI / MCP 查询。
- **相关性**：**ML Agent / AutoML 实验可追溯性高，时序 harness 方法迁移中高，直接 TSFM / reasoning 模型低**。适合承载固定时间划分和同预算实验，但这些协议需要研究者另行定义。
- **核验边界**：读 README 和[工作机制文档](https://github.com/pvd232/viper/blob/HEAD/docs/explanation/how-viper-works.md)，确认文档示例显式定义 MSE 最小化、输入角色和种子；尚未审计底层校验实现或运行 quickstart。产物哈希一致不能自动证明没有时间泄漏。

**已知项目活动，不计新增**：`janavkamesh/agentic-automl`（创建 **2026-09-17**，[仓库](https://github.com/janavkamesh/agentic-automl)）推送刷新至 **9 月 20 日 18:06:42 UTC**，仍为通用 AutoML 代码生成候选，**Agent 高、直接时序中低**；`tiny-model-lab`（创建 **2026-09-18**，[仓库](https://github.com/melissa-pereira-deel/tiny-model-lab)）推送至 **9 月 20 日 21:17:32 UTC**，**预算 / 基线 harness 高、时序迁移中**。本轮仅复核元数据，不将 push 时间视为功能进展，也不声称旧版问题已修复。

### 4.2 光伏功率预测

- **[2026-09-18] MDG-Mamba，已知项目活动**：[官方代码](https://github.com/Yingcode-Lab/MDG-Mamba)，创建 **15:36:06 UTC**，推送更新至 **2026-09-20 02:43:56 UTC**。仓库描述采用梯度增强、宏微分解与多频建模；**光伏时序预测高、Agent 候选模型中、TSFM / reasoning 低**。本轮只复核元数据，9 月 19 日源码抽查不等于本轮差分验证；论文发表日期仍**不确定**。
- **[2026-09-21] Italo-1/05-mev-P3，低优先级占位线索**：[仓库](https://github.com/Italo-1/05-mev-P3)，创建 **02:09:21 UTC**。描述称比较赤道与中纬度光伏的七个预测模型；**光伏评测主题高、Agent / TSFM 关联未证实**。搜索返回仓库大小为 0，未确认可用实现，不计入新增有实现项目。

HuggingFace 补检命中已有 Tabby、IBM PatchTST-FM-r2；未确认应独立计数的新模型或权重发布，与论文及官方项目合并处理。

## 5. 光伏功率预测最新研究

### [2026-09-15] 天空图像与 CNN-BiGRU-Attention 短期光伏预测 — 持续跟踪

- **日期与来源**：出版社明确 **Published: 15 September 2026**；[官方全文页](https://www.sciepublish.com/article/pii/1221)，DOI 10.70322/sesr.2026.10012。更早预印本未确认。
- **摘要**：光流刻画云运动，ResNet50 估计辐照，将预测辐照、天气与历史功率输入经贝叶斯优化的 CNN-BiGRU-Attention，预测下一小时功率。
- **相关性**：**多模态光伏预测高，Agent 可调用流水线中高，TSFM / 显式 reasoning 低**。优先检查图像、气象及标签在起报时点的可得性。
- **核验边界**：本轮重新检出出版社日期与摘要，9 月 18 日已收录，不重复计新增。未复现实验，不据单站拟合指标推断跨站点泛化。

其他搜索结果含 9 月卷期论文，未将卷期日期当在线首发。例如天气模式专家应对漂移的工作仅确认卷期，未核在线日期，未进入已确认新增清单。

## 6. DailyArXiv 补检与日期过滤

读取 [DailyArXiv 官方仓库](https://github.com/zezhishao/DailyArXiv)和 [master 原始 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)：**Last update 为 2026-09-21，Time Series 共 71 条，最新行日期 9 月 17 日**。已完整提取该小节用于发现线索；正文结论回到原论文核验。

- 新补出 **FreqCondNorm**；QUALS、WaveTLM、TuiML 已知，不重计。今天独立 arXiv 公告还补出 9 月 18 日的生成论文、BrainWideBench，以及 9 月 17 日晚的协变量门控研究。
- **日期过滤**：小节中的 2505.17640v3、2604.26668v3 首发编号已在窗口之前，不因 9 月修订重新计作近三个月新研究。Post-Training 的修订也不作为新论文。
- `timeseries` 分支及最新提交 API 受到访问限流，本轮不能确认分支状态、最新提交哈希和时间；已回退公开 master README，不把失败解释为分支不存在。

## 7. 检索覆盖、限制与下一步

| 来源 | 本轮检查 | 结论与覆盖边界 |
|---|---|---|
| [arXiv cs.LG recent](https://arxiv.org/list/cs.LG/recent) | 首页及后续 100 项页面，检查 9 月 21 日公告的 149 条标题；对入选论文读取官方摘要和版本历史 | 主精选 4 篇新增首发已核日期；不是跨学科、三个月所有论文的全量扫描 |
| [GitHub Search](https://github.com/search?type=repositories) | 五组 created:2026-06-21..2026-09-21、按 updated 排序，每组前 6 | time-series agent / timeseries agent / automl agent / harness machine-learning / photovoltaic forecasting 总数为 **148 / 8 / 102 / 138 / 53**。只是搜索头部，不是 Trending 排名；两项新增分别做源码或文档抽查 |
| [OpenReview](https://openreview.net/)、[ACL](https://aclanthology.org/)、[ICLR](https://proceedings.iclr.cc/)、[PMLR](https://proceedings.mlr.press/)、[NeurIPS](https://neurips.cc/)、[KDD](https://kdd2026.kdd.org/)、[AAAI](https://ojs.aaai.org/) | 官方域名定向关键词补检 | 命中以旧稿、已有 ACL 7 月版本、会议目录为主；未确认需加入本日精选的新首发。未逐站遍历目录；ICML 的 PMLR 结果亦混有往年论文 |
| [Google Research](https://research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/)、[IBM Research / HF](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)、[HuggingFace](https://huggingface.co/) | 官方发布定向搜索 | 命中已知 8 月 31 日 TimesFM-3、9 月 9 日 IBM r2 及 Tabby，不重计；HF 未全量扫描 |
| [AI HOT](https://aihot.virxact.com) | 最近七天 time series 精选补检 | 返回 1 条芯片贸易分析，主题不符，排除；不能用于代表三个月覆盖 |

**下一步优先级**：先核 FreqCondNorm 的零样本留出定义；对 KDAgent 把“数据证据首因”“RAG 回退首因”和输出结构合规分开计分；再评估 VIPER 能否记录滚动切分、数据版本及每个预测起点的可见输入。BrainWideBench 可用来参考主体留出与多任务验收设计。

本轮未安装候选项目、调用其模型服务、下载权重或复现实验。性能判断均来自作者摘要；“未确认新增”仅指以上检索覆盖。

# 时间序列研究晨间简报｜2026-10-09

检索截止：2026-10-09 09:00 CST（Asia/Shanghai）；窗口：2026-07-09 至检索时刻。论文日期采用原站 UTC 首发日，另标修订；GitHub 日期采用 API UTC 时间。今日新增指相对 10 月 8 日已发布正文新增收录，不等于今天首发。论文效果均为作者报告，未复现；项目已读说明，未运行。

## 今日重点

- **新增研究**：WxFM-XL 将单变量基础模型适配到多站点天气预测；两篇评测工作分别强调预测轨迹分歧、预处理对模型排名的影响。
- **Agent / reasoning**：TSHarness、EvoCast、COMMON-TSQA 继续作为近期重点；今日未确认更晚的高相关独立首发。TeeMoE 的 10 月 7 日版本是修订，不能算新论文。
- **新项目**：新增收录 Kaggle Grandmaster、Multi-Agent-Data-Analyst、EpochGo、Ephemeris MCP。前两者 10 月 8 日创建；时序专用程度不同，见下表。

## 1. 时间序列基础模型最新研究

### 2026-10-07｜WxFM-XL：多站点适配（新增，高优先级）

来源：[arXiv 2610.10057](https://arxiv.org/abs/2610.10057)，v1 13:28 UTC。

针对单变量 TSFM 忽视站点空间位置与不同站点误差先验的问题，引入跨站点误差相关图，并与空间相关图动态融合。作者在多个数据集报告优于对照方法。

**相关性**：foundation model **高**；Agent / reasoning **低**。值得用于研究基础模型的空间适配，不能把图融合称为语言推理；天气预测能力也不直接证明光伏功率收益。

### 2026-10-07｜Temporal Predictive Multiplicity：同误差、不同轨迹（新增）

来源：[arXiv 2610.09994](https://arxiv.org/abs/2610.09994)，v1 12:53 UTC。

比较完整预测轨迹而非逐点误差；在 19 种神经预测架构、11 个数据集上观察到近似最优模型仍会生成显著不同的轨迹，逐预测步约束不能完全消除这种分歧。

**相关性**：预测评测 / Agent 模型选择 **高**，TSFM **中**，显式 reasoning 模型 **低**。启示是把轨迹一致性加入候选晋升评估；这是本简报的应用判断，并非论文实现了研究 Agent。

### 2026-10-06｜预处理是否改变了我们对模型的判断（新增补录）

来源：[Are We Really Benchmarking Forecasting Models?](https://arxiv.org/abs/2610.09096)，v1 20:50 UTC。

在 29,000 条 M4 序列上比较 11 个模型和 16 种可逆预处理流程。研究指出，只给部分架构内置处理优势、其他模型仅做简单缩放，会混淆架构能力与预处理收益。

**相关性**：AutoML 搜索空间 / harness **高**，TSFM 对照公平性 **中高**，语言 reasoning **低**。落地应把差分与逆变换纳入统一验证流程，不能直接把论文最佳配置视为可在线获得的 oracle。

### 2026-10-05｜ScaleIn：尺度不变训练（近期回顾）

来源：[arXiv 2610.07324](https://arxiv.org/abs/2610.07324)。在缩放目标上计算损失，避免反变换后的损失让大尺度序列支配梯度；论文给出条件化理论分析与多个架构实验。**TSFM 高、训练流程 AutoML 中、reasoning 低**。不是今日新增。

## 2. 时间序列建模 Agent 最新研究

本轮未核实 10 月 5 日之后的新建模 Agent 首发，保留两项已于昨日收录的窗口内重点。

### 2026-10-04｜TSHarness：感知与推理解耦（回顾）

来源：[arXiv 2610.04942](https://arxiv.org/abs/2610.04942)。工具选择器把统计与时序特征写入结构化 TPS，回答 Agent 据此推理，证据不足时触发再次感知。**时序 Agent / reasoning / harness 高，预测架构自动建模中低**。零样本指目标侧不训练或使用答案反馈，不能理解为所有组件均未训练。

### 2026-10-03｜EvoCast：受控的预测架构演化（回顾）

来源：[arXiv 2610.04517](https://arxiv.org/abs/2610.04517) · [官方代码](https://github.com/18e0-x/EvoCast)。LLM 提出假设与实现代码，确定性程序控制编辑边界、统一评估和模型晋升；迭代证据支持后续研究轮次。**时序建模 Agent / AutoML / harness 高**。作者仅报告三个现实预测案例，跨领域泛化仍需验证。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-07 修订｜OpenTSLM TeeMoE（v1：2026-09-30）

来源：[arXiv v2](https://arxiv.org/abs/2609.40265v2) · [GitHub](https://github.com/OpenTSLM/OpenTSLM-TeeMoE) · [Hugging Face 模型页](https://huggingface.co/OpenTSLM/TeeMoE)。共享骨干上分别训练预测聚合、原生预测与时序分析三个低秩专家，再由控制器组合冻结的参数更新。**TSFM / reasoning 高，外部数值模型协调中高**。本轮确认论文、代码与模型入口；未比较 v1/v2 差分，不把摘要中能力描述当成 v2 新增能力，也不把模型页存在等同已验证推理运行。

### 2026-10-05｜COMMON-TSQA：验证回答是否使用数值证据（回顾）

来源：[arXiv 2610.05686](https://arxiv.org/abs/2610.05686)。统一公开评测任务与答案格式，通过原始输入和六类干预观察系统是否依赖序列，并审查解释的事实依据、推导有效性及答案一致性。**时序 reasoning 可靠性 / Agent 评测高**。它是评测工作，不是新 reasoning 权重；解释与答案一致仍可能包含错误数值判断。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列、harness、machine learning、AutoML

以下四项均为相对昨日正文新增收录；按仓库创建日期倒序。创建和推送不是经过验证的版本发布时间，近期活跃也不等于成熟。

| 日期（UTC） | 项目与来源 | 简短摘要、相关性与核验边界 |
|---|---|---|
| 创建 10-08 16:43；推送 10-08 16:43 | [TranBaDat2607/claude-code-kaggle-grandmaster](https://github.com/TranBaDat2607/claude-code-kaggle-grandmaster) | Claude Code 竞赛插件，README 包含验证、实验记录、集成、时序 playbook、命令和工具包。**ML Agent / harness 高，时序中高**。已读 README；Grandmaster 是项目名称，未验证竞赛成绩或防泄漏实现。 |
| 创建 10-08 08:14；推送 10-08 10:35 | [tanyaverma20/Multi-Agent-Data-Analyst](https://github.com/tanyaverma20/Multi-Agent-Data-Analyst) | README 描述数据剖析、EDA、特征工程、调参、验证与 Notebook 生成，采用 A2A 总线及工具注册。**AutoML / ML Agent 高，时序中低**。未确认滚动回测与时间切分，不可直接当时序基准。 |
| 创建 10-07 22:15；推送 10-08 21:14 | [AryanDinakaran/EpochGo](https://github.com/AryanDinakaran/EpochGo) | README 描述本地 CrewAI / Ollama 驱动的预处理、模型比较调参与服务生成流程。**AutoML Agent 高，时序低至中**。主要是表格分类/回归；本地运行、成本及隐私表述均为项目自述，未验证。 |
| 创建 10-04 10:01；推送 10-07 05:14 | [TensorLink-AI/ephemeris-mcp](https://github.com/TensorLink-AI/ephemeris-mcp) | 把概率预测、模型路由、集成与模型列表封装为 MCP 工具。**TSFM 接入 / 时序 Agent 高，reasoning 模型低**。README 明示需服务 API key 与额度；这是远端服务入口，不能当作全部后端模型的开放实现或独立性能证明。 |

补充活跃度：**2026-10-08 05:15 UTC**，[sriixz/agentic-timeseries](https://github.com/sriixz/agentic-timeseries) 有近期推送（创建 08-22），描述包含规划、确定性分析、FluSight 和 NeuralForecast 调参。**时序 Agent 高**；仅核元数据，未核差分，不计新项目。TeeMoE 与 Hugging Face 的同名模型合并在第 3 节，不重复计数。

### 光伏功率预测

**2026-10-08 17:05 UTC 创建、17:18 推送**：[SunawarKhan/QEFSF-for-Solar-Photovoltaic-Generation-Forecasting](https://github.com/SunawarKhan/QEFSF-for-Solar-Photovoltaic-Generation-Forecasting)。API 无项目描述，仅名称指向太阳能发电预测；**光伏主题相关，Agent / reasoning / TSFM 相关性不确定**。本轮仅核元数据，代码和论文对应关系未确认，降为观察项，不计已验证方法。

## 5. 光伏功率预测最新研究

### 2026-10-08｜决策层多模态融合超短期预测（新增）

来源：[Energy Engineering 官方在线页](https://www.techscience.com/energy/online/detail/28550)，Published online 08 October 2026；最早预印本日期不确定。

一路先预测云图再回归功率，另一路用多源气象数据与 CatBoost 直接预测功率，最终固定权重融合。**光伏预测高，foundation model / Agent / reasoning 低**；“决策层”指输出融合，不代表自主推理。已核期刊在线日期与摘要，未核代码和跨站点泛化，按期刊新发表收录，首发优先级降低。

## 6. 检索范围、过滤与证据边界

- [DailyArXiv master](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 本轮标注 Last update 2026-10-09；Time Series 顶部最新列表日为 10-07。列表日期混合首发与修订，关键条目均回 arXiv 提交历史核验。
- 检出 10-07 首发的[差分隐私合成窗口拼接评测](https://arxiv.org/abs/2610.10222)：重叠率、加权与下游模型共同影响预测效用，连续性改善不保证预测改善；**合成数据评测中，Agent / reasoning 低**，列作低优先级旁支。
- 时间窗严格按首次公开筛主列表；DailyArXiv 中 2024/2025/2026 年上半年旧稿修订不作为本次新研究。仅见 7 月会议月份而无具体日的边界条目不计确定窗内首发。
- 定向检索了 OpenReview / ICLR、ACL、NeurIPS、PMLR / ICML、KDD 与 AAAI；结果包括旧投稿、会议页面和教程，未得到比主列表更新且日期已核的高相关论文。不声称会议全量覆盖。参照：[KDD 教程](https://kdd2026.kdd.org/tutorials/)、[NeurIPS 2026 列表](https://neurips.cc/Downloads/2026)、[ACL 检索命中](https://aclanthology.org/2026.findings-acl.1722/)。
- GitHub Search：timeseries agent、time-series agent、automl agent、harness machine learning，均限制 created:2026-07-09..2026-10-09、按 updated 排序各取前 5；另查光伏前 3。成功返回，不代表全量扫描；剔除个人主页、数据库及线缆 harness 等语义误命中。未依据 Trending 排名作结论。
- [AI HOT](https://aihot.virxact.com) 技能近七天论文精选返回 14 条，作为机构线索补检，未据此增加直接时序研究。聚合内容不替代论文原站证据。
- 研究优先建议：先把预处理和轨迹分歧纳入 EvoCast 类候选评估，再用 COMMON-TSQA 检查解释依据；MCP 接入先核时间切分、协变量可得性和调用成本。

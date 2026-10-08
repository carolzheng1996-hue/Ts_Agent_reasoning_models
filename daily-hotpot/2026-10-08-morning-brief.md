# 时间序列研究晨间简报｜2026-10-08

- 检索截止：2026-10-08 09:51（Asia/Shanghai）。本轮跨日执行，按完成阶段的当天日期归档。
- 三个月窗口：2026-07-08 至检索截止。论文日期采用 arXiv v1 的 UTC 日期，修订日期另列；博客采用页面发布日期。日期不确定者仅作低优先级线索。
- 去重基线：本地与远端最新晨报为 9 月 25 日；自动化标示上次运行于 10 月 5 日，但记忆中没有对应产出，因此“本轮补录”不代表当天首发。
- 所有性能判断均来自作者报告，本轮核验摘要、日期及部分项目说明，未运行模型、未复现实验。今天周四，不生成周报。

## 1. 今日重点

优先阅读 **TSHarness、EvoCast、COMMON-TSQA**：分别对应“感知与推理怎样分工”“自动研究怎样约束评估权限”“答案是否真正使用序列证据”。基础模型方面，**ScaleIn** 提醒我们检查损失尺度，**FreshCast** 强调部署后记忆刷新，反事实系统辨识评测则揭示预测器不一定能正确回答控制输入变化的问题。下列各节提供原始来源。

## 2. 时间序列基础模型最新研究

### 2026-10-06｜反事实输入下的上下文辨识衰减（本轮补录）

- **来源**：[arXiv 2610.08118](https://arxiv.org/abs/2610.08118)，v1 10 月 6 日。
- **摘要**：在有精确反事实的受迫系统中比较 Chronos-2、TimesFM-2.5、TabPFN-TS 与传统系统辨识。作者发现部分默认协变量接口不能表达动态响应，Chronos-2 也会低估响应；合成受迫系统微调有所修复，但四个实测装置中三个仍由传统方法占优，且存在单变量预测能力损失。
- **相关性判断**：**TSFM 高、Agent 控制与反事实 reasoning 高**；属于诊断和适配研究，不能把普通预测精度外推为干预有效性。建议在 Agent 的 what-if 工具评测中保留传统 ARX 对照。

### 2026-10-06｜FreshCast：冻结预测器的记忆刷新（本轮补录）

- **来源**：[arXiv 2610.07834](https://arxiv.org/abs/2610.07834)，v1 10 月 6 日，v2 10 月 7 日；本轮未比较版本差分。
- **摘要**：保持预测器冻结，持续将新揭示的观测加入非参数记忆，以关系核回归形成记忆预测，在验证段校准融合权重。作者在七个基准、十种架构上报告改善，冻结训练结束时的记忆会损失大部分增益。
- **相关性判断**：**TSFM 适配高、Agent 记忆机制高、语言 reasoning 低**。它是检索插件，不是自主 Agent 或新预训练骨干；应用时需核对多步标签何时可用于记忆更新。

### 2026-10-05｜Scale-Invariant Training / ScaleIn（本轮补录）

- **来源**：[arXiv 2610.07324](https://arxiv.org/abs/2610.07324)，v1 10 月 5 日。
- **摘要**：分析归一化后反变换再计算损失导致高尺度序列主导梯度的问题；在相应缩放器与齐次损失假设下，改为在缩放目标上计算损失可使优化轨迹对各序列独立缩放保持不变。四种架构的预训练比较支持该方法。
- **相关性判断**：**TSFM 训练高、AutoML 实验控制高、显式 reasoning 低**。值得将损失计算域纳入训练配置记录；不能把有条件的理论结论泛化至任意归一化和任意损失。

## 3. 时间序列建模 Agent 最新研究

### 2026-10-04｜TSHarness：解耦感知和推理的零样本时序问答（本轮补录）

- **来源**：[arXiv 2610.04942](https://arxiv.org/abs/2610.04942)，v1 10 月 4 日；[方法正文](https://arxiv.org/html/2610.04942v1)。
- **摘要**：用结构化 Time-Series Perception State 汇总数值工具的统计与时序特征；可复用分析知识记忆与学习得到的工具选择器指导感知，回答 Agent 根据问题进行语义推理，证据不足时反馈重新感知。
- **相关性判断**：**时序 Agent / reasoning / harness 均高，TSFM 中低**。论文的零样本指无需目标侧训练或答案反馈，不能理解为整个系统没有学习组件；主要任务是问答，尚不能推导长跨度预测收益。

### 2026-10-03｜EvoCast：迭代演化预测架构的自主研究 Agent（本轮补录）

- **来源**：[arXiv 2610.04517](https://arxiv.org/abs/2610.04517)，v1 10 月 3 日；[官方代码](https://github.com/18e0-x/EvoCast)。
- **摘要**：先建立任务基线并运行机制消融，再用数据特征、既往结果和失败记录指导架构修改。LLM 负责假设及代码，确定性程序负责编辑边界、规范评估与晋级决策。作者在三个真实预测案例中报告效果。
- **相关性判断**：**建模 Agent / AutoML / 实验 harness 高，研究推理高，TSFM 中**。最值得借鉴的是评估权限隔离；仍需审计反复使用验证集的选择偏差，不能将三个案例视为通用领先证据。

## 4. 时间序列 reasoning 模型最新研究

### 2026-10-05｜COMMON-TSQA：系统是否真正读取时间序列？（本轮补录）

- **来源**：[arXiv 2610.05686](https://arxiv.org/abs/2610.05686)，v1 10 月 5 日。
- **摘要**：统一已有公开问答数据的表示与答案格式，在原始输入及六类干预条件下评测 TimeOmni-1、ChatTS、TimeOmni-VL、Time-MQA，并检查解释的事实依据、中间推理和答案一致性。总体分数相似可能掩盖逐题预测变化，解释与答案一致也可能伴随错误数值描述。
- **相关性判断**：**reasoning 可靠性评测高、Agent 证据审计高、TSFM 中**。这是评测研究，不是新 reasoning 权重发布；适合用作 TSHarness 类系统的独立评测思路，但本轮未确认两者联合实验。

### 2026-10-04｜TSHarness（与上一节同一成果，不重复计数）

- **来源与日期**：[arXiv 2610.04942](https://arxiv.org/abs/2610.04942)，10 月 4 日。
- **摘要**：把数值证据提取与语义回答分开，并允许重新感知。
- **相关性判断**：**工具辅助 reasoning 高**。本轮确认的是框架方法；未核实独立通用时序 reasoning 模型权重的新发布。

## 5. GitHub 和 Hugging Face 上值得跟踪的新项目

### 时间序列及可迁移的 Agent、harness、machine learning、AutoML

窗口内版本动态与“新建仓库”分开记录；创建日期不能核实的项目降低工程采用优先级。本轮 GitHub API 限流，未取得完整创建日、推送日或星数快照。

| 日期与状态 | 来源 | 摘要与相关性判断 |
|---|---|---|
| 官方博客 2026-10-07；README 记载 v1.0 在 8 月已开源，技术报告为 8 月 19 日；属于窗口内版本解读，非当天首次开源 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning)；[微软研究院博客](https://www.microsoft.com/en-us/research/blog/agent-lightning-v1-0-a-3500-line-lightweight-agentic-rl-framework-for-training-agents-with-real-harnesses/) | 让实际部署 harness 通过代理接入 RL 训练，保留工具、上下文与控制流；**harness / Agent 训练高，时序直接证据低**。实验集中在代码等任务，不能外推时序收益。 |
| 关联论文 2026-10-03；仓库创建日期**不确定**，低优先级待复现 | [18e0-x/EvoCast](https://github.com/18e0-x/EvoCast) | 已核 README 与目录存在 evocast、ts_benchmark、tests、配置及依赖说明；**时序建模 Agent / AutoML 高**。需要 GPU、数据和模型服务配置；未运行代码。与上文论文合并计为一项研究。 |
| 首次公开/创建日期**不确定**；2026-10-08 核到公开说明，仅观察，不计已确认窗口内新建项目 | [Agenthon-2026/track2-forecasting-public](https://github.com/Agenthon-2026/track2-forecasting-public) | Docker Agent 结合带截止时间的金融序列与文本，输出未来分布，以 CRPS 等评分；**时序 reasoning / 评测 harness 高**。README 明确五个命名预测适配器当前为高斯随机游走脚手架，不能称 Chronos、TimesFM 等真实实现；现有评分也不单独计算文本消融收益。 |

Hugging Face 本轮未独立核实新权重/数据发布日期，不新增仅凭名称匹配的条目。AutoML 方向以 EvoCast 为主要新增线索，未确认更多日期可靠的新项目。

### 光伏功率预测

本轮未确认创建日期明确且有新实现证据的光伏 GitHub / Hugging Face 项目，不重复包装既有项目推送活动。

## 6. 光伏功率预测最新研究

### 2026-10-01｜Physics-informed sparse deep neural networks（低优先级线索）

- **来源**：[Scientific Reports 官方页面](https://www.nature.com/articles/s41598-026-74064-8)。官方检索结果标注发表日期 10 月 1 日；正文因站点跳转未成功获取，最早预印本公开日**不确定**。
- **摘要**：研究物理约束与稀疏深度网络结合的快速太阳能功率预测及快速频率响应支持。
- **相关性判断**：**光伏预测高，TSFM / 自主 Agent / 语言 reasoning 低**。仅保留研究线索，不转述未核实的性能或部署效果。

## 7. 检索记录、排除与下一步

- **arXiv**：[cs.LG recent](https://arxiv.org/list/cs.LG/recent) 本轮返回 10 月 7 日公告，读取首屏 50 条；另通过 DailyArXiv 定向核验上述论文的官方摘要与 v1。未全量覆盖全部学科和三个月论文，也未覆盖 10 月 8 日完整公告。
- **DailyArXiv**：[默认 README](https://github.com/zezhishao/DailyArXiv) 本轮获取版本显示 Last update 2026-10-08，Time Series 最新行日期 10 月 6 日。timeseries 分支返回未找到，回退 master；自动更新提交接口不可用，未核提交哈希。README 按版本更新时间列条目，本报告回到 v1，排除窗口外旧稿的近期修订。
- **会议来源**：定向搜索 OpenReview、ACL、NeurIPS、ICML/PMLR、KDD、AAAI。命中 CaTS-Bench、STReasoner 等会议版本，但未解决最早公开日与 7 月 8 日边界关系，不新增进窗口主清单；未形成这些会议的全量扫描。会议名称不代表录用已核实。
- **GitHub**：三组创建窗口查询覆盖 time-series agent、automl agent、harness machine learning，均受 API 限流；公开 Search 入口也未返回有效结果。已通过论文和官方博客核验项目 README；[Trending](https://github.com/trending) 返回页面，但未取得完整可用榜单，不报告排名。
- **机构博客与 AI HOT**：AI HOT 关键词补检提供 Agent Lightning 线索，已回到微软官方博客与 GitHub 交叉核验。其余无关资讯排除，不将聚合摘要当原文。
- **日期过滤**：Time-o1、FreDF、PyDPF 等虽在 10 月 6 日更新，但最早稿件在窗口外，不计最新首发。9 月已收录的 TimeEvo 与 TimeLitmus 不再作为今日新增重点。
- **建议关注**：先读 EvoCast 的评估权限设计与 TSHarness 的证据接口，再用 COMMON-TSQA 的干预思路设计独立验证。基础模型实验先检查 ScaleIn 所涉及的损失尺度，并为 FreshCast 保留严格的标签可得时间。这些是本简报的研究建议，尚未完成联合实验。

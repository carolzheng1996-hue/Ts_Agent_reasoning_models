# 2026-09-22 时间序列 Agent / Reasoning 晨间简报

检索时间：**2026-09-22 15:34 CST**；纳入窗口：**2026-06-22—2026-09-22**（含首日）。条目按首次可核验公开日期由近及远排列；arXiv 修订日期不代替 v1 日期。以下为相对 9 月 21 日晨报的增量，未复现实验。今天周二，不生成周报。

## 今日重点

- **新补充**：DailyArXiv 中的 KG-Chronos-2 和零样本预测证据审计框架，均为 9 月 18 日 arXiv 首版；前者把冻结的 Chronos-2 与图检索和残差校正结合，后者要求明确预训练、检索及预测时上下文的证据边界。
- **Agent / reasoning**：本次未核实比昨日收录的 AutoRecLab、WaveTLM 更新且直接面向时间序列的独立 Agent 或 reasoning 模型。两篇新补论文分别可为 Agent 检索和评测提供方法，但不应称为新 Agent 模型。
- **光伏 / 光功率**：未核实比 9 月 17 日更新、且具有明确首发日期的直接预测论文；保留昨日已核实的近期光伏研究作为追踪项。

## 1. 时间序列基础模型研究

### [2026-09-18] KG-Chronos-2：水动力代理预测

- **来源与日期**：[arXiv 2609.21381](https://arxiv.org/abs/2609.21381)，v1 为 **2026-09-18 06:50 UTC**；[DailyArXiv Time Series](https://github.com/zezhishao/DailyArXiv#time-series) 同日条目。
- **摘要**：在冻结的 Chronos-2 上加入图条件历史检索、精确状态残差解码及输入对齐校正，用 HEC-RAS 水位模拟中的固定 24 小时窗口评估。作者报告相对冻结模型的事件均衡 RMSE 降低 14.13%；这是特定水动力基准上的作者结果。
- **相关性**：**TSFM 高，检索增强时序 Agent 中高，显式 reasoning 中，光伏功率低**。可借鉴“预测骨干 + 领域知识 + 残差校正”结构；尚无跨域或光伏验证。

### [2026-09-18] 零样本时序预测的证据来源审计

- **来源与日期**：[arXiv 2609.21425](https://arxiv.org/abs/2609.21425)，v1 为 **2026-09-18 07:38 UTC**；[DailyArXiv Time Series](https://github.com/zezhishao/DailyArXiv#time-series) 同日条目。作者标注 ACM AI Summit 2026 接收，会议更早公开时间未核实。
- **摘要**：区分冻结 LLM 先验、时序预训练参数、外部检索记忆三类零样本证据来源，并要求报告任务接口、预测对象和评分、预测时上下文及资源预算。
- **相关性**：**TSFM 评测 / Agent harness 高，推理证据审计高，直接光伏预测中**。这是分类与审计框架，不是新预测模型；适合用来核查 Agent 是否在推理时获得额外历史或检索数据。

## 2. 时间序列建模 Agent 研究

本次定向检索未核实新的直接时序建模 Agent 论文。持续跟踪 **[2026-09-18] [AutoRecLab](https://arxiv.org/abs/2609.21863)**：自然语言实验要求经检索、静态类型检查和执行反馈形成实验搜索；**Agent / AutoML 高，时序直接证据低**。其日期、摘要与局限已在[昨日晨报](/Users/monychen/Documents/timeserie_research/Ts_Agent_reasoning_models/daily-hotpot/2026-09-21-morning-brief.md)记录，本次不重复计新增。

## 3. 时间序列 reasoning 研究

本次未核实新首发的通用时序 reasoning 模型。持续跟踪 **[2026-09-16] [WaveTLM](https://arxiv.org/abs/2609.18812)**：把自然语言时序任务编译为带类型的状态，再生成合法数值或标签；**时序任务推理与输出验证高，光伏直接证据低**。上述 9 月 18 日的零样本证据框架可作为 reasoning 评测约束，但本身不生成推理轨迹。

## 4. GitHub 项目：timeseries Agent / harness / ML / AutoML

本次未核实符合窗口且可判断实现成熟度的新仓库。保留两个已核实项目，按仓库创建日期排列：

- **[2026-09-18] [HFJ0624/KDAgent](https://github.com/HFJ0624/KDAgent)**：工业时序根因候选的 RAG、数据分支及融合实现；**时序 Agent / reasoning harness 高，预测与 TSFM 低**。昨日源码审查发现其 `validation_passed` 主要表明存在合法候选，不保证数值证据或因果正确。
- **[2026-08-27] [pvd232/viper](https://github.com/pvd232/viper)**：保存实验计划与运行证据的通用 ML harness；**Agent 实验可追溯高，时序适配中，光伏直接证据低**。已核 CPU 示例，尚未独立验证核心哈希和防泄漏能力。

[GitHub Trending](https://github.com/trending)、[GitHub 仓库搜索](https://github.com/search?q=time+series+agent&type=repositories)与 [Hugging Face 模型搜索](https://huggingface.co/models?search=time%20series)本次未提供足以确认“今日新项目/模型”的创建或首发证据，因此不把热度与最近推送当作新发布。

## 5. 光伏功率与光通信光功率预测

本次未核实新增直接预测研究。近期可继续检查以下已收录条目的数据划分与起报时输入可得性，按首次公开日期排序：

- **[2026-09-17] [IWOA-TCN-BiGRU-MATT](https://www.techscience.com/CMES/online/detail/28334)**：混合模型用于不同天气的短期光伏预测；**光伏高，自动调参 Agent 中，TSFM / reasoning 低**。出版商在线发表日为 9 月 17 日，早期预印本日期未核实。
- **[2026-09-16] [离网光伏功率预测与性能评估](https://www.mdpi.com/2673-9941/6/5/60)**：多变量 LSTM 利用运营数据预测提前 10 分钟功率；**光伏高，Agent 调度工具中，TSFM / reasoning 低**。官方页面日期为 9 月 16 日，完整时间划分仍待核验。
- **[2026-09-16] [TCN–XGBoost–LSTM stacking](https://sciforum.net/paper/33668)**：15 分钟数据的日前预测会议摘要；**光伏 / 集成选模高，显式 reasoning 低**。需核元学习器是否使用训练折外预测；9 月 21–22 日会议日期不代替 9 月 16 日页面发表日期。

光通信光功率补检未核实窗口内新增直接预测论文；[多 Agent 光功率优化](https://arxiv.org/abs/2606.05795)的 v1 为 **2026-06-04**，已超出本窗口，且优化不等同于功率预测。

## 6. DailyArXiv 必检结论与检索边界

- [zezhishao/DailyArXiv README](https://github.com/zezhishao/DailyArXiv) 明示 **Last update: 2026-09-22**。已检查 `Time Series` 小节；其最新可见条目日期为 **2026-09-18**。KG-Chronos-2 和零样本证据审计框架均在窗口内，已补充到正文。
- 同一小节的 [ISOMORPH](https://arxiv.org/abs/2605.12768) 标为 9 月 18 日，但这是 **v3**；v1 为 **2026-05-12**，已超窗。 [Fidel-TS](https://arxiv.org/abs/2509.24789) 也标为 9 月 18 日修订，v1 为 **2025-09-29**。两者相关但按首发日期降优先级，不列入窗口正文。
- 检索覆盖 arXiv、DailyArXiv、GitHub、Hugging Face 定向入口及近期出版商页面；本次未得到可核验的 OpenReview 或主要会议新首发条目。以上“未核实”是检索结果，不代表主题领域绝无更新。

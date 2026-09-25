# 2026-W39 时间序列研究周报

汇总范围：**2026-09-21 至 2026-09-25（周一至周五）**。生成时间：**2026-09-25 12:30 CST**。研究窗口按周五统一为 **2026-06-25 至当前**；以下重点均在窗口内。本周“新增”指首次收录，包含早间版和下午补充版，不等于本周首发。周一至周四结论来自本地各日核验记录，未把今天未重核的项目写成今日更新。

## 1. 本周研究重点

| 首发日期 | 研究与原始来源 | 摘要、相关性与判断边界 |
|---|---|---|
| 2026-09-24 | [SwitchPFN](https://arxiv.org/abs/2609.29814) | 共享动态表征接入冻结表格基础模型，面向时序分类。**基础模型适配高，Agent 专家中，reasoning 低**；不是新通用预测骨干。 |
| 2026-09-23 | [TimeEvo](https://arxiv.org/abs/2609.27277) | 从失败中生成证据工具，并检查新工具库修复与破坏的答案。**时序 Agent / reasoning / harness 高**；代码可用性尚未核实。 |
| 2026-09-22 | [TimeInteract](https://arxiv.org/abs/2609.26389) | 持续感知流式时序，决定沉默或响应，并在回答时继续接收数据。**交互 Agent / 时序理解高**；不等于完成自动建模闭环。 |
| 2026-09-22 | [Interweaving Marginals](https://arxiv.org/abs/2609.25980) | 冻结 TSFM、保留预测边际，单独重建跨时间与变量依赖。**概率 TSFM / 决策场景工具高，语言 reasoning 低**；边际校准不等于联合路径可靠。 |
| 2026-09-22 | [Growing Harness](https://arxiv.org/abs/2609.26760) | 从失败轨迹改进共享控制代码，以留出任务决定接受或回滚。**harness 高，时序直接证据低**；属于通用 Agent 借鉴。 |
| 2026-09-21 | [TimEvolve](https://arxiv.org/abs/2609.24862) | 未来结果揭示后更新专家信任、路径与干预策略。**时序建模 Agent / 策略 reasoning 高**；必须保持预测、揭示、更新的时间顺序。 |
| 2026-09-21 | [t₀](https://arxiv.org/abs/2609.24559) | 历史及已知未来协变量条件下的多变量分位数预测。**TSFM / Agent 数值工具高，显式 reasoning 低**；起报可得性仍是应用前提。 |
| 2026-09-21 | [TimeLitmus](https://arxiv.org/abs/2609.24677) | 反事实与对照干预核对跨模态理解和解释忠实性。**reasoning 评测 / Agent 证据核验高**；属于基准，不是新推理模型。 |
| 2026-09-21 | [RRSI](https://arxiv.org/abs/2609.24972) | 约束 harness 自改进预算和基准特定逻辑。**harness / AutoML 高，时序直接证据低**；迁移需要时间留出与跨数据集验证。 |
| 2026-09-17 | [FreqCondNorm](https://arxiv.org/abs/2609.20535) | 频率条件归一化用于跨采样率工业信号预训练。**工业基础模型高，Agent 选模中高**；故障诊断收益未延伸到剩余寿命预测，需核预训练与评测数据重叠。 |

本周应关注三种不同的更新对象：**TimEvolve 更新调度策略，TimeEvo 更新工具库，Growing Harness / RRSI 更新控制代码**。这是跨论文整理，不是已完成的统一实验。建议下一步先比较简单重新验证选模、固定工具与带门禁更新，记录修复率、破坏率、失败调用率和成本，再讨论平均准确率收益。

## 2. 本周新增收录的 GitHub 项目

日期为仓库创建日（UTC），来源为本周晨报保存的官方元数据核验；不代表首次公开代码日。按日期从近到远列主要项目，未运行复现。

| 创建日期 / 首次收录日 | 项目 | 内容、相关性与限制 |
|---|---|---|
| 2026-09-23 / 09-24 | [BuiltByDu/AdaptAD](https://github.com/BuiltByDu/AdaptAD) | 异常初筛后调用图表、数值与相似片段工具调整分数。**时序 Agent / reasoning 高**；有源码抽查，ICASSP 2027 仅投稿，效果未复现。 |
| 2026-09-23 / 09-24 | [mert-at-msft/chronos2-forecasting-workshop](https://github.com/mert-at-msft/chronos2-forecasting-workshop) | Chronos-2 端点、评测和 Agent 调用教程。**TSFM 工具集成高，AutoML 中**；合成数据与替代模型回退需区分。 |
| 2026-09-23 / 09-24 | [NirmalKumar31/aml-evaluation-harness](https://github.com/NirmalKumar31/aml-evaluation-harness) | 按日告警预算、基线与结果溯源。**ML harness 高，时序评测中高**；AML 是反洗钱，非 AutoML，关联旧仓库且完整回放包未分发。 |
| 2026-09-22 / 09-23 | [alikiany80/evots-agent](https://github.com/alikiany80/evots-agent) | 变点建模规格与代码演化的第三方实现。**时序 Agent / harness 高**；非论文官方代码，smoke 使用模拟 proposer。 |
| 2026-09-22 / 09-23 | [timescale/agent-observability-workshop](https://github.com/timescale/agent-observability-workshop) | 记录调用、延迟、成本、错误的 SQL / 看板教程。**Agent 运行观测高，建模 reasoning 低**。 |
| 2026-09-18 / 09-21 | [HFJ0624/KDAgent](https://github.com/HFJ0624/KDAgent) | 工业根因候选的 RAG 与数据分支融合。**时序 Agent / reasoning 高**；结构合法不等于数值证据或因果正确。 |
| 2026-09-16 / 09-23 | [google-research/rrsi](https://github.com/google-research/rrsi) | RRSI 官方 harness 改进实现。**ML 实验管理 / harness 高**；未验证时序专用协议。 |
| 2026-09-14 / 09-24 | [guruvaidev/avaloka](https://github.com/guruvaidev/avaloka) | 分析、验证、执行、训练和推理的 Agent 编排。**ML / AutoML 高，时序直接证据低**。 |
| 2026-08-27 / 09-21 | [pvd232/viper](https://github.com/pvd232/viper) | 计划与运行证据的实验 harness。**可追溯实验高，时序适配中**；CPU 示例不能证明完整防泄漏或哈希机制正确。 |
| 2026-08-26 / 09-23 | [aooty/automl-agent-share](https://github.com/aooty/automl-agent-share) | 规划、训练、诊断循环。**AutoML Agent 高，时序即用性低**；抽查采用随机或按组切分，并可能回退规则规划。 |

**新增待核线索**：[Muyiiiii/TimeEvo](https://github.com/Muyiiiii/TimeEvo)，论文于 **9 月 23 日**链接，仓库创建与发布日期**不确定**，9 月 25 日首次记录。研究相关性高，工程优先级暂降；不计已核实可运行新仓库。

## 3. 光伏补充与项目去重

- **2026-09-23**：[CIPformer](https://link.springer.com/article/10.1007/s44443-026-01285-2)，日内分解与通道关系建模；**光伏预测高，Agent 数值专家中，reasoning 低**。官方索引确认日期，更早版本不确定，低优先级。
- **2026-09-22**：[迁移学习与 CQR](https://arxiv.org/abs/2609.26959)，少历史光伏区间预测；**概率预测高，Agent 风险工具中，通用 TSFM 低**。目标域为模拟孟加拉数据，更早会议公开日不确定，不能外推为真实场站验证。
- **创建 2026-09-21，本周首次收录**：[Italo-1/equatorial-photovoltaic-forecasting](https://github.com/Italo-1/equatorial-photovoltaic-forecasting)，多模型光伏评测；**光伏 / harness 中高，Agent 低**。原 `05-mev-P3` 疑似改名，不计两个新项目；从占位观察升级为有脚本、未复现。
- **创建 2026-08-24，9 月 24 日首次收录**：[RuiCkg/ai-powered-energy-forecasting](https://github.com/RuiCkg/ai-powered-energy-forecasting)，本地负荷 / 光伏 ML 原型；**光伏评测高，Agent / TSFM 低**。已抽查时间边界切分，但仍是一步历史验证。

## 4. 本周来源与下周优先事项

逐日明细：[周一](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-21-morning-brief.md)、[周二](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-22-morning-brief.md)、[周三](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-23-morning-brief.md)、[周四](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-24-morning-brief.md)、[周五（本轮待推送）](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-25-morning-brief.md)。周一至周四采用本地已存版本；当前环境无法同步远端，可能遗漏尚未拉取的补充。

1. 核实 TimeEvo 官方仓库与测试隔离，检查工具执行失败是否进入门禁分母；不要只看净平均收益。
2. 围绕 t₀ 的未来协变量可得性、TimeInteract 的实时延迟、TimeLitmus 的干预一致性，设计分开的验收条件。
3. AutoML 工程先检查时间切分、回退策略与真实模型调用，再评估预测效果。
4. 对 `2609.29715` 的编号月份与详情页 v1 日期差异继续核查；不把公告日替代首发日。本周已记录的撤回 `2609.22836` 不纳入推荐。

检索限制与未复现声明见各日报。本周无基于独立复现实验的性能结论。今天 SSH key 加载和远端同步受运行环境限制，先完成本地报告及提交，实际推送结果见任务完成说明。

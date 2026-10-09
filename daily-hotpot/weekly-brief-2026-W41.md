# 时间序列研究周报｜2026-W41

范围：2026-10-05 至 2026-10-09（周一至周五）；汇总时间：2026-10-09 09:00 CST。研究筛选窗口：2026-07-09 至检索时刻。

## 本周资料覆盖

仓库现有工作日晨报仅有 [10 月 8 日](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-08-morning-brief.md) 与 [10 月 9 日](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-09-morning-brief.md)。10 月 5—7 日缺档；本周总结只覆盖已有两份，不推断缺档期间没有研究发布。旧报告重复条目按论文 ID 去重。

## 本周研究重点

| 日期与来源 | 摘要 | 与三条主线的关系 |
|---|---|---|
| 10-07，[WxFM-XL](https://arxiv.org/abs/2610.10057) | 融合空间图与站点误差先验，适配单变量模型到多站点预测；周五新增。 | TSFM 高，Agent / reasoning 低。 |
| 10-07，[Temporal Predictive Multiplicity](https://arxiv.org/abs/2610.09994) | 近似相同误差仍对应不同预测轨迹；周五新增。 | Agent 选模评测高，TSFM 中。 |
| 10-06，[预处理评测](https://arxiv.org/abs/2610.09096) | 比较可逆预处理流程，说明模型排名与预处理选择纠缠；周五补录。 | AutoML / harness 高，reasoning 低。 |
| 10-05，[ScaleIn](https://arxiv.org/abs/2610.07324) | 在缩放目标上计算损失以减少尺度偏置；两日报共同重点。 | TSFM 高，训练流程中。 |
| 10-05，[COMMON-TSQA](https://arxiv.org/abs/2610.05686) | 用输入干预与解释审查检验证据使用。 | reasoning / Agent 可靠性高，非新模型权重。 |
| 10-04，[TSHarness](https://arxiv.org/abs/2610.04942) | 数值工具构建证据状态，推理 Agent 可反馈重感知。 | Agent / reasoning / harness 高。 |
| 10-03，[EvoCast](https://arxiv.org/abs/2610.04517) | 自主提出和实现预测架构，确定性程序掌握评估晋升。 | 时序建模 Agent / AutoML 高。 |
| 09-30 首发、10-07 v2，[TeeMoE](https://arxiv.org/abs/2609.40265v2) | 低秩专家统一预测、聚合与分析；周五重核修订和模型入口。 | TSFM / reasoning 高，未比较修订差分。 |

这些工作共同提示：除数值误差，还应记录预处理、预测轨迹、工具证据和候选晋升依据。此为跨论文综合判断，不是已经复现的统一系统。

## 本周新增 GitHub 项目

“新增”指本周晨报收录，不保证本周创建。四个周五新收录项目均已用 GitHub API 核创建日期并阅读 README；尚未运行。

| 创建日期 UTC | 来源 | 摘要与相关性 |
|---|---|---|
| 10-08 | [Kaggle Grandmaster](https://github.com/TranBaDat2607/claude-code-kaggle-grandmaster) | 竞赛验证、实验记录、时序 playbook；ML Agent / harness 高，时序中高，成绩未核。 |
| 10-08 | [Multi-Agent-Data-Analyst](https://github.com/tanyaverma20/Multi-Agent-Data-Analyst) | 剖析到验证与 Notebook 的 AutoML 流程；通用 Agent 高，时序中低。 |
| 10-07 | [EpochGo](https://github.com/AryanDinakaran/EpochGo) | 本地多 Agent 表格建模及服务生成；AutoML 高，时间切分未确认。 |
| 10-04 | [Ephemeris MCP](https://github.com/TensorLink-AI/ephemeris-mcp) | TSFM 预测和集成的远端 MCP 服务入口；时序 Agent 接入高，需服务额度。 |

周四项目重点：[EvoCast](https://github.com/18e0-x/EvoCast)（10-03 论文；当日正文将首次代码日期列为不确定）与 [UniScale](https://github.com/Fifthky/UniScale)（10-04 论文；首次代码日期不确定），分别对应受控架构演化与模型容量/上下文缩放研究；前者 Agent / AutoML 高，后者 TSFM 高。两者不计本周已核新建仓库。[Agenthon forecasting](https://github.com/Agenthon-2026/track2-forecasting-public) 日期不确定，时序评测相关性高，但命名模型适配器仅为随机游走脚手架，继续降优先级观察。

## 光伏补充与下周重点

**10-08 期刊在线发表**：[决策层多模态融合](https://www.techscience.com/energy/online/detail/28550)，云图预测与气象 CatBoost 固定权重融合，光伏相关性高，Agent / reasoning 低；最早预印本日期不确定。新仓库 [QEFSF](https://github.com/SunawarKhan/QEFSF-for-Solar-Photovoltaic-Generation-Forecasting) 于 10-08 创建，仅核元数据，暂无说明，方法及 Agent 相关性不确定。

下周优先核验 EvoCast 晋升中的时间隔离、Kaggle 插件时序验证实现、Ephemeris 服务与本地模型对照条件；将 COMMON-TSQA 的证据干预与数值预测的轨迹评测分别记录。全部实验效果仍待独立复现。

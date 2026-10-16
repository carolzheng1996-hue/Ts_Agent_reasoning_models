# 时间序列研究周报｜2026-W42

- 覆盖工作日：2026-10-12 至 2026-10-16；汇总时间：2026-10-16T08:58:39+08:00。
- 纳入研究窗口：2026-07-16 至本次汇总。基于本周五份晨报（含已同步的下午增量）；日期是论文首发或软件创建/版本日，非收录日。
- 本周最值得关注的是冻结模型外围的自动改进与证据控制。新仓库数量不等于成熟系统数量；以下性能与能力均保留原晨报的作者报告和未复现边界。

## 1. 基础模型与适配重点

| 日期 | 来源 | 摘要与相关性判断 |
|---|---|---|
| 2026-10-14 | [TEX-MEX](https://arxiv.org/abs/2610.19557) | 结合形态与时间邻近的对比学习，含小型 PPG 模型。**传感器 TSFM 高，Agent 感知中，reasoning 低**；开放权重尚未确认。 |
| 2026-10-14 | [TTF](https://arxiv.org/abs/2610.19552) | 递归深度用于未见动力系统预测。**动力学基础模型高，推理时计算相邻，Agent 低**；不能外推为语言 reasoning。 |
| 2026-10-13 | [GIFT-Eval-CTX](https://arxiv.org/abs/2610.17794) | 评测 TSFM、LLM、Agent 对未来上下文的利用。**TSFM/Agent 评测高**；由已实现未来构造的效应不等于线上可提前得到的信息。 |
| 2026-10-12 | [IND-Eval](https://arxiv.org/abs/2610.16652) | 工业来源级评测与仿真配方研究。**TSFM/Agent 自动评测高，reasoning 低**；领域收益与通用性能权衡需同时报告。 |
| 2026-10-12 | [ECHO](https://arxiv.org/abs/2610.16433) | 历史相似片段和近期误差共同校正冻结骨干。**TSFM 适配高，Agent 反馈中高，reasoning 低**；关注残差标签何时可得。 |

## 2. Agent 与 harness 重点

| 日期 | 来源 | 摘要与相关性判断 |
|---|---|---|
| 2026-10-14 | [TimeRSI](https://arxiv.org/abs/2610.19725) | 编码 Agent 修改部署流程，完成预测的反馈用于流程选择。**TS Agent/TSFM/harness 高**；骨干冻结与系统零样本应分开，优先复核历史适配、后续评测与反馈延迟。 |
| 2026-10-14 | [RAMSAD](https://arxiv.org/abs/2610.20243) | 检索相似序列的检测器表现以选模。**时序 AutoML 高，Agent 工具中高，reasoning 低**；提供非 LLM 基线。 |
| 2026-10-13 | [Agentic4PDM](https://arxiv.org/abs/2610.17786) | host 对工具批次与诊断证据设约束。**时序诊断 Agent/证据推理高，TSFM 低**；仍依赖带标签参考。 |
| 2026-10-12 | [ChronoScribe](https://arxiv.org/abs/2610.16345) | LLM 提出配置、TSFM 产生数值、确定性摘要支撑回答。**时序 Agent/TSFM 接口高，多步 reasoning 中低**。 |
| 2026-10-10 | [World2TS](https://arxiv.org/abs/2610.14861) | Agent 检索并校验事件与序列的关联。**外部证据 Agent 高，基础模型本体低**；区分事件日、报道日与预测时点。 |
| 2026-10-08 | [Training on the Future](https://arxiv.org/abs/2610.12232) | 延迟标签下的测试时适配审计。**时序评测 harness 高**；为本周自动反馈工作提供协议检查视角。 |

## 3. Reasoning 重点

| 日期 | 来源 | 摘要与相关性判断 |
|---|---|---|
| 2026-10-13 | [MMTA / TimeOmni-v](https://arxiv.org/abs/2610.17856) | 联合视觉、文本与时序的理解及预测基准。**多模态证据对齐高，显式/潜在多步 reasoning 中低**。 |
| 2026-10-08 | [Lapras](https://arxiv.org/abs/2610.11111) | 隐状态对齐学习连续空间推理。**时序 reasoning 高，Agent 组件中高**；本周持续重点，周五无确认的更晚直接推理模型新增。 |
| 2026-10-05 | [COMMON-TSQA](https://arxiv.org/abs/2610.05686) | 检验问答系统是否真正依赖序列。**时序 reasoning 评测高**；答案正确与利用信号证据应分开验证。 |

## 4. 本周新增 GitHub 项目与资源

“新增”指本周归档首次收录的精选项目，表内按创建日排序，不将版本更新或重复命中算作新建仓库。日期未知项另列。项目均未在本周简报任务中运行复现。

### 时间序列、machine learning、AutoML 与 harness

| 创建日期 | 来源 | 摘要、相关性与边界 |
|---|---|---|
| 2026-10-14 | [TimeRSI](https://github.com/haoxin1998/TimeRSI) | **时序 Agent/TSFM/harness 高**；部署搜索与组合代码，需 GPU、Docker、云模型。与论文合并计成果。 |
| 2026-10-14 | [Adversarial Quantitative Evaluation Suite](https://github.com/Riteek0/Adversarial-Quantitative-Reasoning-Statistical-Evaluation-Suite) | **统计 reasoning/ML harness 中高**；当前入口比较预置函数，不是完整真实 LLM 评测。 |
| 2026-10-14 | [awesome-geospatial-automl](https://github.com/JamesEBall/awesome-geospatial-automl) | **地理空间 AutoML/Agent 中高，时序中低**；资源目录，不是运行系统。 |
| 2026-10-14 | [churn-data-agent](https://github.com/Adityaverma0245/churn-data-agent) | **通用工具 Agent 中，时序低**；演示成绩来自规则规划器和合成数据。 |
| 2026-10-12 | [ITMO AutoML architecture study](https://github.com/ITMO-NSS-team/llm-automl-architecture-study) | **ML/AutoML/harness 高，时序中低**；558 次试验轨迹与评分文件，论文首次公开日期不确定。 |
| 2026-10-12 | [ML_Harness](https://github.com/HSM-03/ML_Harness) | **ML 实验约束高，时序迁移中**；目前仅二分类，回归是计划项。 |
| 2026-10-11 | [awesome-agentic-ml](https://github.com/vicfei/awesome-agentic-ml) | **ML Agent/AutoML 中高，时序低**；训练、数据、蒸馏线索目录，旧资源不因目录新建而算新研究。 |
| 2026-10-09 | [elham-skills](https://github.com/Elham-AI/elham-skills) | **AutoML 接入中高，时序支持不确定**；远端服务 skill/helper，不是本地开源训练引擎。 |
| 2026-10-07 | [agent-scientist-medmnist](https://github.com/habib-analyst/agent-scientist-medmnist) | **ML 消融 harness 中高，时序低**；默认规则驱动，小型 CPU 实验，GPU 规模结果未验证。 |

日期不确定、低优先级工程观察：[Training on the Future 代码](https://github.com/Xodios/TRAINING-ON-THE-FUTURE-A-DELAY-AWARE-AUDIT-OF-TEST-TIME-ADAPTATION-FOR-TIME-SERIES-FORECASTING)，论文 10 月 8 日、仓库创建日未确认；**时序 harness 高相关**，提供审计补充材料，不计已确认窗内新仓库。[automl-research](https://github.com/ParasKoundal/automl-research) 描述实验迭代与日志，**通用 AutoML 高、时序能力待核**；创建日不确定，不计确认新项目。

### 光伏功率预测

| 创建日期 | 来源 | 摘要与相关性判断 |
|---|---|---|
| 2026-10-15 | [EMS-TEMP](https://github.com/totalquan/EMS-TEMP) | NWP 预测与 MPC 工程，**光伏高，AutoML 中，TSFM/reasoning 低**；昨日代码检查发现归一化和切分边界需改进。 |
| 2026-07-28 | [RampSense](https://github.com/ArchandS/rampsense) | 超短期功率与爬坡事件研究，**光伏 ML 高，Agent/TSFM 低**；部分改进仍是路线图。 |

[PV_ELM_pred](https://github.com/cyrilvoyant/PV_ELM_pred)（2026-07-22 创建）本周只是补全日期，不计新增：多站点预测基线，**光伏评测高、Agent 低**。

## 5. 光伏研究与下周优先事项

- **2026-10-13 公开**：[无电站元数据的概率残差校正](https://www.preprints.org/manuscript/202610.1212)。已发布预测与历史误差驱动 LightGBM，含 Chronos-2 对照；**光伏/TSFM 基线高、Agent 反馈中高**。10 月 12 日是提交日，尚未同行评审。
- **2026-10-12**：[SatPV-Field](https://arxiv.org/abs/2610.16110)。区域发电场结合卫星与气象输入；**光伏时空预测高、Agent 工具中、reasoning 低**。跨站留出不能替代时间可得性检查。
- 建议先复现 TimeRSI 的最小任务，记录每次候选修改、可见标签、选择反馈与预算，再加入 ECHO/RAMSAD 等简单对照；未在本次执行复现。
- Reasoning 方向优先把 Lapras 与 COMMON-TSQA 的信号依赖检查结合。部署方向将 ChronoScribe 的数值执行边界和 Agentic4PDM 的证据准入作为工程对照，不直接推断组合后必然提升性能。

## 6. 本周来源与覆盖边界

工作日归档：[12 日](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-12-morning-brief.md)、[13 日](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-13-morning-brief.md)、[14 日](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-14-morning-brief.md)、[15 日](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-15-morning-brief.md)、[16 日](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-16-morning-brief.md)。

本周使用 arXiv 原页、DailyArXiv、官方代码与元数据、会议域名定向检索、机构线索和 HuggingFace 补检。周五 DailyArXiv 更新至 10 月 16 日，最新列示论文为 10 月 14 日；timeseries 分支不可用，回退 master。GitHub Trending 无可核榜单，因此没有趋势排名。不是三个月全量调查；保留日期不确定和未复现说明。旧稿修订日不作首发日。

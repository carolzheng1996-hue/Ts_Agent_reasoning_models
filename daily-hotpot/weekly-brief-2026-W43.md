# 时间序列研究周报｜2026-W43

- **汇总范围**：2026-10-19（周一）至 10-23（周五）的五份晨间简报，包含归档中的下午补检。不是仅统计本周首发论文。
- **统一窗口**：2026-07-23 至本轮截止；对周初已收录但到周五滑出窗口的条目重新过滤。论文日期指 v1 或已核公开日；仓库日期指 GitHub 创建日，均为 UTC。
- **证据范围**：10-23 新增项目和论文按今日核验；其余继承对应日归档的核验结果，未逐一重新抓取。性能与可用性结论保留作者报告/待验证边界。

## 本周重点

### 1. 基础模型：从通用榜单转向用途、适配成本和决策验证

| 日期 | 研究与来源 | 摘要及相关性判断 |
|---|---|---|
| 10-21 | [TCEE](https://arxiv.org/abs/2610.29667) | 冻结 TSFM 提取账户历史，补强交易图检测。TSFM 应用高、Agent 特征工具中高；不是新预训练骨干。 |
| 10-20 | [TS2Vec-FM](https://arxiv.org/abs/2610.28602) | 合成语料预训练双视图并蒸馏为轻量卷积编码器；分类表征高相关，不能把线性探测当无标签零样本分类。 |
| 10-20 | [电力负荷参数高效适配](https://arxiv.org/abs/2610.28200) | 比较 MOIRAI、Chronos-2 的预训练、全量微调与 LoRA；TSFM 部署和 Agent 是否适配决策高相关。 |
| 10-20 | [分布式光伏 foundation-style 预训练](https://arxiv.org/abs/2610.27763) | 统一功率、气象、NWP 序列补全，比较预训练目标。领域 TSFM/冷启动高相关，需核 NWP 发布时间。 |
| 10-19 | [WhatIf-Bench](https://arxiv.org/abs/2610.26582) | 测未见干预下的预测；TSFM 因果能力与 Agent 决策评测高相关，不能只凭常规预测误差判断。 |
| 10-19 | [CaFE](https://arxiv.org/abs/2610.26251) | 用结构能力画像细化模型评价；TSFM 选型与 Agent 工具路由高相关。 |
| 10-16 | [OliO](https://arxiv.org/abs/2610.23345)、[EFC](https://arxiv.org/abs/2610.22872) | 前者学习时间流表征，后者利用已揭示误差校正预测；分别对应预训练与冻结模型部署，Agent 候选工具中高相关。 |

**本报判断**：应把分类、预测、干预泛化和下游决策分开比较；适配应同时记录训练成本、反馈信息和不适配基线。上述方法之间的组合收益尚未验证。

### 2. Agent：编排收益与反馈过拟合成为本周主问题

| 日期 | 研究与来源 | 摘要及相关性判断 |
|---|---|---|
| 10-21 | [FairAMO](https://arxiv.org/abs/2610.29504) | 固定候选预测，隔离编排贡献。Agent/TSFM/harness 高相关；最佳编排小于 6% 的 MASE 收益仅适用于论文设置。 |
| 10-20 | [Explicit Feedback Contract](https://arxiv.org/abs/2610.28798) | 限制精确验证分数反馈并规定停止与终评。通用 ML harness 高相关；时序迁移需重估相关误差下的阈值。 |
| 10-20 | [Prompt Evolution](https://arxiv.org/abs/2610.27468) | 冻结 LLM，以反馈演化指导块；Agent 反思与策略适配高相关。“不训练权重”不等于系统未使用目标反馈。 |
| 10-19 | [ActTime](https://arxiv.org/abs/2610.25764) | 动作条件时序世界模型；Agent 规划工具高相关，不能直接等同已实现自主建模循环。 |
| 10-18 | [EasyResearch](https://arxiv.org/abs/2610.25263) | 时间切分与独立终评工具；时序实验 harness 高相关，具体实现结论见周三归档。 |
| 10-14 | [TimeRSI](https://arxiv.org/abs/2610.19725) | 编码 Agent 在冻结预测骨干外修订部署流程；与 Prompt Evolution 构成代码适配/提示适配对照，持续跟踪。 |

**下一轮实验建议**：先冻结候选池、预测缓存和信息截止时点，再比较简单平均、误差选模、LLM 编排；为反思循环保留独立终评，并同时报告搜索成本。此为拟议实验，不是已经完成的结论。

### 3. Reasoning：更快推理之外，还要检查证据是否正确

| 日期 | 研究与来源 | 摘要及相关性判断 |
|---|---|---|
| 10-21 | [GRAIL](https://arxiv.org/abs/2610.29036) | 从逐点显著性转向领域语义区间与条件反事实归因；Agent 解释证据高相关，是配套解释框架。 |
| 10-21 | [SCDM](https://arxiv.org/abs/2610.29992) | 共享元学习预测器发现时序有向结构；因果工具中高相关，不是 LLM 推理模型。 |
| 10-19 | [TxnQA](https://arxiv.org/abs/2610.27256) | 交易事件问答把答案与归因证据分开评分；事件序列 reasoning 高相关，连续数值预测低相关。 |
| 10-19 | [TimesJev](https://arxiv.org/abs/2610.26002) | 压缩时序表征并对齐快速模型；直接 reasoning 和推理成本高相关，需评估异常信息损失。 |
| 10-16 | [Perceive, Solve, Reason](https://arxiv.org/abs/2610.23521) | 渐进训练时序感知、求解和推理能力；直接 reasoning 高相关，周二首次收录。 |
| 10-15 | [Twice Upon a Time](https://arxiv.org/abs/2610.22327) | 折线图与延迟嵌入双视图推理；Agent 感知高相关，准确率不等于解释忠实性。 |

## 本周新增收录的 GitHub 项目

以下按创建日期倒序，新增指本周归档首次明确收录的重点项目，非所有项目都于本周创建；HF 指向同一研究的入口合并记录。更细的访问范围、缺失产物和运行前提见对应日晨报。

| 创建日期 | 项目与来源 | 简短摘要、相关性与可用性边界 |
|---|---|---|
| 10-22 | [Awesome-Self-Evolving-RecSys](https://github.com/shangliy/Awesome-Self-Evolving-RecSys) | 自演化推荐系统与反馈审计资料库；ML Agent/harness 高、时序中；不是可运行系统。 |
| 10-22 | [Valensaco/automl-agent](https://github.com/Valensaco/automl-agent) | 双 Agent 与 MLflow 固定预算搜索；AutoML 高、时序中；已核为随机分层切分，在线链接仍有占位。 |
| 10-22 | [DS-Cortex](https://github.com/dulfazl/DS-Cortex) | 规划、批评、证据账本和导出；ML Agent/harness 高、时序中；周四核验评测产物仍为占位。 |
| 10-21 | [petroskiNB/automl_agent](https://github.com/petroskiNB/automl_agent) | Qwen 选实验、树模型训练；AutoML 高，时序切分由模型选定但控制器不保证领域正确。 |
| 10-21 | [STR-PV-Forecasting](https://github.com/2503255081/STR-PV-Forecasting) | 冻结骨干外融合短时趋势与持续性；光伏/适配工具高；评测期用于开发，不能证明独立泛化。 |
| 10-21 | [Wanxiang](https://github.com/SLAI-wanxiang-automl/Wanxiang) | 新能源建模引擎与运行管理合并；时序 Agent/TSFM 集成高；周四路线图仍有组件贯通与 NWP 自动核验缺口。 |
| 10-21 | [dclabai](https://github.com/Shahriyar-Moradi/dclabai) | 预测建模工程候选；时序工具中高，Agent 自主性需进一步审计；周三下午补收。 |
| 10-21 | [forecasting_agents](https://github.com/shanudengre82/forecasting_agents) | 预测数据准备与调度组件；Agent 工作流中高，不当作完整预测智能体。 |
| 10-21 | [AFAC2026 自动实验 Agent](https://github.com/Alwayshere-su/afac2026-auto-experiment-agent) | 自动实验工程；ML Agent 高、时序迁移中；需官方数据/GPU/API，未核成绩。 |
| 10-20 | [hilhool/alfa-automl-agent](https://github.com/hilhool/alfa-automl-agent) | AutoML 比赛原型；周三入口有规则/LightGBM 兜底，无 README，完整 LLM 循环未证实，低优先级。 |
| 10-20 | [HelioRoute-PV](https://github.com/zhongyuan-lv/HelioRoute-PV) | 光伏预测代码线索；领域建模高，Agent 迁移中；缺数据/权重且后续对照复用 Test，未证实独立泛化。 |
| 10-20 | [M4-Loop](https://github.com/silverisland/M4-Loop) | 光伏方向实验线索，含训练、预测与测试入口；时序实验相关中高，未运行，细节见周二补检。 |
| 10-19 | [NolReaction/alfa-automl-agent](https://github.com/NolReaction/alfa-automl-agent) | 离线搜索与 Qwen 路径；AutoML 高、时序中。周五文档称旧 v2 完成真实小任务循环，不验证新 v3。 |
| 10-19 | [TFN-PV](https://github.com/Geneeex/renewable-energy) | 光伏领域模型线索；TSFM 主题高，周二核验训练代码/权重待发布，仅投稿，低优先级。 |
| 10-19 | [stoploss](https://github.com/younghwan91/stoploss) | 实验预算与停止治理 CLI；Agent harness 高、时序迁移中；平台期规则存在作者披露的检验限制。 |
| 10-18 | [agentic-automl-harness](https://github.com/itsuresha/agentic-automl-harness) | 试验前门控与故障监控；AutoML 高、时序迁移中；外部误跳过率超目标，不等于已通过时序验证。 |
| 10-16 | [WhatIf-Bench](https://github.com/ashok-arjun/whatif-bench) | 干预预测基准，TSFM/Agent 评测高；周三目录仅 README/图像，代码数据待发布；与论文及 HF 榜单合并。 |
| 10-16 | [OliO](https://github.com/eai-lab/OliO) | 自监督时间流表征代码入口；TSFM 训练工具中高；周二核实元数据，未运行或审计实现。 |

**持续跟踪、未重复算新增**：08-22 创建的 [agentic-timeseries](https://github.com/sriixz/agentic-timeseries)于 10-22 推送，时序 Agent/AutoML 高相关；08-27 创建的 [VIPER](https://github.com/pvd232/viper)于 10-21 推送，实验计划与证据 harness 高相关；08-05 创建的 [TimeSage-EV](https://github.com/TimeSage-Series/TimeSage-EV)于 10-21 推送，动态时序 Agent 评测高相关。以上活动不自动证明功能新增。

**仅观察**：10-21 创建的 [Photovoltaic-generation-forecasting](https://github.com/ABELNoval/Photovoltaic-generation-forecasting)，周四目录只有 README 和忽略文件；光伏主题相关，尚无实现，低优先级。10-16 创建的 [photovoltaic-forecast-optimization](https://github.com/ThomasSerna/photovoltaic-forecast-optimization)本周继续跟踪，共享 MPC 比较 Chronos-2 与 beta；领域 TSFM 决策评测高相关，但为半合成案例，不算已验证在线系统。

## 去重与日期说明

- 窗口前首发、窗口内修订的 TimeART、STRIDE、CastFlow 等不计新研究。REATS 首发 08-10、10-19 修订，只记跟踪，不计本周新首发。
- 07-22 创建的 PV_ELM_pred 曾在周一窗口内，但到周五已滑出统一三个月窗口，不进入本周项目表。
- 期刊十月卷期不能替代首次在线日期；日期不确定候选降低优先级。项目创建日也不代表所有代码或方法首次出现。
- DailyArXiv 本周最后快照更新至 10-23，Time Series 85 行、最新论文日期 10-21；相邻日期行数有增减，不用行数差推断新增论文数。
- **下周优先事项**：读 FairAMO 与反馈协议全文；确认 WhatIf-Bench 发布状态；审查高相关工程的时间切分、延迟标签、NWP 可得性与独立终评。周报未声称上述验证已经完成。

## 本周晨报索引

- [2026-10-19 晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-19-morning-brief.md)
- [2026-10-20 晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-20-morning-brief.md)
- [2026-10-21 晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-21-morning-brief.md)
- [2026-10-22 晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-22-morning-brief.md)
- [2026-10-23 晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-23-morning-brief.md)

汇总完成：2026-10-23T09:06:42+08:00（北京时间）。

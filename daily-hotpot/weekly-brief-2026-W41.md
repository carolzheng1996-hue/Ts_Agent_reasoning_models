# 2026-W41 时间序列 Agent / Reasoning 周报

汇总时间：2026-10-09 09:00（北京时间）。工作日范围：**10 月 5—9 日**；研究筛选窗口统一为 **7 月 9 日至汇总时刻**。来源为仓库实际存在的 [10 月 8 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-08-morning-brief.md) 与 [10 月 9 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-09-morning-brief.md)。**10 月 5、6、7 日没有独立文件，覆盖为 2/5 个工作日，不补造日报。** “本周重点”含本周发现的较早窗内论文，不等于全部本周首发；按来源日期由近到远列出。

## 研究重点

| 首发日期 | 研究与来源 | 本周价值与相关性 |
|---|---|---|
| 2026-10-07 | [WxFM-XL](https://arxiv.org/abs/2610.10057) | 用误差先验图和空间图适配多站点天气预测。**TSFM 高、光伏气象迁移中高**；应核查误差图构建时的数据可得性。 |
| 2026-10-07 | [Temporal Predictive Multiplicity](https://arxiv.org/abs/2610.09994) | 同等误差模型仍可产生不同轨迹。**Agent 选模 / harness 高**；候选比较不宜只看平均误差。 |
| 2026-10-06 | [预处理感知基准](https://arxiv.org/abs/2610.09096) | 比较模型与可逆预处理组合，提示预处理偏置影响架构排名。**AutoML / Agent 高**；搜索流程必须约束验证数据与预算。 |
| 2026-10-06 | [FreshCast](https://arxiv.org/abs/2610.07834) | 冻结预测器配合不断更新的非参数记忆，10 月 7 日修订。**TSFM 适配 / Agent 记忆高**；沿用 10 月 8 日核验，重点查多步标签何时进入记忆。 |
| 2026-10-05 | [COMMON-TSQA](https://arxiv.org/abs/2610.05686) | 以输入干预和解释审计区分答对与真正使用数值证据。**reasoning / Agent 验证高**；本周最值得纳入独立评测的研究。 |
| 2026-10-05 | [ScaleIn](https://arxiv.org/abs/2610.07324) · [协变量不确定性基准](https://arxiv.org/abs/2610.07232) | 分别关注损失尺度偏置与未来天气等协变量噪声。**TSFM 高、光伏评测迁移中高**；沿用 10 月 8 日核验，不能把负荷实验当光伏排名。 |
| 2026-10-04 | [TSHarness](https://arxiv.org/abs/2610.04942) | 数值工具构造证据状态，回答 Agent 可要求再次感知。**时序 Agent / reasoning 高**；下一步核工具选择器训练来源。 |
| 2026-10-04 | [UniScale](https://arxiv.org/abs/2610.05269) · [Pythia](https://arxiv.org/abs/2610.05240) | 前者研究容量/上下文资源配置，后者分离多模态潜在表示与概率读出。**TSFM 高**；沿用 10 月 8 日核验，权重可用性与复现未确认。 |
| 2026-10-03 | [EvoCast](https://arxiv.org/abs/2610.04517) | LLM 架构探索与确定性评估、晋升分工。**建模 Agent / AutoML / harness 高**；最贴近仓库方向，优先检查最终测试隔离。 |
| 2026-09-30 | [OpenTSLM TeeMoE](https://arxiv.org/abs/2609.40265) | 三类低秩专家混合统一预测和时序分析，10 月 7 日修订。**TSFM / reasoning 高**；修订不计新首发，官方 GitHub/HF 只算同一项目。 |
| 2026-09-29 | [STR](https://arxiv.org/abs/2609.36926) | 用最新功率水平/趋势校正前 120 分钟，LightGBM 无可靠增益。**光伏预测 / Agent 在线工具高**；先查观测延迟和适配器切分。 |

## 本周新增收录的 GitHub 项目

以下五个仓库本周创建且本周首次收录，日期为 UTC。源码抽查未执行；不将 README 宣传当独立实验结论。

| 创建日期 | 项目 | 结论与优先级 |
|---|---|---|
| 2026-10-08 17:05 | [QEFSF 光伏特征选择](https://github.com/SunawarKhan/QEFSF-for-Solar-Photovoltaic-Generation-Forecasting) | QUBO 和多优化器比较，**光伏 / AutoML 高**；数据选择隔离、同期天气可得性及文档路径需修正，低优先级。论文发表日不确定。 |
| 2026-10-08 16:43 | [Kaggle Grandmaster 插件](https://github.com/TranBaDat2607/claude-code-kaggle-grandmaster) | **ML Agent / harness 高**；确有扩展时间窗与 gap 实现，值得借鉴实验记录及切分工具。默认普通折分不可直接用于时序，中高优先级。 |
| 2026-10-08 12:18 | [PowerForecasting](https://github.com/18271631957/PowerForecasting) | **光伏建模高**；多预测架构目录存在，但缺 README 和数据加载器依赖模块，暂为代码线索，低优先级。 |
| 2026-10-08 08:14 | [Multi-Agent-Data-Analyst](https://github.com/tanyaverma20/Multi-Agent-Data-Analyst) | **通用 AutoML 高、时序低**；随机切分，且特征选择早于内层 CV，存在验证信息泄漏风险，低优先级。 |
| 2026-10-07 22:15 | [EpochGo](https://github.com/AryanDinakaran/EpochGo) | 本地三角色 AutoML，**通用 Agent 高、时序低**；基准路径使用随机留出，迁移到时序前须替换，优先级中低。 |

本周其他跟踪项：[EvoCast](https://github.com/18e0-x/EvoCast) 的论文在 10 月 3 日公开，仓库创建更早，不列为本周新建；[Agent Lightning](https://github.com/microsoft/agent-lightning) 的 10 月 7 日博客属于既有 v1.0 解读，不能当十月新发布；[Agenthon forecasting](https://github.com/Agenthon-2026/track2-forecasting-public) 首次公开日期不确定，10 月 8 日晨报提醒预测适配器是脚手架，降级观察。这三项均不计入上述五个新仓库。

## DailyArXiv 与日期纠偏

10 月 9 日完整 [README](https://github.com/zezhishao/DailyArXiv) 的 Time Series 栏目有 89 条，最新论文行日期 10 月 7 日；10 月 8 日晨报记录的 91 条是上一滚动快照，不是累计总量下降异常。已补充 WxFM-XL、轨迹分歧、预处理基准和 TeeMoE 修订。

[电价 TSFM 评测](https://arxiv.org/abs/2607.02623) v1 为 7 月 2 日，[DiTS](https://arxiv.org/abs/2602.06597) v1 为 2 月 6 日，虽列表修订日均为 10 月 7 日，仍超窗排除。ACL [ODTQA-FoRe](https://aclanthology.org/2026.findings-acl.347/)只有七月月份，边界日未核实，降级观察；光伏 PI-SDNN 与新残差共形研究也保留日期/访问限制，不用卷期、抓取日或仓库创建日替代论文首发日。

## 下周优先事项

1. EvoCast：确认候选晋升只依赖验证集，最终测试不参与迭代。
2. TSHarness / TeeMoE：分别检查学习组件训练数据与专家控制器隔离，再用 COMMON-TSQA 思路审计证据使用。
3. 评测协议：记录预处理搜索预算，增加轨迹、爬坡与天气可得性检查。
4. 光伏工程：先处理新代码的依赖、文档路径与数据选择隔离，再评估真实预报输入；本周没有执行复现实验。

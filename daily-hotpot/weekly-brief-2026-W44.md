# 时间序列研究周报｜2026-W44

- 覆盖工作日：2026-10-26 至 2026-10-30；仓库中存在 10 月 28、29、30 日晨报，10 月 26–27 日没有独立晨报，故不补写缺档。
- 汇总时间：2026-10-30（Asia/Shanghai）；研究窗口遵循各晨报的滚动三个月范围。论文按 v1/官方首发、工程按 `created_at`；性能均为作者报告，未运行复现。

## 本周结论

本周最清晰的共同主题是：**让时序系统可控地吸收外部信息和事后反馈**。TSFM 侧出现已知未来协变量（Timestral）、任务级迁移审计（PHM）和现实传感器的短/长预测跨度分界（TimesFM 土壤）；Agent 侧强调残差修改的准入门槛；reasoning 侧在速度（TimesJev）与证据记忆（SEER）之间分化。对生产 harness 而言，冻结“当时可见”的协变量、事件和成熟标签，比增加更多模型角色更优先。

## 1. 本周重点研究

| 日期 | 条目 | 摘要与相关性判断 |
|---|---|---|
| 2026-10-27 | [Timestral 技术报告](https://arxiv.org/abs/2610.37585) | 5M–209M 概率 TSFM，支持已知未来协变量。**TSFM/Agent 工具高**；10 月 15 日已官方发布，本周是技术报告公开，不计新模型首发。 |
| 2026-10-27 | [Pneuma](https://arxiv.org/abs/2610.37563) | 真实航空预测维护时序基准，覆盖预测、分类、异常检测。**TSFM/Agent 运维评测中高**；数据集不是自主 Agent。 |
| 2026-10-26 | [PHM 预训练迁移评测](https://arxiv.org/abs/2610.35280) | 整库留出显示预训练对分类有益、对 RUL 不稳定。**TSFM 选型/harness 高**；拒绝以单一预训练指标晋级。 |
| 2026-10-26 | [Guarded Agent-in-the-Loop Residual Adaptation](https://arxiv.org/abs/2610.34968) | 按天气情景路由残差专家，成熟误差不足则拒绝修改。**时序 Agent/能源预测高**；需复核 NWP 与标签时点。 |
| 2026-10-22 | [TimesFM 土壤传感器实测](https://arxiv.org/abs/2610.30971) | 零样本在 1–8h 胜出、长跨度落后简单基线。**TSFM 部署评测高**；应按预测跨度路由。 |
| 2026-10-21 | [Agentic Model Orchestration](https://arxiv.org/abs/2610.29504) | 将候选模型、工具调用和流程编排视为预测系统核心。**Agent/AutoML 高**；尚须严格滚动回测。 |
| 2026-10-19 | [TimesJev](https://arxiv.org/abs/2610.26002) | 以频率保持压缩接入 System-1 以降延迟。**reasoning 高**；要专测罕见事件与结构丢失。 |
| 2026-10-15 | [Twice Upon a Time](https://arxiv.org/abs/2610.22327) | 绝对量纲图与不变性图的双视角语言模型。**TS reasoning 高**；图像轴、分辨率和变量对齐是部署风险。 |

## 2. GitHub 新增与活动

| 创建/活动日期 | 项目 | 结论 |
|---|---|---|
| 2026-10-30 | [EvolveSearcherUniversal](https://github.com/romanfjose/EvolveSearcherUniversal) | 隔离验证、预算路由、多 Agent 遥测。**ML harness 高，时序低**；新仓库，未验证代码和时序协议。 |
| 2026-10-29 | [agentic-automl](https://github.com/Chillmav/agentic-automl) | 名称命中 AutoML，但没有描述与可核实实现。**证据低**，仅观察。 |
| 2026-10-29 | [abm-market-calibration](https://github.com/pafuchsc/abm-market-calibration) | 市场 agent-based 校准、代理模型与回测。**金融时序中，Agent/TSFM 低**；先审计回测边界。 |
| 2026-10-29 | [germes](https://github.com/viminizer/germes) | Go 编码 Agent harness。**harness 中高，时序低**；可借鉴隔离执行，不是时序系统。 |
| 2026-10-29（活动） | [Awesome-Agent-Harness](https://github.com/Gloriaameng/Awesome-Agent-Harness) | 汇集系统、基准与证据框架。**harness 研究高，时序低**；本周更新而非新建项目。 |

本周没有确认新建且直接面向光伏预测的 GitHub 项目；[分布式光伏 Foundation-Style 预训练](https://arxiv.org/abs/2610.27763)（10 月 20 日）继续是优先研究线索，重点应审计未来 NWP 的可得时间。

## 3. 下周应执行的验证

1. 以滚动起点、固定未来协变量版本比较 Timestral、季节朴素基线和任一 Agent 编排，记录成本与失败样本。
2. 将“事件发生、事件可检索、预测发出、标签成熟、系统修改”写入统一时间线，作为 SEER 与风电残差 Agent 的前视泄漏检查。
3. 对新 harness 项目先做静态接口/测试/许可审查；没有时序切分和验证轨迹前，不接入研究主实验。

## 4. 覆盖边界

使用 arXiv 原页、官方项目页、GitHub 元数据/README、DailyArXiv 和 AI HOT 近七日精选作交叉检索。arXiv 全量关键词 API 曾限流，GitHub 搜索是未认证窗口查询；因此这是一份经日期核验的精选周报，不是三个月全量数据库。10 月 26–27 的缺失日报不补写，避免把事后聚合伪装成当日发现。

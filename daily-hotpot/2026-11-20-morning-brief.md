# 2026-11-20 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-20 11:44 CST（Asia/Shanghai）。
- 时间窗口：2026-08-20 至 2026-11-20（含首尾）。论文日期取 arXiv v1/官方公开日；GitHub 日期取 API `created_at` 或仓库明确日志。不能精确核验者已标注并降低优先级。
- 覆盖来源：arXiv、官方 GitHub README/API、GitHub Search；论文指标均为作者报告，本轮未运行或复现任何项目。
- 增量参照：2026-11-19 晨报。本日为周五，另见 [2026-W47 周报](weekly-brief-2026-W47.md)。

## 今日结论

1. **本周研究主线是“把预测的事后结果纳入下一次决策”。** FASE 与 TimEvolve 分别用 episodic memory / 策略更新吸收延迟标签；生产验证必须严格保持“预测原点—标签到达—更新”的顺序。
2. **TSFM 已从单变量零样本走向协变量、修订数据与跨站迁移。** Chronos-2、`t_0` 与 T2ST 共同提示：模型能力增长不能替代 `available_at`、数据版本与跨域回测门禁。
3. **11 月 20 日 GitHub 新增的 harness/AutoML 仓库尚属早期线索。** 它们对运行时恢复、评测门和自动化流程有启发，但无时序 benchmark 或成熟维护信号前，不应进入生产链路。

## 1. 时间序列基础模型最新研究

### [2026-11-13] [T2ST: Data-Efficient Spatio-Temporal Foundation Models via Temporal Data and Knowledge Transfer](https://arxiv.org/abs/2611.18199)

- 来源与日期：arXiv v1，2026-11-13。
- 摘要：从冻结 TSFM 蒸馏时间关系，并结合与目标区域匹配的辅助时间序列，缓解时空任务标注稀缺；是将通用时间知识迁移到空间图预测的路线。
- 相关性判断：**高（TSFM / 多站点能源迁移）**。对多电站或交通面板有参考价值；它不是通用 Agent，仍需以未见站点、严格时间切分验证。

### [2026-10-30] [Chronos-2: A foundation model for multivariate time series forecasting](https://arxiv.org/abs/2610.41956)

- 来源与日期：arXiv v1，2026-10-30。
- 摘要：面向零样本预测，联合处理多变量序列和异构协变量并生成概率预测；作者扩展了科学领域案例、校准及分层预测分析。
- 相关性判断：**很高（TSFM / Agent 数值工具）**。可作含天气、日历和站点元数据的工具基座；应对未来协变量执行 schema 与可得时点校验。

### [2026-09-21] [$t_0$: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：发布 102M/256M 开放权重模型，以时间轴/变量轴交替注意力处理目标历史、过去协变量与已知未来协变量，并输出分位数预测。
- 相关性判断：**很高（TSFM / Agent 工具）**。输入契约清晰，适合 Agent 调用；`known-future` 字段必须携带预测原点可知性的证据。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 将历史预测过程写入 episodic memory，并依据延迟到达标签学习在线策略；作者在 GIFT-Eval 的 29 个配置上报告相对最佳单一 TSFM 的 normalized MAE 降低。
- 相关性判断：**很高（forecasting Agent / memory）**。提供“预测兑现后再学习”的闭环范式；日志需记录 memory 写入、标签到达和策略版本。

### [2026-09-21] [When Tomorrow Becomes Today: Self-Evolving Policies for Agentic Time-Series Forecasting](https://arxiv.org/abs/2609.24862)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：TimEvolve 冻结预测骨干，把已兑现标签用于更新专家信任、Agent 路径和干预强度；作者报告在 Time-MMD 多领域比较中取得领先。
- 相关性判断：**很高（Agent / online policy）**。对概念漂移具直接工程价值；只能用当时已兑现的标签做回放，不能以最终真值重写历史决策。

### [2026-11-03] [MetaCaster](https://github.com/D2I-Group/metacaster)

- 来源与日期：官方 GitHub 项目新闻，2026-11-03；论文为 EMNLP 2026（正式会议日期未在本轮核验）。
- 摘要：多 Agent 框架不让 LLM 直接充当预测器，而让其生成任务自适应训练数据并训练轻量下游 forecaster。
- 相关性判断：**高（Agent / few-shot TS）**。值得比较“生成训练样本”与“直接选模型”的收益；作者报告尚需独立的滚动验证和成本审计。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：CastReasoner 将推理限定为上下文证据抽取、未来动态判断、与数值 forecast prior 对照和决策的显式链路，并采用多教师轨迹、SFT 与多目标 RL 后训练。
- 相关性判断：**很高（reasoning / contextual forecasting）**。适合作为语义修正层；证据发布日期、来源与数值先验必须分开存档以审计泄漏。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源与日期：arXiv v1，2026-10-19。
- 摘要：以充分性损失和可实现性约束学习压缩表示，并以门控保留关键频率模式；作者报告相较比较 reasoning 模型有明显推理时延下降。
- 相关性判断：**高（reasoning efficiency）**。可启发 fast-path/slow-path 路由；速度结论不等同于校准或跨域可靠性。

## 4. GitHub 上值得跟踪的新项目

### [2026-11-20] [wuman1194-max/weaverrt](https://github.com/wuman1194-max/weaverrt)

- 来源与日期：GitHub Search API，创建/最近更新均为 2026-11-20 UTC。
- 摘要：通用轻量 Agent 基础设施，声明提供 ReAct/DAG/Planner-Executor、多 Agent、事件溯源恢复、幂等、预算化上下文、MCP、sandbox 与 eval gate。
- 相关性判断：**中高（通用 harness）**。其恢复与评测门设计可迁移到时序 Agent；不是时序专用，需补 `prediction_origin`、walk-forward split 与泄漏断言。

### [2026-11-20] [all4null/automl-agent-2026-2](https://github.com/all4null/automl-agent-2026-2)

- 来源与日期：GitHub Search API，创建 2026-11-20 02:31 UTC、最近更新 02:34 UTC。
- 摘要：声明从数据输入自动完成预处理、模型选择、验证和报告的 AutoML Agent；仓库创建时间极短。
- 相关性判断：**低（AutoML 观察线索）**。流程边界值得跟踪，但当前无时序切分、公开 benchmark 或维护信号，不能据此判断能力。

### [2026-11-19] [PoorOtterBob/Time-Series-Agents-Survey](https://github.com/PoorOtterBob/Time-Series-Agents-Survey)

- 来源与日期：GitHub Search API，创建 2026-11-17、最近更新 2026-11-19 UTC。
- 摘要：汇编时间序列 Agent、harness 架构和评测的带来源论文卡片，并提供面向 Claude Code/Codex 的 agent skill。
- 相关性判断：**中（研究导航）**。可作为线索索引，不应替代逐篇以原始论文页核验日期、实验与许可。

### [2026-11-18] [BK5102/culprit](https://github.com/BK5102/culprit)

- 来源与日期：GitHub Search API，创建 2026-11-18 17:57 UTC、同日更新。
- 摘要：研究原型关注 TSFM 能否在同等误报预算下更早发现支付批准率下降，以及 LLM Agent 能否定位异常分群。
- 相关性判断：**高（TSFM + diagnosis Agent）**。把检测、告警预算和归因连接起来；仓库很新且缺少公开验证，先审查数据切分和复现脚本。

## 5. 本轮检索与限制

- 已定向检查 arXiv、官方项目页和 GitHub Search；未发现 2026-11-20 当天可核验首发、且直接聚焦 TSFM、时间序列 Agent 或 reasoning 的新增论文。因此不将网页抓取日、GitHub commit 日或 arXiv 修订日误报为论文首发日。
- 本轮 GitHub 项目均未执行；`created_at` 仅说明仓库出现时间，并不证明项目的研究成熟度或发布日期。
- 建议优先建立统一的运行记录：`prediction_origin`、每个特征的 `available_at`、数据/模型版本、工具路由、标签到达时刻与评测切分；这是将本周论文与新 harness 转化为可信系统的共同前提。

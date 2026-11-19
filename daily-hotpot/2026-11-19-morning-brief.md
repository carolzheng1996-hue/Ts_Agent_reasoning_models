# 2026-11-19 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-19 13:55–14:01 CST（Asia/Shanghai）。
- 时间窗口：2026-08-19 至 2026-11-19（含首尾）。论文按 arXiv v1/正式公开日；GitHub 项目按 API 的 `created_at` 或仓库明确更新日志。日期不完整的线索降低优先级。
- 覆盖来源：arXiv、官方 GitHub README/API、GitHub Search；论文指标均为作者报告，项目没有在本轮执行或复现。
- 增量参照：2026-11-13 晨报；今天是周四，因此不生成周报。

## 今日结论

1. **近期最强的 Agent 增量是把“结果兑现后的反馈”写回编排策略。** TimEvolve 在冻结基座上同时更新专家信任、路径选择和干预强度，适合用严格的预测原点回放检验。
2. **TSFM 工程重点转向多变量协变量与 Agent 可调用接口。** TimesFM 3.0 和 `$t_0$` 都明确建模已知未来协变量；这提升能力的同时，也使 schema 级 as-of 校验成为硬性要求。
3. **GitHub 新项目呈两条线：时序分析 Agent 原型，以及通用 ML/harness 的实验可追溯。** 新仓库普遍缺少公开基准或成熟维护信号，应先做许可、数据切分和可复现实验审计。

## 1. 时间序列基础模型最新研究

### [2026-09-21] [$t_0$: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：发布 102M/256M 开放权重预测模型，交替沿时间与变量轴注意力，直接条件化目标历史、过去协变量和已知未来协变量，并输出分位数预测。作者在 GIFT-Eval 与 fev-bench 报告具竞争力的零样本成绩。
- 相关性判断：**很高（TSFM / Agent 工具）**。为 Agent 的数值预测工具提供了清晰输入契约；所有 `known-future` 字段必须附可得时间戳，不能把未来实测值作为协变量。

### [2026-08] [TimesFM 3.0](https://github.com/google-research/timesfm)

- 来源与日期：Google Research 官方 GitHub 更新日志，2026-08（仅确认到月份，故低于精确日期条目）。
- 摘要：加入原生单/多变量预测和 past-only、past-and-future 动态协变量支持；项目方报告在 fev-bench、TIME Benchmark 和 GIFT-Eval 均居前。代码为 Apache-2.0，但 3.0 默认预训练权重采用非商业许可证。
- 相关性判断：**很高（foundation model / serving）**。可作为 Agent 的高能力基座候选；除了时序泄漏门禁，还必须在生产评估前处理权重的非商业限制。

### [2026-10-04] [A Unified Scaling Law for Time Series Foundation Models](https://arxiv.org/abs/2610.05269)

- 来源与日期：arXiv v1，2026-10-04。
- 摘要：在 23 个数据集—频率任务、21 个 checkpoint 的 18,768 个实验单元上拟合容量、上下文长度与预测期的关系；作者称五参数规律可外推 Toto 2.0 的缩放曲线。
- 相关性判断：**高（TSFM 选择 / resource-aware Agent）**。可将“加长历史还是换更大模型”转成可量化编排决策，但系数应在目标域滚动回放中重估。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-21] [When Tomorrow Becomes Today: Self-Evolving Policies for Agentic Time-Series Forecasting](https://arxiv.org/abs/2609.24862)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：TimEvolve 固定预测骨干，将每次预测兑现后的真实标签转化为对专家信任、Agent 路径选择和干预强度的持续联合更新。作者在八个 Time-MMD 领域、15 种方法比较中报告平均 MSE/MAE 排名最优，并在七个领域两项误差均最低。
- 相关性判断：**很高（forecasting Agent / online policy）**。直接解决长期部署中的机制漂移；验证必须按“预测→等待标签→更新”的时序执行，严禁使用尚未兑现的标签重排历史策略。

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 将历史预测过程写入 episodic memory，并用延迟到达标签学习在线策略；作者在 GIFT-Eval 的 29 个配置上报告相对最佳单一 TSFM 的 normalized MAE 降低 9.1%。
- 相关性判断：**很高（Agent memory / online learning）**。与 TimEvolve 相互印证“真实结果反馈”的方向；实践中应独立记录 memory 写入时间、标签到达时间及每次策略版本。

### [2026-08-07] [AION](https://github.com/ztxtech/aion)

- 来源与日期：官方 GitHub 新闻，2026-08-07。
- 摘要：OpenCode 上的时序 harness，从固定重型流程转为自适应执行与压缩上下文，围绕任务文件、工作区与验证接口组织多 Agent 分发和分层 review gate。
- 相关性判断：**很高（timeseries Agent / harness）**。其“任务—工作区—验证接口”三元组可作为时序 Agent 的运行契约；应补测在长上下文压缩下的证据丢失与失败恢复。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：CastReasoner 将推理限制在“抽取上下文预测证据—判断未来动态—对照数值 forecast prior—决策”的显式链路，并以多教师轨迹、难度筛选、SFT 与多目标 RL 后训练。
- 相关性判断：**很高（reasoning / contextual forecasting）**。它提供可检查的语义修正层；证据来源、发布时间和数值先验需要拆开存档，才能排查事后信息与幻觉归因。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源与日期：arXiv v1，2026-10-19（不将 10-31 的 v2 修订日当作首发）。
- 摘要：以充分性损失和模型可实现性约束学习压缩表示，并以门控保留关键频率模式；作者在 13 个数据集上报告较比较 reasoning 模型平均少 62.9% 推理时间。
- 相关性判断：**高（reasoning efficiency）**。可用作 fast-path/slow-path 的门控参考：表示不足时再升级到统计工具或长推理；效率声明不代表预测校准更好。

### [2026-09-30] [OpenTSLM TeeMoE](https://arxiv.org/abs/2609.40265)

- 来源与日期：arXiv v1；[官方代码](https://github.com/tonychenxyz/OpenTSLM)，2026-09-30。
- 摘要：在共享骨干上训练 forecasting aggregation、原生预测与时序分析三类 LoRA 专家，再由 MoE controller 按请求路由，统一覆盖预测、上下文条件预测和语言化时序分析。
- 相关性判断：**很高（reasoning + TSFM）**。是外部多 Agent 编排之外的“模型内路由”强基线，应同样记录路由选择、成本与失效案例。

## 4. GitHub：timeseries Agent / harness / ML / AutoML 新项目

### [2026-11-18] [BK5102/culprit](https://github.com/BK5102/culprit)

- 来源与日期：GitHub Search API；创建 2026-11-18 17:57 UTC、同日更新。
- 摘要：研究原型，问题是 TSFM 是否能以相同误报预算更早发现支付批准率下降，以及 LLM Agent 能否比规则管线更好地定位异常分群。
- 相关性判断：**高（TSFM + diagnosis Agent）**。问题设定把检测、告警预算和归因连接起来，值得跟踪；仓库极新、0 星且尚未公开验证，不能据此推断实际能力。

### [2026-11-17] [GSoli96/AugPilot](https://github.com/GSoli96/AugPilot)

- 来源与日期：GitHub Search API；创建与更新均为 2026-11-17 UTC。
- 摘要：面向表格、时序和图数据的证据驱动数据增强 Agent copilot。
- 相关性判断：**中高（data-centric Agent）**。时序 Agent 的训练/适配阶段可借鉴“先找证据再增强”的约束；应优先核查增强是否只使用训练期数据及其对时间泛化的影响。

### [2026-11-19] [aayushkrm/passk](https://github.com/aayushkrm/passk)

- 来源与日期：GitHub Search API；创建与更新均为 2026-11-19 UTC。
- 摘要：工具调用 Agent 的离线 `pass^k` 可靠性 harness，提供 MCP v2 与 CI 回归 gate。
- 相关性判断：**中高（通用 harness）**。非时序专用，但可借鉴离线重放与回归门禁；迁移时必须新增 time split、prediction origin 与数据泄漏断言。

### [2026-11-17] [n00rElh00da/treelab](https://github.com/n00rElh00da/treelab)

- 来源与日期：GitHub Search API；创建与更新均为 2026-11-17 UTC。
- 摘要：多数据集管理、EDA、预处理、模型训练、AutoML 与可解释性的全栈 ML 平台。
- 相关性判断：**中（AutoML 线索）**。可观察其实验记录与多数据集管理设计；通用 tabular ML 项目，未显示时序验证承诺，不能直接用于预测建模。

## 5. 建议动作

1. 为任何 TSFM 调用强制传入 `prediction_origin`、变量的 `available_at`、模型/权重版本与许可证；对 known-future 协变量做运行时拒绝式校验。
2. 建立 TimEvolve/FASE 风格的 delayed-label 回放：预测、标签到达、memory/policy 更新必须按真实事件时间分离，并保留不可变日志。
3. 将 `culprit`、`AugPilot`、`passk` 限为观察清单；在纳入技术栈前审查许可证、数据切分、基线与可复现脚本。

## 限制

- 本轮未检出 2026-11-14 至 2026-11-19 之间可由 arXiv v1 页面确认、且主题直接匹配的新增时序基础模型、Agent 或 reasoning 论文；因此保留三个月窗口内最近的可核验高价值条目。
- GitHub 搜索条目以 API 元数据/仓库描述为线索，未运行代码。`updated_at` 不等于发布日；文中对新项目优先写 `created_at`。

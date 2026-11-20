# 2026-W47 时间序列 Agent / Reasoning 周报

- 覆盖日期：2026-11-16 至 2026-11-20（工作日）。
- 依据：[11-16](2026-11-16-morning-brief.md)、[11-17](2026-11-17-morning-brief.md)、[11-18](2026-11-18-morning-brief.md)、[11-19](2026-11-19-morning-brief.md)、[11-20](2026-11-20-morning-brief.md) 晨报；仅保留日期落在 2026-08-20 至 2026-11-20 的线索。

## 本周重点

1. **基础模型由“预测一个序列”转为“可控上下文与迁移”。** [T2ST（11-13）](https://arxiv.org/abs/2611.18199) 关注数据稀缺时的时空迁移；[Chronos-2（10-30）](https://arxiv.org/abs/2610.41956) 和 [`t_0`（09-21）](https://arxiv.org/abs/2609.24559) 共同强化多变量/协变量/概率预测。相关性：**很高**，但需验证协变量可得性与跨站滚动回测。
2. **Agent 的关键能力是延迟反馈闭环。** [FASE（09-26）](https://arxiv.org/abs/2609.32689) 与 [TimEvolve（09-21）](https://arxiv.org/abs/2609.24862) 都将已兑现标签反馈到下一轮策略。相关性：**很高**；实现要隔离预测时刻和标签到达时刻，防止 hindsight leakage。
3. **reasoning 需要证据锚定与成本路由。** [CastReasoner（11-09）](https://arxiv.org/abs/2611.12285) 将文本证据与数值先验拆为显式链路，[TimesJev（10-19）](https://arxiv.org/abs/2610.26002) 探索快速充分性路径。相关性：**很高/高**；应同时记录证据版本、工具调用和延迟。

## 新增 / 值得跟踪的 GitHub 项目

| 日期 | 项目 | 摘要 | 相关性判断 |
| --- | --- | --- | --- |
| 11-20 | [weaverrt](https://github.com/wuman1194-max/weaverrt) | 事件溯源、恢复、sandbox 与 eval gate 的通用 Agent harness。 | 中高：可借鉴运行契约，但无时序评测。 |
| 11-20 | [automl-agent-2026-2](https://github.com/all4null/automl-agent-2026-2) | 自动预处理、模型选择、验证和报告的极新 AutoML Agent。 | 低：仅观察；缺少时序 benchmark。 |
| 11-19 | [Time-Series-Agents-Survey](https://github.com/PoorOtterBob/Time-Series-Agents-Survey) | 论文卡片、harness/评测索引和 agent skill。 | 中：导航材料，须回到一手来源核验。 |
| 11-18 | [culprit](https://github.com/BK5102/culprit) | TSFM 检测与 LLM Agent 异常归因研究原型。 | 高：设定贴近诊断 Agent；需复现审计。 |
| 11-13 | [CastWorld](https://github.com/CastWorld-Bench/CastWorld) | 面向上下文资源、工具调用与效率的预测 Agent benchmark。 | 高：适合补充评测 harness。 |
| 11-03 | [MetaCaster](https://github.com/D2I-Group/metacaster) | 以多 Agent 生成训练数据并训练轻量 forecaster。 | 高：few-shot 适配候选。 |

## 下周优先动作

1. 选 Chronos-2、`t_0` 与一个传统基线，采用冻结的 walk-forward 预测原点进行概率预测与校准比较。
2. 将 `available_at`、`prediction_origin`、标签到达时间和策略版本写入不可变日志，再试验 FASE/TimEvolve 风格更新。
3. 将 `culprit`、CastWorld、weaverrt 置于隔离评测环境；先审计许可证、数据切分、失败恢复和无未来信息断言。

## 限制

- 本周未检出可由原始论文首发页确认、且在 11 月 16–20 日新发布的直接 TSFM/时序 Agent/reasoning 论文；本周研究条目因此保留近三个月内最近的已核验高价值成果。
- GitHub 条目按仓库创建日或项目明确更新日记录，尚未运行，不能视为性能背书。

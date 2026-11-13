# 2026 年第 46 周时间序列研究周报（11 月 9 日—13 日）

- 汇总范围：本周工作日晨报（2026-11-09 至 2026-11-13）。
- 证据规则：论文按 arXiv v1/正式公开日期；GitHub 新项目按 `created_at`，成熟项目按官方更新日志或明确最近推送日期。性能为作者报告，未经独立复现。

## 本周重点

1. **上下文已成为 TSFM 与 reasoning 的共同接口。** Chronos-2、CoCo、`t₀` 和 CastReasoner 分别从多变量/协变量、语言蒸馏协变量、上下文零样本预测与证据链路推进；统一风险仍是 as-of 可得性。
2. **验证从误差排名升级为可审计运行时。** TSFM calibration、指数期货盲测、VINTAGE-TS、TimeEvo/TimEvolve 与 CastWorld 均指向同一要求：预测原点、数据版本、工具可见性、延迟标签与失败恢复必须可回放。
3. **Agent 更趋向“调用或训练数值专家”。** GlucoAgent、MetaCaster、FASE 与 TeeMoE 代表了按例写代码/工具调用、产出小模型、在线调度和多专家路由四条路径；不应把 LLM 自由文本输出直接等同于预测能力。

## 本周高优先级论文

| 日期 | 条目 | 核心信号 | 相关性 |
|---|---|---|---|
| 11-09 | [CastReasoner](https://arxiv.org/abs/2611.12285) | 证据抽取、未来动态判断、数值先验对照的后训练推理链 | 很高：context-aware reasoning |
| 11-06 | [TimeOmni-Live](https://arxiv.org/abs/2611.09502) | 长期记忆与流式时序理解 | 高：状态化 foundation/reasoning |
| 11-06 | [TailDART](https://arxiv.org/abs/2611.09176) | 金融 TSFM 的低延迟推理设计 | 高：部署型数值专家 |
| 11-03 | [GlucoAgent](https://arxiv.org/abs/2611.04126) | 按例程序执行、检索与回测 | 很高：时序 Agent 闭环 |
| 11-03 | [CoCo](https://arxiv.org/abs/2611.05515) | 语言上下文蒸馏成 TSFM 协变量 | 很高：reasoning-to-forecast interface |
| 10-30 | [Chronos-2](https://arxiv.org/abs/2610.41956) | 多变量、协变量、概率零样本预测 | 很高：Agent 数值工具 |
| 09-26 | [FASE](https://arxiv.org/abs/2609.32689) | episodic memory 与延迟标签在线更新 | 很高：持续预测 Agent |
| 09-23 | [VINTAGE-TS](https://arxiv.org/abs/2609.28576) | 数据修订感知的 TSFM 评测与接口 | 很高：防事后泄漏 |

## 新增 / 活跃 GitHub 项目

- [CastWorld](https://github.com/Forever-Pan/CastWorld)（11-10 创建）：context-aware agentic forecasting benchmark，覆盖预测、执行、可信行为和资源效率；优先审查数据版本与工具可见性。
- [tsfm-pg](https://github.com/barddoo/tsfm-pg)（11-11 创建）：在 PostgreSQL 内服务 Chronos-2/Timestral，明确历史、past-only 与 known-future 协变量；适合受控数值工具，但须做 SQL 权限与防泄漏审计。
- [MIRA](https://github.com/travmcwilliams/mira-workbench)（11-12 创建）：本地优先 AutoML 工作台，声称支持 leak-safe temporal splits 和运行导出；应检查切分是否贯穿变换、选特征与调参。
- [blackboard-swarm-automl](https://github.com/ispras/blackboard-swarm-automl)（11-12 创建）：并行 coding-agent 的共享黑板 ML harness；可借鉴其任务记录，非时序专用且暂未声明许可证。
- [FoundationForecast](https://github.com/TimeCopilot/foundationforecast)（11 月更新）：增加 Kumo-Forecast、Prophet adapter 与保形区间，扩展 TSFM 统一接入。
- [many-model-forecasting](https://github.com/databricks-industry-solutions/many-model-forecasting)（10–11 月更新）：接入 19 个基础模型并增加预测区间；可作为多模型实验层候选。

## 下周优先事项

1. 实现并验收带 `as_of`、`vintage` 和协变量可见性字段的预测工具契约。
2. 建立固定 prediction-origin 的回放 harness：naive baseline、单一 TSFM、context/reasoning 修正、在线策略四组并列。
3. 对新 GitHub 项目先检查许可证、数据切分、可复现脚本与审计日志，再纳入实验栈。

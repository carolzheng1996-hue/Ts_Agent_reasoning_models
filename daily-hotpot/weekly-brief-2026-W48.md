# 2026 年第 48 周时间序列研究周报（11 月 23–27 日）

- 汇总范围：本周工作日晨间简报（2026-11-23 至 2026-11-27）。
- 编制时间：2026-11-27 14:35 CST。论文日期均回溯 arXiv v1；项目动态均回溯 GitHub API。下述结论是研究线索，不是独立复现结论。

## 本周最重要的信号

1. **TSFM 正从“单纯零样本预测”走向可控上下文与可审计适配。** Chronos-2、Timer-M1、`t_0` 和 FlexCast 提供候选骨干；C2LoRA-TS 进一步提出按文本动态生成临时适配器。实际系统要把文本、协变量与模型版本绑定在预测原点。
2. **Agent 的重点已落到闭环实验与持续学习。** FASE、TimEvolve、NeoResearch、GlucoAgent 体现记忆、工具调用、试验反馈和策略更新；Continual AutoResearch 的消融提醒我们，持久记忆可更快找到方案，却不保证最终泛化更好。
3. **reasoning 的关键缺口是“证据与时间对齐”，不是更长的解释。** CoCo 把文本推理转为数值协变量；`Put the World Back` 证明高准确率可掩盖未使用时间戳的捷径。应把错配事件、打乱顺序和移除日期作为常规测试。
4. **新项目最值得先试验的基础设施是 CastWorld、TSFLab 与 Prophet。** 前两者针对 Agent 评测/实验，后者针对可审计本地预测；均应先进行时间切分、许可证、数据外发与执行隔离审计。

## 本周论文重点

| 方向 | 条目（日期 / 原始来源） | 核心价值 | 对时序 Agent 的启示 |
| --- | --- | --- | --- |
| TSFM | [Chronos-2](https://arxiv.org/abs/2610.41956)（10-30）、[Timer-M1](https://arxiv.org/abs/2610.11734)（10-08）、[`t_0`](https://arxiv.org/abs/2609.24559)（09-21） | 多变量、变量角色和概率预测的骨干候选。 | 用统一 rolling-origin 协议、协变量 `available_at` 与区间校准筛选，而非按榜单直接路由。 |
| TSFM | [C2LoRA-TS](https://arxiv.org/abs/2611.34206)（11-25） | 文本条件的临时 LoRA，且无上下文时可还原冻结骨干。 | 将文本时间戳、检索快照、适配器版本写入预测记录；设置无文本消融。 |
| 评测 | [Analemma](https://arxiv.org/abs/2611.34240)（11-25）、[Causal Analysis for TSFMs](https://arxiv.org/abs/2608.24303)（08-25） | 时间分辨率、评测协议与合成干预可改变结论。 | harness 要保存数据处理与评测配置，并纳入反事实/状态切换压力测试。 |
| Agent | [FASE](https://arxiv.org/abs/2609.32689)（09-26）、[TimEvolve](https://arxiv.org/abs/2609.24862)（09-21）、[NeoResearch](https://arxiv.org/abs/2611.18235)（11-13） | 用延迟标签、记忆和实验反馈更新模型/路径选择。 | 记忆按预测时点隔离，expert pool 与 replay 协议预先冻结。 |
| Agent | [GlucoAgent](https://arxiv.org/abs/2611.04126)（11-03）、[Continual AutoResearch](https://arxiv.org/abs/2611.05108)（11-03） | 工具调用回测与跨任务记忆的收益/边界。 | 同时报告首解质量、试验成本和最终留出表现；医疗类场景另加隐私与临床验证。 |
| Reasoning | [CoCo](https://arxiv.org/abs/2611.05515)（11-03）、[Put the World Back](https://arxiv.org/abs/2611.34848)（11-25） | 文本到协变量与时间戳落地诊断。 | 把外部事件的发布时间、事件—序列对齐和日期扰动列为上线门槛。 |
| PV | [Explainable AI for Solar PV](https://arxiv.org/abs/2611.25894)（11-19）、[Distributed PV pretraining](https://arxiv.org/abs/2610.27763)（10-20） | 时间有序验证、NWP、校准与空间迁移。 | 固化 NWP/卫星产品版本，在空间留出和时间滚动下验证。 |

## 本周新增或活跃 GitHub 项目

| 项目 | 本周可核验日期 | 定位与优先级 |
| --- | --- | --- |
| [CastWorld](https://github.com/CastWorld-Bench/CastWorld) | 11-23 推送 | **高**：面向上下文感知 agentic 预测的 benchmark/harness；先审查数据许可证、时间切分与过程指标。 |
| [TSFLab](https://github.com/D2I-Group/TSFLab) | 11-03 推送、11-22 API 更新 | **高**：Agent-first 时序研究工作台；`NOASSERTION` 许可证需先澄清。 |
| [ephemeris-mcp](https://github.com/TensorLink-AI/ephemeris-mcp) | 11-18 推送 | **高**：多 TSFM 的 MCP 预测/路由接口；先核验许可、数据外发及协变量契约。 |
| [agentquant-timeseries-pipeline](https://github.com/kenseiAmit/agentquant-timeseries-pipeline) | 11-25 推送 | **中高**：六 Agent 量化时序工作流；优先审计金融回测和执行权限。 |
| [Lelekhoa1812/prophet](https://github.com/Lelekhoa1812/prophet) | 11-20 创建、11-27 推送 | **中高**：本地表格预测 Agent，保留代码/输出并有基线回测；低成熟度，先做独立 walk-forward。 |
| [Oxpecker](https://github.com/happy-momo/Oxpecker-Your-shopfloor-Edge-Computing-Agent) | 11-26 创建/推送 | **中高**：工业遥测的确定性分析与 LLM 解读分层；适合借鉴新鲜度/覆盖率 gate。 |

## 下周建议

1. 以 CastWorld 或 TSFLab 为候选 harness，复刻一个最小 walk-forward pipeline：数据截断、候选模型路由、点/区间评分、事件可得性审计和可恢复日志。
2. 为文本增强路线建立三个强制消融：无文本、固定全局文本、发布时间错配文本；再配合日期删除/乱序测试，检验是否真的在做事件时序 reasoning。
3. 优先把 C2LoRA-TS、Chronos-2、Timer-M1 接入同一份冻结数据快照；PV 场景另行保存 NWP 发布版本并执行空间留出评估。

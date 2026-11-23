# 2026-11-23 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-23 09:00 CST（Asia/Shanghai）。
- 时间窗口：2026-08-23 至 2026-11-23（含首尾）。论文日期为 arXiv v1；GitHub 条目使用仓库创建或最近推送日期。不能确认日期的线索未纳入正文。
- 增量参照：2026-11-22 晨报。今日以近三个月内仍具直接工程价值、但上期未展开的工作为主；作者报告的指标尚未独立复现。

## 今日结论

1. **TSFM 正在从单变量零样本预测走向“多变量 + 协变量 + 概率输出”。** Agent 的模型路由不应只根据历史 target 选型，还要显式声明哪些过去/未来协变量在预测原点可用。
2. **自演化 Agent 的共同闭环是“预测—真值兑现—策略/记忆更新”。** 这要求 harness 把预测原点、标签可得时间、候选路径和更新版本一并固化，避免反向泄漏。
3. **reasoning 的新增重点是把外部事件变成可追溯的因果证据，而非把新闻直接拼进 prompt。** 检索、反思和知识更新都需要按时间截断。

## 1. 时间序列基础模型最新研究

### [2026-10-30] [Chronos-2: A foundation model for multivariate time series forecasting](https://arxiv.org/abs/2610.41956)

- 来源与日期：arXiv v1，2026-10-30。
- 摘要：面向未见数据的零样本概率预测，联合建模多条序列和异构协变量之间的关系；作者报告在多项基准上平均优于对比方法，并覆盖传染病、宏观、碳通量和径流等场景。
- 相关性判断：**很高（TSFM / Agent 工具候选）**。适合充当多变量候选 forecaster；接入 Agent 时须把每个协变量的 `available_at`、预测区间与回测切分作为调用契约的一部分。

### [2026-10-08] [Timer-M1: A Multivariate Time Series Foundation Model via Learning Primitives](https://arxiv.org/abs/2610.11734)

- 来源与日期：arXiv v1，2026-10-08。
- 摘要：以时间和变量关系“原语”构造合成预训练样本，并将目标、历史协变量、已知未来协变量分配为不同角色；作者报告其在 FEV/TIME 基准排名第一、GIFT-Eval 第二。
- 相关性判断：**高（TSFM / 可解释输入角色）**。其角色化设计便于 Agent 做特征可得性检查；但排名为论文作者报告，应在目标业务的滚动原点上复验。

### [2026-09-21] [$t_0$: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：开源 102M/256M 预测模型，交替沿时间和变量维度注意力，并直接输出分位数预测；预训练同时使用公开数据与带协变量依赖的合成生成器。
- 相关性判断：**高（TSFM / 概率预测）**。很适合作为 Agent 的不确定性候选；应检查长预测步滚动、缺失值和已知未来协变量是否与生产数据一致。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 将完成预测实例写入 episodic memory，并在标签延迟到达后将反馈汇总为在线策略的排序指引，形成不更新 LLM 参数的持续适应闭环。
- 相关性判断：**很高（forecasting Agent / 反馈学习）**。是最直接的线上反馈范式之一；部署评估要隔离“当时可见”的记忆，不能让未来兑现的标签进入历史预测。

### [2026-09-21] [When Tomorrow Becomes Today: Self-Evolving Policies for Agentic Time-Series Forecasting](https://arxiv.org/abs/2609.24862)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：TimEvolve 在真值揭示后，同时持久更新数值专家信任度、Agent 路径选择和干预强度；作者在八个 Time-MMD 域上报告最佳平均误差排名。
- 相关性判断：**很高（Agent 编排 / 在线策略）**。其价值在于把“选哪个模型、走哪条链”也纳入学习对象；应使用预先冻结的专家池和按时间推进的 replay 来验收。

## 3. 时间序列 reasoning 模型最新研究

### [2026-10-02] [SEER: Self-Evolving Event Reasoning and Retrieval for Time Series Forecasting](https://arxiv.org/abs/2610.04109)

- 来源与日期：arXiv v1，2026-10-02；[官方代码库](https://github.com/BennyTMT/SEER) 于 2026-10-02 创建。
- 摘要：针对受新闻、政策和供给扰动影响的非平稳预测，把误差反馈拆成检索反思记忆与持久因果知识库；系统对检索与反思设置严格时间边界以避免前视。
- 相关性判断：**很高（事件 reasoning / RAG Agent）**。为事件驱动预测提供了比静态 RAG 更合理的闭环；“因果知识”仍应被视作可检验假设，而不是事实，并记录证据链接与发布时间。

### [2026-08-25] [Causal Analysis for Time Series Foundation Models](https://arxiv.org/abs/2608.24303)

- 来源与日期：arXiv v1，2026-08-25。
- 摘要：通过对参数化合成时间序列生成器实施干预，评估 Chronos-2 与 TimesFM-2.5 是否保持趋势、振荡、状态切换等模式；报告两者均可能在状态切换等模式上失效。
- 相关性判断：**高（reasoning / TSFM 验证）**。不是 Agent 模型本身，但可直接转化为 harness 的反事实压力测试；对模型路由与上线门禁具有实用价值。

## 4. GitHub 上值得跟踪的近期项目

### [2026-11-18] [TensorLink-AI/ephemeris-mcp](https://github.com/TensorLink-AI/ephemeris-mcp)

- 来源与日期：GitHub API；仓库创建 2026-10-04，最近推送 2026-11-18 UTC。
- 摘要：为 MCP 客户端提供多个零样本 TSFM（含 Chronos-2、TimesFM、Toto、TiRex-2、Timestral 与 Granite）的概率预测、路由和集成接口。
- 相关性判断：**高（TS Agent / MCP 工具层）**。能快速成为 Agent 的预测工具适配层；当前星标为 0，须先审查模型许可证、密钥边界、数据外发和本地回测一致性。

### [2026-11-03] [D2I-Group/metacaster](https://github.com/D2I-Group/metacaster)

- 来源与日期：GitHub API；仓库创建 2026-08-22，最近推送 2026-11-03 UTC（创建日期比窗口早一天，因窗口内有明确活动而保留）。
- 摘要：将 agent 放在训练前的“工程师”角色：生成任务适配训练数据、优化其 harness、训练并挑选轻量 forecaster；部署路径只保留选出的 forecaster。
- 相关性判断：**很高（harness / AutoML）**。对低样本和低延迟部署很有参考价值；应重点复查数据生成是否越过预测原点，以及下游验证是否为滚动回测。

### [2026-11-03] [D2I-Group/TSFLab](https://github.com/D2I-Group/TSFLab)

- 来源与日期：GitHub API；最近推送 2026-11-03 UTC、仓库页最近更新 2026-11-22 UTC。
- 摘要：Agent-first 的时序研究工作台，提供已复现模型目录、统一实验运行器、滚动实时赛道与公开榜单；Agent 自带模型/harness，工作台负责共享知识和可验证资源。
- 相关性判断：**很高（研究 harness / 可复现性）**。可作为本地 Agent 评测和复现实验的基础设施候选；许可证显示为 `NOASSERTION`，引入前须先确认使用与再分发条款。

### [2026-11-06] [fnauman/ts-agents](https://github.com/fnauman/ts-agents)

- 来源与日期：GitHub API；最近推送 2026-11-06 UTC。
- 摘要：CLI 优先的时间序列工具箱，提供可插拔 sandbox、可复用 skill、多 Agent 支持和评测 harness 工作流。
- 相关性判断：**中高（TS Agent / harness）**。工程形态贴近 Codex/Claude 等外部 Agent；规模仍小，建议先用无敏感数据的小型 walk-forward 任务验证 sandbox 与评分器。

## 5. 本轮检索与限制

- 优先核验 arXiv 论文元数据、论文/机构官方 GitHub 和 GitHub API；AI HOT 的公开研究接口本轮返回 404，未将其摘要作为事实来源。
- 过滤了 2026-08-23 之前首发且无窗口内明确活动的论文/项目；MetaCaster 是唯一“首发早一天、但窗口内有推送”的例外，已明确标注。
- GitHub 的描述、星标和维护状态来自仓库 API；均不等同于独立复现。建议本周优先为 Chronos-2、Timer-M1 与 SEER 建立统一的时序切分、外部信息可得性和预测区间校准验收表。

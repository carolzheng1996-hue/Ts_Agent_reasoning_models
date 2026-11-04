# 时间序列研究晨间简报｜2026-11-04

检索时间：2026-11-04 08:06–08:18（Asia/Shanghai）。严格时间窗口：**2026-08-04 至 2026-11-04**。论文日期采用 arXiv v1 的 UTC 时间并换算为北京时间；GitHub 项目日期采用 API `created_at`（UTC），`updated_at` 仅作为活跃度信号。作者报告的结果均未在本地复现。

## 1. 时间序列基础模型最新研究

### 2026-11-03｜[Evaluating Uncertainty Calibration in Probabilistic Time Series Foundation Models](https://arxiv.org/abs/2611.03592)

- **来源与日期**：arXiv v1，2026-11-02 18:34 UTC（北京时间 11 月 3 日）；论文注记为 NeurIPS 2026 Evaluations and Datasets track。
- **简短摘要**：系统梳理 TSFM 表示预测不确定性的方式，并在多预测窗场景区分 pooled、按 horizon 与条件校准等更细粒度指标。跨数据集实验显示，常用汇总指标会掩盖模型系统性的失校准模式；同时分析后处理重校准可修复与无法修复的部分。
- **相关性判断：高（TSFM 可靠性 / Agent 风险接口）**。若 Agent 用预测区间触发调度、升级或人工复核，校准需成为一等评测目标；应以滚动 forecast origin 分 horizon 报告覆盖率，不能仅报告全局区间覆盖。

### 2026-11-02｜[Control Foundation Models across Changing Block Diagrams: Generalizing Time-Series Prediction to Dynamic Graphs](https://arxiv.org/abs/2611.02900)

- **来源与日期**：arXiv v1，2026-11-02 10:33 UTC。
- **简短摘要**：将控制实验中的信号、缺失值和随阶段变化的连接关系统一成动态图上的 masked prediction；提出 Block Diagram Transformer，以时间注意力结合沿方块图连接的图网络，并可从既有 TSFM 初始化。作者在混合控制实验数据上报告可稳定原本不稳定的系统。
- **相关性判断：中高（控制型 TSFM / 闭环 Agent）**。它把“预测”延展到控制输入生成，适合关注需要行动闭环的时序 Agent；当前仍应重点核验控制约束、安全边界、测试系统规模及与普通微调的公平比较。

### 2026-11-02｜[Investigating the effects of the patch size in Time Series Foundation Models](https://arxiv.org/abs/2611.02750)

- **来源与日期**：arXiv v1，2026-11-02 08:38 UTC。
- **简短摘要**：在相同数据混合与训练预算下比较 encoder-only 与 decoder-only TSFM 的 patch size。97 个 GIFT-Eval 任务显示前者通常受益于较小 patch，后者呈 U 型关系；较长预测窗偏好更大的 decoder patch，且 2048 以上上下文的收益趋缓。
- **相关性判断：中高（TSFM 选型证据）**。对 Agent 的价值不是自动选一个固定 patch，而是把预测窗、延迟/算力预算与架构作为联动搜索空间；结果来自受控实验，不能直接外推至任意训练数据或领域。

## 2. 时间序列建模 Agent 最新研究

### 2026-11-02｜[Detect, Repair and Audit: A Hierarchical Multi-Agent Defense Against Adversarial Attacks in Energy Forecasting](https://arxiv.org/abs/2611.02310)

- **来源与日期**：arXiv v1，2026-11-02 00:00 UTC。
- **简短摘要**：面向电力需求预测中的受攻击传感器输入，提出局部控制中心的多 Agent 强化学习检测与信号修复，以及证据驱动、人工在环的 LLM 审计 Agent。作者报告最佳配置在所测数据/攻击对上 F1 超过 0.91，修复最多降低 83% 输入 RSE；这些均为作者实验结果。
- **相关性判断：高（时序运维 Agent / 安全）**。它将检测、修复、审计分层，并显式考虑延迟和证据链，适合高风险预测部署；需进一步检查攻击假设、clean reference 的现实可得性及审计 Agent 的漏报代价。

### 2026-11-02｜[TSSDA: An Autonomous Agent for Constructing a Time-Series Text-to-SQL Benchmark](https://arxiv.org/abs/2611.02132)

- **来源与日期**：arXiv v1，2026-11-01 19:08 UTC（北京时间 11 月 2 日）。
- **简短摘要**：提出用于时序数据库 Text-to-SQL 数据生成的 TSSDA，并构建 TERN benchmark。Agent 由规划/决策与查询生成模块组成，在线适配以扩大有效时序语法覆盖、多样性与复杂度；另设计 temporal-aware memory 复用异构数据实例中的经验。
- **相关性判断：高（时序数据 Agent / 工具调用）**。时序 Agent 若需自主取数，时间语法、窗口函数和 schema 差异是关键瓶颈；应检验生成 SQL 的真实执行正确率、跨数据库迁移性与 memory 是否造成模板泄漏。

### 2026-10-30｜[TSFLab: A Self-Improving Agent-Agnostic Workbench for Time Series Forecasting Research](https://arxiv.org/abs/2610.40901)

- **来源与日期**：arXiv v1，2026-10-29 19:22 UTC（北京时间 10 月 30 日）。
- **简短摘要**：为兼容的 coding Agent 提供低成本、可维护的时序复现、benchmark 与方法开发工作台。作者报告在复现/基准任务中完成量提升 20–163%，每完成任务的新 token 下降 11–66%。
- **相关性判断：高（时序 research harness）**。依然是时序研究 Agent 最直接的工作台候选；使用前应固化数据版本、滚动切分、随机种子和调参预算，避免 Agent 在验证集上反复试错形成选择偏差。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-19｜[TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- **来源与日期**：arXiv v1，2026-10-19 08:26 UTC。
- **简短摘要**：针对长链时序推理的 token 与延迟成本，定义 System-1 sufficiency，以保留关键频率模式的门控压缩表征对齐快速模型嵌入。作者在 13 个数据集上报告，相比微调 reasoning baseline 的平均推理时间降低 62.9%。
- **相关性判断：高（时序 reasoning / 低延迟路由）**。适合作为 Agent 的“快速充分”分支或级联初筛，但应针对极端事件、长尾模式、置信度失配做失效分析；不能把压缩后的高平均分等同于关键事件可解释性。

### 本轮更新说明

- 在 2026-11-03 至 2026-11-04 的新提交中，未检索到另一篇**日期可确认且以时序 reasoning 模型为核心贡献**的论文。因此保留窗口内最近的 TimesJev，并将本轮新发现分别归入 TSFM 或建模 Agent；避免把一般性的 Agent/LLM 论文误标为时序 reasoning。

## 4. GitHub：timeseries Agent、harness、ML、AutoML 项目

日期均为 GitHub API 的 UTC 创建时间；本轮读取公开元数据和仓库说明，未执行项目代码。项目按创建日期从近到远排序。

### 时间序列

### 2026-11-03｜[decisionintelligence/Rubato](https://github.com/decisionintelligence/Rubato)

- **来源与日期**：GitHub API `created_at`，2026-11-03 07:09 UTC；仓库描述标注为 NeurIPS 2026 Spotlight 的不规则多变量时序预测代码，MIT 许可证。
- **简短摘要**：官方代码入口聚焦以 Signature Attention 处理不规则多变量预测，属于模型/工程项目而非 Agent。
- **相关性判断：中高（时序建模候选）**。不规则采样在医疗、工业与能源 Agent 工具中常见，值得纳入统一回测；仓库尚新、star 数与独立复现证据有限，不能据此推断实际泛化表现。

### 通用 Agent harness / ML 工程（可迁移）

### 2026-11-02｜[Balanov/shim](https://github.com/Balanov/shim)

- **来源与日期**：GitHub API `created_at`，2026-11-02 17:54 UTC；本轮查询时约 431 stars，MIT 许可证。
- **简短摘要**：零依赖、本地优先的轻量 AI harness，声明支持任意模型、MCP 与 Agent Skills，并提供自然语言 CLI。
- **相关性判断：中（工具编排底座）**。可作为轻量化时序 Agent 原型的工具路由层，但并无时序数据版本、滚动验证或预测审计原语；生产使用前必须补齐权限、可复放日志与数值评测接口。

### 2026-11-01｜[Balanov/uncut](https://github.com/Balanov/uncut)

- **来源与日期**：GitHub API `created_at`，2026-11-01 17:19 UTC；本轮查询时约 592 stars，MIT 许可证。
- **简短摘要**：无头 coding-agent harness，主打小型静态二进制、标准输入输出与不静默截断的交互链路。
- **相关性判断：中（research harness 组件）**。对长时运行的 TSFLab 式实验 Agent，透明上下文与可脚本化 I/O 值得关注；它不是 AutoML/时序框架，需自行实现数据隔离、实验队列和指标门禁。

### 2026-10-31｜[deepseek-ai/dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype)

- **来源与日期**：GitHub API `created_at`，2026-10-31 09:32 UTC；本轮查询时约 16.7k stars，MIT 许可证，最近更新为 2026-11-04 UTC。
- **简短摘要**：DeepSeek 发布的“更自主 Agent 系统”原型。它是通用 Agent 工程样本，并非时序预测或 AutoML 专项项目。
- **相关性判断：中（通用多 Agent 编排参考）**。可考察其自主任务分解、工具调用与状态管理模式如何迁移到时序实验流水线；高关注度不替代时序基准、成本或可靠性验证。

## 5. 光伏功率预测最新研究

### 2026-10-30｜[IMPACT: Inverter-Informed Multimodal Learning for Photovoltaic Generation Forecasting](https://arxiv.org/abs/2610.40418)

- **来源与日期**：arXiv v1，2026-10-29 16:44 UTC（北京时间 10 月 30 日）。
- **简短摘要**：面向 10–110 分钟概率 PV 预测，结合电站历史、逆变器层云运动图、太阳几何和气象信息，并以在线自适应共形校准输出分位数。作者报告优于 14 个基线。
- **相关性判断：高（PV Agent 预测工具）**。多模态输入和区间校准适合调度/告警 Agent；落地时须按真实 forecast origin 回放云图与气象到达延迟。

## 6. 检索与筛选说明

- 通过 [arXiv API](https://export.arxiv.org/api/query) 按提交时间检索 `time series`、`time-series`、Agent、reasoning 和光伏预测相关词；条目以 arXiv v1 日期为准，未能确认首发日期的更新版本不作为“新研究”计入。
- 复核了公开 [GitHub Search API](https://docs.github.com/rest/search/search#search-repositories) 的新建仓库元数据；只将与时序建模直接相关、或可迁移到 Agent/harness/ML 工作流的项目纳入，并明确标注其非时序专用属性。
- 本轮未发现日期可核验、且比 11 月 3 日简报已列项目更具实质性的光伏新 GitHub/Hugging Face 项目，故保留一条窗口内优先论文并不以低质量新仓库凑数。

## 7. 观察与行动建议

- **可靠性先于更多模型**：TSFM 不确定性校准研究提示，Agent 把区间当作行动阈值前，应报告按 horizon、场景和时序顺序切分的 calibration，而非只看平均点预测误差。
- **Agent 的新重心是数据与防线**：TSSDA 解决时序数据查询覆盖，能源工作则补上攻击检测、修复与人工审计；两者都比“让 LLM 直接报预测值”更贴近可控系统。
- **harness 采用要设时序门禁**：新通用项目可以借鉴编排方式，但纳入研究流水线前，至少应加入不可变数据版本、rolling-origin 回测、预算上限、失败可复放与证据产物。

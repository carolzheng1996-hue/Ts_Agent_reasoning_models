# 时间序列研究晨间简报｜2026-11-03

检索时间：2026-11-03 09:12–09:34（Asia/Shanghai）。严格时间窗口：**2026-08-03 至 2026-11-03**。论文日期采用 arXiv v1（UTC；日期换算为北京时间）；GitHub 项目采用 API 的 `created_at`，`updated_at` 仅表示活跃度。性能均为作者报告，未在本地复现。

## 1. 时间序列基础模型最新研究

### 2026-10-31｜[Chronos-2: A foundation model for multivariate time series forecasting](https://arxiv.org/abs/2610.41956)

- **来源与日期**：arXiv v1，2026-10-30 16:08 UTC（北京时间 10 月 31 日）；[官方代码](https://github.com/amazon-science/chronos-forecasting)。
- **简短摘要**：在零样本预测中联合建模多变量序列与异构协变量，直接从历史上下文推断序列间关系并生成概率预测。作者报告相对最强基线平均 skill score 增加 5.2 个百分点，并在单张中端 GPU 上为 100 条序列预测耗时低于一秒。
- **相关性判断：高（TSFM / Agent 工具）**。协变量与多序列关系使它比单变量基座更接近能源、经济等 Agent 场景；接入 Agent 前应审计未来协变量的可用时间及区间校准，而非只看平均误差。

### 2026-10-28｜[Timestral](https://arxiv.org/abs/2610.37585)

- **来源与日期**：arXiv v1，2026-10-27 17:25 UTC（北京时间 10 月 28 日）；[官方推理代码](https://github.com/mistralai/timestral)。
- **简短摘要**：Mistral 发布 5M–209M 参数的概率预测模型族，以 Decoupled Horizon Forecasting 分离预测 token 与因果编码上下文，并原生支持已知未来协变量；权重与代码均公开。
- **相关性判断：高（TSFM / 可替换预测后端）**。它是构建多模型 Agent 的可落地候选；论文的榜单结论仍须在目标频率、预测窗和可用协变量约束下做滚动回测。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-30｜[TSFLab: A Self-Improving Agent-Agnostic Workbench for Time Series Forecasting Research](https://arxiv.org/abs/2610.40901)

- **来源与日期**：arXiv v1，2026-10-29 19:22 UTC（北京时间 10 月 30 日）。
- **简短摘要**：为编码 Agent 提供共享工具、资源和持续维护机制，用于时序论文复现、benchmark 与方法开发。作者报告相对对照任务完成量提高 20–163%，每完成任务的新 token 降低 11–66%。
- **相关性判断：高（时序 Agent / research harness）**。直接对应“Agent 做时序研究”的运行层；最值得复核的是任务完成的判据、基准环境锁定方式，以及 Agent 是否在验证集上反复试错造成选择偏差。

### 2026-10-15｜[TimeRSI: Towards Self-Improved Agentic Deployment for Time-Series Foundation Models](https://arxiv.org/abs/2610.19725)

- **来源与日期**：arXiv v2，2026-10-14 07:48 UTC；首发日期未在本轮接口结果中确认，故降级呈现。
- **简短摘要**：将 TSFM 部署过程表述为可自我改进的 Agentic 流程，关注模型选择、适配和运行反馈。
- **相关性判断：中高（TSFM 运维 Agent）**。主题直接相关，但本轮仅确认到 v2 更新，不能将它当作 10 月的新首发；后续应追溯 v1 与代码/评测设置后再作重点跟踪。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-19｜[TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- **来源与日期**：arXiv v1，2026-10-19 08:26 UTC。
- **简短摘要**：为避免长链时序推理的 token 与延迟开销，先学习保留关键频率模式的门控压缩表征，再将其对齐到快速 System-1 模型嵌入空间。作者在 13 个数据集上报告，较微调 reasoning 基线平均推理时间少 62.9%。
- **相关性判断：高（时序 reasoning / 线上 Agent）**。为 Agent 设置“快速充分表征即可回答”的路由分支提供思路；应同时检验难例退化、置信度与长序列压缩是否损失罕见事件信号。

### 2026-08-26｜[LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- **来源与日期**：arXiv v1，2026-08-26。
- **简短摘要**：按任务设置梳理 LLM 时序 Agent 的架构、工具使用与记忆设计，并讨论不同任务需求如何改变 Agent 方案。
- **相关性判断：中高（研究地图）**。它不是新模型，但可作为 Agent/harness 设计的近期分类框架；综述本身不构成特定方法有效性的实证证据。

## 4. GitHub：timeseries Agent、harness、ML、AutoML 项目

日期均为 GitHub API UTC 创建时间；本轮读取仓库元数据与公开说明，未执行仓库代码。

### 时间序列 / Agent / harness

### 2026-10-16｜[mistralai/timestral](https://github.com/mistralai/timestral)

- **摘要**：Timestral 的官方推理仓库；本轮 API 显示 2026-11-03 仍有更新，约 1,049 stars。
- **相关性判断：高（TSFM 工程入口）**。和上述论文构成同一项目，因此作为代码入口保留，不另将 Hugging Face 重复计数。

### 2026-10-14｜[Nixtla/conformalforecast](https://github.com/Nixtla/conformalforecast)

- **摘要**：Nixtla 新建的时序预测共形预测仓库，聚焦不确定性区间。
- **相关性判断：高（Agent 风险接口）**。可把预测区间/覆盖率作为 Agent 是否升级、人工复核或选择保守动作的输入；须用时序顺序校准，不能随机打乱。

### 2026-10-07｜[google-research/harness2](https://github.com/google-research/harness2)

- **摘要**：Google Research 新建的 harness 项目；本轮 API 显示约 22,113 stars 且仍在更新。
- **相关性判断：中（通用 Agent harness）**。并非时序专用，但适合关注其任务环境、回放与评测设计；仓库简述为空，不能据 stars 推断其时序能力。

### 2026-08-16｜[EvoMap/AutoResearch](https://github.com/EvoMap/AutoResearch)

- **摘要**：定位为从研究想法到可用于论文的证据的 AI/ML research agents；本轮 API 显示约 3,091 stars，最近仍有更新。
- **相关性判断：中高（AutoML / 研究 Agent）**。可借鉴自动实验的证据记录与可复现流程；对时序任务必须额外加入 forecast origin、数据版本和调参预算的不可变审计。

### 2026-08-12｜[TimeCopilot/foundationforecast](https://github.com/TimeCopilot/foundationforecast)

- **摘要**：为 Chronos、TimesFM、Timestral、TimeGPT 等提供统一 API，并声称涵盖预测、交叉验证、异常检测和外生变量。
- **相关性判断：高（TSFM 选型层）**。有利于把多种基础模型接到同一 Agent 工具接口；需优先检查其 cross-validation 是否为 rolling-origin，以及外生变量是否区分已知未来与观测后才可见。

## 5. 光伏功率预测最新研究

### 2026-10-30｜[IMPACT: Inverter-Informed Multimodal Learning for Photovoltaic Generation Forecasting](https://arxiv.org/abs/2610.40418)

- **来源与日期**：arXiv v1，2026-10-29 16:44 UTC（北京时间 10 月 30 日）。
- **简短摘要**：面向 10–110 分钟概率 PV 预测，融合电站历史、逆变器层云运动图、已知未来太阳几何与当前气象；以 smart persistence 为锚并以在线自适应共形校准输出分位数。作者报告优于 14 个基线。
- **相关性判断：高（PV 预测 / Agent 工具）**。多模态输入和区间校准适合调度 Agent，但云图、气象和逆变器数据的到达延迟须按真实 forecast origin 回放。

### 2026-10-20｜[Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting](https://arxiv.org/abs/2610.27763)

- **来源与日期**：arXiv v1，2026-10-20 07:26 UTC。
- **简短摘要**：以 479 个分布式 PV 站点进行多站点、多预测窗预训练，把历史功率、气象观测、未来 NWP 与时间编码统一为序列补全；在 139 个空间留出站点上评测零样本迁移。
- **相关性判断：高（领域 TSFM）**。是目前最贴近多站点 PV Agent 的基座候选之一；重点检查 NWP 版本/vintage、空间留出是否同时避免时间泄漏，以及新站点适配成本。

## 6. DailyArXiv 补检结论

- 已读取 [zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv) 当前公开 README；本次原始关键词检索未获得可稳定定位的主题行，故**不以聚合页日期替代论文 v1 日期**。
- 以上论文均以 arXiv 原始条目日期为准；未发现需要据 DailyArXiv 单独补入、且日期可确认的新增条目。

## 7. 观察与行动建议

- **模型层**：多变量协变量建模（Chronos-2）、已知未来协变量（Timestral）与不确定性（conformalforecast）正在成为预测工具接口的共同需求。
- **Agent 层**：TSFLab 将重点从“让 Agent 调一个模型”转向可维护的复现与评测工作台；建议将环境版本、数据 vintage、滚动切分和试验预算一并记录。
- **部署层**：TimesJev 指向低延迟推理，而 PV 两篇工作强调多源可用性和校准；生产评估应同时报点误差、区间覆盖、延迟与决策损失。

# 2026-11-16 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-16 10:55–11:12 CST（Asia/Shanghai）。
- 时间窗口：2026-08-16 至 2026-11-16（含首尾）。论文按 arXiv v1 / 正式公开日，项目按 GitHub `created_at` 或项目更新日志；日期无法独立确认时降为线索。
- 来源：arXiv、GitHub 官方 API / README、公开项目页，以及 `zezhishao/DailyArXiv` 的公开 `master` README。效果数字均为作者声明，未独立复现。

## 今日结论

1. **11 月 14–16 日未检出可由 arXiv v1 页面核验、且直接属于 TSFM、时序 Agent/reasoning 或光伏功率预测的新首发论文。** 本报保留窗口内的最近高价值信号，并明确避免把“网页抓取/仓库更新时间”写成论文首发日期。
2. **近期最实用的新增工程线索是 SolarCast-Lite。** 它以公开气象数据和地点/面板配置给出下一小时 PV 产量预测，适合拿来检验端到端数据可得性、地理泛化与实际部署边界；它是 hackathon 原型，不是经过同行评审的基线。
3. **研究主线仍是把显式证据、数值先验与可追溯工具调用组合起来。** CastReasoner 的上下文证据链与 FASE 的标签回流分别覆盖推理时与运行后的闭环，但二者都需以 as-of 时间戳和滚动回测防止泄漏。

## 1. 时间序列基础模型最新研究

### [2026-11-04] [Decouple to Reuse: Fine-Grained Knowledge Augmentation for Time Series Foundation Models](https://arxiv.org/abs/2611.05993)

- 来源与日期：arXiv v1，2026-11-04。
- 摘要：为冻结 TSFM 构建趋势与季节性两支残差 codebook，再按任务检索、聚合和门控融合细粒度模式；作者在 8 个真实基准、4 个 TSFM 骨干上报告有效性与计算效率提升，并给出匿名代码链接。
- 相关性判断：**高（TSFM / 检索增强）**。可让 Agent 复用可审计的模式单元而非整段相似窗口；需验证 codebook 的构建数据、检索库更新时点与测试窗口是否严格隔离。

### [2026-10-04] [A Unified Scaling Law for Time Series Foundation Models](https://arxiv.org/abs/2610.05269)

- 来源与日期：arXiv v1，2026-10-04。
- 摘要：在多数据集、频率和 checkpoint 上拟合容量、历史长度与预测期限的统一关系，用于预测未参与拟合的缩放曲线。
- 相关性判断：**高（foundation model / 资源决策）**。可作为 Agent 选择“扩容模型还是增加上下文”的先验，但仍需目标业务的成本—误差回放验证。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 把预测过程写入 episodic memory，并在真实标签延迟到达后以在线策略信号更新后续预测路径；作者报告多个 GIFT-Eval 设置优于最佳单一 TSFM 的归一化 MAE。
- 相关性判断：**很高（forecasting Agent / 在线学习）**。适合持续标签回流场景；记忆写入、标签到达和策略更新须全部按预测原点后的真实可得信息回放。

### [2026-08-26] [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 来源与日期：arXiv v1，2026-08-26。
- 摘要：按 forecasting/reasoning、数据增广与合成、异常检测/诊断、决策支持梳理 LLM 时序 Agent 的架构、工具、记忆和评测资源。
- 相关性判断：**高（系统设计地图）**。适合作为选型和文献筛选框架；综述本身不构成具体 Agent 的效果证据。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：CastReasoner 用“提取上下文预测证据—推断未来动态—与数值预测先验比较—决策”的结构化链路，并结合多教师轨迹、SFT 与多目标 RL 后训练。
- 相关性判断：**很高（reasoning / context-aware forecasting）**。是把新闻、事件等外部信息引入预测的候选修正层；每条证据的来源、发布时间和数值先验都必须可追溯并支持回放。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源与日期：arXiv v1，2026-10-19。
- 摘要：以充分性损失与可实现性约束学习序列压缩表示，并用门控保留关键频率模式；作者报告相对所比较 reasoning 方法降低平均推理时间。
- 相关性判断：**高（reasoning efficiency）**。可设计 fast-path/slow-path：快速表示不充分时再调用统计工具或长链 reasoning；速度提升不等同于预测校准。

## 4. 光功率 / 光伏功率预测最新研究

### [2026-10-29] [IMPACT: Inverter-Informed Multimodal Learning for Photovoltaic Generation Forecasting](https://arxiv.org/abs/2610.40418)

- 来源与日期：arXiv v1，2026-10-29。
- 摘要：为 10–110 分钟概率预测分别编码电站历史、逆变器级云动态、已知太阳几何和当前气象，以门控交叉注意力融合，再使用自适应保形校准输出分位数。
- 相关性判断：**很高（PV 预测 / 可校准数值工具）**。太阳几何、实时气象与云图的可得时间可直接写成 Agent 工具契约；跨电站泛化和输入可用性仍要单独验证。

### [2026-09-14] [Horizon-specific Expert Fusion for Photovoltaic Power Forecasting](https://arxiv.org/abs/2609.15035)

- 来源与日期：arXiv v1，2026-09-14。
- 摘要：结合时序神经模型、历史相似日、状态气候学与梯度提升树，并按预测期学习凸组合权重、利用近期误差校准偏差；在 PVDAQ 和 GEFCom2014 solar 上评估。
- 相关性判断：**高（PV / 集成与校准）**。适合作为 Agent 的候选模型融合和近期残差校准参考；论文也指出相对强单模型的收益随数据集和时期变化。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

### [2026-11-03] [D2I-Group/metacaster](https://github.com/D2I-Group/metacaster)

- 来源与日期：官方 GitHub README；仓库创建 2026-08-22，最近明确项目更新 2026-11-03，README 标注 EMNLP 2026。
- 摘要：多 Agent 不直接输出预测，而是生成任务适配训练数据、优化生成过程并训练轻量预测器，用于 few-shot 时序预测。
- 相关性判断：**很高（Agent / AutoML / 可部署预测器）**。值得审查其 few-shot 数据合成边界、训练—评测隔离和复现实验成本；不是 11 月新建仓库，故不作为“今日新项目”。

### [2026-11] [TimeCopilot/foundationforecast](https://github.com/TimeCopilot/foundationforecast)

- 来源与日期：官方 GitHub README 更新日志，2026-11。
- 摘要：统一封装 Chronos、TimesFM、Timestral、TimeH2O、TimeGPT 等 TSFM；11 月新增 Kumo-Forecast、Prophet adapter 与跨模型保形预测区间。
- 相关性判断：**很高（TSFM serving / harness）**。适合作为 Agent 的受控模型适配层，但必须增加协变量 as-of 校验、walk-forward 评分和模型版本锁定。

### 光伏功率预测

### [2026-11-14] [nashwu0117/SolarCast-Lite](https://github.com/nashwu0117/SolarCast-Lite)

- 来源与日期：GitHub API；创建 2026-11-14 05:48 UTC，检索时最后活动 2026-11-15 22:02 UTC。
- 摘要：面向新西兰任意地点与面板配置，以实时地图、全国电网视图和本地 AI assistant 展示下一小时太阳能板功率的 ML 预测；README 定位为 Veritas AI Hackathon 2026 项目。
- 相关性判断：**中（PV 工程原型）**。可用于检查公开天气数据、地理特征与用户侧输出的端到端接口；未见论文、基准或许可核验，不应作为预测精度证据。

## 建议动作

1. 为所有外部上下文和协变量保留 `source_url`、`published_at`、`observed_at`、`available_at` 与数据版本；回测只读取预测原点时可见的数据。
2. 在 PV 场景按预测期比较单模型、专家融合与校准：同时报告 MAE/RMSE、分位数损失、区间覆盖、晴/阴天分层误差和数据延迟。
3. 先用固定版本的 FoundationForecast / MetaCaster 类框架建立 walk-forward harness，再让 reasoning 或在线策略进入同一预算、同一信息集的对照实验。

## 限制

- 本次 arXiv API 对 2026-11-13 至 11-16、`"time series"` 的精确 submittedDate 查询返回 0 条；不能据此推出全站无关论文，因此只写作“未检出可核验的直接相关首发”。
- GitHub `updated_at` 仅表示仓库活动，不能代表项目首发；本文对新项目优先使用 `created_at`。

## DailyArXiv 补检结论

- 已读取 [`zezhishao/DailyArXiv`](https://github.com/zezhishao/DailyArXiv) 公开 `master` 分支 README；最新自动更新提交为 **2026-11-05 22:11 UTC**，`Time Series` 栏最后条目日期为 **2026-11-04**，因此没有 11 月 5 日后的新增可补。
- 栏内的 **Decouple to Reuse**（arXiv v1 2026-11-04）在三个月窗口内且直接相关，已补入本报基础模型栏目；其匿名代码库状态与实际可复现性仍需后续核验。
- 栏内如 AdaMamba 等若首发超出窗口，或 README 更新日与 arXiv v1 不一致，均不因清单更新而提升优先级。

# 2026-11-17 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-17 09:03–09:11 CST（Asia/Shanghai）。
- 时间窗口：2026-08-17 至 2026-11-17（含首尾）。论文日期取 arXiv v1；项目日期优先取官方 GitHub 页面可见的创建/发布信息。无法独立核验者标作“日期不确定”，不以抓取时间冒充首发日期。
- 来源：arXiv、官方 GitHub README/项目页、GitHub 搜索结果；效果数字均为作者声明，未独立复现。

## 今日结论

1. **截至本次检索，未检出 11 月 17 日当天可由首发日期核验、且直接聚焦 TSFM、时间序列 Agent/reasoning 的新论文。** 因此不将网页抓取或仓库更新时间误写为研究首发。
2. **工程侧值得优先试用的接口是 TSFM 的受控工具化。** Ephemeris MCP 聚合多个开权重 TSFM；`timeseries-mcp` 则把统计检验封装为无代码执行的类型化工具。两者可组成“数值工具 + 预测器”双层 Agent，但仍必须自行建立 walk-forward 评测。
3. **光伏方向的近期强信号是跨站点、含 NWP 的基础式预训练。** 它直接面向新站迁移，与时序基础模型的泛化目标一致，但尚不是通用 TSFM 或 Agent 论文。

## 1. 时间序列基础模型最新研究

### [2026-09-21] [$t_0$: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)

- 来源与日期：arXiv v1，2026-09-21。
- 摘要：发布 102M/256M 开放权重 TSFM；以时间轴和变量轴交替注意力结合目标历史、过去协变量及已知未来协变量，并以分位数给出概率预测，无需任务专门微调。
- 相关性判断：**很高（TSFM / 协变量预测）**。适合成为 Agent 的数值预测工具；需把未来协变量的真实可得时点锁入工具契约，防止回测泄漏。

### [2026-10-22，日期由 arXiv 编号推定，待页面二次核验] [Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting](https://arxiv.org/abs/2610.27763)

- 来源与日期：arXiv；检索页显示为约三周前发布，精确 v1 时间本轮未能独立读取，故降级处理。
- 摘要：将多站点、多预测期 PV 功率、气象观测、未来 NWP 与时间编码统一为序列补全，在异构站点数据上做共享预训练；比较预测对齐重建、通用重建与混合目标。
- 相关性判断：**高（领域基础模型 / PV 迁移）**。直接验证“跨站点预训练—新站适配”的 TSFM 思路；目前只应视为 PV 专项证据，不能外推至通用时序。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 将预测过程写入 episodic memory，待真实标签延迟到达后再以在线策略信号调整后续预测路径；作者在多组 GIFT-Eval 设置中报告优于单一 TSFM 的归一化 MAE。
- 相关性判断：**很高（forecasting Agent / 反馈闭环）**。适合有延迟标签回流的业务；记忆写入、标签可见性和策略更新必须按预测原点回放。

### [2026-11-03，仓库明确项目更新；创建日未本轮复核] [D2I-Group/metacaster](https://github.com/D2I-Group/metacaster)

- 来源与日期：官方 GitHub README；README 标注 EMNLP 2026，且 2026-11-03 有明确项目更新，项目首发日期本轮未独立核验。
- 摘要：多 Agent 不直接预测，而是生成任务适配训练数据、优化生成 harness，并训练/选择轻量下游预测器，面向 few-shot 时序预测。
- 相关性判断：**很高（Agent / AutoML / harness）**。值得审计其合成数据是否泄露测试分布、轻量模型选择的搜索预算，以及训练—评测隔离。

## 3. 时间序列 reasoning 模型最新研究

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：CastReasoner 建立“提取上下文证据—推断未来动态—同数值预测先验比较—决策”的结构化链路，并以多教师轨迹、SFT 与多目标 RL 训练。
- 相关性判断：**很高（reasoning / context-aware forecasting）**。是接入新闻、事件等外部信息的候选修正层；证据 URL、发布时间和可得时间需与数值先验一起存档、可回放。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源与日期：arXiv v1，2026-10-19。
- 摘要：以充分性损失与可实现性约束学习序列压缩表征，再通过门控保留关键频率模式；作者报告相较所比 reasoning 方法降低平均推理时间。
- 相关性判断：**高（reasoning efficiency）**。可作为 Agent 的快速路径，在证据不足时才升级到统计工具或长链 reasoning；速度不代表校准质量。

## 4. 光伏功率预测最新研究

### [2026-10，精确日待核验] [Physics-Informed State Space Models for Day-Ahead Photovoltaic Power Forecasting](https://arxiv.org/abs/2610.14014)

- 来源与日期：arXiv；搜索结果显示 2026-10 发布，精确 v1 日期本轮未独立核验。
- 摘要：以太阳几何、辐照度、温度和逆变器限制构成物理基线，用状态空间模型从 NWP 中学习残差，进行 24 小时日前预测。
- 相关性判断：**高（PV / 物理约束工具）**。可为 Agent 的物理基线与异常诊断提供可解释锚点；需在不同气候、站点配置和 NWP 延迟下复验。

## 5. GitHub 上值得跟踪的新项目

### 时间序列

### [2026-10 下旬，创建日待核验] [TensorLink-AI/ephemeris-mcp](https://github.com/TensorLink-AI/ephemeris-mcp)

- 来源与日期：官方 GitHub README；检索结果显示约三周前已被收录，精确创建/首发日期本轮未能独立核验，故降优先级。
- 摘要：为 MCP 客户端暴露 Chronos-2、TimesFM 2.5、Toto 2、TiRex-2、IBM Granite 等开权重 TSFM，并支持显式选择、路由或按准确率加权集成及预测区间。
- 相关性判断：**很高（TSFM serving / Agent 工具）**。可快速搭建可替换的预测器层；必须将模型版本、路由规则、协变量可用性和预测原点一起记录。

### [2026-10，日期不确定] [Lkhanaajav/timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp)

- 来源与日期：官方 GitHub README；页面在 2026-11-16 仍活跃，创建日期本轮未独立核验。
- 摘要：提供异常、变点、分解、平稳性、趋势和质量审计等 17 个类型化 MCP 工具；采用路径沙箱、无网络、无 `eval/exec` 的设计，原始序列以句柄留在服务端。
- 相关性判断：**高（Agent 工具 / 安全数值推理）**。适合作为 reasoning Agent 的可审计统计层；功能正确性、数值边界和数据目录授权仍须本地测试。

### [2026-10–11，日期不确定] [D2I-Group/TSFLab](https://github.com/D2I-Group/TSFLab)

- 来源与日期：官方 GitHub 项目页；本轮未独立核验创建日，列为工程线索。
- 摘要：Agent-first 时序预测平台，收录 190+ 复现模型、可复现实验配置、滚动实时赛道与公开排行榜。
- 相关性判断：**高（benchmark / harness）**。适合建立统一的模型、数据与回测入口，再接入 Agent；排行榜结果不应替代目标域的滚动验证。

### 光伏功率预测

- 本轮未发现可独立确认、近三个月内新建且直接面向光伏预测的 GitHub/HuggingFace 项目；不以旧仓库的最近提交充作“新项目”。

## 6. DailyArXiv 补检结论

- 已直接核验 [zezhishao/DailyArXiv README 的 Time Series 板块](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)：页面标注最后更新为 **2026-11-06**，最近一次 README 自动更新提交为 **2026-11-05 22:11 UTC**。因此它不能覆盖 11 月 6 日之后的新增论文，不能据此断言“近期无新条目”。
- [2026-11-01] [Uncertainty-Aware Joint Generative Modeling of Fault Event Sequences and Sensor Time Series in Solar PV Plants](https://arxiv.org/abs/2611.01425) 出现在该板块且处于三个月窗口内。它用 Transformer Hawkes Process、iTransformer 与条件扩散联合生成 PV 电站事件和传感器轨迹，面向故障预测、维护及能源优化。
  - 相关性判断：**中等（PV 时序建模 / 不等同于光功率预测）**。可作为 PV 场站多模态状态建模的旁证，但其目标不是日前/超短期功率预测，故不纳入上文“光伏功率预测最新研究”的主结论。
- 本次未在该板块发现标题或摘要直接聚焦“时间序列 Agent”“time-series reasoning”或通用预测 TSFM、且比晨报已收录论文更贴近主题的新增条目；其余命中多为通用预测、插补或异常检测，优先级较低。

## 建议动作

1. 建立固定的 walk-forward harness：锁定 `as_of`、特征/协变量 `available_at`、模型版本、路由决策与输出分位数。
2. 用 `timeseries-mcp` 的分解、变点、平稳性和质量工具做前置诊断，再以 Ephemeris 类接口并列跑 TSFM；统一报告 MAE、CRPS/分位数损失、覆盖率和耗时。
3. 对 PV 单列晴/阴天、站点冷启动、NWP 延迟和传感器缺失切片；比较物理基线、专用预训练与通用 TSFM。

## 检索限制

- 本轮 GitHub REST API 因未认证限流，未能对所有候选仓库重取 `created_at`；因此一律将未核验日期标为不确定。
- DailyArXiv 的公开清单页面标注的最后更新为 2026-11-06，最近 README 自动更新提交为 2026-11-05 22:11 UTC；不能作为 11 月中旬“无新条目”的充分证据，故未据此作排他性结论。

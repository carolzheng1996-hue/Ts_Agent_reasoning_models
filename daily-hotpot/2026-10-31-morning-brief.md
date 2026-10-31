# 时间序列研究晨间简报｜2026-10-31

检索时间：2026-10-31 15:30–15:36（Asia/Shanghai）。严格时间窗口：2026-07-31 至 2026-10-31；论文日期优先采用 arXiv **v1**，项目日期采用 GitHub `created_at`，`pushed_at` 仅表示活动。本文只列出本轮重新核验或新增的高相关条目；性能为作者报告，均未在本地运行复现。

## 1. 时间序列基础模型最新研究

### 2026-10-29｜[Modular Bayesian Foundation Models](https://arxiv.org/abs/2610.39043)：以不确定性路由模块化时序编码器

- **来源与日期**：arXiv v1，2026-10-28 23:16 UTC（北京时间 10 月 29 日）。
- **简短摘要**：构建一组紧凑 Bayesian 时序编码器，以认知不确定性在未标注的分布外数据上选择专家；作者报告在七个流入数据集上，路由的校准指标优于距离式路由，并以更少存储换取近似预测误差。
- **相关性判断：高（TSFM / Agent 路由）**。这是真正与 Agent 选模有关的 TSFM 组件，但论文中的 OOD、选择和预测测试边界仍须严格分离；不能以同一批流入数据既决定专家又宣称泛化收益。

### 2026-10-29｜[轴向注意力 TSFM 的单位置回归理论](https://arxiv.org/abs/2610.40188)：解释结构化时序注意力的条件结论

- **来源与日期**：arXiv v1，2026-10-29 14:46 UTC。
- **简短摘要**：把 Single Location Regression 推广到二维结构数据，分析轴向注意力在稀疏信息场景的统计性质及训练动力学，并给出特定温度缩放下投影梯度下降收敛到 oracle 参数的结果。
- **相关性判断：中高（TSFM 理论）**。补充“为何用轴向注意力”的理论线索，但并非完整基础模型或实证 forecasting 结论；其 oracle 和渐近条件不能直接外推至生产预测。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-28｜[Vendster](https://arxiv.org/abs/2610.38292)：评测预测工具质量如何改变 LLM Agent 决策

- **来源与日期**：arXiv v1，2026-10-28 05:23 UTC；[官方代码](https://github.com/amazon-science/Vendster)由论文声明公开。
- **简短摘要**：以 M5 需求序列为基础，控制输入预测的偏差和区间宽度，观察买卖双方 LLM Agent 谈判结果。作者报告常用预测误差指标无法显著预测谈判结果，而偏差方向与 Agent 的预测反应性更关键。
- **相关性判断：高（时序 Agent / harness）**。它把“预测准确”与“下游 Agent 决策价值”拆开，是 Agent 工具验收的重要框架；不过场景是谈判模拟，不能直接替代电力或光伏调度评测。

### 2026-10-29｜[IMRouter](https://arxiv.org/abs/2610.39246)：面向少数时序模式的专家路由

- **来源与日期**：arXiv v1，2026-10-29 03:00 UTC。
- **简短摘要**：针对长尾时间模式在总体损失中被淹没的问题，使用梯度冲突与局部梯度密度指导专家分工，并把路由知识迁移到时序—语言对齐。
- **相关性判断：中高（LLM 时序建模 / 路由）**。是模型内的专家路由，不是自主工具调用 Agent；对含罕见天气或突变工况的预测很有启发，仍需按长尾模式分别报告滚动起点结果。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-28｜[Vendster](https://arxiv.org/abs/2610.38292)：预测偏差会通过推理链放大或改变决策

- **来源与日期**：arXiv v1，2026-10-28 05:23 UTC。
- **简短摘要**：该工作不是新的数值 reasoning 主干，而是通过可控预测输入测量不同 LLM Agent 的行为反应；作者在其参考场景中观察到模型预测可提高销售目标达成率，但准确率与该结果不等价。
- **相关性判断：高（reasoning 评测）**。对“时序预测交给 Agent 后是否仍有用”给出可操作的因果评测思路：固定工具输出版本，同时干预偏差、区间与可用时间；结论不应被泛化为所有业务 Agent 的收益。

## 4. GitHub：timeseries Agent、harness、ML、AutoML 项目

以下日期均为 GitHub UTC 创建时间；本轮阅读 README/文件树，未执行项目。

### 时间序列 / AutoML / harness

### 2026-10-31｜[AutoML-Agent](https://github.com/Jitendra-Reddy04/AutoML-Agent)

- **摘要**：FastAPI 形式的表格 AutoML 服务，README 声明有数据审计、候选筛选、调参、独立 holdout、决策日志与预测接口。
- **相关性判断：AutoML/harness 中高、时序直接性低**。仓库元数据 `size=0`，README 的工作流声明尚不足以证明实现、测试或时序切分存在；若接入时序任务，必须将随机 holdout 换为滚动起点拆分。

### 2026-10-30｜[AegML](https://github.com/Sallle-1/AegML)

- **摘要**：预算受限的表格 ML Agent，README 给出候选准入、受限 AutoResearch、验证集选择、全量重训和提交文件完整性校验，并声称附带 362 个合成夹具测试。
- **相关性判断：harness 高、时序直接性低**。其预算、清理子进程和可复现产物值得借鉴；但固定验证切分与竞赛式 CSV 提交并非时间序列验证，不能直接作为 forecasting harness。

### 光伏功率预测

### 2026-10-30｜[pv-forecast-leakage-benchmark](https://github.com/vamshikrishna21vk/pv-forecast-leakage-benchmark)

- **摘要**：针对两座印度电站的 15 分钟超短期预测，代码明确区分目标时刻泄漏与因果特征，并提供 persistence、smart persistence、CLIPER、树模型、四折 expanding-window 与 Diebold–Mariano/Holm 比较；仓库包含结果和复现脚本，原始 Kaggle 数据需另行下载。
- **相关性判断：高（光伏预测 / 评测 harness）**。这是本轮最值得跟踪的 PV 工程条目：它直接把前视泄漏设为对象；不过仅两座电站、数据可得时间和天气观测发布延迟仍须独立审计。

### 2026-10-30｜[bess-forecast-uncertainty](https://github.com/aalbata/bess-forecast-uncertainty)

- **摘要**：MATLAB 可复现实验研究建筑负荷、PV 与 EV 预测误差怎样影响储能削峰；含 PVGIS 气象数据、逐 trial 结果、控制器比较和测试脚本。
- **相关性判断：中高（PV 预测下游价值）**。重点是预测误差对储能调度的敏感性，不是提出新的 PV 预测器；PVGIS/合成设计日与真实实时预报的时间可得性不能混同。

## 5. 光伏功率预测最新研究

### 2026-10-29｜[风电多步多变量预测的 GradientSHAP 案例](https://arxiv.org/abs/2610.40330)：相邻能源可解释性线索

- **来源与日期**：arXiv v1，2026-10-29 15:57 UTC。
- **简短摘要**：针对多步、多变量风电预测，调整 GradientSHAP 的聚合与可视化方式，分析环境变量和站点条件对预测的局部与全局作用。
- **相关性判断：中（邻近于光伏功率预测）**。它不是 PV 论文，保留是因其可解释性流程可迁移至光伏；对 PV 的有效性、辐照度特征的可得时间及跨站稳健性均未验证。

**直接 PV 首发空结果**：本轮 arXiv 定向检索未确认 10 月 30 日后、日期可核验的光伏功率预测论文首发；因此以两个可复查的新仓库补充工程信号，不将风电解释性工作冒充为光伏预测证据。

## 6. DailyArXiv、来源与建议

- 已核对 [DailyArXiv README 的 Time Series 栏](https://github.com/zezhishao/DailyArXiv/blob/master/README.md)：`Last update: 2026-10-30`，该栏最新日期仍为 2026-10-27，包含 Timestral 和 Pneuma；本轮的 10 月 28–29 条目尚未在其已更新列表中出现。没有把聚合页更新日误当作论文首发日。
- AI HOT 近七日精选论文流已按技能要求补检，返回的是通用 AI 安全、模型与 Agent 新闻，未发现可直接纳入 TSFM、时序 Agent/reasoning 或 PV 预测栏的条目，故不以泛 AI 内容填充。
- 下一步优先复验：对 `pv-forecast-leakage-benchmark` 固化“特征观测—预报发布—预测发出—标签可得”时间线；以 Vendster 的受控干预方式测量同一预测器在光伏调度 Agent 中的决策价值，而不仅比较 RMSE。

# 2026-09-08 时间序列 Agent / Reasoning / Foundation Model 晨间简报

检索时间：2026-09-08 15:31–15:39 CST（Asia/Shanghai；本次为晨报补跑）。
时间窗口：2026-06-08 至 2026-09-08，含首尾日期。
日期口径：论文按 arXiv v1 首发日期、项目按 GitHub `created_at` 排序；修订与推送另列，均保留来源的 UTC 日期。各栏目由近及远，日期不确定项置于末尾。
增量参照：2026-09-07 晨报；“新增”表示本报新收录，不代表今天首发。今天是周二，不生成周报。

## 今日重点

- DailyArXiv README 已更新至 **2026-09-08**。新增核实 9 月 4 日的 WearableQA、MMTClinic、PRICE、Chronos 量子微调研究，以及 9 月 3 日的 MEG 基础模型路线图。
- GitHub 新增重点是 9 月 7 日创建的 **ML-Agent** 和 **InsightForge**：前者用确定性代码约束实验规划，后者提供可回放实验轨迹，但目前采用启发式决策。二者都尚非时序专用系统。
- 光伏继续关注概率预测的物理可行性与共形校准；新检出 Simulink 项目存在 README 2024 年与仓库 2026 年创建日期冲突，降级观察。
- 更正旧报：PV decision-support pipeline 首发为 **2026-08-03**，不是 8 月 1 日。MoME 的 9 月 4 日为 v2 修订，首发 1 月 29 日，排除主列表。

## 1. 时间序列基础模型最新研究

### [2026-09-04] Towards Scaling Quantum Fine-Tuning of Foundational Time Series Models for Classification — 新增

- 日期与来源：v1 2026-09-04；[arXiv](https://arxiv.org/abs/2609.05408)。
- 摘要：将 Chronos 表征接入量子分类头，在 PSML-5 电网事件分类中研究输入带宽瓶颈；通过 wing 模块引入额外输入，作者报告平衡准确率由 83.6% 提升到 85.2%。
- 相关性：高，直接研究 TSFM 表征迁移与电网时序；任务是事件分类，不能将结果直接外推为光伏功率预测提升。量子硬件与复现成本使其应用优先级低于通用预测 harness。

### [2026-09-03] A Roadmap for MEG Foundation Models — 新增

- 日期与来源：v1 2026-09-03；[arXiv](https://arxiv.org/abs/2609.04461)。
- 摘要：梳理脑磁时序基础模型的 tokenization、传感器几何、自监督预训练和跨站点评测，讨论从 EEG 与通用 TSFM 迁移以及多模态整合。
- 相关性：中高，适合借鉴多传感器表示与跨域评测设计；属于路线图文章，并非新发布的通用预测模型或已验证 Agent。

## 2. 时间序列建模 Agent 最新研究

本轮没有核验出比下列工作更晚的直接 forecasting Agent 首发；保留窗口内重点，并记录修订。

### [2026-08-31] A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting（CastClaw）— 持续跟踪

- 日期与来源：v1 2026-08-31；[arXiv](https://arxiv.org/abs/2608.30976)。
- 摘要：将专用预测器、分析工具、用户约束与版本化执行记录接入同一 runtime；根据证据保留、修订或升级预测，并设置显式停止条件。
- 相关性：高，直接命中 forecasting Agent 与 harness；值得关注如何将预测质量检查、执行报告和人工输入接入光伏工作流。论文报告电价与离线负荷实验，不视为已验证光伏效果。

### [2026-08-24] MetaCaster: Meta-Harness-Optimized Agent for End-to-End Few-Shot Learning of Lightweight Time Series Forecasters — 修订跟踪

- 日期与来源：v1 2026-08-24；v2 2026-09-03；[arXiv](https://arxiv.org/abs/2608.23473)。
- 摘要：针对数据不足和算力受限场景，通过 Agent 与 meta-harness 优化轻量预测器的少样本学习流程。
- 相关性：高，连接自动建模、少样本数据与轻量部署；适合研究新增光伏站点的建模自动化。已确认版本日期，未做 v1/v2 全文差分，不声称修订带来新性能提升。

### [2026-07-07] TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting — DailyArXiv 补检

- 日期与来源：v1 2026-07-07；v2 2026-09-02；[arXiv](https://arxiv.org/abs/2607.06349)。
- 摘要：以建筑知识图谱形成结构骨架，通过 agentic topology sampler 选择目标相关外生变量，支持无需训练的零样本建筑 IoT 预测。
- 相关性：高，Agent 负责变量与上下文选择；对多站点预测的启发属于本报推断，论文任务本身是建筑 IoT。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-04] WearableQA: A Benchmark for Health Reasoning over Real-World Wearable Data — 新增

- 日期与来源：v1 2026-09-04；[arXiv](https://arxiv.org/abs/2609.05405)。
- 摘要：基于 200 名真实用户的长期可穿戴记录、血液指标与人口统计信息构建 4,084 道十选一问题，区分数据计算、健康解释、单信号与跨信号推理。作者评测 14 个 LLM，准确率为 19.6%–72.9%。
- 相关性：高，直接评测真实噪声与长期上下文中的时序 reasoning；可借鉴其任务分解和交叉信号证据设计。它是基准，不是新训练的 reasoning 模型。

### [2026-09-04] PRICE: A Systematic Study of LLM Adaptation Choices for Bitcoin Price Forecasting — 新增

- 日期与来源：v1 2026-09-04；[arXiv](https://arxiv.org/abs/2609.05235)。
- 摘要：系统比较量化 LLaMA-3 的 LoRA、数值表示、提示、递归预测和解码策略；在该实验设置中，结构化 Context-Task-Format 提示优于 CoT 等提示方案。
- 相关性：中高，适合作为“是否需要显式 reasoning”的消融参照；属于金融数值预测适配研究，不能推断 CoT 在所有时序任务中无效。

### [2026-09-04] MMTClinic: Multimodal, Multilingual Time Series Question Answering and Reasoning Benchmark for Clinical Domain — 新增

- 日期与来源：v1 2026-09-04；[arXiv](https://arxiv.org/abs/2609.04842)。
- 摘要：将文本、医学图像和多变量生理信号组合成五种语言的 30,000 个问答，覆盖死亡率预测、心率预测与 SOFA 评分；比较 13 个 LLM 的零样本、少样本与 CoT 表现。
- 相关性：高，直接命中多模态时序推理评测；摘要称数据将在接收后公开，当前不能假定数据已可下载或完整复现。

### [2026-09-02] Compositional Spectral Prompts for LLM-based Online Time Series Forecasting（CoSPOT）— 持续跟踪

- 日期与来源：v1 2026-09-02；[arXiv](https://arxiv.org/abs/2609.02093)。
- 摘要：通过组合频域提示支持 LLM 在线时序适配，针对持续变化与未见模式改善泛化。
- 相关性：高于在线预测适配、低于显式多步推理；提示组合本身不等于已验证的 reasoning 能力，本栏将其作为相邻方法跟踪。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

仓库日期经 GitHub 官方 API 核验；摘要以本次 README 为依据，未执行代码或复现性能。GitHub 与 HuggingFace 的同项目不重复收录。

### 4.1 时间序列（含可迁移的 ML / AutoML / harness）

#### [2026-09-07] AI-ML-Engineering-Lab/insightforge-agentic-automl — 新增

- 日期与来源：创建 2026-09-07 11:31 UTC，推送 11:33 UTC；[GitHub](https://github.com/AI-ML-Engineering-Lab/insightforge-agentic-automl) / [API](https://api.github.com/repos/AI-ML-Engineering-Lab/insightforge-agentic-automl)。
- 摘要：记录数据剖析、清洗、特征工程、模型比较及重试的轨迹，提供本地回放界面。README 明确当前决策核心是启发式规则，LLM tool-calling 替换属于后续扩展。
- 相关性：中高，可借鉴实验记录与反思重试的展示协议；不能作为 LLM 自主推理效果证据，尚未展示时序滚动验证。

#### [2026-09-07] mowne67/ML-Agent — 新增

- 日期与来源：创建 2026-09-07 10:08 UTC，推送 10:23 UTC；[GitHub](https://github.com/mowne67/ML-Agent) / [API](https://api.github.com/repos/mowne67/ML-Agent)。
- 摘要：LLM 提议实验，确定性代码验证计划、运行 scikit-learn 管线并选择交叉验证胜者；输出预测器、schema、排行榜和运行报告，支持离线 planner。
- 相关性：中高，与 Agent harness 的计划校验、评测和结果打包直接相关；迁移到时序需要另行验证按时间切分与泄漏控制。

#### [2026-09-07] Hiramdu/agentic-automl-evaluation — 新增，低优先级

- 日期与来源：创建 2026-09-07 04:02 UTC，推送 04:34 UTC；[GitHub](https://github.com/Hiramdu/agentic-automl-evaluation) / [API](https://api.github.com/repos/Hiramdu/agentic-automl-evaluation)。
- 摘要：提出围绕决策有效性、推理一致性、模型质量风险与反事实影响审计 AutoML；README 明确仓库仍是占位页，代码与轨迹 schema 待发布。
- 相关性：主题高、当前可用性低。新仓库不等于新论文；所链接论文为 2602.22442，不能将其作为本窗口内论文首发。

#### [2026-06-18] temporal-community/temporal-agent-harness — 持续跟踪

- 日期与来源：创建 2026-06-18 22:43 UTC；最近推送 2026-09-04 22:56 UTC；[GitHub](https://github.com/temporal-community/temporal-agent-harness) / [API](https://api.github.com/repos/temporal-community/temporal-agent-harness)。
- 摘要：基于 Temporal workflow 提供耐久执行、工具审批、类型化组合和事件回放；README 标注早期实验项目。
- 相关性：中高，可支持长时间模型训练和预测 Agent 恢复执行；这里的 Temporal 是工作流平台名称，不能据此归类为时间序列模型。

### 4.2 光伏功率预测

#### [2026-09-06] eng994alitafeek-droid/PV-Power-Forecasting-Simulink — 新增，日期冲突降级

- 日期与来源：仓库创建 2026-09-06 18:25 UTC，推送 20:14 UTC；[GitHub](https://github.com/eng994alitafeek-droid/PV-Power-Forecasting-Simulink) / [API](https://api.github.com/repos/eng994alitafeek-droid/PV-Power-Forecasting-Simulink)。README 自称最后更新 2024-09、引用年份也是 2024；研究首次公开日期不确定。
- 摘要：README 描述单二极管光伏建模与 LSTM、CNN-LSTM、GRU 预测的 MATLAB/Simulink 集成。
- 相关性：主题高、证据优先级低。只记录新建仓库，不计为新研究；README 性能数字和模型文件完整性未独立验证。

#### [2026-09-04] siwekk/PV-probabilistic-day-ahead-forecasting — 持续跟踪

- 日期与来源：创建 2026-09-04 08:03 UTC，推送 08:20 UTC；[GitHub](https://github.com/siwekk/PV-probabilistic-day-ahead-forecasting) / [API](https://api.github.com/repos/siwekk/PV-probabilistic-day-ahead-forecasting)。
- 摘要：包含 LightGBM/XGBoost 分位数预测、Chronos-2 对比、物理投影、共形校准和依赖感知不确定性分析；主要比较使用模拟 NREL 系统与 PVOD 遥测，原始数据需按许可另行恢复。
- 相关性：高，直接连接 TSFM、物理约束和概率光伏预测。配套论文正式发表日期仍未核实，不另计新论文。

## 5. 光功率 / 光伏功率预测最新研究

### [2026-08-26] The Impact of PV Generation Forecast and Multi-Objective Control Policy on Optimal Operation of Grid Connected PV-BESS Microgrid — 持续跟踪

- 日期与来源：v1 2026-08-26；[arXiv](https://arxiv.org/abs/2608.25703)。
- 摘要：将 LSTM 光伏预测与 PV-BESS 多目标调度结合，对比完美预测、持续性预测与 LSTM，评估自用率、并网注入、成本及电池使用的权衡。
- 相关性：高，提醒光伏 Agent 的目标应包含调度结果和电池代价，不能仅比较点预测误差；论文未提供本报可确认的 Agent 或 TSFM 方法。

### [2026-08-03] An AI-Based Decision-Support Pipeline for Day-Ahead Photovoltaic Forecasting — 日期更正

- 日期与来源：v1 2026-08-03；[arXiv](https://arxiv.org/abs/2608.02088)。旧报的 2026-08-01 与官方记录不符，本期纠正。
- 摘要：针对短历史站点，校准时间戳并构建无泄漏太阳几何与晴空指数特征，通过 stacking 整合模型。相对 smart persistence，随机日分块下误差改善约 32%，更严格滚动起点评估约 9%。
- 相关性：高，直接支持光伏预测流水线与时序评测设计；两种协议的差距是研究 AutoML 评测时应重点检查的现象。

日期不确定、低优先级候选：[Adapting to drift: Weather-pattern experts for short-term photovoltaic power forecasting](https://www.sciencedirect.com/science/article/pii/S1474034626004738)，出版商页面标示 2026 年 9 月卷期，摘要讨论天气—功率关系的内部/外部漂移。与在线适配高度相关，但本轮未核实首次在线公开日期，不能直接以卷期认定窗口内新首发，暂不进入正式列表。光通信光功率预测方向本轮未确认符合窗口的新论文，结果不代表不存在。

## 6. DailyArXiv 补检结论

已读取 [官方 GitHub README 的 Time Series 板块](https://github.com/zezhishao/DailyArXiv#time-series) 和 [master 原始 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，二者均显示更新至 **2026-09-08**。日期列包含修订日，不能直接作为首发日。

- 已补入或保留：Chronos 量子微调、WearableQA、MMTClinic、PRICE、MEG 路线图、MetaCaster、TopoBrick、CoSPOT 与 CastClaw。新收录不等于 9 月 8 日首发。
- MetaCaster：README 2026-09-03 = v2，v1 2026-08-24；TopoBrick：README 2026-09-02 = v2，v1 2026-07-07。均仍在窗口内，按 v1 排序。
- [MoME](https://arxiv.org/abs/2601.21547)：README 2026-09-04 = v2，v1 2026-01-29；文本调制专家与多模态预测相关，但首发超窗，降级排除。
- [QABBA](https://arxiv.org/abs/2411.15209)：README 2026-09-01 = v4，v1 2024-11-20；符号压缩与 LLM 时序输入相关，首发超窗，降级排除。
- README 还出现 [Universal Redundancies](https://arxiv.org/abs/2602.01605)、[Grammar of the Wave](https://arxiv.org/abs/2603.11479)、[neuronal activity foundation model](https://arxiv.org/abs/2506.20354) 的新版链接；编号指向更早月份，本轮未逐页核验完整版本史，降级待核，不算近三个月新首发。
- 本期是新增精选而非重印整个窗口的历史目录；Time Series 板块中的普通统计建模、非核心领域生成与应用论文未全部收录。

## 7. 检索记录与限制

- 实际检索：arXiv 的 time series / foundation / agent / reasoning、photovoltaic forecasting；OpenReview、ACL Anthology 与 PMLR 的定向组合检索；GitHub 搜索/API/README；HuggingFace 搜索；出版商原始论文页。未逐一遍历全部会议录，不将搜索未命中写成“所有会议均无新成果”。
- GitHub API 查询：`timeseries agent created:2026-06-08..2026-09-08`（11 个结果，按更新取前 5）；`automl agent created:2026-09-04..2026-09-08`（7 个，取前 5）；`photovoltaic forecasting created:2026-09-04..2026-09-08`（2 个）。另检索 harness 并核验已跟踪仓库。
- 检索还确认 sriixz/agentic-timeseries 在 9 月 7 日推送、EchoML 在 9 月 7 日推送；未比较提交内容，不把推送时间变化解释为新功能。
- GitHub 搜索命中的 microsoft/argos 创建于 2025-04-03，虽最近推送为 2026-06-30，按本报新项目口径排除；HuggingFace 返回天气/极光数据更新等候选，未确认新的直接相关模型发布。
- 网络限制：部分 web 的版本化 arXiv/API 请求失败，已改用无版本 arXiv 页面及直接公开 GitHub API/原始 README 完成重点核验。检索具有索引与分页覆盖限制。
- 6 月 7 日及更早首发条目已移出今天窗口；期刊卷期、搜索抓取日、仓库创建日不相互替代。

## 今日建议

优先看 WearableQA / MMTClinic 的时序推理任务定义，再看 ML-Agent 的实验计划校验与 InsightForge 的轨迹回放。光伏侧继续比较物理约束、概率校准与滚动验证协议；新 Simulink 仓库等日期冲突消除、复现材料确认后再投入时间。

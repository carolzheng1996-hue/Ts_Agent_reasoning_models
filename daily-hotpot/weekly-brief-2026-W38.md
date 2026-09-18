# 2026-W38 时间序列研究周报

范围：**2026-09-14 至 2026-09-18（周一至周五）**，汇总各工作日晨报及其中下午增补；整理时间：**2026-09-18 15:37 CST**（含周五下午增补）。研究过滤窗口为 **2026-06-18 至本轮检索时点**。本周“新增发现”指首次进入简报，不等于本周首发；修订、活动更新、实现占位和日期不确定项目分别标注。周报以当日已核验记录为依据，未重新运行全部项目。

## 本周判断

本周值得优先研究的是三件事：让 Agent 发现并正确调用模型工具；以代码执行和类型契约检验时序推理；以时间、领域、上下文和业务风险分别评测结果。论文中的语言接口、工具调用、思维链训练和基础模型是不同能力，不能合并为“时序智能全面提升”。

- **建模接口**：TuiML 为算法提供可查询契约，LongAgent 用搜索历史选择纵向特征；工程上已有金融时序 harness，但部分新 Agent 仍是模拟客户端或空文件。
- **可执行 reasoning**：CodeTS、T-SMART、TimeThink、WaveTLM 分别研究代码中间表示、数值工具贡献、合成组合问答和输出契约。收益应在各自任务内解释。
- **基础模型评测**：Tabby、SOTER 等提供领域或训练配方方向；TabPFN-3.5 表格能力增强，但时序附录不是榜首；峰值负荷和多模态上下文评测提示平均排名不足以指导实际选模。

## 1. 时间序列基础模型与评测精选

按官方首发日期由近到远排列；性能为作者报告。

| 首发日期 | 来源 | 简短摘要与相关性判断 |
|---|---|---|
| 2026-09-17 | [QUALS](https://arxiv.org/abs/2609.20156) | 按时序模式量化与可学习性调整预训练采样。**TSFM 数据效率高、Agent 预算管理中高**；摘要/首发已核，代码与节省比例未独立验证。周五下午新增。 |
| 2026-09-17 | [SETTer](https://arxiv.org/abs/2609.20086) | 解耦注意力和混合掩码的单层长时预测模型。**Agent 候选预测器中高、TSFM 对照中**；无大规模预训练证据，不计新 TSFM。周五下午新增。 |
| 2026-09-16 | [Peak-Aware STLF](https://arxiv.org/abs/2609.18588) | 三种配电网聚合层级分别评估总体和高负荷期误差，Chronos-2 在所测峰值指标领先。**TSFM / Agent 条件选模高，reasoning 低**；不是光伏预测或新模型。周五新增发现。 |
| 2026-09-15 | [TabPFN-3.5](https://arxiv.org/abs/2609.17895) | 通用表格模型通过季节与日历特征做预测；[附录 C.6](https://arxiv.org/html/2609.17895v1)报告 fev-bench 第六。**基础模型迁移 / AutoML 高，显式 reasoning 低**；Thinking 不使用 LLM，不能视为语言思维链。周五新增发现。 |
| 2026-09-15 | [Distributed JEPA](https://arxiv.org/abs/2609.17029) | 共享潜在表示支持异质能源迁移及缺失数据任务。**基础表示 / 光伏跨资产迁移高，Agent 工具中高**；通用大规模 TSFM 能力未证实。周四新增发现。 |
| 2026-09-15 | [SOTER](https://arxiv.org/abs/2609.16804) | 生理信号生成式 TSFM，以频带专家和连续时间解码器处理跨通道、缺失和不规则采样。**领域 TSFM 高，Agent 工具中高，reasoning 低**；权重未独立确认。周四新增发现。 |
| 2026-09-14 | [MUSE-Bench](https://arxiv.org/abs/2609.15087) | 统一测试六类上下文，错误或错时上下文会降低表现，LLM 引导修正未带来稳定收益。**TSFM / Agent 上下文评测高**；建议采用正确、错时、错误、无上下文消融。周三新增发现。 |
| 2026-09-12 | [Tabby](https://arxiv.org/abs/2609.13956) | 公开长上下文概率预训练配方，结合真实和合成数据及中间层监督。**TSFM / Agent 多任务工具高，reasoning 低**；[官方代码目录](https://github.com/huawei-noah/trustworthyAI/tree/master/TabbyTSFM)已核验，代码首发不确定。周三新增发现。 |
| 2026-09-11 | [HoliBench](https://arxiv.org/abs/2609.12412) | 将预测质量、时延、能耗放进同一评测。**TSFM / harness 高，Agent 成本评测高**；周二所查论文代码链接不可访问，不视为已可复现。 |

本周另补入人流 TSFM 对照（[9 月 14 日](https://arxiv.org/abs/2609.16415)）：短历史下简单季节基线仍有竞争力，**Agent 按场景选模相关性高**；以及语言模型参数高效适配（[9 月 14 日](https://arxiv.org/abs/2609.15344)）：连续表示与轻量参数更新值得比较，**迁移建模高、显式 reasoning 低**。

## 2. 建模 Agent 与 reasoning 精选

| 首发日期 | 来源 | 简短摘要、相关性与边界 |
|---|---|---|
| 2026-09-16 | [TuiML](https://arxiv.org/abs/2609.17984) / [项目页](https://tuiml.ai/) | 机器可读参数与能力、工作流验证、会话状态、MCP 接口。**Agent / AutoML / harness 高**；源码有时序 splitter，但不能推断所有工作流自动采用时间划分。仓库 3 月创建，不计近三个月新建。 |
| 2026-09-16 | [WaveTLM](https://arxiv.org/abs/2609.18812) | 编译请求，再执行得到合法张量或标签。**可执行 reasoning / 输出契约高**；合法率不等于预测准确率，代码仍待公开。周四下午新增。 |
| 2026-09-14 | [LongAgent](https://arxiv.org/abs/2609.15859) | 搜索变量、时间窗口与聚合函数，以历史数值反馈引导下一轮。**自主建模 / 特征搜索高**；真实临床数据与强基线相当，不能外推为普遍优势。周三下午新增。 |
| 2026-09-14 | [CodeTS](https://arxiv.org/abs/2609.15393) | 文本经代码生成时序，以执行和序列质量构造奖励。**reasoning / Agent 执行反馈高**；是时序生成任务，非未来预测突破。周三新增。 |
| 2026-09-12 | [T-SMART](https://arxiv.org/abs/2609.14142) | 分离语言理解、确定性计算与感知，收益主要来自数值工具。**时序工具 Agent / 机制归因高**；并非完整训练调参系统。周三新增。 |
| 2026-09-11 | [TimeThink](https://arxiv.org/abs/2609.13457) / [代码](https://github.com/sudarshanregmi/TimeThink) | 合成时序原语和组合问答用于推理轨迹与可验证奖励训练。**显式 reasoning / RLVR 高**；部分评价使用 LLM judge，代码和权重首次公开日不确定。周三下午新增。 |
| 2026-09-11 | [Hindsight Bias](https://arxiv.org/abs/2609.13454) | 决策截点前信息与完整临床时间线成对比较，测量事后信息导致的答案变化。**Agent 信息隔离 / reasoning 评测高**；不是数值 TSFM。周四新增。 |
| 2026-09-11 | [Information Specialization](https://arxiv.org/abs/2609.12495) | 多个专家及汇总环节并不保证超过最强专家。**Agent 分工 / 同预算消融高，连续时序中**。周二下午新增。 |
| 2026-09-10 | [Competence-Gated Pooling](https://arxiv.org/abs/2609.12101) | 以已验证能力决定是否采用 LLM 概率预测。**Agent 路由高、连续时序中**；市场子集无显著改善，保留负结果。周二新增。 |
| 2026-08-24，9 月 16 日修订 | [Which Histories Matter?](https://arxiv.org/abs/2608.23221) | 训练利用未来监督学习历史片段效用，推理仅看历史。**Agent 检索记忆高、TSFM 增强中高**；简单 L2 在部分领域仍更优，未比较版本差分。周五新增发现。 |

解释性补充：HRX（[9 月 11 日](https://arxiv.org/abs/2609.12639)）提供逐预测步归因，**reasoning 证据检查相关性高**，不是新的显式推理模型；When Does Text Inform（[9 月 10 日](https://arxiv.org/abs/2609.11282)）考察文本的预测信息，**多模态 Agent 评测高**。两者均周二新增。TERN（[9 月 16 日](https://arxiv.org/abs/2609.18407)）是流感预测记忆模块，**Agent 记忆设计启发中高**，不计自主建模 Agent。

## 3. 本周新增 GitHub 项目

下面均为本周首次收录且仓库创建日在三个月窗口内；按创建日倒序。日期来自各日 GitHub 元数据；“有代码”不代表已通过端到端运行。直接来源链接在项目名中，具体源码抽查见对应日报。

| 创建日期 | 项目 | 摘要、相关性与核验结论 |
|---|---|---|
| 2026-09-18 | [DLR / EV / PV Coordination](https://github.com/itodoe4solution-ai/Forecast-Informed-Risk-Aware-Coordination-of-Dynamic-Line-Ratings-with-EV-Charging-and-PV) | 线路容量预测到充电/光伏协调；**光伏决策与时序评估中高、Agent 工具中**。实际树仅 README 与 ZIP，未解压核源码，原始数据不公开；低优先级线索。周五下午新增。 |
| 2026-09-17 | [agent-reliability-bench](https://github.com/adityaarun2/agent-reliability-bench) | 正确性、证据覆盖、工具轨迹故障分开评价；**Agent harness 高、直接时序低**。有真实 SDK 适配代码，主要检测器验证来自模拟策略；值匹配不保证时间/单位正确。周五下午新增。 |
| 2026-09-17 | [janavkamesh/agentic-automl](https://github.com/janavkamesh/agentic-automl) | 两阶段 LLM 生成预处理和模型代码；**AutoML / Agent 高、时序中低**。实际调用代码存在，但分类式 CV 提示缺时序约束。周五加入。 |
| 2026-09-17 | [vishakha2121/ai-energy-optimization-agent](https://github.com/vishakha2121/ai-energy-optimization-agent) | 能源预测与控制概念；**时序 Agent 主题高、实现低**。四个抽查核心文件为 0 字节，脚手架观察，非可用系统。周五加入。 |
| 2026-09-17 | [NirmalKumar31/aml-evaluation-harness-public](https://github.com/NirmalKumar31/aml-evaluation-harness-public) | 告警预算、时间/账户隔离、条件随机对照；**时序 ML harness / Agent 验收高**。源码有划分断言，历史数据衍生回放包未公开。周五加入。 |
| 2026-09-16 | [lijy-forge/Automl-Agent-Yield](https://github.com/lijy-forge/Automl-Agent-Yield) | 材料回归 AutoML，强调模型/指标/机制产物契约；**AutoML harness 高、时序中低**。缺原始数据，公开展示版不能端到端复现。周四加入。 |
| 2026-09-16 | [nishanthsr7-eng/FLUX-Agentic_Finance_System](https://github.com/nishanthsr7-eng/FLUX-Agentic_Finance_System) | 金融预测、前向评估与区间；**时序 ML harness 高、Agent 中**。乱序输入内部排序后索引映射需核调用方，未运行。周四加入。 |
| 2026-09-15 | [Shuque-i/Time-series-forecast-agent](https://github.com/Shuque-i/Time-series-forecast-agent) | 时序 Agent 占位；**主题高、实现证据低**。周三检查仅有 LICENSE，不计有代码候选。 |
| 2026-09-15 | [hristinagjorgjievska/pv-energy-trading-optimization](https://github.com/hristinagjorgjievska/pv-energy-trading-optimization) | 光伏 XGBoost 与电池优化；**光伏预测/决策高、Agent 工具中**。按行序分割，上游排序及天气可得性待核。周三加入。 |
| 2026-09-14 | [GerardoMayel/garmin-personalized-agent](https://github.com/GerardoMayel/garmin-personalized-agent) | 可穿戴数据 Agent；**时序应用中高、已验证 reasoning 低**。核心 graph 文件未取得非空实现，低优先级。周二加入。 |
| 2026-09-14 | [intikhab49/crypto-15m-edge-research](https://github.com/intikhab49/crypto-15m-edge-research) | 冻结决策与结果分离的研究协议；**时序评测 / harness 高**，训练实现未完整审计。周二加入。 |
| 2026-09-14 | [sanaul-islam/agentic-automl](https://github.com/sanaul-islam/agentic-automl) | 数据准备、训练和评估；**AutoML 中、时序/显式 reasoning 低**。抽查为规则流程与随机划分，不能当已验证 LLM 规划。周二加入。 |
| 2026-09-13 | [ACT2039/mlzero-agentic-automl](https://github.com/ACT2039/mlzero-agentic-automl) | 带记忆和重试的 AutoML 架构；**Agent 架构中高、真实自主能力证据低**。真实客户端未实现，模拟修复在训练集报分。周一加入。 |
| 2026-09-11 | [srvpal/ml-benchmark-harness](https://github.com/srvpal/ml-benchmark-harness) | 合成分类、固定基线和结果 JSON；**ML harness 高、直接时序低**。有训练折内预处理，但随机划分需改造。周一加入。 |
| 2026-09-11 | [dlmastery/ml-task-harness](https://github.com/dlmastery/ml-task-harness) | 固定评分迭代方案；**harness 概念中、实现低**。当时只有 README，低优先级线索。周一加入。 |
| 2026-09-11 | [Jason-TongR/CUMCM2026-Problem-C](https://github.com/Jason-TongR/CUMCM2026-Problem-C) | 光伏/负荷预测、校准与微电网调度；**预测到决策高、Agent 工具中高**。有代码目录，未核验数据边界和收益。周一加入。 |
| 2026-07-07 | [summerming1/finance-forecast-agent](https://github.com/summerming1/finance-forecast-agent) | 实验合同、滚动验证、冻结最终窗口；**时序 ML / harness 高**。ReplayLLM 是确定性 fixture，非真实自主研究证据。周三加入。 |

**避免重复**：TuiML 的论文是本周新发现，仓库创建于 3 月，不在本表；Tabby / TimeThink 的论文与代码合并，代码公开日不确定；TabPFN-3.5 的 [HF 模型](https://huggingface.co/Prior-Labs/tabpfn_3_5)首发日未核验，与论文合并。已有 ha-pvstrings、Mira、autoPilot 的推送活动不计新项目。上表为 **17 个新增发现的仓库/线索**，包含低优先级占位项，不是 17 个已验证可用系统。

## 4. 光伏研究与工程连接

| 日期 | 来源 | 摘要与相关性 |
|---|---|---|
| 2026-09-15 发表 | [天空图像融合短期光伏预测](https://www.sciepublish.com/article/pii/1221) | 光流、ResNet50 与 CNN-BiGRU-Attention 串联预测下一小时功率。**光伏/多模态时序高、Agent 工具中高**；已核出版社日期和摘要，划分与代码未核，更早预印本不确定。周五下午新增。 |
| 2026-09-15 | [Distributed JEPA](https://arxiv.org/abs/2609.17029) | 光伏未见资产迁移和缺失条件评估；**基础表示高、Agent 工具中高**，与第 1 栏合并计数。 |
| 2026-09-15 公开 | [Solar Forecasting: Small-Window Performance and Cross-Site Validation](https://www.preprints.org/manuscript/202609.1122) | 短历史与跨站点评估；**光伏/时序评测高、显式 reasoning 低**。周二为待核线索，周三确认 Posted 日期和摘要；更早跨平台版本不确定，未同行评审。 |
| 2026-09-14 | [Horizon-specific Expert Fusion](https://arxiv.org/abs/2609.15035) | 按预测步长融合光伏专家；**Agent 按步长选模与光伏预测高**，不是显式推理模型。周三下午新增。 |
| 2026-09-10 | [SolCloudLLM](https://arxiv.org/abs/2609.11135) | 天空图像与历史序列融合用于光伏和辐照预测；**多模态时序高、Agent 工具中高、显式 reasoning 低**。本周持续跟踪，不计本周新增。 |

工程优先级：先以滚动起报和站点留出评估预测，再把误差传导到调度成本。天气实测值与起报时可获得的天气预报必须区分；本周材料没有提供本仓库已复现的电站收益。

## 5. 每日来源与覆盖限制

- [9 月 14 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-14-morning-brief.md)：未确认新论文，新增工程候选并检查模拟客户端。
- [9 月 15 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-15-morning-brief.md)：HoliBench、解释性/文本信息与预测 Agent 评测，含下午增补。
- [9 月 16 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-16-morning-brief.md)：Tabby、CodeTS、T-SMART、MUSE-Bench，下午补 LongAgent、TimeThink 和光伏研究。
- [9 月 17 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-17-morning-brief.md)：SOTER、Distributed JEPA、hindsight bias，下午补 WaveTLM / TERN。
- [9 月 18 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-18-morning-brief.md)：TuiML、TabPFN-3.5、峰值负荷评测、历史检索和新 harness。

本周依靠 arXiv 官方日期与摘要、DailyArXiv、会议官网定向搜索、机构博客、GitHub 元数据和源码抽查。聚合器存在延迟，GitHub 搜索只检查各组前若干项；未全量扫描所有会议、HF 或 arXiv。StableEval Arena 的编号与页面日期冲突仍未解决，未纳入已核验精选；出版商 9 月卷期不等于在线首发。

周报全部模型结果和仓库运行声明来自对应来源，不代表本轮复现。下周优先完成 TuiML 的最小时间隔离实验、WaveTLM 代码状态跟踪，以及在同一滚动协议下比较原生 TSFM、表格化时序和朴素基线。

周五下午补检：DailyArXiv GitHub README 已更新至 9 月 18 日，Time Series 确认既有 WaveTLM、TuiML、TabPFN 等；QUALS / SETTer 未匹配，来自独立 arXiv 公告。raw 网页缓存仍为 5 月 29 日，已排除。2609.20193 的官方 v1 写 7 月 29 日，与编号和 9 月公告不一致，和 StableEval 一并降级，不计日期已核验新增。光伏 SCIFORUM 9 月 16 日线索详情读取失败，暂不提升。下周增加 QUALS 同预算采样与 Agent 证据覆盖核查的阅读优先级。

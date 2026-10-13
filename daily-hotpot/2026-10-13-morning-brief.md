# 时间序列研究晨间简报｜2026-10-13

- 检索时间：2026-10-13 上午版 08:23；下午增量核验 15:30–15:40（Asia/Shanghai）。窗口：2026-07-13 至本次检索时刻。
- 增量基线：10 月 12 日下午版与并发生成的今日上午版 ca4f738；保留上午版独有条目并合并下午核验。下午成功加载 SSH key，git pull --ff-only 返回已同步。新增指相对归档新增收录，不代表今日首发。
- 日期口径：论文采用官方 arXiv v1 的 UTC 日期；期刊在线发表、软件 release 与仓库创建日期分别注明。日期不确定的线索不计确认的窗内新增。
- **本期重点：新增建筑用电 TSFM 评测、TimeNet 数据基础设施和通用 Agent 快照恢复研究；工程侧新增 SMILE 7.0.0 发布动态。** UniScale、TSHarness、EvoCast 与 Lapras 属持续跟踪。
- **下午新增重点：HART、日历协变量编码、基础模型跳层、PPG-Bench；工程侧补充 ITMO AutoML harness 轨迹与光伏回测项目。**
- 今天周二，不生成周五周报。以下为来源核验与研究判断，未运行项目或复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-09｜日历协变量编码改变基础模型比较｜下午新增，高优先级

- **来源与日期**：[官方 arXiv 摘要与版本史](https://arxiv.org/abs/2610.13676)，v1 10 月 9 日。
- **摘要**：在四个 TSFM、九个数据集的滚动零样本评估中比较七种日历编码。不同模型对编码响应不同，节假日附近差异明显，固定编码策略可能影响模型比较。
- **相关性判断**：**TSFM / AutoML 高，显式 reasoning 低**。建议将编码纳入验证选择，并检查目标编码只利用预测起点以前的标签；已知未来日历不等于已知未来目标值。本轮未核全文实现。

### 2026-10-09｜HART：Attention 与 RWKV 混合基础模型｜下午新增，高优先级

- **来源与日期**：[HART](https://arxiv.org/abs/2610.12883)，v1 10 月 9 日。
- **摘要**：针对非自回归预测中未来占位输入可能导致的历史状态衰减，交替使用注意力和 RWKV 模块。作者在 GIFT-Eval、TIME-Benchmark 报告中长预测跨度改进，模型规模 36M 参数。
- **相关性判断**：**TSFM 高，Agent 预测工具中高，语言 reasoning 低**。适合预算受限的候选模型；参数规模优势不能直接换算为同等幅度的延迟收益。

### 2026-10-09｜结构化跳层：每次预测是否需要完整深度｜下午新增，高优先级

- **来源与日期**：[How Much Computation Does Every Forecast Need?](https://arxiv.org/abs/2610.13208)，v1 10 月 9 日。
- **摘要**：在 Chronos-Bolt、TimesFM 2.5 绕过完整 Transformer 块，仅用校准窗口选掩码，再评估 1,088 个留出窗口。适度跳层降低延迟，激进跳层损害部分数据集，跨域迁移不稳定。
- **相关性判断**：**TSFM / 计算预算 harness 高，Agent 路由中高**。论文明确尚未得到可部署的动态推理方法；事后最优掩码只是潜力上界，不能当作在线选择器成绩。

### 2026-10-09｜PPG-Bench：统一评测与简单对照｜下午新增，中优先级

- **来源与日期**：[PPG-Bench](https://arxiv.org/abs/2610.13435)，v1 10 月 9 日；[配套代码](https://github.com/mannas-ai/ppg-bench)。
- **摘要**：统一五个 PPG 基础模型、九个数据集、26 项任务及不同下游适配强度，使用受试者隔离交叉验证，并引入常量、脉率变异特征与 MOMENT 对照；许多组合未优于简单方法。
- **相关性判断**：**TSFM 评测高，Agent 实验裁决中，光伏直接相关性低**。可借鉴按实体隔离和简单基线，不能将生理信号结论直接外推到电站。仓库创建日未核实，不计新建项目。

### 2026-10-08｜大学建筑日前用电预测：TimesFM 与传统 ML 对照｜新增，中高优先级

- **来源与日期**：[arXiv:2610.12638](https://arxiv.org/abs/2610.12638)，v1 为 10 月 8 日 19:00 UTC。
- **摘要**：在同一建筑的 57 个测试日上，按时间验证统计模型、XGBoost、循环网络与 TimesFM，并区分工作日、周末和节假日。TimesFM 总体误差最低，但逐日配对比较未建立其相对 XGBoost 的明确 MAE 优势；协变量对节假日有帮助，对整体 MAE 的改变很小。
- **相关性判断**：**TSFM 应用评测高，Agent 自动选模中高，显式 reasoning 低**。这是现有模型评测，不是新基础模型。天气协变量采用事后观测，不能直接等同于真实日前天气输入；其结果也不能外推到所有建筑。

### 2026-10-04｜UniScale：模型容量与历史长度的资源分配｜持续跟踪

- **来源与日期**：[arXiv:2610.05269](https://arxiv.org/abs/2610.05269)，v1 为 10 月 4 日；本地 10 月 8 日已收录。
- **摘要**：在多模型检查点与跨域任务上拟合容量、历史长度及预测跨度的关系，并通过参数交换和激活干预研究历史信息的作用。
- **相关性判断**：**TSFM 高，AutoML 预算分配中高，语言 reasoning 低**。可为 Agent 选择上下文长度和模型规模提供假设；经验缩放规律的外推边界仍需另行验证，不作为通用定律。

### 2026-10-03｜TimeNet：跨任务时间序列数据标准与基础设施｜新增，高优先级

- **来源与日期**：[arXiv:2610.04407](https://arxiv.org/abs/2610.04407)，v1 为 10 月 3 日 09:53 UTC。
- **摘要**：将信号、元数据、标注和监督信息纳入统一数据模型，把分类、预测、问答及编辑等任务表达为同一记录的不同视图；支持规则、不规则和序数时间轴。论文以约 150 万任务实例展示异构数据转换与联合训练。
- **相关性判断**：**foundation model 数据层高，Agent / harness 数据接口高，reasoning 数据组织中高**。贡献是数据标准和系统基础设施，不是新推理权重。统一格式不自动保证时间切分或数据去重正确；本轮只核验论文摘要与日期，未确认官方代码发布时点。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-09｜完整沙箱快照用于失败恢复｜新增，相邻方法，中优先级

- **来源与日期**：[Returning to Development States](https://arxiv.org/abs/2610.13841)，v1 为 10 月 9 日 16:50 UTC；10 月 12 日是公告列表日期。作者注明为未经同行评议的预印本。
- **摘要**：在 Daytona 完整环境快照上实施类似 Go-Explore 的恢复与分支搜索。收益主要来自代码仓库之外的数据库、服务及运行时状态；仅靠代码差分无法恢复这些进度。
- **相关性判断**：**通用 Agent harness 高，时序建模 Agent 间接中，TSFM / reasoning 模型低**。可启发长时 ML 实验的失败恢复，但论文不是时序研究；训练检查点、随机状态与数据版本是否一同恢复，需在迁移时单独验证。

### 2026-10-04｜TSHarness：结构化数值证据与回答流程解耦｜持续跟踪，高优先级

- **来源与日期**：[arXiv:2610.04942](https://arxiv.org/abs/2610.04942)，v1 为 10 月 4 日，本轮重核。
- **摘要**：学习式工具选择器提取统计与时序特征，形成结构化感知状态，再由回答 Agent 推理；证据不足时触发重新感知。
- **相关性判断**：**时序 Agent / reasoning / harness 高，自动训练预测器低**。适合设计工具输出与证据补充协议；目标端零样本不意味着工具选择器没有训练。

### 2026-10-03｜EvoCast：预测架构的自主实验迭代｜持续跟踪

- **来源与日期**：[arXiv:2610.04517](https://arxiv.org/abs/2610.04517)，v1 为 10 月 3 日。
- **摘要**：让语言模型依据基线、消融和失败记录提出架构修改，用确定性流程约束源码编辑、实验评测与候选晋升。
- **相关性判断**：**时序建模 Agent / AutoML / harness 高，TSFM 中**。适合作为自主研究闭环对照；本轮未运行代码，不能据摘要确认晋升过程与最终测试集完全隔离。

本轮未核实比上述持续跟踪条目更晚的直接时序建模 Agent 首发；通用快照论文单列为相邻方法，不混入时序模型新增数。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-09｜时序因果发现的基本原则与假设｜下午新增配套教程，中优先级

- **来源与日期**：[One Thing Leads to Another: The Essentials of Time Series Causal Discovery](https://arxiv.org/abs/2610.13430)，v1 10 月 9 日；[配套资源](https://github.com/CHAI-UK/Awesome-Time-Series-Causal-Discovery)。
- **摘要**：统一梳理时序因果发现的原理、假设、局限与评测方法，连接统计、信号处理、动力系统和机器学习。
- **相关性判断**：**reasoning 的因果假设审查中高，新语言推理模型低**。这是教程，不计新 reasoning 模型；适合约束 Agent 对“原因”的表述，区分预测关联与因果识别。资源仓库创建日未核实。

### 2026-10-08｜Lapras：将显式思维链蒸馏到潜在推理｜持续跟踪，高优先级

- **来源与日期**：[arXiv:2610.11111](https://arxiv.org/abs/2610.11111)，v1 为 10 月 8 日 02:33 UTC；已在昨日补检中收录。
- **摘要**：教师通过文字思维链推理，学生对齐答案阶段隐状态，在连续的时序—语言空间完成中间计算，只生成最终答案。论文在四个骨干、五个时序问答基准上评测。
- **相关性判断**：**时序 reasoning 高，Agent 推理组件中高，直接预测低**。可研究其对数值证据的依赖及推理成本；生成 token 更少不等于总延迟同比降低，隐状态可解码也不自动证明解释忠实。

本轮未确认更晚的直接时序 reasoning 新首发。OpenReview 搜索命中的 TIMEOMNI-1、VeriTime 等较早工作不因近期索引抓取而重新计入三个月窗口。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列（含相邻 ML、AutoML 与 harness）

| 日期与状态 | 项目及来源 | 简短摘要 | 相关性判断与限制 |
|---|---|---|---|
| **2026-10-12 release｜新增版本动态，高优先级** | [haifengl/smile v7.0.0](https://github.com/haifengl/smile/releases/tag/v7.0.0)；[官网日期](https://www.aihalo.dev/) | 发布说明新增 ARIMA 多步预测、AIC/BIC 等选模诊断、统一超参数搜索空间，并扩展多 Agent 协作、会话恢复和 MCP 接入。 | **ML / AutoML / harness 高，时序建模中高，TSFM / 显式时序 reasoning 低**。是既有项目的新版本；功能依据 release，未测试时序回测隔离。官网说明 Studio 有商业使用条件，不能把仓库与所有产品功能都视为免费开源。 |
| **2026-10-12 创建｜下午新增收录** | [ITMO-NSS-team/llm-automl-architecture-study](https://github.com/ITMO-NSS-team/llm-automl-architecture-study) · [官方元数据](https://api.github.com/repos/ITMO-NSS-team/llm-automl-architecture-study) | 比较 FEDOT.LLM、AutoDS-Tools、Terminus-2，分离模型、harness 与专家指令。README 声明提供 558 次试验、26 个配置单元的轨迹与结果。 | **ML / AutoML / harness 高，时序专用中低**。已读 README、目录与 TabReD 排名表，确认存在轨迹和评分文件，未重算全部统计。案例含作物、计算任务退出状态和材料属性，不是完整时序预测基准。论文仅列 Manuscript 2026，首发日期不确定；这里按仓库创建日收录。 |
| **2026-10-11 创建｜下午新增线索库** | [vicfei/awesome-agentic-ml](https://github.com/vicfei/awesome-agentic-ml) · [官方元数据](https://api.github.com/repos/vicfei/awesome-agentic-ml) | 汇集自动建模、训练、蒸馏、数据与评测资源，目录含 arXiv 雷达脚本和工作流。 | **ML Agent / AutoML 中高，时序直接相关性低**。已读 README/目录；这是索引，不是新执行系统，收录的旧项目不能据此变为窗内首发。 |
| **2026-10-04 论文 v1｜持续跟踪；仓库创建日不确定** | [Fifthky/UniScale](https://github.com/Fifthky/UniScale)；[论文](https://arxiv.org/abs/2610.05269) | 页面可见实验目录、结果和环境说明，用于研究时序模型容量与上下文规律。 | **TSFM / ML 实验高，Agent 资源分配中**。本轮重核目录，未运行；降低工程就绪度评级，不计新建仓库。 |

**历史项目纠正**：[mcp-trajectory-evals](https://github.com/Lkhanaajav/mcp-trajectory-evals) 与 [timeseries-mcp](https://github.com/Lkhanaajav/timeseries-mcp) 本轮可读取，其轨迹评分和统计工具与时序 Agent 高度相关；但历史晨报早已收录，前者历史记录日期为 7 月 11 日，已早于窗口。本轮未核实窗内 release 或代码变化，因此均不列为窗内新增；也不沿用昨日对后者的“新增发现”表述。

### 光伏功率预测

上午版未确认新项目；下午补充下列窗内项目。创建日期由官方 API 核验，维护日期不代表首次发布；没有核实独立的新 HF 发布。

| 日期与状态 | 项目及来源 | 简短摘要 | 相关性判断与限制 |
|---|---|---|---|
| **2026-08-24 创建；10 月 13 日有推送｜下午补充核验** | [RuiCkg/ai-powered-energy-forecasting](https://github.com/RuiCkg/ai-powered-energy-forecasting) · [官方元数据](https://api.github.com/repos/RuiCkg/ai-powered-energy-forecasting) | 分别对 AEMO 负荷与 Ausgrid 光伏发电量执行单步历史验证回测，包括基线、XGBoost、小型 LSTM 和本地界面。 | **光伏时序 ML 高，Agent / reasoning / TSFM 低**。已读 README、目录、[时间切分](https://github.com/RuiCkg/ai-powered-energy-forecasting/blob/HEAD/src/energy_forecasting/splits.py)和 [XGBoost](https://github.com/RuiCkg/ai-powered-energy-forecasting/blob/HEAD/src/energy_forecasting/xgb_model.py)：按时间切分，验证集早停并报告验证分数，该函数未用测试集。夏令时转换与业务预测跨度仍待确定，当前分数不能称为最终测试精度；未执行代码。 |

7 月 30 日创建的 [pv-dimensionality-reduction](https://github.com/Shivam4905/pv-dimensionality-reduction) 也在窗口内，主题为降维光伏预测，相关性高；但 README 指向外部程序，而已读目录主要为 MATLAB 研究脚本，分发说明对应关系未核实，降为低优先级线索，未下载或执行。

## 5. 光伏功率预测最新研究

### 2026-10-10｜AF-WPT-RL 多时间尺度动态融合｜下午补回持续跟踪

- **来源与日期**：[Energy Engineering 官方页](https://www.techscience.com/energy/online/detail/28584)，在线发表 10 月 10 日；更早预印本日期不确定。沿用 10 月 12 日已核摘要，本轮官方页曾可读，后续定位读取超时。
- **摘要**：融合 attention/GRU、小波包分解与 actor-critic 权重调整，覆盖不同预测尺度。作者说明融合动作不影响后续观测，其作用是按上下文调整门控权重。
- **相关性判断**：**光伏预测高，RL 融合中高，LLM Agent / reasoning / TSFM 低**。重点审计分解和天气输入在预测时刻的可得性；注意力不是因果解释，不能宣称所有跨度均优于对照。

### 2026-10-08｜决策层多模态融合超短期光伏预测｜持续跟踪

- **来源与日期**：[Energy Engineering 官方页](https://www.techscience.com/energy/online/detail/28550)，明确在线发表 10 月 8 日；更早预印本日期不确定。
- **摘要**：一条分支先预测云图再回归功率，另一条分支以气象输入运行 CatBoost，最终采用固定权重融合。
- **相关性判断**：**光伏预测高，Agent / reasoning / TSFM 低**。可作为专用预测工具候选，重点检查气象可得时点与融合权重的验证集隔离；不计今日新增。

### 2026-10-07｜DARA-DRL：光无线网络双 Agent 功率控制｜下午新增相邻研究

- **来源与日期**：[Cooperative Dueling DQN SAC Learning for Energy Efficiency in Dynamic OWC Networks](https://arxiv.org/abs/2610.09266)，官方 v1 10 月 7 日。
- **摘要**：离散 Agent 负责关联与子载波分配，连续 SAC Agent 控制发射功率，通过共享奖励与协同价值更新处理动态资源分配。
- **相关性判断**：**光功率控制 / 多 Agent RL 高，光功率预测与光伏发电预测低**。属于控制优化，仅列为相邻方向，中低优先级；作者仿真结果不等同于现场效果。

**日期不确定、低优先级观察**：[Physics-as-a-layer 多任务光伏功率与组件温度预测](https://doi.org/10.1016/j.epsr.2026.113181)，官方元数据为 2026 年 10 月卷期，具体首次在线日未确认。通过可微辐照—热学算子联合预测，**光伏高相关，基础模型 / LLM Agent 低相关**；不以卷期日期证明首次公开落在窗口内，不计确认新增。其他检索命中的 10 月卷期文章也采用同一降级口径。

## 6. 检索覆盖与证据边界

### 下午补检结论（更新上午的覆盖状态）

- **DailyArXiv 已完整下载**：[master 原始 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 显示 **Last update: 2026-10-13**；Time Series 有 **84 条论文数据行**，最新条目日为 **10 月 9 日**。新增日历编码、HART、跳层、PPG-Bench、因果教程均回查 arXiv v1；Lapras、TSHarness 也重核。
- **日期冲突与超窗**：[TelcoAgent](https://arxiv.org/abs/2606.19821) 在 README 标为 10 月 9 日，但官方为 v1 **6 月 18 日**、v2 **10 月 9 日**。它与 TSFM、多 Agent 知识构建和诊断高度相关，但首发超窗，降优先级，不进入最新研究清单。README 中 FactoryBench、FactoryNet、ROAR 链接仍指向 2026 年 5 月论文，未因修订日期将其纳入首发清单，本轮未逐篇核具体首发日。
- 其他排除：[光链路功率 Agent](https://arxiv.org/abs/2606.05795) 首发 **6 月 4 日**；[Zeus 官方 ICML 论文集](https://proceedings.mlr.press/v306/fu26n.html)日期为 **7 月 6–11 日**，分别关联光功率 Agent 与 TSFM，但均早于窗口。
- **GitHub 搜索成功**：创建窗口 2026-07-13 至 2026-10-13，分别搜索 `"time series" agent`、`automl agent`、`machine-learning harness`、`photovoltaic forecasting`，返回总数 130、95、153、59；每组检查更新时间排序的前 4 个候选，再读取相关仓库。总数不是合格项目数，个人主页、作业和市场报告未纳入，不声称穷尽或获得 Trending 排名。
- 下午定向补搜 arXiv、OpenReview、ACL、PMLR/ICML、NeurIPS、KDD、HF；没有核实额外的新 HF 权重。AAAI 仅沿用上午检索，未重复扫描。AI HOT 查询成功，返回已知 Agent Lightning 等弱相关线索，没有为本轮新增的直接时序研究提供证据。
- 上午版独有的 TimeNet、建筑用电评测、快照研究和 SMILE 发布予以保留；下午未独立重新验证其全部证据。以下上午记录用于说明当时覆盖，不代表下午仍然连接失败。

### 上午检索记录（保留来源边界）

- **arXiv**：[cs.LG recent](https://arxiv.org/list/cs.LG/recent) 本轮返回最新公告 10 月 12 日，当日 262 条中的前 50 条；尝试扩大列表读取失败。另用关键词查找并逐篇核验上述论文摘要与 v1。不是全学科全量扫描，不能由未检到推断没有新论文。
- **DailyArXiv 必查**：[默认 README 的 Time Series 栏目](https://github.com/zezhishao/DailyArXiv#time-series) 显示 Last update 2026-10-12，首行论文日仍为 10 月 8 日；[timeseries 分支](https://github.com/zezhishao/DailyArXiv/tree/timeseries) 和 [master 提交历史](https://github.com/zezhishao/DailyArXiv/commits/master/) 本轮访问失败，未确认最新自动提交哈希。聚合器仅用于发现，不把更新时间当首发日期。
- **会议与机构**：对 OpenReview、ACL、NeurIPS、PMLR（ICML）、KDD、AAAI、Google Research 执行定向搜索；没有核实足以加入本期主列表的新条目。多项结果为窗口外论文；没有逐个会议全量扫描，也没有将会议年份当作发布日期。
- **GitHub**：执行 time-series Agent 站点限定搜索、AutoML Agent 创建窗口 API 查询，并访问 [Trending](https://github.com/trending) 与作者仓库、release。API 因本地 DNS 失败未返回数据，Trending 未返回足以核验的榜单，不报告趋势排名或全量新仓库数量。仅 SMILE 的本期版本日期经官方来源确认。
- **HuggingFace / 光伏**：定向检索 TimeNet 模型线索，以及 photovoltaic / solar power forecasting 论文；未核实新的 HF 发布或光伏项目。
- **AI HOT 补检**：按技能尝试近七日论文线索，因本地 DNS 失败未取得数据，不据此作出无新增结论。
- **可信度**：正式论文条目已核官方摘要及日期；GitHub 功能仅核页面，不宣称已复现性能、安全性或可运行性。研究判断与作者结果明确分开。

## 7. 对当前研究的建议与发布状态

1. **数据层优先关注 TimeNet**：评估能否用统一记录表达原始数据、预测任务、问答证据与可得时间，减少 Agent 多工具之间的格式转换。
2. **把选模与部署条件一起评测**：建筑用电研究提示，排名需连同天气来源、特殊日期效果和本地训练成本解释；可将这些条件加入 AutoML 的任务定义。
3. **工程侧观察 SMILE 7.0.0**：先核查 ARIMA/HPO 与 Agent 编排是否有适合时间切分的接口，再考虑作为工具后端。通用完整快照的价值应与普通训练检查点对照验证。

下午已成功执行指定的 SSH key 加载与 `git pull --ff-only`。并发出现上午版 ca4f738 后，保留其内容并合并本轮新增证据；仅提交今日晨报，既有其他暂存和未跟踪文件保持原状。提交与推送结果见任务回执。

下午研究建议：将日历编码与推理预算加入 Agent 的验证选择；参考 ITMO 轨迹项目分离底层模型与 harness 效果；光伏回测明确标签时钟、时区及未参与调参的最终测试集。

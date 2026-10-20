# 时间序列研究晨间简报｜2026-10-20

- **检索窗口**：2026-07-20 至本次检索截止（北京时间，具体时间见文末）。论文日期按 arXiv v1 / 出版商公开日，GitHub 创建与推送日期均为 UTC；栏目按首发或创建日期倒序。
- **今日增量**：新增收录四篇 10-16 首发论文：OliO、EFC、ASE、Perceive/Solve/Reason；新增发现 alfa-automl-agent 与 TFN-PV 项目。其余明确标记持续跟踪。新增收录不代表今天首发。
- **阅读优先级**：先看时序推理的分阶段训练，再看文本因子和误差反馈能否在严格时间切分下提供增益。所有效果为作者报告，本轮未运行候选项目或复现实验。
- 今天周二，按要求不生成周报。另遵循目录规则补充光伏与 HuggingFace。

## 1. 时间序列基础模型最新研究

### 2026-10-16｜OliO：自监督时间流表征｜新增，配套方法

- **来源**：[arXiv 2610.23345](https://arxiv.org/abs/2610.23345)，v1 11:52 UTC；摘要备注 Accepted at NeurIPS 2026，此处是作者投稿页声明，未独立核验会议录用清单。[官方代码](https://github.com/eai-lab/OliO) 创建于 10-16 11:04 UTC、最近推送 10-19 05:57 UTC（[元数据](https://api.github.com/repos/eai-lab/OliO)）。论文与代码合并一项。
- **摘要**：通过线性 ODE 转移算子对齐不同时移的隐表示，用严格上三角矩阵约束避免指数发散；作为可插拔自监督训练方法适配多种预测骨干。
- **相关性**：TSFM 表征学习中高、Agent 候选训练工具中、显式 reasoning 低。它是预训练方法研究，不能直接称为已发布的通用基础模型。作者报告最高 5.75% MSE 降幅；是否跨域、跨规模仍有效需要验证。本轮核实摘要与代码元数据，未审计实现。

### 2026-10-16｜EFC：已揭示误差驱动的测试时校正｜新增，高优先级配套方法

- **来源**：[Look Back, Correct Forward，arXiv 2610.22872](https://arxiv.org/abs/2610.22872)，v1 03:22 UTC。
- **摘要**：从重叠历史预测已揭示的误差构造 Causal Error Diagonal；累计误差传输估计未来残差，时间外验证控制校正强度，再学习剩余残差结构。
- **相关性**：冻结 TSFM 部署与 Agent 反馈模块高，推理模型本体低。可与 TimeRSI 的流程选择、conformalForecast 的区间校准对照，但 EFC 主要做确定性点预测后处理。
- **重点核验**：每个预测步长何时得到真实标签、校正强度选择是否接触测试未来、连续适配的总预算。“causal”在这里不能直接理解为外生事件因果识别；作者报告降低过度校正，不代表所有任务都无退化。

### 2026-10-15｜PathFM：联合未来轨迹生成｜持续跟踪

- **来源**：[arXiv 2610.22358](https://arxiv.org/abs/2610.22358)，本轮复核 v1 17:58 UTC。
- **摘要**：flow matching 生成完整未来路径，蒸馏到一至两步并共享历史注意力缓存；fps-bench 增加 energy、variogram 与下游路径评分。
- **相关性**：概率 TSFM 高，Agent 情景决策高，语言 reasoning 低。累计需求、峰值和事件时刻取决于联合路径，不能仅用边际分位数分数代替；光伏迁移价值尚待实验。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-16｜ASE：归因引导的语义演化预测｜新增，高优先级相邻框架

- **来源**：[arXiv 2610.23027](https://arxiv.org/abs/2610.23027)，v1 07:04 UTC。
- **摘要**：构建文本因子，评估它们对数值专家的条件贡献，并通过反馈修订因子、搜索组合及验证集选择部署方案；在四个 TESS 数据集与动态沪深 300 排序任务上评估，包含文本扰动对照。
- **相关性**：文本驱动预测、Agent 因子迭代与验证闭环高，TSFM 接入中，显式语言 reasoning 中。摘要支持的是模块化预测框架，不足以证明完整自主建模 Agent 已开源。
- **重点核验**：文本实际发布时间、数值专家与文本融合的相同预算、文本打乱对照是否匹配时间结构。保留 incumbent 防止开发指标退化，不等于保证未来测试表现；条件归因也不自动等于因果解释。

### 2026-10-14｜TimeRSI｜持续跟踪

- **来源**：[arXiv 2610.19725](https://arxiv.org/abs/2610.19725) · [代码](https://github.com/haoxin1998/TimeRSI)。首发 10-14，本轮再次检得原始摘要；此前已收录。
- **摘要**：编码 Agent 修改冻结预测骨干外围的流程，以历史窗口误差指导迭代；部署时根据已完成预测反馈选择候选流程。
- **相关性**：时序 Agent、TSFM 部署与 harness 高，reasoning 中。与 EFC 的区别在于流程修订与选择；评估时仍须统一标签可得时间、搜索预算和选择集。

### 2026-08-31｜CastClaw｜窗内论文的 10-16 修订，持续跟踪

- **来源**：[arXiv 2608.30976](https://arxiv.org/abs/2608.30976)，v1 08-31、v2 10-16 03:09 UTC，本轮核实版本史。
- **摘要**：当前摘要描述交互式预测循环：LLM 选择许可工具或请求人工反馈，harness 提供受控执行、状态管理、历史验证与执行限制；支持 CLI/Web 与结果导出。
- **相关性**：时序 Agent / harness 高，reasoning 中，TSFM 接入中。已在九月简报收录，不计本日新论文；未比较 v1/v2 差异，不把当前摘要所有能力宣称为此次新增。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-16｜Perceive, Solve, Reason：渐进能力形成｜新增，今日优先阅读

- **来源**：[arXiv 2610.23521](https://arxiv.org/abs/2610.23521)，v1 14:23 UTC。
- **摘要**：构建覆盖感知、求解、推理的 337K 训练与 44K 评测样本，比较专用时序编码器和文本化输入、顺序训练和混合训练。作者报告专用编码器对迁移至推理阶段很重要，按能力顺序训练优于混合相同数据。
- **相关性**：时序 reasoning / TS-LLM 高，Agent 感知与推理组件高，数值预测 TSFM 中。作者报告 4B 模型在八个域外指标中的七个超过四种 7B TS-LLM；这是特定评测结果，不能推广为所有时序预测任务领先。
- **优先检查**：数据生成模板与域外测试的重合、同计算预算的课程顺序消融、推理答案正确性与解释忠实性是否分别评估。当前核实到论文摘要与首发日期，尚未确认可下载权重，不把论文发布等同模型开源。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列及相邻 machine learning / AutoML / harness

#### 2026-10-19 创建｜NolReaction/alfa-automl-agent｜新增，低优先级原型

- **来源**：[仓库与 README](https://github.com/NolReaction/alfa-automl-agent) · [元数据](https://api.github.com/repos/NolReaction/alfa-automl-agent)。创建 19:30 UTC、最近推送 23:58 UTC。
- **摘要**：黑客松 ML Agent，目标是读取任务、生成执行 Python、比较实验并输出 submission.csv；README 描述回归/分类基线及本地模拟 API 测试。
- **相关性**：通用 AutoML Agent 中高，时序迁移中低，TSFM/reasoning 本体低。**README 明确真实 Qwen 尚未接入、仅有本地验证指标**；当前随机 80/20 验证不能直接用于预测任务，不能认定已完成端到端自主研究验证。

#### 2026-08-27 创建｜pvd232/viper｜持续跟踪，中高优先级 harness

- **来源**：[仓库与 README](https://github.com/pvd232/viper) · [元数据](https://api.github.com/repos/pvd232/viper)。最近推送 10-18 23:16 UTC；九月已收录。
- **摘要**：Python 声明实验并保存不可变计划，执行后核验与留存证据，提供产物恢复、运行比较和 CLI/MCP 查询。
- **相关性**：ML 实验可追溯与 Agent harness 高，时序评测治理中高，预测模型本体低。计划/产物一致性不等于时间切分正确；本轮读 README，未运行或核验此次提交差异。

#### 2026-08-22 创建｜sriixz/agentic-timeseries｜持续跟踪，高相关研究原型

- **来源**：[仓库与 README](https://github.com/sriixz/agentic-timeseries) · [元数据](https://api.github.com/repos/sriixz/agentic-timeseries)。最近推送 10-19 01:24 UTC。
- **摘要**：结合 LLM 规划、确定性预处理与校验、FluSight 分析和 NeuralForecast LSTM/AutoLSTM。README 描述生成结构化搜索空间、Optuna 在测试前数据调参，并分别评估 1–4 周预测。
- **相关性**：时序 Agent / AutoML 高，reasoning 中，TSFM 本体中低。已明确为本地研究原型；结构化配置与确定性校验值得借鉴，尚未审计测试隔离实现，未将最近推送视为新功能。

OliO 的论文及 10-16 新建官方仓库已合并在第一栏，避免重复统计。

### 光伏功率预测

#### 2026-10-19 创建｜Geneeex/renewable-energy（TFN-PV）｜新增，低优先级观察

- **来源**：[GitHub 项目页](https://github.com/Geneeex/renewable-energy) · [元数据](https://api.github.com/repos/Geneeex/renewable-energy) · [关联 HuggingFace Space](https://huggingface.co/spaces/rocky250/Re-Energy)。创建 18:55 UTC、最近推送 18:57 UTC；GitHub/HF 合并计一项。
- **摘要**：项目页描述 TFT 与 N-BEATS 融合的多预测步长光伏预测，列出 DKASC 多时期实验与可解释分析。
- **相关性**：光伏预测高，Agent 可用基线中，TSFM/reasoning 低。**训练/推理代码、环境、数据配置、评测脚本和权重均仍在待发布清单**；结果由 README 转述稿件，不能复现验证。稿件仅标注向 EPSR 投稿，正式发表日期不确定，不进入已发表研究统计。Space 当前可用性未独立核实。

#### 2026-10-12 创建｜Home Assistant ML PV Forecast｜持续跟踪

- **来源**：[项目与 README](https://github.com/dominikamann/ha-machine-learning-based-pv-forecast) · [元数据](https://api.github.com/repos/dominikamann/ha-machine-learning-based-pv-forecast)。最近推送 10-19 20:57 UTC；10-18 简报已收录。
- **摘要**：按电站训练梯度提升分位数模型，结合历史天气预报与生产历史，记录已发布预测并更新校正层，周期训练四种模型变体并用晋级门槛选择。
- **相关性**：光伏闭环部署与 AutoML 中高，Agent 工具中，TSFM/reasoning 低。README 声明按提前量使用历史天气预报，对防止信息错配有参考价值；须进一步审计天气版本、夜间样本筛选与校准覆盖率。未安装或验证收益。

## 5. 光伏功率预测最新研究

### 2026-10-13｜已发布光伏预测轨迹的概率残差校正｜持续跟踪

- **来源**：[Preprints.org 202610.1212](https://www.preprints.org/manuscript/202610.1212)。10-12 提交、10-13 公开；本轮复核官方页，尚未同行评审。
- **摘要**：对供应商已发布轨迹，利用近期观测误差与日历信息修正预测，并做顺序区间校准；无需电站元数据或新的预测天气输入。
- **相关性**：光伏预测与 TSFM 对照高，Agent 反馈中高，显式 reasoning 低。适合与 EFC 对照信息约束：预测轨迹发布时间、各步误差何时揭示、点预测修正与区间覆盖须分别评估。

本轮未确认更晚且具备已核实正式公开日期的新增光伏论文。检得 Solar Energy 十月卷期的长周期辐照度 LLM 工作，但首次在线日期未确认，暂不提升为正式新增；来源：[出版商页面](https://doi.org/10.1016/j.solener.2026.114964)。TFN-PV 投稿状态见第四栏。

## 6. 检索记录、日期过滤与覆盖边界

- **DailyArXiv**：[master README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 显示 Last update 2026-10-20；Time Series 实际论文行 **82 条**（不含表头），最新列示日期 10-16。最新 master 提交 [8d8dbab](https://github.com/zezhishao/DailyArXiv/commit/8d8dbab01db5014b2acedcb74ac1cc977c83d9d0)，时间 10-19 21:12 UTC；timeseries 分支 README 返回 404，已回退 master。聚合器更新时间不当作论文首发。
- **去重与过窗过滤**：本轮新增四篇均回原始 arXiv 核验 v1，并检索既有简报去重。STRIDE（2605.08625）、CastFlow（2604.27840）、Trajectory Distillation（2602.13802）等虽有 10-16 修订，编号对应旧首发线索，本轮不列新研究，也不宣称修订新增能力。CastClaw 的 v1 仍在窗口内，仅跟踪其 v2。
- **论文来源覆盖**：搜索 arXiv、OpenReview，并对 ACL、NeurIPS、ICLR、ICML/PMLR、KDD/ACM、AAAI 官方域名作定向补检。没有确认比正文更晚的直接相关首发；此为检索覆盖结果，不代表这些会议没有相关研究。PMLR 搜索出现 2014–2018 年论文在 2026-10 重新发布的页面，已排除，避免把重发日期当新成果。
- **GitHub Search**：五组查询 `timeseries agent`、`"time series" agent`、`automl agent`、`"machine learning" harness`、`photovoltaic forecasting`，限定 `created:2026-07-20..2026-10-20`、按 updated 排序各取前三项，分别命中 **4 / 124 / 90 / 27 / 63**。命中数重叠且包含弱相关项，并非有效新增数；候选再查 README，核心论文代码另查 API。个人主页、用量监控和游戏研究未升为时序主线。
- **GitHub Trending**：[今日榜](https://github.com/trending) 成功读取。可见通用编码 Agent 与 harness，但仅凭热榜无法证明窗口内新建或时序能力，本轮未加入正式项目清单。不声称穷尽 GitHub。
- **机构 / HuggingFace 补检**：搜索官方模型卡与机构页面，未确认需要额外纳入的最新直接 TSFM 发布；项目代码与关联 HF 页面按同项目合并。未确认日期的来源均降级，不用搜索引擎抓取日期替代首发。
- **AI HOT 补充**：依 AI HOT 技能请求近七天 `paper` 精选，共 9 条，无需追加直接时序主线。仅作为发现渠道，未用聚合摘要证明论文结论。接口仍提示旧版服务将于 10-31 停用；本次未修改技能。
- **操作与验证边界**：已加载指定 SSH key，`git pull --ff-only` 成功。摘要、日期、README 与项目元数据核验不等同完整论文/源码审计；未运行研究代码。仅提交本日文件，保留原有暂存、修改与其他未跟踪资料。提交推送结果见任务回执。

检索记录完成时间：2026-10-20 08:32:33 CST。

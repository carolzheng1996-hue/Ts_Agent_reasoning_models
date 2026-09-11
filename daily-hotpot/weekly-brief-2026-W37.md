# 2026-W37 时间序列研究周报

汇总周期：2026-09-07 至 2026-09-11（周一至周五）；整理日期：2026-09-11，含 15:39 CST 下午补检，Asia/Shanghai。以本周五份晨报的当前内容（含下午补检）汇总，研究范围收束到 2026-06-11 至本轮检索时点。下文日期为论文首发、官方发布或仓库创建日，并不等同于本周发现日期。结果为公开材料审阅，未复现实验。

## 本周结论

本周最值得推进的是**评测协议与可验证的建模流程**：模型端新增分布监督预训练与多变量发布记录；Agent 端补入竞争式策略进化；reasoning 的明确增量主要是问答基准；工程端出现可以固定预测行集合、数据版本和输出格式的光伏 harness。

周一晨报“未发现 9 月 5–7 日新稿”只是当时覆盖结果；周三补检已找到该区间的 STQA、SolarBench、记忆综述和负荷评测。本周汇总采用后续核验，不能将周一搜索空结果当作客观无论文。

## 1. 时间序列基础模型最新研究

| 日期与来源 | 本周重点 | 与主线的相关性及边界 |
|---|---|---|
| 2026-09-09：[领域留出评测](https://arxiv.org/abs/2609.10357) | 晚于模型发布的数据仍可能来自熟悉领域；五领域、七组数据比较 13 预测器 | TSFM/harness 高；提醒 Agent 选模同时控制时间和领域，作者关联分析不是因果证明 |
| 2026-09-09：[SDD](https://arxiv.org/abs/2609.09586) | 已知合成生成过程可提供条件分布监督，减少梯度方差 | 预训练高、Agent 数据生成中高；高斯过程实验收益尚不能外推到实际光伏 |
| 2026-09-08：[NOAH](https://arxiv.org/abs/2609.09140) | 多模态、不规则时间的患者轨迹生成与表示 | 领域 TSFM 高；医疗数据证据不证明通用能源预测能力 |
| 2026-09-08：[IPM-FM](https://arxiv.org/abs/2609.08375) | 工业自监督表征、特征筛选和校准预测头 | TSFM/工业工具高；主要证据为特定装置软测量 |
| 2026-09-06：[Chronos-2 负荷评测](https://arxiv.org/abs/2609.06656) | 微调和零样本在不同预测时距的表现差异 | 电力/TSFM 高；为选模时区分适配预算提供依据 |
| 2026-08-31：[TimesFM-3 官方发布](https://www.research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/) | 多目标、历史/未来已知协变量和一次前向预测；周五补齐官方证据 | TSFM 高、Agent 工具中高；官方模型卡为非商业许可，性能主张未独立复核 |
| 2026-08-07：[Granite PatchTST-FM-r2 模型卡](https://huggingface.co/ibm-granite/granite-timeseries-patchtst-fm-r2) | 本周新增概率预测模型记录；日期是 HF 仓库创建日 | TSFM 高；精确首次权重公开日不确定，模型卡排名有筛选条件及待合并评测提交 |

## 2. 时间序列建模 Agent 最新研究

| 日期与来源 | 方法重点 | 相关性及下一步 |
|---|---|---|
| 2026-09-05：[Memory in Deep Time-Series Models](https://arxiv.org/abs/2609.06006) | 统一外部记忆的写入、访问、保留与遗忘 | Agent/harness 高；可据此定义案例库生命周期，综述不是性能证明 |
| 2026-09-03：[CompEvo](https://arxiv.org/abs/2609.09195) | 新闻证据搜索、预测反馈、可微选择与竞争进化 | Agent/reasoning 高；优先核查信息可得性、计算预算和策略多样性消融 |
| 2026-08-31：[CastClaw](https://arxiv.org/abs/2608.30976) | 用户约束、专用预测器、可追溯修订与停止规则 | forecasting harness 高；本周持续主线，不算本周新首发 |
| 2026-08-24，v2 09-03：[MetaCaster](https://arxiv.org/abs/2608.23473) | Agent 生成数据并训练少样本轻量预测器 | Agent/AutoML 高；与 SDD 联合使用只是本报研究建议，尚无联合实验 |

## 3. 时间序列 reasoning 模型最新研究

| 日期与来源 | 本周重点 | 相关性及边界 |
|---|---|---|
| 2026-09-08：[血糖事件输入表示评测](https://arxiv.org/abs/2609.08772) | 比较数值表达、派生描述和外部上下文，更多上下文不一定更好 | 输入设计高、显式 reasoning 中低；相邻评测，不是新推理模型 |
| 2026-09-07：[ICF-DLM](https://arxiv.org/abs/2609.07756) | 物理目标分解与扩散语言模型生成波形 | 结构化数值生成高、显式 reasoning 中；聚变任务不是光伏任务 |
| 2026-09-05：[STQA / SQFRS](https://arxiv.org/abs/2609.06117) | 历史查询—预测器—解释的工具协同基准 | Agent/reasoning 高；代码 2025 年已创建，研究最早公开日不确定，降低新颖性优先级 |
| 2026-09-04：[WearableQA](https://arxiv.org/abs/2609.05405) | 长期真实可穿戴数据，区分计算、解释及跨信号推理 | reasoning 高；它是基准，不是新模型 |
| 2026-09-04：[MMTClinic](https://arxiv.org/abs/2609.04842) | 临床多模态、多语言时序问答 | reasoning 高；用于检验任务/语言/模态差异，不能外推能源效果 |

本周未确认 9 月 10–11 日新的显式时序推理模型首发。周一将 CoSPOT 列为高 reasoning 相关的方法，后续已收束为“在线适配与预测的相邻方法”，不以 LLM 骨干本身证明显式推理。

## 4. 本周新增 GitHub 项目与工程线索

“本周新增”指本周晨报新记录或新核验的项目，不等同于本周创建。以下均有日期及原始仓库链接；本周重查程度详见各日晨报，未逐一再次运行。

### 4.1 时间序列、machine learning、AutoML 与 harness

| 创建日期与来源 | 摘要 | 相关性与成熟度 |
|---|---|---|
| 2026-09-11：[AutoMLOPS-Agent](https://github.com/hegazy20022/AutoMLOPS-Agent) | LightGBM 重训练、时间切分与 LangGraph 部署流程 | MLOps harness 高、时序中；Gemini 为附加审阅，README 部分路径缺失，销量等特征的起报可得性待审计，未运行 |
| 2026-09-10：[time-series-analysis-agent](https://github.com/wyx53508-cloud/time-series-analysis-agent) | CSV 分析、异常提示、报告评审和持久记忆 | 分析 Agent 高；有代码目录，自动预测训练能力未证实 |
| 2026-09-09：[Time-Series-Diagnostic-Agent](https://github.com/PallabBiswas3/Time-Series-Diagnostic-Agent) | 诊断工具、外部模型适配和证据验证 | 时序 harness 高；当前确定性路由，非已实现学习型路由 |
| 2026-09-09：[nse-multi-agent-trading](https://github.com/Vipluv01/nse-multi-agent-trading) | 新闻与时序预测结合，提供回测消融设计 | Agent/reasoning 高；作者报告多 Agent 未胜基线，未独立复现 |
| 2026-09-08：[tsfm-bench](https://github.com/mahdinaser/tsfm-bench) | 指标、预测器适配与 2026 时间留出结果 | TSFM/harness 高；首页竞赛集说明与论文留出实验须分开阅读 |
| 2026-09-08：[automl-agent](https://github.com/harshulbafna008-code/automl-agent) | 本地 LLM 规划—执行—反思 | AutoML 高、时序中；已发现普通交叉验证，迁移需先改时间切分 |
| 2026-09-07：[InsightForge](https://github.com/AI-ML-Engineering-Lab/insightforge-agentic-automl) | 实验轨迹与本地回放 | harness 中高；当前启发式核心，LLM 仍属扩展方向 |
| 2026-09-07：[ML-Agent](https://github.com/mowne67/ML-Agent) | LLM 提议、确定性校验和 sklearn 执行 | ML/Agent 中高；时序滚动评测待补 |
| 2026-08-19：[ModelWatch](https://github.com/Mohith26/modelwatch) | 漂移信号、固定评测回归检查和观测接口 | harness 中高；UCI Adult 人工漂移不是实际时序漂移验证 |
| 2026-06-18：[temporal-agent-harness](https://github.com/temporal-community/temporal-agent-harness) | 耐久执行、回放和工具审批 | 通用 harness 中高；Temporal 是平台名，项目不是时序模型，仍为实验阶段 |

低优先级排除：9 月 7 日创建的 [agentic-automl-evaluation](https://github.com/Hiramdu/agentic-automl-evaluation) 是占位页，关联旧论文；9 月 10 日创建的 [Maintenance Copilot](https://github.com/Arishkhan-A/Maintenance-Engineer-Copilot-for-Machine-Failures) 本周检查仅有 README，不作为已实现系统推荐。两者主题相关，但可用性低。

### 4.2 光伏功率预测

| 创建日期与来源 | 摘要 | 相关性与成熟度 |
|---|---|---|
| 2026-09-10：[energy-dispatch-engine](https://github.com/LucaDev990/energy-dispatch-engine) | 电价、预测和电池状态驱动规则调度及模拟 | 预测到决策 harness 中高；合成场景，非学习型 Agent 实证 |
| 2026-09-10：[pv-power-benchmark](https://github.com/silverisland/pv-power-benchmark) | 固定协议、数据哈希、行集合验证和评分包 | 光伏 ML/Agent harness 高；mock 数据用于联调，不证明真实效果 |
| 2026-08-10：[ha-pvstrings](https://github.com/doccodyblue/ha-pvstrings) | pvlib 物理基线配合学习残差 | 光伏 ML 高、Agent 中；最新推送 9 月 10 日，未做代码差分 |
| 2026-08-04：[CrossClimatePV](https://github.com/shahoismael/crossclimatepv) | 五气候区的统一评测和跨域控制实验 | 光伏泛化/harness 高；论文首发不确定，代码与 HF 协议标签去重 |

## 5. 光伏功率预测最新研究

| 日期与来源 | 本周重点 | 相关性与边界 |
|---|---|---|
| 2026-09-10：[可解释 ANN 辐照度预测](https://link.springer.com/article/10.1007/s13369-026-11533-2) | 五城市再分析 GHI、SHAP 选特征与轻量 ANN；日期为期刊正式发布 | 光伏上游高、reasoning 低；80/20 划分时间顺序及起报信息待核实，更早预印本不确定，降低新颖性优先级 |
| 2026-09-05：[SolarBench](https://arxiv.org/abs/2609.06187) | 跨站点、多图像源和快速波动评测 | 光伏/多模态时序高，Agent 评测中高 |
| 2026-09-03：[PPO 动态选模](https://www.nature.com/articles/s41598-026-69955-9) | 根据日前气象场景选择模型 | 光伏 AutoML 高；RL 策略不是 LLM reasoning，更早预印本日期不确定 |
| 2026-09-03：[风光预测综述](https://link.springer.com/article/10.1007/s41060-026-01261-z) | 讨论真实天气输入与决策效用 | 光伏评测高；文献搜索截至 1 月 9 日，不是近三个月新模型目录 |
| 2026-08-03，v2 09-08：[日前预测流水线](https://arxiv.org/abs/2608.02088) | 随机日折叠和滚动验证给出不同收益 | 光伏/AutoML 评测高；本周复核修订，不能算 9 月首发 |

## 下周建议

1. 先固定时间、站点/领域留出、真实起报可得协变量与推理预算，再对照 TimesFM-3、Chronos-2 和传统基线。
2. 以 CompEvo 的竞争策略、CastClaw 的证据闭环和确定性工具路由做三类对照；把 Agent 成本与增量收益一起报告。
3. 用 pv-power-benchmark 的版本/行集合协议作为接口参考；独立审计划分与评分后，再接入真实光伏数据和候选预测器。

## 本周来源与纠错记录

汇总材料：[周一](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-07-morning-brief.md)、[周二](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-08-morning-brief.md)、[周三](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-09-morning-brief.md)、[周四](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-10-morning-brief.md)、[周五](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-09-11-morning-brief.md)。本地周二已有用户暂存修改，汇总阅读当前文件；此次提交不包含对该文件的修改。

排除首发超窗的 STReasoner、Time-RA、SurF、KairosAgent、CoDaS；不以会议日期、博客日期或 arXiv 修订日期替代首发。周一 ReasonCast 的编号/日期与既往记忆存在冲突，本周未完成独立重核，未带入本周精选。日期不确定的旧代码关联研究、模型权重首次公开日和出版商候选均已降低新颖性优先级。

周五下午补检：DailyArXiv 的完整 Time Series 节共 74 条，最新行仍为 9 月 9 日；确认领域留出评测与 SDD 已纳入。补充排除 Alpha-R1（2025-12-29 首发，9 月 7 日修订），不因修订重算窗口。周五新增的 AutoMLOPS-Agent 与 ANN 辐照度论文已并入相应表格；其余本周重点保持。

# 时间序列研究周报｜2026-W45

- 覆盖工作日：2026-11-02 至 2026-11-06；已汇总仓库中的五份晨报。
- 汇总时间：2026-11-06 15:32（Asia/Shanghai）。研究窗口沿用各日报的滚动三个月边界；论文按 v1/官方首发、工程按 GitHub 元数据。性能为作者报告，未经本地复现。

## 本周结论

本周的共同主题是：**时序系统正从“选择单一预测器”转向“有时间边界的上下文、检索和可拒绝决策”**。Chronos-2、CATF、FKA 与图基础模型拓宽了 TSFM 的多变量、检索和异常检测能力；GlucoAgent、ElecLoad、TSSDA 与防御 Agent 让工具调用和分工进入时序工作流；CoCo、TimesJev 则把推理产物或压缩表征接回预测。最大风险仍是外部文本、事件、相似案例和成熟标签的前视泄漏。

## 1. 本周重点研究

| 日期 | 条目 | 摘要与相关性判断 |
|---|---|---|
| 2026-11-05 | [EnergyBench](https://arxiv.org/abs/2611.07784) | 在日 ahead 关门前冻结信息集，live 评测 TSFM 的价格、风电、太阳能与负荷预测。**TSFM/PV harness 高**；短期排名不可替代跨季节验证。 |
| 2026-11-05 | [Series-wise Cross-validation](https://arxiv.org/abs/2611.08252) | 用跨序列加时间留出评估全局预测模型。**TSFM/AutoML harness 高**；应与滚动时间验证结合，避免丢失因果边界。 |
| 2026-11-05 | [FARR](https://arxiv.org/abs/2611.07870) | 以带条件与空条件预测的差异驱动残差修正。**可审计 reasoning 接口中高**；先核验空条件和代码。 |
| 2026-11-04 | [ElecLoad](https://arxiv.org/abs/2611.06508) | 多事件负荷预测 Agent，按事件效应动态切分预测窗，由子 Agent 预测、主 Agent 审阅。**时序 Agent 高**；需冻结网页/预警/日程版本并审计主 Agent 选择偏差。 |
| 2026-11-04 | [FKA：细粒度 TSFM 知识增强](https://arxiv.org/abs/2611.05993) | 按趋势/季节分解构建 codebook，再检索融合给冻结 TSFM。**TSFM/Agent 记忆高**；检索库必须按预测时点构建。 |
| 2026-11-04 | [Gfm4Mtsad](https://arxiv.org/abs/2611.06441) | 将图基础模型适配为多变量时序异常检测器，并校准尾部证据。**TSFM 运维中高**；重点审查伪异常、图构建与阈值。 |
| 2026-11-04 | [CATF](https://arxiv.org/abs/2611.05325) | Manager 对上下文做硬路由，将预测交给可替换 Worker。**TSFM/路由 Agent 中高**；应测未来协变量缺失和罕见情景回退。 |
| 2026-11-03 | [GlucoAgent](https://arxiv.org/abs/2611.04126) | 个体化血糖预测中，Agent 检索上下文、拟合和回测工具。**工具调用 Agent 高**；医疗隐私、沙箱和数据可得时点须独立审计。 |
| 2026-11-03 | [CoCo：TSFM Meets LLM](https://arxiv.org/abs/2611.05515) | 将 LLM 推理蒸馏成预测与置信度协变量，而非直接数值外推。**reasoning 高**；文本首发/修订时间是第一审计项。 |
| 2026-11-03 | [Chronos-2](https://arxiv.org/abs/2610.41956) | 多变量、协变量感知 TSFM。**基础模型高**；须同统计基线在统一 rolling-origin 下对照。 |
| 2026-11-02 | [检测、修复与审计的能源预测多 Agent 防御](https://arxiv.org/abs/2611.02310) | 将攻击检测、修复与审计拆给分层 Agent。**能源时序 Agent 中高**；要确认告警和修复不读取未来标签。 |
| 2026-10-31 | [Chronos-2](https://arxiv.org/abs/2610.41956) | 本周早期的核心基座更新。**TSFM 高**；多变量能力不等于在所有业务数据上更优。 |

## 2. GitHub 新增与活动

| 创建/活动日期 | 项目 | 结论 |
|---|---|---|
| 2026-11-04 | [lucasbravo00/kronos-agent](https://github.com/lucasbravo00/kronos-agent) | 将 Kronos TSFM 用于 BTC 策略的可复现、预注册评测，并记录负结果。**TSFM harness 中高**；适合借鉴失败登记，不可直接外推到交易。 |
| 2026-11-04 | [JoaoCarlos134/prosumer](https://github.com/JoaoCarlos134/prosumer) | PV 发电与住户用电日前预测及其评测工作流。**PV harness 中高**；57 模型默认项与天气时间边界尚待独立复核。 |
| 2026-11-03 | [Nikhil-creat/OrbitSentry](https://github.com/Nikhil-creat/OrbitSentry) | 遥测异常检测 + RAG 事件回忆 + 人工审批分诊。**时序 Agent 原型中高**；先审数据切分与检索时间边界。 |
| 2026-11-03 | [RUC-NLPIR/CoworkOS](https://github.com/RUC-NLPIR/CoworkOS) | 本周晨报记录的多 Agent 工作流工程。**通用 harness 中**；需自行补齐时序滚动验证。 |
| 2026-11-02 | [decisionintelligence/Rubato](https://github.com/decisionintelligence/Rubato) | 本周发现的时间序列项目。**观察中**；接入前审查数据协议和评测覆盖。 |
| 2026-11-01 | [kviatkovsky/pvforecast-go](https://github.com/kviatkovsky/pvforecast-go) | PVWatts 等物理模型的 Go 基线工具。**PV 回退工具中**；不是已验证的实测统计预测模型。 |
| 2026-10-30（11-04 更新） | [Kiran-980/1ml](https://github.com/Kiran-980/1ml) | 为编码 Agent 提供含时序预测的 ML skills。**ML/AutoML 工具中**；不是经过验证的时序 AutoML，需审查搜索与切分。 |

本周确认了 `prosumer` 与 `pvforecast-go` 两个直接面向 PV 功率预测的 GitHub 项目，但均未本地复现。研究线方面，[IMPACT](https://arxiv.org/abs/2610.40418)、[大规模分布式 PV 基础式预训练](https://arxiv.org/abs/2610.27763)、[物理信息模型的负向发现](https://arxiv.org/abs/2610.38976)及[树锚集成](https://arxiv.org/abs/2610.31248)应继续进入观察池。

## 3. 下周应执行的验证

1. 为文本、事件和检索案例建立 as-of 版本表：发生时间、首发可见时间、修订时间、预测发出时间、标签成熟时间缺一不可。
2. 以同一滚动切分和推理预算对 Chronos-2/TimesFM-3/统计基线，再逐项加入 CATF 路由、FKA 检索或 CoCo 协变量；只接受在留出时段稳定优于回退模型的模块。
3. 对 ElecLoad、GlucoAgent、OrbitSentry 先做工具调用日志和失败样本评测；为每个 Agent 工具设置成本、超时和无证据时不修改预测的规则。
4. 对 PV 工作流优先验证“树锚稀疏集成”能否跨站点稳定，再检验物理模型和复杂神经修正是否真的增益。

## 4. 覆盖边界

本周以 arXiv 原页/API、官方项目页、GitHub API 元数据与 README 为主，辅以 DailyArXiv 的 `Time Series` 汇总交叉检查。GitHub 未认证搜索和论文关键词覆盖均有限，因此这是按日期核验的精选周报，而非全量索引；日期无法确认的候选未冒充为本周新项目。

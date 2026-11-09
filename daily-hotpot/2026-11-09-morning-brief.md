# 时间序列研究晨间简报｜2026-11-09

检索时间：2026-11-09 14:52（Asia/Shanghai）。严格时间窗口：**2026-08-09 至 2026-11-09**；论文日期以 arXiv v1/官方首发为准，工程日期以 GitHub `created_at` 为准。周末未见 11 月 7–9 日 arXiv 新投递，本期纳入上一工作日（11 月 6 日）可独立核验的最新首发；作者指标未做本地复现。

## 1. 时间序列基础模型最新研究

### 2026-11-06｜[TimeOmni-Live: Continuous & Live Time Series Understanding with Long-Term Memory](https://arxiv.org/abs/2611.09502)

- **来源与日期**：arXiv v1，2026-11-06 14:22 UTC。
- **简短摘要**：提出连续、状态化的时序理解范式 CL-TSU，并给出包含 18 类任务、5K+ 数据流和 2B+ 时间步的 LiveTS-Suite。TimeOmni-Live 组合时序编码、跨窗口持久记忆与弹性流式同步；作者报告其 4B 模型在该套件上优于所比较前沿 LLM，且具有更低延迟。
- **相关性判断：高（TSFM / 流式 reasoning 底座）**。它把“跨窗口记忆、时效性、计算预算”放进同一评测协议，适合用作时序 Agent 的长期状态层候选；但应优先审计记忆写入时点、状态泄漏、流延迟及不同任务上的遗忘行为，不能把作者报告直接外推为生产能力。

### 2026-11-06｜[TailDART: Compute-Efficient Foundation Models for Financial Time-Series Forecasting](https://arxiv.org/abs/2611.09176)

- **来源与日期**：arXiv v1，2026-11-06 08:56 UTC。
- **简短摘要**：面向低信噪比、非平稳金融流的 2.68M 参数紧凑 TSFM，以 grouped-query attention 减少 KV-cache 带宽压力。作者在多资产、多分辨率实验中称其与较大模型的预测精度相当，并报告最高 48.1% 的推理加速。
- **相关性判断：中高（TSFM 部署 / Agent 路由）**。为预算受限的 Agent 提供“小模型优先、昂贵模型回退”的可测试假设；其结论目前只覆盖金融场景，须在负荷、PV 等非金融数据和相同 as-of 协变量合同下复核。

## 2. 时间序列建模 Agent 最新研究

### 2026-11-09｜本轮无可独立核验的新增论文

- **来源与日期**：arXiv 关键词检索至 2026-11-09；11 月 7–9 日为周末，无新增直接命中时序建模 Agent 的首发条目。
- **简短摘要**：维持对 2026-11-04 [ElecLoad](https://arxiv.org/abs/2611.06508) 等上一期条目的追踪，不因二次传播或代码活动而重复计为新研究。
- **相关性判断：中（检索结论）**。空增量本身提示应等待下一工作日的新提交，而不是把旧论文的修订、会议目录或汇总页日期当作首发日期。

## 3. 时间序列 reasoning 模型最新研究

### 2026-11-06｜[TimeOmni-Live](https://arxiv.org/abs/2611.09502) 的 reasoning 追踪注记

- **来源与日期**：arXiv v1，2026-11-06 14:22 UTC。
- **简短摘要**：该工作并非链式思维或自主规划 Agent；其“跨窗口历史证据 + 任务状态”的显式持久化，为连续时序推断提供了可审计状态接口。
- **相关性判断：中高（连续时序 reasoning）**。建议将其与上一期的 [CoCo](https://arxiv.org/abs/2611.05515) 区分：前者解决流式状态保持，后者将文本推断转成数值协变量；两者均需要以预测原点隔离记忆和外部上下文。

## 4. 光伏功率预测最新研究

### 2026-11-05｜[Two-stage residual learning for calibrated uncertainty in solar irradiance forecasts](https://arxiv.org/abs/2611.07444)

- **来源与日期**：arXiv v1，2026-11-05 04:42 UTC。
- **简短摘要**：先以 LSTM 预测全球水平辐照度（GHI）均值，再单独建模总预测残差的分布以输出不确定性。作者用 NSRDB 历史天气与 PIT 评估，报告 LSTM+高斯过程配置可将预测标准差与历史标准差的偏差减少 56.5%。
- **相关性判断：中高（PV 上游辐照度 / 概率预测）**。辐照度不是电站 AC 功率，故不应直接视为 PV 功率预测 SOTA；但其校准误差层可作为 PV Agent 的风险、储能调度和弃光决策输入。需验证天气资料的实时可得版本和跨站点校准。

## 5. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列 / Agent harness

#### 2026-11-06｜[rainyZhou2/SreAgentHarness](https://github.com/rainyZhou2/SreAgentHarness)

- **来源与日期**：GitHub `created_at` 2026-11-06 00:47 UTC，最近推送 2026-11-09；已检查 README 和代码树。
- **简短摘要**：Go 编写的 SRE Agent runtime，提供可恢复的运行/步骤状态机、风险分级审批、工具调用账本、可回放评测、离线门禁、灰度与自动回滚；仓库含基准 case、部署与本地桌面端代码。
- **相关性判断：中高（通用 Agent harness）**。不是时序或 AutoML 项目，但其 as-of 运行记录、审批绑定、重放评测和非劣门禁可迁移到高风险的时序预测 Agent；接入前仍须验证其评测数据对时间泄漏、工具版本与成本的覆盖。

### 光伏功率预测

#### 2026-11-07｜[OuissalSarkouh/solar-pv-power-generation-forecasting](https://github.com/OuissalSarkouh/solar-pv-power-generation-forecasting)

- **来源与日期**：GitHub `created_at` 2026-11-07 22:32 UTC；仓库当前仅有 README。
- **简短摘要**：README 描述拟使用历史生产、天气和时间特征做 PV 发电预测，面向运行计划与柔性负荷调度；未提供训练代码、数据、时间切分、指标或许可证。
- **相关性判断：低（PV 预测线索）**。主题直接相关但不可复现，应仅列为观察项；在补齐实现和严格时间回测前，不可作为模型、数据集或效果证据。

## 6. 今日观察与行动建议

1. **把流式状态当作一等评测对象。** 对 TimeOmni-Live 一类模型，除误差外记录 state 写入、上下文首见、预测发出和标签成熟时间，才可排除跨窗口泄漏。
2. **用校准指标连接预测与决策。** 辐照度残差模型的价值在于风险分布而非单点误差；PV 工作流应报告 PIT/覆盖率、峰值时段误差和储能决策代价。
3. **从 harness 借治理而非借领域结论。** SreAgentHarness 可借鉴可回放与审批结构，但没有证明任何时序预测收益；时序模型选择仍需 rolling-origin 与天气版本复测。

## 7. 检索与筛选说明

- 直接检索/复核 arXiv API（按 `submittedDate`）、arXiv 原页、GitHub REST 元数据/README/代码树以及官方 DailyArXiv README；关键词覆盖 `time series foundation model`、`time series agent`、`reasoning`、`harness`、`machine learning`、`AutoML`、`photovoltaic/solar power/solar irradiance forecasting`。
- 仅将窗口内、首发日期可确认的条目列为主项；性能均为作者报告，未本地复现。GitHub 的仅 README 项目明确降级。
- 访问时间：2026-11-09 14:52（Asia/Shanghai）。

## 8. DailyArXiv 补检结论

- 已核验 [zezhishao/DailyArXiv](https://github.com/zezhishao/DailyArXiv) `master` README：标注 `Last update: 2026-11-06`，最新公开更新提交亦为 2026-11-05。其 **Time Series** 栏目的最新行仍主要到 2026-11-04，收录 Gfm4Mtsad 与 FKA 等已在 11 月 6 日晨报记录的条目。
- 本期新增的 TimeOmni-Live、TailDART 与两阶段太阳辐照度不确定性论文未出现在该份 README 中，已按 arXiv v1 独立核验后补充。AdaMamba 虽在该栏目显示 2026-11-04，但 arXiv 首版为 2026-04-27、当前为 v2，首发超出窗口，继续降级排除。

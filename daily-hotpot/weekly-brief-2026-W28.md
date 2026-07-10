# 2026-W28 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-07-10  
覆盖范围：2026-07-06 至 2026-07-10

## 本周重点

1. **基础模型方向**：本周主线非常清楚，从“TSFM 能不能赢”继续推进到“何时值得部署”“预训练语料是否足够真实”“在强漂移和强 covariate 场景里是否还能站得住”。对应的代表条目分别是 [When Do Foundation Models Pay Off?](https://arxiv.org/abs/2607.04919)、[Forecasting Realized Volatility with Time Series Foundation Models](https://arxiv.org/abs/2607.05291)、[RMISC](https://arxiv.org/abs/2607.06504)、[Evaluating Time Series Foundation Models for Electricity Price Forecasting](https://arxiv.org/abs/2607.02623) 和 [TiRex-2](https://arxiv.org/abs/2607.01204)。
2. **Agent 方向**：本周新增最值得补进主线的是 [TopoBrick](https://arxiv.org/abs/2607.06349)，它把 `agentic selection` 放进了零样本时序部署链路。与此同时，`TimeClaw`、`AION`、`KairosAgent` 与 `DeXposure-Claw` 仍然构成最稳的四条路线，分别覆盖 runtime、harness、semantic reasoning fusion 和高风险监督。
3. **Reasoning 方向**：总纲仍由 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545) 和 [IRTS-ToolBench](https://arxiv.org/abs/2606.15107) 支撑。本周没有检出比这组三条主线更新且更强的 reasoning 论文，说明方向仍处在“benchmark、verifier 与可靠性审查”主导的阶段。
4. **GitHub 信号**：本周没有出现“星数很高且主题极强”的新仓库，但找到了一组足够值得跟踪的近窗项目：`TSAD-Agent`、`TimeClaw`、`aion`、`timeseries-sparklines`、`autoresearch-timeseries-agent`、`Preprocessing-for-AutoML`、`AutoML_TimeSeries_Studio`。它们分别覆盖 anomaly agent、harness、visual tool、benchmark scaffold 和 AutoML workflow。
5. **筛选结论**：本周没有把日期无法确认的条目列为主条目；所有保留内容都能在 arXiv、官方项目页或 GitHub metadata 上确认日期。

## 本周新增论文主线

### 基础模型

- [2026-07-07] [RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models](https://arxiv.org/abs/2607.06504)
  - 价值：把“真实多变量预训练语料是否真能提升 TSFM”推成一条独立主线。
- [2026-07-06] [Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks](https://arxiv.org/abs/2607.05291)
  - 价值：提醒研究者不要把 TSFM 当成金融高噪声序列上的默认最优解。
- [2026-07-06] [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)
  - 价值：最适合直接转化为 Agent 模型路由与成本控制规则。
- [2026-07-02] [Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence](https://arxiv.org/abs/2607.02623)
  - 价值：把污染风险、分布漂移和 covariate dependence 拉进真实部署评测。
- [2026-07-02] [Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis](https://arxiv.org/abs/2607.01918)
  - 价值：继续推进“统一 TSFM 覆盖多类时序任务”的路线。
- [2026-07-01] [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)
  - 价值：是本周最接近在线监控与流式执行场景的 TSFM 工作。

### Agent

- [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)
  - 价值：把 `agentic selection` 真正放进部署时的外生变量选择问题。
- [2026-06-17] [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)
  - 价值：展示“预测模型 + 风险门控 + 审计输出”的高风险时序 Agent 范式。
- [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)
  - 价值：公开了 `TimeClaw` 的 runtime、memory、tooling 和 benchmark 思路。
- [2026-05-28] [KairosAgent: Agentic Time Series Forecasting with Fused Semantic Reasoning](https://arxiv.org/abs/2605.30002)
  - 价值：最清晰地把 semantic reasoning 注入 TSFM 预测过程。
- [2026-05-24] [AION: Next-Generation Tasks and Practical Harness for Time Series](https://arxiv.org/abs/2605.25045)
  - 价值：给出本周最值得借鉴的 task/workspace/validator 协议。

### Reasoning

- [2026-06-20] [From Recognition to Understanding: Unlocking Cognitive Time Series Reasoning with LLMs](https://arxiv.org/abs/2606.22126)
  - 价值：仍是本周最强的时序 reasoning 总纲论文。
- [2026-06-15] [Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545)
  - 价值：直接指出 code execution 仍不足以替代统计验证与严格审查。
- [2026-06-13] [Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning](https://arxiv.org/abs/2606.15107)
  - 价值：把 verifier、tool use 和不规则采样 TSQA 绑定成可复现实验协议。
- [2026-04-11] [TimeSeriesExamAgent: A Comprehensive Time Series Understanding Benchmark for Multimodal Large Language Models](https://arxiv.org/abs/2604.08093)
  - 价值：为多模态时间序列理解提供了任务覆盖面很广的基准入口。

## 本周纳入跟踪的 GitHub 项目

- [2026-07-06] [ChamoLu/TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)
  - 定位：时间序列异常检测 Agent。
  - 判断：中高相关。主题贴得很近，但仓库还处在早期阶段。
- [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
  - 定位：本地可复现的时序 benchmark scaffold。
  - 判断：中高相关。适合作为轻量实验台参考。
- [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
  - 定位：时序 Agent / harness 参考实现。
  - 判断：最高相关。优先跟 runtime、memory、tool protocol。
- [2026-05-13] [dallasta-gui/Preprocessing-for-AutoML](https://github.com/dallasta-gui/Preprocessing-for-AutoML)
  - 定位：面向时序 forecasting 的 AutoML 前处理实验。
  - 判断：中高相关。适合参考 domain-aware preprocessing。
- [2026-05-11] [md1415/AutoML_TimeSeries_Studio](https://github.com/md1415/AutoML_TimeSeries_Studio)
  - 定位：自动模型选择与训练的时序 AutoML 应用。
  - 判断：中相关。偏应用层，但能提供产品形态参考。
- [2026-05-06] [vrraj/timeseries-sparklines](https://github.com/vrraj/timeseries-sparklines)
  - 定位：agentic workflow 的轻量时序可视化 harness。
  - 判断：中高相关。对报告层与可视化工具层很实用。
- [2026-04-12] [ztxtech/aion](https://github.com/ztxtech/aion)
  - 定位：OpenCode 风格的 time-series harness。
  - 判断：最高相关。仍是本周最值得持续拆解的时序工程框架之一。

## 推荐阅读顺序

1. `Break-Even Analysis` 与 `RMISC`：先看 TSFM 的部署价值和语料问题。
2. `TopoBrick`、`TimeClaw`、`AION`：再看 agentic runtime 与 deployment-time selection。
3. `TSCognition` 与 `IRTS-ToolBench`：最后补 reasoning taxonomy 与 verifier-backed tool use。

## 下周跟踪项

- 检查 `RMISC`、`TopoBrick` 和 `Break-Even Analysis` 是否放出官方代码、模型卡或复现实验仓库。
- 对照 `TimeClaw`、`AION` 与 `TSAD-Agent`，整理一版本仓库可复用的 `task schema + tool protocol + validator loop`。
- 继续监控 7 月中旬是否出现比 `TSCognition + IRTS-ToolBench` 更强的新 reasoning 论文或官方代码页。

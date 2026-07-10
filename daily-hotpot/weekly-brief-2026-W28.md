# 2026-W28 时间序列 Agent / Reasoning / Foundation Model 周报

更新日期：2026-07-10  
覆盖范围：2026-07-06 至 2026-07-10

## 本周重点

1. **基础模型方向**：本周最强的新信号仍然是 [RMISC](https://arxiv.org/abs/2607.06504)、[When Do Foundation Models Pay Off?](https://arxiv.org/abs/2607.04919)、[Forecasting Realized Volatility with Time Series Foundation Models](https://arxiv.org/abs/2607.05291)、[Evaluating Time Series Foundation Models for Electricity Price Forecasting](https://arxiv.org/abs/2607.02623) 和 [TiRex-2](https://arxiv.org/abs/2607.01204)。它们共同把本周主线从“再做一个 TSFM”推进到“什么时候值得部署、用什么语料预训练、在强漂移和高噪声场景下是否真的站得住”。
2. **DailyArXiv 补检结果**：本周确认 `zezhishao/DailyArXiv` 的 `Time Series` README 条目中确实出现了 [TimEE](https://arxiv.org/abs/2607.07500)、[Rethinking Multimodal Time-Series Forecasting Evaluation](https://arxiv.org/abs/2607.06973)、[RMISC](https://arxiv.org/abs/2607.06504)、[TopoBrick](https://arxiv.org/abs/2607.06349) 和 [Evaluating Time Series Foundation Models for Electricity Price Forecasting](https://arxiv.org/abs/2607.02623)。其中前四条都处在本周时间窗口内，说明 `DailyArXiv` 对通用时序关键词跟踪是有效的，但对 `agent / reasoning / harness` 仍不完整。
3. **Agent 方向**：本周新增最值得补进主线的是 [TopoBrick](https://arxiv.org/abs/2607.06349)，它把 `agentic selection` 真正放进了零样本时序部署链路。与此同时，[TimeClaw](https://arxiv.org/abs/2606.05404)、[AION](https://arxiv.org/abs/2605.25045)、[KairosAgent](https://arxiv.org/abs/2605.30002) 和 [DeXposure-Claw](https://arxiv.org/abs/2606.19501) 仍然构成最稳的四条路线。
4. **Reasoning 方向**：本周没有检出比 [TSCognition](https://arxiv.org/abs/2606.22126)、[Can LLM Coding Agents Reason About Time Series?](https://arxiv.org/abs/2606.16545) 和 [IRTS-ToolBench](https://arxiv.org/abs/2606.15107) 更新且更强的 reasoning 论文。方向仍处在“benchmark、verifier 与可靠性审查”主导的阶段。
5. **光伏 / 光功率预测**：本周补齐后，可以确认窗口内最值得看的能源相关条目是 [Learning Long-Term Temporal Dependencies in Photovoltaic Power Output Prediction Through Multi-Horizon Forecasting](https://arxiv.org/abs/2605.19074) 与 [Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications](https://arxiv.org/abs/2604.22077)。前者强调 multi-horizon 训练目标，后者直接回答 TSFM 在 solar / wind / load 预测上的实际收益。
6. **GitHub 信号**：本周纳入跟踪且更贴题的一组仓库更新为：`TSAD-Agent`、`forecast-playground`、`automl/timee`、`autoresearch-timeseries-agent`、`TimeClaw`、`timeseries-sparklines`、`TSF`、`aion`。相比上周，这组项目更集中于异常检测 Agent、leak-free forecasting harness、TSFM benchmark harness 和 end-to-end time-series ICL 代码。

## 本周新增论文主线

### 基础模型

- [2026-07-08] [TimEE: End-to-end Time Series Classification via In-Context Learning](https://arxiv.org/abs/2607.07500)
  - 价值：补充了“合成先验 + ICL 是否能直接形成时序 foundation model”的新观察点。
- [2026-07-07] [RMISC: A Large-scale Real-world Multivariate Corpus for Time Series Foundation Models](https://arxiv.org/abs/2607.06504)
  - 价值：把“真实多变量预训练语料是否真能提升 TSFM”推成独立主线。
- [2026-07-06] [Forecasting Realized Volatility with Time Series Foundation Models: A Comparison with Econometric Benchmarks](https://arxiv.org/abs/2607.05291)
  - 价值：提醒研究者不要把 TSFM 当成金融高噪声序列上的默认最优解。
- [2026-07-06] [When Do Foundation Models Pay Off? A Break-Even Analysis of Pretrained Time Series Forecasters](https://arxiv.org/abs/2607.04919)
  - 价值：最适合直接转化为 Agent 模型路由和成本控制规则。
- [2026-07-02] [Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence](https://arxiv.org/abs/2607.02623)
  - 价值：把污染风险、分布漂移和 covariate dependence 拉进真实部署评测。
- [2026-07-01] [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://arxiv.org/abs/2607.01204)
  - 价值：是本周最接近在线监控和流式执行场景的 TSFM 工作。

### Agent

- [2026-07-07] [TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting](https://arxiv.org/abs/2607.06349)
  - 价值：把 `agentic selection` 真正带进部署时的外生变量选择问题。
- [2026-06-17] [DeXposure-Claw: An Agentic System for DeFi Risk Supervision](https://arxiv.org/abs/2606.19501)
  - 价值：展示“预测模型 + 风险门控 + 审计输出”的高风险时序 Agent 范式。
- [2026-06-03] [Harnessing Generalist Agents for Contextualized Time Series](https://arxiv.org/abs/2606.05404)
  - 价值：公开了 `TimeClaw` 的 runtime、memory、tooling 与 benchmark 思路。
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
- [2026-04-11] [TimeSeriesExamAgent: Creating Time Series Reasoning Benchmarks at Scale](https://arxiv.org/abs/2604.10291)
  - 价值：为大规模自动生成时序 reasoning benchmark 提供了清晰入口。

### 光伏 / 光功率预测

- [2026-05-18] [Learning Long-Term Temporal Dependencies in Photovoltaic Power Output Prediction Through Multi-Horizon Forecasting](https://arxiv.org/abs/2605.19074)
  - 价值：强调 multi-horizon 学习目标比单步点预测更能稳定捕获 PV 长依赖。
- [2026-04-23] [Empirical Assessment of Time-Series Foundation Models For Power System Forecasting Applications](https://arxiv.org/abs/2604.22077)
  - 价值：直接比较 TSFM 在 solar / wind / load 生产型预测上的收益和限制。
- [2026-04-23] [Forecasting Solar Energy Using a Single Image](https://arxiv.org/abs/2604.21982)
  - 价值：把视觉上下文引进太阳能辐照预测，值得持续观察多模态路线。

## 本周纳入跟踪的 GitHub 项目

- [2026-07-06] [ChamoLu/TSAD-Agent](https://github.com/ChamoLu/TSAD-Agent)
  - 定位：时间序列异常检测 Agent。
  - 判断：中高相关。主题贴得很近，但仓库仍处在早期阶段。
- [2026-07-03] [xavierdurawa/forecast-playground](https://github.com/xavierdurawa/forecast-playground)
  - 定位：leak-free forecasting retrieval harness。
  - 判断：高相关。适合作为 as-of tool 与评测 scaffold 参考。
- [2026-06-30] [automl/timee](https://github.com/automl/timee)
  - 定位：TimEE 官方实现。
  - 判断：中高相关。对时序 ICL 与 AutoML 社区都值得跟踪。
- [2026-06-17] [AkshajKashyap/autoresearch-timeseries-agent](https://github.com/AkshajKashyap/autoresearch-timeseries-agent)
  - 定位：本地可复现的时序 benchmark scaffold。
  - 判断：中高相关。适合作为轻量实验台参考。
- [2026-06-03] [iDEA-iSAIL-Lab-UIUC/TimeClaw](https://github.com/iDEA-iSAIL-Lab-UIUC/TimeClaw)
  - 定位：时序 Agent / harness 参考实现。
  - 判断：最高相关。优先跟 runtime、memory、tool protocol。
- [2026-05-06] [vrraj/timeseries-sparklines](https://github.com/vrraj/timeseries-sparklines)
  - 定位：agentic workflow 的轻量时序可视化 harness。
  - 判断：中高相关。对报告层与可视化工具层很实用。
- [2026-04-16] [jaeukmoon/TSF](https://github.com/jaeukmoon/TSF)
  - 定位：TSFM benchmark harness。
  - 判断：高相关。适合持续跟进 benchmark protocol。
- [2026-04-12] [ztxtech/aion](https://github.com/ztxtech/aion)
  - 定位：OpenCode 风格的 time-series harness。
  - 判断：最高相关。仍是本周最值得持续拆解的时序工程框架之一。

## 推荐阅读顺序

1. `RMISC`、`Break-Even Analysis`、`EPF Evaluation`：先看 TSFM 的数据、部署价值和能源外生变量问题。
2. `TopoBrick`、`TimeClaw`、`AION`、`KairosAgent`：再看 agentic runtime、tool protocol 与 deployment-time selection。
3. `TSCognition`、`Can LLM Coding Agents Reason About Time Series?`、`IRTS-ToolBench`：最后补 reasoning taxonomy 与 verifier-backed tool use。

## 下周跟踪项

- 检查 `TimEE`、`RMISC`、`TopoBrick` 和 `Break-Even Analysis` 是否放出更多代码、模型卡或复现实验仓库。
- 对照 `TimeClaw`、`AION`、`forecast-playground` 与 `TSF`，整理一版可复用的 `task schema + as-of tool + validator loop`。
- 继续监控 7 月中下旬是否出现比 `TSCognition + IRTS-ToolBench` 更强的新 reasoning 论文，尤其关注是否有官方代码与可验证 benchmark 发布。

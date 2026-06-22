# Reasoning 数据集汇总：时间序列推理与 Agent 论文

本文汇总当前项目已解读论文中用于训练、评测、构造轨迹或 case study 的公开/半公开时间序列推理数据集：

- TimeClaw: *Harnessing Generalist Agents for Contextualized Time Series*
- TimeART: *TimeART: Towards Agentic Time Series Reasoning via Tool-Augmentation*
- TSQAgent: *Rating Time Series Data Quality via Dedicated Agentic Reasoning*
- Last-mile forecasting: *Bridging the Last Mile of Time Series Forecasting with LLM Agents*
- QoEReasoner: *An Agentic Reasoning Framework for Automated and Explainable QoE Diagnosis in RANs*
- ARTIST: *Adaptive Time Series Reasoning via Segment Selection*
- FinSTaR: *Towards Financial Reasoning with Time Series Reasoning Models*
- LLaTiSA: *Towards Difficulty-Stratified Time Series Reasoning from Visual Perception to Semantics*
- TSRBench: *A Comprehensive Multi-task Multi-modal Time Series Reasoning Benchmark for Generalist Models*
- VeriTime: *Time Series Reasoning via Process-Verifiable Thinking Data Synthesis and Scheduling for Tailored LLM Reasoning*
- SenTSR-Bench: *Thinking with Injected Knowledge for Time-Series Reasoning*
- Time-R1: *Time Series Forecasting as Reasoning*
- VESTA: *Visual Exploration with Statistical Tool Agents*
- MedRLM: *Recursive Multimodal Health Intelligence*
- 2DV Annotation: *Evaluating Interactive 2D Visualization as a Sample Selection Strategy for Biomedical Time-Series Data Annotation*
- Coding Agents: *Can LLM Coding Agents Reason About Time Series?*
- TS-Memory: *Plug-and-Play Memory for Time Series Foundation Models*

说明：部分论文数据集已经在 GitHub 或 Hugging Face 公开；部分只在论文中描述，尚未发现官方公开下载入口。下文会明确区分“可下载链接”和“未发现官方公开下载”。样例为字段级简化样例，重点展示数据结构和任务形态。

## 1. 总览

| 数据集 | 被哪篇论文使用 | 主要用途 | 官方/公开下载 |
|---|---|---|---|
| Context-is-Key (CiK) | TimeClaw | 上下文感知时间序列预测与推理评测 | [GitHub](https://github.com/ServiceNow/context-is-key-forecasting), [HF](https://huggingface.co/datasets/ServiceNow/Context-is-Key-Forecasting) |
| TSRBench | TSRBench；TimeClaw | 多任务、多模态、开放式时间序列推理评测 | [项目页](https://tsrbench.github.io/), [HF](https://huggingface.co/datasets/umd-zhou-lab/TSRBench) |
| TSAIA | TimeClaw | 金融时间序列分析与多步推理评测 | [HF](https://huggingface.co/datasets/Melady/TSAIA), [arXiv](https://arxiv.org/abs/2509.01822) |
| MTBench | TimeART | 多模态时间序列预测、推理与 QA 评测 | [arXiv](https://arxiv.org/abs/2503.16858)，未发现官方数据下载页 |
| TimeMQA / TSQA | TimeART | 多任务时间序列问答评测，也被 TimeToolBench 用作源数据 | [arXiv](https://arxiv.org/abs/2503.01875)，未发现官方数据下载页 |
| TimeToolBench | TimeART | 100k ReAct 风格工具调用训练轨迹 | TimeART 论文中描述，未发现官方代码/HF 下载 |
| TimeSeriesExam | TimeART 的 TimeToolBench 源数据之一 | 时间序列理解考试式 QA | [arXiv](https://arxiv.org/abs/2410.14752)，未发现官方数据下载页 |
| ChatTS 数据 | TimeART 的 TimeToolBench 源数据之一 | 合成时间序列理解与推理数据 | [arXiv](https://arxiv.org/abs/2412.03104), [GitHub](https://github.com/NetManAIOps/ChatTS) |
| TSQBench | TSQAgent | 时间序列数据质量维度识别与 pairwise quality comparison | [arXiv](https://arxiv.org/abs/2606.03629), [GitHub](https://github.com/clsr1008/TSQualityAgent) |
| 匿名航线日票务销售数据 | Last-mile Forecasting | 节假日上下文 forecast revision case study | [arXiv](https://arxiv.org/abs/2606.02497)；未发现官方公开下载 |
| 真实运营 RAN QoE 诊断数据 | QoEReasoner | AD、FCR、RCC 多任务网络诊断评测 | [arXiv](https://arxiv.org/abs/2606.01925)；未发现官方公开下载 |
| ARTIST 六数据集套件 | ARTIST | 自适应片段选择式时间序列推理评测 | [ARTIST GitHub](https://github.com/mims-harvard/ARTIST)；各源数据见分项 |
| FinTSR-Bench | FinSTaR | 金融时间序列 assessment/prediction reasoning QA | [arXiv](https://arxiv.org/abs/2605.03460), [GitHub](https://github.com/seunghan96/FinSTaR) |
| HiTSR | LLaTiSA | 分层时间序列推理训练与评测，含 verified CoT | [arXiv](https://arxiv.org/abs/2604.17295), [GitHub](https://github.com/RainingNovember/LLaTiSA) |
| VeriTime-TSRBench | VeriTime | 过程可验证 TS-tailored CoT 训练/评测数据 | [arXiv](https://arxiv.org/abs/2602.07830), [匿名代码](https://anonymous.4open.science/r/VeriTime-E017) |
| SenTSR-Bench | SenTSR-Bench | 真实工业传感器多阶段诊断推理评测 | [arXiv](https://arxiv.org/abs/2602.19455), [项目页](https://zlhe0.github.io/SenTSR-Bench-Website/)；未发现官方 HF/GitHub 下载 |
| TSEvol Dataset A | SenTSR-Bench；TimeART 的源数据相关方向 | inductive/deductive/causal 时间序列推理评测 | [arXiv](https://arxiv.org/abs/2412.03104), [GitHub: ChatTS](https://github.com/NetManAIOps/ChatTS) |
| TS&Language MCQ2 | SenTSR-Bench | 两条时间序列之间的关系和比较推理 | [论文/代码入口](https://github.com/behavioral-data/TSandLanguage) |
| Time-R1 预测数据集套件 | Time-R1 | reasoning-aware time-series forecasting 训练与评测 | [Time-R1 GitHub](https://github.com/ustc-time-series/Time-R1)；源数据见分项 |
| DAWN | VESTA | 分布拟合与时间序列概率建模 agent 评测 | [arXiv](https://arxiv.org/abs/2606.00384)；论文源码含 benchmark 描述，未发现独立数据仓库 |
| MedRLM 真实临床评估数据套件 | MedRLM | 长病历、多模态影像、传感器/ICU 时间序列、转诊代理任务设计 | MIMIC-IV/eICU/MIMIC-CXR/PTB-XL 等官方数据源；多数需 PhysioNet credentialed access |
| MAIJU-DS / NICU-A | 2DV Annotation | 真实人类标注者样本选择实验与下游分类评测 | MAIJU-DS 见原论文数据；NICU-A 为研究数据集，本文未发现统一公开下载 |
| TimeSeriesExam / TSFU | Coding Agents | LLM direct/code/hybrid agent 时间序列理解多选评测 | [TimeSeriesExam arXiv](https://arxiv.org/abs/2410.14752), [TSFU arXiv](https://arxiv.org/abs/2503.06447)；Coding Agents 代码见 [GitHub](https://github.com/DekuD2/can-llm-coding-agents-reason-about-time-series) |
| TS-Memory 长期预测数据套件 | TS-Memory | 冻结 TSFM + PlugMem 适配评测，MSE/MAE/CRPS 与延迟比较 | [TS-Memory GitHub](https://github.com/sisuolv/TS-Memory)；源数据含 ETT/Electricity/Exchange/Traffic/Weather |

## 2. Context-is-Key (CiK)

**论文中用途**：TimeClaw 用 CiK 测试模型能否利用文本上下文改善时间序列预测。CiK 的关键点是：只看历史数值往往不够，未来事件、约束、因果关系或领域背景会改变目标序列。

**下载链接**：

- GitHub: <https://github.com/ServiceNow/context-is-key-forecasting>
- Hugging Face: <https://huggingface.co/datasets/ServiceNow/Context-is-Key-Forecasting>
- 论文页: <https://proceedings.mlr.press/v267/williams25a.html>

**数据组成**：

TimeClaw 论文中的统计表显示，CiK 共 71 个 context-aware temporal tasks，覆盖 7 个真实领域和一小组合成动力系统任务：

| 领域 | 任务数 | 代表数据源 |
|---|---:|---|
| Public Safety | 26 | Montreal fire department intervention logs |
| Climatology | 12 | Solar irradiance、cloud cover、solar power |
| Transportation | 11 | PeMS traffic occupancy |
| Energy | 7 | Electricity consumption |
| Retail | 6 | ATM cash withdrawal |
| Mechanics | 3 | Causal Chambers wind-tunnel measurements |
| Economics | 3 | unemployment rates |
| Synthetic Dynamics | 3 | simulated bivariate dynamical systems |

CiK 的上下文类型包括：

| 上下文类型 | 任务数 | 含义 |
|---|---:|---|
| Intemporal | 51 | 过程性质、目标变量含义、长期季节性、取值约束 |
| Historical | 25 | 观测窗口外的历史统计或过去行为 |
| Covariate | 52 | 与目标序列相关的额外变量 |
| Future | 33 | 未来事件、场景或约束 |
| Causal | 14 | 协变量与目标之间的因果、反因果或混杂关系 |

**字段级样例**：

```json
{
  "domain": "retail",
  "target_series": [82, 79, 75, 80, 77, 74],
  "future_horizon": 3,
  "context": "The ATM will be inaccessible during the next three days because of maintenance.",
  "question": "Forecast the next three daily cash withdrawal values.",
  "expected_behavior": "Future withdrawals should be near zero during the inaccessible period."
}
```

```json
{
  "domain": "energy",
  "target_series": [113.2, 118.5, 121.0, 119.4],
  "context": "A snowstorm is expected in the forecast window.",
  "question": "Predict electricity demand under the provided future weather event.",
  "expected_behavior": "Demand may rise because heating load increases."
}
```

## 3. TSRBench

**论文中用途**：TSRBench 论文将其作为核心 benchmark，用于评测 30+ 个 LLM/VLM/TSLLM 的时间序列推理能力；TimeClaw 也用 TSRBench 测试开放式时间序列推理能力，包括 perception、reasoning、prediction 和 decision making。TimeClaw 论文使用了 stratified 20% subset，总计 825 条样本。

**下载链接**：

- 项目页: <https://tsrbench.github.io/>
- Hugging Face: <https://huggingface.co/datasets/umd-zhou-lab/TSRBench>
- arXiv: <https://arxiv.org/abs/2601.18744>

**数据组成**：

TimeClaw 论文列出 TSRBench 共 4,125 条完整实例，15 个细粒度任务，分为 4 大类：

| 维度 | 细粒度任务数 | 完整实例数 | TimeClaw 20% 子集 |
|---|---:|---:|---:|
| Perception | 4 | 700 | 140 |
| Prediction | 2 | 1,080 | 216 |
| Decision-Making | 2 | 635 | 127 |
| Reasoning | 7 | 1,710 | 342 |
| Total | 15 | 4,125 | 825 |

细粒度任务包括 pattern recognition、anomaly detection、similarity analysis、noise understanding、event prediction、forecasting、qualitative/quantitative decision-making、abductive/causal/deductive/etiological/inductive/numerical/temporal relation reasoning。

TSRBench 论文还说明该数据集包含 15,250 个 time series channels，覆盖 14 个领域，58.1% 样本为多变量时间序列，并支持文本、图像、文本+图像和 time-series embedding 四类输入。

**数据来源**：

| 任务 | 数据源 |
|---|---|
| Pattern Recognition / Noise Understanding / Anomaly Detection / Comparative Analysis | TimeSeriesExam |
| Etiological Reasoning | LEAVES, Human Activity Recognition |
| Causal Discovery | CausalRiver |
| Abductive Reasoning | GAMETIME |
| Temporal Relation Reasoning | Time-IMM |
| Numerical Reasoning / Deductive Reasoning / Quantitative Decision-Making | Synthetic Data |
| Inductive Reasoning | Kaggle Philippines Typhoon Trend, Sunspots |
| Time Series Forecasting | CAMFE |
| Event Prediction | TimeCAP |
| Qualitative Decision-Making | ECG-QA, PTB-XL |

**构造流程**：raw data collection -> question generation -> verification。合成任务用 code verifier 复跑生成逻辑；真实/网页数据用 fact verifier 对齐文本、时间戳和元数据。论文报告 data leakage 检测很低：o4-mini、GPT-5-mini、GPT-5 的 n-gram accuracy 分别为 0.3%、0.1%、0.4%。

**字段级样例**：

```json
{
  "dimension": "Reasoning",
  "subtask": "Causal Reasoning",
  "domain": "Hydrology",
  "series": {
    "station_A": [1.2, 1.8, 2.4, 2.1],
    "station_B": [0.9, 1.1, 1.7, 2.3]
  },
  "context": "Station A is upstream of Station B.",
  "question": "Which causal direction best explains the delayed rise?",
  "choices": ["A causes B", "B causes A", "Both independent", "No relation"],
  "answer": "A causes B"
}
```

```json
{
  "dimension": "Perception",
  "subtask": "Anomaly Detection",
  "series": [0.06, 0.11, 0.13, 0.14, 0.51, 0.16],
  "question": "Which value is likely an anomaly?",
  "choices": ["0.51", "0.16", "0.14", "0.11"],
  "answer": "0.51"
}
```

## 4. TSAIA

**论文中用途**：TimeClaw 用 TSAIA 的金融任务测试实用型时间序列分析能力。论文特别关注 portfolio VaR、Sharpe ratio、market alpha、market beta 等问题，并通过能力演化生成 `portfolio_var`、`portfolio_sharpe`、`capm_regression`。

**下载链接**：

- Hugging Face: <https://huggingface.co/datasets/Melady/TSAIA>
- arXiv: <https://arxiv.org/abs/2509.01822>

**数据组成**：

TSAIA 是金融时间序列分析 benchmark，样本通常包含资产或投资组合相关时间序列、题目描述、选项和标准答案。TimeClaw 论文使用其 finance split，并重点评估多选准确率。

**字段级样例**：

```json
{
  "task": "Portfolio Sharpe Ratio",
  "series": {
    "asset_A": [100.0, 101.2, 100.8, 102.3],
    "asset_B": [80.0, 79.5, 80.4, 81.0],
    "risk_free_rate": 0.02
  },
  "question": "Which portfolio has the highest annualized Sharpe ratio?",
  "choices": {
    "A": "70% asset_A + 30% asset_B",
    "B": "30% asset_A + 70% asset_B"
  },
  "answer": "A"
}
```

```json
{
  "task": "CAPM Beta",
  "series": {
    "asset_return": [0.01, -0.02, 0.015, 0.006],
    "market_return": [0.008, -0.018, 0.012, 0.004]
  },
  "question": "Estimate the asset beta against the market and choose the closest option.",
  "choices": ["0.5", "0.9", "1.2", "1.8"],
  "answer": "1.2"
}
```

## 5. MTBench

**论文中用途**：TimeART 用 MTBench 做预测和推理评测。任务同时包含数值时间序列和文本信息，覆盖金融与天气场景。

**下载链接**：

- arXiv: <https://arxiv.org/abs/2503.16858>
- 官方数据下载：未发现稳定公开入口。TimeART 论文只引用 MTBench 论文并按其 protocol 评测。

**数据组成**：

TimeART 论文实际使用的 MTBench 任务包括：

| 任务组 | 具体任务 | 指标 |
|---|---|---|
| Stock Price Forecasting | 7-day 输入预测 1-day；30-day 输入预测 7-day | MAE, MAPE |
| Stock Indicator Forecasting | MACD、Bollinger Bands Upper Band | MSE |
| Temperature Forecasting | 7-day 输入预测 1-day；14-day 输入预测 3-day | MSE, MAE |
| Stock Trend Classification | 7-day/30-day，3-way 和 5-way 分类 | Accuracy |
| News-stock Correlation | 新闻与股票走势相关性，3-way 和 5-way | Accuracy |
| News-finance MCQA | 新闻金融多选问答 | Accuracy |
| Temperature Trend Classification | past/future trend | Accuracy |

**字段级样例**：

```json
{
  "domain": "finance",
  "task": "stock_trend_classification",
  "stock_prices": [174.2, 175.1, 173.8, 176.0, 177.4, 178.0, 177.6],
  "news": "The company reported stronger-than-expected quarterly revenue.",
  "question": "Classify the next-day stock trend.",
  "choices": ["strong decrease", "decrease", "stable", "increase", "strong increase"],
  "answer": "increase"
}
```

```json
{
  "domain": "weather",
  "task": "temperature_forecasting",
  "temperature": [20.1, 19.8, 20.4, 21.0, 20.7, 19.9, 20.3],
  "event_text": "A cold front is expected to pass through the station tomorrow.",
  "question": "Forecast the next-day mean temperature.",
  "target": 18.9
}
```

## 6. TimeMQA / TSQA

**论文中用途**：TimeART 用 TimeMQA 的 QA 子集作为推理评测，并将任务划分为 Understanding、Perception、Reasoning、Estimation 四类。TimeToolBench 也从 TimeMQA 等源数据中构造轨迹，但会移除评测重叠样本以避免泄漏。

**下载链接**：

- arXiv: <https://arxiv.org/abs/2503.01875>
- 官方数据下载：未发现稳定公开入口。

**数据组成**：

TimeMQA 论文摘要称其 TSQA 数据集约包含 200,000 question-answer pairs，覆盖 12 个领域，统一了 forecasting、imputation、anomaly detection、classification、open-ended reasoning 等任务。TimeART 论文选择其中 QA 子集，并按四类能力评测：

| TimeART 使用类别 | 含义 |
|---|---|
| Understanding | 理解时间序列、上下文和问题设置 |
| Perception | 识别模式、趋势、异常、局部特征 |
| Reasoning | 多步逻辑、因果或条件推理 |
| Estimation | 数值估计、预测或统计判断 |

**字段级样例**：

```json
{
  "category": "Perception",
  "series": [1.0, 1.2, 1.5, 3.9, 1.4, 1.3],
  "context": "The readings are hourly sensor measurements.",
  "question": "Which timestamp is most likely anomalous?",
  "choices": ["t=1", "t=2", "t=3", "t=4"],
  "answer": "t=4"
}
```

```json
{
  "category": "Estimation",
  "series": [10, 12, 14, 16],
  "question": "Assuming the linear trend continues, what is the next value?",
  "choices": ["16", "18", "20", "22"],
  "answer": "18"
}
```

## 7. TimeToolBench

**论文中用途**：TimeART 的核心训练语料。它不是原始 TSQA benchmark，而是由 GPT-4o 作为 expert model 生成并过滤得到的 ReAct-style 工具调用轨迹，用来训练 TSRM 学会战略性工具使用。

**下载链接**：

- TimeART arXiv: <https://arxiv.org/abs/2601.13653>
- 官方数据下载：未发现官方 GitHub 或 Hugging Face 链接。

**数据组成**：

TimeToolBench 包含超过 100k 条工具使用轨迹。源数据来自 TimeMQA、TimeSeriesExam、MTBench、ChatTS 等研究团队发布或构造的 TSQA 数据。每条轨迹遵循：

```text
Query -> Thought -> Action -> Observation -> Thought -> Action -> Observation -> Final Answer
```

质量过滤包括：

- 固定选项题要求最终答案和标准答案完全一致；
- 开放式问题要求 BERT-Score 超过阈值；
- 随机抽取中间逻辑链，由多个强 LLM judge 判断是否合理；
- 只有所有 judge 都通过的轨迹才保留。

**字段级样例**：

```json
{
  "query": "Which value is likely an outlier in [0.06, 0.11, 0.13, 0.51, 0.16]?",
  "trajectory": [
    {
      "thought": "I should use anomaly detection to confirm the suspicious point.",
      "action": {"tool": "anomaly_detection", "tool_input": {"anomaly_threshold": 1}},
      "observation": {"top_anomaly_index": 3, "top_anomaly_value": 0.51}
    }
  ],
  "final_answer": "0.51"
}
```

```json
{
  "query": "Analyze whether this series has trend and seasonality.",
  "trajectory": [
    {
      "thought": "The main patterns are trend and seasonality.",
      "action": {"tool": "trend_classifier", "tool_input": {"window": "global"}},
      "observation": {"trend": "up"}
    },
    {
      "thought": "Next I will test periodicity.",
      "action": {"tool": "seasonality_detector", "tool_input": {"max_period": 48}},
      "observation": {"period": 24, "strength": "strong"}
    }
  ],
  "final_answer": "The series has an upward trend and strong daily seasonality."
}
```

## 8. TimeSeriesExam

**论文中用途**：TimeART 论文将 TimeSeriesExam 列为 TimeToolBench 的源数据之一。

**下载链接**：

- arXiv: <https://arxiv.org/abs/2410.14752>
- 官方数据下载：未发现稳定公开入口。

**数据组成**：

TimeSeriesExam 是时间序列理解考试式 benchmark，重点不是传统 forecasting leaderboard，而是测试模型对时间序列概念、统计特征、模式、异常、趋势等问题的理解。TimeART 使用它作为生成工具调用轨迹的源任务之一。

**字段级样例**：

```json
{
  "series": [3, 5, 7, 9, 11],
  "question": "What pattern best describes this time series?",
  "choices": ["linear upward trend", "seasonal pattern", "random noise", "downward trend"],
  "answer": "linear upward trend"
}
```

```json
{
  "series": [2.0, 2.1, 2.0, 8.7, 2.2, 2.1],
  "question": "Which observation is most likely abnormal?",
  "choices": ["2.0", "2.1", "8.7", "2.2"],
  "answer": "8.7"
}
```

## 9. ChatTS 数据

**论文中用途**：TimeART 论文将 ChatTS 列为 TimeToolBench 的源数据之一。ChatTS 主要关注把时间序列与 LLM 对齐，构造合成数据以增强时间序列理解与推理。

**下载链接**：

- arXiv: <https://arxiv.org/abs/2412.03104>
- GitHub: <https://github.com/NetManAIOps/ChatTS>

**数据组成**：

ChatTS 数据通常把时间序列、文本问题和答案组织成 instruction/response 或 QA 形式，面向时间序列描述、模式识别、趋势判断、异常定位和推理。

**字段级样例**：

```json
{
  "instruction": "Describe the major pattern in the following time series.",
  "input": [12.1, 12.4, 12.8, 13.2, 13.7],
  "output": "The series shows a steady upward trend."
}
```

```json
{
  "instruction": "Answer the question based on the time series.",
  "input": {
    "series": [5.0, 5.1, 5.0, 7.8, 5.2],
    "question": "Is there an obvious spike?"
  },
  "output": "Yes. The value 7.8 is a clear spike relative to neighboring values."
}
```

## 10. TSQBench 与 TSQAgent 真实数据集

**论文中用途**：TSQAgent 使用 TSQBench 评估 LLM 的时间序列质量维度识别和维度级质量比较能力；随后在 11 个真实公开数据集上验证 quality-aware data selection 是否能提升下游预测/分类效果。

**下载链接**：

- 论文页面：<https://arxiv.org/abs/2606.03629>
- 代码仓库：<https://github.com/clsr1008/TSQualityAgent>
- TSQBench 独立 Hugging Face：未发现官方链接。

**TSQBench 组成**：

TSQBench 是合成 pairwise benchmark。每个样本从共享模板时间序列复制得到 `series_A` 与 `series_B`，然后只对其中一侧注入质量缺陷，使质量差异可控、可解释。它评估两个能力：

| 能力 | 输入 | 输出 |
|---|---|---|
| Quality Dimension Identification | 一对时间序列 | 哪些质量维度存在差异 |
| Quality Comparison | 一对时间序列 + 指定维度 | 哪条序列在该维度质量更高 |

七个质量维度包括 missing value、noise level、rare pattern、trend、frequency、amplitude、pattern consistency。活跃维度数按 1 到 5 个维度采样，概率分别为 35%、35%、20%、8%、2%。

**真实数据集组成**：

| 任务类型 | 数据集 | 说明 |
|---|---|---|
| Long-term forecasting | Electricity | 321 个客户的小时级用电量，论文使用 `MT_320` 单变量目标 |
| Long-term forecasting | ExchangeRate | 1990-2016 年 8 种货币日汇率，论文选择新加坡元 |
| Long-term forecasting | Traffic | San Francisco Bay Area freeway sensor 小时级占有率，论文使用 sensor `861` |
| Long-term forecasting | Weather | 美国约 1,600 个地点气象变量，论文关注 `wet_bulb` |
| Short-term forecasting | M4 Yearly/Monthly/Daily | M4 竞赛数据的三个频率子集 |
| Classification | MedicalImages, CBF, BME, Handwriting | UCR/UEA 分类数据集 |

**字段级样例**：

```json
{
  "dataset": "TSQBench",
  "series_A": [0.1, 0.2, 0.3, 0.4, 0.5],
  "series_B": [0.1, null, 0.3, null, 0.5],
  "active_dimensions": ["Missing Value"],
  "quality_comparison_query": "Which series has higher quality under Missing Value?",
  "quality_comparison_answer": "series_A"
}
```

```json
{
  "dataset": "Electricity",
  "task": "quality-aware data selection for forecasting",
  "target_channel": "MT_320",
  "sample": [1.21, 1.18, 1.25, 1.31, 1.29],
  "quality_score_source": "TSQAgent pairwise preference distilled by Bradley-Terry rating model",
  "downstream_metric": "RMSE"
}
```

## 11. 匿名航线日票务销售数据

**论文中用途**：*Bridging the Last Mile of Time Series Forecasting with LLM Agents* 用该数据做三组 case study：春节 holiday-aware revision、126 天多节假日 long-horizon revision、三周 reflection-memory self-improvement。

**下载链接**：

- 论文页面：<https://arxiv.org/abs/2606.02497>
- TeX 源码：<https://arxiv.org/e-print/2606.02497>
- 官方公开数据下载：未在论文 TeX、arXiv 信息或源文件中发现。

**数据组成**：

该数据是一条来自行业伙伴的真实 daily demand series，语义上是“中国热门国内航线的每日票务销售量”。论文将数值做了匿名化处理：所有值按未公开正比例常数线性缩放，因此绝对销量不可解释，但相对形状、季节性和节假日响应被保留。

| 项目 | 说明 |
|---|---|
| 频率 | Daily |
| 时间范围 | 2024-01-01 至 2026-05-05 |
| 长度 | 856 个值 |
| 主要模式 | 周季节性、年季节性、中国农历节假日响应 |
| 关键事件 | 春节、元旦、清明、劳动节、国庆等 |
| 匿名化方式 | 数值线性缩放，日期保留 |
| 公开性 | 论文描述数据已匿名化，但未提供官方下载链接 |

**case study 切分**：

| Case | Forecast origin | Horizon | Event windows |
|---|---|---|---|
| Holiday-aware revision | 2026-02-01 | 23 days，至 2026-02-23 | Spring Festival 2026-02-15 至 2026-02-23 |
| Long-horizon forecasting | 2025-12-31 | 126 days，至 2026-05-05 | New Year、Spring Festival、Qingming、Labor Day |
| Self-improvement W1 | 2026-01-05 | 7 days | 非事件周 |
| Self-improvement W2 | 2026-01-12 | 7 days | 非事件周 |
| Self-improvement W3 | 2026-01-19 | 7 days | 非事件周 |

**字段级样例**：

```json
{
  "dataset": "anonymized_air_route_daily_ticket_sales",
  "frequency": "daily",
  "date_range": ["2024-01-01", "2026-05-05"],
  "columns": ["ds", "y"],
  "anonymization": "values linearly rescaled by an undisclosed positive constant; calendar dates preserved",
  "sample_window": {
    "event": "Spring Festival",
    "forecast_origin": "2026-02-01",
    "horizon": ["2026-02-01", "2026-02-23"],
    "event_window": ["2026-02-15", "2026-02-23"]
  }
}
```

```json
{
  "workspace_row": {
    "ds": "2026-02-15",
    "y": null,
    "y_baseline": 842.0,
    "y_final": 346.8
  },
  "revision_record": {
    "event": "Spring Festival 2026 holiday suppression",
    "mode": "override",
    "evidence": [
      "holiday_search_tool confirms 2026-02-15~23 as Spring Festival",
      "2025 lunar-calendar analogue actuals show holiday trough"
    ],
    "confidence": 0.8
  }
}
```

## 12. 真实运营 RAN QoE 诊断数据

**论文中用途**：QoEReasoner 用该数据评估自动化 QoE 诊断，包括 anomaly detection (AD)、fault causal chain reasoning (FCR) 和 root-cause categorization (RCC)。

**下载链接**：

- 论文页面：<https://arxiv.org/abs/2606.01925>
- TeX 源码：<https://arxiv.org/e-print/2606.01925>
- 官方公开数据下载：未在论文 TeX、arXiv 信息或源文件中发现。

**数据组成**：

该数据来自真实运营移动网络。每个样本是 session-level multivariate KPI telemetry，覆盖 PHY、MAC、RLC、PDCP 等协议层。论文未公开具体 KPI 字段列表，但说明该类诊断涉及超过 90 个相关 KPI。

| 项目 | 数值 / 说明 |
|---|---|
| session 总数 | 300 |
| abnormal sessions | 130 |
| normal sessions | 170 |
| root-cause categories | 6 |
| expert-validated fault-chain templates | 21 |
| 输入形式 | $\mathbf{X}\in\mathbb{R}^{T\times M}$ 多变量 KPI 时间序列 |
| 标签 | degradation label、root-cause category、expert-verified fault causal chain |
| 公开性 | 未发现官方下载；工业标注成本高，每条 chain 需专家验证 |

**任务组成**：

| 任务 | 输入 | 输出 |
|---|---|---|
| AD | session KPI telemetry | 是否 QoE degraded |
| FCR | session KPI telemetry | fault atom chain，如 root cause -> mechanism -> symptom |
| RCC | session KPI telemetry 或 FCR 起始 atom | root-cause category |

**字段级样例**：

```json
{
  "dataset": "operational_ran_qoe_diagnosis",
  "session_id": "anonymous_session_001",
  "kpi_telemetry_shape": {"T": 60, "M": 90},
  "protocol_layers": ["PHY", "MAC", "RLC", "PDCP"],
  "labels": {
    "qoe_degraded": 1,
    "root_cause_category": "uplink_interference",
    "fault_chain": [
      "uplink_interference_high",
      "ul_retransmission_abnormal",
      "uplink_delay_high",
      "qoe_degradation"
    ]
  }
}
```

```json
{
  "historical_bank_entry": {
    "kpi_segment": "expert-validated anonymized multivariate KPI window",
    "validated_fault_chain": [
      "downlink_interference_high",
      "dl_retransmission_abnormal",
      "dl_rlc_delay_high",
      "downlink_delay_high"
    ],
    "usage": "retrieved as candidate hypothesis, then revalidated against current KPI evidence and KB constraints"
  }
}
```

## 13. ARTIST 六数据集套件

**论文中用途**：ARTIST 在六个时间序列推理 benchmark 上评估 controller-reasoner segment selection，包括 TSQA、RCW、ECG-QA、Sleep-QA、TRQA 和 Etiological Reasoning (ETI)。

**下载链接**：

- ARTIST 代码：<https://github.com/mims-harvard/ARTIST>
- ARTIST 项目页：<https://zitniklab.hms.harvard.edu/ARTIST/>
- TSQA / Time-MQA：<https://arxiv.org/abs/2503.01875>；论文称完整 TSQA 数据、模型和材料已开源，但 ARTIST TeX 中未给出具体下载 URL。
- ECG-QA：<https://arxiv.org/abs/2306.15681>；论文摘要给出数据 URL <https://github.com/Jwoo5/ecg-qa>
- ETI / TSandLanguage：<https://arxiv.org/abs/2404.11757>；代码与数据 <https://github.com/behavioral-data/TSandLanguage>
- Sleep-QA：<https://arxiv.org/abs/2305.19707>；ARTIST 论文未给出官方下载 URL。
- RCW / VL-Time / TimerBed：论文引用 NAACL 2025 *A Picture is Worth a Thousand Numbers*；ARTIST TeX 未给出独立下载 URL。
- TRQA：ARTIST TeX 引用 *TRQA: Time Series Reasoning Question And Answering Benchmark*；未给出 arXiv 编号或官方下载 URL。

**数据组成**：

| Dataset | Task | Train | Val | Test | TS Len. | Domain |
|---|---|---:|---:|---:|---:|---|
| RCW | Binary Choice | 19,135 | 4,405 | 226 | 4000 | Nature |
| ECG-QA | Binary Choice | 16,663 | 1,999 | 202 | 1000 | ECG |
| Sleep-QA | Multi Choice | 7,268 | 1,817 | 204 | 1500 | EEG |
| TSQA | Multi Choice | 7,243 | 1,811 | 207 | 22±5 | Web/Nature/Healthcare/Energy |
| TRQA | Mixed | 17,241 | 2,487 | 200 | 136±65 | Web/Transport/Finance/Energy/Sales/Nature |
| ETI | Multi Choice | 11,778 | 1,000 | 200 | 407±353 | 多领域 |

**字段级样例**：

```json
{
  "dataset": "ARTIST_TSQA_subset",
  "task": "multiple_choice_time_series_reasoning",
  "question": "Which option best describes the trend in the selected time interval?",
  "time_series": [0.13, 0.18, 0.25, 0.31, 0.30, 0.35],
  "choices": ["decreasing", "increasing", "periodic", "constant"],
  "answer": "increasing",
  "artist_trace": [
    {"controller": "select segment [0, 5] to inspect the local trend"},
    {"reasoner": "the selected values mostly rise over time", "answer": "increasing"}
  ]
}
```

```json
{
  "dataset": "ETI",
  "task": "etiological_reasoning",
  "time_series": [12.0, 12.3, 12.1, 18.7, 19.1, 18.9],
  "question": "Which generative scenario most plausibly produced this series?",
  "choices": ["temporary spike", "persistent level shift", "seasonal cycle", "random noise"],
  "answer": "persistent level shift",
  "selected_segments": [[0, 2], [3, 5]]
}
```

## 14. FinTSR-Bench

**论文中用途**：FinSTaR 用 FinTSR-Bench 训练和评测金融时间序列推理模型。该 benchmark 覆盖 deterministic assessment 与 stochastic prediction，并区分 single-stock 与 multi-stock 分析。

**下载链接**：

- 论文页面：<https://arxiv.org/abs/2605.03460>
- 代码仓库：<https://github.com/seunghan96/FinSTaR>
- 论文结论称将公开 FinTSR-Bench、FinSTaR checkpoints 和评测代码；当前项目未发现独立 Hugging Face 链接。

**数据组成**：

FinTSR-Bench 基于 S&P 500 中按 2024 年 1 月市值排序的前 250 只股票，使用 2010-2025 日收盘价。每个样本输入 120 个交易日的 closing prices，并输出多选 QA 标签与 CoT。

| Split | 股票数 | 时间段 | Universe | Period |
|---|---:|---|---|---|
| Train | 200 | 2010-2022 | ID | ID |
| Test A | 200 | 2023-2025 | ID | OOD |
| Test B | 50 | 2010-2022 | OOD | ID |
| Test C | 50 | 2023-2025 | OOD | OOD |

| 参数 | 值 |
|---|---|
| Window length | 120 trading days |
| Samples per task raw | 100,000 |
| Train cap per task | 3,500 |
| Test cap per task | 1,000 |
| 总训练规模 | 约 35K |
| 每个测试 split | 约 10K |

**任务组成**：

| 类型 | 范围 | 任务 |
|---|---|---|
| Assessment | Single-stock | Drawdown、Volatility Regime、Trend Direction |
| Assessment | Multi-stock | Correlation |
| Prediction | Single-stock | Event Response、Support/Resistance、Drawdown Recovery、Volatility Forecast |
| Prediction | Multi-stock | Relative Performance、Pair Convergence |

**字段级样例**：

```json
{
  "dataset": "FinTSR-Bench",
  "task": "Drawdown",
  "category": "single-stock assessment",
  "ticker": "PEP",
  "input_window_days": 120,
  "closing_prices": [170.39, 168.20, 165.10, 162.65],
  "question": "Based on these prices, assess the current drawdown phase.",
  "choices": {
    "A": "At/Near Peak (<3%)",
    "B": "Pullback (3-10%)",
    "C": "Correction (10-20%)",
    "D": "Severe Decline (>20%)"
  },
  "cot_type": "Compute-in-CoT",
  "answer": "B"
}
```

```json
{
  "dataset": "FinTSR-Bench",
  "task": "Drawdown Recovery",
  "category": "single-stock prediction",
  "input_window_days": 120,
  "forward_horizon_days": 20,
  "features": {
    "peak": 210.15,
    "current": 191.08,
    "drawdown": "9.1%",
    "momentum": "-2.1%"
  },
  "scenario_aware_cot": {
    "base": "Drawdown stabilizes and value buyers accumulate.",
    "adverse": "Earnings revision or guidance cut deepens the decline.",
    "favorable": "Positive catalyst triggers V-shaped recovery."
  },
  "answer": "Recovery"
}
```

## 15. HiTSR

**论文中用途**：LLaTiSA 用 HiTSR 进行三阶段课程 SFT，并作为分层时间序列推理能力的诊断基准。HiTSR 重点覆盖 L1 数值读出、L2 模式感知、L3 语义推理，附录还扩展了 L4 predictive inference。

**下载链接**：

- 论文页面：<https://arxiv.org/abs/2604.17295>
- TeX 源码：<https://arxiv.org/e-print/2604.17295>
- 代码仓库：<https://github.com/RainingNovember/LLaTiSA>
- 官方 Hugging Face：当前项目未发现论文中给出的独立 HF 链接。

**数据组成**：

| 子集 | 样本数 | 数据类型 | 任务 |
|---|---:|---|---|
| HiTSR-L1 | 30,000 | Synthetic | Min/Max Grounding、Multi-series Comparison、Start/End Comparison、Subseries Localization |
| HiTSR-L2 | 50,703 | Synthetic | Local Pattern Differentiation、Global Pattern Differentiation、Numerical Perception |
| HiTSR-L3 | 3,121 | Real-world | Semantic Understanding |

L1/L2 合成数据来自 ChatTS 的完整时间序列合成管线。L3 使用公开真实时间序列并结合元信息构造场景化 MCQ。论文使用的真实源包括 ETT、Weather、Exchange Rate、Traffic、Electricity、Illness、UTSD、Monash 和 Time-MMD 相关子集。

**真实时间序列源与 crop 设置**：

| 数据源 | 元信息示例 | Crop length |
|---|---|---|
| ETTh/ETTm | transformer oil temperature / power load | 96, 192, 336, 720 |
| Weather | Max Planck weather station 10-minute indicators | 96, 192, 336, 720 |
| Exchange Rate | daily Singapore exchange rate | 60, 120, 240, 360 |
| Traffic.A | SF Bay freeway road occupancy | 96, 192, 336, 720 |
| Electricity | 321 customers hourly consumption | 96, 192, 336, 720 |
| Illness | weekly influenza-related patient counts | 24, 36, 52, 104 |
| Time-MMD domains | economy, energy, environment, health, security, social good, traffic | full 或 96-576 |
| Monash / UTSD domains | electricity demand, rainfall, smart meters, wind farms, ECG-like medical series, PM2.5, pedestrian counts, web traffic | 60-1024 |

**标注和验证**：

| 层级 | 标注方式 | 验证方式 |
|---|---|---|
| L1 | 规则生成 index-value / interval 答案 | 10% 规则脚本校验 |
| L2 numerical perception | 规则生成并扰动数值证据 | 规则校验 |
| L2 pattern differentiation | GPT-5 基于 plot 和统计量生成描述与 CoT | GPT-5 交叉验证 + 10% 人工审核 |
| L3 semantic understanding | GPT-5 基于真实序列和 metadata 生成场景化 MCQ | GPT-5 双检 + 3,121 条全量人工复核 |

**字段级样例**：

```json
{
  "dataset": "HiTSR-L1",
  "level": "L1 Numerical Read-out",
  "subtask": "Min/Max Grounding",
  "input_views": {
    "plot_image": "rendered time-series line chart",
    "numeric_table_image": "index-value table"
  },
  "time_series": [1.2, 3.4, 2.8, -0.5, 4.1],
  "question": "Find the maximum value and its index.",
  "answer": {"index": 4, "value": 4.1},
  "cot": "Check all index-value pairs; the largest value is 4.1 at index 4."
}
```

```json
{
  "dataset": "HiTSR-L3",
  "level": "L3 Semantic Reasoning",
  "source": "SDWPF wind farm active power",
  "metadata": "Active power output of a wind turbine in China, measured every 10 minutes.",
  "time_series_excerpt": [0.0, 12.4, 488.2, 1525.51, 830.7, -0.3],
  "question": "Which option is most consistent with the turbine operation context?",
  "choices": {
    "A": "The negative and zero values prove the sensor is unusable.",
    "B": "Near-zero readings can occur during idling or low wind, and the 1525.51 kW peak is plausible for a 1.5 MW-class turbine.",
    "C": "The sequence must represent room temperature because the values fluctuate.",
    "D": "The peak is physically impossible for any wind turbine."
  },
  "answer": "B"
}
```

## 16. VeriTime-TSRBench

**论文中用途**：VeriTime 用 TSRgen 构造论文内的 TSRBench，用于 SFT、GRPO/RFT 训练、过程奖励计算和评测。注意该数据集与前文 “TSRBench: A Comprehensive Multi-task Multi-modal Time Series Reasoning Benchmark for Generalist Models” 的公开 benchmark 同名但不是同一数据集；这里称为 VeriTime-TSRBench 以避免混淆。

**下载链接**：

- 论文页面：<https://arxiv.org/abs/2602.07830>
- TeX 源码：<https://arxiv.org/e-print/2602.07830>
- 代码链接：<https://anonymous.4open.science/r/VeriTime-E017>
- 官方 Hugging Face：当前项目未发现论文中给出的独立 HF 链接。

**数据组成**：

| 类别 | 任务/数据 | 领域/推理类型 | 样本数 | 平均时间点 | 平均 token |
|---|---|---|---:|---:|---:|
| Scenario-based | Anomaly Detection | deductive reasoning | 1,180 | 300 | 2,759 |
| Scenario-based | Scenario Attribution | causal reasoning | 930 | 300 | 2,932 |
| Scenario-based | Inferential Calculation | quantitative reasoning | 410 | 324 | 2,783 |
| Knowledge-based | CTU | energy / device usage | 270 | 720 | 5,942 |
| Knowledge-based | ECG | medical / arrhythmia | 780 | 500 | 4,239 |
| Knowledge-based | EMG | healthcare / neuromuscular signal | 450 | 600 | 4,990 |
| Knowledge-based | RCW | bioacoustics / right whale call | 320 | 500 | 4,201 |

Scenario-based 任务由 ChatTS 合成数据过滤重组而来，训练测试比约 5:1；knowledge-based 任务来自真实数据集并沿用原始划分。每条样本包含时间序列、文本问题、CoT reasoning path、最终标签和过程标签。

**过程标签结构**：

| CoT step | 是否抽取过程标签 | 标签含义 |
|---|---|---|
| Step 1 task intent | 是 | 目标实体或任务对象 |
| Step 2 key patterns | 是 | 趋势、阈值、幅度、波动、领域关键词等 |
| Step 3 segment analysis | 否 | 保留探索空间 |
| Step 4 preliminary answer | 是 | 初步答案是否与 ground truth 对齐 |
| Step 5 reflection | 否 | 保留自检探索空间 |
| Step 6 final answer | 是 | 最终自检答案 |

**字段级样例**：

```json
{
  "dataset": "VeriTime-TSRBench",
  "category": "scenario-based",
  "task": "Anomaly Detection",
  "reasoning_type": "deductive reasoning",
  "metric": "Cloud Cover",
  "domain": "Weather Forecasting",
  "time_series_length": 256,
  "condition": "a sudden and significant increase in cloud cover is considered an anomaly",
  "question": "Should the behavior at point 204 to point 206 be treated as an anomaly?",
  "labels": {
    "final": "Yes/No",
    "process": {
      "intent": "determine whether a local interval is anomalous",
      "key_patterns": ["sudden increase", "point 204-206 interval", "cloud cover threshold"]
    }
  }
}
```

```json
{
  "dataset": "VeriTime-TSRBench",
  "category": "knowledge-based",
  "task": "RCW classification",
  "domain": "Bioacoustics",
  "sampling": "2-second waveform sampled at 2kHz",
  "time_series_length": 500,
  "context": "Right whale up-calls have an acoustic signature around 60Hz-250Hz and typically last about 1 second.",
  "question": "Classify whether the waveform segment contains a right whale call.",
  "choices": ["A) Right Whale Present", "B) No Right Whale"],
  "process_labels": {
    "intent": "classify right whale call presence",
    "key_patterns": ["low-frequency up-call", "duration near 1 second", "noise discrimination"]
  }
}
```

## 17. SenTSR-Bench

**论文中用途**：SenTSR-Bench 论文将其作为核心评测集，用于测试模型是否能从真实工业传感器数据中完成多阶段诊断推理。它覆盖异常识别、根因判断和修复建议，比单点 anomaly detection 更接近真实维护流程。

**下载链接**：

- 论文页面：<https://arxiv.org/abs/2602.19455>
- TeX 源码：<https://arxiv.org/e-print/2602.19455>
- 项目页：<https://zlhe0.github.io/SenTSR-Bench-Website/>
- 官方 GitHub / Hugging Face：当前项目未发现论文中给出的可确认公开下载入口。

**评测数据组成**：

| 项目 | 数量 / 描述 |
|---|---|
| 原始候选池 | 约 2,000 条真实 multivariate sensor streams |
| 最终评测序列 | 110 条去标识化真实工业传感器序列 |
| 评测问题 | 330 道 MCQ |
| 传感器类型 | vibration acceleration、velocity、temperature 等 |
| 问题阶段 | What happened、How happened、Suggested fix |
| 标注方式 | human-curated diagnostic annotations |
| 隐私处理 | 标准化、去标识化、移除系统标识和敏感元数据 |

**训练数据组成**：

论文用 23 条去标识化真实 seed 序列驱动 VLM 生成 Python simulator，再把 simulator 随机化为多样化生成器，最终构造 6,000 条 MCQ 训练样本。训练问题和评测问题采用一致的多阶段诊断结构。

| 阶段 | 输入 | 产物 |
|---|---|---|
| Iterative code synthesis | 23 条 seed plot 和高层上下文 | 可复现相似异常行为的 Python simulator |
| Diversification and simplification | seed-aligned simulator | 随机化参数、噪声、衰减和事件频率后的 synthetic sensor streams |
| Query construction | synthetic anomalous segments | What/How/Fix 风格 QA 与 MCQ |

**字段级样例**：

```json
{
  "dataset": "SenTSR-Bench",
  "source": "de-identified industrial sensor stream",
  "channels": {
    "vibration_acceleration": [0.12, 0.15, 0.18, 0.72, 0.83],
    "velocity": [1.8, 1.9, 2.1, 4.9, 5.2],
    "temperature": [42.1, 42.3, 42.5, 42.7, 42.8]
  },
  "stage": "What happened",
  "question": "Which signal behavior best describes the observed anomaly?",
  "choices": {
    "A": "A sudden rise in vibration while temperature stays nearly stable",
    "B": "A gradual temperature runaway with stable vibration",
    "C": "All channels remain within normal range",
    "D": "Velocity drops to zero before vibration increases"
  },
  "answer": "A"
}
```

```json
{
  "dataset": "SenTSR-Bench",
  "stage": "Suggested fix",
  "observations": [
    "vibration acceleration increases sharply in the late segment",
    "velocity follows the same rising pattern",
    "temperature does not show a matching increase"
  ],
  "question": "What is the most plausible next maintenance action?",
  "choices": {
    "A": "Inspect mechanical looseness, imbalance, or bearing-related vibration sources",
    "B": "Replace the temperature sensor immediately",
    "C": "Ignore the event because all channels move together",
    "D": "Only recalibrate the clock timestamp"
  },
  "answer": "A"
}
```

## 18. TSEvol Dataset A

**论文中用途**：SenTSR-Bench 论文用 TSEvol Dataset A 作为公开 benchmark，评测 inductive、deductive 和 causal 时间序列推理。TimeART/ChatTS 相关论文也把 TSEvol/ChatTS 数据作为时间序列问答和推理数据生态的一部分。

**下载链接**：

- ChatTS 论文页面：<https://arxiv.org/abs/2412.03104>
- ChatTS GitHub：<https://github.com/NetManAIOps/ChatTS>
- Dataset A 的独立稳定下载入口需以后续官方仓库为准。

**数据组成**：

论文描述中，SenTSR-Bench 使用的 TSEvol Dataset A 包含 525 个问题，源时间序列来自 AIOps、meteorology、NAB 和 Oracle system metrics 等真实场景。时间序列关键行为由人工标注，题目、上下文和 root-cause options 由 LLM 自动生成。

| 推理类别 | 含义 |
|---|---|
| Inductive reasoning | 根据单变量或多变量序列总结物理/语义含义 |
| Deductive reasoning | 验证给定时间条件是否满足 |
| Causal reasoning | 在文本上下文下选择最可能根因 |

**字段级样例**：

```json
{
  "dataset": "TSEvol Dataset A",
  "domain": "AIOps",
  "task": "causal reasoning",
  "time_series": {
    "cpu_usage": [0.42, 0.45, 0.91, 0.94, 0.88],
    "request_latency": [120, 128, 430, 460, 445]
  },
  "context": "A service experienced a latency spike after resource saturation.",
  "question": "Which root cause is most consistent with the observed series?",
  "choices": ["CPU saturation", "regular daily seasonality", "sensor reset", "missing timestamp"],
  "answer": "CPU saturation"
}
```

## 19. TS&Language MCQ2

**论文中用途**：SenTSR-Bench 论文使用 TS&Language benchmark 中的 MCQ2 子集，测试模型在文本上下文下比较两条时间序列并判断关系的能力。论文排除了不适合其诊断目标的 etiological reasoning 和 forecasting 部分，并随机抽样 100 个代表性问题。

**下载链接**：

- GitHub / 论文入口：<https://github.com/behavioral-data/TSandLanguage>
- 相关论文：*Language Models Still Struggle to Zero-shot Reason about Time Series*

**数据组成**：

TS&Language 面向语言模型的零样本时间序列推理评测，时间序列、问题和答案多由 LLM 自动生成。MCQ2 关注 paired time-series 的关系、比较和条件判断。

**字段级样例**：

```json
{
  "dataset": "TS&Language MCQ2",
  "task": "paired time-series comparison",
  "series_a": [3.2, 3.5, 4.1, 4.4, 4.8],
  "series_b": [7.0, 6.7, 6.2, 5.8, 5.4],
  "context": "Series A and B measure two components of a coupled system.",
  "question": "Which statement best describes their relationship over time?",
  "choices": {
    "A": "Both increase monotonically",
    "B": "A increases while B decreases",
    "C": "Both are constant",
    "D": "A decreases while B increases"
  },
  "answer": "B"
}
```

## 20. Time-R1 预测数据集套件

**论文中用途**：Time-R1 用这些公开时间序列预测数据评测 slow-thinking LLM 是否能通过 SFT + RL 学会多步预测推理。除 NASDAQ 使用 36-step horizon 外，其余主实验使用 96-step horizon，并以 MSE/MAE 评估。

**下载链接**：

- Time-R1 代码仓库：<https://github.com/ustc-time-series/Time-R1>
- ETT 常用数据源：<https://github.com/zhouhaoyi/ETDataset>
- Exchange / Wind 常见来源：LSTNet benchmark 相关数据，常在长期预测仓库中镜像。
- NASDAQ 源论文：Temporal Relational Ranking for Stock Prediction。

**数据组成**：

| Dataset | Domain | Timestamps | Features | Frequency |
|---|---|---:|---:|---|
| ETTh1 / ETTh2 | Electricity | 17,420 | 7 | 1 hour |
| ETTm1 / ETTm2 | Electricity | 69,680 | 7 | 15 mins |
| AQWan / AQShunyi | Environment | 35,064 | 11 | 1 hour |
| Exchange | Economy | 7,588 | 8 | 1 day |
| Wind | Energy | 48,673 | 7 | 15 mins |
| NASDAQ | Stock | 1,244 | 5 | 1 day |

**字段级样例**：

```json
{
  "dataset": "ETTh1",
  "domain": "Electricity transformer temperature",
  "frequency": "1 hour",
  "input_window": 96,
  "target_horizon": 96,
  "channels": {
    "HUFL": [5.83, 5.69, 5.16, 5.22],
    "HULL": [2.01, 2.04, 1.89, 1.92],
    "OT": [30.53, 30.41, 30.20, 30.33]
  },
  "question": "Forecast the next 96 values for the target channel and provide reasoning about trend and seasonality.",
  "answer_format": "<think>...</think><answer>[...]</answer>"
}
```

```json
{
  "dataset": "NASDAQ",
  "domain": "Stock",
  "frequency": "1 day",
  "input_window": 96,
  "target_horizon": 36,
  "features": {
    "open": [184.1, 185.3, 183.7],
    "close": [185.0, 184.2, 186.1],
    "volume": [32000000, 35800000, 34100000]
  },
  "question": "Forecast the next 36-step target sequence while considering trend shifts and volatility.",
  "metric": "MSE/MAE"
}
```

## 21. DAWN

**论文中用途**：VESTA 用 DAWN 评测统计建模 agent 能否为分布拟合与时间序列建模提出更好的 PyMC 概率模型。DAWN 特别强调由 Easy 到 Hard 再到 Astro 的难度递增，用来暴露“只靠反复 critique、不做诊断探索”的 agent 在复杂科学建模中的不足。

**下载链接**：

- arXiv: <https://arxiv.org/abs/2606.00384>
- 本项目 TeX 源码目录：`tex/VESTA_Visual_Exploration_with_Statistical_Tool_Agents`
- 未发现独立官方数据仓库；论文源码中包含 benchmark 说明、图表与生成/评测细节。

**数据组成**：

| 子集 | 任务 | 规模 | 评价指标 |
|---|---|---:|---|
| Distribution fitting | 从离散观测拟合概率分布 | 200 个 distribution datasets | Jensen-Shannon divergence 等 |
| Time-series modeling | 构造 PyMC/GP 等时间序列生成模型 | 200 个 time series | ELPD-LOO、$R^2$、CRPS |
| Astro | 初始质量函数、引力波 chirp 等科学任务 | 真实天文风格任务 | 概率拟合与诊断质量 |

**字段级样例**：

```json
{
  "dataset": "DAWN",
  "domain": "time-series modeling",
  "split": "Hard",
  "observations": [0.13, 0.21, 0.18, 0.35, 0.72],
  "agent_input": "Fit a probabilistic PyMC model to the observed signal.",
  "tool_output": "Residual plot + autocorrelation diagnostic",
  "metric": "ELPD-LOO"
}
```

## 22. MedRLM 真实临床评估数据套件

**论文中用途**：MedRLM 没有报告完整 pipeline 的新准确率，而是设计了一个真实数据评估方案，用于覆盖长上下文 EHR、影像-报告 grounding、生理时间序列、ECG、ICU 风险和转诊代理任务。

**下载链接与访问状态**：

- MIMIC-IV: <https://physionet.org/content/mimiciv/>
- eICU-CRD: <https://physionet.org/content/eicu-crd/>
- MIMIC-CXR-JPG: <https://physionet.org/content/mimic-cxr-jpg/>
- PTB-XL: <https://physionet.org/content/ptb-xl/>
- PhysioNet/CinC Challenge 2012: <https://physionet.org/content/challenge-2012/>
- CheXpert: <https://stanfordmlgroup.github.io/competitions/chexpert/>

多数临床数据需要账号、伦理培训或 credentialed access；索引中只列官方入口。

**数据组成**：

| Dataset | 模态 | MedRLM 中角色 |
|---|---|---|
| MIMIC-IV | EHR、ICU、急诊 | 长病历推理、诊断/检查/用药检索、风险分层 |
| eICU-CRD | 多中心 ICU EHR | 跨医院外部验证、ICU 风险代理 |
| MIMIC-CXR-JPG | 胸片与报告 | 影像-文本 evidence grounding |
| CheXpert | 胸片与不确定标签 | 放射异常检测、不确定性评估 |
| PTB-XL | 12 导联 ECG | 传感器/波形筛查 |
| PhysioNet/CinC 2012 | ICU 多变量时间序列 | 死亡风险、急性恶化、转诊代理指标 |

**字段级样例**：

```json
{
  "patient_id": "credentialed_access_only",
  "ehr_events": ["lab: lactate high", "diagnosis: sepsis"],
  "sensor_stream": {"heart_rate": [102, 108, 116], "spo2": [94, 92, 90]},
  "image_report": "Chest radiograph suggests bilateral opacities.",
  "guideline_query": "Check red flags and referral criteria.",
  "target": "ICU escalation / mortality proxy / tertiary referral proxy"
}
```

## 23. MAIJU-DS / NICU-A 与 TSExplorer 标注数据

**论文中用途**：2DV 标注论文用真实人类标注者比较 RND、FAFT 和 2D visualization-based exploration 三种样本选择策略，评价标签分布、下游分类表现和失败风险。

**下载链接**：

- TSExplorer software: <https://github.com/SPEECHCOG/TSExplorer>
- MAIJU-DS 与 NICU-A 为论文使用的研究数据集；本文未发现统一官方公开下载入口。应以原数据论文和作者发布说明为准。

**数据组成**：

| Dataset | 模态 | 任务 | 规模 |
|---|---|---|---|
| MAIJU-DS | 婴儿四肢 IMU，24 通道，52 Hz，带视频辅助 | posture、movement | 41 recordings，约 29 小时，76,817 可用 frames |
| NICU-A | NICU 语音音频，16 kHz | valence、arousal | 43 个 16 小时录音，129,007 utterances；GS test 345 samples |

**字段级样例**：

```json
{
  "dataset": "MAIJU-DS",
  "sample": "2.3 second frame",
  "features": "SSL embedding projected by t-SNE/PCA/UMAP",
  "signals": {
    "right_arm_acc": [[0.1, 0.2, 9.7]],
    "left_leg_gyro": [[0.01, -0.03, 0.02]]
  },
  "annotation_task": "posture",
  "label_space": ["prone", "supine", "side", "sitting", "standing"]
}
```

```json
{
  "dataset": "NICU-A",
  "sample": "caregiver/staff utterance",
  "duration_seconds": 1.57,
  "features": "SSL speech embedding projected to 2D",
  "annotation_task": "valence",
  "label_space": ["non-positive", "positive"]
}
```

## 24. TimeSeriesExam / TSFU for Coding Agents

**论文中用途**：Coding Agents 论文用 TimeSeriesExam 和 TSFU 比较 direct、code、hybrid 三种 LLM agent 设置。TimeSeriesExam 测生成过程、周期、统计性质等时间序列理解；TSFU 覆盖 trend、seasonality、anomaly、correlation、fat tails 等 feature understanding。

**下载链接**：

- Coding Agents GitHub: <https://github.com/DekuD2/can-llm-coding-agents-reason-about-time-series>
- TimeSeriesExam arXiv: <https://arxiv.org/abs/2410.14752>
- TSFU arXiv: <https://arxiv.org/abs/2503.06447>

**数据组成**：

| Benchmark | 论文中规模/设置 | 用途 |
|---|---:|---|
| TimeSeriesExam (TSE) | 多选时间序列考试题；论文报告 random baseline 40.1% | 测试 LLM 能否识别周期、噪声、相关性、生成机制等 |
| TSFU | 2,000 questions，10 个 feature categories；论文报告 random baseline 29.3% | 测试趋势、季节性、异常、相关、fat tails 等特征理解 |

**字段级样例**：

```json
{
  "dataset": "TSFU",
  "representation": "raw text or pandas DataFrame",
  "series": [0.0, 0.7, 1.0, 0.7, 0.0, -0.7, -1.0],
  "question": "Which feature best describes this series?",
  "choices": ["positive trend", "seasonality", "structural break", "fat tails"],
  "answer": "seasonality",
  "agent_setup": "direct / code / hybrid"
}
```

## 25. TS-Memory 长期预测数据套件

**论文中用途**：TS-Memory 用多个长期预测数据集评估冻结 TSFM 加 PlugMem 后的点预测、概率预测和推理效率。主表覆盖 ChronosBolt、Chronos2、Sundial、TimesFM 等 backbone。

**下载链接**：

- TS-Memory GitHub: <https://github.com/sisuolv/TS-Memory>
- ETT dataset: <https://github.com/zhouhaoyi/ETDataset>
- Electricity / Exchange / Traffic / Weather 为长期预测常用公开数据，通常通过 TS forecasting benchmark 仓库提供。

**数据组成**：

| Dataset | 领域 | TS-Memory 中用途 |
|---|---|---|
| ETTh1 / ETTh2 | 电力变压器温度，小时级 | 长期预测、跨 horizon 平均 MSE/MAE |
| ETTm1 / ETTm2 | 电力变压器温度，15 分钟级 | level shift 与周期适配 |
| Electricity | 用电量 | 多变量负载预测 |
| Exchange | 汇率 | 金融/经济序列预测 |
| Traffic | 交通流量/占有率 | 大规模多变量预测 |
| Weather | 气象 | 多变量环境预测 |

**字段级样例**：

```json
{
  "dataset": "ETTm2",
  "context_length": 96,
  "forecast_horizon": 720,
  "channels": {
    "HUFL": [2.1, 2.4, 2.3],
    "OT": [30.2, 30.4, 30.1]
  },
  "teacher": "offline leakage-safe kNN quantile target",
  "student": "PlugMem attached to frozen TSFM",
  "metrics": ["MSE", "MAE", "CRPS", "latency"]
}
```

## 26. 使用建议

如果要复现实验或构建自己的时间序列 reasoning agent，可以按用途选择：

- 做上下文影响预测：优先看 CiK；
- 做通用时间序列推理评测：优先看 TSRBench；
- 做金融时间序列 agent：优先看 TSAIA；
- 做多模态时间序列 QA：关注 MTBench 和 TimeMQA；
- 做工具调用训练：TimeToolBench 的思想最直接，但目前缺少公开下载；可以仿照其 ReAct 轨迹格式，用已有 QA 数据和工具返回结果自行构造。
- 做统计建模 agent：看 DAWN/VESTA，重点关注工具输出如何改变模型提案；
- 做临床多模态 workflow：看 MedRLM 的真实数据评估套件，但注意 credentialed access 和隐私合规；
- 做人类标注策略：看 MAIJU-DS/NICU-A 的 2DV 实验，尤其关注单标注者风险；
- 做代码工具型时间序列 agent：看 TimeSeriesExam/TSFU；
- 做 TSFM 低延迟适配：看 TS-Memory 的 ETT/Electricity/Exchange/Traffic/Weather 套件。

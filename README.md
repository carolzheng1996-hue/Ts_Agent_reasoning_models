# Ts_Agent_reasoning_models
Share the latest updates in the time-series field related to agents, reasoning models, and benchmarks.

## TS-Agent
时序数据质量检查Agent：TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning
## Reasoning benchmark
- 时序数据质量检查benchmark：TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning（可以结合论文中的工具，构建工具调用数据集）
https://github.com/clsr1008/TSQualityAgent
- TSRBench: A Comprehensive Multi-task Multi-modal Time Series Reasoning Benchmark for Generalist Models （text, vision, text+vision, time-series embedding包含图像）
  https://tsrbench.github.io/ / Hugging Face: [umd-zhou-lab/TSRBench](https://huggingface.co/datasets/umd-zhou-lab/TSRBench)
  Perception：能否看懂形状、趋势、噪声、异常、相似性。
  Reasoning：能否基于时序模式、上下文和规则做因果、归因、归纳、演绎、数值推理。
  Prediction：能否结合历史序列与事件背景判断未来走势或未来事件。
  Decision-Making：能否基于时间序列和上下文做定性或定量决策。
  （Perception，Reasoning，Decision-Making可测试）
- Time Series Reasoning via Process-Verifiable Thinking Data Synthesis and Scheduling for Tailored LLM Reasoning（COT数据，暂未开源，区分难易样本，关注过程数据）
- TimeART: Towards Agentic Time Series Reasoning via Tool-Augmentation（包含工具调用的多轮对话数据集）
## Ensemble

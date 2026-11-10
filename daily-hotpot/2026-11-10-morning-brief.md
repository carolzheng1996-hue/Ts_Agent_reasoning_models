# 2026-11-10 时间序列研究晨间简报

- 检索时间：2026-11-10 09:05–09:19（Asia/Shanghai；11:12–11:22 补检）
- 时间窗口：2026-08-10 至 2026-11-10；仅将可确认首发/公开日期落在窗口内的材料列为主条目。
- 核验来源：arXiv、OpenReview、Hugging Face 官方/机构博客、GitHub 官方仓库及 GitHub API。论文性能均为作者报告，尚未独立复现。

## 今日判断

1. **证据落地的上下文推理成为新近切口。** 11 月 9 日的 CastReasoner 将“从上下文提取预测证据—判断未来动态—与数值先验比对”设为显式链条；Chronos-2、`t_0` 与 Kumo Forecast 则提供可供其调用的数值底座。
2. **Agent 研究开始把“预测后的反馈”写回策略。** FASE 的 episodic memory + online policy learning 是近期最明确的在线闭环实例；CastClaw 与 AION 则将人类/验证门置于编排层。
3. **reasoning 的重点从展示长思维链转到可检验的数值接口与评测。** CastReasoner 明确对接证据、未来动态与数值先验；CHORD 和 TimesJev 则分别压缩传输证据与推理输入。

## 时间序列基础模型最新研究

### 1. [Do Time-Series Foundation Models Forecast Index-Futures Returns? A Preregistered Evaluation of Models, Metrics, and Input Representations](https://arxiv.org/abs/2611.12141)

- 日期：2026-11-09（arXiv v1）
- 来源：arXiv
- 摘要：对 Chronos-Bolt、Chronos-2、TimesFM 2.5、Moirai 2.0、TiRex 等冻结零样本 TSFM，在 NQ/ES 期货 5–120 分钟预测做预注册、盲集一次开启的检验；作者报告 160 个模型—表示—期限组合没有一个胜过 no-change，且 Hansen SPA 在两市场均为 p=1.000，同时指出价格层级相关系数与日内 RankIC 可制造表观 skill。
- 相关性判断：**很高（foundation-model validation / harness）**。不是新 TSFM，却是 TS Agent 选择数值工具时最有价值的反证：必须以增量基线、交易/预测原点、盲集和多重比较控制验收，而不能采信层级相关等表面指标。

### 2. [Chronos-2: A foundation model for multivariate time series forecasting](https://arxiv.org/abs/2610.41956)

- 日期：2026-10-30（arXiv v1）
- 来源：arXiv
- 摘要：Amazon 提出可零样本建模序列间交互和异构协变量的多变量概率预测 TSFM；论文报告相对强基线的平均 skill score 增加 5.2 个百分点，并给出批量推理实现。
- 相关性判断：**很高（foundation model / Agent 工具）**。可作为 Agent 的数值预测器；上层应显式记录协变量在预测原点的可得性，避免上下文泄漏。

### 2. [t_0: A Time-Series Foundation Model for Forecasting with Context](https://arxiv.org/abs/2609.24559)

- 日期：2026-09-21（arXiv v1；[开放权重](https://huggingface.co/theforecastingcompany/t0-alpha)）
- 来源：arXiv、Hugging Face 官方模型页
- 摘要：102M/256M 开放权重模型交替进行时间维和变量维注意力，以分位数输出多变量概率预测，并接收历史、过去协变量和已知未来协变量；作者报告已知未来协变量在 30 个任务上提升 6.3 个 skill points。
- 相关性判断：**很高（foundation model / contextual forecasting）**。适合用于比较“Agent 选上下文”能否优于固定协变量协议；需隔离未来已知与未来不可知字段。

### 3. [Granite Time Series PatchTST-FM-r2](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)

- 日期：2026-09-09（IBM Research 官方发布）
- 来源：IBM Research / Hugging Face 官方博客
- 摘要：IBM 发布约 385M 参数、最长 8,192 context、99 分位数概率输出的零样本 TSFM，提供 Apache 2.0/OpenMDW 双许可的权重、代码和复现实验材料，并支持缺失值插补。
- 相关性判断：**高（foundation model / 可部署基线）**。许可与复现资产使其适合作为 harness 中的可替换预测工具；“SOTA”结论应随 GIFT-Eval 榜单更新重新核验。

### 4. [NVIDIA Kumo Forecast](https://huggingface.co/blog/nvidia/kumo-forecast)

- 日期：2026-10-21（NVIDIA 官方发布）
- 来源：NVIDIA / Hugging Face 官方博客；[代码](https://github.com/NVIDIA/Kumo-TS)
- 摘要：以 MOMENT 表示为主干，加入 Domain-Aware Representation and Retrieval（DARR），将直接预测与相似历史轨迹检索融合，并产出预测步级解释；Apache-2.0。
- 相关性判断：**高（foundation model / retrieval memory）**。为 Agent 的“检索还是直接预测”决策提供可执行的双路径；检索库必须按时间截断并记录命中证据。

## 时间序列建模 Agent 最新研究

### 1. [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 日期：2026-09-26（arXiv v1）
- 来源：arXiv
- 摘要：FASE 将已完成预测实例写入 episodic memory，并把延迟到达的真实标签总结成路径排序信号；作者在 GIFT-Eval 的 29 个数据配置上报告相较最佳单一 TSFM 的 normalized MAE 下降 9.1%。
- 相关性判断：**很高（time-series Agent / online learning）**。直接对应持续预测产品；应以严格 walk-forward 方式模拟标签延迟并评估记忆老化。

### 2. [CastClaw: A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting](https://github.com/ustc-time-series/CastClaw)

- 日期：2026-10-14（官方仓库公告：ICDM 2026 Demo 录用；GitHub 最近推送同日）
- 来源：GitHub 官方仓库
- 摘要：工业预测 Agent 项目，强调将人类反馈纳入自主预测闭环；仓库公开了演示材料和代码入口。
- 相关性判断：**高（Agent / human-in-the-loop）**。与现实业务中专家审批、异常覆写和回滚相关；当前应优先审阅其评测协议及人类反馈是否在预测时点可用。

### 3. [AION: Next-Generation Tasks and Practical Harness for Time Series](https://github.com/ztxtech/aion)

- 日期：2026-10-13（GitHub API 最近推送）
- 来源：GitHub 官方仓库
- 摘要：基于 OpenCode 的时序 harness，明确组织任务规格、上下文推理、工具使用和验证驱动工作流，面向结构化预测与可审计停止条件。
- 相关性判断：**很高（time-series Agent / harness）**。最接近“Agent 运行时”研究对象；值得拆解其任务契约、工具账本和 validation gate 是否能阻断泄漏。

### 4. [LLM Agents for Time-Series: A Survey](https://arxiv.org/abs/2608.26226)

- 日期：2026-08-26（arXiv v1）
- 来源：arXiv
- 摘要：按问题而非组件，将 LLM 时序 Agent 分为 forecasting/reasoning、augmentation/synthesis、anomaly diagnosis 与 decision support，并比较工具、记忆和环境设计。
- 相关性判断：**中高（研究地图）**。不是新系统，但可用作实验覆盖度清单，避免只以预测误差衡量 Agent。

## 时间序列 reasoning 模型最新研究

### 1. [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 日期：2026-11-09（arXiv v1）
- 来源：arXiv
- 摘要：CastReasoner 用结构化 CoT 先从上下文特征提取预测证据、推断其暗示的未来动态，再与 forecast prior 比对并自适应决策；后训练包含多教师控制式轨迹合成、student-aware 难度筛选、SFT、带细粒度多目标奖励的 RL，以及跨域收敛引导的数据平衡。
- 相关性判断：**很高（reasoning / context-aware forecasting）**。这是将语言推理限制为“证据与数值先验之间可检查接口”的直接候选；需要核查上下文发布日期、证据归因和 CoT 是否在预测原点均可得，避免把事后信息包装成推理。

### 2. [CHORD: Multi-resolution Compression for Multimodal Time Series](https://arxiv.org/abs/2611.11913)

- 日期：2026-11-09（arXiv v1）
- 来源：arXiv
- 摘要：提出粗到细的多模态时序压缩器，以 shapelet-inspired 原子逐层生成校正，公共/私有通路兼顾跨模态与传感器形态，有限标量量化使每个尺度码率预先确定；作者在 7 个可穿戴感知与预测基准上报告 8× 压缩时与未压缩分类准确率平均差距 0.62 点。
- 相关性判断：**中高（reasoning input / edge tool）**。本身不是推理模型，但可成为 Agent 的“何时上传哪一层时序证据”的带宽可审计接口；压缩评测不等同于长期预测或 reasoning 保真。

### 3. [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 日期：2026-10-31（arXiv v2；v1 2026-10-19）
- 来源：arXiv
- 摘要：以保真度和模型可实现性联合约束序列压缩表示，通过门控保留关键频率模式；作者在 13 个数据集上报告比 reasoning 模型平均少 62.9% 推理时间。
- 相关性判断：**高（reasoning efficiency）**。适合实现 fast-path/slow-path：先做充分性判断，难例再交给复杂工具或长推理。

### 4. [TimeBraid: Unifying Time Series and Language for Understanding and Forecasting](https://arxiv.org/abs/2609.29792)

- 日期：2026-09-25（arXiv v1；[项目页](https://xinyuewangg.com/projects/timebraid/)）
- 来源：arXiv、官方项目页
- 摘要：将 TimesFM 类连续 patch 与 Qwen3 文本 token 通过交错的全局残差注意力统一，在理解、文本条件预测与时序问答上共同训练，并发布 2.5B 权重和推理代码。
- 相关性判断：**很高（reasoning + foundation model）**。是把语言上下文直接并入数值表征的候选底座；需重点检验跨模态时间戳对齐和文本上下文的 as-of 约束。

## 光伏功率预测最新研究

### 1. [The Utility of Physics-Informed Machine Learning in Solar Power Production Forecasting](https://arxiv.org/abs/2610.38976)

- 日期：2026-10-28（arXiv v1）
- 来源：arXiv
- 摘要：在 33 个欧洲国家、3,713 个 PV 装置的 300 万余样本上，将 ADR 物理模型以特征增强和残差学习接入 TSMixer；作者发现虽收敛略快，测试精度、泛化与小样本表现未出现稳定收益。
- 相关性判断：**中高（验证/反证）**。对 PV Agent 很有价值：物理先验应成为可比较的工具候选，而非默认启用项。

## GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

### 1. [runzhiyyds/sts-skills (Solve2Ship Skills)](https://github.com/runzhiyyds/sts-skills)

- 日期：2026-11-10（GitHub API 最近推送；创建于 2026-11-09）
- 来源：GitHub 官方仓库 / GitHub API
- 摘要：一组可安装的本地 Agent skills，目标是让规则、脚本、ML、提示词和工作流作为可竞争方案，经真实评估、预算约束与最终检查交付本地服务；仓库含 evidence、打包/安装脚本及 31 个标准库测试，README 明确其不是独立自治执行引擎。
- 相关性判断：**中高（通用 Agent / evaluation harness）**。非时序专用也未主张预测性能，但“候选方案竞争、留出集不复用、证据分层”的机制适合改造成 TS Agent 的工具/模型准入门；应先替换为滚动时序验证。

### 2. [temporal-community/temporal-agent-harness](https://github.com/temporal-community/temporal-agent-harness)

- 日期：2026-11-09（GitHub API 最近推送；创建于 2026-06-18）
- 来源：GitHub API / 官方仓库
- 摘要：实验性的 Temporal-native 多 Agent runtime，面向 durable execution、暂停/恢复、工具回调和多 SDK 集成。
- 相关性判断：**中高（通用 harness）**。非时序专用，但对长时运行预测工作流的重试、状态持久化和人工回调有直接工程借鉴价值。

### 3. [NVIDIA/Kumo-TS](https://github.com/NVIDIA/Kumo-TS)

- 日期：2026-10-21（官方发布；与 Kumo Forecast 同步公开）
- 来源：GitHub 官方仓库
- 摘要：Kumo Forecast 的实现，提供 DataFrame-first 接口、直接预测/历史检索增强两种路径与解释框架。
- 相关性判断：**高（TSFM / retrieval harness）**。方便以统一接口对比检索记忆、原始 TSFM 和 Agent 选择策略。

### 4. [ustc-time-series/CastClaw](https://github.com/ustc-time-series/CastClaw)

- 日期：2026-10-14（最近推送）
- 来源：GitHub API / 官方仓库
- 摘要：面向工业预测的 human-in-the-loop 时间序列 Agent；仓库公告 ICDM 2026 Demo 录用。
- 相关性判断：**高（timeseries Agent）**。应重点跟踪反馈接口、工具调用日志和可复现实验是否完善。

### 5. [ztxtech/aion](https://github.com/ztxtech/aion)

- 日期：2026-10-13（GitHub API 最近推送）
- 来源：GitHub API / 官方仓库
- 摘要：以任务契约、工具使用和 validation-driven workflow 为核心的 OpenCode 时序 harness。
- 相关性判断：**很高（timeseries harness）**。可作为本仓库 Agent 调度与审计设计的直接比较对象。

### 光伏功率预测

### 1. [dharmpatel28/Solar-Power-Forecasting-System-XGBoost-Regression-](https://github.com/dharmpatel28/Solar-Power-Forecasting-System-XGBoost-Regression-)

- 日期：2026-11-09（GitHub API 创建与最近推送）
- 来源：GitHub 官方仓库 / GitHub API
- 摘要：新建仓库仅包含一个 `SolarForecasting.ipynb`；仓库描述称使用 116K+ 记录、特征工程和 time-based validation 训练 XGBoost 做小时级太阳能发电预测，尚未提供 README、数据说明、可复现实验配置或结果审计。
- 相关性判断：**低（PV forecasting 线索）**。主题和时间验证表述相关，但资产不足，不能作为可复现基线或性能证据；只保留为待观察项目。

### 2. [Zara-Toorox/Solar-Forecast-ML](https://github.com/Zara-Toorox/Solar-Forecast-ML)

- 日期：2026-10-29（GitHub Topics 最近更新记录）
- 来源：GitHub 官方仓库 / GitHub Topics
- 摘要：面向 Home Assistant 的本地注意力 Transformer 光伏预测组件，主打离线运行和隐私保护。
- 相关性判断：**中（垂直部署线索）**。更偏应用工程而非 Agent/TSFM 研究，但可用于考察边缘部署与本地数据边界。

## 建议的下一步

1. 在统一 walk-forward 协议下，将 Chronos-2、`t_0`、Granite r2、Kumo（direct/DARR）作为数值底座，单独评估上下文选择的增益和泄漏风险。
2. 为 FASE/AION/CastClaw 类 Agent 增设不可变的 prediction-origin、工具调用账本、标签延迟模拟和回放门禁。
3. 对 PV 场景，保留“纯数据驱动、物理增强、残差混合”三条独立基线；不要因物理解释性而跳过跨区域和小样本检验。

## 说明

- 本轮未检索到 2026-11-10 当日可确认发布且强相关的新论文；11 月 9 日新出现的 CastReasoner、预注册 TSFM 期货评估与 CHORD 已按 arXiv v1 补入。AI HOT 最近 7 天的精选结果未给出可独立核验的直接主题新增。
- GitHub 条目日期优先取 GitHub API `pushed_at`；仅有 Topics 抓取时间的 Solar-Forecast-ML 已降低证据等级。

## DailyArXiv 补检结论

- 已读取 [DailyArXiv `master` README 的 Time Series 栏](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)：页面标注 `Last update: 2026-11-06`，可见最新相关收录日为 2026-11-04。11 月 3 日的 CoCo、GlucoAgent、TEMPO 与 Continual AutoResearch，以及 11 月 2 日的 TSFM 不确定性校准和 11 月 1 日的 PV 故障—传感器联合生成条目均在此前简报中按 arXiv v1 核验。
- 本次新增的 **CastReasoner（2611.12285）**、**期货 TSFM 预注册评估（2611.12141）** 与 **CHORD（2611.11913）** 均为 2026-11-09 arXiv v1，未出现在该 README；因此不因 DailyArXiv 滞后而降级。其余已知近期论文也仍以 arXiv v1 首发日排序；例如 AdaMamba 虽显示 11 月 4 日更新，但 v1 为 2026-04，仍在三个月窗口外。

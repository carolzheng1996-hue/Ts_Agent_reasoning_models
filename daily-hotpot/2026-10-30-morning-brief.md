# 时间序列研究晨间简报｜2026-10-30

检索时间：2026-10-30 08:00–09:10（Asia/Shanghai）。严格时间窗口：2026-07-30 至 2026-10-30；论文日期优先采用 arXiv **v1**，代码日期采用 GitHub `created_at`，`pushed_at` 只表示活动。相较 [10 月 29 日晨报](https://github.com/carolzheng1996-hue/Ts_Agent_reasoning_models/blob/main/daily-hotpot/2026-10-29-morning-brief.md)，本轮没有可确认的 10 月 28 日后直接时序论文首发；新增可核验的工程信号是 AutoML 与 harness 候选。为避免将搜索空档伪装成发现，研究栏目以窗口内仍具代表性的、可复查条目作状态更新。

## 1. 时间序列基础模型最新研究

### 2026-10-27｜[Timestral](https://arxiv.org/abs/2610.37585)：已知未来协变量的概率 TSFM 技术报告

- **来源与日期**：arXiv v1，2026-10-27 17:25 UTC；[Mistral 官方发布](https://mistral.ai/news/timestral/) 为 10 月 15 日，故技术报告的公开不等于新模型首发。
- **简短摘要**：报告覆盖 5M–209M 四个规模，以解耦预测跨度、已知未来协变量和“合成预训练—后训练”实现概率预测；作者在 GIFT-Eval、TIME、fev-bench 报告领先结果。
- **相关性判断：高（TSFM / Agent 预测工具）**。适合被 Agent 调用，但 harness 必须冻结“预测时已知”的日历、排程、NWP 等协变量版本，不能混入事后观测；性能和许可均未在本轮复现。

### 2026-10-26｜[PHM 自监督预训练迁移评测](https://arxiv.org/abs/2610.35280)：预训练收益不是通用结论

- **来源与日期**：arXiv v1，2026-10-26。
- **简短摘要**：在 47 个设备健康管理数据集上采用整库留出，发现自监督预训练对故障分类有稳定收益，但对剩余寿命估计不稳定优于从头训练。
- **相关性判断：高（TSFM 选型 / harness）**。为 Agent 的模型晋级提供任务级门控原则：独立留出和目标任务优先于预训练损失或单一 benchmark。

### 2026-10-22｜[TimesFM 零样本土壤传感器预测](https://arxiv.org/abs/2610.30971)：短期有效、长跨度未必赢

- **来源与日期**：arXiv v1，2026-10-22。
- **简短摘要**：在 27 个站点的 15 分钟土壤湿度/温度数据上做 gap-aware rolling-origin 评估；TimesFM 在 1–8 小时优于规则基线 21–76%，但一天以后落后 6–79%。
- **相关性判断：高（TSFM 部署评测）**。给 Agent 的关键不是“零样本是否有效”的二元结论，而是按预测跨度、成本和简单季节基线的胜负来路由模型。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-26｜[Guarded Agent-in-the-Loop Residual Adaptation](https://arxiv.org/abs/2610.34968)：风电演化环境中的受控残差修正

- **来源与日期**：arXiv v1，2026-10-26。
- **简短摘要**：冻结预测骨干；Agent 解析天气场景并路由残差专家。成熟误差不足时不修改，候选专家需经验证才加入。
- **相关性判断：高（TS Agent / 能源预测）**。其“情景解释—残差修正—接受门控”适用于光伏和工业时序；须额外审计 NWP 的发布时间、标签成熟延迟和长期无人值守退化。

### 2026-10-21｜[Rethinking Agentic Model Orchestration for Time Series Forecasting](https://arxiv.org/abs/2610.29504)：编排而非单模型

- **来源与日期**：arXiv v1，2026-10-21。
- **简短摘要**：把多模型选择、工具调用和预测流程组织视为时序预测系统的主体，而非仅比较单一主干。
- **相关性判断：高（Agent / AutoML）**。适合作为候选模型、上下文、回测与成本的 harness 设计参考；应以严格滚动起点回测验证，不能把编排复杂度本身视为收益。

**本轮新发空结果**：arXiv、OpenReview、ACL/NeurIPS/ICLR/ICML/KDD/AAAI 官方域名定向补检中，未确认 10 月 28 日后、具可验证首发日期的直接时序建模 Agent 论文。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-19｜[TimesJev](https://arxiv.org/abs/2610.26002)：以 System-1 压缩降低时序推理延迟

- **来源与日期**：arXiv v1，2026-10-19。
- **简短摘要**：用保留关键频率的门控压缩和可实现性约束，将长数值序列对齐至快速模型嵌入；作者在 13 个数据集上报告相对 reasoning 基线更高准确率与更低推理延迟。
- **相关性判断：高（reasoning 延迟预算）**。值得与慢思考模型比较，但要单测突变、低频模式与罕见事件是否在压缩时丢失，不能只看平均准确率。

### 2026-10-15｜[Twice Upon a Time](https://arxiv.org/abs/2610.22327)：互补视觉表征的时序语言模型

- **来源与日期**：arXiv v1，2026-10-15。
- **简短摘要**：结合保留绝对量纲的折线图与对缩放/偏移不变的归一化延迟嵌入，经双视觉编码器馈入语言模型；作者报告 TSRBench、TSExam 与 ChatTS 对齐任务改善。
- **相关性判断：高（时序 reasoning 模型）**。指出推理模型应同时保有数值框架和结构不变性；图像化输入的分辨率、轴刻度和多变量对齐是后续 Agent 审计点。

### 2026-10-02｜[SEER](https://github.com/BennyTMT/SEER)：自演化事件检索与预测 reasoning

- **来源与日期**：GitHub 创建于 2026-10-02；项目页称论文于 10 月发布。
- **简短摘要**：从已观测误差分别更新检索记忆和持久领域知识，再在严格预测截止点下生成带事件证据的预测。
- **相关性判断：高（事件驱动 reasoning / Agent）**。其把检索、反思与防前视泄漏显式化，适合作为外部证据 Agent 的对照；仓库仅 8 次提交，尚未运行或复现其主张。

## 4. GitHub：timeseries Agent、harness、ML、AutoML 项目

以下日期为 GitHub UTC 创建时间；本轮对五组创建窗口查询均有结果，未执行任何项目。

### 2026-10-30｜[EvolveSearcherUniversal](https://github.com/romanfjose/EvolveSearcherUniversal)

- **摘要**：自述提供隔离验证 harness、计算预算路由与多 Agent 遥测的进化搜索框架。
- **相关性判断：ML harness 高、时序直接性低**。适合关注“候选—验证—预算”闭环；新仓库且无 stars，未确认时序切分、复现实验或真实任务成功率，列为观察级。

### 2026-10-29｜[agentic-automl](https://github.com/Chillmav/agentic-automl)

- **摘要**：以 AutoML Agent 名称创建，但元数据没有描述，创建与最后推送仅相隔约两分钟。
- **相关性判断：AutoML 主题高、证据低**。尚无 README/文件树层面的可用能力证据；不应被当作可运行 AutoML 或时序系统。

### 2026-10-29｜[abm-market-calibration](https://github.com/pafuchsc/abm-market-calibration)

- **摘要**：市场 agent-based model 的校准与预测个人项目，描述包含 GMM、神经 surrogate、轨迹校准及 S&P 500/FX 回测。
- **相关性判断：金融时序建模中、Agent/TSFM 低**。可作为校准与代理模型线索，但不是 LLM Agent、TSFM 或通用 AutoML harness；应先检查回测时间边界。

### 2026-10-29｜[germes](https://github.com/viminizer/germes)

- **摘要**：Go 编写的 Codex/Claude Code 应用构建 harness。
- **相关性判断：Agent harness 中高、时序低**。可借鉴隔离执行与项目级约束，尚没有时序任务、滚动验证或 ML 实验支持证据。

### 2026-10-29｜[Awesome-Agent-Harness](https://github.com/Gloriaameng/Awesome-Agent-Harness) 更新

- **摘要**：资料库在 10 月 29 日有活动；其项目说明汇总 168 篇参考、34 个证据编码系统、30 个 harness benchmark。
- **相关性判断：harness 研究高、时序直接性低**。适合补全时序 Agent 的状态、证据、权限和复放维度；这是已有资源的更新，非新建时序项目。

## 5. 光伏功率预测

### 2026-10-20｜[Foundation-Style Pretraining for Distributed PV Forecasting](https://arxiv.org/abs/2610.27763)

- **来源与日期**：arXiv v1，2026-10-20。
- **简短摘要**：将历史功率、气象、未来 NWP 和时间编码统一为序列补全任务，并在 479 个站点上做空间留出评估。
- **相关性判断：高（领域 TSFM / Agent 数据契约）**。适合冷启动和跨站迁移研究；上线复现须保存当时可得的 NWP 版本，不能以事后再分析资料替代。

**本轮空结果**：GitHub `photovoltaic forecasting` 创建窗口查询未发现可确认的新高相关项目；此结论限于未认证 GitHub 搜索覆盖，不代表生态中不存在未索引或私有项目。

## 6. 来源、限制与建议

- [DailyArXiv master](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 已于 2026-10-30 更新，时序条目最新可见首发仍为 10 月 27 日；arXiv Export API 关键词全量查询此前出现 429，本轮以官方单篇页和聚合索引交叉核验。
- 按 AI HOT 技能查询近七日精选论文流；没有直接时序 foundation model、Agent、reasoning 或光伏预测新增，不以泛 AI 新闻填充主栏。
- 优先下一步：用同一滚动起点协议比较 Timestral、简单季节基线和 Agent 编排；同时为 SEER/风电残差 Agent 固化事件日期、检索日期、标签成熟日期与模型修改日志。

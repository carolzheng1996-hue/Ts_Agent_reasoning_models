# 2026-11-12 时间序列 Agent / Reasoning 晨间简报

- 检索时间：2026-11-12 09:15–09:25 CST（Asia/Shanghai）。
- 时间窗口：2026-08-12 至 2026-11-12（含首尾）。论文按 arXiv v1/正式公开日；项目按 GitHub `created_at`。无法确认首发日期的线索不进入主结论。
- 增量参照：2026-11-11 晨报。本次重点是过去约 24 小时的新 GitHub 项目；未检出 11 月 11 日后可核验首发的时序基础模型、时序 Agent 或时序 reasoning 论文。

## 今日结论

1. **TSFM 正在进入数据基础设施。** 新项目 `tsfm-pg` 将 Chronos-2/Timestral 放进 PostgreSQL，并明确区分历史、past-only 与 known-future 协变量；这是 Agent 工具接口中防止未来信息泄漏的一个可读实现线索。
2. **AutoML 的时序验证仍应是硬门槛。** 新项目 MIRA 声明采用 leak-safe temporal splits；其价值取决于切分、特征构造和超参选择是否都严格限定在预测原点之前。
3. **研究侧无可确认的新首发。** 继续以 11 月 9–10 日的 CastReasoner、CastWorld 和期货 TSFM 盲测为当前最新高优先级证据，而不把聚合页的更新时间或 arXiv 修订日误记为新成果。

## 1. 时间序列基础模型：当前窗口内高优先级证据

### [2026-11-09] [Do Time-Series Foundation Models Forecast Index-Futures Returns?](https://arxiv.org/abs/2611.12141)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：预注册地比较 Chronos-Bolt、Chronos-2、TimesFM 2.5、Moirai 2.0、TiRex 等冻结 TSFM 在 NQ/ES 5–120 分钟预测的增量价值。作者报告一次性开启的盲集中，160 个模型—表示—期限组合均未胜过 no-change。
- 相关性判断：**很高（TSFM 验证 / Agent 工具准入）**。为 Agent 选择基础模型时，应把 prediction origin、朴素基线、盲集和多重比较控制做成不可绕过的 harness gate。

### [2026-11-04] [Decouple to Reuse: Fine-Grained Knowledge Augmentation for Time Series Foundation Models](https://arxiv.org/abs/2611.05993)

- 来源与日期：arXiv v1，2026-11-04；[DailyArXiv 索引](https://github.com/zezhishao/DailyArXiv#time-series)仅作发现线索。
- 摘要：将趋势和季节残差压缩为可复用 codebook，再经检索和门控融合来增强冻结 TSFM 的跨域迁移；作者在八个真实世界基准、四个 TSFM 骨干上报告提升。
- 相关性判断：**高（foundation model / 检索）**。可作为 Agent 的组件级检索候选；需审计 codebook 的拟合边界，确保不使用预测时点后的数据。

### 本轮新鲜度核验

检索 arXiv、DailyArXiv 和机构/项目检索结果后，未发现 2026-11-11 至 2026-11-12 间可核验 v1 的 TSFM 论文。DailyArXiv 的公开 `master` 分支在 2026-11-06 更新；其 `Time Series` 栏可确认窗口内的 `Decouple to Reuse`（已纳入），但未见更晚且与本报主题直接相关的新增条目。该结论是“本轮未检出”，并非证明不存在；下次应继续以 arXiv v1 页面复核。

## 2. 时间序列建模 Agent：当前窗口内高优先级证据

### [2026-11-10] [CastWorld](https://github.com/Forever-Pan/CastWorld)

- 来源与日期：GitHub 官方仓库/API；创建与最近推送均为 2026-11-10 UTC。
- 摘要：context-aware agentic forecasting benchmark，声明覆盖 25 个数据集、八个领域，并同时评估预测质量、过程执行、可信行为和资源效率。
- 相关性判断：**很高（timeseries Agent / harness）**。优先复查其 as-of 数据边界、工具可见性、数据版本与资源账本，不能只以 README 结论替代回放评测。

### [2026-09-26] [Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)

- 来源与日期：arXiv v1，2026-09-26。
- 摘要：FASE 将预测路径写入 episodic memory，使用延迟到达标签提供在线策略信号；作者在 GIFT-Eval 的 29 个配置上报告相对最佳单一 TSFM 的 normalized MAE 降低。
- 相关性判断：**很高（预测 Agent / 在线学习）**。适合长期滚动预测，但实验必须模拟标签延迟，且记忆写入应受预测原点约束。

## 3. 时间序列 reasoning 模型：当前窗口内高优先级证据

### [2026-11-09] [Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting](https://arxiv.org/abs/2611.12285)

- 来源与日期：arXiv v1，2026-11-09。
- 摘要：CastReasoner 以“提取上下文预测证据—判断未来动态—与数值 forecast prior 比对—决策”的可检查链路做后训练，包含多教师轨迹、难度筛选、SFT 与多目标 RL。
- 相关性判断：**很高（reasoning / context-aware forecasting）**。应将证据发布时间、来源与数值先验分开记录，使每次修正都可回放并排查事后信息。

### [2026-10-19] [TimesJev: Thinking Fast on Time Series with System 1 Sufficiency](https://arxiv.org/abs/2610.26002)

- 来源与日期：arXiv v1，2026-10-19（10 月 31 日为已见的 v2 修订日期，未当作首发）。
- 摘要：利用充分性损失和模型可实现性约束学习压缩表示，门控保留关键频率模式；作者报告相对 reasoning 模型降低推理时间。
- 相关性判断：**高（reasoning efficiency）**。可设计为 fast-path/slow-path：充分时走快速模型，不充分才升级到工具调用或长推理；速度结论不等同于校准或预测可靠性。

## 4. GitHub：今日新增 / 更新的 timeseries Agent、harness、ML、AutoML 项目

### [2026-11-12] [travmcwilliams/mira-workbench（MIRA）](https://github.com/travmcwilliams/mira-workbench)

- 来源与日期：GitHub 官方 API；创建 2026-11-12 00:05 UTC，最近更新 2026-11-12 01:12 UTC，MIT。
- 摘要：本地优先的数据科学工作台，以 DuckDB 统一采集记录，提供 profile、清洗、特征工程/选择与 AutoML；README 声明支持 leak-safe temporal splits，并可导出每次运行的 notebook。
- 相关性判断：**高（AutoML / 实验可追溯）**。其 pipeline 和导出物可补齐 Agent 的实验谱系；但必须验证其 temporal split 是否贯穿数据清洗、特征选择与调参，而非仅用于最终评分。
- 注意：通用 ML 项目而非时序预测 Agent，尚无独立复现实验。

### [2026-11-11] [barddoo/tsfm-pg](https://github.com/barddoo/tsfm-pg)

- 来源与日期：GitHub 官方 API；创建 2026-11-11 23:13 UTC，最近更新 2026-11-11 23:51 UTC，Apache-2.0。
- 摘要：在 PostgreSQL 内运行 `tsfm-zig`，支持 Chronos-2 与 Timestral checkpoint，提供量化预测、批处理、多变量和协变量 SQL 函数；README 明确历史、past-only、known-future 协变量的张量形状，并将模型权重保留在数据库主机。
- 相关性判断：**很高（TSFM serving / Agent 工具）**。可把它视作 Agent 的受控数值工具候选：接口层应强制 known-future 只接受在预测原点已知的变量，避免从表中误取未来观测。
- 注意：新仓库（当前 0 星）且未运行代码；应先做版本锁定、SQL 权限、资源隔离和 walk-forward 测试。

### [2026-11-11] [parag-shendye/Time-Series-Analysis-Agent](https://github.com/parag-shendye/Time-Series-Analysis-Agent)

- 来源与日期：GitHub 官方 API；创建 2026-11-11 22:16 UTC，最近更新 2026-11-11 22:26 UTC。
- 摘要：名称与主题直接指向时序分析 Agent，但仓库缺少可读取的 README/项目描述，且无许可证元数据。
- 相关性判断：**低（待核验的 Agent 线索）**。仅作发现记录；在代码、数据、时间切分和许可证齐备前，不应纳入候选技术栈。

## 5. 光伏功率预测：当前窗口内高优先级研究

### [2026-10-28] [The Utility of Physics-Informed Machine Learning in Solar Power Production Forecasting](https://arxiv.org/abs/2610.38976)

- 来源与日期：arXiv v1，2026-10-28。
- 摘要：在 33 个欧洲国家、3,713 个 PV 安装点、逾 300 万样本上比较 ADR 物理模型与 TSMixer 的特征增强/残差混合方式；作者报告物理信息可加快部分训练收敛，但未带来一致的测试精度、区域泛化或低数据量优势。
- 相关性判断：**很高（光伏功率预测 / 负结果）**。对 Agent 而言应将物理先验作为可消融的候选工具，而非默认增益；必须按站点、区域和天气退化情形做盲测。

### [2026-10-20] [Foundation-Style Pretraining for Scalable and Transferable Distributed PV Forecasting](https://arxiv.org/abs/2610.27763)

- 来源与日期：arXiv v1，2026-10-20。
- 摘要：以历史 PV 功率、气象观测、未来 NWP 与时间编码组成序列补全任务，在 479 个分布式站点预训练；340 站用于开发、139 个空间留出站用于 zero-shot 评估，并比较三种预训练目标。
- 相关性判断：**很高（PV foundation model / TSFM）**。为多站点 Agent 提供较强基座候选；已知未来 NWP 和事后实测天气须在工具 schema 中严格分栏，避免把真实未来观测当作可用协变量。

### [2026-10-12] [Constructed regional photovoltaic generation fields improve ultra-short-term distributed solar forecasting](https://arxiv.org/abs/2610.16110)

- 来源与日期：arXiv v1，2026-10-12。
- 摘要：SatPV-Field 将 496 个分布式 PV 系统转换为区域发电场，以历史场、卫星短波辐射引导和气象预测来推演未来区域状态，再为单站提供空间上下文；作者报告相对单站基线的站点 MAE 降低约 10%。
- 相关性判断：**高（PV 时空建模 / Agent 工具）**。适合作为区域级外部上下文工具；需要逐预测原点记录卫星产品的发布时间与可得性，并分开评估空间留出和时间留出。

## 6. 建议动作

1. 将 `tsfm-pg` 的 `history` / `past` / `known` 语义映射到统一 Agent 工具 schema，并在运行时校验每个字段的可用时间戳。
2. 用固定 prediction origin 的回放数据，比较 no-change、单一 TSFM、CastReasoner 式上下文修正与 AutoML pipeline；输出误差、校准、成本和泄漏检查结果。
3. 对 MIRA 类 AutoML，要求每个模型选择、变换拟合、特征选择和超参试验都保存时间切分证据与随机种子。

## 限制

- 本报中的论文性能均为作者报告，未独立复现；GitHub 条目仅核验仓库元数据与 README，未执行代码。
- GitHub API 搜索在检索末段触发匿名速率限制；已保留在额度内取得的官方仓库元数据，不以聚合站的“更新时间”替代创建日期。

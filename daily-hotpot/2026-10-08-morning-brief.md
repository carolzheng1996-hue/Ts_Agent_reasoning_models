# 时间序列 Agent / Reasoning 晨间简报｜2026-10-08

- **检索窗口**：2026-07-08—2026-10-08（含首尾）；北京时间 2026-10-08 清晨完成主要核验。本次任务从 10 月 7 日跨日，按实际完成日期命名。
- **日期口径**：研究按可核实的首次公开日期、项目按创建日期排序；新版本和博客解读单独注明。各栏目由近到远，日期不确定的线索置于末尾。arXiv 与 GitHub 原始时间使用 UTC 日期。
- **增量基线**：自动化记录显示上次运行 10 月 6 日，但本地 memory 和同步后的仓库最近成果均止于 9 月 25 日。因此以下为相对本地可见记录的补充，不能保证全部是最近 24 小时新增。
- **阅读优先级**：先看 FreshCast 的部署后记忆协议、TSHarness 的数值证据接口、EvoCast 的实验裁决机制；光伏方向优先验证天气信息可用时刻与跨站点泛化。论文结果均为作者报告，本次未复现实验。

## 1. 时间序列基础模型最新研究

### 2026-10-06｜反事实输入暴露 TSFM 的动态辨识不足

来源：[arXiv:2610.08118](https://arxiv.org/abs/2610.08118)。首次提交 10 月 6 日。

以精确反事实的受迫工程系统测试 Chronos-2、TimesFM-2.5 与 TabPFN-TS。论文发现默认协变量接口可能只反映即时作用，或低估动态响应；合成受迫系统微调能改善部分响应，但在四个实测系统中的三个上，经典辨识仍明显更好，并出现单变量预测能力损失。

**相关性：高。** 对用 TSFM 回答“改变控制输入会怎样”的 Agent 是直接约束；预测精度不能替代干预效应验证。应用到光伏调度前，应分别测试天气协变量响应和可控输入响应。

### 2026-10-06｜FreshCast：冻结预测器，持续刷新检索记忆

来源：[Retrieval Is Not Enough](https://arxiv.org/abs/2610.07834)。v1 为 10 月 6 日，v2 为 **10 月 7 日**，不是两篇新论文。

以部署后新观测刷新非参数记忆，用关系核回归构建记忆预测，再由验证集校准其与冻结模型的组合权重。作者在七个基准、十种架构中报告收益；冻结训练末尾的记忆会移除大部分收益。

**相关性：高。** 可作为预测 Agent 的持续记忆模块，尚不等于自主规划系统。重点复核：每次写入的后续片段是否已经完整观测、延迟标签如何处理，以及与在线基线是否使用同样的信息预算。

### 2026-10-05｜协变量不确定性下的负荷 TSFM 基准

来源：[arXiv:2610.07232](https://arxiv.org/abs/2610.07232)。首次提交 10 月 5 日。

比较四种从头训练模型和四种 TSFM，覆盖三个真实负荷数据集及不同未来协变量质量。Chronos-2 在协变量可用或准确时表现突出，但噪声增大后性能退化；严重不确定性下 TimesNet 更稳健。

**相关性：高，光伏为方法迁移。** 应将实际天气预报误差纳入基础模型选型。研究对象是电力负荷，不能称为光伏功率实证。

### 2026-10-04｜Pythia：多模态时间序列基础世界模型

来源：[arXiv:2610.05240](https://arxiv.org/abs/2610.05240)。首次提交 10 月 4 日。

通过联合嵌入预测学习上下文条件下的潜在动态；数值参考约束上下文修正，另用概率解码器读取冻结表示。作者在 MUSE 上报告相对所比较榜单最强模型的改进，并分析实体描述、事件和协变量贡献。

**相关性：高。** 为事件、文本与功率曲线联合建模提供方向；世界模型命名本身不证明规划、因果推理或跨电站泛化能力。

### 2026-08-20｜TabPFN-TS / Chronos-2 区域供热零样本评估（10 月修订）

来源：[arXiv:2608.20024](https://arxiv.org/abs/2608.20024)。v1 为 8 月 20 日，v2 为 10 月 6 日。

研究两处德国供热网络，分析协变量、上下文长度、时间分辨率与概率预测。主基准假设完美天气预报，另有回溯天气预测敏感性分析。

**相关性：中高。** 能源预测迁移参考；必须区别完美天气上界与可部署表现。按首次日期列入窗口内修订跟踪，非 10 月新研究。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-04｜TSHarness：解耦感知与推理的零样本时序问答

来源：[arXiv:2610.04942](https://arxiv.org/abs/2610.04942)。首次提交 **10 月 4 日**；聚合站的 10 月 6 日展示时间不作为首发日。

工具选择器调用数值工具，将统计与时序特征写入结构化 Time-Series Perception State；回答 Agent 在此基础上推理，证据不足时触发再次感知。方法强调跨数据集零样本 TSQA，不依赖目标侧训练或答案反馈。

**相关性：很高。** 与可核验数值工具、记忆和反馈闭环直接对应。它是问答 harness；尚不能据此宣称自动训练或优化预测模型。本次未核实独立官方代码发布。

### 2026-10-03｜EvoCast：自主迭代预测架构的研究 Agent

来源：[arXiv:2610.04517](https://arxiv.org/abs/2610.04517)、[官方代码](https://github.com/18e0-x/EvoCast)。论文首次提交 10 月 3 日；仓库创建 7 月 27 日、最后推送 7 月 28 日，说明代码存在更早公开线索，**不能认定 10 月 3 日是整个项目首发**。

先执行基线与机制消融，再利用数据特征、失败记录和历史实验提出修改方向。LLM 负责假设及实现，确定性程序负责修改边界、统一评估与候选晋级。作者报告三个真实预测案例。

**相关性：很高。** 直接覆盖建模 Agent 和开放式架构搜索。GitHub 树中确有 diff audit、verifier、metric runner 等模块，但本次未执行或审计其全部裁决逻辑，不把模块名当作正确性证明。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-05｜COMMON-TSQA：答对不代表使用了数值证据

来源：[Do Time-Series QA Systems Read the Time Series?](https://arxiv.org/abs/2610.05686)。首次提交 10 月 5 日。

对 TimeOmni-1、ChatTS、TimeOmni-VL、Time-MQA 进行统一问答评估，在固定问题和目标下设置原始输入与六种干预，并审查解释的事实依据、推理有效性和答案一致性。总体分数可能掩盖个体预测变化，解释与最终答案一致也可能伴随错误数值描述。

**相关性：很高。** 适合成为 TS Agent 的证据审计参考。建议将数值事实正确率、输入干预敏感性、推理有效性与最终答案准确率分开报告。

**日期待核、降级线索**：[SimpleTimeBench / Foundations without Fundamentals](https://arxiv.org/abs/2610.02058) 的 arXiv v1 为 10 月 1 日，但 [OpenReview 同名 PDF](https://openreview.net/pdf?id=iIRdd86Xkr) 搜索索引显示更早的发布线索；论坛页触发浏览器验证，本次不能确认最早公开时间。因此不计入已确认的窗口内新研究。内容关注趋势、周期、领先协变量等基础时序能力，相关性高，首发日期置信度低。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列

#### 2026-10-07｜Agent Lightning v1.0 官方解读更新（旧项目版本跟踪）

来源：[Microsoft Research 博客](https://www.microsoft.com/en-us/research/blog/agent-lightning-v1-0-a-3500-line-lightweight-agentic-rl-framework-for-training-agents-with-real-harnesses/)、[GitHub](https://github.com/microsoft/agent-lightning)。日期是博客发布时间；README 记载 v1.0 于 **8 月开源、8 月 19 日发布技术报告**，不能算作今日新开源项目。

把部署时的真实 harness 接入 RL，代理保留工具和上下文流程，训练侧捕获轨迹并管理 rollout。**相关性：中高、通用基础设施。** 可借鉴实验轨迹和训练/部署一致性；公开示例结果不是时间序列建模收益。AI HOT 提供线索，已回到官方博客和仓库核对。

#### 2026-10-05｜AI Data Scientist Platform

来源：[GitHub](https://github.com/kulkarniDurvesh/ai-data-scientist-platform)、[滚动回测实现](https://github.com/kulkarniDurvesh/ai-data-scientist-platform/blob/main/core/forecast/evaluate.py)。创建 10 月 5 日，推送 10 月 7 日。

包含数据分析、建模、预测及 Agent 工具模块。抽查代码确认按 cutoff 切分历史与未来、最多四个回测起点、用历史计算 MASE 分母；区间由回测残差标准差乘系数估计。

**相关性：中高，原型观察。** 可参考预测工具封装；其区间没有由上述实现直接给出的覆盖率保证。尚未检查完整模型选择与最终独立测试流程，未运行。

#### 2026-08-22｜agentic-timeseries

来源：[GitHub](https://github.com/sriixz/agentic-timeseries)。创建 8 月 22 日，最新推送 10 月 5 日，按创建日期排序。

README 描述金融分析、CDC FluSight 分析、自然语言配置 NeuralForecast AutoLSTM/Optuna 三条工作流，并分离配置生成与模型执行。

**相关性：高。** 与建模 Agent 任务匹配；本次仅核验元数据和 README，未把其持出测试、校验和修复宣称作为已通过的实验结果。推送日期只说明活动，不证明当天新增了这些功能。

EvoCast 代码已与上方论文合并展示，不重复计数。HuggingFace 定向检索未确认可以新增的独立、窗口内发布条目；没有用第三方模型榜单替代模型卡与发布历史。

### 光伏功率预测

#### 2026-10-07｜多变量光伏发电预测系统

来源：[GitHub](https://github.com/kulat55/jiyu-duobianliang-de-guangfu-fadian-yuce-xitong)、[LSTM 训练](https://github.com/kulat55/jiyu-duobianliang-de-guangfu-fadian-yuce-xitong/blob/main/models/train_lstm.py)、[线性模型训练](https://github.com/kulat55/jiyu-duobianliang-de-guangfu-fadian-yuce-xitong/blob/main/models/train_model.py)。创建、推送均为 10 月 7 日；README 提及英文同内容仓库，合并为一个项目。

Flask 界面集成线性回归与 LSTM。代码使用位置顺序 60/20/20 切分，LSTM 归一化仅拟合训练段；三步历史预测下一条功率。

**相关性：高，优先级中低。** README 的“0–15 分钟”不能由单步训练脚本直接证实；需确认采样周期、原始排序及数据来源。线性回归用同一行气象变量估计功率，不能默认视为提前预测。LSTM 的 MAE/MSE 在归一化尺度计算，不能直接当作 kW 误差。未运行。

#### 2026-10-05｜Solariance Home Assistant 集成

来源：[GitHub](https://github.com/solariance/ha-solariance)。创建、推送均为 10 月 5 日。

通过服务 API 提供光伏预测传感器、Energy 仪表盘曲线与寻找富余光伏用电时间窗的动作；README 和代码树可读。

**相关性：中，应用集成。** 适合作为“预测→设备用电安排”的工具接口参考，依赖外部账户与预测服务，不是可训练的新预测模型；本次未调用服务或验证预测质量。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-09-22｜迁移学习与 CQR 的光伏概率预测

来源：[arXiv:2609.26959](https://arxiv.org/abs/2609.26959)。首次提交 9 月 22 日；本地 9 月 24 日已有记录，作为窗口内延续跟踪。

结合迁移学习和 conformalized quantile regression，研究停电驱动的数据稀缺场景。目标孟加拉国数据包含模拟设定。

**相关性：高。** 适合评估稀缺数据下区间预测；不能把模拟目标域结果当成真实电站迁移验证。后续应检查时序校准、缺失机制和目标域独立测试。

### 2026-09-15｜天空图像→辐照度→下一小时光伏功率

来源：[Smart Energy System Research 原文](https://www.sciepublish.com/article/pii/1221)。页面明确 Published 15 September 2026；此前本地晨报已跟踪，非本日首次发现。

用光流预测云运动，ResNet50 估计辐照度，再将天气、辐照度及历史功率输入 CNN-BiGRU-Attention，配合贝叶斯超参数优化预测下一小时功率。

**相关性：高。** 多模态预测流水线可作为 Agent 编排工具；需要继续审查时间切分、图像与气象信息可用时刻以及晴天/多云分组误差，不能以单一总体拟合指标代替部署验证。

### 日期不确定、降低优先级的 10 月刊期线索

- **2026-10，在线首发日不确定**：[Physics-as-a-layer multi-task forecasting of photovoltaic power and module temperature with numerical weather prediction](https://doi.org/10.1016/j.epsr.2026.113181)。用可微辐照与热过程联合预测功率、组件温度。**相关性高**，值得研究物理约束，但刊期不是首发日期，不计入已确认增量。
- **2026-10，在线首发日不确定**：[Hybrid photovoltaic power forecasting by combining physical and machine learning models](https://doi.org/10.1016/j.solener.2026.114951)。比较物理与机器学习混合方法，并使用巴西、荷兰系统数据。**相关性高**，重点是混合结构选择；尚未确认最早在线时间，不称为 10 月新论文。

**光通信光功率预测**：本轮未核实窗口内可新增的直接研究。[Mobility Aware Power Control](https://arxiv.org/abs/2604.22682) 首次提交 4 月 24 日，已超窗且主要研究功率控制，排除。未将光伏材料的 photovoltaic effect 或光学硬件器件论文充作功率预测研究。

## 6. DailyArXiv 必检结论

已完整读取 [master README](https://github.com/zezhishao/DailyArXiv/blob/master/README.md) 的 **Time Series** 板块：`Last update: 2026-10-08`，共 **91 条带 arXiv 链接的论文行**，板块最新行日期为 **10 月 6 日**。README 全局更新日不是所有论文首发日。

**存在相关且窗口内的内容，已补入上述正文**：反事实辨识诊断、FreshCast、协变量不确定性负荷基准、Pythia、TSHarness、EvoCast、COMMON-TSQA，以及区域供热 TSFM 的窗口内旧稿修订。DailyArXiv 的 FreshCast 行仍指向 v1，而 arXiv 已有 10 月 7 日 v2；最终使用官方历史区分。

**降级或排除**：

| 条目 | DailyArXiv 标示日期 | 首发 / 冲突证据 | 处理 |
|---|---|---|---|
| [BORF](https://arxiv.org/abs/2311.18029) | 2026-10-06，v2 | 官方摘要页仍返回 2023 年 v1 及旧标题；列表与摘要版本显示不一致 | 旧研究超窗，不作最新研究 |
| [Time-o1](https://arxiv.org/abs/2505.17847) | 2026-10-06，v3 | 首发为 2025 年 5 月；名称含 o1 不等于 reasoning 模型 | 超窗排除 |
| [PyDPF](https://arxiv.org/abs/2510.25693) | 2026-10-06，v4 | 链接对应 2025 年 10 月稿件，列表摘要为软件修订 | 不作为窗口内首发；低优先级维护线索 |
| [区域供热评估](https://arxiv.org/abs/2608.20024) | 2026-10-06，v2 | 官方 v1 为 2026-08-20 | 窗口内，按 8 月 20 日排序 |

此板块按关键词且最多保留 100 篇，不能代表全部时间序列研究；光伏研究另行检索。未把旧稿更新日期改写成首次发表日期。

## 7. 检索覆盖与局限

- arXiv：独立关键词检索与摘要/版本历史核验；DailyArXiv：完整 Time Series 板块读取。主要论文以官方来源作为日期和摘要依据。
- GitHub：五组搜索 `timeseries agent`、`"time-series" agent`、`harness "machine learning"`、`automl agent`、`photovoltaic forecasting`，限制创建日为窗口内、按更新时间取前 3 条；当次总命中分别为 6 / 149 / 22 / 95 / 54。另检查论文官方仓库、微软官方项目；不是全量项目审计，也不是 Trending 排名。
- OpenReview / ACL / NeurIPS / ICLR / ICML / KDD / AAAI：定向域名与会议关键词检索。多数结果为旧稿、教程或首发日期不完整；没有把会议年份当作新近首发证据。SimpleTimeBench 论坛页访问受限，已保留不确定性。
- HuggingFace 与机构博客：定向检索，微软新博客回溯到旧版本，未虚报新模型发布。AI HOT 返回 4 条线索，仅 harness 条目相关且经过官方验证。
- 光伏：arXiv、出版社、机构页面交叉检索；日期仅有刊期的论文置入低优先级候选。未找到新论文不等于该领域没有新成果。
- 今日为**周四**，不生成周报。明日若正常运行，应汇总本周实际存在的工作日简报，并明确缺失日期，避免补造日报内容。

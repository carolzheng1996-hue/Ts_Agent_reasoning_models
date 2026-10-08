# 2026-10-08 时间序列 Agent / Reasoning 晨间简报

检索截止：**2026-10-08 09:47（北京时间）**。近三个月窗口：**2026-07-08 至检索截止**，含边界。运行期间系统日期更新，按当前北京时间生成 10 月 8 日文件；今天周四，不生成周报。论文按 arXiv v1 / 出版社首次上线日期在各栏目内由近及远排列，修订日单列；项目按可核实事件日期排列，不把论文日期当作仓库创建日。

本地最新已提交晨报为 9 月 25 日；自动化元信息虽显示上次运行是 10 月 5 日，仓库及记忆中没有对应成果可供去重。因此“本轮补录”仅表示相对可读取历史新增，不声称相对 10 月 5 日全部新增。以下为定向检索重点，非三个月全量文献目录；论文结论均为作者报告，未复现。

## 今日重点

- **建模 Agent：EvoCast** 将开放式架构探索与确定性评估、晋升规则分开，最贴近本仓库的自动建模目标。
- **时序 reasoning：TSHarness + COMMON-TSQA** 分别提供“数值感知—证据状态—推理”的方法与证据干预评测思路。
- **基础模型：ScaleIn、Pythia、UniScale** 分别关注训练尺度偏置、多模态预测表示、模型容量与历史长度分配。
- **功率预测：优先关注天气协变量不确定性和分位数不交叉约束**。负荷研究只作为可迁移线索，不能当作光伏实证。

## 1. 时间序列基础模型最新研究

### 2026-10-06｜反事实辨识衰减与合成数据修复

**来源**：[arXiv 2610.08118](https://arxiv.org/abs/2610.08118)，v1：10 月 6 日；DailyArXiv 补检确认。

**摘要**：在具有精确反事实的受迫系统中，比较 Chronos-2、TimesFM-2.5、TabPFN-TS 与经典系统辨识。作者发现默认协变量接口可能缺少动态响应，或低估干预幅度；合成受迫系统微调可以改善部分问题，但在四个实测系统中的三个上经典方法仍更好，并存在单变量预测能力退化。

**相关性判断**：TSFM / Agent 反事实决策**高**，光伏控制迁移**中**，直接光伏预测证据**低**。预测误差低不等于能够正确比较控制方案。

### 2026-10-05｜ScaleIn：消除训练损失中的尺度偏置

**来源**：[Scale-Invariant Training for Time Series Foundation Models](https://arxiv.org/abs/2610.07324)，v1：10 月 5 日。

**摘要**：输入归一化后先反变换再算损失，会隐式放大高幅值序列的梯度。作者分析在缩放后的目标上计算齐次损失的尺度不变性，并在四种 TSFM 架构上报告改善。

**相关性判断**：基础模型训练 / AutoML 训练协议**高**，多站点不同装机容量的光伏建模**中高（迁移判断）**，显式 reasoning **低**。采用前仍需确认任务是否希望按绝对功率加权。

### 2026-10-05｜协变量不确定性下的负荷预测基准

**来源**：[arXiv 2610.07232](https://arxiv.org/abs/2610.07232)，v1：10 月 5 日。

**摘要**：在三个负荷数据集上比较四种从头训练模型和四种 TSFM，改变未来协变量的可得性与噪声。作者报告 Chronos-2 在协变量可靠时有优势，而严重噪声下 TimesNet 更稳健。

**相关性判断**：TSFM / Agent 选模**高**，光伏天气预报评测迁移**高**，直接光伏实证**低**。应把实测天气、真实预报、扰动天气分开评测，不能据此直接决定光伏模型排名。

### 2026-10-05｜预测控制中的激励需求

**来源**：[Time-series Foundation Models for Predictive Control: The Role of Excitation](https://arxiv.org/abs/2610.06447)，v1：10 月 5 日；作者注明 NeurIPS 2026 TS-LIMITS workshop 接收，非主会论文认定。

**摘要**：以住宅热泵为对象，检查预测器是否恢复不同动作的响应。足够独立的控制激励是上下文辨识的重要条件，微调与平滑只能减轻该需求。

**相关性判断**：TSFM / 决策 Agent **高**，光伏储能控制迁移**中**。不将初步闭环结果扩展为已验证的通用控制能力。

### 2026-10-04｜UniScale：容量、历史长度与预测跨度的统一缩放规律

**来源**：[arXiv 2610.05269](https://arxiv.org/abs/2610.05269)，v1：10 月 4 日；[官方代码](https://github.com/Fifthky/UniScale)。

**摘要**：分析 21 个检查点、23 个数据集—频率任务和 18,768 个实验单元，拟合五参数规律，研究容量与上下文如何共同影响误差。参数交换与激活干预为历史信息的利用提供证据。

**相关性判断**：TSFM / Agent 资源配置**高**，语言 reasoning **中低**。这是经验规律与理论分析，不能把拟合误差理解为实际预测误差，也不能假设适用于所有模型和数据。

### 2026-10-04｜Pythia：多模态时序世界模型

**来源**：[arXiv 2610.05240](https://arxiv.org/abs/2610.05240)，v1：10 月 4 日。

**摘要**：以联合嵌入预测架构学习上下文条件潜在动态，再通过独立概率解码器输出预测，将表示预训练与数值读出分离；在 MUSE 上报告文本事件、实体说明与协变量的互补作用。

**相关性判断**：多模态 TSFM **高**，Agent 预测工具**高**，显式推理链**低**。本轮未验证权重可下载或实际运行；“世界模型”名称不自动意味着因果控制能力。

### 2026-10-03｜QiYao-I：不规则多变量基础模型

**来源**：[arXiv 2610.06936](https://arxiv.org/abs/2610.06936)，v1：10 月 3 日，以原站提交史为准。

**摘要**：将真实时间戳映射到可学习时间流形，在注意力中加入采样结构，并用频率感知变量交互处理异步观测。

**相关性判断**：不规则 TSFM **高**，传感器 / 光伏缺测场景迁移**中高**，Agent / reasoning **低**。未独立核实开源权重与跨域留出协议。

### 2026-08-20｜供热负荷零样本评测，10 月 6 日修订

**来源**：[arXiv 2608.20024](https://arxiv.org/abs/2608.20024)，v1：8 月 20 日，v2：10 月 6 日。

**摘要**：在两个德国供热网络比较 TabPFN-TS、Chronos-2 和训练基线，考察上下文长度、分辨率与概率预测。主实验假设完美天气，并另做回溯天气预报敏感性分析。

**相关性判断**：能源 TSFM **高**，光伏评测设计**中高**。属于窗内修订跟踪，非 10 月新首发；完美天气结果不能等同部署效果。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-04｜TSHarness：解耦数值感知与语义推理

**来源**：[Zero-Shot Time-Series Question Answering via Decoupled Perception and Reasoning](https://arxiv.org/abs/2610.04942)，v1：10 月 4 日。第三方曾标为 10 月 6 日，采用原站日期。

**摘要**：学习式工具选择器在知识记忆引导下提取统计和时序特征，写入结构化 Time-Series Perception State；回答 Agent 读取证据，证据不足时触发再次感知。目标数据集不需要训练或答案反馈。

**相关性判断**：时序 Agent / reasoning / harness **高**，自动训练预测器**低**。目标侧零样本不代表整个系统没有学习式组件；后续应核查工具选择器训练数据与目标测试隔离。

### 2026-10-03｜EvoCast：自主预测架构演化

**来源**：[arXiv 2610.04517](https://arxiv.org/abs/2610.04517)，v1：10 月 3 日；[官方项目](https://github.com/18e0-x/EvoCast)。

**摘要**：先执行基线与机制消融，再结合数据特征、失败记录提出架构修改。LLM 负责假设和代码，确定性程序负责修改边界、标准评估与候选晋升；作者在三个真实预测案例上报告改进。

**相关性判断**：时间序列建模 Agent / AutoML / harness **高**。这是最值得后续工程审计的条目；应检查是否只用验证集晋升、重复试验预算及失败候选是否完整计入。本轮读到公开 README 与目录，未执行实验或验证这些保证。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-05｜COMMON-TSQA：回答正确是否真的使用了序列证据

**来源**：[Do Time-Series QA Systems Read the Time Series? Evidence Use and Reasoning Reliability](https://arxiv.org/abs/2610.05686)，v1：10 月 5 日。

**摘要**：统一已有问答数据的样本和答案格式，评估四个系统，并在固定问题和目标时实施六种输入干预；另审计解释中的事实依据、推理有效性及与答案的一致性。总体准确率可能掩盖逐样本证据使用差异。

**相关性判断**：时序 reasoning / Agent 验证**高**，TSFM 数值预测**中低**。属于评测研究，非新权重发布；推荐作为 TSHarness 等方法的独立证据检查思路，不声称两者已联合验证。

### 2026-10-01｜SimpleTimeBench：零样本基础时序逻辑盲点

**来源**：[Foundations without Fundamentals](https://arxiv.org/abs/2610.02058)，v1：10 月 1 日。

**摘要**：以单调趋势、周期及领先协变量构造单变量和多变量诊断，发现所测 TSFM 仍有简单模式失误；局部微调可能损伤其他模式，真实传感器数据中也存在领先信息利用不足。

**相关性判断**：TSFM reasoning 诊断 / harness 回归测试**高**，语言推理链模型**低**。它检查数值模式能力，不能与链式思维效果混为一谈。

TSHarness（10 月 4 日）已在上一节详述，不重复计数。本轮未核实更新的独立通用时序 reasoning 权重发布。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 时间序列、Agent harness、machine learning 与 AutoML

| 可核实日期与状态 | 来源 | 摘要与相关性判断 |
|---|---|---|
| 2026-10-07 官方博客解读；v1.0 实际开源月份为 2026-08 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) · [Microsoft Research 博客](https://www.microsoft.com/en-us/research/blog/agent-lightning-v1-0-a-3500-line-lightweight-agentic-rl-framework-for-training-agents-with-real-harnesses/) | 让部署用的真实 harness 直接参与强化学习，以代理接口与 Kubernetes 管理执行。**通用 harness / Agent 训练高，时序迁移中**。README 明示 8 月已开源，故只计解读更新，不计 10 月新发布。目录可见实现、测试与示例；未运行，也无直接光伏实验依据。 |
| 2026-10-04 论文公开；仓库创建 / 首次代码发布时间不确定，工程优先级暂降 | [Fifthky/UniScale](https://github.com/Fifthky/UniScale) | 可见 UniScale、results、环境说明和 Apache-2.0 许可。**TSFM 实验 / ML 资源选择高，Agent 中**。已读 README / 目录，未执行；不计已核实新建仓库。 |
| 2026-10-03 论文公开；仓库创建 / 首次代码发布时间不确定，工程优先级暂降 | [18e0-x/EvoCast](https://github.com/18e0-x/EvoCast) | 公开目录含 evocast、ts_benchmark、config、tests；README 提供 CSV 接入、受控研究轮次、恢复与报告流程。**时序 Agent / AutoML / harness 高**。只确认公开实现目录与文档，不保证晋升规则无泄漏或可直接复现。 |

HuggingFace 的 Pythia 名称搜索命中同名语言模型相关数据，未确认本次时序 Pythia 官方权重，不混同收录。GitHub 五组限定创建时间查询均受限流影响，网页 AutoML 检索未补到更强候选；不报告新仓库总数、Trending 排名或星数增长。

### 光伏功率预测

**2026-09-25｜既有项目复查：[S-M-F-X/DC-SDPNet](https://github.com/S-M-F-X/DC-SDPNet)**。日期沿用 9 月 25 日已核实的创建和 release 记录，今日重新打开仓库页；动态多站点协同预测，**光伏预测高，Agent / reasoning 低**。历史源码审查发现默认切分可能使相邻集合的预测目标重叠，且数据附件名与默认路径不一致；本轮未核差分，不能断言风险仍存在或已修复。不计新增项目。本轮没有确认日期明确、比此更新且实现经过检查的光伏新仓库。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-09-29｜场景聚类与单调分位数 LSTM

**来源**：[Wiley / IET Renewable Power Generation](https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/rpg2.70371)，出版社 First published：9 月 29 日；更早预印本未查明。

**摘要**：用 DTW 对每日光伏曲线聚类，构造场景相似日，再将复合分位数回归、不交叉约束与动态分位数调整纳入 LSTM。在澳大利亚 Alice Springs 的 23.4 kW 实测系统上报告点预测和区间可靠性改善。

**相关性判断**：直接光伏概率预测**高**，Agent 风险决策工具**中高**，TSFM / 显式 reasoning **低**。需进一步检查相似日筛选是否只使用预测时刻可获得的信息，以及区间覆盖率的时间外检验。

### 日期不确定｜降优先级候选，不纳入已确认窗内首发清单

- **ACT-DMGN**：[Applied Energy 官方页](https://www.sciencedirect.com/science/article/pii/S030626192600807X)，卷期日期 2026-10-01，首次上线日期未核。以特征增强、聚类及静态 / 动态图处理光伏波动；**光伏预测高，Agent / TSFM 低**。卷期日期不足以证明近三个月首发。
- **GPT-Neo 长期 GHI 预测**：[Solar Energy 官方页](https://doi.org/10.1016/j.solener.2026.114964)，卷期 2026-10，首次上线日未核。研究长期辐照度预测；**光伏上游气象中高，直接电站功率低，LLM 适配中**。不能将辐照度结果称为光伏功率预测效果或推理能力。

光通信方向未核实新的窗内直接光功率预测论文。[2026-09-22 星间光链路研究](https://arxiv.org/abs/2609.25986)讨论偏振信息与能量传输，属于链路分析而非未来功率预测，低相关而不纳主清单。[光功率多 Agent 优化](https://arxiv.org/abs/2606.05795)首发 6 月 4 日，已超窗且任务为优化。

## 6. DailyArXiv 必查结论与日期过滤

已完整下载并解析 [master 原始 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md)，共 432,957 字节；**Last update: 2026-10-08**，完整 **Time Series** 栏目包含 **91 条带日期记录**，最新列表日为 **10 月 6 日**。[GitHub 渲染页](https://github.com/zezhishao/DailyArXiv)交叉确认。首次下载仅获得部分内容，统计采用重试后的完整文件，不将部分行数当总数。

- **有窗内高度相关论文，已补充**：反事实辨识、ScaleIn、协变量不确定性负荷基准、预测控制激励、COMMON-TSQA、UniScale、Pythia、TSHarness、EvoCast、QiYao-I，以及供热负荷评测修订。它们均已回 arXiv 核查提交日期。
- **修订日不等于首发日**：供热负荷论文列表为 10 月 6 日，v1 为 8 月 20 日；窗内保留，但按 v1 排序，不计十月首发。
- **超窗降优先级**：[Time-o1](https://arxiv.org/abs/2505.17847)列表为 10 月 6 日 v3，实际 v1 为 **2025-05-23**；这是损失函数研究，不因名称含 o1 就称 reasoning 模型。[BORF](https://arxiv.org/abs/2311.18029)列表为 10 月 6 日 v2，实际 v1 为 **2023-11-29**。两者排除主清单。
- **相近主题但非本日重点**：列表另含异常检测、分类和基础设施工作，本轮不将所有传统时序方法都升级为 Agent / reasoning 成果；DailyArXiv 是滚动关键词列表，不是完整覆盖证明。

## 7. 检索记录与后续重点

- **arXiv**：时序基础模型、建模 Agent、reasoning、光伏 / 光通信定向检索，所列主条目检查原站摘要与版本史；不声称扫描全部学科新稿。
- **会议来源**：定向查询 OpenReview、ACL、PMLR / ICML、NeurIPS、KDD、AAAI。ACL 的 [ZARA](https://aclanthology.org/2026.acl-long.684/)仅确认 2026 年 7 月会议月份，未核最早公开日，边界不确定，降优先级不纳首发清单；ICLR / EACL 较早结果不纳入。其他域名未获得可增补且日期核实的新条目，不代表没有相关论文。
- **GitHub / HuggingFace / 机构博客**：五组 GitHub 查询为 time-series agent、timeseries agent、automl agent、harness machine-learning、photovoltaic forecasting，创建窗口限定 7 月 8 日至 10 月 8 日；接口限流后转原仓库页及网页搜索。机构线索通过 AI HOT 技能获得，并回 Microsoft 官方博客核查；AI HOT 聚合摘要不作为独立证据。
- **出版社日期过滤**：[Nature Communications 光伏文章](https://www.nature.com/articles/s41467-026-73817-3)官方 Published 为 6 月 12 日，虽 Version of record 为 7 月 31 日，仍按首次日期排除；不使用卷期或后续版本日期重新制造首发。
- **下次优先**：审计 EvoCast 候选晋升与测试集隔离；查 TSHarness 工具选择器训练来源；把 COMMON-TSQA 的证据干预与 SimpleTimeBench 的数值模式检查分开设计；光伏实验优先核天气可得性、相似日筛选和分位数覆盖。
- **仓库交付范围**：已加载指定 SSH key 并执行 `git pull --ff-only`，返回已是最新。本次仅新增本晨报；已有 9 月 8 日暂存修改、index.md 和其他未跟踪用户文件保持原状。

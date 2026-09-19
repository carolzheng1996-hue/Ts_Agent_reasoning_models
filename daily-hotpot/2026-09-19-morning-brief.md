# 2026-09-19 时间序列研究晨间简报

检索截止：**2026-09-19 21:19 CST（Asia/Shanghai）**。本次为晚间执行的晨报任务，保留约定文件名。窗口：**2026-06-19 至检索时点**，含起始日；论文采用官方首发日期，项目采用创建日期，原始日期按 UTC。增量基线为昨日含补充版（80b0d86），并对历史简报关键词去重。今天周六，不更新周报。

## 今日重点

- **新增收录 2 篇论文、3 个 GitHub 项目候选**，均在窗口内；“新增收录”不等于今天首发。Agent 与显式 reasoning 暂未确认更晚的高相关新论文，保留 TuiML、WaveTLM 两条主线。
- 优先阅读基础模型的 **前视偏差实证研究**：训练信息越过预测起点属于信息违规，但不必然使分数虚高；应将训练截止时间合规与实测预测收益分别审计。
- 光伏方向优先关注 **集成组件是否真正增益**，以及 MDG-Mamba 的梯度增强与趋势/波动分解代码。后者已找到对应的 `Mymodelv2.py`；没有独立核验论文发表日期或性能数字。
- 新 AutoML 项目有实现，但源码使用随机划分，并以测试指标选模型；其 Verifier 也不能当作防泄漏检查。适合作为接口参考，暂不直接用于时序研究结论。

## 1. 时间序列基础模型最新研究

### [2026-09-17] Does Training on Future Data Pay? — 新增收录，优先阅读

- **日期与来源**：v1 **2026-09-17 15:19:30 UTC**；[论文与版本历史](https://arxiv.org/abs/2609.20554)。
- **摘要**：比较五组金融时序基础模型的年度训练版本，在 14 个股票市场、四种预测长度上，对照与预测起点一致的 point-in-time（PIT）基准。美国训练设置中，使用预测起点之后信息的版本在 20 组模型/预测长度组合中的 18 组产生更高均方误差；全球和因子增强设置结果更混合。
- **相关性**：**TSFM 评测高，Agent 实验审计 / harness 高，显式 reasoning 低**。前视违规与分数膨胀并非同一命题，不能从此次结果推导“使用未来信息可以接受”；需要同时记录模型训练截止、数据起报可得性及真实留出误差。
- **核验边界**：已核官方摘要、日期，未复现、未审核数据和权重。金融实验不能直接外推到光伏。该文归于 econ.GN，仅扫描 cs.LG 会漏检。

### [2026-09-17] QUALS — 持续跟踪

- **日期与来源**：v1 **2026-09-17 12:47:17 UTC**；[官方论文](https://arxiv.org/abs/2609.20156)。
- **摘要**：量化混合语料模式，并按可学习性校准采样权重，缓解简单和复杂模式优化不均衡；作者报告在较低预算下改善零样本预测。
- **相关性**：**TSFM 数据效率高，Agent 数据选择中高，显式 reasoning 低**。适合作为已有骨干的预训练数据策略，而非另一个已发布模型权重。
- **核验边界**：今天重核摘要和日期，昨日已收录，不重复计新增。尚需验证同预算对照、语料去重和测试污染。

## 2. 时间序列建模 Agent 最新研究

### [2026-09-16] TuiML: Machine Learning for AI Agents — 持续跟踪

- **日期与来源**：v1 **2026-09-16 01:14:25 UTC**；[官方论文](https://arxiv.org/abs/2609.17984)、[项目与文档](https://tuiml.ai/)、[代码](https://github.com/tuiml/tuiml)。
- **摘要**：算法通过机器可读元数据和参数模式描述能力，使 Agent 能发现、组合和验证 ML 工作流；统一 MCP、Python、CLI 等入口，并保留种子、调用轨迹和实验状态。
- **相关性**：**时序建模 Agent / AutoML 工具层高，harness 高，TSFM 本体低**。主要价值是实验接口及可复核状态，不是新预测骨干。
- **核验边界**：本轮核摘要与日期；昨日源码审查不等于今日运行验证。不能因提供时间划分器就认为所有调用自动防止泄漏。仓库创建早于窗口，仅作为论文实现链接，不计新建项目。

## 3. 时间序列 reasoning 模型最新研究

### [2026-09-16] WaveTLM — 持续跟踪，执行契约方向

- **日期与来源**：v1 **2026-09-16 15:21:39 UTC**；[官方论文](https://arxiv.org/abs/2609.18812)。
- **摘要**：将语言请求编译为带类型的任务状态，由执行器产生数值序列、合法标签或结构化记录，覆盖预测、插补、分类、异常和波形任务。
- **相关性**：**可执行 reasoning / Agent 输出验证高，TSFM 中**。应分别验收输出形状、时间/通道对齐和预测误差，不能将契约通过率视为预测准确率或推理正确率。
- **发布状态**：摘要仍称代码、构造脚本和 ExecTS-QA 将在发表后公开。本轮未确认新代码发布，也未确认更晚的高相关显式 reasoning 首发。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

### 4.1 时间序列（Agent、harness、machine learning、AutoML）

#### [2026-09-18] tiny-model-lab — 新增候选，基线与预算验收 harness

- **日期与来源**：创建 **2026-09-18 21:18:26 UTC**，推送 **2026-09-19 11:07:21 UTC**；[仓库](https://github.com/melissa-pereira-deel/tiny-model-lab)、[元数据](https://api.github.com/repos/melissa-pereira-deel/tiny-model-lab)。
- **摘要**：围绕小模型研究、训练和部署，要求每次实验命名基线，并检查模型文件大小、延迟、连续无提升次数与总时间预算。README 明确项目早期，两个示例均未超越基线，没有模型获准晋级。
- **相关性**：**ML Agent / harness 高，时序 AutoML 方法迁移中高，直接 TSFM / 光伏 / reasoning 模型低**。可借鉴“没有改善也产出可复核结论”的停止机制，迁移后仍需另加滚动时序验证。
- **核验**：已读 README、文件树和 [gates.py](https://github.com/melissa-pereira-deel/tiny-model-lab/blob/HEAD/harness/gates.py)，确认严格优于基线的比较及预算门槛。底层函数支持误差越低越好，但所查 `gate_run` 未传入方向参数，默认越高越好；用于 MAE/RMSE 前需核对完整调用。未运行，README 的测试数量及模型导出结果未独立复验。

#### [2026-09-18] MultiAgent-Data-Analyst — 新增候选，降低优先级

- **日期与来源**：创建 **2026-09-18 13:07:52 UTC**，推送 **14:32:52 UTC**；[仓库](https://github.com/Lakshanyakrishna/MultiAgent-Data-Analyst)、[元数据](https://api.github.com/repos/Lakshanyakrishna/MultiAgent-Data-Analyst)。
- **摘要**：串联数据概况、EDA、建模、验证、Notebook 与解释，带 Agent 通信和状态存储文件，已有非空实现。
- **相关性**：**通用 AutoML / Agent 工作流中高，直接时序低，TSFM / 显式 reasoning 低**。可参考模块接口，尚不适合直接证明时序预测收益。
- **源码发现**：[model_tools.py](https://github.com/Lakshanyakrishna/MultiAgent-Data-Analyst/blob/HEAD/src/tools/model_tools.py)调用未指定 `shuffle=False` 的 `train_test_split`，并以同一测试集指标挑最佳模型；[verifier_agent.py](https://github.com/Lakshanyakrishna/MultiAgent-Data-Analyst/blob/HEAD/src/agents/verifier_agent.py)只是指标阈值标签，还读取 `f1`，而建模模块返回 `f1_score`。未见这两个文件实施时间隔离或独立最终测试。未运行部署，未独立核验 Gemini 链路；README 的“验证”不代表完成泄漏审计。

### 4.2 光伏功率预测

#### [2026-09-18] Yingcode-Lab/MDG-Mamba — 新增候选，有对应模型源码

- **日期与来源**：创建 **2026-09-18 15:36:06 UTC**，推送 **2026-09-19 02:36:37 UTC**；[仓库](https://github.com/Yingcode-Lab/MDG-Mamba)、[元数据](https://api.github.com/repos/Yingcode-Lab/MDG-Mamba)。论文首发日期**不确定**，本条只计新仓库。
- **摘要**：变量加权后加入一阶时间差分，将表示拆为趋势与波动；波动经 Mamba 和膨胀卷积细化，趋势另行映射，再融合输出光伏功率。
- **相关性**：**光伏功率 / 时序预测高，Agent 候选工具中高，基础模型 / 显式 reasoning 低**。这是任务模型实现，未见足以认定为基础模型的大规模跨域预训练证据。
- **核验**：README、文件树、三个模型文件均已查，对应描述的是 [Mymodelv2.py](https://github.com/Yingcode-Lab/MDG-Mamba/blob/HEAD/models/Mymodelv2.py)，不是凭文件名选择 v3。树中有训练脚本和 APS-PV 数据文件；[数据加载器](https://github.com/Yingcode-Lab/MDG-Mamba/blob/HEAD/data_provider/data_loader.py)的 Custom 路径按行划分 70%/10%/20%，缩放器仅拟合训练片段，但时间排序、实际运行配置和天气可得性未全面核验。
- **性能边界**：仓库描述声称平均 MAE 改善约 8.5%，尚未独立核验论文、完整基线和实验，不作为推荐依据；未安装依赖或训练。优先检查功率突变时段、季节留出和跨电站测试。

GitHub / HF 去重：IBM 的 [9 月 9 日官方 HF 文章](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)介绍 PatchTST-FM-r2 的零样本、概率预测和缺失值能力，TSFM 相关性高；此前已收录，今天仅重核文章，未确认新权重，不另计项目。其他头部命中包括个人主页、第三方 API 档案和游戏 harness，未纳入精选。

## 5. 光伏功率预测最新研究

### [2026-09-14] Ensemble Complexity in Photovoltaic Forecasting — 新增收录，评测优先

- **日期与来源**：v1 **2026-09-14 05:09:03 UTC**；[官方论文与版本历史](https://arxiv.org/abs/2609.15049)。
- **摘要**：在 GEFCom2014 与三个公共数据集上，用按时间划分、三随机种子和匹配消融，检查异质集成组件的边际价值。在回溯 ERA5 辅助设置下，静态融合对三个数据集的提升经多重比较校正后仅 OPSD 仍获支持；天气门控没有一致额外收益。另一个已先行查看过的 15 分钟案例中，替换成员降低误差但使推理变慢。
- **相关性**：**光伏功率预测 / 时序评测高，Agent 自动集成和预算控制高，TSFM / 显式 reasoning 低**。值得让 AutoML 同时报告单组件增益、计算代价及统计不确定性，而不只比较最终平均误差。
- **核验边界**：已核官方摘要和首发，未复现。回溯 ERA5 不等于真实预测起点可用的天气输入；作者明确披露测试集复用限制，不能把探索性消融当完全独立确认结果。

**光通信光功率补检**：未确认窗口内新的直接功率预测首发；[多 Agent 光功率优化](https://arxiv.org/abs/2606.05795)首发为 6 月 4 日，早于窗口，且优化不等于预测，排除主清单。光通信与光伏发电分别判断相关性。

## 6. DailyArXiv 补检结论

已读取 [官方仓库](https://github.com/zezhishao/DailyArXiv)及 [master 原始 README](https://raw.githubusercontent.com/zezhishao/DailyArXiv/master/README.md) 的完整 **Time Series** 部分。README 明确小节对应检索关键词；本轮无需假设存在名为 timeseries 的分支。

- README **Last update: 2026-09-18**；实际提取 **77 条带日期记录**，最新行日期 **2026-09-16**。聚合页更新时间不作为论文首发日期。
- **相关且在窗口内**：WaveTLM、TuiML 已补入第 2–3 栏持续跟踪；TabPFN-3.5、Peak-Aware 已在昨日收录，本次无新增证据，不重复展开。
- **日期不同但仍在窗口内**：[Which Histories Matter](https://arxiv.org/abs/2608.23221) 的 README 行日期为 9 月 16 日，官方 v1 为 **8 月 24 日**、v2 为 9 月 16 日。其历史检索可为 Agent 记忆选择服务，相关性高；已于昨日收录，按 v1 排序，本次未读差分，不归为新首发。
- **超窗并降级排除**：[TopCap](https://arxiv.org/abs/2311.15210) 首发 **2023-11-26**、[HALT](https://arxiv.org/abs/2602.02888) 首发 **2026-02-02**，README 均显示本次修订 **2026-09-16**。前者为时序拓扑特征，后者将 token 概率序列用于幻觉检测，均有相邻价值，但不以修订日期冒充近三个月新研究。
- 今日新增的 **前视偏差论文、光伏集成复杂度论文**以及已知 QUALS 均未出现在该小节；因此独立 arXiv 补检仍必要。

## 7. 检索覆盖与局限

| 来源 | 本轮实际检查 | 结论与边界 |
|---|---|---|
| [arXiv](https://arxiv.org/) | 时序 foundation / agent / reasoning、光伏及光功率定向搜索，候选摘要与版本历史，cs.LG recent | 新增两篇；大分页请求失败，未声称遍历 9 月 18 日所有公告或全部学科 |
| [GitHub Search](https://github.com/search?type=repositories) | 创建窗口 6 月 19 日至 9 月 19 日，按 updated 降序，五组各取前 4 | time-series agent / timeseries agent / automl agent / harness machine-learning / photovoltaic forecasting 总数分别 155 / 9 / 103 / 137 / 54；只是检索头部，不是 Trending 排名或全量审计 |
| GitHub 候选核验 | 四个仓库 README 与树，精选三个进一步抽查源码 | 第四个 pv-forecasting-ems-thesis 有 notebooks 与预测产物，但未读 notebook 评估协议，不提升为本日重点 |
| [OpenReview](https://openreview.net/) / ICLR | 时序 reasoning 定向搜索 | 命中主要为更早投稿或既有会议论文，未确认新首发；会议年份不能当精确发布日期 |
| [ACL](https://aclanthology.org/)、[PMLR](https://proceedings.mlr.press/)、[NeurIPS](https://neurips.cc/)、[KDD](https://kdd2026.kdd.org/)、[AAAI](https://ojs.aaai.org/) | 官方域名组合定向搜索 | 未逐站遍历目录。ODTQA-FoRe 虽为 ACL 7 月论文，[arXiv 首发](https://arxiv.org/abs/2606.02433)为 6 月 1 日，排除；数值检索 Agent 的 ACL 页仅核到 7 月，最早公开日期不确定，降级留待核验 |
| [HF / IBM 官方文章](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series) | 时序发布搜索、9 月 9 日文章原页 | 已知发布，不因今日爬取再计新模型；未全量扫描 HF 模型提交历史 |
| [AI HOT](https://aihot.virxact.com) | 近七天 time series 精选线索 | 返回的芯片贸易分析与任务不直接相关，排除；不据此推断三个月无成果 |

本报完成日期核验与有限源码审查，未运行外部项目或复现论文。优先后续工作：建立 PIT 模型版本清单；对光伏集成做真实天气起报条件下的消融；核验 MDG-Mamba 运行配置；将 harness 的误差方向、时序划分和独立最终测试纳入验收。

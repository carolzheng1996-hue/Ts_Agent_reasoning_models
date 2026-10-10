# 时间序列 Agent / Reasoning 晨间简报｜2026-10-10

- 检索时间：2026-10-10 15:31–15:35，Asia/Shanghai；本次为当日自动化执行版。
- 三个月窗口：**2026-07-10 至 2026-10-10（含边界）**。论文按已核实首发日排序，修订日另列；期刊在线发表日与更早预印本分开说明。日期不确定条目列末尾、降优先级。
- 相比 10 月 9 日晨报：新增收录一篇 10 月 8 日公开的净负荷概率预测预印本；重新确认 PI-SDNN 期刊日期及 QEFSF 的同期估计定位。未确认 10 月 9–10 日更晚的直接 TSFM / 时序 Agent / reasoning 新首发，也未确认新建 GitHub 项目。以下保留少量窗内重点，明确区分持续跟踪与新增发现。
- 今天为周六，不更新周报。只提交今日晨报，保留用户已有暂存与未跟踪文件。

## 1. 时间序列基础模型最新研究

### 2026-10-07｜WxFM-XL｜持续跟踪，今日核验

- **来源**：[arXiv 官方摘要及版本史](https://arxiv.org/abs/2610.10057)，v1 为 10 月 7 日；DailyArXiv Time Series 收录。
- **摘要**：把单变量基础模型扩展到多站点天气预测，用跨站点误差相关先验图与空间相关图动态融合，处理站点位置与基础模型误差差异。
- **相关性**：**TSFM 高，光伏上游气象中高，Agent / 显式 reasoning 低**。尚不能把天气实验当作光伏功率提升证据；误差图应仅使用训练期或当时已揭示的误差。

## 2. 时间序列建模 Agent 最新研究

### 2026-10-04｜TSHarness｜持续跟踪，今日核验

- **来源**：[Zero-Shot Time-Series Question Answering via Decoupled Perception and Reasoning](https://arxiv.org/abs/2610.04942)，官方 v1 为 10 月 4 日。
- **摘要**：学习式工具选择器抽取数值特征并生成结构化感知状态，回答 Agent 据此推理；证据不足时触发再次感知，支持跨数据集零样本问答。
- **相关性**：**时序 Agent / harness / reasoning 高，自动训练预测器低**。目标侧无需训练不等于工具选择器未经训练；复现应检查选择器数据与最终测试集隔离。

### 2026-10-03｜EvoCast｜持续跟踪，今日核验

- **来源**：[官方论文](https://arxiv.org/abs/2610.04517) · [作者代码](https://github.com/18e0-x/EvoCast)，官方论文 v1 为 10 月 3 日；该日期不是仓库创建日。
- **摘要**：以可运行基线、消融和失败记录为依据，由 LLM 提出并实现预测架构修改，确定性程序约束实验、评价和候选晋升。
- **相关性**：**时序建模 Agent / AutoML / harness 高**。适合作为自主实验流程参考；本次只核验论文摘要和日期，未运行代码，也未完成晋升门槛与最终测试隔离审计。

## 3. 时间序列 reasoning 模型最新研究

### 2026-10-05｜COMMON-TSQA｜持续跟踪，今日核验

- **来源**：[Do Time-Series QA Systems Read the Time Series?](https://arxiv.org/abs/2610.05686)，官方 v1 为 10 月 5 日，DailyArXiv 收录。
- **摘要**：统一已有时序问答评测接口，用六类输入干预检查系统是否使用数值证据，并区分解释中的事实依据、推理有效性和答案一致性。
- **相关性**：**reasoning / Agent 评测高，直接光伏预测低**。这是可靠性评测，不是新推理权重；可用于验证答案正确是否只是问题文本捷径。

### 2026-09-30｜OpenTSLM TeeMoE｜持续跟踪；10 月 7 日 v2

- **来源**：[官方论文与版本史](https://arxiv.org/abs/2609.40265) · [GitHub](https://github.com/OpenTSLM/OpenTSLM-TeeMoE) · [HuggingFace 模型卡](https://huggingface.co/OpenTSLM/TeeMoE)。今日核验 v1 为 9 月 30 日、v2 为 10 月 7 日。
- **摘要**：共享骨干上训练预测聚合、原生预测、时序分析三个低秩专家，再由控制器混合冻结的专家参数更新，兼顾数值预测和语言分析。
- **相关性**：**TSFM / reasoning 高，Agent 预测工具高**。未下载或执行权重；没有比较版本差分，不能把修订日当成新功能或新模型首发日。GitHub 与 HF 合并为一项。

## 4. GitHub 和 HuggingFace 上值得跟踪的新项目

本轮没有核实新的窗内创建事件。GitHub 搜索网页与官方 README 可部分读取，仓库创建日期接口及限定窗口搜索接口返回错误；不使用抓取时间作为创建日，不宣称完成 Trending 或 GitHub 全量扫描。

### 时间序列、harness、machine learning 与 AutoML

- **2026-09-30 论文首发｜TeeMoE 配套代码与模型**：见第 3 节，仓库首创日期不确定；这是已有项目跟踪，不另算新仓库。
- **日期不确定｜低优先级持续观察：[Z-Sigma/AutoLab](https://github.com/Z-Sigma/AutoLab)**。README 描述自主 ML 实验、调试、实验日志与排序报告，同时保留固定线性流水线模式。**通用 ML Agent / harness 高，时序预测未证实**。今日重新读取说明，但创建日仍未确认，不能计入已确认窗内新项目；未审计训练切分或执行代码。

### 光伏功率预测

- **2026-10-08 创建（继承昨日 API 记录，本轮未重新核验创建日）｜[QEFSF](https://github.com/SunawarKhan/QEFSF-for-Solar-Photovoltaic-Generation-Forecasting)**。今日官方 README 确认以带基数约束的 QUBO 做特征选择，比较经典、量子启发和模拟 QAOA；修订说明将任务明确定位为 **contemporaneous estimation（同期估计）**。**光伏特征工程 / AutoML 中高，未来功率预测证据不足，Agent / TSFM 低**。README 的防泄漏声明尚不能代替完整代码审计；昨日已发现训练期复算仍需核查候选集合来源。本轮未复跑，不把量子模拟或同期回归精度解释成实际预测优势。低优先级持续跟踪。
- **日期不确定｜低优先级线索：[PV_ELM_pred](https://github.com/cyrilvoyant/PV_ELM_pred)**。官方说明比较多站点光伏的 persistence、BLEND、AR-OLS 与 ELM，采用相对 persistence 的 skill score。**光伏基线 / 评测中高，Agent / foundation model 低**。README 提到 2026 年 7 月维护，但未确认具体日或首次发布日，不能判断是否在 7 月 10 日之后；不计已确认新项目，未运行。

## 5. 光功率 / 光伏功率预测最新研究

### 2026-10-08｜分布式光伏与天气不确定性下的多跨度净负荷概率预测｜新增收录，中低优先级

- **来源**：[Preprints.org 官方 v1](https://www.preprints.org/manuscript/202610.0544)。提交为 10 月 5 日，**公开 Posted 为 10 月 8 日**；本简报按公开日排序，尚未经同行评审。
- **摘要**：在模拟住宅需求、光伏发电与天气的合成环境中，比较统计模型、梯度提升、循环网络与混合集成，输出 1、6、12、24 小时分位数预测；使用 pinball loss、覆盖率和区间宽度等指标。
- **相关性**：**光伏并网净负荷 / 概率预测中高，直接电站功率预测中，Agent / TSFM / reasoning 低**。仅模拟证据，不能把结果推广为真实多电站验证；价值在多跨度风险评测设计。不是纯光伏发电预测论文。

### 2026-10-08｜决策层多模态融合超短期光伏预测｜持续跟踪

- **来源**：[Energy Engineering 官方页](https://www.techscience.com/energy/online/detail/28550)，明确在线发表 10 月 8 日；更早预印本不确定。
- **摘要**：一路先预测云图再回归功率，另一路用多源气象与 CatBoost 预测功率，最后固定权重融合。
- **相关性**：**直接光伏预测高，TSFM / Agent / reasoning 低**。融合决策不等于 Agent 推理；建议核查天气输入可得时间及融合权重的选择集。

### 2026-10-01｜PI-SDNN：物理约束稀疏网络与快速频率响应｜期刊日期重新确认

- **来源**：[Scientific Reports 官方页](https://www.nature.com/articles/s41598-026-74064-8)，Published 01 October 2026；更早预印本未确认，首次公开新颖性降低优先级。
- **摘要**：以物理约束和稀疏深度网络进行太阳能功率预测，面向辅助服务中的快速频率响应需求。
- **相关性**：**光功率预测高，电网控制中高，Agent / TSFM / 显式 reasoning 低**。本轮确认期刊元数据与摘要，未检验控制闭环、推理延迟或跨站点验证，不采用未经复现的效果数字。

### 日期不确定｜低优先级补检线索，不计已确认窗内首发

- [Hybrid photovoltaic power forecasting by combining physical and machine learning models](https://doi.org/10.1016/j.solener.2026.114951)：出版社摘要讨论物理与 ML 混合的确定性和概率预测，并指出所选 ML 模型对表现影响较大。**光伏高，AutoML 选模中高，Agent / reasoning 低**。仅核实 2026 年 10 月卷期，首次上线日不确定，不能按 10 月 1 日排序。
- [Can large language models predict solar irradiance in the long term?](https://doi.org/10.1016/j.solener.2026.114964)：出版社摘要介绍 GPT-Neo 长期 GHI 预测、多城市比较。**光伏上游辐照中高，LLM 预测中高，显式 reasoning 未证实**。同样只有十月卷期；不是直接电站功率预测，待查首次上线日和天气变量可得性。

## 6. DailyArXiv 必查结论

本次成功读取 [DailyArXiv 官方 README 的 Time Series 栏目](https://github.com/zezhishao/DailyArXiv#time-series)。页面显示 **Last update: 2026-10-09**，顶部论文行日期仍为 **2026-10-07**；本次未重新统计整个栏目条目数，不沿用昨日 89 条作为新测量。

- **确认有相关且窗内的论文**：WxFM-XL、COMMON-TSQA、TeeMoE，已在第 1、3 节补入并回查 arXiv 日期。TeeMoE 列表日期 10 月 7 日是 v2，实际首发 9 月 30 日；保留窗内但不计今日首发。
- **相关但超窗、降优先级并排除主清单**：[STOIC / In-Context Residual Calibration](https://arxiv.org/abs/2606.31804) 列表日期 10 月 7 日，对应 v2；官方 v1 为 **6 月 30 日**。它用残差校准处理图上的能源时序不确定性，**TSFM 校准 / 能源风险中高，直接光伏未证实**，修订不能重置三个月窗口。
- 昨日已核验的电价 TSFM 评测（7 月 2 日 v1）和 DiTS（2 月 6 日 v1）继续不进主清单；今日只重核栏目仍出现相关记录，未重复审阅其完整版本史。
- README 更新时间只是聚合器状态，不能用来证明 10 月 8–10 日没有新论文。本次直接 arXiv 检索未获得可确认的更晚核心条目。

## 7. 检索覆盖与限制

- **arXiv**：日期关键词检索与 DailyArXiv 交叉发现，再读 WxFM-XL、TSHarness、EvoCast、COMMON-TSQA、TeeMoE、STOIC 官方摘要与版本史；未读完整论文或复现。
- **OpenReview / ICLR / NeurIPS**：定向搜索命中较早 reasoning 论文和 TSALM workshop 页面，没有确认新增窗内首发。不会把 ICLR 2026 会议年份当作发表日期。
- **ACL / ICML**：[CTRL](https://aclanthology.org/2026.findings-acl.1104/) 使用 LLM 控制信号修正冻结预测骨干，**时序 Agent 高**，但仅确认会议月份、更早公开日不确定，暂不进主清单；[Zeus 的 PMLR 页](https://proceedings.mlr.press/v306/fu26n.html) 给出 7 月 6–11 日会议区间，无法据此确定相对本轮边界的首发日，降级排除。
- **AAAI / KDD**：定向检索未得到可确认的新条目；AAAI 的 [M3Time](https://ojs.aaai.org/index.php/AAAI/article/view/39383) 官方为 3 月 14 日，明确超窗。未全量审阅会议目录。
- **GitHub / HF**：核对官方 README 与 TeeMoE 模型卡；GitHub API 失败，部分仓库页面读取失败，未确认新建项目或实时 Trending 名次。无代码执行、权重下载或真实性背书。
- **光伏期刊 / Preprints.org**：区分公开日、投稿日和卷期日；合成净负荷论文单列实验限制。未核实新的直接光通信功率预测研究，不把光功率优化当预测。
- **AI HOT 辅助线索**：按技能尝试最近七日 time series 查询，但本地 DNS 解析失败，未取得数据；不用于支持任何新增结论。

## 8. 交付状态

运行前已执行指定 ssh-add 与 git pull --ff-only：前者报 SSH agent 访问不允许，后者报 GitHub SSH 22 端口不允许，未能同步远端。昨天本地待推送提交为 24d2e88。今日晨报已单独提交；实际执行 git push origin HEAD:main 再次因 GitHub SSH 22 端口不允许而失败，本地提交待网络恢复后推送；不改写无关文件、不绕过网络限制。

优先阅读第 5 节新增净负荷论文的合成数据限制；工程工作继续聚焦 EvoCast 的验证/测试边界、TSHarness 的选择器训练隔离，以及光伏任务是否真正使用预测时刻可得的未来天气输入。

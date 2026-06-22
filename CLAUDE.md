# CLAUDE.md

本项目是一个论文解读项目，重点整理 reasoning、agent、time-series reasoning 相关论文。用户要求解读一篇论文时，默认不是只做摘要，而是从论文 TeX 源码出发，生成带公式解释、实验结果、数据集信息和可浏览 HTML 的中文深度解读。

## 默认工作流

当用户要求“解读/阅读/整理/分析”某篇论文时，按以下流程自动执行。

1. 确认论文来源
   - 如果用户只给出论文标题，先检索官方来源。
   - 优先使用官方链接：arXiv、会议官网、OpenReview、作者项目页、官方 GitHub、官方 Hugging Face。
   - 如果论文在 arXiv 上，下载 TeX 源码：

     ```text
     https://arxiv.org/e-print/<arxiv_id>
     ```

   - 同时记录论文页、PDF、TeX、代码仓库、Hugging Face 或项目主页链接；没有官方链接时要明确说明未找到。

2. 建立论文源码目录
   - 在项目根目录下创建一个以论文名字命名的目录，使用 ASCII-safe 的下划线形式，例如：

     ```text
     TimeART_Towards_Agentic_Time_Series_Reasoning_via_Tool_Augmentation/
     ```

   - 将该论文的所有 TeX 相关文件放入该目录，包括：
     - arXiv 原始源码压缩包
     - 主 `.tex` 文件
     - section/appendix `.tex` 文件
     - `.bib` / `.bbl` 文献文件
     - `.sty` / `.cls` 样式文件
     - figures、tables、assets 等资源
     - 下载来源和元信息文件
   - 不要把论文源码散落在项目根目录。
   - 生成的论文解读报告保留在项目根目录，除非用户另有要求。

3. 使用项目论文解读 skill
   - 解读论文时必须使用本项目中的 skill：

     ```text
     paper-tex-literature-review/SKILL.md
     ```

   - 先完整阅读该 `SKILL.md`，再根据其中的结构、写作要求、HTML 模板和校验清单生成报告。
   - 阅读依据应以 TeX 源码为主，不只依赖 abstract、网页摘要或 PDF 截图。

4. 生成中文深度解读
   - 为每篇论文输出两个文件：

     ```text
     <ShortPaperName>_paper_reading.md
     <ShortPaperName>_paper_reading.html
     ```

   - 解读内容至少包含：
     - 论文标题、作者、机构、时间、来源
     - arXiv/PDF/TeX/代码/Hugging Face/项目页链接
     - 一句话总结
     - 背景与研究动机
     - 问题定义与任务设置
     - 方法框架或算法流程
     - 关键公式、符号解释和直觉说明
     - 如果是 agent 论文，说明 state、workspace、policy/model、action/tool space、rollout/trajectory、memory/retrieval、training/update/evolution 等组件
     - 实验设置、数据集、baseline、指标
     - 主要结果，尽量写出论文中的实际数值
     - 消融实验、案例分析
     - 贡献、局限性和实践启发

5. 更新论文索引
   - 每完成一篇论文解读后，更新：

     ```text
     index.md
     ```

   - 索引中应包含：
     - 论文标题
     - 方法或系统名
     - 论文链接/PDF 链接
     - TeX 源码目录
     - Markdown 解读链接
     - HTML 解读链接
     - 官方代码仓库链接，如果有
     - 官方 Hugging Face 链接，如果有

6. 更新公开数据集汇总
   - 如果论文使用了公开数据集、benchmark 或作者发布的数据集，更新：

     ```text
     reasoning_datasets.md
     reasoning_datasets.html
     ```

   - 每个数据集至少说明：
     - 被哪篇论文使用
     - 在论文中的用途：训练、评测、轨迹构造、工具验证、baseline 对比等
     - 官方下载链接或官方项目链接
     - GitHub/Hugging Face 链接，如果存在
     - 数据集组成：规模、领域、模态、时间跨度、任务类别、字段/schema
     - 一到两个代表性数据样例
   - 如果论文只使用私有数据，明确标注“论文未公开下载链接”，不要把非官方镜像写成官方来源。

## 文件命名约定

- 论文 TeX 源码目录：

  ```text
  <Paper_Title_In_ASCII_Safe_Form>/
  ```

- 论文解读文件：

  ```text
  <ShortPaperName>_paper_reading.md
  <ShortPaperName>_paper_reading.html
  ```

- 项目级索引与数据集汇总：

  ```text
  index.md
  reasoning_datasets.md
  reasoning_datasets.html
  ```

## HTML 要求

- HTML 必须是可独立打开的完整文件。
- 使用 `lang="zh-CN"`。
- 需要支持公式渲染，加载 MathJax v3。
- 风格遵循项目现有 TimeClaw/TimeART 解读页面。
- 公式片段不能破坏 Markdown 或 HTML 渲染。

## 完成前校验

完成每篇论文解读前，检查：

- 论文 TeX 目录存在，且包含主 TeX、参考文献、章节、图表和原始源码包。
- Markdown 与 HTML 解读文件都在项目根目录。
- HTML 可独立打开，包含 `lang="zh-CN"` 和 MathJax v3。
- `index.md` 已加入该论文。
- 如果论文涉及公开数据集，`reasoning_datasets.md` 和 `reasoning_datasets.html` 已同步更新。
- 所有外部链接区分官方链接、论文内链接和未找到链接。

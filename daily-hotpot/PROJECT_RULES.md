# 晨报项目级规则

最后更新：2026-06-29

## 适用范围

本文件适用于 `daily-hotpot/` 目录下的每日晨报与每周简报。

## 结构规则

1. `时间序列基础模型最新研究`、`时间序列建模 Agent 最新研究`、`时间序列 reasoning 模型最新研究` 等研究条目栏目，均按日期从近到远排序。
2. 晨报新增 `光伏功率预测最新研究` 栏目，持续跟踪近三个月内与光伏功率预测相关的最新论文、项目页和官方代码。
3. `GitHub 和 HuggingFace 上值得跟踪的新项目` 栏目拆分为两部分：
   - `时间序列`
   - `光伏功率预测`
4. `GitHub 和 HuggingFace 上值得跟踪的新项目` 栏目内的条目，按日期从近到远排序。
5. 如果 HuggingFace 与 GitHub 指向同一个项目，只保留一个条目，避免重复。

## 检索要求

1. 保持现有检索范围：arXiv、OpenReview、ACL、NeurIPS、ICLR、ICML、KDD、AAAI、官方项目页、机构博客、GitHub、HuggingFace。
2. 继续补检 `DailyArXiv`；若用户指定的 `timeseries` 分支不可访问，则回退检查公开可访问分支中的 `Time Series` 板块与最新自动更新提交。
3. 光伏功率预测栏目优先检索包含 `photovoltaic power forecasting`、`solar power forecasting`、`PV forecasting`、`photovoltaic generation forecasting` 等关键词的近三个月来源。

## 输出要求

1. 所有条目保留日期、来源链接、简短摘要、相关性判断。
2. 无法确认日期时，标注为 `不确定` 并降低优先级。
3. 晨报文件继续提交并推送到 `git@github.com:carolzheng1996-hue/Ts_Agent_reasoning_models.git` 仓库的 `daily-hotpot/` 目录。

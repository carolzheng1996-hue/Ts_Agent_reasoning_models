---
name: paper-tex-literature-review
description: Download or use local LaTeX/TeX source for an academic paper, organize the TeX-related files into a paper-named folder, and produce a Chinese literature review as both Markdown and a consistent styled HTML file. Use when the user asks to download a paper's TeX/source from arXiv or another official source, interpret/explain a paper from its TeX files, generate Chinese MD/HTML paper-reading notes, or keep future paper-review HTML output visually consistent with the existing TimeClaw-style report.
---

# Paper TeX Literature Review

## Core Workflow

1. **Identify the paper source.**
   - If the user provides only a title, search for the paper and prefer official sources: arXiv abstract/source, conference OpenReview/proceedings, official project page, or author repository.
   - If using arXiv, download source from `https://arxiv.org/e-print/<id>`.
   - Preserve the raw source archive unless the user asks to remove it.

2. **Organize TeX-related files.**
   - Create a folder named with the paper title in ASCII snake/camel-safe form, e.g. `Harnessing_Generalist_Agents_for_Contextualized_Time_Series`.
   - Move TeX source files, bibliography, style files, figures, tables, section folders, appendices, README/source metadata, and the raw source archive into that folder.
   - Keep generated interpretation files outside the TeX source folder unless the user explicitly requests otherwise.

3. **Read the paper from source.**
   - Start with the main `.tex` file to identify title, abstract, input order, macros, bibliography name, and figure/table inclusions.
   - Read in this order: abstract/main file, introduction, background/preliminaries, method, experiments, related work/conclusion, appendix sections relevant to algorithms, metrics, implementation, ablations, prompts, and case studies.
   - Read table `.tex` files that contain main results, hyperparameters, dataset stats, and tool lists.
   - Extract formulas exactly enough to explain them, but rewrite prose in Chinese rather than translating line-by-line.

4. **Generate two files in the working directory.**
   - Markdown: `<short_method_or_paper_name>_paper_reading.md`
   - HTML: `<short_method_or_paper_name>_paper_reading.html`
   - If the paper has no method name, use a concise title slug.

## Review Content Requirements

Write in Chinese with the same structure and tone as the TimeClaw report:

- title, paper metadata, method name if present
- one-sentence summary
- method background
- motivation and problem diagnosis
- task/formal definitions
- main algorithm/framework
- component-by-component details
- key formulas with explanations
- experiment setup: datasets, baselines, metrics, implementation
- main results with compact tables
- ablations/case studies
- contributions
- limitations and practical takeaways

For formula-heavy papers, include the formula block first, then explain each symbol and the intuition in Chinese. Do not merely list equations.

For agent/framework papers, explicitly identify:

- state/workspace/data objects
- policy/model
- action/tool space
- rollout/trajectory
- memory/retrieval mechanism
- training/evolution/update mechanism
- evaluation protocol

For experiments, include actual numbers from tables when available. Prefer compact tables with the strongest baselines and the proposed method rather than copying every result table.

## HTML Style Contract

The HTML output must visually match the existing TimeClaw-style report:

- standalone `<!doctype html>` file
- `lang="zh-CN"`
- MathJax v3 loaded from CDN for LaTeX rendering
- max content width `980px`
- centered white content panel on `#f8fafc` page background
- system sans-serif font stack
- body text color `#1f2937`
- headings color `#111827`
- `h2` with bottom border `#e5e7eb`
- inline `code` with `#eef2f7` background and 4px radius
- tables with collapsed borders, `#d1d5db` borders, `#f3f4f6` header background
- optional `.callout` block with `#f1f5f9` background and `#2563eb` left border

Use `assets/literature_review_template.html` as the style source. Copy its `<head>` and CSS into the generated HTML, then replace the `<main>` content.

## File Handling Rules

- Do not put the generated `.md` and `.html` inside the paper TeX source folder unless explicitly requested.
- Do not overwrite existing user files without checking names first. If a target report file exists, use a numbered suffix or ask the user.
- If a paper source archive extracts files into the current directory, reorganize them into the paper-named folder before finishing.
- Keep paths clear in the final response.

## Validation Checklist

Before final response:

- Confirm the TeX source folder exists and contains the main `.tex`, bibliography, sections/appendices, and figures/tables when present.
- Confirm the `.md` and `.html` files exist outside the TeX folder.
- Run a quick search for malformed formula fragments likely to break MathJax, especially ad hoc `Top-k` expressions; prefer `\operatorname*{Top}_{k,\,...}`.
- If no HTML renderer is available, at least verify the file exists, has a `<title>`, MathJax script, and key headings.
- Report final paths with clickable local file links.

const fs = require("fs");
const path = require("path");

const [,, input, output, title = "中文文献解读"] = process.argv;
if (!input || !output) {
  console.error("Usage: node scripts/md_to_review_html.js input.md output.html [title]");
  process.exit(1);
}

function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(s) {
  let out = esc(s);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  return out;
}

function splitTableRow(row) {
  const cells = [];
  let cur = "";
  let escaped = false;
  let inMath = false;
  for (let i = 0; i < row.length; i += 1) {
    const ch = row[i];
    if (ch === "\\" && !escaped) {
      escaped = true;
      cur += ch;
      continue;
    }
    if (ch === "$" && !escaped) inMath = !inMath;
    if (ch === "|" && !escaped && !inMath) {
      cells.push(cur.trim());
      cur = "";
    } else {
      cur += ch;
    }
    escaped = false;
  }
  cells.push(cur.trim());
  if (cells[0] === "") cells.shift();
  if (cells[cells.length - 1] === "") cells.pop();
  return cells;
}

const md = fs.readFileSync(input, "utf8");
const lines = md.split(/\r?\n/);
const body = [];
let para = [];
let inUl = false;
let inOl = false;

function flushPara() {
  if (para.length) {
    body.push(`  <p>${inline(para.join(" "))}</p>`);
    para = [];
  }
}

function closeLists() {
  if (inUl) {
    body.push("  </ul>");
    inUl = false;
  }
  if (inOl) {
    body.push("  </ol>");
    inOl = false;
  }
}

function parseTable(start) {
  const rows = [];
  let i = start;
  while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) {
    rows.push(lines[i]);
    i += 1;
  }
  if (rows.length < 2 || !/^\|\s*:?-{3,}/.test(rows[1])) return null;
  const alignCells = splitTableRow(rows[1]);
  const aligns = alignCells.map((c) => c.endsWith(":") ? " num" : "");
  const html = ["  <table>"];
  rows.forEach((r, idx) => {
    if (idx === 1) return;
    const cells = splitTableRow(r);
    const tag = idx === 0 ? "th" : "td";
    html.push(`    <tr>${cells.map((c, j) => `<${tag} class="${aligns[j] || ""}">${inline(c)}</${tag}>`).join("")}</tr>`);
  });
  html.push("  </table>");
  return { html: html.join("\n"), next: i };
}

for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];
  if (!line.trim()) {
    flushPara();
    closeLists();
    continue;
  }

  const table = parseTable(i);
  if (table) {
    flushPara();
    closeLists();
    body.push(table.html);
    i = table.next - 1;
    continue;
  }

  if (line.startsWith("$$")) {
    flushPara();
    closeLists();
    const math = [line];
    if (line.trim() === "$$") {
      i += 1;
      while (i < lines.length) {
        math.push(lines[i]);
        if (lines[i].trim() === "$$") break;
        i += 1;
      }
    }
    body.push(`  <div class="math">${esc(math.join("\n"))}</div>`);
    continue;
  }

  if (line.startsWith("```")) {
    flushPara();
    closeLists();
    const code = [];
    i += 1;
    while (i < lines.length && !lines[i].startsWith("```")) {
      code.push(lines[i]);
      i += 1;
    }
    body.push(`  <pre><code>${esc(code.join("\n"))}</code></pre>`);
    continue;
  }

  const h = line.match(/^(#{1,3})\s+(.+)$/);
  if (h) {
    flushPara();
    closeLists();
    const level = h[1].length;
    body.push(`  <h${level}>${inline(h[2])}</h${level}>`);
    continue;
  }

  const ul = line.match(/^-\s+(.+)$/);
  if (ul) {
    flushPara();
    if (inOl) {
      body.push("  </ol>");
      inOl = false;
    }
    if (!inUl) {
      body.push("  <ul>");
      inUl = true;
    }
    body.push(`    <li>${inline(ul[1])}</li>`);
    continue;
  }

  const ol = line.match(/^\d+\.\s+(.+)$/);
  if (ol) {
    flushPara();
    if (inUl) {
      body.push("  </ul>");
      inUl = false;
    }
    if (!inOl) {
      body.push("  <ol>");
      inOl = true;
    }
    body.push(`    <li>${inline(ol[1])}</li>`);
    continue;
  }

  para.push(line.trim());
}
flushPara();
closeLists();

const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <script>
    window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }, svg: { fontCache: 'global' } };
  </script>
  <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.72; color: #1f2937; background: #f8fafc; }
    main { max-width: 980px; margin: 0 auto; padding: 42px 24px 80px; background: #fff; }
    h1 { font-size: 2rem; line-height: 1.25; margin: 0 0 12px; color: #111827; }
    h2 { font-size: 1.45rem; margin-top: 34px; border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; color: #111827; }
    h3 { font-size: 1.15rem; margin-top: 24px; color: #111827; }
    p { margin: 12px 0; }
    ul, ol { padding-left: 1.5rem; }
    code { background: #eef2f7; padding: 0.12rem 0.28rem; border-radius: 4px; }
    pre { background: #0f172a; color: #e5e7eb; padding: 14px 16px; overflow-x: auto; border-radius: 6px; }
    pre code { background: transparent; padding: 0; color: inherit; }
    table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 0.94rem; }
    th, td { border: 1px solid #d1d5db; padding: 8px 10px; text-align: left; vertical-align: top; }
    th { background: #f3f4f6; }
    .num { text-align: right; }
    .math { overflow-x: auto; margin: 14px 0; }
  </style>
</head>
<body>
<main>
${body.join("\n")}
</main>
</body>
</html>
`;

fs.writeFileSync(output, html);

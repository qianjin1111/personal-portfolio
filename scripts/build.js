/**
 * Build script for Personal Portfolio
 * Converts Markdown project files to HTML and assembles the static site.
 *
 * Usage: node scripts/build.js
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const SITE_DIR = path.join(ROOT, '_site');
const PROJECTS_DIR = path.join(ROOT, 'projects');

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: false,
});

// Ensure site dir
fs.rmSync(SITE_DIR, { recursive: true, force: true });
fs.mkdirSync(SITE_DIR, { recursive: true });
fs.mkdirSync(path.join(SITE_DIR, 'projects'), { recursive: true });

// Copy static assets
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
fs.writeFileSync(path.join(SITE_DIR, 'index.html'), indexHtml);

// Copy .nojekyll to prevent GitHub Pages from ignoring underscore-prefixed dirs
fs.writeFileSync(path.join(SITE_DIR, '.nojekyll'), '');

// Read all project markdown files
const projectFiles = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith('.md'));

// Build project detail pages
const projectTemplate = (title, contentHtml, backUrl) => `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} - Qianjin's Portfolio</title>
<style>
  :root {
    --bg: #0f1117;
    --card: #1a1d27;
    --border: #2a2d3a;
    --text: #e1e4eb;
    --text2: #8b8fa3;
    --blue: #4f8ff7;
    --green: #3cc98e;
    --red: #f75c5c;
    --orange: #f7a64f;
    --purple: #a855f7;
    --cyan: #22d3ee;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', sans-serif; background:var(--bg); color:var(--text); min-height:100vh; line-height:1.8; }
  a { color:var(--blue); text-decoration:none; }
  a:hover { text-decoration:underline; }

  .nav { padding:16px 24px; border-bottom:1px solid var(--border); background:var(--card); position:sticky; top:0; z-index:100; }
  .nav a { font-size:14px; font-weight:600; display:inline-flex; align-items:center; gap:6px; }

  .content { max-width:800px; margin:0 auto; padding:40px 24px 80px; }
  .content h1 { font-size:28px; font-weight:800; margin-bottom:24px; background:linear-gradient(135deg,var(--blue),var(--purple)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .content h2 { font-size:22px; font-weight:700; margin:32px 0 16px; padding-bottom:8px; border-bottom:1px solid var(--border); }
  .content h3 { font-size:18px; font-weight:700; margin:24px 0 12px; color:var(--blue); }
  .content p { margin-bottom:16px; color:var(--text2); }
  .content ul, .content ol { margin:12px 0 16px 24px; color:var(--text2); }
  .content li { margin-bottom:8px; }
  .content code { padding:2px 8px; border-radius:4px; background:rgba(255,255,255,0.06); font-family: 'SF Mono', 'Fira Code', monospace; font-size:13px; color:var(--orange); }
  .content pre { padding:16px 20px; border-radius:12px; background:var(--card); border:1px solid var(--border); overflow-x:auto; margin:16px 0; }
  .content pre code { padding:0; background:none; color:var(--text); }
  .content strong { color:var(--text); }
  .content blockquote { border-left:3px solid var(--blue); padding:8px 16px; margin:16px 0; background:rgba(79,143,247,0.05); border-radius:0 8px 8px 0; color:var(--text2); }

  .footer { text-align:center; padding:32px 20px; border-top:1px solid var(--border); color:var(--text2); font-size:13px; }
  .footer a { color:var(--text2); }

  @media (max-width:768px) {
    .content { padding:24px 16px 60px; }
    .content h1 { font-size:24px; }
  }
</style>
</head>
<body>
<div class="nav">
  <a href="${backUrl}">← 返回首页</a>
</div>
<div class="content">
${contentHtml}
</div>
<div class="footer">
  <p>© 2026 Qianjin · <a href="${backUrl}">返回首页</a></p>
</div>
</body>
</html>`;

for (const file of projectFiles) {
  const mdContent = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');
  const htmlContent = marked.parse(mdContent);
  const title = mdContent.split('\n')[0].replace(/^#\s*/, '').trim();
  const html = projectTemplate(title, htmlContent, '/personal-portfolio/');
  const outName = file.replace('.md', '.html');
  fs.writeFileSync(path.join(SITE_DIR, 'projects', outName), html);
  console.log(`  ✓ Built projects/${outName}`);
}

console.log(`\n✅ Site built successfully in ${SITE_DIR}/`);
console.log(`   Projects: ${projectFiles.length}`);

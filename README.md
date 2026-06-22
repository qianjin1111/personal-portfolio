# Personal Portfolio

个人作品/项目集合展示页面，基于纯静态 HTML/CSS/JS 构建。

## 功能

- 🎨 暗色主题，类似 Native Crash Flow 风格
- 📂 项目卡片展示，支持分类筛选
- 📝 Markdown 编辑项目详情，自动构建发布
- 🚀 GitHub Actions 自动部署到 GitHub Pages

## 项目结构

```
personal-portfolio/
├── index.html              # 主页面
├── projects/               # 项目 Markdown 详情
│   ├── native-crash-analyzer.md
│   ├── kmp-cross-platform.md
│   ├── harmony-app.md
│   ├── web-h5-performance.md
│   └── ci-cd-pipeline.md
├── scripts/
│   └── build.js            # 构建脚本 (Markdown → HTML)
└── .github/workflows/
    └── deploy.yml          # GitHub Pages 自动部署
```

## 如何添加新项目

1. 在 `projects/` 目录下创建新的 `.md` 文件
2. 在 `index.html` 的 `PROJECTS` 数组中添加项目信息
3. 提交并推送到 `main` 分支
4. GitHub Actions 自动构建并部署

## 本地预览

```bash
# 安装依赖
npm install marked

# 构建
node scripts/build.js

# 启动本地服务器
cd _site && python3 -m http.server 8080
```

## 在线预览

🌐 [https://qianjin1111.github.io/personal-portfolio/](https://qianjin1111.github.io/personal-portfolio/)

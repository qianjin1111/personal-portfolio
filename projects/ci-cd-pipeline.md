# 移动端 CI/CD 流水线

## 概述

基于 GitHub Actions + Gradle 的 Android/鸿蒙自动化构建流水线。

## 流水线架构

```
Push/PR → Build → Test → Package → Deploy → Monitor
```

## 核心能力

- **多 Flavor 打包**：dev / beta / release 多环境构建
- **自动化测试**：单元测试 + UI 测试 + Monkey 压测
- **产物管理**：APK / HAP / AAB 自动归档
- **质量门禁**：Lint 检查 + 代码覆盖率 + 崩溃率监控
- **Slardar 集成**：崩溃率自动对比，异常告警

## 技术栈

- GitHub Actions
- Gradle (Android)
- hvigor (鸿蒙)
- Slardar 监控
- Python (构建脚本)

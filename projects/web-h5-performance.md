# 移动端 H5 性能优化方案

## 概述

面向移动端 WebView 场景的 H5 性能优化实践。

## 优化策略

### 首屏加载优化
- 关键渲染路径优化（Critical Rendering Path）
- 资源预加载（preload / prefetch）
- 代码分割（Code Splitting）+ 懒加载
- SSR / SSG 首屏直出

### 运行时优化
- 虚拟列表（长列表渲染优化）
- 图片懒加载 + WebP 格式
- 骨架屏（Skeleton Screen）
- 防抖/节流（debounce / throttle）

### 离线与缓存
- Service Worker 离线缓存
- HTTP 缓存策略（Cache-Control / ETag）
- LocalStorage / IndexedDB 数据缓存

## 技术栈

- React / TypeScript
- Vite
- WebView / JSBridge
- Lighthouse / WebPageTest

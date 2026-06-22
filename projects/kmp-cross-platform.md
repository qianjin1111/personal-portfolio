# KMP 跨平台架构实践

## 概述

Kotlin Multiplatform (KMP) 在 Android/iOS 双端的业务逻辑共享实践。

## 核心模块

- **网络层**：Ktor Client 跨平台 HTTP 请求封装
- **数据持久化**：SQLDelight 跨平台数据库方案
- **状态管理**：基于 Kotlin Coroutines + Flow 的响应式状态管理
- **依赖注入**：Koin 跨平台 DI 方案

## 架构设计

```
shared/
├── commonMain/     # 跨平台共享代码
├── androidMain/    # Android 平台实现
└── iosMain/        # iOS 平台实现
```

## 技术栈

- Kotlin Multiplatform
- Ktor Client
- SQLDelight
- Kotlin Coroutines / Flow
- Koin DI

# Native Crash 分析全链路

## 概述

Android Native Crash 从日志输入到修复验证的完整 CoT（Chain of Thought）分析流程。

## 核心能力

- **崩溃类型识别**：SIGSEGV / SIGABRT / SIGILL / SIGBUS 三维判定（signal + code + fault addr）
- **源码定位**：addr2line 符号化 + objdump 反汇编 + 寄存器分析
- **三方 so 处理**：6 级优先级决策树（ASAN 验证 → ByteTech 检索 → 升级 → 兜底 → Hook → 厂商）
- **修复闭环**：修复代码 → ASAN 验证 → Monkey 压测 → 上线监控

## 技术栈

- Android NDK / JNI
- addr2line / objdump / readelf
- AddressSanitizer (ASAN)
- bytehook (PLT hook)
- Slardar 监控

## 相关资源

- [全链路流程图](http://10.255.212.54/native-crash-flow/)
- [ByteTech Native 协会月报](https://bytedance.feishu.cn/)

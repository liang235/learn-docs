# useTitle
设置响应式文档标题

## 使用方法
``` js
import { useTitle } from '@vueuse/core' // vue 工具库

// 获取当前标题
useTitle().value
// 更改当前标题
useTitle('hello')
```
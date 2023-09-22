# useStorage
顾名思义，它的作用就是让 `localStorage` 和 `sessionStorage` 支持响应式

`useStorage` 默认以 `localStorage` 方式存储

## 使用方法
``` vue
<script setup>
import { useStorage } from '@vueuse/core' // vue 工具库

// 存储数据
useStorage('unique-key', 'Hello, world')

// 获取数据
useStorage('unique-key')

// 清空数据
useStorage('unique-key').value = null
</script>
```

## 使用示例
搜索框在输入内容后刷新，输入框中的内容不丢失

``` vue
<template>
    <el-input v-model="input" />
</template>

<script setup name="Home">
import { useStorage } from '@vueuse/core' // vue 工具库

// 存储数据
const input = useStorage('unique-key', 'Hello, world')
</script>
```

第一次加载时，`input` 显示 `Hello, world`，但最后，它会显示你最后在 `input` 中输入的内容，因为它被保存在 `localstorage` 中

## sessionstorage 存储
除了 `localstorage`，我们也可以指定 `sessionstorage`

``` js
useStorage('unique-key', 'Hello, world', sessionStorage)
```
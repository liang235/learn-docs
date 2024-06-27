# 组件通信

## 爷孙组件通信
使用 [provide/inject](https://cn.vuejs.org/api/options-composition.html#provide) 来完成

### 爷爷给孙子传值
::: code-group

```vue [爷爷组件]
<template>
    <div>我是爷爷组件我有{{ money }}元钱</div>
    <Child></Child>
</template>

<script setup>
import Child from './Child.vue'

provide('moneyInfo', 1000)
const money = ref(2000)
</script>
```

```vue [孙子组件]
<template>
    <div>我是孙子组件爷爷给了我{{ moneyInfo }}钱</div>
</template>

<script setup>
const moneyInfo = inject('moneyInfo')
</script>
```

### 无法获取到实时更新的数据
`provide` 和 `inject` 用于跨组件传递数据和方法，但它们不能直接获取到父组件中响应式数据的实时更新。这是因为 `Vue3` 中使用 `ref` 或 `reactive` 定义的响应式数据会被包装，`provide` 接收到的数据是一个不可变的值

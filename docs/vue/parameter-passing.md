# 组件通信

## 爷孙组件通信
- [provide/inject](https://cn.vuejs.org/api/options-composition.html#provide) 来完成

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

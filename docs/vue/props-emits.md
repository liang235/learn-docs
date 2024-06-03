# [defineProps 和 defineEmits](https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)
`defineProps` 和 `defineEmits` 都是只能在 `<script setup>` 中使用

## 父子组件传值案例

::: code-group

```vue [父组件]
<template>
    <div>父组件：{{ state.title }}</div>
    <ceshi1 :title="state.title" @updateParent="updateParent"></ceshi1>
</template>

<script setup>
import { reactive } from 'vue'
import ceshi1 from './components/ceshi1.vue'

// 定义响应式数据
const state = reactive({
    title: '父子组件传值',
})

// 接收子组件改变父组件的值
const updateParent = (data) => {
    state.title = data
}
</script>
```

```vue [子组件]
<template>
    <div>子组件：{{ title }}</div>
    <el-button type="primary" @click="editParent">改变父组件数据</el-button>
</template>

<script setup>
// 接收父组件传值
defineProps({
    title: String
})

// 使用 emit需要把自定义的事件在defineEmits定义，要不会有警告
const emits = defineEmits(['updateParent'])

// 修改父组件的值
// 此时修改父组件的 title 孙子组件中的 title 也会发生改变
const editParent = () => {
    emits('updateParent', '我在子组件改变了父组件的数据')
}
</script>
```

:::

## 在 template 中使用 emit
需要加上 `$emit`
```vue
<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
```

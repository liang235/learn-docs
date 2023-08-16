# 父子组件传参

## defineProps 和 defineEmits
父子组件传值 `defineProps` 和 子组件改变父组件数据 `defineEmits`
```vue
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

```vue
<template>
    <div>测试1：{{ title }}</div>
    <el-button type="primary" @click="editParent">改变父组件数据</el-button>
</template>

<script setup>
defineProps({ // 接收父组件传值
    title: String
})

const emit = defineEmits(['updateParent']) // 使用 emit需要把自定义的事件在defineEmits定义，要不会有警告

// 修改父组件的值
// 此时修改父组件的 title 孙子组件中的 title 也会发生改变
const editParent = () => {
    emit('updateParent', '我在子组件改变了父组件的数据')
}
</script>
```

## 父组件调用子组件中的方法
```

```
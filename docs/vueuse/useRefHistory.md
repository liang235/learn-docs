# [useRefHistory](https://www.vueusejs.com/core/useRefHistory/)
`useRefHistory` 跟踪对 `ref` 所做的每一个改变，并将其存储在一个数组中。这样我们能够轻松为应用程序提供撤销和重做功能

## 案例
```vue
<template>
	<div class="useRefHistory">
        <div>
            <el-button type="primary" @click="undo">撤销</el-button>
            <el-button type="primary" @click="redo">重做</el-button>
        </div>
        <el-input v-model="text" />
        <ul>
            <li v-for="entry in history" :key="entry.timestamp">
                {{ entry }}
            </li>
        </ul>
	</div>
</template>

<script setup>
import { useRefHistory } from '@vueuse/core'

const text = ref('')

const { history, undo, redo } = useRefHistory(text)
</script>
```
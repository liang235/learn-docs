# [useVModel](https://www.vueusejs.com/core/useVModel/)
`v-model` 绑定的简写，`props` + `emit` -> `ref`

`v-model` 指令是很好的语法糖，使双向数据绑定更容易

但 `useVModel` 更进一步，摆脱了一堆没有人真正想写的模板代码

## useVModel 案例
::: code-group

```vue [父组件]
<template>
	<button @click="myData++">父组件按钮</button>
	<myChild v-model="myData" />
</template>

<script setup>
import myChild from './components/myChild.vue'
const myData = ref(123)
</script>
```

```vue [子组件]
<template>
	<h1>子组件 - 父组件的传值：{{ modelValue_local }}</h1>
	<button @click="modelValue_local--">子组件 - 按钮</button>
</template>

<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
})

const emits = defineEmits(['update:modelValue'])

const modelValue_local = useVModel(props, 'modelValue', emits)
</script>
```

:::

# [useVModels](https://www.vueusejs.com/core/useVModels/)
`props v-model` 简写。可以把它想象成 `toRefs(props)`，但变化也会触发更新

## useVModels 案例

::: code-group

```vue [父组件]
<template>
	<button @click="myData++">父组件按钮 modelValue</button>
	<button @click="sum++">父组件按钮 sum</button>
	<myChild v-model:modelValue="myData" v-model:sum="sum" />
</template>

<script setup>
import myChild from './components/myChild.vue'

const myData = ref(123)
const sum = ref(222)
</script>
```

```vue [子组件]
<template>
	<h1>子组件 - 父组件的传值modelValue：{{ modelValue }}</h1>
	<h1>子组件 - 父组件的传值sum：{{ sum }}</h1>
	<button @click="modelValue--">子组件按钮 - modelValue</button>
	<button @click="sum--">子组件按钮 - sum</button>
</template>

<script setup>
import { useVModels } from '@vueuse/core'

const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
	sum: {
		type: Number,
		required: true,
	},
})

const emits = defineEmits(['update:modelValue', 'update:sum'])

const { modelValue, sum } = useVModels(props, emits)
</script>
```

:::
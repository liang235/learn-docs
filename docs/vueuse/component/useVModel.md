# useVModel
`v-model` 绑定的简写，`props` + `emit` -> `ref`

`v-model` 指令是很好的语法糖，使双向数据绑定更容易

但 `useVModel` 更进一步，摆脱了一堆没有人真正想写的模板代码

## useVModel 介绍

`parent` 父组件
``` vue
<template>
    <Child v-model:count="count" />{{ count }}
</template>

<script setup name="Home">
import Child from './child.vue' // 子组件

const count = ref(50)
</script>
```

`child` 子组件
``` vue
<template>
	<el-button @click="count = count - 1">-</el-button>
	<el-button @click="count = 0">重置 to 0</el-button>
	<el-button @click="count = count + 1">+</el-button>
</template>

<script setup>
import { useVModel } from '@vueuse/core' // vue 工具库

// props
const props = defineProps({
	count: Number,
})

// 使用 emit 需要把自定义的事件在 defineEmits 定义，要不会有警告
const emit = defineEmits(['update:count'])

const count = useVModel(props, 'count', emit)
</script>
```

## v-model 介绍
在表单输入元素或组件上创建双向绑定<br/>
期望的绑定值类型：根据表单输入元素或组件输出的值而变化

仅限：
- `<input>`
- `<select>`
- `<textarea>`
- `components`

修饰符：
- `.lazy` ——监听 `change` 事件而不是 `input`
- `.number` ——将输入的合法符串转为数字
- `.trim` ——移除输入内容两端空格

## v-model 使用

`parent` 父组件
``` vue
<template>
    <Child v-model="parentValue" />
</template>

<script setup>
import Child from './child.vue' // 子组件

// 父级输入框内容
const parentValue = ref('hello')
</script>
```

`child` 子组件
``` vue
<template>
	<el-input v-model="childValue" @input="handleInput" />
</template>

<script setup>
// props
const props = defineProps({
	// 双向绑定：双向绑定值，如没有使用 v-model:xxx 那么字段名为固定，改了之后将不生效
	modelValue: String,
})

// 使用 emit 需要把自定义的事件在 defineEmits 定义，要不会有警告
const emit = defineEmits(['update:modelValue'])

// 输入框内容
const childValue = ref('')

// 在 Input 值改变时触发
const handleInput = () => {
	emit('update:modelValue', childValue.value)
}

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
	childValue.value = props.modelValue
})
</script>
```
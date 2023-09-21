# [v-model](https://cn.vuejs.org/guide/components/v-model.html)
`v-model` 可以在组件上使用以实现双向绑定

## v-model 父子组件传值
::: code-group

```vue [父组件]
<script setup>
import myChild from './components/myChild.vue'
const myData = ref(123)
</script>

<template>
	<h1>父组件 - {{ myData }}</h1>
	<button @click="myData++">父组件按钮</button>
	<myChild
		:modelValue="myData"
		@update:modelValue="
			(newVal) => {
				myData = newVal
			}
		"
	/>
</template>
```

```vue [子组件]
<script setup>
const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
})

const emits = defineEmits(['update:modelValue'])
</script>

<template>
	<h1>子组件1 - 父组件的传值：{{ props.modelValue }}</h1>
	<button @click="emits('update:modelValue', props.modelValue - 1)">子组件 - 按钮</button>
</template>
```

:::

## v-model 简写形式
```vue
<template>
	<!-- <myChild
		:modelValue="myData"
		@update:modelValue="
			(newVal) => {
				myData = newVal
			}
		"
	/> -->
    <!-- 简写模式 -->
    <myChild v-model:modelValue="myData" />
    <!-- 当我们属性值为 modelValue 的时候还可以简写成下面的 -->
    <myChild v-model="myData" />
</template>
```

## 使用自定义事件传值
- 这里的自定义事件为 `updateParent` 而不是 `update:updateParent`，所有不用加 `update:`
- 使用自定义事件的时候 `<myChild v-model="myData" />` 类型将无效

::: code-group

```vue [父组件]
<script setup>
import myChild from './components/myChild.vue'
const myData = ref(123)

const updateParent = (data) => {
	myData.value = data
}
</script>

<template>
	<h1>父组件 - {{ myData }}</h1>
	<button @click="myData++">父组件按钮</button>
    <!-- 这里的自定义事件为 updateParent -->
	<myChild :modelValue="myData" @updateParent="updateParent" />
</template>
```

```vue [子组件]
<script setup>
const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
	},
})

const emits = defineEmits(['updateParent'])

const editParent = () => {
	emits('updateParent', props.modelValue - 1)
}
</script>

<template>
	<h1>子组件1 - 父组件的传值：{{ props.modelValue }}</h1>
	<button @click="editParent">子组件 - 按钮</button>
</template>

```

:::
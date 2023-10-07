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

## v-model陷阱，连续输入瞬间卡半天
- 这是为什么呢？其实原因很简单，就是因为 `v-model` 的双向绑定机制。`v-model` 其实是 `:value + @input` 组合的语法糖，也就是说，当文本框的值发生变化时，会触发 `@input` 事件，并更新绑定的数据
- 而当数据发生变化时，Vue会重新渲染组件，并更新文本框的值
- 这样一来，如果我们在文本框中频繁输入文字，就会导致组件频繁重新渲染
- 如果我们手速很快，一秒钟可以输入几十个字，那么组件就会在一秒钟内渲染几十次
- 而组件的渲染其实是一个 `JS` 行为，而JS的执行会阻塞浏览器的其他动作，比如动画效果
- 只要给 `v-model` 加上一个修饰符 `v-model.lazy` 就行了。这个修饰符可以让 `v-model` 监听文本框的 `change` 事件而不是 `input` 事件

```js
// v-model
<input v-model="..." />
// v-model 就是 :value + @input 组合的语法糖
<input :value="..." @input="..." />
// 当加了 .lazy 修饰符之后
<input v-model.lazy=="..." />
// v-model 就变成了:value + @change 组合的语法糖
<input :value="..." @change="..." />
```
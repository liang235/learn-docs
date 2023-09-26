# [useTransition](https://www.vueusejs.com/core/useTransition/)
值之间的过度

## 案例1 - 做个数字加载动画
```vue
<template>
	<div class="useTransition">
		<h2>{{ Math.round(output) }}+</h2>
	</div>
</template>

<script setup>
import { useTransition, TransitionPresets } from '@vueuse/core' // vue 工具库

const count = ref(0)

// 对于简单的过度，提供一个数字源值来监听。更改后，`output` 将转换为新值。如果源在过渡过程中发生变化，则新的过渡将从前一个过渡中断的地方开始
// TransitionPresets 是过渡参数
const output = useTransition(count, {
	duration: 3000,
	transition: TransitionPresets.easeOutExpo,
})
count.value = 5000
</script>

<style lang="scss" scoped></style>
```

## 案例2 - 颜色转换
我们还可以使用 `useTransition` 转换整个数字数组。 使用位置或颜色时，这非常有用。 使用颜色的一个很好的技巧是使用计算的属性将 `RGB` 值格式化为正确的颜色语法

```vue
<template>
	<div class="useTransition">
		<h2 :style="{ color: color }">COLOR CHANGING</h2>
	</div>
</template>

<script setup>
import { useTransition, TransitionPresets } from '@vueuse/core' // vue 工具库

const source = ref([0, 0, 0])
const output = useTransition(source, {
	duration: 5000,
	transition: TransitionPresets.easeOutExpo,
})
const color = computed(() => {
	const [r, g, b] = output.value
	return `rgb(${r}, ${g}, ${b})`
})
source.value = [238, 71, 60]
</script>
```
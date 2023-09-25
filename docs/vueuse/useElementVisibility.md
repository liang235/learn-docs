# [useElementVisibility](https://www.vueusejs.com/core/useElementVisibility/)
判断元素是否在可视窗口内

## 案例
```vue
<template>
	<div class="useElementVisibility">
		<div ref="target" class="div"></div>
	</div>
</template>

<script setup>
import { useElementVisibility } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, (newVal) => {
	newVal ? ElMessage.success('在可视窗口内') : ElMessage.success('在可视窗口外')
})
</script>

<style lang="scss" scoped>
.useElementVisibility {
	height: 1000px;
}

.div {
	width: 100px;
	height: 100px;
	background-color: red;
}
</style>
```
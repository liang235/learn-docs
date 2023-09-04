# 无限滚动
滚动至底部时，加载更多数据

## 常用实现方式
- 通常我们实现这个效果的时候都是去监听滚动条的位置，然后来判断是否该加载更多等
  - 计算过程比较繁琐
  - 效率不太好，因为滚动事件的触发是非常频繁的（使用防抖的话，点击加载更多的这个效果会有一定的延迟）

## 使用 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
当我们这个加载元素能被用户看到的时候就进行加载更多操作，不管你滚动条在哪
```vue
<template>
	<page-main title="无限滚动">
		<h1>无限滚动</h1>
		<!-- 用于观察的加载元素 -->
		<span class="loading" ref="loadingElement"></span>
	</page-main>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const isLoading = ref(false) // 加载状态
const loadingElement = ref(null) // 用于存储加载元素的引用

const intersectionObserver = new IntersectionObserver(async (entries) => {
	if (entries[0].intersectionRatio <= 0) return // 如果元素不在视窗内，不执行任何操作

	if (isLoading.value) {
		return // 如果正在加载中，则不执行任何操作
	}

	isLoading.value = true // 设置加载状态为 true
	await loadItems() // 执行加载数据的函数
	isLoading.value = false // 设置加载状态为 false
})

onMounted(() => {
	if (loadingElement.value) {
		intersectionObserver.observe(loadingElement.value) // 在组件挂载后开始观察加载元素
	}
})

const loadItems = () => {
	ElMessage.success('加载更多数据')
}
</script>

<style lang="scss" scoped></style>
```

# [useIntersectionObserver](https://www.vueusejs.com/core/useIntersectionObserver/)
- `useIntersectionObserver` 函数是基于 `Web API` 中的 `Intersection Observer` 的 `Vue.js` 封装
- 它允许您观察一个或多个元素与其父元素或视口的交叉情况
- 您可以配置 `useIntersectionObserver` 来观察元素何时进入或离开视口，以及元素与视口的交叉比例
- 这个函数通常用于实现复杂的可见性逻辑，例如在元素滚动到特定位置或达到一定可见性时触发操作
- `useIntersectionObserver` 可以判断已经出现在可视窗口后，让 `Observer` 立即停止，即使我们滚动离开目标元素，我们的值也会保持为 `true`
- `useIntersectionObserver` 适合做数据的懒加载

## 案例
```vue
<template>
	<div class="useIntersectionObserver">
		<div ref="target" class="div"></div>
	</div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = ref(false)

// 第一个参数：ref 引用，获取 DOM
// 第二个参数：回调，回调里面的参数 isIntersecting 会在参数一获取的 DOM 元素进入可视区域的时候监听并且为 true
// 第三个参数：DOM 元素进入可视区域的距离 从 0 - 1，一般不用设置默认即可
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
	targetIsVisible.value = isIntersecting

	// 一旦 isIntersecting 被设置为true，observer 就会停止，即使我们滚动离开目标元素，我们的值也会保持为 true
	if (isIntersecting) {
		stop()
	}
})
</script>

<style lang="scss" scoped>
.useIntersectionObserver {
	height: 1000px;
}

.div {
	width: 100px;
	height: 100px;
	background-color: red;
}
</style>
```
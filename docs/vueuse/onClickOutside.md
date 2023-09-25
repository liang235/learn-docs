# onClickOutside
监听元素之外的点击。用于模态或下拉

``` vue
<template>
	<el-button ref="container">点击按钮以外的地方</el-button>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core' // vue 工具库

// 为想要追踪的 container  元素创建一个 ref
const container = ref(null)

// 监听元素之外的点击
onClickOutside(container, () => console.log('您点击了按钮以为的地方'))
</script>
```
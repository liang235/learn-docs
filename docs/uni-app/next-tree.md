# [next-tree](https://ext.dcloud.net.cn/plugin?id=12265)

`next-tree`（超强树选择器、树组件、树插件、无限级联树、单选树、多选树、自定义样式树、树形选择

## 基础使用

```vue
<template>
	<view>
		<next-tree ref="nextTreeRef" :treeData="treeData" />
	</view>
</template>

<script setup>
const nextTreeRef = ref(null)
</script>
```

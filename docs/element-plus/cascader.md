# [Cascader 级联选择器](https://element-plus.gitee.io/zh-CN/component/cascader.html)

## 动态加载数据
``` vue
<template>
    <el-cascader :props="props" />
</template>

<script setup>
const props = {
	lazy: true, // 开启动态加载
	lazyLoad(node, resolve) {
		const { data } = node
		// 加载数据源的方法
		getDict(data.ID)
			.then((res) => {
				resolve(
					res.data.CHILD.map((item) => {
						return {
							value: item.ID,
							label: item.NAME,
							...item,
							leaf: !item.hasChildren,
						}
					})
				)
			})
			.catch(() => {
				resolve([])
			})
	},
}
</script>
```
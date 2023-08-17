# [Select 选择器](https://element-plus.gitee.io/zh-CN/component/select.html)

## 获取 Select Option 中的值和内容
``` vue
<template>
    <el-select v-model="input" @change="hundelChange($event)">
        <el-option v-for="item in dictionary.OA_STOCK_CMPY_NAME" :key="item.ID" :label="item.NAME" :value="item.ID" />
    </el-select>
</template>

<script setup>
const input = ref('')
const hundelChange = (val) => {
	const obj = dictionary.value.OA_STOCK_CMPY_NAME.find((item) => {
        // 筛选出匹配数据，这里的 value 是你遍历数组每一项的 value，如果没有对后台返回的数据做处理，一般为 id
		return item.ID === val
	})
	console.log(obj)
}
</script>
```

## 多选模式下，无法编辑
- 绑定了 `multiple` 实现下拉框多选，由于数据深层嵌套，会出现视觉上好像多选下拉框无法编辑、删除，其实数据更新了，但是页面没有重新渲染，所以我们需要调用 `this.$forceUpdate()` 方法强制 `Vue` 实例重新渲染
- 在 `vue2` 中遇到了这个问题
```html
<el-select v-model="value" multiple @change="$forceUpdate()">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
</el-select>
```

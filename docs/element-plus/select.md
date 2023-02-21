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
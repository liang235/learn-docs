# [DatetimePicker 选择器](https://uview-plus.jiangruyi.com/components/datetimePicker.html)

## mode 日期格式

| 类型       | 说明                           |
| :--------- | :----------------------------- |
| datetime   | 完整日期时间: 2022-03-03 10:45 |
| date       | 年月日: 2022-03-03             |
| year-month | 年月: 2022-03                  |
| time       | 时间: 10:45                    |

## filter 过滤器

::: code-group

```vue [保留偶数年]
<template>
	<up-datetime-picker :filter="filter" mode="date"></up-datetime-picker>
</template>

<script setup>
const filter = (mode, options) => {
	if (mode === "year") {
		return options.filter((option) => option % 2 === 0)
	}

	return options
}
</script>
```

:::

## formatter 格式化

::: code-group

```vue [弹窗选项内容修改]
<template>
	<up-datetime-picker :formatter="formatter" mode="date"></up-datetime-picker>
</template>

<script setup>
const formatter = (type, value) => {
	if (type === "year") {
		return `${value}年`
	}
	if (type === "month") {
		return `${value}月`
	}
	if (type === "day") {
		return `${value}日`
	}
	return value
}
</script>
```

:::

## 只显示年份
因为 `DatetimePicker` 默认选择中没有只显示年份的选项，所以需要自己修改下

```vue
<template>
	<view :class="{ isYear }">
		<up-datetime-picker></up-datetime-picker>
	</view>
</template>

<script setup>
const props = defineProps({
	// 是否只显示年份
	isYear: {
		type: Boolean,
		default: () => false,
	},
})
</script>

<style lang="scss" scoped>
.isYear {
	:deep() {
		// 除了第一个之外的所有元素隐藏
		.uni-picker-view-wrapper .u-picker__view__column:not(:first-child) {
			display: none;
		}
	}
}
</style>
```

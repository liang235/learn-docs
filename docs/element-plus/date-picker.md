# [DatePicker 日期选择器](https://element-plus.org/zh-CN/component/date-picker.html)

## 动态计算设置禁用掉的日期
- 两个日期组件，后一个日期组件根据前一个日期组件选择的时间禁用时间

::: code-group

```vue [Vue3]

```

```vue [vue2]
<template>
	<div>
		<el-date-picker 
			v-model="scope.row.T_BEGIN_TIME" 
			type="date" 
			@change="updatePickerOptions(scope.row.T_BEGIN_TIME, scope.row)" 
		/>
		<el-date-picker 
			v-model="scope.row.T_END_TIME" 
			type="date" 
			:disabled="!scope.row.T_BEGIN_TIME" 
			:picker-options="scope.row.pickerOptions" 
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			scope: {
				row: {
					T_BEGIN_TIME: '',
					T_END_TIME: '',
				},
			},
		}
	},
	methods: {
		updatePickerOptions(beginTime, row) {
			this.$set(row, 'T_END_TIME', '')
			row.pickerOptions = {
				disabledDate(time) {
					// 禁用从 T_BEGIN_TIME 当天及之前的所有日期
					return beginTime ? time.getTime() <= new Date(beginTime).getTime() : false
				},
			}
		},
	},
}
</script>
```

:::
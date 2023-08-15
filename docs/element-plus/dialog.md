# [Dialog 对话框](https://element-plus.gitee.io/zh-CN/component/dialog.html)

## 关闭窗口时销毁里面的内容
- 清空 `from` 表单数据
```vue
<template>
	<el-form ref="ruleForm" :model="ruleForm">
		<el-form-item label="被委托人" prop="name">
			<el-input v-model="ruleForm.name" clearable></el-input>
		</el-form-item>
		<el-form-item>
			<el-button @click="resetForm('ruleForm')">重置</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
resetForm(formName) {
	// el-form 上必须要设置 ref 和 prop 否则 resetFields 方法不生效
	this.$refs[formName].resetFields();
}
</script>
```

## 修改 Dialog 对话框里面内容样式
- `Dialog` 对话框不能写在 `scoped` 里面，得单独写
- 并且给 `Dialog` 对话框自定义类名，这样不会污染其他的 `Dialog` 对话框
``` vue
<template>
	<el-dialog class="custom-class"></el-dialog>
</template>

<style lang="scss">
.custom-class {
	.el-dialog__body {
		padding: 50px;
	}
}
</style>
```
# [Dialog 对话框](https://element-plus.gitee.io/zh-CN/component/dialog.html)

## 修改 Dialog 对话框里面内容样式
- Dialog 对话框不能写在 scoped 里面，得单独写
- 并且给 Dialog 对话框自定义类名，这样不会污染其他的 Dialog 对话框
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
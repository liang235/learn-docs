# [ActionSheet 操作菜单](https://uview-plus.jiangruyi.com/components/actionSheet.html)

## 遮罩层下内容禁止滚动
默认情况下，遮罩层下的内容是可以滚动的
```js
// 打开弹窗
const openDialog = () => {
	show.value = true
	document.body.style.overflow = 'hidden' // 阻止页面滚动
}

// 关闭弹窗
const closeDialog = () => {
	show.value = false
	document.body.style.overflow = ''
}
```
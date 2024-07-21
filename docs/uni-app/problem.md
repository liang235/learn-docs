# 常见问题

## tabBar 配置后不显示，无效的问题

`tabBar.list` 数组的第一项必须和 `pages` 配置中的第一项要相同

## ios 下使用 fixed 底部预留填充无法遮住内容的问题

```scss
.btn-fixed {
	z-index: 99;
	padding: 20rpx 40rpx;
	background-color: #fff;
	position: fixed;
	left: var(--window-left);
	right: var(--window-right);

	// safe-area-inset-bottom 是 iso 放出的一个参数，用来解决 ios 下填充空白的问题
	bottom: calc(var(--window-bottom) - constant(safe-area-inset-bottom));
	bottom: calc(var(--window-bottom) - env(safe-area-inset-bottom));
	padding-bottom: calc(constant(safe-area-inset-bottom) + 20rpx);
	padding-bottom: calc(env(safe-area-inset-bottom) + 20rpx);
}
```

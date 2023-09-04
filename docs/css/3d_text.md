# 立体文字
使用 css 来事项立体的文字效果

## 效果展示
<ZoomImg src="/3d_text.png" />

## 代码实现
```vue
<template>
	<h1>立体文字</h1>
</template>

<style lang="scss" scoped>
h1 {
	font-size: 5em;
	text-shadow:
		-1px 1px #bbb,
		-2px 2px #bbb,
		-3px 3px #bbb,
		-4px 4px #bbb,
		-10px 10px 3px #0008;
}
</style>
```

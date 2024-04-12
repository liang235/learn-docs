# [条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor)
条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台

## 案例代码
```vue
<template>
	<view class="content">
		<!-- #ifdef H5 -->
			<view>我只在H5端显示，其他端不显示</view>
		<!-- #endif -->

		<!-- #ifdef H5 || APP-PLUS -->
			<view>我只在H5端和APP端显示，其他端不显示</view>
		<!-- #endif -->

		<!-- #ifndef H5 -->
			<view>我除了不在H5端显示，其他端都显示</view>
		<!-- #endif -->
	</view>
</template>
```

## 注意事项
条件编译是利用注释实现的，在不同语法里注释写法不一样，`js/uts`使用 `//` 注释、css 使用 `/* 注释 */`、`vue/nvue/uvue` 模板里使用 `<!-- 注释 -->`

## 常用的条件编译

### getMenuButtonBoundingClientRect
- 如果原生导航栏被隐藏，仍然在右上角会有一个悬浮按钮，微信下也被称为胶囊按钮

```js
// #ifndef WEB || MP-LARK
const menu = ref(uni.getMenuButtonBoundingClientRect());
// #endif
```


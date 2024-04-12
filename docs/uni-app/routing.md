# 页面路由

## 页面跳转
### [API 方法跳转](https://uniapp.dcloud.net.cn/api/router.html)

| 函数名        |      说明      |
| ------------- | ----------- |
| uni.navigateTo(OBJECT) | 保留当前页面，跳转到应用内的某个页面，使用 `uni.navigateBack` 可以返回到原页面 |
| uni.redirectTo(OBJECT) | 关闭当前页面，跳转到应用内的某个页面 |
| uni.reLaunch(OBJECT) | 关闭所有页面，打开到应用内的某个页面。 |
| uni.switchTab(OBJECT) | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 |
| uni.navigateBack(OBJECT) | 关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层 |

### [组件方法跳转](https://uniapp.dcloud.net.cn/component/navigator.html)
- 该组件类似HTML中的 `<a>` 组件，但只能跳转本地页面。目标页面必须在 `pages.json` 中注册

```vue
<template>
	<view>
		<navigator url="/pages/tabBar/extUI" open-type="switchTab" hover-class="other-navigator-hover">
            <button type="default">跳转tab页面</button>
        </navigator>
	</view>
</template>
```

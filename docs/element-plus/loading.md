# [Loading 加载](https://element-plus.gitee.io/zh-CN/component/loading.html)

## 以服务的方式来调用
``` js
// main.js 引入
import { ElLoading } from 'element-plus'
// 全局挂载实例
app.config.globalProperties.openLoading = function () {
	const loading = ElLoading.service({
		target: '.el-table', // 需要遮罩的区域
		customClass: 'loadingclass', // 遮罩层新增类名，如果需要修改loading的样式
	})
	setTimeout(function () {
		// 设定定时器
		loading.close() // 关闭遮罩层
	}, 500)
	return loading
}
```
- 页面使用
``` js
const { appContext } = getCurrentInstance()
const globalProxy = appContext.config.globalProperties
globalProxy.openLoading()
```

## 点击 loading 背景关闭
```vue
<template>
	<el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen1">指令方式</el-button>
	<el-button type="primary" @click="openFullScreen2">服务方式</el-button>
</template>

<script setup>
import { ElLoading } from 'element-plus'

const fullscreenLoading = ref(false)

const openFullScreen1 = async () => {
	fullscreenLoading.value = true

	await nextTick() // 等待 DOM 更新
	const loadingMask = document.querySelector('.el-loading-mask')
	if (loadingMask) {
		loadingMask.addEventListener('click', () => {
			fullscreenLoading.value = false
		})
	}
	setTimeout(() => {
		fullscreenLoading.value = false
	}, 50000)
}

const openFullScreen2 = () => {
	const loading = ElLoading.service({
		lock: true,
		text: 'Loading',
		spinner: 'el-icon-loading',
		background: 'rgba(0, 0, 0, 0.7)',
	})

	document.querySelector('.el-loading-mask').addEventListener('click', () => {
		loading.close()
	})
	setTimeout(() => {
		loading.close()
	}, 50000)
}
</script>
```
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
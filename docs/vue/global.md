# 全局方法

## 全局挂载实例
``` js
import { ElLoading } from 'element-plus'

// 使用 app.config.globalPropertie 来实现挂载
app.config.globalProperties.openLoading = function () {
	const loading = ElLoading.service({
		// 声明一个loading对象
		lock: true, // 是否锁屏
		text: '加载中', // 加载动画的文字
		spinner: 'el-icon-loading', // 引入的loading图标
		background: 'rgba(0, 0, 0, 0.8)', // 背景颜色
		target: '.el-table, .table-flex, .region', // **需要遮罩的区域，这里写要添加loading的选择器**
		fullscreen: false,
		customClass: 'loadingclass', // **遮罩层新增类名，如果需要修改loading的样式**
	})
	setTimeout(function () {
		// 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
		loading.close() // 关闭遮罩层
	}, 5000)
	return loading
}
```

## 获取当前组件实例
``` js
// 获取当前组件实例
const { appContext } = getCurrentInstance()
// 打印看一下结构
console.log(appContext)
```
![getCurrentInstance](/getCurrentInstance.jpg)

# nprogress
进度条

## 安装 [官网地址](https://github.com/rstacruz/nprogress)
``` js
pnpm i nprogress
```

## 使用配置
``` js
import router from '@/router/index.js' // 引入路由
import nprogress from 'nprogress' // 进度条插件
import 'nprogress/nprogress.css' // 进度条样式

// 进度条配置
nprogress.configure({
	easing: 'ease', // 动画方式
	speed: 200, // 递增进度条的速度,默认200
	trickleSpeed: 200, // 自动递增间隔
	trickle: true, // 开启关闭自动递增行为
	showSpinner: false, // 默认关闭进度条
})

// 路由开始
router.beforeEach((to, from, next) => {
	if (!nprogress.isStarted()) {
		nprogress.start()
		next()
	}
})

// 路由结束
router.afterEach(() => {
	nprogress.done()
})
```
# vue-router
`Vue.js` 的官方路由

## 安装 [官网地址](https://router.vuejs.org/zh/)
```
pnpm install vue-router
```

## 使用配置
- `src/router/index.js`
```
import { createRouter, createWebHashHistory } from 'vue-router' // 路由

/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * @method createRouter(options: RouterOptions): Router
 * @link 参考：https://next.router.vuejs.org/zh/api/#createrouter
 */
export const router = createRouter({
	history: createWebHashHistory(),
	routes: [],
})

export default router
```

## 模块化
- 不在需要创建 `modules` 使用，只需要在模块中导出即可
- 然后在 `src/router/index.js` 引入配置给 `routes` 即可
```
// custom.js
export const custom = [
    { path: '/custom/home', component: Home },
    { path: '/custom/about', component: About },
]
```
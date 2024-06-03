# pinia-plugin-persist
pinia 数据持久化

## 安装 [官网地址](https://seb-l.github.io/pinia-plugin-persist/#install)
```
pnpm install pinia-plugin-persist
```

## 使用配置
- `src/pinia/index.js`
``` js
import { createPinia } from 'pinia' // pinia
import piniaPluginPersist from 'pinia-plugin-persist' // pinia 存储持久化

// 创建 pinia
const pinia = createPinia()

// 使用 piniaPluginPersist 插件
pinia.use(piniaPluginPersist)

// 导出
export default pinia
```

- 模块化中使用
``` js
// 第一个参数(customId)是应用程序中 store 的唯一 id
export const useCustomId = defineStore('customId', {
	state: () => ({
		data: [], // 数据存储
	}),
	actions: {
		// 添加数据
		async setData(data) {
			this.data = data
		}
	},

	// 开启数据缓存，根据 pinia-plugin-persist 插件
	persist: {
		// 开启数据缓存
		enabled: true,
		strategies: [{
			// 指定 Storage 的 key，默认是根据模块的 ID
			key: 'customId',

			// 存储默认走的是 sessionStorage
			storage: localStorage,

			// 列出要存储在存储器中的 ok 状态键
			paths: ['firstName', 'lastName']
		}],
	},
})
```
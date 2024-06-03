# pinia
数据存储，`vuex` 替代品

## 安装 [官网地址](https://pinia.web3doc.top/)
```
pnpm install pinia
```

::: tip 提示
[Pinia](https://pinia.web3doc.top/) 已正式成为 Vue.js 官方状态库，如果你对 Pinia 还不熟悉，除了通过 Pinia 官网学习外，我还收集了一些文字/视频的介绍，可以帮助你快速上手

- [欧耶！Pinia 正式成为 vuejs 的一员](https://mp.weixin.qq.com/s/_OlLFedVJfyEapGzYFETuw)
- [全新的 Vue3 状态管理工具：Pinia](https://mp.weixin.qq.com/s/4B-ZzOXdYrF-Auvm_wWBVQ)
- [【探索学习】面向未来的 Vuex -- pinia](https://www.bilibili.com/video/BV1Mb4y1X7NL/)
:::

## 使用配置
- `src/pinia/index.js`
```
import { createPinia } from 'pinia' // pinia

// 创建 pinia
const pinia = createPinia()

// 导出 pinia
export default pinia
```

- `src/main.js`
```
// 数据存储
import pinia from '@/pinia/index.js'

app.use(pinia)
```

## 模块化使用
```
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
})
```

## 页面中使用
```
<template>
    {{ store.store }}
    {{ data }}
</template>

<script setup>
import { useCustomId } from '@/pinia/custom.js' // 模块化的 pinia
const store = useCustomId() // 实例化
const { data } = storeToRefs(store) // 解构

// 这里使用的时候需要加 .value
data.value

// 使用方法
store.setData('需要存储的数据')
</script>
```

## 数据持久化
搭配 [pinia-plugin-persist](./pinia-plugin-persist.md) 插件可以实现数据的持久化
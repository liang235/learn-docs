# 兼容 IE
- [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy): 需要借助此插件来使用
- 但实际上vue3不支持ie11，但vite并不是只为vue服务，它是一个独立的开发服务器和打包工具，也可以为react等其他框架服务，所以这是一个思维误区，别的框架是有可能通过@vitejs/plugin-legacy支持ie11的，只是vue3的proxy不能支持

## 安装
```
pnpm add  -D @vitejs/plugin-legacy
```

## 配置 @vitejs/plugin-legacy 插件
- 在 `config/plugins/plugin-legacy.js` 中配置，目录按自己习惯创建即可

``` js
import legacy from '@vitejs/plugin-legacy'

export default function createLegacy() {
	return legacy({
		targets: ['defaults', 'not IE 11']
	})
}
```
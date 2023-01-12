# 给 setup 语法糖添加 name
- [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend): 需要借助此插件来使用

## 安装
```
pnpm add -D vite-plugin-vue-setup-extend
```

## 配置 vite-plugin-vue-setup-extend 插件
- 在 `config/plugins/vite-plugin-vue-setup-extend.js` 中配置，目录按自己习惯创建即可

``` js
import setupExtend from 'vite-plugin-vue-setup-extend'

export default function createSetupExtend() {
	return setupExtend()
}
```
# config 配置
- vite 配置项，按自己习惯创建配置文件夹

## plugins 插件
- 把 `vite.config.js` 中使用的插件等抽离出来

``` js
// config/plugins/index.js
import vue from '@vitejs/plugin-vue' // 使 vite 支持 vue 开发
import createEslint from './vite-plugin-eslint.js' // 终端展示 eslint 报错信息
import createStylelint from './vite-plugin-stylelint.js' // 终端展示 stylelint 报错信息
import createSvgIcon from './vite-plugin-svg-icons.js' // vite 中使用 svg 图标
import createComponents from './unplugin-vue-components.js' // 按需导入 api
import createAutoImport from './unplugin-auto-import.js' // 自动导入 api
import createSetupExtend from './vite-plugin-vue-setup-extend.js' //给 setup 语法糖添加 name

// 创建 vite 插件实例化
export default function createVitePlugins(viteEnv, isBuild = false) {
	const vitePlugins = []
	vitePlugins.push(vue())
	vitePlugins.push(createEslint())
	vitePlugins.push(createStylelint())
	vitePlugins.push(createSvgIcon())
	vitePlugins.push(createComponents())
	vitePlugins.push(createAutoImport())
	vitePlugins.push(createSetupExtend())

	return vitePlugins
}
```

``` js
// vite.config.js
plugins: [...createVitePlugins(env, command === 'build')]
```
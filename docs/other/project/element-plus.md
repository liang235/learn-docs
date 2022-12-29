# element-plus
- [element-plus](https://element-plus.gitee.io/zh-CN/guide/installation.html): UI 样式库
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components):  按需导入 api
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import): 自动导入 api

## 安装
```
pnpm add element-plus
pnpm add -D unplugin-vue-components unplugin-auto-import
```

## 配置 unplugin-vue-components unplugin-auto-import 插件
- 在 `config/plugins/unplugin-auto-import.js` 中配置，目录按自己习惯创建即可
- 在 `config/plugins/unplugin-vue-components.js` 中配置，目录按自己习惯创建即可

``` js
// unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite' // 自动导入 composition api
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 自动导入 ElementPlus
// import IconsResolver from 'unplugin-icons/resolver'

export default function createAutoImport() {
	return AutoImport({
		imports: [
			'vue',
			'vue-router',
			{
				vue: ['defineProps', 'defineEmits', 'defineExpose', 'withDefaults']
			},
			'pinia'
		],
		/**
		 * 自定义解析器，与 unplug-vue-components 兼容
		 * 参见 https://github.com/antfu/unplugin-auto-import/pull/23/
		 */
		resolvers: [
			// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
			ElementPlusResolver()

			// 自动导入图标组件
			// IconsResolver({
			// 	prefix: 'Icon',
			// }),
		],
		/**
		 * 自动导入目录下的模块导出
		 * 默认情况下，它只扫描目录下的一层模块
		 */
		dirs: ['./src/utils/composables/**']
	})
}
```

``` js
import Components from 'unplugin-vue-components/vite' // 按需导入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 按需导入 ElementPlus
// import IconsResolver from 'unplugin-icons/resolver'

export default function createComponents() {
	return Components({
		// 自定义组件的解析器
		resolvers: [
			// 按需导入 Element Plus 组件
			ElementPlusResolver()

			// 自动注册图标组件
			// IconsResolver({
			// 	enabledCollections: ['ep'], // element-plus 图标库
			// }),
		],
		// 用于搜索组件的目录的相对路径
		dirs: ['src/components'],
		// 变换目标的滤波器
		include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/]
	})
}
```

## 使用 ElementPlus 自带图标

- 安装
```
pnpm install @element-plus/icons-vue
```

- `main.js` 引入
``` js
import { kebabCase } from 'lodash-es' // js 工具库

// ElementPlus 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(`ele-${kebabCase(key)}`, component)
}
```

- 使用的时候需要加前缀 `ele-`

# 全局资源

## 图片
框架用到的图片资源都放在 `/src/assets/images/` 目录下，可自行新建文件夹分类管理

## 样式
样式存放目录为 `/src/assets/styles/` ，因为 Vue 的文件特性，页面样式建议写在 .vue 文件里，所以该目录只存放全局样式，方便统一管理

此目录下还有一个特殊目录，即 `/src/assets/styles/resources/` ，这是全局 `SCSS` 资源目录，首先这个目录里只支持 `.scss` 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用

::: tip 说明
全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西
:::

配置自动导入，无需在页面上引用即可生效并使用
``` js
// vite.config.js
import fs from 'fs' // node 文件模块

// 导入全局 scss 资源
const scssResources = []
fs.readdirSync('src/assets/styles/resources').map(dirname => {
    if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
        scssResources.push(
            `@use "src/assets/styles/resources/${dirname}" as *;`
        )
    }
})

// 配置全局 scss 资源
css: {
    preprocessorOptions: {
        scss: {
            additionalData: scssResources.join('')
        }
    }
}
```

## 组件

### 公共组件 [components 组件](../components/index.md)
::: tip 提示
公共组件在使用时，无需手动引入，框架会在你使用时自动引入，该特性由 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 提供支持
:::

公共组件存放在 `/src/components/` 目录下，每个组件按文件夹进行区分

每个组件的文件夹内至少保留一个文件名为 `index.vue` 的组件入口（可参考 `SvgIcon` 组件），文件夹名称即为组件名

### 局部组件
局部组件没有提供专门的存放目录，我们建议采用就近原则，即局部组件与使用页面离得越近越好。你可以在每个模块的文件夹下，建立一个 `components` 文件夹用于存放局部组件
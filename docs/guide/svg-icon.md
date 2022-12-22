# 图标

## 自定义图标
你可以去[阿里巴巴矢量图标库](https://www.iconfont.cn/)，或者其它支持下载 `SVG` 图标文件的网站，又或者是设计师绘制的 `SVG` 文件，将准备好的 `SVG` 图标文件放到 `/src/assets/icons/` 目录下，然后在页面中就可以通过 `SvgIcon` 组件使用了，`name` 就是 `svg` 的文件名

所有的自定义图标名称都为 `user-name` 连接格式

``` html
<!-- /src/assets/icons/example.svg -->
<svg-icon name="example" />
```

因为 `SvgIcon` 组件只负责渲染 `<svg>` 元素，而下载的 `SVG` 图标文件的尺寸可能不统一，所有封装的时候默认使用 `ElIcon` 组件进行包裹，对 `<svg>` 元素进行统一处理
``` html
<!-- 同时你还可以使用 el-icon 提供的 color 和 size 属性 -->
<svg-icon name="example" color="red" size="48px"/>
```

## 使用 Element Plus 自带图标
需执行 `pnpm install @element-plus/icons-vue` 安装依赖

然后在 `src/main.js` 进行全局注册

``` js
// ElementPlus 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`ele-${kebabCase(key)}`, component)
}
```

使用的时候需要加前缀 `ele-`

``` html
<svg-icon name="ele-aim" />
```

## 使用 Iconify 中 Element Plus 图标
使用方式很简单，你只需进入 [Iconify](https://icon-sets.iconify.design/) 的 [Element Plus](https://icon-sets.iconify.design/ep/) 图标页面，然后点击需要使用的图标，复制图标名称 `ep:xxx`，最后通过 `Iconify` 提供的 `Icon` 组件就可以使用了

至于为什么是以 `ep:` 开头，是因为 `Element Plus Icon` 在 `iconify` 中是以 `ep:` 命名，请参考地址 [iconify](https://icon-sets.iconify.design/ep/)

``` vue
<template>
	<el-icon size="30">
        <Icon icon="ep:plus" />
    </el-icon>
</template>

<script setup>
import { Icon } from '@iconify/vue' // 矢量图标库
</script>
```

当然这么使用并没有很方便，依旧还是需要手动导入一个 `Icon` 组件。如果你也觉得麻烦的话，那么你可以使用 `SvgIcon` 组件来展示，框架已经帮你做好的所有处理

``` html
<svg-icon name="ep:arrow-right" />
```

## 使用其它图标集的图标
你可以在 [Iconify 官网](https://icon-sets.iconify.design/) 上查找 Iconify 提供的所有图标，并按照使用 `Element Plus` 图标的方式去使用。或者你也可以在 [Icônes 网站](https://icones.js.org/) 上查找你想要的图标，这是一个基于 `Iconify` 的在线图标搜索网站，它比 `Iconify` 官网的操作更直观

除此之外我们还推荐你安装 [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 这个 `VSCode` 扩展，方便在 `VSCode` 里预览图标

<ZoomImg src="/icones1.png" />

<ZoomImg src="/icones2.png" />

## 调用本地 Iconify 图标
由于 `Iconify` 图标默认是在线的服务，即首次调用会触发一个外部网络请求，去获取 `svg` 原始数据，并缓存在 `localStorage` 和 `sessionStorage` 中，这样下次再调用的时候，则直接从缓存中获取并展示

但如果你开发的后台应用是部署在内部网络，无法访问互联网，那么就需要使用到本地的 `Iconify` 图标

使用本地 `Iconify` 图标时，框架会在首次加载时候将所有图标进行注册，类似于全局引入的概念

在应用配置里修改 `Iconify` 图标的使用方式改为离线使用
```js {2-4}
const globalSettings = {
    app: {
        iconifyOfflineUse: true,
    },
}
```

`src/main.js`
``` js
// 加载 iconify 图标（element plus）
import { downloadAndInstall } from "@/plugins/iconify-ep.js"
if (useSettingsStore().app.iconifyOfflineUse) {
    downloadAndInstall()
}
```

`src/plugins/iconify-ep.js`
``` js
import { addCollection } from "@iconify/vue"

export async function downloadAndInstall() {
    const data = Object.freeze(
        await fetch("./icons/icons.json").then((r) => r.json())
    )
    addCollection(data)
}
```

`public/icons/icons.json` 都是 `ElementPlus` 图标的信息
``` json
{
    "prefix": "ep",
    "icons": {
        "add-location": {
            "body": "<path fill=\"currentColor\" d=\"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z\"/><path fill=\"currentColor\" d=\"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z\"/><path fill=\"currentColor\" d=\"M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z\"/>"
        },
    },
    "lastModified": 1660284884,
    "width": 1024,
    "height": 1024
}
```

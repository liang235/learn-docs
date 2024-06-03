# @iconify/vue
[Iconify](https://icon-sets.iconify.design/) 矢量图标库，`vue` 版本

安装完整版 `iconify`
```
pnpm add -D @iconify/json
```

## 安装
``` js
pnpm i @iconify/vue -D
```

## 使用
使用方式很简单，你只需进入 `Iconify` 的 [Element Plus](https://icon-sets.iconify.design/ep/) 图标页面，然后点击需要使用的图标，复制图标名称 `ep:xxx`，最后通过 `Iconify` 提供的 `Icon` 组件就可以使用了

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

## 高级-离线使用
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
// addCollection 是把图标进行注册，类似于全局引入的概念
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
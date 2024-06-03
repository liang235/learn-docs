# vxe-table
`Element Plus` 自带的 `el-table` 组件大部分时候只能满足简单需求的使用，如果对表格有更加复杂场景需求下的使用，推荐使用 `vxe-table`

## 安装 [官网地址](https://vxetable.cn/#/table/start/install)
```
pnpm i xe-utils vxe-table
```

## 全局安装
`src/main.js`
``` js
import { App, createApp } = 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

function useTable (app: App) {
    app.use(VXETable)

    // 给 vue 实例挂载内部对象，例如：
    // app.config.globalProperties.$XModal = VXETable.modal
    // app.config.globalProperties.$XPrint = VXETable.print
    // app.config.globalProperties.$XSaveFile = VXETable.saveFile
    // app.config.globalProperties.$XReadFile = VXETable.readFile
}

createApp(App).use(useTable).mount('#app')
```

## 按需引入请参考 [vite-plugin-style-import](./vite-plugin-style-import.md)
# element-plus/icons-vue
`element-plus Icon` 图标

## 安装 [官网地址](https://element-plus.gitee.io/zh-CN/guide/design.html)

```
pnpm install @element-plus/icons-vue
```

## 使用配置
`main.js` 注册所有图标
``` js
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
```

# vite-plugin-remove-console
生产环境移除 console

## 安装 [官网地址](https://github.com/xiaoxian521/vite-plugin-remove-console/blob/HEAD/README.zh_CN.md)
```
pnpm i vite-plugin-remove-console -D
```

## 使用配置
`vite/plugins/vite-plugin-remove-console.js`
``` js
// 生产环境移除 console
// 配置{external: ["src/assets/iconfont/iconfont.js"] } 对某文件 console 不剔除
removeConsole({
    external: ['src/main.js']
}),
```
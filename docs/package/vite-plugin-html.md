# vite-plugin-html
一个针对 `index.html`，提供压缩和基于 `ejs` 模板等功能的 `vite` 插件 <br/>
通过搭配 `.env` 文件，可以在开发或构建项目时，对 `index.html` 注入动态数据，例如替换网站标题

## 安装 [官网地址](https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md)
```
pnpm i vite-plugin-html -D
```

## 使用配置
`vite/plugins/vite-plugin-html.js`

## 功能
- `HTML` 压缩能力
- `EJS` 模版能力
- 多页应用支持
- 支持自定义 `entry`
- 支持自定义 `template`
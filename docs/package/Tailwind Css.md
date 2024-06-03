# Tailwind Css
`Tailwind CSS` 是一个功能类优先的 `CSS` 框架，它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计

## 安装 [官网地址](https://tailwindcss.com/docs/guides/vite#vue)
``` js
// vite 内置了 postcss 所有不需要安装，剩下的按照官网提示进行安装即可
pnpm install -D tailwindcss postcss autoprefixer
```

## 注意事项
``` js
css: {
    // vite.config.js 中的 postcss 不需要，否则不起作用
    postcss: {
        plugins: []
    },
},
```
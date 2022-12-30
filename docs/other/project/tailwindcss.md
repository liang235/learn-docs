# tailwindcss
- [tailwindcss](https://tailwindcss.com/docs/guides/vite#vue): 功能类优先的 CSS 框架
- [autoprefixer](https://github.com/postcss/autoprefixer): 自动添加 css 前缀
 PostCSS nested 代替
- [@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp): 多行文本截断...

## 安装
```
pnpm install -D tailwindcss autoprefixer @tailwindcss/line-clamp
npx tailwindcss init -p
```

## 这三个出了问题之后再补装即可
- [postcss](https://github.com/postcss/postcss/blob/main/docs/README-cn.md): 一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能，vite 内置了该插件，是否安装都可以
- [postcss-import](https://github.com/postcss/postcss-import): 插件通过内联内容转换 @import 规则
- [postcss-nesting](https://www.npmjs.com/package/postcss-nesting): 允许你按照 CSS 嵌套规范将样式规则嵌套在一起。如果你想要嵌套规则与 Sass 的工作方式相同，你可能想要使用

## 配置 tailwind.config.cjs
``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	corePlugins: {
		preflight: false, // 把 css 默认样式给屏蔽掉，使用 tailwindcss 的默认样式
	},
	theme: {
		extend: {
			boxShadow: {
				'el-base': 'var(--el-box-shadow)',
				'el-light': 'var(--el-box-shadow-light)',
				'el-lighter': 'var(--el-box-shadow-lighter)',
				'el-dark': 'var(--el-box-shadow-dark)',
			},
			colors: {
				// 设置主题颜色
				theme: {
					primary: {
						default: 'var(--el-color-primary)',
						light: {
							3: 'var(--el-color-primary-light-3)',
							5: 'var(--el-color-primary-light-5)',
							7: 'var(--el-color-primary-light-7)',
							9: 'var(--el-color-primary-light-9)',
						},
						'dark-2': 'var(--el-color-primary-dark-2)',
					},
					text: {
						primary: 'var(--el-text-color-primary)',
						regular: 'var(--el-text-color-regular)',
						secondary: 'var(--el-text-color-secondary)',
						placeholder: 'var(--el-text-color-placeholder)',
						disabled: 'var(--el-text-color-disabled)',
					},
					border: {
						darker: 'var(--el-border-color-darker)',
						dark: 'var(--el-border-color-dark)',
						base: 'var(--el-border-color-base)',
						light: 'var(--el-border-color-light)',
						lighter: 'var(--el-border-color-lighter)',
						'extra-light': 'var(--el-border-color-extra-light)',
					},
					fill: {
						darker: 'var(--el-fill-color-darker)',
						dark: 'var(--el-fill-color-dark)',
						base: 'var(--el-fill-color-base)',
						light: 'var(--el-fill-color-light)',
						lighter: 'var(--el-fill-color-lighter)',
						'extra-light': 'var(--el-fill-color-extra-light)',
						blank: 'var(--el-fill-color-blank)',
					},
					background: {
						base: 'var(--el-bg-color)',
						page: 'var(--el-bg-color-page)',
						overlay: 'var(--el-bg-color-overlay)',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
```

## 将 Tailwind 指令添加到 CSS 中
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 或者引入下面 */
@import "tailwindcss/tailwind.css";
```
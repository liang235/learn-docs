# autoprefixer
`css` 自动添加浏览器前缀

## 安装 [官网地址](https://github.com/postcss/autoprefixer#readme)
```
pnpm install autoprefixer -D
```

## 使用
`vite.config.js` 中引入
```
import autoprefixer from 'autoprefixer' // 处理 css 前缀

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, __dirname)

	return {
		css: {
			// 内联的 PostCSS 配置
			postcss: {
				plugins: [autoprefixer],
			},
		},
	}
})
```
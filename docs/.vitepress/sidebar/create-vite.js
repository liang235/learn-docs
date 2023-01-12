const commonPath = '/create-vite' // 根路径

export default [
	{
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '项目搭建', link: `${commonPath}/create-vite.md` },
			{ text: 'prettier', link: `${commonPath}/prettier.md` },
			{ text: 'Eslint', link: `${commonPath}/eslint.md` },
			{ text: 'stylelint', link: `${commonPath}/stylelint.md` },
			{ text: 'husky', link: `${commonPath}/husky.md` },
			{ text: 'lint-staged', link: `${commonPath}/lint-staged.md` },
			{ text: 'jsconfig', link: `${commonPath}/jsconfig.md` },
			{ text: 'svg 图标', link: `${commonPath}/svg.md` },
			{ text: 'element-plus', link: `${commonPath}/element-plus.md` },
			{ text: 'tailwindcss', link: `${commonPath}/tailwindcss.md` },
			{ text: '给 setup 语法糖添加 name', link: `${commonPath}/setup-name.md` },
			{ text: '兼容 IE', link: `${commonPath}/compat-ie.md` },
			{ text: '自动部署', link: `${commonPath}/deploy-sync.md` },
			{ text: 'config 配置', link: `${commonPath}/config.md` },
			{ text: 'npm-run-all', link: `${commonPath}/npm-run-all.md` },
			{ text: 'mitt 事件总线', link: `${commonPath}/mitt.md` },
			{ text: 'tools 工具箱', link: `${commonPath}/tools.md` },
			{ text: 'date 日期格式', link: `${commonPath}/date.md` },
		],
	},
]

const commonPath = '/other' // 根路径
const projectPath = '/other/project' // 项目

export default [
	{
		text: 'other',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '项目',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '项目搭建', link: `${projectPath}/create-vite.md` },
			{ text: 'prettier', link: `${projectPath}/prettier.md` },
			{ text: 'Eslint', link: `${projectPath}/eslint.md` },
			{ text: 'stylelint', link: `${projectPath}/stylelint.md` },
			{ text: 'husky', link: `${projectPath}/husky.md` },
			{ text: 'lint-staged', link: `${projectPath}/lint-staged.md` },
			{ text: 'jsconfig', link: `${projectPath}/jsconfig.md` },
			{ text: 'svg 图标', link: `${projectPath}/svg.md` },
			{ text: 'element-plus', link: `${projectPath}/element-plus.md` },
			{ text: 'tailwindcss', link: `${projectPath}/tailwindcss.md` },
			{ text: '给 setup 语法糖添加 name', link: `${projectPath}/setup-name.md` },
			{ text: '兼容 IE', link: `${projectPath}/compat-ie.md` },
			{ text: '自动部署', link: `${projectPath}/deploy-sync.md` },
			{ text: 'config 配置', link: `${projectPath}/config.md` },
			{ text: 'npm-run-all', link: `${projectPath}/npm-run-all.md` },
			{ text: 'mitt 事件总线', link: `${projectPath}/mitt.md` },
		],
	},
	{
		text: '工具',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'npm', link: `${commonPath}/npm.md` },
			{ text: 'iterm', link: `${commonPath}/iterm.md` },
		],
	},
]

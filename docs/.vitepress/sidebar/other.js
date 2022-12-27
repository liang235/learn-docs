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
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '项目搭建', link: `${projectPath}/create-vite.md` },
			{ text: 'prettier', link: `${projectPath}/prettier.md` },
			{ text: 'Eslint', link: `${projectPath}/eslint.md` },
			{ text: 'stylelint', link: `${projectPath}/stylelint.md` },
			{ text: 'husky', link: `${projectPath}/husky.md` },
			{ text: 'lint-staged', link: `${projectPath}/lint-staged.md` },
			{ text: '自动部署', link: `${commonPath}/deploy-sync.md` },
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

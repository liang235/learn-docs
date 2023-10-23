const commonPath = '/other' // 根路径

export default [
	// {
	// 	text: 'other',
	// 	collapsible: false, // 是否可折叠的侧边栏组
	// 	collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
	// 	items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	// },
	{
		text: '工具',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'cmd', link: `${commonPath}/cmd.md` },
			{ text: 'nvm', link: `${commonPath}/nvm.md` },
			{ text: 'npm', link: `${commonPath}/npm.md` },
			{ text: 'nrm', link: `${commonPath}/nrm.md` },
			{ text: 'cnpm', link: `${commonPath}/cnpm.md` },
			{ text: 'pnpm', link: `${commonPath}/pnpm.md` },
			{ text: 'vscode', link: `${commonPath}/vscode.md` },
			{ text: 'typora', link: `${commonPath}/typora.md` },
			{ text: 'iterm', link: `${commonPath}/iterm.md` },
			{ text: 'eclipse', link: `${commonPath}/eclipse.md` },
			{ text: 'jdk', link: `${commonPath}/jdk.md` },
		],
	},
]

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
			{ text: 'mac', link: `${commonPath}/mac.md` },
			{ text: 'cmd', link: `${commonPath}/cmd.md` },
			{ text: 'nvm', link: `${commonPath}/nvm.md` },
			{ text: 'npm', link: `${commonPath}/npm.md` },
			{ text: 'nrm', link: `${commonPath}/nrm.md` },
			{ text: 'cnpm', link: `${commonPath}/cnpm.md` },
			{ text: 'pnpm', link: `${commonPath}/pnpm.md` },
			{ text: 'homebrew', link: `${commonPath}/homebrew.md` },
			{ text: 'git', link: `${commonPath}/git.md` },
			{ text: 'chrome', link: `${commonPath}/chrome.md` },
			{ text: 'vscode', link: `${commonPath}/vscode.md` },
			{ text: 'sourcetree', link: `${commonPath}/sourcetree.md` },
			{ text: 'typora', link: `${commonPath}/typora.md` },
			{ text: 'idea', link: `${commonPath}/idea.md` },
			{ text: 'iterm', link: `${commonPath}/iterm.md` },
			{ text: 'eclipse', link: `${commonPath}/eclipse.md` },
			{ text: 'jdk', link: `${commonPath}/jdk.md` },
		],
	},
]

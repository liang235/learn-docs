const commonPath = '/directory' // 根路径

export default [
	{
		text: '目录结构',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '.github', link: `${commonPath}/github.md` },
			{ text: 'tsconfig.json', link: `${commonPath}/tsconfig.md` },
		],
	},
]

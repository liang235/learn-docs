const commonPath = '/css' // 根路径

export default [
	{
		text: 'css',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '介绍', link: `${commonPath}/index.md` },
		],
	},
	{
		text: 'CSS 案例',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '立体文字', link: `${commonPath}/3d_text.md` },
		],
	},
]

const commonPath = '/css' // 根路径

export default [
	{
		text: 'css',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '介绍', link: `${commonPath}/index.md` },
			{ text: '常用样式', link: `${commonPath}/common.md` },
		],
	},
]

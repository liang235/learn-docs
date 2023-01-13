const commonPath = '/javascript' // 根路径

export default [
	{
		text: 'JavaScript',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '基础知识',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '操作符', link: `${commonPath}/operator.md` },
			{ text: '字符串', link: `${commonPath}/string.md` },
			{ text: '遍历循环', link: `${commonPath}/traversal.md` },
		],
	},
]

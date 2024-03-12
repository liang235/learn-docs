const commonPath = '/java' // 根路径

export default [
	// {
	// 	text: 'java',
	// 	collapsible: false, // 是否可折叠的侧边栏组
	// 	collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
	// 	items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	// },
	{
		text: '基础知识',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'JDK 的下载与安装', link: `${commonPath}/jdk.md` },
			{ text: '第一个应用程序', link: `${commonPath}/helloword.md` },
			{ text: '基础语法', link: `${commonPath}/basic-grammar.md` },
		],
	},
]

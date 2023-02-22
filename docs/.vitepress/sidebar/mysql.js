const commonPath = '/mysql' // 根路径

export default [
	{
		text: '',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '安装', link: `${commonPath}/index.md` },
			{ text: 'MySQL 操作命令', link: `${commonPath}/command.md` },
			{ text: '数据库介绍', link: `${commonPath}/introduce.md` },
		],
	},
]

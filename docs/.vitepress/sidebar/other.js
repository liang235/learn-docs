const commonPath = '/other' // 根路径
const casePath = '/other/case' // 案例
const toolsPath = '/other/tools' // 工具

export default [
	{
		text: 'other',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '案例',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '字符串', link: `${casePath}/string.md` }],
	},
	{
		text: '工具',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'npm', link: `${toolsPath}/npm.md` },
			{ text: 'iterm', link: `${toolsPath}/iterm.md` },
			{ text: 'eclipse', link: `${toolsPath}/eclipse.md` },
		],
	},
]

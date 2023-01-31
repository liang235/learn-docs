const commonPath = '/element-plus' // 根路径

export default [
	{
		text: 'ElementPlus',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '组件',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'Cascader 级联选择器', link: `${commonPath}/cascader.md` },
			{ text: 'Radio 单选框', link: `${commonPath}/radio.md` },
		],
	},
]

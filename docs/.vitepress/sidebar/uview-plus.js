const commonPath = '/uview-plus' // 根路径

export default [
	{
		text: 'uview-plus',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '介绍', link: `${commonPath}/index.md` },
		],
	},
	{
		text: '表单组件',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'Form 表单', link: `${commonPath}/form.md` },
			{ text: 'Input 输入框', link: `${commonPath}/input.md` },
		],
	},
	{
		text: '反馈组件',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'ActionSheet 操作菜单', link: `${commonPath}/actionSheet.md` },
		],
	},
]

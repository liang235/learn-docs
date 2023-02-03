const commonPath = '/vue' // 根路径

export default [
	{
		text: 'Vue',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '基础知识',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '全局方法', link: `${commonPath}/global.md` },
			{ text: 'router 路由', link: `${commonPath}/router.md` },
			{ text: ':deep() - 样式穿透', link: `${commonPath}/:deep().md` },
			{ text: 'Class 与 Style 绑定', link: `${commonPath}/class-style-bind.md` },
			{ text: '异步组件', link: `${commonPath}/async-components.md` },
			{ text: '$attrs', link: `${commonPath}/$attrs.md` },
		],
	},
]

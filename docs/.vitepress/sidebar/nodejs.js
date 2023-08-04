const commonPath = '/nodejs' // 根路径

export default [
	{
		text: 'NodeJs',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '插件',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'qs', link: `${commonPath}/qs.md` },
			{ text: 'path-browserify', link: `${commonPath}/path-browserify.md` },
			{ text: 'path-to-regexp', link: `${commonPath}/path-to-regexp.md` },
			{ text: 'fs-extra', link: `${commonPath}/fs-extra.md` },
		],
	},
]

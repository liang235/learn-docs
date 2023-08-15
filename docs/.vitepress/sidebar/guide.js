const commonPath = '/guide' // 根路径

export default [
	{
		text: 'Project-Admin',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			// 默认展示 `/guide/index.md` page.
			{ text: '介绍', link: `${commonPath}/index.md` },
		],
	},
	{
		text: '入门',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '准备工作', link: `${commonPath}/ready.md` },
			{ text: '开始', link: `${commonPath}/start.md` },
			{ text: '配置', link: `${commonPath}/config.md` },
			{ text: '布局', link: `${commonPath}/layout.md` },
			{ text: '路由（导航）', link: `${commonPath}/router.md` },
			{ text: '全局资源', link: `${commonPath}/global-resources.md` },
			{ text: 'SVG 图标', link: `${commonPath}/svg-icon.md` },
		],
	},
	{
		text: '高级',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '权限', link: `${commonPath}/permission.md` },
			{ text: '页面缓存', link: `${commonPath}/keep-alive.md` },
			{ text: '高级 position:fixed', link: `${commonPath}/position-fixed.md` },
			{ text: 'tools 工具库', link: `${commonPath}/tools.md` },
			{ text: '正则验证', link: `${commonPath}/regexp.md` },
		],
	},
	{
		text: '其他',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '常见问题', link: `${commonPath}/q-a.md` }],
	},
]

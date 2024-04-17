const commonPath = '/uni-app' // 根路径

export default [
	{
		text: 'uni-app',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '基础知识',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '目录结构', link: `${commonPath}/catalogue.md` },
			{ text: '条件编译', link: `${commonPath}/preprocessor.md` },
			{ text: '生命周期', link: `${commonPath}/lifecycle.md` },
			{ text: '页面路由', link: `${commonPath}/routing.md` },
			{ text: 'vue 组件', link: `${commonPath}/component.md` },
			{ text: '常用 api', link: `${commonPath}/api.md` },
			{ text: '事件映射表', link: `${commonPath}/incident.md` },
			{ text: '环境变量', link: `${commonPath}/env-variable.md` },
		],
	},
	{
		text: '开发注意事项',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '微信小程序', link: `${commonPath}/weixin.md` },
			{ text: '钉钉小程序', link: `${commonPath}/dingding.md` },
		],
	},
]

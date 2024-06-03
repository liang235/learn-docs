const commonPath = '/vue' // 根路径

export default [
	// {
	// 	text: 'Vue',
	// 	collapsible: false, // 是否可折叠的侧边栏组
	// 	collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
	// 	items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	// },
	{
		text: '基础知识',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'getCurrentInstance', link: `${commonPath}/getCurrentInstance.md` },
			{ text: 'v-model', link: `${commonPath}/model.md` },
			{ text: '事件修饰符', link: `${commonPath}/event-modifiers.md` },
			{ text: 'defineProps 和 defineEmits', link: `${commonPath}/props-emits.md` },
			{ text: 'defineModel', link: `${commonPath}/defineModel.md` },
			{ text: 'watch 监听', link: `${commonPath}/watch.md` },
			{ text: ':deep() 样式穿透', link: `${commonPath}/:deep().md` },
			{ text: '全局方法', link: `${commonPath}/global.md` },
			{ text: '异步组件', link: `${commonPath}/async-components.md` },
		],
	},
]

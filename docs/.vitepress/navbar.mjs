/*
 * @Description: 头部导航
 */
export default [
	{
		text: '首页',
		link: '/',
	},
	{
		text: '系统',
		items: [
			{
				items: [
					{ text: '准备工作', link: '/guide/ready', activeMatch: '/guide/' },
					{ text: '项目搭建', link: '/create-vite/create-vite', activeMatch: '/create-vite/' },
					{ text: 'components 组件', link: '/components/index', activeMatch: '/components/' },
					{ text: 'package.json', link: '/package/index', activeMatch: '/package/' },
					{ text: '目录结构', link: '/directory/index', activeMatch: '/directory/' },
				],
			},
		],
	},
	{
		text: '生态',
		items: [
			{
				items: [
					{ text: 'element-plus', link: '/element-plus/index', activeMatch: '/element-plus/' },
					{ text: 'vueuse', link: '/vueuse/index', activeMatch: '/vueuse/' },
					{ text: 'lodash', link: '/lodash/index', activeMatch: '/lodash/' },
					{ text: 'echarts', link: '/echarts/index', activeMatch: '/echarts/' },
					{ text: 'markdown', link: '/markdown/index', activeMatch: '/markdown/' },
					{ text: 'vitepress', link: '/vitepress/index', activeMatch: '/vitepress/' },
					{ text: 'sortable', link: '/sortable/index', activeMatch: '/sortable/' },
				],
			},
		],
	},
	{
		text: '案例',
		link: '/problem/index',
		activeMatch: '/problem/'
	},
	{
		text: 'Vue',
		link: '/vue/index',
		activeMatch: '/vue/'
	},
	{
		text: 'JavaScript',
		link: '/javascript/index',
		activeMatch: '/javascript/'
	},
	// {
	// 	text: 'TypeScript',
	// 	link: 'https://ts.xcatliu.com/',
	// },
	{
		text: 'CSS',
		link: '/css/index',
		activeMatch: '/css/'
	},
	{
		text: 'NodeJs',
		link: '/nodejs/index',
		activeMatch: '/nodejs/'
	},
	{
		text: '其他',
		link: '/other/index',
		activeMatch: '/other/'
	},
]

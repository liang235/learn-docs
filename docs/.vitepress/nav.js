/*
 * @Description: 头部导航
 * @Date: 2023-02-06 16:24:50
 * @LastEditTime: 2023-08-10 15:27:29
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
					{ text: '准备工作', link: '/guide/ready' },
					{ text: '项目搭建', link: '/create-vite/create-vite' },
					{ text: 'components 组件', link: '/components/index' },
					{ text: 'package.json', link: '/package/index' },
					{ text: '目录结构', link: '/directory/index' },
				],
			},
		],
	},
	{
		text: '生态',
		items: [
			{
				items: [
					{ text: 'element-plus', link: '/element-plus/index' },
					{ text: 'vueuse', link: '/vueuse/index' },
					{ text: 'lodash', link: '/lodash/index' },
					{ text: 'echarts', link: '/echarts/index' },
					{ text: 'markdown', link: '/markdown/index' },
					{ text: 'vitepress', link: '/vitepress/index' },
				],
			},
		],
	},
	{
		text: 'Q&A',
		link: '/problem/index',
	},
	{
		text: 'Vue',
		link: '/vue/index',
	},
	{
		text: 'JavaScript',
		link: '/javascript/index',
	},
	// {
	// 	text: 'TypeScript',
	// 	link: 'https://ts.xcatliu.com/',
	// },
	{
		text: 'CSS',
		link: '/css/index',
	},
	// {
	// 	text: 'Java',
	// 	items: [
	// 		{
	// 			items: [
	// 				{ text: 'Java', link: '/java/index' },
	// 				{ text: 'MySQL 数据库', link: '/mysql/index' },
	// 				{ text: 'JSP 开发', link: '/jsp/index' },
	// 				{ text: 'SpringBoot', link: '/springboot/index' },
	// 			],
	// 		},
	// 	],
	// },
	{
		text: 'NodeJs',
		link: '/nodejs/index',
	},
	{
		text: '其他',
		link: '/other/index',
	},
]

/*
 * @Description: 配置 VitePress 站点的基本文件
 * @Date: 2022-12-22 20:00:00
 * @LastEditTime: 2022-12-23 19:18:32
 */
import { defineConfig } from 'vitepress'
import guideSidebar from './sidebar/guide.js' // 指南
import packageSidebar from './sidebar/package.js' // 安装依赖
import vueuseSidebar from './sidebar/vueuse.js' // vue 工具库
import lodashSidebar from './sidebar/lodash.js' // js 工具库
import echartsSidebar from './sidebar/echarts.js' // echarts 图表
import markdownSidebar from './sidebar/markdown.js' // markdown 语法
import componentsSidebar from './sidebar/components.js' // 组件
import vueSidebar from './sidebar/vue.js' // Vue
import javascriptSidebar from './sidebar/javascript.js' // JavaScript
import javaSidebar from './sidebar/java.js' // JavaScript
import nodejsSidebar from './sidebar/nodejs.js' // NodeJs
import elementPlusSidebar from './sidebar/element-plus.js' // Element-plus
import otherSidebar from './sidebar/other.js' // 其他

export default defineConfig({
	title: '官方文档', // 站点的标题，浏览器 title 部分
	description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈',
	lang: 'zh-cn', // 语言
	base: '/learn-docs/',
	head: [['link', { rel: 'icon', href: './vite.svg' }]],

	themeConfig: {
		siteTitle: '官方文档', // 网站标题，默认情况下，nav 显示站点引用config.title值的标题
		logo: '/vite.svg',
		outlineTitle: 'On this page', // 标题大纲

		// 可用于自定义出现在上一个和下一个链接上方的文本
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},

		// 多个侧边栏，根据页面路径显示不同的侧边栏
		sidebar: {
			'/guide/': guideSidebar,
			'/package/': packageSidebar,
			'/vueuse/': vueuseSidebar,
			'/lodash/': lodashSidebar,
			'/echarts/': echartsSidebar,
			'/markdown/': markdownSidebar,
			'/components/': componentsSidebar,
			'/vue/': vueSidebar,
			'/javascript/': javascriptSidebar,
			'/java/': javaSidebar,
			'/nodejs/': nodejsSidebar,
			'/element-plus/': elementPlusSidebar,
			'/other/': otherSidebar,
		},

		// 右侧 导航链接
		nav: [
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
							{ text: 'components 组件', link: '/components/index' },
							{ text: 'package.json', link: '/package/index' },
						],
					},
				],
			},
			{
				text: '生态',
				items: [
					{
						items: [
							{ text: 'vueuse', link: '/vueuse/index' },
							{ text: 'lodash', link: '/lodash/index' },
							{ text: 'echarts', link: '/echarts/index' },
							{ text: 'markdown', link: '/markdown/index' },
						],
					},
				],
			},
			{
				text: 'Vue',
				link: '/vue/index',
			},
			{
				text: 'ElementPlus',
				link: '/element-plus/index',
			},
			{
				text: 'JavaScript',
				link: '/javascript/index',
			},
			{
				text: 'Java',
				link: '/java/index',
			},
			{
				text: 'NodeJs',
				link: '/nodejs/index',
			},
			{
				text: '其他',
				link: '/other/index',
			},
		],

		// 当用户为时，该链接变为活动状态
		socialLinks: [{ icon: 'github', link: 'https://gitee.com/cdl235/docs' }],

		footer: {
			message: '根据MIT许可证发布',
			copyright: 'Copyright © 2022-present feiye',
		},
	},

	markdown: {
		lineNumbers: true, // 代码块显示行号
	},
})

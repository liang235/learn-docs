/*
 * @Description: 配置 VitePress 站点的基本文件
 * @Date: 2022-12-22 20:00:00
 * @LastEditTime: 2023-02-06 17:32:00
 */
import { defineConfig } from 'vitepress'
import sidebar from './sidebar.js' // 侧边栏
import algolia from './algolia.js' // 搜索查询
import nav from './nav.js' // 头部导航

export default defineConfig({
	title: '学习文档', // 站点的标题，浏览器 title 部分
	description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈',
	lang: 'zh-cn', // 语言
	base: '/learn-docs/',
	head: [['link', { rel: 'icon', href: './vite.svg' }]],

	themeConfig: {
		siteTitle: '学习文档', // 网站标题，默认情况下，nav 显示站点引用config.title值的标题
		logo: '/vite.svg',
		outlineTitle: 'On this page', // 标题大纲

		// 可用于自定义出现在上一个和下一个链接上方的文本
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},

		// 多个侧边栏，根据页面路径显示不同的侧边栏
		sidebar,

		// 头部导航
		nav,

		// 当用户为时，该链接变为活动状态
		socialLinks: [{ icon: 'github', link: 'https://gitee.com/cdl235/docs' }],

		footer: {
			message: '根据MIT许可证发布',
			copyright: 'Copyright © 2022-present feiye',
		},

		// 搜索查询
		algolia,
	},

	markdown: {
		lineNumbers: true, // 代码块显示行号
	},
})

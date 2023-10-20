/*
 * @Description: 配置 VitePress 站点的基本文件
 */
import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs' // 侧边栏
import nav from './navbar.mjs' // 头部导航

export default defineConfig({
	title: '学习文档', // 站点的标题，浏览器 title 部分
	description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈',
	lang: 'zh-cn', // 语言
	base: '/learn-docs/',
	head: [  
		['link', { rel: 'icon', href: '/vitepress-logo-mini.svg' }],
		['meta', { 'http-equiv': 'Expires', 'content': '0' }],
		['meta', { 'http-equiv': 'Pragma', 'content': 'no-cache' }],
		['meta', { 'http-equiv': 'Cache-control', 'content': 'no-cache' }],
		['meta', { 'http-equiv': 'Cache', 'content': 'no-cache' }],
	],

	themeConfig: {
		siteTitle: '学习文档', // 网站标题，默认情况下，nav 显示站点引用config.title值的标题
		logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

		// 可用于自定义出现在上一个和下一个链接上方的文本
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},

		// 多个侧边栏，根据页面路径显示不同的侧边栏
		sidebar,

		// 头部导航
		nav,

		// https://vitepress.vuejs.org/config/theme-config#sociallinks
		socialLinks: [{ icon: 'github', link: 'https://github.com/liang235/learn-docs' }],

		footer: {
			message: '根据MIT许可证发布',
			copyright: 'Copyright © 2022-present feiye',
		},

		// 标题大纲
		outlineTitle: '当前页导航',

		// 大纲显示级别：https://vitepress.vuejs.org/config/theme-config#outline
		outline: 'deep',

		// 搜索查询
		search: {
			provider: 'local',
			options: {
				translations: {
					button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
					},
				},
			},
		},
	},

	markdown: {
		lineNumbers: true, // 代码块显示行号
	},
})

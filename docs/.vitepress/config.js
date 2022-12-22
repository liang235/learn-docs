/*
 * @Description: 配置 VitePress 站点的基本文件
 * @Date: 2022-12-22 20:00:00
 * @LastEditTime: 2022-12-22 20:00:31
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '官方文档', // 站点的标题，浏览器 title 部分
    description: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。',
    lang: 'zh-cn', // 语言
    base: '/',
})
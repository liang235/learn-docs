/*
 * @Description: 多个侧边栏，根据页面路径显示不同的侧边栏
 * @Date: 2023-02-06 15:53:48
 * @LastEditTime: 2023-08-10 15:26:56
 */
export default {
	'/guide/': require('./sidebar/guide.js').default,
	'/package/': require('./sidebar/package.js').default,
	'/vueuse/': require('./sidebar/vueuse.js').default,
	'/lodash/': require('./sidebar/lodash.js').default,
	'/echarts/': require('./sidebar/echarts.js').default,
	'/markdown/': require('./sidebar/markdown.js').default,
	'/components/': require('./sidebar/components.js').default,
	'/vue/': require('./sidebar/vue.js').default,
	'/javascript/': require('./sidebar/javascript.js').default,
	'/java/': require('./sidebar/java.js').default,
	'/mysql/': require('./sidebar/mysql.js').default,
	'/jsp/': require('./sidebar/jsp.js').default,
	'/nodejs/': require('./sidebar/nodejs.js').default,
	'/element-plus/': require('./sidebar/element-plus.js').default,
	'/other/': require('./sidebar/other.js').default,
	'/directory/': require('./sidebar/directory.js').default,
	'/css/': require('./sidebar/css.js').default,
	'/create-vite/': require('./sidebar/create-vite.js').default,
	'/problem/': require('./sidebar/problem.js').default,
	'/vitepress/': require('./sidebar/vitepress.js').default,
}

/*
 * @Description: 多个侧边栏，根据页面路径显示不同的侧边栏
 * @Date: 2023-02-06 15:53:48
 * @LastEditTime: 2023-08-03 16:49:55
 */
import guideSidebar from './sidebar/guide.js' // 指南
import packageSidebar from './sidebar/package.js' // 安装依赖
import vueuseSidebar from './sidebar/vueuse.js' // vue 工具库
import lodashSidebar from './sidebar/lodash.js' // js 工具库
import echartsSidebar from './sidebar/echarts.js' // echarts 图表
import markdownSidebar from './sidebar/markdown.js' // markdown 语法
import componentsSidebar from './sidebar/components.js' // 组件
import vueSidebar from './sidebar/vue.js' // Vue
import javascriptSidebar from './sidebar/javascript.js' // JavaScript
import javaSidebar from './sidebar/java.js' // Java
import mysqlSidebar from './sidebar/mysql.js' // mysql
import jspSidebar from './sidebar/jsp.js' // mysql
import nodejsSidebar from './sidebar/nodejs.js' // NodeJs
import elementPlusSidebar from './sidebar/element-plus.js' // Element-plus
import otherSidebar from './sidebar/other.js' // 其他
import directorySidebar from './sidebar/directory.js' // 目录结构
import cssSidebar from './sidebar/css.js' // css
import createViteSidebar from './sidebar/create-vite.js' // 项目搭建
import problemSidebar from './sidebar/problem.js' // 常见问题

export default {
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
	'/mysql/': mysqlSidebar,
	'/jsp/': jspSidebar,
	'/nodejs/': nodejsSidebar,
	'/element-plus/': elementPlusSidebar,
	'/other/': otherSidebar,
	'/directory/': directorySidebar,
	'/css/': cssSidebar,
	'/create-vite/': createViteSidebar,
	'/problem/': problemSidebar,
}

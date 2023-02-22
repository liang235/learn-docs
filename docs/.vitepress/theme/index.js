/*
 * @Description: 使用自定义主题
 * @Date: 2022-09-08 17:08:17
 * @LastEditTime: 2023-02-22 16:52:15
 */
import { h } from 'vue' // vue
import Theme from 'vitepress/theme' // 主题方案
import './fonts/fira_code/fira_code.css'
import './styles/var.css'
import HomePreview from './components/HomePreview.vue' // 首页截图预览
import ZoomImg from './components/ZoomImg.vue' // 图片方法
import CustomerEvaluate from './components/CustomerEvaluate.vue'

export default {
	...Theme,
	Layout() {
		return h(Theme.Layout, null, {
			'home-features-after': () => h(HomePreview),
		})
	},
	enhanceApp({ app }) {
		app.component('ZoomImg', ZoomImg)
		app.component('CustomerEvaluate', CustomerEvaluate)
	},
}

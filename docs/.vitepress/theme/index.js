/*
 * @Description: 使用自定义主题
 */
import { onMounted, watch, nextTick } from 'vue'
import Theme from 'vitepress/theme' // 主题方案
import { useRoute } from 'vitepress'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'
import mediumZoom from 'medium-zoom'
import ZoomImg from './components/ZoomImg.vue' // 图片方法
import CustomerEvaluate from './components/CustomerEvaluate.vue'

export default {
	...Theme,
	setup() {
		const route = useRoute()
		const initZoom = () => {
			mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
		}
		onMounted(() => initZoom()),
			watch(
				() => route.path,
				() => nextTick(() => initZoom()),
			)
	},
	enhanceApp({ app }) {
		app.component('ZoomImg', ZoomImg)
		app.component('CustomerEvaluate', CustomerEvaluate)
	},
}

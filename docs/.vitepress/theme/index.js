/*
 * @Description: 使用自定义主题
 * @Date: 2022-09-08 17:08:17
 * @LastEditTime: 2022-11-22 12:52:02
 */
import { h } from 'vue' // vue
import Theme from 'vitepress/theme' // 主题方案
import './var.scss' // css 变量
import './custom.scss' // 自定义 CSS
import HomePreview from './components/HomePreview.vue' // 首页截图预览
import ZoomImg from './components/ZoomImg.vue' // 图片方法
import CustomerEvaluate from './components/CustomerEvaluate.vue'

export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            'home-features-after': () => h(HomePreview)
        })
    },
    enhanceApp({ app }) {
        app.component('ZoomImg', ZoomImg)
        app.component('CustomerEvaluate', CustomerEvaluate)
    }
}

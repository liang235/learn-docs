const commonPath = '/package' // 根路径
const commonPath1 = '/package/dependencies'
const commonPath2 = '/package/devDependencies'

export default [
	{
		text: 'package.json',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: 'dependencies',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: true, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			// 默认展示 `/plugin/index.md` page.
			{ text: 'vue-router', link: `${commonPath1}/vue-router.md` },
			{ text: 'element-plus', link: `${commonPath1}/element-plus.md` },
			{ text: 'element-plus-icons-vue', link: `${commonPath1}/element-plus-icons-vue.md` },
			{ text: 'normalize.css 重置样式', link: `${commonPath1}/normalize.md` },
			{ text: 'pinia', link: `${commonPath1}/pinia.md` },
			{ text: 'pinia-plugin-persist', link: `${commonPath1}/pinia-plugin-persist.md` },
			{ text: 'vueuse-core', link: `${commonPath1}/vueuse-core.md` },
			{ text: 'vueuse-motion', link: `${commonPath1}/vueuse-motion.md` },
			{ text: 'vueuse-gesture', link: `${commonPath1}/vueuse-gesture.md` },
			{ text: 'vueuse-sound', link: `${commonPath1}/vueuse-sound.md` },
			{ text: 'path-browserify', link: `${commonPath1}/path-browserify.md` },
			{ text: 'path-to-regexp', link: `${commonPath1}/path-to-regexp.md` },
			{ text: 'nprogress 进度条', link: `${commonPath1}/nprogress.md` },
			{ text: 'hotkeys 键盘快捷键', link: `${commonPath1}/hotkeys-js.md` },
			{ text: 'dayjs 日期格式化', link: `${commonPath1}/dayjs.md` },
			{ text: 'wangEditor 富文本编辑器', link: `${commonPath1}/wangEditor.md` },
			{ text: 'vue-json-excel3 导出 excel', link: `${commonPath1}/vue-json-excel3.md` },
			{ text: 'vxe-table', link: `${commonPath1}/vxe-table.md` },
			{ text: 'notify 浏览器通知', link: `${commonPath1}/notify.md` },
			{ text: 'vue3-count-to 数字滚动', link: `${commonPath1}/countup.md` },
			{ text: 'splitpanes 窗格拆分器', link: `${commonPath1}/splitpanes.md` },
			{ text: 'cropper 图片裁剪', link: `${commonPath1}/cropper.md` },
			{ text: 'v-md-editor Md 编辑器', link: `${commonPath1}/v-md-editor.md` },
			{ text: 'vue-grid-layout 栅格布局', link: `${commonPath1}/vue-grid-layout.md` },
		],
	},
	{
		text: 'devDependencies',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: true, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'plugin-vue', link: `${commonPath2}/plugin-vue.md` },
			{ text: 'autoprefixer', link: `${commonPath2}/autoprefixer.md` },
			{ text: 'sass', link: `${commonPath2}/sass.md` },
			{ text: 'Windi CSS', link: `${commonPath2}/Windi CSS.md` },
			{ text: 'stylelint', link: `${commonPath2}/stylelint.md` },
			{ text: 'eslint', link: `${commonPath2}/eslint.md` },
			{ text: 'Tailwind Css', link: `${commonPath2}/Tailwind Css.md` },
			{ text: 'unplugin-auto-import', link: `${commonPath2}/unplugin-auto-import.md` },
			{ text: 'unplugin-vue-components', link: `${commonPath2}/unplugin-vue-components.md` },
			{ text: 'unplugin-icons', link: `${commonPath2}/unplugin-icons.md` },
			{ text: 'iconify-vue', link: `${commonPath2}/iconify-vue.md` },
			{ text: 'vite-plugin-vue-setup-extend', link: `${commonPath2}/vite-plugin-vue-setup-extend.md` },
			{ text: 'vite-plugin-svg-icons', link: `${commonPath2}/vite-plugin-svg-icons.md` },
			{ text: 'vite-plugin-html', link: `${commonPath2}/vite-plugin-html.md` },
			{ text: 'vite-plugin-style-import', link: `${commonPath2}/vite-plugin-style-import.md` },
			{ text: 'vite-plugin-vue-inspector', link: `${commonPath2}/vite-plugin-vue-inspector.md` },
			{ text: 'vite-plugin-compression', link: `${commonPath2}/vite-plugin-compression.md` },
			{ text: 'vite-plugin-theme', link: `${commonPath2}/vite-plugin-theme.md` },
			{ text: 'vite-plugin-remove-console', link: `${commonPath2}/vite-plugin-remove-console.md` },
		],
	},
]

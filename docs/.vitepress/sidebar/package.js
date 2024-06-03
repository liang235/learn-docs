const commonPath = '/package' // 根路径
export default [
	{
		text: 'package.json',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: 'dependencies',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			// 默认展示 `/plugin/index.md` page.
			{ text: 'vue-router', link: `${commonPath}/vue-router.md` },
			{ text: 'element-plus', link: `${commonPath}/element-plus.md` },
			{ text: 'element-plus-icons-vue', link: `${commonPath}/element-plus-icons-vue.md` },
			{ text: 'normalize.css 重置样式', link: `${commonPath}/normalize.md` },
			{ text: 'pinia', link: `${commonPath}/pinia.md` },
			{ text: 'pinia-plugin-persist', link: `${commonPath}/pinia-plugin-persist.md` },
			{ text: 'vueuse-core', link: `${commonPath}/vueuse-core.md` },
			{ text: 'vueuse-motion', link: `${commonPath}/vueuse-motion.md` },
			{ text: 'vueuse-gesture', link: `${commonPath}/vueuse-gesture.md` },
			{ text: 'vueuse-sound', link: `${commonPath}/vueuse-sound.md` },
			{ text: 'path-browserify', link: `${commonPath}/path-browserify.md` },
			{ text: 'path-to-regexp', link: `${commonPath}/path-to-regexp.md` },
			{ text: 'nprogress 进度条', link: `${commonPath}/nprogress.md` },
			{ text: 'hotkeys 键盘快捷键', link: `${commonPath}/hotkeys-js.md` },
			{ text: 'dayjs 日期格式化', link: `${commonPath}/dayjs.md` },
			{ text: 'wangEditor 富文本编辑器', link: `${commonPath}/wangEditor.md` },
			{ text: 'vue-json-excel3 导出 excel', link: `${commonPath}/vue-json-excel3.md` },
			{ text: 'vxe-table', link: `${commonPath}/vxe-table.md` },
			{ text: 'notify 浏览器通知', link: `${commonPath}/notify.md` },
			{ text: 'vue3-count-to 数字滚动', link: `${commonPath}/countup.md` },
			{ text: 'splitpanes 窗格拆分器', link: `${commonPath}/splitpanes.md` },
			{ text: 'cropper 图片裁剪', link: `${commonPath}/cropper.md` },
			{ text: 'v-md-editor Md 编辑器', link: `${commonPath}/v-md-editor.md` },
			{ text: 'vue-grid-layout 栅格布局', link: `${commonPath}/vue-grid-layout.md` },
		],
	},
	{
		text: 'devDependencies',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'plugin-vue', link: `${commonPath}/plugin-vue.md` },
			{ text: 'autoprefixer', link: `${commonPath}/autoprefixer.md` },
			{ text: 'sass', link: `${commonPath}/sass.md` },
			{ text: 'Windi CSS', link: `${commonPath}/Windi CSS.md` },
			{ text: 'stylelint', link: `${commonPath}/stylelint.md` },
			{ text: 'eslint', link: `${commonPath}/eslint.md` },
			{ text: 'Tailwind Css', link: `${commonPath}/Tailwind Css.md` },
			{ text: 'unplugin-auto-import', link: `${commonPath}/unplugin-auto-import.md` },
			{ text: 'unplugin-vue-components', link: `${commonPath}/unplugin-vue-components.md` },
			{ text: 'unplugin-icons', link: `${commonPath}/unplugin-icons.md` },
			{ text: 'iconify-vue', link: `${commonPath}/iconify-vue.md` },
			{ text: 'vite-plugin-vue-setup-extend', link: `${commonPath}/vite-plugin-vue-setup-extend.md` },
			{ text: 'vite-plugin-svg-icons', link: `${commonPath}/vite-plugin-svg-icons.md` },
			{ text: 'vite-plugin-html', link: `${commonPath}/vite-plugin-html.md` },
			{ text: 'vite-plugin-style-import', link: `${commonPath}/vite-plugin-style-import.md` },
			{ text: 'vite-plugin-vue-inspector', link: `${commonPath}/vite-plugin-vue-inspector.md` },
			{ text: 'vite-plugin-compression', link: `${commonPath}/vite-plugin-compression.md` },
			{ text: 'vite-plugin-theme', link: `${commonPath}/vite-plugin-theme.md` },
			{ text: 'vite-plugin-remove-console', link: `${commonPath}/vite-plugin-remove-console.md` },
			{ text: 'prettier', link: `${commonPath}/prettier.md` },
		],
	},
]

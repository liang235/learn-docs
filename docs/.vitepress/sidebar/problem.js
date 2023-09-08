const commonPath = '/problem' // 根路径

export default [
    // {
	// 	text: '常见问题',
	// 	collapsible: false, // 是否可折叠的侧边栏组
	// 	collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
	// 	items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	// },
    {
        text: '常见问题',
        collapsible: false, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: '滚动元素到可视区域', link: `${commonPath}/scrollIntoView.md` },
            { text: '搜索关键字高亮', link: `${commonPath}/keyword-highlighting.md` },
            { text: '倒计时', link: `${commonPath}/countdown.md` },
            { text: '无限滚动', link: `${commonPath}/infinite-scroll.md` },
        ],
    },
]

const commonPath = "/css" // 根路径

export default [
	{
		text: "css",
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: "介绍", link: `${commonPath}/index.md` }],
	},
	{
		text: "CSS 常用",
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: "选择器", link: `${commonPath}/selector.md` }],
	},
	{
		text: "CSS 案例",
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: "奥运五环", link: `${commonPath}/olympic_rings.md` },
			{
				text: "重复渐变的边框",
				link: `${commonPath}/repeated_gradient_border.md`,
			},
			{ text: "立体文字", link: `${commonPath}/3d_text.md` },
			{
				text: "连续文字光影",
				link: `${commonPath}/continuous_text_shadow.md`,
			},
			{ text: "图片九宫格", link: `${commonPath}/image_grid.md` },
		],
	},
]

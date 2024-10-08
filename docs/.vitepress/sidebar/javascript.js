const commonPath = '/javascript' // 根路径

export default [
	{
		text: 'JavaScript',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '介绍', link: `${commonPath}/index.md` },
			{ text: 'useTools', link: `${commonPath}/useTools.md` },
			{ text: 'useDateTools', link: `${commonPath}/useDateTools.md` },
		],
	},
	{
		text: '基础知识',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '需求实现', link: `${commonPath}/case.md` },
			{ text: '数组方法', link: `${commonPath}/array.md` },
			{ text: '对象方法', link: `${commonPath}/object.md` },
			{ text: '解构赋值', link: `${commonPath}/destructuring.md` },
			{ text: '字符串', link: `${commonPath}/string.md` },
			{ text: '操作符', link: `${commonPath}/operator.md` },
			{ text: 'console', link: `${commonPath}/console.md` },
			{ text: '遍历循环', link: `${commonPath}/traversal.md` },
			{ text: '特殊字符', link: `${commonPath}/character.md` },
			{ text: 'null 和 undefined', link: `${commonPath}/null-undefined.md` },
			{ text: '面试题', link: `${commonPath}/interview.md` },
		],
	},
]

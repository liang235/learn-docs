const commonPath = '/java' // 根路径
const basisPath = '/java/basis' // 基础知识
const advancedPath = '/java/advanced' // 进阶

export default [
	{
		text: 'Java',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '进阶',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: 'Arrays 类', link: `${advancedPath}/arrays.md` }],
	},
	{
		text: '基础知识',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '书写格式', link: `${basisPath}/index1.md` },
			{ text: '常见问题', link: `${basisPath}/index2.md` },
			{ text: '代码注释', link: `${basisPath}/index3.md` },
			{ text: '标识符', link: `${basisPath}/index4.md` },
			{ text: '数据类型', link: `${basisPath}/index5.md` },
			{ text: '运算符', link: `${basisPath}/index6.md` },
		],
	},
]

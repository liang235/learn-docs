const commonPath = '/lodash' // 根路径

export default [
	{
		text: 'lodash',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: '数组',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'uniq 数组去重', link: `${commonPath}/uniq.md` },
			{ text: 'uniqBy 数组去重', link: `${commonPath}/uniqBy.md` },
			{ text: 'uniqWith 数组去重', link: `${commonPath}/uniqWith.md` },
		],
	},
	{
		text: '函数',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: 'debounce 防抖', link: `${commonPath}/debounce.md` }],
	},
	{
		text: '语言',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'cloneDeep 对象深拷贝', link: `${commonPath}/cloneDeep.md` },
			{ text: 'isEqual 值是否相等', link: `${commonPath}/isEqual.md` },
		],
	},
	{
		text: '对象',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{
				text: 'defaultsDeep 对象深合并',
				link: `${commonPath}/defaultsDeep.md`,
			},
		],
	},
	{
		text: '字符串',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'camelCase 首字母小写', link: `${commonPath}/camelCase.md` },
			{ text: 'capitalize 首字母大写', link: `${commonPath}/capitalize.md` },
			{ text: 'kebabCase 转拼接格式', link: `${commonPath}/kebabCase.md` },
		],
	},
]

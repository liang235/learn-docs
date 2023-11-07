const commonPath = '/element-plus' // 根路径

export default [
	{
		text: 'ElementPlus',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [{ text: '介绍', link: `${commonPath}/index.md` }],
	},
	{
		text: 'Form 表单组件',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'Cascader 级联选择器', link: `${commonPath}/cascader.md` },
			{ text: 'Form 表单', link: `${commonPath}/form.md` },
			{ text: 'Input 输入框', link: `${commonPath}/input.md` },
			{ text: 'Radio 单选框', link: `${commonPath}/radio.md` },
			{ text: 'Select 选择器', link: `${commonPath}/select.md` },
			{ text: 'Upload 上传', link: `${commonPath}/upload.md` },
		],
	},
	{
		text: 'Data 数据展示',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'Skeleton 骨架屏', link: `${commonPath}/skeleton.md` },
			{ text: 'Table 表格', link: `${commonPath}/table.md` },
			{ text: 'Tree 树形控件', link: `${commonPath}/tree.md` }
		],
	},
	{
		text: 'Feedback 反馈组件',
		collapsible: true, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'Dialog 对话框', link: `${commonPath}/dialog.md` },
			{ text: 'Loading 加载', link: `${commonPath}/loading.md` },
			{ text: 'Message 消息提示', link: `${commonPath}/message.md` },
			{ text: 'MessageBox 消息弹框', link: `${commonPath}/message-box.md` }
		],
	},
]

const commonPath = '/mysql' // 根路径

export default [
	{
		text: '介绍',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'MySQL 安装', link: `${commonPath}/index.md` },
			{ text: '数据库介绍', link: `${commonPath}/introduce.md` },
			{ text: 'Navicat 可视化工具', link: `${commonPath}/navicat.md` },
		],
	},
	{
		text: '基础知识',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: 'MySQL 操作命令', link: `${commonPath}/command.md` },
			{ text: '基础知识', link: `${commonPath}/sql.md` },
			{ text: '数据库操作', link: `${commonPath}/database.md` },
			{ text: '数据表操作', link: `${commonPath}/datasheet.md` },
			{ text: '数据类型', link: `${commonPath}/datatype.md` },
			{ text: '字段约束', link: `${commonPath}/constraint.md` },
			{ text: '外键约束', link: `${commonPath}/foreign-key.md` },
			{ text: '数据表字段操作', link: `${commonPath}/datasheet-field.md` },
			{ text: '数据表字段查询', link: `${commonPath}/datasheet-query.md` },
			{ text: '聚合函数', link: `${commonPath}/polymerization.md` },
			{ text: '日期函数', link: `${commonPath}/datefunc.md` },
			{ text: '字符串函数', link: `${commonPath}/stringfunc.md` },
			{ text: '分组查询', link: `${commonPath}/grouping-query.md` },
			{ text: '数据表的关联关系', link: `${commonPath}/association-relation.md` },
			{ text: '连接查询', link: `${commonPath}/join-query.md` },
			{ text: '存储过程(函数)', link: `${commonPath}/stored-procedure.md` },
			{ text: '触发器', link: `${commonPath}/flip-flop.md` },
		],
	},
	{
		text: 'MySQL 优化',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [],
	},
]

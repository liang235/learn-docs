const commonPath = '/tools' // 根路径

export default [
    // {
    // 	text: '常见问题',
    // 	collapsible: false, // 是否可折叠的侧边栏组
    // 	collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
    // 	items: [{ text: '介绍', link: `${commonPath}/index.md` }],
    // },
    {
        text: '工具方法',
        collapsible: false, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'tools', link: `${commonPath}/tools.md` },
            { text: 'date', link: `${commonPath}/date.md` },
            { text: 'regexp', link: `${commonPath}/regexp.md` },
        ],
    },
]

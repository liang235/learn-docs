const commonPath = '/other' // 根路径

export default [
    {
        text: 'other',
        collapsible: false, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: '介绍', link: `${commonPath}/index.md` },
        ],
    },
    {
        collapsible: false, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: '项目搭建', link: `${commonPath}/create-vite.md` },
            { text: '自动部署', link: `${commonPath}/deploy-sync.md` },
        ],
    },
]

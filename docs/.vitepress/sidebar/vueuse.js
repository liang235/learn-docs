const commonPath = '/vueuse' // 根路径

export default [
    {
        text: 'vueuse',
        collapsible: false, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: '介绍', link: `${commonPath}/index.md` },
        ],
    },
    {
        text: 'State',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useStorage - 存储', link: `${commonPath}/useStorage.md` },
            { text: 'useLocalStorage - 存储', link: `${commonPath}/useLocalStorage.md` },
        ],
    },
    {
        text: 'Elements',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useElementVisibility - 判断元素是否在可视窗口内', link: `${commonPath}/useElementVisibility.md` },
        ],
    },
    {
        text: 'Browser',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useClipboard - 剪切板', link: `${commonPath}/useClipboard.md` },
            { text: 'useDark - 高亮/暗黑', link: `${commonPath}/useDark.md` },
            { text: 'useImage - 图片状态', link: `${commonPath}/useImage.md` },
            { text: 'usePermission - 权限', link: `${commonPath}/usePermission.md` },
            { text: 'useTitle - 标题', link: `${commonPath}/useTitle.md` },
        ],
    },
    {
        text: 'Sensors',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useInfiniteScroll - 无限滚动', link: `${commonPath}/useInfiniteScroll.md` },
            { text: 'onClickOutside - 监听元素之外', link: `${commonPath}/onClickOutside.md` },
        ],
    },
    {
        text: 'Component',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useVirtualList - 虚拟加载', link: `${commonPath}/useVirtualList.md` },
            { text: 'useVModel - v-model 简写', link: `${commonPath}/useVModel.md` },
            { text: 'useVModels - v-model 简写', link: `${commonPath}/useVModels.md` },
        ],
    },
    {
        text: 'Utilities',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useEventBus - 事件总线', link: `${commonPath}/useEventBus.md` },
            { text: 'useDebounceFn - 防抖', link: `${commonPath}/useDebounceFn.md` },
            { text: 'useThrottleFn - 节流', link: `${commonPath}/useThrottleFn.md` },
            { text: 'useToggle - 切换', link: `${commonPath}/useToggle.md` },
        ],
    },
    {
        text: '@Integrations',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useFocusTrap - 焦点', link: `${commonPath}/useFocusTrap.md` },
            { text: 'useNProgress - 进度条', link: `${commonPath}/useNProgress.md` },
        ],
    },
]
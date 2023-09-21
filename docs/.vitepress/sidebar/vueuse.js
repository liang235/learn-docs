const commonPath = '/vueuse' // 根路径
const statePath = '/vueuse/state' // 状态
const browserPath = '/vueuse/browser' // 浏览器
const sensorsPath = '/vueuse/sensors' // 传感器
const componentPath = '/vueuse/component' // 组件
const utilitiesPath = '/vueuse/utilities' // 公共方法
const integrationsPath = '/vueuse/integrations' // 集成

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
        text: '状态',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useStorage - 存储', link: `${statePath}/useStorage.md` },
            { text: 'useLocalStorage - 存储', link: `${statePath}/useLocalStorage.md` },
        ],
    },
    {
        text: '浏览器',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useClipboard - 剪切板', link: `${browserPath}/useClipboard.md` },
            { text: 'useDark - 高亮/暗黑', link: `${browserPath}/useDark.md` },
            { text: 'useImage - 图片状态', link: `${browserPath}/useImage.md` },
            { text: 'usePermission - 权限', link: `${browserPath}/usePermission.md` },
            { text: 'useTitle - 标题', link: `${browserPath}/useTitle.md` },
        ],
    },
    {
        text: '传感器',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'onClickOutside - 监听元素之外', link: `${sensorsPath}/onClickOutside.md` },
        ],
    },
    {
        text: '组件',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useVModel - v-model 简写', link: `${componentPath}/useVModel.md` },
            { text: 'useVModels - v-model 简写', link: `${componentPath}/useVModels.md` },
        ],
    },
    {
        text: '公共方法',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useEventBus - 事件总线', link: `${utilitiesPath}/useEventBus.md` },
            { text: 'useDebounceFn - 防抖', link: `${utilitiesPath}/useDebounceFn.md` },
            { text: 'useThrottleFn - 节流', link: `${utilitiesPath}/useThrottleFn.md` },
            { text: 'useToggle - 切换', link: `${utilitiesPath}/useToggle.md` },
        ],
    },
    {
        text: '集成',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'useFocusTrap - 焦点', link: `${integrationsPath}/useFocusTrap.md` },
            { text: 'useNProgress - 进度条', link: `${integrationsPath}/useNProgress.md` },
        ],
    },
]
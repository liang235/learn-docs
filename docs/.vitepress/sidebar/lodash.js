const commonPath = '/lodash' // 根路径
const arrayPath = '/lodash/array' // 数组
const languagePath = '/lodash/language' // 语言
const objectPath = '/lodash/object' // 对象
const stringPath = '/lodash/string' // 字符串

export default [
    {
        text: 'lodash',
        collapsible: false, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: '介绍', link: `${commonPath}/index.md` },
        ],
    },
    {
        text: '数组',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'uniq 数组去重', link: `${arrayPath}/uniq.md` },
            { text: 'uniqBy 数组去重', link: `${arrayPath}/uniqBy.md` },
            { text: 'uniqWith 数组去重', link: `${arrayPath}/uniqWith.md` },
        ],
    },
    {
        text: '语言',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'cloneDeep 对象深拷贝', link: `${languagePath}/cloneDeep.md` },
            { text: 'isEqual 值是否相等', link: `${languagePath}/isEqual.md` },
        ],
    },
    {
        text: '对象',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'defaultsDeep 对象深合并', link: `${objectPath}/defaultsDeep.md` },
        ],
    },
    {
        text: '字符串',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'camelCase 首字母小写', link: `${stringPath}/camelCase.md` },
            { text: 'capitalize 首字母大写', link: `${stringPath}/capitalize.md` },
            { text: 'kebabCase 转拼接格式', link: `${stringPath}/kebabCase.md` },
        ],
    },
]
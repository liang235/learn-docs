const commonPath = '/components' // 根路径

export default [
    {
        text: 'components',
        collapsible: false, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [{ text: '介绍', link: `${commonPath}/index.md` }],
    },
    {
        text: '扩展组件',
        collapsible: true, // 是否可折叠的侧边栏组
        collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
        items: [
            { text: 'Auth 鉴权', link: `${commonPath}/auth.md` },
            { text: 'AuthAll 鉴权', link: `${commonPath}/auth-all.md` },
            { text: 'ColorfulCard 多彩渐变卡片', link: `${commonPath}/colorful-card.md` },
            { text: 'Copper 图片裁剪', link: `${commonPath}/copper.md` },
            { text: 'FileUpload 文件上传', link: `${commonPath}/file-upload.md` },
            { text: 'FixedBottom 固定底部操作栏', link: `${commonPath}/fixed-bottom.md` },
            { text: 'IconPicker 图标选择器', link: `${commonPath}/icon-picker.md` },
            { text: 'ImagePreview 图片预览', link: `${commonPath}/image-preview.md` },
            { text: 'ImageUpload 单图上传', link: `${commonPath}/image-upload.md` },
            { text: 'ImagesUpload 多图上传', link: `${commonPath}/images-upload.md` },
            { text: 'PageHeader 页头', link: `${commonPath}/page-header.md` },
            { text: 'PageMain 内容块', link: `${commonPath}/page-main.md` },
            { text: 'PcasCascader 省市区街道联动', link: `${commonPath}/pcas-cascader.md` },
            { text: 'SearchBar 搜索面板', link: `${commonPath}/search-bar.md` },
            { text: 'signature-pad 电子签名', link: `${commonPath}/signature-pad.md` },
            { text: 'SvgIcon SVG图标', link: `${commonPath}/svg-icon.md` },
            { text: 'WangEditor 富文本编辑器', link: `${commonPath}/wang-editor.md` },
        ],
    },
]

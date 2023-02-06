# [Algolia](https://www.algolia.com/apps/7MJH3M9ZW7/dashboard)
现在比较有名的 `Algolia` 提供了云搜索的服务。具体办法是我们将数据库的信息以 `JSON` 的格式上传到 `Algolia` 服务器，然后通过相应的 `API` 进行搜索，搜索可以是前端也可以是后端。这里描述的 `JavaScript` 的用法，不仅高效，而且对用户友好。`Algolia` 的免费许可允许上传 `10,000` 条 `JSON` 数据，每月允许 `100,000` 次操作（包括上传和搜索），还是相当不错的

## [给 vitepress 添加 algolia 搜素](https://www.bilibili.com/video/BV1eG4y1g7Kj/?spm_id_from=333.337.search-card.all.click&vd_source=72c1937b435748e4a56cde30b7eddb8c)

### 创建账号登录之后再控制台，或者用户设置中新建应用程序
![algolia-1](/algolia-1.jpg)

### 进入应用程序或许 `API KEYS`
![algolia-2](/algolia-2.jpg)
![algolia-3](/algolia-3.jpg)

### `docs/.vitepress/config.js` 中设置 `algolia`
- `appId` 对应 `algolia` 的 `Application ID`
- `apiKey` 对应 `algolia` 的 `Search-Only API Key`
``` js
export default defineConfig({
    themeConfig: {
        algolia: {
            appId: '7MJH3M9ZW7',
            apiKey: '3a59da2fbe88b0c5b92d0aa209301634',
            indexName: 'learn-docs',
            placeholder: '搜索文档',
            translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者',
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈',
                },
            },
        }
    }
})
```

### 私钥放在 `Github Secrets` 中
- `ALGOLIA_API_ID` 对应 `algolia` 的 `Application ID`
- `ALGOLIA_API_KEY` 对应 `algolia` 的 `Admin API Key`
![algolia-4](/algolia-4.jpg)

### 创建 crawlerConfig.json
- 在项目根目录下创建 `crawlerConfig.json` 文件，内容如下，注意前两个字段需要进行替换。这是告诉 `algolia` 需要爬取的配置
``` json

```

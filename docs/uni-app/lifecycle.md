# 生命周期

## [Vue3 生命周期](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

## [应用生命周期](https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle)
- 应用生命周期仅可在 `App.vue` 中监听，在其它页面监听无效

| 函数名        |      说明      |  平台兼容 |
| ------------- | ----------- | ---- |
| onLaunch     | 当 `uni-app` 初始化完成时触发（全局只触发一次），参数为应用启动参数，同 [uni.getLaunchOptionsSync](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html#getlaunchoptionssync) 的返回值 | |
| onShow      |   当 `uni-app` 启动，或从后台进入前台显示，参数为应用启动参数，同 [uni.getLaunchOptionsSync](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html#getlaunchoptionssync) 的返回值    |    |
| onHide |   当 `uni-app` 从前台进入后台    |    |
| onError |   当 `uni-app` 报错时触发    |  app-uvue 不支持  |
| onUniNViewMessage |   对 `nvue` 页面发送的数据进行监听，可参考 [nvue 向 vue 通讯](https://uniapp.dcloud.net.cn/tutorial/nvue-api.html#communication)    |  app-uvue 不支持  |
| onUnhandledRejection |   对未处理的 Promise 拒绝事件监听函数（2.8.1+ app-uvue 暂不支持）    |  app-uvue 不支持  |
| onPageNotFound |   页面不存在监听函数    |   app-uvue 不支持 |
| onThemeChange |   监听系统主题变化    |  app-uvue 不支持  |
| onLastPageBackPress |   最后一个页面按下Android back键，常用于自定义退出    |  app-uvue-android 3.9+  |
| onExit |   监听应用退出    |  	app-uvue-android 3.9+  |

## [页面生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)
- `uni-app` 页面除支持 `Vue` 组件生命周期外还支持下方页面生命周期函数，当以组合式 `API` 使用时，在 `Vue2` 和 `Vue3` 中存在一定区别，请分别参考：[Vue2 组合式 API 使用文档](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html) 和 [Vue3 组合式 API 使用文档](https://uniapp.dcloud.net.cn/tutorial/vue3-composition-api.html)

| 函数名        |      说明      |  平台差异说明 |  最低版本 |
| ------------- | ----------- | ---- | ---- |
| onInit |   监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad    |  百度小程序  | 3.1.0+ |
| `onLoad` |   监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](https://uniapp.dcloud.net.cn/api/router#navigateto)    |    |  |
| onShow |   监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面    |    |  |
| onReady |   监听页面初次渲染完成，此时组件已挂载完成，DOM 树($el)已可用，注意如果渲染速度快，会在页面进入动画完成前触发    |    |  |
| onHide |   监听页面隐藏    |    |  |
| onUnload |   监听页面卸载    |    |  |
| onResize |   监听窗口尺寸变化    |  App、微信小程序、快手小程序  |  |
| onPullDownRefresh |   监听用户下拉动作，一般用于下拉刷新，参考[示例](https://uniapp.dcloud.net.cn/api/ui/pulldown.html)    |    |  |
| onReachBottom |   页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项    |    |  |
| onTabItemTap |   点击 tab 时触发，参数为Object，具体见下方注意事项    | 微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序 |  |
| onShareAppMessage |   用户点击右上角分享    | 微信小程序、QQ小程序、支付宝小程序、抖音小程序、飞书小程序、快手小程序、京东小程序 |  |
| onPageScroll |   	监听页面滚动，参数为Object    |  nvue不支持  |  |
| onNavigationBarButtonTap |   监听原生标题栏按钮点击事件，参数为Object    |  App、H5  |  |
| onBackPress |   监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack；[详见](https://uniapp.dcloud.net.cn/tutorial/page.html#onbackpress)    |  app、H5、支付宝小程序  |  |
| onNavigationBarSearchInputChanged |   监听原生标题栏搜索输入框输入内容变化事件    |  App、H5  | 1.6.0 |
| onNavigationBarSearchInputConfirmed |   监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发    |  App、H5  | 1.6.0 |
| onNavigationBarSearchInputClicked |   监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）    |  App、H5  | 1.6.0 |
| onShareTimeline | 监听用户点击右上角转发到朋友圈 |  微信小程序  | 2.8.1+ |
| onAddToFavorites | 监听用户点击右上角收藏 | 微信小程序、QQ小程序 | 2.8.1+ |
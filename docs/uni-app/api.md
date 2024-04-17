# [API 概述](https://uniapp.dcloud.net.cn/api/)
`uni-app` 的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成

## 常用 API

| 函数名                                                                                                                       | 说明                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [uni.request()](https://uniapp.dcloud.net.cn/api/request/request.html#request)                                               | 发起网络请求                                                               |
| [uni.showLoading()](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showloading)                                             | 显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框             |
| [uni.hideLoading()](https://uniapp.dcloud.net.cn/api/ui/prompt.html#hideloading)                                             | 隐藏 loading 提示框                                                        |
| [uni.showToast()](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast)                                                 | 显示消息提示框                                                             |
| [uni.setStorageSync()](https://uniapp.dcloud.net.cn/api/storage/storage.html#setstoragesync)                                 | 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容       |
| [uni.getStorageSync()](https://uniapp.dcloud.net.cn/api/storage/storage?id=getstoragesync#getstoragesync)                    | 从本地缓存中同步获取指定 key 对应的内容                                    |
| [uni.navigateTo()](https://uniapp.dcloud.net.cn/api/router.html#navigateto)                                                  | 保留当前页面，跳转到应用内的某个页面                                       |
| [uni.setNavigationBarTitle()](https://uniapp.dcloud.net.cn/api/ui/navigationbar.html#setnavigationbartitle)                  | 动态设置当前页面的标题                                                     |
| [uni.switchTab()](https://uniapp.dcloud.net.cn/api/router.html#switchtab)                                                    | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面                           |
| [uni.navigateBack()](https://uniapp.dcloud.net.cn/api/router.html#navigateback)                                              | 关闭当前页面，返回上一页面或多级页面                                       |
| [uni.getSystemInfoSync()](https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfosync)                               | 获取系统信息的同步接口                                                     |
| [uni.login()](https://uniapp.dcloud.net.cn/api/plugins/login.html#login)                                                     | 统一封装了各个平台的各种常见的登录方式                                     |
| [uni.$emit()](https://uniapp.dcloud.net.cn/tutorial/page.html#emit)                                                          | 触发全局的自定义事件                                                       |
| [uni.$on()](https://uniapp.dcloud.net.cn/tutorial/page.html#on)                                                              | 监听全局的自定义事件。事件可以由 uni.$emit 触发                            |
| [uni.getMenuButtonBoundingClientRect()](https://uniapp.dcloud.net.cn/api/ui/menuButton.html#getmenubuttonboundingclientrect) | 如果原生导航栏被隐藏，仍然在右上角会有一个悬浮按钮，微信下也被称为胶囊按钮 |
| [uni.chooseAddress()](https://uniapp.dcloud.net.cn/api/other/choose-address.html#chooseaddress)                              | 获取用户收货地址                                                           |
| [uni.makePhoneCall()](https://uniapp.dcloud.net.cn/api/system/phone.html#makephonecall)                                      | 拨打电话                                                                   |
| [getCurrentPages()](https://uniapp.dcloud.net.cn/tutorial/page.html#getcurrentpages)                                         | 获取当前页面栈的实例                                                       |

## 常用属性
| 属性名                                                                     | 说明                                                                |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [getApp()](https://uniapp.dcloud.net.cn/tutorial/page.html#getapp)         | 用于获取当前应用实例，一般用于获取 globalData                       |
| [globalData](https://uniapp.dcloud.net.cn/collocation/App.html#globaldata) | 这是一种简单的 `全局变量` 机制，并且全端通用，一般设置在 App 页面中 |

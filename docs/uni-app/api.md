# [API](https://uniapp.dcloud.net.cn/api/)
`uni-app` 的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成

## 常用 API
| 函数名                                | 说明                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------- |
| uni.navigateTo()                      | 保留当前页面，跳转到应用内的某个页面                                       |
| uni.switchTab()                       | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面                           |
| uni.navigateBack()                    | 关闭当前页面，返回上一页面或多级页面                                       |
| uni.getSystemInfoSync()               | 获取系统信息的同步接口                                                     |
| uni.getCurrentPages()                 | 获取当前页面栈的实例                                                       |
| uni.getMenuButtonBoundingClientRect() | 如果原生导航栏被隐藏，仍然在右上角会有一个悬浮按钮，微信下也被称为胶囊按钮 |


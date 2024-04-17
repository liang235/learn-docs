# 微信小程序相关内容

## 配置 AppId
- 使用 `uni-app` 开发微信小程序的时候需要配置 `AppId`
- 登陆 [微信开发者后台](https://mp.weixin.qq.com/) 在 `开发 -> 开发设置 -> 开发管理中`
<ZoomImg src="/wx-appid.png" />

## 打包上线
1. 需要把后台的接口地址添加到 [微信开发者后台](https://mp.weixin.qq.com/) 在 `开发 -> 开发设置 -> 开发管理中 -> 服务器域名 -> request合法域名` 中
2. HBuilderX 中点击 `发行 - 小程序-微信`
3. 微信开发者工具中点击上传
4. 在微信开发者后台的 `管理 -> 版本管理` 中按要求填写小程序所需内容即可

## 获取用户地址
- 使用 [uni.chooseAddress()](https://uniapp.dcloud.net.cn/api/other/choose-address.html#chooseaddress) 来获取用户地址，但是需要在 [manifest.json 应用配置](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-weixin) 的 `mp-weixin` 分类中，
按照 [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#requiredPrivateInfos) 进行配置
- 修改 `manifest.json 应用配置` 需要重启服务
<ZoomImg src="/wx-requiredPrivateInfos.png" />

## 使用 [腾讯位置服务](https://lbs.qq.com/) 地图插件

1. 需要先创建应用 控制台-》应用管理-》我的应用-》创建应用-》添加 key
2. https://blog.csdn.net/qq_53509791/article/details/132223764
3. [腾讯位置服务 - 入门](https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview)
4. [腾讯位置服务路线规划](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx50b5593e81dd937a&token=&lang=zh_CN)

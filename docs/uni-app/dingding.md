# 钉钉小程序相关内容

## 应用开发平台
https://open-dev.dingtalk.com/

## HBuildeX 环境运行
`HBuildeX` 运行环境中默认是没有钉钉小程序的，修妖在 `package.json` 中配置如下内容才可生效，详情[参考](https://uniapp.dcloud.net.cn/collocation/package.html#%E7%A4%BA%E4%BE%8B-%E9%92%89%E9%92%89%E5%B0%8F%E7%A8%8B%E5%BA%8F)

```js
"uni-app": {
    "scripts": {
        "mp-dingtalk": {
            "title": "钉钉小程序",
            "env": {
                "UNI_PLATFORM": "mp-alipay"
            },
            "define": {
                "MP-DINGTALK": true
            }
        }
    }
}
```
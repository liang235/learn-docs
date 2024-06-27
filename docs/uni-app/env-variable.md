# 配置环境变量
- 在 `HbuilderX` 中，默认只支持开发和生产两个环境，点击“运行”编译出来的代码是开发环境（`development`），点击“发行”编译出来的代码是生产环境（`production`），可以通过 `process.env` 获取当前环境对象
- 但在很多企业中，可能就2个环境并不能满足实际场景，同时在开发微信小程序时，测试和生产都是不同的 `appid`，每次部署都要手动修改切换很容易出现问题。为了解决上述问题，通过在 `package.json中` 增加 `uni-app` 扩展节点，实现自定义条件编译平台，让每种编译具有不同环境标识。再扩展 `vite.config.js` 配置文件，用环境标识判断重写文件中的 `appid`

## [增加扩展节点](https://uniapp.dcloud.net.cn/collocation/package.html#uni-app-%E5%B1%9E%E6%80%A7)
```js
{
    /**
     * package.json其它原有配置
     * 拷贝代码后请去掉注释！
     */
	"uni-app": {
		"scripts": {
			"h5-dev": {
				"title": "H5 开发环境",
				"browser": "chrome",
				"env": {
					"UNI_PLATFORM": "h5",
					"ENV_TYPE": "development",
					"UNI_BASE_URL": "http://lm.capitalwater.cn/clue"
				},
				"define": {
					"CUSTOM-CONST": true
				}
			},
			"h5-test": {
				"title": "H5 测试环境",
				"browser": "chrome",
				"env": {
					"UNI_PLATFORM": "h5",
					"ENV_TYPE": "test",
					"UNI_BASE_URL": "http://lm.capitalwater.cn/clue"
				},
				"define": {
					"CUSTOM-CONST": true
				}
			},
			"h5-prod": {
				"title": "H5 生产环境",
				"browser": "chrome",
				"env": {
					"UNI_PLATFORM": "h5",
					"ENV_TYPE": "production",
					"UNI_BASE_URL": "http://lm.capitalwater.cn"
				},
				"define": {
					"CUSTOM-CONST": true
				}
			}
		}
	}
}
```

## 参考
https://blog.csdn.net/weixin_43180359/article/details/132336994
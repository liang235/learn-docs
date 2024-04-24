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
			"h5-dev": {  // 自定义编译平台配置，可通过 cli 方式调用
				"title": "H5 开发环境", // 在 HBuilderX 中会显示在 运行/发行 菜单中
				"browser": "chrome", // 运行到的目标浏览器，仅当 UNI_PLATFORM 为h5时有效
				"env": { // 环境变量
					"UNI_PLATFORM": "h5", // 基准平台
                    "ENV_TYPE": "development" // 开发环境
				},
				"define": { // 自定义条件编译
					"CUSTOM-CONST": true // 自定义条件编译常量，建议为大写
				}
			},
            "h5-test": {
				"title": "H5 测试环境",
				"browser": "chrome",
				"env": {
					"UNI_PLATFORM": "h5",
                    "ENV_TYPE": "test"
				},
				"define": {
					"CUSTOM-CONST": true,
				}
			}
			"h5-pro": {
				"title": "H5 生产环境",
				"browser": "chrome",
				"env": {
					"UNI_PLATFORM": "h5",
                    "ENV_TYPE": "production"
				},
				"define": {
					"CUSTOM-CONST": true
				}
			}
		}
	}
}
```

- 上面代码片段只以 `H5` 端为例，其中只增加了常量 `ENV_TYPE` 用于区分当前环境地址，类似于 `process.env.NODE_ENV` 获取环境变量的作用。一般小程序也就测试和生产两个环境，环境太多都要重新申请账号也麻烦。`H5` 按照常规的配置本地开发、测试、生产三个环境。配置好后我们点击顶部菜单栏的“运行”和“发行”即可看到效果
<ZoomImg src="/env-variable-1.png" />
<ZoomImg src="/env-variable-2.png" />

## 配置其他变量
- 根目录下新建 `config` 目录，用于放一些业务配置项，再新建环境相关变量配置文件 `env.js`，代码如下：
```js
export default {
	// 开发环境
	development: {
		BASE_API_URL: 'http://development',
		appid: 'wxd5xaaxee0fce1c81',
	},

	// 测试环境
	test: {
		BASE_API_URL: 'http://test',
		appid: 'wxd5xxxxee0fce1c81',
	},

	// 生产环境
	production: {
		BASE_API_URL: 'http://production',
		appid: 'wx3xxxx1ce403cab3',
	}
}
```

- 其中变量对象名称 `development`、`test`、`production` 要和 `package.json` 文件中定义的NAME保持一致，方便后续通过对象方式直接取值。变量对象中添加的是需要根据不同环境配置的变量，比如后端服务请求地址，小程序 `appid` 和一些别的插件 `key`。配置后我们就可以配合环境 `ENV_TYPE` 获取到不同环境的其他变量了，简单使用方式如下：

```js
import ENV_CONFIG from '@/config/env.js'
// 运行H5 开发环境结果 http://development
console.log(ENV_CONFIG[process.env.ENV_TYPE].BASE_API_URL)
```

- 每次引入获取方式肯定不够友好，在 `uni-app` 中还可以通过修改 `vite` 配置添加全局变量，更方便在全局使用
- 首先根目录下新建 `vite.config.js` 文件，内容如下：

```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import ENV_CONFIG from '@/config/env.js'

export default defineConfig({
	plugins: [uni()],
	define: {
		'process.env.config': ENV_CONFIG,
	},
})
```

- 通过定义一个全局变量 `process.env.config`，赋值为 `ENV_CONFIG`，`process.env.config` 可以改为任何一个字符串，这里主要是为了保持和默认通过 `process.env` 获取环境变量的语义一致性。此时使用时就无需在业务中单独引入，从全局对象c`process.env.config` 上取值即可：
```js
// 运行H5 开发环境结果 http://development
console.log(process.env.config[process.env.ENV_TYPE].BASE_API_URL)
```

## 动态修改小程序 appid
- `appid` 是在根目录下的 `manifest.json` 文件中，点击后最下面有源码视图。修改的方式就是运用 `node` 的 `fs` 模块，先读取 `manifest.json` 文件，然后根据当前环境，动态替换掉 `appid` 或者其他参数，最后重新写入到当前目录下。具体也是在 `vite.config.js` 中处理：
```js
// 动态修改 manifest.json
const manifestPath = `${__dirname}/manifest.json`
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })

function replaceManifest(path, value) {
	const arr = path.split('.')
	const len = arr.length
	const lastItem = arr[len - 1]

	let i = 0
	let ManifestArr = Manifest.split(/\n/)

	for (let index = 0; index < ManifestArr.length; index++) {
		const item = ManifestArr[index]
		if (new RegExp(`"${arr[i]}"`).test(item)) ++i
		if (i === len) {
			const hasComma = /,/.test(item);
			ManifestArr[index] = item.replace(
				new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
				`"${lastItem}": ${typeof value === 'string'? '"'+value+'"' : value}${hasComma ? ',' : ''}`
			);
			break
		}
	}

	Manifest = ManifestArr.join('\n')
}

// 这是我们主要注意动态修改的地方,按自己的需求配置
let BASE_API_URL = ''
if (process.env.UNI_CUSTOM_DEFINE) {
	const appid = ENV_CONFIG[JSON.parse(process.env.UNI_CUSTOM_DEFINE).ENV_TYPE].appid
	replaceManifest('mp-weixin.appid', appid)
}
fs.writeFileSync(manifestPath, Manifest, { flag: 'w' })
```

- 这个修改方案是根据[官方提供的代码片段](https://uniapp.dcloud.net.cn/collocation/vite-config.html)修改，其中进行了一些变动：
  - `manifest.json` 文件路径由相对路径改为 `__dirname` 获取的绝对路径
  - `replaceManifest` 方法中的 `value` 进行了 `typeof` 类型判断，如果是字符串加上双引号。因为测试时传个字符串会替换成没引号的变量或者数字
- 同时关于当前环境变量的获取，此时通过 `process.env.ENV_TYPE` 是获取不到 `package.json` 配置的 `ENV_TYPE` 的，通过打印 `process.env` 可以发现此时它是个包含很多变量的 `json`，在 `UNI_CUSTOM_DEFINE` 下面是可以找到 `ENV_TYPE`，这样就能根据不同环境获取不同的 `appid`

<ZoomImg src="/env-variable-3.png" />

- 然后也可以用下面这种更容易理解的方式修改 `manifest.json`，但是修改后内容排在一行，想要美观还需要手动格式化
```js
// appid获取只做参考，这里只是说明简单的只有两个环境，可以直接取process.env.NODE_ENV判断
let appid = process.env.NODE_ENV == "production" ? '生产的appid' : "开发的appid"
// manifest.json 路径
let manifestFileUrl = `${__dirname}/manifest.json`
// 读取文件数据
let manifestFileData = fs.readFileSync(manifestFileUrl, { encoding: 'utf8' });
// 移除// 和 /* */注释
manifestFileData = manifestFileData.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m)
// // 将txt转成obj
let manifestFileDataObj = JSON.parse(manifestFileData)
// 修改指定key对应的value
manifestFileDataObj['mp-weixin']['appid'] = appid
// 把修改后的对象以json写入文件
fs.writeFileSync(manifestFileUrl, JSON.stringify(manifestFileDataObj), { encoding: 'utf8' })
```

## 使用方式
- 需要本地调试时，点击工具栏“运行”，选择自定义的对应开发或测试环境
- 业务中通过 `process.env.config[process.env.ENV_TYPE]` 获取配置的变量对象
- 上线时，点击工具栏“发行”，选择自定义的对应测试或生产环境

## 参考
https://blog.csdn.net/weixin_43180359/article/details/132336994
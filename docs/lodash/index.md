# lodash
`Lodash` 是一个一致性、模块化、高性能的 `JavaScript` 实用工具库

## 安装 [官网地址](https://www.lodashjs.com/)
``` js
pnpm i lodash-es
```

## 使用配置
``` js
import { defaultsDeep } from 'lodash-es' // js 工具库
defaultsDeep()
```

## lodash 和 lodash-es 的区别
`lodash` 是默认的 `commonjs` 版本
![An image](/lodash.png)

`lodash-es` 是 `lodash` 的 `es modules` 版本，体积也更小
![An image](/lodash-es.png)

如果使用打包工具，二者都是可以使用的

`lodash` 使用需要导入 `import _ from 'lodash'` 然后再 `_.defaultsDeep()`，`lodash-es` 不需要

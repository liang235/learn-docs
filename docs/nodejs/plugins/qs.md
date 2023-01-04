# qs
是一个增加了一些安全性的查询字符串解析和序列化字符串的库

## 安装 [官网地址](https://github.com/ljharb/qs)
```
pnpm install qs
```

## qs.stringify() 转换成查询字符串

``` js
import qs from 'qs'

const qsdata = qs.stringify({
	username: 'coderkey',
	password: '123456',
})
// username=coderkey&password=123456
```

## qs.parse() 转换成 JSON 对象
- 将URL解析成对象的形式（将序列化的内容拆分成一个个单一的对象）
``` js
import qs from 'qs'

const qsdata = qs.parse({
	username: 'coderkey',
	password: '123456',
})
// {username: 'coderkey', password: '123456'}
```
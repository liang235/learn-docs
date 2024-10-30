# uniqWith
数组去重，数组对象去重，对象内的属性如果都一致去除

## 使用 [官网地址](https://www.lodashjs.com/docs/lodash.uniqWith)
``` js
import { uniqWith, isEqual } from 'lodash-es' // js 工具库

const arr = [
	{ name: '张三', age: 100 },
	{ name: '李四', age: 200 },
	{ name: '王五', age: 300 },
	{ name: '李四', age: 200 },
	{ name: '王五', age: 300 },
]
// isEqual 执行深比较来确定两者的值是否相等
console.log(uniqWith(arr, isEqual))
```
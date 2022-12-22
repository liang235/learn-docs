# uniqBy
数组去重，根据对象的某个属性去重

## 使用 [官网地址](https://www.lodashjs.com/docs/lodash.uniqBy)

根据属性值去重
``` js
import { uniqBy } from 'lodash-es' // js 工具库

const arr = [
	{ name: '张三', age: 100 },
	{ name: '李四', age: 200 },
	{ name: '王五', age: 300 },
	{ name: '李四', age: 200 },
	{ name: '王五', age: 300 },
]
console.log(uniqBy(arr, 'name'))
// [{ name: '张三', age: 100 },{ name: '李四', age: 200 },{ name: '王五', age: 300 }]
```

也可以计算后根据值进行去重
``` js
import { uniqBy } from 'lodash-es' // js 工具库

const arr = [2.1, 1.2, 2.3]
console.log(uniqBy(arr, Math.floor)) // [2.1, 1.2]
```
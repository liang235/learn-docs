# defaultsDeep
对象深合并，分配来源对象的可枚举属性到目标对象所有解析为 `undefined` 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉，它会递归分配默认属性

## 使用方法
``` js
import { defaultsDeep } from 'lodash-es' // js 工具库

const obj1 = { a: { b: 2 } } // 目标对象
const obj2 = { a: { b: 1, c: 3 } } // 来源对象

console.log(defaultsDeep(obj1, obj2))
// => { 'a': { 'b': 2, 'c': 3 } }
```
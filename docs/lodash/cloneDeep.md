# cloneDeep
对象深拷贝

## 使用方法
``` js
import { cloneDeep } from 'lodash-es' // js 工具库

const objects = [{ a: 1 }, { b: 2 }]
const deep = cloneDeep(objects)

console.log(deep[0] === objects[0])
// => false
```
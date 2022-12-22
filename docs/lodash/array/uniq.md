# uniq
数组去重，只能去重简单的数组结构

## 使用 [官网地址](https://www.lodashjs.com/docs/lodash.uniq#_uniqarray)
``` js
import { uniq } from 'lodash-es' // js 工具库

const arr = [2, 1, 2, 3, 4, 5, 3, 2, 1]
console.log(uniq(arr)) // [2, 1, 3, 4, 5]
```
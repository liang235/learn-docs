# 数组方法

## [at()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/at)
at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数
``` js
const arr = [5, 12, 8, 13, 33]
console.log(arr.at(0)) // 5
console.log(arr.at(1)) // 12
console.log(arr.at(-1)) // 33
```
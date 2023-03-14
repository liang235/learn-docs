# 数组方法

## [Array.isArray()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
用于确定传递的值是否是一个 Array
``` js
Array.isArray([1, 2, 3])  // true
Array.isArray({foo: 123}) // false
Array.isArray('foobar')   // false
Array.isArray(undefined)  // false
```

## [at()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/at)
at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数
``` js
const arr = [5, 12, 8, 13, 33]
console.log(arr.at(0)) // 5
console.log(arr.at(1)) // 12
console.log(arr.at(-1)) // 33
```
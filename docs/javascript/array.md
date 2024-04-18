# 数组方法

## [filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 过滤
- `filter()` 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素
```js
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']

// 过滤出 字符串长度大于6的返回
const result = words.filter((word) => word.length > 6)

console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]
```

## [find]() 查找
- `find()` 方法返回数组`第一个满足所提供测试函数的元素`。否则返回 `undefined`
```js
const arr = [5, 12, 8, 130, 44]

const found = arr.find((element) => element > 10)

console.log(found)
// Expected output: 12 是第一个满足条件的元素
```

## [reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- `reduce()` 函数用于对数组中的每个元素从左到右依次执行一个由用户提供的回调函数，并将其累积结果汇总为单个返回值
```js
const arr1 = [
    { name: 1, title: '哈哈' },
    { name: 2, title: '嘻嘻' },
]
const arr2 = [
    { name: 1, title: '王昭君' },
    { name: 2, title: '貂蝉' },
    { name: 3, title: '西施' },
    { name: 4, title: '玛玛哈哈' },
    { name: 5, title: '安琪拉' },
]
// 判断 arr1 对象中与 arr2 对象中 name 相同的对象，并返回相同对象的 name 属性并返回
let result = arr1.reduce((acc, cur) => {
    let names = arr2.filter(item => item.name === cur.name).map(item => item.name)
    acc.push(`${names}`)
    return acc
}, [])
```

## [at()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/at)
at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数
``` js
const arr = [5, 12, 8, 13, 33]
console.log(arr.at(0)) // 5
console.log(arr.at(1)) // 12
console.log(arr.at(-1)) // 33
```
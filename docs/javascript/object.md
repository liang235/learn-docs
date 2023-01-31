# [object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
Object 是 JavaScript 的一种 数据类型 。它用于存储各种键值集合和更复杂的实体。Objects 可以通过 Object() 构造函数或者使用 对象字面量 的方式创建

## [Object.keys](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) 对象属性转化为数组
- Object.keys() 方法会返回一个由一个给定对象的自身可枚举 `属性` 组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
``` js
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
}

console.log(Object.keys(object1))
// Expected output: Array ["a", "b", "c"]
```

## [Object.values](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values) 对象属性值转化为数组
- Object.values() 方法返回一个给定对象自身的所有可枚举 `属性值` 的数组，值的顺序与使用 for...in 循环的顺序相同（区别在于 for-in 循环枚举原型链中的属性）
``` js
const obj = { foo: 'bar', baz: 42 }
console.log(Object.values(obj)) // ['bar', 42]
```

## [Object.getOwnPropertyNames](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) 属性名数组
- Object.getOwnPropertyNames() 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组
``` js
const arr = ['a', 'b', 'c']
console.log(Object.getOwnPropertyNames(arr).sort()) // ["0", "1", "2", "length"]

// 类数组对象
const obj = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.getOwnPropertyNames(obj).sort()) // ["0", "1", "2"]

// 使用 Array.forEach 输出属性名和属性值
const obj = { 0: 'a', 1: 'b', 2: 'c' }
Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
    console.log(val + ' -> ' + obj[val])
})
// 输出
// 0 -> a
// 1 -> b
// 2 -> c
```

## [Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 对象合并
- Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象
- assign 的属性拷贝是浅拷贝
``` js
const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)

console.log(target)
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target)
// Expected output: true
```

## [hasOwnProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 判断对象上是否有某个属性
- hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键
``` js
const object1 = {}
object1.property1 = 42

console.log(object1.hasOwnProperty('property1'))
// Expected output: true
```

## [defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 添加或修改对象的属性
- Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
``` js
const object1 = {}

Object.defineProperty(object1, 'property1', {
    value: 42
})

// 常用新增属性并复制的方法，但在严格模式下会报错
object1.property1 = 77 // throws an error in strict mode(在严格模式下抛出错误)

console.log(object1.property1) // expected output: 42
```
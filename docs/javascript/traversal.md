# 遍历循环

## [for](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for)
for 语句用于创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分隔，后跟一个用于在循环中执行的语句
``` js
const arr = [1, 2, 3]
for(let i = 0, i < arr.length; i++) {
    console.log(arr[i])
}
```

## [for-in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
for...in 语句以任意顺序迭代一个对象的除 Symbol 以外的可枚举属性，包括继承的可枚举属性
``` js
const arr = [1, 2, 3]
let index
for(index in arr) {
    console.log("arr[" + index + "] = " + arr[index])
}
// 输出结果如下
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
```

## [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
for...of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
``` js
const array1 = ['a', 'b', 'c']

for (const element of array1) {
  console.log(element)
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## [white](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/while)
while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环
``` js
let n = 0
while (n < 3) {
    n++
}
console.log(n)
```

## [do...while](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while)
do...while 语句创建一个执行指定语句的循环，直到condition值为 false。在执行statement 后检测condition，所以指定的statement `至少执行一次`
``` js
var result = ''
var i = 0
do {
   i += 1
   result += i + ' '
} while (i < 5)
document.getElementById('example').innerHTML = result
```

## [forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
forEach() 方法对数组的每个元素执行一次给定的函数
``` js
const array1 = ['a', 'b', 'c']
array1.forEach(element => console.log(element))

// Expected output: "a"
// Expected output: "b"
// Expected output: "c
```
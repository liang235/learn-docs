# 字符串

## [split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 字符串转数组
- split() 方法使用指定的分隔符字符串将一个 String 对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置
``` js
const arr = '1, 2, 3, 4, 5, 6, 7, 8, 9'
console.log(arr.split(','))
// ['1', '2', '3', '4', '5', '6', '7', '8', '9']
```

## [startsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) 是否以指定字符串开头
startsWith() 方法用于返回一个字符串是否在指定字符串中的开头位置，是则返回true，否则返回false
``` js
const str = 'Hello World'
console.log(str.startsWith('Hello')) // true
```

## [endsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) 是否以指定字符串结尾
endsWith() 方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false
``` js
const str = 'Cats are the best!'

console.log(str.endsWith('best!'))
// Expected output: true
```

## [indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
indexOf() 方法返回数组中给定元素所在的第一个索引，如果不存在则返回 -1
``` js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison'))
// Expected output: 1
```

## [substring](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集
``` js
const anyString = "Mozilla"

console.log(anyString.substring(0,3))
// 输出 "Moz"
```

## [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
``` js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
// Expected output: Array ["camel", "duck", "elephant"]
```

## [JSON.stringify](https://www.runoob.com/js/javascript-json-stringify.html)
JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串

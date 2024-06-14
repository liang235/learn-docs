# [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## 解构对象
```js
const { name, age } = { name: '张三', age: 22 }
console.log(name, age) // 张三 22
```

## 解构数组
```js
const [a, b] = [1, 2]
console.log(a, b) // 1 2
```

## 解构默认值
```js
const { name, age = 22 } = { name: '张三' }
console.log(name, age) // 张三 22
```

## 选择性解构
数组的特性是按照索引值顺序执行的，如果只要取得数组最后几位，或者第几位，需要预留出其他值的位置

```js
const [ , , , value1 ,value2] = ['HTML5', 'JavaScript', 'Vue', 'React', 'NodeJS']
console.log(value1, value2) // React NodeJS
```

## 扩展运算符
在一个数组中解构，可以取得数组第一位，剩下的通过扩展运算符（展开运算符），统一放置到一个数组中

```js
const [value, ...other] = ['HTML5', 'JavaScript', 'Vue', 'React', 'NodeJS']
console.log(value, other) // HTML5 ["JavaScript","Vue","React","NodeJS"]
```

## 解构混用
在实际开发中大多数都是数据结构比较复杂，用好了解构赋值才会让你的代码看起来更加整洁
```js
const person = {
	name: '坤坤',
	age: 25,
	like: ['唱', '跳', 'rap', '篮球'],
	works: {
        music: ['Wait Wait Wait', '鸡你太美'],
        movies: ['童话二分之一', '鬼畜区常青树']
    },
	friend: ['丞丞', '大宝贝', '大黑牛'],
}
```

### 传统型
```js
const result = person.works.music[1]
console.log(result) // 鸡你太美
```

### 浅层解构
```js
let { works } = person
console.log(works.music[1])
```

### 连续解构
```js
const {
	works: { music },
} = person
console.log(music[1])
```

### 数组与对象混用
```js
const {
	works: {
		music: [, result],
	},
} = person
console.log(result)
```

### 解构+别名
```js
const {
	works: {
		music: [, result],
		movies: newMov,
	},
} = person
console.log(result, newMov)
```

## 参考
https://blog.csdn.net/qq_18798149/article/details/135232483


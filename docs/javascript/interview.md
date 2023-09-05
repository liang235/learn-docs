# 面试题
一些有趣的面试题

## 数组求和，不能使用循环，不能调用数组中的方法
此题考的知识点其实就是循环转递归
```js
const arr = [1, 2, 3, 4, 5]

// 数组求和，不能使用循环，不能调用数组中的方法
function m(arr, i = 0) {
	if (i === arr.length) return 0
	return arr[i] + m(arr, i + 1)
}

console.log(m(arr)) // 15
```

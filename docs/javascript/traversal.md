# 遍历循环

## for 循环代码块一定的次数
``` js
const arr = [1, 2, 3]
for(let i = 0, i < arr.length; i++) {
    console.log(arr[i])
}
```

## for-in 循环遍历对象的属性
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
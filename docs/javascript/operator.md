# 操作符

## ! 取反操作符
- 将对象转为布尔型并取反
- 对于布尔类型会将其值 `true` 和 `false` 互换
- 对于非布尔类型，`js` 会将值先转换成布尔类型，而后取反
    - 字符串类型: 会将空值（""）转换成 `true`，其余转换成 `false`
    - 数字类型: 会将 `0` 转换成 `true`，其余为 `false`
- `null`、`undefined` 会转换成 `true`

``` js
console.log(!true) // false
console.log(!false) // true
console.log(!'') // true
console.log(!'123') // false
console.log(!0) // true
console.log(!1) // false
console.log(!null) // true
console.log(!undefined) // true
```

## !! 双取反操作符
是将取反后的布尔值再取反，相当于直接将非布尔类型值转为布尔类型值

``` js
console.log(!!true) // true
console.log(!!false) // false
console.log(!!'') // false
console.log(!!'123') // true
console.log(!!0) // false
console.log(!!1) // true
console.log(!!null) // false
console.log(!!undefined) // false
```

## ?? 空值合并操作符
只有当操作符左侧值为 `undefined` 或者 `null` 时才会返回操作符右侧的值，否则返回左侧的值，简单来说 `??` 是可以判断左侧有没有值

``` js
null ?? 'hello' // hello
undefined ?? 'hello' // hello
false ?? 'hello' // false
null ?? undefined // undefined
null ?? undefined ?? 123 // 123
```

可以用于程序中当某个值为 `null` 或 `undefined` 时给它赋默认值

## ??= 空值赋值操作符
`x ??= y` 等价于 `x = x ?? y`

``` js
let x = undefined
let y = 1
x ??= y // 1
```

## ?. 可选链操作符
``` js
const obj = {}
console.log(obj.name.firstName)
```

这个情况下会出现报错：

![operator-0](/operator-0.jpg)

这是程序中经常会遇见的报错，通常会在上面加一层 `if` 判断或者使用 `&&` 与操作符来处理这种异常，现在可以使用 `?.` 操作符来处理

``` js
const obj = {}
console.log(obj.name?.firstName) // undefined
```

可选链?.操作符用于读取链中的属性值，而不必明确每个值都有效，区别于 `(.)` 操作符加了一层异常的处理，避免程序的报错和表达式的执行短路

## || 逻辑或操作符
逻辑或是当操作符左侧为假值 `null`、`undefined`、`false`、`0`、`''` 时返回操作符右侧的值，否则返回左侧的值

``` js
null || 'hello' // hello
undefined || 'hello' // hello
false || 'hello' // hello
0 || 'hello' // hello
true || 'hello' // true
```

## ~ 按位取反操作符
`~` 会对参加运算的一个数据按二进制进行取反运算。即将 `0` 变成 `1`，`1` 变成 `0`。运算规则如下：

``` js
~1 = 0
~0 = 1
```

## ~~ 就是执行两次按位取反
其实就是保持原值，但是注意虽然是原值，但是对布尔型变量执行这个操作，会转化成相应的数值型变量，也就是

``` js
~~true = 1
~~false = 0
~~"" = 0
~~[] = 0
~~undefined = 0
```

注意：使用 `​​~~` ​​取整时，不考虑小数四舍五入
``` js
~~6.3 = 6
~~6.8 = 6
```
# 操作符

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
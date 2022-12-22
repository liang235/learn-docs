# useLocalStorage
顾名思义，它的作用就是让 `localStorage` 支持响应式

`useLocalStorage` 是 `useStorage` 的简写版本，默认存储方式为 [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 使用方法
``` js
import { useLocalStorage } from '@vueuse/core' // vue 工具库

// 存储数据
useLocalStorage('存储的key', '存储的值')

// 获取数据
const state = useLocalStorage('account')
console.log(state.value)

// 清空数据
const state = useLocalStorage('account')
state.value = null
console.log(state.value)
```

## 我想让 localStorage.abc = [1,2,3]，然后把第二项改成 22，怎么做？

1、首先，初始化：
``` js
let abc = useLocalStorage('abc', [1, 2, 3]) // abc是一个 Ref 对象
console.log(abc.value) // 一个Proxy
```

2、修改：
``` js
abc.value[1] = 22
```

注意看，我每次修改的都是 `abc` 变量，我根本没有操作原生 `localStorage API`，而且我操作的是数组，原生 `localStorage` 并不能直接操作数组。`useLocalStorage` 会返回智能解析过的值，不再是字符串，而会是数组

执行之后，我们看看控制台的 `Application` 的 `localStorage`，里面是不是已经有一个键叫 `abc`，值是字符串 `[1,22,3]` 的记录

这样我们就实现了原生 `localStorage API` 的响应式，而且，我们始终可以将 `localStorage.abc` 视为数组，尽管它在原生JS里是字符串

## 如果 localStorage.abc 本身存在，执行 useLocalStorage 会发生什么？
如果 `localStorage.abc` 本身存在，那么执行 `useLocalStorage` 并传值，是无效的，得到的依然是 `localStorage.abc` 原本的值

## 重复执行 useLocalStorage 会发生什么？
``` js
let abc = useLocalStorage('abc', [1, 2, 3])
let abc1 = useLocalStorage('abc', [11, 22, 33])
```

也是一样的道理，如果 `localStorage.abc` 本身有值，那么第一行不会重赋值，第二行依然是不会重赋值

## 修改值的唯一办法是操作 .value
现在我们知道，重复执行 `useLocalStorage` 并不能修改值，如果想要修改值，必须修改 `.value`：
- 修改数组部分元素的方法：上面演示过，`abc.value[1] = 22`
- 重赋值数组的方法：`abc.value = reactive([1,2,3])`

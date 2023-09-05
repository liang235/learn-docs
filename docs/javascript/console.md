# [console](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)
`console` 对象提供了浏览器控制台调试的接口

## table 表格
将数据以表格的形式显示
<ZoomImg src="/console_table.png" />

```js
const arr = [
	{ first: 'Rene', last: 'Magritte' },
	{ first: 'Chaim', last: 'Soutine', birthday: '123456' },
	{ first: 'Henri', last: 'Matisse' },
]
console.table(arr)
```

## trace 堆栈
向 `Web` 控制台 输出一个堆栈跟踪，有的时候函数里面出现了一些未知的错误，但是他并不报错，可以使用 `trace` 追踪在哪出现了问题
<ZoomImg src="/console_trace.png" />

```js
function b() {
	console.trace()
}
function a() {
	b()
}
a()
```

## dir 对象结构
可以显示指定 `JavaScript` 对象的属性列表，并以交互式的形式展现。输出结果呈现为分层列表，包含展开/折叠的三角形图标，可用于查看子对象的内容
<ZoomImg src="/console_dir.png" />
<ZoomImg src="/console_dir_fn.png" />

::: code-group
```js [图一代码]
console.log(document.body)
console.fn(document.body)
```

```js [图二代码]
function fn() {
	console.log(123)
}
console.log(fn)
console.dir(fn)
```
:::

## time 计时
检测某一段代码运行的时间，从 `time('loop')` 到 `timeEnd('loop')`
```js
console.time('loop')
const start = Date.now()
if (Date.now() - start < 2000) {}
console.timeEnd('loop')
```

## group 分组
在 `Web` 控制台上创建一个新的分组。随后输出到控制台上的内容都会被添加一个缩进，表示该内容属于当前分组，直到调用 `console.groupEnd()` 之后，当前分组结束
<ZoomImg src="/console_group.png" />

```js
const label = '把大象装冰箱'
console.group(label)
console.log('打开冰箱')
console.log('把大象装进去')
console.log('关闭冰箱')
console.groupEnd(label)
```

## groupCollapsed 分组
与 `console.group()` 方法的不同点是，新建的分组默认是折叠的

```js
const label = '把大象装冰箱'
console.groupCollapsed(label)
console.log('打开冰箱')
console.log('把大象装进去')
console.log('关闭冰箱')
console.groupEnd(label)
```

## 给消息加样式
可以在打印的时候加上 `%c` 给 `console.log` 或者 `console.info` 等消息加样式
<ZoomImg src="/console_style.png" />

```js
const styles = `
	padding:5 px;
	background-color: #90442e;
	color: white;
	font-style: italic;
	border: 5px solid #E06E3C;
	font-size: 2em;
`
console.log('%c给消息加样式', styles)
```
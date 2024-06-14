# [watch 监听](https://cn.vuejs.org/api/reactivity-core.html#watch)

## 监听 ref 数据
``` js
// 监听 ref 单个数据
watch(name, (newVal, oldVal) => {
    console.log("name变化了：", newVal, oldVal)
})

// 监听 ref 多个值得变化
watch([name, age], (newVal, oldVal) => {
    console.log("[name,age]变化了：", newVal, oldVal)
})
```

## 监听 props 数据
``` js
watch(props.file, () => {
	console.log('监听 props 中数据 file')
})

// 如果监听的是响应式的数据需要 返回该属性的 getter 函数
watch(
	() => props.file,
	() => {
		console.log('监听 props 中数据 file')
	}
)
```

## 监听路由数据
``` js
watch(
	() => route.path,
	() => {
		console.log('监听路由数据')
	}
)
```

## 深度监听
```js
// 监听 ref 单个数据
watch(
	formData,
	(newVal, oldVal) => {
		console.log('name变化了：', newVal, oldVal)
	},
	{
		immediate: true, // 在侦听器创建时立即触发回调
		deep: true, // 开启深度监听
	}
)
```

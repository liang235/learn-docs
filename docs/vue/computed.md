# computed 计算属性

```js
const defaultIndex = computed(() => {
	const index = props.columns[0]?.findIndex((item) => {
		if (item.ITEM_CODE) {
			return item.ITEM_CODE === props.field
		} else {
			return item.ID === props.field
		}
	})
	return index
})
```

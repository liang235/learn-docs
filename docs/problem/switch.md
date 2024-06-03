# switch 优化

- 正常使用
```js
const isAlias = (alias) => {
	switch(alias){
	   case "water":
	        return "水"
	   case "solid":
	        return "固废"
	    case "gas":
	        return "气"
	    case "energy":
	        return "能"
	    case "engineering":
	        return "工程"
	    case "ecological":
	        return "生态"
	    case "others":
	        return "其他"
	}
}
```

- 改为对象结构
```js
const isAlias = (alias) => {
	const aliasMap = {
		water: '水',
		solid: '固废',
		gas: '气',
		energy: '能',
		engineering: '工程',
		ecological: '生态',
		others: '其他',
	}

	return aliasMap[alias] || '未知'
}
```
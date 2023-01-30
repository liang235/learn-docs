# 工具库

## 数组去重
- 方式1
``` js
let originalArray = [1, 2, 3, 4, 5, 3, 2, 4, 1]

const result = Array.from(new Set(originalArray))
console.log(result) // -> [1, 2, 3, 4, 5]
```

- 方式2
``` js
let originalArray = [1, 2, 3, 4, 5, 3, 2, 4, 1]

const result = []
const map = new Map()
for (let v of originalArray) {
	if (!map.has(v)) {
		map.set(v, true)
		result.push(v)
	}
}
console.log(result) // -> [1, 2, 3, 4, 5]
```

- 方式3
``` js
let originalArray = [1, 2, 3, 4, 5, 3, 2, 4, 1]

const result = []
for (let v of originalArray) {
	if (!result.includes(v)) {
		result.push(v)
	}
}
console.log(result) // -> [1, 2, 3, 4, 5]
```

- 方式4
``` js
let originalArray = [1, 2, 3, 4, 5, 3, 2, 4, 1]

for (let i = 0; i < originalArray.length; i++) {
	for (let j = i + 1; j < originalArray.length; j++) {
		if (originalArray[i] === originalArray[j]) {
			originalArray.splice(j, 1)
			j--
		}
	}
}
```

- 方式5
``` js
let originalArray = [1, 2, 3, 4, 5, 3, 2, 4, 1]

const obj = {}
const result = originalArray.filter((item) => (obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)))
console.log(result) // -> [1, 2, 3, 4, 5]
```

## 数组对象去重
``` js
const responseList = [
	{ id: 1, a: 1 },
	{ id: 2, a: 2 },
	{ id: 3, a: 3 },
	{ id: 1, a: 4 },
]
const result = responseList.reduce((acc, cur) => {
	const ids = acc.map((item) => item.id)
	return ids.includes(cur.id) ? acc : [...acc, cur]
}, [])
console.log(result) // -> [ { id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3} ]
```
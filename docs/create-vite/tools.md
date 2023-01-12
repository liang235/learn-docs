# 工具箱

## 判断字符串是否为空
``` js
/**
 * @description: 判断字符串是否为空
 * @param {*} val 字符串
 * @return 为空返回 true 反之则 false
 */
export function isStrEmpty(val) {
	if (val === '' || val === null || val === undefined) {
		return true
	}
	return false
}
```

## 判断两个对象是否相同
``` js
/**
 * @description: 判断两个对象是否相同
 * @param a 要比较的对象一
 * @param b 要比较的对象二
 * @returns 相同返回 true，反之则反
 */
export function isObjectValueEqual(a, b) {
	if (!a || !b) return false
	const aProps = Object.getOwnPropertyNames(a)
	const bProps = Object.getOwnPropertyNames(b)
	if (aProps.length !== bProps.length) return false
	for (let i = 0; i < aProps.length; i++) {
		const propName = aProps[i]
		const propA = a[propName]
		const propB = b[propName]
		if (!b.hasOwnProperty(propName)) return false
		if (propA instanceof Object) {
			if (!isObjectValueEqual(propA, propB)) return false
		} else if (propA !== propB) {
			return false
		}
	}
	return true
}
```

## 对象深克隆
``` js
/**
 * @description: 对象深克隆
 * @param obj 源对象
 * @returns 克隆后的对象
 */
export function deepClone(obj) {
	let newObj
	try {
		newObj = obj.push ? [] : {}
	} catch (error) {
		newObj = {}
	}
	for (const attr in obj) {
		if (obj[attr] && typeof obj[attr] === 'object') {
			newObj[attr] = deepClone(obj[attr])
		} else {
			newObj[attr] = obj[attr]
		}
	}
	return newObj
}
```

## Tree 多级嵌套数组处理成一维数组
``` js
/**
 * @description: Tree 多级嵌套数组处理成一维数组
 * @param {*} source
 * @return {*}
 */
export function treeConvertList(source, child = 'children') {
	const res = []
	source.forEach((el) => {
		res.push(el)
		el[child] && res.push(...treeConvertList(el[child]))
	})
	return res
}
```
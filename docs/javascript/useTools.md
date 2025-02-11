# 工具方法

## 数组对象根据一个或多个属性去重
```js
/**
 * 数组对象根据一个或多个属性去重
	const arr = [
		{ MEET_ID: '1', dates: '2024-08-01', dot: 'blue' },
		{ MEET_ID: '2', dates: '2024-08-01', dot: 'blue' },
		{ MEET_ID: '3', dates: '2024-08-02', dot: 'blue' },
		{ MEET_ID: '4', dates: '2024-08-02', dot: 'red' },
		{ MEET_ID: '5', dates: '2024-08-02', dot: 'red' },
	]
 * useUniqByProperties(arr, ['dates', 'dot'])
 */
export const useUniqByProperties = (arr, props) => {
	const result = []
	const map = new Map()

	arr.forEach((item) => {
		const key = props.map((prop) => item[prop]).join('-')
		if (!map.has(key)) {
			map.set(key, true)
			result.push(item)
		}
	})

	return result
}
```

## 提取第一个出现指定属性前后的字符串
```js
/**
 * 提取第一个出现指定属性前后的字符串
 * @param {String} value - 要提取值的字符串
 * @param {String} attr - 指定的属性
 * @param {Boolean} isAttr - 是否保留 attr
 */
export const useExtractIndexOf = (value, attr = '.', isAttr = false) => {
	if (!value) return
	const index = value.indexOf(attr)
	const left = value.substring(0, isAttr ? index + 1 : index)
	const right = value.substring(isAttr ? index : index + 1)
	return { left, right }
}
```

## 提取最后一个出现指定属性前后的字符串
```js
/**
 * 提取最后一个出现指定属性前后的字符串
 * @param {String} value - 要提取值的字符串
 * @param {String} attr - 指定的属性
 * @param {Boolean} isAttr - 是否保留 attr
 */
export const useExtractLastIndexOf = (value, attr = '.', isAttr = false) => {
	if (!value) return
	const index = value.lastIndexOf(attr)
	const left = value.substring(0, isAttr ? index + 1 : index)
	const right = value.substring(isAttr ? index : index + 1)
	return { left, right }
}
```

## 数字转换成汉字
```js
/**
 * 数字转换成汉字
 */
export const useNumberToChinese = (num) => {
	const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
	return chineseNumbers[num]
}
```

## 星期几转换成中文
```js
/**
 * 星期几转换成中文
 * useDaysInChinese(1)
 */
export const useDaysInChinese = (day) => {
	const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	return arr[day]
}
```

## 根据传入的值，把星期转换成中文
```js
/**
 * 根据传入的值，把星期转换成中文
 */
export const uesWeekdayInChinese = (day) => {
	const weekdays = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

	// 检查输入是否在有效范围内
	if (day < 1 || day > 7) {
		throw new Error('Invalid day number. Please provide a number between 1 and 7.')
	}

	return weekdays[day - 1] // 数组索引从 0 开始
}
```

## 根据传入的日期，补齐剩下的日期，并返回一个数组
```js
/**
 * 根据传入的日期，补齐剩下的日期，并返回一个数组
const arr = [
	{ day: '2024-11-20', list: [{ a: 1 }] },
	{ day: '2024-11-21', list: [{ a: 2 }] },
]
const completeWeek = fillWeek(arr)
console.log(completeWeek)
 */
export const useFillWeek = (arr) => {
	const startDate = new Date(arr[0].day)
	const dayOfWeek = startDate.getDay() // 获取当前日期是星期几
	const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek // 计算到周一的偏移量
	const startOfWeek = new Date(startDate)
	startOfWeek.setDate(startOfWeek.getDate() + mondayOffset) // 设置为当前周的周一

	const weekArr = []
	const existingDays = new Map(arr.map((item) => [item.day, item.list])) // 创建一个映射以保留原有数据

	for (let i = 0; i < 7; i++) {
		const currentDay = new Date(startOfWeek)
		currentDay.setDate(startOfWeek.getDate() + i)
		const dayString = currentDay.toISOString().split('T')[0]

		// 检查原数组中是否存在该日期，保留原有的 list 数据
		weekArr.push({ day: dayString, list: existingDays.get(dayString) || [] })
	}

	return weekArr
}
```

## tree 型数据扁平化
```js
function flattenTree(tree, parentId = null) {
    let flattened = [];

    // 遍历tree中的每个节点
    for (let node of tree) {
        // 克隆节点，并设置其父节点ID
        let flatNode = { ...node, parentId };
        // 将当前节点添加到扁平化数组中
        flattened.push(flatNode);
        // 如果该节点有子节点，则递归处理子节点
        if (node.children && node.children.length > 0) {
            flattened = [...flattened, ...flattenTree(node.children, node.id)]
        }
    }

    return flattened;
}
```

## 获取 tree 型数据的深度
```js
function getTreeDepth(tree) {
    if (!tree.children || tree.children.length === 0) {
        return 1;
    } else {
        const childrenDepths = tree.children.map(child => getTreeDepth(child));
        return 1 + Math.max(...childrenDepths);
    }
}
```

## 根据深度获取 tree 的数据
```js
function getNodesAtDepth(tree, depth, currentDepth = 1) {
    if (depth === currentDepth) {
        return [tree];
    } else if (tree.children && tree.children.length > 0) {
        let nodes = [];
        for (let child of tree.children) {
            nodes = nodes.concat(getNodesAtDepth(child, depth, currentDepth + 1));
        }
        return nodes;
    } else {
        return [];
    }
}
```
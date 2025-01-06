# tools
常用的方法函数封装

### 去除符号转数字
```js
const useIpToNumber = (ip, attr = '.') => {
  const parts = ip.split(attr)
  const number = parts.join('')
  return number
}
const num = useIpToNumber('1.1.1.1')
console.log(num) // 1111
```

## 根据条件过滤tree型数据
```js
function filterTreeData(tree, predicate) {
  // 递归函数来过滤子节点
  function filterChildren(nodes) {
    return nodes.filter((node) => {
      if (node.children) {
        node.children = filterChildren(node.children) // 递归过滤子节点
        // 如果过滤后子节点为空，则移除children属性
        if (node.children.length === 0) {
          delete node.children
        }
      }
      return predicate(node) // 应用原始predicate来决定是否保留节点
    })
  }

  return filterChildren(tree) // 开始过滤整个树
}

const predicate = (item) => item.doneType !== 32
const filteredTree = filterTreeData(treeData, predicate)
console.log(filteredTree)
```

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
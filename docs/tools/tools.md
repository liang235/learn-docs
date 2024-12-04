# tools
常用的方法函数封装

## 提取最后一个出现指定属性前后的字符串
```js
export function useExtractLastIndexOf(value, attr = '.', isAttr = false) {
  if (!value) return
  const index = value.lastIndexOf(attr)
  const left = value.substring(0, isAttr ? index + 1 : index)
  const right = value.substring(isAttr ? index : index + 1)
  return { left, right }
}
```
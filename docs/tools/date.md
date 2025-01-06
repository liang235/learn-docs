# date
常用的日期方法函数封装

## 根据传入的值，把星期转换成中文
```js
/**
 * 星期几转换成中文
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
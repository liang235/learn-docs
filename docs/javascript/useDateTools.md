# 日期工具
- 顶层配置
```js
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(customParseFormat)
dayjs.extend(weekday)

const customLocale = {
	name: 'custom',
	weekStart: 1, // 设置周的第一天为星期一
}
dayjs.locale(customLocale)
```

## 获取指定日期所在周的所有日期
```js
/**
 * 获取指定日期所在周的所有日期
 * @param {string | Date} date - 传入的日期，可以是字符串或Date对象
 * @returns {string[]} 包含一周所有日期的数组，格式为 YYYY-MM-DD
 */
export const useGetWeekDates = (date) => {
	const inputDate = dayjs(date, 'YYYY-MM-DD')
	const weekStart = inputDate.startOf('week') // 获取周的第一天（星期一）

	const dates = []
	for (let i = 0; i < 7; i++) {
		// 添加每一天到数组
		dates.push(weekStart.add(i, 'day').format('YYYY-MM-DD'))
	}
	return dates
}
```
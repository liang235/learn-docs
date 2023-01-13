# 日期格式

## 时间问候语
``` js
/**
 * 时间问候语
 * @param param 当前时间，new Date() 格式
 * @description param 调用 `formatAxis(new Date())` 输出 `上午好`
 * @returns 返回拼接后的时间字符串
 */
export function formatAxis(param) {
	const hour = new Date(param).getHours()
	if (hour < 6) return '凌晨好'
	if (hour < 9) return '早上好'
	if (hour < 12) return '上午好'
	if (hour < 14) return '中午好'
	if (hour < 17) return '下午好'
	if (hour < 19) return '傍晚好'
	if (hour < 22) return '晚上好'
	return '夜里好'
}
```

## 日期格式化
``` js
import dayjs from 'dayjs' // 日期格式化插件

/**
 * @description: 日期格式化 - 根据传入的占位符返回格式化后的日期
 * @param {*} date
 * @param {*} formatter
 * @return {*}
 */
export const useDateFormat = (date, formatter = 'YYYY-MM-DD') => {
	if (date) {
		return dayjs(date).format(formatter)
	}
}
```
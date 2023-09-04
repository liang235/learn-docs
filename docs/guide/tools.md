# 工具库

## 数组去重
- 方式1
``` js
let originalArray = [1, 2, 3, 4, 5, 3, 2, 4, 1]

// 方式1
const result = Array.from(new Set(originalArray))
console.log(result) // -> [1, 2, 3, 4, 5]

// 方式2
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

## 根据身份证号计算
``` js
/**
 * 根据身份证号码计算年龄、出生日期和性别
 * @param {string} idCard - 身份证号码
 * @returns {object} - 包含年龄、出生日期和性别的对象
 *                    - age: 年龄 (number)
 *                    - birthday: 出生日期 (string)，格式为 'YYYY-MM-DD'
 *                    - gender: 性别 (string)，取值为 '男' 或 '女'
 */
export function calcAgeBirthDayGender(idCard) {
    // 获取出生日期中的年、月、日
    const year = idCard.substring(6, 10);
    const month = idCard.substring(10, 12);
    const day = idCard.substring(12, 14);

    // 获取当前日期中的年、月、日
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // 计算年龄
    let age = currentYear - parseInt(year);
    if (currentMonth < parseInt(month) || (currentMonth === parseInt(month) && currentDay < parseInt(day))) {
        age--;
    }

    // 计算性别
    const genderCode = idCard.substring(16, 17);
    const gender = genderCode % 2 === 0 ? "女" : "男";

    // 格式化出生日期
    const birthday = year + "-" + month + "-" + day;

    // 返回结果
    return { age, birthday, gender };
}
```

## 格式化金额
```js
/**
 * 格式化金额
 * @param {number} amount - 需要格式化的金额
 * @param {string} separator - 分隔符，默认为逗号
 * @param {number} decimal - 保留小数位数，默认为2位
 * @returns {string} - 格式化后的金额字符串
 */
export function formatAmount(amount, separator = ',', decimal = 2) {
    const amountStr = amount.toFixed(decimal).toString(); // 将金额转换为字符串，保留指定的小数位数

    // 使用正则表达式和替换函数，在每三位数字之前插入分隔符
    const formattedAmount = amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return formattedAmount;
}
```

## 获取当前日期
```js
/**
 * 获取当前日期函数
 * padStart()方法，它可以在数字不足指定长度时，在前面补充指定的字符（在这里是补充0）
 * @returns {string} 格式化后的日期和时间字符串，例如：2022-01-01 12:30
 */
export function getNowFormatDate() {
    // 获取当前日期和时间
    const date = new Date();

    // 获取完整的年份(4位)，并补足不足4位的部分
    const year = date.getFullYear().toString().padStart(4, '0');

    // 获取当前月份(0-11,0代表1月)，并补足不足2位的部分
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    // 获取当前日(1-31)，并补足不足2位的部分
    const strDate = date.getDate().toString().padStart(2, '0');

    // 获取当前小时(0-23)，并补足不足2位的部分
    const hour = date.getHours().toString().padStart(2, '0');

    // 获取当前分钟(0-59)，并补足不足2位的部分
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // 返回格式化后的日期和时间字符串
    return `${year}-${month}-${strDate} ${hour}:${minutes}`;
}
```
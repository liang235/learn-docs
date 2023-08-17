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
 * 根据身份证号计算 出生日期/年龄/性别
 * const idCard = "身份证号码";
 * const { age, birthday, gender } = calcAgeBirthDayGender(idCard);
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
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

## 根据身份证号计算年龄
``` js
/**
 * 根据身份证号计算年龄
 * const idNumber = "身份证号码";
 * const age = calculateAge(idNumber);
*/
export function calculateAgeAndBirthDate(idNumber) {
    const year = idNumber.substring(6, 10);
    const month = idNumber.substring(10, 12);
    const day = idNumber.substring(12, 14);

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let age = currentYear - Number(year);

    if (currentMonth < Number(month) || (currentMonth === Number(month) && currentDay < Number(day))) {
        age--;
    }

    // birthDate 为 23 Sat Jan 01 2000 00:00:00 GMT+0800 (中国标准时间)
    const birthDate = new Date(year, Number(month) - 1, day);

    return { age, birthDate };
}
```
# 运算符

## 算数运算符
``` java
package com.dj.com;

public class HelloWord {
	public static void main(String[] args) {
		int a = 10;
		int b = 10;
		System.out.println(a+b);
		System.out.println(a-b);
		System.out.println(a*b);
		System.out.println(a/b);
		System.out.println(a%b);

		// 自增自减运算
		int c = 10;
		int d = 10;
		int m = c++; // 10 先运算，在自增
		int n = ++d; // 11 先自增，在运算
	}
}
```

## 赋值运算符
``` java
package com.dj.com;

public class HelloWord {
	public static void main(String[] args) {
		int a = 10; // = 赋值运算符

		int b = 20;
		b+=a; // b = b + a;
		int m = 30;
		m/=2; // m = m / 2;
	}
}
```

## 关系运算符
``` java
package com.dj.com;

public class HelloWord {
	public static void main(String[] args) {
		// > < >= <= != 结果都是 true 或者 false
		int a = 10;
		int b = 20;
		boolean result = a > b;
		System.out.println(result); // false
	}
}
```

## 逻辑运算符
两个 boolean 类型的操作数或表达式进行逻辑比较

- &&: 与(并且),两个操作数，同时为真，结果为真
- ||: 或(或者),两个操作数，有一个为真，结果为真
- !: 非(取反),意为不是，真即是假，假即是真

## 三元运算符
将判断后的结果赋值给变量

|  操作符  | 语义 | 描述             |
| :----: | :----: | :--------------- |
| ? : | 布尔表达式 ? 结果1 : 结果2 | 当表达式结果为真，获得结果1<br>当表达式结果为假，获得结果2 |

## 位运算符
对数值类型数据进行按位操作，1表示true，0表示
```
- &：按位与，二进制数据按位与操作
- |：按位或，二进制数据按位或操作
- ~：按位取反，二进制数据按位取反
- ^：按位异或，二进制数据异或，相同为假，不同为真
- >>：右移，二进制数据整体右移
- <<：左移，二进制数据整体左移
- >>>：无符号右移，二进制数据整体右移，符号位补0
```
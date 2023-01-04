# 数据类型
- Java 中的变量具有严格的数据类型区分(强类型语言)
- Java 语言中，任何一个值，都有其对应的类型的变量

## 基本数据类型
- 整数: byte short int long
``` java
package com.dj.java;

public class TestJava {
	public static void main(String[] args) {
		byte flag = 0; // 1个字节
		short status = 0; // 2个字节
		int age = 10; // 4个字节
        // 注意: int 为整数的默认类型，如需为 long 类型赋值较大整数时，需在值的后面加 L
		long id = 100100L; // 8个字节
	}
}
```

- 小数: float double
``` java
package com.dj.java;

public class TestJava {
	public static void main(String[] args) {
		// 浮点数默认为 double 类型，如果想要使用 float 类型，需在后面加上 f
		float f1 = 10.1f; // 4个字节
		double d1 = 10.2; // 8个字节
	}
}
```

- 布尔: boolean
``` java
package com.dj.java;

public class TestJava {
	public static void main(String[] args) {
        // 布尔值就两种类型: true/false
		boolean a1 = true;
		boolean b1 = false;
	}
}
```

- 字符: char
``` java
package com.dj.java;

public class TestJava {
	public static void main(String[] args) {
		// 字符类型和字符串类型不相等
		// 字符使用单引号，并且只能有一个值
		char c1 = '中'; // 2个字节

		// 由两个字符组成的字符串
		String name = "张三";
	}
}
```

## 引用数据类型
- 数组
- 类
- 接口

## 数据类型转换
- 自动类型转换
``` java
package com.dj.com;

public class HelloWord {
	public static void main(String[] args) {
		int a = 10;
		long b = a; // int 类型的10，就自动转换成了 long 型
		byte c = a; // 没有办法进行自动类型转换
	}
}
```

- 强制类型转换
``` java
package com.dj.com;

public class HelloWord {
	public static void main(String[] args) {
		// 强制类型转换-》有可能因为精度的缺失，导致数据的不准确
		byte c = (byte)a; // 没有办法进行自动类型转换
	}
}
```

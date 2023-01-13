# 数组
- 一组能够存储相同数据类型值的变量的集合
- 当我们有一组相同类型的数据需要存储，如果此时使用单个变量来存储，我们将要定义若干个变量名，这样将会 非常繁琐，并不利于维护

## 数组的赋值方式
- 使用默认的初始值来初始化数组中的每一个元素
``` java
语法：数组元素类型 [] 数组名 = new 数组元素类型[数组中元素的个数（数组的长度）];
// 创建一个容量为 10 的数组，可以存放 10 个元素的数组
如：int [] scores = new int[10];
```

- 先声明，然后再赋予默认的初始值
``` java
语法：数组元素类型 [] 数组名;
数组名 = new 数组元素类型[数组中元素的个数（数组的长度）];

如：int [] scores; scores = new int[10];
```

- 先声明，然后再使用指定的值进行初始化
``` java
语法：数组元素类型 [] 数组名 = new 数组元素类型[]{元素1，元素2,....};
如：int [] scores = new int[]{56,78,98};
```

- 将第三种写法可以简化为（使用数组常量值给数组进行赋值）
``` java
语法：数组元素类型 [] 数组名 = {元素1，元素2,....};
如：int [] scores = {56,78,98};
```

## 静态初始化和动态初始化
- `静态初始化`: 在创建数组的同时，给数组赋值
- 静态初始化不能写入容量，指定容量一定是动态初始化
``` java
package com.dj.java;

public class HelloWorld {
	public static void main(String[] args) {
        // 在创建数组的同时，给数组赋值 {"a","b","c"}
		String[] arr1 = new String[] {"a","b","c"};
        String[] arr1 = {"a","b","c"};
	}
}
```

- `动态初始化`: 创建数组的时候不存元素，但是一定要指明数组的容量，因为不知道容量 jvm 没办法知道要开多大的空间
``` java
package com.dj.java;

public class HelloWorld {
	public static void main(String[] args) {
		String[] arr1 = new String[10]
	}
}
```

## 数组操作常见的问题
- 注意：操作数组时下标最大长度是数组长度-1
``` java
package com.dj.java;

public class HelloWorld {
	public static void main(String[] args) {
		int[] arr = new int[] {1,2,3};
		System.out.println(arr[3]);
	}
}
```
上面代码看上去是没有任何语法错误的，但是执行就会报错，报数组下标越界的问题
![java-1](/java-1.jpg)

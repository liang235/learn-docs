# Arrays 类
Arrays 工具类：用来操作数组（比如排序和搜索）的各种方法

## 使用方式
``` java
package com.dj.java;

import java.util.Arrays; // 导入 Arrays 工具类

public class HelloWorld {
	public static void main(String[] args) {
		int[] arr = {21,12,33,25,15};
		Arrays.sort(arr); // 数组排序
        String str = Arrays.toString(arr); // 转为字符串
		System.out.println(str);

		// 二分查找,必须在有序的场景下使用
		int index = Arrays.binarySearch(arr, 33);
		System.out.println(index);
	}
}
```

## 常用方法
- 使用二分法查找
    - Arrays.binarySearch(int[] array, int value);
- 数组内容转成字符串的形式输出
    - Arrays.toString(int[] array);
- 数组排序
    - Arrays.sort(int[] array);
- 复制指定的数组
    - Arrays.copyOf(int[] array, int length);
    - Arrays.copyOf(int[] array, int from, int to);
    - System.arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
- 判断两个数组是否相等
    - Arrays.equels(); 使用指定元素填充数组

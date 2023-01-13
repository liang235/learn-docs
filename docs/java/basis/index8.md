# 二位数组(多维数组)

## 创建使用
``` java
package com.dj.java;
/**
 * 二维数组(多维数组)
 * 1.定义：外围数组中的元素，自身就是一个数组
 * 2.创建：使用[][]来创建
 * 3.使用：
 * 1)存数据和取数据--关键是如何定位你要找的数据
 * 2）查数据：遍历，使用嵌套循环，如果是二维，就两层循环，如果是三维，就三层循环
 */
public class HelloWorld {
	public static void main(String[] args) {
		int [][] arrs = new int[][] {{1,2,3},{3,4,5},{5,6,7}};
		// 代表查找{}下的第二个{},在查找第二个{}下的第二个数值
		System.out.println(arrs[2][2]); // 7
		System.out.println(arrs[0][2]); // 3
	}
}
```

## 二维数组的遍历
``` java
package com.dj.java;

public class HelloWorld {
	public static void main(String[] args) {
		int[][] arrs = new int[][] {{1,2,3},{3,4,5},{5,6,7}};

		// 二维数组遍历
		for(int i=0;i<arrs.length;i++) {
			for(int j=0;j<arrs[i].length;j++) {
				System.out.print(arrs[i][j]+" ");
			}
			// 换行
			System.out.println();
		}
	}
}
```

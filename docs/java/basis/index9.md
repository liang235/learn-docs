# 面向对象的思想
面向对象是一种新兴的程序设计方法，或者是一种新的程序设计规范，其基本思想是使用对象、类、继承、封装、多态等基本概念来进行程序设计。从现实世界中客观存在的事物（即对象）出发来构造软件系统，并且在系统构造中尽可能运用人类的自然思维方式

## 面向对象案例
``` java
// HelloWorld.java
package com.dj.java;

public class HelloWorld {
	public static void main(String[] args) {
		// 1.老师开始上课
		// 创建一个老师的对象==》用 Teacher 类来创建一个对象
		Teacher teacher = new Teacher();
		// 给老师取名字
		teacher.name = "zhuyou";
		// 让老师上课
		teacher.teach();

		// 2.学生开始学习
		// 创建一个学生的对象==》用 Student 类来创建一个对象
		Student student = new Student();
		// 给学生取名字
		student.name = "小明";
		student.age = 21;
		student.id = 1001;
		student.study();
	}
}
```
``` java
// Student.java
package com.dj.java;

/**
 * 定义一个学生类 - 学生的模版
 * 此时是在一个学生具备怎么的属性和功能
 */
public class Student {
	// 属性：成员变量
	long id;
	String name;
	int age;

	// 功能、能力、方法: 比如学习、吃饭、睡觉
	void study() {
		System.out.println("学生热爱学习");
	}

	void eat() {
		System.out.println("学生热爱吃饭");
	}

	void sleep() {
		System.out.println("学生正在睡觉");
	}
}
```
``` java
// Teacher.java
package com.dj.java;

public class Teacher {
	String name;
	int age;
	String schoolName;

	void teach() {
		System.out.println("开始上课");
	}
}
```

## 基于面向对象的程序设计是怎么做的
- 面向对象的重点是什么？重点不是使用对象。使用对象相当于是设计阶段已经结束了，面向对象的重点是 `设计类`
- 在设计好的类以后如何使用类？1）使用类来创建类型 2）使用对象--调用对象的属性和方法
- 如何设计类呢？设计类就是要设计类的内容，类的内容包括五个部分。这五个部分不是必须都得出现。
	- 属性（成员变量）
	- 方法（功能）
	- 构造器（构造方法）
	- 代码块
	- 内部类

## 类的属性（成员变量）

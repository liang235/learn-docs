# 继承 extends

## 继承的目的
- 在创建一个类时，可以通过继承，快速的获得该类中已经定义好的内容，而避免了重复定义（重复造轮子）

## 子类对象实例化的过程
- 1.当创建子类对象时，子类继承链上所有父类的构造器都会被调用，调用顺序是继承链最顶端开始，依次往下，直到调用到子类自身的构造器为止
- 2.因此，子类对象中包含父类中所有的东西
- 3.子类可以通过自身的构造器指明调用父类的哪一个构造器

## 继承练习
- 1.公司员工
    - 关系
        - 程序员
    - 共有方法：打卡 sign();
    - 特有方法
        - 程序员：敲代码

``` java
// 员工共有的类
package com.dj.company;

public class Employee {
	private String name; // 名称
	private int age; // 年龄
	private long workerId; // 工号

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public long getWorkerId() {
		return workerId;
	}

	public void setWorkerId(long workerId) {
		this.workerId = workerId;
	}

	// 共有方法：打卡
	public void sign() {
		System.out.println("打卡");
	}
}
```

``` java
// 程序员
package com.dj.company;

public class Programmer extends Employee{
	// 继承完之后加上自己的东西
	public void coder() {
		System.out.println("程序员喜欢敲代码");
	}
}
```

``` java
// 测试继承
package com.dj.company;

public class Demo {
	public static void main(String[] args) {
		Programmer p1 = new Programmer();
		p1.sign();
		p1.coder();
		p1.setName("猪猪");
		System.out.println(p1.getName());
	}
}
```
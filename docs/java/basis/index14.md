# 接口
- 接口其实就是抽象类的升级版，接口里面都是抽象方法
- 从狭义上讲来说，接口就是 java 中的 interface
- 从广义上的角度讲对外提供规则的都是接口
- 接口就是一套标准的规范(规则)

## 特点
- 接口用关键字 interface 表示
    - interface 接口名{}
    - 接口中方法上的 abstract 关键字可以省略
- 类实现接口用 implements 表示
    - class 类名 implements 接口名{}
- 接口不能实例化
    - 接口按照多态的方法实例化
- 接口的子类
    - 可以是抽象类，但意义不大
    - 可以是具体类，要重新接口中的所以抽象方法(主要使用)

## 接口的练习
- 定义老师规则接口，定义老师类、讲课方法、辅导作业方法
- 定义实现的子类，不同老师的讲课方法
``` java
interface Teacher{
	void teach();
	void guide();
}

class EnglishTeacher implements Teacher{
	@Override
	public void teach() {
		System.out.println("英语");
	}

	@Override
	public void guide() {
		System.out.println("教英语");
	}
}

class ComputerTeacher implements Teacher{
	@Override
	public void teach() {
		System.out.println("计算机");
	}

	@Override
	public void guide() {
		System.out.println("教计算机");
	}
}
```
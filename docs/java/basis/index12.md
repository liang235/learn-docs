# 多态
一个事务的多种形态

## 多态的前提
- 要有继承关系
- 要有方法重写
- 要有父类引用指向子类

## 多态出现的场景
- 父类的引用指向子类对象的实体 == 也称为向上转型
    - 多态使用的情况下：编译看等号的左边，运行看等会的右边
    - 因此没有办法通过多态来调用子类独有的方法
    - 如果一定要调用独有的方法，就需要通过向下转型来实现
- 接口的引用指向接口实现类的实体

## 多态练习
动物都有吃饭的功能，但是小狗吃的是狗粮，小猫吃的是猫粮，当我们将小猫小狗体貌特征遮住的时候

如何判定吃东西的是小猫还是小狗？
- 如果是小狗，就调用小狗独有的看门的功能
- 如果是小猫，就调用小猫独有的粘人的功能
``` java
package com.dj.oop;

public class Demo {
	public static void main(String[] args) {
		// 向上转型
		Animal a1 = new Cat();
		Animal a2 = new Dog();
		checkAnimal(a1);
	}

	// 判断是小猫还是小狗
	public static void checkAnimal(Animal animal) {
		if(animal instanceof Cat) {
			animal.eat();
			// 并且向下转型
			Cat cat = (Cat)animal;
			cat.show();
		}

		if(animal instanceof Dog) {
			animal.eat();
			// 并且向下转型
			Dog dog = (Dog)animal;
			dog.watch();
		}
	}
}

// 动物
class Animal {
	public int eat() {
		System.out.println("动物吃饭");
		return 0;
	}
}

// 吃饭
class Cat extends Animal {
	@Override
	public int eat() {
		System.out.println("猫吃猫粮");
		return 1;
	}

	// 猫独有的功能
	public void show() {
		System.out.println("粘人");
	}
}

class Dog extends Animal {
	@Override
	public int eat() {
		System.out.println("狗吃狗粮");
		return 2;
	}

	// 狗独有的功能
	public void watch() {
		System.out.println("看门");
	}
}
```
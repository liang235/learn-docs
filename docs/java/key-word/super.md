# super
通过 super 可以访问父类的构造方法

## super 修饰构造器
- 只能在子类的构造器中使用 super 调用父类的构造器
- 如果不显示的定义任何 super() 调用父类构造器，那么 java 会默认的在子类构造器中提供一个 super()
- 如果父类没有空参构造器，那么子类必须手动来指明调用父类的一个构造器
- super() 必须出现在构造器的首行，因此在同一个构造器中不能同时出现 super() 和 this

## super 修饰属性
- 如果父类和子类中有同名属性，通过 super 可以调用父类中的属性
- 如果没有同名属性，可以省略 super 直接调用属性

## super 修饰方法
根修饰属性一样
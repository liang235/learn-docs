# 书写格式
``` js
public class HelloWorld {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}
```

- `public` - `java` 语言的关键字，公共的访问权限
- `class` - `java` 语言的关键字，表明声明一个类
- `HelloWorld` - 类名，必须是一个合法的标识符，这个名字最好和文件名保持一致
- `static` - `java` 语言的关键字，表示静态的
- `void` - `java` 语言的关键字，表示方法运行之后得到的结果类型，`void` 表示空--就是没有返回结果
- `main` - 方法名字，`java` 程序的入口方法
- `String args[]` - 参数列表，表示形参，用户可以根据形参传入实参参与运算
- `System` - `java` 中的类，包含很多系统相关的方法
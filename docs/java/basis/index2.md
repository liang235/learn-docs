# 常见问题

## 类名和文件名不一致
- 如果类名是使用 `public` 修饰的，类名必须和文件名一致
``` js
// HelloWorld 类名使用了 public 修饰，这时候类名必须和文件名一致
// 如果不使用 public 修饰，可以不和文件名一致，但是 javac 编译的 class 文件会以类名命名，不会和文件名一样
public class HelloWorld {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}
```

- 如果类名不是使用 `public` 修饰的，类名可以和文件名不一致---但是不建议这样干

## 一个 java 文件中能存在多个类吗
- 如果两个类都没有使用 `public` 修饰时没有问题
``` js
// 两个类都没有使用 public 修饰，与文件名不一致也没关系
class HelloWorld {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}

class HelloWorld1 {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}
```

- 如果只有一个类使用 `public` 修饰并且这个类名和文件一样也是可以的
``` js
// HelloWorld 和文件名一致，所有可以允许下面没有使用 public 装饰的 HelloWorld1
public class HelloWorld {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}

class HelloWorld1 {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}
```

- 如果两个类都使用 `public` 修饰，这样肯定不行
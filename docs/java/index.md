# Java
`Java` 是一门面向对象的编程语言

## 安装 JDK
- [JDK 官网地址](https://www.oracle.com/cn/java/technologies/downloads/)
- [JavaSE 文档](https://docs.oracle.com/en/java/javase/19/index.html)
- 按照提示操作即可。默认安装到目录 `/Library/Java/JavaVirtualMachines/` 下面

## 配置环境变量
- 在终端输入 `open ~/.bash_profile`，打开环境变量文件进行编辑

``` js
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-19.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH:.
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
```

- 在终端输入 `source .bash_profile`，刷新配置文件
- 检验是否配置成功，在终端输入 `java --version`，看版本号是否正确
- 在终端输入 `echo $JAVA_HOME` 命令显示刚才配置的路径，看有就是成功

## 备用环境变量
``` js
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_241.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH:
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-19.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH:.
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
```

## 安装 Eclipse
- [Eclipse 官网](https://www.eclipse.org/downloads/)
- [Eclipse 安装教程](https://blog.csdn.net/weixin_57724816/article/details/116783035)
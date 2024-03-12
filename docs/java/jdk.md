# JDK 的下载与安装

## 地址
```
官网
https://www.oracle.com/

下载地址
https://www.oracle.com/cn/java/technologies/downloads/#jdk17-mac

java 	--执行工具
javac 	--编译工具
```

<ZoomImg src="/java-jdk.png" />

## 验证java是否安装成功
```
javac
javac -version
java -version
```

## 卸载 java
```
sudo rm -fr /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
sudo rm -fr /Library/PreferencePanes/JavaControlPanel.prefPane
sudo rm -fr ~/Library/Application\ Support/Oracle/Java
sudo rm -rf /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk   ##根据自己的版本删除
```


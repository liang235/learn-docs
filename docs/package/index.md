# 插件部分

## dependencies
* 项目中实际运行需要用到的代码，没有的话会出错

## devDependencies
- 只在开发时需要，运行时不需要
- 该配置项放置本地开发过程中需要使用到的编译、打包、测试、格式化模块等

## 插件拆分
- 由于安装的插件越来越多，配置之后会使 `vite.config.js` 看起来非常臃肿，所有对其进行拆分处理
- 拆分代码位于根目录 `vite` 文件夹下

## 更新日志地址
- [vue](https://github.com/vuejs/core/blob/main/CHANGELOG.md)
- [vite](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)
- [Element-plus](https://github.com/element-plus/element-plus/releases/tag/2.2.22)
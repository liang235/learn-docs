# npm-run-all
- [npm-run-all](https://github.com/mysticatea/npm-run-all): 以并行或顺序运行多个 npm 脚本
- 这个工具是为了解决官方的 npm run 命令无法同时运行多个脚本的问题，它可以把诸如 npm run clean && npm run build:css && npm run build:js && npm run build:html 的一长串的命令通过 glob 语法简化成 npm-run-all clean build:*

## 安装
```
pnpm add -D npm-run-all
```

## 使用
- --parallel: 并行运行多个命令，例如：npm-run-all --parallel lint build
- --serial: 多个命令按排列顺序执行，例如：npm-run-all --serial clean lint build:**
- --continue-on-error: 是否忽略错误，添加此参数 npm-run-all 会自动退出出错的命令，继续运行正常的
- --race: 添加此参数之后，只要有一个命令运行出错，那么 npm-run-all 就会结束掉全部的命令
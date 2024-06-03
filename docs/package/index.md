# 插件部分

## dependencies

- 项目中实际运行需要用到的代码，没有的话会出错

| 类型       | 说明                                 |
| :--------- | :----------------------------------- |
| [decimal.js](./decimal) | 用于在处理浮点数时提供更加精确的计算 |

## devDependencies

- 只在开发时需要，运行时不需要
- 该配置项放置本地开发过程中需要使用到的编译、打包、测试、格式化模块等

| 类型                      | 说明                                                                                                                                           |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| node:path                 | path 模块提供了一组用于处理文件和目录路径的工具。比如，你可以使用 path.join() 或 path.resolve() 来创建或解析文件路径                           |
| node:process              | process 模块提供了一个全局变量，用于获取有关当前 Node.js 进程的信息，比如 process.env 可以获取环境变量，process.argv 可以获取命令行参数        |
| node:child_process        | child_process 模块允许你在 Node.js 中创建子进程，执行系统命令。exec 方法允许你执行一个命令，并获取其输出                                       |
| fs-extra                  | fs-extra 是 Node.js 的 fs 模块的增强版，提供了一些额外的方法来操作文件和目录，如 fs.ensureDir() 可以确保目录存在，fs.copy() 可以复制文件或目录 |
| inquirer                  | inquirer 是一个常用的 Node.js 库，用于创建交互式的命令行界面。它提供了各种提示类型，如单选、多选、输入框等，帮助用户在命令行中输入数据         |
| esno                      | 基于 esbuild 的 TS/ESNext node 运行时。该库会针对不同的模块化标准，采用不同的方案                                                              |
| eslint                    | ESLint 是一个用于识别和报告 ECMAScript/JavaScript 代码中的模式的工具，包括 ECMAScript 6+（ES2015+）                                            |
| eslint-define-config      | 这是一个 用于定义 ESLint 配置的工具                                                                                                            |
| eslint-config-prettier    | 这是一个 ESLint 配置，它关闭所有可能与 Prettier 冲突的规则。这样可以确保 ESLint 和 Prettier 之间的规则不会互相冲突                             |
| eslint-plugin-prettier    | 这是一个 ESLint 插件，它将 Prettier 作为 ESLint 规则运行。这样可以确保 ESLint 和 Prettier 之间的规则不会互相冲突                               |
| eslint-config-airbnb-base | 这是一个 ESLint 规则集，用于约束代码的使用方法                                                                                                 |
| eslint-plugin-import      | 这是一个 用于检查和规范 JavaScript 模块导入和导出的插件                                                                                        |
| [prettier](./prettier)    | 是一个代码格式化工具                                                                                                                           |

## 插件拆分

- 由于安装的插件越来越多，配置之后会使 `vite.config.js` 看起来非常臃肿，所有对其进行拆分处理
- 拆分代码位于根目录 `vite` 文件夹下

## 更新日志地址

- [vue](https://github.com/vuejs/core/blob/main/CHANGELOG.md)
- [vite](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)
- [Element-plus](https://github.com/element-plus/element-plus/releases/tag/2.2.22)
- [vueuse](https://github.com/vueuse/vueuse/releases)

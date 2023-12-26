# [npm](https://www.npmjs.com/)
包管理工具

## 基础用法
| 命令        |      作用      |
| ------------- | :----------- |
| npm install xxx      | 安装包 |
| npm install -g xxx      | 安装全局包 |
| npm uninstall xxx      | 卸载包 |
| npm uninstall -g xxx      | 卸载全局包 |
| npm ls      | 查看项目中的包 |
| npm ls -g      |   查看全局安装包    |
| npm config get prefix |   查看全局安装包路径，只输出路径    |
| npm ls -g --depth 0 | 查看全局安装包路径，输出路径与安装包列表 |
| npm config set prefix '~/.npm-global' | 设置全局安装包路径 |

## 更新 package.json 包版本

### 安装 [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
```
npm install -g npm-check-updates
```

### npm-check-updates 基础用法
| 命令        |      作用      |
| ------------- | :----------- |
| ncu | 检查所有项目依赖项的最新版本 |
| ncu -u | 升级项目的包文件 |
| ncu i | 选择可更新包中要更新的包 |
| ncu -g | ncu 本身不能升级全局包，执行提示的命令即可 |

## 在 node_modules 中查找谁引用了某个库
```js
npm ls sockjs-client
```
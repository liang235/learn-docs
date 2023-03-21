# npm
包管理器

## npm 基本操作

``` js
// 查看全局安装的包
npm ls -g

// 检测 npm 包版本
npm -g outdated
```

## npm 更新安装包

``` js
// 安装 npm-check
npm install -g npm-check npm-check-updates

// npm 查看项目中可以更新的包
ncu

// npm 更新某个项目的包
npm-check -u 或者 ncu -u

// 更新全局包
npm-check -g -u
```
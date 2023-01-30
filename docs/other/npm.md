# npm
包管理器

## npm 基本操作

``` js
// 查看全局安装的包
npm ls -g

// 检测 npm 包版本
npm -g outdated
```

## npm 更新全局包

``` js
// 安装 npm-check
npm install -g npm-check

// npm 更新全局包
ncu -u -g

// npm 查看项目中可以更新的包
ncu

// npm 更新某个项目的包
ncu -u

// npm 更新单个全局包
npm update <name> -g

// npm 更新项目生产环境依赖包
npm update <name> --save

// npm 更新项目开发环境依赖包
npm update <name> --save-dev
```
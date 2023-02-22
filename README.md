## 分支
- master 是存储 docs 主要内容
- gh-pages 是存储打包后的内容，也就是需要部署的文件

## 命令操作
- pnpm docs:dev 本地开发
- pnpm docs:build 打包文件
- pnpm docs:serve 本地预览打包文件
- pnpm run deploy 打包并直接部署到 github，可以不用，现在使用 .github 工作流来完成

## [更新日志](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md)
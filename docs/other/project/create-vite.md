# 项目搭建

在 vue3 、vite 项目中使用到的依赖如下:

- [prettier](https://www.prettier.cn/docs/index.html): 是一个代码格式化工具，以保证项目的统一格式、风格
- [eslint](https://zh-hans.eslint.org/docs/latest/user-guide/getting-started): 可以保证项目的质量
- [stylelint](https://github.com/stylelint/stylelint): 检验 css 样式的格式、风格
- [husky](https://github.com/typicode/husky): 用来管理 git hook 的工具
- [lint-staged](https://github.com/okonet/lint-staged): 对 git 暂存的文件进行 lint 检查

## 初始化项目
```
pnpm create vite my-vue-app --template vue
```
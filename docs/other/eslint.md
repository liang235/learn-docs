# Eslint
- [eslint](https://zh-hans.eslint.org/docs/latest/user-guide/getting-started): 可以保证项目的质量

## 配置 eslint

- 安装
```
pnpm add -D eslint eslint-plugin-vue eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier
```

```
eslint: eslint 基础插件
eslint-plugin-vue: Vue.js 官方 ESLint 插件
eslint-config-airbnb-base: 现在最火的 ESLint 规则
eslint-plugin-import: eslint-config-airbnb-base 的前置插件
eslint-config-prettier: 解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效，本质上这个工具其实就是禁用掉了一些不必要的以及和 Prettier 相冲突的 ESLint 规则
eslint-plugin-prettier: 这个插件的主要作用就是将 prettier 作为 ESLint 的规则来使用，相当于代码不符合 Prettier 的标准时，会报一个 ESLint 错误
```

- 初始化 eslint
```
pnpm eslint --init
```

- 依次初始化选项
``` js
(1) How would you like to use ESLint?
选择：To check syntax and find problems

(2) What type of modules does your project use?
选择：JavaScript modules (import/export)

(3) Which framework does your project use?
选择：Vue.js

(4) Does your project use TypeScript?
选择：Yes

(5) Where does your code run?
选择：Browser

(6) What format do you want your config file to be in?
选择：JavaScript

(7) Would you like to install them now?
选择：Yes

(8) Which package manager do you want to use?
选择：pnpm
```

- 依赖安装完成后，会生成 `.eslintrc.cjs` 配置文件
- 此时打开 `.eslintrc.cjs` 配置文件如果报错的话，需要再 `env` 字段中增 加 `node: true` 配置以解决 `eslint` 找不到 `module` 的报错
``` js
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint-config-airbnb-base',
		// eslint-config-prettier 与 eslint-config-prettier 简写配置
		'plugin:prettier/recommended'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {},
}
```

- 在 `package.json` 文件中的 `script` 中添加 `lint` 命令
``` js
{
    "scripts": {
		// eslint . 为指定 lint 当前项目中的文件
		// --ext 为指定 lint 哪些后缀的文件
		// --fix 开启自动修复
		"lint:eslint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
	},
}
```

- 新建 `.eslintignore` 文件用作忽略 `eslint`

- 执行 `lint` 命令
```
pnpm run lint:eslint
```
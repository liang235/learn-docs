# Eslint
- [eslint](https://zh-hans.eslint.org/docs/latest/user-guide/getting-started): 可以保证项目的质量
- [eslint-plugin-vue](https://eslint.vuejs.org/user-guide/): Vue.js 官方 ESLint 插件
- `eslint-config-airbnb-base`: 现在最火的 ESLint 规则
- `eslint-plugin-import`: eslint-config-airbnb-base 的前置插件
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): 关闭所有不必要的或可能与pretty冲突的规则
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): 作为 ESLin t规则运行 pretty，并报告不同的 ESLint 问题
- [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint): 在终端打印出错误信息

## 安装
```
pnpm add -D eslint eslint-plugin-vue eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier vite-plugin-eslint
```

## 初始化 eslint
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
选择：Node

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
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint-config-airbnb-base',
		// eslint-config-prettier 与 eslint-plugin-prettier 简写配置
		'plugin:prettier/recommended'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		'no-unused-vars': 1, // 未使用的变量给出警告
	},
}
```

## 在 package.json 文件中的 script 中添加 lint 命令
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

## 新建 .eslintignore 文件用作忽略 eslint
``` js
dist/
node_modules/
```

## 配置 vite-plugin-eslint 插件
- 在 `config/plugins/vite-plugin-eslint.js` 中配置，目录按自己习惯创建即可
``` js
import eslint from 'vite-plugin-eslint'

export default function createEslint() {
	return eslint({
		fix: true,
	})
}
```

## 解决 eslint 与 prettier 的冲突
- 在理想的状态下，`eslint` 与 `prettier` 应该各司其职。`eslint` 负责我们的代码质量，`prettier` 负责我们的代码格式。但是在使用的过程中会发现，由于我们开启了自动化的 eslint 修复与自动化的根据 `prettier` 来格式化代码。所以我们已保存代码，会出现屏幕闪一起后又恢复到了报错的状态
- 这其中的根本原因就是 `eslint` 有部分规则与 `prettier` 冲突了，所以保存的时候显示运行了 eslint 的修复命令，然后再运行 `prettier` 格式化，所以就会出现屏幕闪一下然后又恢复到报错的现象。这时候你可以检查一下是否存在冲突的规则
- 查阅资料会发现，社区已经为我们提供了一个非常成熟的方案，即:
    - `eslint-plugin-prettier`： 基于 `prettier` 代码风格的 `eslint` 规则，即 `eslint` 使用 `pretter` 规则来格式化代码
    - `eslint-config-prettier`： 禁用所有与格式相关的 `eslint` 规则，解决 `prettier` 与 `eslint` 规则冲突，确保将其放在 `extends` 队列最后，这样它将覆盖其他配置
- `也可以不用上面的方法，在 .eslintrc.cjs 的 rules 单独设置不需要的规则也可以`

- 安装，上面已经安装过了，就不需要再继续安装了
```
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

- 在 .eslintrc.json 中 extends 的最后添加一个配置
``` js
{
    extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
     // eslint-config-prettier 与 eslint-config-prettier 简写配置
    'plugin:prettier/recommended'
  ],
}
```

- 最后重启vscode，你会发现冲突消失了，eslint与prettier也按照我们预想的各司其职了

## 安装 vscode 插件 ESLint
- 如果写一行代码就要执行一遍 `lint` 命令，这效率就太低了。所以我们可以配合 `vscode` 的 `ESLint` 插件，实现每次保存代码时，自动执行 `lint` 命令来修复代码的错误
- 在项目中新建 `.vscode/settings.json` 文件或者在 `vscode 编辑器` 设置中，加入以下配置

``` js
{
    // 开启自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll": false,
        "source.fixAll.eslint": true
    }
}
```
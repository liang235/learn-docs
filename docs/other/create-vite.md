# 搭建项目
在 vue3 、ts、vite 项目中使用 eslint 与 prettier 与 stylelint 与 husky 的详细指南

- eslint: 可以保证项目的质量
- prettier: 以保证项目的统一格式、风格
- stylelint: css 样式的格式、风格
- husky: 是一个用来管理 git hook 的工具
- lint-staged: 对 git 暂存的文件进行 lint 检查

https://www.swvq.com/article/detail/471

## 创建项目
```
pnpm create vite my-vue-app --template vue
```

## 配置 eslint
- 安装
```
pnpm add eslint -D
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

- 依赖安装完成后，会生成 .eslintrc.cjs 配置文件
- 此时打开 .eslintrc.cjs 配置文件会出现一个报错，需要再 env 字段中增 加 node: true 配置以解决 eslint 找不到 module 的报错
``` js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    overrides: [
        // 需要安装 vue-eslint-parser
        // {
        //     files: ['*.ts', '*.tsx', '*.vue'],
        //     rules: {
        //         'no-undef': 'off'
        //     }
        // }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        // http://eslint.cn/docs/rules/
        // https://eslint.vuejs.org/rules/
        // https://typescript-eslint.io/rules/no-unused-vars/
        'vue/custom-event-name-casing': 'off',
        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/html-self-closing': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/require-default-prop': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/no-arrow-functions-in-watch': 'off',
        'vue/no-template-key': 'off',
        'vue/no-v-html': 'off',
        'vue/comment-directive': 'off',
        'vue/no-parsing-error': 'off',
        'vue/no-deprecated-v-on-native-modifier': 'off',
        'vue/multi-word-component-names': 'off',
        'no-useless-escape': 'off',
        'no-sparse-arrays': 'off',
        'no-prototype-builtins': 'off',
        'no-constant-condition': 'off',
        'no-use-before-define': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
        'generator-star-spacing': 'off',
        'no-unreachable': 'off',
        'no-multiple-template-root': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-v-model-argument': 'off',
        'no-case-declarations': 'off',
        'no-console': 'error',
        'no-redeclare': 'off'
    }
}
```

- 在 package.json 文件中的 script 中添加 lint 命令
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

- 执行 lint 命令
```
pnpm run lint:eslint
```

## 安装 vscode 插件 ESLint
- 如果写一行代码就要执行一遍 lint 命令，这效率就太低了。所以我们可以配合 vscode 的 ESLint 插件，实现每次保存代码时，自动执行 lint 命令来修复代码的错误
- 在项目中新建 .vscode/settings.json 文件中或者 vscode 编辑器设置中，加入以下配置

``` js
{
    // 开启自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll": false,
        "source.fixAll.eslint": true
    }
}
```

## 配置 prettier

- 安装
```
pnpm add prettier -D
```

- 在根目录下新建 .prettierrc.cjs
``` js
module.exports = {
    // 一行最多多少个字符
    printWidth: 150,
    // 指定每个缩进级别的空格数
    tabWidth: 4,
    // 使用制表符而不是空格缩进行
    useTabs: true,
    // 在语句末尾打印分号
    semi: false,
    // 使用单引号而不是双引号
    singleQuote: true,
    // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
    quoteProps: 'as-needed',
    // 在JSX中使用单引号而不是双引号
    jsxSingleQuote: false,
    // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
    trailingComma: 'es5',
    // 在对象文字中的括号之间打印空格
    bracketSpacing: true,
    // 标签的反尖括号需要换行
    bracketSameLine: false,
    // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
    arrowParens: 'always',
    // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
    rangeStart: 0,
    rangeEnd: Infinity,
    // 指定要使用的解析器，不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准 always\never\preserve
    proseWrap: 'preserve',
    // 指定HTML文件的全局空格敏感度 css\strict\ignore
    htmlWhitespaceSensitivity: 'css',
    // Vue文件脚本和样式标签缩进
    vueIndentScriptAndStyle: false,
    // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
    endOfLine: 'lf',
}
```

- 在 package.json 中的 script 中添加以下命令
``` js
{
    "scripts": {
        "format": "prettier --write \"./**/*.{html,css,js,vue,.sass,json,md}\"",
    }
}
```

- 运行该命令，会将我们项目中的文件都格式化一遍，后续如果添加其他格式的文件，可在该命令中添加，例如：.less 后缀的文件

## 安装 vscode 的 Prettier - Code formatter 插件
- 安装该插件的目的是，让该插件在我们保存的时候自动完成格式化
- 在 .vscode/settings.json 中或者 vscode 编辑器设置中 添加一下规则
``` js
{
    // 开启自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll": false,
        "source.fixAll.eslint": true
    },
    // 保存的时候自动格式化
    "editor.formatOnSave": true,
    // 默认格式化工具选择prettier
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## 解决 eslint 与 prettier 的冲突
- 在理想的状态下，`eslint` 与 `prettier` 应该各司其职。`eslint` 负责我们的代码质量，`prettier` 负责我们的代码格式。但是在使用的过程中会发现，由于我们开启了自动化的 eslint 修复与自动化的根据 `prettier` 来格式化代码。所以我们已保存代码，会出现屏幕闪一起后又恢复到了报错的状态
- 这其中的根本原因就是 `eslint` 有部分规则与 `prettier` 冲突了，所以保存的时候显示运行了 eslint 的修复命令，然后再运行 `prettier` 格式化，所以就会出现屏幕闪一下然后又恢复到报错的现象。这时候你可以检查一下是否存在冲突的规则
- 查阅资料会发现，社区已经为我们提供了一个非常成熟的方案，即:
    - `eslint-plugin-prettier`： 基于 `prettier` 代码风格的 `eslint` 规则，即 `eslint` 使用 `pretter` 规则来格式化代码
    - `eslint-config-prettier`： 禁用所有与格式相关的 `eslint` 规则，解决 `prettier` 与 `eslint` 规则冲突，确保将其放在 `extends` 队列最后，这样它将覆盖其他配置
- `也可以不用上面的方法，在 .eslintrc.cjs 的 rules 单独设置不需要的规则也可以`

- 安装
```
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

- 在 .eslintrc.json 中 extends 的最后添加一个配置
``` js
{
    extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    // 新增，必须放在最后面
    'plugin:prettier/recommended'
  ],
}
```

- 最后重启vscode，你会发现冲突消失了，eslint与prettier也按照我们预想的各司其职了


## 配置 styleling
- stylelint 为 css 的 lint 工具。可格式化 css 代码，检查 css 语法错误与不合理的写法，指定 css 书写顺序等...
- 由于我的项目使用的 sass 预处理器，因此配置的为 sass 相关的，项目中使用其他预处理器的可以按照该配置方法改一下就好
- stylelint v13 版本将 css, parse CSS(如SCSS,SASS),html 内的 css(如*.vue中的style)等编译工具都包含在内。但是 v14 版本没有包含在内，所以需要安装需要的工具

- 安装
```
pnpm add stylelint stylelint-config-standard stylelint-config-standard-scss stylelint-config-standard-vue  stylelint-order postcss-html stylelint-scss -D
```

- 依赖说明
```
stylelint: css 样式 lint 工具
stylelint-config-standard: Stylelint 的标准可共享配置规则，详细可查看官方文档
stylelint-config-standard-scss: .scss 文件的样式配置
stylelint-config-standard-vue: lint.vue 文件的样式配置
stylelint-order: 指定样式书写的顺序，在.stylelintrc.cjs中 order/properties-order 指定顺序
postcss-html: 识别html/vue 中的<style></style>标签中的样式
stylelint-scss: stylelint-config-standard-scss 的依赖，sass 的 stylelint 规则集合
```

- 添加 .stylelintrc.cjs 配置文件
``` js
module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-standard-vue/scss",
    ],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'no-empty-source': null, // 禁止 style 标签内容为空
        'no-descending-specificity': null, // 禁止低特异性选择符出现在覆盖高特异性选择符之后
        'max-line-length': null, // 限制一行的长度
        'selector-class-pattern': null, // 为类选择器指定一个模式
        'value-no-vendor-prefix': null, // 禁止在值中使用供应商前缀
        "indentation": null, // 禁止格式化缩进
        'number-max-precision': null, // 限制数字中允许的小数点后数位
        'keyframes-name-pattern': null, // 期望关键帧名称为串格式 .foo-bar
        'block-no-empty': null, // 禁止使用空样式
        "no-duplicate-selectors": null, // 禁止重复选择器
        "at-rule-no-unknown": null, // 禁止使用未知at规则
        "property-no-unknown": null, // 禁止使用未知属性
        "font-family-no-missing-generic-family-keyword": null, // 禁止字体族中缺少通用族关键字
        "scss/double-slash-comment-empty-line-before": null,
        "scss/no-global-function-names": null,
        "scss/at-rule-no-unknown": null,

        // 指定样式的排序
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'justify-content',
            'align-items',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'font-size',
            'font-family',
            'text-align',
            'text-justify',
            'text-indent',
            'text-overflow',
            'text-decoration',
            'white-space',
            'color',
            'background',
            'background-position',
            'background-repeat',
            'background-size',
            'background-color',
            'background-clip',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'opacity',
            'filter',
            'list-style',
            'outline',
            'visibility',
            'box-shadow',
            'text-shadow',
            'resize',
            'transition'
        ]
    }
}
```

- 在 package.json 中的 script 中添加以下命令
``` js
{
    "scripts": {
        "lint:style": "stylelint \"./**/*.{css,sass,vue,html}\" --fix",
        // 指格式化 src 目录下的文件
        "lint:stylelint": "stylelint src/**/*.{css,scss,vue} --cache --fix"
    },
}
```

## 安装 vscode 的 Stylelint 插件
- 安装该插件可在我们保存代码时自动执行 stylelint
- 在 .vscode/settings.json 文件中或者 vscode 编辑器设置中，加入以下配置
``` js
{
    // 开启自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll": false,
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    },
    // 保存的时候自动格式化
    "editor.formatOnSave": true,
    // 默认格式化工具选择prettier
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // stylelint校验的文件格式
    "stylelint.validate": [
        "css",
        "sass",
        "vue",
        "html"
    ]
}
```

## 配置 husky
- 虽然上面已经配置好了 eslint、preitter 与 stylelint，但是还是存在以下问题
- 对于不使用 vscode 的，或者没有安装 eslint、preitter 与 stylelint 插件的同学来说，就不能实现在保存的时候自动的去修复与和格式化代码
- 这样提交到 git 仓库的代码还是不符合要求的。因此需要引入强制的手段来保证提交到 git 仓库的代码时符合我们的要求的
- husky 是一个用来管理 git hook的工具，git hook 即在我们使用 git 提交代码的过程中会触发的钩子

- 安装
```
pnpm add husky -D
```

- 在 package.json 中的 script 中添加一条脚本命令
``` js
{
    "scripts": {
        "prepare": "husky install"
    },
}
```

- 该命令会在 pnpm install 之后运行，这样其他克隆该项目的同学就在装包的时候就会自动执行该命令来安装 husky。这里我们就不重新执行 pnpm install了，直接执行 pnpm prepare，这个时候你会发现多了一个 .husky 目录
- 然后使用 husky 命令添加 pre-commit 钩子，运行

```
pnpm husky add .husky/pre-commit "pnpm lint:eslint && pnpm format && pnpm lint:stylelint"
```

- 执行完上面的命令后，会在 .husky 目录下生成一个 pre-commit 文件
``` js
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 格式化并提交代码
pnpm lint:eslint && pnpm format && pnpm lint:stylelint
```

- 现在当我们执行 git commit 的时候就会执行 pnpm lint 与 pnpm format，当这两条命令出现报错，就不会提交成功。以此来保证提交代码的质量和格式

## 配置 lint-staged
接入 `husky` 之后大部分代码自动校验以及代码拦截都已经完成了，一般小型项目已经足够使用。但对于大型项目而言，新的问题又出现了，如果项目中代码特别特别的多，但本次修改只是改了其中一两个文件，提交代码的时候会怎么样呢？很显然，`husky` 会将全部代码都检查一遍，理论上而言，以前的代码默认都是校验完成的（除非是在项目中间加的 `husky`，或者有人提交的时候跳过了校验），所以本质上只需要校验本次修改之后的代码是否符合`lint` 规则就好，这个，就是 `lint-staged` 的作用所在

- 安装
```
pnpm add lint-staged -D
```

- 配置 package.json 的相关命令
``` js
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "lint:eslint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --cache --fix",
        "format": "prettier --write \"./**/*.{html,css,js,cjs,vue,.sass,json,md}\"",
        "lint:stylelint": "stylelint src/**/*.{css,scss,vue} --cache --fix",
        "lint:lint-staged": "lint-staged",
        "prepare": "husky install"
    },
    "lint-staged": {
        "*.{js,jsx,ts,tsx}": [
            "eslint --fix",
            "prettier --write"
        ],
        "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
            "prettier --write--parser json"
        ],
        "package.json": [
            "prettier --write"
        ],
        "*.vue": [
            "eslint --fix",
            "prettier --write",
            "stylelint --fix"
        ],
        "*.{css,scss,less,styl,html}": [
            "stylelint --fix",
            "prettier --write"
        ],
        "*.md": [
            "prettier --write"
        ]
    }
}
```

- 修改 pre-commit
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 格式化并提交代码
pnpm run lint:lint-staged
```
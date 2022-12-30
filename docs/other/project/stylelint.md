# stylelint
`stylelint v13` 版本将 css, parse CSS(如SCSS,SASS),html 内的 css(如*.vue中的style)等编译工具都包含在内。但是 v14 版本没有包含在内，所以需要安装需要的工具

- [sass](https://www.sass.hk/): 世界上最成熟、最稳定、最强大的专业级CSS扩展语言
- [stylelint](https://github.com/stylelint/stylelint): 检验 css 样式的格式、风格
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard): Stylelint的 标准可共享配置
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss): Stylelint 的标准可共享 SCSS 配置
- [stylelint-config-standard-vue](https://github.com/ota-meshi/stylelint-config-standard-vue): Stylelint 的标准共享 Vue 配置
- [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss): 用于 Stylelint 的 SCSS 特定检测规则的集合(以插件的形式)
- [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order): css 属性排序规则
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier): 关闭所有不必要的或可能与 pretty 冲突的规则
- [postcss-html](https://github.com/gucong3000/postcss-html): 用于解析 HTML(和类HTML)的 PostCSS 语法
- [vite-plugin-stylelint](https://github.com/ModyQyW/vite-plugin-stylelint): 在终端打印出错误信息

## 安装
```
pnpm add -D sass stylelint stylelint-config-standard stylelint-config-standard-scss stylelint-config-standard-vue stylelint-scss stylelint-config-idiomatic-order stylelint-config-prettier postcss-html vite-plugin-stylelint
```

- 在根目录下新建 `.stylelintrc.cjs` 配置文件
``` js
module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-standard-vue/scss',
		'stylelint-config-idiomatic-order',
		'stylelint-config-prettier',
	],
	plugins: ['stylelint-scss'],
	rules: {
		// https://stylelint.bootcss.com/user-guide/rules/list
		// https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules
		'no-empty-source': null, // 禁止 style 标签内容为空
		'no-descending-specificity': null, // 禁止低特异性选择符出现在覆盖高特异性选择符之后
		'no-duplicate-selectors': null, // 禁止重复选择器
		'declaration-block-trailing-semicolon': 'never', // 要求或禁止在声明块中使用尾随分号
		'declaration-block-no-redundant-longhand-properties': null, // 禁止可以组合为一个简略属性的手动属性
		'declaration-block-trailing-semicolon': null, // 要求或禁止在声明块中使用尾随分号
		'max-line-length': null, // 限制一行的长度
		'selector-class-pattern': null, // 为类选择器指定一个模式
		'value-no-vendor-prefix': null, // 禁止在值中使用供应商前缀
		'number-max-precision': null, // 限制数字中允许的小数点后数位
		'keyframes-name-pattern': null, // 期望关键帧名称为串格式 .foo-bar
		'block-no-empty': null, // 禁止使用空样式
		'at-rule-no-unknown': null, // 禁止使用未知at规则
		'property-no-unknown': null, // 禁止使用未知属性
		'string-quotes': null, // 在字符串周围指定单引号或双引号,注释中的引用将被忽略
		'font-family-no-missing-generic-family-keyword': null, // 禁止字体族中缺少通用族关键字
		'scss/double-slash-comment-empty-line-before': null, // 要求或禁止在//-comments前出现空行
		'scss/no-global-function-names': null, // 禁止使用全局函数名，因为这些全局函数现在位于内置的Sass模块中
		'scss/at-rule-no-unknown': null, // 禁止使用未知at规则。应该用来代替stylelint的at-rule-no-unknown
		'scss/at-mixin-pattern': null, // mixin 名称为串格式 .foo-bar
	},
}
```

## package.json 增加命令
``` js
{
    "scripts": {
        // 格式化所有文件
        "lint:stylelint": "stylelint \"./**/*.{css,sass,vue,html}\" --cache --fix",
        // 指定格式化 src 目录下的文件
        "lint:stylelint": "stylelint src/**/*.{css,scss,vue} --cache --fix"
    },
}
```

## 配置 vite-plugin-stylelint 插件
- 在 `config/plugins/vite-plugin-stylelint.js` 中配置，目录按自己习惯创建即可
``` js
import StylelintPlugin from 'vite-plugin-stylelint'

export default function createEslint() {
	return StylelintPlugin({
		fix: true,
	})
}
```

## 安装 vscode 的 Stylelint 插件
- 安装该插件可在我们保存代码时自动执行 `stylelint`
- 在 `.vscode/settings.json` 文件中或者 `vscode` 编辑器设置中，加入以下配置
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
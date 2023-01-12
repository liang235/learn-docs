# jsconfig
- 定义文件提示路径
- 解决项目中使用 `@` 作为路径别名，导致 `vscode` 无法跳转文件的问题

## 配置
``` js
module.exports = {
	compilerOptions: {
		baseUrl: './',
		allows: true,
		// 指定相对于 baseUrl 选项计算的路径映射
		paths: {
			// 解决项目中使用 @ 作为路径别名，导致 vscode 无法跳转文件的问题
			'@/*': ['src/*'],
			'components/*': ['src/components/*'],
			'assets/*': ['src/assets/*'],
		},
		// 允许从没有默认导出的模块中默认导入。这不会影响代码发出，只是类型检查
		allowSyntheticDefaultImports: true,
	},
	// 不从下面路径中提示
	exclude: ['node_modules', 'dist'],
}
```

## compilerOptions 配置
| 选项  | 说明                                                                |
| :---- | :----------------------------------------------------------------  |
| noLib | 不包含默认库文件 (lib.d.ts) |
| target | 指定要使用的默认库 (lib.d.ts)。值为“es3”、“es5”、“es6”、“es2015”、“es2016”、“es2017”、“es2018”、“es2019”、“es2020”、“esnext”|
| module | 生成模块代码时指定模块系统。值是“amd”、“commonJS”、“es2015”、“es6”、“esnext”、“none”、“system”、“umd” |
| moduleResolution | 指定如何解析模块以进行导入。值是“节点”和“经典” |
| checkJs | 对 JavaScript 文件启用类型检查|
| experimentalDecorators | 为提议的 ES 装饰器启用实验性支持 |
| allowSyntheticDefaultImports | 允许从没有默认导出的模块中默认导入。这不会影响代码发出，只是类型检查 |
| baseUrl | 用于解析非相关模块名称的基目录 |
| paths | 指定相对于 baseUrl 选项计算的路径映射 |
|  |  |

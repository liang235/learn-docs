# [vscode](https://code.visualstudio.com/)

## 配置用户代码片段
::: code-group

```js [vue3 代码片段]
{
	"Print to console": {
		"prefix": "vue3", // 唤醒代码块的命令
		"body": [
			"<template>",
			"    <div></div>",
			"</template>",
			"",
			"<script setup>",
			"const route = useRoute() // 路由参数",
			"const router = useRouter() // 路由实例",
			"const { proxy } = getCurrentInstance() // vue 实例",
			"",
			"// 定义响应式数据",
			"const state = reactive({})",
			"",
			"// 组件挂载后，此方法执行后，页面显示",
			"onMounted(() => {})",
			"</script>",
			"",
			"<style lang=\"${1:scss}\" scoped></style>",
		],
		"description": "Create vue template" // 代码块的介绍
	}
}
```

:::

## 常用插件
- 插件地址：https://marketplace.visualstudio.com/vscode

| 插件        |      作用      |
| ------------- | :----------- |
| JavaScript (ES6) code snippets | ES6 语法智能提示 |
| Path Intellisense | 自动提示路径，快速导入文件 |
| Error Lens | 一个错误提示工具 |
| Import Cost | 显示引用包的大小 |
| Trailing Spaces | 突出显示尾随空格 |
| Template String Converter | 在使用变量的时候自动替换字符串为模版字符串 |
| Project Manager | 项目管理插件 |
| DotENV      | ENV 文件语法高亮配置 |
| HTML Snippets      | 智能提示HTML标签，以及标签含义 |
| HTML CSS Support      | 智能提示 CSS 类名以及 ID |

## 常见问题
### 下载页面打不开，访问无反应
- 关闭 `vpn` 设置
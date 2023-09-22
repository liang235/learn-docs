# useClipboard
剪切板，复制粘贴

## 参数介绍
``` js
import { useClipboard } from '@vueuse/core' // vue 工具库
const { text, copy, copied, isSupported } = useClipboard()
```

- `text` 是当前从剪切板读取到的文本
- `copy` 是将文本写入到剪切板的方法
- `copied` 是判断复制操作是否成功为 `true`，默认情况下，`copied` 将在 `1.5s` 后重置
- `isSupported` 是用于判断当前浏览器是否支持剪切板 `API`

## 使用方法
``` html
<div>
    <el-input v-model="input" />
    <el-input v-model="text" />
    <el-button @click="copy(input)">copy</el-button>
</div>
```

``` js
import { useClipboard } from '@vueuse/core' // vue 工具库

// 导出复制粘贴方法
const { text, copy, copied, isSupported } = useClipboard()

// 定义响应式数据
const input = ref('')

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
	if (isSupported.value === true) {
		ElMessage.success('您的浏览器支持剪贴板 API')
	} else {
		ElMessage.success('您的浏览器不支持剪贴板 API')
	}
})

// 监听复制操作是否成功
watch(copied, (val) => {
	if (val) {
		ElMessage.success('复制成功')
	}
})
```

`src/utils/clipboard.js` 目录下是剪切板更详情的操作
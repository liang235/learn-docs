# useElementSize
HTML 元素的响应大小

## 案例
```vue
<template>
	<div ref="target">
		Height: {{ height }}
	    Width: {{ width }}
	</div>
</template>

<script setup>
import { useElementSize } from '@vueuse/core'

const target = ref(null)
const { width, height } = useElementSize(target)
</script>
```
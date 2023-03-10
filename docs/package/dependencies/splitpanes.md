# splitpanes
窗格拆分器

## 安装 [官网地址](https://github.com/antoniandre/splitpanes)
```
pnpm i splitpanes
```

## 使用
``` vue
<template>
	<splitpanes class="default-theme" @resize="paneSize = $event[0].size" style="height: 400px">
        <pane :size="30" min-size="10">1</pane>
        <pane :size="40">
            <splitpanes class="default-theme" :horizontal="true">
                <pane :size="100">2</pane>
                <pane :size="100">3</pane>
                <pane :size="100">4</pane>
            </splitpanes>
        </pane>
        <pane :size="30" min-size="10">5</pane>
    </splitpanes>
</template>

<script setup name="PluginSplitpanes">
// 窗格拆分器插件
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

// 定义变量内容
const paneSize = ref(50)
</script>

<style lang="scss" scoped>
.splitpanes__pane {
	justify-content: center;
	align-items: center;
	display: flex;
	position: relative;
	font-size: 70px;
	color: var(--el-color-primary-light-5);
	border: 1px solid var(--el-border-color-lighter);
	background-color: var(--el-color-primary) !important;
}
</style>
```
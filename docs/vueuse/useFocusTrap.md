# useFocusTrap
响应式包装器 [focus-trap](https://github.com/focus-trap/focus-trap#createfocustrapelement-createoptions)

有关可以传递哪些选项的更多信息，请参阅 [focus-trap](https://github.com/focus-trap/focus-trap#createfocustrapelement-createoptions) 文档中的 `createOptions`

## 安装
```
pnpm i focus-trap
```

## 参数
``` vue
<template>
    <div>
        <el-button @click="activate()">激活</el-button>
        <div ref="target">
            <span>是否获取焦点: {{ hasFocus }}</span>
            <el-input type="text" />
            <el-button @click="deactivate()">禁用</el-button>
        </div>
    </div>
</template>

<script setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap' // vue 集成工具库

// refs
const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target, { immediate: true })
</script>
```
- `hasFocus`：是否获取焦点
- `activate`：获取焦点
- `deactivate`：取消获取焦点
- `immediate`：在最后一个焦点 `tab` 切换时，自动聚焦到容器内第一个可关注的元素上

## 示例
``` vue
<template>
    <div>
        <el-button>不能点击我</el-button>
        <div class="container" ref="container">
            <el-button>陷阱里面</el-button>
            <el-button>无法跳出来</el-button>
            <el-button>永远困在这里</el-button>
        </div>
        <el-button>不能点击我</el-button>
    </div>
</template>

<script setup name="Home">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap' // vue 集成工具库

// refs
const container = ref(null)
useFocusTrap(container, { immediate: true })
</script>
```

将 `immediate` 设置为 `true`，页面加载时，焦点将被放置在 `container` 元素中。然后，就不可能在该容器之外的地方做标签

到达第三个按钮后，再次点击 `tab` 键将回到第一个按钮，`immediate` 选项将自动把焦点设置到容器内第一个可关注的元素上

## 使用组件
这个函数不能正确地激活条件渲染元素的焦点。在这种情况下，您可以使用 `UseFocusTrap` 组件。`Focus Trap` 将在安装该组件时自动激活，在卸载时禁用

``` vue
<template>
    <UseFocusTrap :options="{ immediate: true }">
        <el-button>陷阱里面</el-button>
        <el-button>无法跳出来</el-button>
        <el-button>永远困在这里</el-button>
    </UseFocusTrap>
</template>

<script setup name="Home">
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component' // vue 集成工具库
</script>
```
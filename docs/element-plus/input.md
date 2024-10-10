# [Input 输入框](https://element-plus.gitee.io/zh-CN/component/input)

## 绑定点击事件
- `native` vue3.0 版本后已移除
```js
// 需要再 click 后加 native
<el-input v-model="name" @click.native="handler"></el-input>
```

## clear 事件不触发 click 事件
```js
// 给 clear 事件添加阻止事件冒泡修饰符即可
<el-input v-model="name" clearable @click.native.stop="handlerDialog($event)"></el-input>

handlerDialog(event, type) {
    if (event.target.nodeName != 'INPUT') return;
}
```

## 文字过长...，鼠标滑入显示全部内容
```vue
<template>
    <el-tooltip :disabled="isShowTooltip" placement="top">
        <template #content>
            {{ input }}
        </template>
        <el-input
            style="width: 240px"
            class="text-ellipsis"
            v-model="input"
            disabled
            placeholder="Please input"
            @mouseenter="onMouseenter($event)"
            @mouseleave="isShowTooltip = false"
        />
    </el-tooltip>
</template>

<script setup>
const input = ref('事件添加阻止事件添加阻止事件添加阻止')
const isShowTooltip = ref(false) // Tooltip 文字提示状态

/**
 * @description: 鼠标移入
 * @param {*} event
 * @return {*}
 */
const onMouseenter = (event) => {
    // 获取 el-input__inner 元素
    const inputInner = event.currentTarget.querySelector('.el-input__inner')
    isShowTooltip.value = inputInner.scrollWidth <= inputInner.clientWidth
}
</script>

<style lang="scss" scoped>
:deep() {
    .text-ellipsis {
        .el-input__inner {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>
```
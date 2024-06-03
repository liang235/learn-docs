# [defineModel](https://cn.vuejs.org/api/sfc-script-setup.html#definemodel)
用来简化  `v-model`

## 原来的使用方式
需要搭配 `defineProps()` 和 `defineEmits()` 来使用

::: code-group

```vue [父组件]
<template>
	<myInput v-model="inputVal"/>
</template>

<script setup>
const inputVal = ref('')
</script>
```

```vue [子组件]
<template>
	<input v-model="val" @input="onInput"/>
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const val = ref(props.modelValue)

function onInput(e) {
	emit('update:modelValue', e.target.value)
}
</script>
```
:::

## 使用 defineModel 来完成
::: code-group
```js [子组件]
<script setup>
const val = defineModel()
</script>
```
:::
# :deep()
深度选择器

## 介绍
当 `<style>` 标签带有 `scoped attribute` 的时候，它的 `CSS` 只会影响当前组件的元素

这是想改变子组件的样式就需要用到 `:deep()` 深度选择器

``` css
<style scoped>
:deep(.b) {
  /* ... */
}
</style>
```

## 样式渗透 :deep() 为什么无效
`Vue2.X` 中要求元素必须在一个根节点中，`Vue3.X` 无此要求

可是问题就出在这个根节点上，如果没有这个根节点，那么 `:deep()` 不起作用，把根节点加上，`:deep()` 样式就生效了

``` vue
// :deep() 无效
<template>
	  <el-drawer v-model="isShow" title="应用配置" direction="rtl" :size="400"></el-drawer>
<template>
```

``` vue
// :deep() 有效
<template>
    <div>
	      <el-drawer v-model="isShow" title="应用配置" direction="rtl" :size="400"></el-drawer>
    </div>
<template>
```
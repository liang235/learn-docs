# 三角形

```vue
<template>
	<div class="triangle up"></div>
	<div class="triangle down"></div>
	<div class="triangle left"></div>
	<div class="triangle right"></div>
</template>

<style lang="scss" scoped>
.triangle {
    width: 0;
    height: 0;
    border-style: solid;
}

.triangle.top {
    border-width: 0 100px 100px 100px;
    border-color: transparent transparent blue transparent;
}

.triangle.right {
    border-width: 100px 0 100px 100px;
    border-color: transparent transparent blue transparent;
}

.triangle.bottom {
    border-width: 100px 100px 0 100px;
    border-color: blue transparent transparent transparent;
}

.triangle.left {
    border-width: 100px 100px 100px 0;
    border-color: transparent blue transparent transparent;
}
</style>
```
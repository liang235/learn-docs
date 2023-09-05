# 图片九宫格
鼠标滑入，图片分为九张图片

## 效果展示
<ZoomImg src="/image_grid.gif" />

## 代码实现
```vue
<template>
    <div class="img-container">
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
    </div>
</template>

<style lang="scss" scoped>
.img-container {
	display: grid;
	width: 300px;
	height: 300px;
	margin: 100px;
	grid-template-columns: repeat(3, 1fr);

	.img-item {
		position: relative;
		background-image: url('@/assets/images/tupian.jpeg');
		background-size: 300px 300px;
		box-shadow: inset 0 0 0 1px #000;
		transition: 0.5s;
	}

	.img-item:nth-child(3n + 1) {
		left: -20px;
		background-position-x: 0;
	}

	.img-item:nth-child(3n + 2) {
		left: 0;
		background-position-x: -100%;
	}

	.img-item:nth-child(3n) {
		left: 20px;
		background-position-x: -200%;
	}

	.img-item:nth-child(n + 7) {
		top: 20px;
		background-position-y: -200%;
	}

	.img-item:nth-child(-n + 6) {
		top: 0;
		background-position-y: -100%;
	}

	.img-item:nth-child(-n + 3) {
		top: -20px;
		background-position-y: 0;
	}

	&:hover .img-item {
		top: 0;
		left: 0;
		box-shadow: 0;
	}
}
</style>
```

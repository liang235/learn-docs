<template>
	<div class="olympic_rings">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.olympic_rings {
	display: flex;
	width: 400px;
	flex-wrap: wrap;
	justify-content: center;
	transform-style: preserve-3d;
}

.item {
	width: 100px;
	height: 100px;
	border: 10px solid #3884c2;
	border-radius: 50%;
	margin: 0 5px;

	&:nth-child(2) {
		border-color: #000;
		transform: translateZ(-1px) rotateX(2deg);
	}

	&:nth-child(3) {
		border-color: #d83a31;
	}

	&:nth-child(4) {
		border-color: #f9d549;
		margin-top: -50px;
		transform: rotateX(1deg);
		transform-origin: center 25%;
	}

	&:nth-child(5) {
		border-color: #55ac58;
		margin-top: -50px;
		transform: translateZ(-1px) rotateX(-2deg);
	}
}
</style>

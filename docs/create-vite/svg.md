# vite 项目中使用 svg 图标
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons): 需要借助此插件来使用

## 安装
```
pnpm add -D vite-plugin-svg-icons
```

## 配置 vite-plugin-svg-icons 插件
- 在 `config/plugins/vite-plugin-svg-icons.js` 中配置，目录按自己习惯创建即可

``` js
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // vite 使用 svg 图标
import path from 'node:path' // node 路径插件

export default function createSvgIcon() {
	return createSvgIconsPlugin({
		// 指定需要缓存的图标文件夹
		iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
		// 指定 symbolId 格式
		symbolId: 'icon-[dir]-[name]',
	})
}
```

- `main.js` 引入配置
``` js
import 'virtual:svg-icons-register'
```

## 封装 svg-icon
``` vue
<template>
	<component v-if="name.startsWith('ele-')" :is="name" :style="transformStyle" class="svg-icon" />

	<svg v-else :style="transformStyle" aria-hidden="true" class="svg-icon">
		<use :xlink:href="`#icon-${name}`" />
	</svg>
</template>

<script setup name="SvgIcon">
// 定义父组件传过来的值 传参
const props = defineProps({
	// 图标名称
	name: {
		type: String,
		required: true,
	},
	/**
	 * horizontal: 水平翻转
	 * vertical: 垂直翻转
	 * both: 水平垂直翻转
	 * @return {*}
	 */
	flip: {
		type: String,
		validator(value) {
			return ['', 'horizontal', 'vertical', 'both'].includes(value)
		},
		default: '',
	},
	// 图标旋转
	rotate: {
		type: Number,
		validator(value) {
			return value >= 0 && value <= 360
		},
		default: 0,
	},
})

const transformStyle = computed(() => {
	let style = []
	if (props.flip != '') {
		switch (props.flip) {
			case 'horizontal':
				style.push('rotateY(180deg)')
				break
			case 'vertical':
				style.push('rotateX(180deg)')
				break
			case 'both':
				style.push('rotateX(180deg)')
				style.push('rotateY(180deg)')
				break
		}
	}
	if (props.rotate != 0) {
		style.push(`rotate(${props.rotate}deg)`)
	}
	return `transform: ${style.join(' ')};`
})
</script>

<style lang="scss" scoped>
.svg-icon {
	display: inline-block;
	overflow: hidden;
	width: 1em;
	height: 1em;
	fill: currentcolor;
	vertical-align: -0.15em;
}
</style>
```

## 使用
``` vue
<svg-icon name="add">
```
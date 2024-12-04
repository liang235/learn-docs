# 常用技巧

## template 中使用 css 变量
```vue
<div :iconStyle="{ color: 'var(--u-primary)' }"></div>
```

## css 变量转换数值
```vue
:root {
	 --margin-large: 24px;
}

computed: {
	marginBase() {
	  	const marginBase = getComputedStyle(document.documentElement).getPropertyValue('--margin-base')
	  	return parseFloat(marginBase)
	}
}
```

## css 变量使用负数
```scss
left: calc(-1 * var(--margin-base));
```
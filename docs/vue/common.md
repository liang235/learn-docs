# 常用技巧

## template 中使用 css 变量
```vue
<div :iconStyle="{ color: 'var(--u-primary)' }"></div>
```

## css 变量转换数值
```vue
:root {
	 --rh-margin-large: 24px;
}

computed: {
	rhMarginBase() {
	  	const rhMarginBase = getComputedStyle(document.documentElement).getPropertyValue('--rh-margin-base')
	  	return parseFloat(rhMarginBase)
	}
}
```
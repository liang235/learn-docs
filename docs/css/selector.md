# 选择器

## last-child

-   匹配父元素中最后一个 p 元素的背景色
-   只能匹配父元素下最后一个是 p 元素的，如果最后一个元素是其他的元素类型，则匹配不到

```html
<div class="div pa-80">
	<span>在 p 元素前面有 span 元素可以</span>
	<p>11111</p>
	<p>11111</p>
	<p>我是 p 标签的最后一个</p>
	<!-- <span>在 p 元素后面有 span 元素不可以</span> -->
</div>

.div p:last-of-type { background-color: red; }
```

<ZoomImg src="/last-child.png" />

## last-of-type

-   匹配元素父级下特定类型的最后一个子元素
-   只能匹配标签，不能匹配类名
-   和 `:nth-last-of-type(1)` 是一个意思

```html
<div class="div">
	<p>11111</p>
	<p>11111</p>
	<p>我是 p 标签的最后一个</p>
	<span>我是 span 标签</span>
</div>

.div p:last-of-type { background-color: red; }
```

<ZoomImg src="/last-of-type.png" />

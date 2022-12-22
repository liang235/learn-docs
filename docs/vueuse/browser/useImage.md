# useImage
可以访问图像本身的加载状态和错误状态

随着时间的推移，`web` 应用中的图像变得越来越漂亮。我们已经有了带有 `srcset` 的响应式图像，渐进式加载库，以及只有在图像滚动到视口时才会加载的库

我以前主要通过监听每个 `HTML` 元素发出的 `onload` 和 `onerror` 事件来做到这一点，但 `VueUse` 给我们提供了一个更简单的方法，那就是`useImage` 组合

## 使用方法
``` vue
<template>
	<div v-if="isLoading" class="loading gradient"></div>
    <div v-else-if="error">无法加载图像 :(</div>
    <img v-else :src="avatarUrl" />
</template>

<script setup>
import { useImage } from '@vueuse/core' // vue 工具库

// 将其更改为不存在的URL以查看错误状态
const avatarUrl = 'https://img2.baidu.com/it/u=2034357604,1730794698&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'

// 获取它返回的 isLoading 和 error 引用，以便跟踪状态。这个组合在内部使用 useAsyncState，因此它返回的值与该组合的值相同
const { isLoading, error } = useImage(
	{ src: avatarUrl },
	{
		// 加载时间
		delay: 1000,
	}
)
</script>
```

第一步，通过 `useImage` 设置图片的 `src`
``` js
const { isLoading, error } = useImage({ src: url })
```

获取它返回的 `isLoading` 和 `error` 引用，以便跟踪状态。这个组合在内部使用 `useAsyncState`，因此它返回的值与该组合的值相同

安排好后，`useImage` 就会加载我们的图像并将事件处理程序附加到它上面

我们所要做的就是在我们的模板中使用相同的URL来使用该图片。由于浏览器会重复使用任何缓存的图片，它将重复使用由 `useImage` 加载的图片

``` vue
<template>
	<div v-if="isLoading" class="loading gradient"></div>
    <div v-else-if="error">无法加载图像 :(</div>
    <img v-else :src="avatarUrl" />
</template>
```

在这里，我们设置了一个基本的加载和错误状态处理程序。当图片正在加载时，我们显示一个带有动画渐变的占位符。如果有错误，我们显示一个错误信息。否则我们可以渲染图像

## 使用组件
如果你想把所有内容都放在模板中，还有一个无渲染组件。它的工作原理与组合的相同:

``` vue
<template>
    <UseImage :src="avatarUrl">
        <template #loading>
            <div class="loading gradient"></div>
        </template>
        <template #error>无法加载图像! </template>
    </UseImage>
</template>

<script setup name="Home">
import { UseImage } from '@vueuse/components' // vue 工具库
// 将其更改为不存在的URL以查看错误状态
const avatarUrl = 'https://img2.baidu.com/it/u=2034357604,1730794698&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
</script>
```
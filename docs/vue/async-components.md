# async-components
异步组件

## 什么是异步组件
在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件

## 哪些地方需要用到异步组件
不需要默认展示的都可以，比较常见的算是 `tabs`

## 使用
``` js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
    import('./components/MyComponent.vue')
)
```
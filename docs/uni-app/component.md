# [vue 组件](https://uniapp.dcloud.net.cn/tutorial/vue3-components.html)
- `vue` 有全局组件和局部组件两种方式

## [全局注册](https://uniapp.dcloud.net.cn/tutorial/vue3-components.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)
- `main.js` 里进行全局导入和注册

```js
import App from './App'
import {createSSRApp} from 'vue'
// 引入组件
import myComponent from './components/my-component/my-component.vue'
export function createApp() {
    const app = createSSRApp(App)
    // 调用 app.component 方法全局注册组件
    app.component('my-component', myComponent)
    return {
        app
    }
}
```

## [局部注册](https://uniapp.dcloud.net.cn/tutorial/vue3-components.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)
```VUE
// 在index.vue引入 uni-badge 组件
<template>
    <view>
        <uni-badge text="1"></uni-badge><!-- 3.使用组件 -->
    </view>
</template>

<script>
// 导入组件（这步属于传统 vue 规范，但在 uni-app 的 easycom 下可以省略这步）
import uniBadge from '@/components/uni-badge/uni-badge.vue';
</script>
```

## uni-app 的 easycom
- 通过 `uni-app` 的 [easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom): 将组件引入精简为一步。只要组件安装在项目的 `components` 目录下，并符合 components/组件名称/组件名称.vue 目录结构。就可以不用引用、注册，直接在页面中使用
- `easycom` 是自动开启的，不需要手动开启，有需求时可以在 `pages.json` 的 `easycom` 节点进行个性化设置
- 不管 `components` 目录下安装了多少组件，`easycom` 打包后会自动剔除没有使用的组件，对组件库的使用尤为友好

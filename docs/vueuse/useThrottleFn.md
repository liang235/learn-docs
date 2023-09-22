# useThrottleFn
- 节流：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行（函数会被立即执行），如果在同一个单位时间内某事件被触发多次，只有一次能生效
- 解决问题：为了解决短时间内大量触发某函数而导致的性能问题，比如触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象
- 使用场景：
    - 鼠标连续不断地触发某事件（如点击查询数据），只在单位时间内只触发一次
    - 在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间发一次 `ajax` 请求，而不是在用户停下滚动页面操作时才去请求数据
    - 监听滚动事件，比如是否滑到底部自动加载更多，用 `throttle` 来判断

## 使用
``` js
import { useThrottleFn } from '@vueuse/core' // vue 工具库

// 下面的 1000 为时间单位，表示点击事件后，一秒内只执行一次，但是函数会被立即执行
const throttledFn = useThrottleFn(() => {
    // 执行方法
}, 1000)
```
# useEventBus
事件总线，用来做同级组件传值

## 使用方法

### 直接绑定事件名称
``` vue
// A 组件
<script setup>
import { useEventBus } from '@vueuse/core' // vue 工具库
const bus = useEventBus('event-name') // 事件总线

// 绑定事件
const onClick = () => {
    bus.emit('传递的数据')
}
</script>

// B 组件
<script setup>
import { useEventBus } from '@vueuse/core' // vue 工具库
const bus = useEventBus('event-name') // 事件总线

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
	bus.on((payload) => {
        console.log(payload) // 传递的数据
    })
})
</script>
```

### 不直接绑定事件名称
``` vue
// A 组件
<script setup>
import { useEventBus } from '@vueuse/core' // vue 工具库
const bus = useEventBus() // 事件总线

// 绑定事件
const onClick = () => {
    bus.emit('事件名称1', '传递的数据1')
    bus.emit('事件名称2', '传递的数据2')
}
</script>

// B 组件
<script setup>
import { useEventBus } from '@vueuse/core' // vue 工具库
const bus = useEventBus() // 事件总线

// 监听数据
bus.on((event, payload) => {
    if (event === 'global-theme-toggle') isShow.value = !isShow.value
    console.log(event) // 事件名称
    console.log(payload) // 传递的数据
})
</script>
```

在组件内部 `setup` 中注册的侦听器，卸载组件时，安装程序将自动取消注册

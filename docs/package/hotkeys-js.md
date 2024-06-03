# hotkeys-js
键盘快捷键库

## 安装 [官网地址](https://github.com/jaywcjlove/hotkeys)，[gitee](https://gitee.com/jaywcjlove/hotkeys)
```
pnpm i hotkeys-js
```

## 使用方法
``` js
import hotkeys from 'hotkeys-js' // 键盘快捷键

// 在组件挂载完并创建 DOM 节点后运行
onMounted(() => {
	// 绑定键盘快捷键
    hotkeys('f5', function(event, handler){
        // 防止 windows 系统下的默认刷新事件
        event.preventDefault()
        alert('you pressed F5!')
    })
})

// 在一个组件实例被卸载之后调用
onUnmounted(() => {
    // 解绑键盘快捷键
	hotkeys.unbind('f5')
})
```
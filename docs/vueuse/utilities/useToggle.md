# useToggle
具有实用函数的 `布尔` 切换器

## 使用方法
``` js
import { useToggle } from '@vueuse/core' // vue 工具库

const [value, toggle] = useToggle()
```

当你传递一个 `ref` 时，`usetoggle` 将返回一个简单的 `toggle` 函数:
``` js
import { useDark, useToggle } from '@vueuse/core' // vue 工具库

const isDark = useDark() // useDark 默认为 false
const toggleDark = useToggle(isDark)
```

## 注意事项
注意: 注意 `toggle` 函数接受第一个参数作为覆盖值。您可能希望避免直接将函数传递给模板中的事件，因为事件对象将传递进来

``` js
// 注意: $event 将被传入
<button @click="toggleDark" />

// 建议这样做
<button @click="toggleDark()" />
```
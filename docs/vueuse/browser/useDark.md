# useDark
切换 `高亮/暗黑` 模式

`vueuse` 是基于 `Tailwind` 来做的暗黑模式，如果你使用的是 `Tailwind`，你只需要在 `html` 元素中添加 `dark` 类，就可以在整个页面中启用

``` html
<html class="dark"><!-- ... --></html>
```

然而，在黑暗模式和光明模式之间切换时，有几件事需要考虑。首先，我们要考虑到用户的系统设置。第二，我们要记住他们是否已经推翻了这个选择

`VueUse` 的 `useDark` 组合性为我们把所有这些东西都包起来。默认情况下，它查看系统设置，但任何变化都会被持久化到 `localStorage`，所以设置会被记住

## 使用方法
``` js
import { useDark, useToggle } from '@vueuse/core' // vue 工具库

// 当为暗黑模式时候 isDark 为 true，否则为 false
const isDark = useDark()
const toggleDark = useToggle(isDark)

toggleDark()
```
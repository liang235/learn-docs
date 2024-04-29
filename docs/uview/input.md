# [Input 输入框](https://uview-plus.jiangruyi.com/components/input.html)

## @click 事件无效
- 原因: 设置 `disabled/readonly` 属性后点击事件失效
- 解决: 加上样式 `style="pointer-events: none"` 即可
```vue
<up-input disabled style="pointer-events: none"></up-input>
```
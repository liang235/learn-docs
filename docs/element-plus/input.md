# [Input 输入框](https://element-plus.gitee.io/zh-CN/component/input)

## 绑定点击事件
- `native` vue3.0 版本后已移除
```js
// 需要再 click 后加 native
<el-input v-model="name" @click.native="handler"></el-input>
```

## clear 事件不触发 click 事件
```js
// 给 clear 事件添加阻止事件冒泡修饰符即可
<el-input v-model="name" clearable @click.native.stop="handlerDialog($event)"></el-input>

handlerDialog(event, type) {
    if (event.target.nodeName != 'INPUT') return;
}
```

## 后缀图标绑定点击事件
```

```
# [Input 输入框](https://element-plus.gitee.io/zh-CN/component/input)

## 绑定点击事件
```js
// 需要再 click 后加 native
<el-input v-model="name" @click.native="handler"></el-input>
```
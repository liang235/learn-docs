# WangEditor 富文本编辑器

基于 `@wangeditor/editor` 的二次封装，复杂场景使用建议直接修改组件源码

## Props

| 参数                 | 说明           | 类型    | 可选值 | 默认值 |
| :------------------- | :------------- | :------ | :----- | :----- |
| readOnly | 是否只读 | boolean  | -      |  false    |
| placeholder              | 占位符   | string  | -      | 请输入内容...     |
| mode             | 是否禁用       | string | default|simple      | default  |
| height             | 高度       | string | -      | 310px  |
| getHtml             | 双向绑定，用于获取 editor.getHtml()       | string | -      | -  |
| getText             | 双向绑定，用于获取 editor.getText()       | string | -      | -  |

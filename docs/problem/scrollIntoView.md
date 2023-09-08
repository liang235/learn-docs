# 滚动元素到可视区域
使用 [scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) 替换原来的锚点实现方式

## 示例
```js
const box = document.getElementById("box");

box.scrollIntoView();
box.scrollIntoView(false);
box.scrollIntoView({ block: "end" });
box.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```
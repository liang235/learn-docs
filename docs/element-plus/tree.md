# [Tree 树形控件](https://element-plus.gitee.io/zh-CN/component/tree.html)

## 设置横向滚动条
``` scss
.el-tree {
    overflow: auto;
    height: calc(100vh - 255px); // 高度按需要自己计算

    >.el-tree-node {
        min-width: 100%; // 设置横向滚动条
        display: inline-block;
    }
}
```
# [Tree 树形控件](https://element-plus.gitee.io/zh-CN/component/tree.html)

## show-checkbox 有的节点不需要复选框

```js

```

## 懒加载

```js
<template>
    <el-tree
        class="tree"
        :props="props"
        :load="loadNode"
        lazy
        node-key="ID"
        highlight-current
        @node-click="handleNodeClick"
    />
</template>

<script>
export default {
    data() {
        return {
            props: {
                label: 'NAME',
                children: 'children',
                isLeaf: 'leaf'
            },
            treeParams: {
                DEPT_CODE: '1847199069851852800'
            },
        }
    },
    methods: {
        loadNode(node, resolve) {
            if (node.level !== 0) {
                this.treeParams.DEPT_CODE = node.data.ID
            }
            this.queryTree(resolve)
        },
        queryTree(resolve) {
            this.$api.doAct('OA_ADDRESS_BOOK', 'findDeptByDeptCode', this.treeParams).then(res => {
                return resolve(res.data)
            })
        },
    }
}
</script>
```

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

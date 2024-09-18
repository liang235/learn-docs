# 工具方法

## tree 型数据扁平化
```js
 function flattenTree(tree, parentId = null) {
    let flattened = [];

    // 遍历tree中的每个节点
    for (let node of tree) {
        // 克隆节点，并设置其父节点ID
        let flatNode = { ...node, parentId };
        // 将当前节点添加到扁平化数组中
        flattened.push(flatNode);
        // 如果该节点有子节点，则递归处理子节点
        if (node.children && node.children.length > 0) {
            flattened = [...flattened, ...flattenTree(node.children, node.id)]
        }
    }

    return flattened;
}
```

## 获取 tree 型数据的深度
```js
function getTreeDepth(tree) {
    if (!tree.children || tree.children.length === 0) {
        return 1;
    } else {
        const childrenDepths = tree.children.map(child => getTreeDepth(child));
        return 1 + Math.max(...childrenDepths);
    }
}
```

## 根据深度获取 tree 的数据
```js
function getNodesAtDepth(tree, depth, currentDepth = 1) {
    if (depth === currentDepth) {
        return [tree];
    } else if (tree.children && tree.children.length > 0) {
        let nodes = [];
        for (let child of tree.children) {
            nodes = nodes.concat(getNodesAtDepth(child, depth, currentDepth + 1));
        }
        return nodes;
    } else {
        return [];
    }
}
```
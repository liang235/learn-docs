# [Table 表格](https://element-plus.org/zh-CN/component/table.html)
用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作

## 多选框实现单选
```vue
<el-table ref="refTable" :data="tableData" @select="selectRow">
	<el-table-column type="selection" width="55"></el-table-column>
	<el-table-column type="index" width="50" align="center"></el-table-column>
	<el-table-column prop="NAME" label="姓名"></el-table-column>
</el-table>

selectRow(selection) {
	this.$refs.refTable.clearSelection();
	this.$refs.refTable.toggleRowSelection(selection.pop());
}
```

## 自定义 selection 模式下 th 部分内容
```vue
// 自定义 selection 模式标题，需要设置 el-table-column 的为 class-name="custom-label"
<el-table-column type="selection" class-name="custom-label" />

// 设置 css 样式
thead {
    // 自定义 selection 模式标题，需要设置 el-table-column 的为 class-name="custom-label"
    .el-table-column--selection {
        > .cell {
            padding: 0;
            min-width: 53px;
        }

        // 自定义 checkbox th 标题
        &.custom-label {
            .el-checkbox {
                display: none;
            }

            > .cell:before {
                content: '选择';
            }
        }
    }
}
```
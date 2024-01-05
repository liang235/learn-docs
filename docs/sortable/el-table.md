# 搭配 el-table 使用
```vue
<el-table ref="tableData" :data="tableData" row-key="_PK_">
    <el-table-column type="index" width="50" align="center"></el-table-column>
</el-table>

<script>
mounted() {
    this.initSortable();
},

initSortable() {
    const that = this;
    that.$nextTick(() => {
        const el = this.$refs.tableData.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
        this.sortable = Sortable.create(el, {
            draggable: '.el-table__row', // 设置可拖拽行的类名(el-table自带的类名)
            onEnd({ newIndex, oldIndex }) {
                if (newIndex == oldIndex) return; // 如果位置一样return

                const targetRow = that.tableData.splice(oldIndex, 1)[0];
                that.tableData.splice(newIndex, 0, targetRow);
                that.tableData.forEach((item, index) => {
                    item.FILE_SORT = index;
                });
                that.$api.dragFileSort(that, that.SERVER_INFO, that.tableData).then((res) => {
                    if (res._MSG_.startsWith('OK,')) {
                        that.$message.success('拖拽排序成功!');
                    } else {
                        that.$message.warning(res._MSG_);
                    }
                });
            },
        });
    });
},
</script>
```
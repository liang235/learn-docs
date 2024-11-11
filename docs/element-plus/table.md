# [Table 表格](https://element-plus.org/zh-CN/component/table.html)
用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作

## selection 是否可以选中
```vue
<el-table-column type="selection" :selectable="selectable" />

selectable(row) {
    return row.M_STATUS === 1
}
```

## tabs+table 实现选项切换
- 使用一套 `table` 展示多个选项的数据
```vue
<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="待办" name="todos">
            <template #label>
                <span class="custom-tabs-label">
                    <span>待办({{ todosCount }})</span>
                </span>
            </template>
        </el-tab-pane>
        <el-tab-pane label="专辑" name="albums"></el-tab-pane>
        <el-tab-pane label="帖子" name="posts"></el-tab-pane>
    </el-tabs>

    <el-table ref="tableRef" style="width: 100%" :data="tableData" :height="tableHeight" :border="true" :empty-text="emptyText">
        <el-table-column label="序号" width="55" align="center">
            <template #default="scope">
                <span>{{ (tablePage.NOWPAGE - 1) * tablePage.SHOWNUM + scope.$index + 1 }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" show-overflow-tooltip />
    </el-table>

    <el-pagination
        :current-page="tablePage.NOWPAGE"
        :page-size="tablePage.SHOWNUM"
        :page-sizes="[10, 20, 30, 50]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="tablePage.ALLNUM"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</template>

<script setup>
import axios from 'axios'
import { cloneDeep } from 'lodash-es'
import elementResizeDetectorMaker from 'element-resize-detector' // 监听元素大小变化

const activeName = ref('todos') // 绑定值，选中选项卡的 name
const todosCount = ref(0) // 待办总数
const tableData = ref([]) // 表格数据
const emptyText = ref('暂无数据') // table 空数据时显示的文本内容
const tablePage = ref({
    // 分页数据
    ALLNUM: 0,
    NOWPAGE: 1,
    SHOWNUM: 10,
})
const tablePageDeep = ref({}) // 分页数据深拷贝
const tableHeight = ref(40) // table 高度
const tableRef = ref(null) // table ref

onMounted(() => {
    tablePageDeep.value = cloneDeep(tablePage.value)
    initData()
    initEvent()
})

// 监听 table 元素高度
const initEvent = () => {
    const resizeObj = elementResizeDetectorMaker()
    resizeObj.listenTo(document.querySelector('.el-table__body'), (element) => {
        tableHeight.value = element.offsetHeight + 40
    })
}

// tab 被选中时触发
const handleClick = (tab) => {
    activeName.value = tab.props.name
    tablePage.value = cloneDeep(tablePageDeep.value)
    initData()
}

// 初始化数据
const initData = () => {
    getDataList()
    getAllCount()
}

// 加载列表数据
const getDataList = () => {
    const servIds = {
        todos: 'todos', // 代办
        posts: 'posts', // 帖子
        albums: 'albums', // 专辑
    }
    const url = `https://jsonplaceholder.typicode.com/${servIds[activeName.value]}`

    tableData.value = []
    emptyText.value = '加载中'

    // 替换为真实接口数据
    axios(url, {
        params: {
            _page: tablePage.value.NOWPAGE, // 设置请求的页码
            _limit: tablePage.value.SHOWNUM, // 设置每页返回的数据量
        },
    })
        .then((res) => {
            tableData.value = res.data
            tablePage.value.ALLNUM = 99
            emptyText.value = '无相关记录'
        })
        .catch((e) => {
            tablePage.value.ALLNUM = 0
            emptyText.value = '加载失败'
        })
}

// 获取待办和待阅的总数
const getAllCount = () => {
    Promise.all([getTodoCount()]).then((res) => {
        todosCount.value = res[0]
    })
}

// 得到待办数
const getTodoCount = () => {
    return (todosCount.value = 99)
}

// 每页条数变化
const handleSizeChange = (val) => {
    tablePage.value.SHOWNUM = val
    getDataList()
}

// 当前页变化
const handleCurrentChange = (val) => {
    tablePage.value.NOWPAGE = val
    getDataList()
}
</script>

<style lang="scss" scoped>
.el-pagination {
    margin-top: 20px;
}
</style>
```

## 分页索引按顺序排序
```vue
<el-table-column label="序号" width="55">
    <template #default="scope">
        <span>{{ (state.NOWPAGE - 1) * state.SHOWNUM + scope.$index + 1 }}</span>
    </template>
</el-table-column>

NOWPAGE: 1, // 当前页数
SHOWNUM: 10, // 每页查询条数
```

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
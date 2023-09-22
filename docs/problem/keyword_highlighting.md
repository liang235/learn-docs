# 实现搜索且关键字高亮
- 使用 `v-html` 来渲染数据，而不是使用 {{}} 来渲染数据
```vue
<template>
    <div class="wrap wrap-state">
        <el-input v-model="state.input" placeholder="Please input" />
        <ul>
            <li v-for="item in state.list" :key="item.id">
                <div class="title" v-html="item.name"></div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue' // vue 内置方法
import { artistList } from '@/api/index.js' // api

// 定义响应式数据
const state = reactive({
    input: '大', // 查询关键字
    list: [], // 数据列表
})

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
    getArtistList()
})

// 获取数据
const getArtistList = () => {
    let params = {
        limit: 100, offset: 0, type: '-1',
    }
    artistList(params).then(res => {
        state.list = res.data.artists
        state.list.forEach(item => {
            item.name = brightKeyword(item.name)
        })
    })
}

// 字段高亮的方法
const brightKeyword = (val) => {
    let keyword = state.input // 获取输入框输入的内容
    if (val.indexOf(keyword) !== -1) { // 判断这个字段中是否包含 keyword
        // 如果包含的话，就把这个字段中的那一部分进行替换成 html 字符
        return val.replace(keyword, `<font color='#42cccc'>${keyword}</font>`)
    } else {
        return val
    }
}
</script>

<style lang='scss' scoped>
ul {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;

    li {
        padding: 10px 20px;
    }
}
</style>
```
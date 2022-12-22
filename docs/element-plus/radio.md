# Radio 单选框 [官网地址](https://element-plus.gitee.io/zh-CN/component/radio.html)

## 同时获取 label 和 id
``` vue
<template>
    <el-radio-group v-model="value" @change="radioChange">
        <el-radio v-for="item in arr" :key="item.id" :label="item.label"></el-radio>
    </el-radio-group>
</template>

<script setup>
const value = ref(null)
const arr = ref([
    { id: 1001, label: 'label1' },
    { id: 1002, label: 'label2' },
    { id: 1003, label: 'label3' },
    { id: 1004, label: 'label4' },
    { id: 1005, label: 'label5' },
])

const map = computed(() => {
    const map = new Map()
    arr.value.forEach((item) => map.set(item.label, item))
    return map
})

const radioChange = (label) => {
    const data = map.value.get(label)
    console.log(data)
}
</script>
```
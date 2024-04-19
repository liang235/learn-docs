# 项目优化
减少数据加载，提高用户体验

### 优化前景
- 因为预览的时候是获取本地存储里面的图片列表，所以在打开预览页面的时候会获取本地存储的图片列表，如果图片列表过多就好造成不必要的消耗

```vue
<template>
    <!-- 这是一个图片预览的案例 -->
    <swiper circular :current="currentIndex" @change="swiperChange">
        <swiper-item v-for="(item, index) in classList" :key="item._id">
            <image v-if="readImgs.includes(index)" @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
        </swiper-item>
    </swiper>
</template>

<script setup>
const currentIndex = ref(0) // 当前图片索引
const readImgs = ref([]) // 看过的图片列表

// 监听页面加载
onLoad(async (option) => {
    // 刚进入预览页面的时候就把当前预览图片的索引加入到已经看过的列表
    currentIndex.value = classList.value.findIndex((item) => item._id == currentId.value)
    readImgsFun()
})

// current 改变时会触发事件
const swiperChange = (e) => {
    currentIndex.value = e.detail.current
    readImgsFun()
}

// 计算看过的图片列表，会默认把当前查看图片的上一个索引和下一个索引加入
const readImgsFun = () => {
    readImgs.value.push(
        currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value >= classList.value.length - 1 ? 0 : currentIndex.value + 1
    )
    readImgs.value = [...new Set(readImgs.value)]
}
</script>
```

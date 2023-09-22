# useVirtualList
当有大量数据生成DOM并渲染时，界面会非常耗时且卡顿。通常会使用 `virtual list` 来解决问题，`virtual list` 原理是只渲染可见区域，非可见区域不渲染

## 案例
```vue
<template>
	<div v-bind="containerProps" class="useVirtualList">
		<div v-bind="wrapperProps">
			<el-table ref="el" :data="list" border>
                <el-table-column prop="id" label="id">
                    <template #default="scope">
                        {{ scope.row.data.id }}
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="title">
                    <template #default="scope">
                        {{ scope.row.data.title }}
                    </template>
                </el-table-column>
            </el-table>
            <div class="loading"><svg-icon v-if="fetchingData" name="ele-loading" />请求更多数据操作中</div>
		</div>
	</div>
</template>

<script setup>
import { useInfiniteScroll, useVirtualList } from '@vueuse/core'
import axios from 'axios'

const page = ref(1) // 当前页
const limit = ref(10) // 每页条数
const photosList = ref([]) // 数据列表
const fetchingData = ref(false) // 是否正在加载数据的标志
const canLoadData = ref(true) // 是否还能加载更多数据的标志

// 虚拟加载数据
const { list, containerProps, wrapperProps } = useVirtualList(photosList, {
	itemHeight: 40,
})

const getPhotosList = async () => {
	// 如果正在加载数据或者不能再加载更多数据时，直接返回
	if (fetchingData.value || !canLoadData.value) return
	fetchingData.value = true // 设置为正在加载数据的标志

	await new Promise((resolve) => {
		setTimeout(resolve, 1000) // 模拟延迟1秒钟加载数据
	})

	// 发起请求获取数据
	const { data } = await axios(`http://jsonplaceholder.typicode.com/photos?_page=${page.value}&_limit=${limit.value}`)

	// 如果返回的数据长度小于每页条数，说明已经没有更多数据可加载了
	if (data.length < limit.value) {
		canLoadData.value = false // 设置为不能加载更多数据的标志
	}

	// 将获取到的数据追加到列表末尾
	photosList.value = [...photosList.value, ...data]

	// 更新当前页数和加载数据的标志
	page.value++
	fetchingData.value = false
}

// 无限滚动获取数据
useInfiniteScroll(
	containerProps.ref,
	async () => {
		await getPhotosList()
	},
	{ distance: 15 }
)
</script>

<style lang="scss" scoped>
.useVirtualList {
	// 这个高度根据自己需求修改
	height: calc(100vh - 50px);
	overflow-y: scroll;
}

.loading {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
}
</style>

```
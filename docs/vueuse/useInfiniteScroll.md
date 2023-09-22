# useInfiniteScroll
元素无限滚动

## 案例
```vue
<template>
	<div ref="listRef" class="useInfiniteScroll">
		<el-table :data="photosList" border>
			<el-table-column prop="id" label="id" />
			<el-table-column prop="title" label="title" />
		</el-table>
		<div v-if="fetchingData" class="loading"><svg-icon name="ele-loading" />请求更多数据操作中</div>
		<div v-else class="loading">暂无更多数据</div>
	</div>
</template>

<script setup>
import { useInfiniteScroll } from '@vueuse/core'
import axios from 'axios'

const listRef = ref(null) // 滚动容器的引用
const page = ref(1) // 当前页
const limit = ref(20) // 每页条数
const photosList = ref([]) // 数据列表
const fetchingData = ref(false) // 是否正在加载数据的标志
const canLoadData = ref(true) // 是否还能加载更多数据的标志

const getPhotosList = async () => {
	// 如果正在加载数据或者不能再加载更多数据时，直接返回
	if (fetchingData.value || !canLoadData.value) return
	fetchingData.value = true // 设置为正在加载数据的标志

	await new Promise((resolve) => {
		setTimeout(resolve, 1000) // 模拟延迟1秒钟加载数据
	})

	// 发起请求获取数据
	const { data } = await axios(`http://jsonplaceholder.typicode.com/posts?_page=${page.value}&_limit=${limit.value}`)

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

useInfiniteScroll(
	listRef,
	async () => {
		await getPhotosList()
	},
	{ distance: 15 }
)
</script>

<style lang="scss" scoped>
.useInfiniteScroll {
	// 这个高度根据自己需求修改
	height: calc(100vh - 50px);
	overflow-y: scroll;
}

.loading {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
}
</style>
```
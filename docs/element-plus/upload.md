# [Upload 上传](https://element-plus.gitee.io/zh-CN/component/upload.html)

## 自定义附件列表
```vue
// show-file-list 是否显示已上传文件列表
// ul 部分 class 类名都是 el-upload 自带的类名，剩下的需要怎么改，根据自己的需求改即可
<template>
	<el-upload :show-file-list="true">
		<el-button type="primary">上传</el-button>
	</el-upload>
	<ul class="el-upload-list el-upload-list--text">
		<li class="el-upload-list__item is-success" v-for="item in fileList" :key="item.name">
			<div class="el-upload-list__item-info">
				<a class="el-upload-list__item-name">
					<svg-icon name="ele-document" />
					<span class="el-upload-list__item-file-name" :title="item.name">{{ item.name }}</span>
				</a>
			</div>
			<label class="el-upload-list__item-status-label">
				<svg-icon name="ele-success-filled" class="el-icon el-icon--upload-success el-icon--circle-check" />
			</label>
			<svg-icon name="ele-close" class="el-icon el-icon--close" />
			<i class="el-icon--close-tip">按 delete 键可删除</i>
		</li>
	</ul>
</template>

<script setup>
// 附件列表
const fileList = ref([
	{
		name: 'element-plus-logo.svg',
		url: 'https://element-plus.org/images/element-plus-logo.svg',
	},
	{
		name: 'element-plus-logo2.svg',
		url: 'https://element-plus.org/images/element-plus-logo.svg',
	},
])
</script>

```
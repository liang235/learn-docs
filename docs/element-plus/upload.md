# [Upload 上传](https://element-plus.gitee.io/zh-CN/component/upload.html)

## 设置 :multiple="false" 无效
- `multiple` 属性虽然是 `Boolean` 类型的，但不能将其值设置为 `true` 或者 `false` ！！！

## 点击事件不在 upload 中触发选文件
::: code-group

```vue [Vue3 + ElementPlus]
<el-button type="primary" size="default" @click="handleUpload">上传</el-button>
<el-upload style="display: none" ref="uploadRef" action="" :auto-upload="false" :show-file-list="false"></el-upload>


<script setup>
const fileList = ref([]);
const uploadRef = ref(null);

const handleUpload = () => {
	uploadRef.value.$el.querySelector('input').click();
};
</script>
```

```vue [Vue2 + ElementUI]
<el-button @click="handleReport">上传</el-button>
<el-upload
	ref="refUpload"
	style="display: none;"
	action=""
	:http-request="doFileUpload"
	:multiple="false"
	:show-file-list="false"
	:before-upload="beforeUpload"
>
	<el-button plain size="small" type="primary">上传正文</el-button>
</el-upload>

handleReport() {
	this.$refs['refUpload'].$refs['upload-inner'].handleClick()
},
beforeUpload(file) {
	const name = useExtractLastIndexOf(file.name, '.').right
	if (name !== 'docx' && name !== 'doc' && name !== 'word') {
	this.$message.error('请上传 word 文件')
	return false
	}
},
doFileUpload(param) {
	const formData = new FormData()
	const formFields = {
		file: param.file,
		_PK_: this.$parent.cardData._PK_,
		SERV_ID: 'OA_GW',
		DATA_ID: this.$parent.cardData._PK_
	}

	for (const key in formFields) {
		formData.append(key, formFields[key])
	}

	this.$api.doAct('SY_DOCS_CENTER_PLATFORM', 'addFile', formData).then(res => {
		console.log(res)
	})
}
```

:::

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
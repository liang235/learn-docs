# [Form 表单](https://uview-plus.jiangruyi.com/components/form.html)

## 同时验证两个输入框
通过三元运算符来修改 `prop` 绑定的值
```vue
<template>
    <up-form :model="formData" :rules="formRules">
        <up-form-item label="所在区域" :prop="!formData.provincesName ? 'provincesName' : 'cityName'" required>
            <up-input v-model="formData.provincesName"></up-input>
            <up-input v-model="formData.cityName"></up-input>
        </up-form-item>
    </up-form>
</template>

<script setup>
// form 属性
const formRef = ref(null)
const formData = ref({
	provincesName: '', // 省份名称
	cityName: '', // 城市名称
})

// form 表单验证
const formRules = ref({
	provincesName: {
		required: true,
		message: '请选择省份',
		trigger: ['change'],
	},
	cityName: {
		required: true,
		message: '请选择城市',
		trigger: ['change'],
	},
})
</script>
```
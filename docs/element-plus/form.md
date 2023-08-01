# [Form 表单](https://element-plus.gitee.io/zh-CN/component/form.html)

## 表单验证，手动验证
* 主要解决使用自定义规则验证后，警告在重新验证成功后，不消失的问题
``` js
<script setup>
// 自定义附件表单验证
const validateFuJian = (rule, value, callback) => {
	if (!ruleForm.FUJIAN) {
		callback(new Error('请上传文件'))
	} else {
		callback()
	}
}

const ruleFormRef = ref()
const ruleForm = reactive({
	FUJIAN: '', // 附件
})

const rules = reactive({
	FUJIAN: [{ required: true, validator: validateFuJian, trigger: 'change' }],
})

// 上传成功之后
const onSuccess = () => {
    // 如果上传成功后，表单提示信息不消失，手动验证一次表单
	ruleFormRef.value.validateField('FUJIAN')
}
</script>
```
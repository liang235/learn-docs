# [Form 表单](https://element-plus.gitee.io/zh-CN/component/form.html)

## 表单输入框回车事件导致页面刷新
- 背景介绍: 项目中使用 `form` 表单时只有一个输入框，输入框绑定了回车触发提交事件
- 原因分析: `W3C` 标准的说法是当 `form` 元素中只有一个输入框时，在该输入框中按下回车应提交该表单
- 解决方法: 给 `el-form` 表单上加一个 `@submit.native.prevent` 阻止表单提交的默认行为
```vue
<el-form @submit.native.prevent >  
  <el-form-item>    
  	<el-input v-model="num" @keyup.enter.native="todo" /> 
  </el-form-item>  
  <el-form-item>    
  	<el-button type="primary" @click="submit">确定</el-button> 
  </el-form-item> 
</el-form>
```

## 表单验证，手动验证
- 主要解决使用自定义规则验证后，警告在重新验证成功后，不消失的问题
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
# [Input 输入框](https://uview-plus.jiangruyi.com/components/input.html)

## @click 事件无效
- 原因: 设置 `disabled/readonly` 属性后点击事件失效
- 解决: 加上样式 `style="pointer-events: none"` 即可
```vue
<up-input disabled style="pointer-events: none"></up-input>
```

## 使用 change 监听数据
```vue
<template>
    <up-form-item
        v-for="(inputItem, inputIndex) in citem.input"
        :key="inputIndex"
        :label="inputItem.name"
        :prop="inputItem.moduleName"
        :borderBottom="true"
    >
        <up-input
            v-model="formData[inputItem.moduleName]"
            :type="inputItem.type"
            :readonly="inputItem.disabled"
            border="none"
            placeholder="请输入内容"
            @change="change($event, citem.alias, inputItem.moduleName)"
        >
            <template #suffix>
                <up-text type="tips" :text="inputItem.unit"></up-text>
            </template>
        </up-input>
    </up-form-item>
</template>

<script setup>
const formData = ref({}) // 数据表单

// 内容发生变化触发此事件
const change = (value, alias, moduleName) => {
    // 这段很重要，如果不加的话，因为数据都在 formData 中，会相互影响
	if (!value) return

	const zzcFields = ['PRO_ZZC_QTZIRR', 'PRO_ZZC_GBJIRR', 'PRO_ZZC_GBJAROI3_JSQ', 'PRO_ZZC_GBJAROI3_QYQ', 'PRO_ZZC_GCMLR', 'PRO_ZZC_JYQZSR']
	const qzcFields = ['PRO_QZC_WTLRXM', 'PRO_QZC_EPCXM', 'PRO_QZC_SBJCEPXM', 'PRO_QZC_EPCZHJLR', 'PRO_QZC_EPCGCDJLR', 'PRO_QZC_EPCYYDJLR']

	// 重资产业务和轻资产业务只能输入一项
	if (alias === 'zzc' && zzcFields.includes(moduleName)) {
		qzcFields.forEach((item) => {
			formData.value[item] = ''
		})
	}

	if (alias === 'qzc' && qzcFields.includes(moduleName)) {
		zzcFields.forEach((item) => {
			formData.value[item] = ''
		})
	}
}
</script>
```
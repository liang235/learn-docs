# [MessageBox 消息弹框](https://element-plus.gitee.io/zh-CN/component/message-box.html)

## 个性化定制内容
``` js
<script setup>
import { ElMessageBox } from 'element-plus'

const open = () => {
	ElMessageBox({
		type: 'success', // 消息类型，用于图标显示
		title: '消息提示', // MessageBox 的标题
		message: '派单成功', // MessageBox 的正文内容
		confirmButtonText: '确定', // 确定按钮的文本内容
		showCancelButton: false, // 是否显示取消按钮
        closeOnClickModal: false, // 是否可通过点击遮罩层关闭 MessageBox
        closeOnPressEscape: false, // 是否可通过按下 ESC 键关闭 MessageBox
		showClose: false, // MessageBox 是否显示右上角关闭按钮
		draggable: true, // MessageBox 是否可拖放
	}).then(() => {
        console.log('确定之后的操作')
	})
}
</script>
```
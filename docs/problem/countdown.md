# 倒计时
```vue
<template>
    <div v-if="state.waitState" @click="countdown">再次发送</div>
    <div v-else>{{ state.wait }}</div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
    wait: 5, // 倒计时时间
    waitState: true, // 切换状态
})

const countDown = () => {
    state.waitState = false
    const clearTimer = setInterval(() => {
        state.wait--
        if (state.wait === 0) {
            clearInterval(clearTimer)
            state.waitState = true
            state.wait = 5
        }
    }, 1000)
}
</script>
```
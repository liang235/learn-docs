# debounce
- 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法

## 基础用法
::: code-group

```vue [vue3]
<script setup>
import { debounce } from 'lodash'

const _queryByMul = debounce(queryByMul, 500)

const queryByMulfn = () => {
    _queryByMul()
}
</script>
```

```vue [vue2]
<script>
import lodash from 'lodash'

export default {
    data() {
        return {
            refreshTodo: lodash.debounce(this._freshTodo, 1000, { maxWait: 1000 })
        }
    },
    methods: {
        onClick() {
            this.refreshTodo()
        }
        _freshTodo() {
            console.log('逻辑处理')
        },
    }
}
</>

<style lang="scss" scoped></style>
```

:::
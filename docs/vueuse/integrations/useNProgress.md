# useNProgress
页面加载进度条

## 安装
``` js
pnpm i nprogress
```

## 使用配置
``` js
// 进度条相关
import '@/assets/styles/nprogress.scss'
import { useNProgress } from '@vueuse/integrations/useNProgress'
const { isLoading } = useNProgress()

// 开启
isLoading.value = true

// 关闭
isLoading.value = false
```
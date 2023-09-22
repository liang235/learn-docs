# usePermission
[Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) 提供了一种一致的编程方式来查询归属于当前上下文的 `API` 权限的状态。例如，`Permissions API` 可用于确定访问特定API的权限是被授予还是被拒绝

## 参数
第一个属性是 `API` 第二个是有权限的参数

``` js
accelerometer: granted
accessibilityEvents: prompt
ambientLightSensor: prompt
backgroundSync: granted
camera: prompt
clipboardRead: prompt
clipboardWrite: granted
gyroscope: granted
magnetometer: granted
microphone: prompt
notifications: denied
paymentHandler: granted
persistentStorage: prompt
push: prompt
speaker: prompt
```

## 使用方法
``` js
import { usePermission } from '@vueuse/core' // vue 工具库
const accelerometer = usePermission('accelerometer')
const accessibilityEvents = usePermission('accessibility-events')
const ambientLightSensor = usePermission('ambient-light-sensor')
const backgroundSync = usePermission('background-sync')
const camera = usePermission('camera')
const clipboardRead = usePermission('clipboard-read') // 剪切板读取权限
const clipboardWrite = usePermission('clipboard-write') // 剪切板写入权限
const gyroscope = usePermission('gyroscope')
const magnetometer = usePermission('magnetometer')
const microphone = usePermission('microphone')
const notifications = usePermission('notifications')
const paymentHandler = usePermission('payment-handler')
const persistentStorage = usePermission('persistent-storage')
const push = usePermission('push')
const speaker = usePermission('speaker')
```
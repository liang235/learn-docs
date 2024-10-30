# camelCase
转换字符串为**首字母小写**驼峰写法

## 使用方法
``` js
import { camelCase } from 'lodash-es' // js 工具库

camelCase('Foo Bar')
// => 'fooBar'

camelCase('--foo-bar--')
// => 'fooBar'

camelCase('__FOO_BAR__')
// => 'fooBar'
```
# kebabCase
转换字符串为拼接格式

## 使用方法
``` js
import { kebabCase } from 'lodash-es' // js 工具库

kebabCase('FooBar')
// => 'foo-bar'

kebabCase('fooBar')
// => 'foo-bar'

kebabCase('__FOO_BAR__')
// => 'foo-bar'
```
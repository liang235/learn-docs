# 配置

## 环境配置
默认提供三套环境配置，分别为：

### 开发环境 `.env.development`
``` js
# 环境模式 development
VITE_MODE_ENV = 'development'

# 页面标题
VITE_APP_TITLE = 'project_web'

# port 端口号
VITE_PORT = 8888

# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_BASE_URL = '/'
```

### 测试环境 `.env.test`
``` js

```

### 生产环境 `.env.production`
``` js

```

其中 `VITE_MODE_ENV` `VITE_APP_TITLE` `VITE_BASE_URL` 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。

开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节

## 应用配置（框架配置）
开发者请在 `/src/settings.custom.js` 文件中设置自定义配置，而 `/src/settings.default.js` 为框架的默认配置，请勿在该文件内修改

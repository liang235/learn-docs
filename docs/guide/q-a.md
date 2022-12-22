# 常见问题

## 安装依赖时有警告
![An image](/qa1.jpg)
这是一个可以无视的警告，因为依赖已经安装成功了

如果对这个问题感兴趣，可以浏览下这个 [issue](https://github.com/pnpm/pnpm/issues/4183) ，里面有给出一个忽略警告的方案，就是在 `package.json` 中添加
``` json
"pnpm": {
    "peerDependencyRules": {
        "ignoreMissing": [
            "postcss",
            "rollup"
        ]
    }
}
```
这样你下次再安装依赖的时候，就不会出现该警告了

如果还是有这个问题，可以在根根目录下的 `.npmrc` 添加
``` js
shamefully-hoist=true
strict-peer-dependencies=false
```

## 为什么本地开发环境首次载入很慢
主要是 `Vite` 的原因，具体可以阅读这篇文章了解 [《为什么有人说 vite 快，有人却说 vite 慢？》](https://juejin.cn/post/7129041114174062628)
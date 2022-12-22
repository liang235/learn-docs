# components 组件
`src/components` 路径下的全局组件

## SvgIcon - 图标
这是图标组件，用于展示[图标](./svg-icon.md)
- 可以设置图标颜色
- 可以设置图标尺寸
- 可以设置翻转模式
- 也可以直接设置旋转角度

``` html
<svg-icon name="link" color="red" :size="30" flip="horizontal" :rotate="90" />
```

![An image](/svg-icon.jpg)

## PageMain - 页面内容块
- 可以设置页面标题
- 可以设置页面高度
- 设置是否展开收起

``` html
<page-main title="title" :collaspe="true" height="300"></page-main>
```

![An image](/page-main.jpg)

## PageHeader - 页面页头
- 可以设置页面标题
- 可以设置内容
- 设置右侧 sub 部分内容

``` html
<page-header
    title="title"
    content="通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"
    >右侧内容</page-header
>
```

![An image](/page-header.jpg)



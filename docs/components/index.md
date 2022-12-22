# 介绍
框架提供一系列的组件方便快速开发

## 基础组件
基础组件由 [Element Plus](https://element-plus.org/#/zh-CN) 提供，其中包含**按钮**、**文字链接**、**单选框**、**多选框**、**输入框**、**计数器**、**级联选择器**、**开关**、**滑块**等 **50+** 个组件

阅读并学习请查看 [Element Plus 官方文档](https://element-plus.org/#/zh-CN)

::: tip
由于对 Element Plus 官方图标命名进行了重构，所有在使用 `图标按钮` 的时候需要改变一下使用方式
:::

``` js
// 直接在 el-button 组件上使用 icon 不过需要添加前缀 ele-
<el-button icon="ele-edit">编辑</el-button>

// 或者使用插槽，
<el-button>
    <template #icon>
        <el-icon>
            <svg-icon name="ele-edit" />
        </el-icon>
    </template>
    编辑
</el-button>

// 也可以使用自定义图标
<el-button>
    <template #icon>
        <el-icon>
            <svg-icon name="user" />
        </el-icon>
    </template>
    编辑
</el-button>
```

## 扩展组件
扩展组件为框架封装的组件，有全新开发的组件，也有在 `Element Plus` 组件上二次封装的组件，还有一些则是封装了第三方的插件

组件源码完全开放，如果觉得用着不顺手，可以到 `/src/components/` 目录下找到对应组件自行修改
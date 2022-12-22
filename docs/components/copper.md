# Copper 图片裁剪

## Props

| 参数        | 说明                       | 类型    | 可选值 | 默认值                       |
| :---------- | :------------------------- | :------ | :----- | :--------------------------- |
| title      | 页面标题       | string  | -      | -                            |
| width     | 页面宽度         | number  | -      |            677                |
| maxHeight        | 最大高度       | number  | -      | 450                           |
| src        | 默认裁剪的图片           | string  | -      | -                         |
| autoCrop         | 初始化时自动裁剪图像             | boolean  | -      | true                           |
| viewMode        | 视图模式 | number  | -      | -                          |crop
| dragMode       | 拖动模式                   | string  | crop/move/none       | 150                          |
| initialAspectRatio      | 定义裁剪框的初始纵横比，仅当 aspectRatio 选项设置为 NaN 时可用       | number  | -      | 1|
| aspectRatio | 定义裁剪框的固定长宽比                     | number  | -      | 1                           |
| preview       | 为预览添加额外的元素(容器)             | string | -      | .preview                        |
| background         | 容器的网格背景             | boolean  | -      | true                           |
| autoCropArea         | 定义自动裁剪区域大小             | number  | -      | 0.6                           |
| zoomOnWheel         | 允许通过鼠标滚轮缩放图像             | boolean  | -      | true                           |

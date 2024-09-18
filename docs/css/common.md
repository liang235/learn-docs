# 常用样式

## 文字超出...
```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

## 文字超出多行...
- 如果不想使用混入的方式，可以拿出来单独设置 `-webkit-line-clamp`
```css
@mixin text-ellipsis($line: 1) {
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $line;
    -webkit-box-orient: vertical;
}
```
# RegExp
正则表达式

## 手机号校验
```js
/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
```

## 至少8个字符，至少有大写字母，小写字母和数字，并且不能输入中文
```js
^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z0-9]{8,}$
```

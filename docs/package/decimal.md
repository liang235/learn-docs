# [decimal](http://docs.asprain.cn/nodejsdecimal/API.html)

## 安装

```js
pnpm i decimal.js
```

## 基础案例

```js
// 创建一个Decimal实例
const a = new Decimal(0.1);
const b = new Decimal(0.2);

// 执行计算
const sum = a.add(b); // 将 a 和 b 相加 => 0.3
const sub = a.sub(b); // 将 a 减去 b => -0.1
const mul = a.mul(b); // 将 a 和 b 相乘 => 0.02
const div = a.div(b); // 将 a 除以 b => 5

// 输出结果
console.log(`加: ${sum.toString()}`);
console.log(`减: ${sub.toString()}`);
console.log(`乘: ${mul.toString()}`);
console.log(`除: ${div.toString()}`);
```

## 常用 API

| api        | 说明                       |
| :--------- | :------------------------- |
| add()      | 加法                       |
| sub()      | 减法                       |
| mul()      | 乘法                       |
| div()      | 除法                       |
| toString() | 返回表示此十进制值的字符串 |

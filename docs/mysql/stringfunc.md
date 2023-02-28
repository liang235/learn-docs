# 字符串函数
通过 sql 指令对字符串进行处理

## concat() 拼接字符串
``` sql
select concat(stu_name,'-',stu_gender) from stus;
+---------------------------------+
| concat(stu_name,'-',stu_gender) |
+---------------------------------+
| 张三-女                         |
| 张三-男                         |
| 李四-男                         |
+---------------------------------+
```

## upper() 小写转大写
``` sql
select upper(stu_name) from stus;
+-----------------+
| upper(stu_name) |
+-----------------+
| OBJ             |
| OMG             |
| HELLO           |
+-----------------+
```

## lower() 大写转小写
``` sql
select lower(stu_name) from stus;
+-----------------+
| lower(stu_name) |
+-----------------+
| obj             |
| omg             |
| hello           |
+-----------------+
```

## substring() 截取字符串
`注意`：数据库中索引从 `1` 开始
``` sql
select stu_name,substring(stu_tel,8,4) from stus;
+----------+------------------------+
| stu_name | substring(stu_tel,8,4) |
+----------+------------------------+
| 张三     | 3030                   |
| 李四     | 3031                   |
| 王五     | 3032                   |
+----------+------------------------+
```
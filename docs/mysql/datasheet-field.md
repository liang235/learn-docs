# DML 数据表字段操作
用于完成对数据表中的插入、删除、修改操作

## 插入数据
``` sql
insert into <tableName>(column1, column2...) values(value1, value2...)

-- 示例，向数据表中指定的列添加数据（不允许为空的列必须提供数据）
-- 数据表名的字段名列表顺心可以不与表中一致，但是values中值的顺序必须与表名后字段顺序对应
insert into stus(stu_num, stu_name, stu_gender, stu_age, stu_tel, stu_qq, stu_desc)
values('1', '张三', '男', '20', '13030303030', '123456789', '学生详情');

-- 当要向表中的所有列添加数据时，数据表明后面的字段列表可以省略，但是values中的值的顺序必须要与数据表定义的字段保持一致
-- 不过在项目开发中，即使要向所有列添加数据，也建议将列名的列表显式写出来
insert into stus values('1', '张三', '男', '20', '13030303030', '123456789', '学生详情');
```

## 删除数据
- 从数据表中删除满足特定条件（所有）的数据
``` sql
-- 如果删除语句没有 where 语句，则表示删除数据表中的所有数据（敏感操作）
delete from <tableName>;
-- 删除 stu_num='1' 的数据
delete from <tableName> where stu_num='1';
-- 删除年龄大于20的学生信息（如果满足 where 语句的有多条记录，则删除多条记录）
delete from <tableName> where stu_age>20;
```

## 修改数据
- 对数据表中已经添加的数据进行修改
``` sql
-- 将学号 stu_num='1' 的学生姓名修改为 '张三'
update <tableName> set stu_name='张三' where stu_num='1';

-- 不加 where 将修改所有 stu_name 为 张三
update <tableName> set stu_name='张三';

-- 将学号 stu_num='1' 的学生性别修改为男，同时 qq 修改为 111111111
update <tableName> set stu_gender='男',stu_qq='111111111' where stu_num='1';
```
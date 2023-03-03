# 视图
视图就是 `由数据库中一张表或者多张表根据特定的条件查询出的数据结构造成的` 虚拟表

## 视图的作用
- 安全性：如果我们之间将数据表授权给用户操作，那么用户可以 CRUD 数据表中的所有数据，假如我们想要对数据表中的部分数据进行保护，可以将公开的数据生成视图，授权用户访问视图；用户通过查询视图可以获取数据表中公开的数据，从而达到将数据表中的部分数据对用户隐藏
- 简单性：如果我们需要查询的数据来源于多张数据表，可以使用多表连接查询来实现；我们通过视图将这些连表查询的结果对用户开发，用户可以直接通过查询视图获取多表数据，操作更便捷

## 视图数据的特性
- 视图是虚拟表，查询视图的数据是来源于数据表的，当对视图进行操作时，对原数据表中的数据是否有影响？
    - 查询操作：如果在数据表中添加了新的数据，而且这个数据满足创建视图时查询语句的条件，通过查询视图也可以查询出新增的数据；当删除原表中满足查询条件的数据时，也会从视图中删除
    - 新增数据：如果在视图中添加数据，数据会被添加到原数据表
    - 删除数据：如果在视图中删除数据，数据也将从原表中删除
    - 修改数据：如果在视图中修改数据，则也将修改原表中的数据
- 视图的使用建议：对复杂查询简化操作，并且不会对数据进行修改的情况下使用视图

## 创建视图
- 语法
``` sql
create view view_name
AS
select_statement
```

- 示例一
``` sql
-- 创建视图实例：将学生表中性别为男的学生生成一个视图
create view view_test1
AS
select * from students where stu_gender='男';

-- 查询视图
select * from view_test1;
```

- 示例二
``` sql
-- 查询学生借书的信息（学生名、图书名、借书数量）
create view view_test2
AS
select s.stu_name,b.book_name,b.book_stock
from books b inner join records r inner join students s
on b.book_id=r.bid and r.snum=s.stu_num;

-- 查询视图
select * from view_test2;
```

## 查询视图结构
``` sql
desc view_test2;
```

## 修改视图结构
``` sql
-- 原视图
create view view_test1
AS
select * from students where stu_gender='男';

-- 方式一：OR REPLACE 之间覆盖视图
create OR REPLACE view view_test1
AS
select * from students where stu_gender='女';

-- 方式二：alter 修改视图结构
alter view view_test1
AS
select * from students where stu_gender='男';
```

## 删除视图结构
- 删除数据表时会同时删除表中的数据，删除视图时则不会影响原数据表中的数据
``` sql
drop view view_test1;
```
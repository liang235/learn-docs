# 连接查询
在企业的应用开发中，我们经常需要从多张表中查询数据（例如：我们查询学生信息的时候需要同时查询学生的班级信息），可以通过连接查询从多张数据表中查询数据

## 数据准备
### 创建班级和学生数据表
``` sql
-- 创建班级数据表
create table classes(
	class_id int primary key auto_increment,
	class_name varchar(40) not null unique,
	class_remark varchar(200)
);

-- 创建学生数据表
create table students(
    stu_num char(8) primary key,
    stu_name varchar(20) not null,
    stu_gender char(2) not null,
    stu_age int not null,
    cid int,
    constraint FK_STUDENTS_CLASSES foreign key(cid) references classes(class_id) ON UPDATE CASCADE ON DELETE CASCADE
);
```

### 添加班级信息
``` sql
-- Java2011 包含三个学生信息
insert into classes(class_name,class_remark) values('Java2011','...');
-- Java2012 包含两个学生信息
insert into classes(class_name,class_remark) values('Java2012','...');
-- Java2013 没有对应的学生信息
insert into classes(class_name,class_remark) values('Java2013','...');
```

### 添加学生信息
``` sql
-- 属于 class_id=1 的班级 （Java2011）
insert into students(stu_num,stu_name,stu_gender,stu_age,cid) values('20230301','张三','男',20,1);
insert into students(stu_num,stu_name,stu_gender,stu_age,cid) values('20230302','李四','男',21,1);
insert into students(stu_num,stu_name,stu_gender,stu_age,cid) values('20230303','王五','男',20,1);
-- 属于 class_id=2 的班级 （Java2012）
insert into students(stu_num,stu_name,stu_gender,stu_age,cid) values('20230304','赵四','男',20,2);
insert into students(stu_num,stu_name,stu_gender,stu_age,cid) values('20230305','孙七','男',20,2);
-- 小红和小明没有设置班级信息
insert into students(stu_num,stu_name,stu_gender,stu_age) values('20230306','小红','女',20);
insert into students(stu_num,stu_name,stu_gender,stu_age) values('20230307','小明','女',20);
```

## inner join 内连接
### 语法
``` sql
select * from <tableName1> inner join <tableName2>;
```

### 笛卡尔积
- 笛卡尔积（A集合 & B集合）：使用A中的每个记录依次关联B中的每个记录，笛卡尔积的总数 = A总数 * B总数
- 如果之间执行 `select * from students inner join classes;` 会获取两张数据表中的数据集合的笛卡尔积（依次使用 `tableName2` 表中的每一条记录去匹配 `tableName2` 表的每条数据）

### 内连接条件 - 使用关键字 ON
::: tip
两张表时用 inner join 连接查询之后产生的笛卡尔积数据中有很多数据都是无意义的，我们如何消除无意义的数据？-- 添加两张表进行连接查询时的条件
:::

``` sql
-- 使用 where 设置连接过滤条件：先生成笛卡尔积再从笛卡尔积过滤数据(效率较低)
select * from students inner join classes where students.cid = classes.class_id;

-- 使用 ON 设置连接查询条件：先判断连接条件是否成立，如果成立两张表的数据进行组合生成一条结果记录
select * from students inner join classes ON students.cid = classes.class_id;
```

- 结果：只获取两张表中匹配条件成立的数据，任何一张表在另一张表中如果没有找到对应匹配则不会出现在查询结果中（列如：小红和小明没有对应的班级信息）

## left join 左连接
::: tip
显示左表中的所有数据，如果在右表中存在与左表记录满足匹配条件的数据，则进行匹配；如果右表中不存在匹配数据，则显示未 null
:::
![join-query-1](/join-query-1.jpg)

### 语法
``` sql
select * from <leftTable> left join <rightTable> ON students.cid = classes.class_id;
```

## right join 右连接
::: tip
显示右表中的所有数据，如果在左表中存在与右表记录满足匹配条件的数据，则进行匹配；如果左表中不存在匹配数据，则显示未 null
:::
![join-query-2](/join-query-2.jpg)

### 语法
``` sql
select * from <leftTable> right join <rightTable> ON students.cid = classes.class_id;
```

## 数据表别名
::: tip
如果在连接查询的多张数据表中存在相同名字的字段，我们可以使用 `表明.字段名` 来进行区分，如果表明太长则不便于SQL语句的编写，我可以使用数据表别名
:::

### 语法
``` sql
select s.*,c.class_name
from students s
inner join classes c
ON s.cid = c.class_id;
```

## 子查询
::: tip
先进行一次查询，第一次查询的结果作为第二次查询的源/条件（第二次查询是基于第一次查询的结果来进行的）
:::

### 案例一
- 查询班级名称为 `Java2011` 班级中的学生信息（只知道班级名称，而不知道班级 ID）

#### 传统的方式
``` sql
-- a.查询 Java2011 班的班级编号
select class_id from classes where class_name='Java2011';
-- b.查询此班级编号下的学生信息
select * from students where cid=1
```

#### 子查询
``` sql
-- 如果子查询返回的结果是一个值（单行单列），条件可以直接使用关系运算符
select * from students where cid = (
    select class_id from classes where class_name='Java2011'
);
```

### 案例二
- 查收所有 `Java` 班级中的信息

#### 传统的方式
``` sql
-- a.查询所有 Java 班的班级编号
select class_id from classes where class_name LIKE 'Java%';
-- b.查询这些编辑班号中的学生信息(union 将多个查询语句的结果整合在一起)
select * from students where cid=1
union
select * from students where cid=2
union
select * from students where cid=3;
```

#### 子查询
``` sql
-- 如果子查询返回的结果是多个值（单列多行），条件使用 IN
select * from students where cid IN (
	select class_id from classes where class_name LIKE 'Java%'
);
```

### 案例三
- 查询 `cid=1` 的班级中性别为男的学生信息

#### 传统的方式
``` sql
select * from students where cid=1 and stu_gender='男';
```

#### 子查询
``` sql
-- 先查询cid=1班级中的学生信息，将这些信息作为一个整体虚拟表，在基于这个虚拟表查询性别为男的学生信息
-- 虚拟表需要别名
select * from (select * from students where cid=1) s where s.stu_gender='男';
```
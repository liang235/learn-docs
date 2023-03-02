# 外键约束
::: tip
- 将一个列添加外键约束与另一张表的主键（唯一列）进行关联之后，这个外键约束的列添加的数据必须要在关联的主键字段中存在
:::

## 案例：学生表与班级表（在学生表中添加外键与班级表的主键进行关联）
- 1. 先创建班级表
``` sql
create table classes(
	class_id int primary key auto_increment,
	class_name varchar(40) not null unique,
	class_remark varchar(200)
);
```

- 2. 创建学生表（在学生表中添加外键与班级表的主键进行关联）
``` sql
-- [方式一]：在创建表的时候定义 cid 字段，并添加外键约束
-- 由于 cid 列要与 classes 表中的 class_id 进行关联，因此 cid 字段类型和长度要与 class_id 一致
create table students(
    stu_num char(8) primary key,
    stu_name varchar(20) not null,
    stu_gender char(2) not null,
    stu_age int not null,
    cid int,
    constraint FK_STUDENTS_CLASSES foreign key(cid) references classes(class_id)
);

-- [方式二]：先创建表在添加外键约束
create table students(
    stu_num char(8) primary key,
    stu_name varchar(20) not null,
    stu_gender char(2) not null,
    stu_age int not null,
    cid int,
);
-- 在创建表之后为 cid 添加外键约束
alter table students add constraint FK_STUDENTS_CLASSES foreign key(cid) references classes(class_id)
```

- 3. 向班级表添加班级信息
``` sql
insert into classes(class_name,class_remark)
values('Java2011','...');

select * from classes;
+----------+------------+--------------+
| class_id | class_name | class_remark |
+----------+------------+--------------+
|        1 | Java2011   | ...          |
|        2 | Java2012   | ...          |
|        3 | Java2013   | ...          |
+----------+------------+--------------+
```

- 4. 向学生表中添加学生信息
``` sql
-- 添加学生时，设置给 cid 外键列的值必须在其关联的主表中存在
insert into students(stu_num,stu_name,stu_gender,stu_age,cid)
values('20230301','张三','男',20,1);
```

- 5. 删除外键约束
``` sql
alter table students drop foreign key FK_STUDENTS_CLASSES;
```

## 修改级联的ID
::: tip
- 当学生表中存在学生信息关联班级表中的某条记录时，就不能对班级表的这条记录进行修改ID和删除操作
:::

``` sql
select * from classes;
+----------+------------+--------------+
| class_id | class_name | class_remark |
+----------+------------+--------------+
|        1 | Java2011   | ...          |  -- 班级表中 class_id=1 的记录被学生表中关联了
|        2 | Java2012   | ...          |  -- 我们就不能修改 Java2011 的 class_id，并且不能删除
|        3 | Java2013   | ...          |
+----------+------------+--------------+

select * from students;
+----------+----------+------------+---------+------+
| stu_num  | stu_name | stu_gender | stu_age | cid  |
+----------+----------+------------+---------+------+
| 20230301 | 张三     | 男         |      20 |    1 |
| 20230302 | 李四     | 男         |      21 |    2 |
| 20230303 | 王五     | 男         |      21 |    1 |
+----------+----------+------------+---------+------+

-- 修改报错
update classes set class_id=5 where class_name='Java2011';
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`test`.`students`, CONSTRAINT `FK_STUDENTS_CLASSES` FOREIGN KEY (`cid`) REFERENCES `classes` (`class_id`))

-- 删除报错
delete from classes where class_id=1;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`test`.`students`, CONSTRAINT `FK_STUDENTS_CLASSES` FOREIGN KEY (`cid`) REFERENCES `classes` (`class_id`))
```

::: tip
如果一定要修改 Java2011 的班级 class_id，该如何实现呢？
- 将引用 Java2011 班级 class_id 的学生记录中的 cid 改为 NULL
- 在修改班级信息表中 Java2011 记录的 class_id
- 将学生表中 cid 设置为 NULL 的记录的 cid 修改为 Java2011 新的 class_id
:::

``` sql
update students set cid=NULL where cid=1;
+----------+----------+------------+---------+------+
| stu_num  | stu_name | stu_gender | stu_age | cid  |
+----------+----------+------------+---------+------+
| 20230301 | 张三     | 男         |      20 | NULL |
| 20230302 | 李四     | 男         |      21 |    2 |
| 20230303 | 王五     | 男         |      21 | NULL |
+----------+----------+------------+---------+------+

update classes set class_id=5 where class_name='Java2011';
+----------+------------+--------------+
| class_id | class_name | class_remark |
+----------+------------+--------------+
|        2 | Java2012   | ...          |
|        3 | Java2013   | ...          |
|        5 | Java2011   | ...          |
+----------+------------+--------------+

update students set cid=5 where cid IS NULL;
+----------+----------+------------+---------+------+
| stu_num  | stu_name | stu_gender | stu_age | cid  |
+----------+----------+------------+---------+------+
| 20230301 | 张三     | 男         |      20 |    5 |
| 20230302 | 李四     | 男         |      21 |    2 |
| 20230303 | 王五     | 男         |      21 |    5 |
+----------+----------+------------+---------+------+
```

## 级联修改和级联删除
::: tip
上面的操作相对来说有些繁琐，我们可以使用级联操作来实现，在添加外键时，设置`级联修改`和`级联删除`
:::

### 设置级联修改和级联删除
``` sql
-- 删除原有的外键
alter table students drop foreign key FK_STUDENTS_CLASSES;

-- 重新添加外键，并设置级联修改和级联删除
alter table students
add constraint FK_STUDENTS_CLASSES
foreign key(cid)
references classes(class_id)
ON UPDATE CASCADE ON DELETE CASCADE;
```

### 测试级联修改
``` sql
-- 班级信息
+----------+------------+--------------+
| class_id | class_name | class_remark |
+----------+------------+--------------+
|        2 | Java2012   | ...          |
|        3 | Java2013   | ...          |
|        5 | Java2011   | ...          |
+----------+------------+--------------+

-- 学生信息
+----------+----------+------------+---------+------+
| stu_num  | stu_name | stu_gender | stu_age | cid  |
+----------+----------+------------+---------+------+
| 20230301 | 张三     | 男         |      20 |    5 |
| 20230302 | 李四     | 男         |      21 |    2 |
| 20230303 | 王五     | 男         |      21 |    5 |
+----------+----------+------------+---------+------+

-- 直接修改班级 Java2011 的 class_id，关联 Java2011 这个班级的学生记录的 cid 也会同步修改
update classes set class_id=1 where class_name='Java2011';

-- 班级信息
+----------+------------+--------------+
| class_id | class_name | class_remark |
+----------+------------+--------------+
|        1 | Java2011   | ...          |
|        2 | Java2012   | ...          |
|        3 | Java2013   | ...          |
+----------+------------+--------------+

-- 学生信息
+----------+----------+------------+---------+------+
| stu_num  | stu_name | stu_gender | stu_age | cid  |
+----------+----------+------------+---------+------+
| 20230301 | 张三     | 男         |      20 |    1 |
| 20230302 | 李四     | 男         |      21 |    2 |
| 20230303 | 王五     | 男         |      21 |    1 |
+----------+----------+------------+---------+------+
```

### 测试级联删除
``` sql
删除 class_id=1 的班级信息，学生表中引用此班级信息的记录也会被同步删除
delete from classes where class_id=1;
```
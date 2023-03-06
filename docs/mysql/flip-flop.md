# 触发器
- 触发器就是一种特殊的存储功能，触发器和存储过程一样是一个能够完成特定功能，存储在数据库服务器上的 SQL 片段，但是触发器无需调用，当对数据表中的数据执行 DML 操作时自动触发这个 SQL 片段的执行，无需手动调用
- 在 MySQL 中只有执行 insert/delete/update 操作才能触发触发器的执行

### 使用建议
- 在互联网项目中，应 `避免使用触发器`
- 对于并发量不大的项目可以选择使用存储过程，但是在互联网引用中 `不提倡使用存储过程`（原因：存储过程是将实现业务的逻辑交给数据库处理，一则增加了数据库的负载，二则不利于数据库的迁移）

## 语法
``` sql
create trigger tri_name
<before|after> -- 定义触发时机
<insert|delete|update> -- 定义DML类型
ON <tableName> -- 表名
for each row -- 声明为行集触发器（只要操作一条记录，就触发我们的触发器执行一次）
sql_statement -- 触发器的操作
```

## 创建触发器
``` sql
-- 当学生信息表发生添加操作时，则向日志信息表添加一条日志
create trigger tri_test1
after insert on students
for each row
insert into stulogs(time,log_text)
values(now(),concat('添加', NEW.stu_num, '学生信息'));
```

## 查看触发器
``` sql
show triggers;
```

## 测试触发器
``` sql
-- 添加一个学生信息，触发器执行了一次
insert into students(stu_num, stu_name, stu_gender, stu_age)
values('1005', '王五', '女', 21);

-- 一条sql指令添加了2条学生信息，触发器执行了2次
insert into students(stu_num, stu_name, stu_gender, stu_age)
values('1006', '王六', '女', 21),('1007', '王七', '女', 21);
```

## 删除触发器
``` sql
drop trigger tri_test1;
```

## NEW 和 OLD
- NEW：在触发器中用于获取 insert 操作添加的数据，update 操作修改后的数据
- OLD：在触发器中用于获取 delete 删除前的数据，update 修改前的数据

### NEW 在 insert 操作中
-  NEW 表示添加的新纪录
``` sql
create trigger tri_test1
after insert on students
for each row
insert into stulogs(time,log_text)
values(now(),concat('添加', NEW.stu_num, '学生信息'));

-- 执行添加操作
insert into students(stu_num, stu_name, stu_gender, stu_age)
values('1006', '王六', '女', 21),('1007', '王七', '女', 21);
```

### NEW 在 update 操作中
-  NEW 表示修改后的记录
``` sql
create trigger tri_test2
after update on students
for each row
insert into stulogs(time,log_text)
values(now(),concat('将学生姓名修改为：',NEW.stu_name));

-- 执行修改操作
update students set stu_name='新张三' where stu_num=1001;
```

### OLD 在 delete 操作中
-  OLD 表示删除的记录
``` sql
create trigger tri_test3
after delete on students
for each row
insert into stulogs(time,log_text)
values(now(),concat('删除：',OLD.stu_name,'学生信息'));

-- 执行删除操作
delete from students where stu_num=1003;
```

### OLD 在 update 操作中
-  OLD 表示修改前的记录
``` sql
create trigger tri_test4
after update on students
for each row
insert into stulogs(time,log_text)
values(now(),concat('将学生从：',OLD.stu_name,'修改为',NEW.stu_name));

-- 执行修改操作
update students set stu_name='张三' where stu_num=1001;
```

## 触发器使用总结

### 优点
- 触发器是自动执行的，当对触发器相关的表执行响应的 DML 操作时立即执行
- 触发器可以实现表中的级联操作（关联操作），有利于保证数据的完整性
- 触发器可以对 DML 操作的数据进行更为复杂的合法性校验

### 缺点
- 使用触发器实现的业务逻辑如果出现问题，将难以定位，后期维护困难
- 大量使用触发器容易导致代码结构杂乱，增加了程序的复杂性
- 当触发器操作的数据量比较大时，执行效率会大大降低

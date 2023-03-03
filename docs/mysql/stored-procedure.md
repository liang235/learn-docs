# 存储过程

## SQL 指令执行流程
<zoom-img src="/stored-procedure-1.jpg" />

## SQL 存储过程介绍
<zoom-img src="/stored-procedure-2.jpg" />

## SQL 存储过程优缺点
<zoom-img src="/stored-procedure-3.jpg" />

## 创建存储过程
``` sql
create procedure proc_test(IN a int,IN b int,OUT c int)
begin
    -- sql
	SET c = a+b;
end;
```

## 调用存储过程
``` sql
-- 定义变量 @m
set @m = 0;
-- 将 3 传递给 a，将 2 传递给 b,将 @m 传递给 c
call proc_test(3,2,@m);
-- 显示变量值, dual 是系统表，不需要创建
select @m from dual;
```

## 变量的使用
存储过程中的变量分为两种：局部变量和用户变量

### 局部变量 declare
- 定义在存储过程中的变量，只能在存储过程中使用
    - 局部变量要定义在存储过程中，而且必须存储在过程开始的位置
    - `declare x int default 0;`

``` sql
create procedure proc_test1(IN a int,OUT r int)
begin
	-- 定义x int 类型，默认值为 0
	declare x int default 0;
	declare y int default 0;
	set x = a*a;
	set y = a/2;
	set r = x+y;
end;

-- 报错：Unknown column 'x' in 'field list'
select x from dual;
```

### 用户变量 set
- 相当于全局变量，定义的用户变量可以通过 `select @attrName from dual;` 查询
    - 用户变量会存储在 MySQL 数据库的数据字典中（dual）
    - 用户变量定义使用 set 关键字直接定义，变量名要以 `@` 开头

``` sql
set @n=1;
select @n from dual;
```

- 查询学生的数量并返回
``` sql
create procedure proc_test3(OUT c int)
begin
	select count(stu_num) into c from students;
end;

set @n=1;
call proc_test3(@n);
select @n from dual;
```

## 存储过程的参数
MySql 存储过程的参数一共有三种：IN/OUT/INOUT

### IN 输入参数
在调用过程中传递数据给存储过程的参数（在调用的过程中必须为具有实际值的变量或者字面值）
``` sql
-- 添加学生信息
create procedure proc_test5(
	IN snum char(8),
	IN sname varchar(20),
	IN gender char(2),
	IN age int,
	IN cid int,
	IN remark varchar(255)
)
begin
	insert into students(stu_num,stu_name,stu_gender,stu_age,cid,remark)
	values(snum,sname,gender,age,cid,remark);
end;

call proc_test5('20230308','米八','男',20,2,'说明');
```

### OUT 输出参数
将存储过程中产生的数据返回给过程调用者，相当于 Java 方法的返回值，但不同的是，一个存储过程可以有多个输出参数
``` sql
create procedure proc_test6(IN snum char(8),OUT sname varchar(20))
begin
	select stu_name into sname from students where stu_num=snum;
end;

set @name='';
call proc_test6('20230308',@name);
select @name from dual;
```

### INOUT 输入输出参数
实际开发中尽量少用 INOUT 因为可读性较差
``` sql
create procedure proc_test7(INOUT str varchar(20))
begin
	select stu_name into str from students where stu_num=str;
end;

set @name='20230308';
call proc_test7(@name);
select @name from dual;
```

## 流程控制
在存储过程中支持流程控制语句用于实现逻辑的控制

### 分支语句
- if-then-else
``` sql
-- 单分支：如果条件成立，则执行 sql
create procedure proc_test8(IN a int)
begin
	if a=1 then
	-- sql
	end if;
end;
```

``` sql
-- 双分支：如果条件成立，则执行sql1，否则执行sql2
create procedure proc_test8(IN a int)
begin
	if a=1 then
	-- sql1
	else
	-- sql2
	end if;
end;
```

- case
``` sql
create procedure proc_test9(IN a int)
begin
	case a
	when 1 then
		-- sql1
	when 2 then
		-- sql2
	else
		-- sql3（如果变量的值和所有when中的值都不匹配，则执行else中的这个sql）
	end case;
end;
```

### 循环语句

- while
``` sql
-- 添加参数指定格式的班级信息
create procedure proc_test9(IN num int)
begin
	declare i int;
	set i = 1;
	while i<num do
		insert into classes(class_name,remark) values(concat('Java',i),concat('详情',i));
		set i = i+1;
	end while;
end;
call proc_test9(3);
```

- repeat
``` sql
create procedure proc_test(IN num int)
begin
	declare i int;
	set i = 1;
	repeat
		insert into classes(class_name,remark) values(concat('JavaScript',i),concat('详情',i));
		set i = i+1;
	until i > num end repeat;
end;
call proc_test(3);
```

- loop
``` sql
create procedure proc_test(IN num int)
begin
	declare i int;
	set i = 1;
	myloop:loop
		insert into classes(class_name,remark) values(concat('Html',i),concat('详情',i));
		set i = i+1;
		if i=num then
			leave myloop;
		end if;
	end loop;
end;
call proc_test(3);
```

## 存储过程操作
存储过程是属于某个数据库的，也就是说当我们将存储过程创建在某个数据库之后，只能在当前数据库中调用此存储过程

### 查询存储过程
- 查询数据库中有哪些存储过程
``` sql
-- 根据数据库名，查询当前数据库中的存储过程(函数)
show procedure status where db='test';
```

- 查询存储过程的创建细节
``` sql
show create procedure test.proc_test;
```

### 修改存储过程
修改存储过程指的是修改存储过程的特征/特性

- 存储过程的特征参数
- `CONTAINS SQL` 表示子程序包含 SQL 语句，但不包含读或写数据的语句
- `NO SQL` 表示子程序中不包含 SQL 语句
- `READS SQL DATA` 表示子程序中包含读数据的语句
- `MODIFIES SQL DATA` 表示子程序中包含写数据的语句
- `SQL SECURITY { DEFINER | INVOKER}` 指明谁有权限来执行
    - `DEFINER` 表示只有定义者自己才能够执行
    - `INVOKER` 表示调用者可以执行
- `COMMENT 'string'` 表示注释信息
``` sql
alter procedure proc_test READS SQL DATA;
```

### 删除存储过程
``` sql
drop procedure proc_test;
```

## 存储过程练习案例
使用存储完成借书操作

### 数据准备
``` sql
-- 创建图书信息表
create table books(
    book_id int primary key auto_increment,
    book_name varchar(50) not null,
    book_author varchar(20) not null,
	book_price decimal(10,2) not null,
	book_stock int not null,
	book_desc varchar(200)
);

-- 创建图形信息
insert into books(book_name, book_author, book_price, book_stock, book_desc) 
values('Java 设计程序', '亮亮', 38.80, 12, '亮亮老师带你学 Java');

insert into books(book_name, book_author, book_price, book_stock, book_desc) 
values('Java 王者之路', '亮哥', 58.80, 11, '亮哥老师带你学 Java');

-- 创建学生信息表
create table students(
	stu_num char(8) primary key,
	stu_name varchar(20) not null,
	stu_gender char(2) not null,
	stu_age int not null
);

-- 添加学生信息
insert into students(stu_num, stu_name, stu_gender, stu_age) values('1001', '张三', '男', 21);
insert into students(stu_num, stu_name, stu_gender, stu_age) values('1002', '李四', '男', 22);
insert into students(stu_num, stu_name, stu_gender, stu_age) values('1003', '王五', '男', 23);
```

- 操作
	- 保存借书记录
	- 修改图书库存
- 条件
	- 判断学生是否存在
	- 判断图书是否存在，库存是否充足

- 创建借书记录表
``` sql
create table records(
	rid int primary key auto_increment,
	snum char(8) not null,
	bid int not null,
	borrow_num int not null,
	is_return int not null,
	borrow_date date not null,
	constraint FK_RECORDS_STUDENTS foreign key(snum) references students(stu_num) ON UPDATE CASCADE ON DELETE CASCADE,
	constraint FK_RECORDS_BOOKS foreign key(bid) references books(book_id) ON UPDATE CASCADE ON DELETE CASCADE
);
```

### 创建存储过程
``` sql
-- 实现借书业务
-- 参数a：输入参数 -- 学号
-- 参数b：输入参数 -- 图书编号
-- 参数m：输入参数 -- 借书的数量
-- 参数state：输入参数 -- 借书的状态（1：借书成功，2：学生不存在，3：图书不存在，4：库存不足）
create procedure proc_borrow_book(IN a char(4),IN b int,IN m int,OUT state int)
begin
	declare stu_count int; -- 学生的数量
	declare book_count int; -- 图书的数量
	declare stock int default 0; -- 图书库存
	-- 	判断学号是否存在，根据参数 a 到学生信息表查询是否有 stu_num=a 的记录
	select count(stu_num) into stu_count from students where stu_num=a;
	if stu_count>0 then
		-- 学号存在，判断图书ID是否存在：根据参数b查询图书记录总数
		select count(book_id) into book_count from books where book_id=b;
		if book_count>0 then
			-- 图书存在，判断图书库存是否充足：查询当前图书库存和参数C进行比较
			select book_stock into stock from books where book_id=b;
			if stock>=m then
				-- 执行借书
				-- 操作1：在借书记录表中添加记录
				insert into records(snum, bid, borrow_num, is_return, borrow_date)
				values(a, b, m, 0, sysdate());
				-- 操作2：修改图书库存
				update books set book_stock=stock-m where book_id=b;
				-- 借书成功
				set state = 1;
			else
				-- 库存不足
				set state = 4;
			end if;
		else
			-- 图书不存在
			set state = 3;
		end if;
	else
		-- 学号不存在
		set state = 2;
	end if;
end;
```

### 调用存储过程借书
``` sql
set @state=0;
call proc_borrow_book('1001', 1, 2, @state);
select @state from dual;
```

## 游标

### 游标的概念
- 游标可以用来依次去除查询结果集中的每条数据--逐条读取查询结果集中的记录

### 游标的使用

- 声明游标
``` sql
-- 语法
declare cursor_name CURSOR FOR select_statement;

-- 示例
declare mycursor cursor for select book_name, book_author, book_price from books;
```

- 打开游标
``` sql
open mycursor;
```

- 使用游标
``` sql
-- 提取游标当前指向的记录（提取之后，游标自动下移）
FETCH mycursor into bname, bauthor, bprice;
```

- 关闭游标
``` sql
close mycursor;
```

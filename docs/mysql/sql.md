# SQL
SQL（Structured Query Language）结构化查询语言，用于存取、查询、更新数据以及管理关系型数据库

## SQL 分类
> 根据 SQL 指令完成的数据库操作不同，可以将 SQL 分为四类

- `DDL` Data Definition Language 数据定义语言
    - 用于完成对数据库对象（数据库、数据表、视图、索引等）的创建、删除、修改
- `DML` Data Manipulation Language 数据操作语言
    - 用于完成对数据表中的数据的添加、删除、修改等操作
- `DQL` Data Query Language 数据查询语言
    - 用于将数据表中的数据查询出来
- `DCL` Data Control Language 数据控制语言
    - 用于完成事务管理等控制性操作

## SQL 基本语法
- SQL 指令不区分大小写
- 每条 SQL 指令结束以后都有 `;` 结尾
- SQL 指令以 `空格` 进行分割
- SQL 直接可以不限制换行（关键字直接以空格进行分隔）

## DDL 数据库操作
- 查询数据库
``` sql
-- 查询所有数据库
show databases;

-- 显示指定名称的数据创建的 SQL 指令
show create database db_test;
```

- 创建数据库
``` sql
-- dbName: 自定义数据库名称
create database <dbName>;

-- 创建 dbName 如果 dbName 存在则不创建
create database if not exists <dbName>;

-- 创建数据库时指令字符集为 utf8 已支持中文，通常默认就是 utf8
create database <dbName> character set utf8;
```

- 修改数据库
``` sql
-- 修改数据库的字符集
alter database <dbName> character set uft8;
```

- 删除数据库
``` sql
-- 删除数据库会删除当前数据库中所以数据表以及数据表中的数据
drop database <dbName>;

-- 如果数据库存在则删除数据库
drop database if exists <dbName>;
```

- 切换/使用数据库
``` sql
use database;
```

## 数据表的操作
- 创建数据表
    - char: 列类型
    - not null: 不能为空
    - unique: 不能重复
``` sql
create table <tableName>(
    stu_num char(8) not null,
    stu_name varchar(20) not null,
    stu_gender char(2) not null,
    stu_age int not null,
    stu_tel char(11) not null unique,
    stu_qq varchar(11) not null unique
);
```
![sql-table-1](/sql-table-1.jpg)

- 查询数据表
``` sql
show tables;

-- 表字段详情
desc <tableName>;
```

- 删除数据表
``` sql
drop table <tableName>;

-- 当数据表存在时删除数据表
drop table if exists <tableName>;
```

- 修改数据表
``` sql
-- 修改数据表名
alter table <tableName> rename to <newTableName>;

-- 修改数据表字符集，默认字符集和数据库一致
alter table <tableName> character set utf8;

-- 添加字段/列
alter table <tableName> add <cloumnName> varchar(200);

-- 修改字段列名和类型
alter table <tableName> change <oldCloumn> <newCloumnName> <type>;

-- 只修改字段类型
alter table <tableName> modify <cloumnName> <newType>;

-- 删除字段/列
alter table <tableName> drop <cloumnName>;
```

## MySQL 数据类型
指的是数据表中的列中支持存放的数据的类型

- 数值类型，在 MySQL 数据库中有多种数据类型可以存放数值，不同类型存放的数值的范围或者形式不同

| 类型        | 内存空间大小   | 范围                                              | 说明                                           |
| ----------- | -------------- | ------------------------------------------------- | ---------------------------------------------- |
| Tinyint     | 1byte          | 有符合：-128 ~ 127<br>无符号：0 ~ 255             | 特小型整数（年龄）                             |
| Smaillint   | 2byte          | 有符合：-32768 ~ 32767<br/>无符号：0 ~ 65535      | 小型整数                                       |
| Mediumint   | 3byte          | 有符合：-2^31 ~ 2^31 - 1<br/>无符号：0 ~ 2^32 - 1 | 中型整数                                       |
| Int/integer | 4byte          |                                                   | 整数                                           |
| Bigint      | 8byte          |                                                   | 大型整数                                       |
| Float       | 4byte          |                                                   | 单精度                                         |
| Double      | 8byte          |                                                   | 双精度                                         |
| Decimal     | 第一个参数 + 2 |                                                   | decimal(10,2) 表示数值一共有10位，小数位有两位 |

- 字符串类型，存储字符序列的类型

| 类型       | 字符序列的长度范围 | 说明                                                         |
| ---------- | ------------------ | ------------------------------------------------------------ |
| `char`     | 0 ~ 255            | 定长字符串，最多可以存储 255 个字符，当我们指定数据字段char<br>此列中的数据最长为 n 个字符，如果添加的数据少于 n，则自补"\u0000"至 n 长度 |
| `varchar`  | 0 ~ 65536          | 可变长度字符串，此类型的列最大长度为 65535                   |
| tinyblob   | 0 ~ 255            | 存储二进制字符串                                             |
| blob       | 0 ~ 65536          | 存储二进制字符串                                             |
| mediumblob | 0 ~ 1677215        | 存储二进制字符串                                             |
| longblob   | 0 ~ 4294967295     | 存储二进制字符串                                             |
| tinytext   | 0 ~ 255            | 文本数据（字符串）                                           |
| text       | 0 ~ 65535          | 文本数据（字符串）                                           |
| mediumtext | 0 ~ 1677215        | 文本数据（字符串）                                           |
| `longtext` | 0 ~ 4294967295     | 文本数据（字符串）                                           |

- 日期类型，在 MySQL 数据库中，我们可以使用字符串来存储时间，但是如果我们需要基于时间字段进行查询操作（查询在某个时间段内的数据）就不便于查询实现

| 类型       | 格式                | 说明                              |
| ---------- | ------------------- | --------------------------------- |
| `data`     | 2021-09-15          | 日期，只存储年月日                |
| time       | 11:12:13            | 日期，只存储时分秒                |
| year       | 2021                | 日期，只存储年份                  |
| `datetime` | 2021-09-15 11:12:13 | 日期，存储年月日+时分秒           |
| timestamp  | 20210915 111213     | 日期，存储年月日+时分秒（时间戳） |

## MySQL 字段约束
- 在创建数据表的时候，指定的对数据表的列的数据现在性的要求（对表的列中数据进行限制）
- 为什么要给表中的列添加约束呢？
    - 保证数据的有效性
    - 保证数据的完整性
    - 保证数据的正确性

| 字段     | 类型     | 说明                                        |
| -------- | -------- | ------------------------------------------- |
| not null | 非空约束 | 限制此列的值必须提供，不能为 null           |
| unique   | 唯一约束 | 在表中的多条数据，此列的值不能重复          |
| primary key  | 主键约束 | 非空 + 唯一，能够唯一标识数据表中的一条数据 |
| foreign  | 外键约束 | 建立不同表之间的关联关系                    |

- 创建表时添加主键约束
``` sql
create table books(
    book_isbn char(4) primary key,
    book_name varchar(10) not null,
    book_author varchar(6)
);
```
或者
``` sql
create table books(
    book_isbn char(4),
    book_name varchar(10) not null,
    book_author varchar(6),
    primary key(book_isbn)
);
```

- 删除数据表主键约束
``` sql
alter table books drop primary key;
```

- 创建表之后添加主键约束
``` sql
-- 创建表时没有添加主键约束
create table books(
    book_isbn char(4),
    book_name varchar(10) not null,
    book_author varchar(6)
);

-- 创建表之后添加主键约束
alter table books modify book_isbn char(4) primary key;
```

- 主键自动增长
    - 在我们创建一张数据表时，如果数据表中有列 key 作为主键（列如：学生表的学号，图书表的isbn）我们直接设置这个列为主键；当有些数据表中没有合适的列作为主键时，我们可以额外定义一个与记录本身无关的列（ID）作为主键，此列数据无具体的含义，主要用于标识一条记录，在 mysql 中我们可以将此列设置为 int 类型，同事设置为 `自动增长` 当我们向数据表中新增一条记录时，无需提供 ID 列的值，它会自动生长
- 定义主键自动增长
    - 自动增长从1开始，每添加一条记录，自动增长的列会自定加1，当我们把某条记录删除之后再添加数据，自动增长的数据也不会重复生成（自动增长只保证唯一性、不保证连续性）
``` sql
create table types(
    type_id int primary key auto_increment,
    type_name varchar(20)
)
```

- 联合主键
    - 将数据表中的多列组合在一起设置为表的主键
![sql-table-2](/sql-table-2.jpg)
- 定义联合主键
    - 在实际企业项目的数据库设计中，联合主键使用频率并不高；当一张数据表中没有明确的字段可以作为主键时，我们可以额外添加一个ID作为主键
``` sql
create table grades(
    stu_num char(8),
    course_id int,
    score int,
    primary key(stu_num, course_id)
)
```

## DML 数据表字段操作
用于完成对数据表中的插入、删除、修改操作

- 插入数据
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

- 删除数据
    - 从数据表中删除满足特定条件（所有）的数据
``` sql
-- 如果删除语句没有 where 语句，则表示删除数据表中的所有数据（敏感操作）
delete from <tableName>;
-- 删除 stu_num='1' 的数据
delete from <tableName> where stu_num='1';
-- 删除年龄大于20的学生信息（如果满足 where 语句的有多条记录，则删除多条记录）
delete from <tableName> where stu_age>20;
```

- 修改数据
    - 对数据表中已经添加的数据进行修改
``` sql
-- 将学号 stu_num='1' 的学生姓名修改为 '张三'
update <tableName> set stu_name='张三' where stu_num='1';

-- 不加 where 将修改所有 stu_name 为 张三
update <tableName> set stu_name='张三';

-- 将学号 stu_num='1' 的学生性别修改为男，同时 qq 修改为 111111111
update <tableName> set stu_gender='男',stu_qq='111111111' where stu_num='1';
```

## 查询基础语法

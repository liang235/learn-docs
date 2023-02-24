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
``` js
// 查询所有数据库
show databases;

// 显示指定名称的数据创建的 SQL 指令
show create database db_test;
```

- 创建数据库
``` js
// dbName: 自定义数据库名称
create database <dbName>;

// 创建 dbName 如果 dbName 存在则不创建
create database if not exists <dbName>;

// 创建数据库时指令字符集为 utf8 已支持中文，通常默认就是 utf8
create database <dbName> character set utf8;
```

- 修改数据库

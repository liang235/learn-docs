# DDL 数据库操作

## 查询数据库
``` sql
-- 查询所有数据库
show databases;

-- 显示指定名称的数据创建的 SQL 指令
show create database db_test;
```

## 创建数据库
``` sql
-- dbName: 自定义数据库名称
create database <dbName>;

-- 创建 dbName 如果 dbName 存在则不创建
create database if not exists <dbName>;

-- 创建数据库时指令字符集为 utf8 已支持中文，通常默认就是 utf8
create database <dbName> character set utf8;
```

## 修改数据库
``` sql
-- 修改数据库的字符集
alter database <dbName> character set uft8;
```

## 删除数据库
``` sql
-- 删除数据库会删除当前数据库中所以数据表以及数据表中的数据
drop database <dbName>;

-- 如果数据库存在则删除数据库
drop database if exists <dbName>;
```

## 切换/使用数据库
``` sql
use database;
```
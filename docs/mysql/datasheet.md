# 数据表的操作

## 创建数据表
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
<zoom-img src="/sql-table-1.jpg" />

## 查询数据表
``` sql
show tables;

-- 表字段详情
desc <tableName>;
```

## 删除数据表
``` sql
drop table <tableName>;

-- 当数据表存在时删除数据表
drop table if exists <tableName>;
```

## 修改数据表
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
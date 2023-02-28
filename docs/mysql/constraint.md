# MySQL 字段约束
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

## 创建表时添加主键约束
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

## 删除数据表主键约束
``` sql
alter table books drop primary key;
```

## 创建表之后添加主键约束
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

## 主键自动增长
- 在我们创建一张数据表时，如果数据表中有列 key 作为主键（列如：学生表的学号，图书表的isbn）我们直接设置这个列为主键；当有些数据表中没有合适的列作为主键时，我们可以额外定义一个与记录本身无关的列（ID）作为主键，此列数据无具体的含义，主要用于标识一条记录，在 mysql 中我们可以将此列设置为 int 类型，同事设置为 `自动增长` 当我们向数据表中新增一条记录时，无需提供 ID 列的值，它会自动生长
- 定义主键自动增长
    - 自动增长从1开始，每添加一条记录，自动增长的列会自定加1，当我们把某条记录删除之后再添加数据，自动增长的数据也不会重复生成（自动增长只保证唯一性、不保证连续性）
``` sql
create table types(
    type_id int primary key auto_increment,
    type_name varchar(20)
)
```

## 联合主键
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
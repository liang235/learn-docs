# 聚合函数
SQL 提供了一些可以对查询记录的列进行计算的函数

## count() 统计函数
- 统计满足条件的指定字段的个数（记录数）
``` sql
-- 统计学生表中学生的总数
select count(stu_num) from stus;
+----------------+
| count(stu_num) |
+----------------+
|              5 |
+----------------+

-- 统计学生表中男学生的总数
select count(stu_num) from stus where stu_gender='男';
+----------------+
| count(stu_num) |
+----------------+
|              3 |
+----------------+
```

## max() 计算最大值
``` sql
select max(stu_age) from stus;
+--------------+
| max(stu_age) |
+--------------+
|           29 |
+--------------+

select max(stu_age) from stus where stu_gender='女';
+--------------+
| max(stu_age) |
+--------------+
|           28 |
+--------------+
```

## min() 计算最小值
``` sql
select min(stu_age) from stus;
+--------------+
| min(stu_age) |
+--------------+
|           21 |
+--------------+

select min(stu_age) from stus where stu_gender='女';
+--------------+
| min(stu_age) |
+--------------+
|           21 |
+--------------+
```

## sum() 计算和
``` sql
-- 计算所有学生年龄的总和
select sum(stu_age) from stus;
+--------------+
| sum(stu_age) |
+--------------+
|          123 |
+--------------+

-- 计算女学生年龄的总和
select sum(stu_age) from stus where stu_gender='女';
+--------------+
| sum(stu_age) |
+--------------+
|           49 |
+--------------+
```

## avg() 计算平均值
``` sql
select avg(stu_age) from stus;
+--------------+
| avg(stu_age) |
+--------------+
|      24.6000 |
+--------------+

select avg(stu_age) from stus where stu_gender='女';
+--------------+
| avg(stu_age) |
+--------------+
|      24.5000 |
+--------------+
```
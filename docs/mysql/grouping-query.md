# 分组查询
将数据表中的记录按照指定的列进行分组

## 分组示例 group by
``` sql
select 分组字段/聚合函数
from 表名 [where 条件] group by
分组列名 [having 条件]
[order by 条件]
```
- `select` 后用 `*` 显示对查询结果进行分组之后，显示每组的第一条数据（这种显示通常是无意义的）
- `select` 后通常显示分组字段和聚合函数
- 语句执行顺序：
    - 先根据 `where` 条件从数据库查询记录
    - `group by` 对查询记录进行分组
    - 执行 `having` 对分组后的数据进行筛选
- 没有 `group by` 是绝对不会有 `having` 的

``` sql
-- 根据性别进行分组
select stu_gender from stus group by stu_gender;
+------------+
| stu_gender |
+------------+
| 女         |
| 男         |
+------------+

-- 先根据性别进行分组，在计算每组的数量
select stu_gender,count(stu_num) from stus group by stu_gender;
+------------+----------------+
| stu_gender | count(stu_num) |
+------------+----------------+
| 女         |              2 |
| 男         |              5 |
+------------+----------------+

-- 先对年龄进行分组，然后统计各组的学生数，最后对结果进行排序
select stu_age,count(stu_num) from stus group by stu_age order by stu_age;
+---------+----------------+
| stu_age | count(stu_num) |
+---------+----------------+
|      15 |              2 |
|      21 |              1 |
|      22 |              1 |
+---------+----------------+

-- 先按照年龄进行分组，然后统计每组人数，在筛选当前组人数>1的组显示出来
select stu_age,count(stu_num) from stus group by stu_age having count(stu_num)>1 order by stu_age;
+---------+----------------+
| stu_age | count(stu_num) |
+---------+----------------+
|      15 |              2 |
+---------+----------------+

-- 先查询性别为男的学生，按年龄分组，在统计当前组人数大于1的，在按年龄升序排序显示出来
select stu_age,count(stu_num)
from stus
where stu_gender='男'
group by stu_age
having count(stu_num)>=1
order by stu_age;
+---------+----------------+
| stu_age | count(stu_num) |
+---------+----------------+
|      15 |              2 |
|      22 |              1 |
|      23 |              1 |
|      29 |              1 |
+---------+----------------+
```

## 分页查询 limit
当数据表中的数据比较多的时候，如何一次性全部查询出来显示给用户，用户的可读性/体验性不太好，因此我们可以将这些数据分页进行展示

### 语法
- `param1 int`：表示获取查询语句的结果中的第一条数据的索引（索引从0开始）
- `param2 int`：表示获取的查询记录的条数（如果剩下的数据条数<param2，则返回剩下的所有记录）

``` sql
select ...
from ...
where ...
limit param1,param2
```

- 对数据表中的学生信息进行分页显示，总共有10条数据，我们每页显示3条数据
    - 总记录数 `count` 10
    - 查询的页码 `pageNum` 1
    - 每页显示 `pageSize` 3
    - 总页数 `pageCount` = count%pageSize = 0 ? count/pageSize : count/pageSize + 1

``` sql
-- 查询第一页
select * from stus [where ...] limit 0,3;

-- 查询第二页
select * from stus [where ...] limit 3,3;

-- 查询第三页
select * from stus [where ...] limit 6,3;

-- 查询第四页
select * from stus [where ...] limit 9,3;
```

## 分页查询通用表达式
``` sql
-- pageNum表示查询的页码，pageSize表示每页显示的条数
select * from <tableName> [where ...] limit (pageNum-1)*pageSize,pageSize;
```
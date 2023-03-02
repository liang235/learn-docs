# 数据表的关联关系
MySQL 是一个关系型数据库，不仅可以存储数据，还可以维护数据与数据之间的关系 -- 通过在数据表中添加字段建立外键约束
![association-relation](/association-relation.jpg)

## 一对一关联
::: tip
- 人 -- 身份证：一个人只有一个身份证，一个身份证只对应一个人
:::

### 方案一：主键关联 -- 两张数据表中主键相同的数据为相互对应的数据
![association-relation-1](/association-relation-1.jpg)

### 方案二：唯一外键 -- 在任意一张表中添加一个字段设置为外键约束与另一张表主键关联，并且将外键列添加唯一约束
![association-relation-2](/association-relation-2.jpg)

## 一对多与多对一关联
::: tip
- 班级 -- 学生 （一对多）一个班级包含多个学生
- 学生 -- 班级 （多对一）多个学生可以属于同一个班级
:::

### 方法：在多的一端添加外键，与一的一端主键进行关联
![association-relation-3](/association-relation-3.jpg)

## 多对多关联
::: tip
- 班级 -- 课程：一个学生可以选择多门课，一门课程也可以由多个学生选择
- 会议 -- 社团：一个会员可以参加多个社团，一个社团也可以招纳多个学员
:::

### 方法：额外创建一张关系表来维护多对多关联
![association-relation-4](/association-relation-4.jpg)

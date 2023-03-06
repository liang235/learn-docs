# 事务
- 我们把完成特定的业务的多个数据库 DML 操作步骤称为一个事务
- 事务，就是完成同一个业务的多个 DML 操作

## 数据库事务特性（ACID）

### 原子性（Atomicity）
- 一个事务中的多个 DML 操作，要么同时执行成功，要么同时执行失败

### 一致性（Consistency）
- 事务执行之前和事务执行之后，数据库中的数据是一直的，完成性和一致性不能被破坏

### 隔离性（Lsolation）
- 数据库允许多个事务同时执行，（张三借Java书的同时允许李四借Java书），多个并行的事务之间不能相互影响

### 持久性（Durability）
- 事务完成之后，对数据的操作是永久的

## 事务管理

### 自动提交与手动提交
- 在 MySQL 中，默认 DML 指令的执行是自动提交的，当我们执行一个 DML 指令之后，自动同步到数据库中

### 开启事务
- 开启事务就是关闭自动提交
- 在开始事务第一个操作之前，执行 `start transaction` 开启事务
- 依次执行事务中的每个 DML 操作
- 如果在执行的过程中的任何位置出现异常，则执行 `rollback` 回滚事务
- 如果事务中所有 DML 操作都执行成功，则在最后执行 `commit` 提交事务
<zoom-img src="/transaction.jpg" />

## 事务隔离级别
- 数据库允许多个事务并行，多个事务之间是隔离的，相互独立的；如果事务之间不相互隔离并且操作同一数据时，可能会导致数据的一致性被破坏

### 读未提交（read uncommitted）
- T2可以读取T1执行但未提交的数据，可能会导致出现脏读
- 脏读：一个事务读取到另一个事务中未提交的数据
<zoom-img src="/transaction-1.jpg" />

### 读已提交（read committed）
- T2只能读取T1已经提交的数据；可能会导致不可重复度（虚读）
- 虚度：在同一个事务中，两次查询操作读取到数据不一致
<zoom-img src="/transaction-2.jpg" />

### 可重复读（repeatable read）
- T2执行第一次查询后，在事务结束之前其他事务不能修改对应的数据，避免了不可重复度（虚读），但可能会导致幻读
- T2对数据表中的数据进行修改然后查询，在查询之前T1向数据表中新增了一条数据，就导致T2以为修改了所有数据，但却查询出了与修改不一致的数据（T1事务新增的数据）
<zoom-img src="/transaction-3.jpg" />

### 串行化
- 同时只允许一个事务对数据表进行操作；避免了脏读、虚读、幻读问题
<zoom-img src="/transaction-4.jpg" />

## 设置 MySQL 默认隔离级别

### 查看默认级别
``` sql
-- 8.0.3之前
select @@tx_isolation;

-- 8.0.3之后
select @@transaction_isolation;
```

### 设置默认级别
``` sql
set session transaction isolation level <read committed>
```
# 数据库介绍

## 数据库概念
- 数据库就是存放数据的仓库
- 数据库（DataBase 简称 DB）是长期存储在计算机内部有结构的、大量的、共享的数据集合

- 长期存储：持久存储
- 有结构：
    - 类型：数据库不仅可以存放数据、而且存放的数据还是有类型的
    - 关系：存储数据与数据直接的关系
- 大量：大多数数据库都是文件系统的，也就是说存储在数据库中的数据实际上就是存储在硬盘当中
- 共享：多个应用程序可以通过数据库实现数据共享

## 关系型数据库与非关系型数据库
- 关系型数据库
    - 采用关系模型，来组织数据的存储，以行和列的形式存储数据并记录数据与数据直接的关系
    - 将数据存储在表格中，可以通过表格与表格之间的关联来维护数据与数据之间的关系

- 非关系型数据库
    - 采用键值对的模型来存储数据，只完成数据的记录，不会记录数据与数据直接的关系
    - 在非关系型数据库中基于特定的存储结构来解决一些大数据应用的难题
    - NoSQL  来指代非关系型数据库

## 常见的数据库产品
### 关系型数据库
- `MySql` 免费
    - MariaDB
    - Percona Server
- PostgreSQL
- `Oracle` 收费
- SQL Server
- Access
- Sybase
- 达梦数据库（国产）

### 非关系型数据库
- 面向检索的列式存储 Colimn-Oriented
    - HaBase（Hadoop子系统）
    - BigTable（Google）
- 面向高并发的缓存存储 Key-Value
    - `Redis`
    - MemcacheDB
- 面向海量数据访问的文档存储 Document-Oriented
    - `MongoDB`
    - CouchDB

## 数据库术语
- `数据库（Database）`：存储数据的集合
- `数据（Data）`：实际上指的是描述事务的符合记录
- `数据库管理系统（Database Management System，简称 DBMS）`：是位于用户与操作系统之间的一层数据管理软件
- `数据库管理员（Database Administrator，简称 DBA）`：负责数据库创建、使用、维护的专门人员
- `数据库系统（Database System，简称 DBS）`：数据库系统管理员、数据库管理系统及数据库系统组成的整个单元

## MySQL 管理工具
- 当完成数据库安装之后，MySQL 是以服务的形式运行在 windows/linux 系统，用户是通过 DBMS 工具对 MySQL 进行操作的，当我们安装完成 MySQL 之后默认安装了 `MySQL Commcand Line Client` 此工具是一个命令行形式的工具，通常我们会单独安装可视化的 DBMS 工具
    - SQLyog
    - Navicat
# 日期函数
当我们向日期类型的列添加数据时，可以通过字符串类型赋值（字符串的格式必须为 yyyy-MM-dd hh:mm:ss）

## now() / sysdate() 设置当前系统时间
如果我们想要获取当前系统时间添加到日期类型的列，可以使用 `now()` 或者 `sysdate()`
``` sql
-- 通过字符串类型，给日期类型的列添加数据
insert into stus(stu_num, stu_name, stu_gender, stu_age, stu_tel, stu_qq, stu_desc, stu_enterence )
values('7', '张三', '男', '15', '13032306020', '123336189', '学生详情', '2023-02-28 11:12:13' );

-- 通过 now() 获取当前系统时间
insert into stus(stu_num, stu_name, stu_gender, stu_age, stu_tel, stu_qq, stu_desc, stu_enterence )
values('7', '张三', '男', '15', '13032306020', '123336189', '学生详情', now() );

-- 通过 sysdate() 获取当前系统时间
insert into stus(stu_num, stu_name, stu_gender, stu_age, stu_tel, stu_qq, stu_desc, stu_enterence )
values('8', '张三', '男', '15', '13032206020', '123236189', '学生详情', sysdate() );
```

## 查询当前系统时间
``` sql
select now();
+---------------------+
| now()               |
+---------------------+
| 2023-02-28 14:13:16 |
+---------------------+

select sysdate();
+---------------------+
| sysdate()           |
+---------------------+
| 2023-02-28 14:13:33 |
+---------------------+
```
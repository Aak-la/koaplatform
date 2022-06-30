Select o.name AS tableName, c.name AS columnName, p.[value] AS Description

FROM sysproperties p INNER JOIN

sysobjects o ON o.id = p.id INNER JOIN

syscolumns c ON p.id = c.id AND p.smallid = c.colid

Where (p.name = 'MS_Description') AND (c.name = 'province') AND (o.name = 'ip_address')

orDER BY o.name

选取表ip_address中 字段province的描述

--创建表及描述信息

create table 表(a1 varchar(10),a2 char(2))

--为表添加描述信息

EXECUTE sp_addextendedproperty N'MS_Description', '人员信息表', N'user', N'dbo', N'table', N'表', NULL, NULL

--为表修改描述信息

EXECUTE sp_updateextendedproperty N'MS_Description', '用户', N'user', N'dbo', N'table', N'Administrator', NULL, NULL

--为字段a1添加描述信息

EXECUTE sp_addextendedproperty N'MS_Description', '姓名', N'user', N'dbo', N'table', N'表', N'column', N'a1'

--为字段a2添加描述信息

EXECUTE sp_addextendedproperty N'MS_Description', '性别', N'user', N'dbo', N'table', N'表', N'column', N'a2'

--更新表中列a1的描述属性：

EXEC sp_updateextendedproperty 'MS_Description','字段1','user',dbo,'table','表','column',a1

--删除表中列a1的描述属性：

EXEC sp_dropextendedproperty 'MS_Description','user',dbo,'table','表','column',a1

--删除测试

drop table 表

查看数据库中的存储过程

EXEC sp_helptext N'存储过程名称';

删除存储过程名称

drop PROCEDURE 存储过程名称

创建数据库

　　创建之前判断该数据库是否存在

　　if exists (select * from sysdatabases where name='databaseName') 　

　drop database databaseName 　

　go 　

　Create DATABASE database-name

删除数据库

　　drop database dbname

备份sql server

　　--- 创建 备份数据的 device 　　USE master 　　EXEC sp_addumpdevice 'disk', 'testBack', 'c:\mssql7backup\MyNwind_1.dat' 　

　--- 开始 备份 　　BACKUP DATABASE pubs TO testBack

创建新表

　　create table tabname(col1 type1 [not null] [primary key],col2 type2 [not null],..) 　

　根据已有的表创建新表： 　　A：go 　　use 原数据库名 　　go 　　select * into 目的数据库名.dbo.目的表名 from 原表名(使用旧表创建新表) 　

　B：create table tab_new as select col1,col2… from tab_old definition only

创建序列

　　create sequence SIMON_SEQUENCE 　　minvalue 1 -- 最小值 　　maxvalue 999999999999999999999999999 最大值 　　start with 1 开始值 　　increment by 1 每次加几 　　cache 20;

删除新表

　　drop table tabname

删除主键

alter table +表名 drop constraint +主键名

增加一个列

　　Alter table tabname add column col type 　

alter table COM_Purchase add

SuppContactName nvarchar(50) default '' 列子

　注：列增加后将不能删除。DB2中列加上后数据类型也不能改变，唯一能改变的是增加varchar类型的长度。

修改一个列的属性

alter table tablename alter column 列名 类型 （注意中间都是没有逗号的）

添加主键

　　Alter table tabname add primary key(col) 　

　说明：删除主键： Alter table tabname drop primary key(col)

创建索引

　　create [unique] index idxname on tabname(col….) 　

　删除索引：drop index idxname on tabname 　

　注：索引是不可更改的，想更改必须删除重新建。

创建视图

　　create view viewname as select statement
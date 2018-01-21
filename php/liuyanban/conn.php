<!--留言板-->
<!--功能分析-->
<!--1、发表留言，修改留言，删除留言，留言搜索，留言列表，留言详情，点击率-->
<!--2、留言置顶，评论，点赞，私信-->
<!--3、登陆，注册-->
<!--4、转发，支付-->
<!---->
<!--启动数据库mysql 3306 关系型数据库 表和表的关联 k-v mongodb redis-->
<!--每一个表只能有一个主键（自增） 可以有多个外键-->
<!--Navicat连接数据库-->
<!--数据库->表->列名->值-->
<!--数据库的建立（newblog）-->
<!--列名 数据类型 int char[8] varchar[8] date timestamp blob-->
<!--1：blog表（bid,title,content,time,hits）-->
<!--增insert-->
<!--insert into 表名（列名，列名。。。。）values(值，值。。。。)-->
<!--删delete
delete * from where bid=1
-->
<!--改update
-->
<!--查 select
select * from 表名
select * from 表名 where
-->



<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 16:54
 */


$link=@ mysqli_connect ( 'localhost' ,  'root' ,  ''  ) or die("连接数据库失败");
@mysqli_select_db($link,'newblog')or die("选择数据库失败");
//
mysqli_set_charset($link,'utf8');
?>
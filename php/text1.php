<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/7
 * Time: 16:49
 */
$pass = "123456";
$mpass = md5($pass);
echo $mpass;
//md5(md5($pass)+$salt);比较安全 两层md5加随机字符串
//彩虹表
?>
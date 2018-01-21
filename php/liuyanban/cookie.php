<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/21
 * Time: 17:44
 */
setcookie('uid','');
setcookie('uname','');
if(isset($_COOKIE['uid'])){
   echo $_COOKIE['uname'];
}else{
    echo '没有 cookie';
}
?>
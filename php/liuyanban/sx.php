<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/23
 * Time: 14:41
 */
include "conn.php";
if(isset($_GET['uid'])){
    $rid=$_GET['uid'];
    $sid=$_COOKIE['uid'];
}
if(isset($_POST['sub'])){
    $scon=$_POST['scon'];
    $rid=$_POST['rid'];
    $sid=$_COOKIE['uid'];
    $sql="insert into sx(xid,scon,stime,sid,rid) value(null,'$scon',now(),'$sid','$rid')";
    $query=mysqli_query($link,$sql);
   if($query){
       echo "<script></script>";
   }
}

?>
<form action="sx.php" method="post">
    <input type="hidden" name="rid" value="<?php echo $rid?>">
    <input type="text" name="scon">
    <br>
    <input type="submit" name="sub" value="发送">
</form>

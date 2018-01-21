<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 18:38
 */
include 'conn.php';
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $sql="delete from blog where bid='$id'";
    $query=mysqli_query($link,$sql);
    if($query) {
        header('location:index.php');
    }else{
        echo "<script>alert('删除失败')</script>";
    }
}
?>
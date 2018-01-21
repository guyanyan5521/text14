<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/21
 * Time: 18:24
 */
include "conn.php";
if(isset($_POST['sub'])){
    $cata=$_POST['cata'];
    $sql="select * from catalog where catalog_name='$cata'";
    $query=mysqli_query($link,$sql);
    $rs=mysqli_fetch_array($query);
    if($rs){
        echo "<script>location=catalog_add.php</script>";
    }else{
        $sql="insert into catalog(catalog_id,catalog_name) values(null,'$cata')";
        $query=mysqli_query($link,$sql);
      if( $query){
          echo  "<script>alert('添加成功')</script>";
      }else{
          echo 'error';
      }

    }

}
?>
<meta charset="utf-8">
<form action="catalog_add.php" method="post">
    分类：<input type="text" name="cata">
    <input type="submit" name="sub" value="添加分类">
</form>

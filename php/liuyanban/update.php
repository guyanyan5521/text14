<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 18:46
 */
include "conn.php";
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $sql="select * from blog where bid='$id'";
    $query=mysqli_query($link,$sql);
    $rs=mysqli_fetch_array($query);
}
if(isset($_POST['sub'])){
    $title=$_POST['title'];
    $con = $_POST['con'];
    $id=$_POST['id'];
//    $date= date('y-m-d');

    $sql="update blog set title='$title',content='$con' where bid='$id' ";
    $query= mysqli_query ($link,$sql);
    if($query){
        header("location:index.php");

    }else{
        echo "error";
    }
}

?>
<meta charset="utf-8">
<form action="update.php" method="post">
    <input type="hidden" name="id" value="<?php echo $rs['bid']?>">
标题:<input type="text" name="title" value="<?php echo $rs['title']?>">
    <br>
<textarea cols="30" rows="10" name="con"  ><?php echo $rs['content']?></textarea>
<br>
<input type="submit" name="sub" value="修改">
</form>



<?php
if(isset($_COOKIE['uid'])) {
    $id = $_COOKIE['uid'];
    echo $_COOKIE['uname'] . "已登录";
    echo "<a href='ulogin.php?id=$id'>注销登录</a>";
}
  else{
        echo "<a href='login.php'>未登录</a>";
    }

?>
<style>
    *{
        margin:0;
        padding:0
    }
    #div1{
        float:left;
    }
    #div2{
        float:right;
        margin-top:100px;
        width:200px;
        height:200px;
    }
</style>


<body bgcolor="#ffe4c4">

<a href="add.php">添加文章</a>
<div id="div1">
<form action="index.php" method="post">
    <input type="text" name="sel" value="<?php echo $sel ?>">
    <input type="submit" name="sub" value="搜索">
</form>

<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 18:14
 */
include "conn.php";
//$sql="select * from blog order by bid desc limit 5";
//$query=mysqli_query($link,$sql);//资源类型
////var_dump($rs);
////for($i=0;$i)
//if(isset($_POST['sub'])){
//    $sel=$_POST['sel'];
//
//    $sql="select * from blog where title like '%$sel%'";
//    $query=mysqli_query($link,$sql);//资源类型
//}

//var_dump($rs);
//for($i=0;$i)
if(isset($_POST['sub'])){
    $sel=$_POST['sel'];

    $seacher="title like '%$sel%'";

}
else{
    $seacher=1;
}
$sql="select * from blog,user where  blog.uid=user.uid  and $seacher order by bid desc limit 5 ";
$query=mysqli_query($link,$sql);//资源类型
while($rs=mysqli_fetch_array($query)){
?>




<h3><a href="all.php?id=<?php echo $rs['bid']?>">标题：<?php echo $rs['title'];?></a> |<a href="del.php?id=<?php echo $rs['bid']?>">删除</a>>|<a href="update.php?id=<?php echo $rs['bid']?>">修改</a>></h3>
<li>时间：<?php echo $rs['time'];?></li>
    <li>作者：<?php echo $rs['uname'];?></li>

<p><?php echo  iconv_substr  ($rs['content'],0,3 )."...";?>
<hr>
<?php
}
?>
</div>
<div id="div2">
    <ul>
        <?php
        $sql="select * from catalog ";
        $query=mysqli_query($link,$sql);
        while($rs=mysqli_fetch_array($query)) {
            ?>
            <a><li value="<?php echo $rs['catalog_id']?>"><?php echo $rs['catalog_name']?></li></a>
            <?php
        }
        ?>
    </ul>
</div>
</body>




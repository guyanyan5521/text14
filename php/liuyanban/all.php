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
    $sql="update blog set hits=hits+1 where bid='$id'";
    $query=mysqli_query($link,$sql);
    if($query){
        $sql="select * from blog where bid ='$id'";
        $query=mysqli_query($link,$sql);
        $rs=mysqli_fetch_array($query);

    }
}

?>

<meta charset="utf-8">
<body bgcolor="#ffe4c4">
<a href="index.php">返回列表</a>
<h3>标题：<?php echo $rs['title'];?> </h3>
<li>时间：<?php echo $rs['time']?></li>
<li>访问率：<?php echo $rs['hits']?></li>
<p><?php echo $rs['content']?></p>
<hr>
</body>
<?php
if(isset($_POST['sub'])){
    $pcon=$_POST['pcon'];
    $wid=$_POST['wid'];
    $uid=$_COOKIE['uid'];
    $sql="insert into pl(pid,pcon,ptime,wid,uid) value(null,'$pcon',now(),'$wid','$uid')";
    $query=mysqli_query($link,$sql);
    if($query){
        echo "<script>location='all.php?id=$wid'</script>>";
    }

}
?>
<form action="all.php" method="post">
    <input type="hidden" name="wid" value="<?php echo $rs['bid']?>">
    评论：<textarea name="pcon" id="" cols="30" rows="10"></textarea>
    <input type="submit" name="sub" value="提交评论">
</form>
<?php
$sql="select * from pl,blog where wid=blog.bid";
$query=mysqli_query($link,$sql);
while($rs=mysqli_fetch_array($query)) {


    ?>





    <?php
}
?>

<?php
if(isset($_COOKIE['uid'])){
    $url=$_SERVER['REQUEST_URI'];
    $arr=explode('/',$url);
    $le=count($arr)-1;
    $urlname=$arr[$le];
    echo "<script>location='login.php?url=$urlname'</script>";

}
?>


<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 17:41
 */
include 'conn.php';
if(isset($_POST['sub'])){
    $title=$_POST['title'];
    $con = $_POST['con'];
//    $date= date('y-m-d');
    $lei=$_POST['lei'];


    $sql="insert into blog(bid,title,content,time,catalog_id) values(null,'$title','$con',now(),'$lei')";
    $query= mysqli_query ($link,$sql);//有值为真
    if($query){
        header('location:index.php');


    }else{
        echo '插入失败';
    }
}
?>
<meta charset="UTF-8">
<a href="index.php">返回列表</a>
<form action="add.php" method="post">
    标题:<input type="text" name="title">
    <select name="lei">
        <?php
        $sql="select * from catalog ";
        $query=mysqli_query($link,$sql);

        while($rs=mysqli_fetch_array($query)) {
            ?>
            <option value="<?php echo $rs['catalog_id']?>"><?php echo $rs['catalog_name']?></option>
            <?php
        }
        ?>
    </select>
    <br>
    内容：<textarea cols="30" rows="10" name="con"  ></textarea>
    <br>
    <input type="submit" name="sub" value="添加文章">
</form>

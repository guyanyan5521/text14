<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 15:35
 */
session_start();
?>
<?php
if(isset($_POST['sub'])){
    if($_POST['username']!=null && $_POST['age']!=null) {
        $_SESSION['arr'][] = array($_POST['username'], $_POST['age']);
    }else{
        echo "<script> alert('输入不能为空')</script>>";
    }
}
if(isset($_POST['sub2'])){
   array_pop($_SESSION['arr']);

}
?>
<body bgcolor="aqua">
<h1 style="color:#cccccc" align="center">录入员工信息</h1>
<form align="center" action="text18.php" method="post" >
   <span  display="inline-block"  width="20px"> 名称：</span><input type="text" name="username">
    <br>
   <span width="20px"> 年龄：</span><input type="text" name="age">
    <br>
    <input type='submit' name="sub" value="提交">
</form>
<hr style="color:#cccccc">
<h3 align="center" style="color:#cccccc">员工信息表</h3>
<form align="center" action="text18.php" method="post">
    <table border="1" align="center">
        <tr >
            <th>编号</th>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
        <?php
        if(isset($_SESSION['arr'])) {


            foreach ($_SESSION['arr'] as $k => $v) {


                ?>
                <tr bgcolor="#ffe4c4">
                    <td><?php echo $k + 1; ?></td>
                    <td><?php echo $v[0]; ?></td>
                    <td><?php echo $v[1]; ?></td>
                </tr>
                <?php
            }
        }
        ?>

    </table>
    <input type='submit' name="sub2" value="删除">
</form>
<hr style="color:#cccccc">
</body>


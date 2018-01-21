<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 15:20
 */
$arr = array('2012 Macbook Pro');
if(isset($_POST['sub'])){

}
?>
<meta charset="utf-8">
<h3></h3>
<form action="text17.php" method="post">
    <table border="1" align="center">
        <tr>
            <th>商品顺序</th>
            <th>商品名称</th>

        </tr>
        <?php
        foreach($arr as $k=>$v){



        ?>
        <tr>
            <td>
                <?php echo $k+1; ?>
            </td>
            <td><?php echo $v;?></td>
        </tr>
        <?php
        }?>

    </table>
    <input type='submit' name="zheng" value="正序">
    <input type='submit' name="fan" value="反序">

</form>


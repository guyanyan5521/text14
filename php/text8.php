<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/9
 * Time: 13:43
 */
$str=file_get_contents('./text.txt',true);
echo $str;
?>
<form action="next.php" method="post">
   <input type="submit" name="sub" value="同意注册">

    <input type="submit" name="sub1" value="我不同意注册">
</form>

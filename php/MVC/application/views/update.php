<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/1/11
 * Time: 17:09
 */
?>
<base href="<?php echo site_url(); ?>">

<form action="User/update_user/<?php echo $list -> id?>" method="post">
    修改用户名： <input type="text" name="res" value="<?php echo $list -> username?>">
    <input type="submit" value="修改">

</form>


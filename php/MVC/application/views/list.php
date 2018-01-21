<base href="<?php echo site_url(); ?>">
<ul>

<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/1/11
 * Time: 13:59
 */

foreach ($list as $user){
?>

<li><?php echo $user->id.','.$user->username?>
    <a href="User/del_user/<?php echo  $user -> id?>">删除</a>
    <a href="User/update/<?php echo $user -> id?>">修改</a>
</li>
<?php }?>
</ul>

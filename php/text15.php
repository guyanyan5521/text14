<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 14:50
 */
if(isset($_POST['sub'])){
    array_pop($_POST['1']);

}
?>
<form action="text15.php" method="post">

    <input type='text' name='1'>
    <input type='text' name='2'>
    <input type='text' name='3'>

    <br>
    <input type='submit' name='sub'>
    <input type='reset' name='res'>
</form>

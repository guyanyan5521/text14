
<form action="text10.php" method="post">
   你出拳： <input type="submit" name="sub" value="提交">

    <select name="ysf" onclick="imgchange(this)">
        <option value="石头" <?php echo $ysf=="石头"?"selected":""?>>石头</option >
        <option value="剪刀" <?php echo $ysf=="剪刀"?"selected":""?>>剪刀</option>
        <option value="布" <?php echo $ysf=="布"?"selected":""?>>布</option>
    </select>
    <img src="" alt="" id="img">

</form>
<script>
function imgchange (obj){
   var val = obj.value;
   var img = document.getElementById('img');
   if(val="石头"){
       img.src="";
   }
   if(){

   }
}

</script>
<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/9
 * Time: 14:31
 */
if(isset($_POST['sub'])){
    $ysf = $_POST['ysf'];


}
?>
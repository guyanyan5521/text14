<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/9
 * Time: 16:55
 */
if(isset($_POST['sub'])){
    $sflie=$_FILES['sflie'];
//    var_dump($sflie);
    $arr = explode('.',$sflie['name']);
    $hou=count($arr)-1;
    $newhou = $arr['$hou'];
    $harr=array('exe','txt','rar');
    $flag=true;
    for( $i=0;$i;$i++){

    }
    if($flag==false){
        echo "<script> alert('上传文件非法')</script>";
    }
    else{
        $a=move_uploaded_file($sflie());
    }
}

?>
<meta charset="utf-8">
<h1>文件上传</h1>
<form action="text12.php" method="post" enctype="multipart/form-data">
    <input type="file" name="sflie">
    <input type="submit" name="sub" value="上传">

</form>

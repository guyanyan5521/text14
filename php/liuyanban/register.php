<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/21
 * Time: 16:05
 */
include "conn.php";
if(isset($_POST['sub'])){
    $uname=$_POST['user'];
    $upass=$_POST['password'];
    $sfile=$_FILES['sfile'];
    $sql="select * from user where uname='$uname'";
    $query=mysqli_query($link,$sql);
    $result=mysqli_fetch_array($query);
    if($result){
        echo "<script>alert('重名')</script>";
        echo "<script>location = 'register.php'</script>";

    }else{
        $flag=true;
        $arr=array('%','=','#');
        for($i=0;$i<count($arr);$i++){
            for($j=0;$j<strlen($uname);$j++){
                if($arr[$i]==$uname[$j]){
                    $flag=false;
                 }
            }

        }
        if($flag==false){
            echo "<script>alert('用户名非法')</script>";
            echo "<script>location='register.php'</script>";

        }else{
            $mpass=md5($upass);
            $hou=$sfile['name'];
            $arr=explode('.',$hou);
            $houlength=count($arr)-1;
            $houname=$arr[$houlength];
            $urlname='./upload/'."header".$uname.".".$houname;
            $rs=move_uploaded_file($sfile['tmp_name'],$urlname);
            if($rs){
                $url='./upload/'."header".$uname.".".$houname;
                $sql="insert into user(uid,uname,pass,ulevel,uimg) value(null,'$uname','$mpass',0,'$url')";
                $query=mysqli_query($link,$sql);
                if($query){
                    echo "<script>location = 'login.php'</script>";

                }else{
                    echo "<script>location = 'register.php'</script>";

                }
            }

        }
    }

}
?>
<meta charset="utf-8">
<form action="register.php" method="post"  enctype="multipart/form-data">
    用户名：<input type="text" name="user" >
    <br>
    密码： <input type="password" name="password">
    <br>
    <input type="file" name="sfile">
    <input type="submit" name="sub" value="注册">
    <input type="reset" name="res" value="重置">
</form>

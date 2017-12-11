<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/9
 * Time: 13:31
 */
if(isset($_POST['sub'])){
    $score = $_POST['score'];
    if(!empty($score)){
        if(is_numeric($score)){
            if($score>=0 && $score<=100){
                if($score>=80 && $score<=100){
                    echo "<script> alert('优秀');</script>";
                }
                else if($score>=60 && $score<=80){
                    echo "合格";
                }
                else{
                    echo "不合格";
                }
            }else{
                echo "输入不是范围内的数字";
            }
        }else{
            echo "不能输入数字";
        }
    }else{
        echo "输入不能为空";
    }
}

?>
<meta charset="utf-8">
<body bgcolor="#ccccc" >
<h2>输入分数查询成绩</h2>
<form action="text7.php" method="post">
    <span>分数</span><input type="text" name="score" value="">

    <input type="submit" name="sub" value="提交查询">
    <input type="reset" name="res" value="重置">

</form>


</body>

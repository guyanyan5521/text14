
<h3></h3>
<form action="text9.php" method="post">
   输入行： <input type="text" name="rows">
   输入列: <input type="text" name="cols">
    <input type="submit" name="sub" value="输出表格">

    <input type="submit" name="sub1" value="重置">
</form>

<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/9
 * Time: 14:03
 */
if(isset($_POST['sub'])){
    $rows = $_POST['rows'];
    $cols = $_POST['cols'];
    echo "<table border='1px' width='500px' > ";
    echo "<caption><h3>用户动态输出表格".$rows."行".$cols."列"."</h3></caption>" ;
    for($i=0;$i<$rows;$i++){
        if($i%2==0){
            $color='pink';
        }
        else{
            $color='blue';
        }

        echo "<tr bgcolor='$color'>";
        for($j=0;$j<$cols;$j++){
            echo "<td>";
            echo  $j;
            echo "</td>";
        }
        echo "</tr>";

    }
    echo "</table>";

}
?>
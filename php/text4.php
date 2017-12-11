<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/9
 * Time: 9:33
 */
echo "<table width ='100px' border='1px solid' align='center'>";
for($i=1;$i<10;$i++){
    echo "<tr>";
    for($j=1;$j<=$i;$j++){

        echo "<td>";
        echo $i."*".$j."=".($i*$j);
        echo "</td>";

    }
    echo "</tr>";
}

 ?>
<?php
echo "<table width ='100px' border='1px solid' align='center'>";
for($i=9;$i>0;$i--){
    echo "<tr>";
    for($j=1;$j<=$i;$j++){

        echo "<td>";
        echo $i."*".$j."=".($i*$j);
        echo "</td>";

    }
    echo "</tr>";
}
?>

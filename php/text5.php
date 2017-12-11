<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/9
 * Time: 9:58
 */

echo "<table  border='1px solid' align='center'>";
for($i=1;$i<10;$i++){
    echo "<tr>";
    for($j=1;$j<=9-$i;$j++) {

        echo "<td>" . "&nbsp;" . "</td>";
    }
    for($k=1;$k<=$i;$k++){
        echo "<td>";
        echo $i."*".$k."=".($i*$k);
        echo "</td>";

    }
    echo "</tr>";
}
echo "<br>";
echo "<table  border='1px solid' align='center'>";
for($i=9;$i>0;$i--){
    echo "<tr>";
    for($j=1;$j<=9-$i;$j++) {

        echo "<td>" . "&nbsp;" . "</td>";
    }
    for($k=1;$k<=$i;$k++){
        echo "<td>";
        echo $i."*".$k."=".($i*$k);
        echo "</td>";

    }
    echo "</tr>";
}
?>
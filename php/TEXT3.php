<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/7
 * Time: 19:20
 */
for($i=1;$i<10;$i++){
    for($j=1;$j<=$i;$j++) {
        echo $i . "*" . $j ."=". ($i * $j)."&nbsp;&nbsp;";
    }
    echo "<br>";
}
echo "<br>";
?>
<?php
$i=1;
while($i<10){
    $j=1;
    while($j<=$i){
        echo $i . "*" . $j ."=". ($i * $j)."&nbsp;&nbsp;";
        $j++;
    }
    $i++;
    echo "<br>";
}
?>

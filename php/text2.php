<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/7
 * Time: 17:24
 */

    echo "<table width='1000px' height='80px' border='1px solid #FFFF' align='center'>";
    echo "<caption>隔行变色</caption>";
    for($a = 0 ; $a<100;$a++){
        $color = $a % 2 == 0 ? 'blue' : 'red';
    echo "<tr  bgColor='".$color."'  onmouseover='lrow(this)' onmouseout ='drow(this)'>";
    for($j=0;$j<10;$j++) {
        echo "<td>";
        echo $a;
        echo "</td>";
    }
    echo "</tr>";
    }
    echo"</table>";

?>
<script>
var ys="";
function lrow(obj){
    ys=obj.bgColor;
    obj.bgColor='yellow';

}
function drow(obj){
    obj.bgColor=ys;
}
    </script>

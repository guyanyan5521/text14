<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2017/12/14
 * Time: 14:25
 */
$arr=array();
$str='';
for($i=0;$i<5;$i++){

    $arr[]=rand(0,9);
    $newarr=array_unique($arr);
    if(count($arr)==count($newarr)+1){
        array_pop($arr);
        $i--;
    }

}
for($j=0;$j<count($arr);$j++){
    $str.=$arr[$j]."&nbsp;";
}
echo $str;
echo "<br>";
?>

<?php
$con=0;
while($con<5){
    $arr2[]=rand(0,9);
    $newarr2=array_unique($arr2);
    $con=count($newarr2);
}
for($j=0;$j<$con;$j++){
    $str2.=$newarr2[$j]."&nbsp;";
}
echo $str2;

?>

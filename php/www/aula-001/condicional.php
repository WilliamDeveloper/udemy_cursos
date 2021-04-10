<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 14:48
 */

$valor=41;

if($valor < 40){
    echo "valor abaixo de 40";
}else if($valor == 40){
    echo "valor igual";
}else{
    echo "valor acima de 40";
}

echo "<br>";

$valor= (40 > 50)? "40>50":"40<=50";
echo "$valor";
echo "<br>";

#######################################
# switch
$valor=5;

switch($valor){
    case 0 : $valor="zero"; break;
    case 5 : $valor="cinco"; break;
    case 6 : $valor="seis"; break;
    default: $valor="default"; break;
}
echo "$valor";
echo "<br>";
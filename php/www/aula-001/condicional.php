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
<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 12:18
 */

###############################
#atribuicao
###############################
$nome = "william";
echo "$nome";
echo "<br>";


$valor=0;
echo "$valor";
echo "<br>";

$valor+=100;
echo "$valor";
echo "<br>";

$valor+=25;
echo "$valor";
echo "<br>";

$valor*=-1;
echo "$valor";
echo "<br>";

#contenacao
$nome="william";
$sobrenome="pacheco";
$nomeCompleto=$nome . ' ' . $sobrenome;
echo "$nomeCompleto";
echo "<br>";

###############################
#aritmetico
###############################
$a=10;
$b=2;
$valor=$a+$b;
echo "$valor";
echo "<br>";

$a=10;
$b=2;
$valor=$a-$b;
echo "$valor";
echo "<br>";

$a=10;
$b=2;
$valor=$a*$b;
echo "$valor";
echo "<br>";

$a=10;
$b=2;
$valor=$a/$b;
echo "$valor";
echo "<br>";


###############################
#comparacao
###############################
$a=30;
$b=55;
var_dump($a > $b);
echo "<br>";
$valor=($a > $b)?"true":"false";
echo "=> $valor";
echo "<br>";

$a=30;
$b=55;
var_dump($a > $b);
echo "<br>";
#spaceship  - apartir do php7
$valor=($a <=> $b);
echo "=> $valor";
echo "<br>";

$a=55;
$b=30;
var_dump($a > $b);
echo "<br>";
#spaceship - apartir do php7
$valor=($a <=> $b);
echo "=> $valor";
echo "<br>";

$a=30;
$b=30;
var_dump($a > $b);
echo "<br>";
#spaceship  - apartir do php7
$valor=($a <=> $b);
echo "=> $valor";
echo "<br>";


$a=null;
$b=null;
$c=10;
#coalesce - apartir do php7
$valor=($a ?? $b ?? $c);
echo "=> $valor";
echo "<br>";


###############################
#incremento e decremento
###############################

$a=10;

echo $a++;
echo "<br>";
echo $a;
echo "<br>";

echo ++$a;
echo "<br>";
echo $a;
echo "<br>";

echo $a--;
echo "<br>";
echo $a;
echo "<br>";

echo --$a;
echo "<br>";
echo $a;
echo "<br>";
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
$valor=($a > $b)?true:false;
echo "=> $valor";
echo "<br>";
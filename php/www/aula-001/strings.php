<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 12:56
 */

$nome="william";
$sobreNome="pacheco";
$nomeCompleto= "$nome $sobreNome";
echo "$nomeCompleto";
echo "<br>";

$nome="william";
$sobreNome="pacheco";
$nomeCompleto= "$nome $sobreNome";
echo '$nomeCompleto';
echo "<br>";


$palavra="o rato roeu a roupa do rei de roma";
$palavra2=str_replace("o","0",$palavra);
echo $palavra;
echo "<br>";
echo $palavra2;


$palavra="o rato roeu a roupa do rei de roma";
echo "$palavra";
echo "<br>";

$posicaoRei = strpos($palavra,"rei");
echo "o rei esta na posicao: $posicaoRei";
echo "<br>";
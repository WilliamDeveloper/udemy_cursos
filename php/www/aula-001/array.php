<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 15:35
 */

$lista=array("laranja","abacaxi");
echo $lista['0'];
echo "<br>";

$lista=array(
    array("laranja","abacaxi"),
    array("laranja","abacaxi")
);

echo $lista['0']['0'];
echo "<br>";

echo $lista['0']['1'];
echo "<br>";

echo $lista[1][0];
echo "<br>";

echo $lista[1][1];
echo "<br>";
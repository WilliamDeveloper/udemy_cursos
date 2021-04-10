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


######
$pessoas = array();

array_push($pessoas, array(
    "nome" => "william",
    "idade" => 18,
));
array_push($pessoas, array(
    "nome" => "william2 com ÂcÊnTÃO",
    "idade" => 19,
));

$obj_json = json_encode($pessoas);
echo $obj_json;
echo "<br>";

$json='[{"nome":"william","idade":18},{"nome":"william2 com \u00c2c\u00canT\u00c3O","idade":19}]';
$arrayJson = json_decode($json,true);
var_dump($arrayJson);
echo "<br>";
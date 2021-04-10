<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 14:24
 */

// eh como se ele pegasse o conteudo do arquivo e botasse no lugar no include
//include "inc/funcoes.php";

//require "inc/funcoes.php";
require_once "inc/funcoes.php";

$resultado=somar(10,20);
echo "$resultado";
echo "<br>";


$resultado=ola();
echo "$resultado";
echo "<br>";

$resultado=ola("blau");
echo "$resultado";
echo "<br>";
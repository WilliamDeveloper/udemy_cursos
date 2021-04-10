<?php

//comentario de 1 linha

/*
 *
 *
 *  */


###################################################
# constantes
###################################################

define("SERVIDOR","will");
echo SERVIDOR;
echo "<br>";
echo "<br>";

define("SERVIDOR_CONFIG",[
    "pimba",
    "blau",
    "picachu"
]);
echo SERVIDOR_CONFIG[0];
echo "<br>";

echo SERVIDOR_CONFIG[1];
echo "<br>";

echo SERVIDOR_CONFIG[2];
echo "<br>";
echo "<br>";


echo PHP_VERSION;
echo "<br>";
echo "<br>";

echo DIRECTORY_SEPARATOR;
echo "<br>";
echo "<br>";

print_r(SERVIDOR_CONFIG);
echo "<br>";
echo "<br>";
###################################################
# variaveis
###################################################

    $nome="william";
    $sobrenome="pacheco";

    # concatenando
    $nomeCompleto=$nome . ' ' . $sobrenome;
    $idade=18;
    $verdade=true;
    $valor=45.33;

    echo "meu  primeiro codigo php <strong> hello<strong> world";
    echo "<br>";

    echo $nomeCompleto;
    echo "<br>    $nome $idade $verdade $valor";

    unset($valor);

    if ( isset($valor) ){
        echo $valor;
        echo "<br>";
    }

    echo "<br>";
    $lista = array("banana", "laranja");
    echo $lista[1];
    echo "<br>";

    $nascimento = new DateTime();
    var_dump($nascimento);
    echo "<br>";

    $arquivo= fopen("variaveis.php","r");
    var_dump($arquivo);
    echo "<br>";

    $pimba= NULL;
    var_dump($pimba);
    echo "<br>";

    exit;



?>
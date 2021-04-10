<?php

//comentario de 1 linha

/*
 *
 *
 *  */

    $nome="william";
    $sobrenome="pacheco";
    $nomeCompleto=$nome . ' ' . $sobrenome;
    $idade=18;
    $verdade=true;
    $valor=45.33;

    echo "meu  primeiro codigo php <strong> hello<strong> world";
    echo "";
    echo $nomeCompleto;

    echo "<br>    $nome $idade $verdade $valor";
    unset($valor);

    if ( isset($valor) ){
        echo $valor;
    }

    $lista = array("banana", "laranja");
    echo $lista[1];

    $nascimento = new DateTime();
    var_dump($nascimento);

    $arquivo= fopen("index.php","r");
    var_dump($arquivo);

    $pimba= NULL;
    var_dump($pimba);
    exit;


?>
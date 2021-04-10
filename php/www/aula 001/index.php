<?php

    $nome="william";
    $sobrenome="pacheco";
    $nomeCompleto=$nome . ' ' . $sobrenome;
    $idade=18;
    $verdade=true;
    $valor=45.33;

    echo "meu  primeiro codigo php <strong> hello<strong> world";
    echo "";
    echo $nomeCompleto;
    //comentario de 1 linha

    /*
     *
     *
     *  */
    echo "<br>    $nome $idade $verdade $valor";
    unset($valor);

    if ( isset($valor) ){
        echo $valor;
    }



?>
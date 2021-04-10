<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 12:12
 */
$nome='william';

function teste(){
    # como a variavel nome nao existe dentro desse escopo
    # o global serve para pegar uma variavel existente
    # e criar uma ligacao direta da funcao com a variavel
    global $nome;
    echo "daaijsuhdsaudhasuh $nome";
}
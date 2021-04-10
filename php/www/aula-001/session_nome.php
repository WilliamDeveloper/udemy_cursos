<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 17:01
 */


session_start();
#$_SESSION['nome']='william';

//session_unset($_SESSION['nome']);
//session_destroy();


echo 'pimba '. $_SESSION['nome'] ;
echo 'session_id '. session_id() ;

echo "<br>";
session_regenerate_id();
echo 'session_id '. session_id() ;

var_dump($_SESSION);

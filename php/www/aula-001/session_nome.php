<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 17:01
 */


session_start();
$_SESSION['nome']='william';

echo 'pimba '. $_SESSION['nome'] ;

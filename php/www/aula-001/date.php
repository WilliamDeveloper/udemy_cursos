<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 18:21
 */


setlocale(LC_ALL,"pt_BR","pt_BR.utf-8", "portuguese");
echo strftime("%A %B");

echo "<br>";
echo date('d/m/Y H:i:s');
echo "<br>";
echo time();
echo "<br>";
echo date('d/m/Y H:i:s',1618089768);
echo "<br>";

$timestamp=strtotime("now");
echo date('d/m/Y H:i:s',$timestamp);
echo "<br>";

$timestamp=strtotime("+30 day");
echo date('d/m/Y H:i:s',$timestamp);
echo "<br>";


$dt=new DateTime();
echo $dt->format('d/m/Y H:i:s');
echo "<br>";

$periodo= new DateInterval("P15D");
$dt->add($periodo);
echo $dt->format('d/m/Y H:i:s');
echo "<br>";
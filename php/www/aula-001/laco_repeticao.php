<?php
/**
 * Created by IntelliJ IDEA.
 * User: willi
 * Date: 10/04/2021
 * Time: 15:01
 */

##################################
# for
##################################

for($i= 0; $i < 10; $i++){
    echo "$i <br>";
}
echo "<br>";

for($i= 0; $i < 1000; $i+=5){
    echo "$i <br>";
}
echo "<br>";

for($i= 0; $i < 1000; $i+=5){

    if($i> 200 && $i<800) continue;

    if($i === 900) break;

    echo "$i <br>";

}
echo "<br>";



echo "<select>";
for($i= date('Y'); $i >= date('Y')-100; --$i){
    echo '<option value="'.$i.'">'.$i.'</option>';
}
echo "</select>";
echo "<br>";

##################################
# foreach
##################################

$lista = array("pera","banana", "tomate", "cebola");
foreach ($lista as $key => $value){
    echo "$key $value";
    echo "<br>";
}


##################################
# while / dowhile
##################################

$valor=false;
$cont=0;
while($valor){
    if($cont++ == 2){
        break;
    }
}
echo "$cont <br>";


$valor=false;
$cont=0;
do{
    if($cont++ == 2){
        break;
    }
}while($valor);
echo "$cont <br>";

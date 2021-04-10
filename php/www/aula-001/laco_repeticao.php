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

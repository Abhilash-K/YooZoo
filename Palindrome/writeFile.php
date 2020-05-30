<?php
if(!empty($_POST['data'])){
$data = $_POST['data'];
$fname = $_POST['fileName'];;//generates random name

$file = fopen($fname, 'w');//creates new file
fwrite($file, $data);
fclose($file);
}
?>
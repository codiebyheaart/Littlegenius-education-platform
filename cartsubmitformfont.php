<?php
session_start();

 // header('Location: login.php');
    //exit();
?>
<?php
include('dbcon.php');
$price= $_POST['price'];
$qty= $_POST['qty'];
$size= $_POST['size'];
$color= $_POST['color'];
if($color == "")
{
	
$color ="White";	
	
}
$id_product= $_POST['id_product'];
$umconrefid=$_SESSION["userrefid"];
$mysqli->query("INSERT INTO `umusercart`(`umtcmsconrefid`,`umuserrefid` ,`price`,`qty`,`size`,`colors`) VALUES ('$id_product','$umconrefid', '$price','$qty', '$size', '$color')");

header("location:cart.php");

?>
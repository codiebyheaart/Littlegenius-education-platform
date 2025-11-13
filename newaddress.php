<?php
// Start the session
session_start();
?>


<?php
include('dbcon.php');
$userloginrefid= $_SESSION["userrefid"];
$country= $_POST['country'];
$fullname= $_POST['fullname'];
$mobileno= $_POST['mobileno'];
$pincode= $_POST['pincode'];
$streetaddress= $_POST['streetaddress'];

$fulladdress = $streetaddress ;
$city= $_POST['city'];
$state= $_POST['state'];


$mysqli->query("INSERT INTO `useraddress`(`userloginrefid`, `country`, `userfullname`, `mobileno`, `pincode`, `streetaddress`, `city`, `state`) VALUES ('$userloginrefid' , '$country' ,'$fullname', '$mobileno' ,'$pincode' ,'$fulladdress' ,'$city' ,'$state')")or die(mysqli_error());
 
echo "<script>alert('successfully Added!'); window.location='viewaddress.php'</script>";
		
?>
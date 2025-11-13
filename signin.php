<?php
// Start the session
session_start();
?>


<?php
include('dbcon.php');
$unm= $_POST['email'];
$pass= $_POST['password'];


$rs=$mysqli->query("SELECT * FROM userlogin WHERE username ='$unm' AND password ='$pass' ");
$rows = $rs->num_rows;	 
if ($rows > 0){
	while($row = $rs->fetch_assoc()) {
	$_SESSION["userrefid"] =$row['userrefid'] ;
	$_SESSION["Username"] =$row['firstname'] ;
	$_SESSION["Registry_id"] =$row['username'] ;
	
//echo "<script>alert('$_SESSION["userrefid"]');</script>";
echo "Favorite color is " . $_SESSION["userrefid"] . ".<br>";
	header("location:index.php");
	}
}
else{
	
	header("location:login.php");
	
	
}			
?>
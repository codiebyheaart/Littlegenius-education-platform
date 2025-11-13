<?php
//including the database connection file
include("config.php");

//getting id of the data from url
$get_delete_id=$_REQUEST["id"];
echo $get_delete_id;
//deleting the row from table
$result = mysqli_query($mysqli, "DELETE FROM header_subjects WHERE id in ($get_delete_id)");

//redirecting to the display page (index.php in our case)
echo "delete successfully";
?>


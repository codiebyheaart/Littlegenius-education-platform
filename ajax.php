<?php

  include_once("config.php");
  $get_id=$_REQUEST["id"];
  $result = mysqli_query($mysqli, "SELECT * FROM `class_subfolder` where cat_id= $get_id"); // using mysqli_query instead
  $key;
  $value;
  $subarray = array();
  $test = "<option>Please Select</option>";
	while($res = mysqli_fetch_array($result)) { 
    $key= $res['refid'];
	$value = $res['sub_cat_name'];
//	echo "<option value=".$key .">".$value . "</option>";
    $subvale="<option value=".$key .">".$value . "</option>";
    $subarray[] =$subvale;
	$test = $test.$subvale;
		}
	//	 echo "Study PHP at " . $value . "<br>";
	//	echo "<option value=".$key;">".$value"</option>"
 //   $results = print_r($subarray);  
  
	echo $test; 
	// echo "Study PHP at " . $subarray[] . "<br>";
	 
	 
?>
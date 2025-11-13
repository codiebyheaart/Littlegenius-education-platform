<?php
include_once("config.php"); 
$class_name = $_POST['class_name'];
$class_id  =  $_POST['class_id'];
$result = mysqli_query($mysqli, "UPDATE  `new_classs` SET  `header`='$class_name'  WHERE `classid` = $class_id" );


//echo $class_id;

if(isset($_POST['Submit']))
{
	//echo "hiiii";
	$count=count($_POST["subject_id"]);
	
for($i=0;$i<$count;$i++){
$sql1="UPDATE class_subfolder SET sub_cat_name='" . $_POST['name'][$i] ."' WHERE refid='" . $_POST['subject_id'][$i] . "'";
$result1=mysqli_query($mysqli, $sql1);
//$name = $_POST['name'][$i];
//echo $name;
//echo $_POST['id'][$i];

}
}


echo "<br/><a href='addclass.php'>Update Successfully Please Click togo</a>";






?>
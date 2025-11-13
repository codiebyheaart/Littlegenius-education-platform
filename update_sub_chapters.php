<?php
include_once("config.php"); 
$class_name = $_POST['class_name'];
$class_id  =  $_POST['class_id'];
if(isset($_POST['Submit']))
{
	//echo "hiiii";
	$count=count($_POST["subject_id"]);
	
for($i=0;$i<$count;$i++){
$sql1="UPDATE subject_chapter SET chaptername='" . $_POST['name'][$i] ."' WHERE chapterrefid='" . $_POST['subject_id'][$i] . "'";
$result1=mysqli_query($mysqli, $sql1);
//$name = $_POST['name'][$i];
//echo $name;
//echo $_POST['id'][$i];

}
}


echo "<br/><a href='edit_subject_chapter.php?id=$class_id'>Update Successfully Please Click togo</a>";






?>
<?php
include_once("config.php"); 
$subject_id = $_POST['subject_id'];

if(isset($_POST['Submit']))
{

$count=count($_POST["subject"]);
	
for($i=0;$i<$count;$i++){

$sub_name =$_POST['subject'][$i] ;

if(!empty($sub_name)){
$result = mysqli_query($mysqli, "INSERT INTO `subject_chapter` (`chapterrefid`, `chaptername`, `subject_id`) VALUES (NULL, '$sub_name', '$subject_id')");
}

}
}


echo "<br/><a href='add_product_class.php'>Record Successfully Added Please add video into chapter</a>";






?>
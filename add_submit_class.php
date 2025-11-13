<?php
include_once("config.php"); 

//echo $class_id ;
//echo $_POST["subject"];
if(isset($_POST['Submit']))
{
$class_name = $_POST['class_name'];
//echo $class_name;
//$class_id  =  $_POST['class_id'];
$result = mysqli_query($mysqli, "INSERT INTO `new_classs` (`classid`, `cat_name`, `header`, `sub`) VALUES (NULL, '$class_name', '$class_name', '$class_name')");
$class_id ;
$sql="SELECT classid FROM new_classs where header='$class_name'";
if($result = $mysqli->query($sql)){
												// output data of each row
while($row = $result->fetch_assoc()) 
{	

$class_id =$row['classid'];

}
} 
//	echo "hiiii";
	$count=count($_POST["subject"]);
	
for($i=0;$i<$count;$i++){
//$sql1="UPDATE class_subfolder SET sub_cat_name='" . $_POST['name'][$i] ."' WHERE refid='" . $_POST['subject_id'][$i] . "'";
//$result1=mysqli_query($mysqli, $sql1);
//$name = $_POST['name'][$i];

//echo $_FILES['image']['name'][$i];

$imageName =$_FILES['image']['name'][$i];
//echo $imageName;
//$imageData = mysqli_real_escape_string($mysqli, file_get_contents($_FILES['image'][$i]['tmp_name']));
//echo $_POST['subject'][$i];
//move_uploaded_file($_FILES['image']['tmp_name'],'../littlegenius/sub_class_imag/'.$_FILES['image']['name']);


foreach($_FILES["image"]["tmp_name"] as $key=>$tmp_name) {
    $file_name=$_FILES["image"]["name"][$key];
    $file_tmp=$_FILES["image"]["tmp_name"][$key];
    $ext=pathinfo($file_name,PATHINFO_EXTENSION);

    
        if(!file_exists("../littlegenius/sub_class_imag/".$file_name)) {
            move_uploaded_file($file_tmp=$_FILES["image"]["tmp_name"][$key],"../littlegenius/sub_class_imag/".$file_name);
        }
        else {
            $filename=basename($file_name,$ext);
            $newFileName=$filename.time().".".$ext;
            move_uploaded_file($file_tmp=$_FILES["image"]["tmp_name"][$key],"../littlegenius/sub_class_imag/".$newFileName);
        }
  
   
}


if(!empty($imageName)){
		$path="sub_class_imag/".$imageName;
		$sub_name =$_POST['subject'][$i] ;
		$result = mysqli_query($mysqli, "INSERT INTO `class_subfolder` (`refid`, `cat_id`, `sub_cat_name`, `sub_images`) VALUES (NULL, '$class_id', '$sub_name', '$path')");
	//	echo $path;
}

}
}


echo "<br/><a href='add_chapter_to_subject.php'>Add Chapter to Subject</a>";






?>
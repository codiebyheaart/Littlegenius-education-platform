<?php
//including the database connection file
include_once("config.php");

if(isset($_POST['Submit'])) {	
	// $pname = mysqli_real_escape_string($mysqli, $_POST['pname']);
	 $pcat = mysqli_real_escape_string($mysqli, $_POST['pcat']);
	
//	$getclassid =$pcat;
	//	echo $pcat;
	$main_subject =$_POST['main_subject'] ;
	//	echo $main_subject ;
	
	$count=count($_POST["pname"]);
	
for($i=0;$i<$count;$i++){
$imageName =$_FILES['fileUpload']['name'][$i];
	//	echo $imageName;
		//$imageData = mysqli_real_escape_string($mysqli, file_get_contents($_FILES['image'][$i]['tmp_name']));
	//	echo $_POST['pname'][$i];
		//move_uploaded_file($_FILES['image']['tmp_name'],'../littlegenius/sub_class_imag/'.$_FILES['image']['name']);

		$pname = $_POST['pname'][$i];
		foreach($_FILES["fileUpload"]["tmp_name"] as $key=>$tmp_name) {
			$file_name=$_FILES["fileUpload"]["name"][$key];
			$file_tmp=$_FILES["fileUpload"]["tmp_name"][$key];
			$ext=pathinfo($file_name,PATHINFO_EXTENSION);

			
				if(!file_exists("upload/".$file_name)) {
				 //  move_uploaded_file($_FILES['fileUpload']['tmp_name'],'upload/'.$_FILES['fileUpload']['name']);
				    move_uploaded_file($file_tmp=$_FILES["fileUpload"]["tmp_name"][$key],"upload/".$file_name);
				}
				else {
					$filename=basename($file_name,$ext);
					$newFileName=$filename.time().".".$ext;
				  // move_uploaded_file($_FILES['fileUpload']['tmp_name'],'upload/'.$_FILES['fileUpload']['name']);
				    move_uploaded_file($file_tmp=$_FILES["fileUpload"]["tmp_name"][$key],"upload/".$file_name);
				}
		  
		   
						}

			$path="upload/".$imageName;
			if(!empty($pname)){
			$result = mysqli_query($mysqli, "INSERT INTO `header_subjects` (`id`, `product_name`, `chapter_id`, `product_img_path`) VALUES (NULL, '$pname', '$pcat', '$path')");
			}


	
	//	move_uploaded_file($_FILES['image']['tmp_name'],'upload/'.$_FILES['image']['name']);
		
		
		
		if($main_subject != '001'){
			if(!empty($pname)){
	//	echo "hiii i am mainsubject";	
		$result = mysqli_query($mysqli, "INSERT INTO `product_image` (`id`, `product_name`, `cat_id`, `product_img_path`) VALUES (NULL, '$pname', '$main_subject', '$path')");	
				}	
				}
		
	}	
		
		//display success message
		echo "<font color='green'>Data added successfully.";
		echo "<br/><a href='view_class_video.php'>View Result</a>";
	
}
?>

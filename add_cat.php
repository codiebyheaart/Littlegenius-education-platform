<?php
//including the database connection file
include_once("config.php");

if(isset($_POST['Submit'])) {	
	 $catname = mysqli_real_escape_string($mysqli, $_POST['catname']);
	 $imageName =$_FILES['image']['name'];
	// checking empty fields
	if(empty($catname) ) {
				
		if(empty($catname)) {
			echo "<font color='red'>Name field is empty.</font><br/>";
		}
		
		 
		echo "<br/><a href='javascript:self.history.back();'>Go Back</a>";
	} else { 
		 
		 move_uploaded_file($_FILES['image']['tmp_name'],'../littlegenius/cat_img/'.$_FILES['image']['name']);
		
		$path="cat_img/".$imageName;
		$result = mysqli_query($mysqli, "INSERT INTO `product_cat` (`id`, `cat_name` , `cat_image_name`) VALUES (NULL, '$catname' ,'$path')");
		 
		echo "<font color='green'>Data added successfully.";
		echo "<br/><a href='view_category.php'>View Result</a>";
	}
}
?>

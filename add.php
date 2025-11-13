<html>
<head>
	<title>Add Data</title>
</head>

<body>
<?php
//including the database connection file
include_once("config.php");

if(isset($_POST['Submit'])) {	
	
	$pcat = mysqli_real_escape_string($mysqli, $_POST['pcat']);
	$count=count($_POST["pname"]);	 
	// checking empty fields
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
		$result = mysqli_query($mysqli, "INSERT INTO `product_image` (`id`, `product_name`, `cat_id`, `product_img_path`) VALUES (NULL, '$pname', '$pcat', '$path')");
		}
		//display success message
		
	}
		echo "<font color='green'>Data added successfully.";
		echo "<br/><a href='view_products.php'>View Result</a>";
}
?>
</body>
</html>

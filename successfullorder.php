<?php
session_start();

 // header('Location: login.php');
    //exit();
?>
<?php
 // session_start();
if(isset($_SESSION['userrefid']))
 {
      // session has NOT been started
    
 //$value = "";
$value = $_SESSION["userrefid"];

$ip=$_REQUEST['authtoken'];
	$iparr = explode("-", $ip); 
	 
	 
 if($iparr[0] == "eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH")  
 {}else {
	 
	 echo "<script>window.location='index.php'</script>";
	 
 } 
//echo "Favorite color is " . $value . ".<br>";
 }
 else
 {
	echo "<script>window.location='index.php'</script>";
//	$value = "";  
   //  echo "Session is started";
      // session has been started
  }
?>

<!DOCTYPE html>
 
<html lang="en">
<head>
    <!-- Metas -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rosa</title>
    <meta name="description" content="Rosa is Responsive eCommerce Template">
    
    <!-- External CSS -->
    <link rel="stylesheet" href="css\bootstrap.min.css">
    <link rel="stylesheet" href="css\font-awesome.min.css">
    <link rel="stylesheet" href="css\owl.carousel.min.css">
    <link rel="stylesheet" href="css\owl.theme.default.min.css">
    <link rel="stylesheet" href="css\jquery-ui.min.css">
    <link rel="stylesheet" href="css\jquery.fancybox.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css\style.css">
    <link rel="stylesheet" href="css\responsive.css">
    
    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,700%7cPathway+Gothic+One" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" href="img\icon\favicon.ico">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/icon-114x114.png">
	<script src="secure.js"></script>
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
	<script>
	function submitvalue(){
	
  window.location.href = "index.php";
	}
	</script>
	
	<style> 
#example1 {
  border: 1px solid;
  padding: 10px;
  
}


</style>
</head>
<body>
   

     <!--------------- Header --------------->
   <?php include('header.php'); ?>
    
    <!--------------- Primary navigation --------------->
        <?php include('header_nav.php'); ?>
    <!--------------- Primary navigation --------------->
    
  
    
    <!--------------- Main wrap --------------->
    <div class="main-wrap">
        <div class="container">
            
           
           <div class="row">
               
                
                <div class="col-lg-9 col-sm-8">
                    
                    <!--------------- Main Product Widget --------------->
                    <div class="article-wrap">
                        <div class="row">
						<p></p>
						<div class="col-md-10"  id="example1">
                                <article class="post">
                                    
                                   
                                    
                                    <div class="article-content">
									</br>
									<div align="center">
									<h1 style ="color:red;">CONGRATULATIONS</h1>
									<p></p>
										
										</br>
										 
										 <p>"your order has been placed"</p>
										</br>
										</br>
									</div>
                                        
										<button type="submit" class="btn btn-default" onclick="submitvalue();">Continue</button>
                                    </div>
                                </article>
                         </div>
                            
                           
                            
                        </div>
                    </div>    
                                        
                </div>
            </div>
            
            <!-------------- Our brands --------------->
           
        </div>
    </div>
    
   <br>
    <?php include('footer.php') ?>
    <!--------------- Back to Top --------------->
     
    <!--------------- Javascript external files -------------->
    <script src="js\jquery.min.js"></script>
    <script src="js\bootstrap.min.js"></script>
    <script src="js\owl.carousel.min.js"></script>
    <script src="js\jquery.countdown.js"></script>
    <script src="js\jquery-ui.min.js"></script>
    <script src="js\jquery.fancybox.js"></script>
    <script src="js\jquery.elevatezoom.js"></script>
    <script src="js\visible.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmiJjq5DIg_K9fv6RE72OY__p9jz0YTMI"></script>
   <script src="js\map.js"></script>
    <script src="js\custom.js"></script>
</body>
</html>
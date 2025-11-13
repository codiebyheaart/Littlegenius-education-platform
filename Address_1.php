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
	
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
</head>
<body>
   

    
    <!--------------- Primary navigation --------------->
    
  
    
    <!--------------- Main wrap --------------->
    <div class="main-wrap static-page">
        <div class="container">
            
           
            <div class="row">
			
                <div class="display-flex" style="margin-bottom: 15px">
				
				 <div class="col-lg-4 mx-auto">
				 </div>
                    <div class="col-lg-5 mx-auto">
					<h4 class="page-title">Add a new address</h4>
                        <form id="registerForm" class="basicfields account-form" action="newaddress.php" method="post">
                            <h5>Country/Region</h5>
                            
                            <input type="text" name="country" placeholder="country">
							<h5>Full name</h5>
                            
                         
                            <input type="text" name="fullname" placeholder="Full name">
							<h5>Mobile no</h5>
                            
                            <input type="number" name="mobileno" placeholder="10-digit mobile no">
							<h5>Pincode</h5>
                            
                            <input type="number" name="pincode" placeholder="6 digits[0-9] pincode">
							<h5>Street Address</h5>
                            
                            <input type="text" name="streetaddress" placeholder="Flat /House.no/Floor">
						
							<h5>City</h5>
							<input type="text" name="city" placeholder="City">
							<h5>State</h5>
							<input type="text" name="state" placeholder="State">
                            <button type="submit" name="signup" class="btn btn-default pos-absolute">Add address</button>
                        </form>
                    </div>
                    
                </div>
            </div>
            
            <!-------------- Our brands --------------->
           
        </div>
    </div>
    
   
    
    <!--------------- Back to Top --------------->
    <a id="toTop" class="toTop" href="#header"><i class="fa fa-angle-up"></i></a>
    
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
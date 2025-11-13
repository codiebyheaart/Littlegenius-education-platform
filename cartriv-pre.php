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
    <title>Rosa - Responsive Ecommerce Template</title>
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
	
	<script>
	
$(document).ready(function(){
 event.preventDefault();
           parent.$.fancybox.close(); 
});
	
	function pricechange(){
		
	var price = document.getElementById("price").innerHTML;
	var qty = document.getElementById("qty").value;	
	console.log("pricepriceprice is>>>"+price);
	var pricetotal = price * qty;
	console.log("qty is>>>"+pricetotal);
	document.getElementById("totalprice").innerHTML ="₹"+pricetotal;
	document.getElementById("totalprice1").innerHTML = "₹"+pricetotal;
	document.getElementById("totalprice2").innerHTML = "₹"+pricetotal;	
		
	}
	
	function onLoadShow(){
	//console.log("hello open ");
//	location.reload(true);
//event.preventDefault();
// parent.$.fancybox.close(); 
 
	var price = document.getElementById("price").innerHTML;
	var qty = document.getElementById("qty").value;	
	
	var pricetotal = price * qty;
	document.getElementById("totalprice1").innerHTML = "₹"+pricetotal;
	document.getElementById("totalprice2").innerHTML = "₹"+pricetotal;
}
	</script>
	
</head>
<body onload="onLoadShow()">
   
    <!--------------- Header --------------->
    <?php include('header.php'); ?>
    
    <!--------------- Primary navigation --------------->
        <?php include('header_nav.php'); ?>
    
    <!--------------- Breadcumb --------------->
    <div class="breadcrumb-wrap"> 
        <div class="container">
            <a class="breadcrumb-link" href="index.php" title="Return to Home">Home</a><i class="breadcrumb-arrow fa fa-angle-right"></i><span class="breadcrumb-current">Your shopping cart</span>
        </div>
    </div>
    
    <!--------------- Main wrap --------------->
    <div class="main-wrap static-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-heading">
                        <h4 class="page-title">Shopping-cart Summary</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <ul class="cart-steps" id="summary_li">
                        <li id ="Summary" class="cart-step current">01. Summary</li>
						<li id ="Summary" class="cart-step account">02. Sign in</li> 
                        <li id ="Address" class="cart-step address ">02. Address</li>
                        <li id ="Shipping" class="cart-step shipping">03. Shipping</li>
                        <li id ="Payment" class="cart-step payment">04. Payment</li>
                    </ul>
					
                </div>
				
            </div>
            <div class="row">
                <div class="col-md-12" id= "product_details">
                    <table id="cart_summary" class="cart_summery">
                        <tr>
                            <th class="cart_product">Product</th>
                            <th class="cart_description">Description</th>
                            <th class="cart_avail">Availability</th>
                            <th class="cart_unit_price">Unit price</th>
                            <th class="cart_quantity">Qty</th>
                            <th class="cart_delete">&nbsp;</th>
                            <th class="cart_total">Total</th>
                        </tr>
						<?php
									include('dbcon.php');
									$ip=$_REQUEST['id'];
									 $iparr = explode("-", $ip); 
									 $id=$iparr[1];
									$color ="White";
									$userloginrefid= $_SESSION["userrefid"];
									
									
									 	$sql = "SELECT `productimg` , contitle , size ,MRP FROM `umcart` left JOIN cmscon on umcart.umconrefid = cmscon.conrefid 
LEFT JOIN cmspsd on cmscon.cmscavconrefid = cmspsd.psdconrefid WHERE `umconrefid`=$id";
										//	$result = $mysqli->query($sql);

											if($result = $mysqli->query($sql)){
												// output data of each row
												while($row = $result->fetch_assoc()) {
												
													
													?>
                        <tr>
                            <td class="cart_product_content"><img src="img\tproduct\<?php echo $row['productimg']; ?>" alt="Product on cart"></td>
                            <td class="cart_desc_content">
                                <h5><?php echo $row['contitle']; ?></h5>
                              
                                <p class="cart_size">Size: <?php echo $sid=$row['size']; ?></p>
                                <p class="cart_color">Color: <?php echo $color; ?></p>
                            </td>
                            <td class="cart_avail_content"><span class="availability-status label label-success">In stock</span></td>
                            <td class="cart_unit_price_content"><span class="price" ><p class="price" id="price"><?php echo $row['MRP']; ?></p></span></td>
                            <td class="cart_quantity_content" ><input type="number" min="1" value="1" id="qty" onchange= "pricechange()"></td>
                            <td class="cart_delete_item"><a href="#" class="deleteItem"><i class="fa fa-trash"></i></a></td>
                            <td class="cart_total_item_price" id ="totalprice"><span class="price">₹<?php echo $row['MRP']; ?></span></td>
                        </tr>
						<?php
// Start the session
					
					
					
												}}
					else {
						 
						 
						 }
							?>
                       
                        <tr class="cart_total_price">
                            <td rowspan="3" colspan="2" id="cart_voucher" class="cart_voucher"></td>
                            <td colspan="4" class="text-right">Total products</td>
                            <td class="price" id="total_product"><span class="price" id="totalprice1">₹</span></td>
                        </tr>
                        <tr class="cart_total_delivery">
                            <td colspan="4" class="text-right">Total shipping</td>
                            <td class="price" id="total_shipping">Free</td>
                        </tr>
                        <tr class="cart_total_end_price">
                            <td colspan="4" class="total_price_container text-right"> <span>Total</span></td>
                            <td class="price" id="total_price_container"> 
                                <span class="total_price price" id="totalprice2">₹</span>
                            </td>
                        </tr>
                    </table>
                </div>
				
				
				
                <div class="next-wrap">
                    <div class="col-sm-6">
                        <a href="index.php" class="btn btn-default"><i class="fa fa-angle-left"></i> Continue shopping</a>
                    </div>
                    <div class="col-sm-6 text-right">
                        <a href="signin_address.php" class="btn btn-default" id="checkout_1" onclick = "nextAddress()">Process to checkout <i class="fa fa-angle-right"></i></a>
						
                    </div>
                </div>
            </div>
            
            <!-------------- Our brands --------------->
            <div class="row">
                <div class="col-md-12">
                    <div class="module brand-widget">
                        <h4 class="module-title"><i class="fa fa-globe" aria-hidden="true"></i>Our brands</h4>
                        <div class="module-content">
                            <div id="brand-carousel" class="brand-carousel owl-carousel">
                                 <a class="brand" href="#"><img src="img\brand\test1.jpg" alt="brand logo"></a>
                                <a class="brand" href="#"><img src="img\brand\test2.jpg" alt="brand logo"></a>
                                <a class="brand" href="#"><img src="img\brand\test3.jpg" alt="brand logo"></a>
                                <a class="brand" href="#"><img src="img\brand\test4.jpg" alt="brand logo"></a>
                                <a class="brand" href="#"><img src="img\brand\test5.jpg" alt="brand logo"></a>
                                <a class="brand" href="#"><img src="img\brand\test1.jpg" alt="brand logo"></a>
                                <a class="brand" href="#"><img src="img\brand\test2.jpg" alt="brand logo"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-------------- Footer --------------->
   <?php include('footer.php') ?>
    
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
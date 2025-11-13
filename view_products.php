<?php
include_once("config.php");
$result = mysqli_query($mysqli, "SELECT * FROM product_image ORDER BY id DESC"); // using mysqli_query instead
?>
<!doctype html>
<!--[if IE 8]> <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
    <!--<![endif]-->
    <!-- Start Head tag -->
    <head>
        <meta charset="utf-8">
        <title>All Home Video</title>
        <!-- Mobile specific metas -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <!-- Force IE9 to render in normal mode -->
        <!--[if IE]><meta http-equiv="x-ua-compatible" content="IE=9" /><![endif]-->
        <meta name="author" content="">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="application-name" content="">
        <!-- Import google fonts - Heading first/ text second -->
        <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&amp;subset=all' rel='stylesheet' type='text/css'>
        <!-- Css files -->
        <!-- Icons -->
        <link href="css\icons\font-awesome.css" rel="stylesheet">
        <!-- Bootstrap stylesheets -->
        <link href="css\bootstrap\bootstrap.css" rel="stylesheet">
        <!-- Main stylesheets (template main css file) -->
        <link href="css\main.css" rel="stylesheet">
        <!-- Plugins stylesheets (all plugin custom css) -->
        <link href="css\plugins.css" rel="stylesheet">
        <!-- Theme stylesheets ( Theme css file ) -->
        <link href="css\theme\theme-default.css" rel="stylesheet">
        <!-- Responsive stylesheets ( breakpoints responsive styles ) -->
        <link href="css\responsive.css" rel="stylesheet">
        <!-- Custom stylesheets ( Put your own changes here ) -->
        <link href="css/custom.css" rel="stylesheet">
        <!-- Fav and touch icons -->
        <!-- Generate your icon here - http://realfavicongenerator.net/ -->
        <link rel="apple-touch-icon" sizes="57x57" href="favicons\apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="favicons\apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="favicons\apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="favicons\apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="favicons\apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="favicons\apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="favicons\apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="favicons\apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="favicons\apple-touch-icon-180x180.png">
        <link rel="icon" type="image/png" href="favicons\favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="favicons\favicon-194x194.png" sizes="194x194">
        <link rel="icon" type="image/png" href="favicons\favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="favicons\android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="favicons\favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="favicons\manifest.json">
        <link rel="mask-icon" href="favicons\safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="theme-color" content="#ffffff">
		<script>
		
		</script>
    </head>
    <!-- End / Head tag -->
    <!-- Start body tag -->
    <body class="loading ball-scale-multiple top-bar-fixed left-sidebar-fixed page-footer ovh">
         
        <!-- End .preloader -->
        <!-- Start header .top-bar -->
        <header class="top-bar">
            <nav class="navbar navbar-default">
                <ul class="nav navbar-nav">
                    <li class="sidebar-toggle">
                        <a id="left-sidebar-toggle" href="#">
                            <i class="fa fa-navicon"></i>
                        </a>
                    </li>
                    <li class="sidebar-hide">
                        <a id="left-sidebar-hide" href="#">
                            <i class="fa fa-navicon"></i>
                        </a>
                    </li>
                    <li class="page-title">
                        <h2>View ALL Home Subject Video</h2>
                    </li>
                </ul>
                 <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown">                            
                            <span class="user-name">Admin </span> 
                            <span class="caret"></span> 
                        </a>
                        <ul class="dropdown-menu right" role="menu">
                            <li><a href="user-profile.htm"><i class="fa fa-user"></i> Logout</a>
                            </li>
                            
                             
                        </ul>
                    </li>
                     
                </ul>
            </nav>
        </header>
        <!-- End header / .top-bar -->
        <!-- Start .page-container -->
        <div class="page-container">
            <!-- Start .left-sidebar-wrapper  -->
            <?php include('sidebar.php'); ?>
            <!-- End / .left-sidebar-wrapper  -->
            <!-- Start #right-sidebar -->
            <aside class="right-sidebar hide-sidebar">
                <!-- Start .sidebar-inner -->
                <div class="sidebar-inner">
                    <!-- Start .sidebar-scrollarea -->
                    <div class="sidebar-scrollarea">
                        <div class="chat-app">
                            <div class="chat-app-header">
                                <h4 class="chat-app-title">Users</h4>
                                <button type="button" class="close close-right-sidebar" aria-label="Close"><span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="chat-user-list">
                                <form class="form-vertical chat-search" role="form">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="text" class="form-control input-sm" placeholder="Search for user">
                                            <span class="input-group-btn">                                        
                                <button class="btn btn-default btn-sm" type="submit"><i class="fa fa-search"></i></button>
                            </span>
                                        </div>
                                    </div>
                                    <!-- End .form-group  -->
                                </form>
                                <ul class="user-list list-group">
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\2.jpg" alt="avatar" class="avatar">
                                            <span class="name">Martin Frazier</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li>
                                                    <div class="avatar">
                                                        <img src="img\avatars\2.jpg" alt="@chadengle">
                                                    </div>
                                                    <p class="chat-name">Dean Huges <span class="chat-time">15 sec ago</span>
                                                    </p>
                                                    <div class="message">
                                                        <p class="chat-txt">We need to meet today. I have some things to show you.</p>
                                                    </div>
                                                </li>
                                                <li class="chat-me">
                                                    <div class="avatar">
                                                        <img src="img\avatars\1.jpg" alt="@jonhdoe">
                                                    </div>
                                                    <p class="chat-name">SuggeElson <span class="chat-time">10 sec ago</span>
                                                    </p>
                                                    <div class="message message-info">
                                                        <p class="chat-txt">I have tons of work today maybe tomorrow will be fine</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="avatar">
                                                        <img src="img\avatars\2.jpg" alt="@chadengle">
                                                    </div>
                                                    <p class="chat-name">Dean Huges <span class="chat-time">just now</span>
                                                    </p>
                                                    <div class="message">
                                                        <p class="chat-txt">Okay i will wait..</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\4.jpg" alt="avatar" class="avatar">
                                            <span class="name">Joann Wheeler</span>
                                            <span class="status status-offline">offline from 1 day</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\5.jpg" alt="avatar" class="avatar">
                                            <span class="name">Tracy Obrien</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\6.jpg" alt="avatar" class="avatar">
                                            <span class="name">Alicia Howard</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\7.jpg" alt="avatar" class="avatar">
                                            <span class="name">Jerome Bowman</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\8.jpg" alt="avatar" class="avatar">
                                            <span class="name">Joel Lynch</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\9.jpg" alt="avatar" class="avatar">
                                            <span class="name">Virgil Warren</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\10.jpg" alt="avatar" class="avatar">
                                            <span class="name">Charlene Welch</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="list-group-item clearfix">
                                        <a href="#">
                                            <img src="img\avatars\11.jpg" alt="avatar" class="avatar">
                                            <span class="name">Ronnie Newman</span>
                                            <span class="status status-online">online</span>
                                        </a>
                                        <div class="chat-messages">
                                            <ul>
                                                <li class="chat-back"><a href="#"><i class="fa fa-chevron-left mr5"></i> Back</a>
                                                </li>
                                                <li class="no-messages">
                                                    <p class="text-center color-red">No previous conversation found</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div id="chat-write">
                                    <form id="chat-write-form" class="form-vertical" role="form">
                                        <div class="form-group mb5">
                                            <textarea name="writetext" id="chatwritearea" rows="3" class="form-control" placeholder="Type message ..."></textarea>
                                        </div>
                                        <!-- End .form-group  -->
                                        <div class="form-group mb0">
                                            <a href="#" class="btn btn-link btn-sm p0 mr5 color-gray"><i class="fa fa-picture-o"></i> </a>
                                            <a href="#" class="btn btn-link btn-sm p0 color-gray"><i class="fa fa-file"></i> </a>
                                            <a href="#" class="btn btn-default btn-sm pull-right">Send</a>
                                        </div>
                                        <!-- End .form-group  -->
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End .sidebar-scrollarea -->
                </div>
                <!-- End .sidebar-inner -->
            </aside>
            <!-- End #right-sidebar -->
            <!-- Start .main-content -->
            <div class="main-content">
                <!-- Start .content -->
                <div class="content">
                    <div id="checkAll-active" class="row gallery sortable-layout">
                        <!-- Start .row -->
                        <div class="col-lg-12">
                            <!-- col-lg-12 start here -->
                            <div class="page-header gallery-category-name">
                                <h5>All Home Subject Video</h5>
                                <div class="page-header-controls">
                                    <div class="btn-group mr15" role="group">
                                        <div class="checkbox-custom mt0">
                                            
                                            <label for="masterCheckbox">Search Products</label>
											<input type="text">
											<a href="#" class="btn btn-danger btn-sm" onclick="selectedvaluedelete();"><i class="fa fa-trash-o mr5"></i>Selected Item To Delete</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <!-- col-lg-12   end here -->
                        <div class="col-md-12">
                            <?php 
							 
							while($res = mysqli_fetch_array($result)) {

								
								?>
								<div class="col-md-4">
								<div class="panel panel-default">
								   <div class="panel-body">
										  
										  
										   
										  
										   
										   <video width="320" height="240" controls id="mediaplayer" volume="0" class="mute"  controlsList="nodownload" >
											  <source src="<?php echo $res['product_img_path']; ?>" type="video/mp4" autoplay="false">
											  <source src="movie.ogg" type="video/ogg">
											  Your browser does not support the video tag.
											</video>

										 
									</div>	
									<div class="panel-footer">
									<?php echo $res['product_name']; ?>
									<?php
									echo "<a href=\"edit_product.php?id=$res[id]\">Edit</a> | <a href=\"delete_product.php?id=$res[id]\" onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a>";		
									?>
									 <input type="checkbox" name="deleteall[]" value=<?php echo $res['id'];?>> 
									</div>		
									
								</div>
                            </div>
								<?php
								
							}
							?>
							
							
							
							  
							
                             
                        </div>
                       
                    </div>
                    <!-- End .row -->
                </div>
                <!-- End .content -->
                <div id="footer" class="clearfix">
                    <!-- Start #footer  -->
                    <p class="pull-left">
                         Admin Panel
                    </p>
                    <p class="pull-right">
                        <a href="#" class="mr5 strong underline-effect">powered by pankaj</a>
                        |
                         
                    </p>
                </div>
                <!-- End #footer  -->
            </div>
            <!-- End / .main-content -->
            <!-- Edit picture modal -->
            <div class="modal fade modal-style2" id="edit-image" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title" id="exampleModalLabel"></h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-responsive" src="" alt="">
                            <form class="form-horizontal mt20 bt" role="form">
                                <div class="form-group">
                                    <label class="col-lg-12 control-label" for="">Image name</label>
                                    <div class="col-lg-12">
                                        <input type="text" class="form-control" id="" name="" placeholder="">
                                    </div>
                                </div>
                                <!-- End .form-group  -->
                                <div class="form-group">
                                    <label class="col-lg-12 control-label" for="">Description</label>
                                    <div class="col-lg-12">
                                        <textarea class="form-control" name="" id="" rows="5"></textarea>
                                    </div>
                                </div>
                                <!-- End .form-group  -->
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger">Crop</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End / .page-container -->
        <!-- Back to top -->
        <div id="back-to-top"><a href="#">Back to Top</a>
        </div>
        <!-- Javascripts -->
        <!-- Important javascript libs(put in all pages) -->
        <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script>
        window.jQuery || document.write('<script src="js/libs/jquery.min.js">\x3C/script>')
        </script>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script>
        window.jQuery || document.write('<script src="js/libs/jquery-ui-1.11.4.min.js">\x3C/script>')
        </script>
        <!--[if lt IE 9]>
  <script type="text/javascript" src="js/libs/excanvas.min.js"></script>
  <script type="text/javascript" src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <script type="text/javascript" src="js/libs/respond.min.js"></script>
<![endif]-->
        <!-- Bootstrap plugins -->
        <script src="js\bootstrap\bootstrap.js"></script>
        <!-- Core plugins ( not remove ) -->
        <script src="js\libs\modernizr.custom.js"></script>
        <script src="js\libs\jRespond.js"></script>
        <script src="plugins\core\retinajs\retina.js"></script>
        <!-- Quick search plugin (fast search for many widgets) -->
        <script src="plugins\core\quicksearch\jquery.quicksearch.js"></script>
        <!-- Remove click delay in touch -->
        <script src="plugins\core\fastclick\fastclick.js"></script>
        <!-- Increase jquery animation speed -->
        <script src="plugins\core\velocity\velocity.min.js"></script>
        <!-- Nice scroll plugin -->
        <script src="plugins\core\nicescroll\jquery.nicescroll.js"></script>
        <!-- Match height for some columns -->
        <script src="plugins\ui\match-height\jcolumn.min.js"></script>
        <!-- Bootbox fast bootstrap modals -->
        <script src="plugins\ui\bootbox\bootbox.js"></script>
        <!-- Enable touch events for jqueryUI -->
        <script src="plugins\misc\touchpunch\jquery.ui.touch-punch.js"></script>
        <!-- Other plugins ( load only nessesary plugins for every page) -->
        <script src="plugins\ui\lightbox\ekko-lightbox.js"></script>
        <script src="plugins\forms\checkall\jquery.checkAll.js"></script>
        <script src="js\jquery.adminPlugin.js"></script>
        <script src="js\main.js"></script>
        <script src="js\pages\gallery.js"></script>
		
		<script type="text/javascript">
     
	   
	   function selectedvaluedelete(){
		    var all_location_id = document.querySelectorAll('input[name="deleteall[]"]:checked');
			
			
			
		  // var deleteall = document.getElementByName("deleteall[]").value;
		 //  alert("deleteall value"+deleteall);
		  

				var aIds = [];

				for(var x = 0, l = all_location_id.length; x < l;  x++)
				{
					aIds.push(all_location_id[x].value);
				}

				var str = aIds.join(', ');
			//		alert(str);
				console.log(str);
				
		if(str == "")
			{
			alert("please select Item For Delete.");	
				
			}else {
				alert("Are you sure to DELETE selected Item.");
			var post_id = 'id='+ str;
				$.ajax
								({
					type: "POST",
                    url: "delete_all_product.php",
                    data: post_id,
                    cache: false,
                    success: function(deletemessage)
                    {
						console.log("get data"+deletemessage);
						location.reload();
						
                    }
                });

			}
							}
    </script>
    </body>
    <!-- End / body tag -->
</html>
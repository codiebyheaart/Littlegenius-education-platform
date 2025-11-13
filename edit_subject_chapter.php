<?php
include_once("config.php"); 
$id = $_GET['id'];
$result = mysqli_query($mysqli, "SELECT * FROM `class_subfolder` where refid=$id");


while($res = mysqli_fetch_array($result))
{
	$sub_cat_name = $res['sub_cat_name']; 
//	$cat_name = $res['header'];
	
	 
} 
 
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
        <title>Edit Products Information</title>
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
    </head>
    <!-- End / Head tag -->
    <!-- Start body tag -->
    <body class="loading ball-scale-multiple top-bar-fixed left-sidebar-fixed page-footer ovh">
        <!--[if lt IE 9]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
        <!-- Start .preloader -->
        
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
                        <h2>Update Any Chapters | Delete</h2>
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
                    <div class="row">
                        <!-- .row start -->
                        <div class="col-md-12">
                            <!-- col-md-12 start here -->
                            <div class="panel panel-default panelMove panelFullscreen panelToggle panelClose panelRefresh">
                                <!-- Start .panel -->
                                <div class="panel-heading">
                                    <h4 class="panel-title"><i class="fa fa-align-justify"></i> </h4>
                                </div>
                                <div class="panel-body">
                                     <form class="form-horizontal group-border stripped"  method="post" action ="update_sub_chapters.php">
                                          
										 <div class="form-group">
                                            <label class="col-lg-2 col-md-3  control-label" for="">Subject Name</label>
                                             <div class="col-lg-10 col-md-9">											  
                                                  <div class="col-lg-10 col-md-9">
												  <input   type="text" name="class_name" class="form-control" value="<?php echo $sub_cat_name;?>"  id="class_name" placeholder="Product Name" readonly>                                               
                                            </div>											
                                            </div>
                                        </div>  
										
										
										<div class="form-group">
                                            <label class="col  col-md-5  control-label" style="align-content:center; color:red;" for=""><span><b>Subject chapters's</b></span></label>
                                             
                                        </div> 
											<?php
										$id = $_GET['id'];
										$result = mysqli_query($mysqli, "SELECT chapterrefid , chaptername , sub_cat_name FROM `class_subfolder` LEFT JOIN subject_chapter ON class_subfolder.refid = subject_chapter.subject_id WHERE refid = $id and chaptername is not null");

                                          $i = 1;
										while($res = mysqli_fetch_array($result))
										{
											$chaptername = $res['chaptername']; 
											$chapterrefid = $res['chapterrefid']; 
											
											
											  
										?>
                                         <div class="form-group">
                                            <label class="col-lg-2 col-md-3  control-label" for=""><?php echo $chaptername;?></label>
                                             <div class="col-lg-10 col-md-9">											  
                                                  <div class="col-lg-10 col-md-9">
												   <input type="hidden" name="subject_id[]" value="<?php echo $chapterrefid;?>">
												  <input   type="text"  name="name[]" class="form-control" value="<?php echo $chaptername;?>"  id="subject_name" placeholder="Product Name"> 
											<?php
						echo "<a href=\"delete_class_subjects.php?id=$chapterrefid\" onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a>";		
											?>	  
												</div>											
                                            </div>
                                        </div> 
											<?php
	
	                                              $i++ ;
														} 
			?>
										<div class="form-group">
										  <div class="col-lg-15 col-md-9">
                                            <td><input type="hidden" name="class_id" value=<?php echo $_GET['id'];?>></td>
											<td><input type="submit" name="Submit" value="Update" onsubmit="submitUpdate();"></td>
											</div>
                                        </div> 
                                    </form>
									
                                        </div>
                                </div>
                            </div>
                            <!-- End .panel -->
                           
                            </div>
                          
                        </div>
                        <!-- col-md-12 end here -->
                    </div>
                    <!-- / .row -->
                </div>
                <!-- End .content -->
                
                <!-- End #footer  -->
            </div>
            <!-- End / .main-content -->
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
        <script src="plugins\forms\checkall\jquery.checkAll.js"></script>
        <script src="plugins\forms\autosize\jquery.autosize.js"></script>
        <script src="plugins\forms\bootstrap-maxlength\bootstrap-maxlength.js"></script>
        <script src="js\jquery.adminPlugin.js"></script>
        <script src="js\main.js"></script>
        <script src="js\pages\forms-basic.js"></script>
		
		<script type="text/javascript">
     
	   
	   function submitUpdate(){
				var class_name = document.getElementById("class_name");
				var class_id = document.getElementById("class_id");
				var subject_id = document.getElementById("subject_id");
				var subject_name = document.getElementById("subject_name");
				console.log("get values are:::"+subject_id+"subject names are :::"+subject_name);
				
		   

           
							}
    </script>
    </body>
    <!-- End / body tag -->
</html>
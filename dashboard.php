<?php
				include_once("config.php");
				
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
        <title>View Category</title>
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
		<style>
		
		.market-update-block.clr-block-1 {
    background: #68ae00;
    margin-right: 0.8em;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
}
.market-update-block {
    padding: 2em 2em;
    background: #999;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
html, body {
    font-family: 'Work Sans', sans-serif;
    font-size: 100%;
    background: #fff;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
}
html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
user agent stylesheet
html {
    color: -internal-root-color;
}
*:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
*:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
	
.market-update-block.clr-block-2 {
    background: #FC8213;
    margin-right: 0.8em;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
}
.market-update-block {
    padding: 2em 2em;
    background: #999;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
html, body {
    font-family: 'Work Sans', sans-serif;
    font-size: 100%;
    background: #fff;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
}
html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
user agent stylesheet
html {
    color: -internal-root-color;
}
*:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
*:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}


.market-update-block.clr-block-3 {
    background: #337AB7;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
}
.market-update-block {
    padding: 2em 2em;
    background: #999;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
html, body {
    font-family: 'Work Sans', sans-serif;
    font-size: 100%;
    background: #fff;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
}
html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
user agent stylesheet
html {
    color: -internal-root-color;
}
*:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
*:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.market-update-right i.fa.fa-eye {
    font-size: 3em;
    color: #FC8213;
    width: 80px;
    height: 80px;
    background: #fff;
    text-align: center;
    border-radius: 49px;
    -webkit-border-radius: 49px;
    -moz-border-radius: 49px;
    -o-border-radius: 49px;
    line-height: 1.7em;
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.market-update-block h3 {
    color: #fff;
    font-size: 2.5em;
    font-family: 'Carrois Gothic', sans-serif;
}
h4, h5, h6, h1, h2, h3 {
    margin: 0;
}

.market-update-block h4 {
    font-size: 1.2em;
    color: #fff;
    margin: 0.3em 0em;
    font-family: 'Carrois Gothic', sans-serif;
}

.market-update-right i.fa.fa-file-text-o {
    font-size: 3em;
    color: #68AE00;
    width: 80px;
    height: 80px;
    background: #fff;
    text-align: center;
    border-radius: 49px;
    -webkit-border-radius: 49px;
    -moz-border-radius: 49px;
    -o-border-radius: 49px;
    line-height: 1.7em;
}

.market-update-right i.fa.fa-envelope-o {
    font-size: 3em;
    color: #337AB7;
    width: 80px;
    height: 80px;
    background: #fff;
    text-align: center;
    border-radius: 49px;
    -webkit-border-radius: 49px;
    -moz-border-radius: 49px;
    -o-border-radius: 49px;
    line-height: 1.7em;
}
	
		</style>
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
                        <h2>View Class</h2>
                    </li>
                </ul>
                 <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown">                            
                            <span class="user-name">Admin </span> 
                            <span class="caret"></span> 
                        </a>
                        <ul class="dropdown-menu right" role="menu">
                            <li><a href="#"><i class="fa fa-user"></i> Logout</a>
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
           
            <!-- End #right-sidebar -->
            <!-- Start .main-content -->
            <div class="main-content">
                <!-- Start .content -->
                <div class="content">
                     <div class="market-updates">
					 <?php
				
				$result = mysqli_query($mysqli, "SELECT count(*) as totalvideo FROM `product_image`"); // using mysqli_query instead
$totalvideo ;
				while($res = mysqli_fetch_array($result))
				{
					$totalvideo = $res['totalvideo']; 
					 
				} 
?>
			<div class="col-md-4 market-update-gd">
				<div class="market-update-block clr-block-1">
					<div class="col-md-8 market-update-left">
						<h3><?php echo $totalvideo ?></h3>
						<h4>Total Video</h4>
						
					</div>
					<div class="col-md-4 market-update-right">
						<i class="fa fa-file-text-o"> </i>
					</div>
				  <div class="clearfix"> </div>
				</div>
			</div>
			
			<?php
				
				$result = mysqli_query($mysqli, "SELECT count(*) as loginuser FROM `userlogin` WHERE `isactive` = 1"); // using mysqli_query instead
					$loginuser ;
				while($res = mysqli_fetch_array($result))
				{
					$loginuser = $res['loginuser']; 
					 
				} 
?>
			<div class="col-md-4 market-update-gd">
				<div class="market-update-block clr-block-2">
				 <div class="col-md-8 market-update-left">
					<h3><?php echo $loginuser ?></h3>
					<h4>Login User</h4>
					
				  </div>
					<div class="col-md-4 market-update-right">
						<i class="fa fa-eye"> </i>
					</div>
				  <div class="clearfix"> </div>
				</div>
			</div>
			<?php
				
				$result = mysqli_query($mysqli, "SELECT count(*) as totaluser FROM `userlogin`"); // using mysqli_query instead
					$totaluser ;
				while($res = mysqli_fetch_array($result))
				{
					$totaluser = $res['totaluser']; 
					 
				} 
?>
			<div class="col-md-4 market-update-gd">
				<div class="market-update-block clr-block-3">
					<div class="col-md-8 market-update-left">
						<h3><?php echo $totaluser ?></h3>
						
						<h4>Registered User</h4>
						
					</div>
					<div class="col-md-4 market-update-right">
						<i class="fa fa-envelope-o"> </i>
					</div>
				  <div class="clearfix"> </div>
				</div>
			</div>
		   <div class="clearfix"> </div>
		</div>
		<p></p>
		<p></p><p></p>
		<p></p>
		<p></p>
		
		<p></p><p></p><p></p>
		<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
		
		<p style ="display:none ;">
		cndsjkcbksdbcksdbcklsdbcsdd
		dsbcksdbcksdlcbksdcblsdacasc
		csdnclksdcnlsdc
		cnsdlkacns;lkdacnl;sdac
		
		dsajcjksack;sack;lsa
		'bcksjbcjklsdacbjksdl;abbbbbbbbbbb
		</p>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <!-- End .content -->
                <div id="footer" class="clearfix">
                    <!-- Start #footer  -->
                    <p class="pull-left">
                     All rights reserved
                    </p>
                    <p class="pull-right">
                        <a href="#" class="mr5 strong underline-effect">Powered By pankaj</a>
                        |
                         
                    </p>
                </div>
                <!-- End #footer  -->
            </div>
            <!-- End / .main-content -->
            <!-- Edit picture modal -->
           
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
	
  
		
	</script>	
    </body>
    <!-- End / body tag -->
</html>
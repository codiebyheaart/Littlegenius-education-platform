<script>

function sendvalue(cavrefid)
{
	var value1=cavrefid;
//	alert(""+cavrefid);
//	document.cookie="profile_viewer_uid='+cavrefid+'";
  var p1 = "success";
  
 // document.getElementById("totalprice").innerHTML ="ssssssssssssssssssssssss";
	
}

</script>

 <a id="recent_catalog_search_box_modal" data-toggle="modal" data-target="#recent-catalog-search-box-modal" style="display: none;">CatalogSearchBox</a>
	<!-- Hide Button to open Catalog Search Box Modal -->

	<div class="modal fade" id="recent-catalog-search-box-modal" role="dialog" style="z-index: 1600;">
		<div class="modal-dialog"
			style="max-width: 850px; width: 100%; border-radius: 24px;">
			<div class="modal-content">
				<div class="modal-header" style="background: #E31E24; color: #fff;">
					<h5 class="modal-title" style="color: #ffffff; line-height: 0;"></h5>
				</div>
				  <script src="js\jquery.min.js"></script>
    <script src="js\bootstrap.min.js"></script>
    <script src="js\owl.carousel.min.js"></script>
    <script src="js\jquery.countdown.js"></script>
    <script src="js\jquery-ui.min.js"></script>
    <script src="js\jquery.fancybox.js"></script>
   <script src="js\jquery.elevatezoom.js"></script>
   <br>
   <p></p>
				<div>
					<div class="single-product">
							<div id="single-container" class="product-container">
                                <div class="product">
								
								 <?php
									include('dbcon.php');
								//	$user = new MyClass();



//echo 'First Name: ' . $user->getFName();
								//	$cavrefid=$myPhpVar;
								//$abc=$_REQUEST['cavrefid'];
							
						//	if(isset($_SESSION['userid']))
							//			{
      // session has NOT been started
   // echo "Favorite color is " . $_SESSION["userid"] . ".<br>";
                                   
								//		}
								//	echo 'First Name: ' . $user->getFName();	
								//	echo "Favorite color is " .$user->getFName(). ".<br>";	 
									 	$sql = "SELECT cavrefid  , `cavattrefid` ,`cavvaluetype` ,`cavvalueasimagepath` , `cavvalueasimgpathfront` , contitle , conlongdesc  FROM `cmscav`  LEFT JOIN cmscon on cmscav.cavconrefid = cmscon.conrefid  WHERE `cavrefid` = 1";
										//	$result = $mysqli->query($sql);

											if($result = $mysqli->query($sql)){
												// output data of each row
												while($row = $result->fetch_assoc()) {
												
													
													?>
						
								
                                    <div class="col-sm-5">
                                        <div class="product-thumb">
                                            <img id="img-holder" class="zoomable" src="img\product\<?php echo $row['cavvalueasimagepath'];?>" alt="Product 15" data-zoom-image="img/product/<?php echo $row['cavvalueasimgpathfront'];?>">
                                            <div class="list-thumbs">
                                                <a class="list-thumb active" href="#" data-image="img/product/<?php echo $row['cavvalueasimgpathfront'];?>" data-image-zoom="img/product/<?php echo $row['cavvalueasimgpathfront'];?>">
                                                    <img src="img\product\<?php echo $row['cavvalueasimgpathfront'];?>" alt="15 Thumb">
                                                </a>
                                                <a class="list-thumb" href="#" data-image="img/product/<?php echo $row['cavvalueasimagepath'];?>" data-image-zoom="img/product/<?php echo $row['cavvalueasimagepath'];?>">
                                                    <img src="img\product\<?php echo $row['cavvalueasimagepath'];?>" alt="15 Thumb">
                                                </a>
                                            </div>
                                            <div class="attr-group">
                                                <span class="new">New</span>
                                                <span class="sale">Sale!</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="product-info">
                                            <h3 class="product-name"><?php echo $row['contitle'];?></h3>
                                            <div class="comment-block">
                                                <div class="rating-block">
                                                    <span>Rating</span>
                                                    <div class="rating" itemtype="http://schema.org/Offer" itemscope="">
                                                        <div class="star_rating" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                                            <span class="star star_full"></span>
                                                            <span class="star star_full"></span>
                                                            <span class="star star_full"></span>
                                                            <span class="star star_full"></span>
                                                            <span class="star"></span>
                                                            <meta itemprop="worstRating" content="0">
                                                            <meta itemprop="ratingValue" content="4">
                                                            <meta itemprop="bestRating" content="5">
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="readreview-block">
                                                    <a href="#" class="to-review">
                                                        <i class="fa fa-comment" aria-hidden="true"></i>
                                                        <span>Read </span>
                                                        <span class="review-number">( 1 )</span>
                                                    </a>
                                                </div>
                                                
                                                <div class="writereview-block">
                                                    <a href="#new_review_form" class="to-review-form">
                                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                        <span>Write A Review</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <p class="product_model product-page-attr">
                                                <label>Model: </label>
                                                <span class="attr_value">demo_5</span>
                                            </p>
                                            <p class="product_condition product-page-attr">
                                                <label>Condition: </label>
                                                <span class="attr_value">New</span>
                                            </p>
                                            <p class="product_manufacturer product-page-attr">
                                                <label>Manufacturer: </label>
                                                <a href="#" class="attr_value">Activeden</a>
                                            </p>
                                            <p class="single-description">Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress.</p>
                                            <p class="quantity-block">
                                                <span class="quantity_available">298</span><span style="display: none;" class="quantityAvailableTxt">Item</span><span class="quantityAvailableTxtMultiple">Items</span>
                                                <span class="availability-status label label-success">In stock</span>
                                            </p>
                                            <p class="warning_inline last_quantities" style="display: none;">Warning: Last items in stock!</p>
                                            <span class="price">$30.51</span>
                                        </div>
										
										<?php
													
												}
											} else {
												echo "0 results";
											}				
			?>
                                        <form id="myForm" action="cartvalue.php" method="post">
                                            <input type="hidden" name="id_product" value="15">
                                            <input id="price" type="hidden" name="price" value="30.51">
											
                                            <div class="box-info-product">
                                                <div class="product_attributes">
                                                    <div id="quantity_wanted" class="product_attribute">        
                                                        <label>Quantity</label>
                                                        <input type="number" name="qty" id="qty" value="1" min="1">
                                                    </div>
                                                    <div id="size_wanted" class="product_attribute">
                                                        <label class="attribute_label">Size</label>
                                                        <div class="input-rule select">
                                                            <span class="input-style">S</span>
                                                            <select id="size" name="size" class="size">
                                                                <option value="s" selected="selected">S
                                                                <option value="m">M
                                                                <option value="l">L
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div id="color_wanted" class="product_attribute">
                                                        <label class="attribute_label">Color</label>
                                                        <div class="color-input">
                                                            <div class="input-rule input-radio">
                                                                <span class="input-style" style="background-color: #f5f5dc">Beige</span>
                                                                <input id="color" type="radio" name="color" value="beige">
                                                            </div>
                                                            <div class="input-rule input-radio">
                                                                <span class="input-style input-radio" style="background-color: #ffffff">White</span>
                                                                <input id="color" type="radio" name="color" value="white">
                                                            </div>
                                                            <div class="input-rule input-radio">
                                                                <span class="input-style" style="background-color: #434A54">Black</span>
                                                                <input id="color" type="radio" name="color" value="black">
                                                            </div>
                                                            <div class="input-rule input-radio">
                                                                <span class="input-style" style="background-color: #F39C11">Orange</span>
                                                                <input id="color" type="radio" name="color" value="orange">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box-cart-bottom">
                                                <div id="usefull_link_block">
                                                    <a href="#" title="Add to my wishlist"><i class="fa fa-heart-o"></i>Add to wishlist</a>
                                                    <a href="#"><i class="fa fa-envelope-o"></i>Send to a friend</a>
                                                    <a href="javascript:print();"><i class="fa fa-print"></i>Print</a>
                                                </div>
                                                <button type="submit" name="Submit" class="btn btn-default" onclick="closeME();" ><i class="fa fa-shopping-cart"></i> Add to cart</button>
                                            </div>
											
                                        </form>
                                        
                                        <div class="share-on-social">
                                            <a href="#" class="share_twitter"><i class="fa fa-twitter"></i>Tweet</a>
                                            <a href="#" class="share_facebook"><i class="fa fa-facebook"></i>Share</a>
                                            <a href="#" class="share_google-plus"><i class="fa fa-google-plus"></i>Google+</a>
                                            <a href="#" class="share_pinterest"><i class="fa fa-pinterest"></i>Pinterest</a>
                                        </div>
                                    </div>
									
										
                                </div>
                                
                            </div>
    </div>

					<!-- Start Check Box Table For Leaf Node -->
					

					<!-- End Check Box Table For Leaf Node -->

				</div>
				<div class="modal-footer">
					<div id="recent_search_btn_new">
					
					</div>
				</div>
			</div>
		</div>
	</div>
	
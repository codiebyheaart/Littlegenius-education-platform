function women_submit(){
		
		
		document.location.href="products.php?id=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI2IkRvdHZpa2NvbH";
		
		
	}
	
	
	
	function men_submit(){
		
		
	document.location.href="products.php?id=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH"; 	
		
		
	}
	
	
	function  cartvalue(getvalue) {
		
	//	alert(getvalue);
	//	href="cart.php?id=<?php echo $row['conrefid'];?>"
	
	document.location.href="cart.php?id=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbHeyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+getvalue+"";
		
	}
	
	
	
	function login(){
		
		
		var i=1001;
		
		document.location.href="login.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH"+i+""; 
		
		i++;
		
	}
	
		function signup(){
		
		
		var i=Math.random();
	//	console.log("iii"+i);
		document.location.href="signup.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+i+""; 
		
		
		
	}
	
	function getvalue(){
		var search = document.getElementById("search").value;
		//alert("hello");
		if (search == 'men')
		{
		//	window.location.href = 'products.php?id=1';
			document.location.href="products.php?id=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH";
		}else if (search == 'women') {
			document.location.href="products.php?id=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI2IkRvdHZpa2NvbH";
		}else{
			
			document.location.href="products.php?id=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI2IkRvdHZpa2NvbH";
		}
		
		
	}
	function cart(){
		
		
		var i=Math.random();
	//	console.log("iii"+i);
		document.location.href="cart.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+i+""; 
		
		
		
	}
	function cartheader(){
		
		
		var i=Math.random();
	//	console.log("iii"+i);
		document.location.href="cartheader.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+i+""; 
		
		
		
	}
	function sigin_address(){
		
		
		var i=Math.random();
	//	console.log("iii"+i);
		document.location.href="signin_address.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+i+""; 
		
		
		
	}
	
	
	function successfullorder(){
		
		
		var i=Math.random();
	//	console.log("iii"+i);
		document.location.href="successfullorder.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+i+""; 
		
		
		
	}
	
	
	function payment(){
		
		
		var i=Math.random();
	//	console.log("iii"+i);
		document.location.href="payment.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+i+""; 
		
		
		
	}
	
	
	function viewaddress(){
		
		
		var i=Math.random();
	//	console.log("iii"+i);
		document.location.href="viewaddress.php?authtoken=eyJraWQiOiIxMDg3OSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJQb2x5Y2FiRW1wbG95ZWUiLCJzdWIiOiJQb2x5Y2FiTG9naW5Ub2tlbiIsImlzcyI1IkRvdHZpa1NvbH-"+i+""; 
		
		
		
	}
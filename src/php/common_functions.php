<?php
/*Functions to connect to database */
function connect(){
	global $conn;
	 $conn = mysqli_connect('localhost','ethanny2_root','DIAMONDjozu17',
		'ethanny2_game_database' );
	/*For offline testing */
	// $conn = mysqli_connect('localhost','root','',
//	 	'carti_posts' );
	 echo "Connection worked <br>";
	if(mysqli_connect_errno()){
		echo "Connection failed: " . mysqli_connect_error();
		exit();
	}else{
		//echo "Connection successfull";
	}
}

 function emailChecker($email) {
    global $conn, $safe_email, $check_res;
     //check that email is not already in list
     $safe_email = mysqli_real_escape_string($conn, $email);
     $check_email = "SELECT id FROM subscribers
          WHERE email = '".$safe_email."'";
     $check_res = mysqli_query($conn, $check_email)
          or die(mysqli_error($conn));
  }		
?>



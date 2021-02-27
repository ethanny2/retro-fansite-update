<?php
	include'common_functions.php';
	/*header('Access-Control-Allow-Origin: *');*/
	global $success_subscribe, $success_unsubscribe;

	
	
	

	if( ($_POST) && $_POST['action']=="sub" ){
		if($_POST['email']==""){
			/*Send HTTPS header, or just display html code */
			echo "Enter an email";
			exit();
		}else{
			/* Email is not empty*/
			connect();
			emailChecker($_POST['email']);
			if(!filter_var($safe_email,FILTER_VALIDATE_EMAIL)){
				echo "Invalid email";
				exit();
			}
			//Check if not in the record already
			if(mysqli_num_rows($check_res) < 1){
				mysqli_free_result($check_res);
				//add
				$add_command = "INSERT INTO subscribers (email) VALUES('".$safe_email."')";
				$add_result= mysqli_query($conn, $add_command)
                         or die(mysqli_error($conn));
                 //Mark the success variable
                  $success_subscribe = 1;
                  echo "Added to mailing list";
            	 mysqli_close($conn);
			}else{
		         //print failure message
				$success_subscribe = 0;
				echo "Failed to add email to mailing list";
			}
		}
	}else if( ($_POST) && $_POST['action']=='unsub'){
		//trying to unsubscribe
			if($_POST['email']==""){
			/*Send HTTPS header, or just display html code */
			echo "Enter an email";
			exit();
		}else{
			connect();
			emailChecker($_POST['email']);
			if(!filter_var($safe_email,FILTER_VALIDATE_EMAIL)){
				echo "Invalid email";
				exit();
			}
			//If its not in the database
			if(mysqli_num_rows($check_res) < 1){
				  //free result
	              mysqli_free_result($check_res);
	              $success_unsubscribe = 0;
	              echo "Email not found";
			}else{
				 //get value of ID from result
              	  while( $row = mysqli_fetch_array($check_res)) {
                	  $id = $row['id'];
            	  }
				 //unscribe them from the mailing list
				 $delete_sql = "DELETE FROM subscribers WHERE ID= ".$id;
				 $delete_result= mysqli_query($conn,$delete_sql)
				 or die(mysqli_error($mysqli));
				 $success_unsubscribe=1;
				 echo "Sucessfully taken off mailing list";
			}
			//close conn
			mysqli_close($conn);
		}
	}



?>
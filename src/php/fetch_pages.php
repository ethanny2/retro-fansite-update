<?php
		header('Access-Control-Allow-Origin: *');
		$db_username        = 'root'; //database username
		$db_password        = 'DIAMONDjozu17'; //dataabse password
		//$db_password        = ''; //dataabse password
		//$db_name            = 'carti_posts'; //database name
		$db_name            = 'ethanny2_carti_posts'; //database name
		$db_host            = 'localhost'; //hostname or IP
		$item_per_page      = 1; //item to display per page

		$mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);
		//Output any connection error
		if ($mysqli->connect_error) {
				die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
		}

		//Get the page number sent by AJAX
		if(isset($_POST["page"])){
				$page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); //filter number
				if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
		}else{
    			$page_number = 1; //if there's no page number, set it to 1
		}

		//get total number of records from database
		$results = $mysqli->query("SELECT COUNT(*) FROM posttable");
		$get_total_rows = $results->fetch_row(); //hold total records in variable
		//break records into pages
		//2/1 = 2
		$total_pages = ceil($get_total_rows[0]/$item_per_page);

		//position of records
		//Meaning for default pagenum=1-1 *5 = 0 so we are at the first one or 0th?
		$page_position = (($page_number-1) * $item_per_page);
		//Limit our results within a specified range. 
		//echo 'total pages is:'.$total_pages.'<br/>';
		//echo 'page position is: '.$page_position . " and item_per_page: ".$item_per_page . '<br/>';
		$results = $mysqli->prepare("SELECT postID, postDate, postContent FROM posttable ORDER BY postDate DESC LIMIT ?,?");
		$defaultLimit =1;
		$results->bind_param("ii",$page_position,$item_per_page);
		$results->execute(); //Execute prepared Query
		$results->bind_result($id, $date, $content); //bind variables to prepared statement
		while($results->fetch()){ //fetch values
				//echo '<li>';
				echo  $content;
    			//echo '</li>';
		}

		//Display records fetched from database. Could be the first page or whatever
		//But for me this means putting the data in the post section
		//echo '<ul class="pagination">';

		//Only  need onlypage
		
		//echo '</ul>';

		//	echo '<div align="center">';
		// To generate links, we call the pagination function here. 
			echo paginate_function($item_per_page, $page_number, $get_total_rows[0], $total_pages);
		//	echo '</div>';

		function paginate_function($item_per_page, $current_page, $total_records, $total_pages){
				$pagination='';
				if($total_pages > 0 && $total_pages != 1 && $current_page <= $total_pages){ 
						//verify total 	pages and current page number
      					//$pagination .= '<ul class="pagination">';
        				$pagination.='<div class="container-fluid page_list"><ul class="pagination">';
        				//Why plus 3 moving based on how many to display per link

       					$right_links    = $current_page + 3; 
        				$previous       = $current_page - 3; //previous link 
						$next           = $current_page + 1; //next link
        				$first_link     = true; //boolean var to decide our first link
       					if($current_page > 1){
         						$previous_link = ($previous==0)?1:$previous;
           						$pagination .= '<li class="first"><a class="pagination-link" data-page="1" title="First">&laquo;</a></li>'; //first link
           					    $pagination .= '<li><a class="pagination-link" href="#" data-page="'.$previous_link.'" title="Previous">&lt;</a></li>'; //previous link
               					for($i = ($current_page-2); $i < $current_page; $i++){ 
               							//Create left-hand side links
                    					if($i > 0){
                      				  			$pagination .= '<li><a class="pagination-link" href="#" data-page="'.$i.'" title="Page'.$i.'">'.$i.'</a></li>';
                    					}
                				}   
          						$first_link = false; //set first link to false
      					}
        				if($first_link){ 
        						//if current active page is first link
           						 $pagination .= '<li class="first active"><a class="pagination-link" href="#">'.$current_page.'</a></li>';
       					 }elseif($current_page == $total_pages){ 
       					 		//if it's the last active link
            					$pagination .= '<li class="last active"><a class="pagination-link" href="#">'.$current_page.'</a></li>';
        				 }else{ //regular current link
            					$pagination .= '<li class="active"><a class="pagination-link" href="#">'.$current_page.'</a></li>';
        				 }
                
      					 for($i = $current_page+1; $i < $right_links ; $i++){ //create right-hand side links
           						 if($i<=$total_pages){
                				 		$pagination .= '<li><a class="pagination-link" href="#"  data-page="'.$i.'" title="Page '.$i.'">'.$i.'</a></li>';
            					  }
        				 }
       					 if($current_page < $total_pages){ 
              		     		$next_link = ($i > $total_pages)? $total_pages : $i;
               				    $pagination .= '<li><a class="pagination-link" href="#" data-page="'.$next_link.'" title="Next">&gt;</a></li>'; //next link
               					$pagination .= '<li class="last"><a class="pagination-link" href="#" data-page="'.$total_pages.'" title="Last">&raquo;</a></li>'; //last link
      				     }
       
       					 $pagination .= '</ul></div>'; 
   				}
    			return $pagination; //return pagination links
		}
?>

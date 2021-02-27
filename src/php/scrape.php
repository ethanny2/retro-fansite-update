<?php
   header('Access-Control-Allow-Origin: *');

   function scrape($url){
   		$url = str_replace('<i class="fa fa-play</i></a>', '', $url);
   		$url = trim($url);
   		//echo $url;
  		$output = file_get_contents($url);
  		return $output;
	}
 	

 	/*URL to fetch data from */ 
   	$url = 'http://www.pictaram.com/user/vlonecarti/1014768297';
	if(!filter_var($url, FILTER_VALIDATE_URL)) {
  		json_encode(array('error'=>'invalid_url'));
  		die();
	}else {
		$page = scrape($url);
		//echo $page;
		$start='<article class="item clearfix">';
		$end = "</article>";
		$result = fetchdata($page, $start, $end);
		/*Check if it is an image or, class="content-image" or if video class="content-image video" */
		if(strpos($result, 'content-image video')){
			//echo"THIS IS A VIDEO";
			$videoSpanStart= '<span class="video-btn">';
			$videoSpanEnd="</span>";
			$videoSpan = fetchdata($result,$videoSpanStart,$videoSpanEnd);
			/* Now pull out the href*/
			//echo $videoSpan;
			$hrefStart='<a href="';
			$hrefEnd = '">';
			//$dirtyUrl = fetchdata($videoSpan,$hrefStart,$hrefEnd);
			//echo $dirtyUrl;
			$cleanUrl = str_replace($hrefStart, '', $videoSpan);
			$cleanUrl = str_replace($hrefEnd, '', $cleanUrl);
			//echo $cleanUrl;
			/*Now we have a link to the actual video scrape it again*/
			$realVideoPage = scrape($cleanUrl);
			// echo $realVideoPage;
			$sourceElement = fetchdata($realVideoPage,'<source src="','"');
			//echo $sourceElement;
			//$videoUrl = str_replace('<source src="', "", $sourceElement);
			//$videoUrl = str_replace('"', '', $videoUrl);
			$videoUrl = $sourceElement;
			//echo $videoUrl;
			echo json_encode(array('vid_url'=>$videoUrl));
		}else{
			//echo"THIS IS JUST AN IMAGE";
			$imageDivStart = '<div class="content-image image">';
			$imageDivEnd='</a>';
			$imageDivResult = fetchdata($result,$imageDivStart,$imageDivEnd);
			//echo $imageDivResult;
			/*Now pull the image URL out */
			$imageTagStart = "<img";
			$imageTagEnd = ">";
			$imageTagResult = fetchdata($imageDivResult,$imageTagStart,$imageTagEnd);
			//echo $imageTagResult;
			/* Finally get the pure url*/
			$imageUrl=str_replace('src="',"",$imageTagResult);
			$imageUrl = str_replace('"', "", $imageUrl);
			//echo $imageUrl;
			echo json_encode(array('img_url'=>$imageUrl));
		}
	}
	 	function fetchdata($data, $start, $end){
	 	//echo $data;
		$data = stristr($data, $start); // Strip code from startposition to end of code
		//echo $data;
		$data = substr($data, strlen($start)); // Stripping $start
		$stop = stripos($data, $end); // Get position of endpoint
		$data = substr($data, 0, $stop); // Stripcode from startposition to endposition
		/*Data now contains information, including link from the first/most recent item*/
		//echo $data;
		return $data; // return the scraped data 
	}


?>



/*Run when document starts to create pagnation links */

/*  Make pagnation into this structure

			<!-- For pagination -->
			<div class="container-fluid page_list">
  				<ul class="pagination">
  				  <li><a href="#">1</a></li>
    			  <li class="active"><a href="#">2</a></li>
  				</ul>
			</div>

*/

$(document).ready(function() {
    //$("#target" ).load( "http://localhost/unofficialplayboicartiupdate/php/fetch_pages.php"); //load initial records
        $("#target" ).load( "../php/fetch_pages.php"); //load initial records
    //Loads most recent post by date and makes pagnation links
    //executes code below when user click on pagination links
    $("#target").on( "click",'.pagination-link' ,function (e){
        e.preventDefault();
        var page = $(this).attr("data-page"); //get page number from link
        console.log('Getting a new page with ' + page);
        //$("#target").load("../php/fetch_pages.php",{"page":page}, function(){ //get content from PHP page
            $("#target" ).load( "../php/fetch_pages.php"); //load initial records
        
    });
});
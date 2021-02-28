/*Scraping with php and ajax??? */
document.addEventListener("DOMContentLoaded", function() {
  ajaxScrape();
});

function ajaxScrape() {
  console.log("Calling scrape");
  $.ajax({
    //Need to change when in prod
    url: "../../php/scrape.php",
    dataType: "json",
    type: "POST",
    success: function(response) {
      if (response.error) {
        console.log("Invalid URL");
      } else {
        console.log(response);
        if (response.pic) {
          console.log("returned image");
          instertPhoto(response);
        } else {
          console.log("returned video");
          insertVideo(response);
        }
      }
    },
    error: function() {
      $(".rank").html("Invalid URL or Some Error occured!");
    },
    complete: function() {
      console.log("Done with AJAX function");
    }
  });
}

function instertPhoto(responseObject) {
  $("#main_gallery").append(responseObject["pic"]);
}

function insertVideo(responseObject) {
  $("#main_gallery").append(responseObject["vid"]);
}

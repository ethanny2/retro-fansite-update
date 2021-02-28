/*Scraping with php and ajax??? */
function ajaxScrape() {
  console.log("Calling scrape");
  $.ajax({
    //   url: 'http://localhost/unofficialplayboicartiupdate/php/scrape.php',
    url: "../php/scrape.php",
    dataType: "json",
    type: "POST",
    success: function(response) {
      if (response.hasOwnProperty("error")) {
        console.log("Invalid URL");
      } else {
        console.log(response);
        if (response.hasOwnProperty("img_url")) {
          console.log("returned image");
          instertPhoto(response);
        } else {
          console.log("returned video");
          insertVideo(response);
        }
      }
    },
    error: function(e) {
      $(".rank").html("Invalid URL or Some Error occured!");
    },
    complete: function() {
      console.log("Done with AJAX function");
    }
  });
}

function instertPhoto(responseObject) {
  var image = $(
    '<img class="carti_img slideUp" src="' + responseObject["img_url"] + '">'
  );
  $("#main_gallery").append(image);
}

function insertVideo(responseObject) {
  var vid = $(
    '<video class="carti_vid slideUp"  onmouseover="this.play()" onmouseout="this.pause()" loop></video>'
  );
  console.log(responseObject["vid_url"]);
  var source = $(
    '<source  src="' + responseObject["vid_url"] + '"type="video/mp4">'
  );
  vid.append(source);
  $("#main_gallery").append(vid);
}

/*Excluding the game*/
var timer = "";
var intervals;
var title = $("#carti_title");

var dec_right = $("#decoration_right");
var dec_left = $("#decoration_left");
$(document).ready(function() {
  // var gameLoop = 1;

  // 	if(localStorage!== "undefined"){
  // 		if(localStorage.getItem('game_loop')===null){
  // 			console.log('set game loop for the first time');
  // 			localStorage.setItem('game_loop','true');
  // 		}
  // 	}else{
  // 		console.log('Local storage not here');
  // 	}
  /* Collision detection to see if the demon touched the runner, if so game over.*/
  // if(localStorage.getItem('game_loop')==='true'){
  // 	/*Nah no cheating son */
  // 	intervals= window.setInterval(checkCollision, 1000);
  // 	if( $( window ).width() <320){
  // 		gameOverScreen();
  // 		$('#instructions').empty();
  // 		$('#instructions').append('Play Fair');
  // 		$('#instructions').css('display', 'initial');

  // 	}
  // 		$('.navbar').hide();
  // 		$('#decoration_right').hide();
  // 		$('#decoration_left').hide();
  // 		$('#carti_title').hide();
  // 		$('#note').hide();
  // 		$(".gallery_back").hide();

  // }else{
  // 		console.log('HELLLLLLLLLLLLLLLLLLLOOOOOO');
  // 		$('#runner_container').hide();
  // 		$('#demon_container').hide();
  // 		$('#instructions').hide();
  // 		console.log(title);
  // }
  // moveDemon();

  // $(document).click(function(event) {
  // 	$('#runner_container').animate({
  //        	marginLeft: "+=7px",
  //    	}, 10 );
  // });
  $("#carti_title").addClass("slideDown");
  $("#decoration_right").addClass("slideLeft");
  $("#decoration_left").addClass("slideRight");
  $("#note").addClass("slideUp");
  $(".gallery_back").addClass("slideUp");
  ajaxScrape();
});

function checkCollision() {
  var runner = $("#runner_container").get(0);
  var demon = $("#demon_container").get(0);
  var demonRect = getPosition(demon);
  var runnerRect = getPosition(runner);
  var middleRunner = $("#runner_container").width() / 2;
  var middleDemon = $("#demon_container").width() / 2;
  var runnerCollisionPoint = middleRunner + runnerRect.x;
  var runnerWinPoint = runnerRect.x + middleRunner * 2;
  var demonCollisionPoint = middleDemon + demonRect.x;
  console.log(
    "Runner col pt: " +
      runnerCollisionPoint +
      " demon col pt: " +
      demonCollisionPoint
  );
  if (localStorage.getItem("game_loop") === "true") {
    $(window).resize(function(event) {
      gameOverScreen();
      $("#instructions").empty();
      $("#instructions").append("Play Fair");
      $("#instructions").css("display", "initial");
    });
  }

  if (demonCollisionPoint >= runnerCollisionPoint) {
    // console.log('GAME OVER!!!!!!!!!11');
    // $('#runner_container').css('display', 'none');
    // $('#demon_container').css('display', 'none');
    // console.log($('body'));
    // $('body').css({
    // 	'background': 'url(' + "../gifs/flame_face.gif"+ ')no-repeat center center fixed',
    // 	 'background-size': 'cover'
    // });
    // $('#instructions').css('display', 'none');
    // stopGame();
    // localStorage.setItem('game_loop','true')
    gameOverScreen();
  } else if (runnerWinPoint >= $(window).width()) {
    localStorage.setItem("game_loop", "false");
    console.log("MADE IT");
    gameLoop = 0;
    $("#runner_container").css("display", "none");
    $("#demon_container").css("display", "none");
    $("#instructions").css("display", "none");
    $(".navbar").show();
    $("#carti_title").show();
    $("#decoration_right").show();
    $("#decoration_left").show();
    $("#note").show();
    $(".gallery_back").show();
    $(".navbar").addClass("slideLeft");
    $("#carti_title").addClass("slideDown");
    $("#decoration_right").addClass("slideLeft");
    $("#decoration_left").addClass("slideRight");
    $("#note").addClass("slideUp");
    $(".gallery_back").addClass("slideUp");
    ajaxScrape();
    stopGame();
    console.log(
      "Local storage game loop is  ---> " + localStorage.getItem("game_loop")
    );
  }
}

function stopGame() {
  console.log("Cleared interval");
  clearInterval(intervals);
}
function gameOverScreen() {
  console.log("GAME OVER!!!!!!!!!11");
  $("#runner_container").css("display", "none");
  $("#demon_container").css("display", "none");
  console.log($("body"));
  $("body").css({
    background:
      "url(" + "../gifs/flame_face.gif" + ")no-repeat center center fixed",
    "background-size": "cover"
  });
  $("#instructions").css("display", "none");
  stopGame();
  localStorage.setItem("game_loop", "true");
}

// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition() {
  // add your code to update the position when your browser
  // is resized or scrolled
}

/*Not sure yet, move runner with arrows on desktop? */
$(document).keydown(function(e) {
  switch (e.which) {
    case 37: // left
      $("#runner_container").animate(
        {
          marginLeft: "-=.35px"
        },
        10
      );
      break;
    case 39: // right
      $("#runner_container").animate(
        {
          marginLeft: "+=.35px"
        },
        10
      );
      break;

    default:
      return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

function changeColor() {
  var navItem = $(".nav.navbar-nav.navbar-right li a");
  console.log(navItem);
  navItem.css({
    "-webkit-animation": " colors  2s",
    "moz-animation": "colors  2s",
    animation: "colors  2s"
  });
}
function clearAnimation() {
  var navItem = $(".nav.navbar-nav.navbar-right li a");
  navItem.css({
    "-webkit-animation": " none",
    "moz-animation": "none",
    animation: "none"
  });
}

/*Move the demon left  */
function moveDemon() {
  console.log("moving demon");
  $("#demon_container").animate(
    {
      marginLeft: "+=1400px"
    },
    55000
  );
}

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

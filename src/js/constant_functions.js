/*Functions for use on every page */
$(document).ready(function() {
  $("#brand_img").mouseover(function(event) {
    $("audio")
      .get(0)
      .play();
    console.log("CALLING HOVER");
    timer = setInterval(changeColor, 500);
  });
  $("#brand_img").mouseout(function(event) {
    clearInterval(timer);
    clearAnimation();
  });
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

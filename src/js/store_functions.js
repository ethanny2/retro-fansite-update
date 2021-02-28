/* I could just remove jQuery but its a project dep*/
$(".design_container").on("click", function() {
  var target = $(this).children(".front");
  var back = $(this).children(".back");
  if (target.is(":visible")) {
    target.addClass("flip");
    setTimeout(() => {
      back.show();
      target.hide();
      target.removeClass("flip");
    }, 250);
  } else {
    back.addClass("flip");
    setTimeout(() => {
      target.show();
      back.hide();
      back.removeClass("flip");
    }, 250);
  }
});
